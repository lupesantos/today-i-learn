import userRepository from "../05-repositories/userRepositorie";
//import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sessionRepository from "../05-repositories/sessionRepository";

async function signInWithGoogle(email: string, name: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    const createNewUser = await userRepository.createUser(email, name);
    const token = await createSession(createNewUser.id);

    return {
      user: {
        id: createNewUser.id,
        email: createNewUser.email,
      },
      token,
    };
  }

  const token = await createSession(user.id);
  return {
    user: {
      id: user.id,
      email: user.email,
    },
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!);
  await sessionRepository.create(userId, token);

  return token;
}

const authService = {
  signInWithGoogle,
};

export default authService;
