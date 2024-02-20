import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ServerPhasesEnum } from '../../../core/enums/ServerPhasesEnum';

export class CreateServerDto {
    @ApiProperty({
        default: '1.12.2'
    })
    version: string;

    @ApiProperty()
    ip: string;

    @ApiProperty()
    port: string;

    @ApiProperty()
    @IsEnum(ServerPhasesEnum)
    phase: ServerPhasesEnum;
}
