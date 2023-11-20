<script lang='ts'>
  import { T } from '@threlte/core'
  import { Mesh, BatchedMesh, MeshBasicMaterial, MeshPhongMaterial } from 'three'

  export let object: THREE.Object3D | THREE.Object3D[]
  export let material: THREE.Material
  export let filter: ((node: THREE.Object3D) => boolean) | undefined = undefined 
  
  export let mesh: BatchedMesh | undefined = undefined

  $: {
    let nodes: Mesh[] = []
    let geometryCount = 0
    let vertexCount = 0
    let indexCount = 0

    const arr = Array.isArray(object) ? object : [object]

    for (const o of arr) {
      o.traverse((node) => {
        if (!(node instanceof Mesh)) return
        if (filter?.(node) === false) return

        geometryCount += 1
        vertexCount += (node as Mesh).geometry.attributes.position.array.length
        indexCount += (node as Mesh).geometry.index?.array.length ?? 0
        nodes.push(node)
      })
    }

    // MeshBasicMaterial doesn't work? Gotta submit an issue
    if (material instanceof MeshBasicMaterial) {
      const props = [
        'name', 'blending', 'side', 'vertexColors', 'opacity', 'transparent', 'alphaHash',
        'blendSrc', 'blendDst', 'blendEquation', 'blendSrcAlpha', 'blendDstAlpha',
        'blendEquationAlpha', 'blendColor', 'blendAlpha', 'depthFunc', 'depthTest',
        'depthWrite', 'stencilWriteMask', 'stencilFunc', 'stencilRef', 'stencilFuncMask',
        'stencilFail', 'stencilZFail', 'stencilZPass', 'stencilWrite', 'clippingPlanes',
        'clipIntersection', 'clipShadows', 'shadowSide', 'colorWrite', 'precision', 'polygonOffset',
        'polygonOffsetFactor', 'polygonOffsetUnits', 'dithering', 'alphaToCoverage', 'premultipliedAlpha',
        'forceSinglePass', 'visible', 'toneMapped', 'userData', 'color', 'map', 'lightMap',
        'lightMapIntensity', 'aoMap', 'aoMapIntensity', 'specularMap', 'alphaMap', 'envMap',
        'combine', 'reflectivity', 'refractionRatio', 'wireframe', 'wireframeLinewidth', 'wireframeLinecap',
        'wireframeLinejoin', 'fog'
      ]

      console.warn('MeshBasicMaterial not supported', material)
      const m = new MeshPhongMaterial()
      console.log(Object.keys(material))
      for (const prop of props) {
        m[prop] = material[prop]
      }
      material = m
    }

    mesh = new BatchedMesh(geometryCount, vertexCount, indexCount, material)

    for (const node of nodes) {
      node.updateMatrix()
      const id = mesh.addGeometry(node.geometry)
      mesh.setMatrixAt(id, node.matrix)
    }
  }
</script>

<T is={mesh} {...$$restProps} />
