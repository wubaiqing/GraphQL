import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class ShopType {
  @Field(() => ID)
  canteenId: string;

  @Field(() => String)
  canteenName: string;

  @Field(() => String)
  canteenAddress: string;

  @Field(() => String)
  createTime: string;
}
