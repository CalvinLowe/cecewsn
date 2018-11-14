import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faCloudUploadAlt, faFileAlt, faSearch, faUser, faWrench, faGraduationCap, faUsers, faQuestionCircle, faComments, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faTachometerAlt, faCloudUploadAlt, faFileAlt, faSearch, faUser, faWrench, faGraduationCap, faUsers, faQuestionCircle, faComments, faArrowAltCircleLeft)

/**
 * Defines an icon link component. Display a link with an icon inside it. It is used in the vertical
 * navigation component.
 */
export default class IconLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dashLinkid: "",
			dashLinkClass: "",
			dashLink: "",
			icon: "",
			dashLinkDesc: "",
		};
	}

    render() {
        return (
			<Link
				id={this.props.dashLinkid}
				className={this.props.dashLinkClass}
				to={this.props.dashLink}>
                <FontAwesomeIcon size="1x" icon={this.props.icon} />
                <span className={`${this.props.dashLinkClass}__text`}>{this.props.dashLinkDesc}</span>
            </Link>
        )
    }
}