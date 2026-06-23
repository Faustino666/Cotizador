<template>
    <div class="min-h-screen bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
             <h2 class="text-lg font-semibold text-gray-700 mb-4">Historial de cotizaciones</h2>
            <section class="flex flex-col sm:flex-row gap-3 items-start sm-items-center">
                <div class="relative flex-1 max-w-sm">
                    <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"/>
                    <input
                    v-model="busqueda"
                    type="text"
                    placeholder="Buscar Servicio..."
                    class="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white">
                </div>
                <div class="flex gap-4 text-center">
                    <p class="text-gray-500 text-sm mt-1 hover:text-pink-600 cursor-pointer">categoria</p>
                    <p class="text-gray-500 text-sm mt-1 hover:text-pink-600 cursor-pointer">fecha</p>
                    <p class="text-gray-500 text-sm mt-1 hover:text-pink-600 cursor-pointer" >| 1 cotizaciones </p>
                </div>
            </section>
            <historialcard />
        </div>
    </div>
</template>

<script setup>

import historialcard from '../components/cotizador/historialcard.vue';
import { Search } from 'lucide-vue-next';

</script>
