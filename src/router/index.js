import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MapleStory from '../views/MapleStory.vue'
import ProjectSekai from '../views/ProjectSekai.vue'
import TowerOfSaviors from '../views/TowerOfSaviors.vue'
import StarRail from '../views/StarRail.vue'
import WutheringWaves from '../views/WutheringWaves.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/maplestory', name: 'MapleStory', component: MapleStory },
  { path: '/project-sekai', name: 'ProjectSekai', component: ProjectSekai },
  { path: '/tower-of-saviors', name: 'TowerOfSaviors', component: TowerOfSaviors },
  { path: '/star-rail', name: 'StarRail', component: StarRail },
  { path: '/wuthering-waves', name: 'WutheringWaves', component: WutheringWaves },
]

const router = createRouter({
  history: createWebHistory('/GameExperience/'),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router 