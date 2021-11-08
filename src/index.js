import React from 'react';
import ReactDOM from 'react-dom';

import Chart from './components/Chart';

import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import './common/styles/index.scss';

class WebComponent extends HTMLElement {
	connectedCallback() {

		ReactDOM.render(
			<Chart  />,
			this
		);
	}
}

const ELEMENT_ID = 'react-headless-chart';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, WebComponent);
}

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
