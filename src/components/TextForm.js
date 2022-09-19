import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './text.css'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("btn clicked " + text);
        let newText = text.toLocaleUpperCase();
        setText(newText) // correct way
    }
    const handleLoClick = () => {
        console.log("btn clicked " + text);
        let newText = text.toLocaleLowerCase();
        setText(newText) // correct way
    }
    const handleClrClick = () => {
        console.log("btn clicked " + text);
        let newText = '';
        setText(newText) // correct way
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    var [showCartBox,setShowCartBox] = useState(false)
    const [text, setText] = useState('enter text here');
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h2><label htmlFor="myBox" className="form-label">{props.heading} </label></h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleClrClick}>Clear text</button>
                <button className="btn btn-outline-primary mx-2" onClick={() =>{setShowCartBox(!showCartBox)}}>Extract email</button>

            </div>
            <div className="container my-3" >
                <h2>Your text summary</h2> <br />
                <h5>{text.split(" ").length} words and {text.length} characters</h5>
                <h5>Average reading time for this text is : {0.008 * text.split(" ").length} minutes</h5>
                {showCartBox ?  <div  id="toggle" > <h5>Extracted emails : {text.match(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g) + " "} </h5></div>:<></>}
            </div>
       

        </>

    )

}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: 'set heading here'
}
