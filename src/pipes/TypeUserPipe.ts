import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { UserRole } from '../users/models/dtos/userDTO';

@Injectable()
export class TypeUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!Object.values(UserRole).includes(value)) {
      throw new BadRequestException(
        'Validation failed, the user type has to be an existent type',
      );
    }
    return value;
  }
}
