import { AreasEnum } from '../../../core/enums/AreasEnum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export class CreateRoleDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsEnum({ enum: AreasEnum, default: [], isArray: true })
    areas: AreasEnum[] = [];
}
