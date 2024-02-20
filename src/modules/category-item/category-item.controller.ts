import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CategoryItemService } from './category-item.service';
import { UpdateCategoryItemDto } from './dto/update-category-item.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';
import { CreateCategoryItemDto } from './dto/create-category-item.dto';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.category)
@ApiTags('category-item')
@Controller('category-item')
export class CategoryItemController {
    constructor(private readonly categoryItemService: CategoryItemService) {}

    @Post('create')
    async create(@Body() createCategoryItemDto: CreateCategoryItemDto) {
        return await this.categoryItemService.create(createCategoryItemDto);
    }

    @Patch('create:id')
    async update(
        @Param('id') id: string,
        @Body() updateCategoryItemDto: UpdateCategoryItemDto
    ) {
        return await this.categoryItemService.update(
            +id,
            updateCategoryItemDto
        );
    }

    @Delete('update:id')
    async remove(@Param('id') id: string) {
        return await this.categoryItemService.remove(+id);
    }
}
