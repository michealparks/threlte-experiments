<script lang='ts'>
  import * as THREE from 'three'
  import { T, useFrame } from '@threlte/core'
  import { Sky, useGltf } from '@threlte/extras'
  import { createNoise2D } from 'simplex-noise'
  import BatchedMesh from '$lib/components/BatchedMesh.svelte'
	import Wind from './Wind.svelte'
  import Teleport from './Teleport.svelte'

  const gltf = useGltf('./scene_vr.glb')

  const lampNoise = createNoise2D()
  const shutterNoise = createNoise2D()

  let ids: Map<string, number>
  let mesh: THREE.BatchedMesh

  const translation = new THREE.Vector3()
  const euler = new THREE.Euler()
  const quat = new THREE.Quaternion()
  const scale = new THREE.Vector3(1, 1, 1)
  const mat4 = new THREE.Matrix4()

  const propEuler = new THREE.Euler()

  let time = 0

  const setObjectRotation = (name: string, rotation: THREE.Euler) => {
    const id = ids.get(name)
    mesh.getMatrixAt(id, mat4)
    mat4.decompose(translation, quat, scale)
    quat.setFromEuler(rotation)
    mat4.compose(translation, quat, scale)
    mesh.setMatrixAt(id, mat4)
  }

  const { start } = useFrame((_, dt) => {
    time += dt

    euler.set(lampNoise(time / 4, 0) / 2.5 + 0.4, 0, lampNoise(0, time / 4) / 4.5)
    setObjectRotation('Lamp1', euler)

    propEuler.x += 0.2
    setObjectRotation('Prop1', propEuler)

    for (const i of [1,2,3,4]) {
      euler.set(0, 0, lampNoise(time / 16, 0) / 10 + shutterNoise(time * 2, 0) / 7 - i / 5)
      setObjectRotation(`Shutter${i}`, euler)
    }

    euler.set(0, 0, lampNoise(0, time) / 10 + Math.PI / 16)
    setObjectRotation(`Panel1`, euler)
    euler.set(lampNoise(time / 2, 0) / 15 + Math.PI / 8, 0, 0)
    setObjectRotation(`Panel2`, euler)

    euler.set(lampNoise(0, time) * 2, 0, 0)
    setObjectRotation(`Dial1`, euler)
    euler.set(lampNoise(time, 0) * 3 + 2, 0, 0)
    setObjectRotation(`Dial2`, euler)

  }, { autostart: false })
</script>

{#if $gltf}
  <BatchedMesh
    material={$gltf.materials.Composition}
    object={$gltf.scene}
    filter={(node) => node.name.includes('Teleport') === false}
    bind:ids
    bind:mesh
    on:create={() => {
      console.log(ids)
      start()
    }}
  />

  <Teleport
    surface={$gltf.nodes.TeleportSurface}
    blocker={$gltf.nodes.TeleportBlocker}
  />
{/if}



<Sky elevation={0} azimuth={-90} />

<Wind position={[5, 1, -2]} offset={1} />
<Wind position={[0, 1, -8]} />

<T.AmbientLight />
