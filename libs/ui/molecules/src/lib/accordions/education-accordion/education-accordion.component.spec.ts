import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAccordionComponent } from './education-accordion.component';

describe('EducationAccordionComponent', () => {
  let component: EducationAccordionComponent;
  let fixture: ComponentFixture<EducationAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
