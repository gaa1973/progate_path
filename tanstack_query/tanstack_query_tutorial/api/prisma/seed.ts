import {PrismaClient} from "@prisma/client";

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
  },
];

const prisma = new PrismaClient();

async function main() {
  await createUsers();
}

async function createUsers() {
  for (const user of users) {
    await prisma.user.create({data: user});
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
