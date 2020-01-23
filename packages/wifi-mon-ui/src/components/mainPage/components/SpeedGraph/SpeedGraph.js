import React from 'react';
import Graph from './components/Graph';

const SpeedGraph = ({ data }) => (
  <>
    <Graph id="boi" type="line" data={data} />
  </>
);

export default SpeedGraph;
