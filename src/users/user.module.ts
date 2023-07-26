import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { BossService } from './boss/boss.service';
import { BossRepository } from './boss/boss.repository';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { EmployeeService } from './employee/employee.service';
import { EmployeeRepository } from './employee/employee.repository';

@Module({
  controllers: [UserController],
  providers: [
    BossService,
    BossRepository,
    EmployeeService,
    EmployeeRepository,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
  exports: [BossService, EmployeeService],
})
export class UserModule {}
