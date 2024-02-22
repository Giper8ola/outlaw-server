import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Role } from '../../modules/roles/entities/role.entity';
import { Item } from '../../modules/items/entities/item.entity';
import { ItemsType } from '../../modules/items-type/entities/items-type.entity';
import { ItemsProp } from '../../modules/items-prop/entities/items-prop.entity';
import { File } from '../../modules/files/entities/file.entity';
import { Category } from '../../modules/category/entities/category.entity';
import { CategoryItem } from '../../modules/category-item/entities/category-item.entity';
import { Shop } from '../../modules/shops/entities/shop.entity';
import { Server } from '../../modules/servers/entities/server.entity';
import { Cluster } from '../../modules/clusters/entities/cluster.entity';
import { ShopCategory } from '../../modules/shop-category/entities/shop-category.entity';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = databaseConfig.development;
                    break;
                case TEST:
                    config = databaseConfig.test;
                    break;
                case PRODUCTION:
                    config = databaseConfig.production;
                    break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new Sequelize(config);
            sequelize.addModels([
                User,
                Role,
                Item,
                ItemsType,
                ItemsProp,
                File,
                Category,
                CategoryItem,
                Shop,
                Server,
                Cluster,
                ShopCategory
            ]);
            await sequelize.sync();
            return sequelize;
        }
    }
];
