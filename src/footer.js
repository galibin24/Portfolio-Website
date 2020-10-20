import React from "react";
import "./footer.scss";
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
		</footer>
	);
};

export default Footer;
