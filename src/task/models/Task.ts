import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Boss } from '../../users/models/Boss';
import { Employee } from '../../users/models/Employee';

@Entity()
export class Task {
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
