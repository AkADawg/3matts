import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserFromDb = async () => {
  // Return the first user
  console.log("req received 2");

  try {
    const users = await prisma.user.findMany();
    console.log(users);
    console.log(`got users ${users[0]}`);
    await prisma.$disconnect();
    return users[0];
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export default getUserFromDb;
