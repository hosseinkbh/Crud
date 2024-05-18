import {  Injectable} from "@nestjs/common";
import { PlaceModel, placeStatus } from "../../models/place.js";
import { Model } from "mongoose";
import { MongoObjectIdDTO, placeCreation } from "./place.dto.js";

@Injectable()
export class PlaceService {
constructor(private readonly placeModel : Model<PlaceModel>) {
}
async listPlaces (){
  return this.placeModel.find({status : placeStatus.OK})
}
async addPlace(body:placeCreation){
return this.placeModel.create(body)
}
  async deletePlace(id: MongoObjectIdDTO){
    return this.placeModel.updateOne(id,{Status:"Deleted"})
  }
  async updatePlace(id: MongoObjectIdDTO,body:Partial<placeCreation>){
    return this.placeModel.updateOne(id,{...body})
  }
}
