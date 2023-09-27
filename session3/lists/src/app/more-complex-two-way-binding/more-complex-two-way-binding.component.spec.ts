import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreComplexTwoWayBindingComponent } from './more-complex-two-way-binding.component';

describe('MoreComplexTwoWayBindingComponent', () => {
  let component: MoreComplexTwoWayBindingComponent;
  let fixture: ComponentFixture<MoreComplexTwoWayBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreComplexTwoWayBindingComponent]
    });
    fixture = TestBed.createComponent(MoreComplexTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
