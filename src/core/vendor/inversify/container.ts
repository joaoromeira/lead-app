import { HttpClient } from '@domain/http-client/http-client';
import { AxiosHttpClient } from '@vendor/axios/axios';
import { Container } from 'inversify';

const container = new Container();

container.bind(HttpClient).to(AxiosHttpClient);

export { container };
