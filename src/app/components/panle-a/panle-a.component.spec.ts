import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanleAComponent } from './panle-a.component';

describe('PanleAComponent', () => {
  let component: PanleAComponent;
  let fixture: ComponentFixture<PanleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanleAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
