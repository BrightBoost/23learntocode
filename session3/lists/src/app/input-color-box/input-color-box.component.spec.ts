import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputColorBoxComponent } from './input-color-box.component';

describe('InputColorBoxComponent', () => {
  let component: InputColorBoxComponent;
  let fixture: ComponentFixture<InputColorBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputColorBoxComponent]
    });
    fixture = TestBed.createComponent(InputColorBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
