<!-- src/components/layout/userMenu.vue -->
<template>
  <div class="relative">

    <!-- Botón disparador -->
    <button
      @click="abierto = !abierto"
      class="hover:text-pink-700 transition-colors"
    >
      <User :size="24" />
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-if="abierto"
        class="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
      >
        <!-- Flecha decorativa -->
        <div class="absolute -top-2 right-3 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

        <ul class="relative">
          <li>
            <RouterLink
              to="/login"
              @click="abierto = false"
              class="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
            >
              <LogIn class="w-4 h-4" />
              Iniciar sesión
            </RouterLink>
          </li>

          <li class="border-t border-gray-100 mt-1 pt-1">
            <RouterLink
              to="/historial/cotizaciones"
              @click="abierto = false"
              class="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
            >
              <ClipboardList class="w-4 h-4" />
              Historial de cotizaciones
            </RouterLink>
          </li>

          <li class="border-t border-gray-100 mt-1 pt-1">
            <RouterLink
            to="/gesadmin"
            @click="abierto = false"
            class="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
            >
              <SquareUser class="w-4 h-4"/>
              Administradoor
            </RouterLink>
          </li>

          <li class="border-t border-gray-100 mt-1 pt-1">
            <button
              @click="abierto = false"
              class="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
            >
              <LogOut class="w-4 h-4" />
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </Transition>

    <!-- Click fuera para cerrar -->
    <div v-if="abierto" @click="abierto = false" class="fixed inset-0 z-40" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, LogIn, LogOut, ClipboardList, SquareUser } from '@lucide/vue'

const abierto = ref(false)
</script>