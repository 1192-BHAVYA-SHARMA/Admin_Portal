import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuComponent } from './viewu.component';

describe('ViewuComponent', () => {
  let component: ViewuComponent;
  let fixture: ComponentFixture<ViewuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuComponent]
    });
    fixture = TestBed.createComponent(ViewuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
