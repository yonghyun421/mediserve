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
          <MyPageWrapper key={idx}>
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
                  <div>
                    {CATEGORY.map(content => (
                      <div key={content}>
                        <CategoryContent>{content}</CategoryContent>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <MypageContentWrapper>
                <div>{content}</div>
                <DowndropIcon src="/images/next.png" />
              </MypageContentWrapper>
            )}
          </MyPageWrapper>
        );
      })}
    </MyPageTotalWrapper>
  );
};

const MyPageTotalWrapper = styled.div`
  width: 414px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MyPageWrapper = styled.div`
  width: 414px;
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
`;
const CommunityWrapper = styled.div`
  width: 414px;
  display: flex;
  justify-content: space-between;
  height: 52px;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 0px 32px;
`;
const CommnunityText = styled.div`
  margin-right: 3px;
`;

const DowndropIcon = styled.img`
  z-index: 9999;
  width: 10px;
  height: 20px;
`;
const DowndropIconOpen = styled.img`
  width: 20px;
  height: 10px;
`;

const MypageContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 52px;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 0px 32px;
`;
const CategoryContent = styled.div`
  display: flex;
  height: 42.2px;
  align-items: center;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  padding: 1px 48px;
  margin: 1px 0px;
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
