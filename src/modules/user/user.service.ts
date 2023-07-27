import { Injectable } from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';
import { BossService } from '../boss/boss.service';
import { UserRoleEnum } from './enums/UserRoleEnum';

@Injectable()
export class UserService {
  constructor(
    private employeeService: EmployeeService,
    private bossService: BossService,
  ) {}

  getService(role) {
    switch (role) {
      case UserRoleEnum.BOSS:
        return this.bossService;
      case UserRoleEnum.EMPLOYEE:
        return this.employeeService;
    }
  }
}
