/*
difference between library and a framework?--------------------->
Library: A library is a collection of pre-written code that developers can use to perform common tasks. It’s like having a toolbox with various tools you can pick from when you need them. For example, React is a library that provides tools to build user interfaces.

Framework: A framework is a more comprehensive system that provides a structured way to build and organize your application. It often includes a set of rules and conventions you follow. Think of it like a recipe book that not only gives you ingredients but also tells you how to use them to make a dish. Frameworks often guide how your code should be organized and interact with other parts of the system.

In summary, a library offers helpful tools, while a framework provides a complete structure and set of guidelines for building applications.
*/
/*
what is react hooks?----------->
React hooks are a way to use state and other React features in functional components, which are simpler and more concise than class components.
Hooks make it easier to manage state and side effects in functional components, making your code cleaner and more maintainable.

*/
/*
what is useState?--------------->
useState is a special function in React that lets you add state to your functional components.

Here’s a simple breakdown:

State: It's like a box where you can store some information that your component needs to remember. For example, it could be the current count of a button click or the text in a form.

useState: This function helps you create that box and set its initial value. It gives you two things: the current value of the state and a way to update that value.

How It Works:

You call useState with the initial value you want to start with (e.g., useState(0) for a counter that starts at 0).
It returns an array with two elements: the current state value and a function to update that value.
*/
import React, { useState } from 'react'
import { toast } from 'react-toastify';
//cwh video 7
function States_handeling_events_7(props) {
    const [text, setText] = useState('')

    function handleOnclick(event) {
        event.preventDefault()
        console.log("button has been clicked");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to UpperCase','success') //this is videoNo. 13 cwh;
    }
    function handleOnclick2(event) {
        event.preventDefault()
        console.log("button has been clicked");
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to LowerCase','success') //this is videoNo. 13 cwh;
    }
    function handleOnclick3(event) {
        event.preventDefault()
        console.log("button has been clicked");
        setText("")
        props.showAlert('text cleared','success') //this is videoNo. 13 cwh;
    }
    function handleOnclick4(event) {
        event.preventDefault()
        console.log("button has been clicked");
        navigator.clipboard.writeText(text).then((res) => {
            toast.success('copied to clipboard')
            console.log('text copied');
        }).catch((err) => {
            alert('error occured')
            console.log('error occured', err);
        })
        props.showAlert('Copied to Clipboard','success') //this is videoNo. 13 cwh;
    }
    function handleOnclick5(event) {
        event.preventDefault()
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('extra spaces removed','success') //this is videoNo. 13 cwh;
    }
    function handleOnchange(event) {
        console.log("onchange function fired");
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <form className='form1'>
                    <h3>{props.heading}</h3>
                    <div className="form-group ">
                        <textarea className='border rounded' placeholder='Enter your text here' cols="100" rows="10" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary mx-1" onClick={handleOnclick}>Convert to UpperCase</button>
                    <button type="submit" className="btn btn-outline-primary mx-1  " onClick={handleOnclick2}>Convert to LowerCase</button>
                    <button type="submit" className="btn btn-outline-primary mx-1  " onClick={handleOnclick3}>Clear Text</button>
                    <button type="submit" className="btn btn-outline-primary mx-1  " onClick={handleOnclick4}>Copy to clipboard</button>
                    <button type="submit" className="btn btn-outline-primary mx-1  " onClick={handleOnclick5}>Remove extra spaces</button>
                </form>
            </div>

            {/* cwh video 8 */}

            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} letters</p>
                <p>can be read in {0.008 * text.split(" ").length}minutes</p>
                <h2>Preview of the Summary</h2>
                <p>{text.length>0?text:'Enter some text above to preview it here.'}</p>
            </div>
        </>
    )
}

export default States_handeling_events_7