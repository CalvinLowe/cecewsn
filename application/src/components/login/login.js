import React, { Component } from 'react';

// Components
import LoginForm from './loginForm';

// CSS
import './login.css';

/**
 * Defines the Login component. Renders the login form in the header and upon successfull registration.
 */
export default class Login extends Component {
	render() {
		return (
			<React.Fragment>
                <main className="main--login login">
                    <header className="login__header">
						<p>Registration success! Login using your newly created account.</p>
					</header>
					<LoginForm
						handleLoginEmailChange = {this.props.handleLoginEmailChange}
						handleLoginPasswordChange = {this.props.handleLoginPasswordChange}
						
						handleLoginSubmit = {this.props.handleLoginSubmit}
					/>
				</main>
			</React.Fragment>
		);
	}
}
