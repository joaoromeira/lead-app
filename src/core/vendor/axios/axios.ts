import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@domain/http-client/http-client';
import axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';

type Error = {
  response: AxiosResponse;
};

@injectable()
export class AxiosHttpClient extends HttpClient {
  public async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        ...data,
        data: data.body,
      });
    } catch (error) {
      axiosResponse = (error as Error).response;
    }

    return {
      statusCode: axiosResponse?.status,
      data: axiosResponse?.data,
    };
  }
}
