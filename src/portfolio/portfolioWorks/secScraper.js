import React from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.scss";
import github_logo from "../../images/GitHub-Logo.png";

const SecScraper = (props) => {
	return (
		<Modal show={props.show} onHide={props.hide} size="lg">
			<Modal.Header className="row justify-content-center">
				<h3>Financial Information Scraper Description</h3>
			</Modal.Header>
			<Modal.Body dialogClassName="container ">
				<div>
					<div className="row justify-content-center">
						<span>
							Have a look at source code at: &nbsp;
							<a
								href="https://github.com/galibin24/SEC-EDGAR-python-scraper"
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
							The main idea of the project was to make an efficient fundamental
							data scraper which will provide accurately sorted financial
							information. The data is scraped directly from the SEC database
							which provides data of US companies' financial reports. The
							scraped data is unlabelled so it’s not possible to identify which
							statement has been downloaded. For solving labeling problems,
							machine learning technique(k nearest neighbor) was implemented. As
							a result the project was able to efficiently scrape financial
							statements and label it with 95% confidence. On average it takes 1
							minute per 1000 reports. Labeling takes 10 seconds per 1000
							reports.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h6 className="row justify-content-center">Scraping (scrapy)</h6>
						<p>
							The scraping of the SEC database is done using a scrapy library
							with rotating proxies and storing data in separate csv files. The
							scrapy was chosen on the basis of being one of the most efficient
							libraries when it comes to asynchronous scraping as it uses
							twisted reactor under the hood. Hence, the efficiency of scrapy is
							way higher than any multithreading optimization that can be done
							in python.
						</p>
					</div>
					<div>
						<h6 className="row justify-content-center">
							Processing (scikit-learn, pandas)
						</h6>
						<p>
							The scikit-learn library provides a great functionality on
							implementing basic machine learning algorithms. Hence, it was used
							to implement an unsupervised k-nearest neighbor algorithm which
							was trained on 6000 samples of data. The unsupervised method was
							chosen based on the time constraints the same goes for such a
							small sample of data. However, the algorithm performs
							exceptionally well labeling documents correctly in 97% of time.
						</p>
					</div>

					<div>
						<h6 className="row justify-content-center">
							Potential Imporovments
						</h6>
						<p>
							{" "}
							This project was done when I was relatively new to programming,
							hence, there are a lot of design problems which can only be solved
							by complete refactoring(implementing oop, better structure). Also,
							the 97% success rate on labelling can be further improved to
							99%-99.5% if the dataset was increased to at least 50 thousands
							samples or the supervised methods were used.
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

export default SecScraper;
