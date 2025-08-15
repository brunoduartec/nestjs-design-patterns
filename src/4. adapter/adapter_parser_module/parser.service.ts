/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AdapterFactoryService } from './adapterfactory.service';

@Injectable()
export class ParserService {
  constructor(private readonly adapterFactoryService: AdapterFactoryService) {
  }

  parseData(providerName: string, inputData: any): any {
    const adapter = this.adapterFactoryService.getAdapter(providerName);
    return adapter.transform(inputData);
  }
}
