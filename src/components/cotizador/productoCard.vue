<!-- src/components/cotizador/productoCard.vue -->
<template>
  <RouterLink
    :to="`/producto/${producto.id}`"
    class="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-pink-400 hover:shadow-md transition-all duration-200"
  >
    <!-- Imagen placeholder -->
    <div class="aspect-square bg-gray-100 flex items-center justify-center group-hover:bg-pink-50 transition-colors">
      <component :is="iconComponent" class="w-10 h-10 text-gray-300 group-hover:text-pink-300 transition-colors" :stroke-width="1" />
    </div>

    <!-- Info -->
    <div class="p-3 space-y-1">
      <p class="text-xs text-pink-600 font-medium uppercase tracking-wide truncate">
        {{ nombreCategoria }}
      </p>
      <h3 class="text-sm font-semibold text-gray-800 leading-snug group-hover:text-pink-700 transition-colors line-clamp-2">
        {{ producto.nombre }}
      </h3>
      <p class="text-xs text-gray-400">
        {{ producto.variantes.length }} variante{{ producto.variantes.length !== 1 ? 's' : '' }}
      </p>
      <div v-if="precio !== null" class="pt-1">
        <span class="text-xs text-gray-400">Desde</span>
        <p class="text-base font-bold text-gray-900">${{ formatPrecio(precio) }}</p>
      </div>
      <p v-else class="text-sm text-gray-400 italic pt-1">Precio a consultar</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { Layers, Image, Shirt, Coffee, Gift, FileText, BookOpen, MapPin, Zap, Wrench } from '@lucide/vue'
import { categorias, precioMinimo } from '../../data/productos'

const props = defineProps({
  producto: { type: Object, required: true },
})

const iconMap = {
  viniles: Layers, lonas: Image, textiles: Shirt,
  sublimacion: Coffee, promocionales: Gift,
  calcomanias: FileText, impresos: FileText,
  libretas: BookOpen, senaletica: MapPin,
  sellos: FileText, anuncios: Zap, servicios: Wrench,
}

const iconComponent = computed(() => iconMap[props.producto.categoria] ?? FileText)
const nombreCategoria = computed(() => categorias.find(c => c.id === props.producto.categoria)?.nombre ?? '')
const precio = computed(() => precioMinimo(props.producto))

function formatPrecio(n) {
  return n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
</script>