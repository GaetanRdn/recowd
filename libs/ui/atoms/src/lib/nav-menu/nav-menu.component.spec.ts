import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { NavMenuModule } from './nav-menu.module';
import { TemplateLookup } from '@recowd/test/utils';

describe('NavMenuComponent', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [NavMenuModule],
    }).compileComponents()));

  it('should create', () => {
    const templateLookup: TemplateLookup<HostComponent> = new TemplateLookup(
      HostComponent
    );
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should emit event on click', () => {
    // GIVEN
    const templateLookup: TemplateLookup<HostComponent> = new TemplateLookup(
      HostComponent
    );
    templateLookup.detectChanges();
    jest.spyOn(templateLookup.hostComponent, 'selectionChange');

    // WHEN
    templateLookup.query('rc-nav-menu-item').click();
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(templateLookup.hostComponent.selectionChange).toBeCalledTimes(1);
  });

  it('should set selected the last clicked item', () => {
    // GIVEN
    const templateLookup: TemplateLookup<HostComponent> = new TemplateLookup(
      HostComponent
    );
    templateLookup.detectChanges();
    jest.spyOn(templateLookup.hostComponent, 'selectionChange');
    templateLookup.query('rc-nav-menu-item').click();
    templateLookup.detectChanges();

    // WHEN
    templateLookup.queryAll('rc-nav-menu-item')[1].click();
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(templateLookup.hostComponent.selectionChange).toBeCalledTimes(2);
  });
});

@Component({
  template: ` <rc-nav-menu (selectionChange)="selectionChange($event)">
    <rc-nav-menu-item>Item 1</rc-nav-menu-item>
    <rc-nav-menu-item>Item 2</rc-nav-menu-item>
  </rc-nav-menu>`,
})
class HostComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public selectionChange(_: unknown): void {
    // empty for testing
  }
}
