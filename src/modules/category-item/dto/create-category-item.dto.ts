import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryItemDto {
    @ApiProperty()
    itemId: number;

    @ApiProperty()
    categoryId: number;

    @ApiProperty({
        required: false,
        default: null
    })
    poses: number;
}
