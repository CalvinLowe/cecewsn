import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Renders the React application inside the DOM elemnt with id 'CECEWSN'
 * Renders the React application inside of a hash router.
 * A hash router allows reloads of the page to stay at the same URL.
 */
ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.getElementById('CECEWSN'));
registerServiceWorker();