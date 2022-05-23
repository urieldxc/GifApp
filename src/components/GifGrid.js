import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const [ images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [] )

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=5CRCF79175k5lMWQJHq81uNYjhWisMvP'
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( item => {
            return {
                id: item.id,
                title: item.title,
                url: item.images.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs )
    }

    return (
        <>
            <h3>{category}</h3>
                { 
                    images.map( img => (
                        <GifGridItem 
                        key={ img.id }
                        {...img}
                        />
                    ) ) 
                }
        </>
    )
}