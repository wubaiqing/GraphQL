import { Resolver, Query } from "type-graphql";
import { Shop } from "../types/Shop";
import { plainToClass } from "class-transformer";
import { mock } from "mockjs";

@Resolver()
export class ShopResolver {
  @Query(() => [Shop])
  async shopList() {
    const source = mock({
      "list|10": [
        {
          "canteenId|+1": 1,
          canteenName: "@title",
          canteenAddress: "@region"
        }
      ]
    }).list;
    return plainToClass(Shop, source);
  }
}
