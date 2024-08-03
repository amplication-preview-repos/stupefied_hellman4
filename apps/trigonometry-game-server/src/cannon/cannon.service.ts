import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CannonServiceBase } from "./base/cannon.service.base";

@Injectable()
export class CannonService extends CannonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
