import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Text from '../../components/Content/Text';
import Profile from '../../components/Content/Profile';
import Rating from '../../components/Content/Rating';
import TotalReplys from '../../components/Content/Replys/TotalReplys';
import styled from 'styled-components';

const Main = props => {
  console.log(props);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/feeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data.posting_info);
      });
  }, []);

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
        {feeds?.map((item, idx) => {
          return (
            <>
              <Profile
                Name={item.posting_writer}
                Class={item.grade}
                ProfileImg={item.profile_image}
                isDoctor={item.isdoctor}
                DoctorIconImg="/images/doctor.png"
                props={props}
                feed={item}
              />
              <YoutubeContainner>
                <ContentImage alt="content" src={item.posting_image[0]} />
              </YoutubeContainner>
              <Rating />
              <Text content={item.posting_content} />
              <TotalReplys
                posting_info={item.posting_info}
                comment_info={item.comment_info}
              />
              <Days>{today(item.posting_date)}</Days>
            </>
          );
        })}
      </Wrapper>
    </Total>
  );
};

export default withRouter(Main);

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
