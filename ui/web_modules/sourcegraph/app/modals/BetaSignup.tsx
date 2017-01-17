import * as React from "react";

import { Router, RouterLocation } from "sourcegraph/app/router";
import { Heading } from "sourcegraph/components/index";
import { LocationStateModal, dismissModal } from "sourcegraph/components/Modal";
import * as styles from "sourcegraph/components/styles/modal.css";
import { BetaInterestForm } from "sourcegraph/home/BetaInterestForm";

interface Props {
	location: RouterLocation;
	router: Router;
}

export const BetaSignup = (props: Props): JSX.Element => {
	const sx = {
		maxWidth: "380px",
		marginLeft: "auto",
		marginRight: "auto",
	};

	return <LocationStateModal modalName="menuBeta" location={props.location} router={props.router}>
		<div className={styles.modal} style={sx}>
			<Heading level={4} align="center">Join our beta program</Heading>
			<BetaInterestForm
				loginReturnTo="/beta"
				onSubmit={dismissModal("menuBeta", props.location, props.router)} />
		</div>
	</LocationStateModal>;
};
