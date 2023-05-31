import { Lead } from '@core/domain/dtos/lead';
import { HttpClient, HttpMethod } from '@domain/http-client/http-client';
import { inject } from 'inversify';

export type DeleteLeadInput = {
  id: number;
};

export type DeleteLeadOutput = Lead;

export type DeleteLeadResponse = Lead;

export class DeleteLead {
  public constructor(
    @inject(HttpClient)
    private readonly httpClient: HttpClient<DeleteLeadResponse>
  ) {}

  public async execute(body: DeleteLeadInput): Promise<DeleteLeadOutput> {
    const response = await this.httpClient.request({
      method: HttpMethod.DELETE,
      url: '/api/lead',
      body,
    });

    if (response.data === undefined) {
      return {
        id: 0,
        email: '',
        name: '',
      };
    }

    return response.data;
  }
}
