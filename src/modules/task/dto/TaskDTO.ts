import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsDate,
  IsInt,
  isNumber,
  isNumberString,
  IsString,
} from 'class-validator';

export abstract class CreateTaskDTO {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsDate()
  startDate: Date;
  @IsDate()
  endDate: Date;
  @IsInt()
  idUser: number;
}
