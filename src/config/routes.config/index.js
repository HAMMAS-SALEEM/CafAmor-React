import { lazy } from 'react'

export const publicRoutes = [
  {
    key: 'home',
    path: '/',
    component: lazy(() => import('../../pages/Home'))
  },
  {
    key: 'about',
    path: '/about',
    component: lazy(() => import('../../pages/About'))
  },
  {
    key: 'restaurant',
    path: '/restaurant',
    component: lazy(() => import('../../pages/Restaurant'))
  },
  {
    key: 'news',
    path: '/news',
    component: lazy(() => import('../../pages/News'))
  },
  {
    key: 'contacts',
    path: '/contacts',
    component: lazy(() => import('../../pages/Contacts'))
  }
]

export const protectedRoutes = [
  {
    key: 'login',
    path: '/login',
    component: lazy(() => import('../../pages/Home'))
  },
  {
    key: 'register',
    path: '/register',
    component: lazy(() => import('../../pages/Register'))
  }
]
