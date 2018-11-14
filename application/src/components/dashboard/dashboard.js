import React, { Component } from 'react';

// Components
import DashboardWidget from './dashboardWidget';

// CSS
import './dashboard.css';

/**
 * Defines the Dashboard component. Shows the page rendered when the dashboard route is entered.
 */
export default class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className="heading">Dashboard</h1>
				<DashboardWidget />
				<DashboardWidget />
				<DashboardWidget />
			</React.Fragment>
    );
  }
}