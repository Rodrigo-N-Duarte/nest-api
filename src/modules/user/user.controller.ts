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

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO): Promise<UserDTO> {
    return await this.userService.createUser(body);
  }

  @Get()
  async findAll(): Promise<UserDTO[]> {
    return await this.userService.findAll();
  }

  @Get('role/:role')
  async findAllByRole(
    @Param('role', new UserRolePipe()) role: UserRoleEnum,
  ): Promise<UserDTO[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserDTO> {
    return await this.userService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDTO,
  ): Promise<UserDTO> {
    return await this.userService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<UserDTO> {
    return await this.userService.delete(id);
  }
}
