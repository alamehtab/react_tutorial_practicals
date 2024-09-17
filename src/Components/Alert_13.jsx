/*
what is the expression props.alert &&---------->
Here's a breakdown of what props.alert && does:

props.alert: This represents the alert prop passed to the Alert_13 component. It could be any value, but in this context, it’s expected to be an object or null/undefined.

&& (Logical AND Operator): This operator is used to perform a short-circuit evaluation. In JavaScript, the expression A && B evaluates to B if A is truthy. If A is falsy, it evaluates to A (which means B will not be evaluated or rendered).
*/
import React from 'react'

function Alert_13(props) {
    const capitalize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1)
    }
    return (
        props.alert &&<div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.msg)}</strong>
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                </button> */}
            </div>
        </div>
    )
}

export default Alert_13