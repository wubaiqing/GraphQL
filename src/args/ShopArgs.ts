import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ShopArgs {
  @Field(() => String)
  canteenName: string;

  @Field(() => String)
  canteenAddress: string;
}
