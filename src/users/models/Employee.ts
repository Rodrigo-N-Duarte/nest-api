import { Entity, OneToMany } from 'typeorm';
import { User } from './User';
import { Task } from '../../task/models/Task';

@Entity()
export class Employee extends User {
  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task;
}
