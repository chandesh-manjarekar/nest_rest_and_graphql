import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, GetUsersArgs, User } from './user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  public getUser(@Args() getUsersArgs: GetUsersArgs): User {
    return this.usersService.getUser(getUsersArgs);
  }

  @Query(() => [User])
  public getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.usersService.createUser(createUserData);
  }
}
