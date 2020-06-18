import { lazy } from 'react';

const Login = lazy(() => import('.'));

export default [
  {
    exact: true,
    path: '/',
    screen: Login,
    sidebar: false,
    name: 'Login',
  },
];
