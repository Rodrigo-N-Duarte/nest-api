import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from './entities';

//// DEVELOPMENT
export const TypeOrmDBConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3307,
  username: 'root',
  password: 'root',
  database: 'nest-api',
  entities: Entities,
  synchronize: true,
});
