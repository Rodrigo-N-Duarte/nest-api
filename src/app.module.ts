import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmDBConfig } from './db/db.config';
import { UserModule } from './users/user.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { TaskModule } from './task/task.module';

@Module({
  imports: [UserModule, TypeOrmDBConfig, TaskModule],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}

  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(AuthMiddleware)
      // .exclude(AuthController)
      .forRoutes('*');
  }
}
