import React, { useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

function Cube() {
  const groupRef = useRef();

  // create the cube geometry
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // create the cube material
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // create the cube mesh
  const mesh = new THREE.Mesh(geometry, material);

  // add the cube mesh to a group
  groupRef.current = new THREE.Group();
  groupRef.current.add(mesh);

  // add text to each vertex
  const positions = geometry.vertices;
  for (let i = 0; i < positions.length; i++) {
    const vertex = positions[i];
    const textGeometry = new TextGeometry('Hello World');
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.copy(vertex);
    groupRef.current.add(textMesh);
  }

  return <mesh ref={groupRef} />;
}

export default Cube;
