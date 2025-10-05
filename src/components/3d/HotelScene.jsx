import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Plane } from '@react-three/drei';

const HotelScene = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Hotel Building */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <Box args={[4, 3, 2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#F9F5E7" />
        </Box>
      </Float>

      {/* Pool */}
      <Plane args={[6, 3]} position={[0, -1.5, 1]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#4A90E2" transparent opacity={0.7} />
      </Plane>

      {/* Palm Trees */}
      <Float speed={2} rotationIntensity={0.2}>
        <group position={[-3, 0, 2]}>
          <Box args={[0.2, 4, 0.2]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          <Sphere args={[0.8]} position={[0, 2.5, 0]}>
            <meshStandardMaterial color="#228B22" />
          </Sphere>
        </group>
      </Float>

      <Float speed={1.5} rotationIntensity={0.15}>
        <group position={[3, 0, 2]}>
          <Box args={[0.2, 4, 0.2]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          <Sphere args={[0.8]} position={[0, 2.5, 0]}>
            <meshStandardMaterial color="#228B22" />
          </Sphere>
        </group>
      </Float>

      {/* Ground */}
      <Plane args={[20, 20]} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#F4A460" />
      </Plane>
    </group>
  );
};

export default HotelScene;