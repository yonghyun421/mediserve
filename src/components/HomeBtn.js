import React from 'react';
import styled from 'styled-components';

const HomeBtn = () => {
  return (
    <Home>
      <HomeMenu>
        <MenuTabBox>
          <MenuTab>
            <span>HOME</span>
          </MenuTab>
          <BtnBox>
            <MoreBtn src="images/Ellipse 16.png" />
            <PlusS src="images/Line 13.png" />
            <PlusG src="images/Line 14.png" />
          </BtnBox>
          <MenuTab>
            <span>Q&A</span>
          </MenuTab>
        </MenuTabBox>
      </HomeMenu>
    </Home>
  );
};

export default HomeBtn;

const Home = styled.div`
  width: 414px;
  height: 71px;
  position: fixed;
  bottom: 0;
  margin-top: -6px;
  background-color: black;
`;

const HomeMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 51px;
  background-color: #4ae2eb;
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
`;

const MenuTabBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 300px;
  height: 22px;
`;

const MenuTab = styled.div`
  width: 75px;
  top: 15px;
  letter-spacing: 0;
`;

const MoreBtn = styled.img`
  width: 62px;
  height: 62px;
`;

const PlusS = styled.img`
  width: 6px;
  height: 35px;
  position: absolute;
`;

const PlusG = styled.img`
  width: 35px;
  height: 6px;
  position: absolute;
`;

const BtnBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  margin-top: -26px;
`;
