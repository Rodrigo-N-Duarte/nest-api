import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRoleEnum } from '../enums/UserRoleEnum';
import { Task } from '../../task/models/Task';
import { JoinColumn } from 'typeorm';
import { TaskUser } from '../../task-user/models/TaskUser';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(() => Task, (task) => task.users, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  tasks: TaskUser[];
}
