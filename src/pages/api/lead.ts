import { HttpMethod } from '@domain/http-client/http-client';
import { createLead, deleteLead, getLeads } from '@lib/lead';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.GET:
      return res.status(200).json(await getLeads());

    case HttpMethod.POST: {
      try {
        const response = await createLead(req.body);
        return res.status(201).json(response);
      } catch (error: any) {
        return res.status(422).json({
          message: error.message,
        });
      }
    }

    case HttpMethod.DELETE:
      return res.status(200).json(await deleteLead(req.body));

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
