import styled from 'styled-components';
import LoadingBar from './LoadingBar';

const Loading = () => {
  return (
    <Total>
      <Wrapper>
        <Title>접수중</Title>
        <LoadingBar />
        <Content>약사가 처방전을 확인 중에 있습니다.</Content>
      </Wrapper>
    </Total>
  );
};

export default Loading;

const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 595px;
  padding: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const Title = styled.div`
  font-family: 'NanumGothic';
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  color: #3db8c0;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: #333333;
`;
