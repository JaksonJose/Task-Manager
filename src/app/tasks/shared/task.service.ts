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

  /**
   * Fetch one task by its id.
   * @param id 
   * @returns task object
   */
  public fetchTaskById(id: number) : Task {
    const tasks: Task[] = this.fetchAllTasks();
    
    return tasks.find(task => task.id === id);
  }

  /**
   * Register the task and assign and id to it.
   * @param task 
   */
  public registerTask(task: Task) : void {
    const tasks = this.fetchAllTasks();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * 
   * @param task Update the task with new value
   */
  public updateTask(task: Task) : void {
    const tasks: Task[] = this.fetchAllTasks();

    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });

    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * Remove the Task by its id
   * @param id 
   */
  public removeTaskById(id: number) : void {
    let tasks: Task[] = this.fetchAllTasks();

    tasks = tasks.filter(task => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  /**
   * Updadte the Task Status if it's completed or not
   * @param id 
   */
  public updateTaskStatusById(id: number) : void {
    const tasks: Task[] = this.fetchAllTasks();

    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) objs[index].completed = !obj.completed
    })

    localStorage['tasks'] = JSON.stringify(tasks);
  }
}
