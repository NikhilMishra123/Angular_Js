import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDerivativesComponent } from './learning-derivatives.component';

describe('LearningDerivativesComponent', () => {
  let component: LearningDerivativesComponent;
  let fixture: ComponentFixture<LearningDerivativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningDerivativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningDerivativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
