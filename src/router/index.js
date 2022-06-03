import { createRouter, createWebHistory } from 'vue-router'

import {getAuth} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import HomeView from '../views/HomeView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import FestivalView from '../views/FestivalView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLégalesView from '../views/MentionsLégalesView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import StyleGuideView from '../views/StyleGuideView.vue'
import ListeView from '../views/ListeView.vue'
import CreateView from '../views/CreateView.vue'
import ConnexionView from '../views/ConnexionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',        name: 'home',     component: HomeView },
    { path: '/programme',   name: 'programme',    component: ProgrammeView},
    { path: '/festival',   name: 'festival',    component: FestivalView},
    { path: '/artistes',   name: 'artistes',    component: ArtistesView},
    { path: '/concert',   name: 'concert',    component: ConcertView},
    { path: '/contact',   name: 'contact',    component: ContactView},
    { path: '/mentionslegales',   name: 'mentionslégales',    component: MentionsLégalesView},
    { path: '/billeterie',   name: 'billeterie',    component: BilleterieView},
    { path: "/:catchAll(.*)", redirect: '/404',},
    { path: '/404', name: 'PageNotExist', component: () => import('../views/Page404.vue')},
    { path: '/styleguide',   name: 'styleguide',    component: StyleGuideView},
    { path: '/liste',   name: 'liste',    component: ListeView},
    { path: '/create',   name: 'create',    component: CreateView},
    { path: '/connexion',   name: 'connexion',    component: ConnexionView},
  ]
})

export default router

function guard(to, from, next){
  getAuth().onAuthStateChanged(function(user){
    if(user){
      console.log('router OK -> user ', user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("iud", "==", user.iud));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc =>({id:doc.id, ...doc.data()}));
        let isAdmin=userInfo[0].admin;
        if(isAdmin){
          next(to.params.name);
          return;
        }else{
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({name:""});
          return;
        }
      })
    }else {
      console.log('router NOK => user ', user);
      next({name:""});
    }
  });
}
