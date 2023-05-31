import { Lead } from '@core/domain/dtos/lead';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type DeleteLeadInput = { id: number };

export const deleteLead = async ({ id }: DeleteLeadInput) => {
  const lead = await prisma.lead.delete({
    where: {
      id,
    },
  });
  return lead;
};
