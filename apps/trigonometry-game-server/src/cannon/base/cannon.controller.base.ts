/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CannonService } from "../cannon.service";
import { CannonCreateInput } from "./CannonCreateInput";
import { Cannon } from "./Cannon";
import { CannonFindManyArgs } from "./CannonFindManyArgs";
import { CannonWhereUniqueInput } from "./CannonWhereUniqueInput";
import { CannonUpdateInput } from "./CannonUpdateInput";

export class CannonControllerBase {
  constructor(protected readonly service: CannonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cannon })
  async createCannon(@common.Body() data: CannonCreateInput): Promise<Cannon> {
    return await this.service.createCannon({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Cannon] })
  @ApiNestedQuery(CannonFindManyArgs)
  async cannons(@common.Req() request: Request): Promise<Cannon[]> {
    const args = plainToClass(CannonFindManyArgs, request.query);
    return this.service.cannons({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cannon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cannon(
    @common.Param() params: CannonWhereUniqueInput
  ): Promise<Cannon | null> {
    const result = await this.service.cannon({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Cannon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCannon(
    @common.Param() params: CannonWhereUniqueInput,
    @common.Body() data: CannonUpdateInput
  ): Promise<Cannon | null> {
    try {
      return await this.service.updateCannon({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Cannon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCannon(
    @common.Param() params: CannonWhereUniqueInput
  ): Promise<Cannon | null> {
    try {
      return await this.service.deleteCannon({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}