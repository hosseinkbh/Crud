import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { log } from "node:util";
import EnvironmentVariables from "./envCheck.js";

@Module({
  imports: [
    ConfigModule.forRoot({validate:EnvironmentVariables.validate,
    cache:true,isGlobal:true}),
    MongooseModule.forRootAsync({
      inject:[ConfigService],
      imports:[ConfigModule],
      useFactory:(configService :ConfigService<EnvironmentVariables,true>)=>({
        uri :configService.getOrThrow("MONGODB_URI"),
        connectionFactory(connection) {
          connection.on("connected",()=>console.log("MongoDb is connected successfully"))
          connection._events.connected();
          return connection;
        }
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
