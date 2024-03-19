import React, { useState } from 'react'

export default function FormInput(props) {
    const [text, setText] = useState("Type here");

    const handleUpperCase = () => {
        // console.log("handle uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = () => {
        // console.log("handle lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("handleONChange revocked");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container">
            <div className="mb-3 mt-4">
                <h1>{props.heading}</h1>
                <textarea
                    className="form-control"
                    id="textarea"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
                <button type="button" htmlFor="textarea" className="btn btn-success mt-3" onClick={handleUpperCase}>Convert to UpperCase</button>
                <button type="button" htmlFor="textarea" className="btn btn-success mt-3 mx-3" onClick={handleLowerCase}>Convert to LowerCase</button>
            </div>
        </div>
        </>
    );
}
