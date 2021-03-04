import { User } from '../types';

const users: User[] = [];

export const addUser = (newUser: User) => {
  users.push(newUser);
};
