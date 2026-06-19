
<script setup>
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const password = ref('')
const telefono = ref('')
const codigoPais = ref('+52')

function handleRegister() {
  console.log('Registro:', { nombre: nombre.value, email: email.value, telefono: `${codigoPais.value} ${telefono.value}` })
}
</script>

<template>
  <main class="rounded-b-lg bg-gray-50 flex flex-col items-center py-12 px-4">

    <h1 class="text-7xl font-bold bg-linear-to-r from-pink-700 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-8 text-center leading-tight"
        style="font-family: 'Poppins', sans-serif;">
      Crear una cuenta nueva
    </h1>

    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-9 w-full max-w-sm flex flex-col gap-5">

   
      <div class="flex flex-col gap-1.5">
        <label class="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">
          Nombre
        </label>
        <input
          v-model="nombre"
          type="text"
          placeholder="Tu nombre completo"
          class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-pink-700 transition-colors"
        />
      </div>

  
      <div class="flex flex-col gap-1.5">
        <label class="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">
          Correo electrónico
        </label>
        <input
          v-model="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-pink-700 transition-colors"
        />
      </div>


      <div class="flex flex-col gap-1.5">
        <label class="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">
          Contraseña
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="••••••••"
          class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-pink-700 transition-colors"
        />
      </div>

  
      <div class="flex flex-col gap-1.5">
        <label class="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">
          Número teléfono
        </label>
        <div class="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-pink-700 transition-colors">
          <select
            v-model="codigoPais"
            class="bg-transparent border-transparent"
          >
            <option>+52</option>
            <option>+1</option>
            <option>+34</option>
            <option>+57</option>
            <option>+54</option>
            <option>+56</option>
          </select>
          <input
            v-model="telefono"
            type="tel"
            placeholder="496-961-5463"
            class="flex-1 px-3 py-2.5 text-sm text-gray-800 outline-none"
          />
        </div>
      </div>

  
      <button
        @click="handleRegister"
        class="w-full bg-pink-700 hover:bg-pink-800 text-white font-semibold text-sm py-3 rounded-full transition-colors tracking-wide mt-1"
      >
        Registrarse
      </button>

      <p class="text-sm text-center text-gray-500">
        ¿Ya te registraste?
        <a href="#" class="text-pink-700 font-medium hover:underline">Accede aquí</a>
      </p>

    </div>
  </main>
</template>