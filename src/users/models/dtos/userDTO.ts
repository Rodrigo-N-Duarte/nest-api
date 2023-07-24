import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
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

export class ResponseCreateUserDTO {
  id: number;
  name: string;
  email: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<ResponseCreateUserDTO>) {
    Object.assign(this, partial);
  }
}
