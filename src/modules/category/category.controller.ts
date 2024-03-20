import {
    Body,
    Controller,
    Delete,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Express } from 'express';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../../core/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.CATEGORY)
@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
    @UseInterceptors(
        FileInterceptor('icon', {
            dest: 'uploads'
        })
    )
    @ApiConsumes('multipart/form-data')
    @Post('create')
    create(
        @Body() createCategoryDto: CreateCategoryDto,
        @UploadedFile() icon: Express.Multer.File
    ) {
        return this.categoryService.create(createCategoryDto, icon);
    }

    @Patch('update:id')
    update(
        @Param('id') id: string,
        @Body() updateCategoryDto: UpdateCategoryDto
    ) {
        return this.categoryService.update(+id, updateCategoryDto);
    }

    @Delete('delete:id')
    remove(@Param('id') id: string) {
        return this.categoryService.remove(+id);
    }
}
