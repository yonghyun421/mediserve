import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageToggle from './MyPageToggle';

const Nav = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };

  return (
    <Wrapper>
      <NavTop />
      <NavBottom>
        <BottomLeft>
          <Rectangle93 src="/images/rectangle93.png" />
        </BottomLeft>
        <BottomRight>
          <Vector src="/images/vector.png" />
          <Vector1 src="/images/vector1.png" onClick={modalToggle} />
          {isModalOn ? (
            <MyPageToggle isModalOn={isModalOn} modalToggle={modalToggle} />
          ) : null}
        </BottomRight>
      </NavBottom>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  height: 87.52px;
  z-index: 99999;
`;

const NavTop = styled.div`
  height: 43.76px;
  background-color: #000000;
`;

const NavBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43.76px;
  padding: 10px;
  background-color: white;
`;

const BottomLeft = styled.div``;

const Rectangle93 = styled.img`
  width: 100%;
  height: 100%;
`;

const BottomRight = styled.div`
  position: relative;
`;

const Vector = styled.img`
  width: 23.69px;
  height: 26.93px;
  margin-right: 24.82px;
`;

const Vector1 = styled.img`
  width: 23.69px;
  height: 26.93px;
`;
