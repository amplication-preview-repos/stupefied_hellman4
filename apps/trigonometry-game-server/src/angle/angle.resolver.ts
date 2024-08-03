import * as graphql from "@nestjs/graphql";
import { AngleResolverBase } from "./base/angle.resolver.base";
import { Angle } from "./base/Angle";
import { AngleService } from "./angle.service";

@graphql.Resolver(() => Angle)
export class AngleResolver extends AngleResolverBase {
  constructor(protected readonly service: AngleService) {
    super(service);
  }
}
