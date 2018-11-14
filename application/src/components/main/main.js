import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

// Components
import Dashboard from '../dashboard/dashboard';
import Demonstration from '../demonstration/demonstration'
import Upload from '../upload/upload';
import Methods from '../methods/methods';
import Download from '../download/download';
import Profile from '../profile/profile';
import Researchers from '../researchers/researchers';
import Forum from '../forum/forum';
import Documentation from '../documentation/documentation';
import Help from '../help/help';
import Search from '../search/search';


/**
 * Defines the React component Main.
 * Main is the component which other content is rendered into. Other components are rendered using
 * the <Route> component.
 */
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathName: 'test',
        };
    }
    
	render() {
		return (
            <main className="main">
                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/demonstration" component={Demonstration}/>
                    <Route path="/upload" component={Upload}/>
                    <Route path="/methods" component={Methods}/>
                    <Route path="/download" component={Download}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/researchers" component={Researchers}/>
                    <Route path="/forum" component={Forum}/>
                    <Route path="/documentation" component={Documentation}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/search" component={Search}/>
                    <Route exact path='/' component={Dashboard} />
                    <Redirect from='*' to='/' />
                </Switch>
            </main>
    );
  }
}