<template>
  <q-page class="row justify-evenly q-layout-padding">
    <q-infinite-scroll @load="onLoad" :offset="100">
      <pet-card
        v-for="pet in pets"
        :key="pet.id"
        v-bind="{ pet: pet.data(), id: pet.id }"
      />
      <template #loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { db } from 'boot/firebase';
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
} from 'firebase/firestore';
import PetCard from 'src/components/PetCard.vue';

const LIMIT = 10;

const pets = ref([]);
const lastVisible = ref(null);

async function onLoad(index: number, done: () => void) {
  const results = query(
    collection(db, 'pets'),
    orderBy('createdAt', 'desc'),
    // startAfter(lastVisible.value ?? null),
    limit(LIMIT)
  );
  const documentSnapshots = await getDocs(results);
  if (documentSnapshots.docs.length) {
    lastVisible.value =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    pets.value = [...pets.value, ...documentSnapshots.docs];

    done();
  }
}
</script>
