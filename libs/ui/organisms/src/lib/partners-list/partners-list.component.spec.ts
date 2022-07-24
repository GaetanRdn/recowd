import { TestBed, waitForAsync } from '@angular/core/testing';
import { PartnersListComponent } from './partners-list.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import { PAULO_PARTNER } from '@recowd/test/data';

describe('PartnersListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [PartnersListComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
  }));

  it('should create empty', () => {
    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create', () => {
    templateLookup.hostComponent.partners = [PAULO_PARTNER];

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-partners-list [partners]="partners"></rc-partners-list>`,
})
class HostComponent {
  public partners!: PartnersListComponent['partners'];
}
