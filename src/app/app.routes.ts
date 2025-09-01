import { Routes } from '@angular/router';
import {App} from './app';
import {Error} from './components/error/error';
import {Home} from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '**',
    component: Error
  }
];
