import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class DeviceType {
  @Field(() => Int)
  canteenId: number;

  @Field(() => Int)
  equId: number;

  @Field(() => String)
  equName: string;

  @Field(() => String, { nullable: true })
  createTime?: string;
}
