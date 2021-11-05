import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const Content = props => {
  const [isModalOn, setIsModalOn] = useState(false);

  const cancelModal = () => {
    setIsModalOn(false);
  };

  return (
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
    </Cancel>
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

const Cancel = styled.div`
  width: 100%;
  height: 100%;
`;
