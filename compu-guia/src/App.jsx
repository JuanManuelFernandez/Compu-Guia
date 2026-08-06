import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="Superior">
        <div className="ContenedorNavBar">
          <navbar className="NavBar">
            <img className="Icono" src='src/assets/Icono.png' alt="Icono"></img>
            <div className='ContenedorBtns'>
              <button className='BtnNav'>Inicio</button>
              <button className='BtnNav'>Componentes</button>
              <button className='BtnNav'>Guía</button>
            </div>
          </navbar>
        </div>

        <div className="ContenedorSuperior">
          <div className="ColumnaIzq">
            <h1 className="Titulo">EXPLORA EL MUNDO DE LOS <br></br> COMPONENTES DE TU PC</h1>
            <span className="Subtitulo">Descubre qué hace cada pieza escencial de tu computadora</span>
          </div>
          
          <div className="ColumnaDer">
            <img className="ImgPC" src='src/assets/PC.png' alt="PC"></img>
          </div>
        </div>

      </section>
    </>
  )
}

export default App
