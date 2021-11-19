import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BackTab from '../../components/BackTab';
import Following from '../../components/Following';
import FeedInfo from '../../components/Feed/FeedInfo';
import Count from './Count';
import PicSection from '../../components/Feed/PicSection';
import VideoSection from '../../components/Feed/VideoSection';

const CONTENT_IMG = [
  {
    pic: [
      'images/Rectangle 27.png',
      'images/Rectangle 30.png',
      'images/Rectangle 33.png',
      'images/Rectangle 27.png',
    ],
    video: [
      'images/Rectangle 27.png',
      'images/Rectangle 30.png',
      'images/Rectangle 33.png',
      'images/Rectangle 27.png',
    ],
  },
];

const Ordinary = {
  pic: 'images/sunny.png',
  name: 'sunny',
  profile:
    '서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원 서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원',
  isFollowing: false,
};

const Feed = () => {
  const [info, setInfo] = useState({});

  const isfollowing = useSelector(state => state.following.isfollowing);

  useEffect(() => {
    setInfo(Ordinary);
  }, [info.isFollowing]);

  return (
    <>
      <BackTab Na="sunny" />
      <FeedArea>
        <MyInfo>
          <FeedInfo Ordinary={Ordinary} />
        </MyInfo>
        <MyInfoDesc>
          <Follow>
            <Count Title="게시물" Num="67" />
            <Count Title="팔로워" Num="32" />
            <Count Title="팔로우" Num="45" />
          </Follow>
        </MyInfoDesc>
        <ButtonBox>
          <Following
            content={isfollowing ? '팔로우 취소' : '팔로잉'}
            grade="ama"
            isFollowing={isfollowing}
            Follow="Follow"
          />
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
          <PicSection Contents={CONTENT_IMG[0].pic} />
          <PicSection Contents={CONTENT_IMG[0].pic} />
          <VideoSection Contents={CONTENT_IMG[0].video} />
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

const TabImg = styled.img`
  width: 29px;
  height: 29px;
  object-fit: scale-down;
`;
