import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsersFromDb = async () => {
  // Return the first user
  console.log("req received 2");

  try {
    const users = await prisma.user.findMany();
    console.log(`got users ${users}`);
    await prisma.$disconnect();
    return users;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export default getUsersFromDb;
