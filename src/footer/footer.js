import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
	return (
		<footer className="foot">
			<div className="container foot">
				<div className="row justify-content-center">
					<div>
						<h3>Nikita Galibin | Full Stack Web Developer</h3>
						<p>
							Send me an email:{" "}
							<a href="mailto:galibin24@mail.ru">galibin24@mail.ru</a>
						</p>
					</div>
				</div>
			</div>
			<a
				href="https://github.com/galibin24/Portfolio-Website"
				target="_blank"
				className="git visible"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faGithub} className="icon" />
				Check this site on GitHub.
			</a>
		</footer>
	);
};

export default Footer;
