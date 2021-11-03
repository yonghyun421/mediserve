import React from 'react';
import styled from 'styled-components';

const QnA = () => {
  return (
    <QnASection>
      <CareRight src="caretright-1@2x.png" />
      {/* G 컴포넌트 */}
      <Title>
        <Span1>Q</Span1>
        <Span1>&amp;</Span1>
        <Span1>A</Span1>
      </Title>
      <OverlapGroup2>
        <Text></Text>
        <Text7>상담내용이 어떤 분야 입니까?</Text7>
      </OverlapGroup2>
      <OverlapGroup5>
        <Text1>의 &nbsp;&nbsp;료</Text1>
      </OverlapGroup5>
      <OverlapGroup7>
        <Text2>의 약 품</Text2>
      </OverlapGroup7>
      <OverlapGroup6>
        <Text3>의학 정보 / 기사</Text3>
      </OverlapGroup6>
      <OverlapGroup7>
        <Text2>영&nbsp;&nbsp;양</Text2>
      </OverlapGroup7>
      <OverlapGroup3>
        <Text2>운&nbsp;&nbsp;동</Text2>
      </OverlapGroup3>
      <OverlapGroup3>
        <Text2>기&nbsp;&nbsp;타</Text2>
      </OverlapGroup3>
      <Text8>상담료로 MDS 토큰을 지불하셔야합니다.</Text8>
      {/* Next 컴포넌트 */}
      <OverlapGroup1>
        <Rectangle2></Rectangle2>
        <Place>HOME</Place>
        <QA>Q&amp;A</QA>
        <Ellipse16 src="/images/Ellipse-16-1@2x.png" />
        <Rectangle13></Rectangle13>
        <OverlapGroup>
          <Line14 src="line-14-1@2x.png" />
        </OverlapGroup>
      </OverlapGroup1>
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
  /* background-color: var(--white); */
`;

const CareRight = styled.img`
  width: 32px;
  height: 32px;
  align-self: flex-start;
`;

const Title = styled.h1`
  width: 83px;
  min-height: 44px;
  margin-top: 6px;
  margin-right: 1px;
  /* font-family: var(--font-family-roboto-bold); */
  font-weight: 700;
  /* color: var(--mine-shaft);
  font-size: var(--font-size-xl); */
  letter-spacing: 0;
  line-height: 37px;
  white-space: nowrap;
`;

const Span1 = styled.span`
  /* font-family: var(--font-family-nanumgothicextrabold);
  font-size: var(--font-size-l); */
  line-height: 27px;
`;

const OverlapGroup2 = styled.div`
  width: 414px;
  height: 33px;
  position: relative;
  margin-top: 61px;
`;

const Text = styled.div`
  position: absolute;
  width: 414px;
  height: 23px;
  top: 10px;
  left: 0;
  /* font-family: var(--font-family-roboto-regular); */
  font-weight: 400;
  /* color: var(--black);
  font-size: var(--font-size-xs); */
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text7 = styled.div`
  position: absolute;
  width: 414px;
  height: 24px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  height: 55px;
  margin-top: 17px;
  display: flex;
  padding: 15px 27px;
  align-items: flex-start;
  min-width: 200px;
  background-color: #5bdde5;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #0000001a;
`;

const Text1 = styled.div`
  width: 145px;
  height: 24px;
  /* font-family: var(--font-family-nanumgothicbold); */
  font-weight: 700;
  /* color: var(--white);
  font-size: var(--font-size-m); */
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup7 = styled.div`
  height: 55px;
  margin-top: 10px;
  margin-left: 2px;
  display: flex;
  padding: 15px 27px;
  align-items: flex-start;
  min-width: 200px;
  /* background-color: var(--white); */
  border-radius: 20px;
  box-shadow: 0px 0px 20px #0000001a;
`;

const Text2 = styled.div`
  width: 145px;
  height: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup6 = styled.div`
  height: 55px;
  margin-top: 10px;
  margin-left: 2px;
  display: flex;
  padding: 15px 14px;
  align-items: flex-start;
  min-width: 200px;
  /* background-color: var(--white); */
  border-radius: 20px;
  box-shadow: 0 0 20px #0000001a;
`;

const Text3 = styled.div`
  width: 172px;
  height: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  height: 55px;
  margin-top: 10px;
  display: flex;
  padding: 15px 27px;
  align-items: flex-start;
  min-width: 200px;
  /* background-color: var(--white); */
  border-radius: 20px;
  box-shadow: 0 0 20px #0000001a;
`;

const Text8 = styled.div`
  width: 414px;
  height: 20px;
  margin-top: 29px;
  /* font-family: var(--font-family-nanumgothicbold); */
  font-weight: 700;
  color: #014d52;
  /* font-size: var(--font-size-xs); */
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 414px;
  height: 71px;
  position: relative;
  margin-top: 17px;
`;

const Rectangle2 = styled.div`
  position: absolute;
  width: 414px;
  height: 51px;
  top: 0;
  left: 0;
  background-color: #4ae2eb;
`;

const Place = styled.div`
  position: absolute;
  width: 75px;
  top: 15px;
  left: 57px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const QA = styled.div`
  position: absolute;
  top: 15px;
  left: 303px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Ellipse16 = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 6px;
  left: 0;
  /* background-color: var(--black); */
`;

const Rectangle13 = styled.div`
  position: absolute;
  width: 414px;
  height: 20px;
  top: 51px;
  left: 0;
  /* background-color: var(--black); */
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 6px;
  top: 2px;
  left: 189px;
  display: flex;
  align-items: flex-start;
  min-width: 35px;
  /* background-image: url('/images/Ellipse 16.png'); */
  background-size: 100% 100%;
`;

const Line14 = styled.img`
  width: 35px;
  height: 6px;
`;
