import { Routes } from '@angular/router';
import { TaskListComponent } from './listing';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/listing'
  },
  {
    path: 'tasks/listing',
    component: TaskListComponent
  }
]