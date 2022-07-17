import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { PartnerLinkComponent } from './partner-link.component';
import { NorsysCustomIconComponent } from '../custom-icons/norsys-custom-icon/norsys-custom-icon.component';
import { CbpCustomIconComponent } from '../custom-icons/cbp-custom-icon/cbp-custom-icon.component';

export default {
  title: 'molecules/partner-link',
  parameters: {
    jest: 'partner-link',
  },
  decorators: [
    moduleMetadata({
      imports: [
        PartnerLinkComponent,
        NorsysCustomIconComponent,
        CbpCustomIconComponent,
      ],
    }),
  ],
  argTypes: {
    icon: {
      control: {
        options: [NorsysCustomIconComponent, CbpCustomIconComponent],
      },
    },
  },
} as Meta<
  PartnerLinkComponent<CbpCustomIconComponent | NorsysCustomIconComponent>
>;

const Template: Story = (args: Args) => ({
  props: {
    partner: {
      link: args['link'],
      icon: args['icon'],
    },
  },
  template: `<rc-partner-link [partner]="partner"></rc-partner-link>`,
});

export const Default = Template.bind({});
Default.args = {
  link: 'https://www.norsys.fr/',
  icon: NorsysCustomIconComponent,
};
