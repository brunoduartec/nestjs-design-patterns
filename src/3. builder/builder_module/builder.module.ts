/*
https://docs.nestjs.com/modules
*/

import { BuilderController } from './builder.controller';
import { BuilderService } from './builder.service';
import { HttpModule as AxiosModule } from '@nestjs/axios';

import { Module } from '@nestjs/common';
import { HttpRequestBuilder } from './http-request.builder';

@Module({
  imports: [AxiosModule],
  controllers: [BuilderController],
  providers: [BuilderService, HttpRequestBuilder],
})
export class BuilderModule {}
