import React from 'react';
import styled from 'styled-components';
import BackTab from '../../components/BackTab';
import Following from '../../components/Following';
import Content from './Contents';
import FeedInfo from '../../components/FeedInfo';
import Count from './Count';

const CONTENT_IMG = [
  'images/Rectangle 27.png',
  'images/Rectangle 30.png',
  'images/Rectangle 33.png',
  'images/Rectangle 27.png',
];

const Feed = () => {
  return (
    <>
      <BackTab Na="sunny" />
      <FeedArea>
        <MyInfo>
          <FeedInfo />
        </MyInfo>
        <MyInfoDesc>
          <Follow>
            <Count Title="게시물" Num="67" />
            <Count Title="팔로워" Num="32" />
            <Count Title="팔로우" Num="45" />
          </Follow>
        </MyInfoDesc>
        <ButtonBox>
          <Following content="팔로잉" grade="ama" />
          <Following content="메시지" grade="ama" />
        </ButtonBox>
        <FeedHeader>
          <PicTab>
            <TabImg src="images/pic.png" />
          </PicTab>
          <VideoTab>
            <TabImg src="images/youtubeTab.png" />
          </VideoTab>
        </FeedHeader>
        <FeedBox>
          <PicSection>
            {CONTENT_IMG.map((image, idx) => (
              <Content key={idx} image={image} />
            ))}
          </PicSection>
          <PicSection>
            {CONTENT_IMG.map((image, idx) => (
              <Content key={idx} image={image} />
            ))}
          </PicSection>
          <VideoSection>
            {CONTENT_IMG.map((image, idx) => (
              <Content key={idx} image={image} />
            ))}
          </VideoSection>
        </FeedBox>
      </FeedArea>
    </>
  );
};

export default Feed;

const FeedArea = styled.div`
  width: 100%;
`;

const MyInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyInfoDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  line-height: 25px;
`;

const Follow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  padding: 0 28px;
  width: 414px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FeedHeader = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 35px;
  margin: 18px 11px 0 11px;
`;

const PicTab = styled.div`
  width: 65%;
  height: 100%;
  border-right: 1px solid #c4c4c4;
`;

const VideoTab = styled.div`
  width: 35%;
  height: 100%;
`;

const FeedBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 11px 100px 11px;
`;

const PicSection = styled.div`
  width: 33%;
  background-color: green;
`;

const VideoSection = styled.div`
  width: 33%;
  background-color: red;
`;

const TabImg = styled.img`
  width: 29px;
  height: 29px;
  object-fit: scale-down;
`;

// const Content = styled.div`
//   width: 130px;
//   height: 110px;
//   margin: 0.5px;
// `;

// const ContentImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
