import React from "react";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AboutMe from "./aboutMe";
const Home = () => {
	return (
		<div className="home-body ">
			<div className="body-cell ">
				<div className="container ">
					<div className="row justify-content-center align-items-center">
						<div className="body-inner">
							Hello, my name is <strong>Nikita Galibin</strong> and I am a
							<strong> full-stack web developer</strong>.
						</div>
					</div>
				</div>
			</div>
			<a className="go_down" href="#myPortfolio">
				<FontAwesomeIcon icon={faAngleDoubleDown} />
			</a>
		</div>
	);
};

export default Home;
