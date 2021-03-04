import { Route } from '../types';
import homeRoute from './home';
import userRoute from './user';

const routes: Route[] = [
  { path: '/', router: homeRoute },
  { path: '/user', router: userRoute },
];

export default routes;
