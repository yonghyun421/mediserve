import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Mypage = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };
  return (
    <MyPageTotalWrapper>
      {MYPAGE.map((content, idx) => {
        return MYPAGE[idx].title === '커 뮤 니 티' ? (
          <>
            <CommunityWrapper>
              <CommnunityText>커 뮤 니 티</CommnunityText>
              {isModalOn ? (
                <DowndropIconOpen
                  src="/images/opentoggle.png"
                  onClick={modalToggle}
                />
              ) : (
                <DowndropIcon src="/images/next.png" onClick={modalToggle} />
              )}
            </CommunityWrapper>
            {isModalOn ? (
              <>
                {CATEGORY.map(content => (
                  <CategoryContent>{content}</CategoryContent>
                ))}
              </>
            ) : null}
          </>
        ) : (
          <Link to={content.linkto}>
            <MypageContentWrapper>
              <CommnunityText>{content.title}</CommnunityText>
              <DowndropIcon src="/images/next.png" />
            </MypageContentWrapper>
          </Link>
        );
      })}
    </MyPageTotalWrapper>
  );
};

const MyPageTotalWrapper = styled.ul`
  width: 100%;
  margin-bottom: 72px;
`;

const CommunityWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  height: 52px;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 20px 32px;
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
`;

const CommnunityText = styled.div`
  margin-right: 3px;
`;

const DowndropIcon = styled.img`
  width: 10px;
  height: 20px;
  z-index: 9999;
`;

const DowndropIconOpen = styled.img`
  width: 20px;
  height: 10px;
`;

const MypageContentWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  height: 52px;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 20px 32px;
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
`;

const CategoryContent = styled.li`
  display: flex;
  height: 42.2px;
  align-items: center;
  padding: 1px 48px;
  margin: 1px 0px;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  color: #000000;
  background: #f5f5f5;
`;
export default Mypage;

const MYPAGE = [
  { title: '내 지 갑', linkto: '/' },
  { title: 'Q&A 답변 확인', linkto: '/answer' },
  { title: '포스팅 의뢰 확인', linkto: '/postingChat' },
  { title: '커 뮤 니 티', linkto: '/' },
  { title: '고 객 지 원', linkto: '/' },
  { title: '설   정', linkto: '/' },
  { title: '로 그 아 웃', linkto: '/' },
];

const CATEGORY = ['의사', '환 우 회', '약 사', '의 학 기 자', '영 양 사'];
