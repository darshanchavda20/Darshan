import React from 'react'

// function let_var_const() {
//   return (
//     <div>

//     </div>
//   )
// }


function LetVarConst() {
  const name = "Darshan";
  let counter = 10;

  return <h1>Hello {name}, Counter: {counter}</h1>;
}

export default LetVarConst