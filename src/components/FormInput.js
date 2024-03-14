import React from "react";

export default function FormInput() {
    return (
        <>
        <div className="container">
            <div className="mb-3 mt-4">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Enter your texts here
                </label>
                <textarea
                    className="form-control"
                    id="textarea"
                    rows="9"
                ></textarea>
                <button type="button" htmlFor="textarea" className="btn btn-success mt-3">changeToUpperCase</button>
            </div>
        </div>
        </>
    );
}
