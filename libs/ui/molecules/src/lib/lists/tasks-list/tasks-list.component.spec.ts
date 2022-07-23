import { TestBed, waitForAsync } from '@angular/core/testing';
import { TasksListComponent } from './tasks-list.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('TasksListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [TasksListComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create empty', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());

  it('should create with technos', () => {
    templateLookup.hostComponent.tasks = [
      'few things',
      'many things',
      'too many things',
    ];

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-tasks-list [tasks]="tasks"></rc-tasks-list>`,
})
class HostComponent {
  public tasks: TasksListComponent['tasks'] = [];
}
