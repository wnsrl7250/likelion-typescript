// ------------------------------------------------------------------------------
// 📌 튜플 타입 (Tuples type)
// ------------------------------------------------------------------------------
// - 튜플은 TypeScript에만 존재하는 특수한 타입입니다. (JavaScript에는 존재하지 않음)
// - 고정된 길이의 배열을 말하며, 초강성 배열처럼 특정 타입으로 정렬되는 배열입니다.
// ------------------------------------------------------------------------------

// 숫자 또는 문자 타입을 항목으로 허용하는 배열은 다음과 같이 타입을 지정할 수 있습니다.

{
  let stuff: Array<string | number> = ["생수병", "텀블러", "전자렌지", 101];

  stuff = [202, "TV", "Radio"];
}

// 같은 방법으로 RGBA 타입을 지정해보았습니다.
// 그런데 RGBA 타입이 잘못되었어도 오류로 감지하지 않네요?
// 오류가 감지되도록 타입을 지정해봅니다.

{
  type RGBA = [number, number, number, string]; // [Red(number), Green(number), Blue(number), Alpha(string)] / [r,g,b,a] / lenth = 4

  let rgba: RGBA = [255, 255, 255, "34.5%"];

  // 잘못된 값 타입 😟
  // rgba = ['30%', 100, 200, 0];

  // rgba = [0, 0, 0, '100%', 'ef];
}

// HTTP_Response 타입이 정상적으로 작동되도록 타입을 지정합니다.

{
  // type HTTP_Response = [number, string];
  type HTTP_Response = [200 | 201 | 404, "OK" | "CREATED" | "NOT FOUND"];

  const SUCCESS: HTTP_Response = [200, "OK"];
  const NOT_FOUND: HTTP_Response = [404, "NOT FOUND"];
  const CREATED: HTTP_Response = [201, "CREATED"];
  const UNKNOWN_ERROR: HTTP_Response = [1920, "UNKNOWN_ERROR"];
  const STATUS: HTTP_Response[] = [SUCCESS, NOT_FOUND, CREATED];
}
