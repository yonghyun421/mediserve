import React from 'react';
import styled from 'styled-components';
import ThreedotContent from '../ThreedotContent';

const Profile = ({
  isModalOn,
  modalToggle,
  Name,
  Class,
  ProfileImg,
  DoctorIconImg,
  isDoctor,
}) => {
  return (
    <UserInfo>
      <UserLeft>
        <PicWrapper>
          <UserProfile alt="Img" src={ProfileImg} />
        </PicWrapper>
        <UserSub>
          <UserName>{Name}</UserName>
          <UserClass>{Class}</UserClass>
        </UserSub>
        {isDoctor && <DoctorIcon alt="Img" src={DoctorIconImg} />}
      </UserLeft>
      <ThreeDotWrapper onClick={modalToggle}>
        <ThreeDot alt="Img" src="/images/dot.png" />
        {isModalOn ? <ThreedotContent /> : null}
      </ThreeDotWrapper>
    </UserInfo>
  );
};

export default Profile;

const UserInfo = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 10px 10px 1px 6px;
`;
const UserLeft = styled.div`
  display: flex;
  align-items: center;
  min-width: 171px;
  height: 55px;
`;

const PicWrapper = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: 7px;
`;
const UserProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserSub = styled.div`
  margin: 2px;
  height: 55px;
  text-align: center;
  padding-top: 10px;
  font-family: 'NanumGothic';
`;
const DoctorIcon = styled.img`
  width: 24px;
  color: #014d52;
  object-fit: contain;
`;
const UserName = styled.div`
  height: 25px;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`;
const UserClass = styled.div`
  height: 25px;
  color: #014d52;
  font-size: 13px;
  line-height: 13px;
`;

const ThreeDotWrapper = styled.div`
  position: absolute;
  right: 0;
  top:0
  z-index: 9999;
  padding:0px 10px;
`;

const ThreeDot = styled.img`
  width: 19px;
  height: 28px;
  object-fit: contain;
`;
