import { defineStore } from 'pinia';
import { firebaseAuth } from 'boot/firebase';
import {
  User,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from 'firebase/auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User,
    loggedIn: false,
  }),
  actions: {
    loginUser() {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(firebaseAuth, provider);
    },
    logoutUser() {
      firebaseAuth.signOut();
    },
    async redirectResult() {
      onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          this.user = user;
          this.loggedIn = true;
        } else {
          try {
            const res = await getRedirectResult(firebaseAuth);
            if (res) {
              this.user = res.user;
              this.loggedIn = true;
            }
          } catch (e) {
            console.log(e);
          }
        }
      });
    },
  },
});
