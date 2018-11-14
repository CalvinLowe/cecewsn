import React, { Component } from 'react';

// CSS
import './footer.css';

/**
 * Defines the Footer component. It is rendered on every page.
 */
export default class Footer extends Component{
	render(){
		return( 
				<footer className="footer">
                    <small>Chemicals of Emerging Concern Early Warning Social Network</small>
					<small>Licence</small>
		        </footer>
  			);
		
	}
}