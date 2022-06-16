import { TemplateLookup } from '@recowd/test/utils';
import { Component, DebugElement } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

describe('CheckboxComponent', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [HostComponent, ReactiveHostComponent],
      imports: [CheckboxComponent, ReactiveFormsModule],
    }).compileComponents()));

  describe('Basic', () => {
    let templateLookup: TemplateLookup<HostComponent>;

    beforeEach(() => (templateLookup = new TemplateLookup(HostComponent)));

    test('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should create with label before', () => {
      templateLookup.hostComponent.labelBefore = true;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should create checked', () => {
      templateLookup.hostComponent.checked = true;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should create disabled', () => {
      templateLookup.hostComponent.disabled = true;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should not change when disabled', () => {
      // GIVEN
      jest.spyOn(templateLookup.hostComponent, 'checkedChange');
      templateLookup.hostComponent.disabled = true;
      templateLookup.detectChanges();

      // WHEN
      templateLookup.query('rc-checkbox').click();
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(templateLookup.hostComponent.checkedChange).not.toBeCalled();
    });

    test.each([false, true])(
      'should toggle checked on click (was checked %s)',
      (wasChecked: boolean) => {
        // GIVEN
        jest.spyOn(templateLookup.hostComponent, 'checkedChange');
        templateLookup.hostComponent.checked = wasChecked;
        templateLookup.detectChanges();

        // WHEN
        const checkbox: DebugElement = templateLookup.get(CheckboxComponent);
        checkbox.nativeElement.click();
        templateLookup.detectChanges();

        // THEN
        expect(templateLookup.firstChildElement).toMatchSnapshot();
        expect(templateLookup.hostComponent.checkedChange).toBeCalledWith(
          checkbox.componentInstance
        );
      }
    );
  });

  describe('Reactive form', () => {
    let templateLookup: TemplateLookup<ReactiveHostComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(ReactiveHostComponent))
    );

    test('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should create checked', () => {
      // GIVEN
      templateLookup.hostComponent.control.setValue('toto');

      // WHEN
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should create disabled', () => {
      // GIVEN
      templateLookup.hostComponent.control.disable();

      // WHEN
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    test('should update control on click', () => {
      // GIVEN
      templateLookup.detectChanges();

      // WHEN
      templateLookup.query('rc-checkbox').click();
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(templateLookup.hostComponent.control.value).toEqual('toto');
    });

    test('should set control value to null on click', () => {
      // GIVEN
      templateLookup.hostComponent.control.setValue('toto');
      templateLookup.detectChanges();

      // WHEN
      templateLookup.query('rc-checkbox').click();
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(templateLookup.hostComponent.control.value).toBeNull();
    });
  });
});

@Component({
  template: ` <rc-checkbox
    [labelBefore]="labelBefore"
    [checked]="checked"
    [value]="value"
    [disabled]="disabled"
    (checkedChange)="checkedChange($event)"
    >Label
  </rc-checkbox>`,
})
class HostComponent {
  public labelBefore = false;
  public checked = false;
  public disabled = false;
  public value = 'val';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  public checkedChange(_: unknown): void {}
}

@Component({
  template: ` <rc-checkbox [formControl]="control" [value]="'toto'"
    >Label
  </rc-checkbox>`,
})
class ReactiveHostComponent {
  public readonly control: FormControl = new FormControl();
}
