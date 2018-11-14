import React, { Component } from 'react';

// Components
import IconLink from '../iconlink/iconlink.js';
import IconButton from '../buttons/iconButton';

// CSS
import './navigation.css';


/**
 * VerticalNavigation is a component that displays the main navigation for the app.
 */
export default class VerticalNavigation extends Component {
	constructor(props) {
        super(props);
        this.state = {
            className: '',
			isToggled: false
		};
		this.toggleNav = this.toggleNav.bind(this)
    }

	/**
	 * Toggles the state of the component.
	 * @param {*} event when a button is clicked
	 */
	toggleNav(event) {
		event.preventDefault()
		this.setState({
			isToggled: !this.state.isToggled
		});
	}

	render() {
		return (
			<nav 
				className = {this.state.isToggled === true ? 'navigation-hidden' : 'navigation'} >
				<header className="navigation__header">
					<img className="navigation__header__profile-img" alt="avatar" src={require("./../../img/blank-profile.png")}/>
					<h2 className="navigation__header__heading">{this.props.userFirstName} {this.props.userLastName}</h2> 
					<h3 className="navigation__header__subheading">{this.props.userAffiliation}</h3>
					</header>
					{this.props.currentPage}
				<ul className="navigation__list">
					<IconButton
						dashLinkid="toggle"
						dashLinkClass="navigation__link navigation__button"
						dashLinkTextClass="navigation__link__text"
						dashLink=""
						icon="arrow-alt-circle-left"
						dashLinkDesc="Collapse menu"
						handler={this.toggleNav} // pass the function to the button
					/>
					<IconLink
						dashLinkid="dashboard"
						dashLinkClass="navigation__link"
						dashLink="./dashboard"
						icon="tachometer-alt"
						dashLinkDesc="Dashboard"
					/>
					<IconLink
						dashLinkid="upload"
						dashLinkClass="navigation__link"
						dashLink="./upload"
						icon="cloud-upload-alt"
						dashLinkDesc="Upload and process my data"
					/>
					<IconLink
						dashLinkid="download"
						dashLinkClass="navigation__link"
						dashLink="./download"
						icon="file-alt" 
						dashLinkDesc="View or download my saved reports"
					/>
					<IconLink
						dashLinkid="search"
						dashLinkClass="navigation__link"
						dashLink="./search"
						icon="search" 
						dashLinkDesc="Perform a global search for a compound"
					/>
					<IconLink
						dashLinkid="profile"
						dashLinkClass="navigation__link"
						dashLink="./profile"
						icon="user" 
						dashLinkDesc="My profile"
					/>
					<IconLink
						dashLinkid="methods"
						dashLinkClass="navigation__link"
						dashLink="./methods"
						icon="wrench" 
						dashLinkDesc="My hardware and acquisition methods"
					/>
					<IconLink
						dashLinkid="forum"
						dashLinkClass="navigation__link"
						dashLink="./forum"
						icon="comments" 
						dashLinkDesc="Forum and CEC alerts"
					/>
					<IconLink
						dashLinkid="documentation"
						dashLinkClass="navigation__link"
						dashLink="./documentation"
						icon="graduation-cap" 
						dashLinkDesc="Documentation and education"
					/>
					<IconLink
						dashLinkid="researchers"
						dashLinkClass="navigation__link"
						dashLink="./researchers"
						icon="users" 
						dashLinkDesc="Research profiles"
					/>
					<IconLink
						dashLinkid="help"
						dashLinkClass="navigation__link"
						dashLink="./help"
						icon="question-circle" 
						dashLinkDesc="Something went wrong. I need some help"
					/>
				</ul>
			</nav>
		);
	}
}