import { IsMongoId, IsNotEmpty, IsString } from "class-validator";


export class placeCreation {
  @IsNotEmpty()
  @IsString()
  name!:string;
  @IsNotEmpty()
  @IsString()
  lat!: string;
  @IsNotEmpty()
  @IsString()
  long!: string;
  @IsNotEmpty()
  @IsString()
  GMT!:string
}
export class MongoObjectIdDTO {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  id!: string;
}
