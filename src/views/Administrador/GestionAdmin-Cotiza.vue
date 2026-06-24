<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const busqueda = ref('')
const paginaActual = ref(1)
const porPagina = 3

const usuarios = ref([
  {
    id: 1,
    nombre: 'Carlos Mendoza',
    correo: 'carlos.mendoza@gmail.com',
    avatar: 'CM',
    cotizacionesPendientes: 3,
    cotizacionesAceptadas: 7,
    estado: 'activo'
  },
  {
    id: 2,
    nombre: 'Laura Jiménez',
    correo: 'laura.jimenez@outlook.com',
    avatar: 'LJ',
    cotizacionesPendientes: 1,
    cotizacionesAceptadas: 2,
    estado: 'activo'
  },
  {
    id: 3,
    nombre: 'Roberto Sánchez',
    correo: 'roberto.s@empresa.mx',
    avatar: 'RS',
    cotizacionesPendientes: 5,
    cotizacionesAceptadas: 12,
    estado: 'inactivo'
  },
  {
    id: 4,
    nombre: 'María Torres',
    correo: 'maria.torres@hotmail.com',
    avatar: 'MT',
    cotizacionesPendientes: 0,
    cotizacionesAceptadas: 4,
    estado: 'activo'
  },
  {
    id: 5,
    nombre: 'Diego Ramírez',
    correo: 'diego.r@gmail.com',
    avatar: 'DR',
    cotizacionesPendientes: 2,
    cotizacionesAceptadas: 1,
    estado: 'activo'
  },
  {
    id: 6,
    nombre: 'Ana Flores',
    correo: 'ana.flores@empresa.mx',
    avatar: 'AF',
    cotizacionesPendientes: 4,
    cotizacionesAceptadas: 9,
    estado: 'inactivo'
  },
])

const totalClientes = computed(() => usuarios.value.length)
const totalPendientes = computed(() => usuarios.value.reduce((a, u) => a + u.cotizacionesPendientes, 0))
const totalAceptadas = computed(() => usuarios.value.reduce((a, u) => a + u.cotizacionesAceptadas, 0))

const filtrados = computed(() => {
  const q = busqueda.value.toLowerCase()
  return usuarios.value.filter(u =>
    u.nombre.toLowerCase().includes(q) ||
    u.correo.toLowerCase().includes(q)
  )
})

const totalPaginas = computed(() => Math.ceil(filtrados.value.length / porPagina))

const paginados = computed(() => {
  const inicio = (paginaActual.value - 1) * porPagina
  return filtrados.value.slice(inicio, inicio + porPagina)
})

const colorAvatar = (id) => {
  const colores = [
    'bg-pink-100 text-pink-700',
    'bg-blue-100 text-blue-700',
    'bg-yellow-100 text-yellow-700',
    'bg-green-100 text-green-700',
    'bg-purple-100 text-purple-700',
    'bg-orange-100 text-orange-700',
  ]
  return colores[id % colores.length]
}

const verDetalles = (usuario) => {
  alert(`Ver detalles de ${usuario.nombre}`)
}

const cambiarPagina = (p) => {
  if (p >= 1 && p <= totalPaginas.value) paginaActual.value = p
}
</script>

<template>
  <main class="min-h-screen bg-gray-50 py-10 px-4">

    <!-- Título -->
    <div class="max-w-4xl mx-auto mb-8">
      <h1
        class="text-5xl font-bold bg-linear-to-r from-pink-700 via-blue-500 to-yellow-500 bg-clip-text text-transparent"
        style="font-family: 'Poppins', sans-serif;"
      >
        Gestión de usuarios
      </h1>
      <p class="text-sm text-gray-400 mt-1">Administra clientes y sus cotizaciones</p>
    </div>

    <div class="max-w-4xl mx-auto flex flex-col gap-6">

      <!-- Tarjetas de resumen -->
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 flex flex-col gap-1">
          <span class="text-3xl font-bold text-gray-800">{{ totalClientes }}</span>
          <span class="text-xs text-gray-400 uppercase tracking-widest font-semibold">Total clientes</span>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 flex flex-col gap-1">
          <span class="text-3xl font-bold text-yellow-500">{{ totalPendientes }}</span>
          <span class="text-xs text-gray-400 uppercase tracking-widest font-semibold">Cotizaciones Pendientes</span>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 flex flex-col gap-1">
          <span class="text-3xl font-bold text-pink-600">{{ totalAceptadas }}</span>
          <span class="text-xs text-gray-400 uppercase tracking-widest font-semibold">Cotizaciones Aceptadas</span>
        </div>
      </div>

      <!-- Buscador -->
      <div class="relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          v-model="busqueda"
          type="text"
          placeholder="Buscar por nombre o correo..."
          class="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-pink-600 transition-colors bg-white shadow-sm"
          @input="paginaActual = 1"
        />
      </div>

      <!-- Lista de usuarios -->
      <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div class="divide-y divide-gray-100">
          <div
            v-for="usuario in paginados"
            :key="usuario.id"
            class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <!-- Avatar -->
            <div :class="`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${colorAvatar(usuario.id)}`">
              {{ usuario.avatar }}
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <p class="text-sm font-semibold text-gray-800">{{ usuario.nombre }}</p>
                <span
                  :class="usuario.estado === 'activo'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-400'"
                  class="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
                >
                  {{ usuario.estado }}
                </span>
              </div>
              <p class="text-xs text-gray-400 mt-0.5 truncate">{{ usuario.correo }}</p>
              <div class="flex items-center gap-3 mt-1.5">
                <span class="flex items-center gap-1 text-[11px] text-yellow-600 font-medium">
                  <span class="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                  {{ usuario.cotizacionesPendientes }} pendientes
                </span>
                <span class="flex items-center gap-1 text-[11px] text-pink-600 font-medium">
                  <span class="w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
                  {{ usuario.cotizacionesAceptadas }} aceptadas
                </span>
              </div>
            </div>

            <!-- Botón -->
            <button
              @click="verDetalles(usuario)"
              class="flex-shrink-0 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Ver detalles
            </button>
          </div>

          <div v-if="paginados.length === 0" class="px-6 py-10 text-center text-gray-400 text-sm">
            No se encontraron usuarios
          </div>
        </div>
      </div>

      <!-- Paginación -->
      <div v-if="totalPaginas > 1" class="flex items-center justify-center gap-1">
        <button
          @click="cambiarPagina(paginaActual - 1)"
          :disabled="paginaActual === 1"
          class="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >‹</button>
        <button
          v-for="p in totalPaginas"
          :key="p"
          @click="cambiarPagina(p)"
          :class="p === paginaActual
            ? 'bg-pink-600 text-white'
            : 'text-gray-500 hover:bg-gray-100'"
          class="w-8 h-8 rounded-lg text-sm font-semibold transition-colors"
        >
          {{ p }}
        </button>
        <button
          @click="cambiarPagina(paginaActual + 1)"
          :disabled="paginaActual === totalPaginas"
          class="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >›</button>
      </div>

    </div>
  </main>
</template>