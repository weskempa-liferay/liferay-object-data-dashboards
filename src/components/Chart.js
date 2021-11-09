import React, { Component } from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import LiferayApi from '../common/services/liferay/api';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {/* see data tab */ }
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = chartConfigs;
  }

  componentDidMount() {
    setInterval(() => {
      this.getUpdate()
    }, 5000);

    this.getUpdate();
  }

  getChartData(data){
    let chartData = [];
    for (let i in data){
        let obj = {};
        obj.value = data[i].value;
        obj.label = data[i].label;
        chartData.push(obj);
    }
    return chartData;
  }

  getUpdate(){
    LiferayApi("o/c/dashboarddataobjects/")
      .then((result) => {
        //console.log(result.data.items);

        this.setState({
          
          dataSource: {
            "chart": {
              "caption": "Impactful Data from Specific Areas",
              "subCaption": "In OMDP = One Million Data Points",
              "xAxisName": "Area",
              "yAxisName": "Data Points (OMDP)",
              "numberSuffix": "M",
              "theme": "fusion",
              "updateAnimDuration": "0.3"
            },
            "data": this.getChartData(result.data.items)
          }

        });

      })
      .catch(console.log)
  }

  render() {
    return (
      <ReactFC {...this.state} />
    );
  }

}

export default Chart;