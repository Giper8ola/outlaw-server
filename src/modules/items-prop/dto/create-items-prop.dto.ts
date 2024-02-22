import { ApiProperty } from '@nestjs/swagger';

export class CreateItemsPropDto {
    @ApiProperty({
        default: ''
    })
    name: string;

    @ApiProperty()
    fileId: number;

    @ApiProperty()
    price: number;

    @ApiProperty()
    gameId: string;

    @ApiProperty({
        default: 1
    })
    count: number;

    @ApiProperty()
    itemId: number;

    @ApiProperty({
        default: '1.12.2'
    })
    version: string;

    @ApiProperty()
    serverId: number;
}
