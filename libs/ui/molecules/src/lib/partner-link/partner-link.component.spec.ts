import { TestBed, waitForAsync } from '@angular/core/testing';
import { PartnerLinkComponent } from './partner-link.component';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';
import { Partner } from '@recowd/models';

describe('PartnerLinkComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [PartnerLinkComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
  }));

  it.each([
    { link: 'www.test.fr', icon: 'CbpCustomIconComponent' },
    {
      link: 'www.paulo.com',
      icon: 'NorsysCustomIconComponent',
    },
  ])('should create with %j', (partner: Partner) => {
    templateLookup.hostComponent.partner = partner;

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-partner-link [partner]="partner"></rc-partner-link>`,
})
class HostComponent {
  public partner!: PartnerLinkComponent['partner'];
}
