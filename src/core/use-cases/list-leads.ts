import { Lead } from '@core/domain/dtos/lead';
import { HttpClient, HttpMethod } from '@domain/http-client/http-client';
import { inject } from 'inversify';

export type ListLeadsOutput = Lead[];

export type ListLeadsResponse = Lead[];

export class ListLeads {
  public constructor(
    @inject(HttpClient)
    private readonly httpClient: HttpClient<ListLeadsResponse>
  ) {}

  public async execute(): Promise<ListLeadsOutput> {
    const response = await this.httpClient.request({
      method: HttpMethod.GET,
      url: '/api/lead',
    });

    if (response.data === undefined) {
      return [];
    }

    return response.data;
  }
}
