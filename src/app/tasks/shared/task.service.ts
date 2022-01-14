import { Injectable } from '@angular/core';
import { Task } from '.';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  
  /**
   * fetch Tasks avaliable
   * @returns Array<Task>
   */
  public fetchAllTasks(): Array<Task> {
    const tasks = localStorage['tasks']

    return tasks ? JSON.parse(tasks) : [];
  }

  public registerTask(task: Task) : void {
    const tasks = this.fetchAllTasks();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  private getTaskById(id: number) : Task {
    const tasks: Task[] = this.fetchAllTasks();
    
    return tasks.find(task => task.id === id);
  }

  private updateTask(task: Task) : void {
    const tasks: Task[] = this.fetchAllTasks();

    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) objs[index] = task;
    });

    localStorage['task'] = JSON.stringify(tasks);
  }

  private removeTask(id: number) : void {
    let tasks: Task[] = this.fetchAllTasks();

    tasks = tasks.filter(task => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  private changeTaskStatus(id: number) : void {
    const tasks: Task[] = this.fetchAllTasks();

    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) objs[index].completed = !obj.completed
    })

    localStorage['tasks'] = JSON.stringify(tasks);
  }
}
