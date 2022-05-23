import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";


const GifApp = () => {

    const [ categories, setCategories] = useState(['Naruto']);

    return(
        <>
            <h2>Gif APP</h2>
            <AddCategory  setCategories={ setCategories }/>
            <hr />
            
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