import React, { useState } from 'react';
import styled from 'styled-components';
import ThreedotContent from './ThreedotContent';

const Content = props => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [limit, setLimit] = useState(40);

  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };

  const cancelModal = () => {
    setIsModalOn(false);
  };

  const toggleText = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  const clickSeeMore = str => () => {
    setLimit(str.length);
  };

  return (
    <>
      <UserInfo>
        <UserLeft>
          <UserProfile alt="Img" src="/images/Ellipse.png" />
          <UserSub>
            <UserName>scapel</UserName>
            <UserClass>M-class</UserClass>
          </UserSub>
          <DoctorIcon alt="Img" src="/images/doctor.png" />
        </UserLeft>
        <ThreeDotWrapper onClick={modalToggle}>
          <ThreeDot alt="Img" src="/images/dot.png" />
          {isModalOn ? <ThreedotContent /> : null}
        </ThreeDotWrapper>
      </UserInfo>
      <Cancel onClick={cancelModal}>
        <YoutubeContainner>
          <img alt="content" src="/images/youtube.png" />
          <YoutubeMark alt="Img" src="/images/youtubemark.png" />
        </YoutubeContainner>
        <ContentSub>
          <ExpertsRating>
            전문가 평점
            <ExpertsRatingBackground />
            <Score>95</Score>
          </ExpertsRating>
          <GoodAndBad>
            <img alt="goodIcon" src="/images/good.png" />
            <GoodCount>345</GoodCount>
            <img alt="badIcon" src="/images/bad.png" />
            <BadCount>32</BadCount>
          </GoodAndBad>
          <BookmarkWrapper>
            <Bookmark alt="Bookmark" src="/images/bookmark.png" />
          </BookmarkWrapper>
        </ContentSub>
        <ContentWrapper>
          <ContentTitle>
            {
              toggleText(
                '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고있다. ㄹㅇㄴㄹㅇㄴㄹㄴㅇ노러ㅏㄴ아ㅓ론아ㅓㅗㄹㄴ아ㅓ론아ㅓ',
                limit
              ).string
            }
            {toggleText(
              '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고있다. ㄹㅇㄴㄹㅇㄴㄹㄴㅇ노러ㅏㄴ아ㅓ론아ㅓㅗㄹㄴ아ㅓ론아ㅓ',
              limit
            ).isShowMore && (
              <SeeMore
                onClick={clickSeeMore(
                  '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고있다. ㄹㅇㄴㄹㅇㄴㄹㄴㅇ노러ㅏㄴ아ㅓ론아ㅓㅗㄹㄴ아ㅓ론아ㅓ'
                )}
              >
                ... 더보기
              </SeeMore>
            )}
          </ContentTitle>
        </ContentWrapper>
      </Cancel>
    </>
  );
};

export default Content;

const UserInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 414px;
  padding: 10px 10px 1px 6px;
  position: relative;
`;
const UserLeft = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  min-width: 171px;
`;

const UserProfile = styled.img`
  width: 48px;
  margin-left: 8px;
  object-fit: cover;
`;
const UserSub = styled.div`
  font-family: 'NanumGothic';
  margin: 2px;
`;
const DoctorIcon = styled.img`
  width: 24px;
  color: #014d52;
`;
const UserName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`;
const UserClass = styled.div`
  color: #014d52;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
`;

const YoutubeContainner = styled.div`
  position: relative;
  display: flex;
`;
const YoutubeMark = styled.img`
  position: absolute;
  right: 185px;
  top: 73px;
  z-index: 10;
`;
const ContentSub = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 414px;
  div {
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 17px;
  }
`;

const ExpertsRating = styled.div`
  display: flex;
  position: relative;
  width: 131px;
`;

const ExpertsRatingBackground = styled.div`
  background-color: #5ddce5;
  z-index: -1;
  position: absolute;
  bottom: 0;
  height: 11px;
  width: 85px;
  opacity: 45%;
`;

const Score = styled.div`
  margin-left: 2px;
`;
const GoodAndBad = styled.div`
  display: flex;
  width: 131px;
`;
const GoodCount = styled.div`
  margin: 0px 8px 0px 7px;
`;
const BadCount = styled.div`
  margin-left: 8px;
`;

const BookmarkWrapper = styled.div`
  width: 100px;
`;
const Bookmark = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
`;
const ThreeDotWrapper = styled.div`
  position: absolute;
  right: 0;
  top:0
  z-index: 99999;
`;

const ThreeDot = styled.img`
  font-size: 24px;
`;

const ContentWrapper = styled.div`
  padding: 0px 13px;
`;

const ContentTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  text-indent: 1px;
  color: #000000;
  text-overflow: ellipsis;
`;

const SeeMore = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  text-align: right;

  color: #646363;
`;

const Cancel = styled.div`
  width: 100%;
  height: 100%;
`;
