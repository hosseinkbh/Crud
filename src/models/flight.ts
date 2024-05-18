import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument,  SchemaTimestampsConfig, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { AirLineModel } from "./airLine.js";
export enum FlightClass  {
  FIRST_CLASS = "FIRST_CLAS",
  ECONOMY_CLASS = "ECONOMY_CLASS"
}
@Schema({ timestamps: true, collection: 'airLines', versionKey: false ,})
export class flightModel {
  @Prop({ type: Types.ObjectId, ref: 'AirLineModel' ,required:true })
  airLine!: AirLineModel;
  @Prop({ enum: FlightClass, type: String, default: FlightClass.ECONOMY_CLASS,required:true  })
  class!: FlightClass;
  @Prop({ type: Date, required:true })
  start!: Date;
  @Prop({ type: Date ,required:true })
  end!: Date;
}

export const flightSchema = SchemaFactory.createForClass(flightModel);
export type flightDocument = HydratedDocument<
  flightModel & SchemaTimestampsConfig
>;
flightSchema.plugin(mongooseAggregatePaginate);
export const flightModelDefinition: ModelDefinition = {
  name: flightModel.name,
  schema: flightSchema,
};
