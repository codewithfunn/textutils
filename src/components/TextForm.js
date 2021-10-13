import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text";// Wrong way to change the text
  // setText("new text");// right way to change the text

  // const [myStyle,setMySyle] =useState({
  //   color : 'black'
  // });

  // const ChangeToRed = ()=>{
  //       if(myStyle==='black'){
  //         setMySyle({
  //           color : 'red'
  //         })
  //       }
  //       else{
  //         setMySyle({
  //           color:'black'
  //         })
  //       }
  // }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // console.log("UpperCase was clicked"+ text);
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    // console.log("UpperCase was clicked"+ text);
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text","success");
  };

  const handleOnChange = (event) => {
    // console.log("On Changed")
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log("I am copy");
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard" , "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };
  return (
    <>
      <div className="container" >
        <div className="mb-3" style = {{color: props.mode === "dark" ? "white" : "black"}}>
          <h1  >{props.heading} </h1>
          <textarea
          // style ={myStyle}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white" , color: props.mode === "dark"?"white":"black"
            }} 
            
            className="form-control"
            value={text}
            id="textBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </div>
              
        {/* <div className="btn btn-primary mx-1" onClick={ChangeToRed}>
          red/black
        </div> */}

        <div className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </div>

        <div className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </div>
      </div>

      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes and{" "}
          {0.48 * text.split(" ").length} Second read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preveiw it here"}</p>
      </div>
    </>
  );
}
