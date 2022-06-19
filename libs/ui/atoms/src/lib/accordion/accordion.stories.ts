import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { AccordionModule } from './accordion.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'atoms/accordion',
  parameters: {
    jest: 'accordion',
  },
  decorators: [
    moduleMetadata({
      imports: [AccordionModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<AccordionComponent>;

const templateSingleBloc: Story<AccordionComponent> = (args: Args) => ({
  props: {
    collapsed: args['collapsed'],
  },
  template: `<rc-accordion>
    <rc-accordion-bloc [collapsed]="collapsed">
      <rc-accordion-bloc-header>Example</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate mauris a mattis euismod. Suspendisse ultrices fringilla ipsum. Suspendisse sit amet varius lectus. Mauris erat elit, euismod a laoreet sit amet, finibus vestibulum augue. Cras non consectetur orci. Praesent elit nisi, volutpat sit amet tempus non, tincidunt a felis.</rc-accordion-bloc-content>
    </rc-accordion-bloc>
  </rc-accordion>`,
});

export const SingleBloc = templateSingleBloc.bind({});
SingleBloc.args = {
  collapsed: true,
};

const templateMultiBlocs: Story<AccordionComponent> = (args: Args) => ({
  template: `<rc-accordion>
    <rc-accordion-bloc>
      <rc-accordion-bloc-header>Example</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate mauris a mattis euismod. Suspendisse ultrices fringilla ipsum. Suspendisse sit amet varius lectus. Mauris erat elit, euismod a laoreet sit amet, finibus vestibulum augue. Cras non consectetur orci. Praesent elit nisi, volutpat sit amet tempus non, tincidunt a felis.</rc-accordion-bloc-content>
    </rc-accordion-bloc>

    <rc-accordion-bloc>
      <rc-accordion-bloc-header>Example bis</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate mauris a mattis euismod. Suspendisse ultrices fringilla ipsum. Suspendisse sit amet varius lectus. Mauris erat elit, euismod a laoreet sit amet, finibus vestibulum augue. Cras non consectetur orci. Praesent elit nisi, volutpat sit amet tempus non, tincidunt a felis.</rc-accordion-bloc-content>
    </rc-accordion-bloc>

    <rc-accordion-bloc>
      <rc-accordion-bloc-header>Example ter</rc-accordion-bloc-header>
      <rc-accordion-bloc-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate mauris a mattis euismod. Suspendisse ultrices fringilla ipsum. Suspendisse sit amet varius lectus. Mauris erat elit, euismod a laoreet sit amet, finibus vestibulum augue. Cras non consectetur orci. Praesent elit nisi, volutpat sit amet tempus non, tincidunt a felis.</rc-accordion-bloc-content>
    </rc-accordion-bloc>
  </rc-accordion>`,
});

export const MultiBlocs = templateMultiBlocs.bind({});
