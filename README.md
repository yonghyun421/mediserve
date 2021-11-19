# Mediserve

## 페이지
### 메인
- `/` - 메인 페이지 : 댓글 추가 및 삭제, 피드내용 더보기, 네브 바 마이 페이지 메뉴 토글 및 페이지 링크 기능 구현
- `/login` - 로그인 페이지(레이아웃x)
- `/mypage` - 카테고리 페이지 : 토글 기능을 이용한 카테고리 창 구현
- 하단 메뉴창

### Q&A
- `/qna` - 상담분야 선택 페이지 
- `/medical` - 진료과, 공개여부 선택
- `/subject` - 진료과 선택 페이지
- `/detail` - 진료과별 의사 선택 페이지
- `/counsel` - Q&A 질문 페이지
- `/answer` - Q&A 답변 페이지
- `/counselSubmit` - Q&A 질문 전송 완료 페이지 : 리덕스 이용하여 mds 포인트 차감
- `/counselMore` - Q&A 추가 질문 페이지

### 처방전
- `/prescription` - 처방전 사진 미리보내기 선택 페이지 
- `/checkqr` - 처방전 사진 등록 가이드
- `/snapshot` - 처방전/qr 촬영 : 웹캠 라이브러리 커스터마이징을 통한 촬영 기능 구현
- `/loading` - 접수중 화면 : spinner 기능 구현
- `/payment` - 결제확인 페이지 
- `/paymentfinish` - 결제완료 페이지 

### 검색
- `/find` - 약국 검색 페이지 : 약국 검색하면 해당 단어를 통해 검색 결과 보여주기
- `/findHospital` - 병원 찾기

### 포스팅
- `/upload` - 포스팅 페이지 : 이미지 첨부 및 미리보기
- `/posting` - 포스팅 의뢰 : 로컬스토리지 이용한 의뢰내용 저장
- `/postingResult` - 포스팅 의뢰 완료 : 리덕스 이용한 mds 포인트 차감
- `/postingChat` - 포스팅 의뢰 대화창 : 소켓 기능으로 하려고 했으나 아직 미구현

### Feed
(공통 기능) 리덕스 이용한 팔로우, 팔로우 취소 기능, 버튼 컴포넌트화
- `/feed` - 일반인 피드 
- `/feedex` - 의사 피드



