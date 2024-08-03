/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CannonWhereInput } from "./CannonWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CannonOrderByInput } from "./CannonOrderByInput";

@ArgsType()
class CannonFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CannonWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CannonWhereInput, { nullable: true })
  @Type(() => CannonWhereInput)
  where?: CannonWhereInput;

  @ApiProperty({
    required: false,
    type: [CannonOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CannonOrderByInput], { nullable: true })
  @Type(() => CannonOrderByInput)
  orderBy?: Array<CannonOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CannonFindManyArgs as CannonFindManyArgs };
