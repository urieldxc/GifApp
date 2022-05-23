import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";


const GifApp = () => {

    const [ categories, setCategories] = useState(['']);

    return(
        <>
            <h1>Gif APP</h1>
            <AddCategory  setCategories={ setCategories }/>
            
            
            <ul>
                {categories.map( ( category ) => 
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                )}
            </ul>
        </> 
    )
    
}

export default GifApp;