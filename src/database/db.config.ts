import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from './entities';

export const TypeOrmDBConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'pgsql',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'nestjs',
  entities: Entities,
  synchronize: true,
});
