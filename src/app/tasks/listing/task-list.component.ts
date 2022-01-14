import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.getAllTasks();
  }

  public getAllTasks(): Array<Task> {
    return this.taskService.fetchAllTasks();
  }
}
