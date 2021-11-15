import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const MyPageToggle = ({ modalToggle }) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const modalToggleDiv = () => {
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
          <>
            {MYPAGE[idx].title === '커 뮤 니 티' ? (
              <>
                <CommunityWrapper>
                  <CommnunityText>커 뮤 니 티</CommnunityText>
                  <div>
                    <DropdownIcon
                      src="images/downdrop.png"
                      onClick={modalToggleDiv}
                    />
                  </div>
                  <BottomSolid />
                </CommunityWrapper>

                {isModalOn ? (
                  <>
                    {CATEGORY.map(content => (
                      <CategoryWrapper onClick={modalToggle}>
                        <CategoryContent>{content}</CategoryContent>
                      </CategoryWrapper>
                    ))}
                  </>
                ) : null}
              </>
            ) : (
              <Link to={content.linkto}>
                <MypageContentWrapper>
                  <CommnunityText onClick={modalToggle}>
                    {content.title}
                  </CommnunityText>
                  <BottomSolid />
                </MypageContentWrapper>
              </Link>
            )}
          </>
        );
      })}
    </MyPageTotalWrapper>
  );
};

const MyPageTotalWrapper = styled.ul`
  position: absolute;
  right: 0;
  z-index: 999;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 59px;
  background: rgba(229, 229, 229, 0.8);
`;

const Name = styled.div`
  margin-right: 9px;
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const Profile = styled.img``;

const CommunityWrapper = styled.ul`
  position: relative;
  display: flex;
  justify-content: right;
  height: 30px;
  align-items: center;
  padding: 10px 5px;
  text-align: center;
  background-color: white;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #0068b3;
`;

const CommnunityText = styled.li`
  margin-right: 3px;
`;

const DropdownIcon = styled.img`
  z-index: 9999999999;
`;

const MypageContentWrapper = styled.li`
  position: relative;
  display: flex;
  justify-content: right;
  height: 30px;
  width: 175px;
  align-items: center;
  text-align: center;
  padding: 10px 5px;
  background-color: white;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #0068b3;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: right;
  background-color: white;
  padding-top: 1px;
`;

const BottomSolid = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 136px;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
`;

const CategoryContent = styled.li`
  display: flex;
  justify-content: right;
  align-items: center;
  text-align: right;
  width: 94px;
  margin-bottom: 1px;
  height: 25px;
  font-size: 14px;
  line-height: 14px;
  color: #0068b3;
  background: rgba(167, 236, 240, 0.2);

  color: #646363;
`;

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
export default MyPageToggle;
