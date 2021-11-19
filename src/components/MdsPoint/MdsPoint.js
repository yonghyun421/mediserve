import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { mdscharger, mdsrecharger } from '../../redux';

const MdsPoint = ({ mds, mdscharger, mdsrecharger }) => {
  return (
    <Items>
      <h2>MDS 포인트 10개를 지불합니다.</h2>
      <h2>잔여 MDS 포인트 : {mds}</h2>
      <button onClick={() => mdscharger()}>의뢰하기</button>
      <button onClick={() => mdsrecharger()}>충전하기</button>
    </Items>
  );
};

const Items = styled.div`
  border-bottom: 1px solid #333;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;

const mapStateToProps = ({ mdspoint }) => {
  return {
    mds: mdspoint.mds,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber : () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {
  mdscharger,
  mdsrecharger,
};

export default connect(mapStateToProps, mapDispatchToProps)(MdsPoint);
