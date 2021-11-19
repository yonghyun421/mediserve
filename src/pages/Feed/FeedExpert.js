import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BackTab from '../../components/BackTab';
import Count from './Count';
import DoctorList from '../QnA/DoctorList';
import Following from '../../components/Following';
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

const Doc = {
  pic: 'images/picture1.png',
  name: '홍길동',
  rating: 4,
  profile:
    '의사(醫師, medical doctor, physician)는 현대의학의 전문가로서 인체의 질병, 손상, 각종 신체 혹은 정신의 이상을 연구하고 진단, 치료함으로써 인간의 건강을 증진하고 유지하며 회복시키는 일을 수행하는 사람을 말한다.',
  isFollowing: false,
};

const FeedExpert = () => {
  const [info, setInfo] = useState({});

  const isfollowing = useSelector(state => state.following.isfollowing);

  useEffect(() => {
    setInfo(Doc);
  }, [info.isFollowing]);
  return (
    <>
      <BackTab Na="scalpel" De="M-class" />
      <FeedArea>
        <MyInfo>
          <DoctorList Doctor={Doc} Feed="Feed" />
        </MyInfo>
        <MyInfoDesc>
          <Follow>
            <Count Title="게시물" Num="67" />
            <Count Title="팔로워" Num="32" />
            <Count Title="팔로우" Num="45" />
          </Follow>
          <Rating>
            <Count Title="상담평가" Num="Rate" />
            <Count Title="전문가평점" Num="95" />
          </Rating>
        </MyInfoDesc>
        <ButtonBox>
          <Following
            content={isfollowing ? '팔로우 취소' : '팔로잉'}
            isFollowing={isfollowing}
            Follow="Follow"
          />
          <Following content="포스팅 의뢰" />
          <Following content="상담신청" />
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

export default FeedExpert;

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
  height: 58px;
  line-height: 25px;
`;

const Follow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  width: 414px;
  margin: 14px auto 0 auto;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  width: 414px;
  margin: 0 auto;
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
  margin: 0 11px 0 11px;
`;

const TabImg = styled.img`
  width: 29px;
  height: 29px;
  object-fit: scale-down;
`;
