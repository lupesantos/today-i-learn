import prisma from "../postgres/postgres";

async function create(userId: number, token: string) {
  return prisma.session.create({
    data: {
      userId,
      token,
    },
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
