/*
What is react router?------------->
React Router is a library for managing navigation in a React application. It helps you build single-page applications (SPAs) by allowing you to handle routing—i.e., navigating between different views or pages—without requiring a full page reload.

How to install react router?------------->
npm i react-router-dom/npm instal react-router-dom

Advantages-------------->
Single Page Application: React Router helps you build SPAs where only the view changes, not the entire page. This makes navigation faster and smoother.
Declarative Routing: You define routes in a clear and straightforward way using JSX, making your code more readable and maintainable.
Dynamic Routing: It supports dynamic route parameters and nested routing, allowing for more complex navigation scenarios.
Programmatic Navigation: You can navigate programmatically using hooks like useNavigate, which is useful for redirecting users after certain actions.
History Management: It handles the browser history for you, so you can use browser buttons (like back and forward) as expected.

Disadvantages-------------->
Learning Curve: It can be a bit overwhelming for beginners due to its numerous features and configurations.
Performance Overhead: For very large applications with many routes, managing and rendering routes might introduce performance overhead.
Dependency on History API: It relies on the History API, which might not be fully supported in very old browsers.
Limited by React: React Router is designed to work with React, so if you’re using a different library or framework, you’ll need a different routing solution.

something about <Switch>----------->
When working with React and Vite, setting up routing with the <Switch> component is a common requirement. However, the <Switch> component is part of react-router-dom, which is used for handling routing in React applications. In recent versions of react-router-dom (v6 and later), <Switch> has been replaced by <Routes>. If you are using an older version of react-router-dom, you will use <Switch>. 
*/
import React from 'react'

function React_router_16() {
  return (
    <div>
        
    </div>
  )
}

export default React_router_16