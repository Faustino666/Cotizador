<script setup>
import navBar from './components/layout/navBar.vue';
import navCategorias from './components/layout/navCategorias.vue';
import footeer from './components/layout/footeer.vue';
import Catalogo from './views/Catalogo.vue';
</script>

<template>
    <navBar />
    <navCategorias />
    <RouterView />
    <footeer />
</template>
