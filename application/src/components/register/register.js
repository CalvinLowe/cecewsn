import React, { Component } from 'react';

// Components
import Button from './../buttons/button';

// CSS
import './register.css';

/**
 * The register component. Renders the register form when the app is loggedout state.
 */
export default class Register extends Component {
	render() {
		return (
			<React.Fragment>
				<main className="main--register register">
				<img className="register__img" alt="CECEWSN - How it works" src={require("./../../img/background.jpg")} />
				<form className="register__form" action="" method="post">
					<header className="register__form__header">
						<h1>Create a new account</h1>
						<h2>It's free if you share data.</h2>
					</header>
                    {/* First name */}
					<label className=" register__form__label register__form__label--fname" htmlFor="firstName">First name:</label>
					<input
						className="register__form__input register__form__input--fname"
						placeholder="First name"
						id="firstName"
						name="firstName"
						type="text"
						onChange={this.props.handleRegisterFirstNameChange}
						required />

					{/* Last name */}
					<label className="register__form__label register__form__label--lname"  htmlFor="lastName">Surname:</label>
					<input
						className="register__form__input register__form__input--lname"
						placeholder="Surname"
						id="lastName"
						name="lastName"
						type="text"
						onChange={this.props.handleRegisterLastNameChange}
						required />           

					{/* Affiliation */}
					<label className="register__form__label register__form__label--affiliation" htmlFor="affiliation">Affiliation:</label>
					<input
						className="register__form__input register__form__input--affiliation"
						placeholder="Affiliation"
						id="affiliation"
						name="affiliation"
						type="text"
						onChange={this.props.handleRegisterAffiliationChange} 
						required /> 
					
					{/* Email address */}    
					<label className="register__form__label register__form__label--email" htmlFor="email">Email address:</label>
					<input
						className="register__form__input register__form__input--email"
						placeholder="Email address"
						id="email"
						name="email"
						type="email"
						onChange={this.props.handleRegisterEmailChange}
						title="The domain portion of the email address is invalid (the portion after the @)."
						pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
						required />           

					{/* Password */}
					<label className="register__form__label register__form__label--password" htmlFor="password">New password:</label>
					<input
						className="register__form__input register__form__input--password"
						placeholder="New password"
						id="password"
						name="password"
						type="password"
						onChange={this.props.handleRegisterPasswordChange}
						required />  

					{/* Sign up */} 
					<Button
                        className="button button--large signup__button"
                        id="register"
                        type="submit"
						value="Sign up"
                        handler={this.props.handleRegisterSubmit} />
				</form>
				</main>
			</React.Fragment>
		);
	}
}