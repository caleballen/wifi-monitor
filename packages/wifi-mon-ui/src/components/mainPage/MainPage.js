import React, { useState, useEffect } from 'react';
import { Detector } from 'react-detect-offline';
import SpeedGraph from './components/SpeedGraph';


const MainPage = ({ data }) => {
  let graphData = null;

  if (data) {
    graphData = {
      // labels: data.map((value) => value.Timestamp),
      datasets: [
        {
          label: 'Upload',
          showLine: true,
          data: data.map((value) => ({y: Math.round(value.Upload / 10000)/100, x: Date.parse(value.Timestamp)})),
          backgroundColor: "#bfe78d"
        },
        {
          label: 'Download',
          showLine: true,
          data: data.map((value) => ({y: Math.round(value.Download / 10000)/100, x: Date.parse(value.Timestamp)})),
          backgroundColor: "#B58DE7"
        },
      ],
    };
  }

  return (
    <div className="App">
      <h1>hey, what's up with the wifi?</h1>
      <Detector
        render={({ online }) => (online ? "it's online" : "it's broke")}
      />
      {graphData ? <SpeedGraph data={graphData}/> : null}
      <br />
      <a href="http://localhost:4000/download">Save .csv file</a>
    </div>
  );
};

export default MainPage;
