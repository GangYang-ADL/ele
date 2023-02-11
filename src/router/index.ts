import { createRouter, createWebHistory } from 'vue-router'
import TabsView from '../views/tabs/TabsView.vue'
import HomeView from '../views/tabs/home/HomeView.vue'
import OrdersView from '../views/tabs/orders/OrdersView.vue'
import SettingsView from '../views/tabs/settings/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: 'Home',
          },
          component: HomeView,
        },
        {
          path: '/orders',
          name: 'orders',
          meta: {
            title: 'Orders',
          },
          component: OrdersView,
        },
        {
          path: '/settings',
          name: 'settings',
          meta: {
            title: 'Settings',
          },
          component: SettingsView,
        },
      ],
    },
  ],
})

export default router
