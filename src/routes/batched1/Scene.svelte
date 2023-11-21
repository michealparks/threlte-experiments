<script lang='ts'>
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { Controller, XR } from '@threlte/xr'
  import Stats from '$lib/components/Stats.svelte'
	import Portal from './Portal.svelte'
</script>

<Stats />

<XR>
  <Controller left />
  <Controller right />

  <T.PerspectiveCamera
    slot='fallback'
    makeDefault
    position={[5, 4, -7]}
  >
    <OrbitControls />
  </T.PerspectiveCamera>

</XR>

<Portal />
