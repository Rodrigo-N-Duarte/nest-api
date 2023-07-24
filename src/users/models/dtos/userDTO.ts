import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

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
}

export class UserDTO {
  id: number;
  name: string;
  email: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<UserDTO>) {
    Object.assign(this, partial);
  }
}
