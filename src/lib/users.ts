import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type User from "../types/user";

// data/users.json 파일 읽기 함수
// fsPromises.readFile()
export async function readUsers(): Promise<User[]> {
  const filePath = resolve(__dirname, "../data/users.json");
  const usersString = await readFile(filePath, { encoding: "utf-8" });

  // JSON forat string - [ JSON.parse(jsonString) ] -> JavaScript Object
  // const usersJSON: User[] = JSON.parse(usersString);

  return await JSON.parse(usersString);
}

// data/users.json 파일에 쓰기 함수
export function writeUsers() {}
