import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';

import { AppService } from './app.service';

/* import { CustomersModule } from './customers/customers.module';
import { InvoicesModule } from './invoices/invoices.module'; */
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: '',
    //   password: '',
    //   database: 'invoiceapp',
    //   entities: ['dist/**/*.model.js'],
    //   synchronize: false,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
