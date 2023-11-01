import React from 'react';
import App from './App';
import {RecoilRoot} from 'recoil';
import Modals from 'components/Modals/Modals';

const Setup = () => {
  return (
    <RecoilRoot>
      <Modals />
      <App />
    </RecoilRoot>
  );
};

export default Setup;
