import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import FestivalView from '../views/festivalView.vue'
import ArtistesView from '../views/artistesView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLégalesView from '../views/MentionsLégalesView.vue'
import BilleterieView from '../views/BilleterieView.vue'

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
  ]
})

export default router
