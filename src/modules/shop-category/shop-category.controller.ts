import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ShopCategoryService } from './shop-category.service';
import { CreateShopCategoryDto } from './dto/create-shop-category.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../../core/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.SHOP)
@ApiTags('shop-category')
@Controller('shop-category')
export class ShopCategoryController {
    constructor(private readonly shopCategoryService: ShopCategoryService) {}

    @Post('create')
    async create(@Body() createShopCategoryDto: CreateShopCategoryDto) {
        return await this.shopCategoryService.create(createShopCategoryDto);
    }

    @Delete('update:id')
    async remove(@Param('id') id: string) {
        return await this.shopCategoryService.remove(+id);
    }
}
