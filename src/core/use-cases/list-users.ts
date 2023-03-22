import { User } from '@domain/dtos/user';
import { HttpClient, HttpMethod } from '@domain/http-client/http-client';
import { inject } from 'inversify';

export type ListUsersOutput = User[];

export type ListUsersResponse = User[];

export class ListUsers {
  public constructor(
    @inject(HttpClient)
    private readonly httpClient: HttpClient<ListUsersResponse>
  ) {}

  public async execute(): Promise<ListUsersOutput> {
    const response = await this.httpClient.request({
      method: HttpMethod.GET,
      url: '/api/user',
    });

    if (response.data === undefined) {
      return [];
    }

    return response.data;
  }
}
