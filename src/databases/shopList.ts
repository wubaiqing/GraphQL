import { mock } from "mockjs";
export const shopList = mock({
  "list|50": [
    {
      "canteenId|+1": "1",
      canteenName: "@ctitle(8)",
      canteenAddress: "@region",
      createTime: "@dateTime"
    }
  ]
}).list;
