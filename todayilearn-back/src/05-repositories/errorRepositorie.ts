import prisma from "../postgres/postgres";

async function upsertError(createError: CreateErrorParams) {
  return prisma.errors.create({
    data: {
      ...createError,
    },
  });
}

async function updateError(editError: EditErrorParams) {
  return prisma.errors.update({
    where: {
      id: editError.id,
    },
    data: {
      ...editError,
    },
  });
}

async function findUserIdbyErrorId(id: number) {
  const errorOwnerId = await prisma.errors.findMany({
    where: {
      id,
    },
  });

  return errorOwnerId[0].userId;
}

async function findErrors(term: string) {
  const prismaTerm = term.replaceAll(" ", " | ");
  const errors = prisma.errors.findMany({
    where: {
      OR: [
        {
          name: {
            search: prismaTerm,
            mode: "insensitive",
          },
        },
        {
          description: {
            search: prismaTerm,
            mode: "insensitive",
          },
        },
        {
          tags: {
            search: prismaTerm,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return errors;
}

async function deleteError(id: number) {
  return prisma.errors.delete({
    where: {
      id,
    },
  });
}

type Error = {
  id: number;
  userId: number;
  name: string;
  description: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateErrorParams = Omit<Error, "id" | "createdAt" | "updatedAt">;

export type EditErrorParams = Omit<Error, "createdAt" | "updatedAt">;

const errorRepository = {
  upsertError,
  findErrors,
  updateError,
  findUserIdbyErrorId,
  deleteError,
};
export default errorRepository;
