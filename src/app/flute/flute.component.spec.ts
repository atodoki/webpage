import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluteComponent } from './flute.component';

describe('FluteComponent', () => {
  let component: FluteComponent;
  let fixture: ComponentFixture<FluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
