import React, { useState } from 'react';


export default function About() {

    const buttonStyle ={ backgroundColor: 'orange', color: 'black'}

    const [myStyle, setMyStyle] = useState({
        backgroundColor:"black",
        color:"white",
    })

    const [inputList, setInputList] = useState([]);

    const [accId, setAccId] = useState(1);


    const Input = () => {
        return  <div>
        <div className="accordion" id='accordionExample${accId}' style={myStyle}>
          <div className="accordion-item">
              <h2 className="accordion-header" id={`heading${accId}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${accId}`} aria-expanded="true" aria-controls={`collapse${accId}`}  style={myStyle}>
                 To Do Task:{accId}
              </button>
              </h2>
              <div id={`collapse${accId}`} className="accordion-collapse collapse show" aria-labelledby={`heading${accId}`} data-bs-parent="#accordionExample" style={myStyle}>
              <div className="accordion-body">
              <textarea placeholder="Enter your task here..."></textarea>
              </div>
              </div>
          </div>
          </div>
      </div>
      };
      

    const addComp = () => {
      
        setInputList(inputList.concat(<Input key={inputList.length} />));
        setAccId(accId+1);
      };


    const changeMode= ()=>{
        if(myStyle.color=='white'){
            setMyStyle({
                backgroundColor:"black",
                color:"red",
            })
        }
        else{
            setMyStyle({
                backgroundColor:"black",
                color:"white",
            })
        }
    }

  return (
    <>
    <div>
      <div className="accordion" id='accordionExample${accId}' style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${accId}`}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${accId}`} aria-expanded="true" aria-controls={`collapse${accId}`}  style={myStyle}>
                To Do Task: {accId}
            </button>
            </h2>
            <div id={`collapse${accId}`} className="accordion-collapse collapse show" aria-labelledby={`heading${accId}`} data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            <textarea placeholder="Enter your task here..."></textarea>
            </div>
            </div>
        </div>
        </div>
    </div>
    {inputList}
   
  
    <button type="button" className="btn btn-primary" onClick={changeMode} style={buttonStyle}>Change Mode</button>
    <button type="button" className="btn btn-primary" onClick={addComp} style={buttonStyle}>Add More Task</button>
    </>
  )
}
