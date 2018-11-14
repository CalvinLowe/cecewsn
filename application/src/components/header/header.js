import React, { Component } from 'react';

// Components
import LoginForm from './../login/loginForm';
import Button from './../buttons/button';

// CSS
import './header.css';

/**
 * Defines the Header component. Header is rendered on every page.
 */
export default class Header extends Component {

  	render() {
		const isLoggedIn = this.props.isLoggedIn;
		let headerContent;

		 if (isLoggedIn === true) {
			headerContent = <Button
								className="button button--small logout__button"
								id="logout"
								type="submit"
								value="Log Out"
								handler={this.props.handleLogout} />
		} 	else {
			headerContent = <LoginForm 
								handleLoginEmailChange = {this.props.handleLoginEmailChange}
								handleLoginPasswordChange = {this.props.handleLoginPasswordChange}
								handleLoginSubmit = {this.props.handleLoginSubmit} />
		}

  		return (
			<header className="header">
				<h1 className="header__heading">CECEWSN</h1>
				<h2 className="header__subheading">Chemicals of Emerging Concern Early Warning Social Network</h2>
				{headerContent}
			</header>
  		);
	}
}