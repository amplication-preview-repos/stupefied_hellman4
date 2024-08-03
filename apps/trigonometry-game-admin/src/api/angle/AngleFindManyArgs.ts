import { AngleWhereInput } from "./AngleWhereInput";
import { AngleOrderByInput } from "./AngleOrderByInput";

export type AngleFindManyArgs = {
  where?: AngleWhereInput;
  orderBy?: Array<AngleOrderByInput>;
  skip?: number;
  take?: number;
};
