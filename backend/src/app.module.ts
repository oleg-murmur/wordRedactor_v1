import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CitiesModule } from './cities/cities.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        // type: 'postgres',
        // host: 'db',
        // port: 5432,
        // username: 'postgres',
        // password: 'postgres',
        // database: 'postgres',
        // entities: [],
        // // entities: [join(process.cwd(),'dist/**/*.entity.js')]
        // synchronize: true,
        // autoLoadEntities: true,
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(),'dist/**/*.entity.js')],

        // do not use sync: true in real project
        synchronize: true,

      })
    }),
    //CitiesModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
