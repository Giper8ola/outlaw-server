import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ItemsTypeService } from './items-type.service';
import { CreateItemsTypeDto } from './dto/create-items-type.dto';
import { UpdateItemsTypeDto } from './dto/update-items-type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';
@ApiBearerAuth()
@ApiTags('items-type')
@Controller('items-type')
@AuthWithArea(AreasEnum.item)
export class ItemsTypeController {
    constructor(private readonly itemsTypeService: ItemsTypeService) {}

    @Post('create')
    async create(@Body() createItemsTypeDto: CreateItemsTypeDto) {
        return await this.itemsTypeService.create(createItemsTypeDto);
    }

    @Patch('update:id')
    async update(
        @Param('id') id: string,
        @Body() updateItemsTypeDto: UpdateItemsTypeDto
    ) {
        return await this.itemsTypeService.update(+id, updateItemsTypeDto);
    }

    @Delete('delete:id')
    async remove(@Param('id') id: string) {
        return await this.itemsTypeService.remove(+id);
    }
}
