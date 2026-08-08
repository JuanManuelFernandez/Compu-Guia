import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import './CPU.css';

function CPUModel() {
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

function CPU() {
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

                <div className="ContenedorSuperiorCPU">
                    <h1>CPU</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum fugit aliquam error eum ea beatae omnis sapiente quo facere! Cum fugit iure fugiat rerum natus totam provident veniam, qui ratione.</p>
                </div>

                <div className='ContenedorModelo'>
                <Canvas camera={{ position: [0, 10, 0], fov: 20 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <CPUModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
                </div>
            </section>
        </>
    )
}

export default CPU;