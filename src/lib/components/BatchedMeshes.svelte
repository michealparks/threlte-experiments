<script lang='ts'>
  import BatchedMesh from './BatchedMesh.svelte'
  import { Mesh, type BatchedMesh as BatchedMeshType } from 'three'

  export let object: THREE.Object3D | THREE.Object3D[]
  export let filter: ((node: THREE.Object3D) => boolean) | undefined = undefined 
  
  export let meshes: BatchedMeshType[] = []

  let materialMap: Map<THREE.Material, THREE.Mesh[]> | undefined

  $: {
    materialMap = new Map()

    const arr = Array.isArray(object) ? object : [object]

    for (let item of arr) {
      item.traverse((node) => {
        if (!(node instanceof Mesh)) return
        if (filter?.(node) === false) return

        let objects = materialMap!.get(node.material) ?? []
        console.log(objects)
        objects.push(node)
        
        materialMap!.set(node.material, objects)
      })
    }
    
  }


</script>

{#if materialMap}
  {#each materialMap as [material, object] (material.uuid)}
    <BatchedMesh {material} {object} />
  {/each}
{/if}
