import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import Personas from './components/Personas'
import PersonaDetalle from './components/PersonaDetalle'

import "./style/style.css"

const App = () => {

  const [personaSeleccionada, setPersonaSeleccionada] = useState(null)

  return (
    <Fragment>
      <Header/>
      <main className='container-fluid'>
        <div className='row mt-4'>
          <Personas setPersonaSeleccionada={setPersonaSeleccionada} />
          <PersonaDetalle personaSeleccionada={personaSeleccionada} />
        </div>
      </main>
    </Fragment>
  )
}

export default App