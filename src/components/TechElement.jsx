import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

function Model() {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.cos(t / 4) / 2;
        meshRef.current.rotation.y = Math.sin(t / 4) / 2;
        meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
    });

    return (
        <mesh ref={meshRef} scale={1.8}>
            <icosahedronGeometry args={[1, 0]} />
            <MeshDistortMaterial
                color="#64ffda"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                emissive="#112244"
                emissiveIntensity={0.2} // Slight glow
            />
        </mesh>
    );
}

const TechElement = () => {
    return (
        <div style={{ height: '150px', width: '100%', marginTop: '1rem', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={1} />
                <Float speed={4} rotationIntensity={1} floatIntensity={1}>
                    <Model />
                </Float>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={4} />
            </Canvas>
        </div>
    );
};

export default TechElement;
