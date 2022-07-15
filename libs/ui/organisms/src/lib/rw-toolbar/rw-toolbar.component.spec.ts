import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RwToolbarComponent } from './rw-toolbar.component';
import { TranslateModule } from '@ngx-translate/core';

describe('RwToolbarComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [RwToolbarComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());

  it.each`
    method                 | selector
    ${'onContactClick'}    | ${'rc-contact-button-icon'}
    ${'onExperienceClick'} | ${'rc-experience-button-with-icon'}
    ${'onEducationClick'}  | ${'rc-education-button-with-icon'}
  `(
    'when click on $selector button then check HostComponent.$method is called',
    ({ method, selector }) => {
      // GIVEN
      jest.spyOn(templateLookup.hostComponent, method);

      // WHEN
      templateLookup.query(selector).click();

      // THEN
      expect(
        templateLookup.hostComponent[method as keyof HostComponent]
      ).toBeCalled();
    }
  );
});

@Component({
  template: ` <rc-rw-toolbar
    (contactClick)="onContactClick()"
    (educationClick)="onEducationClick()"
    (experienceClick)="onExperienceClick()"
  ></rc-rw-toolbar>`,
})
class HostComponent {
  public onExperienceClick(): void {
    // just spying
  }

  public onEducationClick(): void {
    // just spying
  }

  public onContactClick(): void {
    // just spying
  }
}
