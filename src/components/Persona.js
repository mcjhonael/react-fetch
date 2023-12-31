import React from "react";

const Persona = ({ objPersona, setPersonaSeleccionada }) => {
    //! al inicio setPersonaSeleccionada se muestra como una funcion pero cuando ya tiene un dato se mostara como un valor undefined
    // console.log(setPersonaSeleccionada);
    // setPersonaSeleccionada(objPersona)

  const seleccionarPersona = () => {
    setPersonaSeleccionada(objPersona);
  };
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow">
        <img src={objPersona.avatar} alt="" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            <strong>Nombre: </strong>
            {objPersona.first_name}
          </p>
          <p>
            <strong>Apellido: </strong>
            {objPersona.last_name}
          </p>
          <p>
            <strong>email: </strong>
            {objPersona.email}
          </p>
            {
                setPersonaSeleccionada ? 
                (<button
                    className="btn btn-outline-primary btn-block"
                    onClick={seleccionarPersona}
                  >
                    Ver mas
                  </button>
                  
                  )
                  :
                  null
            }

        </div>
      </div>
    </div>
  );
};

export default Persona;
