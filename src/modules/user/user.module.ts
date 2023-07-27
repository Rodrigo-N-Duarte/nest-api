import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { BossModule } from '../boss/boss.module';
import { UserService } from './user.service';
import { EmployeeService } from '../employee/employee.service';
import { BossService } from '../boss/boss.service';
import { EmployeeRepository } from '../employee/employee.repository';
import { BossRepository } from '../boss/boss.repository';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [EmployeeModule, BossModule],
  controllers: [UserController],
  providers: [UserService, EmployeeService, BossService],
})
export class UserModule {}
