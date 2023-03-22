import { User } from '@domain/dtos/user';
import { HttpClient, HttpMethod } from '@domain/http-client/http-client';
import { inject } from 'inversify';

export type DeleteUserInput = {
  id: number;
};

export type DeleteUserOutput = User;

export type DeleteUserResponse = User;

export class DeleteUser {
  public constructor(
    @inject(HttpClient)
    private readonly httpClient: HttpClient<DeleteUserResponse>
  ) {}

  public async execute(body: DeleteUserInput): Promise<DeleteUserOutput> {
    const response = await this.httpClient.request({
      method: HttpMethod.DELETE,
      url: '/api/user',
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
