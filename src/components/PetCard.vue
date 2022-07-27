<template>
  <q-card class="my-card q-mb-md">
    <q-carousel animated v-model="slide" navigation swipeable>
      <q-carousel-slide
        v-for="(item, index) in images"
        :key="item.name"
        :name="index"
        :img-src="item.url"
      />
    </q-carousel>

    <q-card-section>
      <div class="text-h6">{{ pet.title }}</div>
      <div class="text-subtitle2">por {{ pet.user.displayName }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">{{ pet.desc }}</q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storage } from 'boot/firebase';
import {
  ref as refStorage,
  listAll,
  getDownloadURL,
  StorageReference,
} from 'firebase/storage';

const props = defineProps({
  pet: {
    type: Object,
    default: () => ({}),
  },
  id: {
    type: String,
    default: '',
  },
});

const slide = ref(0);

const images = ref<StorageReference[]>([]);

async function loadImages() {
  const list = await listAll(refStorage(storage, `pets/${props.id}`));
  const promises = list.items.map((item) => getDownloadURL(item));
  const urls = await Promise.all(promises);
  images.value = list.items.map((item) => ({
    ...item,
    url: urls.shift(),
  }));
}
loadImages();
</script>
