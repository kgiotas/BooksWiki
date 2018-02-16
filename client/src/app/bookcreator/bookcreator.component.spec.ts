import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcreatorComponent } from './bookcreator.component';

describe('BookcreatorComponent', () => {
  let component: BookcreatorComponent;
  let fixture: ComponentFixture<BookcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
