import {
  HttpClient,
  HttpMethod,
  HttpStatusCode,
} from '@core/domain/http-client/http-client';
import { Arg, Substitute } from '@fluffy-spoon/substitute';

import { DeleteLead, DeleteLeadInput } from './delete-lead';

it('Should make delete request with the correct body', async () => {
  const httpClient = Substitute.for<HttpClient>();

  httpClient
    .request(Arg.any())
    .resolves({ statusCode: HttpStatusCode.OK, data: {} });

  const input: DeleteLeadInput = {
    id: 1,
  };

  await new DeleteLead(httpClient).execute(input);

  httpClient.received().request({
    method: HttpMethod.DELETE,
    url: `/api/lead`,
    body: input,
  });
});
