import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;
}
