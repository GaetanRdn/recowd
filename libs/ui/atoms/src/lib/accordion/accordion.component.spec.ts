import { TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import { AccordionModule } from './accordion.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionComponent', () => {
  let templateLookup: TemplateLookup<SingleBlocHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBlocHostComponent],
      imports: [AccordionModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(
    () => (templateLookup = new TemplateLookup(SingleBlocHostComponent))
  );

  it('should create default closed accordion bloc', waitForAsync(() => {
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  }));

  it('should expand on header click', waitForAsync(() => {
    templateLookup.detectChanges();

    templateLookup.query('rc-accordion-bloc-header').click();
    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  }));

  it('should be opened', waitForAsync(() => {
    templateLookup.hostComponent.collapsed = false;

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  }));

  it('should be opened on collapsed change', waitForAsync(() => {
    templateLookup.hostComponent.collapsed = true;
    templateLookup.detectChanges();

    templateLookup.hostComponent.collapsed = false;
    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  }));
});

@Component({
  template: ` <rc-accordion>
    <rc-accordion-bloc [collapsed]="collapsed">
      <rc-accordion-bloc-header>Title</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Content</rc-accordion-bloc-content>
    </rc-accordion-bloc>
  </rc-accordion>`,
})
class SingleBlocHostComponent {
  public collapsed = false;
}

@Component({
  template: ` <rc-accordion>
    <rc-accordion-bloc>
      <rc-accordion-bloc-header>Title</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Content</rc-accordion-bloc-content>
    </rc-accordion-bloc>
    <rc-accordion-bloc>
      <rc-accordion-bloc-header>Title2</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Content2</rc-accordion-bloc-content>
    </rc-accordion-bloc>
    <rc-accordion-bloc>
      <rc-accordion-bloc-header>Title3</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Content3</rc-accordion-bloc-content>
    </rc-accordion-bloc>
  </rc-accordion>`,
})
class MultiBlocsHostComponent {}
