/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/users',
    icon: 'TablesIcon',
    name: 'User',
  },
  {
    path: '/app/payments',
    icon: 'FormsIcon',
    name: 'Payment',
  },
  {
    path: '/app/pricings',
    icon: 'CardsIcon',
    name: 'Pricing',
  },
  {
    path: '/app/blogs',
    icon: 'ChartsIcon',
    name: 'Blog',
  },
  {
    path: '/app/feedbacks',
    icon: 'ButtonsIcon',
    name: 'Feedback',
  },


  {
    icon: 'PagesIcon',
    name: 'Report',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes
