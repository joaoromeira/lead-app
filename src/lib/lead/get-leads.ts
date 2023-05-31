import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getLeads = async () => {
  const leads = await prisma.lead.findMany();
  return leads;
};
