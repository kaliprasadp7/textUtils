import React, { useState } from 'react'

export default function FormInput(props) {
    const [text, setText] = useState("Type here");

    const handleUpperCase = () => {
        // console.log("handle uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase", "success");
    }

    const handleLowerCase = () => {
        // console.log("handle lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase", "success");
    }

    const handleClearCase = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to the clipboard", "success");
    }

    const handleOnChange = (event) => {
        // console.log("handleONChange revocked");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'light':'dark'}}>
            <div className={`mb-3 mt-4 text-${props.mode === 'dark'?'light':'dark'}`}>
                <h1>{props.heading}</h1>
                <textarea
                    className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'white':'black'}`}
                    id="textarea"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
                <button type="button" htmlFor="textarea" className="btn btn-success mt-3" onClick={handleUpperCase}>Convert to UpperCase</button>
                <button type="button" htmlFor="textarea" className="btn btn-success mt-3 mx-3" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button type="button" htmlFor="textarea" className="btn btn-success mt-3" onClick={handleClearCase}>Clear Text</button>
                <button type="button" htmlFor="textarea" className="btn btn-success mt-3 mx-3" onClick={handleCopyText}>Copy Text</button>
            </div>


            <div className={`mt-5 text-${props.mode === 'dark'?'light':'dark'}`}>
                <h3>Text Summery</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>You can read this in {text.split(" ").length * 0.08} minutes.</p>
            </div>

            <div className={`mt-5 text-${props.mode === 'dark'?'light':'dark'}`}>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Enter something to preview it here !"}</p>
            </div>

        </div>
        </>
    );
}
