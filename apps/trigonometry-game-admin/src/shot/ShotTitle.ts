import { Shot as TShot } from "../api/shot/Shot";

export const SHOT_TITLE_FIELD = "id";

export const ShotTitle = (record: TShot): string => {
  return record.id?.toString() || String(record.id);
};
