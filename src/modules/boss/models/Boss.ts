import { Entity, OneToMany } from 'typeorm';
import { User } from '../../user/models/User';
import { Task } from '../../task/models/Task';

@Entity()
export class Boss extends User {
  @OneToMany(() => Task, (task) => task.owner)
  tasks: Task;
}
