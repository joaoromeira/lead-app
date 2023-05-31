import 'reflect-metadata';
import { HttpStatusCode } from '@core/domain/http-client/http-client';
import { HttpClientMock, useTestSetup } from '@mocks/use-test-setup';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import Home from '../pages/index';

it('Should render table with correct data', async () => {
  const httpClient = HttpClientMock.prototype;
  const { render } = useTestSetup();

  jest.spyOn(httpClient, 'request').mockImplementation(() =>
    Promise.resolve({
      statusCode: HttpStatusCode.OK,
      data: [
        {
          id: 1,
          name: 'João Vinícius',
          email: 'vi.peres@icloud.com',
        },
        {
          id: 2,
          name: 'Other',
          email: 'other@example.com',
        },
      ],
    })
  );

  render(<Home />);

  await waitFor(httpClient.request);

  expect(await screen.findAllByText('vi.peres@icloud.com')).exist;
  expect(await screen.findAllByText('other@example.com')).exist;
});

it('Should delete user with success', async () => {
  const httpClient = HttpClientMock.prototype;
  const { render } = useTestSetup();

  jest.spyOn(httpClient, 'request').mockImplementation(() =>
    Promise.resolve({
      statusCode: HttpStatusCode.OK,
      data: [
        {
          id: 1,
          name: 'João Vinícius',
          email: 'vi.peres@icloud.com',
        },
      ],
    })
  );

  render(<Home />);

  await waitFor(httpClient.request);

  const deleteButton = await screen.findByTestId(
    'button-delete-vi.peres@icloud.com'
  );

  expect(deleteButton).exist;

  fireEvent(deleteButton, new MouseEvent('click'));

  expect(await screen.findAllByText('vi.peres@icloud.com')).not.exist;
});
