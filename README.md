# Mediserve
![mediserve 001](https://user-images.githubusercontent.com/81367886/144597071-b6252429-d411-4349-80d6-59b99d9abbd2.jpeg)
## 프로젝트 소개
증상의뢰에서 처방까지 한번에 처리할 수 있는 App
- 기간 : 2021. 11. 01. ~ 2021. 11. 19.

## 인원 구성
- **Frontend**: 김용현, 김현진

## 프로젝트 선정이유

## 사용한 기술 스택
- **Frontend**: `HTML`, `React(CRA)`, `Styled-components`, `Redux`, `Socket`
- **Common**: 버전관리 `Git & GitHub`, 소통 `Slack`,  일정관리 `Trello`

## 내가 구현한 부분
- 상담 분야 및 진료과, 의사선택, QnA 페이지 레이아웃 및 로컬 스토리지 이용하여 기능 구현
- QnA 질문 전송 및 포스팅 의뢰 페이지 레이아웃 및 Redux 이용하여 포인트 차감 기능 구현
- 일반인 및 의사 피드 페이지 레이아웃 및 Redux 이용하여 팔로우, 팔로우 취소 기능 구현
- 전체적인 페이지에서 반복적으로 사용되는 레이아웃 및 기능 컴포넌트화
- mediaquery 이용하여 반응형 페이지 구현

### Q&A
- `/qna` - 상담분야 선택 페이지 : 로컬 스토리지 이용하여 선택한 분야가 다른 컴포넌트로 전달 될 수 있도록 구현
- `/medical` - 진료과, 공개여부 선택 : 로컬 스토리지 이용하여 선택한 분야가 다른 컴포넌트로 전달 될 수 있도록 구현
- `/subject` - 진료과 선택 페이지 : 로컬 스토리지 이용하여 선택한 진료과목이 다음 의사리스트 상단에 뜰 수 있도록 구현
- `/detail` - 진료과별 의사 선택 페이지 : 의사 정보를 컴포넌트화 하여 해당 진료과의 의사리스트가 보여질 수 있도록 구현
- `/counsel` - Q&A 질문 페이지 : 로컬 스토리지 이용하여 의뢰 제목 및 내용 저장 및 의사 평점에 따라 별에 표시 될 수 있도록 구현
- `/answer` - Q&A 답변 페이지
- `/counselSubmit` - Q&A 질문 전송 완료 페이지 : 리덕스 이용하여 사용자 총 mds 포인트에서 해당하는 금액만큼 mds 포인트 차감
- `/counselMore` - Q&A 추가 질문 페이지

### 처방전
- `/prescription` - 처방전 사진 미리보내기 선택 페이지 

### 검색
- `/find` - 약국 검색 페이지 : 약국 검색하면 해당 단어를 통해 검색 결과 보여주기, 받아온 데이터에서 입력 받은 텍스트가 포함되어 있는 내용만 보여질 수 있도록 기능 구현
- `/findHospital` - 병원 찾기

### 포스팅
- `/posting` - 포스팅 의뢰 : 로컬스토리지 이용하여 의뢰내용 저장할 수 있도록 우선적으로 구현
- `/postingResult` - 포스팅 의뢰 완료 : 리덕스를 이용한 사용자의 보유 mds 포인트 차감
- `/postingChat` - 포스팅 의뢰 대화창 : 소켓 기능으로 하려고 했으나 프로젝트에 적용시키는 부분에서 막혀서 미구현

### Feed
(공통 기능) 리덕스 이용한 팔로우, 팔로우 취소 기능, 버튼 컴포넌트화
- `/feed` - 일반인 피드
- `/feedex` - 의사 피드

## 이 프로젝트를 통해 배운점 및 느낀점
- 백엔드 없이 프론트로만 작업이 이루어지다보니 백엔드의 입장에서 프론트엔드 작업에 대해 생각해 볼 수 있는 기회가 되었고 주어진 상황에 맞게 프론트선에서 어떤식으로 기능을 구현해야 할지 다양한 방면으로 생각해 볼 수 있었다.
- 소켓과 리덕스와 같은 새로운 기술 스택들을 사용해보면서 기술들의 작동원리를 이해할 수 있었고 프로젝트에 어떻게 적용시켜야 하는지 여러 방면으로 생각해 볼 수 있었다.
