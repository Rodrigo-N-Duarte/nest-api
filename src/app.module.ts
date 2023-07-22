import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './users/user.module';
import { User } from './users/models/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-api',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
