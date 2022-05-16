import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export function hashPassword(password: string): Promise<string> {
  const hash = bcrypt.hash(password, SALT_ROUNDS, function (error, hash) {
    if (error) return null;
    return hash;
  });

  if (!hash) return null;
  return new Promise<string>((resolve) => resolve(hash));
}

export async function comparePassword(
  password: string,
  hashedPassword: string
) {
  return password === hashedPassword;

}
