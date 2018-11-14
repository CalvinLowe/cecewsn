import React, { Component } from 'react';

// CSS
import './button.css';

/**
 * Defines a simple button submit button. Takes a className, id and value.
 */
export default class Button extends Component {
    constructor(props){
		super(props);
		this.state={
            className: '',
            id: '',
            type: 'submit',
            value: '',
		}
    }
    
    render() {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                type={this.props.type}
                value={this.props.value}
				onClick={this.props.handler} />
        );
    }
}