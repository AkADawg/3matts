import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type DeleteUserParams = {
  id: number;
};

const deleteUserFromDb = async ({ id }: DeleteUserParams) => {
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    console.log("removed user");
    await prisma.$disconnect();
  } catch (e) {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export default deleteUserFromDb;
