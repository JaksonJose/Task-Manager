import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { TaskListComponent } from './listing';
import { RegisterTasksComponent } from './register';

@NgModule({
  declarations: [
    TaskListComponent,
    RegisterTasksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TaskService]
})
export class TasksModule { }
