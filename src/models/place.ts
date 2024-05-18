import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTimestampsConfig, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

export enum placeStatus {
  OK="OK",
  DELETED ="DELETED"
}
@Schema({ timestamps: true, collection: "places", versionKey: false })
export class PlaceModel {
  @Prop({type:String,required:true})
  name!:string;
  @Prop({type:String,required:true})
  lat!: string;
  @Prop({type:String,required:true})
  long!: string;
  @Prop({type:String,required:true})
  GMT!:string
  @Prop({type:String,enum :placeStatus ,required:true,default : placeStatus.OK})
  Status!:placeStatus
}

export const PlaceSchema = SchemaFactory.createForClass(PlaceModel);
export type PlaceDocument = HydratedDocument<
  PlaceModel & SchemaTimestampsConfig
>;
PlaceSchema.plugin(mongooseAggregatePaginate);
export const PlaceModelDefinition: ModelDefinition = {
  name: PlaceModel.name,
  schema: PlaceSchema,
};
