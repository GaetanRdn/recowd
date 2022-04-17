import { withTests } from '@storybook/addon-jest';

import results from '../../../.jest-test-results.json';

export const decorators = [
  withTests({
    results,
    filesExt: '(\\.specs?)?(\\.ts)?$',
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
