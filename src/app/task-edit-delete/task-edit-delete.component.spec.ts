import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditDeleteComponent } from './task-edit-delete.component';

describe('TaskEditDeleteComponent', () => {
  let component: TaskEditDeleteComponent;
  let fixture: ComponentFixture<TaskEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
