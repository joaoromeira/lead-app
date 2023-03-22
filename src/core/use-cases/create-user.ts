import { User } from '@domain/dtos/user';
import { HttpClient, HttpMethod } from '@domain/http-client/http-client';
import { inject } from 'inversify';

export type CreateUserInput = Omit<User, 'id'>;

export type CreateUserOutput = User;

export type CreateUserResponse = User;

export class CreateUser {
  public constructor(
    @inject(HttpClient)
    private readonly httpClient: HttpClient<CreateUserResponse>
  ) {}

  public async execute(body: CreateUserInput): Promise<CreateUserOutput> {
    const response = await this.httpClient.request({
      method: HttpMethod.POST,
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
