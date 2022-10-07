import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type AddUserParams = {
  name: string;
  email: string;
};

const addUserToDb = async ({ name, email }: AddUserParams) => {
  try {
    console.log(name, email);
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    console.log(`added user ${user}`);
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export default addUserToDb;
