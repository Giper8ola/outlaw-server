import { ApiProperty } from '@nestjs/swagger';

export class CreateShopCategoryDto {
    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    shopId: number;
}
