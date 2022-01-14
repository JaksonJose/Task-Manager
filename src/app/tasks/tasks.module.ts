import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { TaskListComponent } from './listing';

@NgModule({
  declarations: [
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TaskService]
})
export class TasksModule { }