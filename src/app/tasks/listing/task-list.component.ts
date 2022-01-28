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
    this.tasks = this.fetchAllTasks();
  }

  /**
   * Fetch all tasks
   * @returns Array<Task>
   */
  public fetchAllTasks(): Array<Task> {
    return this.taskService.fetchAllTasks();
  }

  /**
   * Remove the task and prevent the page refresh
   * @param $event 
   * @param task 
   */
  public removeTask($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm(`Do you want to remove the task "${task.name}"?`)){
      this.taskService.removeTaskById(task.id);
      this.tasks = this.fetchAllTasks();
    }
  }

  /**
   * Update the task status if it's completed or not
   * @param task 
   */
  public updateTaskStatus(task: Task): void{
    if(confirm(`Do you want to change the "${task.name}" task status?`)){
      this.taskService.updateTaskStatusById(task.id);
      this.tasks = this.fetchAllTasks();
    }
  }
}
