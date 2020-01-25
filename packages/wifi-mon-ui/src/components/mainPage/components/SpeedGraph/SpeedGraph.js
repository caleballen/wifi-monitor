import React from 'react';
import Graph from './components/Graph';

const options = {
  scales: {
    xAxes: [{
        type: 'time',
        distribution: 'series'
    }],
      yAxes: [{
          ticks: {
              userCallback: (item) => `${item} MBps`
          }
      }]
},
tooltips: {
  enabled: true,
  mode: 'nearest',
  callbacks: {
    title: (tooltipItems) => tooltipItems[0].xLabel,
    label: (tooltipItems) => `${tooltipItems.yLabel} MBps`
  }
},

}

const SpeedGraph = ({ data }) => (
  <>
    <Graph id="boi" type="scatter" data={data} options={options} />
  </>
);

export default SpeedGraph;
