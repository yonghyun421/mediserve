import React, { useState } from 'react';
import styled from 'styled-components';
import Next from '../../components/Next/Next';
import QnATab from '../../components/QnA/QnATab';
import { Link } from 'react-router-dom';

const Medical = () => {
  const [status, setStatus] = useState({
    part: false,
    secret: false,
  });

  const onChangePart = e => {
    setStatus(
      e.target.id === '1'
        ? { ...status, part: true }
        : { ...status, part: false }
    );
  };

  const onChangeSecret = e => {
    setStatus(
      e.target.id === '1'
        ? { ...status, secret: true }
        : { ...status, secret: false }
    );
  };

  return (
    <>
      <QnATab />
      <ChoiceSection>
        <ChoiceBox name="part" id="1" status={status} onClick={onChangePart}>
          <span>아픈부위 / 궁금한부위로 선택</span>
        </ChoiceBox>
        <ChoiceSubject
          name="part"
          id="2"
          status={status}
          onClick={onChangePart}
        >
          <span>진료과로 선택</span>
        </ChoiceSubject>
        <FlexRow>
          <ChoiceSmallBox
            name="secret"
            id="1"
            status={status}
            onClick={onChangeSecret}
          >
            <P>공개</P>
            <MDS5>( MDS 2개 이상 소비 )</MDS5>
          </ChoiceSmallBox>
          <ChoiceSmallSubject
            name="secret"
            id="2"
            status={status}
            onClick={onChangeSecret}
          >
            <P>비공개</P>
            <MDS5>( MDS 5개 이상 소비 )</MDS5>
          </ChoiceSmallSubject>
        </FlexRow>
      </ChoiceSection>
      <LinkBtn to={status.part ? '/부위' : '/subject'}>
        <Next Title="NEXT" />
      </LinkBtn>
    </>
  );
};

export default Medical;

const P = styled.p`
  line-height: 20px;
  font-size: 20px;
`;

const ChoiceSection = styled.div`
  margin-top: 128px;
`;

const ChoiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 45px 34px;
  border-radius: 20px;
  box-shadow: 0 0 20px #0000001a;
  font-size: 23px;
  font-weight: 700;
  line-height: 23px;
  ${props =>
    props.status.part
      ? 'background-color: #5cdde5; color: #ffffff;'
      : 'background-color: #ffffff; color: black;'};
`;

const ChoiceSubject = styled(ChoiceBox)`
  ${props =>
    props.status.part
      ? 'background-color: #ffffff; color: black;'
      : 'background-color: #5cdde5; color: #ffffff;'};
`;

const ChoiceSmallBox = styled.div`
  /* width: 170px;
  height: 85px; */
  text-align: center;
  margin: 5px 10px 10px 5px;
  padding: 21px 25px;
  border-radius: 20px;
  box-shadow: 0 0 20px #0000001a;
  font-size: 13px;
  line-height: 13px;
  width: 100%;
  ${props =>
    props.status.secret
      ? 'background-color: #5cdde5; color: #ffffff;'
      : 'background-color: #ffffff; color: black;'};
`;

const ChoiceSmallSubject = styled(ChoiceSmallBox)`
  ${props =>
    props.status.secret
      ? 'background-color: #ffffff; color: black;'
      : 'background-color: #5cdde5; color: #ffffff;'};
  margin: 5px 5px 10px 10px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 360px;
`;

const MDS5 = styled.p`
  margin-top: 8px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
