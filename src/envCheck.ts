import { plainToInstance } from "class-transformer";
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateSync,
} from "class-validator";

export enum NodeEnvironments {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

export default class EnvironmentVariables {
  @IsNotEmpty()
  @IsNumber()
  PORT!: number;

  @IsNotEmpty()
  @IsEnum(NodeEnvironments)
  NODE_ENV!: NodeEnvironments;

  @IsNotEmpty()
  @IsString()
  MONGODB_URI!: string;

  @IsNotEmpty()
  @IsString()
  REDIS_HOST!: string;

  @IsNotEmpty()
  @IsNumber()
  REDIS_PORT!: number;

  @IsString()
  REDIS_URI!: string;

  @IsString()
  REDIS_PREFIX!: string;

  @IsNotEmpty()
  PROJECT_NAME!: string;
  @IsString()
  TEST_REDIS_HOST!: string;
  @IsNumber()
  TEST_REDIS_PORT!: number;
  @IsNumber()
  TEST_REDIS_DB!: number;
  @IsString()
  TEST_MONGODB_URI!: string;

  static validate(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance(EnvironmentVariables, config, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
    return validatedConfig;
  }
}
