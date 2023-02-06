import prisma from "../postgres/postgres";

async function createTutorial(createTutorial: CreateTutorialParams) {
  return prisma.tutorials.create({
    data: {
      ...createTutorial,
    },
  });
}

async function updateTutorial(editTutorial: EditTutorialParams) {
  return prisma.tutorials.update({
    where: {
      id: editTutorial.id,
    },
    data: {
      ...editTutorial,
    },
  });
}

async function findUserIdbyTutorialId(id: number) {
  const tutorialOwnerId = await prisma.tutorials.findMany({
    where: {
      id,
    },
  });

  return tutorialOwnerId[0].userId;
}

async function findTutorials(term: string) {
  const prismaTerm = term.replaceAll(" ", " | ");
  const tutorials = prisma.tutorials.findMany({
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

  return tutorials;
}

async function deleteTutorial(id: number) {
  return prisma.tutorials.delete({
    where: {
      id,
    },
  });
}

type Tutorial = {
  id: number;
  userId: number;
  name: string;
  description: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateTutorialParams = Omit<
  Tutorial,
  "id" | "createdAt" | "updatedAt"
>;

export type EditTutorialParams = Omit<Tutorial, "createdAt" | "updatedAt">;

const tutorialRepository = {
  createTutorial,
  findTutorials,
  updateTutorial,
  findUserIdbyTutorialId,
  deleteTutorial,
};
export default tutorialRepository;
