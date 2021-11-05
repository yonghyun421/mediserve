import React from 'react';
import styled from 'styled-components';
import Next from '../../components/Next/Next';

const CATEGORY = [
  '의 료',
  '의 약 품',
  '의학 정보 / 기사',
  '영 양',
  '운 동',
  '기 타',
];

const QnA = () => {
  return (
    <QnASection>
      <QA>
        <CaretRight src="images/backIcon.png" />
        <span>Q</span>
        <Span1>&amp;</Span1>
        <span>A</span>
      </QA>
      <QBox>
        <p>상담내용이 어떤 분야 입니까?</p>
      </QBox>
      {CATEGORY.map((category, idx) => (
        <CategoryBox key={idx}>{category}</CategoryBox>
      ))}
      <Text>상담료로 MDS 토큰을 지불하셔야합니다.</Text>
      <Next />
    </QnASection>
  );
};

export default QnA;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const CaretRight = styled.img`
  position: absolute;
  width: 10px;
  left: 20px;
`;

const QA = styled.div`
  display: flex;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 10px;
  line-height: 22px;
  letter-spacing: 0;
  white-space: nowrap;
  font-size: 37px;
`;

const Span1 = styled.span`
  font-size: 25px;
  line-height: 27px;
`;

const QBox = styled.div`
  width: 414px;
  height: 33px;
  position: relative;
  text-align: center;
  margin-top: 61px;
  font-size: 24px;
  font-weight: 700;
`;

const CategoryBox = styled.div`
  width: 200px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #0000001a;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    background-color: #5bdde5;
  }
`;

const Text = styled.div`
  width: 414px;
  margin-top: 29px;
  text-align: center;
  font-weight: 700;
  color: #014d52;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;
