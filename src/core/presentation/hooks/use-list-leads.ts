import { QueryKey } from '@domain/dtos/query-key';
import { HttpClient } from '@domain/http-client/http-client';
import { ListLeads, ListLeadsOutput } from '@use-cases/list-leads';
import { useQuery } from 'react-query';

import { useContainer } from './use-container';

export const useListLeads = () => {
  const container = useContainer();

  return useQuery<ListLeadsOutput, Error>(
    [QueryKey.listLeads],
    () => new ListLeads(container.get(HttpClient)).execute(),
    {
      retry: false,
      retryOnMount: false,
    }
  );
};
