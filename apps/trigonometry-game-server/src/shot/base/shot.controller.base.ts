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
import { ShotService } from "../shot.service";
import { ShotCreateInput } from "./ShotCreateInput";
import { Shot } from "./Shot";
import { ShotFindManyArgs } from "./ShotFindManyArgs";
import { ShotWhereUniqueInput } from "./ShotWhereUniqueInput";
import { ShotUpdateInput } from "./ShotUpdateInput";

export class ShotControllerBase {
  constructor(protected readonly service: ShotService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Shot })
  async createShot(@common.Body() data: ShotCreateInput): Promise<Shot> {
    return await this.service.createShot({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Shot] })
  @ApiNestedQuery(ShotFindManyArgs)
  async shots(@common.Req() request: Request): Promise<Shot[]> {
    const args = plainToClass(ShotFindManyArgs, request.query);
    return this.service.shots({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Shot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shot(
    @common.Param() params: ShotWhereUniqueInput
  ): Promise<Shot | null> {
    const result = await this.service.shot({
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
  @swagger.ApiOkResponse({ type: Shot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateShot(
    @common.Param() params: ShotWhereUniqueInput,
    @common.Body() data: ShotUpdateInput
  ): Promise<Shot | null> {
    try {
      return await this.service.updateShot({
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
  @swagger.ApiOkResponse({ type: Shot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShot(
    @common.Param() params: ShotWhereUniqueInput
  ): Promise<Shot | null> {
    try {
      return await this.service.deleteShot({
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
