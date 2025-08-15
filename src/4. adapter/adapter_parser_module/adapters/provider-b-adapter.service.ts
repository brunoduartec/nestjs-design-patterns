/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ProviderAdapter } from '../interfaces/provider.interface';

interface ProviderBInput {
  fullName: string;
  emailAddress: string;
  dob: string;
}

@Injectable()
export class ProviderBAdapterService implements ProviderAdapter {
  transform(input: ProviderBInput): any {
    return {
      name: input.fullName,
      email: input.emailAddress,
      birthDate: new Date(input.dob),
    };
  }
}
