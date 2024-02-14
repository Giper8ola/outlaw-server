import { AreasEnum } from '../enums/AreasEnum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export class CreateRoleDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsEnum(AreasEnum, { each: true })
    areas: AreasEnum[];
}
