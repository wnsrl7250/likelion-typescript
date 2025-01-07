// --------------------------------------------------------------------------
// 📌 진실 여부 가드 (Truthiness Guards)
// ⭐️ URL : https://bit.ly/3WWODdM
// --------------------------------------------------------------------------
// - 진실 여부 가드는 값이 true 또는 false인 경우를 구별하여 처리할 경우를 말합니다.
// - 값이 null 또는 undefined 여서 오류가 발생하는 것을 막을 때 사용합니다.
// --------------------------------------------------------------------------

{
  function printLetters(words?: string): void {
    if (words) {
      for (const letter of words) {
        console.log(letter);
      }
    } else {
      console.error("words가 존재하지 않습니다.");
    }
  }

  printLetters("진실 혹은 거짓!");
  printLetters();
}
