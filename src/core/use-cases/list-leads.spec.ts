import {
  HttpClient,
  HttpMethod,
  HttpStatusCode,
} from '@core/domain/http-client/http-client';
import { Arg, Substitute } from '@fluffy-spoon/substitute';

import { ListLeads } from './list-leads';

it('Should make get request', async () => {
  const httpClient = Substitute.for<HttpClient>();

  httpClient
    .request(Arg.any())
    .resolves({ statusCode: HttpStatusCode.OK, data: {} });

  await new ListLeads(httpClient).execute();

  httpClient.received().request({
    method: HttpMethod.GET,
    url: `/api/lead`,
  });
});
