import { User } from '@core/domain/dtos/user';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type DeleteUserInput = { id: number };

export const deleteUser = async ({ id }: DeleteUserInput) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
