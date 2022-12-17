import React from "react";
import { useState } from "react";
import unsplash from "../api/unsplash";
import { SearchBar } from "./SearchBar"; 
import { ImagesList } from "./ImagesList";

export const App = () => {
    const [images,setImages] = useState([]);

   const handleSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params:{
                query:term
            },
        });
        setImages(response.data.results);
    }

    return(
        <div className="ui container" style={{marginTop:"10px"}}>
            <SearchBar onSubmit={handleSubmit}/>
            <ImagesList images={images} />
        </div>
        
    );
}