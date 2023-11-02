"use server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signUp = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return "User with that email already exists.";
  }

  const passWord = bcrypt.hashSync(password);

  await prisma.user.create({
    data: {
      email,
      password: passWord,
    },
  });

  return "Successfully created new User!";
};
