/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Shot as PrismaShot } from "@prisma/client";

export class ShotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ShotCountArgs, "select">): Promise<number> {
    return this.prisma.shot.count(args);
  }

  async shots(args: Prisma.ShotFindManyArgs): Promise<PrismaShot[]> {
    return this.prisma.shot.findMany(args);
  }
  async shot(args: Prisma.ShotFindUniqueArgs): Promise<PrismaShot | null> {
    return this.prisma.shot.findUnique(args);
  }
  async createShot(args: Prisma.ShotCreateArgs): Promise<PrismaShot> {
    return this.prisma.shot.create(args);
  }
  async updateShot(args: Prisma.ShotUpdateArgs): Promise<PrismaShot> {
    return this.prisma.shot.update(args);
  }
  async deleteShot(args: Prisma.ShotDeleteArgs): Promise<PrismaShot> {
    return this.prisma.shot.delete(args);
  }
}