import { Experience } from '@recowd/models';
import { LEAD_DEV_CDI_ESN_ROLE, LEAD_DEV_FREELANCE_ROLE } from './roles';

export const CBP_EXPERIENCE: Experience = {
  client: 'CBP',
  roles: [LEAD_DEV_FREELANCE_ROLE, LEAD_DEV_CDI_ESN_ROLE],
  tasks: ['many things'],
  technologies: ['Angular'],
  description: 'Great things',
  localization: 'Saint-Herblain',
};

export const NORSYS_EXPERIENCE: Experience = {
  client: 'norsys',
  roles: [LEAD_DEV_CDI_ESN_ROLE],
  tasks: ['lots of stuffs'],
  technologies: ['PHP'],
  description: 'Amazing mission',
  localization: 'Nantes',
};
