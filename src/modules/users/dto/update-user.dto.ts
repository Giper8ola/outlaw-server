import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { CreateUserDto } from './CreateUserDto';

class AdditionUpdateUserValues {
    @ApiProperty()
    roleId: number;
}

export class UpdateUserDto extends IntersectionType(
    CreateUserDto,
    AdditionUpdateUserValues
) {}
