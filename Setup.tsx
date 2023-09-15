import React from 'react';
import App from './App';
import {RecoilRoot} from 'recoil';

const Setup = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

export default Setup;
