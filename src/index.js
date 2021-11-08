import React from 'react';
import ReactDOM from 'react-dom';

import Chart from './components/Chart';

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
