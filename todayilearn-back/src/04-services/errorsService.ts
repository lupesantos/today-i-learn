import errorRepository from "../05-repositories/errorRepositorie";
import { unauthorizedError } from "../errors/unauthorizedError";

async function createError(
  userId: number,
  name: string,
  description: string,
  tags: string
) {
  const createError = {
    userId,
    name,
    description,
    tags,
  };
  await errorRepository.upsertError(createError);
}

async function editError(
  id: number,
  userId: number,
  name: string,
  description: string,
  tags: string
) {
  const errorOwnerId = await errorRepository.findUserIdbyErrorId(id);

  if (errorOwnerId !== userId) {
    throw unauthorizedError();
  }
  const editError = {
    id,
    userId,
    name,
    description,
    tags,
  };
  await errorRepository.updateError(editError);
}

async function readErrors(term: string) {
  const errors = await errorRepository.findErrors(term);

  return errors;
}

async function deleteError(id: number, userId: number) {
  const errorOwnerId = await errorRepository.findUserIdbyErrorId(id);
  if (errorOwnerId !== userId) {
    throw unauthorizedError();
  }

  return await errorRepository.deleteError(id);
}

const tutorialService = {
  createError,
  readErrors,
  editError,
  deleteError,
};

export default tutorialService;
