<script lang='ts'>
  import { T } from '@threlte/core'
  import { interactivity, OrbitControls } from '@threlte/extras'
  import Stats from '$lib/components/Stats.svelte'
	import Portal from './Portal.svelte'
	import Inn from './Inn.svelte'

  interactivity()
</script>

<T.PerspectiveCamera
  makeDefault
  position={[5, 5, -5]}
>
  <OrbitControls />
</T.PerspectiveCamera>

<T.AmbientLight />
<T.DirectionalLight intensity={2} position={[0, 10, 10]} castShadow />

<Stats />

<!-- <Portal /> -->
<Inn />
