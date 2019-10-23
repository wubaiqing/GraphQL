# GraphQL 演示 Demo

一、下载项目，并且运行 Hello World 案例：
```sh
cd /tmp && \
rm -rf /tmp/GraphQL && \
git clone https://github.com/wubaiqing/GraphQL.git && \
cd GraphQL && \
git fetch --all && \
git checkout 1 && \ 
yarn install && \
yarn start
```

二、实现门店列表和详情接口：
```sh
git reset HEAD . && \
git checkout . && \
git checkout 2 && \
yarn install && \
yarn start
```


三、实现 Resolver 扩展字段：
```sh
git reset HEAD . && \
git checkout . &&\
git checkout 3 &&\
yarn install &&\
yarn start
```

### 整个 Demo 类型定义
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

### 学习链接
- [type-graphql 官方网站](https://github.com/19majkel94/type-graphql#readme)  
- [reflect-metadata 什么是元数据介绍](https://ninghao.net/blog/7384)  
- [apollo-server-express 基于 express 框架的 Apollo 服务的封装，它还支持 Koa2、Hapi 等等](https://github.com/apollographql/apollo-server#readme)  
