<script lang='ts'>
  import { useRender, useThrelte } from '@threlte/core'
	import { onDestroy } from 'svelte'
  import { ThreePerf } from 'three-perf'

  const perf = new ThreePerf({
    anchorX: 'left',
    anchorY: 'top',
    domElement: document.body,
    renderer: useThrelte().renderer,
  })

  useRender((ctx) => {
    perf.begin()
    ctx.renderer.render(ctx.scene, ctx.camera.current)
    perf.end()
  })

  onDestroy(() => perf.dispose())
</script>
