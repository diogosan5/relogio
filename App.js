import React, { useEffect, useState } from 'react';

export default function App() {

  const[hora, setHora]= useState(23)
  const[minutos, setMinutos]= useState(59)
  const[segundos, setSegundos]= useState(55)

 
    useEffect(() =>{
      const interval = setInterval(() => {
        
        if(hora == 24){
          setHora(0)
          setMinutos(0)
          setSegundos(0);
        }
        setSegundos(segundos+1)
        if(segundos == 59){
          setSegundos(0);
          setMinutos(minutos+1);
          if(minutos == 59){
            setMinutos(0);
            setHora(hora+1);        
          }
        }
    },1000);

    return() => clearInterval(interval);
  });
  return(
    <div>
      <h1 style={{textAlign:'center'}}>RELÓGIO</h1>
      <h2 style={{textAlign:'center'}}>{hora}:{minutos}:{segundos}</h2>
    </div>
  );
};