<!-- src/components/layout/sideBar.vue -->
<template>
  <!-- Overlay -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
    />
  </Transition>

  <!-- Sidebar -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="-translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="-translate-x-full opacity-0"
  >
    <div
      v-if="isSidebarOpen"
      class="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-40 flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <span class="text-xl font-bold text-gray-900">PRINTEK</span>
        <button
          @click="isSidebarOpen = false"
          class="p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Nav links -->
      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto">

        <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest px-3 mb-3">Navegación</p>

        <RouterLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          @click="isSidebarOpen = false"
          class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-700 transition-colors group"
          active-class="bg-pink-50 text-pink-700"
        >
          <div class="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-pink-100 flex items-center justify-center transition-colors">
            <component :is="item.icono" class="w-4 h-4" />
          </div>
          {{ item.nombre }}
        </RouterLink>

      </nav>

      <!-- Footer del sidebar -->
      <div class="px-6 py-4 border-t border-gray-100">
        <p class="text-xs text-gray-400 text-center">© {{ new Date().getFullYear() }} Printek</p>
      </div>

    </div>
  </Transition>
</template>

<script setup>
import { inject } from 'vue'
import { X, Home, LayoutGrid, LogIn, UserPlus } from '@lucide/vue'

const isSidebarOpen = inject('isSidebarOpen')

const links = [
  { to: '/',        nombre: 'Inicio',    icono: Home },
  { to: '/catalogo', nombre: 'Catálogo', icono: LayoutGrid },
  { to: '/login',   nombre: 'Login',     icono: LogIn },
  { to: '/register', nombre: 'Registro', icono: UserPlus },
]
</script>