import { lazy } from 'react'

import Users from '../pages/User'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))

const Buttons = lazy(() => import('../pages/Buttons'))

const Page404 = lazy(() => import('../pages/404'))
const Blog = lazy(() => import('../pages/Blog'))
const Payment = lazy(() => import('../pages/Payment'))
const Blank = lazy(() => import('../pages/Blank'))
const Pricing = lazy(() => import('../pages/Pricing'))
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/payments',
    component: Payment,
  },
  {
    path: '/pricings',
    component: Pricing,
  },
  {
    path: '/blogs',
    component: Blog,
  },
  {
    path: '/feedbacks',
    component: Buttons,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
