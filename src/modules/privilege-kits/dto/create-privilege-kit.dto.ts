import { ApiProperty } from '@nestjs/swagger';

export class CreatePrivilegeKitDto {
    @ApiProperty()
    privilegeId: number;

    @ApiProperty()
    kitId: number;
}
