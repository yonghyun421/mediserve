import React, { useState } from 'react';
import styled from 'styled-components';

const Mypage = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };
  return (
    <MyPageTotalWrapper>
      {MYPAGE.map((content, idx) => {
        return (
          <>
            {MYPAGE[idx] === '커 뮤 니 티' ? (
              <>
                <CommunityWrapper>
                  <CommnunityText>커 뮤 니 티</CommnunityText>
                  {isModalOn ? (
                    <DowndropIconOpen
                      src="/images/opentoggle.png"
                      onClick={modalToggle}
                    />
                  ) : (
                    <DowndropIcon
                      src="/images/next.png"
                      onClick={modalToggle}
                    />
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
              <MypageContentWrapper>
                <CommnunityText>{content}</CommnunityText>
                <DowndropIcon src="/images/next.png" />
              </MypageContentWrapper>
            )}
          </>
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
  '내 지 갑',
  'Q&A 답변 확인',
  '포스팅 의뢰 확인',
  '커 뮤 니 티',
  '고 객 지 원',
  '설   정',
  '로 그 아 웃',
];

const CATEGORY = ['의사', '환 우 회', '약 사', '의 학 기 자', '영 양 사'];
