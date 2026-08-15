import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { Box3, Vector3 } from 'three';
import './RAM.css';

function RamModel() {
    const { scene } = useGLTF('/Modelos/RAM.glb');

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


function RAM() {
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

                <div className="ContenedorSuperiorRam">
                    <h1>RAM</h1>
                    <p className='Explicacion'>La Memoria de Acceso Aleatorio es el componente encargado de almacenar de manera temporal los datos y programas que la computadora está utilizando en ese momento.
                        A diferencia del disco duro o SSD, no guarda información de forma permanente: su contenido se borra cuando apagás la PC.
                    </p>

                    <p className='Explicacion'>Gracias a la misma, el sistema puede acceder rápidamente a la información que necesita, lo que permite que las aplicaciones se ejecuten de manera fluida y que puedas trabajar con varios programas abiertos al mismo tiempo.</p>

                </div>

                <div className='ContenedorModeloRam'>
                <Canvas camera={{ position: [0, 0, 10], fov: 15 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RamModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
                </div>
            </section>
        </>
    )
}

export default RAM;