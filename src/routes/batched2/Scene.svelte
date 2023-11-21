<script lang='ts'>
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { Controller, XR } from '@threlte/xr'
  import Stats from '$lib/components/Stats.svelte'
	import Inn from './Inn.svelte'
  import Teleport from './Teleport.svelte'
</script>

<Stats />

<XR>
  <Controller left />
  <Controller right />

  <Teleport />

  <T.PerspectiveCamera
    slot='fallback'
    makeDefault
    position={[23, 6, -8]}
  >
    <OrbitControls />
  </T.PerspectiveCamera>

</XR>

<!-- <Portal /> -->
<Inn />
