import { ContractType } from './contract-type';
import { Nullable } from '@recowd/utility-types';

export interface Role {
  titre: string;
  contractType: ContractType;
  startDate: string;
  endDate: Nullable<string>;
}
