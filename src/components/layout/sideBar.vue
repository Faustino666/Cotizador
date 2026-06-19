<template>
    <div
      class="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'">
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-4">Menú</h2>
        <ul>
          <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap"><router-link to="/">Inicio</router-link></li>
          <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap"><router-link to="/catalogo">Catálogo</router-link></li>
          <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap"><router-link to="/login">Login</router-link></li>
          <li class="py-2 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap"><router-link to="/register">Registro</router-link></li>
        </ul>
      </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

import { inject } from 'vue'

const isSidebarOpen = inject('isSidebarOpen')

</script>