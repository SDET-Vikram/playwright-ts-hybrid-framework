import type { APIRequestContext, APIResponse } from '@playwright/test';

export class RestfulBookerClient {
  constructor(private readonly request: APIRequestContext) {}

  async getBookingIds(): Promise<APIResponse> {
    return this.request.get('/booking');
  }
}
