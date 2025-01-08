import { Router } from "express";
import type { Request } from "express";
import type { RequestUser, User } from "../types/user";
import { readUsers, writeUsers } from "../lib/users";

const usersRouter = Router();

// CREATE ----------------------------------------------------------------------

// `POST /api/users`
usersRouter.post(
  "/api/users",
  async (request: Request<{}, {}, RequestUser>, response) => {
    // 클라이언트 요청 정보
    // console.log(request.body);

    // 서버 프로그래밍
    // 1. 데이터 파일 읽기
    const users = await readUsers();

    // 새롭게 생성될 사용자(User) 객체
    const newId = users.length + 1;
    // const newId = crypto.randomUUID();

    const newUser: User = {
      id: newId,
      ...request.body,
    };

    // 2. 데이터 파일 쓰기
    try {
      // 클라이언트에 응답
      // 성공한 경우
      await writeUsers(newUser);
      response.status(201).json(newUser);
    } catch (error: unknown) {
      // 실패한 경우
      response.status(401).json({
        message: "이런... 사용자 정보 생성에 실패했습니다.. 😭",
      });
    }
  }
);

// READ ------------------------------------------------------------------------

// `GET /api/users`
usersRouter.get("/api/users", async (request, response) => {
  try {
    const users = await readUsers();
    // throw new Error('oops');

    response.status(200).json(users);
  } catch (error: unknown) {
    response.status(500).json({
      message: "알 수 없는 오류가 발생했습니다! 😥",
    });
  }
});

// `GET /api/users/:id`
usersRouter.get("/api/users/:id", async (request, response) => {
  // request paramters /:id
  const { id } = request.params;

  try {
    const users = await readUsers();

    // 요청된 ID 값과 일치하는 사용자가 존재하는 지 검토
    const requestedUser = users.find((user) => user.id === Number(id));
    if (requestedUser) {
      // 요청한 사용자 정보가 있을 경우, 응답
      response.status(200).json(requestedUser);
    } else {
      // 요청한 사용자 정보가 없을 경우, 응답
      response.status(404).json({
        message: `요청한 사용자 ID "${id}" 정보가 존재하지 않습니다. 😥`,
      });
    }
  } catch (error: unknown) {
    response.status(500).json({
      message: "알 수 없는 오류가 발생했습니다! 😥",
    });
  }
});
// UPDATE ---------------------------------------------------------------------

// `PUT /api/users/:id`

// `PATCH /api/users/:id`

// DELETE ---------------------------------------------------------------------

// `DELETE /api/users/:id`

export default usersRouter;
