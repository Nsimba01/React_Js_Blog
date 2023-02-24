import React from "react";
import "./App.css";

import Posts from './Posts';

const App = () => {
return (
	<div className="main-container">
	<h1 className="main-heading">
		<center>Blog</center>
	</h1>
	<Posts />
	</div>
);
};

export default App;
