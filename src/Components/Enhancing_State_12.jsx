import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Enhancing_State_12(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border border-${props.mode === 'dark' ? 'light' : ''} rounded`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.name}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                {/* the below link in from video number 16 cwh */}
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">{props.abtus}</a> */}
                                {/* the below link in from video number 16 cwh */}
                                <Link className="nav-link" to="/About">{props.abtus}</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder={props.search} aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch mx-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleSwitchText}</label>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className="container">
                <h1 className='text-center'>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non sint perspiciatis, magni enim eum minus saepe earum sit deserunt atque vitae doloremque, nulla eaque aliquid repellat, pariatur delectus necessitatibus. Amet eaque nam aperiam commodi libero, aut mollitia vel dicta. A, quis quod minus eaque architecto veniam aperiam ea ut itaque doloribus qui veritatis velit necessitatibus eligendi commodi non animi eveniet recusandae, fugit aliquid totam, fugiat nemo iure ipsum! Distinctio, ducimus fuga? At perspiciatis ea eveniet, recusandae labore delectus dolorem assumenda beatae saepe obcaecati odit dolorum itaque eaque. Officia asperiores quibusdam ipsam. Excepturi quas velit cumque provident et? Ad labore cum saepe, repellat maiores quidem odit quod maxime dolorum dolore veniam vero officia omnis eum quas rerum. Ipsa nemo ad sit commodi amet autem, aliquam reiciendis eveniet quaerat consequuntur aperiam fugiat repudiandae doloremque minus odit at nam, nihil, quam reprehenderit accusantium nobis repellendus. Voluptatum sit amet nemo, aperiam officiis perferendis.</p>
            </div> */}
        </div>
    )
}
/*
the below code is written to tell the PropType of the prop passed into a component;
*/
Enhancing_State_12.propTypes = {
    name: PropTypes.string.isRequired,
    abtus: PropTypes.string,
    search: PropTypes.string
}
/*
we can also add default value to the props in case if prop values is not passed;
*/
// Props_6.defaultProps={
//     name:"set the title here",
//     abtus:"set the about_info here",
//     search:"set the search_title here"
// }

export default Enhancing_State_12