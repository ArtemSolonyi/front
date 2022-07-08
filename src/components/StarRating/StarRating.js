import './StarRating.scss'

import React from "react";


function StarRating(props) {
    return (
        <div className="rating">{
            Array.apply(null, Array(props.valueStars))
                .map(function(val, index) {return index+1;}).reverse()
                .map((e) =>
            <React.Fragment
                key={e}>
                <input
                    // checked={props.setRating==e}
                    onChange={props.onChangeRating}
                    type="radio"
                    id={`star${e}`}
                    name="rating"
                    value={`${e}`}/>
                <label
                    htmlFor={`star${e}`}>
                </label>
            </React.Fragment>)}</div>)
}


export default StarRating;

