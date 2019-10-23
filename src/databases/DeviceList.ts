import { mock } from "mockjs";
export const deviceList = mock({
  "list|50": [
    {
      "canteenId|+1": 1,
      "equId|+1": 1,
      equName: "@cname(8)",
      createTime: "@dateTime"
    }
  ]
}).list;
