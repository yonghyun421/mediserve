import React from 'react';
import styled from 'styled-components';
import MainColorBtn from '../../components/MainColorBtn';

const Reply = () => {
  return (
    <TotalWrapper>
      <PaymentWrapper>
        <Prescription>
          처방전이 보라매 병원 문전 약국
          <br />
          <PharmacyName>
            새보라매약국에 <br />
          </PharmacyName>
          접수 되었습니다.
        </Prescription>

        <PriceWrapper>
          결제금액:
          <Price>27,470 원</Price>
        </PriceWrapper>
        <PaymenetConfirm>결제 하시겠습니까?</PaymenetConfirm>
        <BtnWrapper>
          <MainColorBtn Body="취소" />
          <MainColorBtn Body="확인" />
        </BtnWrapper>
      </PaymentWrapper>
    </TotalWrapper>
  );
};

export default Reply;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0%;
`;

const PaymentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Prescription = styled.div`
  text-align: center;
  margin-bottom: 14px;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 150%;
  color: #000000;
`;

const PharmacyName = styled.span`
  background-color: rgba(92, 221, 229, 0.2);
`;

const PriceWrapper = styled.div`
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 23px;
  color: #000000;
`;

const Price = styled.span`
  align-items: center;
  line-height: 700%;
  background-color: rgba(92, 221, 229, 0.2);
`;

const PaymenetConfirm = styled.div`
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 300%;
  color: #014d52;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
