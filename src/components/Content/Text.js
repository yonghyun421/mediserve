import React, { useState } from 'react';
import styled from 'styled-components';

const Text = ({ content }) => {
  const [limit, setLimit] = useState(55);
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
          <ContentTitle>{toggleText(`${content}`, limit).string}</ContentTitle>
          <SeeMore onClick={clickSeeMore}>...더보기</SeeMore>
        </>
      ) : (
        <>
          <ContentTitle>
            {toggleText(`${content}`, limit).isShowMore}
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
  width: 65px;
  border: 0;
  right: 15px;
  bottom: -15;
  z-index: 10000000;
  color: #646363;
  background-color: white;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: right;
`;
