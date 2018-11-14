import React, { Component } from 'react';

// Components
import Button from './../buttons/button';

// CSS
import './login.css';

/**
 * Defines the LoginForm componenet.
 */
export default class LoginForm extends Component{
	render(){
		return(	
			<form className="login__form" action="" method="post">

                    {/* Email address */}    
					<label className="login__label login__form__label--email" htmlFor="email">Username: </label>
					<input
						className="login__input login__input--email"
						placeholder="Email address"
						id="email"
						name="email"
						type="email"
						onChange={this.props.handleLoginEmailChange}
						title="The domain portion of the email address is invalid (the portion after the @)."
						pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
						required />
					 
					{/* Password */}
            		<label className="login__label login__form__label--password" htmlFor="password">Password:</label>
            		<input
                        className="login__input login__input--password"
                        placeholder="Password"
                        id="password"
                        name="passwor"
                        type="password"
						onChange={this.props.handleLoginPasswordChange}
                        required />
					
					{/* Login */}
            		<Button
                        className="button button--small login__button"
                        id="login"
                        type="submit"
                        value="Log In"
                        handler={this.props.handleLoginSubmit} />
					<a className="login__link" href="#forgotAccount">Forgotten account?</a>
    		</form>
		);
	}
}