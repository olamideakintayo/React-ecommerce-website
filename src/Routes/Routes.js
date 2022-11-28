import React from "react";
import Products from "../products/Products";
import { Routes, Route } from "react-router-dom";

const Routess = ({items}) => {
    return (
        
            <Routes>
                {/* Whenever we go to the path "/", Products items will be displayed on our screen */}
                <Route path="/" element={<Products  items={items}/>}/>
                    {/* We also pass the productitems as props to the product component */}
            </Routes>
        
    );
};
export default Routess;