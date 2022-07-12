import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCardComponent } from './education-card.component';

describe('EducationAccordionComponent', () => {
  let component: EducationCardComponent;
  let fixture: ComponentFixture<EducationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
