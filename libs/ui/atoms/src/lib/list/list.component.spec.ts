import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ListModule } from './list.module';
import { TemplateLookup } from '@recowd/test/utils';

describe('ListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent | HostWithTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, HostWithTitleComponent],
      imports: [ListModule],
    }).compileComponents();
  }));

  it('should create empty', () => {
    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create with items', () => {
    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.hostComponent.list = ['Item 1', 'Item 2'];

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create horizontal', () => {
    templateLookup = new TemplateLookup(HostComponent);
    (templateLookup.hostComponent as HostComponent).horizontal = true;

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create with title', () => {
    templateLookup = new TemplateLookup(HostWithTitleComponent);

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-list [horizontal]="horizontal">
    <rc-list-item *ngFor="let item of list">{{ item }}</rc-list-item>
  </rc-list>`,
})
class HostComponent {
  public list: string[] = [];
  public horizontal = false;
}

@Component({
  template: ` <rc-list>
    <rc-list-title>Title</rc-list-title>
    <rc-list-item *ngFor="let item of list">{{ item }}</rc-list-item>
  </rc-list>`,
})
class HostWithTitleComponent {
  public list: string[] = ['Item'];
}
