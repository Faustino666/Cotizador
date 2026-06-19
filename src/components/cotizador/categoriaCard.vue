<!-- src/components/cotizador/categoriaCard.vue -->
<template>
  <RouterLink
    :to="`/catalogo?categoria=${categoria.id}`"
    class="group flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl p-5 hover:border-pink-400 hover:shadow-md transition-all duration-200"
  >
    <div class="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
      <component :is="iconComponent" class="w-6 h-6 text-pink-600" :stroke-width="1.5" />
    </div>
    <span class="text-xs font-medium text-gray-700 text-center leading-tight group-hover:text-pink-700 transition-colors">
      {{ categoria.nombre }}
    </span>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { Layers, Image, Shirt, Coffee, Gift, FileText, BookOpen, MapPin, Zap, Wrench } from '@lucide/vue'

const props = defineProps({
  categoria: { type: Object, required: true },
})

const iconMap = {
  Layers, Image, Shirt, Coffee, Gift,
  FileText, BookOpen, MapPin, Zap, Wrench,
  Sticker: FileText, Stamp: FileText,
}

const iconComponent = computed(() => iconMap[props.categoria.icono] ?? FileText)
</script>