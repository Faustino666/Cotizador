<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const email = ref('')
const enviado = ref(false)
const cargando = ref(false)

const handleRecuperar = async () => {
  if (!email.value) return
  cargando.value = true
  // Aquí irá tu llamada al backend
  await new Promise(r => setTimeout(r, 1500))
  cargando.value = false
  enviado.value = true
}
</script>

<template>
  <main class="rounded-b-lg bg-gray-50 flex flex-col items-center py-12 px-4">
    <h1
      class="text-7xl font-bold bg-linear-to-r from-pink-700 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-8"
      style="font-family: 'Poppins', sans-serif;"
    >
      Recuperar
    </h1>

    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-9 w-full max-w-sm flex flex-col gap-5">

      <!-- Formulario -->
      <template v-if="!enviado">
        <p class="text-sm text-gray-500 leading-relaxed">
          Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
        </p>

        <div class="flex flex-col gap-1.5">
          <label class="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">
            Correo electrónico
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-pink-700 transition-colors"
            @keyup.enter="handleRecuperar"
          />
        </div>

        <button
          @click="handleRecuperar"
          :disabled="!email || cargando"
          class="w-full bg-pink-700 hover:bg-pink-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 rounded-full transition-colors tracking-wide flex items-center justify-center gap-2"
        >
          <svg v-if="cargando" class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          {{ cargando ? 'Enviando...' : 'Enviar enlace' }}
        </button>
      </template>

      <!-- Confirmación -->
      <template v-else>
        <div class="flex flex-col items-center gap-4 py-2">
          <div class="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center">
            <svg class="w-8 h-8 text-pink-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
            </svg>
          </div>
          <p class="text-sm font-semibold text-gray-700 text-center">¡Revisa tu bandeja de entrada!</p>
          <p class="text-sm text-gray-500 text-center leading-relaxed">
            Enviamos un enlace a <span class="font-medium text-gray-700">{{ email }}</span>.
            Si no lo ves, revisa tu carpeta de spam.
          </p>
          <button
            @click="() => { enviado = false; email = '' }"
            class="text-sm text-pink-700 hover:underline font-medium"
          >
            Usar otro correo
          </button>
        </div>
      </template>

      <!-- Links -->
      <div class="flex flex-col gap-2 pt-1 border-t border-gray-100">
        <p class="text-sm text-center text-gray-500">
          ¿Ya recuerdas tu contraseña?
          <RouterLink to="/login" class="text-pink-700 font-medium hover:underline">Inicia sesión</RouterLink>
        </p>
        <p class="text-sm text-center text-gray-500">
          ¿Aún no te has registrado?
          <RouterLink to="/register" class="text-pink-700 font-medium hover:underline">Accede aquí</RouterLink>
        </p>
      </div>

    </div>
  </main>
</template>