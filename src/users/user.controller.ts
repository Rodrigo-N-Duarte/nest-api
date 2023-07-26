import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BossService } from './boss/boss.service';
import {
  CreateUserDTO,
  UpdateUserDTO,
  UserDTO,
  UserRole,
} from './models/dtos/userDTO';
import { EmployeeService } from './employee/employee.service';
import { TypeUserPipe } from '../pipes/TypeUserPipe';

@Controller('user/:role')
export class UserController {
  constructor(
    private bossService: BossService,
    private employeeService: EmployeeService,
  ) {}

  @Post()
  async create(
    @Param('role') role: UserRole,
    @Body() body: CreateUserDTO,
  ): Promise<UserDTO> {
    if (role === UserRole.EMPLOYEE) {
      return await this.employeeService.createUser(body);
    }
    return await this.bossService.createUser(body);
  }

  @Get()
  async findAll(
    @Param('role', new TypeUserPipe()) role: UserRole,
  ): Promise<UserDTO[]> {
    if (role === UserRole.EMPLOYEE) {
      return await this.employeeService.findAll();
    }
    return await this.bossService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('role', new TypeUserPipe()) role: UserRole,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserDTO> {
    if (role === UserRole.EMPLOYEE) {
      return await this.employeeService.findOne(id);
    }
    return await this.bossService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('role') role: UserRole,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDTO,
  ): Promise<UserDTO> {
    if (role === UserRole.EMPLOYEE) {
      return await this.employeeService.update(id, body);
    }
    return await this.bossService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('role') role: UserRole,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserDTO> {
    if (role === UserRole.EMPLOYEE) {
      return await this.employeeService.delete(id);
    }
    return await this.bossService.delete(id);
  }
}
