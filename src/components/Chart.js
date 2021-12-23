import React, {useState, useEffect} from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import LiferayApi from '../common/services/liferay/api';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Chart = () => {
	const [chartConfigs, setChartConfigs] = useState({
		type: 'column2d',
		width: 600,
		height: 400,
		dataFormat: 'json',
		dataSource: {
			/* see data tab */
		},
	});

	const getChartData = (data) => {
		let chartData = [];
		for (let i in data) {
			let obj = {};
			obj.value = data[i].value;
			obj.label = data[i].label;
			chartData.push(obj);
		}
		return chartData;
	};

	useEffect(() => {
		const getUpdate = () => {
			LiferayApi('o/c/dashboarddataobjects/')
				.then((result) => {
					setChartConfigs((previousChartConfigs) => ({
						...previousChartConfigs,
						dataSource: {
							chart: {
								caption: 'Impactful Data from Specific Areas',
								subCaption: 'In OMDP = One Million Data Points',
								xAxisName: 'Area',
								yAxisName: 'Data Points (OMDP)',
								numberSuffix: 'M',
								theme: 'fusion',
								updateAnimDuration: '0.3',
							},
							data: getChartData(result.data.items),
						},
					}));
				})
				.catch(console.log);
		};

		const intervalId = setInterval(() => {
			getUpdate();
		}, 5000);

		getUpdate();

		return () => clearInterval(intervalId);
	}, []);

	return <ReactFC {...chartConfigs} />;
};

export default Chart;
