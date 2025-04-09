import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFilterSortComponent } from './task-filter-sort.component';

describe('TaskFilterSortComponent', () => {
  let component: TaskFilterSortComponent;
  let fixture: ComponentFixture<TaskFilterSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFilterSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFilterSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
