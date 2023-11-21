<script lang='ts'>
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { Controller, XR, Hand } from '@threlte/xr'
  import Stats from '$lib/components/Stats.svelte'
	import Inn from './Inn.svelte'
  import { teleportControls } from '@threlte/xr'

  teleportControls('left')
  teleportControls('right')
</script>

<Stats />

<XR>
  <Controller left />
  <Controller right />

  <Hand left />
  <Hand right />

  <T.PerspectiveCamera
    slot='fallback'
    makeDefault
    position={[23, 6, -8]}
  >
    <OrbitControls />
  </T.PerspectiveCamera>
</XR>

<Inn />
