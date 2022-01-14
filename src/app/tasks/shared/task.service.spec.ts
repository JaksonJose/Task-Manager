import { inject, TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from './task.model';


describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be sure that returns an Array<Task>',
    inject([TaskService], (service: TaskService) => {      
      let task: Task[] = service.fetchAllTasks();

      expect(task).toEqual(Array<Task>(...task));
    })
  );
});