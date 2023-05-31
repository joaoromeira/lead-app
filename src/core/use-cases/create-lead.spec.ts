import {
  HttpClient,
  HttpMethod,
  HttpStatusCode,
} from '@core/domain/http-client/http-client';
import { Arg, Substitute } from '@fluffy-spoon/substitute';

import { CreateLead, CreateLeadInput } from './create-lead';

it('Should make post request with the correct body', async () => {
  const httpClient = Substitute.for<HttpClient>();

  httpClient
    .request(Arg.any())
    .resolves({ statusCode: HttpStatusCode.CREATED, data: {} });

  const input: CreateLeadInput = {
    email: 'vi.peres@icloud.com',
    name: 'João Vinícius',
  };

  await new CreateLead(httpClient).execute(input);

  httpClient.received().request({
    method: HttpMethod.POST,
    url: `/api/lead`,
    body: input,
  });
});
