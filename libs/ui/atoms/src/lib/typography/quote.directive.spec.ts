import { QuoteDirective } from './quote.directive';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

describe('QuoteDirective', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [QuoteDirective],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});

@Component({
  template: ` <rc-quote>Quote</rc-quote>`,
})
class HostComponent {}
