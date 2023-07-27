import { Module } from '@nestjs/common';
import { BossService } from './boss.service';
import { BossRepository } from './boss.repository';

@Module({
  providers: [BossService, BossRepository],
  exports: [BossService, BossRepository],
})
export class BossModule {}
