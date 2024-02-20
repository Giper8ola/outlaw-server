import { ApiProperty } from '@nestjs/swagger';

export class CreateShopDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    icon: any;
}
