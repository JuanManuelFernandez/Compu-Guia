import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import { useNavigate } from 'react-router-dom';
import './FUENTE.css';

function FUENTEModel() {
    const { scene } = useGLTF('/Modelos/FUENTE.glb');

    useEffect(() => {
        const box = new Box3().setFromObject(scene);
        const center = box.getCenter(new Vector3());
        scene.position.sub(center);

        scene.position.y += 0;
    }, [scene]);

    return (
        <primitive
            object={scene}
            scale={0.5}
            rotation={[0, Math.PI, 0, 0]}
        />
    );
}

function FUENTE() {
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

                <div className="ContenedorSuperiorFUENTE">
                    <h1>Fuente de Poder</h1>
                    <p className='Explicacion'>
                        La fuente de poder (PSU) es el componente encargado de suministrar energía eléctrica a todos los demas componentes de la computadora.
                        Convierte la corriente alterna de la red eléctrica en corriente continua, que es la que necesitan los circuitos internos de la PC para funcionar de manera estable y segura.
                    </p>
                </div>
            </section>


            <div className='ContenedorModeloFUENTE'>
                <Canvas camera={{ position: [5, 5, 5], fov: 15 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FUENTEModel />
                    <OrbitControls enableZoom={false} position={[0, 0, 0]}/>
                    <Environment preset="city" />
                </Canvas>
            </div>
        </>
    )
}

export default FUENTE;