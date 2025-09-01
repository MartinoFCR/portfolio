import { Routes } from '@angular/router';
import {App} from './app';
import {Error} from './error/error';
import {Home} from './features/home/home';

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
    path: '**',
    component: Error
  }
];
