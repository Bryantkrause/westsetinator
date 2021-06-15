import React, { useEffect, useState } from "react";
import AppContext from "../utils/AppContext"
import { dsv } from "d3-fetch";
import {
	FlexibleWidthXYPlot,
	VerticalBarSeries,
	LineMarkSeries,
	XAxis,
	YAxis,
	Hint,
} from "react-vis";

import dataUrl from "../SeedData/orders.csv"
import LineChart from "../components/LineChart"

const Example = () => {
const [exampleState, setExampleState] = useState({
    userid: "",
    accountid: "",
    doc_number: "",
    month: "",
    type: "",
    actual_trans_ts: "",
    orders:[],
    series: [],
    getOrders: () => {
        // series.filter((v,i,a)=>a.findIndex(t=>(t.accountid === v.accountid))===i)
        // console.log(series)
    },
    getCustomers: () => {},
    getTotalOrders: () => {},
    
})

useEffect(() => {
    
    dsv(",", dataUrl, (d) => {
        return {
            userid: d["userid"],
            accountid: d["accountid"],
            order: d["Order"],
            ActualDate: d["ActualDate"],
            month: d["month"],
            type: d["type"],
            
        }
       
        }) .then((data) =>{
            
            let series = JSON.parse(JSON.stringify(exampleState.series))
            series.push(data)
            setExampleState({...exampleState, series})
            console.log(series)

    })
   
}, []);

return(
    <AppContext.Provider value={exampleState}>
        <LineChart/>
    </AppContext.Provider>
)


}

export default Example