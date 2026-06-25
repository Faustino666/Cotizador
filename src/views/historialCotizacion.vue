<script setup>
import { FileText, Search } from '@lucide/vue'
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'


const busqueda = ref('')
const paginaActual = ref(1)
const porPagina = 3

const cotizacion = ref([
  {
    id: 1,
    nombre: 'Vinil Textil',
    correo: 'Textura mate',
    categoria: 'Lonas y Barricadas',
    cantidad: '2',
    fecha: '12 junio 2026'
  },
  {
    id: 2,
    nombre: 'Playera Sublimadas',
    correo: 'Estampado the beatles',
    categoria: 'Subliminacion',
    cantidad: '25',
    fecha: '25 junio 2026'
  },
  {
    id: 3,
    nombre: 'Calcamonias',
    correo: 'Opalina',
    categoria: 'Calcamonias/Stickers',
    cantidad: '500',
    fecha: '8 julio 2026'
  },
  {
    id: 4,
    nombre: 'Tarjeta de presentacion',
    correo: 'Tarjeta de cumpleaños',
    categoria: 'Impresos',
    cantidad: '10',
    fecha: '20 julio 2026'
  },
  {
    id: 5,
    nombre: 'Agenda personalizada',
    correo: 'Colores basicos',
    categoria: 'Libretas/Agendas',
    cantidad: '200',
    fecha: '5 agosto 2026'
  },
  {
    id: 6,
    nombre: 'Letrero personalizado',
    correo: 'No fumar',
    categoria: 'Vinil',
    cantidad: '1',
    fecha: '28 septiembre 2025'
  },
])

const totalCotizacion = computed(() => cotizacion.value.length)
const categoria = computed(() => cotizacion.value.length)
const cantidad = computed(() => cotizacion.value.length)
const fecha = computed(() => cotizacion.value.length)

const filtrados = computed(() => {
  const q = busqueda.value.toLowerCase()
  return cotizacion.value.filter(u =>
    u.nombre.toLowerCase().includes(q) ||
    u.categoria.toLowerCase().includes(q) 
  )
})

const totalPaginas = computed(() => Math.ceil(filtrados.value.length / porPagina))

const paginados = computed(() => {
  const inicio = (paginaActual.value - 1) * porPagina
  return filtrados.value.slice(inicio, inicio + porPagina)
})


const verDetalles = (cotizacion) => {
  alert(`Ver detalles de ${cotizacion.nombre}`)
}

const cambiarPagina = (p) => {
  if (p >= 1 && p <= totalPaginas.value) paginaActual.value = p
}
</script>
<template>
  <main class="min-h-screen bg-gray-50 py-9 px-4">
    <div class="max-w-4xl mx-auto flex flex-col gap-6">
      <h2 class="text-lg font-semibold text-gray-700">Historial de cotizaciones</h2>
        <section class="flex flex-col sm:flex-row gap-3 items-start sm-items-center">
          <div class="relative flex-1 max-w-sm">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"/>
            <input
              v-model="busqueda"
              type="text"
              placeholder="Buscar Servicio..."
              class="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
              @input="paginaActual = 1">
          </div>
            <span class="flex gap-3 text-center">
              <p class="text-gray-500 text-sm mt-1 hover:text-pink-600 cursor-pointer">categoria</p>
              <p class="text-gray-500 text-sm mt-1 hover:text-pink-600 cursor-pointer">fecha</p>
              <p class="text-gray-500 text-sm mt-1"> || </p>
              <p class="text-gray-500 text-sm mt-1 hover:text-pink-600 cursor-pointer" > {{  totalCotizacion }} cotizaciones</p>
            </span>
         </section>

      <!-- Lista de usuarios -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <div class="divide-y divide-gray-100">
          <div
            v-for="cotizacion in paginados"
            :key="cotizacion.id"
            class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <!-- imagen placeholder -->
            <div class="flex-1 min-w-0">
              <p class="text-xs text-gray-400 mb-3">{{ cotizacion.fecha }}</p>
              <div class="flex items-center gap-2">
                <div class="w-14 h-14 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                <FileText class="w-6 h-6 text-gray-300" :stroke-width="1.5" />
                </div>
                <p class="text-sm font-semibold text-gray-800">{{ cotizacion.nombre }}</p>
              </div>
              <p class="text-xs text-gray-400 mt-0.5 truncate">{{ cotizacion.correo }}</p>
              <div class="flex items-center gap-3 mt-1.5">
                <span class="flex items-center gap-1 text-[11px] text-yellow-600 font-medium">
                  <span class="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                  Categoria: {{ cotizacion.categoria }}
                </span>
                <span class="flex items-center gap-1 text-[11px] text-pink-600 font-medium">
                  <span class="w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
                   Cantidad: {{ cotizacion.cantidad }} piezas
                </span>
              </div>
            </div>
            
            <div class="flex flex-col gap-1">
            <!-- Botón -->
              <RouterLink to="/catalago/carrito" class="text-xs px-4 py-1.5 border border-gray-300 rounded-lg text-gray-600 hover:border-pink-400 hover:text-purple-pink transition-colors">
                Ver cotización
              </RouterLink>
              <RouterLink to="/catalago/carrito" class="text-xs px-4 py-1.5 bg-pink-600 rounded-lg text-white hover:bg-pink-700 transition-colors">
                Volver a cotizar
              </RouterLink>
            </div>
          </div>

          <div v-if="paginados.length === 0" class="px-6 py-10 text-center text-gray-400 text-sm">
            No se encontraron la cotizacion
          </div>
        </div>
      </div>

      <!-- Paginación -->
      <div v-if="totalPaginas > 1" class="flex items-center justify-center gap-2">
        <button
          @click="cambiarPagina(paginaActual - 1)"
          :disabled="paginaActual === 1"
          class="p-2 rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-100 transition"
        >‹</button>
        <button
          v-for="p in totalPaginas"
          :key="p"
          @click="cambiarPagina(p)"
          :class="p === paginaActual
            ? 'bg-pink-600 text-white'
            : 'border border-gray-200 text-gray-600 hover:bg-gray-100'"
          class="w-9 h-9 rounded-lg text-sm font-medium transition"
        >
          {{ p }}
        </button>
        <button
          @click="cambiarPagina(paginaActual + 1)"
          :disabled="paginaActual === totalPaginas"
          class="p-2 rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-100 transition"
        >›</button>
      </div>
    </div>
  </main>
</template>