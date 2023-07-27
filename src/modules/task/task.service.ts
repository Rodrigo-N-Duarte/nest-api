import { Injectable } from '@nestjs/common';
import { BossService } from '../boss/boss.service';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskService {
  constructor(private userService: UserService) {}

  async createTask(body) {}
}
