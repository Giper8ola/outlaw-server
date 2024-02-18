import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    icon: any;

    @ApiProperty()
    typeId: number;
}
