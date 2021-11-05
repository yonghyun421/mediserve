import React, { useState, useEffect } from 'react';
import Text from '../../components/Content/Text';
import Profile from '../../components/Content/Profile';
import Rating from '../../components/Content/Rating';
import Replys from '../../components/Content/Replys/Replys';
import styled from 'styled-components';

const Main = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFeeds(data.posting_info);
      });
  }, []);

  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };

  const today = () => {
    const today = new Date();
    let month = `${today.getMonth() + 1}`;
    let day = `${today.getDate()}`;
    const year = today.getFullYear();
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    const getDate = `${year}년 ${month}월 ${day}일`;
    return `${getDate}`;
  };

  console.log(feeds);

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
                ProfileImg={item.Profile_image}
                DoctorIconImg="/images/doctor.png"
              />
              <YoutubeContainner>
                <ContentImage alt="content" src={item.posting_image[0]} />
              </YoutubeContainner>
              <Rating />
              <Text />
              <Replys
                key={item.posting_id}
                posting_info={item.posting_info}
                comment_info={item.comment_info}
              />
            </>
          );
        })}
        <Days>{today()}</Days>
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

const Days = styled.div`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 14px;
  color: #646363;
  margin: 8px 13px;
  height: 10px;
`;
