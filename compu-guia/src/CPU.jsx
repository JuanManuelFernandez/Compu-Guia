import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './CPU.css';

function CPUModel() {
  return (
    <mesh> 
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
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

                <div style={{ height: "400px" }}>
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <CPUModel />
                        <OrbitControls />
                    </Canvas>
                </div>
            </section>
        </>
    )
}

export default CPU;