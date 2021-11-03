import styled from 'styled-components';

const ThreedotContent = ({ modalToggle, props }) => {
  return (
    <ThreedotWrapper>
      {THREEDOTCONTENT.map((content, idx) => {
        return (
          <>
            <Threedotcontents key={content.id}>
              {content.title}
            </Threedotcontents>
            {idx !== THREEDOTCONTENT.length ? <BottomSolid /> : null}
          </>
        );
      })}
    </ThreedotWrapper>
  );
};

export default ThreedotContent;
const ThreedotWrapper = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid rgba(0, 104, 178, 0.5);
  z-index: 999;
  align-items: center;
  background-color: white;
  padding: 0px 9px;
`;

const Threedotcontents = styled.div`
  display: flex;
  width: 195px;
  height: 51.5px;
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ff0000;
  }
`;
const BottomSolid = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

const THREEDOTCONTENT = [
  { id: 1, title: '신고' },
  { id: 2, title: '링크복사' },
  { id: 3, title: '팔로우 취소' },
  { id: 4, title: '공유하기' },
];
