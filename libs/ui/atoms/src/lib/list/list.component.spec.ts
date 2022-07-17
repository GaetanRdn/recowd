import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ListModule } from './list.module';
import { TemplateLookup } from '@recowd/test/utils';

describe('ListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [ListModule],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create empty', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());

  it('should create with items', () => {
    templateLookup.hostComponent.list = ['Item 1', 'Item 2'];

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create horizontal', () => {
    templateLookup.hostComponent.horizontal = true;

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
