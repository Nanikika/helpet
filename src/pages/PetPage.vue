<template>
  <q-page class="justify-evenly q-layout-padding">
    <pet-card v-bind="{ pet: pet.data(), id: pet.id }" />
    <div>
      <q-card v-for="cm in comments" :key="cm.createdAt">
        <q-card-section> {{ cm.user.name }}: {{ cm.comment }} </q-card-section>
      </q-card>
    </div>
    <div><br /></div>
    <div>
      <q-input
        outlined
        bottom-slots
        v-model="comment"
        label="Comentario"
        dense
        @keydown.enter="submitComment"
      >
        <template v-slot:after>
          <q-btn round dense flat icon="send" @click="submitComment" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { db } from 'boot/firebase';
import {
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  onSnapshot,
  orderBy,
  setDoc,
} from 'firebase/firestore';
import PetCard from 'src/components/PetCard.vue';
import { useUserStore } from 'src/stores/user';

const router = useRouter();

const pet = ref({});
const comments = ref([]);
const comment = ref('');

const petId = router.currentRoute.value.params.id;
pet.value = await getDoc(doc(db, 'pets', petId));

async function submitComment() {
  const { user } = useUserStore();
  if (comment.value) {
    console.log(user);
    await addDoc(collection(db, 'comments', 'pets', petId), {
      user: {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      },
      comment: comment.value,
      createdAt: Date.now(),
    });
    comment.value = '';
  }
}

const q = query(
  collection(db, 'comments', 'pets', petId),
  orderBy('createdAt', 'asc')
);
onSnapshot(q, (snapshot) => {
  comments.value = snapshot.docs.map((doc) => doc.data());
});
</script>
