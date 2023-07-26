import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../users/models/Employee';
import { Boss } from '../users/models/Boss';
import { User } from '../users/models/User';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
