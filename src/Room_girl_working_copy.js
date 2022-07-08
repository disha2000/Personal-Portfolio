/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/room_girl_working_copy.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-99.84, -39.91, -82.39]} rotation={[-0.52, -0.8, -0.15]}>
        <mesh geometry={nodes.arrowPoint.geometry} material={nodes.arrowPoint.material} position={[18.7, 14.9, 0]} rotation={[0, 0, -0.87]} />
        <mesh geometry={nodes.arrowBody.geometry} material={nodes.arrowBody.material} position={[0.48, -0.92, -0.55]} rotation={[0, 0, -0.87]} />
      </group>
      <group position={[-7.96, -46.11, 61.51]} rotation={[-0.43, -0.39, 0.3]}>
        <mesh geometry={nodes.crossLeft.geometry} material={nodes.crossLeft.material} rotation={[0, 0, Math.PI / 6]} scale={0.62} />
        <mesh geometry={nodes.crossRight.geometry} material={nodes.crossRight.material} rotation={[0, 0, -Math.PI / 3]} scale={0.62} />
      </group>
      <group position={[288.63, 31.67, -116.11]} rotation={[-0.6, -0.13, 0.36]}>
        <mesh geometry={nodes.magnifBody.geometry} material={nodes.magnifBody.material} position={[1.69, -19.77, 0]} />
        <mesh geometry={nodes.magnifTorus.geometry} material={nodes.magnifTorus.material} position={[0, 18.27, -0.28]} />
      </group>
      <group position={[-117.81, 92.25, -46.84]} rotation={[0, 0, -0.61]}>
        <mesh geometry={nodes.torusSmall.geometry} material={nodes.torusSmall.material} position={[-6.66, -2.66, 0]} rotation={[0, 0, -1.66]} />
        <mesh geometry={nodes.torusBig.geometry} material={nodes.torusBig.material} position={[-6.66, -2.66, 0]} rotation={[0, 0, -0.26]} />
      </group>
      <group position={[238.25, 132.6, -78.44]} rotation={[-0.49, 0.36, -0.08]} scale={0.76}>
        <mesh geometry={nodes.atomBody1.geometry} material={nodes.atomBody1.material} position={[31.84, 7.36, 7.4]} rotation={[0, 0, 1.27]} />
        <mesh geometry={nodes.atomBody2.geometry} material={nodes.atomBody2.material} position={[-52.99, -7.13, 7.4]} rotation={[0, 0, 0.93]} />
        <mesh geometry={nodes.atomBody3.geometry} material={nodes.atomBody3.material} position={[-22.6, -0.24, 7.4]} rotation={[0, 0, -Math.PI / 6]} />
        <mesh geometry={nodes.atomSphere1.geometry} material={nodes.atomSphere1.material} position={[71.36, -5.85, 8.5]} scale={0.52} />
        <mesh geometry={nodes.atomSphere2.geometry} material={nodes.atomSphere2.material} position={[-34.46, -20.56, 8.5]} scale={0.52} />
        <mesh geometry={nodes.atomSphere3.geometry} material={nodes.atomSphere3.material} position={[-11.78, 20.56, 8.5]} scale={0.52} />
        <mesh geometry={nodes.atomSphere4.geometry} material={nodes.atomSphere4.material} position={[-71.36, 5.45, 8.5]} scale={0.52} />
      </group>
      <group position={[175.03, 5.04, -190.02]}>
        <group position={[-78.38, -181.1, 122.81]} rotation={[0, -Math.PI / 6, 0]}>
          <mesh geometry={nodes.Cube_3.geometry} material={nodes.Cube_3.material} position={[-42.8, -31.85, -48.45]} rotation={[0.17, -0.03, -0.17]} />
          <mesh geometry={nodes.Cube_3_1.geometry} material={nodes.Cube_3_1.material} position={[41.57, -32.53, -48.75]} rotation={[0.19, -0.09, 0.17]} />
          <mesh geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material} position={[-43.1, -34.67, 48.83]} rotation={[-0.18, -0.03, -0.17]} />
          <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[41.74, -34.51, 48.55]} rotation={[-0.16, -0.09, 0.17]} />
          <mesh geometry={nodes.Cylinder_3.geometry} material={nodes.Cylinder_3.material} position={[-0.14, -68.35, 0.22]} scale={0.85} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} position={[-1.79, 84.88, 0.22]} scale={0.85} />
          <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[-1.79, 93.36, 0.22]} scale={0.85} />
        </group>
        <group position={[-442.78, -245.69, 115.3]}>
          <group position={[-46.78, 127.46, -60.44]}>
            <mesh geometry={nodes.Cube_3_6.geometry} material={nodes.Cube_3_6.material} position={[-0.15, 0.04, 0.61]} rotation={[-0.04, 0.49, 1.61]} scale={[0.38, 0.77, 0.58]} />
            <mesh geometry={nodes.Cube_3_7.geometry} material={nodes.Cube_3_7.material} position={[2.8, -6.42, 5.6]} rotation={[-0.04, 0.49, 1.61]} scale={[0.38, 0.77, 0.58]} />
          </group>
          <group position={[-41.19, 105.95, -64.04]}>
            <mesh geometry={nodes.Cube_2_6.geometry} material={nodes.Cube_2_6.material} position={[0.14, 0.01, 1]} rotation={[0, 0.74, Math.PI / 2]} scale={[0.59, 0.95, 0.8]} />
            <mesh geometry={nodes.Cube_5.geometry} material={nodes.Cube_5.material} position={[5.38, -9.87, 5.9]} rotation={[0, 0.74, Math.PI / 2]} scale={[0.59, 0.95, 0.8]} />
          </group>
          <group position={[-12.71, 101.21, 32.16]}>
            <mesh geometry={nodes.Cube_4_4.geometry} material={nodes.Cube_4_4.material} position={[0.22, 0.21, 0.74]} rotation={[-0.01, 1.29, 1.56]} scale={[0.39, 0.7, 0.58]} />
            <mesh geometry={nodes.Cube_4_5.geometry} material={nodes.Cube_4_5.material} position={[5.63, -6.5, 1.6]} rotation={[-0.01, 1.29, 1.56]} scale={[0.39, 0.7, 0.58]} />
          </group>
          <group position={[64.43, 135.05, -32.14]} scale={0.48}>
            <mesh geometry={nodes.coffeeStraw.geometry} material={nodes.coffeeStraw.material} position={[-14.56, 41.51, 5.45]} rotation={[0.26, 0.02, 0.08]} />
            <mesh geometry={nodes.coffeeLid.geometry} material={nodes.coffeeLid.material} position={[0, 18.91, 0]} />
            <mesh geometry={nodes.coffeeRing.geometry} material={nodes.coffeeRing.material} position={[-0.39, -30.22, -1.03]} />
            <mesh geometry={nodes.coffeeBody.geometry} material={nodes.coffeeBody.material} position={[-0.39, -37.79, -1.03]} />
          </group>
          <mesh geometry={nodes.Cube_4.geometry} material={nodes.Cube_4.material} position={[-0.36, -8.7, 88.76]} rotation={[-0.17, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cube_3_2.geometry} material={nodes.Cube_3_2.material} position={[85.14, -8.7, 3.26]} rotation={[0, 0, 0.17]} />
          <mesh geometry={nodes.Cube_4_1.geometry} material={nodes.Cube_4_1.material} position={[-0.36, -5.16, -82.24]} rotation={[0.17, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cube_2_1.geometry} material={nodes.Cube_2_1.material} position={[-85.86, -5.16, 3.26]} rotation={[0, 0, -0.17]} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} position={[0, 81.85, 0]} />
        </group>
        <group position={[205.45, 12.8, 57.19]}>
          <mesh geometry={nodes.Sphere_2.geometry} material={nodes.Sphere_2.material} position={[-62.28, 256.7, 49.13]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Cube_7.geometry} material={nodes.Cube_7.material} position={[-51.78, 282.28, 41.49]} rotation={[0, 0.7, Math.PI / 3]} />
          <mesh geometry={nodes.Cube_6.geometry} material={nodes.Cube_6.material} position={[47.95, -248.79, -37.78]} rotation={[0, 0.7, 0]} />
          <mesh geometry={nodes.Cylinder_2_1.geometry} material={nodes.Cylinder_2_1.material} position={[49.13, -333.68, -36.39]} rotation={[0, 0.7, 0]} />
        </group>
        <group position={[151.22, -181.47, 176.31]} scale={0.85}>
          <mesh geometry={nodes.Cube_12.geometry} material={nodes.Cube_12.material} position={[2.69, -4.14, 10.5]} rotation={[2.94, 1.13, -2.96]} />
          <mesh geometry={nodes.Cylinder_2_2.geometry} material={nodes.Cylinder_2_2.material} position={[-6.01, -88.9, 16.97]} />
          <mesh geometry={nodes.Cube_9.geometry} material={nodes.Cube_9.material} position={[-9.73, 111.05, 11.87]} rotation={[0, 0.99, 0]} />
          <mesh geometry={nodes.Cube_8.geometry} material={nodes.Cube_8.material} position={[19.63, 80.03, 5.85]} rotation={[-0.33, -1.3, -0.3]} />
          <mesh geometry={nodes.Cube_10.geometry} material={nodes.Cube_10.material} position={[12.32, 119.61, 29.02]} rotation={[-3.01, -0.73, -3.03]} />
          <mesh geometry={nodes.Cube_11_1.geometry} material={nodes.Cube_11_1.material} position={[-27.62, -3.9, 28.51]} rotation={[-2.72, 1.12, 2.73]} />
          <mesh geometry={nodes.Cube_7_1.geometry} material={nodes.Cube_7_1.material} position={[2.77, 52.94, -5.43]} rotation={[0, 0.26, 0]} />
          <mesh geometry={nodes.Cube_6_1.geometry} material={nodes.Cube_6_1.material} position={[-5.26, -137.14, 16.39]} />
        </group>
        <mesh geometry={nodes.groundCube.geometry} material={nodes.groundCube.material} position={[407.8, -280.54, -223.32]} rotation={[-Math.PI / 2, 0, 0.26]} />
        <mesh geometry={nodes.groundPyramid.geometry} material={nodes.groundPyramid.material} position={[-394.91, -275.6, 211.76]} rotation={[-0.06, -0.14, 0.91]} />
        <mesh geometry={nodes.groundSphere.geometry} material={nodes.groundSphere.material} position={[54.31, -290.76, -214.49]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[67.57, -50.59, 11.79]} rotation={[0, -Math.PI / 6, 0]} scale={[-1.19, 1, 0.55]}>
        <group position={[0.3, 274.13, -46.65]} rotation={[0.12, -0.01, -0.09]}>
          <mesh geometry={nodes.Cube_15.geometry} material={nodes.Cube_15.material} position={[11.41, -1.05, 29.62]} rotation={[0, Math.PI / 9, 0]} />
          <mesh geometry={nodes.Cube_14.geometry} material={nodes.Cube_14.material} position={[-21.35, -1.05, 28.72]} rotation={[0, -Math.PI / 9, 0]} />
          <mesh geometry={nodes.Cube_13.geometry} material={nodes.Cube_13.material} position={[-21.98, 8.29, 29.17]} rotation={[-0.04, -0.41, -0.2]} />
          <mesh geometry={nodes.Cube_12_1.geometry} material={nodes.Cube_12_1.material} position={[12.6, 4.37, 31.35]} rotation={[-0.1, 0.28, 0.2]} />
          <mesh geometry={nodes.Ellipse_2.geometry} material={nodes.Ellipse_2.material} position={[-24.64, -21.51, 23.43]} rotation={[0.26, -0.58, 0]} />
          <mesh geometry={nodes.Ellipse.geometry} material={nodes.Ellipse.material} position={[16.55, -20.69, 24.79]} rotation={[0.26, 0.56, 0]} />
          <mesh geometry={nodes.Cube_9_1.geometry} material={nodes.Cube_9_1.material} position={[1.3, -27.6, 26.37]} rotation={[0.14, -0.46, -2.93]} scale={[0.93, 1, 0.67]} />
          <mesh geometry={nodes.Cube_2_2.geometry} material={nodes.Cube_2_2.material} position={[38.89, -9, -6.07]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material} position={[-46.02, -12.67, -6.07]} />
          <mesh geometry={nodes.hair.geometry} material={nodes.hair.material} position={[-3.26, 39.95, -32.33]} rotation={[-Math.PI / 6, 0, 0]} scale={[1.04, 1, 1]} />
          <mesh geometry={nodes.Sphere_2_1.geometry} material={nodes.Sphere_2_1.material} position={[-2.88, -8.51, -8.67]} />
        </group>
        <group position={[-1.71, 274.53, -50.15]} rotation={[0.22, -0.02, -0.05]} scale={1.22}>
          <mesh geometry={nodes.Cylinder_4.geometry} material={nodes.Cylinder_4.material} position={[0.06, 5.4, 33.96]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Cube_3_3.geometry} material={nodes.Cube_3_3.material} position={[33.6, 1.21, 30.85]} rotation={[0, 1.4, 0]} />
          <mesh geometry={nodes.Cube_2_3.geometry} material={nodes.Cube_2_3.material} position={[-33, 0.81, 30.81]} rotation={[-Math.PI, 1.4, -Math.PI]} />
          <mesh geometry={nodes.Torus_2.geometry} material={nodes.Torus_2.material} position={[18.4, 0.83, 33.98]} rotation={[0, 0, -0.02]} />
          <mesh geometry={nodes.Torus.geometry} material={nodes.Torus.material} position={[-17.94, 1.59, 33.98]} rotation={[0, 0, -0.02]} />
        </group>
        <group position={[20.2, 130.01, 34.64]} rotation={[-2.95, -0.21, -3.09]} scale={[0.56, 0.61, 0.61]}>
          <group position={[3.04, 5.46, -70.8]} rotation={[-0.17, 0, 0]} scale={[1.64, 1.51, 1.51]}>
            <mesh geometry={nodes.S.geometry} material={nodes.S.material} position={[-32, -6.5, 0]} />
            <mesh geometry={nodes.p.geometry} material={nodes.p.material} position={[-18.14, -6.5, 0]} />
            <mesh geometry={nodes.l.geometry} material={nodes.l.material} position={[-5.52, -6.5, 0]} />
            <mesh geometry={nodes.i.geometry} material={nodes.i.material} position={[0.08, -6.5, 0]} />
            <mesh geometry={nodes.i_1.geometry} material={nodes.i_1.material} position={[0.08, -6.5, 0]} />
            <mesh geometry={nodes.n.geometry} material={nodes.n.material} position={[5.68, -6.5, 0]} />
            <mesh geometry={nodes.e.geometry} material={nodes.e.material} position={[18.3, -6.5, 0]} />
          </group>
          <mesh geometry={nodes.computerScreen.geometry} material={nodes.computerScreen.material} position={[0, 4.2, -71.3]} rotation={[-0.17, 0, 0]} />
          <mesh geometry={nodes.computerTrackpad.geometry} material={nodes.computerTrackpad.material} position={[0, -66.01, 62.64]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
          <mesh geometry={nodes.computerKeyboard.geometry} material={nodes.computerKeyboard.material} position={[0, -62.82, -3.88]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
          <mesh geometry={nodes.computerBodyBottom.geometry} material={nodes.computerBodyBottom.material} position={[0, -66.85, 15.84]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.computerBodyTop.geometry} material={nodes.computerBodyTop.material} position={[0, -0.24, -76.29]} rotation={[-0.17, 0, 0]} />
        </group>
        <group position={[-29.31, -168.52, 15.44]} rotation={[0.87, 0, 0.26]} scale={[1.8, 1.76, 1.71]}>
          <mesh geometry={nodes.Torus_2_1.geometry} material={nodes.Torus_2_1.material} position={[0.03, -7.05, 7.24]} rotation={[0, 0, -0.61]} />
          <mesh geometry={nodes.Torus_1.geometry} material={nodes.Torus_1.material} position={[0, -5.6, 2.14]} rotation={[0, 0, -Math.PI / 4]} />
          <mesh geometry={nodes.Cube_4_2.geometry} material={nodes.Cube_4_2.material} position={[0.03, -5.56, -27.01]} rotation={[Math.PI, 0, 0]} scale={0.9} />
          <mesh geometry={nodes.Cube_3_4.geometry} material={nodes.Cube_3_4.material} position={[-0.5, -10.06, 16.62]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Cube_2_4.geometry} material={nodes.Cube_2_4.material} position={[-0.4, -9.73, 0.39]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Rectangle_2.geometry} material={nodes.Rectangle_2.material} position={[-0.45, -20.06, -0.01]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[28.78, -238.18, 130.7]} rotation={[-0.09, 0, 0]} scale={[1.8, 1.66, 1.8]}>
          <mesh geometry={nodes.Torus_2_2.geometry} material={nodes.Torus_2_2.material} position={[0.03, -7.05, 7.24]} rotation={[0, 0, -0.61]} />
          <mesh geometry={nodes.Torus_3.geometry} material={nodes.Torus_3.material} position={[0, -5.6, 2.14]} rotation={[0, 0, -Math.PI / 4]} />
          <mesh geometry={nodes.Cube_4_3.geometry} material={nodes.Cube_4_3.material} position={[0.03, -5.56, -27.01]} rotation={[Math.PI, 0, 0]} scale={0.9} />
          <mesh geometry={nodes.Cube_3_5.geometry} material={nodes.Cube_3_5.material} position={[-0.5, -10.06, 16.62]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Cube_2_5.geometry} material={nodes.Cube_2_5.material} position={[-0.4, -9.73, 0.39]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Rectangle_2_1.geometry} material={nodes.Rectangle_2_1.material} position={[-0.45, -20.06, -0.01]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <mesh geometry={nodes.Cube_11.geometry} material={nodes.Cube_11.material} position={[24.35, 169.23, -43.04]} rotation={[-0.72, 0.22, 0.03]} scale={[1.48, 0.51, 0.46]} />
        <mesh geometry={nodes.pen.geometry} material={nodes.pen.material} position={[-51.59, 235.05, -45.23]} rotation={[0.48, -0.23, -0.21]} />
        <mesh geometry={nodes.裤子.geometry} material={nodes.裤子.material} position={[-3.67, 20.63, -73.2]} />
        <mesh geometry={nodes.Cube_17.geometry} material={nodes.Cube_17.material} position={[-2.19, 116.88, -71.94]} scale={[1, 1, 0.95]} />
        <mesh geometry={nodes.body.geometry} material={nodes.body.material} position={[-5.07, 112.17, -71.74]} />
      </group>
      <pointLight intensity={4} decay={2} distance={4222} color="#6b5dff" position={[316.98, 288.29, -187.75]} />
      <directionalLight intensity={0.9} decay={2} color="#ffc7b9" position={[-533.7, 668.43, 796.96]} rotation={[-0.7, -0.47, 0.5]} />
      <OrthographicCamera makeDefault={false} far={100000} near={-100000} position={[101.48, 41.99, 1047.52]} rotation={[-0.05, 0.03, 0]} />
      <mesh geometry={nodes.Floor.geometry} material={nodes.Floor.material} position={[122.58, -329.82, -359.33]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/room_girl_working_copy.gltf')
