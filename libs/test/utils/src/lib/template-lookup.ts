import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Type } from '@angular/core';
import { By } from '@angular/platform-browser';

export class TemplateLookup<HostType> {
  public readonly fixture: ComponentFixture<HostType>;

  constructor(componentType: Type<HostType>) {
    this.fixture = TestBed.createComponent(componentType);
  }

  get firstChildElement(): HTMLElement {
    return this.fixture.debugElement.children[0].nativeElement;
  }

  get hostComponent(): HostType {
    return this.fixture.componentInstance;
  }

  public detectChanges(): void {
    this.fixture.detectChanges();
  }

  public get<ComponentType>(
    selector: string | Type<ComponentType>
  ): DebugElement {
    if (typeof selector === 'string') {
      return this.fixture.debugElement.query(By.css(selector));
    }
    return this.fixture.debugElement.query(By.directive(selector));
  }

  public query<Type extends HTMLElement = HTMLElement>(selector: string): Type {
    return this.get(selector).nativeElement;
  }

  public triggerInput(selector: string, value: string): void {
    const input: DebugElement = this.get(selector);
    input.nativeElement.value = value;
    input.triggerEventHandler('input', { target: input.nativeElement });
  }

  public getDirectiveOn<DirectiveType>(
    selector: string,
    directive: Type<DirectiveType>
  ): DirectiveType {
    return this.get(selector).injector.get(directive);
  }

  public getComponent<ComponentType>(
    selector: string | Type<ComponentType>
  ): ComponentType {
    return this.get(selector).componentInstance;
  }
}
