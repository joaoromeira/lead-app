import { QueryKey } from '@domain/dtos/query-key';
import { HttpClient } from '@domain/http-client/http-client';
import { DeleteUser, DeleteUserInput } from '@use-cases/delete-user';
import { useMutation } from 'react-query';

import { useContainer } from './use-container';

type UseDeleteUser = {
  cb: {
    success?: () => void;
    error?: () => void;
  };
};

export const useDeleteUser = ({ cb }: UseDeleteUser) => {
  const container = useContainer();

  return useMutation(
    QueryKey.listUsers,
    (body: DeleteUserInput) =>
      new DeleteUser(container.get(HttpClient)).execute(body),
    { retry: false, onSuccess: cb.success }
  );
};
