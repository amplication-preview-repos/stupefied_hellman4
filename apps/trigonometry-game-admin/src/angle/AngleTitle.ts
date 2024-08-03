import { Angle as TAngle } from "../api/angle/Angle";

export const ANGLE_TITLE_FIELD = "id";

export const AngleTitle = (record: TAngle): string => {
  return record.id?.toString() || String(record.id);
};
