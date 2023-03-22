import { User } from './user';

export interface UserActions {
  insert(user: User): Promise<User>;
  delete(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}
