import React from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.scss";
import github_logo from "../images/GitHub-Logo.png";

const AionBot = (props) => {
	return (
		<Modal show={props.show} onHide={props.hide} size="lg">
			<Modal.Header className="row justify-content-center">
				<h3>Video Game Bot Project</h3>
			</Modal.Header>
			<Modal.Body dialogClassName="container ">
				<div>
					<div className="row justify-content-center">
						<span>
							Have a look at source code at: &nbsp;
							<a href="https://github.com/galibin24/Game-Bot" target="_blank">
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
							During my third year at university playing MMO was one of my
							hobbies, hence, one day I decided to embark on a journey on
							creating my personal gaming bot. The main focus of the bot was to
							hunt(grind) monsters for hours without any human intervention.
							What came out as a result was a fully functioning bot which ended
							up to be more of educational material since I ended up quitting
							MMO not long after making it. The bot is fully capable of hunting
							for ours without a problem and picking up dropped items.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h6 className="row justify-content-center">
							Grabbing Screen(win32gui, CV2, numpy)
						</h6>
						<p>
							The first challenge to overcome was capturing the screen without
							spending too much computing power and having a stable fps(frames
							per second). As a result win32gui was used, it is a python version
							of the official win32 API, which is written in CPython, hence,
							providing the maximum efficiency. The win32gui worked by creating
							a bitmap of the screen feeding it to numpy to make an array which
							was then used to create an image of the screen using CV2. This
							function ran in a loop creating a recording of the screen at
							around 25-30 fps.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							Finding Monsters Approach 1(CV2, numpy, Yolo)
						</h6>
						<p>
							The second challenge was to identify the monsters on the screen.
							First approach was to train an object detection model. The model
							was to identify the positions of monsters on the screen and then
							the mouse click was to be made on the monster. The YOLO(by
							darknet) model was the most efficient at the time so it was used.
							As a result the model was trained and working but the problem of
							computing power(the model ran at 5 frames per second) made this
							approach impossible to be used in production.
						</p>
					</div>

					<div>
						<h6 className="row justify-content-center">
							Finding Monsters Approach 2(CV2, numpy)
						</h6>
						<p>
							After a few days I came up with a second approach. The second
							approach was much simpler and more efficient. In any MMO game
							there is a map somewhere on the screen which shows the position of
							our character and the position of monsters around it, as well as
							the direction the character is facing at the moment. Hence, I
							simply decided to identify the position of monsters relative to
							position of character. Then the character just needed to rotate to
							face the closest monster and hunting can begin. I will not go in
							much detail here as technically it was much harder than it sounds,
							and it will take 20 min read to explain it all.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">Infinite Hunting</h6>
						<p>
							After finding a way to find monsters, it was just a matter of
							writing an efficient hunting loop with multiple checks of
							different kinds(checking character health, checking monster
							health, etc.). From here it just starting an infinite hunting loop
							which ran for around 6-8 hours without much problems.
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

export default AionBot;
