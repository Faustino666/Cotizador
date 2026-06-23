<template>
  <div class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <nav class="flex items-center px-4 py-3 gap-4">
      
      <!-- Botón hamburguesa -->
      <button @click="toggleMenu" class="hover:text-pink-700">
        <Menu :size="24" />
      </button>

      <!-- Logo -->
      <div class="text-2xl">
        <RouterLink to="/historial/cotizaciones">
          PRINTEK
        </RouterLink>
      </div>

      <!-- Buscador -->
      <div class="flex justify-center flex-1 mx-4">
        <div class="relative flex-1 max-w-sm">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"/>
          <input
            type="text"
            placeholder="¿Que estas buscando?"
            class="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
          />
        </div>
      </div>

      <!-- Iconos derecha -->
      <div class="flex items-center space-x-4">
        <RouterLink to="/login" class="hover:text-pink-700">
            <User :size="24" />
        </RouterLink>
        <RouterLink to="/catalago/carrito" class="hover:text-pink-700">
            <ShoppingBag :size="24"/>
        </RouterLink>
      </div>

    </nav>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router';
import { Menu, Search, User, ShoppingBag } from '@lucide/vue'

const isSidebarOpen = inject('isSidebarOpen')

function toggleMenu() {
  isSidebarOpen.value = !isSidebarOpen.value
}



</script>
