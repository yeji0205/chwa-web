/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useScroll, ScrollControls, Scroll, Image, Text } from '@react-three/drei';
import logo from '../../assets/logo.svg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Gumbo from '../../assets/gumbo.glb'
import Plate from '../../assets/plate.glb'

import gsap from 'gsap';

const Sausage_model = (props) => {

  const { nodes, materials } = useGLTF(Gumbo);
  const scroll = useScroll()

  const ref = useRef()
  const tl = useRef()  // gsap Timeline
  const sausageRef = useRef()
  const shrimpRef_1 = useRef()
  const shrimpRef_2 = useRef()
  const shrimpRef_3 = useRef()
  const vegRef_1 = useRef()
  const vegRef_2 = useRef()

  tl.current = gsap.timeline()

  useFrame(() => {
    tl.current.progress(scroll.offset * tl.current.duration());
  })

  // synchronized rendering
  // will get called whenevr the states get changed
  // useEffect block runs after the initial render of the component.
  useLayoutEffect(() => {
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -2.3,
      },0);

    tl.current.to(
      sausageRef.current.rotation,
      {
        duration: 2,
        x: -Math.PI / 2,
      },0.3);
    tl.current.to(
      sausageRef.current.position,
      {
        duration: 2,
        z: 1,
        x: 3.5,
        y: 3.5,
      },0);

    tl.current.to(
      shrimpRef_1.current.rotation,
      {
        duration: 1,
        z: -Math.PI / 9,
      },0);
    tl.current.to(
      shrimpRef_1.current.position,
      {
        duration: 2,
        z: -0.5,
        x: -1,
        y: -0.5,
      },0);

      tl.current.to(
        shrimpRef_2.current.rotation,
        {
          duration: 1,
          y: Math.PI / 1.4,
          x: -Math.PI / 4,
        },0);
      tl.current.to(
        shrimpRef_2.current.position,
        {
          duration: 2,
          y: 0.5,
          x: 3,
        },0);

      tl.current.to(
        shrimpRef_3.current.rotation,
        {
          duration: 2,
          x: Math.PI/3
        },0);
      tl.current.to(
        shrimpRef_3.current.position,
        {
          duration: 1,
          y: 2,
          z: 2,
          x: -2.5,
        },0);

      tl.current.to(
        vegRef_1.current.rotation,
        {
          duration: 2,
          x: -Math.PI /2.5,
          z: Math.PI / 4,
        },0);
      tl.current.to(
        vegRef_1.current.position,
        {
          duration: 1,
          z: 1.5,
          x: 0.5,
          y: 7,
        },0);

      tl.current.to(
        vegRef_2.current.rotation,
        {
          duration: 1,
          y: Math.PI/6,
          x: Math.PI/1,
        },0);
      tl.current.to(
        vegRef_2.current.position,
        {
          duration: 2,
          z: 1.0,
          y: 6.0,
          x: -1
        },0);
  })

  return (
      <group {...props} dispose={null} ref={ref}>
        <group position={[-4, 4, -0.128]}>
          <group ref={sausageRef}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              rotation={[-Math.PI/60, Math.PI/2, -Math.PI/1.7]}>
              <meshToonMaterial color={'#f94449'} />
            </mesh>
          </group>
        </group>

        <group position={[1.5, 8, 2]}>
          <group ref={shrimpRef_1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere001.geometry}
              material={materials["Material.001"]}
              rotation={[Math.PI/2, -Math.PI/2, 0]}
              scale={[0.267, 0.723, 0.243]}>
                <meshToonMaterial color={'#f94449'} />
            </mesh>
          </group>
        </group>

        <group position={[ -3, 8, -2]}>
          <group ref={shrimpRef_2}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002.geometry}
            material={materials["Material.001"]}
            rotation={[-40,0,90]}
            scale={[0.267, 0.723, 0.243]}>
            <meshToonMaterial color={'#f94449'} />
            </mesh>
          </group>
        </group>

        <group position={[4, 4, -1]}>
          <group ref={shrimpRef_3}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere003.geometry}
              material={materials["Material.001"]}
              rotation={[60, 130, 0]}
              scale={[0.267, 0.723, 0.243]}>
              <meshToonMaterial color={'#f94449'} />
            </mesh>
          </group>
        </group>
        <group position={[-1, 0, -0,5]}>
          <group ref={vegRef_1}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve.geometry}
            material={materials["Material.001"]}

            rotation={[-Math.PI/1.5, -Math.PI * 1.1, -Math.PI/2]}>
            <meshToonMaterial color={'#f94449'} />
            </mesh>
          </group>
        </group>
        <group position={[1.5, 1.5, 2]}>
          <group ref={vegRef_2} >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve001.geometry}
              material={materials["Material.001"]}
              rotation={[0, 90, 90]}
              >
              <meshToonMaterial color={'#f94449'} />
            </mesh>
          </group>
        </group>
    </group>
  );
}
useGLTF.preload("./gumbo.glb");


const Plate_model = (props) => {
  const { nodes, materials } = useGLTF(Plate);
  const plateRef = useRef()
  const tl = useRef()
  const scroll = useScroll()
  tl.current = gsap.timeline()

  useFrame(() => {
    tl.current.progress(scroll.offset * tl.current.duration());
  })

  useLayoutEffect(() => {
    tl.current.to(
      plateRef.current.position,
      {
        duration: 0.5,
        y: -1.0,
      },-1);
  })

  return (
    <group {...props} dispose={null} ref={plateRef}>
      <group position={[0, 0.872, 0]} rotation={[-Math.PI, 0, 0]} scale={1.36}>
        <mesh
          transparent
          castShadow
          receiveShadow
          geometry={nodes.Cone_1.geometry}>
					<meshToonMaterial color={'#ffffff'} transparent />
					</mesh>
      </group>
      <mesh
        transparent
        castShadow
        receiveShadow
        geometry={nodes.Cone002.geometry}
        material={materials["Material.002"]}
        position={[0, 0.046, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={1.36}>
        <meshToonMaterial color={'#283820'} transparent />
    </mesh>
      <mesh
        transparent
        castShadow
        receiveShadow
        geometry={nodes.Cone003.geometry}
        position={[0, 0.39, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={2.179}>
        <meshToonMaterial color={'#DDCAB3'} transparent />
      </mesh>
    </group>
  );
}
useGLTF.preload("/plate.glb");

const Logo= () => {
  const refImg = useRef()
  const tl = useRef()
  const scroll = useScroll()
  tl.current = gsap.timeline()
  const { viewport } = useThree()

  useFrame(() => {
    tl.current.progress(scroll.offset * tl.current.duration());
    refImg.current.material.transparent = 0;
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() =>
    tl.current.to(refImg.current.position,
      {
        duration: 2,
        y: 2.3
      },0))
      return () => ctx.revert()
  })

  return (
    <>
      <Image ref={refImg} url={logo} position={[0, -3, -2]}
            scale={(viewport.width) > 4.0 ? [viewport.width/3, viewport.width/4, 1] : [viewport.width/2, viewport.width/3, 1]} />
    </>
  )
}

const Tryout= () => {
  const refText = useRef()
  const tl = useRef()
  const scroll = useScroll()
  tl.current = gsap.timeline()

  useFrame(() => {
    tl.current.progress(scroll.offset * tl.current.duration());
    console.log(refText.current)
  })

  useLayoutEffect(() => {
    tl.current.to(refText.current.material,
      {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        ease: "power4.inout"
      })
  })

  return (
    <>
      <Text ref={refText} color='black' fontSize={0.15} position={[0, 1.2, 0.5]} font='/src/font/dovemayo.otf' >
        검보 한 그릇 하실래요?
        <meshStandardMaterial attach="material" opacity={0} />
      </Text>
    </>
  )
}

const ScrollIndicator = () => {
  const scrollRef1 = useRef()
  const tl = useRef()
  tl.current = gsap.timeline()

  useLayoutEffect(() => {
      tl.current
      .to(scrollRef1.current,{
          repeat: 5,
          yoyo: true,
          y:5,
        },)
      .to(scrollRef1.current,{
          ease: "power4.inout",
          opacity: 0,
          duration: 1,
        })
    },[])

  return(
    <>
      <p ref={scrollRef1}
        className='absolute font-bold sm:text-lg text-md font-dovemayo text-center opacity-1 md:top-[75vh] top-[55vh]'>
          Scroll <br /><KeyboardDoubleArrowDownIcon />
      </p>
    </>
  )
}


const Experience = () => {

  return (
    <div className='relative justify-center w-full md:h-[150vh] h-[100vh] mx-auto' id='home' >
    <Canvas frameloop='demand' shadows flat={true}
          camera={{position: [0, 0.6, 9.5], rotation:[-0.1, 0, 0], fov:45}} className='md:top-0 top-[12%] overflow-hidden'>
          <Suspense fallback={null}>
            <directionalLight intensity={1.0} color="white" position={[-5, 15, 10]} />
            <directionalLight intensity={0.95} position={[6.5, 15, 0]} />
            <ambientLight intensity={1.0} />
            {/* <OrbitControls enableZoom={false} /> */}
            <ScrollControls pages={1.5} damping={0.6} distance={2}>
              <Sausage_model scale={0.3} position={[0, 0.2, 0]}/>
              <Plate_model position={[0, -3.5, 0]} rotation={[Math.PI/14,0,0]} scale={0.8} />
              <Logo />
              <Tryout />
              <Scroll html className='flex w-[100%] justify-center'>
                <ScrollIndicator />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
    </div>
  )
}


export default Experience