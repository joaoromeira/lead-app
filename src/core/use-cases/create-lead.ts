import { Lead } from '@core/domain/dtos/lead';
import { HttpClient, HttpMethod } from '@domain/http-client/http-client';
import { inject } from 'inversify';

export type CreateLeadInput = Omit<Lead, 'id'>;

export type CreateLeadOutput = Lead;

export type CreateLeadResponse = Lead;

export class CreateLead {
  public constructor(
    @inject(HttpClient)
    private readonly httpClient: HttpClient<CreateLeadResponse>
  ) {}

  public async execute(body: CreateLeadInput): Promise<CreateLeadOutput> {
    const response = await this.httpClient.request({
      method: HttpMethod.POST,
      url: '/api/lead',
      body,
    });

    if (response.statusCode === 422) {
      throw new Error('Email already used');
    }

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
