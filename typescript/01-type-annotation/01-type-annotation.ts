// -----------------------------------------------------------------------------------------
// 📌 타입 주석(Type Annotation)이란?
// ⭐️ URL : https://bit.ly/3GbCf3E
// -----------------------------------------------------------------------------------------
// - "이 변수는 string 타입이다."
// - "이 함수는 boolean 타입을 반환한다."
// - "이 함수는 2개의 number 타입을 전달 받고, number 타입을 반환한다."
// - "이 객체는 colors 프로퍼티를 꼭 포함해야 하며, string 타입으로만 구성된 array 타입이어야 한다."

// -----------------------------------------------------------------------------------------
// 📌 변수 타입(Valiable Types) → `let variable:type = value`
// -----------------------------------------------------------------------------------------
// - 변수 선언 과정에서 설정된 타입 이외의 다른 타입이 할당 시도된 경우, 타입 오류입니다.
//
// - PRIMITIVE TYPES
//   - null, undefined, void, number, string, boolean
//   - any, unknown, never
// - OBJECT TYPES
//   - object, array, function
//   - enum, tuple, etc.
// -----------------------------------------------------------------------------------------

{
  // 문자 타입(string type)
  let message: string = `변수 타입은 변수 이름 뒤에 ':type'을 작성하는 것을 말하며 이를 "타입 에너테이션"이라 부릅니다.`;

  // 숫자 타입(number type)
  let currentYear: number = 2022;

  // 불리언 타입(boolean type)
  let isWatch: boolean = false;

  // message = 19;

  console.log(message);
}
