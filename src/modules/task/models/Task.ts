import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/models/User';
import { JoinTable } from 'typeorm';
import { TaskUser } from '../../task-user/models/TaskUser';

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
  @OneToMany(() => TaskUser, (taskUser) => taskUser.tasks, {
    cascade: true,
    lazy: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  users: TaskUser[];
}
