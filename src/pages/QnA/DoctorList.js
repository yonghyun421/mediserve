import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DocRating from '../../components/DocRating/DocRating';

const DoctorList = ({ Doctor, Ex, Title, Feed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});

  const ToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setInfo({ Doctor });
  }, []);

  return (
    <SelectBox Title={Title}>
      <DocList>
        <DocImg Feed={Feed} src={Doctor.pic} />
        <DocDetailBox>
          <DocDetailHeader>
            <DocName>
              <span>{Doctor.name}</span>
            </DocName>
            <Rating Feed={Doctor.job}>
              <Counsel>
                <DocRating Rates={Doctor.rating} />
              </Counsel>
            </Rating>
          </DocDetailHeader>
          <DocDesc>
            <Profile isOpen={isOpen} Feed={Feed}>
              {Doctor.profile}
            </Profile>
            <More onClick={ToggleOpen}>
              <span>{isOpen ? '접기' : '...더보기'}</span>
            </More>
          </DocDesc>
        </DocDetailBox>
      </DocList>
    </SelectBox>
  );
};

export default DoctorList;

const SelectBox = styled.div`
  ${props =>
    props.Title === 'List'
      ? `&:hover {
    background: rgba(92, 221, 230, 0.2);
  }`
      : null}
`;

const DocList = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 0 15px 0;
  margin: 0 25px;
  border-bottom: 1px solid #3db8c0;
`;

const DocImg = styled.img`
  ${props =>
    props.Feed === 'Feed'
      ? `width : 107px; height : 107px;`
      : `width : 81px; height : 81px;`}

  object-fit: cover;
  margin-top: 10px;
`;

const DocDetailBox = styled.div`
  padding-left: 10px;
`;

const DocDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px; ;
`;

const DocDesc = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 14px;
`;

const Profile = styled.div`
  width: 90%;

  ${props =>
    props.Feed === 'Feed'
      ? `font-size : 16px; line-height : 20px;`
      : `font-size : 14px; line-height : 14px;`}

  ${props =>
    props.isOpen
      ? `height : ''; overflow-y : '';`
      : `height : 40px; overflow-y : hidden;`}

  margin-bottom: 10px;
  word-break: break-word;
`;

const More = styled.div`
  position: absolute;
  text-align: right;
  right: 10px;
  bottom: 8px;
  font-size: 12px;
  letter-spacing: 0;
  cursor: pointer;
  padding-top: 10px;
`;

const Counsel = styled.span`
  letter-spacing: 0;
  font-size: 15px;
  line-height: 15px;
  padding: 0 5px 0 10px;
`;

const Rating = styled.div`
  display: ${props => (props.Feed ? 'flex;' : 'none;')};
  justify-content: center;
  align-items: baseline;
  margin-right: 100px;
  letter-spacing: 0;
  font-size: 12px;
`;

const DocName = styled.div`
  height: 18px;
  letter-spacing: 0;
  font-size: 18px;
`;
