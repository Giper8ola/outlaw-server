import { ApiProperty } from '@nestjs/swagger';

export class CreatePrivilegeRuleDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    privilegeId: number
}
