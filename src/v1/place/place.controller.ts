import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PlaceService } from './place.service.js';
import { MongoObjectIdDTO, placeCreation } from './place.dto.js';

@Controller()
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get('/')
  getPlaces() {
    return this.placeService.listPlaces();
  }

  @Post('/')
  addPlace(@Body() body: placeCreation) {
    return this.placeService.addPlace(body);
  }

  @Delete('/:id')
  removePlace(@Param() id: MongoObjectIdDTO) {
    return this.placeService.deletePlace(id);
  }

  @Post('/id')
  updatePlace(@Param() id: MongoObjectIdDTO, @Body() body: placeCreation) {
    return this.placeService.updatePlace(id, body);
  }
}
