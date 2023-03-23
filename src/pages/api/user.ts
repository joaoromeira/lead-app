import { HttpMethod } from '@domain/http-client/http-client';
import { createUser, deleteUser, getUsers } from '@lib/user';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.GET:
      return res.status(200).json(await getUsers());

    case HttpMethod.POST:
      return res.status(201).json(await createUser(req.body));

    case HttpMethod.DELETE:
      return res.status(200).json(await deleteUser(req.body));

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
