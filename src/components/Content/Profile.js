import styled from 'styled-components';
import ThreedotContent from '../ThreedotContent';

const Profile = ({
  isModalOn,
  modalToggle,
  Name,
  Class,
  ProfildImg,
  DoctorIconImg,
}) => {
  return (
    <UserInfo>
      <UserLeft>
        <UserProfile alt="Img" src={ProfildImg} />
        <UserSub>
          <UserName>{Name}</UserName>
          <UserClass>{Class}</UserClass>
        </UserSub>
        <DoctorIcon alt="Img" src={DoctorIconImg} />
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
  justify-content: space-between;
  align-items: center;
  width: 414px;
  padding: 10px 10px 1px 6px;
  position: relative;
`;
const UserLeft = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  min-width: 171px;
`;

const UserProfile = styled.img`
  width: 48px;
  margin-left: 8px;
  object-fit: cover;
`;
const UserSub = styled.div`
  font-family: 'NanumGothic';
  margin: 2px;
`;
const DoctorIcon = styled.img`
  width: 24px;
  color: #014d52;
`;
const UserName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`;
const UserClass = styled.div`
  color: #014d52;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
`;

const ThreeDotWrapper = styled.div`
  position: absolute;
  right: 0;
  top:0
  z-index: 99999;
`;

const ThreeDot = styled.img`
  font-size: 24px;
`;
