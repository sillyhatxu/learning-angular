import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFromServerComponent } from './request-from-server.component';

describe('RequestFromServerComponent', () => {
  let component: RequestFromServerComponent;
  let fixture: ComponentFixture<RequestFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
