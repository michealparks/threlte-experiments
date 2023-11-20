<script lang='ts'>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<div>
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  div {
    width: 100vw;
    height: 100dvh;
    background-color: black;
  }
</style>
