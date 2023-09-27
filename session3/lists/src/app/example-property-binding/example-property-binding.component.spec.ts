import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePropertyBindingComponent } from './example-property-binding.component';

describe('ExamplePropertyBindingComponent', () => {
  let component: ExamplePropertyBindingComponent;
  let fixture: ComponentFixture<ExamplePropertyBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplePropertyBindingComponent]
    });
    fixture = TestBed.createComponent(ExamplePropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
