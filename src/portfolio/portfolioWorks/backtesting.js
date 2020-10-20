import React from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.scss";
import github_logo from "../../images/GitHub-Logo.png";

const Backtesting = (props) => {
	return (
		<Modal show={props.show} onHide={props.hide} size="lg">
			<Modal.Header className="row justify-content-center">
				<h3>Portfolio Backtesting Project</h3>
			</Modal.Header>
			<Modal.Body dialogClassName="container ">
				<div>
					<div className="row justify-content-center">
						<span>
							Have a look at source code at: &nbsp;
							<a
								href="https://github.com/galibin24/Portfolio-Backtesting"
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
							This was one of my longest commission works so I decided to put it
							here. The job was to get stock recommendations from well known
							analysts and construct a portfolio that follows certain rules and
							consists of recommended stocks. Then to compare the portfolio of
							recommended stocks to a benchmark(S&P 500) by constructing a
							comparison graph. The yahoo finance API was used to get the prices
							of recommended stocks, then stocks were processed using pandas and
							the graph was made using matplotlib.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h6 className="row justify-content-center">
							Potential Imporovments
						</h6>
						<p>
							Being one of my earlier works, it is written in intuitive style,
							hence implementing oop can greatly improve this project.
						</p>
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

export default Backtesting;
