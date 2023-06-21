import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;
}

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsInt()
  age: number;
}

@ArgsType()
export class GetUsersArgs {
  @Field()
  @IsNotEmpty()
  id: string;
}
