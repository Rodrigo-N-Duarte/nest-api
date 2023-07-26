import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { User } from '../User';
import { Employee } from '../Employee';
import { Boss } from '../Boss';

export enum UserRole {
  EMPLOYEE = 'employee',
  BOSS = 'boss',
}

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
  role: UserRole;
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
  role: UserRole;
}

export class UserDTO {
  id: number;
  name: string;
  email: string;
  @Exclude()
  password: string;
  role: string;

  constructor(partial: Partial<UserDTO>) {
    Object.assign(this, partial);
    const userDTO = new UserDTO(partial);
    if (partial instanceof Employee) {
      userDTO.role = 'employee';
    } else if (partial instanceof Boss) {
      userDTO.role = 'boss';
    }
  }
}
