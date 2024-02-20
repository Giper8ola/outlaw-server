import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ServerPhasesEnum } from '../../../core/enums/ServerPhasesEnum';

export class CreateClusterDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsEnum(ServerPhasesEnum)
    phase: ServerPhasesEnum;

    @ApiProperty({ type: 'string', format: 'binary' })
    icon: any;
}
