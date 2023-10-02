import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPuppyComponent } from './add-puppy.component';

describe('AddPuppyComponent', () => {
  let component: AddPuppyComponent;
  let fixture: ComponentFixture<AddPuppyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPuppyComponent]
    });
    fixture = TestBed.createComponent(AddPuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
