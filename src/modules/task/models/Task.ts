import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Boss } from '../../boss/models/Boss';
import { Employee } from '../../employee/models/Employee';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
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
