// ------------------------------------------------------------------------------
// 📌 인터페이스(객체 타입) vs 타입 별칭 (그 외, 인터페이스로 구현이 까탈스러운 경우)
// ------------------------------------------------------------------------------
// - 인터페이스와 타입 별칭은 새로운 프로퍼티를 추가하거나, 확장하는 방법이 다릅니다.
// ------------------------------------------------------------------------------

// 새로운 프로퍼티 추가

{
  type Dog = {
    kind: string;
  };

  type Dog = {
    age: number;
  };
}
// 타입은 다른 Dog 만들어야 한다

{
  interface Dog {
    kind: string;
  }

  interface Dog {
    age: number;
  }
}

// 다른 타입 확장

{
  type Dog = {
    kind: string;
    age: number;
  };

  type SuperDog = Dog & {
    hasSuperPower: boolean;
  };
}

// 다른 인터페이스 확장

{
  interface Dog {
    kind: string;
    age: number;
  }

  interface SuperDog extends Dog {
    hasSuperPower: boolean;
  }
}
