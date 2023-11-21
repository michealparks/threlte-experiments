import{s as w,a as x,c as _,i as d,d as v,z as C,y as F,f as k,g as E,h as I,j as D,x as V}from"../chunks/scheduler.d5WWJ2dT.js";import{S as h,i as b,b as l,d as m,m as $,a as i,g as q,t as g,c as G,e as u}from"../chunks/index.Wb0JjX0t.js";import{u as B,a as O,T as N,b as y,c as R,S as X,C as L,d as A,B as M,M as T,e as Y,f as H,X as J,g as U,O as K,h as Q,V as W}from"../chunks/BatchedMesh.SQl3Yenh.js";const Z=(c,t)=>{const r=B(N,t),{renderer:n}=O();return r.load(c,{...t,transform:o=>{var a;return"colorSpace"in o?o.colorSpace=n.outputColorSpace:o.encoding=n.outputEncoding,o.needsUpdate=!0,((a=t==null?void 0:t.transform)==null?void 0:a.call(t,o))??o}})},ee=`varying vec2 vUv;

void main () {
  vUv = uv;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
}
`,te=`//  Classic Perlin 3D Noise 
//  by Stefan Gustavson
//
vec4 permute(vec4 x) {
  return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 

  return 2.2 * n_xyz;
}

varying vec2 vUv;

uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

void main () {
  // Displace the UV
  vec2 displacedUv = vUv + cnoise(vec3(vUv * 5.0, uTime * 0.1));

  // Perlin noise
  float strength = cnoise(vec3(displacedUv * 5.0, uTime * 0.2));

  // Outer glow
  float outerGlow = distance(vUv, vec2(0.5)) * 6.0 - 1.8;

  strength += outerGlow;
  strength += step(-0.2, strength) * 0.8;

  vec3 color = mix(uColorStart, uColorEnd, strength);

  gl_FragColor = vec4(color, 1.0);
}
`;function P(c){const t=c.slice(),r=t[1];return t[5]=r.nodes,t}function j(c){let t,r,n,o,a,s;return t=new M({props:{object:c[1].scene,material:new T({map:c[2]}),filter:ae}}),n=new M({props:{object:[c[5].LampLight1,c[5].LampLight2],material:new Y({color:16777189})}}),a=new y({props:{is:c[1].nodes.Portal,$$slots:{default:[ne]},$$scope:{ctx:c}}}),{c(){l(t.$$.fragment),r=x(),l(n.$$.fragment),o=x(),l(a.$$.fragment)},l(e){m(t.$$.fragment,e),r=_(e),m(n.$$.fragment,e),o=_(e),m(a.$$.fragment,e)},m(e,f){$(t,e,f),d(e,r,f),$(n,e,f),d(e,o,f),$(a,e,f),s=!0},p(e,f){const p={};f&2&&(p.object=e[1].scene),f&4&&(p.material=new T({map:e[2]})),t.$set(p);const S={};f&2&&(S.object=[e[5].LampLight1,e[5].LampLight2]),n.$set(S);const z={};f&2&&(z.is=e[1].nodes.Portal),f&65&&(z.$$scope={dirty:f,ctx:e}),a.$set(z)},i(e){s||(i(t.$$.fragment,e),i(n.$$.fragment,e),i(a.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),g(n.$$.fragment,e),g(a.$$.fragment,e),s=!1},d(e){e&&(v(r),v(o)),u(t,e),u(n,e),u(a,e)}}}function ne(c){let t,r;return t=new y({props:{is:c[0]}}),{c(){l(t.$$.fragment)},l(n){m(t.$$.fragment,n)},m(n,o){$(t,n,o),r=!0},p(n,o){const a={};o&1&&(a.is=n[0]),t.$set(a)},i(n){r||(i(t.$$.fragment,n),r=!0)},o(n){g(t.$$.fragment,n),r=!1},d(n){u(t,n)}}}function re(c){let t,r,n,o,a,s=c[1]&&c[2]&&j(P(c));return r=new y.AmbientLight({props:{intensity:2}}),o=new y.DirectionalLight({props:{intensity:2,position:[0,10,10],castShadow:!0}}),{c(){s&&s.c(),t=x(),l(r.$$.fragment),n=x(),l(o.$$.fragment)},l(e){s&&s.l(e),t=_(e),m(r.$$.fragment,e),n=_(e),m(o.$$.fragment,e)},m(e,f){s&&s.m(e,f),d(e,t,f),$(r,e,f),d(e,n,f),$(o,e,f),a=!0},p(e,[f]){e[1]&&e[2]?s?(s.p(P(e),f),f&6&&i(s,1)):(s=j(P(e)),s.c(),i(s,1),s.m(t.parentNode,t)):s&&(q(),g(s,1,1,()=>{s=null}),G())},i(e){a||(i(s),i(r.$$.fragment,e),i(o.$$.fragment,e),a=!0)},o(e){g(s),g(r.$$.fragment,e),g(o.$$.fragment,e),a=!1},d(e){e&&(v(t),v(n)),s&&s.d(e),u(r,e),u(o,e)}}}const ae=({name:c})=>["Portal","LampLight1","LampLight2"].includes(c)===!1;function oe(c,t,r){let n,o;const a=R("./portal.glb");C(c,a,f=>r(1,n=f));const s=Z("./portal.jpg",{transform:f=>{f.flipY=!1}});C(c,s,f=>r(2,o=f));const e=new X({uniforms:{uTime:{value:0},uColorStart:{value:new L("#2197ff")},uColorEnd:{value:new L("#6c3dcc")}},vertexShader:ee,fragmentShader:te});return A((f,p)=>{r(0,e.uniforms.uTime.value+=p,e)}),[e,n,o,a,s]}class se extends h{constructor(t){super(),b(this,t,oe,re,w,{})}}function fe(c){let t,r,n,o;return t=new U({props:{left:!0}}),n=new U({props:{right:!0}}),{c(){l(t.$$.fragment),r=x(),l(n.$$.fragment)},l(a){m(t.$$.fragment,a),r=_(a),m(n.$$.fragment,a)},m(a,s){$(t,a,s),d(a,r,s),$(n,a,s),o=!0},p:F,i(a){o||(i(t.$$.fragment,a),i(n.$$.fragment,a),o=!0)},o(a){g(t.$$.fragment,a),g(n.$$.fragment,a),o=!1},d(a){a&&v(r),u(t,a),u(n,a)}}}function ce(c){let t,r;return t=new K({}),{c(){l(t.$$.fragment)},l(n){m(t.$$.fragment,n)},m(n,o){$(t,n,o),r=!0},i(n){r||(i(t.$$.fragment,n),r=!0)},o(n){g(t.$$.fragment,n),r=!1},d(n){u(t,n)}}}function ie(c){let t,r;return t=new y.PerspectiveCamera({props:{slot:"fallback",makeDefault:!0,position:[5,4,-7],$$slots:{default:[ce]},$$scope:{ctx:c}}}),{c(){l(t.$$.fragment)},l(n){m(t.$$.fragment,n)},m(n,o){$(t,n,o),r=!0},p(n,o){const a={};o&1&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){r||(i(t.$$.fragment,n),r=!0)},o(n){g(t.$$.fragment,n),r=!1},d(n){u(t,n)}}}function ge(c){let t,r,n,o,a,s;return t=new H({}),n=new J({props:{$$slots:{fallback:[ie],default:[fe]},$$scope:{ctx:c}}}),a=new se({}),{c(){l(t.$$.fragment),r=x(),l(n.$$.fragment),o=x(),l(a.$$.fragment)},l(e){m(t.$$.fragment,e),r=_(e),m(n.$$.fragment,e),o=_(e),m(a.$$.fragment,e)},m(e,f){$(t,e,f),d(e,r,f),$(n,e,f),d(e,o,f),$(a,e,f),s=!0},p(e,[f]){const p={};f&1&&(p.$$scope={dirty:f,ctx:e}),n.$set(p)},i(e){s||(i(t.$$.fragment,e),i(n.$$.fragment,e),i(a.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),g(n.$$.fragment,e),g(a.$$.fragment,e),s=!1},d(e){e&&(v(r),v(o)),u(t,e),u(n,e),u(a,e)}}}class le extends h{constructor(t){super(),b(this,t,null,ge,w,{})}}function me(c){let t,r;return t=new le({}),{c(){l(t.$$.fragment)},l(n){m(t.$$.fragment,n)},m(n,o){$(t,n,o),r=!0},i(n){r||(i(t.$$.fragment,n),r=!0)},o(n){g(t.$$.fragment,n),r=!1},d(n){u(t,n)}}}function $e(c){let t,r,n,o,a;return r=new Q({props:{$$slots:{default:[me]},$$scope:{ctx:c}}}),o=new W({}),{c(){t=k("div"),l(r.$$.fragment),n=x(),l(o.$$.fragment),this.h()},l(s){t=E(s,"DIV",{class:!0});var e=I(t);m(r.$$.fragment,e),n=_(e),m(o.$$.fragment,e),e.forEach(v),this.h()},h(){D(t,"class","svelte-12k73yi")},m(s,e){d(s,t,e),$(r,t,null),V(t,n),$(o,t,null),a=!0},p(s,[e]){const f={};e&1&&(f.$$scope={dirty:e,ctx:s}),r.$set(f)},i(s){a||(i(r.$$.fragment,s),i(o.$$.fragment,s),a=!0)},o(s){g(r.$$.fragment,s),g(o.$$.fragment,s),a=!1},d(s){s&&v(t),u(r),u(o)}}}class xe extends h{constructor(t){super(),b(this,t,null,$e,w,{})}}export{xe as component};
