import {
  HttpClient,
  HttpStatusCode,
} from '@core/domain/http-client/http-client';
import { ContainerProvider } from '@core/presentation/hooks/use-container';
import { Queries, queries, render, RenderResult } from '@testing-library/react';
import { Container } from 'inversify';
import { QueryClient, QueryClientProvider } from 'react-query';

export class HttpClientMock extends HttpClient {
  public request() {
    return Promise.resolve({ statusCode: HttpStatusCode.OK });
  }
}

export type Setup<
  Q extends Queries = typeof queries,
  C extends Element | DocumentFragment = HTMLElement
> = {
  container: Container;
  render: (children: unknown) => RenderResult<Q, C>;
};

export const useTestSetup = () => {
  const container = new Container();

  container.bind(HttpClient).to(HttpClientMock);

  return {
    container,
    render: (children: any) =>
      render(children, {
        wrapper: (props) => (
          <ContainerProvider container={container}>
            <QueryClientProvider client={new QueryClient()}>
              {props.children}
            </QueryClientProvider>
          </ContainerProvider>
        ),
      }),
  };
};
