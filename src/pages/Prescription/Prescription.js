import React from 'react';
import styled from 'styled-components';
import BackTab from '../../components/BackTab';
import { Link } from 'react-router-dom';

const Prescription = () => {
  return (
    <>
      <BackTab />
      <PressSection>
        <LinkBtn to="/checkqr">
          <PresBox color="#5CDDE5">
            <TextBox>
              <H1 color="#ffffff">처방전 사진 미리보내기</H1>
              <DescText>약국내 대기 시간을 절약하세요.</DescText>
            </TextBox>
          </PresBox>
        </LinkBtn>
        <PresBox color="#E5E5E5">
          <TextBox>
            <H1>병원 모바일 앱 서비스</H1>
            <H1 color="#0068B2">연결하기</H1>
            <DescText2>
              회원가입 절차 없이
              <br />
              원하는 병원의 서비스를 이용하세요.
            </DescText2>
          </TextBox>
        </PresBox>
      </PressSection>
    </>
  );
};

export default Prescription;

const PressSection = styled.div`
  padding: auto auto;
  padding-top: 116px;
`;

const PresBox = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 30px;
  background-color: ${props => props.color};
  display: flex;
  margin: 11px auto;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 100%;
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 17px;
  font-size: 30px;
  font-weight: 600;
  color: ${props => props.color};
`;

const DescText = styled.span`
  margin-top: 7px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 300;
  color: white;
`;

const DescText2 = styled.span`
  font-size: 18px;
  line-height: 25px;
  font-weight: 300;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
`;
