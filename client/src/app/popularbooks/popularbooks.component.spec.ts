import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularbooksComponent } from './popularbooks.component';

describe('PopularbooksComponent', () => {
  let component: PopularbooksComponent;
  let fixture: ComponentFixture<PopularbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
