import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h1>Welcome to the AI Agency</h1>
          <p>We help small companies in Spain integrate AI into their business.</p>
        </motion.div>
        <div className="hero-3d">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 5, 2]} />
            <Sphere visible args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#64ffda"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
