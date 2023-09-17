// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   (document.getElementById('root'))
// )
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";
//import store from "./redux/store";

ReactDOM.render(
  // <Provider >
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  //</Provider>,
  document.getElementById("root")
);
