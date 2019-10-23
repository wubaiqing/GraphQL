import { Resolver, Query, Arg } from "type-graphql";
import { ShopType } from "../types/ShopType";
import { plainToClass } from "class-transformer";
import { shopList } from "../databases/ShopList";

@Resolver()
export class ShopResolver {
  /**
   * 门店详情页
   * @param 门店 ID
   */
  @Query(() => ShopType)
  async shop(@Arg("index") index: number) {
    return plainToClass(ShopType, shopList[index]);
  }

  /**
   * 获取所有门店
   */
  @Query(() => [ShopType])
  async shops(
    @Arg("offset", { defaultValue: 0, nullable: true }) offset?: number
  ) {
    return plainToClass(ShopType, shopList.slice(offset, 10));
  }
}
