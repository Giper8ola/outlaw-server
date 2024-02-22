import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ItemsPropService } from './items-prop.service';
import { CreateItemsPropDto } from './dto/create-items-prop.dto';
import { UpdateItemsPropDto } from './dto/update-items-prop.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.item)
@ApiTags('item-prop')
@Controller('items-prop')
export class ItemsPropController {
    constructor(private readonly itemsPropService: ItemsPropService) {}

    @Post('create')
    async create(@Body() createItemsPropDto: CreateItemsPropDto) {
        return await this.itemsPropService.create(createItemsPropDto);
    }

    @Patch('update:id')
    async update(
        @Param('id') id: string,
        @Body() updateItemsPropDto: UpdateItemsPropDto
    ) {
        return await this.itemsPropService.update(+id, updateItemsPropDto);
    }

    @Delete('delete:id')
    async remove(@Param('id') id: string) {
        return await this.itemsPropService.remove(+id);
    }
}
