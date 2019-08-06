import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTodoListComponent } from './demo-todo-list.component';

describe('DemoTodoListComponent', () => {
  let component: DemoTodoListComponent;
  let fixture: ComponentFixture<DemoTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
