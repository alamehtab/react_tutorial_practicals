import React, { useState } from 'react'

function About_10() {
    // cwh video 10
    // we are making a initial state style for the accordion using useState
    const [myStyle,setMystyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    // another useState to change the text of the button for dark/light mode
    const [btntext,setBtntext]=useState('Enable Dark Mode')

    function toggleStyle(e){ 
        e.preventDefault()
        if(myStyle.color=='white'){ 
            setMystyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtntext('Enable Dark Mode')
        }else{
            setMystyle({
                color:'white',
                backgroundColor:'#212529' // we can also change it to black
            })
            setBtntext('Enable Light Mode')
        }
    }
    return (
        <>
            <div className="accordion" id="accordionExample" style={myStyle} >
                <h1><i>accordion</i></h1>
                <div className="accordion-item">
                    {/* this is a accordian header */}
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    {/* this is the body of the accordion */}
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    {/* this is a accordian header */}
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    {/* this is the body of the accordion */}
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    {/* this is a accordian header */}
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    {/* this is the body of the accordion */}
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* this is the toggle button for dark/light mode */}
            <button className='btn btn-dark my-2 border border-primary' onClick={toggleStyle}>{btntext}</button>
        </>
    )
}

export default About_10