import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './models/Task';
import { CreateTaskDTO } from './dto/TaskDTO';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async createTask(@Body() body: CreateTaskDTO): Promise<Task> {
    return await this.taskService.createTask(body);
  }
}
