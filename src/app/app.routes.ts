import { Routes } from '@angular/router';
import {App} from './app';
import {Error} from './error/error';
import {Home} from './features/home/home';
import {Dashboard} from './features/projects/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: '**',
    component: Error
  }
];
