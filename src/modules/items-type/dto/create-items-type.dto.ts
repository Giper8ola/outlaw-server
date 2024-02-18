import { ApiProperty } from '@nestjs/swagger';

export class CreateItemsTypeDto {
    @ApiProperty()
    name: string;
}
