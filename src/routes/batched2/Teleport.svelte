<script lang='ts'>
  import { T } from '@threlte/core'

  export let surface: THREE.Mesh
  export let blocker: THREE.Mesh
</script>

<T
  is={surface}
  teleportSurface
  visible={false} 
/>

<T
  is={blocker}
  teleportBlocker
  visible={false}
/>
