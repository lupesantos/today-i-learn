import prisma from "../postgres/postgres";

async function findByEmail(email: string) {
  const user = prisma.users.findUnique({
    where: {
      email,
    },
  });

  return user;
}

async function createUser(email: string, name: string) {
  return prisma.users.create({
    data: {
      name,
      email,
    },
  });
}

const userRepository = {
  findByEmail,
  createUser,
};

export default userRepository;
