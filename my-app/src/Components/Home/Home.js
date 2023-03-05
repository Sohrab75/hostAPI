import React from "react";
import Header from "../Header";
import Search from "./Search";
import QuickSearch from "./QuickSearch";
import Review from "./Review";

const Home =()=>{
    return(
        <>
        <Header/>
        <Search/>
        <QuickSearch/>
        <Review/>
        </>
    )

}

export default Home;