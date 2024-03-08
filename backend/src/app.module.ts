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
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        // entities: [],
        entities: [join(process.cwd(),'dist/**/*.entity.js')],
        synchronize: true,
        autoLoadEntities: true,
        
        
        /* with docker env */
        // type: 'postgres',
        // host: configService.get('DB_HOST_DOCKER'),
        // port: configService.get('DB_PORT_DOCKER'),
        // username: configService.get('DB_USER_DOCKER'),
        // password: configService.get('DB_PASS_DOCKER'),
        // database: configService.get('DB_NAME_DOCKER'),
        // entities: [join(process.cwd(),'dist/**/*.entity.js')],
        // synchronize: true,
        // autoLoadEntities: true,

        //without docker
        // type: 'postgres',
        // host: configService.get('DB_HOST'),
        // port: configService.get('DB_PORT'),
        // username: configService.get('DB_USER'),
        // password: configService.get('DB_PASS'),
        // database: configService.get('DB_NAME'),
        // entities: [join(process.cwd(),'dist/**/*.entity.js')],
        // synchronize: true,
        // do not use sync: true in real project


      })
    }),
    //CitiesModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
