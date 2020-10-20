import React from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.scss";
import github_logo from "../images/GitHub-Logo.png";

const RecipeWebsiteDetails = (props) => {
	return (
		<Modal show={props.show} onHide={props.hide} size="lg">
			<Modal.Header className="row justify-content-center">
				<h3>Recipe Website Description</h3>
			</Modal.Header>
			<Modal.Body dialogClassName="container ">
				<div>
					<div className="row justify-content-center">
						<span>
							You can view the website by following to: &nbsp;
							<a href="https://nikitagalibinrecipes.tk/" target="_blank">
								nikitagalibinrecipes.tk
							</a>
						</span>

						<span>
							Or you can have a look at source code at: &nbsp;
							<a
								href="https://github.com/galibin24/Recipe-Website"
								target="_blank"
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
							The recipe website project is an illustration of one of the
							generic websites you can see on the web. Recipes represent main
							content which can be added, updated or deleted by users. The
							authentication is implemented so the users first need to register
							to manipulate recipes. The basic pagination and sorting provide
							the illustration of basic user experience enhancements. The
							third-party API(Unsplash) is used to provide an image for each
							recipe. All those components can be easily extended(e.g. Adding
							additional sorting options, improving recipe description, comment
							section …).
						</p>
					</div>
				</div>
				<div>
					<div>
						<h6 className="row justify-content-center">
							Front-end Specification( React, Redux, Bootstrap )
						</h6>
						<p>
							The main part of the frontend was written in React + Redux. The
							React was used for each part(component) of the website. Hence, no
							static html files were written, all of html was written in JSX.
							All the react components are functional, no class components are
							present in this project. Redux was used more as an example for
							managing global states(also can be achieved by props passing or
							react context API), it is used to pull recipes from a backend,
							update them or delete them. The redux was also implemented to
							manage state of user authentication. The styling of the website
							was done entirely in Bootstrap with some SASS twiks. Axios library
							was used for sending requests.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							Back-end Specification( Django, MySQL )
						</h6>
						<p>
							{" "}
							The backend is written as an independent RESTful API utilizing
							Django Rest Framework. The main functionality of backend is
							serializing recipes, storing them in database and authenticating
							users. The user authentication is done using JWT methodology where
							the jwt token is passed on every writable request to the backend.
							MySQL database is used in production where SQLite is used in
							development.{" "}
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							DevOps( Docker, Nginx, AWS EC2 )
						</h6>
						<p>
							{" "}
							The website was deployed on AWS EC2 instance using docker
							containers. The frontend is deployed in an independent container
							using nginx as a server. The backend is deployd in an independent
							container where gunicorn acts as a server. There is a separate
							Nginx-server on port 80 which provides SSL certification and
							proxies all the requests to respected backend and frontend
							servers, running in a container.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							Potential Imporovments
						</h6>
						<p>
							{" "}
							The main area of potential improvements from my current
							understanding of a project include a refactoring of frontend
							components providing better isolation for each component(e.g
							pagination should be independent from the RecipeList component). A
							wrapper for each request to backend in order to include the
							authentification status(right now every request implictly declares
							authentification status). A server-side rendering.
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

export default RecipeWebsiteDetails;
