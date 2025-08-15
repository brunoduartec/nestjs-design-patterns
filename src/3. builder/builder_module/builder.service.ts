/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HttpRequest } from './http-request.model';
import { HttpRequestBuilder } from './http-request.builder';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';

@Injectable()
export class BuilderService {

  constructor(
    private readonly httpService: HttpService,
    private readonly httpRequestBuilder: HttpRequestBuilder,
  ) {}

  async send(body: MessageDataDto): Promise<any> {
    const request: HttpRequest = this.httpRequestBuilder
      .setMethod('POST')
      .setUrl('https://jsonplaceholder.typicode.com/posts')
      .addHeader('Content-Type', 'application/json')
      .setBody({ title: 'Mensagem a enviar', body: body.conteudo, userId: body.cliente.id ?? 1 })
      .build();

    const config = {
      headers: request.headers,
      params: request.queryParams,
    };

    const response = await firstValueFrom(
      this.httpService.request({
        method: request.method,
        url: request.url,
        data: request.body,
        ...config,
      }),
    );

    return response.data;
  }
}