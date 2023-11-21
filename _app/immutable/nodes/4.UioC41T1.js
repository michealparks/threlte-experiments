var Je=Object.defineProperty;var et=(r,e,n)=>e in r?Je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var Y=(r,e,n)=>(et(r,typeof e!="symbol"?e+"":e,n),n);import{B as ee,C as te,s as X,D as q,E as ne,z as se,F as Ve,p as re,r as me,u as he,v as ge,w as de,G as tt,e as pe,i as k,d as D,H as nt,a as L,c as G,I as ve,y as st,f as rt,g as at,h as ot,j as it,x as ct}from"../chunks/scheduler.GxbzBXCp.js";import{S as H,i as Z,b as A,d as M,m as z,a as v,t as _,e as C,g as We,c as Ne,f as _e}from"../chunks/index.5WCgRtHj.js";import{d as oe,i as lt,w as ae,a as ie,Q as Xe,j as ft,t as be,k as ut,R as mt,l as ht,m as le,n as ye,o as gt,b as K,p as He,q as Ze,r as Ke,s as dt,v as N,x as pt,S as qe,C as we,y as Se,z as vt,U as _t,A as bt,D as yt,E as U,F as Ae,W as wt,H as St,L as At,G as Mt,I as zt,c as Ct,J as Me,K as Et,B as Rt,f as $t,X as Tt,g as ze,O as xt,h as Ot,V as Pt}from"../chunks/BatchedMesh.msfrSxL3.js";import{w as Ce}from"../chunks/index.xlAOEC8l.js";function Ee(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Dt(r,e){const n="threlte-plugin-context";if(Array.isArray(r)){const[t,s]=r;ee(n,{...te(n),[t]:s})}else{const t=r,s=e;if(!s)return;ee(n,{...te(n),[t]:s})}}const Ft=(r,e)=>{let n=0,t=e.fixedStep??1/60;return oe((s,a)=>{for(n+=a;n>=t;)n-=t,r(s,t)},e)},Ye={left:Symbol("teleport-controls-context-left-hand"),right:Symbol("teleport-controls-context-right-hand")},Qe=Symbol("teleport-controls-context"),Re=r=>te(Ye[r]),Bt=(r,e)=>{ee(Ye[r],e)},ue=()=>te(Qe),kt=r=>{ee(Qe,r)},jt=()=>{const r=ue(),e=lt();return{addSurface:o=>{r.interactiveObjects.indexOf(o)>-1||(r.interactiveObjects.push(o),r.surfaces.set(o.uuid,o),r.dispatchers.set(o,e))},removeSurface:o=>{const c=r.interactiveObjects.indexOf(o);r.interactiveObjects.splice(c,1),r.surfaces.delete(o.uuid),r.dispatchers.delete(o)},addBlocker:o=>{r.interactiveObjects.indexOf(o)>-1||(r.interactiveObjects.push(o),r.blockers.set(o.uuid,o))},removeBlocker:o=>{const c=r.interactiveObjects.indexOf(o);r.interactiveObjects.splice(c,1),r.blockers.delete(o.uuid)}}},Lt=()=>{const r=()=>{};Dt("threlte-teleport-controls",({ref:e,props:n})=>{if(!e.isMesh)return;const t="teleportSurface"in n,s="teleportBlocker"in n;if(!t&&!s)return;const{addBlocker:a,addSurface:o,removeBlocker:c,removeSurface:f}=jt(),h=Ce(e),l=Ce(n);return ae([h,l],([i,u])=>t?u.teleportSurface===!1?(f(i),r):(o(i),()=>f(i)):s?n.teleportBlocker===!1?(c(i),r):(a(i),()=>c(i)):r),{onRefChange(i){h.set(i)},onPropsChange(i){l.set(i)}}})},Gt=new Xe,V={x:0,y:0,z:0},It=()=>{const{xr:r}=ie().renderer;let e=r.getReferenceSpace();return(n,t=Gt)=>{var o;if(e??(e=r.getReferenceSpace()),e===null)return;Array.isArray(n)?(V.x=-n[0],V.y=-n[1],V.z=-n[2]):(V.x=-n.x,V.y=-n.y,V.z=-n.z);const s=(o=r.getFrame())==null?void 0:o.getViewerPose(e);s!==void 0&&(V.x+=s.transform.position.x,V.z+=s.transform.position.z);const a=new XRRigidTransform(V,t);r.setReferenceSpace(e.getOffsetReferenceSpace(a))}},Ut=(r,e,n=1/40)=>{const t=e.hand,s=ut(t),a=It(),o=()=>{e.hovered.set(void 0),be[t].set(void 0)},{start:c,stop:f}=Ft(()=>{var u;const h=(u=s.current)==null?void 0:u.inputSource.gamepad;if(h===void 0)return;const l=(h.axes[3]??0)<-.8;if(e.active.current&&!l?e.active.set(!1):!e.active.current&&l&&e.active.set(!0),!e.active.current){e.hovered.current!==void 0&&(a(e.hovered.current.point),o());return}r.compute(r,e);const[i]=r.raycaster.intersectObjects(r.interactiveObjects,!0);if(i===void 0){e.hovered.current!==void 0&&o();return}if(i!==void 0&&r.blockers.has(i.object.uuid)){e.hovered.current!==void 0&&o();return}be[t].set(i),e.hovered.set(i)},{fixedStep:n,autostart:!1});ae([ft().isPresenting,e.enabled],([h,l])=>{h&&l?c():f()})};let fe=0;const $e=(r,e)=>{ue()===void 0&&(Lt(),kt({interactiveObjects:[],surfaces:new Map,blockers:new Map,dispatchers:new WeakMap,raycaster:new mt,compute:(e==null?void 0:e.compute)??ht}));const n=ue();if(Re(r)===void 0){const s=(e==null?void 0:e.enabled)??!0;fe+=s?1:-1;const a={hand:r,active:le(!1),enabled:le(s),hovered:le(void 0)};Bt(r,a),Ut(n,a,e==null?void 0:e.fixedStep)}const t=Re(r);return ae(t.enabled,s=>{fe+=s?1:-1,ye.update(a=>(a[r].enabled=fe>0,a))}),ae(t.active,s=>{ye.update(a=>(a[r].hovering=s,a))}),{enabled:t.enabled,hovered:t.hovered,active:t.active}},Vt=Number.parseInt(gt.replace("dev","")),Q=(r,e,n,t,s)=>{r[e+0]=n,r[e+1]=t,r[e+2]=s,r[e+3]=n,r[e+4]=t,r[e+5]=s},Te=(r,e,n,t)=>{r[e+0]=n,r[e+1]=t},xe=(r,e,n,t,s)=>{r[e+0]=n,r[e+1]=t,r[e+2]=s},Wt=(r,e,n,t,s,a)=>{r[e+0]=n,r[e+1]=t,r[e+2]=s,r[e+3]=a},Nt=r=>({}),Oe=r=>({ref:r[1]});function Xt(r){let e;const n=r[7].default,t=me(n,r,r[9],Oe);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&512)&&he(t,n,s,s[9],e?de(n,s[9],a,Nt):ge(s[9]),Oe)},i(s){e||(v(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function Ht(r){let e,n;const t=[{is:r[1]},r[3]];let s={$$slots:{default:[Xt]},$$scope:{ctx:r}};for(let a=0;a<t.length;a+=1)s=q(s,t[a]);return e=new K({props:s}),r[8](e),{c(){A(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,o){z(e,a,o),n=!0},p(a,[o]){const c=o&10?He(t,[o&2&&{is:a[1]},o&8&&Ze(a[3])]):{};o&512&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){r[8](null),C(e,a)}}}function Zt(r,e,n){const t=["points","shape","shapeFunction"];let s=ne(e,t),a,{$$slots:o={},$$scope:c}=e,{points:f=[]}=e,{shape:h="none"}=e,{shapeFunction:l=g=>1}=e,i;const{invalidate:u}=ie(),O=(()=>{i=f.length;let g=[],R=0,d=[],b=[],P=0,m=[],F=0,j=[],p=0;h==="taper"&&n(4,l=w=>1*Math.pow(4*w*(1-w),1));for(let w=0;w<i;w++){const $=w/f.length;g[R+0]=$,g[R+1]=$,R+=2,Te(d,P,1,-1);let W=h==="none"?1:l(w/(i-1));if(Te(b,P,W,W),P+=2,Wt(m,F,w/(i-1),0,w/(i-1),1),F+=4,w<i-1){const B=w*2;xe(j,p,B+0,B+1,B+2),xe(j,p+3,B+2,B+1,B+3),p+=6}}const x=new dt;return x.setAttribute("position",new N(new Float32Array(i*6),3)),x.setAttribute("previous",new N(new Float32Array(i*6),3)),x.setAttribute("next",new N(new Float32Array(i*6),3)),x.setAttribute("counters",new N(new Float32Array(g),1)),x.setAttribute("side",new N(new Float32Array(d),1)),x.setAttribute("width",new N(new Float32Array(b),1)),x.setAttribute("uv",new N(new Float32Array(m),2)),x.setIndex(new N(new Uint16Array(j),1)),x})(),S=g=>{if(!g[0]||g.length!=i)return;let R=[],d=[],b=[],P=0,m=0,F=0;Q(d,m,g[0].x,g[0].y,g[0].z),m+=6;for(let w=0;w<i;w++){const $=g[w];Q(R,P,$.x,$.y,$.z),P+=6,w<i-1&&(Q(d,m,$.x,$.y,$.z),m+=6),w>0&&w+1<=i&&(Q(b,F,$.x,$.y,$.z),F+=6)}Q(b,F,g[i-1].x,g[i-1].y,g[i-1].z);const j=O.getAttribute("position").set(R),p=O.getAttribute("previous").set(d),x=O.getAttribute("next").set(b);j.needsUpdate=!0,p.needsUpdate=!0,x.needsUpdate=!0,O.computeBoundingSphere(),u("Meshline points changed")},y=Ke();se(r,y,g=>n(0,a=g));function E(g){re[g?"unshift":"push"](()=>{a=g,y.set(a)})}return r.$$set=g=>{e=q(q({},e),Ve(g)),n(3,s=ne(e,t)),"points"in g&&n(5,f=g.points),"shape"in g&&n(6,h=g.shape),"shapeFunction"in g&&n(4,l=g.shapeFunction),"$$scope"in g&&n(9,c=g.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&S(f)},[a,O,y,s,l,f,h,o,E,c]}class Kt extends H{constructor(e){super(),Z(this,e,Zt,Ht,X,{points:5,shape:6,shapeFunction:4})}}const qt=`
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>

uniform float useDash;
uniform float dashArray;
uniform float dashOffset;
uniform float dashRatio;
uniform sampler2D alphaMap;
uniform float useAlphaMap;

varying vec2 vUV;
varying vec4 vColor;
varying float vCounters;

void main()	{
	#include <logdepthbuf_fragment>
	#include <${Vt<154?"encodings_fragment":"colorspace_fragment"}>

	vec4 c = vColor;

	if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV ).r;

	if( useDash == 1. ){
			c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
	}

	gl_FragColor = LinearTosRGB(c);
}
`,Yt=r=>({ref:r&1}),Pe=r=>({ref:r[0]});function Qt(r){let e;const n=r[15].default,t=me(n,r,r[17],Pe);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&131073)&&he(t,n,s,s[17],e?de(n,s[17],a,Yt):ge(s[17]),Pe)},i(s){e||(v(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function Jt(r){let e,n;const t=[{is:r[0]},r[4],{fragmentShader:qt},{vertexShader:pt}];let s={$$slots:{default:[Qt]},$$scope:{ctx:r}};for(let a=0;a<t.length;a+=1)s=q(s,t[a]);return e=new K({props:s}),r[16](e),{c(){A(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,o){z(e,a,o),n=!0},p(a,[o]){const c=o&17?He(t,[o&1&&{is:a[0]},o&16&&Ze(a[4]),t[2],t[3]]):{};o&131073&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){r[16](null),C(e,a)}}}function en(r,e,n){const t=["opacity","color","dashOffset","dashArray","dashRatio","attenuate","width","scaleDown","alphaMap"];let s=ne(e,t),a,o,{$$slots:c={},$$scope:f}=e,{opacity:h=1}=e,{color:l="#ffffff"}=e,{dashOffset:i=0}=e,{dashArray:u=0}=e,{dashRatio:T=0}=e,{attenuate:O=!0}=e,{width:S=1}=e,{scaleDown:y=0}=e,{alphaMap:E=void 0}=e,{invalidate:g,size:R}=ie();se(r,R,m=>n(14,a=m));const d=new qe({uniforms:{lineWidth:{value:S},color:{value:new we(l)},opacity:{value:h},resolution:{value:new Se(1,1)},sizeAttenuation:{value:O?1:0},dashArray:{value:u},dashOffset:{value:i},dashRatio:{value:T},useDash:{value:u>0?1:0},scaleDown:{value:y/10},alphaTest:{value:0},alphaMap:{value:E},useAlphaMap:{value:E?1:0}}}),b=Ke();se(r,b,m=>n(1,o=m));function P(m){re[m?"unshift":"push"](()=>{o=m,b.set(o)})}return r.$$set=m=>{e=q(q({},e),Ve(m)),n(4,s=ne(e,t)),"opacity"in m&&n(5,h=m.opacity),"color"in m&&n(6,l=m.color),"dashOffset"in m&&n(7,i=m.dashOffset),"dashArray"in m&&n(8,u=m.dashArray),"dashRatio"in m&&n(9,T=m.dashRatio),"attenuate"in m&&n(10,O=m.attenuate),"width"in m&&n(11,S=m.width),"scaleDown"in m&&n(12,y=m.scaleDown),"alphaMap"in m&&n(13,E=m.alphaMap),"$$scope"in m&&n(17,f=m.$$scope)},r.$$.update=()=>{r.$$.dirty&16384&&(n(0,d.uniforms.resolution.value=new Se(a.width,a.height),d),g("Canvas size changed")),r.$$.dirty&3040&&(n(0,d.uniforms.dashRatio.value=T,d),n(0,d.uniforms.dashArray.value=u,d),n(0,d.uniforms.dashOffset.value=i,d),n(0,d.uniforms.lineWidth.value=S,d),n(0,d.uniforms.opacity.value=h,d),n(0,d.uniforms.color.value=new we(l),d),g("MeshLineMaterial uniforms changed"))},[d,o,R,b,s,h,l,i,u,T,O,S,y,E,a,c,P,f]}class tn extends H{constructor(e){super(),Z(this,e,en,Jt,X,{opacity:5,color:6,dashOffset:7,dashArray:8,dashRatio:9,attenuate:10,width:11,scaleDown:12,alphaMap:13})}}class ce extends vt{constructor(){const e=ce.SkyShader,n=new qe({name:e.name,uniforms:_t.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:bt,depthWrite:!1});super(new yt(1,1,1),n),this.isSky=!0}}ce.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const nn=r=>({renderTarget:r&1}),De=r=>({sunPosition:r[2],renderTarget:r[0]});function sn(r){let e;const n=r[13].default,t=me(n,r,r[14],De);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&16385)&&he(t,n,s,s[14],e?de(n,s[14],a,nn):ge(s[14]),De)},i(s){e||(v(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function rn(r){let e,n;return e=new K({props:{is:r[1],$$slots:{default:[sn]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),n=!0},p(t,[s]){const a={};s&16385&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function an(r,e,n){let{$$slots:t={},$$scope:s}=e,{scale:a=1e3}=e,{turbidity:o=10}=e,{rayleigh:c=3}=e,{mieCoefficient:f=.005}=e,{mieDirectionalG:h=.7}=e,{elevation:l=2}=e,{azimuth:i=180}=e,{setEnvironment:u=!0}=e,{cubeMapSize:T=128}=e,{webGLRenderTargetOptions:O={}}=e;const S=new ce,y=new U,E=S.material.uniforms,{renderer:g,scene:R}=ie();let d,b;const P=()=>{n(0,d=new wt(T,{type:St,generateMipmaps:!0,minFilter:At,...O})),b=new Mt(1,1.1,d)},m=R.environment,{start:F,stop:j}=oe(({invalidate:p})=>{S.scale.setScalar(a),E.turbidity.value=o,E.rayleigh.value=c,E.mieCoefficient.value=f,E.mieDirectionalG.value=h;const x=Ae.degToRad(90-l),w=Ae.degToRad(i);y.setFromSphericalCoords(1,x,w),E.sunPosition.value.copy(y),u&&((!d||!b)&&P(),b==null||b.update(g,S)),p(),j()},{autostart:!1});return tt(()=>{S.material.dispose(),d==null||d.dispose(),R.environment=m}),r.$$set=p=>{"scale"in p&&n(3,a=p.scale),"turbidity"in p&&n(4,o=p.turbidity),"rayleigh"in p&&n(5,c=p.rayleigh),"mieCoefficient"in p&&n(6,f=p.mieCoefficient),"mieDirectionalG"in p&&n(7,h=p.mieDirectionalG),"elevation"in p&&n(8,l=p.elevation),"azimuth"in p&&n(9,i=p.azimuth),"setEnvironment"in p&&n(10,u=p.setEnvironment),"cubeMapSize"in p&&n(11,T=p.cubeMapSize),"webGLRenderTargetOptions"in p&&n(12,O=p.webGLRenderTargetOptions),"$$scope"in p&&n(14,s=p.$$scope)},r.$$.update=()=>{r.$$.dirty&1025&&(u&&d?R.environment=d.texture:u||(R.environment=m)),r.$$.dirty&1016&&F()},[d,S,y,a,o,c,f,h,l,i,u,T,O,t,s]}class on extends H{constructor(e){super(),Z(this,e,an,rn,X,{scale:3,turbidity:4,rayleigh:5,mieCoefficient:6,mieDirectionalG:7,elevation:8,azimuth:9,setEnvironment:10,cubeMapSize:11,webGLRenderTargetOptions:12})}}const cn=.5*(Math.sqrt(3)-1),J=(3-Math.sqrt(3))/6,Fe=r=>Math.floor(r)|0,Be=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function ke(r=Math.random){const e=ln(r),n=new Float64Array(e).map(s=>Be[s%12*2]),t=new Float64Array(e).map(s=>Be[s%12*2+1]);return function(a,o){let c=0,f=0,h=0;const l=(a+o)*cn,i=Fe(a+l),u=Fe(o+l),T=(i+u)*J,O=i-T,S=u-T,y=a-O,E=o-S;let g,R;y>E?(g=1,R=0):(g=0,R=1);const d=y-g+J,b=E-R+J,P=y-1+2*J,m=E-1+2*J,F=i&255,j=u&255;let p=.5-y*y-E*E;if(p>=0){const $=F+e[j],W=n[$],B=t[$];p*=p,c=p*p*(W*y+B*E)}let x=.5-d*d-b*b;if(x>=0){const $=F+g+e[j+R],W=n[$],B=t[$];x*=x,f=x*x*(W*d+B*b)}let w=.5-P*P-m*m;if(w>=0){const $=F+1+e[j+1],W=n[$],B=t[$];w*=w,h=w*w*(W*P+B*m)}return 70*(c+f+h)}}function ln(r){const n=new Uint8Array(512);for(let t=0;t<512/2;t++)n[t]=t;for(let t=0;t<512/2-1;t++){const s=t+~~(r()*(256-t)),a=n[t];n[t]=n[s],n[s]=a}for(let t=256;t<512;t++)n[t]=n[t-256];return n}function je(r,e,n){const t=r.slice();return t[7]=e[n],t[9]=n,t}function fn(r){let e,n,t,s,a;return e=new Kt({props:{points:r[2][r[9]],shape:"taper"}}),t=new tn({props:{opacity:r[7].opacity,transparent:!0,dashArray:1,dashRatio:.8,dashOffset:r[7].dashOffset,depthWrite:!1,width:.04,color:"#DFD4B4"}}),{c(){A(e.$$.fragment),n=L(),A(t.$$.fragment),s=L()},l(o){M(e.$$.fragment,o),n=G(o),M(t.$$.fragment,o),s=G(o)},m(o,c){z(e,o,c),k(o,n,c),z(t,o,c),k(o,s,c),a=!0},p(o,c){const f={};c&2&&(f.opacity=o[7].opacity),c&2&&(f.dashOffset=o[7].dashOffset),t.$set(f)},i(o){a||(v(e.$$.fragment,o),v(t.$$.fragment,o),a=!0)},o(o){_(e.$$.fragment,o),_(t.$$.fragment,o),a=!1},d(o){o&&(D(n),D(s)),C(e,o),C(t,o)}}}function Le(r){let e,n;return e=new K.Mesh({props:{"position.x":r[7].x,"position.z":r[7].z,$$slots:{default:[fn]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),n=!0},p(t,s){const a={};s&2&&(a["position.x"]=t[7].x),s&2&&(a["position.z"]=t[7].z),s&1026&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function un(r){let e,n,t=Ee(r[1]),s=[];for(let o=0;o<t.length;o+=1)s[o]=Le(je(r,t,o));const a=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=pe()},l(o){for(let c=0;c<s.length;c+=1)s[c].l(o);e=pe()},m(o,c){for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(o,c);k(o,e,c),n=!0},p(o,c){if(c&6){t=Ee(o[1]);let f;for(f=0;f<t.length;f+=1){const h=je(o,t,f);s[f]?(s[f].p(h,c),v(s[f],1)):(s[f]=Le(h),s[f].c(),v(s[f],1),s[f].m(e.parentNode,e))}for(We(),f=t.length;f<s.length;f+=1)a(f);Ne()}},i(o){if(!n){for(let c=0;c<t.length;c+=1)v(s[c]);n=!0}},o(o){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)_(s[c]);n=!1},d(o){o&&D(e),nt(s,o)}}}function mn(r){let e,n;return e=new K.Group({props:{position:r[0],$$slots:{default:[un]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),n=!0},p(t,[s]){const a={};s&1&&(a.position=t[0]),s&1026&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}const I=()=>Math.random();class hn{constructor(e){Y(this,"z");Y(this,"x");Y(this,"opacity");Y(this,"dashOffset",0);this.z=0,this.x=0,this.opacity=0}}let Ge=3;function gn(r,e,n){let{offset:t=0}=e,{position:s=[0,0,0]}=e,a=new Array(Ge).fill(0).map((l,i)=>i);const o=[],c=[];function f(){const l=[];l.push(new U(I()/1.5,I()/2,6)),l.push(new U(I()/1.5,I()/2,4)),l.push(new U(I()/1.5,I()/2,0)),l.push(new U(I()/1.5,I()/2,-4)),l.push(new U(I()/1.5,I()/2,-6));const i=new zt(l);c.push(i.getPoints(20))}function h(){n(1,o.length=0,o);for(let l=0;l<Ge;l++)o.push(new hn(l)),f()}return h(),oe((l,i)=>{if(i<.5){n(3,t+=.4*i);for(let u=0;u<a.length;u++)t<.5?n(1,o[u].opacity+=i*(u*.2),o):n(1,o[u].opacity-=i*(u*.2),o),n(1,o[u].dashOffset=-t-.1,o)}if(t>3){n(3,t=0);for(let u=0;u<a.length;u++)n(1,o[u].opacity=0,o)}}),r.$$set=l=>{"offset"in l&&n(3,t=l.offset),"position"in l&&n(0,s=l.position)},[s,o,c,t]}class Ie extends H{constructor(e){super(),Z(this,e,gn,mn,X,{offset:3,position:0})}}function dn(r){let e,n;return e=new K({props:{is:r[0],visible:!1}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),n=!0},p(t,[s]){const a={};s&1&&(a.is=t[0]),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function pn(r,e,n){let{surface:t}=e;return $e("left"),$e("right"),r.$$set=s=>{"surface"in s&&n(0,t=s.surface)},[t]}class vn extends H{constructor(e){super(),Z(this,e,pn,dn,X,{surface:0})}}function Ue(r){let e,n,t,s,a,o;function c(l){r[5](l)}function f(l){r[6](l)}let h={material:r[2].materials.Composition,object:r[2].scene,filter:bn};return r[0]!==void 0&&(h.ids=r[0]),r[1]!==void 0&&(h.mesh=r[1]),e=new Rt({props:h}),re.push(()=>_e(e,"ids",c)),re.push(()=>_e(e,"mesh",f)),e.$on("create",r[7]),a=new vn({props:{surface:r[2].nodes.TeleportSurface}}),{c(){A(e.$$.fragment),s=L(),A(a.$$.fragment)},l(l){M(e.$$.fragment,l),s=G(l),M(a.$$.fragment,l)},m(l,i){z(e,l,i),k(l,s,i),z(a,l,i),o=!0},p(l,i){const u={};i&4&&(u.material=l[2].materials.Composition),i&4&&(u.object=l[2].scene),!n&&i&1&&(n=!0,u.ids=l[0],ve(()=>n=!1)),!t&&i&2&&(t=!0,u.mesh=l[1],ve(()=>t=!1)),e.$set(u);const T={};i&4&&(T.surface=l[2].nodes.TeleportSurface),a.$set(T)},i(l){o||(v(e.$$.fragment,l),v(a.$$.fragment,l),o=!0)},o(l){_(e.$$.fragment,l),_(a.$$.fragment,l),o=!1},d(l){l&&D(s),C(e,l),C(a,l)}}}function _n(r){let e,n,t,s,a,o,c,f,h,l=r[2]&&Ue(r);return n=new on({props:{elevation:0,azimuth:-90}}),s=new Ie({props:{position:[5,1,-2],offset:1}}),o=new Ie({props:{position:[0,1,-8]}}),f=new K.AmbientLight({}),{c(){l&&l.c(),e=L(),A(n.$$.fragment),t=L(),A(s.$$.fragment),a=L(),A(o.$$.fragment),c=L(),A(f.$$.fragment)},l(i){l&&l.l(i),e=G(i),M(n.$$.fragment,i),t=G(i),M(s.$$.fragment,i),a=G(i),M(o.$$.fragment,i),c=G(i),M(f.$$.fragment,i)},m(i,u){l&&l.m(i,u),k(i,e,u),z(n,i,u),k(i,t,u),z(s,i,u),k(i,a,u),z(o,i,u),k(i,c,u),z(f,i,u),h=!0},p(i,[u]){i[2]?l?(l.p(i,u),u&4&&v(l,1)):(l=Ue(i),l.c(),v(l,1),l.m(e.parentNode,e)):l&&(We(),_(l,1,1,()=>{l=null}),Ne())},i(i){h||(v(l),v(n.$$.fragment,i),v(s.$$.fragment,i),v(o.$$.fragment,i),v(f.$$.fragment,i),h=!0)},o(i){_(l),_(n.$$.fragment,i),_(s.$$.fragment,i),_(o.$$.fragment,i),_(f.$$.fragment,i),h=!1},d(i){i&&(D(e),D(t),D(a),D(c)),l&&l.d(i),C(n,i),C(s,i),C(o,i),C(f,i)}}}const bn=r=>r.name.includes("Teleport")===!1;function yn(r,e,n){let t;const s=Ct("./scene_vr.glb");se(r,s,b=>n(2,t=b));const a=ke(),o=ke();let c,f;const h=new U,l=new Me,i=new Xe,u=new U(1,1,1),T=new Et,O=new Me;let S=0;const y=(b,P)=>{const m=c.get(b);f.getMatrixAt(m,T),T.decompose(h,i,u),i.setFromEuler(P),T.compose(h,i,u),f.setMatrixAt(m,T)},{start:E}=oe((b,P)=>{S+=P,l.set(a(S/4,0)/2.5+.4,0,a(0,S/4)/4.5),y("Lamp1",l),O.x+=.2,y("Prop1",O);for(const m of[1,2,3,4])l.set(0,0,a(S/16,0)/10+o(S*2,0)/7-m/5),y(`Shutter${m}`,l);l.set(0,0,a(0,S)/10+Math.PI/16),y("Panel1",l),l.set(a(S/2,0)/15+Math.PI/8,0,0),y("Panel2",l),l.set(a(0,S)*2,0,0),y("Dial1",l),l.set(a(S,0)*3+2,0,0),y("Dial2",l)},{autostart:!1});function g(b){c=b,n(0,c)}function R(b){f=b,n(1,f)}return[c,f,t,s,E,g,R,()=>{console.log(c),E()}]}class wn extends H{constructor(e){super(),Z(this,e,yn,_n,X,{})}}function Sn(r){let e,n,t,s;return e=new ze({props:{left:!0}}),t=new ze({props:{right:!0}}),{c(){A(e.$$.fragment),n=L(),A(t.$$.fragment)},l(a){M(e.$$.fragment,a),n=G(a),M(t.$$.fragment,a)},m(a,o){z(e,a,o),k(a,n,o),z(t,a,o),s=!0},p:st,i(a){s||(v(e.$$.fragment,a),v(t.$$.fragment,a),s=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),s=!1},d(a){a&&D(n),C(e,a),C(t,a)}}}function An(r){let e,n;return e=new xt({}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Mn(r){let e,n;return e=new K.PerspectiveCamera({props:{slot:"fallback",makeDefault:!0,position:[23,6,-8],$$slots:{default:[An]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),n=!0},p(t,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function zn(r){let e,n,t,s,a,o;return e=new $t({}),t=new Tt({props:{$$slots:{fallback:[Mn],default:[Sn]},$$scope:{ctx:r}}}),a=new wn({}),{c(){A(e.$$.fragment),n=L(),A(t.$$.fragment),s=L(),A(a.$$.fragment)},l(c){M(e.$$.fragment,c),n=G(c),M(t.$$.fragment,c),s=G(c),M(a.$$.fragment,c)},m(c,f){z(e,c,f),k(c,n,f),z(t,c,f),k(c,s,f),z(a,c,f),o=!0},p(c,[f]){const h={};f&1&&(h.$$scope={dirty:f,ctx:c}),t.$set(h)},i(c){o||(v(e.$$.fragment,c),v(t.$$.fragment,c),v(a.$$.fragment,c),o=!0)},o(c){_(e.$$.fragment,c),_(t.$$.fragment,c),_(a.$$.fragment,c),o=!1},d(c){c&&(D(n),D(s)),C(e,c),C(t,c),C(a,c)}}}class Cn extends H{constructor(e){super(),Z(this,e,null,zn,X,{})}}function En(r){let e,n;return e=new Cn({}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Rn(r){let e,n,t,s,a;return n=new Ot({props:{$$slots:{default:[En]},$$scope:{ctx:r}}}),s=new Pt({}),{c(){e=rt("div"),A(n.$$.fragment),t=L(),A(s.$$.fragment),this.h()},l(o){e=at(o,"DIV",{class:!0});var c=ot(e);M(n.$$.fragment,c),t=G(c),M(s.$$.fragment,c),c.forEach(D),this.h()},h(){it(e,"class","svelte-12k73yi")},m(o,c){k(o,e,c),z(n,e,null),ct(e,t),z(s,e,null),a=!0},p(o,[c]){const f={};c&1&&(f.$$scope={dirty:c,ctx:o}),n.$set(f)},i(o){a||(v(n.$$.fragment,o),v(s.$$.fragment,o),a=!0)},o(o){_(n.$$.fragment,o),_(s.$$.fragment,o),a=!1},d(o){o&&D(e),C(n),C(s)}}}class Dn extends H{constructor(e){super(),Z(this,e,null,Rn,X,{})}}export{Dn as component};
