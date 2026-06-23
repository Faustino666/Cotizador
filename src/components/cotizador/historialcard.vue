<!-- src/components/cotizador/cotizacionCard.vue -->
<template>
  <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

    <!-- Fecha -->
    <p class="text-xs text-gray-400 mb-3">12 de junio, 2025</p>

    <hr class="border-gray-100 mb-4" />

    <!-- Contenido -->
    <div class="flex items-center gap-4">

      <!-- Imagen placeholder -->
      <div class="w-14 h-14 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center">
        <FileText class="w-6 h-6 text-gray-300" :stroke-width="1.5" />
      </div>

      <!-- Info -->
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-800 truncate">Vinil Textil — Colores básicos</p>
        <p class="text-xs text-gray-500 mt-0.5">Categoría: Viniles</p>
        <p class="text-xs text-gray-400 mt-0.5">Cantidad: 3 metros</p>
      </div>

      <!-- Precio + Botones -->
      <div class="flex flex-col items-end gap-2 flex-shrink-0">
        <p class="text-base font-bold text-gray-900">$299</p>
        <div class="flex flex-col gap-1">
          <RouterLink to="/catalago/carrito" class="text-xs px-4 py-1.5 border border-gray-300 rounded-lg text-gray-600 hover:border-pink-400 hover:text-purple-pink transition-colors">
            Ver cotización
          </RouterLink>
          <RouterLink to="/catalago/carrito" class="text-xs px-4 py-1.5 bg-pink-600 rounded-lg text-white hover:bg-pink-700 transition-colors">
            Volver a cotizar
          </RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { FileText } from '@lucide/vue'
</script>