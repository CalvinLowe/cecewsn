import React, { Component } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowAltCircleLeft)


/**
 * Defines a button with an icon inside.
 */
export default class IconButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dashLinkid: "",
            dashLinkClass: "",
            dashLinkTextClass: "",
			icon: "",
			dashLinkDesc: "",
		};
	}
	
    render() {
        return (
			<button
				id={this.props.dashLinkid}
				className={this.props.dashLinkClass}
				onClick={this.props.handler}
            >
                <FontAwesomeIcon size="1x" icon={this.props.icon} />
                <span className={this.props.dashLinkTextClass}>{this.props.dashLinkDesc}</span>
            </button>
        )
    }
}