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
      position={[0.5, 0.2, 0]}
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
                    <p className='Explicacion'>La Placa Madre es el componente principal de la computadora, ya que conecta y permite la comunicación entre todos los demás dispositivos: CPU, RAM, GPU, almacenamiento y periféricos.
                        Funciona como una gran plataforma donde se integran los circuitos y conectores que hacen posible que cada pieza trabaje en conjunto.
                    </p>
                </div>
            </section>

            <div className='ContenedorModeloMother'>
                <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <MotherModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
            </div>
        </>
    )
}

export default MOTHER;