<!-- src/views/Catalogo.vue -->
<template>
  <div class="min-h-screen bg-gray-50">

    <!-- ── Banner hero ──────────────────────────────────────────────── -->
    <section class="bg-white border-b border-gray-100 py-8 px-6">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Catálogo de Servicios</h1>
          <p class="text-gray-500 text-sm mt-1">Encuentra el servicio que necesitas y cotiza al instante</p>
        </div>
        <!-- Contador -->
        <div class="flex gap-6 text-center">
          <div>
            <p class="text-2xl font-bold text-pink-600">{{ productos.length }}</p>
            <p class="text-xs text-gray-400 uppercase tracking-wide">Servicios</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-pink-600">{{ categorias.length }}</p>
            <p class="text-xs text-gray-400 uppercase tracking-wide">Categorías</p>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">

      <!-- ── Categorías ──────────────────────────────────────────────── -->
      <section>
        <h2 class="text-lg font-semibold text-gray-700 mb-4">Categorías</h2>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          <CategoriaCard
            v-for="cat in categorias"
            :key="cat.id"
            :categoria="cat"
          />
        </div>
      </section>

      <!-- ── Barra de filtros ────────────────────────────────────────── -->
      <section class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <!-- Búsqueda -->
        <div class="relative flex-1 max-w-sm">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            v-model="busqueda"
            type="text"
            placeholder="Buscar servicio..."
            class="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
          />
        </div>

        <!-- Filtro por categoría -->
        <select
          v-model="categoriaSeleccionada"
          class="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 text-gray-600"
        >
          <option value="">Todas las categorías</option>
          <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
            {{ cat.nombre }}
          </option>
        </select>

        <!-- Limpiar filtros -->
        <button
          v-if="busqueda || categoriaSeleccionada"
          @click="limpiarFiltros"
          class="text-sm text-pink-600 hover:text-pink-800 flex items-center gap-1"
        >
          <X class="w-4 h-4" /> Limpiar
        </button>
      </section>

      <!-- ── Grid de productos ───────────────────────────────────────── -->
      <section>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-700">
            {{ categoriaSeleccionada
              ? categorias.find(c => c.id === categoriaSeleccionada)?.nombre
              : 'Todos los servicios' }}
          </h2>
          <span class="text-sm text-gray-400">{{ productosFiltrados.length }} resultado{{ productosFiltrados.length !== 1 ? 's' : '' }}</span>
        </div>

        <!-- Con resultados -->
        <div
          v-if="productosFiltrados.length"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <ProductoCard
            v-for="producto in productosPaginados"
            :key="producto.id"
            :producto="producto"
          />
        </div>

        <!-- Sin resultados -->
        <div v-else class="flex flex-col items-center justify-center py-20 text-center">
          <SearchX class="w-12 h-12 text-gray-300 mb-3" />
          <p class="text-gray-500 font-medium">No se encontraron servicios</p>
          <p class="text-gray-400 text-sm mt-1">Intenta con otros términos o limpia los filtros</p>
        </div>
      </section>

      <!-- ── Paginación ──────────────────────────────────────────────── -->
      <div v-if="totalPaginas > 1" class="flex justify-center items-center gap-2">
        <button
          @click="paginaActual--"
          :disabled="paginaActual === 1"
          class="p-2 rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-100 transition"
        >
          <ChevronLeft class="w-4 h-4 text-gray-600" />
        </button>

        <button
          v-for="n in totalPaginas"
          :key="n"
          @click="paginaActual = n"
          :class="[
            'w-9 h-9 rounded-lg text-sm font-medium transition',
            paginaActual === n
              ? 'bg-pink-600 text-white'
              : 'border border-gray-200 text-gray-600 hover:bg-gray-100'
          ]"
        >
          {{ n }}
        </button>

        <button
          @click="paginaActual++"
          :disabled="paginaActual === totalPaginas"
          class="p-2 rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-100 transition"
        >
          <ChevronRight class="w-4 h-4 text-gray-600" />
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Search, SearchX, X, ChevronLeft, ChevronRight } from '@lucide/vue'
import CategoriaCard from '../components/cotizador/CategoriaCard.vue'
import ProductoCard  from '../components/cotizador/ProductoCard.vue'
import { categorias, productos } from '../data/productos'

// ── Estado ──────────────────────────────────────────────────────────
const busqueda             = ref('')
const categoriaSeleccionada = ref('')
const paginaActual          = ref(1)
const porPagina             = 10

// ── Filtrado ─────────────────────────────────────────────────────────
const productosFiltrados = computed(() => {
  return productos.filter(p => {
    const coincideCategoria = !categoriaSeleccionada.value || p.categoria === categoriaSeleccionada.value
    const coincideBusqueda  = !busqueda.value ||
      p.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })
})

// ── Paginación ────────────────────────────────────────────────────────
const totalPaginas = computed(() => Math.ceil(productosFiltrados.value.length / porPagina))

const productosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * porPagina
  return productosFiltrados.value.slice(inicio, inicio + porPagina)
})

// Reset página al filtrar
watch([busqueda, categoriaSeleccionada], () => { paginaActual.value = 1 })

function limpiarFiltros() {
  busqueda.value = ''
  categoriaSeleccionada.value = ''
}
</script>