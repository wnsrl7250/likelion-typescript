import { resolve } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import type User from "../types/user";

const filePath = resolve(__dirname, "../data/users.json");

// data/users.json 파일 읽기 함수
// fsPromises.readFile()
export async function readUsers(): Promise<User[]> {
  const usersString = await readFile(filePath, { encoding: "utf-8" });

  // JSON forat string - [ JSON.parse(jsonString) ] -> JavaScript Object
  // const usersJSON: User[] = JSON.parse(usersString);

  return await JSON.parse(usersString);
}

// data/users.json 파일 쓰기 함수
export async function writeUsers(newUser: User) {
  const users = await readUsers();
  users.push(newUser);
  const filePath = resolve(__dirname, "../data/users.json");
  await writeFile(filePath, JSON.stringify(users, null, 2), {
    encoding: "utf-8",
  });
}
