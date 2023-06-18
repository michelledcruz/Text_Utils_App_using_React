import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function TextArea(props) {

    const changeText = ()=>{
        setText("this is new text");
    }
    const [text, setText] = useState("this is old text");

    return(
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value ={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button type="button" className="btn btn-primary" onClick={changeText}>Change the text</button>
        </div>
    )
}

PropTypes.propTypes = {
    heading: PropTypes.string.isRequired,
  };