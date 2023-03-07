export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Profile',
    icon: 'user',
    path: '/profile'
  },
  {
    text: 'User',
    icon: 'folder',
    items: [
      {
        text: 'Add user',
        icon: 'plus',
        path: '/user/add'
      },
      {
        text: 'List of users',
        icon: 'group',
        path: '/user/list'
      },
      {
        text: 'Consult',
        icon: 'find',
        path: '/user/consult'
      },
      {
        text: 'Update',
        icon: 'rename',
        path: '/user/modify'
      }
    ]
  },
  {
    text: 'Country',
    icon: 'folder',
    items: [
      {
        text: 'Add country',
        icon: 'plus',
        path: '/country/add'
      },
      {
        text: 'List of countries',
        icon: 'globe',
        path: '/country/list'
      },
      {
        text: 'Consult',
        icon: 'find',
        path: '/country/consult'
      },
      {
        text: 'Update',
        icon: 'rename',
        path: '/country/modify'
      }
    ]
  }
];
