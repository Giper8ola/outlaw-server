import { ApiProperty } from '@nestjs/swagger';

export class CreatePrivilegeDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    duration: number;

    @ApiProperty()
    cost: number;
}
