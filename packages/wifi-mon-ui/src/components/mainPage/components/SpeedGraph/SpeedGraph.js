import React from 'react';
import Graph from './components/Graph';

const SpeedGraph = () => {
  const data = {
    labels: ['time', 'time 2', 'time 3'],
    datasets: [
      {
        label: 'Speed',

        data: [86, 67, 1000],
      },
    ],
  };

  return (
    <>
      <Graph id="boi" type="line" data={data} />
    </>
  );
};

export default SpeedGraph;
