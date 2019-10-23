# 学习链接
[reflect-metadata](https://ninghao.net/blog/7384)  
[type-graphql](https://github.com/19majkel94/type-graphql#readme)  
[apollo-server-express](https://github.com/apollographql/apollo-server#readme)  

第一步要执行的命令：
```sh
git clone https://github.com/wubaiqing/GraphQL.git && cd GraphQL && git checkout -b demo1 04210a98d1d5813187652c524473dae2ab85de53 && yarn install --use-yarnrc && yarn start
```

类型定义
```graphql
type DeviceType {
  canteenId: Int!
  equId: Int!
  equName: String!
  createTime: String
}

type Query {
  shop(index: Float!): ShopType!
  shops(offset: Float = 0): [ShopType!]!
}

type ShopType {
  canteenId: Int!
  canteenName: String!
  canteenAddress: String!
  createTime: String!
  device: DeviceType
}
```
