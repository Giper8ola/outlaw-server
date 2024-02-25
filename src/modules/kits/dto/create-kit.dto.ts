import { ApiProperty } from '@nestjs/swagger';

export class CreateKitDto {
    @ApiProperty()
    privilegeId: number;

    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    name: string;
}
