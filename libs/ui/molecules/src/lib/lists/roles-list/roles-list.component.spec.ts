import { TestBed, waitForAsync } from '@angular/core/testing';
import { RolesListComponent } from './roles-list.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import {
  LEAD_DEV_CDI_ESN_ROLE,
  LEAD_DEV_FREELANCE_ROLE,
} from '@recowd/test/data';

describe('RolesListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [RolesListComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create empty', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());

  it('should create with roles', () => {
    templateLookup.hostComponent.roles = [
      LEAD_DEV_FREELANCE_ROLE,
      LEAD_DEV_CDI_ESN_ROLE,
    ];

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-roles-list [roles]="roles"></rc-roles-list>`,
})
class HostComponent {
  public roles: RolesListComponent['roles'] = [];
}
