import { TestBed, waitForAsync } from '@angular/core/testing';
import { TechnologiesListComponent } from './technologies-list.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('TechnologiesListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [TechnologiesListComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create empty', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());

  it('should create with technos', () => {
    templateLookup.hostComponent.technologies = ['Angular', 'Jest'];

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-technologies-list
    [technologies]="technologies"
  ></rc-technologies-list>`,
})
class HostComponent {
  public technologies: TechnologiesListComponent['technologies'] = [];
}
