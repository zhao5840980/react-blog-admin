import {
  Home,
  Login,
  Register,
  Dashboard,
  ArticleList,
  ArticleEdit,
  User,
  Power,
  Role,
  Other,
  NotFound,
  Notification
} from '../views';
// 静态路由
const mainRoutes = [
  {
    pathname: '/login',
    component: Login
  },
  {
    pathname: '/register',
    component: Register
  },
  {
    pathname: '/admin',
    component: Home
  },
  {
    pathname: '/404',
    component: NotFound
  }
];
// 动态路由
const adminRoutes = [
  {
    pathname: '/admin/dashboard',
    title: '仪表盘',
    icon: 'dashboard',
    component: Dashboard,
    isNav: true,
    key: 'dashboard'
  },
  {
    pathname: '/admin/article',
    title: '文章管理',
    icon: 'unordered-list',
    exact: true,
    isNav: true,
    key: 'article',
    children: [
      {
        pathname: '/admin/article/articlelist',
        component: ArticleList,
        title: '文章列表',
        icon: 'ordered-list',
        isNav: true,
        key: 'articlelist'
      },
      {
        pathname: '/admin/article/edit',
        component: ArticleEdit,
        title: '文章编辑',
        icon: 'edit',
        isNav: true,
        key: 'edit'
      }
    ]
  },
  {
    pathname: '/admin/settings',
    title: '设置',
    icon: 'setting',
    exact: true,
    isNav: true,
    key: 'settings',
    children: [
      {
        pathname: '/admin/settings/role',
        component: Role,
        title: '角色管理',
        icon: 'smile',
        isNav: true,
        key: 'role'
      },
      {
        pathname: '/admin/settings/user',
        component: User,
        title: '用户管理',
        icon: 'user',
        isNav: true,
        key: 'user'
      },
      {
        pathname: '/admin/settings/power',
        component: Power,
        title: '权限管理',
        icon: 'phone',
        isNav: true,
        key: 'power'
      }
    ]
  },
  {
    pathname: '/admin/other',
    component: Other,
    title: '其他',
    icon: 'more',
    isNav: true,
    key: 'other'
  },
  {
    pathname: '/admin/notification',
    component: Notification,
    isNav: false,
    key: 'notification'
  }
];
export { mainRoutes, adminRoutes };
