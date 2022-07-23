import { Experience } from '@recowd/models';
import { LEAD_DEV_CDI_ESN_ROLE, LEAD_DEV_FREELANCE_ROLE } from './roles';

export const CBP_EXPERIENCE: Experience = {
  client: 'CBP',
  roles: [LEAD_DEV_FREELANCE_ROLE, LEAD_DEV_CDI_ESN_ROLE],
  tasks: ['many things'],
  technos: ['Angular'],
  description: 'Great things',
  localization: 'Saint-Herblain',
};
