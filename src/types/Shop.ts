import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class Shop {
  @Field(() => Int)
  canteenId: number;

  @Field(() => String)
  canteenName: string;

  @Field(() => String)
  canteenAddress: string;

  @Field(() => Int, { nullable: true })
  canteenType: number;
}
