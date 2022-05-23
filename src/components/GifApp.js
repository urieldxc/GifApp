import React, { useState } from "react";
import { AddCategory } from "./AddCategory";


const GifApp = () => {

    const [ categories, setCategories] = useState(['One Punch', 'Naruto', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([ 'HunterXHunter', ...categories])
    // }

    return(
        <>
            <h2>Gif APP</h2>
            <AddCategory  setCategories={ setCategories }/>
            <hr />
            
            <ul>
                {categories.map( ( category ) => {
                    return <li key={category}>{ category }</li>;
                } )}
            </ul>
        </> 
    )
    
}

export default GifApp;