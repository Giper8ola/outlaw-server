import { ApiProperty } from '@nestjs/swagger';

export class CreateClustersStatDto {
    @ApiProperty()
    maxOnlineOnPeriod: number;

    @ApiProperty()
    maxServerOnline: number;

    @ApiProperty()
    clusterId: number;
}
