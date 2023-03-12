import { Restaurant } from '../type/Restaurant';

export const restaurants: Restaurant[] = [
  {
    category: '한식',
    name: '피양콩할마니',
    distance: 10,
    description: `평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니.`,
    isFavorite: false,
  },
  {
    category: '중식',
    name: '친친',
    distance: 5,
    description: `Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.`,
    isFavorite: false,
  },
  {
    category: '일식',
    name: '잇쇼우',
    distance: 10,
    description: `잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다.`,
    isFavorite: false,
  },
  {
    category: '양식',
    name: '이태리키친',
    distance: 20,
    description: `늘 변화를 추구하는 이태리키친입니다.`,
    isFavorite: false,
  },
  {
    category: '아시안',
    name: '호아빈 삼상점',
    distance: 15,
    description: `푸짐한 양에 국물이 일품인 쌀국수`,
    isFavorite: false,
  },
  {
    category: '기타',
    name: '도스타코스 선릉점',
    distance: 5,
    description: `멕시칸 캐주얼 그릴`,
    isFavorite: false,
  },
];
