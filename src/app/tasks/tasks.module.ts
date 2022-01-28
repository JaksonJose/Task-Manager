import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './listing';
import { RegisterTasksComponent } from './register';
import { EditTaskComponent } from './edit';
import { TaskService, TaskCompletedDirective } from './shared';

@NgModule({
  declarations: [
    TaskListComponent,
    RegisterTasksComponent,
    EditTaskComponent,
    TaskCompletedDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TaskService]
})
export class TasksModule { }
