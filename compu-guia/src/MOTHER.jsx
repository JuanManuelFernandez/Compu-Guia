import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import './MOTHER.css';

function MotherModel() {
  const { scene } = useGLTF('/Modelos/MOTHER.glb'); 
  return (
    <primitive 
      object={scene} 
      scale={0.5} 
      position={[0.5, 0.3, 0]}
      rotation={[0, Math.PI, 0, 0]}
    />
  );
}

function MOTHER() {
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

                <div className="ContenedorSuperiorMother">
                    <h1>Placa Madre</h1>
                    <p className='Explicacion'>La Memoria de Acceso Aleatorio es el componente encargado de almacenar de manera temporal los datos y programas que la computadora está utilizando en ese momento.
                        A diferencia del disco duro o SSD, no guarda información de forma permanente: su contenido se borra cuando apagás la PC.
                    </p>

                    <p className='Explicacion'>Gracias a la misma, el sistema puede acceder rápidamente a la información que necesita, lo que permite que las aplicaciones se ejecuten de manera fluida y que puedas trabajar con varios programas abiertos al mismo tiempo.</p>

                </div>

                <div className='ContenedorModeloMother'>
                <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <MotherModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
                </div>
            </section>
        </>
    )
}

export default MOTHER;