import React from 'react';
import {Link} from 'react-router-dom';

/**
 * The router for the application. Defines the page-level components to load when a URL loads.
 */
export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./dashboard">Dashboard</Link></li>
                    <li><Link to="./upload">Upload data</Link>
                        <ul>
                            <li><Link to="./methods">Methods</Link></li>
                        </ul>
                    </li>
                    
                    <li><Link to="./download">Download reports</Link></li>
                    <li><Link to="./forum">Forum</Link></li>
                    <li><Link to="./search">Search</Link></li>
                    <li>
                        More ...
                        <ul>
                            <li><Link to="./help">Help</Link></li>
                            <li><Link to="./profile">Profile</Link></li>
                            <li><Link to="./researchers">Researchers</Link></li>
                            <li><Link to="./documentation">Documentation</Link></li>
                            <li><Link to="./demonstration">Demonstration</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}