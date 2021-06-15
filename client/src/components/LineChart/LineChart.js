import React, { useContext, useState, useEffect } from "react";
import {
	XYPlot,
	LineSeries,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis
} from "react-vis";

import AppContext from "../../utils/AppContext"

const LineChart = () => {
const {
	series,
	getOrders,
	accountid
} = useContext(AppContext)

console.log(series)

const order = series.filter((v,i,a)=>a.findIndex(t=>(t.accountid === v.accountid))===i)
console.log(order)
return(
	<div>
		<h1>hello world</h1>
		<button onClick={getOrders()}> I are button</button>
	</div>
)
}

export default LineChart