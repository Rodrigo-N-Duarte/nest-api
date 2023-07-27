import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './employee.repository';

@Module({
  providers: [EmployeeService, EmployeeRepository],
  exports: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
