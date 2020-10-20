import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {
	return (
		<div id="aboutMe" className="about-body">
			<div className="container">
				{/* <div className="row justify-content-center header">ABOUT </div> */}
				{/* <div className="row justify-content-center"> */}
				<div>
					<div className="header">My Skills</div>
					<div className="row justify-content-center">
						<div className="col-sm-6">
							<div className="aboutHeader">Frontend</div>
							<div className="skillBody">
								<ul>
									<li>JavaScript</li>
									<li>React</li>
									<li>Angular</li>
									<li>Bootstrap</li>
									<li>CSS3 + SASS + LESS</li>
									<li>HTML</li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="aboutHeader">Backend</div>
							<div className="skillBody">
								<ul>
									<li>Python</li>
									<li>Django</li>
									<li>Django REST</li>
									<li>Node js</li>
									<li>Express</li>
									<li>MySQL, Postgres</li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="aboutHeader">DevOps</div>
							<div className="skillBody">
								<ul>
									<li>Docker</li>
									<li>Nginx</li>
									<li>AWS</li>
									<li>SSL</li>
									<li>GCP</li>
									<li>Netlify</li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="aboutHeader">Data Analyses</div>
							<div className="skillBody">
								<ul>
									<li>Pandas</li>
									<li>Scrapy</li>
									<li>Cv2</li>
									<li>Numpy</li>
									<li>scikit-learn</li>
									<li>Matplotlib</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="header">Who am I?</div>
				<div className="row">
					<p>
						I am a fresh graduate from University of Manchester where I did a
						bachelor degree in Finance. My journey with programming started in
						my first year of university with realization of how impactful
						computer science is in the field of finance and how ireplasible it
						will be as time goes on. Hence, I first started with python building
						various projects in relation to finance, few of which you can see
						above. After a year with python I started doing contractual work
						on&nbsp;
						<a href="https://www.upwork.com/freelancers/~01c10eba4aaf73c28b">
							Upwork
						</a>{" "}
						which went pretty well as I was striving for excellence in every job
						I undertook. As time went on I started exploring web development,
						learning Javascript and frontend frameworks. Right now, I am
						actively working on several webdev projects, learning new things
						everyday.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
