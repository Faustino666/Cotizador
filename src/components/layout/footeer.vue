<!-- src/components/layout/footer.vue -->
<template>
  <footer class="bg-gray-900 text-gray-400 mt-16">
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

      <!-- Marca -->
      <div>
        <h3 class="text-white text-lg font-bold mb-2">PRINTEK</h3>
        <p class="text-sm leading-relaxed">
          Soluciones de impresión y sublimación para empresas y particulares.
        </p>
      </div>

      <!-- Navegación -->
      <div>
        <h4 class="text-white text-sm font-semibold mb-3 uppercase tracking-wide">Servicios</h4>
        <ul class="space-y-2 text-sm">
          <li v-for="cat in categorias.slice(0, 6)" :key="cat.id">
            <RouterLink
              :to="`/catalogo?categoria=${cat.id}`"
              class="hover:text-white transition-colors"
            >
              {{ cat.nombre }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contacto -->
      <div>
        <h4 class="text-white text-sm font-semibold mb-3 uppercase tracking-wide">Contacto</h4>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2">
            <Phone class="w-4 h-4 flex-shrink-0" />
            <span>+52 000 000 0000</span>
          </li>
          <li class="flex items-center gap-2">
            <Mail class="w-4 h-4 flex-shrink-0" />
            <span>contacto@printek.mx</span>
          </li>
          <li class="flex items-center gap-2">
            <MapPin class="w-4 h-4 flex-shrink-0" />
            <span>Zacatecas, México</span>
          </li>
        </ul>
      </div>

    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800 py-4 text-center text-xs">
      © {{ new Date().getFullYear() }} Printek. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
import { Phone, Mail, MapPin } from '@lucide/vue'
import { categorias } from '../../data/productos'
</script>