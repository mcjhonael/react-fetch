import React, { useEffect, useState } from "react";
import { getPersonas } from "../services/services";
import Persona from "./Persona";

const Personas = ({ setPersonaSeleccionada }) => {
  // recuerda que una funcion tiene 2 parte la declaracion y la llamada de esa funcion no olvidarse nunca el getPersonas es solo declaracion y el getPersonas() es el llamado a esa funcion que va permitir que se ejecute dicha funcion

  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    // colocar aqui el codigo que no se ejecutara necesariamente toda vez que una variable de estado sea actualizada
    // arreglo de variables que cuando sean modificadas, provocan que la funcion naranja se ejecute nuevamente
    getPersonas(page).then((rpta) => {
      setPersonas(rpta.data);
      // setPage(rpta.page)
    });

    //cuando el arreglo de dependencias esta vacio el useEffect solo sez ejecutara 1 sola vez
    //NOTA: useEffect se ejecuta por lo menos, 1 vez (cuando el componente carga por 1ra vez)
    //! NOTA: cuando exista una o mas variables en el arreglo de dependencias la funcion dentro de useEffect, se ejecutara cada vez que cualquiera de las variables dependientes, sufran una modificacion a su valor anterior.

  }, [page]);

  const anterior=()=>{
    setPage(page-1)
  }
  const siguiente=()=>{
    setPage(page+1)
  }
  return (
    <div className="col-md-8">
      <div className="row justify-content-center mb-3 ">
        <div className="col-md-2">
          <button className="btn btn-danger btn-block" onClick={anterior}>Anterior</button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger btn-block" onClick={siguiente}>Siguiente</button>
        </div>
      </div>  
        <div className="row">
          {personas.map((objPersona) => {
            return (
              <Persona
                setPersonaSeleccionada={setPersonaSeleccionada}
                objPersona={objPersona}
                key={objPersona.id}
              />
            );
          })}
        </div>
    </div>
  );
};

export default Personas;
