// ------------------------------------------------------------------------------
// 📌 지정되지 않은 프로퍼티 (Excess Properties)
// ⭐️ URL : https://bit.ly/3E6AUbW
// ------------------------------------------------------------------------------
// - 객체 에너테이션 지정된 속성 외 다른 속성이 포함된 경우 사용자의 실수일 확률이 높습니다.
// - 객체 리터럴이 직접 전달된 경우, 타입 검사는 이를 감지해 오류를 발생시킵니다.
// - 변수에 참조되어 전달될 경우, 타입 검사는 이를 오류로 감지하지 않는 듯 보입니다.
// ------------------------------------------------------------------------------

{
  const suyeon: {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  } = {
    name: '수연',
    gender: '여성',
    isMarried: true,
    age: 36,
  };

  function printGender(user: { gender: string }): void {
    console.log(user.gender);
  }

  // 함수에 직접 전달하는 객체 리터럴의 경우, 타입 검사에 걸려 오류가 발생합니다.
  printGender({
    name: '현민성',
    gender: '남성',
    age: 29,
  });

  const minsung = {
    name: '현민성',
    gender: '남성',
    age: 29,
  };

  // 반면 객체 참조를 전달한 경우, 오류를 발생시키지 않습니다.
  // 아마도 변수에 할당된 데이터의 경우 해당 프로퍼티만 소유한다면
  // 타입 검사에서 문제로 보지 않는 듯 합니다.
  printGender(minsung);
}
