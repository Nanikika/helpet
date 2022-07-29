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

    <q-card-actions align="left">
      <q-btn
        flat
        round
        color="red"
        :icon="likedFromMe ? 'favorite' : 'favorite_border'"
        :label="likes"
        @click="sendLike"
      />
      <q-btn
        :to="`/pet/${id}`"
        flat
        round
        color="blue"
        icon="comment"
        :label="comments"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user';
import { storage, db } from 'boot/firebase';
import {
  ref as refStorage,
  listAll,
  getDownloadURL,
  StorageReference,
} from 'firebase/storage';
import {
  collection,
  query,
  addDoc,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';

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

const { user } = useUserStore();

const likes = ref(0);
const likedFromMe = ref(false);
async function loadLikes() {
  const likesRef = await query(collection(db, 'likes', 'pets', props.id));
  const docs = (await getDocs(likesRef)).docs;
  likes.value = docs.length;
  likedFromMe.value = docs.some((doc) => doc.data().email === user.email);
}
loadLikes();

async function sendLike() {
  if (!user || likedFromMe.value) return;
  const likesRef = doc(db, 'likes', 'pets', props.id, user.uid);
  await setDoc(likesRef, {
    email: user.email,
    displayName: user.displayName,
  });
  likes.value++;
  likedFromMe.value = true;
}

const comments = ref(0);
const q = query(collection(db, 'comments', 'pets', props.id));
onSnapshot(q, (snapshot) => {
  comments.value = snapshot.docs.length;
});
</script>
