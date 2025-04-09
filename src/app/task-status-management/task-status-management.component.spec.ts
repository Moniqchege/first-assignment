import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusManagementComponent } from './task-status-management.component';

describe('TaskStatusManagementComponent', () => {
  let component: TaskStatusManagementComponent;
  let fixture: ComponentFixture<TaskStatusManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatusManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatusManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
