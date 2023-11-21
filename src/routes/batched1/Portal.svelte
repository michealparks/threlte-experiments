<script lang='ts'>
  import * as THREE from 'three'
  import { T, useFrame } from '@threlte/core'
  import { useGltf, useTexture } from '@threlte/extras'
  import BatchedMesh from '$lib/components/BatchedMesh.svelte'
  import portalVertShader from './portal-vert.glsl?raw'
  import portalFragShader from './portal-frag.glsl?raw'

  const gltf = useGltf('./portal.glb')
  const texture = useTexture('./portal.jpg', {
    transform: (texture) => { texture.flipY = false }
  })

  const portalMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColorStart: { value: new THREE.Color('#2197ff') },
      uColorEnd: { value: new THREE.Color('#6c3dcc') },
    },
    vertexShader: portalVertShader,
    fragmentShader: portalFragShader
  })

  useFrame((_, dt) => {
    portalMaterial.uniforms.uTime.value += dt
  })
</script>

{#if $gltf && $texture}
  <BatchedMesh
    object={$gltf.scene}
    material={new THREE.MeshPhongMaterial({ map: $texture })}
    filter={({ name }) => ['Portal', 'LampLight1', 'LampLight2'].includes(name) === false}
  />

  {@const { nodes } = $gltf}
  <BatchedMesh
    object={[nodes.LampLight1, nodes.LampLight2]}
    material={new THREE.MeshToonMaterial({ color: 0xFF_FF_E5 })}
  />

  <T is={$gltf.nodes.Portal}>
    <T is={portalMaterial} />
  </T>
{/if}

<T.AmbientLight intensity={2} />
<T.DirectionalLight intensity={2} position={[0, 10, 10]} castShadow />
