<template>
  <main class="rounded-b-lg bg-gray-50 flex flex-col items-center py-12 px-4">
   <h1 class="text-7xl font-bold bg-linear-to-r from-pink-700 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-8"
    style="font-family: 'Poppins', sans-serif;">
  Inicia sesión
</h1>

    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-9 w-full max-w-sm flex flex-col gap-5">

      <div class="flex flex-col gap-1.5">
        <label class="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">
          Correo electrónico
        </label>
        <input
          v-model="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-fuchsia-600 transition-colors"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">
          Contraseña
        </label>
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="••••••••"
          class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-fuchsia-600 transition-colors"
        />
      </div>

      <label class="flex items-center gap-2 text-sm text-gray-500 cursor-pointer select-none">
        <input
          v-model="showPassword"
          type="checkbox"
          class="accent-pink-700 w-4 h-4 cursor-pointer"
        />
        Mostrar contraseña
      </label>

      <button
        @click="handleLogin"
        class="w-full bg-pink-700 hover:bg-pink-800 text-white font-semibold text-sm py-3 rounded-full transition-colors tracking-wide mt-1"
      >
        Siguiente
      </button>

      <p class="text-sm text-center text-gray-500">
        ¿Aún no te has registrado?
        <a href="#" class="text-pink-700 font-medium hover:underline">Accede aquí</a>
      </p>
      <p class="text-sm text-center">
        <a href="#" class="text-pink-700 font-medium hover:underline">¿Has olvidado la contraseña?</a>
      </p>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
</script>