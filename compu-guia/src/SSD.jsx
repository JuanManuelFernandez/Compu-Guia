import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import './SSD.css';

function SSDModel() {
    const { scene } = useGLTF('/Modelos/SSD.glb');

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
            rotation={[0, Math.PI, 0]}
        />
    );
}

function SSD() {
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

                <div className="ContenedorSuperiorSSD">
                    <h1>Almacenamiento</h1>
                    <p className='Explicacion'>
                        El disco de almacenamiento es el componente encargado de guardar de manera permanente todos los datos de la computadora: el sistema operativo, programas, documentos, fotos, videos y cualquier archivo que utilices.
                    </p>

                    <p className='Explicacion'>A diferencia de la RAM, que borra su contenido al apagar la PC, el almacenamiento conserva la información incluso cuando la computadora está apagada.</p>
                </div>

                <div className='ContenedorModeloSSD'>
                <Canvas camera={{ position: [5, 10, 0], fov: 10 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <SSDModel />
                    <OrbitControls enableZoom={false}/>
                    <Environment preset="city" />
                </Canvas>
                </div>
            </section>
        </>
    )
}

export default SSD;