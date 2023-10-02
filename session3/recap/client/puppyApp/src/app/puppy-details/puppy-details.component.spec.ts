import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyDetailsComponent } from './puppy-details.component';

describe('PuppyDetailsComponent', () => {
  let component: PuppyDetailsComponent;
  let fixture: ComponentFixture<PuppyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuppyDetailsComponent]
    });
    fixture = TestBed.createComponent(PuppyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
