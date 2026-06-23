<template>
  <!-- Overlay -->
  <div
    v-if="isSidebarOpen"
    @click="isSidebarOpen = false"
    class="fixed inset-0 bg-black/40 z-30"
   >

  <!-- Sidebar -->
  <div
    class="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-40"
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-4">Menú</h2>
      <ul>
        <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap">
          <router-link to="/" @click="isSidebarOpen = false">Inicio</router-link>
        </li>
        <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap">
          <router-link to="/catalogo" @click="isSidebarOpen = false">Catálogo</router-link>
        </li>
        <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap">
          <router-link to="/login" @click="isSidebarOpen = false">Login</router-link>
        </li>
        <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap">
          <router-link to="/register" @click="isSidebarOpen = false">Registro</router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const isSidebarOpen = inject('isSidebarOpen')
</script>