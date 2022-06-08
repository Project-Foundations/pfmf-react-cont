import { Option } from "../entities";

export interface OptionRepository {
  getAll(): Promise<Option[]>;
}