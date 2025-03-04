// ------------------------------------------------------------------------------
// 📌 추상 클래스 (Abstract Classes)
// ⭐️ URL : https://bit.ly/3WWBzVY
// ------------------------------------------------------------------------------
// - 인터페이스와 마찬가지로 추상 클래스는 클래스가 구현해야 할 것을 정의할 때 사용합니다.
// - 인터페이스와 달리, 추상 클래스는 실제 클래스이므로 작동 가능한 메서드를 포함할 수 있습니다.
// - 하지만 추상 클래스는 추상이므로 인스턴스를 생성할 수 없습니다.
// ------------------------------------------------------------------------------

// 직원(Employee) `추상 클래스`를 설계합니다.
// - 직원은 이름(name), 나이(age), 성별(gender)이 요구됩니다.
// - 직원은 받는 임금(pay)이 얼마 받는지 대답할 수 있습니다.
// - 직원과 반갑게 인사(greet)를 나눌 수 있습니다.

// 풀 타임 직원(Fulltime Employee) `클래스`를 설계합니다.
// - Employee 추상 클래스를 확장합니다.
// - 직원은 연봉(salary)을 결정해 계약합니다.

// 파트 타임 직원(Parttmie Employee) `클래스`를 설계합니다.
// - Employee 추상 클래스를 확장합니다.
// - 직원은 근무 시간(working hour) 및 시급(hourly wage)을 결정해 계약합니다.

{
  abstract class Employee {
    constructor(
      public name: string,
      public age: number,
      public gender: "male" | "female"
    ) {}

    pay() {}
    greet() {}
  }

  // const hy = new Employee("박혜영", 22, "female");

  class FulltimeEmployee extends Employee {}

  class ParttimieEmployee {}
}
