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
import { CreateUserDTO, UpdateUserDTO, UserDTO } from './dto/UserDTO';
import { UserRoleEnum } from './enums/UserRoleEnum';
import { UserRolePipe } from '../../pipes/UserRolePipe';
import { UserService } from './user.service';

@Controller('user/:role')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(
    @Param('role') role: UserRoleEnum,
    @Body() body: CreateUserDTO,
  ): Promise<UserDTO> {
    return await this.userService.getService(role).createUser(body);
  }

  @Get()
  async findAll(
    @Param('role', new UserRolePipe()) role: UserRoleEnum,
  ): Promise<UserDTO[]> {
    return await this.userService.getService(role).findAll();
  }

  @Get(':id')
  async findOne(
    @Param('role', new UserRolePipe()) role: UserRoleEnum,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserDTO> {
    return await this.userService.getService(role).findOne(id);
  }

  @Put(':id')
  async update(
    @Param('role') role: UserRoleEnum,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDTO,
  ): Promise<UserDTO> {
    return await this.userService.getService(role).update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('role') role: UserRoleEnum,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserDTO> {
    return await this.userService.getService(role).delete(id);
  }
}
