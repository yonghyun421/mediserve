import React, { useState } from 'react';
import styled from 'styled-components';

const Text = () => {
  const [limit, setLimit] = useState(40);
  const [seeMoreToggle, setSeeMoreToggle] = useState(true);

  const toggleText = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str,
    };
  };

  const clickSeeMore = e => {
    setSeeMoreToggle(!seeMoreToggle);
  };

  return (
    <ContentWrapper>
      {seeMoreToggle ? (
        <>
          <ContentTitle>
            {
              toggleText(
                '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고 있다. ㅇ라ㅣㅓㄴㅇ라ㅣㅓ아렁나러ㅣㄴ얼아ㅣㄴ러이나ㅓ리ㅏㄴ어라ㅣㅇ너란이러ㅏㅣㄴ어ㅏㅣ넝리나어란ㅇ러아ㅓ라',
                limit
              ).string
            }
          </ContentTitle>
          <SeeMore onClick={clickSeeMore}>...더보기</SeeMore>
        </>
      ) : (
        <>
          <ContentTitle>
            {
              toggleText(
                '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고 있다. ㅇ라ㅣㅓㄴㅇ라ㅣㅓ아렁나러ㅣㄴ얼아ㅣㄴ러이나ㅓ리ㅏㄴ어라ㅣㅇ너란이러ㅏㅣㄴ어ㅏㅣ넝리나어란ㅇ러아ㅓ라',
                limit
              ).isShowMore
            }
          </ContentTitle>
          <SeeMore onClick={clickSeeMore}>접기</SeeMore>
        </>
      )}
    </ContentWrapper>
  );
};

export default Text;

const ContentWrapper = styled.div`
  position: relative;
  min-height: 50px;
  margin-top: 10px;
  padding: 0px 13px;
  z-index: 3;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  font-size: 17px;
  line-height: 20px;
  text-indent: 1px;
  color: #000000;
  text-overflow: ellipsis;
`;

const SeeMore = styled.button`
  position: absolute;
  height: 10px;
  width: 62px;
  border: 0;
  right: 20px;
  bottom: 0;
  z-index: 10000000;
  color: #646363;
  background-color: white;
  font-family: 'Roboto';
  font-size: 14px;
`;
