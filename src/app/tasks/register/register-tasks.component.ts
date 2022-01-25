import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-register-tasks',
  templateUrl: './register-tasks.component.html',
  styleUrls: ['./register-tasks.component.css']
})
export class RegisterTasksComponent implements OnInit {

  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  public register(): void {
    if (this.formTask.form.valid) {
      this.taskService.registerTask(this.task);
      this.router.navigate(["/tasks"]);
    }
  }

}
