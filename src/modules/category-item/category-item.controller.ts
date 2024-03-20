import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CategoryItemService } from './category-item.service';
import { UpdateCategoryItemDto } from './dto/update-category-item.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../../core/enums/AreasEnum';
import { CreateCategoryItemDto } from './dto/create-category-item.dto';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.CATEGORY)
@ApiTags('category-item')
@Controller('category-item')
export class CategoryItemController {
    constructor(private readonly categoryItemService: CategoryItemService) {}

    @Post('create')
    async create(@Body() createCategoryItemDto: CreateCategoryItemDto) {
        return await this.categoryItemService.create(createCategoryItemDto);
    }

    @Patch('update/:categoryId/:itemId')
    async update(
        @Param('categoryId') categoryId: string,
        @Param('itemId') itemId: string,
        @Body() updateCategoryItemDto: UpdateCategoryItemDto
    ) {
        return await this.categoryItemService.update(
            +categoryId,
            +itemId,
            updateCategoryItemDto
        );
    }

    @Delete('delete/:categoryId/:itemId')
    async remove(
        @Param('categoryId') categoryId: string,
        @Param('itemId') itemId: string
    ) {
        return await this.categoryItemService.remove(+categoryId, +itemId);
    }
}
