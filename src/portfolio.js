import React, { useState } from "react";
import "./portfolio.scss";
import RecipeWebsiteDetails from "./portfolioWorks/recipeWebsite";
import StockPortfolioWebsite from "./portfolioWorks/stockPortfolioWebsite";
import SecScraper from "./portfolioWorks/secScraper";
import Backtesting from "./portfolioWorks/backtesting";
import AionBot from "./portfolioWorks/aionBot";
import recipeScreen from "./images/recipeWebsiteScreenshot.png";
import stockScreen from "./images/stockPortfolioWebsite.png";
import secScreen from "./images/sec.jpeg";

const Portfolio = () => {
	const [recipeModal, setRecipeModal] = useState(false);
	const [stockModal, setStockModal] = useState(false);
	const [scraperModal, setScraperModal] = useState(false);
	const [backtestModal, setBacktestModal] = useState(false);
	const [aionModal, setAionModal] = useState(false);

	const showAionModal = () => setAionModal(true);
	const hideAionModal = () => setAionModal(false);

	const showBacktestModal = () => setBacktestModal(true);
	const hideBacktestModal = () => setBacktestModal(false);

	const showScraperModal = () => setScraperModal(true);
	const hideScraperModal = () => setScraperModal(false);

	const showRecipeModal = () => setRecipeModal(true);
	const hideRecipeModal = () => setRecipeModal(false);

	const showStockModal = () => setStockModal(true);
	const hideStockModal = () => setStockModal(false);

	return (
		<div id="myPortfolio" className="portfolio-body">
			<div className="container">
				<div className="header">
					<div className="title">Portfolio</div>
				</div>
				<div className="container-fluid border sub-container">
					<div className="row justify-content-center">
						<div className="sub-title">Web Development Projects</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-6 col-sm-6 order-1  ">
							<div className="portfolio-item">
								<button
									type="button"
									className="project-screen"
									data-toggle="modal"
									data-target="#exampleModal"
									onClick={showRecipeModal}
								>
									<img
										src={recipeScreen}
										className="img-item"
										alt="Recipe Website"
									/>
								</button>
								<RecipeWebsiteDetails
									show={recipeModal}
									hide={hideRecipeModal}
								/>
								<div className="project-details">
									<div className="project-title">Everyday Recipes</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-sm-6  order-0">
							<div className="portfolio-item">
								<button
									type="button"
									href="https://nikitagalibinstocks.tk/"
									className="project-screen"
									target="_blank"
									onClick={showStockModal}
								>
									<img
										src={stockScreen}
										className="img-item"
										alt="Stock Portfolio Website"
									/>
								</button>
								<StockPortfolioWebsite
									show={stockModal}
									hide={hideStockModal}
								/>
								<div className="project-details">
									<div className="project-title">Stock Portfolio</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid border sub-container">
					<div className="row justify-content-center">
						<div className="sub-title">Data Analyses Projects</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-sm-6">
							<div className="portfolio-item">
								<button
									href="https://nikitagalibinstocks.tk/"
									className="project-screen"
									target="_blank"
									onClick={showScraperModal}
								>
									<img
										src={secScreen}
										className="img-item"
										alt="Stock Portfolio Website"
									/>
								</button>
								<SecScraper show={scraperModal} hide={hideScraperModal} />

								<div className="project-details">
									<div className="project-title">
										Public Financial Information Scraper
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="portfolio-item">
								<button
									href="https://nikitagalibinstocks.tk/"
									className="project-screen"
									target="_blank"
									onClick={showBacktestModal}
								>
									<img
										src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
										className="img-item"
										alt="Stock Portfolio Website"
									/>
								</button>
								<Backtesting show={backtestModal} hide={hideBacktestModal} />
								<div className="project-details">
									<div className="project-title">
										Stock Portfolio Backtesting
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="portfolio-item">
								<button
									href="https://nikitagalibinstocks.tk/"
									className="project-screen"
									target="_blank"
									onClick={showAionModal}
								>
									<img
										src="https://static.wixstatic.com/media/de0346_a6436a335cd44f4c98ea7a594b32e03e~mv2_d_4264_2482_s_4_2.png/v1/fill/w_4264,h_2482/AION%20Innovations%20Logo-white-sm.png"
										className="img-item"
										alt="Stock Portfolio Website"
									/>
								</button>
								<AionBot show={aionModal} hide={hideAionModal} />

								<div className="project-details">
									<div className="project-title">Video Game Bot (AION)</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
