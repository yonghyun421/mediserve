import React, { useState } from 'react';
import styled from 'styled-components';

const Content = () => {
  const [limit, setLimit] = useState(40);

  const toggleText = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  const clickSeeMore = str => () => {
    setLimit(str.length);
  };

  return (
    <ContentWrapper>
      <ContentTitle>
        {
          toggleText(
            '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고있다. ㄹㅇㄴㄹㅇㄴㄹㄴㅇ노러ㅏㄴ아ㅓ론아ㅓㅗㄹㄴ아ㅓ론아ㅓ',
            limit
          ).string
        }
        {toggleText(
          '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고있다. ㄹㅇㄴㄹㅇㄴㄹㄴㅇ노러ㅏㄴ아ㅓ론아ㅓㅗㄹㄴ아ㅓ론아ㅓ',
          limit
        ).isShowMore && (
          <SeeMore
            onClick={clickSeeMore(
              '코로나 비상사태, 2단계 격상되어 비대면 진료상담이 늘고있다. ㄹㅇㄴㄹㅇㄴㄹㄴㅇ노러ㅏㄴ아ㅓ론아ㅓㅗㄹㄴ아ㅓ론아ㅓ'
            )}
          >
            ... 더보기
          </SeeMore>
        )}
      </ContentTitle>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  padding: 0px 13px;
`;

const ContentTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  text-indent: 1px;
  color: #000000;
  text-overflow: ellipsis;
`;

const SeeMore = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  text-align: right;

  color: #646363;
`;
