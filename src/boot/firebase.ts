import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Agregar configuración firebase:
const firebaseConfig = {
  apiKey: 'AIzaSyAymTlLgo-D9Zf6OrfKP8DAeS2sCaUHeJw',
  authDomain: 'helpet-faa9d.firebaseapp.com',
  databaseURL: 'https://helpet-faa9d-default-rtdb.firebaseio.com',
  projectId: 'helpet-faa9d',
  storageBucket: 'helpet-faa9d.appspot.com',
  messagingSenderId: '660623812189',
  appId: '1:660623812189:web:1e2f30ab700bc0d285cfb4',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { firebaseAuth, db, storage };
