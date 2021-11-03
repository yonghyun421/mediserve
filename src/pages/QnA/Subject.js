import React from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../../components/ValignTextBottom';
import { ValignTextMiddle } from '../../components/ValignTextMiddle';
import { SUBJECT_CATEGORY } from './SubjectCategory';

const Subject = () => {
  return (
    <QnASection>
      <FlexCol>
        <OverlapGroup3>
          {/* G */}
          <Ellipse2></Ellipse2>
          <CaretRight></CaretRight>
        </OverlapGroup3>
        <QA>
          <span>Q</span>
          <Span1>&amp;</Span1>
          <span>A (의료)</span>
        </QA>
        <Text1>
          <span>
            <span>진료과</span>
          </span>
        </Text1>
        <Rectangle113></Rectangle113>
      </FlexCol>
      <FlexRow>
        <FlexCol1>
          <FlexRow1>
            {SUBJECT_CATEGORY.map(subject => (
              <div>
                <OverlapGroup37>
                  <Text2>
                    <span>
                      <span>{subject[0]}</span>
                    </span>
                  </Text2>
                </OverlapGroup37>
                <OverlapGroup12>
                  <Text2>
                    <span>
                      <span>{subject[1]}</span>
                    </span>
                  </Text2>
                </OverlapGroup12>
                <OverlapGroup26>
                  <Text2>
                    <span>
                      <span>{subject[2]}</span>
                    </span>
                  </Text2>
                </OverlapGroup26>
                <OverlapGroup20>
                  <Text2>
                    <span>
                      <span>{subject[3]}</span>
                    </span>
                  </Text2>
                </OverlapGroup20>
              </div>
            ))}
          </FlexRow1>
        </FlexCol1>
      </FlexRow>
    </QnASection>
  );
};

export default Subject;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--white); */
`;

const FlexCol = styled.div`
  width: 415px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
`;

const CaretRight = styled.img`
  width: 32px;
  height: 32px;
  align-self: flex-start;
`;

const Span1 = styled.span`
  /* font-family: var(--font-family-nanumgothicextrabold);
  font-size: var(--font-size-l); */
  line-height: 27px;
`;

const Rectangle113 = styled.div`
  width: 356px;
  height: 2px;
  margin-top: 23px;
  margin-left: 1px;
  background-color: #e5e5e5;
`;

const OverlapGroup2 = styled.div`
  width: 414px;
  height: 33px;
  position: relative;
  margin-top: 61px;
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

const Ellipse2 = styled.img`
  position: absolute;
  width: 54px;
  height: 51px;
  top: 0;
  left: 0;
`;

const FlexRow1 = styled.div`
  height: 492px;
  display: flex;
  align-items: flex-start;
  min-width: 295px;
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

const FlexRow = styled.div`
  height: 85px;
  margin-top: 19px;
  margin-left: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 360px;
`;

const FlexCol1 = styled.div`
  width: 96px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 492px;
`;

const OverlapGroup37 = styled.div`
  height: 50px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 95px;
  border-radius: 5px;
  box-shadow: 0 0 20px #0000001a;
`;

const MDS5 = styled.p`
  ${ValignTextBottom}
  width: 126px;
  height: 14px;
  margin-top: 8px;
  margin-right: 10px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  min-height: 85px;
  border-radius: 20px;
  box-shadow: 0 0 20px #0000001a;
`;

const Text4 = styled.div`
  ${ValignTextBottom}
  width: 145px;
  height: 23px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const NEXT = styled.div`
  ${ValignTextBottom}
  position: absolute;
  width: 52px;
  height: 24px;
  top: 0;
  left: 149px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const QA1 = styled.div`
  position: absolute;
  top: 15px;
  left: 303px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const OverlapGroup12 = styled.div`
  height: 50px;
  display: flex;
  padding: 17px 13px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 95px;
  border-radius: 5px;
  box-shadow: 0 0 20px #0000001a;
`;

const OverlapGroup26 = styled.div`
  height: 50px;
  display: flex;
  padding: 16px 20px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 95px;
  border-radius: 5px;
  box-shadow: 0 0 20px #0000001a;
`;

const OverlapGroup20 = styled.div`
  height: 50px;
  display: flex;
  padding: 6px 14px;
  flex-direction: column;
  align-items: flex-end;
  min-height: 50px;
  border-radius: 5px;
  box-shadow: 0 0 20px #0000001a;
`;
