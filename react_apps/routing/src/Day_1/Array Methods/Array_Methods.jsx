import React from 'react'

// function Array_Methods() {
//   return (
//     <div>
        
//     </div>
//   )
// }




const Array_Methods = () => {
  const fruits = ["Apple", "Mango", "Banana"];

  return (
    <ul>
      {fruits.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
};


export default Array_Methods