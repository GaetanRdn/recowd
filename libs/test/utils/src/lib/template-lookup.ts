import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Type } from '@angular/core';
import { By } from '@angular/platform-browser';

export class TemplateLookup<ComponentType> {
  public readonly fixture: ComponentFixture<ComponentType>;

  constructor(componentType: Type<ComponentType>) {
    this.fixture = TestBed.createComponent(componentType);
  }

  get firstChildElement(): HTMLElement {
    return this.fixture.debugElement.children[0].nativeElement;
  }

  get hostComponent(): ComponentType {
    return this.fixture.componentInstance;
  }

  public detectChanges(): void {
    this.fixture.detectChanges();
  }

  public get(selector: string): DebugElement {
    return this.fixture.debugElement.query(By.css(selector));
  }

  public query<Type extends HTMLElement = HTMLElement>(selector: string): Type {
    return this.get(selector).nativeElement;
  }
}