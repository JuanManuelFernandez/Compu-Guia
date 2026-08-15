import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import './GPU.css';

function GPUModel() {
  const { scene } = useGLTF('/Modelos/GPU.glb'); 
  return (
    <primitive 
      object={scene} 
      scale={0.5} 
      position={[0, -0.5, 0]} 
      rotation={[0, Math.PI, 0, 0]}
    />
  );
}

function GPU() {
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

                <div className="ContenedorSuperiorGPU">
                    <h1>GPU</h1>
                    <p className='Explicacion'>La Unidad de Procesamiento Gráfico es el componente encargado de procesar y renderizar imágenes, videos y animaciones en la computadora. Su función principal es liberar a la CPU de las tareas gráficas más complejas, permitiendo un mejor rendimiento general del sistema.</p>
                </div>

                <div className='ContenedorModeloGPU'>
                <Canvas camera={{ position: [0, 0, 10], fov: 15 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <GPUModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
                </div>
            </section>
        </>
    )
}

export default GPU;