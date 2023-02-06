import { unauthorizedError } from "../errors/unauthorizedError";
import tutorialRepository from "../05-repositories/tutorialRepositorie";

async function createTutorial(
  userId: number,
  name: string,
  description: string,
  tags: string
) {
  const createTutorial = {
    userId,
    name,
    description,
    tags,
  };
  await tutorialRepository.createTutorial(createTutorial);
}

async function editTutorial(
  id: number, //id do tutorial
  userId: number, //id do usuario que quer editar (tem q ser o dono)
  name: string,
  description: string,
  tags: string
) {
  const tutorialOwnerId = await tutorialRepository.findUserIdbyTutorialId(id);

  if (tutorialOwnerId !== userId) {
    throw unauthorizedError();
  }

  const editTutorial = {
    id,
    userId,
    name,
    description,
    tags,
  };
  await tutorialRepository.updateTutorial(editTutorial);
}

async function readTutorials(term: string) {
  const tutorials = await tutorialRepository.findTutorials(term);

  return tutorials;
}

async function deleteTutorial(id: number, userId: number) {
  const tutorialOwnerId = await tutorialRepository.findUserIdbyTutorialId(id);
  if (tutorialOwnerId !== userId) {
    throw unauthorizedError();
  }

  return await tutorialRepository.deleteTutorial(id);
}

const tutorialService = {
  createTutorial,
  readTutorials,
  editTutorial,
  deleteTutorial,
};

export default tutorialService;
