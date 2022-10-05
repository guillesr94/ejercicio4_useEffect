import React, { useState, useEffect } from 'react'

export default function FunctionCycle() {

    const [tiempo, setTiempo] = useState();
    
    const [edad, setEdad] = useState(0);

    const datos ={
        nombre:"Martín",
        apellidos:"San José"
    };

    const [state, setstate] = useState(0);
    
    
    useEffect(() => {
         setInterval(() =>{
            state  = setEdad(edad+1)
        },1000)
    }, []);

  return (
    <>
    <br />
    <br />
    <br />
    <h1>Componente de tipo funcion</h1>
    <h1>Hora Actual : {tiempo}</h1>
    <h1> {datos.nombre} {datos.apellidos} </h1>
    <h1>Edad: {state} </h1>
    <button  >Click</button>
    </>
  )
}
