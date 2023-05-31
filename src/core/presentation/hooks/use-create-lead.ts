import { Lead } from '@core/domain/dtos/lead';
import { QueryKey } from '@domain/dtos/query-key';
import { HttpClient } from '@domain/http-client/http-client';
import { CreateLead, CreateLeadInput } from '@use-cases/create-lead';
import { useMutation } from 'react-query';

import { useContainer } from './use-container';

export const useCreateLead = () => {
  const container = useContainer();

  return useMutation(
    QueryKey.listLeads,
    (body: CreateLeadInput) =>
      new CreateLead(container.get(HttpClient)).execute(body),
    {
      retry: false,
    }
  );
};
