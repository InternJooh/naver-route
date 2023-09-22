interface Title {
  link: string;
  name: string;
}

// 홈
export const homeNavData:Title[] = [
  {
    link: 'mail',
    name: '메일'
  },
  {
    link: 'cafe',
    name: '카페'
  },
  {
    link: 'blog',
    name: '블로그'
  },
  {
    link: 'shop',
    name: '쇼핑'
  },
  {
    link: 'news',
    name: '뉴스'
  },
  {
    link: 'finance',
    name: '증권'
  },
  {
    link: 'land',
    name: '부동산'
  },
  {
    link: 'map',
    name: '지도'
  },
  {
    link: 'comic',
    name: '웹툰'
  }
]

// 카페
export const cafeNavData:Title[] = [
  {
    link: '',
    name: '카페홈'
  },
  {
    link: 'themes',
    name: '주제별'
  },
  {
    link: 'areas',
    name: '지역별'
  },
  {
    link: "rankings",
    name: "랭킹"
  },
  {
    link: "powers",
    name: "대표카페"
  },
  {
    link: "my-update",
    name: "내소식"
  },
  {
    link: "chat",
    name: "채팅"
  }
]

// 블로그
export const blogNavData:Title[] = [
  {
    link: '',
    name: '블로그 홈'
  },
  {
    link: 'theme',
    name: '주제별 보기'
  },
  {
    link: 'this-month',
    name: '이달의 블로그'
  },
  {
    link: 'official',
    name: '공식블로그'
  },
  {
    link: 'challenge',
    name: '챌린지 프로그램'
  }
]

// 쇼핑
export const shopNavData:Title[] = [
  {
    link: '',
    name: '홈' 
  },
  {
    link: 'logistics',
    name: '도착보장'
  },
  {
    link: 'fashion',
    name: 'FashionTown' 
  },
  {
    link: 'luxury',
    name: '럭셔리'
  }, 
  {
    link: 'living',
    name: '리빙윈도' 
  },
  {
    link: 'food',
    name: '푸드윈도'
  },
  {
    link: 'grocery',
    name: '장보기' 
  },
  {
    link: 'kids',
    name: '키즈윈도'
  },
  {
    link: 'pet',
    name: '펫' 
  },
  {
    link: 'play',
    name: '플레이윈도'
  },
  {
    link: 'art',
    name: '아트윈도' 
  },
  {
    link: 'book',
    name: '도서'
  },   
  {
    link: 'mr',
    name: 'MR.'
  },
  {
    link: 'one-plus',
    name: '원쁠딜'
  },
  {
    link: 'plan',
    name: '기획전'
  },
  {
    link: 'hot-item',
    name: '핫아이템'
  },
  {
    link: 'aitems',
    name: 'AiTEMS'
  }
]

// 뉴스 홈
export const newsNavData:Title[] = [
  {
    link: '',
    name: '언론사별'
  },
  {
    link: 'politics',
    name: '정치'
  },
  {
    link: 'economy',
    name: '경제'
  },
  {
    link: 'social',
    name: '사회'
  },
  {
    link: 'life-culture',
    name: '생활/문화'
  },
  {
    link: 'it-science',
    name: 'IT/과학'
  },
  {
    link: 'world',
    name: '세계'
  },
  {
    link: 'ranking',
    name: '랭킹'
  },
  {
    link: 'paper',
    name: '신문보기'
  },
  {
    link: 'opinion',
    name: '오피니언'
  },
  {
    link: 'tv',
    name: 'TV'
  },
  {
    link: 'fact-check',
    name: '팩트체크'
  },
  {
    link: 'algorithm',
    name: '알고리즘 안내'
  }
]

// 뉴스 홈 헤더
export const newsHeadData:Title[] = [
  {
    link: '/',
    name: 'N'
  },
  {
    link: '',
    name: '뉴스'
  },
  {
    link: '/entertain-news',
    name: '연예'
  },
  {
    link: '/sport-news',
    name: '스포츠'
  },
  {
    link: '/weather-news',
    name: '날씨'
  },
  {
    link: '/premium-news',
    name: '프리미엄'
  }
]

// 뉴스 연예 사이드
export const eNewsSideData: Title[] = [
  {
    link: '/',
    name: ''
  },
  {
    link: '',
    name: 'TV연예'
  },
  {
    link: '/news',
    name: '뉴스'
  }
]

// 뉴스 연예 메인
export const eNewsNavData:Title[] = [
  {
    link: '',
    name: 'TV연예홈'
  },
  {
    link: 'tv',
    name: 'TV'
  },
  {
    link: 'photo',
    name: '포토'
  },
  {
    link: 'ranking',
    name: '랭킹'
  },
  {
    link: 'movie',
    name: '영화'
  },
  {
    link: 'recent',
    name: '최신뉴스'
  }
]

// 뉴스 스포츠
export const sNewsNavData:Title[] = [
  {
    link: '',
    name: '스포츠 홈'
  },
  {
    link: 'kbaseball',
    name: '야구'
  },
  {
    link: 'wbaseball',
    name: '해외야구'
  },
  {
    link: 'ksoccer',
    name: '축구'
  },
  {
    link: 'wsoccer',
    name: '해외축구'
  },
  {
    link: 'basketball',
    name: '농구'
  },
  {
    link: 'volleyball',
    name: '배구'
  },
  {
    link: 'golf',
    name: '골프'
  },
  {
    link: 'ag-general',
    name: 'AG·일반'
  },
  {
    link: 'e-sport',
    name: 'e스포츠'
  },
  {
    link: 'press',
    name: '연재'
  },
  {
    link: 'scoreboard',
    name: '오늘의 경기'
  },
  {
    link: 'ranking',
    name: '랭킹'
  }
]

// 뉴스 스포츠 헤더
export const sNewsHeadData:Title[] = [
  {
    link: '/',
    name: ''
  },
  {
    link: '',
    name: ''
  },
  {
    link: 'community',
    name: '커뮤니티'
  },
  {
    link: '/news',
    name: '뉴스'
  },
  {
    link: '/weather-news',
    name: '날씨'
  },
  {
    link: '/entertain-news',
    name: '연예'
  }
]

// 뉴스 날씨
export const wNewsNavData:Title[] = [
  {
    link: '/',
    name: 'N'
  },
  {
    link: '',
    name: '날씨'
  },
  {
    link: '',
    name: '홈'
  },
  {
    link: 'compare',
    name: '예보비교'
  },
  {
    link: 'air',
    name: '미세먼지'
  },
  {
    link: 'map',
    name: '지도'
  },
  {
    link: 'video',
    name: '영상'
  },
  {
    link: 'warning',
    name: '기상특보'
  }
]

// 증권
export const financeNavData:Title[] = [
  {
    link: '',
    name: '증권 홈'
  },
  {
    link: 'domestic',
    name: '국내증시'
  },
  {
    link: 'world',
    name: '해외증시'
  },
  {
    link: 'market-index',
    name: '시장지표'
  },
  {
    link: 'research',
    name: '리서치'
  },
  {
    link: 'news',
    name: '뉴스'
  },
  {
    link: 'my',
    name: 'MY'
  }
]

// 부동산
export const landNavData:Title[] = [
  {
    link: '',
    name: '부동산 홈'
  },
  {
    link: 'for-sale',
    name: '매물'
  },
  {
    link: 'parcel',
    name: '분양'
  },
  {
    link: 'news',
    name: '뉴스'
  },
  {
    link: 'community',
    name: '커뮤니티'
  },
  {
    link: 'auction',
    name: '경매'
  },
  {
    link: 'my-page',
    name: 'MY페이지'
  },
  {
    link: 'my-house',
    name: '우리집'
  }
]

// 지도
export const mapNavData:Title[] = [
  {
    link: '',
    name: '지도 홈'
  },
  {
    link: 'directions',
    name: '길찾기'
  },
  {
    link: 'bus',
    name: '버스'
  },
  {
    link: 'subway',
    name: '지하철'
  },
  {
    link: 'train',
    name: '기차'
  },
  {
    link: 'save',
    name: '저장'
  },
  {
    link: 'more',
    name: '더보기'
  }
]

// 웹툰
export const comicNavData:Title[] = [
  {
    link: '',
    name: '홈'
  },
  {
    link: 'webtoon',
    name: '웹툰'
  },
  {
    link: 'best-challenge',
    name: '베스트도전'
  },
  {
    link: 'challenge',
    name: '도전만화'
  },
  {
    link: 'my-page',
    name: '마이페이지'
  }
]
