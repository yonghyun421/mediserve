import React, { useState, useEffect } from 'react';
import Text from '../../components/Content/Text';
import Profile from '../../components/Content/Profile';
import Rating from '../../components/Content/Rating';
import Replys from '../../components/Content/Replys/Replys';
import styled from 'styled-components';

const Main = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3000/data/feeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data.posting_info);
      });
  }, []);
  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };

  const replyOpenToggle = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  const today = posting_date => {
    let postingDate = posting_date.split('-');
    const year = postingDate[0];
    let month = postingDate[1];
    if (month.length < 2) month = `0${month}`;
    let day = postingDate[2];
    if (day.length < 2) day = `0${day}`;
    const getDate = `${year}년 ${month}월 ${day}일`;
    return getDate;
  };

  return (
    <Total>
      <Wrapper>
        {feeds?.map(item => {
          return (
            <>
              <Profile
                modalToggle={modalToggle}
                isModalOn={isModalOn}
                Name={item.posting_writer}
                Class={item.grade}
                ProfileImg={item.profile_image}
                DoctorIconImg="/images/doctor.png"
              />
              <YoutubeContainner>
                <ContentImage alt="content" src={item.posting_image[0]} />
              </YoutubeContainner>
              <Rating />
              <Text content={item.posting_content} />
              <ReplyWrapper onClick={replyOpenToggle}>
                {isReplyOpen ? (
                  <Replys
                    posting_info={item.posting_info}
                    comment_info={item.comment_info}
                  />
                ) : item.comment_info.length > 0 ? (
                  <TotalReplyBtn>{`${item.comment_info.length}개의 댓글 전체보기`}</TotalReplyBtn>
                ) : (
                  ''
                )}
              </ReplyWrapper>
              <Days>{today(item.posting_date)}</Days>
            </>
          );
        })}
      </Wrapper>
    </Total>
  );
};

export default Main;

const Total = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const YoutubeContainner = styled.div`
  position: relative;
  width: 100%;
  object-fit: cover;
`;

const ContentImage = styled.img`
  width: 100%;
`;

const ReplyWrapper = styled.div`
  padding: 2px 10px 2px 0px;
  font-size: 20px;
  margin: 5px 0px;
`;

const TotalReplyBtn = styled.div`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  color: #646363;
  margin-left: 10px;
  padding: 2px 0px 0px 3px;
`;
const Days = styled.div`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 14px;
  color: #646363;
  margin: 8px 13px;
  height: 10px;
`;
