import 'reflect-metadata';
import { HttpStatusCode } from '@core/domain/http-client/http-client';
import { expect } from '@jest/globals';
import { HttpClientMock, useTestSetup } from '@mocks/use-test-setup';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { LeadForm } from './lead-form';

it('Should add user with success', async () => {
  const httpClient = HttpClientMock.prototype;
  const { render } = useTestSetup();

  jest.spyOn(httpClient, 'request').mockImplementation(() =>
    Promise.resolve({
      statusCode: HttpStatusCode.OK,
      data: {
        name: 'João Vinícius',
        email: 'vi.peres@icloud.com',
      },
    })
  );

  render(<LeadForm />);

  const addButton = await screen.findByTestId('button-save');

  expect(typeof addButton === 'object').toBe(true);

  fireEvent(addButton, new MouseEvent('click'));

  await waitFor(httpClient.request);

  expect(httpClient.request).toHaveBeenCalled();
});
