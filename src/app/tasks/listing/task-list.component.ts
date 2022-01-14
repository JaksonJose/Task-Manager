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
    this.tasks = this.listAll();
    this.tasks = [
      new Task(1, "Task 01", false),
      new Task(2, "Task 02", true),

    ];
  }

  private listAll(): Task[] {
    return this.taskService.listAllTasks();
  }
}
