import React, { useState } from 'react';

export default function About() {

    const [myStyle, setMyStyle] = useState({
        backgroundColor:"black",
        color:"white",
    })

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
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                About Us
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
    </div>
    <button type="button" className="btn btn-primary" onClick={changeMode}>Change Mode</button>
    </>
  )
}
