<script lang='ts'>
  import { T } from '@threlte/core'
  import { useGltf } from '@threlte/extras'
  import BatchedMeshes from '$lib/components/BatchedMeshes.svelte'

  const gltf = useGltf('./comp.glb')
  $: console.log($gltf)
</script>

<!-- {#if $gltf}
  <BatchedMeshes
    object={$gltf.scene}
  />
{/if} -->

{#if $gltf}
  <T is={$gltf.scene} />
{/if}

