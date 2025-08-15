import { Injectable } from '@nestjs/common';
import { HttpRequest } from './http-request.model';

@Injectable()
export class HttpRequestBuilder {
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  private url: string;
  private headers: Record<string, string> = {};
  private queryParams: Record<string, string> = {};
  private body: unknown;

  setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  addQueryParam(key: string, value: string): this {
    this.queryParams[key] = value;
    return this;
  }

  setBody(body: unknown): this {
    this.body = body;
    return this;
  }

  build(): HttpRequest {
    if (!this.method || !this.url) {
      throw new Error('Method and URL are required');
    }

    return {
      method: this.method,
      url: this.url,
      headers: this.headers,
      queryParams: this.queryParams,
      body: this.body,
    };
  }
}
