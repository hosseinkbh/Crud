import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTimestampsConfig, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

@Schema({ timestamps: true, collection: 'airLines', versionKey: false })
export class AirLineModel {
  @Prop({ type:String,required:true })
  name!: string;
  @Prop({ min: 0, max: 5, default: 2.5 })
  rating!: number;
}

export const airLineSchema = SchemaFactory.createForClass(AirLineModel);
export type PlaceDocument = HydratedDocument<
  AirLineModel & SchemaTimestampsConfig
>;
airLineSchema.plugin(mongooseAggregatePaginate);
export const airLineModelDefinition: ModelDefinition = {
  name: AirLineModel.name,
  schema: airLineSchema,
};
