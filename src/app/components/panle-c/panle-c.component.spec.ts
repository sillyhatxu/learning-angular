import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanleCComponent } from './panle-c.component';

describe('PanleCComponent', () => {
  let component: PanleCComponent;
  let fixture: ComponentFixture<PanleCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanleCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
