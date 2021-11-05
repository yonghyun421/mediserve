import React from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../components/ValignTextBottom';

const FeedInfo = () => {
  return (
    <DocList>
      <DocImg src="images/sunny.png" />
      <DocDetailBox>
        <DocDetailHeader>
          <DocName>
            <span>sunny</span>
          </DocName>
        </DocDetailHeader>
        <DocDesc>
          <p>
            <span>
              Hi, I'm Sunny..(본인소개) <br />
              daily, love, pic etc(기타사항)
              <br />
              등등...
            </span>
          </p>
          <More>
            <span>...더보기</span>
          </More>
        </DocDesc>
      </DocDetailBox>
    </DocList>
  );
};

export default FeedInfo;

const DocList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 135px;
  border-bottom: 1px solid #3db8c0;
  padding: 0 25px;
`;

const DocImg = styled.img`
  width: 107px;
  height: 107px;
  object-fit: cover;
  margin-left: 13px;
`;

const DocDetailBox = styled.div`
  padding-left: 10px;
  padding-bottom: 25px;
`;

const DocDetailHeader = styled.div`
  height: 18px;
  display: flex;
`;

const DocDesc = styled.div`
  height: 43px;
  width: 286px;
  padding-top: 10px;
  font-size: 16px;
  line-height: 20px;
`;

const More = styled.div`
  letter-spacing: 0;
  position: absolute;
  right: 0;
  bottom: 12px;
  width: 48px;
  height: 17px;
  font-size: 12px;
`;

const Counsel = styled.div`
  height: 15px;
  width: 117px;
  letter-spacing: 0;
  font-size: 15px;
`;

const Rating = styled.div`
  height: 16px;
  letter-spacing: 0;
  width: 17px;
  font-size: 12px;
`;

const DocName = styled.div`
  ${ValignTextBottom}
  height: 18px;
  letter-spacing: 0;
  width: 61px;
  font-size: 18px;
  font-weight: 700;
`;
