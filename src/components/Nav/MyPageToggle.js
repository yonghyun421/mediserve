import React, { useState } from 'react';
import styled from 'styled-components';

const MyPageToggle = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };

  return (
    <MyPageTotalWrapper>
      <ProfileWrapper>
        <Name>sunny</Name>
        <Profile src="/images/Ellipse4.png" />
      </ProfileWrapper>
      {MYPAGE.map((content, idx) => {
        return (
          <MyPageWrapper key={idx}>
            {MYPAGE[idx] === '커 뮤 니 티' ? (
              <>
                <CommunityWrapper>
                  <CommnunityText>커 뮤 니 티</CommnunityText>
                  <DowndropIcon
                    src="/images/downdrop.png"
                    onClick={modalToggle}
                  />
                </CommunityWrapper>
                {isModalOn ? (
                  <CategoryWrapper>
                    {CATEGORY.map(content => (
                      <CategoryContent>{content}</CategoryContent>
                    ))}
                  </CategoryWrapper>
                ) : null}
              </>
            ) : (
              <MyPage>{content}</MyPage>
            )}
            {idx !== CATEGORY.length ? <BottomSolid /> : null}
          </MyPageWrapper>
        );
      })}
    </MyPageTotalWrapper>
  );
};

const MyPageTotalWrapper = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
`;
const ProfileWrapper = styled.div`
  height: 59px;
  background: rgba(229, 229, 229, 0.5);
  display: flex;
  justify-content: right;
  align-items: center;
`;
const Name = styled.div`
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-right: 9px;
  color: #000000;
`;
const Profile = styled.img``;

const MyPageWrapper = styled.div`
  position: relative;
  width: 175px;
  background-color: #ffffff;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #0068b3;
`;
const MyPage = styled.div`
  display: flex;
  justify-content: right;
  text-align: center;
  padding: 10px 5px;
`;
const CommunityWrapper = styled.ul`
  display: flex;
  justify-content: right;
  padding: 10px 5px;
`;
const CommnunityText = styled.li`
  margin-right: 3px;
`;

const DowndropIcon = styled.img`
  z-index: 9999;
`;
const CategoryWrapper = styled.ul`
  position: relative;
  height: 145px;
`;
const CategoryContent = styled.li`
  float: right;
  width: 94px;
  display: flex;
  justify-content: right;
  height: 25px;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  padding: 5px;
  margin: 1px 0px;
  color: #646363;
  background: rgba(167, 236, 240, 0.2);
`;

const BottomSolid = styled.div`
  border-bottom: 1px solid #e5e5e5;
  position: absolute;
  width: 136px;
  bottom: 0;
  right: 0;
`;
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
export default MyPageToggle;
