import React, { useState } from 'react';
import styled from 'styled-components';

const Content = props => {
  return (
    <ContentSub>
      <ExpertsRating>
        <ScoreBackground>전문가 평점</ScoreBackground>
        <Score>95</Score>
      </ExpertsRating>
      <GoodAndBad>
        <GoodIcon alt="goodIcon" src="/images/good.png" />
        <GoodCount>345</GoodCount>
        <BadIcon alt="badIcon" src="/images/bad.png" />
        <BadCount>32</BadCount>
      </GoodAndBad>
      <BookmarkWrapper>
        <Bookmark alt="Bookmark" src="/images/bookmark.png" />
      </BookmarkWrapper>
    </ContentSub>
  );
};

export default Content;

const ContentSub = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 0px;
  margin-top: 3px;
  padding: 10px;
`;

const ExpertsRating = styled.span`
  display: flex;
  width: 131px;
`;

const ScoreBackground = styled.span`
  display: flex;
  align-items: flex-end;
  width: 85px;
  height: 11px;
  margin-top: 7px;
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
  background-color: rgba(75, 226, 236, 0.4);
`;

const Score = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 2px;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 17px;
  line-height: 17px;
`;

const GoodAndBad = styled.div`
  display: flex;
  width: 131px;
`;

const GoodCount = styled.div`
  margin: 0px 8px 0px 7px;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 17px;
  line-height: 17px;
  display: flex;
  align-items: flex-end;
`;

const BadCount = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 8px;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 17px;
  line-height: 17px;
`;

const BookmarkWrapper = styled.div`
  width: 100px;
`;

const Bookmark = styled.img`
  position: absolute;
  right: 10px;
  top: 2px;
  width: 14.95px;
  height: 20px;
`;

const GoodIcon = styled.img`
  width: 18px;
  height: 20px;
`;

const BadIcon = styled.img`
  width: 18px;
  height: 20px;
  margin-top: 2px;
`;
