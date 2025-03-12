import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = ()=> {
        let newState = text.toUpperCase();
        setText(newState);
        props.showAlert("Converted to Upper Case", "success")
    }
    const handlechangeclick = (event)=> {
        console.log("On Change")
        setText(event.target.value)
    }
    const handleLoClick = ()=> {
        let newState = text.toLowerCase();
        setText(newState);
        props.showAlert("Converted to Lower Case", "success")
    }
    const handleClearClick = ()=> {
        let newState = '';
        setText(newState);
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard", "success")
    }
    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space", "success")
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 className='mb-4'>{props.title}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlechangeclick} style={{backgroundColor: props.mode==='dark'?'#033f44':'#1434405c', color: props.mode==='dark'?'white':'black', height: "150px", width: "60rem"}}></textarea>
                </div>
                    <button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={handleUpClick}>UPPERCASE</button>
                    <button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={handleLoClick}>LOWERCASE</button>
                    <button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={handleCopy}>COPY TEXT</button>
                    <button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={handleExtraSpace}>REMOVE EXTRA SPACE</button>
                    <button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={handleClearClick}>CLEAR</button>
                <div className='containet my-3' style={{color: props.mode==='dark'?'white':'black'}}>
                    <h2>YOUR TEXT SUMMARY</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
                    <h2>PREVIEW</h2>
                    <p>{text.length>0 ? text : "NOTHING TO PREVIEW"}</p>
                </div>
            </div>
        </>
    )
}
