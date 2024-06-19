import React from 'react';
import { createRoot } from 'react-dom/client';

import Chart from './components/Chart';
import WebComponent from 'webcomponent';

import './common/styles/index.scss';

class LiferayChart extends WebComponent {
	connectedCallback() {
		let root = createRoot( document.getElementsByTagName("react-headless-chart")[0] );
		root.render(<Chart  />);
	}
}

const ELEMENT_ID = 'react-headless-chart';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, LiferayChart);
}

