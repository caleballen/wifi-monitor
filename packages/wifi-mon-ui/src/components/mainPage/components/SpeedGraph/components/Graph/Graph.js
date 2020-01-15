import Chart from 'chart.js';
import React, { Component } from 'react';

export default class Graph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: this.props.type,
            data: this.props.data,
            options: this.props.options
        });
    }
    render() {
        return (
                <canvas
                    id={this.props.id}
                    ref={this.chartRef}
                />
        )
    }
}