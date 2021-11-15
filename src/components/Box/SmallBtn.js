import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { mdscharger, mdsrecharger, counselcharger } from '../../redux';

const SmallBtn = ({ Title, mds, mdscharger, counselcharger }) => {
  return Title === '의뢰하기' ? (
    <Button onClick={() => mdscharger()}>{Title}</Button>
  ) : (
    <Button onClick={() => counselcharger()}>{Title}</Button>
  );
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 37px;
  background: linear-gradient(90.1deg, #7ae0cc -2.23%, #47b1d1 99.89%);
  border-radius: 20px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: white;
`;

const mapStateToProps = ({ mdspoint }) => {
  return {
    mds: mdspoint.mds,
  };
};

const mapDispatchToProps = {
  mdscharger,
  mdsrecharger,
  counselcharger,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallBtn);
