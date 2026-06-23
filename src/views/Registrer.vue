
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

   
<div class="bg-white rounded-xl border border-gray-200 shadow-sm p-8 w-110 flex flex-col gap-7">

  <div class="flex flex-col gap-1.5">
    <label class="text-[12px] font-semibold text-gray-500 tracking-widest uppercase">
      Nombre
    </label>
    <input
      v-model="nombre"
      type="text"
      placeholder="Tu nombre"
      class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-pink-700 transition-colors"
    />
  </div>

  <div class="flex gap-2">
    <div class="flex flex-col gap-1.5 flex-1">
      <label class="text-[12px] font-semibold text-gray-500 tracking-widest uppercase">
        Apellido Paterno
      </label>
      <input
        v-model="apellidoPaterno"
        type="text"
        placeholder="Paterno"
        class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-pink-700 transition-colors"
      />
    </div>
    <div class="flex flex-col gap-1.5 flex-1">
      <label class="text-[12px] font-semibold text-gray-500 tracking-widest uppercase">
        Apellido Materno
      </label>
      <input
        v-model="apellidoMaterno"
        type="text"
        placeholder="Materno"
        class="border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-pink-700 transition-colors"
      />
    </div>
  </div>

  <div class="flex flex-col gap-1.5">
    <label class="text-[12px] font-semibold text-gray-500 tracking-widest uppercase">
      Número teléfono
    </label>
    <div class="flex border border-gray-300 rounded-md overflow-hidden focus-within:border-pink-700 transition-colors">
      <select
        v-model="codigoPais"
        class="bg-gray-50 border-r border-gray-300 px-2 py-2.5 text-sm text-gray-700 outline-none cursor-pointer"
      >
        <option value="+52">🇲🇽 +52</option>
        <option value="+1">🇺🇸 +1</option>
        <option value="+34">🇪🇸 +34</option>
        <option value="+57">🇨🇴 +57</option>
        <option value="+54">🇦🇷 +54</option>
        <option value="+56">🇨🇱 +56</option>
        <option value="+51">🇵🇪 +51</option>
        <option value="+55">🇧🇷 +55</option>
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
    <RouterLink to="/login" class="text-pink-700 font-medium hover:underline">Accede aquí</RouterLink>
  </p>

</div>
  </main>
</template>