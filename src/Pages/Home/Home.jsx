import React, { useState } from "react";

import './Home.css'
import Header from "../../Componests/Header/Header";
import ExploreMenu from "../../Componests/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Componests/FoodDisplay/FoodDisplay";
import AppDownload from "../../Componests/AppDownload/AppDownlad";


function Home (){

    const [category , setCategory] = useState("All");
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
            <AppDownload/>


        </div>
    )
}

export default Home;