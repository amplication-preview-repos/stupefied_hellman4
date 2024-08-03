import * as graphql from "@nestjs/graphql";
import { CannonResolverBase } from "./base/cannon.resolver.base";
import { Cannon } from "./base/Cannon";
import { CannonService } from "./cannon.service";

@graphql.Resolver(() => Cannon)
export class CannonResolver extends CannonResolverBase {
  constructor(protected readonly service: CannonService) {
    super(service);
  }
}
