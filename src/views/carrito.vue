<script setup>
import { ref } from 'vue'
import { Trash2, Plus, Minus, X } from 'lucide-vue-next'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

const cerrar = () => emit('update:modelValue', false)

const items = ref([
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción breve del producto que se muestra en el carrito.',
    precio: 299,
    cantidad: 2,
    imagen: null
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción breve del segundo producto del carrito.',
    precio: 149,
    cantidad: 1,
    imagen: null
  }
])

const aumentar = (item) => item.cantidad++
const disminuir = (item) => { if (item.cantidad > 1) item.cantidad-- }
const eliminar = (id) => { items.value = items.value.filter(i => i.id !== id) }

const total = () => items.value.reduce((acc, i) => acc + i.precio * i.cantidad, 0)
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center px-4"
      @click.self="cerrar"
    >
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg z-50 overflow-hidden">

        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-800">Tu carrito</h2>
          <button @click="cerrar" class="text-gray-400 hover:text-pink-700 transition-colors">
            <X :size="20" />
          </button>
        </div>

        <div class="divide-y divide-gray-100 max-h-80 overflow-y-auto">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex items-start gap-4 px-6 py-4"
          >
            <div class="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300 text-xs">
              IMG
            </div>

            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">{{ item.nombre }}</p>
              <p class="text-xs text-gray-400 mt-0.5 line-clamp-2">{{ item.descripcion }}</p>
              <p class="text-sm font-bold text-pink-700 mt-1">${{ item.precio }}</p>
            </div>

            <div class="flex flex-col items-end gap-2 flex-shrink-0">
              <span class="text-[11px] text-gray-400 uppercase tracking-wide">Cantidad</span>
              <div class="flex items-center gap-1">
                <button
                  @click="disminuir(item)"
                  class="w-6 h-6 rounded bg-gray-100 hover:bg-pink-100 flex items-center justify-center text-gray-600 hover:text-pink-700 transition-colors"
                >
                  <Minus :size="12" />
                </button>
                <span class="w-6 text-center text-sm font-semibold text-gray-800">{{ item.cantidad }}</span>
                <button
                  @click="aumentar(item)"
                  class="w-6 h-6 rounded bg-gray-100 hover:bg-pink-100 flex items-center justify-center text-gray-600 hover:text-pink-700 transition-colors"
                >
                  <Plus :size="12" />
                </button>
              </div>
              <button
                @click="eliminar(item.id)"
                class="w-6 h-6 rounded bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-400 hover:text-red-600 transition-colors"
              >
                <Trash2 :size="12" />
              </button>
            </div>
          </div>

          <div v-if="items.length === 0" class="px-6 py-10 text-center text-gray-400 text-sm">
            Tu carrito está vacío
          </div>
        </div>

        <div class="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            @click="cerrar"
            class="text-sm text-gray-500 hover:text-pink-700 transition-colors font-medium"
          >
            Cancelar
          </button>
          <div class="flex items-center gap-3">
            <span class="text-sm font-semibold text-gray-700">
              Total: <span class="text-pink-700">${{ total() }}</span>
            </span>
            <button class="bg-pink-700 hover:bg-pink-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
              Cotizar
            </button>
          </div>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>