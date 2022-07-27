<template>
  <div class="q-pa-md">
    <form @submit.prevent="submitForm">
      <q-input
        v-model="formData.email"
        type="email"
        label="Ingrese correo"
      ></q-input>
      <q-input
        v-model="formData.password"
        type="password"
        label="Ingrese password"
      ></q-input>
      <q-btn type="submit">Ingresar</q-btn>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from 'src/stores/user';
import { reactive } from 'vue';

const formData = reactive({ email: 'user@helpet.com', password: '123123' });

const { loginUser } = useUserStore();

function submitForm() {
  loginUser();
}
</script>
