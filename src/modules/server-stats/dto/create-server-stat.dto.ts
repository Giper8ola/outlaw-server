import { ApiProperty } from '@nestjs/swagger';

export class CreateServerStatDto {
    @ApiProperty({
        default: 0
    })
    cur_online: number;

    @ApiProperty({
        default: 0
    })
    max_online: number;

    @ApiProperty()
    serverId: number;
}
