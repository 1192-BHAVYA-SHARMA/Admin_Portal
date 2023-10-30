import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituComponent } from './editu.component';

describe('EdituComponent', () => {
  let component: EdituComponent;
  let fixture: ComponentFixture<EdituComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdituComponent]
    });
    fixture = TestBed.createComponent(EdituComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
