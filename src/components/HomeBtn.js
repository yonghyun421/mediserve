import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeBtn = () => {
  return (
    <>
      <HomeFixed />
      <Home>
        <HomeMenu>
          <MenuTabBox>
            <LinkBtn to="/">
              <MenuTab>
                <span>HOME</span>
              </MenuTab>
            </LinkBtn>
            <LinkBtn to="/upload">
              <BtnBox>
                <MoreBtn src="images/Ellipse 16.png" />
                <PlusS src="images/Line 13.png" />
                <PlusG src="images/Line 14.png" />
              </BtnBox>
            </LinkBtn>
            <LinkBtn to="/qna">
              <MenuTab>
                <span>Q&A</span>
              </MenuTab>
            </LinkBtn>
          </MenuTabBox>
        </HomeMenu>
      </Home>
    </>
  );
};
export default HomeBtn;

const HomeFixed = styled.div`
  margin-bottom: 100px;
`;

const Home = styled.div`
  width: 100%;
  @media (min-width: 360p) and (max-width: 759px) {
    width: 100%;
  }
  height: 71px;
  position: fixed;
  bottom: 0;
  background-color: black;
  z-index: 9999999999999;
`;

const HomeMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4ae2eb;
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
`;

const MenuTabBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 300px;
`;

const MenuTab = styled.div`
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  margin-top: -12px;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
