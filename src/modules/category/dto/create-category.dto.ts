import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { CategoryTypeEnum } from '../../../core/enums/CategoryTypeEnum';

export class CreateCategoryDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsEnum(CategoryTypeEnum)
    type: CategoryTypeEnum;

    @ApiProperty({ type: 'string', format: 'binary' })
    icon: any;
}
