import React, { Component } from 'react';

// Components
import Dropbox from './dropbox';

// CSS
import './upload.css';

/**
 * Renders the Upload page.
 */
export default class Upload extends Component {
    render() {
        return (
            <main className="upload">
                <h1>Upload</h1>
                <Dropbox />
            </main>
        );
    }
}