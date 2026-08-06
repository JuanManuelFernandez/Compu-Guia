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
            <img className="ImgPC" src='src/assets/PC2.png' alt="PC"></img>
          </div>
        </div>
      </section>

      <section className="Central">
        <h2 className="TituloComponentes">Selecciona un componente</h2>

        <div className="ContenedorComponentes">
          <div className="Fila1">
            <button className="BtnComponente">
              <div className="TarjetaComponente">
                <div className="SuperiorTarjeta">
                  <img className="IconoComponente" src='src/assets/Componentes/CPU.png' alt="CPU"></img>
                  <div className="TextoTarjeta">
                    <span className="NombreComponente">CPU</span>
                    <p className="DescripcionComponente">El cerebro de tu computadora</p>
                  </div>
                </div>
              </div>
            </button>

            <button className="BtnComponente">
              <div className="TarjetaComponente">
                <div className="SuperiorTarjeta">
                  <img className="IconoGPU" src='src/assets/Componentes/GPU.png' alt="GPU"></img>
                  <div className="TextoTarjeta">
                    <span className="NombreComponente">GPU</span>
                    <p className="DescripcionComponente">Gráficos y visuales</p>
                  </div>
                </div>
              </div>
            </button>

            <button className="BtnComponente">
              <div className="TarjetaComponente">
                <div className="SuperiorTarjeta">
                  <img className="IconoComponente" src='src/assets/Componentes/RAM.png' alt="RAM"></img>
                  <div className="TextoTarjeta">
                    <span className="NombreComponente">RAM</span>
                    <p className="DescripcionComponente">Memoria de acceso aleatorio</p>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="Fila2">
            <button className="BtnComponente">
              <div className="TarjetaComponente">
                <div className="SuperiorTarjeta">
                  <img className="IconoComponente" src='src/assets/Componentes/MOTHER.png' alt="MOTHER"></img>
                  <div className="TextoTarjeta">
                    <span className="NombreComponente">Placa madre</span>
                    <p className="DescripcionComponente">La placa principal de <br></br>la computadora</p>
                  </div>
                </div>
              </div>
            </button>

            <button className="BtnComponente">
              <div className="TarjetaComponente">
                <div className="SuperiorTarjeta">
                  <img className="IconoComponente" src='src/assets/Componentes/SSD.png' alt="SSD"></img>
                  <div className="TextoTarjeta">
                    <span className="NombreComponente">Almacenamiento</span>
                    <p className="DescripcionComponente">Almacenamiento de datos</p>
                  </div>
                </div>
              </div>
            </button>

            <button className="BtnComponente">
              <div className="TarjetaComponente">
                <div className="SuperiorTarjeta">
                  <img className="IconoFuente" src='src/assets/Componentes/FUENTE.png' alt="FUENTE"></img>
                  <div className="TextoTarjeta">
                    <span className="NombreComponente">Fuente de poder</span>
                    <p className="DescripcionComponente">Suministra energía <br></br>a la computadora</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
