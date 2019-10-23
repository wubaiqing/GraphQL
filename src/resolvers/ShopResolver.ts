import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";
import { ShopType } from "../types/ShopType";
import { plainToClass } from "class-transformer";
import { shopList } from "../databases/ShopList";
import { deviceList } from "../databases/DeviceList";
import { DeviceType } from "../types/DeviceType";

@Resolver(() => ShopType)
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

  /**
   * 给返回值的每一项，新增一个设备属性，用于取值
   * @param shop 门店类型
   */
  @FieldResolver()
  async device(@Root() shop: ShopType) {
    // 因为数据是模拟的，deviceList[0] 才代表门店第一项数据。
    return plainToClass(DeviceType, deviceList[shop.canteenId - 1]);
  }
}
