import { createContext } from "react";

const AppContext = createContext({
    userid: "",
    accountid: "",
    doc_number: "",
    month: "",
    type: "",
    actual_trans_ts: "",
    orders:[],
    series: [],
    getOrders: () => {},
    getCustomers: () => {},
    getTotalOrders: () => {},
    dsv: () => {}
})

export default AppContext