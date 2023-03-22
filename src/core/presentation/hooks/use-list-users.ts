import { QueryKey } from '@domain/dtos/query-key';
import { HttpClient } from '@domain/http-client/http-client';
import { ListUsers, ListUsersOutput } from '@use-cases/list-users';
import { useQuery } from 'react-query';

import { useContainer } from './use-container';

export const useListUsers = () => {
  const container = useContainer();

  return useQuery<ListUsersOutput, Error>(
    [QueryKey.listUsers],
    () => new ListUsers(container.get(HttpClient)).execute(),
    {
      retry: false,
      retryOnMount: false,
    }
  );
};
