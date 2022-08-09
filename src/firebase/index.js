import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA38i_aCwN5hNmXFmmbh_vEQ9MLm-aL-KQ",
  authDomain: "my-project-vue-80c68.firebaseapp.com",
  databaseURL: "https://my-project-vue-80c68.firebaseio.com",
  projectId: "my-project-vue-80c68",
  storageBucket: "my-project-vue-80c68.appspot.com",
  messagingSenderId: "582693614792",
  appId: "1:582693614792:web:d8c44b3b5a303199d5a1fd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db