import { TestBed, waitForAsync } from '@angular/core/testing';

import { PartnersPageComponent } from './partners-page.component';
import { TemplateLookup } from '@recowd/test/utils';
import { PartnerService } from '../../services/partner.service';
import { of } from 'rxjs';

describe('PartnersPageComponent', () => {
  let templateLookup: TemplateLookup<PartnersPageComponent>;
  let partnerService: PartnerService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PartnersPageComponent],
      providers: [{ provide: PartnerService, useValue: { getAll: jest.fn() } }],
    }).compileComponents();

    partnerService = TestBed.inject(PartnerService);
    jest.spyOn(partnerService, 'getAll').mockReturnValueOnce(
      of([
        {
          icon: 'NorsysCustomIconComponent',
          link: 'https://www.norsys.fr/',
        },
        {
          icon: 'CbpCustomIconComponent',
          link: 'https://www.cbp.fr/',
        },
      ])
    );
    templateLookup = new TemplateLookup(PartnersPageComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});
