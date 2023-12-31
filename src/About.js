import React, { useState } from 'react';

export default function About(props) {

    const buttonStyle ={ backgroundColor: 'black', color: '#af1df3', border: '2px solid rgb(175, 29, 243)', borderRadius: '22px' , padding: '10px 15px', marginTop: '2px'}

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor:"black",
    //     color:"white",
    //     border: "2px solid rgb(175, 29, 243)",
    //     borderRadius: '20px',

    // })

    const myStyle = {
      color: props.mode ==='dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'black':'#3e3e3e',
    }

    const myHeadingStyle = { width: '100px'}

    const [inputList, setInputList] = useState([]);

    const [accId, setAccId] = useState(1);


    const Input = () => {
        return  <div>
        <div className="accordion" id='accordionExample${accId}' style={myStyle}>
          <div className="accordion-item">
              <h2 className="accordion-header" id={`heading${accId}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${accId}`} aria-expanded="true" aria-controls={`collapse${accId}`}  style={myStyle}>
                <p className='task-heading' style={myHeadingStyle}> To Do Task:</p><textarea placeholder="Task title..."></textarea>
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


    // const changeMode= ()=>{
    //     if(myStyle.color=='white'){
    //         setMyStyle({
    //             backgroundColor:"black",
    //             color:"red",
    //         })
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor:"black",
    //             color:"white",
    //         })
    //     }
    // }

  return (
    <>
    <div>
      <div className="accordion" id='accordionExample${accId}' style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${accId}`}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${accId}`} aria-expanded="true" aria-controls={`collapse${accId}`}  style={myStyle}>
            <p className='task-heading' style={myHeadingStyle}> To Do Task:</p> <textarea placeholder="Task title..."></textarea>
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
   
  
    {/* <button type="button" className="btn btn-primary" onClick={changeMode} style={buttonStyle}>Change Mode</button> */}
    <button type="button" className="btn btn-primary" onClick={addComp} style={buttonStyle}>Add More Task</button>
    </>
  )
}
