const courseImages = {
  "자격증 70여 종 무료수강":"assets/course-01.jpg",
  "심리상담사":"assets/course-02.jpg",
  "아동심리상담사":"assets/course-03.jpg",
  "노인심리상담사":"assets/course-04.jpg",
  "방과후지도사":"assets/course-05.jpg",
  "가족심리상담사":"assets/course-06.jpg",
  "미술심리상담사":"assets/course-07.jpg",
  "스피치지도사":"assets/course-08.jpg",
  "논술교육지도사":"assets/course-09.jpg",
  "플로리스트":"assets/course-10.jpg",
  "캘리그라피지도사":"assets/course-11.jpg",
  "베이비플래너":"assets/course-12.jpg",
  "아동요리지도사":"assets/course-13.jpg",
  "가베지도사":"assets/course-14.jpg",
  "마케팅기획전문가":"assets/course-15.jpg",
  "한국사 지도사":"assets/course-16.jpg",
  "간병사 자격증":"assets/course-17.jpg",
  "노인돌봄 생활지원사 자격증":"assets/course-18.jpg",
  "병원동행매니저 자격증":"assets/course-19.jpg",
  "아동심리상담사 자격증":"assets/course-20.jpg",
  "사설탐정사 자격증":"assets/course-21.jpg",
  "고등·대학 검정고시":"assets/course-22.jpg",
  "타로 심리상담사 자격증":"assets/course-23.jpg",
  "약용식물 자원관리사 자격증":"assets/course-24.jpg",
  "PIA민간조사사 자격증":"assets/course-25.jpg",
  "푸드스타일리스트 자격증":"assets/course-26.jpg",
  "캐리커쳐 자격증":"assets/course-27.jpg",
  "수면관리사 자격증":"assets/course-28.jpg",
  "반려동물행동교정사 자격증":"assets/course-29.jpg",
  "개인정보관리사 자격증":"assets/course-30.jpg",
  "노인스포츠지도사 자격증":"assets/course-31.jpg",
  "체형관리사 자격증":"assets/course-32.jpg",
  "유치원행정실무사 자격증":"assets/course-33.jpg",
  "심리상담사 자격증":"assets/course-34.jpg",
  "노인미술심리상담사 자격증":"assets/course-35.jpg",
  "부부심리상담사 자격증":"assets/course-36.jpg",
  "직무스트레스관리사 자격증":"assets/course-37.jpg",
  "산지식물자원관리사 자격증":"assets/course-38.jpg",
  "발효효소관리사 자격증":"assets/course-39.jpg",
  "색채심리상담사 자격증":"assets/course-40.jpg",
  "노인심리상담사 자격증 일반과정":"assets/course-41.jpg",
  "프리다이빙 자격증 과정":"assets/freediving-course.jpg"
};

const courses = [
  {name:'심리상담사 자격증',image:'assets/course-02.jpg',url:'https://gudlldwl.adpt.kr',group:'instant',cat:'psychology',tag:'무료수강 인기',desc:'심리와 상담 분야에 관심 있는 분이 확인하기 좋은 과정입니다.',cta:'심리상담사 자격증 과정 확인하기 →',keywords:'심리 상담 심리상담 심리상담사 자격증 상담사 마음 멘탈'},
  {name:'아동심리상담사 자격증',image:'assets/course-03.jpg',url:'https://tidlldww.adpt.kr',group:'instant',cat:'child psychology',tag:'무료수강 인기',desc:'아동의 정서와 발달을 이해하는 상담 분야에 관심 있는 분을 위한 과정입니다.',cta:'아동심리상담사 자격증 과정 확인하기 →',keywords:'아동 아이 어린이 심리 상담 교육 아동심리상담사 자격증'},
  {name:'노인심리상담사 자격증',image:'assets/course-04.jpg',url:'https://xedlldyd.adpt.kr',group:'instant',cat:'psychology care',tag:'무료수강 인기',desc:'노년기 심리와 상담 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'노인심리상담사 자격증 과정 확인하기 →',keywords:'노인 어르신 시니어 심리 상담 돌봄 복지 노인심리상담사 자격증'},
  {name:'방과후지도사 자격증',image:'assets/course-05.jpg',url:'https://zodlldyl.adpt.kr',group:'instant',cat:'child career',tag:'무료수강 인기',desc:'방과후 교육과 아동지도 분야에 관심 있는 분을 위한 과정입니다.',cta:'방과후지도사 자격증 과정 보기 →',keywords:'방과후 학교 교사 아동 아이 교육 지도 방과후지도사 자격증'},
  {name:'가족심리상담사 자격증',image:'assets/course-06.jpg',url:'https://vodlldyn.adpt.kr',group:'instant',cat:'psychology',tag:'무료수강 인기',desc:'가족관계와 상담 분야를 공부하고 싶은 분을 위한 과정입니다.',cta:'가족심리상담사 자격증 과정 확인하기 →',keywords:'가족 부부 관계 심리 상담 가족심리상담사 자격증'},
  {name:'미술심리상담사 자격증',image:'assets/course-07.jpg',url:'https://zodlldyq.adpt.kr',group:'instant',cat:'psychology creative',tag:'무료수강 인기',desc:'미술 활동과 심리상담을 함께 배우고 싶은 분을 위한 과정입니다.',cta:'미술심리상담사 자격증 과정 확인하기 →',keywords:'미술 그림 심리 상담 예술 미술심리상담사 자격증'},
  {name:'스피치지도사 자격증',image:'assets/course-08.jpg',url:'https://zudlldwq.adpt.kr',group:'instant',cat:'child career',tag:'무료수강 인기',desc:'말하기와 발표 지도 분야에 관심 있는 분이 확인하기 좋은 과정입니다.',cta:'스피치지도사 자격증 과정 보기 →',keywords:'스피치 말하기 발표 화술 교육 지도 스피치지도사 자격증'},
  {name:'논술교육지도사 자격증',image:'assets/course-09.jpg',url:'https://zodlldwn.adpt.kr',group:'instant',cat:'child',tag:'무료수강 과정',desc:'글쓰기와 논술 교육 지도에 관심 있는 분을 위한 과정입니다.',cta:'논술교육지도사 자격증 과정 확인하기 →',keywords:'논술 글쓰기 독서 교육 아동 지도 논술교육지도사 자격증'},
  {name:'플로리스트 자격증',image:'assets/course-10.jpg',url:'https://gudlldyh.adpt.kr',group:'instant',cat:'creative career',tag:'무료수강 과정',desc:'꽃과 공간 연출 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'플로리스트 자격증 과정 보기 →',keywords:'꽃 화훼 플라워 취미 창업 플로리스트 자격증'},
  {name:'캘리그라피지도사 자격증',image:'assets/course-11.jpg',url:'https://cadlldys.adpt.kr',group:'instant',cat:'creative child',tag:'무료수강 과정',desc:'손글씨와 캘리그라피 교육 분야에 관심 있는 분을 위한 과정입니다.',cta:'캘리그라피지도사 자격증 과정 보기 →',keywords:'글씨 손글씨 서예 취미 교육 지도 캘리그라피지도사 자격증'},
  {name:'베이비플래너 자격증',image:'assets/course-12.jpg',url:'https://zudlldyb.adpt.kr',group:'instant',cat:'child care',tag:'무료수강 과정',desc:'임신·출산·육아 지원 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'베이비플래너 자격증 과정 보기 →',keywords:'아기 베이비 출산 육아 산모 아이 돌봄 베이비플래너 자격증'},
  {name:'아동요리지도사 자격증',image:'assets/course-13.jpg',url:'https://kodlldyy.adpt.kr',group:'instant',cat:'child creative',tag:'무료수강 과정',desc:'요리 활동을 활용한 아동 교육에 관심 있는 분을 위한 과정입니다.',cta:'아동요리지도사 자격증 과정 확인하기 →',keywords:'아동 아이 어린이 요리 교육 지도 아동요리지도사 자격증'},
  {name:'가베지도사 자격증',image:'assets/course-14.jpg',url:'https://radlldyw.adpt.kr',group:'instant',cat:'child',tag:'무료수강 과정',desc:'놀이교구를 활용한 아동 교육에 관심 있는 분을 위한 과정입니다.',cta:'가베지도사 자격증 과정 보기 →',keywords:'가베 교구 놀이 아동 유아 교육 가베지도사 자격증'},
  {name:'마케팅기획전문가 자격증',image:'assets/course-15.jpg',url:'https://codlldym.adpt.kr',group:'instant',cat:'career',tag:'무료수강 과정',desc:'마케팅 기획과 실무 역량에 관심 있는 분이 확인하기 좋은 과정입니다.',cta:'마케팅기획전문가 자격증 과정 확인하기 →',keywords:'마케팅 광고 기획 홍보 실무 취업 마케팅기획전문가 자격증'},
  {name:'한국사 지도사 자격증',image:'assets/course-16.jpg',url:'https://cedlldwy.adpt.kr',group:'instant',cat:'child career',tag:'무료수강 과정',desc:'한국 관련 교육과 지도 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'한국사 지도사 자격증 과정 확인하기 →',keywords:'한국사 지도사 한국사지도사 한국지도사 역사 교육 강사 자격증'},
  {name:'색채심리상담사 자격증',image:'assets/course-40.jpg',url:'https://xudllmbb.adpt.kr',group:'instant',cat:'psychology creative',tag:'무료수강 과정',desc:'색채와 심리상담 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'색채심리상담사 자격증 과정 확인하기 →',keywords:'색채심리상담사 색채 컬러 색상 심리 상담 미술 자격증'},

  {name:'노인돌봄 생활지원사 자격증',url:'https://x3euftgsll.sens.kr',group:'priority',cat:'care career',tag:'돌봄·취업 추천',desc:'노인 돌봄과 생활지원 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'과정 및 지원조건 확인하기 →',keywords:'노인 어르신 시니어 돌봄 생활지원사 복지 취업 재취업'},
  {name:'병원동행매니저 자격증',url:'https://x2euwea8c2.sens.kr',group:'priority',cat:'care career',tag:'돌봄·취업 추천',desc:'병원 이용 동행과 생활지원 분야의 과정 정보를 확인해보세요.',cta:'교육과정 자세히 보기 →',keywords:'병원 동행 매니저 환자 보호자 돌봄 취업 재취업'},
  {name:'간병사 자격증',url:'https://todllmbh.adpt.kr',group:'priority',cat:'care career',tag:'돌봄·취업 추천',desc:'간병과 환자 돌봄 분야의 교육과 준비조건을 확인해보세요.',cta:'교육과정과 수강조건 보기 →',keywords:'간병 간병인 병원 환자 돌봄 취업 재취업'},
  {name:'아동심리상담사 자격증',url:'https://pudllmbm.adpt.kr',group:'priority',cat:'child psychology',tag:'전문과정 안내',desc:'아동심리와 상담 분야의 별도 과정 및 조건을 확인할 수 있습니다.',cta:'전문과정 상세 확인하기 →',keywords:'아동심리상담사 아동 아이 어린이 심리 상담'},
  {name:'사설탐정사 자격증',url:'https://gidllmbs.adpt.kr',group:'priority',cat:'investigation career',tag:'탐정·조사 추천',desc:'탐정과 민간조사 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'탐정 과정 확인하기 →',keywords:'탐정 사설탐정 조사 민간조사 탐문 조사사 pia'},
  {name:'프리다이빙 자격증 과정',image:'assets/freediving-course.jpg',url:'https://naver.me/5uloeQJe',group:'priority',cat:'creative career',tag:'취미·레저 추천',desc:'AIDA·PADI 레벨 1·2 강습 구성과 교육조건을 확인해보세요.',cta:'프리다이빙 교육과정 확인하기 →',keywords:'프리다이빙 다이빙 스쿠버 AIDA PADI 레저 수영 자격증 강습 교육'},
  {name:'고등·대학 검정고시',url:'https://kedllmbl.adpt.kr',group:'all',cat:'career',tag:'학력·진학 과정',desc:'고등학교 검정고시와 대학 진학 준비 정보를 확인해보세요.',cta:'검정고시 과정 확인하기 →',keywords:'검정고시 고졸 대입 대학 진학 학력'},
  {name:'타로 심리상담사 자격증',url:'https://gedllmbn.adpt.kr',group:'all',cat:'psychology creative',tag:'심리·상담 추천',desc:'타로와 상담 분야를 함께 배우고 싶은 분이 확인할 수 있는 과정입니다.',cta:'타로상담 과정 확인하기 →',keywords:'타로 카드 점 심리 상담 취미'},
  {name:'약용식물 자원관리사 자격증',url:'https://todllmbd.adpt.kr',group:'all',cat:'health career',tag:'생활·전문 추천',desc:'약용식물과 식물자원 관리 분야에 관심 있는 분을 위한 과정입니다.',cta:'교육과정 확인하기 →',keywords:'약초 식물 약용 자원 산야초 건강'},
  {name:'PIA민간조사사 자격증',url:'https://kodllmmm.adpt.kr',group:'all',cat:'investigation career',tag:'탐정·조사 추천',desc:'민간조사와 탐정 분야의 교육과정 및 조건을 확인해보세요.',cta:'민간조사 과정 보기 →',keywords:'pia 민간조사 민간조사사 탐정 조사 사설탐정 탐문'},

  {name:'푸드스타일리스트 자격증',url:'https://cedllmbq.adpt.kr',group:'all',cat:'creative career',tag:'취미·창작',desc:'음식 연출과 푸드 스타일링 분야에 관심 있는 분을 위한 과정입니다.',cta:'푸드스타일링 과정 보기 →',keywords:'푸드 음식 요리 스타일리스트 촬영 연출'},
  {name:'캐리커쳐 자격증',url:'https://xodllmbw.adpt.kr',group:'all',cat:'creative',tag:'취미·창작',desc:'인물의 특징을 살린 그림과 창작 활동에 관심 있는 분을 위한 과정입니다.',cta:'캐리커쳐 자격증 과정 보기 →',keywords:'캐리커쳐 캐리커처 그림 미술 인물화 캐릭터 취미 자격증'},
  {name:'수면관리사 자격증',url:'https://zedllmby.adpt.kr',group:'all',cat:'health',tag:'생활·건강',desc:'수면 습관과 생활관리 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'수면관리 과정 확인하기 →',keywords:'수면 잠 불면 생활 건강 관리'},
  {name:'반려동물행동교정사 자격증',url:'https://gedllmdb.adpt.kr',group:'all',cat:'career care',tag:'반려동물 과정',desc:'반려동물 행동 이해와 교정 분야에 관심 있는 분을 위한 과정입니다.',cta:'반려동물 과정 보기 →',keywords:'반려동물 강아지 고양이 애견 행동 교정 펫'},
  {name:'개인정보관리사 자격증',url:'https://pudllmdd.adpt.kr',group:'all',cat:'career',tag:'취업·실무',desc:'개인정보 보호와 관리 실무에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'개인정보 과정 확인하기 →',keywords:'개인정보 보안 정보보호 관리 실무 취업'},
  {name:'노인스포츠지도사 자격증',url:'https://codllmdm.adpt.kr',group:'all',cat:'care health career',tag:'돌봄·건강',desc:'노인 대상 운동과 스포츠 지도 분야에 관심 있는 분을 위한 과정입니다.',cta:'스포츠지도 과정 보기 →',keywords:'노인 어르신 시니어 운동 체육 스포츠 지도 돌봄'},
  {name:'체형관리사 자격증',url:'https://podllmds.adpt.kr',group:'all',cat:'health career',tag:'생활·건강',desc:'체형과 생활관리 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'체형관리 과정 보기 →',keywords:'체형 몸매 자세 건강 관리 다이어트'},
  {name:'유치원행정실무사 자격증',url:'https://godllmdl.adpt.kr',group:'all',cat:'child career',tag:'아동·교육',desc:'유치원 행정과 교육기관 실무에 관심 있는 분을 위한 과정입니다.',cta:'행정실무 과정 확인하기 →',keywords:'유치원 어린이집 행정 실무 교육 취업 재취업'},
  {name:'심리상담사 자격증',url:'https://zedllmdn.adpt.kr',group:'all',cat:'psychology',tag:'심리·상담',desc:'심리상담 분야의 별도 과정과 수강조건을 확인할 수 있습니다.',cta:'전문과정 상세 보기 →',keywords:'심리 상담 심리상담사 마음 멘탈'},
  {name:'노인심리상담사 자격증 일반과정',image:'assets/course-41.jpg',url:'https://kadllmdh.adpt.kr',group:'all',cat:'psychology care',tag:'심리·상담',desc:'노년기 심리상담 분야의 별도 과정과 수강조건을 확인할 수 있습니다.',cta:'노인심리상담사 과정 확인하기 →',keywords:'노인심리상담사 일반과정 노인 어르신 시니어 심리 상담 복지 자격증'},
  {name:'노인미술심리상담사 자격증',url:'https://vidllmdq.adpt.kr',group:'all',cat:'psychology care creative',tag:'심리·상담',desc:'노년층 대상 미술활동과 심리상담에 관심 있는 분을 위한 과정입니다.',cta:'교육과정 확인하기 →',keywords:'노인 어르신 시니어 미술 심리 상담 그림 돌봄'},
  {name:'부부심리상담사 자격증',url:'https://zodllmdw.adpt.kr',group:'all',cat:'psychology',tag:'심리·상담',desc:'부부관계와 심리상담 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'부부상담 과정 보기 →',keywords:'부부 결혼 관계 가족 심리 상담'},
  {name:'직무스트레스관리사 자격증',url:'https://kedllmdy.adpt.kr',group:'all',cat:'psychology career health',tag:'취업·실무',desc:'직장인의 스트레스와 조직생활 관리 분야에 관심 있는 분을 위한 과정입니다.',cta:'과정 및 조건 확인하기 →',keywords:'직무 스트레스 직장 회사 조직 심리 관리'},
  {name:'산지식물자원관리사 자격증',url:'https://vedllmmb.adpt.kr',group:'all',cat:'health career',tag:'생활·전문',desc:'산지 식물과 자원 관리 분야에 관심 있는 분이 확인할 수 있는 과정입니다.',cta:'교육과정 확인하기 →',keywords:'산지 산림 식물 자원 약초 자연'},
  {name:'발효효소관리사 자격증',url:'https://tedllmmd.adpt.kr',group:'all',cat:'health',tag:'생활·건강',desc:'발효와 효소 관련 생활관리 분야에 관심 있는 분을 위한 과정입니다.',cta:'발효효소 과정 보기 →',keywords:'발효 효소 건강 음식 생활 관리'}
];

const grids = {
  instant: document.getElementById('instantGrid'),
  priority: document.getElementById('priorityGrid'),
  all: document.getElementById('allGrid')
};

function buildCard(c){
  const a = document.createElement('a');
  a.href = c.url;
  a.target = '_blank';
  a.rel = 'sponsored noopener noreferrer';
  a.className = `course-card ${c.group}`;
  a.dataset.name = c.name.toLowerCase();
  a.dataset.keywords = `${c.keywords} ${c.cat} ${c.desc}`.toLowerCase();
  a.dataset.cat = c.cat;
  const img = c.image || courseImages[c.name];
  const visual = img
    ? `<div class="course-image"><img src="${img}" alt="${c.name} 대표 이미지" loading="lazy"></div>`
    : `<div class="course-image course-visual"><span>${c.tag}</span><strong>${c.name}</strong><small>과정 안내 확인</small></div>`;
  a.innerHTML = `${visual}<div class="course-body"><span class="tag">${c.tag}</span><h3>${c.name}</h3><p>${c.desc}</p><b>${c.cta}</b></div>`;
  return a;
}

courses.forEach(c => grids[c.group].appendChild(buildCard(c)));

const input = document.getElementById('searchInput');
const clearButton = document.getElementById('clearSearch');
const status = document.getElementById('searchStatus');
const expandBtn = document.getElementById('expandBtn');
const allGrid = document.getElementById('allGrid');
const resultAnchor = document.getElementById('course-results');
const recommendSection = document.getElementById('recommendSection');
const sections = {
  instant: document.getElementById('instantSection'),
  priority: document.getElementById('prioritySection'),
  all: document.getElementById('allSection')
};
let activeFilter = 'all';

function normalize(text){
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

function expandTerms(query){
  const base = normalize(query).split(' ').filter(Boolean);
  const synonyms = {
    '돌봄':['돌봄','복지','care','간병','동행','생활지원사'],
    '탐정':['탐정','사설탐정','민간조사','조사','pia'],
    '노인':['노인','어르신','시니어'],
    '심리':['심리','상담','멘탈'],
    '아동':['아동','아이','어린이'],
    '병원':['병원','동행','간병','환자'],
    '다이빙':['다이빙','프리다이빙','스쿠버','aida','padi'],
    '면허':['면허','운전면허','필기시험','1종','2종'],
    'mbti':['mbti','성격검사','성격유형','formm']
  };
  return base.map(term => synonyms[term] || [term]);
}

function sectionVisibleCount(section){
  return [...section.querySelectorAll('.course-card')].filter(card => !card.classList.contains('hidden')).length;
}

function updateSectionVisibility(isFiltering){
  Object.values(sections).forEach(section => {
    section.classList.toggle('section-hidden', isFiltering && sectionVisibleCount(section) === 0);
  });
}

function applyFilters({scroll=false}={}){
  const query = normalize(input.value);
  const termGroups = expandTerms(query);
  const isFiltering = Boolean(query) || activeFilter !== 'all';
  let visible = 0;

  document.querySelectorAll('.course-card:not([data-static="true"])').forEach(card => {
    const searchable = `${card.dataset.name} ${card.dataset.keywords}`;
    const matchText = termGroups.length === 0 || termGroups.every(group => group.some(term => searchable.includes(term)));
    const matchCategory = activeFilter === 'all'
      ? true
      : activeFilter === 'instant'
        ? card.classList.contains('instant')
        : card.dataset.cat.split(/\s+/).includes(activeFilter);
    const show = matchText && matchCategory;
    card.classList.toggle('hidden', !show);
    if(show) visible += 1;
  });

  if(isFiltering){
    allGrid.classList.remove('collapsed');
    expandBtn.style.display = 'none';
    status.textContent = visible ? `${visible}개의 관련 과정을 찾았습니다.` : '찾으시는 과정이 없습니다. 자격증 70여 종 무료수강 통합상담을 확인해보세요.';
  } else {
    allGrid.classList.add('collapsed');
    expandBtn.style.display = 'block';
    expandBtn.textContent = '전체 자격증 과정 펼쳐보기 ↓';
    status.textContent = '';
  }

  updateSectionVisibility(isFiltering);
  if(recommendSection) recommendSection.classList.toggle('section-hidden', isFiltering);
  if(scroll) resultAnchor.scrollIntoView({behavior:'smooth', block:'start'});
}

input.addEventListener('input', () => applyFilters());
clearButton.addEventListener('click', () => {
  input.value = '';
  activeFilter = 'all';
  document.querySelectorAll('.filter').forEach(button => button.classList.toggle('active', button.dataset.filter === 'all'));
  applyFilters();
  input.focus();
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    input.value = '';
    applyFilters({scroll:true});
  });
});

expandBtn.addEventListener('click', () => {
  const collapsed = allGrid.classList.toggle('collapsed');
  expandBtn.textContent = collapsed ? '전체 자격증 과정 펼쳐보기 ↓' : '전체 자격증 과정 접기 ↑';
  if(!collapsed) document.getElementById('allSection').scrollIntoView({behavior:'smooth', block:'start'});
});

document.getElementById('barClose').addEventListener('click', () => {
  document.getElementById('mobileBar').classList.add('closed');
});
