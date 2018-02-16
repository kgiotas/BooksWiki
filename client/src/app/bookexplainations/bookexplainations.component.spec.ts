import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookexplainationsComponent } from './bookexplainations.component';

describe('BookexplainationsComponent', () => {
  let component: BookexplainationsComponent;
  let fixture: ComponentFixture<BookexplainationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookexplainationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookexplainationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
