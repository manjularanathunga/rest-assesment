import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TodoComponent} from './todo/todo.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
