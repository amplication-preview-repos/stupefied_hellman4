import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShotServiceBase } from "./base/shot.service.base";

@Injectable()
export class ShotService extends ShotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
