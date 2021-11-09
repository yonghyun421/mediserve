import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

const ThreedotContent = ({ modalToggle, props, feed }) => {
  const shareFeed = () => {
    console.log('skskskssksk');
    // Kakao.Link.sendDefault({
    //   objectType: 'feed',
    //   content: {
    //     title: `${feed.posting_content}`,
    //     description: `${feed.posting_writer}님의 feed입니다.`,
    //     imageUrl:
    //       'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    //     link: {
    //       mobileWebUrl: 'http://localhost:3000/',
    //       webUrl: 'http://localhost:3000/',
    //     },
    //   },
    //   social: {
    //     likeCount: 286,
    //     commentCount: 45,
    //     sharedCount: 845,
    //   },
    //   buttons: [
    //     {
    //       title: '웹으로 보기',
    //       link: {
    //         mobileWebUrl: 'http://localhost:3000/',
    //         webUrl: 'http://localhost:3000/',
    //       },
    //     },
    //     {
    //       title: '앱으로 보기',
    //       link: {
    //         mobileWebUrl: 'http://localhost:3000/',
    //         webUrl: 'http://localhost:3000/',
    //       },
    //     },
    //   ],
    // });
  };

  return (
    <ThreedotWrapper>
      {THREEDOTCONTENT.map((content, idx) => {
        return (
          <>
            <Threedotcontents onClick={shareFeed} key={content.id}>
              {content.title}
            </Threedotcontents>
            {idx !== THREEDOTCONTENT.length ? <BottomSolid /> : null}
          </>
        );
      })}
    </ThreedotWrapper>
  );
};

export default withRouter(ThreedotContent);
const ThreedotWrapper = styled.ul`
  position: absolute;
  right: 0;
  border: 1px solid rgba(0, 104, 178, 0.5);
  align-items: center;
  z-index: 99999999999;
  background-color: white;
  padding: 0px 9px;
  height: 212px;
`;

const Threedotcontents = styled.li`
  display: flex;
  width: 195px;
  height: 51.5px;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  align-items: center;
  justify-content: center;
  z-index: 99999999999;
  background-color: white;
  &:hover {
    color: #ff0000;
  }
`;
const BottomSolid = styled.div`
  border-bottom: 1px solid #e5e5e5;
  height: 1px;
`;

const THREEDOTCONTENT = [
  { id: 1, title: '신고', func: '/' },
  { id: 2, title: '링크복사', func: '/' },
  { id: 3, title: '팔로우 취소', func: '/' },
  { id: 4, title: '공유하기', func: 'shareFeed' },
];
