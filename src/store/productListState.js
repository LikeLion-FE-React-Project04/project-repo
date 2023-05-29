import { atom, atomFamily, selector, selectorFamily } from 'recoil';

// 상품 데이터
export const initialProductList = [
  {
    id: 'product-rksk',
    name: '[대구 반할만떡] 유부호만두',
    description: '유부로 속을 든든히 채운 군만두',
    price: 6900,
    saleRatio: 0.24,
    salePrice: 5244,
    image: {
      thumbnail: '/assets/product/ubuho/thumbnail.jpg',
      view: '/assets/product/ubuho/detail-view.jpg',
      banner: '/assets/product/ubuho/detail-banner.jpg',
      info: '/assets/product/ubuho/detail-info.jpg',
      alt: '유부호 만두',
    },
    stock: 3,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '대구 반할만떡',
    storageType: 'frozen',
    explanation:
      "떡볶이 마니아라면 한 번쯤은 '반할만떡'이라는 단어를 들어보셨을 거예요. 대구 반야월 초등학교 앞 골목길에서 1973년부터 떡볶이와 만두를 팔아 온 가게, '반야월 할매 만두와 떡볶이'의 줄임말인데요. 이번에는 유부와 당면으로 속을 채워 부드러움이 돋보이는 유부호만두를 준비했답니다. 속재료에 간이 골고루 배어있어서 다른 양념을 더하지 않아도 맛있게 먹을 수 있고요. 찹쌀가루를 더한 만두피 덕분에 겉은 바삭, 속은 쫀득한 식감이 일품이지요. 에어프라이어나 프라이팬에 구워 바삭바삭한 군만두로 즐겨보세요. ",
  },
  {
    id: 'product-ekfk',
    name: '[풀무원] 탱탱쫄면 (4개입)',
    description: '튀기지 않아 부드럽고 매콤한',
    price: 4980,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/b82195c9-24f5-4b27-a742-d8f0757e68b5.jpg',
      view: 'https://product-image.kurly.com/product/image/b82195c9-24f5-4b27-a742-d8f0757e68b5.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20230131/gv00000257547_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230131/gv10000481218_1.jpg',
      alt: '풀무원 탱탱쫄면',
    },
    stock: 11,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '풀무원',
    storageType: 'temperature',
    explanation:
      '쫄면의 진가는 매콤새콤한 양념과 탱탱한 면발에서 찾을 수 있지요. 풀무원은 이 맛을 더 부담 없이 즐길 수 있도록 튀기지 않고 만든 탱탱쫄면을 선보입니다. 밀가루와 감자 전분을 적절히 배합해 탄력이 좋고, 입에 넣었을 때는 찰지게 씹히죠. 고추장을 넣어 숙성한 비빔장은 자연스럽고 깊은 맛을 냅니다. 간단하게 조리해 마지막 한 가닥까지 탱탱한 식감을 즐겨보세요. 취향에 따라 다양한 고명을 올려 드셔도 좋아요.',
  },
  {
    id: 'product-akqk',
    name: '[홍대주꾸미] 주꾸미 볶음 300g (냉동)',
    description: '매콤달콤한 마력의 밥도둑',
    price: 7900,
    saleRatio: 0.13,
    salePrice: 6800,
    image: {
      thumbnail: '/assets/product/jukkumi/thumbnail.jpg',
      view: '/assets/product/jukkumi/detail-view.jpg',
      banner: '/assets/product/jukkumi/detail-banner.jpg',
      info: '/assets/product/jukkumi/detail-info.jpg',
      alt: '홍대 주꾸미',
    },
    stock: 8,
    category: '수산ㆍ해산ㆍ건어물',
    karlyOnly: true,
    brand: '홍대주꾸미',
    storageType: 'cold',
    explanation:
      '감칠맛 나는 고추장 양념과 쫄깃한 주꾸미가 만난 홍대 주꾸미 볶음을 소개합니다. 양념 된 주꾸미가 담겨있어 해동 후 잠깐 볶아주기만 하면 완성이에요. 좋아하는 야채나 떡, 면 사리 등의 부재료를 넣으면 더욱 풍성하게 즐길 수 있죠. 남은 양념에 김 가루를 넣어 밥을 볶아 먹으면 여느 주꾸미 맛집 부럽지 않답니다. 매콤달콤한 맛에 정신없이 먹다 보면 금세 밥 한 공기를 비우게 될 거예요.',
  },
  {
    id: 'product-tkwk',
    name: '[강남면옥] 소갈비찜',
    description: '보는 맛과 먹는 맛 모두 푸짐',
    price: 29800,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: '/assets/product/kangnam/thumbnail.jpg',
      view: '/assets/product/kangnam/detail-view.jpg',
      banner: '/assets/product/kangnam/detail-banner.jpg',
      info: '/assets/product/kangnam/detail-info.jpg',
      alt: '강남면옥 소갈비찜',
    },
    stock: 2,
    category: '국ㆍ반찬ㆍ메인요리',
    karlyOnly: true,
    brand: '강남면옥',
    storageType: 'temperature',
    explanation:
      '강남면옥의 갈비찜은 보기만 해도 마음이 넉넉해집니다. 큼지막한 뼈에 살이 제대로 붙어 감탄사를 절로 불러일으키죠. 하지만 그렇다고 해서 먹는 맛을 소홀히 할 순 없어요. 강남면옥은 호주산 청정우의 갈비를 꼼꼼하게 선별한 후, 반나절 이상 핏물을 제거했습니다. 삶은 갈비는 갖은 과일이 들어가 자연스러운 단맛이 나는 양념에 한 번 더 삶고, 양념과 갈비의 기름기를 꼼꼼하게 걷어냈지요. 그래서 강남면옥의 소갈비찜은 국물이 맑고 맛이 참 깔끔해요. 여기에 새송이버섯과 고추, 대추로 보기 좋은 고명까지 올렸으니 푸짐한 한 끼 식사로 부족함이 없습니다. 잘 데운 후 강남면옥을 대표하는 맛을 즐겨보세요. 남은 국물에 밥을 볶아 먹으면 완벽한 마무리가 될 거예요. ',
  },
  {
    id: 'product-ckzk',
    name: "[Karly's] 한돈 삼겹 베이컨",
    description: '무항생제 한돈 삼겹살의 고소한 풍미 그대로',
    price: 4500,
    saleRatio: 0.25,
    salePrice: 3375,
    image: {
      thumbnail: '/assets/product/bacon/thumbnail.jpg',
      view: '/assets/product/bacon/detail-view.jpg',
      banner: '/assets/product/bacon/detail_banner.jpg',
      info: '/assets/product/bacon/detail_info.jpg',
      alt: '칼리 한돈 삼겹 베이컨',
    },
    stock: 13,
    category: '정육ㆍ계란',
    karlyOnly: true,
    brand: "Karly's",
    storageType: 'cold',
    explanation:
      '고소한 감칠맛을 가득 선사하는 베이컨, 여러 번의 테스트를 통해 완성한 칼리스 한돈 삼겹 베이컨으로 좀 더 안심하고 쫄깃하게 즐겨보세요. 칼리는 무항생제 한돈 삼겹살을 참나무에서 훈연하고 저온에서 숙성해가며, 특유의 풍미가 더욱 진하게 담길 수 있도록 고민했어요. 잘 숙성된 베이컨은 한층 쫄깃쫄깃하게 즐길 수 있도록 두께감 있게 썰어냈죠. 생산 과정에서 붉은 색을 띄는 코치닐추출색소를 넣지 않았기에 더욱 안심이니, 노릇하게 구워 부담 없이 즐겨보세요. ',
  },
  {
    id: 'product-aaaa',
    name: '유명산지 설향딸기 500g',
    description: '유명산지에서 전하는 제철 딸기',
    price: 11900,
    saleRatio: 0.07,
    salePrice: 10990,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1608801577622l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20201224/gv10000146606_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20201224/gv20000146480_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221222/gv00000459448_1.jpg',
      alt: '유명산지 설향딸기 500g',
    },
    stock: 13,
    category: '과일ㆍ견과ㆍ쌀',
    karlyOnly: false,
    brand: '유명산지',
    storageType: 'frozen',
    explanation:
      "붉게 잘 영근 딸기로 이 계절을 더 향긋하게 물들여보세요. 국내 딸기 유명산지에서 그때 그때 더 맛있고 품질 좋은 딸기를 골라 싱싱하게 보내드릴게요. 딸기 중에서도 우리나라를 대표하는 '설향' 품종으로 준비했는데요. 통통하고 야무진 모양의 설향은 시원하면서도 상쾌한 단맛을 안겨준답니다. 신선하게 드실 수 있는 양으로 보내드릴테니 함뿍 배어 나오는 새콤달콤한 과즙을 즐겨보세요.",
  },
  {
    id: 'product-aaab',
    name: "[Karly's] 양념 소불고기 1kg (냉장)",
    description: '100g당 가격: 1,899원',
    price: 19990,
    saleRatio: 0.05,
    salePrice: 18990,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/165304027922l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210804/gv20000208743_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20210804/gv00000208742_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220217/gv40000281235_1.jpg',
      alt: '양념 소불고기 1kg (냉장)',
    },
    stock: 4,
    category: '정육ㆍ계란',
    karlyOnly: true,
    brand: "Karly's",
    storageType: 'cold',
    explanation:
      '호불호 없는 메인 요리를 꼽자면 양념 소불고기가 빠지지 않을 거예요. 달짝지근한 양념이 고루 밴 야들한 소불고기는 온 가족 밥반찬으로 딱 좋은 식재료인데요. 칼리는 맛 좋은 소불고기를 부담 없이 즐길 수 있도록 넉넉한 1kg 대용량으로 준비했어요. 육가공 전문 브랜드, 견우푸드와 손 잡고 질 좋은 소고기에 너무 짜거나 달지 않은 은근한 감칠맛을 입혀 완성했답니다. 냉장고에 구비해두고 마땅한 반찬이 떠오르지 않는 순간, 언제든지 꺼내 즐겨보세요. 명절 음식으로 활용하기에도 제격일 거에요.',
  },
  {
    id: 'product-aaac',
    name: '[이연복의 목란] 짬뽕 2인분 (맵기선택)',
    description: '입맛에 맞게 고르는 인기 메뉴',
    price: 13500,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1657518987370l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220711/gv10000336082_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220711/gv00000336080_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220711/gv30000336081_1.jpg',
      alt: '짬뽕 2인분 (맵기선택)',
    },
    stock: 13,
    category: '면ㆍ양념ㆍ오일',
    karlyOnly: true,
    brand: '이연복의 목란',
    storageType: 'cold',
    explanation:
      '칼리에서 큰 사랑을 받고 있는 목란의 짬뽕, 이제 입맛에 맞게 골라 보세요. 국물이 얼큰한 오리지널과 누구나 부담 없이 즐길 수 있는 마일드까지 두 가지로 준비했답니다. 후루룩 넘어가는 중화면을 넉넉하게 담고, 구수한 국물에는 매콤한 불맛을 더해 한결 든든해요. 해산물과 야채 등 건더기가 실해 집에서 한 끼를 해결하기에도 아쉬움이 없죠. 면을 삶고 국물을 데워 대가의 맛을 즐겨보세요.',
  },
  {
    id: 'product-aaad',
    name: '[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)',
    description: '100g 당 5166원',
    price: 15500,
    saleRatio: 0.1,
    salePrice: 13975,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/165303917855l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210513/gv20000183220_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20200821/gv00000115282_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20200821/gv20000115287_1.jpg',
      alt: '호주산 목초육 치마살',
    },
    stock: 4,
    category: '정육ㆍ계란',
    karlyOnly: false,
    brand: '브룩클린688',
    storageType: 'temperature',
    explanation:
      '호주 멜버른 브룩클린에는 세계적인 육류가공업체인 JBS그룹의 육가공장, 688 가공장이 있습니다. 최첨단 처리 시설을 갖춘 이 공장에서 생산되는 브룩클린688을 만나보세요. 좋은 품질과 합리적인 가격을 자랑하는 브랜드이죠. 고깃결이 곱고 일정해 부드러운 식감을 느낄 수 있는 치마살을 만나보세요. 소금과 후추를 더해 가볍게 구워내는 것만으로 충분하답니다. 촉촉하게 배어 나오는 육즙과 야들야들한 질감이 식사의 만족도를 한층 끌어올려 줄 거예요.',
  },
  {
    id: 'product-aaae',
    name: '[포비베이글] 크림치즈 8종',
    description: '집에서 즐기는 녹진한 그 맛',
    price: 9900,
    saleRatio: 0.1,
    salePrice: 8910,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1653034267999l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv10000159388_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159387_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv40000159400_1.jpg',
      alt: '크림치즈 8종',
    },
    stock: 13,
    category: '베이커리ㆍ치즈ㆍ델리',
    karlyOnly: false,
    brand: '포비베이글',
    storageType: 'cold',
    explanation:
      '베이글 혹은 식사빵과 떼어놓을 수 없는 조합이 있어요. 슥슥 바르기만 하면 평범한 빵을 특별하게 바꿔주는 재료, 크림치즈입니다. 칼리는 포비베이글이 만든 크림치즈를 준비했어요. 정직한 재료로 맛있는 베이글을 만드는 포비답게, 크림치즈 역시 재료 고유의 맛을 잘 살려 만들었답니다. 무화과, 토마토, 올리브 등 개성있는 토핑을 사용한 것은 물론, 유기농 설탕과 진한 크림치즈를 사용해 밀도 있는 풍미를 완성했지요. 각기 다른 매력을 지닌 여덟 가지 맛으로 준비했으니 입맛에 따라, 기분에 따라 골라 보세요. ',
  },
  {
    id: 'product-aaaf',
    name: '[그래놀라 하우스] 그래놀라 5종 (택1)',
    description: '도톰하게 뭉쳐 만든 수제 그래놀라',
    price: 13500,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1653035941542l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '그래놀라 5종',
    },
    stock: 7,
    category: '간식ㆍ과자ㆍ떡',
    karlyOnly: true,
    brand: '그래놀라 하우스',
    storageType: 'temperature',
    explanation:
      '동글동글 덩어리진 모양이 매력적인 그래놀라하우스의 그래놀라를 소개할게요. 그래놀라하우스는 재료를 오븐에 한 판씩 직접 구워 만드는 수제 그래놀라를 선보이는 브랜드에요. 재료를 꼼꼼하게 선별해 사용해 안심하고 즐길 수 있답니다. 기본 베이스가 되는 오트밀은 캐나다산으로, 달콤함을 더하는 벌꿀은 국산으로 엄선했죠. 여기에 특색있는 재료를 가미해 총 5종의 그래놀라를 준비했으니, 가벼운 영양 간식으로 활용해보세요. ',
  },
  {
    id: 'product-aaag',
    name: '[스타벅스] by 네스프레소 호환 캡슐 11종',
    description:
      '싱글오리진 과테말라 신규 출시! 집에서 내려 마시는 스타벅스 커피',
    price: 7990,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1563948119225l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20230119/gv40000479274_3.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220401/gv30000298378_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220401/gv40000298379_1.jpg',
      alt: '네스프레소 호환 캡슐 11종',
    },
    stock: 6,
    category: '생수ㆍ음료ㆍ우유ㆍ커피',
    karlyOnly: false,
    brand: '스타벅스',
    storageType: 'frozen',
    explanation:
      '스타벅스 커피를 이제 집에서 편안히 네스프레소 커피 머신으로 내려 드세요. 칼리는 네스프레소와 스타벅스가 함께 만든 캡슐 11종을 선보입니다. 네스프레소의 고압 추출 방식에 맞게 개발한 제품이니 맛은 걱정하지 않으셔도 돼요. 세계 유명 산지에서 공수한 원두에 블론드, 미디엄, 다크로 세 가지 방식의 스타벅스 로스팅 방식을 적용해 풍미도 뛰어나지요. 그렇게 완성된 스타벅스 커피의 맛을 캡슐에 그대로 담아 맛과 향이 잘 살아 있답니다. 취향에 맞는 정도로 샷을 추출해 즐겨보세요. ',
  },
  {
    id: 'product-aaah',
    name: '[켄트] 콤팩트 초극세모 칫솔 4개입 세트',
    description: '작은 헤드로 구석구석 개운하게',
    price: 17200,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1655468290167l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20201207/gv10000140807_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20201207/gv20000140805_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20201207/gv20000140910_1.jpg',
      alt: '콤팩트 초극세모',
    },
    stock: 13,
    category: '헤어ㆍ바디ㆍ구강',
    karlyOnly: false,
    brand: '켄트',
    storageType: 'temperature',
    explanation:
      '남다른 사용감으로 이름난 켄트의 초극세모 칫솔을 콤팩트 타입으로 만나보세요. 헤드 크기를 작게 제작한 칫솔로, 기존 칫솔의 헤드가 불편했던 분들께 딱 알맞아요. 끝 단을 4가닥으로 나눈 켄트만의 초극세모는 잇몸 라인에 맞춰 곡면 형태로 디자인되었는데요. 가느다란 모는 부드러우면서도 탄력 있게 치아에 와 닿아 말끔한 양치질을 돕는답니다. 색상이 다른 4개입 세트로 준비했으니 가족과 함께 사용하기도 좋을 거예요.',
  },
  {
    id: 'product-aaai',
    name: '[KF365] 오리지널 바베큐폭립 1kg(500gX2EA)',
    description: '온 가족이 즐기는 큼직한 바베큐 폭립!',
    price: 23500,
    saleRatio: 0.15,
    salePrice: 19900,
    image: {
      thumbnail:
        'https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/b8c4673a-8e39-4dfc-9e3c-d2fd013e8cfa.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221103/gv10000445202_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221103/gv40000435517_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221012/gv20000435519_1.jpg',
      alt: '온 가족이 즐기는 큼직한 바베큐 폭립',
    },
    stock: 13,
    category: '샐러드ㆍ간편식',
    karlyOnly: true,
    brand: 'KF365',
    storageType: 'cold',
    explanation:
      '근사한 비주얼부터 쏙 발라먹는 재미까지, 폭립을 즐겨 찾는 분들이 많으실 텐데요. 칼리가 간편하게 조리할 수 있는 오리지널 바베큐 폭립을 준비했어요. 두툼한 살코기는 물론이고, 달콤 짭짤한 소스가 고루 배어 들어 맛있게 즐길 수 있답니다. 넉넉한 용량으로 담은 상품이니 손님 맞이를 위한 요리로도 준비해 보세요.',
  },
  {
    id: 'product-aaaj',
    name: '[스윗밸런스] 오늘의 샐러드 10종 (리뉴얼) (택1)',
    description: '다채로운 토핑을 얹은 샐러드',
    price: 4900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1655775819130l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220620/gv10000328466_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221222/gv40000469749_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20210208/gv00000157620_1.jpg',
      alt: ' 오늘의 샐러드',
    },
    stock: 6,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '스윗밸런스',
    storageType: 'frozen',
    explanation:
      '매일 협력 농가에서 공수해오는 신선한 잎채소로 담은 스윗밸런스의 오늘의 샐러드를 만나 보세요. 가볍게 먹기 좋은 부드러운 채소를 엄선했어요. 수십번의 샘플링을 거쳐 완성한 특제 드레싱을 담아 채소의 매력이 더욱 살아날 수 있도록 했고요. 새우, 닭가슴살, 고구마 샐러드 등의 토핑을 얹었으니 영양소를 다양하게 섭취할 수 있을 뿐만 아니라 든든한 한 끼로도 손색이 없을 거예요.',
  },
  {
    id: 'product-tbtb',
    name: '[할머니가래떡볶이] 오리지널 가래떡 떡볶이',
    description: '꾸덕하고 달콤한 추억의 맛',
    price: 6100,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/c81065a4-6736-4a9e-b260-d32d789c1d97.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221005/gv20000433984_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221005/gv10000433981_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221005/gv40000433982_1.jpg',
      alt: '할머니 가래떡볶이',
    },
    stock: 15,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '할머니가래떡볶이',
    storageType: 'frozen',
    explanation:
      '쫀득한 쌀떡으로 만든 시장 떡볶이를 좋아하는 분이라면, 이 상품을 주목해 주세요. 어릴적 남포동 시장에서 즐기던 가래떡 떡볶이의 추억이 담긴 브랜드, 할머니가래떡볶이를 준비했거든요. 통 가래떡을 먹기 좋게 잘라 찰진 식감을 오롯이 살려내고요. 적당히 매콤하면서도 달짝지근한 소스를 사용해 남녀노소 좋아할 맛을 냈어요. 여기에 고소한 사각어묵까지 더해지니 추억의 맛 그대로 즐길 수 있답니다. 취향에 따라 대파나 삶은 달걀 등을 추가해, 더욱 풍성하게 즐겨도 좋을 거예요.',
  },
  {
    id: 'product-crps',
    name: '[치즈룸x테이스팅룸] 트러플 치즈 파케리 파스타',
    description: '트러플의 그윽함이 부드럽게',
    price: 9450,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/45253612-978b-4763-84c8-ca90e6386d5b.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221202/gv10000460552_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221202/gv20000460548_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221202/gv10000460549_1.jpg',
      alt: '트러플 치즈 파케리 파스타',
    },
    stock: 13,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '치즈룸x테이스팅룸',
    storageType: 'frozen',
    explanation:
      '다양한 재료를 사용하는 요리는 많지만, 완벽한 조화를 이뤄내기는 쉽지 않아요. 17가지 치즈를 요리하는 ‘치즈룸’과 퓨전 이태리 비스트로 ‘테이스팅룸’이 만나, 그윽한 풍미의 트러플 치즈 파케리 파스타를 선보입니다. 파스타를 조리하면, 가장 먼저 트러플 크림 소스의 진한 향이 코끝에 맴도는데요. 여기에 치즈, 베이컨을 곁들여 짭짤한 감칠맛을 적절히 가미했지요. 널찍하고도 쫄깃한 파케리 면에 한껏 묻어나니 입안 가득 만끽하기에 충분해요. 먹기 직전에 파마산 트러플 제스트를 뿌려, 특유의 향을 한껏 끌어 올려보세요. ',
  },
  {
    id: 'product-chbl',
    name: '[애슐리] 모짜렐라 치즈볼',
    description: '뽀얀 치즈를 가득 품은',
    price: 7900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1593413422985l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20200629/gv00000104164_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20200629/gv40000104153_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20200629/gv20000104165_1.jpg',
      alt: '애슐리 모짜렐라 치즈볼',
    },
    stock: 20,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '애슐리',
    storageType: 'frozen',
    explanation:
      '애슐리 매장에서 만나보던 고소한 치즈볼을 이제 집에서도 간편하게 누려보세요. 치즈볼 안에는 촉촉한 모짜렐라 치즈가 가득 들어있는데요. 한입 베어 물면, 뽀얀 치즈가 금세 입안을 부드럽게 감싸준답니다. 애슐리 전속 셰프들의 비법과 노하우가 담긴 시즈닝도 동봉되어 있어요. 뉴욕 치즈맛 시즈닝을 치즈볼 위에 솔솔 뿌리거나 살짝 찍어 드셔보세요. 아이들 간식, 어른들 맥주 안주로도 손색없을 거예요.',
  },
  {
    id: 'product-kkjb',
    name: '[프레시지] 듬뿍담은 칼제비 530g',
    description: '칼국수와 수제비를 한 번에',
    price: 9900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/ec5ff2cf-c66d-4055-9ccf-1a0ec0e6d407.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221018/gv30000437051_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221018/gv10000437048_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221018/gv20000437050_1.jpg',
      alt: '프레시지 칼제비',
    },
    stock: 20,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '프레시지',
    storageType: 'frozen',
    explanation:
      'Fresh Easy, 프레시지는 그 이름답게 신선한 재료로 간편하게 요리하는 즐거움을 선사하는 브랜드인데요. 오늘의 메인 요리를 고민하고 계셨다면, 요리에 꼭 필요한 핵심 재료만 알차게 담은 듬뿍담은 시리즈를 만나보세요. 이번에는 칼국수와 수제비를 모두 맛볼 수 있는 담백한 한 그릇 요리, 칼제비를 준비했답니다. 재료를 한데 넣고 끓이기만 하면 완성이니 무척 간편하고요. 포슬포슬한 감자와 쫄깃한 팽이버섯, 국물 맛을 더해줄 대파까지 알차게 담았지요. 프레시지와 함께 추가 재료 없이도 만족스러운 한 끼를 챙겨보세요.',
  },
  {
    id: 'product-dpdp',
    name: '[하남돼지집] 묵은지 대패삼겹 볶음밥 460g',
    description: '밥 알에 스민 깊은 감칠맛',
    price: 8000,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/c46f76f1-d426-4da0-a51f-d29123b6f738.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220921/gv40000429123_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220921/gv20000429119_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220921/gv40000429120_1.jpg',
      alt: '하남돼지집 묵은지 대패삼겹 볶음밥',
    },
    stock: 18,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '하남돼지집',
    storageType: 'frozen',
    explanation:
      '하남돼지집은 돈육에 대한 남다른 노하우와 손맛으로, 하남을 넘어 전국 곳곳에서 사랑받고 있는 브랜드인데요. 이번에는 고깃집에 가면 빼놓을 수 없는 마무리 메뉴, 묵은지 대패삼겹 볶음밥을 준비했어요. 알맞게 익은 묵은지가 깊은 풍미와 아삭한 식감을 책임지고요. 넉넉히 썰어 넣은 대패 삼겹살이 고깃집 볶음밥 특유의 고소한 감칠맛을 내준답니다. 국산 쌀과 배추, 돼지고기 등 좋은 재료로 정성껏 만들었으니, 안심하고 즐겨보세요.',
  },
  {
    id: 'product-grjk',
    name: '[방방곡곡] 강릉식 장칼국수 (2인분)',
    description: '구수하고 칼칼한 국물 맛',
    price: 10620,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/7cbdb6e3-d3c6-4dff-8fb4-b1808ee56e0a.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20230328/gv10000508250_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20230328/gv40000508247_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230328/gv40000508249_1.jpg',
      alt: '방방곡곡 강릉식 장칼국수 (2인분)',
    },
    stock: 17,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '방방곡곡',
    storageType: 'frozen',
    explanation:
      '방방곡곡이 대한민국 각지의 맛있는 요리를 찾아 집으로 보내드릴게요. 이번에 가져온 강릉식 장칼국수는 된장과 고추장을 술술 풀어 넣어 구수하면서도 칼칼한 맛이 일품이에요. 얇고 널찍하게 제면한 칼국수 생면은 후루룩 넘어가는 부드러운 식감을 자랑하지요. 여기에 풍성함을 더해줄 애호박과 대파는 물론, 고소한 마무리를 책임질 김가루와 깻가루까지 한데 담았답니다. 간단한 조리로 정감 가는 한 그릇을 완성해 보세요.',
  },
  {
    id: 'product-dhbs',
    name: '[닥터로빈] 단호박 크림스프 밀키트',
    description: '단호박 원물의 달콤함을 담아 완성',
    price: 10100,
    saleRatio: 0.1,
    salePrice: 9090,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1651566693411l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv40000310370_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv20000310367_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220504/gv40000310905_1.jpg',
      alt: '닥터로빈 단호박 크림스프 밀트',
    },
    stock: 22,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '닥터로빈',
    storageType: 'frozen',
    explanation:
      '맛은 물론 재료도 신경 쓰는 분이라면, 이 가게 이름을 한 번쯤 들어보셨을 거예요. 바로, 동물성 크림 대신 콩크림으로 만든 요리를 선보이는 닥터로빈이랍니다. 이번에 준비한 상품은 에피타이저로 즐기기 좋은 단호박 크림스프 밀키트예요. 달콤한 단호박과 부드러운 콩크림이 조화롭게 어우러져 매장에서도 큰 인기를 누리고 있는 상품이지요. 닥터로빈은 크림스프와 단호박 원물은 물론, 담백한 모닝빵까지 함께 담은 밀키트를 준비했어요. 모닝빵에는 설탕 대신 스테비아를 넣어 은은한 달콤함을 구현했답니다. 따뜻한 단호박 크림 스프로 식사의 시작을 알려보세요.',
  },
  {
    id: 'product-kcms',
    name: '[닥터로빈] 콩크림 매콤 새우 파스타',
    description: '맛과 건강을 모두 잡은 시그니처 메뉴',
    price: 11900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1651566575512l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv20000310364_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv20000310361_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv30000310363_1.jpg',
      alt: '닥터로빈 콩크림 매콤 새우 파스타',
    },
    stock: 25,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '닥터로빈',
    storageType: 'frozen',
    explanation:
      '맛은 물론 재료도 신경 쓰는 분이라면, 이 가게 이름을 한 번쯤 들어보셨을 거예요. 바로, 동물성 크림 대신 콩크림으로 만든 요리를 선보이는 닥터로빈이랍니다. 이번에 준비한 상품은 매장의 대표 메뉴, 콩크림 매콤 새우 파스타예요. 식물성 크림과 곱게 간 국내산 대두를 알맞게 배합한 뒤 고추맛기름을 추가해 매콤하면서도 고소한 풍미가 일품이지요. 여기에 큼직한 새우와 쫄깃한 새송이 버섯까지 더해져 다채로운 식감도 느낄 수 있답니다. 자극적인 요리가 어쩐지 부담스러운 날엔 닥터로빈의 파스타가 제격일 거예요.',
  },
  {
    id: 'product-kckp',
    name: '[닥터로빈] 콩크림 까르보나라 파스타',
    description: '콩크림으로 구현한 부드러운 풍미',
    price: 10900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1651566444155l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv20000310358_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv30000310353_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220503/gv40000310356_1.jpg',
      alt: '닥터로빈 콩크림 까르보나라 파스타',
    },
    stock: 25,
    category: '샐러드ㆍ간편식',
    karlyOnly: false,
    brand: '닥터로빈',
    storageType: 'frozen',
    explanation:
      '맛은 물론 재료도 신경 쓰는 분이라면, 이 가게 이름을 한 번쯤 들어보셨을 거예요. 바로, 동물성 크림 대신 콩크림으로 만든 요리를 선보이는 닥터로빈이랍니다. 이번에 준비한 상품은 고소한 매력의 콩크림 까르보나라 파스타예요. 파마산 치즈를 함유해 진한 풍미가 느껴지고요. 짭짤한 베이컨이 딱 알맞게 간을 더해주지요. 포크에 면발을 돌돌 말아 한 입 맛보면, 자극적이지 않은 은은한 풍미에 한 그릇을 가뿐히 비울 수 있을 거예요.',
  },
  {
    id: 'product-smsm',
    name: '향기가득 샤인머스캣 700g',
    description: '달콤한 향미 가득 연둣빛 포도',
    price: 21900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/shop/data/goods/1637925008955l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210913/gv40000226086_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20210913/gv20000226080_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220718/gv30000340177_1.jpg',
      alt: '서울청과 향기가득 샤인머스캣 700g',
    },
    stock: 30,
    category: '과일ㆍ견과ㆍ쌀',
    karlyOnly: false,
    brand: '서울청과',
    storageType: 'cold',
    explanation:
      '특유의 향긋한 매력이 가득한 청포도, 샤인머스캣을 칼리에서 만나보세요. 탐스럽게 영근 포도알마다 달콤하게 퍼지는 향미를 풍부하게 품고 있는데요. 한 알 톡 떼어 베어 물면 입안 가득 행복감을 전해준답니다. 따스한 햇살 아래 큼직하게 알이 차오른 샤인머스캣 한 송이를 담아 보내드리니, 상큼하게 번지는 달콤한 순간을 누려보세요.',
  },
  {
    id: 'product-mlml',
    name: '머스크멜론 1.2kg',
    description: '부드러운 식감에 달콤한 과육',
    price: 20900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/shop/data/goods/1637924685223l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210813/gv20000211636_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20201229/gv20000147716_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220506/gv10000311143_1.jpg',
      alt: '머스크멜론 1.2kg',
    },
    stock: 17,
    category: '과일ㆍ견과ㆍ쌀',
    karlyOnly: false,
    brand: '서울청과',
    storageType: 'cold',
    explanation:
      '향긋한 멜론을 실속 있게 만나보세요. 칼리가 신선하게 즐길 수 있는 머스크 멜론을 준비했습니다. 촘촘한 그물 무늬 껍질 속 녹진한 과육을 품고 있는데요. 수분이 풍부하고 향이 좋아 식후 디저트나 간식으로 제격이랍니다. 살짝 말랑해질 때까지 충분히 후숙했다가 드셔보세요. 하몽, 프로슈토 등을 곁들여 근사한 안주로 즐겨도 좋을 거예요.',
  },
  {
    id: 'product-blbr',
    name: '유레카 블루베리 100g (특) (국산)',
    description: '큼지막한 사이즈를 자랑하는',
    price: 11900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1651224880429l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220429/gv00000309013_1.jpeg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220429/gv00000309008_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230307/gv30000498664_1.jpg',
      alt: '유레카 블루베리 100g (특) (국산)',
    },
    stock: 13,
    category: '과일ㆍ견과ㆍ쌀',
    karlyOnly: false,
    brand: '유레카',
    storageType: 'frozen',
    explanation:
      "'블루베리'하면, 앙증맞은 크기의 보랏빛 열매가 떠오르실 텐데요. 지금 선보이는 유레카 블루베리는 일반 블루베리와 비교되는 남다른 사이즈를 자랑합니다. 큼직하고 탱탱한 과육을 바라보다 보면 검붉은 포도알이 연상되기도 하죠. 유레카 블루베리는 호주에서 육성한 신품종으로, 단단하고 아삭거리는 식감과 달콤한 과즙이 단연 돋보이는데요. 칼리는 국내 농가에서 깨끗하고 안전하게 수확한 블루베리를 준비했답니다. '유레카'란 이름에 걸맞게 감탄사가 절로 나오는 싱그러운 과육의 맛을 경험하세요.",
  },
  {
    id: 'product-mgst',
    name: '태국산 망고스틴 480g (4~7입)',
    description: '과일의 여왕! (1망/480g 내외)',
    price: 14900,
    saleRatio: 0.13,
    salePrice: 12900,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1592213122388l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20170529/gv00000003421_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20200615/gv00000003416_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230210/gv30000489458_1.jpg',
      alt: '태국산 망고스틴 480g (4~7입)',
    },
    stock: 16,
    category: '과일ㆍ견과ㆍ쌀',
    karlyOnly: false,
    brand: '과일의 왕국',
    storageType: 'frozen',
    explanation:
      '동남아 여행에서는 다양한 열대과일을 맛볼 수 있는데요. 여행을 다녀오면 마치 향수병처럼 이 새콤달콤한 열대과일들을 그리워하게 됩니다. 그중에서도 망고스틴은 참 인상 깊은 과일이에요. 딱딱한 자주빛껍질 속에 몽실몽실한 과육이 새콤달콤한 과즙을 한껏 품고 있기 때문이죠. 이런 반전 매력 때문에 한 번쯤은 꼭 먹어봐야 할 과일로 꼽힌답니다. 아직도 망고스틴을 경험하지 못하셨다면 한번쯤은 꼭 만나보세요. ',
  },
  {
    id: 'product-dopa',
    name: '[Dole] 스위티오 파인애플 청크 400g',
    description: '손쉽게 즐기는 조각 파인애플',
    price: 6590,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1608789772342l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20201224/gv40000146366_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20201224/gv30000146365_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20201224/gv00000146367_1.jpg',
      alt: '[Dole] 스위티오 파인애플 청크 400g',
    },
    stock: 15,
    category: '과일ㆍ견과ㆍ쌀',
    karlyOnly: false,
    brand: 'Dole',
    storageType: 'cold',
    explanation:
      '새콤달콤한 파인애플은 남녀노소 모두에게 사랑받는 과일이지만, 두꺼운 껍질 때문에 손질하기가 어렵게 느껴지곤 하죠. 고품질 과일 브랜드 Dole에서 까다롭게 수확한 맛 좋은 파인애플을 한 입 크기로 잘라 준비했습니다. 별도의 손질 없이 그대로 즐길 수 있어 무척 간편하고요. 샐러드나 피자, 빙수 토핑으로도 다양하게 활용할 수 있답니다. 상큼한 Dole 조각 파인애플을 칼리를 통해 손쉽게 만나보세요.',
  },
  {
    id: 'product-swtk',
    name: '[압구정포차] 에어프라이어에 튀겨먹는 새우튀김 200g',
    description: '바삭한 튀김옷 속 탱글한 속살',
    price: 9980,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/027272ca-e4f7-4af7-bcf5-5f8a408c4150.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20230327/gv00000507711_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20230327/gv20000507710_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230327/gv40000507712_1.jpg',
      alt: '압구정포차 에어프라이어에 튀겨먹는 새우튀김',
    },
    stock: 18,
    category: '수산ㆍ해산ㆍ건어물',
    karlyOnly: true,
    brand: '압구정포차',
    storageType: 'frozen',
    explanation:
      '야심한 밤 허기진 배로 돌아가는 길, 포장마차를 그냥 지나치긴 어려웠을 거예요. 압구정포차와 함께 정감 가는 포차 메뉴들을 집에서 간편하게 만나보세요. 이번에는 큼직한 새우를 선별해, 한 입에 꽉 차게 즐길 수 있는 새우튀김을 완성했어요. 꼬리를 제외한 껍질과 내장을 깔끔하게 손질한 뒤 습식 빵가루를 입혔는데요. 바삭하게 흩어지는 식감부터 고소한 감칠맛까지, 전문점 못지않은 퀄리티를 자랑한답니다. 유탕 처리를 거쳐 에어프라이어에 간편하게 조리할 수 있으니, 온 가족 간식으로 손쉽게 마련해 보세요.',
  },
  {
    id: 'product-dkdk',
    name: '스노우크랩 (대게) 섹션 450g 내외 (냉동)',
    description: '손쉽게 맛보는 대게살',
    price: 28900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/52351675-eb88-4deb-aa78-f47ae34557b6.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221201/gv20000459880_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221201/gv20000459879_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221201/gv40000459882_1.jpg',
      alt: '스노우크랩 (대게) 섹션 450g 내외 (냉동)',
    },
    stock: 35,
    category: '수산ㆍ해산ㆍ건어물',
    karlyOnly: true,
    brand: '스노우크랩',
    storageType: 'frozen',
    explanation:
      '대게는 다리살을 쏙쏙 발라먹는 재미가 있지만, 집에서 선뜻 요리하기 망설여지기도 하죠. 지금 소개하는 스노우크랩 섹션은 가볍게 데치기만 하면 촉촉한 대게살을 맛볼 수 있어요. 살이 꽉 찬 러시아산 대게를 자숙하여 급속 냉동한 제품이랍니다. 먹음직스러운 비주얼 덕분에 홈 파티 메뉴로도 제격이고요. 라면이나 탕 등 국물 요리에 넣으면 시원한 감칠맛을 더해줄 거예요.',
  },
  {
    id: 'product-mmwt',
    name: '[미소프레쉬] 남도정식 조기매운탕 (냉동)',
    description: '시원하고 칼칼한 남도의 맛',
    price: 11800,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1658128415772l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220718/gv10000340129_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220718/gv20000340127_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220722/gv40000342266_1.jpg',
      alt: '미소프레쉬 남도정식 조기매운탕 (냉동)',
    },
    stock: 30,
    category: '수산ㆍ해산ㆍ건어물',
    karlyOnly: true,
    brand: '미소프레쉬',
    storageType: 'frozen',
    explanation:
      '얼큰하게 끓여낸 조기매운탕은 남도 한정식에 자주 등장하는 메뉴죠. 미소프레쉬가 남도식 조기매운탕을 집에서도 간편하게 완성할 수 있도록 밀키트로 선보입니다. 신선한 국산 백조기는 물론이고, 채소와 소스, 다시팩까지 꾸려 넣어 누구나 손쉽게 조리할 수 있어요. 오래 끓일수록 백조기의 기름과 홍합의 감칠맛이 진하게 우러나 개운한 국물 맛이 일품이지요. 고사리는 수증기로 촉촉하게 익혔기에 식감이 더욱 부드럽답니다. 해동 후 순서대로 푹 끓여내기만 하면 완성이니, 남도 현지의 맛을 손쉽게 즐겨보세요.',
  },
  {
    id: 'product-jjug',
    name: '[제주창해수산] 제주 은갈치 600~800g / 4토막 (냉동)',
    description: '청정 해역에서 잡아 올린 일품 은갈치',
    price: 76900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1512636611214l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20171207/gv20000013759_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20171207/gv00000013764_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20171207/gv30000013775_1.jpg',
      alt: '제주창해수산 제주 은갈치 600~800g / 4토막 (냉동)',
    },
    stock: 20,
    category: '수산ㆍ해산ㆍ건어물',
    karlyOnly: true,
    brand: '제주창해수산',
    storageType: 'frozen',
    explanation:
      '혹시 남대문시장 갈치조림 골목을 가보셨나요? 자글자글 양은 냄비 끓는 소리와 함께 칼칼하고 구수하게 갈치조림이 익어가는 냄새가 골목마다 자욱하게 깔려있는 곳이죠. 식사 때가 아니더라도, 당장 배가 고프지 않더라도 너무나 유혹적인 그 냄새에 어김없이 발목을 잡힙니다. 고춧가루 양념이 제대로 배어 몰캉하게 익은 무와 젓가락으로 살살 발라낸 갈치 속살을 밥숟가락 위에 척 얹으면 입에 넣기도 전에 벌써부터 침이 고이죠. 담백하고 고소하다는 말로는 설명하기 부족한 갈치의 맛, 집에서도 맛볼 수 있도록 칼리가 싱싱한 제주 은갈치를 준비했습니다.',
  },
  {
    id: 'product-bnks',
    name: '[바른식]부산 조방낙지 낙곱새 (2인분)',
    description: '집에서 만나는 부산의 별미',
    price: 18300,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/shop/data/goods/1653037798484l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20211019/gv30000235153_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20211019/gv20000235150_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230228/gv20000497331_1.jpg',
      alt: '바른식 부산 조방낙지 낙곱새 (2인분)',
    },
    stock: 8,
    category: '국ㆍ반찬ㆍ메인요리',
    karlyOnly: true,
    brand: '바른식',
    storageType: 'frozen',
    explanation:
      '부산의 별미, 낙곱새 전문 식당 중에서도 단연 돋보이는 곳이 있어요. 바로 50년 전통의 조방낙지랍니다. 범일동 ‘조선방직’ 앞 작은 식당에서 시작된 음식이라하여, 조방낙지 낙곱새라 별칭까지 얻었는데요. 한결 같은 매콤 달콤한 그 감칠맛을 이제 집에서도 만나보세요. 낙지와 새우, 그리고 쫄깃한 식감을 한층 살려줄 대창을 알차게 꾸려 넣었어요. 따뜻한 밥을 따로 준비해 양념장, 김가루와 슥 비벼 먹어도 좋고 노릇하게 볶아도 무척 별미랍니다.',
  },
  {
    id: 'product-qbrw',
    name: '[조선호텔] 꿔바로우 450g',
    description: '쫀득함이 남다른 등심 꿔바로우',
    price: 9800,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/eecc936c-d450-4823-b333-c49be3dc126a.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221011/gv20000435038_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221011/gv20000435035_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230110/gv10000475610_1.jpg',
      alt: '조선호텔 꿔바로우 450g',
    },
    stock: 11,
    category: '국ㆍ반찬ㆍ메인요리',
    karlyOnly: true,
    brand: '조선호텔',
    storageType: 'frozen',
    explanation:
      '바삭한 튀김 옷 속 쫀득함을 가득 품은 일품 중식 메뉴, 꿔바로우를 더욱 특별하게 즐겨보세요. 조선호텔 중식당의 레시피를 반영해 숙성부터 반죽, 소스까지 세심하게 완성했답니다. 국산 돼지고기 등심을 육질 살려 두툼하게 썰어내고요. 감자전분을 사용해 쫀득한 식감을 오롯이 살려냈어요. 따끈하게 조리한 뒤 새콤달콤한 소스를 곁들여주면 근사한 꿔바로우를 손쉽게 완성할 수 있답니다. 아이들 간식 혹은 어른들 술안주, 손님 대접용 메인 메뉴로 요긴하게 활용해 보세요.',
  },
  {
    id: 'product-gbah',
    name: '[프레시지] 감바스 알아히요',
    description: '홈 파티를 빛내는 일품요리',
    price: 14900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/shop/data/goods/1648206755648l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20211126/gv10000248883_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20211126/gv40000248880_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230224/gv20000496161_1.jpg',
      alt: '프레시지 감바스 알아요',
    },
    stock: 13,
    category: '국ㆍ반찬ㆍ메인요리',
    karlyOnly: true,
    brand: '프레시지',
    storageType: 'frozen',
    explanation:
      'Fresh Easy, 프레시지는 그 이름답게 신선한 재료로 간편하게 요리하는 즐거움을 선사하는 브랜드인데요. 이번에는 홈 파티 음식으로 빼놓을 수 없는 감바스 알 아히요 밀키트를 준비했어요. 한 입에 톡 터지는 탱글한 새우는 물론이고요. 향긋한 올리브오일과 페퍼 시즈닝, 건고추 등의 부재료도 함께 담았답니다. 여기에 감바스와 환상 궁합을 이루는 바게트 빵까지 더해 완벽한 구성으로 보내드려요. 각종 채소와 마늘은 깔끔하게 손질해 담았으니, 이보다 간편할 순 없을 거예요.',
  },
  {
    id: 'product-uzmk',
    name: '[을지다락] 매콤크림 파스타 밀키트 (2인)',
    description: '맛도 비주얼도 완벽한 한 끼',
    price: 13900,
    saleRatio: 0.05,
    salePrice: 13205,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1637228868958l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220412/gv40000301449_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20211115/gv30000243292_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220421/gv40000305472_1.jpg',
      alt: '을지다락 매콤크림 파스타 밀키트 (2인)',
    },
    stock: 13,
    category: '국ㆍ반찬ㆍ메인요리',
    karlyOnly: true,
    brand: '을지다락',
    storageType: 'frozen',
    explanation:
      '다락의 따스한 감성을 담은 맛집, 을지다락을 이제 칼리에서 만나보세요. 을지다락의 대표 메뉴, 매콤크림 파스타를 집에서 손쉽게 완성할 수 있도록 필요한 재료를 한데 담은 밀키트를 준비했어요. 매장의 비법이 담긴 꾸덕한 크림소스는 물론 감칠맛을 더해줄 에멘탈치즈와 치킨스톡까지 알차게 넣었죠. 크러쉬드 페퍼와 파프리카 분말로 매콤함을 더해주었기에 마지막 한 입까지 느끼해질 걱정 없이 즐길 수 있답니다. 완성된 파스타에 달걀노른자를 톡 올려주면, 매장에서 보던 근사한 비주얼에 인증샷을 절로 남기고 싶어질 거예요.',
  },
  {
    id: 'product-spsk',
    name: '[라아부엘라니에베스] 스페인 수제 감자칩',
    description: '손으로 정성껏 만들어낸 바삭한 감자칩!',
    price: 5300,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1648202987244l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20190816/gv20000059442_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20190816/gv40000059439_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20200921/gv10000123018_1.jpg',
      alt: '라아부엘라니에베스 스페인 수제 감자칩',
    },
    stock: 17,
    category: '간식ㆍ과자ㆍ떡',
    karlyOnly: true,
    brand: '라아부엘라니에베스',
    storageType: 'temperature',
    explanation:
      '감자, 오일, 소금 단 세 가지 재료로 완성한 장인인증 감자칩을 소개할게요. 라아부엘라니에베스는 값비싼 아그리아 감자, 질 좋은 해바라기 오일 그리고 지중해 천일염으로 감자칩을 만들어요. 이 외에는 어떤 재료도 더하지 않기에, 감자칩 단 한 조각으로도 명료한 맛을 경험할 수 있지요. 현재까지도 100% 수제 팬 프라이 방식을 고집하는 라아부엘라니에베스의 감자칩은, 까다로운 자격요건 및 평가절차를 통해 선정되는 카스티야 이 레온(Castilla y León) 장인인증을 획득하기도 했답니다. 지중해의 태양과 장인의 신념이 깃든 감자칩, 지금 칼리에서 만나보세요.',
  },
  {
    id: 'product-bsic',
    name: '[바세츠] 아이스크림 473mL 4종',
    description: '달걀을 넣지 않고 우유와 크림으로 맛을 낸 아이스크림',
    price: 11000,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1585892981942l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20200403/gv00000088839_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20200403/gv30000088835_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220524/gv20000319074_1.jpg',
      alt: '바세츠 아이스크림 473ml 4종',
    },
    stock: 27,
    category: '간식ㆍ과자ㆍ떡',
    karlyOnly: true,
    brand: '라아부엘라니에베스',
    storageType: 'frozen',
    explanation:
      '달걀 노른자를 넣지 않고, 우유와 크림으로 만든 진한 맛의 필라델피아식 아이스크림을 소개합니다. 미국 필라델피아에서 6대째 전통 그대로의 맛을 선보이는 바세츠는 미국의 대표적인 프리미엄 아이스크림 브랜드예요. 유지방 함량과 재료의 밀도를 높여, 진한 풍미와 부드러운 식감을 그대로 구현했지요. 바닐라빈을 오롯이 품은 바닐라, 진한 달콤함을 지닌 초콜릿, 쿠키의 식감이 느껴지는 쿠앤크, 바닐라빈과 프레첼의 조화가 매력적인 솔티드 카라멜 총 4가지 맛을 준비했어요. 이제 집에서도 간편하게, 필라델피아의 고급 디저트를 누려보세요.',
  },
  {
    id: 'product-hgdz',
    name: '[하겐다즈] 멀티바 4종',
    description: '초콜릿 갑옷을 두른 아이스크림 ',
    price: 62000,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1526609327217l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20211014/gv20000233928_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20180517/gv20000023566_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20211021/gv00000236217_1.jpg',
      alt: '하겐다즈 멀티바 4종',
    },
    stock: 20,
    category: '간식ㆍ과자ㆍ떡',
    karlyOnly: true,
    brand: '하겐다즈',
    storageType: 'frozen',
    explanation:
      '하나하나 엄선된 재료로 우수한 품질의 아이스크림을 만들겠다는 하겐다즈. 이미 많은 분들의 사랑을 받고 있는 아이스크림 브랜드로 유명한데요. 하겐다즈를 즐기는 다양한 방법 중 칼리는 아이스크림에 초콜릿 코팅이 더해진 멀티바를 준비했습니다. 한입을 베어 물면 달콤하게 부서지는 초콜릿 코팅과 그 안에서 녹아내리는 아이스크림이 황홀한 맛의 놀라움으로 다가오죠. 한번에 먹기 적당한 스틱바 형태로 3개씩 들어 있어, 더 넉넉하게 아이스크림을 즐길 수 있을 거예요.',
  },
  {
    id: 'product-lmrc',
    name: '[라메르풀라르] 프랑스 전통쿠키 5종',
    description: '100년 동안 이어진 진한 풍미',
    price: 4100,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1537252121296l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210811/gv10000210884_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20190614/gv00000053188_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230118/gv00000478593_1.jpg',
      alt: '라메르풀라르 프랑스 전통쿠키 5종',
    },
    stock: 37,
    category: '간식ㆍ과자ㆍ떡',
    karlyOnly: true,
    brand: '라메르풀라르',
    storageType: 'temperature',
    explanation:
      "파리에서 고속 열차로 세 시간 남짓 달려 프랑스 북부 해안에 닿으면 '노르망디의 보석'이라 불리는 몽생미셸이 나타납니다. 몽생미셸은 백년전쟁에서 영국군의 공격을 버텨내며 순례의 성지로 이름을 드높였고, 지금도 그 아름다운 전경으로 전 세계의 여행자에게 사랑받죠. 이 몽생미셸에 가면 꼭 먹어봐야 할 음식으로는 오랜 시간 동안 여행자와 순례자의 허기를 달래주던 '라메르풀라르'의 오믈렛이 손꼽히는데요. 라메르풀라르는 오믈렛뿐만 아니라 순수한 버터와 신선한 계란, 질 좋은 밀가루를 듬뿍 넣은 쿠키로도 유명하답니다. 1888년부터 변하지 않는 레시피와 엄선된 재료 사용으로 프랑스 현지의 고급 백화점과 대형 마트에서도 인정받은 그 맛, 가정에서 편하게 즐겨보세요.",
  },
  {
    id: 'product-rlbr',
    name: '[브레댄코] 리얼 브라우니 쿠키2종 (택1)',
    description: '함께 나누는 쫀득한 행복',
    price: 3200,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/03ef0714-a059-4480-b335-3517894c1c49.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20201116/gv20000135036_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20201116/gv20000135034_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221221/gv30000469147_1.jpg',
      alt: '브레댄코 리얼 브라우니 쿠키 2종 (택1)',
    },
    stock: 22,
    category: '간식ㆍ과자ㆍ떡',
    karlyOnly: true,
    brand: '브레댄코',
    storageType: 'temperature',
    explanation:
      '겉모습은 분명 쿠키인데, 한 입 베어 물면 쫀득하고 촉촉한 브라우니를 맛볼 수 있는 새로운 디저트를 소개할게요. 기본에 충실한 베이커리 제품을 만드는 브레댄코의 스테디셀러 중 하나인 리얼 브라우니 쿠키입니다. 칼리 맞춤으로 원재료와 세트 구성을 변경했어요. 촉촉한 타입의 초콜릿 쿠키를 좋아하시는 분, 브라우니의 맛을 조금 더 가볍고 캐주얼하게 즐기고 싶은 분께 추천해드릴게요. ',
  },
  {
    id: 'product-pbsm',
    name: '[폴 바셋] 우유크림 랑드샤 10개입',
    description: '우유의 부드러운 풍미를 담은',
    price: 12000,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1655964042481l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220623/gv30000330037_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220623/gv30000330036_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220830/gv10000417947_1.jpg',
      alt: '풀바셋 우유크림 랑드샤 10개입',
    },
    stock: 12,
    category: '간식ㆍ과자ㆍ떡',
    karlyOnly: true,
    brand: '풀바셋',
    storageType: 'temperature',
    explanation:
      '폴 바셋의 디저트는 커피만큼이나 많은 사랑을 받고 있는데요. 이번에는 부드러운 매력이 돋보이는 우유 크림 랑드샤를 소개할게요. 국내산 우유를 넣어 우유 본연의 담백한 풍미가 고스란히 담겨있답니다. 입안에서 바스러지는 쿠키 사이로 우유 크림이 부드럽게 어우러지며 조화를 이루죠. 깔끔한 패키지에 하나씩 개별로 포장되어 있어 휴대나 보관도 간편하고요. 가볍게 마음을 전하는 선물로도 제격일 거예요. 폴 바셋 커피에 곁들여 근사한 티타임을 완성해 보세요.',
  },
  {
    id: 'product-szch',
    name: '[데르뜨] 소잘 초코크림 롤케이크',
    description: '소화가 잘되는 우유의 달콤한 변신',
    price: 25000,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/6647054e-5476-46f2-bb3c-51da29d97c80.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221130/gv30000459296_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221130/gv00000459295_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221130/gv00000459298_1.jpg',
      alt: '데르뜨 소화가 잘되는 초코크림 롤케이크',
    },
    stock: 33,
    category: '베이커리ㆍ치즈ㆍ델리',
    karlyOnly: false,
    brand: '데르뜨',
    storageType: 'cold',
    explanation:
      '매일유업의 디저트 전문 브랜드, 데르뜨가 선보이는 소잘 초코크림 롤케이크를 만나보세요. 락토 프리 우유인 ‘소화가 잘되는 우유’를 활용해 부담 없는 크기로 완성한 상품이에요. 쫀득한 식감의 카스테라 시트에 국산 유크림 등을 사용한 초코크림을 채워 넣었는데요. 크림이 입에 남지 않아 산뜻하면서도 초콜릿 고유의 진한 풍미는 생생히 느껴진답니다. 여기에 코코아분말로 만든 귀여운 얼룩무늬 비주얼이 더해지니 기분 좋은 디저트 타임을 즐기기에 더할 나위가 없을 거예요.',
  },
  {
    id: 'product-sgbb',
    name: '[나폴레옹] 소금빵',
    description: '뉴질랜드산 버터를 가득',
    price: 3000,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/165520330814l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220614/gv20000326898_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220614/gv30000326897_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221118/gv00000453910_1.jpg',
      alt: '나폴레옹의 뉴질랜드산 버터를 가득 써서 만든 소금빵',
    },
    stock: 20,
    category: '베이커리ㆍ치즈ㆍ델리',
    karlyOnly: true,
    brand: '나폴레옹',
    storageType: 'temperature',
    explanation:
      '맛있는 소금빵은 짭짤한 소금보다도 그윽한 버터의 풍미에서 결정된다고 해도 과언이 아니죠. 나폴레옹은 뉴질랜드산 버터를 13.25%나 녹여 묵직한 맛과 향의 소금빵을 준비했답니다. 빵을 반으로 가르면, 버터를 머금은 속살이 촉촉하면서도 부드럽게 갈라지지요. 고소한 가운데 소금의 짭짤한 풍미가 더해지며 적절한 균형을 이룬답니다. 아직 입맛에 꼭 맞는 소금빵을 찾지 못했다면, 완벽한 선택이 되어 줄 거예요.',
  },
  {
    id: 'product-kemk',
    name: '[발린느] 카이막 100g',
    description: '천상의 맛 카이막',
    price: 10900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://product-image.kurly.com/product/image/81d1ae7d-67e2-464c-96f3-3129c67f4ef1.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20230331/gv10000561742_1.gif',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20230331/gv30000561740_1.gif',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20230314/gv10000503878_1.jpg',
      alt: '천상의 맛 발린느 카이막 100g',
    },
    stock: 20,
    category: '베이커리ㆍ치즈ㆍ델리',
    karlyOnly: false,
    brand: '발린느',
    storageType: 'cold',
    explanation:
      '발린느는 오리지널 카이막을 국내에 소개하겠다는 목표 하나로, 전문 설비를 갖추고 연구에 매진했어요. 그 노력의 결과로 현지의 맛에 버금가는 풍미를 재현함은 물론이고, 칼리와 함께 누구나 간편하게 신선한 카이막을 맛볼 수 있는 길을 열게 되었답니다. 튀르키예에서 사용하는 물소젖과 달리, 유지방 함량이 낮은 국산 원유만으로는 카이막을 제조하기 어려운데요. 발린느는 부족한 유지방을 국산 생크림으로 채워, 특유의 진한 고소함을 한껏 끌어올렸어요. ',
  },
];

// 상품 데이터 상태
export const productListState = atom({
  key: 'productListState',
  default: initialProductList,
});


// id 에 맞는 상품
export const productListFamily = atomFamily({
  key: 'productListFamily',
  default: (id) => {
    console.log('패밀리작동');

    const t = initialProductList.find((order) => order.id === id);

    console.log('패밀리작동: ', t);

    return t;
  },
});

// 상품 id 상태
export const selectedproductId = atom({
  key: 'selectedproductId',
  default: 'product-rksk',
});
