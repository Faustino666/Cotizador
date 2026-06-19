<<<<<<< HEAD
=======
<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, nombre: 'Producto 1', descripcion: 'Descripción breve del producto.', precio: 299, cantidad: 2 },
  { id: 2, nombre: 'Producto 2', descripcion: 'Descripción breve del producto.', precio: 149, cantidad: 1 }
])

const aumentar = (item) => item.cantidad++
const disminuir = (item) => { if (item.cantidad > 1) item.cantidad-- }
const eliminar = (id) => { items.value = items.value.filter(i => i.id !== id) }
const total = () => items.value.reduce((acc, i) => acc + i.precio * i.cantidad, 0)
</script>

Quita el fixed y el div exterior, y también tienes un div duplicado. Déjalo así:
vue<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">

      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">Tu carrito</h2>
      </div>

      <!-- Items -->
      <div class="divide-y divide-gray-100">
        <div v-for="item in items" :key="item.id" class="flex items-start gap-4 px-6 py-4">
          <div class="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0"></div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">{{ item.nombre }}</p>
            <p class="text-xs text-gray-400 mt-0.5">{{ item.descripcion }}</p>
            <p class="text-sm font-bold text-pink-700 mt-1">${{ item.precio }}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] text-gray-400 uppercase tracking-wide">Cantidad</span>
            <div class="flex items-center gap-1">
              <button @click="disminuir(item)" class="w-6 h-6 rounded bg-gray-100 hover:bg-pink-100 hover:text-pink-700 flex items-center justify-center text-sm font-bold transition-colors">-</button>
              <span class="w-6 text-center text-sm font-semibold">{{ item.cantidad }}</span>
              <button @click="aumentar(item)" class="w-6 h-6 rounded bg-gray-100 hover:bg-pink-100 hover:text-pink-700 flex items-center justify-center text-sm font-bold transition-colors">+</button>
            </div>
            <button @click="eliminar(item.id)" class="w-6 h-6 rounded bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-400 hover:text-red-600 transition-colors">
              🗑
            </button>
          </div>
        </div>

        <div v-if="items.length === 0" class="px-6 py-10 text-center text-gray-400 text-sm">
          Tu carrito está vacío
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
        <button class="text-sm text-gray-500 hover:text-pink-700 transition-colors font-medium">
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
</template>
>>>>>>> bce5e13479c727f841bf81bbb52f88bdeec0beb7
