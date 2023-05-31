import { Lead } from './lead';

export interface LeadActions {
  insert(lead: Lead): Promise<Lead>;
  delete(email: string): Promise<Lead | null>;
  findAll(): Promise<Lead[]>;
}
