import React from "react";
const a=5;
const b=10;
const c=a+b;
const d=a-b;
function Additions()
{
    return (
        <>
          <p>function based components are used as hooks</p>
          <p>hook is must be only suported in function based components </p>
          <b>Eg.</b>
          <h2>Additions of numbers is : {c}</h2>
            
        </>
    )
}

function Substractions()
{
    return (
        <>
          <Additions />  
          <h2>Substractions is : {d}</h2>
        </>
    )
}

export default Substractions
