import React from "react";
import { useState, useEffect } from "react";

export const SearchBar = ({onSubmit}) => {

    const [term, setTerm] = useState('');
    const handleInputChange = (e) =>{
        setTerm(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(term)
    }


    return(
        <div className="ui segment">
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={term} onChange={handleInputChange}/>
                </div>
            </form>
            
        </div>
    );

}