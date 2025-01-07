// ------------------------------------------------------------------------------
// 📌 중첩된 객체 (Nested Objects)
// ------------------------------------------------------------------------------
// - 객체가 객체를 중첩하더라도, 타입 에너테이션 작성 방법은 동일합니다.
// ------------------------------------------------------------------------------

// 아래 작성된 코드의 타입 별칭, 에너테이션을 설정합니다.

{
  type Movie = {
    title: {
      ko: string;
      en: string;
    };
    releaseDate: number;
    director: string;
    summary: string;
    price: number;
    vat: number;
  };

  const movieAinbo: MovieType = {
    title: {
      ko: "아인보: 아마존의 전설",
      en: "AINBO: SPIRIT OF THE AMAZON",
    },
    releaseDate: 2001,
    director: "호세 젤라다, 리처드 클라우스",
    summary: `
      신비의 숲 아마존 깊은 곳에 위치한 칸다모 마을.
      생명과 자연의 아름다움이 넘치던 칸다모는
      전설 속 악령 야쿠루나의 끔찍한 저주로 위험에 빠진다.
      
      최고의 사냥꾼을 꿈꾸는 소녀 ‘아인보’는 아마존을 구하기 위해
      자칭(?) 정령 안내자 ‘딜로’와 ‘바카’와 함께
      정글의 수호자 ‘모텔로 마마’를 찾아 떠난다.
      
      아마존의 숨겨진 비밀에 다가갈수록
      ‘아인보’ 자신이 생명의 땅을 되돌릴 선택 받은 존재라는 것을 알게 되는데…
      
      아마존이 선택한 소녀 영웅 ‘아인보’가 찾아온다!
    `,
    price: 22_000,
    vat: 0.1,
  };

  const movieHaeulbin = {
    title: {
      ko: "하얼빈",
      en: "Haeulbin",
    },
    director: "우민호",
    price: 14000,
    releaseDate: 2024,
    summary: `
      1908년 함경북도 신아산에서 안중근이 이끄는 독립군들은 일본군과의 전투에서 큰 승리를 거둔다.
      대한의군 참모중장 안중근은 만국공법에 따라 전쟁포로인 일본인들을 풀어주게 되고,
      이 사건으로 인해 독립군 사이에서는 안중근에 대한 의심과 함께 균열이 일기 시작한다.

      1년 후, 블라디보스토크에는 안중근을 비롯해 우덕순, 김상현, 공부인, 최재형, 이창섭 등
      빼앗긴 나라를 되찾기 위해 마음을 함께하는 이들이 모이게 된다.
      이토 히로부미가 러시아와 협상을 위해 하얼빈으로 향한다는 소식을 접한 안중근과 독립군들은 하얼빈으로 향하고,
      내부에서 새어 나간 이들의 작전 내용을 입수한 일본군들의 추격이 시작되는데…

      진심과 의심 사이,
      우리는 반드시 하얼빈으로 간다
    `,
    vat: 9.3,
  };

  type MovieType = typeof movieHaeulbin;

  const printMovieTitle = (movie: Movie) => {
    let { title } = movie;
    console.log(`${title.ko} (${title.en})`);
  };

  const calcurateMoviePrice = (movie: Movie) => {
    let { price, vat } = movie;
    return price + price * vat;
  };

  printMovieTitle(movieAinbo);
  calcurateMoviePrice(movieHaeulbin);
}
