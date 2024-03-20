import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';
import { UserModule } from './modules/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ShopsModule } from './modules/shops/shops.module';
import { ItemsModule } from './modules/items/items.module';
import { ItemsTypeModule } from './modules/items-type/items-type.module';
import { ItemsPropModule } from './modules/items-prop/items-prop.module';
import { FilesModule } from './modules/files/files.module';
import { CategoryModule } from './modules/category/category.module';
import { CategoryItemModule } from './modules/category-item/category-item.module';
import { ClustersModule } from './modules/clusters/clusters.module';
import { ServersModule } from './modules/servers/servers.module';
import { ShopCategoryModule } from './modules/shop-category/shop-category.module';
import { PrivilegesModule } from './modules/privileges/privileges.module';
import { KitsModule } from './modules/kits/kits.module';
import { PrivilegeKitsModule } from './modules/privilege-kits/privilege-kits.module';
import { PrivilegeRulesModule } from './modules/privilege-rules/privilege-rules.module';
import { ClustersStatsModule } from './modules/clusters-stats/clusters-stats.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './core/tasks/tasks.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        UserModule,
        AuthModule,
        DatabaseModule,
        PassportModule,
        ConfigModule.forRoot({ isGlobal: true }),
        RolesModule,
        JwtModule.register({ global: true }),
        ShopsModule,
        ItemsModule,
        ItemsTypeModule,
        ItemsPropModule,
        FilesModule,
        CategoryModule,
        CategoryItemModule,
        ClustersModule,
        ServersModule,
        ShopCategoryModule,
        PrivilegesModule,
        KitsModule,
        PrivilegeKitsModule,
        PrivilegeRulesModule,
        ClustersStatsModule,
        TasksModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
