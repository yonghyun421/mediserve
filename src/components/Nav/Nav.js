import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageToggle from './MyPageToggle';

const Nav = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };

  const cancelModal = () => {
    setIsModalOn(false);
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

const Wrapper = styled.div`
  width: 414px;
  height: 83.76px;
`;
const NavTop = styled.div`
  width: 414px;
  height: 43.76px;
  background-color: #000000;
`;
const NavBottom = styled.div`
  width: 414px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const BottomLeft = styled.div``;
const Rectangle93 = styled.img`
  width: 169.21px;
  height: 44.88px;
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
