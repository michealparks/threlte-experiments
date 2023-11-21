<script lang='ts'>
  import { T } from '@threlte/core'
	import { teleportControls } from '@threlte/xr'

  export let surface: THREE.Mesh

  teleportControls('left')
  teleportControls('right')
</script>

<T
  is={surface}
  visible={false} 
/>
