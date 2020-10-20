import React from "react";
import Home from "./home/home";
import AboutMe from "./aboutMe/aboutMe";
import Portfolio from "./portfolio/portfolio";
import Footer from "./footer/footer";

function App() {
	return (
		<div>
			<Home />
			<Portfolio />

			<AboutMe />
			<Footer />
		</div>
	);
}

export default App;
