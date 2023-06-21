<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Rest API
Get API
```bash
curl --location 'localhost:3000/products'
```

Post API
```bash
curl --location 'localhost:3000/products' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Test Product",
    "description": "1st Product",
    "price": 49.99
}'
```

Patch API
```bash
curl --location --request PATCH 'localhost:3000/products/0.6382303394975983' \
--header 'Content-Type: application/json' \
--data '{
    "title": "This is 2nd test product"
}'
```

Delete API
```bash
curl --location --request DELETE 'localhost:3000/products/0.6382303394975983'
```

<img width="754" alt="Screenshot 2023-06-21 at 9 09 50 PM" src="https://github.com/chandesh-manjarekar/nest_rest_and_graphql/assets/46016658/9ff28a3b-df61-41c4-a3b0-274df95b2e4a">



## GraphQL API
```bash
http://localhost:3000/graphql
```


<img width="1722" alt="Screenshot 2023-06-21 at 9 09 06 PM" src="https://github.com/chandesh-manjarekar/nest_rest_and_graphql/assets/46016658/e9122b47-aaee-400c-b7af-3bf7f03390f9">
<img width="1725" alt="Screenshot 2023-06-21 at 9 09 19 PM" src="https://github.com/chandesh-manjarekar/nest_rest_and_graphql/assets/46016658/3d4e1aa9-4efa-445b-8c7d-0a4bdd583dee">
<img width="1719" alt="Screenshot 2023-06-21 at 9 09 31 PM" src="https://github.com/chandesh-manjarekar/nest_rest_and_graphql/assets/46016658/5b5b14e9-6448-4d0b-b007-bd5091bce252">
