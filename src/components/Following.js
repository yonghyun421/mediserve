import React from 'react';
import styled from 'styled-components';
import { follower, unfollower } from '../redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Following = ({
  content,
  grade,
  follower,
  unfollower,
  isFollowing,
  Follow,
}) => {
  const history = useHistory();

  const goToPage = e => {
    if (e.target.getAttribute('content') === '포스팅 의뢰') {
      history.push('/posting');
    } else if (e.target.getAttribute('content') === '상담신청') {
      history.push('/counsel');
    }
  };

  return Follow ? (
    <Button
      grade={grade}
      onClick={() => {
        isFollowing ? unfollower() : follower();
      }}
    >
      {content}
    </Button>
  ) : (
    <Button grade={grade} onClick={goToPage} content={content}>
      {content}
    </Button>
  );
};

const Button = styled.div`
  width: ${({ grade }) => (grade === 'ama' ? '45%;' : '30%;')};
  height: 30px;
  border-radius: 5px;
  background: linear-gradient(90.1deg, #7ae0cc -2.23%, #47b1d1 99.89%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
`;

const mapStateToProps = ({ following }) => {
  return {
    isfollowing: following.isfollowing,
  };
};

const mapDispatchToProps = {
  follower,
  unfollower,
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
