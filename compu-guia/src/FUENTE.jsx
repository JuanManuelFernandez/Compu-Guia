import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import './FUENTE.css';

function FUENTEModel() {
    const { scene } = useGLTF('/Modelos/FUENTE.glb');

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

function FUENTE() {
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

                <div className="ContenedorSuperiorFUENTE">
                    <h1>Placa Madre</h1>
                    <p className='Explicacion'>La Placa Madre es el componente principal de la computadora, ya que conecta y permite la comunicación entre todos los demás dispositivos: CPU, RAM, GPU, almacenamiento y periféricos.
                        Funciona como una gran plataforma donde se integran los circuitos y conectores que hacen posible que cada pieza trabaje en conjunto.
                    </p>
                </div>

                <div className='ContenedorModeloFUENTE'>
                <Canvas camera={{ position: [0, 0, 10], fov: 20 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FUENTEModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
                </div>
            </section>
        </>
    )
}

export default FUENTE;