import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendatrComponent } from './calendatr.component';

describe('CalendatrComponent', () => {
  let component: CalendatrComponent;
  let fixture: ComponentFixture<CalendatrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendatrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
