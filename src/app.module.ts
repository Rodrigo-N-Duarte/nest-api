import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmDBConfig } from './database/db.config';
import { UserModule } from './modules/user/user.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { TaskModule } from './modules/task/task.module';
import { BossModule } from './modules/boss/boss.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { TaskController } from './modules/task/task.controller';

@Module({
  imports: [
    TypeOrmDBConfig,
    UserModule,
    TaskModule,
    BossModule,
    EmployeeModule,
  ],
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
