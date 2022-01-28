import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterTasksComponent } from './register-tasks.component';
import { Task } from '../shared';

describe('RegisterTasksComponent', () => {
  let component: RegisterTasksComponent;
  let fixture: ComponentFixture<RegisterTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    /*fixture = TestBed.createComponent(RegisterTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
