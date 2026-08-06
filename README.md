# 광동 침향환 YZnjWWSZds 네이버용 GitHub 전체 업로드용

업로드 후 주소:
https://lifepick.life/nkangdong/

신청폼:
https://www.albarich.com/intro/_frm/index.php?code=YZnjWWSZds

구성:
- index.html : 루트 접속 시 /nkangdong/ 이동
- nkangdong/ : 네이버용 메인 랜딩
- nkangdong/apply/ : 실제 상담신청 iframe
- privacy/ : 개인정보처리방침
- terms/ : 이용안내

반영:
- 업로드한 침향환 원본 HTML/CSS/JS/이미지 구조 유지
- 신청 코드 YZnjWWSZds 적용
- 메인 form action은 /apply/로 연결
- /apply/에 YZnjWWSZds iframe 삽입
- 기존 하단 상호/사업자/comment/tracking 2023 관련 정보 제거
- 하단 (주)허브153 정보 적용

- foot2.jpg 기존 하단 이미지정보 블록 제거
- 실시간 상담신청 현황 rolling top 값을 0으로 초기화

- 상담현황 db_bg.jpg 누락 대비: 진한 배경 적용, 흰 글씨 표시 보정

- rolling 고정 CSS 제거: 상담현황 움직임 복구
- 초기 top만 0으로 잡고 원본 JS 롤링 작동 유지
