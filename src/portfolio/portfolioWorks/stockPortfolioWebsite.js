import React from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.scss";
import github_logo from "../../images/GitHub-Logo.png";

const StockPortfolioWebsite = (props) => {
	return (
		<Modal show={props.show} onHide={props.hide} size="lg">
			<Modal.Header className="row justify-content-center">
				<h3>Stock Portfolio Website Description</h3>
			</Modal.Header>
			<Modal.Body dialogClassName="container ">
				<div>
					<div className="row justify-content-center">
						<span>
							You can view the website by following to: &nbsp;
							<a
								href="https://nikitagalibinstocks.tk/"
								target="_blank"
								rel="noopener noreferrer"
							>
								nikitagalibinstocks.tk
							</a>
						</span>

						<span>
							Or you can have a look at source code at: &nbsp;
							<a
								href="https://github.com/galibin24/Stock-Portfolio"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="githubLogo"
									src={github_logo}
									alt="github"
								></img>
							</a>
						</span>
					</div>

					<div className="row justify-content-center">
						<h6>General Description</h6>
					</div>
					<div>
						<p>
							This website illustrates my current financial portfolio that I
							hold. The data is updated daily and returns are based on market
							closing prices. The data is fetched directly from yahoo finance,
							and then computed on the client-side. The website is there to
							provide daily information about my financial portfolio.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h6 className="row justify-content-center">
							Front-end Specification( Angular, RxJS, Bootstrap )
						</h6>
						<p>
							The frontend was written in angular. The data is fetched from the
							backend using RxJs and Angular services, then it’s preprocessed
							directly on the client side and shown in the template. The Styling
							was done using Bootstrap.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							Back-end Specification( Node-js, Express )
						</h6>
						<p>
							The backend was written using Node with Express. The sole purpose
							of the backend in this application is to proxy requests from
							front-end to the yahoo. The yahoo API was deprecated a few years
							ago and now it’s only possible to send requests directly to yahoo
							server to fetch the data, hence, if the requests are sent directly
							from client it will be blocked by CORS.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							DevOps( Docker, Nginx, GCP)
						</h6>
						<p>
							The website was deployed on GCP(google cloud platform) compute
							engine instance using docker containers. The frontend is deployed
							in an independent container using nginx as a server. The backend
							is deployed in an independent container where express acts as a
							server. The frontend container sends direct requests to the
							backend container.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							Potential Imporovments
						</h6>
						<p>The design of the website needs a well needed overhaul.</p>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<button type="button" className="btn btn-dark" onClick={props.hide}>
					Close
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default StockPortfolioWebsite;
