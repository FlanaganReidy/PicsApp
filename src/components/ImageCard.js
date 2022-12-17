import React, { useEffect, useRef } from "react";

export const ImageCard = ({image}) => {
    const {description, urls} = image

    const imageRef = useRef(null);

    useEffect(()=>{
        imageRef.current.addEventListener('load', setSpans);
    })

    const setSpans = () => {
        
    }

    return(
        <div>
             <img 
             ref={imageRef}
             alt={description}
             src={urls.small}
             />
        </div>
       
    );
}