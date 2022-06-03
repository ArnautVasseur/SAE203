import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import mitt from 'mitt';

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzx38UYv_3Y08qL_FcgalTpoOjs56BQyw",
    authDomain: "sae-203-5e047.firebaseapp.com",
    projectId: "sae-203-5e047",
    storageBucket: "sae-203-5e047.appspot.com",
    messagingSenderId: "151849200600",
    appId: "1:151849200600:web:33f73b2d8f83e74b6420ad"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

export const emitter = mitt();

app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')


