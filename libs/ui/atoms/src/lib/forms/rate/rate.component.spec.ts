import { TestBed, waitForAsync } from '@angular/core/testing';

import { RateComponent, RateModule } from './rate.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

describe('RateComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, ReactiveHostComponent],
      imports: [NoopAnimationsModule, RateModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  describe('Basic', () => {
    let templateLookup: TemplateLookup<HostComponent>;

    beforeEach(() => (templateLookup = new TemplateLookup(HostComponent)));

    it('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test.each([3, 5])('should create with %s stars', (nbStars: number) => {
      templateLookup.hostComponent.nbStars = nbStars;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should throw an error with 0 star', () => {
      templateLookup.hostComponent.nbStars = 0;
      expect(() => templateLookup.detectChanges()).toThrowError(
        'this nbStars should be > 0'
      );
    });

    test.each([3, 5])('should create with %s filled stars', (value: number) => {
      templateLookup.hostComponent.nbStars = 5;
      templateLookup.hostComponent.value = value;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test.each`
      filled | nbStars
      ${-1}  | ${3}
      ${6}   | ${5}
    `(
      'should throw error with $filled filled stars and 5 nb stars',
      ({ filled, nbStars }) => {
        templateLookup.hostComponent.nbStars = nbStars;
        templateLookup.hostComponent.value = filled;
        expect(() => templateLookup.detectChanges()).toThrowError(
          `this value is out of range [0, ${nbStars}]`
        );
      }
    );

    test.each([1, 4])('should select %s stars', (value: number) => {
      // GIVEN
      templateLookup.hostComponent.nbStars = 5;
      templateLookup.detectChanges();

      // WHEN
      templateLookup.queryAll('rc-material-icon')[value - 1].click();
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(templateLookup.getComponent(RateComponent).value).toEqual(value);
      expect(templateLookup.hostComponent.value).toEqual(value);
    });

    test.each([1, 4])('should deselect %s stars', (value: number) => {
      // GIVEN
      templateLookup.hostComponent.nbStars = 5;
      templateLookup.hostComponent.value = value;
      templateLookup.detectChanges();

      // WHEN
      templateLookup.queryAll('rc-material-icon')[value - 1].click();
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(templateLookup.getComponent(RateComponent).value).toEqual(0);
      expect(templateLookup.hostComponent.value).toEqual(0);
    });

    it('should create disabled', () => {
      // GIVEN
      templateLookup.hostComponent.disabled = true;

      // WHEN
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should not select when disabled', () => {
      // GIVEN
      templateLookup.hostComponent.disabled = true;
      templateLookup.detectChanges();

      // WHEN
      templateLookup.queryAll('rc-material-icon')[0].click();
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(templateLookup.getComponent(RateComponent).value).toEqual(0);
      expect(templateLookup.hostComponent.value).toEqual(0);
    });
  });

  describe('Reactive form', () => {
    let templateLookup: TemplateLookup<ReactiveHostComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(ReactiveHostComponent))
    );

    it('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should create with value 3', () => {
      // GIVEN
      templateLookup.hostComponent.nbStars = 4;
      templateLookup.hostComponent.control.setValue(3);

      // WHEN
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should create disabled', () => {
      // GIVEN
      templateLookup.hostComponent.control.disable();

      // WHEN
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should update control', () => {
      // GIVEN
      templateLookup.hostComponent.nbStars = 4;
      templateLookup.hostComponent.control.setValue(3);
      templateLookup.detectChanges();

      // WHEN
      templateLookup.queryAll('rc-material-icon')[1].click();
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(templateLookup.hostComponent.control.value).toEqual(2);
    });
  });
});

@Component({
  template: ` <rc-rate
    [nbStars]="nbStars"
    [(value)]="value"
    [disabled]="disabled"
  ></rc-rate>`,
})
class HostComponent {
  public nbStars?: RateComponent['nbStars'];
  public value: RateComponent['value'] = 0;
  public disabled: RateComponent['disabled'] = false;
}

@Component({
  template: ` <rc-rate [nbStars]="nbStars" [formControl]="control"></rc-rate>`,
})
class ReactiveHostComponent {
  public nbStars?: RateComponent['nbStars'];

  public readonly control: FormControl<number> = new FormControl<number>(0, {
    nonNullable: true,
  });
}
