<script setup>
import { ref } from 'vue'
import { FileText } from '@lucide/vue'

const items = ref([
  { id: 1, nombre: 'Vinil textil - colores basicos', descripcion: '3 metros.', precio: 299, cantidad: 2 }
])

const aumentar = (item) => item.cantidad++
const disminuir = (item) => { if (item.cantidad > 1) item.cantidad-- }
const eliminar = (id) => { items.value = items.value.filter(i => i.id !== id) }
const total = () => items.value.reduce((acc, i) => acc + i.precio * i.cantidad, 0)

const cotizar = async () => {
  // Importación dinámica para no aumentar el bundle innecesariamente
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()

  const pink = [219, 39, 119]   // pink-600
  const gray = [55, 65, 81]     // gray-700
  const lightGray = [156, 163, 175] // gray-400

  // — Encabezado —
  doc.setFillColor(...pink)
  doc.rect(0, 0, 210, 28, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  doc.text('Cotización', 14, 12)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  const fecha = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })
  doc.text(`Fecha: ${fecha}`, 14, 22)

  // — Tabla: encabezados —
  let y = 40
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...gray)
  doc.text('Producto', 14, y)
  doc.text('Descripción', 80, y)
  doc.text('Precio', 135, y)
  doc.text('Cant.', 158, y)
  doc.text('Subtotal', 175, y)

  // línea separadora
  doc.setDrawColor(...lightGray)
  doc.line(14, y + 2, 196, y + 2)
  y += 10

  // — Tabla: filas —
  doc.setFont('helvetica', 'normal')
  items.value.forEach((item, idx) => {
    if (idx % 2 === 0) {
      doc.setFillColor(249, 250, 251) // gray-50
      doc.rect(12, y - 5, 184, 10, 'F')
    }
    doc.setTextColor(...gray)
    doc.text(item.nombre, 14, y, { maxWidth: 62 })
    doc.setTextColor(...lightGray)
    doc.text(item.descripcion, 80, y, { maxWidth: 50 })
    doc.setTextColor(...gray)
    doc.text(`$${item.precio}`, 135, y)
    doc.text(`${item.cantidad}`, 160, y)
    doc.setTextColor(...pink)
    doc.setFont('helvetica', 'bold')
    doc.text(`$${item.precio * item.cantidad}`, 175, y)
    doc.setFont('helvetica', 'normal')
    y += 12
  })

  // — Total —
  y += 4
  doc.setDrawColor(...pink)
  doc.line(130, y, 196, y)
  y += 8
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...gray)
  doc.text('Total:', 135, y)
  doc.setTextColor(...pink)
  doc.text(`$${total()}`, 175, y)

  // — Pie de página —
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...lightGray)
  doc.text('Esta cotización es válida por 15 días naturales.', 14, 285)

  doc.save(`cotizacion-${Date.now()}.pdf`)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">

      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">Tu carrito</h2>
      </div>

      <!-- Items -->
      <div class="divide-y divide-gray-100">
        <div v-for="item in items" :key="item.id" class="flex items-start gap-4 px-6 py-4">
          <div class="w-14 h-14 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center">
            <FileText class="w-6 h-6 text-gray-300" :stroke-width="1.5" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">{{ item.nombre }}</p>
            <p class="text-xs text-gray-400 mt-0.5">{{ item.descripcion }}</p>
            <p class="text-sm font-bold text-pink-600 mt-1">${{ item.precio }}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] text-gray-400 uppercase tracking-wide">Cantidad</span>
            <div class="flex items-center gap-1">
              <button @click="disminuir(item)" class="w-6 h-6 rounded bg-gray-100 hover:bg-pink-100 hover:text-pink-600 flex items-center justify-center text-sm font-bold transition-colors">-</button>
              <span class="w-6 text-center text-sm font-semibold">{{ item.cantidad }}</span>
              <button @click="aumentar(item)" class="w-6 h-6 rounded bg-gray-100 hover:bg-pink-100 hover:text-pink-600 flex items-center justify-center text-sm font-bold transition-colors">+</button>
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
        <button class="text-sm text-gray-500 hover:text-pink-600 transition-colors font-medium">
          Cancelar
        </button>
        <div class="flex items-center gap-3">
          <span class="text-sm font-semibold text-gray-700">
            Total: <span class="text-pink-700">${{ total() }}</span>
          </span>
          <button
            @click="cotizar"
            :disabled="items.length === 0"
            class="bg-pink-600 hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Cotizar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>