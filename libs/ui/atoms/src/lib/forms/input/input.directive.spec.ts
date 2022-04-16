import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { InputDirective } from './input.directive';
import { TemplateLookup } from '@recowd/test/utils';

describe('InputDirective', () => {
  let templateLookup: TemplateLookup<DefaultHostComponent>;

  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [
        DefaultHostComponent,
        OutlinedHostComponent,
        DisabledHostComponent,
        InputDirective,
      ],
    }).compileComponents()));

  it('should create default', () => {
    // WHEN
    templateLookup = new TemplateLookup(DefaultHostComponent);
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should emit valueChange on input', () => {
    // GIVEN
    templateLookup = new TemplateLookup(DefaultHostComponent);
    templateLookup.detectChanges();

    // WHEN
    templateLookup.triggerInput('input', 'test');
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(templateLookup.hostComponent.value).toEqual('test');
  });

  it('should create outlined', () => {
    // WHEN
    templateLookup = new TemplateLookup(OutlinedHostComponent);
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create disabled', () => {
    // WHEN
    templateLookup = new TemplateLookup(DisabledHostComponent);
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: `<input rcInput [(value)]="value" />`,
})
class DefaultHostComponent {
  public value?: string;
}

@Component({
  template: `<input rcInput outlined />`,
})
class OutlinedHostComponent {}

@Component({
  template: `<input rcInput disabled />`,
})
class DisabledHostComponent {}
