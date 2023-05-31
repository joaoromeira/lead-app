import { QueryKey } from '@domain/dtos/query-key';
import { HttpClient } from '@domain/http-client/http-client';
import { DeleteLead, DeleteLeadInput } from '@use-cases/delete-lead';
import { useMutation } from 'react-query';

import { useContainer } from './use-container';

export const useDeleteLead = () => {
  const container = useContainer();

  return useMutation(
    QueryKey.listLeads,
    (body: DeleteLeadInput) =>
      new DeleteLead(container.get(HttpClient)).execute(body),
    { retry: false }
  );
};
