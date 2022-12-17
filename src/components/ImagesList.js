import React from "react";
import { ImageCard } from "./ImageCard";
import "./ImageList.css";

export const ImagesList = ({images}) => {
    return(
        <div className="image-list">
            {images.map((image) => {
                return(<ImageCard key={image.id} image={image}/>)
            })}
           
        </div>
    );
}