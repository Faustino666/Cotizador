<script setup>
import { ref, provide } from 'vue'
import navBar from './components/layout/navBar.vue';
import navCategorias from './components/layout/navCategorias.vue';
import footeer from './components/layout/footeer.vue';
import Catalogo from './views/Catalogo.vue';
import { Form } from 'lucide-vue-next';
import SideBar from './components/layout/sideBar.vue';

const isSidebarOpen = ref(false)
provide('isSidebarOpen', isSidebarOpen)

</script>

<template>
    <navBar />
    <SideBar />
    <navCategorias />
    <RouterView />
    <footeer />
</template>
