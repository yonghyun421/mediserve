import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../Profile';

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
      <Profile
        modalToggle={modalToggle}
        isModalOn={isModalOn}
        Name="Scalpel"
        Class="M-class"
        ProfildImg="/images/picture1.png"
        DoctorIconImg="/images/doctor.png"
      />
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
