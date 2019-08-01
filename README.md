GraphQL Trading Platform
========================
Most GraphQL tutorials use simplistic examples to demonstrate its capabilities. Unfortunately, when we start building real applications, we run into complexities that these tutorials do not address. This repo demonstrates the use of GraphQL to implement a rich domain with multiple entities and relationships. We use the [Apollo GraphQL](https://www.apollographql.com/) tools and libraries for this implementation.

1. Our example uses a simplified bond trading domain containing multiple entities and relationships.
2. We use 4 REST services to present aggregated account and trade information to front-end clients.

Here's the domain model of our trading domain:

![Domain Model](assets/trading-platform-domain-model.png)

Our GraphQL gateway implementation uses the Apollo GraphQL Server:
1. [GrapQL Trading Gateway](./graphql-trading-gateway)
