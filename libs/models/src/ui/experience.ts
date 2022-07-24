import { Role } from './role';

export interface Experience {
  client: string;
  localization: string;
  roles: Role[];
  description: string;
  tasks: string[];
  technologies: string[];
}
