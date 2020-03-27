import React from "react";
import {Route, Link} from "react-router-dom";
import Form from "./components/Form.js";
import Home from "./components/Home.js";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/form">Order</Link>
      <Route exact path="/" component={Home}/>
      <Route path="/form" component={Form}/>
    </>
  );
};
export default App;
