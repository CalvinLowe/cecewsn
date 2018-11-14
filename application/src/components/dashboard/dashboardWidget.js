import React, { Component } from 'react';

// Components


// CSS
import './dashboard.css';

/**
 * Defines the DashboardWidget.
 */
export default class DashboardWidget extends Component {
	render() {
		return (
			<section className="dashboard__section">
                <h2>Dashboard widget</h2>
                <p>Dashboard widget content.</p>
            </section>
    );
  }
}