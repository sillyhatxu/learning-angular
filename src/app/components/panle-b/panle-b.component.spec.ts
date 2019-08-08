import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanleBComponent } from './panle-b.component';

describe('PanleBComponent', () => {
  let component: PanleBComponent;
  let fixture: ComponentFixture<PanleBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanleBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
