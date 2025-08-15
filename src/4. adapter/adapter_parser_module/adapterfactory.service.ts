/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ProviderAdapter } from './interfaces/provider.interface';
import { ProviderAAdapterService } from './adapters/provider-a-adapter.service';
import { ProviderBAdapterService } from './adapters/provider-b-adapter.service';

@Injectable()
export class AdapterFactoryService {
  private readonly adapters = new Map<string, ProviderAdapter>();

  constructor(
    private readonly providerAAdapter: ProviderAAdapterService,
    private readonly providerBAdapter: ProviderBAdapterService
  ) {
    this.adapters.set('providerA', this.providerAAdapter);
    this.adapters.set('providerB', this.providerBAdapter);
  }
  getAdapter(providerName: string): ProviderAdapter {
    const adapter = this.adapters.get(providerName);
    if (!adapter) {
      throw new Error(`Adapter for provider ${providerName} not found`);
    }
    return adapter;
  }
}
