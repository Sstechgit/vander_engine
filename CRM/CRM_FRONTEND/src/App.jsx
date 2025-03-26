// import "./App.css";
// import Home from "./Components/Home";
// import React, { useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { urls } from "../links";

// function App() {
//   useEffect(() => {
//     const pingServer = () => {
//       fetch(urls.ACTIVE_USER, {
//         method: "POST",
//         headers: {
//           "Authorization": "Bearer " + localStorage.getItem("accessToken"),
//         },
//       }).catch((error) => console.error("Ping failed:", error));
//     };

//     // ✅ Send a ping every 5 minutes
//     const interval = setInterval(pingServer, 3000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <BrowserRouter>
//       <Home />
//     </BrowserRouter>
//   );
// }

// export default App;









import './App.css'
import Home from './Components/Home'
import React from 'react'
import {BrowserRouter} from "react-router-dom"
function App() {


  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  )
}

export default App




