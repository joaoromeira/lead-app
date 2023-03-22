import { User } from '@core/domain/dtos/user';
import { QueryKey } from '@domain/dtos/query-key';
import { HttpClient } from '@domain/http-client/http-client';
import { CreateUser, CreateUserInput } from '@use-cases/create-user';
import { useMutation } from 'react-query';

import { useContainer } from './use-container';

type UseCreateUser = {
  cb: {
    success?: () => void;
    error?: () => void;
  };
};

export const useCreateUser = ({ cb }: UseCreateUser) => {
  const container = useContainer();

  return useMutation(
    QueryKey.listUsers,
    (body: CreateUserInput) =>
      new CreateUser(container.get(HttpClient)).execute(body),
    { retry: false, onSuccess: cb.success }
  );
};
