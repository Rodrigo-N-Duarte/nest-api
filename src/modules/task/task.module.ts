import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { EmployeeModule } from '../employee/employee.module';
import { BossModule } from '../boss/boss.module';

@Module({
  imports: [UserModule, EmployeeModule, BossModule],
  controllers: [TaskController],
  providers: [TaskService, UserService],
})
export class TaskModule {}
