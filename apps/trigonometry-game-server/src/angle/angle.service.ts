import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AngleServiceBase } from "./base/angle.service.base";

@Injectable()
export class AngleService extends AngleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
