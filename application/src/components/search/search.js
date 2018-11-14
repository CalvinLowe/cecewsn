import React, { Component } from 'react';

/**
 * Renders the Search page.
 */
export default class Search extends Component {
    render() {
        return (
            <main className="search">
                <h1>Search</h1>
                <input className="searchbox" type="text" />
                <input className="submit" type="submit" value="Submit" />
            </main>
        );
    }
}