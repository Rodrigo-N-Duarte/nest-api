import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Boss } from '../../boss/models/Boss';
import { Employee } from '../../employee/models/Employee';
import { IsString } from 'class-validator';

export abstract class CreateTaskDTO {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
  @ManyToOne(() => Boss, (boss) => boss.tasks)
  owner: Boss;
  @ManyToOne(() => Employee, (employee) => employee.tasks)
  employee: Employee;
}
