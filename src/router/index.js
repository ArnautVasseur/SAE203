import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import FestivalView from '../views/FestivalView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLégalesView from '../views/MentionsLégalesView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import StyleGuideView from '../views/StyleGuideView.vue'

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
  ]
})

export default router
