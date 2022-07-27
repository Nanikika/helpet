<template>
  <q-page padding>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="title"
        label="Titulo"
        hint="Titulo del anuncio"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Escribe algo']"
      />

      <q-input
        filled
        v-model="desc"
        type="textarea"
        label="Descripcion"
        hint="Descripcion del anuncio"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Escribe algo']"
      />

      <q-file
        filled
        bottom-slots
        v-model="images"
        label="Imagen/es"
        counter
        multiple
        accept=".jpg, image/*"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Tiene que tener una img minimo',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop.prevent />
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click.stop.prevent="images.length = 0"
            class="cursor-pointer"
          />
        </template>

        <template v-slot:hint>Imagenes de la mascota</template>
      </q-file>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { storage, db } from 'boot/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref as refStorage, uploadBytes, UploadResult } from 'firebase/storage';
import { useUserStore } from 'src/stores/user';

const $q = useQuasar();
const title = ref(null);
const desc = ref(null);
const images = ref<Array<File>>([]);

function uploadImages(id: string) {
  const promises: Array<Promise<UploadResult>> = [];
  if (images.value) {
    images.value.forEach((image) => {
      console.log(image);
      const promise = refStorage(storage, `pets/${id}/${image.name}`);
      promises.push(uploadBytes(promise, image));
    });
  }
  return promises;
}

async function createPet() {
  const { user } = useUserStore();

  const document = await addDoc(collection(db, 'pets'), {
    title: title.value,
    desc: desc.value,
    user: {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    },
    createdAt: Date.now(),
  });
  return document.id;
}

async function onSubmit() {
  $q.notify({
    color: 'blue-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Enviando anuncio...',
  });
  const id = await createPet();
  await Promise.all(uploadImages(id));
  onReset();
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Enviado',
  });
}

function onReset() {
  title.value = null;
  desc.value = null;
  images.value.length = 0;
}
</script>
