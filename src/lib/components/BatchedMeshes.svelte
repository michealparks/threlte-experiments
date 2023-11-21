<script lang='ts'>
  import BatchedMesh from './BatchedMesh.svelte'
  import { Mesh, type BatchedMesh as BatchedMeshType } from 'three'
  import { createRawEventDispatcher } from '@threlte/core';

  export let object: THREE.Object3D | THREE.Object3D[]
  export let filter: ((node: THREE.Object3D) => boolean) | undefined = undefined 
  
  export let meshes: BatchedMeshType[] = []
  export let ids: Map<string, number>

  const dispatch = createRawEventDispatcher()

  let materialMap: Map<THREE.Material, THREE.Mesh[]> | undefined

  $: {
    materialMap = new Map()

    const arr = Array.isArray(object) ? object : [object]

    for (let item of arr) {
      item.traverse((node) => {
        if (!(node instanceof Mesh)) return
        if (filter?.(node) === false) return

        let objects = materialMap!.get(node.material) ?? []
        objects.push(node)
        
        materialMap!.set(node.material, objects)
      })
    }
    
    dispatch('create')
  }


</script>

{#if materialMap}
  {#each materialMap as [material, object] (material.uuid)}
    <BatchedMesh {material} {object} />
  {/each}
{/if}
