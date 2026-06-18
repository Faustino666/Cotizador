<script setup>
import { Wrench, User, Phone, BookOpen, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <header class="w-full rounded-t-lg bg-white flex items-center justify-between px-8 py-3">
    <a class="text-2xl cursor-pointer transition-colors hover:text-pink-700">PRINTEK</a>

    <nav class="flex items-center gap-7">
      <a href="#" class="flex items-center gap-1.5 text-sm text-gray-600 hover:text-pink-700 transition-colors">
        <Wrench :size="16" /> Servicios
      </a>
      <a href="#" class="flex items-center gap-1.5 text-sm text-gray-600 hover:text-pink-700 transition-colors">
        <User :size="16" /> Nosotros
      </a>
      <a href="#" class="flex items-center gap-1.5 text-sm text-gray-600 hover:text-pink-700 transition-colors">
        <Phone :size="16" /> Contacto
      </a>
      <a href="#" class="flex items-center gap-1.5 text-sm text-gray-600 hover:text-pink-700 transition-colors">
        <BookOpen :size="16" /> Catálogo
      </a>
    </nav>

    <button class="cursor-pointer bg-pink-700 hover:bg-pink-800 text-white text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-2 transition-colors tracking-wide">
      COTIZAR <ArrowRight :size="16" />
    </button>
  </header>
</template>