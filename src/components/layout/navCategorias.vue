<!-- src/components/layout/navCategorias.vue -->
<template>
  <nav class="bg-white border-b border-gray-200 shadow-md">
    <div class="max-w-7xl mx-auto px-4">
      <ul class="flex items-center overflow-x-auto scrollbar-hide">
        <li v-for="cat in categorias" :key="cat.id" class="flex-shrink-0">
          <RouterLink
            :to="`/catalogo?categoria=${cat.id}`"
            class="flex items-center gap-1 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-600 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-700 transition-colors whitespace-nowrap"
            active-class="text-gray-600 border-gray-600"
          >
            {{ cat.nombre }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { categorias } from '../../data/productos'
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>