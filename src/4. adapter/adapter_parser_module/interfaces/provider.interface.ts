import { StandardOutputDto } from '../dto/standard-output.dto';

export interface ProviderAdapter {
  transform(input: any): StandardOutputDto;
}
