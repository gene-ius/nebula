import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber/native'
import { Instances, Instance, OrbitControls, Environment, useGLTF } from '@react-three/drei/native'


export default function Nebula({ data, range }) {
    const ref = useRef(null)
    useFrame((state, delta) => {
        ref.current.rotation.y += 0.005
    })
    
    return (
      <Instances ref={ref} range={range} >
        <meshNormalMaterial/>
        <dodecahedronGeometry args={[0.5]}/>
          {data.map((props, i) => (
            <Node key={i} color={THREE.Col} {...props} />
          ))}
      </Instances>
    )
  }
  
  function Node({ random, color = new THREE.Color(), ...props }) {
    const ref = useRef(null)
    const [hovered, setHover] = useState(false)
    useFrame((state) => {
      const t = state.clock.getElapsedTime() + random * 10000
      ref.current.rotation.set(Math.cos(t / 2) / 2, Math.sin(t / 3) / 2, Math.cos(t / 1.5) / 2)
      ref.current.position.y = Math.sin(t / 1.5) / 2
      ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1)
      // ref.current.color.lerp(color.set(hovered ? 'red' : 'white'), hovered ? 1 : 0.1)
    })
    return (
      <group {...props}>
        <Instance ref={ref} onPointerOver={() => {setHover(true)}} onPointerOut={() => {setHover(false)}} />
      </group>
    )
  }
  