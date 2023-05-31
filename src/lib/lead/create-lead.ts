import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const createLead = async (data: Prisma.LeadCreateInput) => {
  const isEmailUnavailable = await prisma.lead.findFirst({
    where: {
      email: data.email,
    },
  });

  if (isEmailUnavailable) {
    throw new Error('Email already used');
  }

  const lead = await prisma.lead.create({
    data,
  });

  return lead;
};
