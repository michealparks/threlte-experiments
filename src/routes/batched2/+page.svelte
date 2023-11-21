<script lang='ts'>
  import { Canvas } from '@threlte/core'
  import { VRButton } from '@threlte/xr'
  import Scene from './Scene.svelte'
</script>

<div>
  <Canvas>
    <Scene />
  </Canvas>

  <VRButton />
</div>

<style>
  div {
    width: 100vw;
    height: 100dvh;
    background-color: black;
  }
</style>
