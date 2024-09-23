import ReactECharts from 'echarts-for-react';
import { useEffect, useRef, useState } from 'react';

export default function RealtimeChart({ data , axis, colour }) {

  const chartRef = useRef(null);

  const [zoomState, setZoomState] = useState({ start: 0, end: 100 });

  const transformData = (data) => {
    return data.map(item =>
      [item.time, item.value],
    )
  };

  const seriesData = [{
    name: axis,
    type: 'line',
    data: transformData(data),
    symbol: 'circle',
    symbolSize: 3,
    color: colour,
    emphasis: {
      itemStyle: {
        color: '#FF0000',
        symbolSize: 50,
      },
    },
}]
 

  const options = {
    title: {
      text: `${axis} chart`,
      top: 'center',
      left: '0%'
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '20%',
      right: '10%',
      bottom: '10%',
      top: '30%'
    },
    xAxis: {
      type: 'time',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      ...seriesData,
    ],
    dataZoom:
    {
      type: 'inside',
      start: zoomState.start,
      end: zoomState.end,
    }
  };

  console.log('chart_data', transformData(data))

  return (
    <div>
      <ReactECharts option={options} ref={chartRef} />
    </div>
  )
}
