import React from 'react';
import { Detector } from 'react-detect-offline';
import SpeedGraph from './components/SpeedGraph';

const MainPage = () => (
  <div>
    <h1>hi, what's up with the wifi</h1>
    <Detector
      render={({ online }) => (online ? "it's online" : 'back to normal')}
    />
    <SpeedGraph />
  </div>
);

export default MainPage;
