import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExampleComponent } from './new-example.component';

describe('NewExampleComponent', () => {
  let component: NewExampleComponent;
  let fixture: ComponentFixture<NewExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExampleComponent]
    });
    fixture = TestBed.createComponent(NewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
