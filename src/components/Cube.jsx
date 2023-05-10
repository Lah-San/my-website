import React, { useRef, useEffect } from 'react';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import styled from 'styled-components';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Cube = () => {
  const groupRef = useRef();
  const material = new THREE.MeshPhongMaterial({ color: 0x2bc0c5 });
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
  const box = new THREE.BoxHelper(new THREE.Mesh(geometry, material));

  // Add dots to vertices
  const dotGeometry = new THREE.SphereGeometry(0.05, 8, 8);
  const dotMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
  box.geometry.vertices.forEach((vertex) => {
    const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);
    dotMesh.position.copy(vertex);
    groupRef.current.add(dotMesh);
  });

  const mesh = new THREE.Mesh(geometry, material);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.add(mesh);
    }
  }, [groupRef]);

  return (
    <group ref={groupRef}>
      <mesh>
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <color attach="background" args={['lightblue']} />
            <material />
            {/* <Text ref={textRef} fontSize={1} color="#555" /> */}
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default Cube;
