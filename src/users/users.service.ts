import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput, GetUsersArgs, User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const newUser = {
      id: uuidv4(),
      ...createUserData,
    };
    this.users.push(newUser);
    return newUser;
  }

  public getUser(getUsersArgs: GetUsersArgs): User {
    return this.users.find((user) => user.id === getUsersArgs.id);
  }

  public getUsers(): User[] {
    return [...this.users];
  }
}
