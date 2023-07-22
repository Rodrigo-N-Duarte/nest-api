import { IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  email: string;
}
