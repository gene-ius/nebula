import React, { FunctionComponent , useRef, useState} from "react"
import { useFrame, ThreeElements } from "@react-three/fiber/native"


const TestBox: FunctionComponent<ThreeElements['mesh']> = (props) => {
    const mesh = useRef(null)
    const group = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
    
    return (
        <group ref={group}>
            <mesh
            {...props}
            ref={mesh}
            scale={active ? 8 : 4}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} />
      </mesh>
        </group>
      
    )
  }

export default TestBox
  