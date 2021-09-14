import React, { useState } from 'react'

function TextArea() {
    const[text,setText] = useState('')

    const changeInput = (e) =>{
        setText(e.target.value)
    }
    const handleUpClick =() =>{
        let newText = text.toUpperCase()
        setText(newText) }
    const handleLoClick =() =>{
        let newText = text.toLowerCase()
        setText(newText) }
    return (
        <>
            <div className ="container">
                    <h1>Enter text here to analyse</h1>
                    <textarea value = {text} onChange={(changeInput)} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button type="button" onClick ={handleUpClick} className="btn btn-primary my-2 mx-1">Upper case</button>
                    <button type="button" onClick ={handleLoClick} className="btn btn-primary my-2 mx-1">Lower case</button>
            </div>
            <div className="container">
                <h2>Summary of words</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length}min read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextArea
 