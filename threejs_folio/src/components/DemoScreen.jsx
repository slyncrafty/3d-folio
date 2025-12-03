import React, { useRef } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const modelLoc = '/models/computer-modified.glb';

export function DemoScreen(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF(modelLoc);
	const tex = useVideoTexture(
		props.texture ? props.texture : '/images/textures/screen.mp4'
	);
	// const tex = useTexture('/images/textures/uv_grid.png');
	useGSAP(() => {
		gsap.from(group.current.rotation, {
			y: Math.PI / 2,
			duration: 1,
			ease: 'power3.out',
		});
	}, [tex]);
	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[Math.PI / 2, 0, 0.033]}>
				<group rotation={[-Math.PI, 0, 0]} scale={0.01}>
					<group
						position={[-3.449, 33.381, -15.659]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[0.701, 0.468, 0.701]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['001_computer_0'].geometry}
							material={materials.computer}
							position={[-0.121, 0, -1.666]}
						/>
					</group>
					<group
						position={[-3.449, 33.381, -18.903]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[0.701, 0.468, 0.701]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['004_computer_0'].geometry}
							material={materials.computer}
							position={[-0.121, 0, -1.666]}
						/>
					</group>
					<group
						position={[11.538, 28.748, -3.778]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[0.701, 0.468, 0.701]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['005_computer_0'].geometry}
							material={materials.computer}
							position={[-0.121, 0, -1.666]}
						/>
					</group>
					<group
						position={[16.494, 33.381, -17.776]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[0.701, 0.468, 0.701]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['006_computer_0'].geometry}
							material={materials.computer}
							position={[-0.121, 0, -1.666]}
						/>
					</group>
					<group
						position={[16.494, 33.381, -19.056]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[0.701, 0.468, 0.701]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['007_computer_0'].geometry}
							material={materials.computer}
							position={[-0.121, 0, -1.666]}
						/>
					</group>
					<group
						position={[16.494, 33.381, -16.592]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[0.701, 0.468, 0.701]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['008_computer_0'].geometry}
							material={materials.computer}
							position={[-0.121, 0, -1.666]}
						/>
					</group>
					<group
						position={[0.133, 34.921, -17.623]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[1, 0.667, 1.056]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Box056_computer_0.geometry}
							material={materials.computer}
							position={[0.106, 0, -1.666]}
						/>
					</group>
					<group
						position={[11.495, 30.657, -5.482]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[1, 0.667, 1.056]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Box106_computer_0.geometry}
							material={materials.computer}
							position={[0.106, 0, -1.666]}
						/>
					</group>
					<group
						position={[26.419, -5.489, -20.985]}
						rotation={[-Math.PI, 0, 0]}
						scale={[1.406, 1.406, 0.667]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder005_computer_0.geometry}
							material={materials.computer}
							position={[-0.004, 0, -1.261]}
						/>
					</group>
					<group
						position={[-7.387, -5.489, -20.985]}
						rotation={[-Math.PI, 0, 0]}
						scale={[1.406, 1.406, 0.667]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder006_computer_0.geometry}
							material={materials.computer}
							position={[-0.004, 0, -1.261]}
						/>
					</group>
					<group
						position={[-3.449, 33.381, -17.623]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[0.701, 0.468, 0.701]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes._computer_0.geometry}
							material={materials.computer}
							position={[-0.121, 0, -1.666]}
						/>
					</group>
					<group
						position={[16.089, -3.47, -14.495]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.963}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['Tower-light-007_Material_#37_0'].geometry}
							material={materials.Material_37}
							position={[0, 0, -0.807]}
						/>
					</group>
					<group
						position={[15.155, -3.47, -14.495]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.963}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['Tower-light-008_Material_#37_0'].geometry}
							material={materials.Material_37}
							position={[0, 0, -0.807]}
						/>
					</group>
					<group
						position={[16.089, -3.47, -14.495]}
						rotation={[Math.PI / 2, 0, 0]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['Tower-light-2_computer_0'].geometry}
							material={materials.computer}
							position={[0, 0, -0.807]}
						/>
					</group>
					<group
						position={[15.155, -3.47, -14.495]}
						rotation={[Math.PI / 2, 0, 0]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['Tower-light-3_computer_0'].geometry}
							material={materials.computer}
							position={[0, 0, -0.807]}
						/>
					</group>
					<group
						position={[22.152, 2.177, -12.827]}
						rotation={[0.807, -0.002, 0.005]}
						scale={[0.832, 0.845, 0.845]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['tower-On-frame_computer_0'].geometry}
							material={materials.computer}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes['Tower-on_computer_0'].geometry}
							material={materials.computer}
							position={[0, 0, 0.427]}
							scale={0.74}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.base__0.geometry}
						material={materials.base__0}
						position={[8.444, 11.264, -21.436]}
						scale={[1, 1.108, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box002_computer_0.geometry}
						material={materials.computer}
						position={[7.197, -10.437, -20.778]}
						rotation={[0.092, 0, 0]}
						scale={[1.199, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box050_computer_0.geometry}
						material={materials.computer}
						position={[-8.831, -1.124, -16.062]}
						scale={[0.752, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box060_computer_0.geometry}
						material={materials.computer}
						position={[-8.643, 32.529, -17.609]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[1.062, 1.404, 0.67]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box107_computer_0.geometry}
						material={materials.computer}
						position={[-7.462, -1.124, -16.007]}
						scale={[0.752, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box108_computer_0.geometry}
						material={materials.computer}
						position={[-6.128, -1.124, -16.094]}
						scale={[0.752, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box109_computer_0.geometry}
						material={materials.computer}
						position={[-4.751, -1.124, -16.062]}
						scale={[0.752, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box110_computer_0.geometry}
						material={materials.computer}
						position={[-3.374, -1.124, -16.116]}
						scale={[0.752, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder001_computer_0.geometry}
						material={materials.computer}
						position={[26.975, 27.836, -21.195]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[1.406, 1.406, 2.681]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder002_computer_0.geometry}
						material={materials.computer}
						position={[20.395, -4.647, -19.52]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[1.406, 1.406, 0.667]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder003_computer_0.geometry}
						material={materials.computer}
						position={[11.998, 34.628, -17.568]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[1.406, 1.406, 0.667]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder007_computer_0.geometry}
						material={materials.computer}
						position={[-1.033, 35.15, -17.63]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder008_computer_0.geometry}
						material={materials.computer}
						position={[1.365, 35.15, -17.63]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder015_computer_0.geometry}
						material={materials.computer}
						position={[21.179, 33.792, -16.37]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder016_computer_0.geometry}
						material={materials.computer}
						position={[19.68, 33.792, -16.37]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder017_computer_0.geometry}
						material={materials.computer}
						position={[21.179, 33.792, -17.813]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder018_computer_0.geometry}
						material={materials.computer}
						position={[19.68, 33.792, -17.813]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder019_computer_0.geometry}
						material={materials.computer}
						position={[21.179, 33.792, -19.174]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder020_computer_0.geometry}
						material={materials.computer}
						position={[19.68, 33.792, -19.174]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder029_computer_0.geometry}
						material={materials.computer}
						position={[10.329, 30.885, -5.488]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder030_computer_0.geometry}
						material={materials.computer}
						position={[12.727, 30.885, -5.488]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder031_computer_0.geometry}
						material={materials.computer}
						position={[15.226, 28.969, -4.04]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder032_computer_0.geometry}
						material={materials.computer}
						position={[15.226, 28.969, -5.59]}
						rotation={[-Math.PI / 2, 0, Math.PI]}
						scale={[0.793, 0.793, 0.356]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key_computer_0.geometry}
						material={materials.computer}
						position={[-4.63, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['key-alt_computer_0'].geometry}
						material={materials.computer}
						position={[11.736, -14.913, -19.82]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Key-space_computer_0'].geometry}
						material={materials.computer}
						position={[2.518, -14.913, -19.82]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key002_computer_0.geometry}
						material={materials.computer}
						position={[-2.229, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key003_computer_0.geometry}
						material={materials.computer}
						position={[0.143, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key004_computer_0.geometry}
						material={materials.computer}
						position={[2.487, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key005_computer_0.geometry}
						material={materials.computer}
						position={[4.847, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key006_computer_0.geometry}
						material={materials.computer}
						position={[7.141, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key007_computer_0.geometry}
						material={materials.computer}
						position={[9.465, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key008_computer_0.geometry}
						material={materials.computer}
						position={[11.767, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key009_computer_0.geometry}
						material={materials.computer}
						position={[14.077, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key011_computer_0.geometry}
						material={materials.computer}
						position={[-3.106, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key012_computer_0.geometry}
						material={materials.computer}
						position={[-0.734, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key013_computer_0.geometry}
						material={materials.computer}
						position={[1.61, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key014_computer_0.geometry}
						material={materials.computer}
						position={[3.97, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key015_computer_0.geometry}
						material={materials.computer}
						position={[6.265, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key016_computer_0.geometry}
						material={materials.computer}
						position={[8.589, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key017_computer_0.geometry}
						material={materials.computer}
						position={[10.89, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key018_computer_0.geometry}
						material={materials.computer}
						position={[13.2, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key020_computer_0.geometry}
						material={materials.computer}
						position={[-2.155, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key021_computer_0.geometry}
						material={materials.computer}
						position={[0.214, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key022_computer_0.geometry}
						material={materials.computer}
						position={[2.746, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key023_computer_0.geometry}
						material={materials.computer}
						position={[5.039, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key024_computer_0.geometry}
						material={materials.computer}
						position={[7.388, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key025_computer_0.geometry}
						material={materials.computer}
						position={[9.745, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key026_computer_0.geometry}
						material={materials.computer}
						position={[12.227, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key027_computer_0.geometry}
						material={materials.computer}
						position={[-1.919, -14.948, -19.883]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key028_computer_0.geometry}
						material={materials.computer}
						position={[9.417, -14.948, -19.883]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key029_computer_0.geometry}
						material={materials.computer}
						position={[0.285, -14.948, -19.883]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['key030_Material_#36_0'].geometry}
						material={materials.Material_36}
						position={[-7.694, -14.948, -19.883]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['key031_Material_#36_0'].geometry}
						material={materials.Material_36}
						position={[-7.659, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['key032_Material_#35_0'].geometry}
						material={materials.Material_35}
						position={[-7.708, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['key033_Material_#34_0'].geometry}
						material={materials.Material_34}
						position={[18.466, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key034_keys_0.geometry}
						material={materials.keys}
						position={[18.504, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key035_keys_0.geometry}
						material={materials.keys}
						position={[18.475, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key036_keys_0.geometry}
						material={materials.keys}
						position={[18.449, -14.948, -19.883]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key037_keys2_0.geometry}
						material={materials.keys2}
						position={[20.756, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key038_keys_0.geometry}
						material={materials.keys}
						position={[20.794, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key039_keys_0.geometry}
						material={materials.keys}
						position={[20.765, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key040_keys_0.geometry}
						material={materials.keys}
						position={[20.738, -14.948, -19.883]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key041_keys2_0.geometry}
						material={materials.keys2}
						position={[23.072, -8.141, -18.599]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key042_keys2_0.geometry}
						material={materials.keys2}
						position={[23.11, -10.451, -19.01]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key043_keys2_0.geometry}
						material={materials.keys2}
						position={[23.081, -12.651, -19.409]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.key044_keys2_0.geometry}
						material={materials.keys2}
						position={[23.055, -14.948, -19.883]}
						rotation={[0.179, 0, 0]}
						scale={1.458}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Line001_computer_0.geometry}
						material={materials.computer}
						position={[23.122, 18.732, -21.944]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Line002_computer_0.geometry}
						material={materials.computer}
						position={[9.388, 38.916, -12.427]}
						rotation={[-Math.PI / 2, 1.307, -Math.PI]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Line003_computer_0.geometry}
						material={materials.computer}
						position={[-8.515, 45.894, -24.066]}
						rotation={[Math.PI / 2, 1.559, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Monitor-A-_computer_0'].geometry}
						material={materials.computer}
						position={[5.993, -1.311, 0.887]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.922, 1, 0.858]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Monitor-B-_computer_0'].geometry}
						material={materials.computer}
						position={[5.993, -0.946, 0.887]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.94, 1.019, 1.019]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Monitor-C-_computer_0'].geometry}
						material={materials.computer}
						position={[5.682, 25.906, 8.752]}
						rotation={[-0.331, 0, 0]}
						scale={[0.936, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Monitor-D-_computer_0'].geometry}
						material={materials.computer}
						position={[12.455, 28.836, -4.974]}
						rotation={[-1.571, 0, 0]}
						scale={[0.329, 0.801, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.screen_glass_screen_0.geometry}
						material={materials['Material.002']}
						position={[5.923, 0.01, 0.887]}
						scale={[0.922, 1, 1]}>
						<meshBasicMaterial map={tex} />
					</mesh>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen001_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.643, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen002_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen003_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen004_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen005_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen006_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen007_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen008_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen009_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen010_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen011_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen012_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen013_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen014_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen015_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen016_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen017_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen018_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen019_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen020_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen021_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen022_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen023_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen024_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen025_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen026_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen027_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen028_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen029_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen030_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen031_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen032_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen033_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen034_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen035_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen036_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen037_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen038_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen039_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen040_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen041_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen042_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen043_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen044_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen045_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen046_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen047_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen048_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen049_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen050_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen051_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen052_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen053_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen054_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen055_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen056_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen057_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen058_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen059_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen060_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen061_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen062_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen063_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen064_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen065_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen066_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen067_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen068_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen069_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen070_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen071_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen072_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen073_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen074_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen075_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen076_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen077_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen078_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen079_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen080_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen081_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen082_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen083_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen084_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen085_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen086_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen087_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen088_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen089_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen090_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen091_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen092_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen093_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen094_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen095_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen096_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen097_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen098_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen099_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen100_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen101_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen102_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen103_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen104_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen105_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen106_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen107_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen108_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen109_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen110_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen111_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen112_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen113_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen114_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen115_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen116_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen117_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen118_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen119_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen120_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen121_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen122_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen123_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen124_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen125_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen126_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen127_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen128_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen129_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen130_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen131_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen132_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen133_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen134_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen135_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen136_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen137_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen138_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen139_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen140_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen141_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen142_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen143_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen144_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen145_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen146_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen147_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen148_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen149_animation_0.geometry}
						material={materials.animation}
						position={[5.658, 1.644, 0.812]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.923, 0.855, 0.855]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Tower_computer_0.geometry}
						material={materials.computer}
						position={[5.991, 15.639, -21.506]}
						scale={[1.264, 3.46, 3.388]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['tower-case_computer_0'].geometry}
						material={materials.computer}
						position={[5.991, 15.06, -22.123]}
						scale={[0.229, 4.055, 4.842]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-drive-_computer_0'].geometry}
						material={materials.computer}
						position={[-6.087, -4.529, -17.012]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[0.769, 1, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-drive-button_computer_0'].geometry}
						material={materials.computer}
						position={[-8.371, -3.65, -17.641]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[1.462, 1.856, 1]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-drive-light_computer_0'].geometry}
						material={materials.computer}
						position={[-3.612, -3.255, -16.225]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-drive-stub_computer_0'].geometry}
						material={materials.computer}
						position={[-3.601, -3.067, -16.218]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-Front_computer_0'].geometry}
						material={materials.computer}
						position={[4.05, 14.894, -21.506]}
						scale={[1.003, 3.604, 3.746]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-light-1_computer_0'].geometry}
						material={materials.computer}
						position={[17.022, -2.664, -14.495]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-nub-_computer_0'].geometry}
						material={materials.computer}
						position={[17.033, -2.476, -14.488]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-nub-2_computer_0'].geometry}
						material={materials.computer}
						position={[16.091, -2.476, -14.488]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-nub-3_computer_0'].geometry}
						material={materials.computer}
						position={[15.148, -2.476, -14.488]}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['Tower-side_computer_0'].geometry}
						material={materials.computer}
						position={[-12.579, 18.098, -16.626]}
						rotation={[Math.PI / 2, -Math.PI / 2, 0]}
						scale={[1, 1, 0.133]}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload(modelLoc);

export default DemoScreen;
