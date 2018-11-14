import React from 'react'

// Components
import Header from './components/header/header';
import VerticalNavigation from './components/navigation/verticalNavigation';
import Register from './components/register/register';
import Login from './components/login/login';
import Main from './components/main/main';
import Footer from './components/footer/footer';

// CSS
import './css/layout.css';
import './css/base.css';
import './css/variables.css';

/**
 * Defines the component App.
 * The App component includes the Header, Footer, Register, Login, VerticalNavigation and Main
 * components. The VerticalNavigation, Main, Register, Login are conditionally rendered based on 
 * the App state. If the app state is logged in, VerticalNavigation and Main should be rendered.
 * If the app state is logged out, Register should be rendered. If the state is logged out and 
 * registered, the Login should be rendered. The components are rendereded inside a <React.Fragment>
 * component - components require an enclosing parent element.
 * @author: Yggdrasil
 */
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            userID: null,
            userFirstName: null,
            userLastName: null,
            userAffiliation: null,
			userEmail: null,
			userPassword: null,
			isLoggedIn: false,
			isRegistered: false,
		};

		// Register form
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleRegisterFirstNameChange = this.handleRegisterFirstNameChange.bind(this);
        this.handleRegisterLastNameChange = this.handleRegisterLastNameChange.bind(this);
        this.handleRegisterAffiliationChange = this.handleRegisterAffiliationChange.bind(this);
		this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
		this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);

		// Login form
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
		this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);

		// Logout function
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLoginSubmit(event) {
		this.setState({isLoggedIn: 'loading'});		
		event.preventDefault();
	}

    handleRegisterSubmit(event) {
		this.setState({isRegistered: 'loading'});		
		event.preventDefault();
	}
    
    handleRegisterFirstNameChange(event) {
		this.setState({
			userFirstName: event.target.value
		});
	}

	handleRegisterLastNameChange(event) {
		this.setState({
			userLastName: event.target.value
		});
	}

	handleRegisterAffiliationChange(event) {
		this.setState({
			userAffiliation: event.target.value,
		});
	}

	handleRegisterEmailChange(event) {
		this.setState({
			userEmail: event.target.value,
		});
	}

	handleRegisterPasswordChange(event) {
		this.setState({
			userPassword: event.target.value,
		});
	}

	handleLoginEmailChange(event) {
		this.setState({
			userEmail: event.target.value,
		});
	}

	handleLoginPasswordChange(event) {
		this.setState({
			userPassword: event.target.value,
		});
	}

	handleLogout(event) {
		this.getVerification(`backend/logout.php`)
			.then(responses => { // success arrow function
								console.log(JSON.stringify(responses));
								if (responses.response === 'failure') { // set isLoggedIn to false
									this.setState({isLoggedIn: true});
								} else if (responses.response === 'success') { // set isLoggedIn to true
									this.setState({isLoggedIn: false});
									window.location.hash = '#';
								}
							})
			.catch(error => console.error(error));
	}

	// TODO: Comments
	render() {
		const isLoggedIn = this.state.isLoggedIn;
		const isRegistered = this.state.isRegistered;
		let component;

		if (isLoggedIn === true) {
			component = <React.Fragment>
							<VerticalNavigation 
								currentPage={this.state.currentPage}
								userFirstName={this.state.userFirstName}
								userLastName={this.state.userLastName}
								userAffiliation={this.state.userAffiliation}
								/>
							<Main />
						</React.Fragment>;
		} else if (isRegistered === true) {
			component = <Login
							// Pass form input handlers as props to child component
							handleLoginEmailChange={this.handleLoginEmailChange}
							handleLoginPasswordChange={this.handleLoginPasswordChange}
							
							// Pass submit handler as props to child component
							handleLoginSubmit={this.handleLoginSubmit} />;

		} else {
            component = <Register
                            // Pass form input handlers as props to child component
                            handleRegisterFirstNameChange={this.handleRegisterFirstNameChange}
                            handleRegisterLastNameChange={this.handleRegisterLastNameChange}
                            handleRegisterAffiliationChange={this.handleRegisterAffiliationChange}
							handleRegisterEmailChange={this.handleRegisterEmailChange}
							handleRegisterPasswordChange={this.handleRegisterPasswordChange}

							// Pass submit handler as props to child component
							handleRegisterSubmit={this.handleRegisterSubmit} />;
		}
		
		return (
			<React.Fragment>
				<Header
					// Pass form input handlers as props to child component
					handleLoginEmailChange={this.handleLoginEmailChange}
					handleLoginPasswordChange={this.handleLoginPasswordChange}
					
					handleLoginSubmit={this.handleLoginSubmit} // Pass the function to the child element. This should put display: none on the child element
					handleLogout={this.handleLogout}
					isLoggedIn={this.state.isLoggedIn} // Pass state to header
				/>
				{component}
				<Footer />
			</React.Fragment>
		);
	}
	
	componentDidMount() {
		if (this.state.isLoggedIn === false) {
			window.location.hash = '#/';
		}
	}
	
	// TODO: Comments
    componentDidUpdate() {
		//console.log("Is logged in: " + this.state.isLoggedIn);
		//console.log("Is registered: " + this.state.isRegistered);
  		if (this.state.isLoggedIn === 'loading') {
			// Call the POST request
			console.log("State should be 'loading', isLogged state changed to: " + this.state.isLoggedIn);

			// Create a new POST request object
            this.postRequest(`backend/login/login.php`, {"email": this.state.userEmail, "password": this.state.userPassword})
            .then(response => { // success arrow function
								console.log(JSON.stringify(response));
								if (response.response === 'failure') { // set isLoggedIn to false
									this.setState({isLoggedIn: false});
								} else if (response.response === 'success') { // set isLoggedIn to verifying
									this.setState({isLoggedIn: 'verifying'});
								}
							})
			.catch(error => console.error(error));
		} else if (this.state.isLoggedIn === 'verifying') {
			// Create a new GET request object
			this.getVerification(`backend/login/success.php`)
			.then(response => { // success arrow function
								console.log(JSON.stringify(response));
								if (response.response === 'failure') { // set isLoggedIn to false
									this.setState({isLoggedIn: false});
								} else if (response.response === 'success') { // set isLoggedIn to true
									this.setState({
										isLoggedIn: true,
										isRegistered: false,
										userID: response.user.id,
										userFirstName: response.user.firstName,
										userLastName: response.user.lastName,
										userAffiliation: response.user.affiliation,
										userEmail: response.user.email,
									});
									window.location.hash = '#/dashboard';
								}
							})
			.catch(error => console.error(error));
		} else if (this.state.isRegistered === 'loading') {
			console.log("State should be 'loading', isRegistered state changed to: " + this.state.isRegistered);

			// Create a new POST request object
			this.postRequest(`backend/register/register.php`, {"firstName": this.state.userFirstName, "lastName": this.state.userLastName, "affiliation": this.state.userAffiliation, "email": this.state.userEmail, "password": this.state.userPassword})
			.then(response => { // success arrow function
								console.log(JSON.stringify(response));
								if (response.response === 'failure') { // set isRegistered to false
									this.setState({isRegistered: false});
								} else if (response.response === 'success') { // set isRegistered to verifying
									this.setState({isRegistered: 'verifying'});
								}
							})
			.catch(error => console.error(error));

		} else if (this.state.isRegistered === 'verifying') {
			console.log("State should be 'verifying', isRegistered state changed to: " + this.state.isRegistered);

			// Create a new GET request object
			this.getVerification(`backend/register/success.php`)
			.then(response => { // success arrow function
								console.log(JSON.stringify(response));
								if (response.response === 'failure') { // set isRegistered to false
									this.setState({isRegistered: false});
								} else if (response.response === 'success') { // set isRegistered to true
									this.setState({isRegistered: true});
								}
							})		
			.catch(error => console.error(error));
		} else if (this.state.isLoggedIn === false) {
			window.location.hash = '#/';
		}
    }
	
	// TODO: Comments
    postRequest(url = ``, data = {}) {
        // Default options are marked with *
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
				"Content-Type": "application/json; charset=utf-8",
                //"Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()); // parses response to JSON
    }

	// TODO: Comment
    getVerification(url = ``) {
        return fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                //"Content-Type": "application/json; charset=utf-8",
                "Content-Type": "application/x-www-form-urlencoded", // this works, I'm not sure which one is better to use in this case.
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
        .then(response => response.json()); // parses response to JSON
	}
}