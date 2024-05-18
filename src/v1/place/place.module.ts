import { Module } from '@nestjs/common';
import { PlaceController } from "./place.controller.js";
import { PlaceService } from "./place.service.js";
import { PlaceModel } from "../../models/place.js";

@Module({
  imports: [
    PlaceModel
  ],
  controllers: [PlaceController],
  providers: [PlaceService],
})
export class AppModule {}
