import React, { useState, useEffect } from 'react';
import { Detector } from 'react-detect-offline';
import SpeedGraph from './components/SpeedGraph';


const MainPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000').then(async (res) => setData(await res.json()));
  }, []);

  let graphData = null;

  if (data) {
    graphData = {
      labels: data.map((value) => value.Timestamp),
      datasets: [
        {
          label: 'Upload',
          data: data.map((value) => Math.round(value.Upload / 1000)),
          backgroundColor: "#bfe78d"
        },
        {
          label: 'Download',
          data: data.map((value) => Math.round(value.Download / 1000)),
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
    </div>
  );
};

export default MainPage;
