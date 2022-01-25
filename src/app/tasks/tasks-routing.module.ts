import { Routes } from '@angular/router';
import { TaskListComponent } from './listing';
import { RegisterTasksComponent } from './register';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/listing'
  },
  {
    path: 'tasks/listing',
    component: TaskListComponent
  },
  {
    path: 'tasks/register',
    component: RegisterTasksComponent
  }
]