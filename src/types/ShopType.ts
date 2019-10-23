import { ObjectType, Field, Int } from "type-graphql";
import { DeviceType } from "./DeviceType";
// import { DeviceType } from "./DeviceType";

@ObjectType()
export class ShopType {
  @Field(() => Int!)
  canteenId: number;

  @Field(() => String)
  canteenName: string;

  @Field(() => String)
  canteenAddress: string;

  @Field(() => String)
  createTime: string;

  @Field(() => DeviceType, { nullable: true })
  device: DeviceType;
}
