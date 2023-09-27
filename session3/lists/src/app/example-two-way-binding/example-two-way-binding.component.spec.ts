import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTwoWayBindingComponent } from './example-two-way-binding.component';

describe('ExampleTwoWayBindingComponent', () => {
  let component: ExampleTwoWayBindingComponent;
  let fixture: ComponentFixture<ExampleTwoWayBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleTwoWayBindingComponent]
    });
    fixture = TestBed.createComponent(ExampleTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
