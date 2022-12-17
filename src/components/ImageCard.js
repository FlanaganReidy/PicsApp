import React, { useEffect, useRef, useState } from "react";

export const ImageCard = ({image}) => {
    const {description, urls} = image
    const [spans, setSpans] = useState(0);

    const imageRef = useRef(null);

    useEffect(()=>{
        imageRef.current.addEventListener('load', getSpans);
    })

    const getSpans = () => {
       const height= imageRef.current.clientHeight;

       const ourSpans = Math.ceil(height/10);

       setSpans(ourSpans);

       
    }

    return(
        <div style={{gridRowEnd:`span ${spans}`}}>
             <img 
             ref={imageRef}
             alt={description}
             src={urls.small}
             />
        </div>
       
    );
}