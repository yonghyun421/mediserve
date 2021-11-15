import { MDS_CHARGE, MDS_RECHARGE, COUNSEL_CHARGE } from './types';

export const mdscharger = () => {
  return {
    type: MDS_CHARGE,
  };
};

export const mdsrecharger = () => {
  return {
    type: MDS_RECHARGE,
  };
};

export const counselcharger = () => {
  return {
    type: COUNSEL_CHARGE,
  };
};
