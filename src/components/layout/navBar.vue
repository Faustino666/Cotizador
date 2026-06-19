<template>
  <div class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <nav class="flex items-center px-4 py-3 gap-4">
      
      <!-- Botón hamburguesa -->
      <button class="hover:text-pink-700">
        <Menu :size="24" />
      </button>

      <!-- Logo -->
      <div class="text-2xl">PRINTEK</div>

      <!-- Buscador -->
      <div class="flex justify-center flex-1 mx-4">
        <div class="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:border-pink-700">
          <input
            type="text"
            placeholder="¿Que estas buscando?"
            class="flex-1 focus:outline-none text-sm text-gray-600"
          />
          <button class="text-gray-400">
            <Search :size="18" />
          </button>
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
import { RouterLink } from 'vue-router';
import { Menu, Search, User, ShoppingBag } from '@lucide/vue'

</script>
