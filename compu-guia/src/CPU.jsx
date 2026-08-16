import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import { useNavigate } from 'react-router-dom';
import './CPU.css';

function CPUModel() {
    const { scene } = useGLTF('/Modelos/CPU.glb');

    useEffect(() => {
        const box = new Box3().setFromObject(scene);
        const center = box.getCenter(new Vector3());

        scene.position.sub(center);
    }, [scene]);

    return (
        <primitive
            object={scene}
            scale={0.5}
            position={[0, 0, 0]}
            rotation={[0, Math.PI, 0, 0]}
        />
    );
}

function CPU() {
    const navigate = useNavigate();

    return (
        <>
            <section className="Superior">
                <div className="ContenedorNavBar">
                    <navbar className="NavBar">
                        <img className="Icono" src='src/assets/Icono.png' alt="Icono"></img>
                        <div className='ContenedorBtns'>
                            <button className='BtnNav' onClick={() => navigate('/', { state: { scrollTo: 'inicio'}})}>Inicio</button>
                            <button className='BtnNav' onClick={() => navigate('/', { state: { scrollTo: 'componentes'}})}>Componentes</button>
                            <button className='BtnNav' onClick={() => navigate('/', { state: { scrollTo: 'guia'}})}>Guía</button>
                        </div>
                    </navbar>
                </div>
                <div className="ContenedorSuperiorCPU">
                    <h1>CPU</h1>
                    <p className='Explicacion'>La Unidad Central de Procesamiento es conocido como el cerebro de la computadora.
                        Su función principal es interpretar y ejecutar las instrucciones de los programas y del sistema operativo. 
                        Cada vez que se abre una aplicación, 
                        el CPU procesa millones de operaciones por segundo para que todo funcione de manera fluida.
                    </p>
                </div>
            </section>


            <div className='ContenedorModeloCPU'>
                <Canvas camera={{ position: [0, 10, 0], fov: 15 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <CPUModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
            </div>
        </>
    )
}

export default CPU;