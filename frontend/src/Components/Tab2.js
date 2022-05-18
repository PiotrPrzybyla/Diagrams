import React, { useState, useEffect } from "react";
import { drawChart, initChart } from "../d3/d3";
function Tab2() {
	let width = 1000;
	let height = 600;
	useEffect(() => {
		initChart(height, width);
		fetchData();
		let timer = setInterval(() => {
			fetchData();
		}, 10000);
	}, []);

	const fetchData = async () => {
		const res = await fetch("http://localhost:3001/all", {});
		const json = await res.json();
		const values = [];
		json.forEach((el) => {
			values.push(el.Value);
		});
		drawChart(height, width, values);
	};

	return (
		<React.Fragment>
			<div id="chart"></div>
		</React.Fragment>
	);
}

export default Tab2;
