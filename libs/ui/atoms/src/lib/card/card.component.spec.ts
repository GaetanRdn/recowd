import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CardModule } from './card.module';
import { TemplateLookup } from '@recowd/test/utils';

describe('CardComponent', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [
        SimpleCardHostComponent,
        CardWithTitleHostComponent,
        CardWithSubTitleHostComponent,
        CardWithAvatarHostComponent,
      ],
      imports: [CardModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()));

  it('should create simple card', () => {
    const templateLookup: TemplateLookup<SimpleCardHostComponent> =
      new TemplateLookup(SimpleCardHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create a card with title', () => {
    const templateLookup: TemplateLookup<CardWithTitleHostComponent> =
      new TemplateLookup(CardWithTitleHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create a card with subtitle', () => {
    const templateLookup: TemplateLookup<CardWithSubTitleHostComponent> =
      new TemplateLookup(CardWithSubTitleHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create a card with an avatar', () => {
    const templateLookup: TemplateLookup<CardWithAvatarHostComponent> =
      new TemplateLookup(CardWithAvatarHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-card>
    <rc-card-content>Simple card</rc-card-content>
  </rc-card>`,
})
export class SimpleCardHostComponent {}

@Component({
  template: ` <rc-card>
    <rc-card-title>Card title</rc-card-title>
    <rc-card-content>Simple card</rc-card-content>
  </rc-card>`,
})
export class CardWithTitleHostComponent {}

@Component({
  template: ` <rc-card>
    <rc-card-title>Card title</rc-card-title>
    <rc-card-subtitle>Card subtitle</rc-card-subtitle>
    <rc-card-content>Simple card</rc-card-content>
  </rc-card>`,
})
export class CardWithSubTitleHostComponent {}

@Component({
  template: ` <rc-card>
    <rc-material-icon rcAvatar>home</rc-material-icon>
    <rc-card-title>Card title</rc-card-title>
    <rc-card-subtitle>Card subtitle</rc-card-subtitle>
    <rc-card-content>Simple card</rc-card-content>
  </rc-card>`,
})
export class CardWithAvatarHostComponent {}
