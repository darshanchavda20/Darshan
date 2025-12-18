import React from 'react'

function Template_Literals() {
     const user = "Darshan";
     return <h1 style={{color:"red"}}>{"Welcome, ${user}"}</h1>;
   
}

// function App() {
//   const user = "Darshan";
//   return <h1>{`Welcome, ${user}`}</h1>;
// }


export default Template_Literals