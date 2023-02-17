export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        icon: 'user',
        path: '/profile'
      },
      {
        text: 'Tasks',
        icon: 'verticalaligntop',
        path: '/tasks'
      },
      {
        text: 'Countries',
        icon: 'globe',
        path: '/countries'
      }
    ]
  },
  {
    text: 'Maintenance',
    icon: 'folder',
    items: [
      {
        text: 'Add',
        icon: 'plus',
        path: '/maintenance/add'
      },
      {
        text: 'Consult',
        icon: 'find',
        path: '/consult'
      },
      {
        text: 'Update',
        icon: 'refresh',
        path: '/modify'
      },
      {
        text: 'Elimination',
        icon: 'remove',
        path: '/elimination'
      }
    ]
  }
];
