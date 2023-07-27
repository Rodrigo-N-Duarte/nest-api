import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { UserRoleEnum } from '../enums/UserRoleEnum';
import { Employee } from '../../employee/models/Employee';
import { Boss } from '../../boss/models/Boss';

export abstract class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsString()
  role: UserRoleEnum;
}

export abstract class UpdateUserDTO {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsString()
  password: string;
  @IsString()
  role: UserRoleEnum;
}

export class UserDTO {
  id: number;
  name: string;
  email: string;
  @Exclude()
  password: string;
  @Expose()
  role: UserRoleEnum;

  constructor(partial: Partial<UserDTO>) {
    Object.assign(this, partial);
    if (partial instanceof Employee) {
      this.role = UserRoleEnum.EMPLOYEE;
    }
    if (partial instanceof Boss) {
      this.role = UserRoleEnum.BOSS;
    }
  }
}
