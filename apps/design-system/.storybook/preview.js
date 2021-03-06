import { withTests } from '@storybook/addon-jest';

import results from '../../../.jest-test-results.json';
import { moduleMetadata } from '@storybook/angular';
import { StorybookTranslateModule } from '../../../.storybook/storybook-translate.module';

export const decorators = [
  withTests({
    results,
    filesExt: '((\\.directive?)|(\\.component?)?)?(\\.specs?)?(\\.ts)?$',
  }),
  moduleMetadata({
    imports: [StorybookTranslateModule],
  }),
];

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#383838',
      },
    ],
  },
};
