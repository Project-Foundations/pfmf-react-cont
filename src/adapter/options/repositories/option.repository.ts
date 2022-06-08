import { Option, OptionRepository } from "../../../domain/options";

export class OptionRepositoryImpl implements OptionRepository {
  async getAll(): Promise<Option[]> {
    const response = await fetch('http://localhost:3005/msBase/api/v1/options');
    const result = await response.json();
    return result.data;
  }
  
}