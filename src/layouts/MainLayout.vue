<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <a href="/" class="text-white" style="text-decoration: none">
            HelPet
          </a>
        </q-toolbar-title>

        <q-btn flat icon="person" aria-label="Log In" @click="loginUser">
          {{ user?.displayName || 'Log In' }}
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered overlay>
      <q-list>
        <q-item-label header>Que quieres hacer?</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <Suspense>
        <router-view />
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useUserStore } from 'stores/user';
import { mapState } from 'pinia';

const linksList = [
  {
    title: 'Subir mascota',
    caption: 'Para adopcion',
    icon: 'upload',
    link: '/upload',
  },
  {
    title: 'Donaciones',
    caption: 'Para ayudar',
    icon: 'paid',
    link: '/donate',
  },
  {
    title: 'Contacto',
    caption: 'Conocenos y contactanos',
    icon: 'phone',
    link: '/contact',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  computed: {
    ...mapState(useUserStore, ['user']),
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const { loginUser, redirectResult } = useUserStore();

    redirectResult();

    return {
      loginUser,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
