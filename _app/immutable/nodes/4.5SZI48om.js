var Ge=Object.defineProperty;var Ie=(i,e,n)=>e in i?Ge(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var H=(i,e,n)=>(Ie(i,typeof e!="symbol"?e+"":e,n),n);import{s as X,B as q,C as J,z as ee,D as De,p as te,r as se,u as ae,v as ie,w as oe,E as ke,e as fe,i as O,d as F,F as Ue,a as G,c as I,G as ce,y as je,f as Ne,g as Ve,h as We,j as Xe,x as Ze}from"../chunks/scheduler.ADb41sMm.js";import{S as Z,i as Y,b as $,d as M,m as A,a as v,t as _,e as S,g as Te,c as xe,f as ue}from"../chunks/index.R8J8bQLi.js";import{R as Ye,b as N,i as Fe,j as Oe,a as re,k as Be,l as qe,m as W,v as He,S as Le,C as me,n as he,o as Ke,U as Qe,p as Je,q as et,r as j,d as le,s as ge,W as tt,H as nt,L as st,t as at,w as it,c as ot,E as de,x as rt,B as lt,Q as ft,f as ct,X as ut,g as pe,O as mt,h as ht,V as gt}from"../chunks/BatchedMesh.aKFOM-d3.js";function ve(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}const dt=Number.parseInt(Ye.replace("dev","")),K=(i,e,n,t,s)=>{i[e+0]=n,i[e+1]=t,i[e+2]=s,i[e+3]=n,i[e+4]=t,i[e+5]=s},_e=(i,e,n,t)=>{i[e+0]=n,i[e+1]=t},be=(i,e,n,t,s)=>{i[e+0]=n,i[e+1]=t,i[e+2]=s},pt=(i,e,n,t,s,a)=>{i[e+0]=n,i[e+1]=t,i[e+2]=s,i[e+3]=a},vt=i=>({}),we=i=>({ref:i[1]});function _t(i){let e;const n=i[7].default,t=se(n,i,i[9],we);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&512)&&ae(t,n,s,s[9],e?oe(n,s[9],a,vt):ie(s[9]),we)},i(s){e||(v(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function bt(i){let e,n;const t=[{is:i[1]},i[3]];let s={$$slots:{default:[_t]},$$scope:{ctx:i}};for(let a=0;a<t.length;a+=1)s=q(s,t[a]);return e=new N({props:s}),i[8](e),{c(){$(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,o){A(e,a,o),n=!0},p(a,[o]){const r=o&10?Fe(t,[o&2&&{is:a[1]},o&8&&Oe(a[3])]):{};o&512&&(r.$$scope={dirty:o,ctx:a}),e.$set(r)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){i[8](null),S(e,a)}}}function wt(i,e,n){const t=["points","shape","shapeFunction"];let s=J(e,t),a,{$$slots:o={},$$scope:r}=e,{points:l=[]}=e,{shape:g="none"}=e,{shapeFunction:c=h=>1}=e,f;const{invalidate:m}=re(),D=(()=>{f=l.length;let h=[],R=0,d=[],b=[],T=0,u=[],B=0,k=[],p=0;g==="taper"&&n(4,c=y=>1*Math.pow(4*y*(1-y),1));for(let y=0;y<f;y++){const z=y/l.length;h[R+0]=z,h[R+1]=z,R+=2,_e(d,T,1,-1);let V=g==="none"?1:c(y/(f-1));if(_e(b,T,V,V),T+=2,pt(u,B,y/(f-1),0,y/(f-1),1),B+=4,y<f-1){const L=y*2;be(k,p,L+0,L+1,L+2),be(k,p+3,L+2,L+1,L+3),p+=6}}const P=new qe;return P.setAttribute("position",new W(new Float32Array(f*6),3)),P.setAttribute("previous",new W(new Float32Array(f*6),3)),P.setAttribute("next",new W(new Float32Array(f*6),3)),P.setAttribute("counters",new W(new Float32Array(h),1)),P.setAttribute("side",new W(new Float32Array(d),1)),P.setAttribute("width",new W(new Float32Array(b),1)),P.setAttribute("uv",new W(new Float32Array(u),2)),P.setIndex(new W(new Uint16Array(k),1)),P})(),E=h=>{if(!h[0]||h.length!=f)return;let R=[],d=[],b=[],T=0,u=0,B=0;K(d,u,h[0].x,h[0].y,h[0].z),u+=6;for(let y=0;y<f;y++){const z=h[y];K(R,T,z.x,z.y,z.z),T+=6,y<f-1&&(K(d,u,z.x,z.y,z.z),u+=6),y>0&&y+1<=f&&(K(b,B,z.x,z.y,z.z),B+=6)}K(b,B,h[f-1].x,h[f-1].y,h[f-1].z);const k=D.getAttribute("position").set(R),p=D.getAttribute("previous").set(d),P=D.getAttribute("next").set(b);k.needsUpdate=!0,p.needsUpdate=!0,P.needsUpdate=!0,D.computeBoundingSphere(),m("Meshline points changed")},w=Be();ee(i,w,h=>n(0,a=h));function C(h){te[h?"unshift":"push"](()=>{a=h,w.set(a)})}return i.$$set=h=>{e=q(q({},e),De(h)),n(3,s=J(e,t)),"points"in h&&n(5,l=h.points),"shape"in h&&n(6,g=h.shape),"shapeFunction"in h&&n(4,c=h.shapeFunction),"$$scope"in h&&n(9,r=h.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&E(l)},[a,D,w,s,c,l,g,o,C,r]}class yt extends Z{constructor(e){super(),Y(this,e,wt,bt,X,{points:5,shape:6,shapeFunction:4})}}const $t=`
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
	#include <${dt<154?"encodings_fragment":"colorspace_fragment"}>

	vec4 c = vColor;

	if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV ).r;

	if( useDash == 1. ){
			c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
	}

	gl_FragColor = LinearTosRGB(c);
}
`,Mt=i=>({ref:i&1}),ye=i=>({ref:i[0]});function At(i){let e;const n=i[15].default,t=se(n,i,i[17],ye);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&131073)&&ae(t,n,s,s[17],e?oe(n,s[17],a,Mt):ie(s[17]),ye)},i(s){e||(v(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function St(i){let e,n;const t=[{is:i[0]},i[4],{fragmentShader:$t},{vertexShader:He}];let s={$$slots:{default:[At]},$$scope:{ctx:i}};for(let a=0;a<t.length;a+=1)s=q(s,t[a]);return e=new N({props:s}),i[16](e),{c(){$(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,o){A(e,a,o),n=!0},p(a,[o]){const r=o&17?Fe(t,[o&1&&{is:a[0]},o&16&&Oe(a[4]),t[2],t[3]]):{};o&131073&&(r.$$scope={dirty:o,ctx:a}),e.$set(r)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){i[16](null),S(e,a)}}}function Et(i,e,n){const t=["opacity","color","dashOffset","dashArray","dashRatio","attenuate","width","scaleDown","alphaMap"];let s=J(e,t),a,o,{$$slots:r={},$$scope:l}=e,{opacity:g=1}=e,{color:c="#ffffff"}=e,{dashOffset:f=0}=e,{dashArray:m=0}=e,{dashRatio:x=0}=e,{attenuate:D=!0}=e,{width:E=1}=e,{scaleDown:w=0}=e,{alphaMap:C=void 0}=e,{invalidate:h,size:R}=re();ee(i,R,u=>n(14,a=u));const d=new Le({uniforms:{lineWidth:{value:E},color:{value:new me(c)},opacity:{value:g},resolution:{value:new he(1,1)},sizeAttenuation:{value:D?1:0},dashArray:{value:m},dashOffset:{value:f},dashRatio:{value:x},useDash:{value:m>0?1:0},scaleDown:{value:w/10},alphaTest:{value:0},alphaMap:{value:C},useAlphaMap:{value:C?1:0}}}),b=Be();ee(i,b,u=>n(1,o=u));function T(u){te[u?"unshift":"push"](()=>{o=u,b.set(o)})}return i.$$set=u=>{e=q(q({},e),De(u)),n(4,s=J(e,t)),"opacity"in u&&n(5,g=u.opacity),"color"in u&&n(6,c=u.color),"dashOffset"in u&&n(7,f=u.dashOffset),"dashArray"in u&&n(8,m=u.dashArray),"dashRatio"in u&&n(9,x=u.dashRatio),"attenuate"in u&&n(10,D=u.attenuate),"width"in u&&n(11,E=u.width),"scaleDown"in u&&n(12,w=u.scaleDown),"alphaMap"in u&&n(13,C=u.alphaMap),"$$scope"in u&&n(17,l=u.$$scope)},i.$$.update=()=>{i.$$.dirty&16384&&(n(0,d.uniforms.resolution.value=new he(a.width,a.height),d),h("Canvas size changed")),i.$$.dirty&3040&&(n(0,d.uniforms.dashRatio.value=x,d),n(0,d.uniforms.dashArray.value=m,d),n(0,d.uniforms.dashOffset.value=f,d),n(0,d.uniforms.lineWidth.value=E,d),n(0,d.uniforms.opacity.value=g,d),n(0,d.uniforms.color.value=new me(c),d),h("MeshLineMaterial uniforms changed"))},[d,o,R,b,s,g,c,f,m,x,D,E,w,C,a,r,T,l]}class Ct extends Z{constructor(e){super(),Y(this,e,Et,St,X,{opacity:5,color:6,dashOffset:7,dashArray:8,dashRatio:9,attenuate:10,width:11,scaleDown:12,alphaMap:13})}}class ne extends Ke{constructor(){const e=ne.SkyShader,n=new Le({name:e.name,uniforms:Qe.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Je,depthWrite:!1});super(new et(1,1,1),n),this.isSky=!0}}ne.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new j},up:{value:new j(0,1,0)}},vertexShader:`
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

		}`};const Rt=i=>({renderTarget:i&1}),$e=i=>({sunPosition:i[2],renderTarget:i[0]});function zt(i){let e;const n=i[13].default,t=se(n,i,i[14],$e);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&16385)&&ae(t,n,s,s[14],e?oe(n,s[14],a,Rt):ie(s[14]),$e)},i(s){e||(v(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function Pt(i){let e,n;return e=new N({props:{is:i[1],$$slots:{default:[zt]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const a={};s&16385&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Dt(i,e,n){let{$$slots:t={},$$scope:s}=e,{scale:a=1e3}=e,{turbidity:o=10}=e,{rayleigh:r=3}=e,{mieCoefficient:l=.005}=e,{mieDirectionalG:g=.7}=e,{elevation:c=2}=e,{azimuth:f=180}=e,{setEnvironment:m=!0}=e,{cubeMapSize:x=128}=e,{webGLRenderTargetOptions:D={}}=e;const E=new ne,w=new j,C=E.material.uniforms,{renderer:h,scene:R}=re();let d,b;const T=()=>{n(0,d=new tt(x,{type:nt,generateMipmaps:!0,minFilter:st,...D})),b=new at(1,1.1,d)},u=R.environment,{start:B,stop:k}=le(({invalidate:p})=>{E.scale.setScalar(a),C.turbidity.value=o,C.rayleigh.value=r,C.mieCoefficient.value=l,C.mieDirectionalG.value=g;const P=ge.degToRad(90-c),y=ge.degToRad(f);w.setFromSphericalCoords(1,P,y),C.sunPosition.value.copy(w),m&&((!d||!b)&&T(),b==null||b.update(h,E)),p(),k()},{autostart:!1});return ke(()=>{E.material.dispose(),d==null||d.dispose(),R.environment=u}),i.$$set=p=>{"scale"in p&&n(3,a=p.scale),"turbidity"in p&&n(4,o=p.turbidity),"rayleigh"in p&&n(5,r=p.rayleigh),"mieCoefficient"in p&&n(6,l=p.mieCoefficient),"mieDirectionalG"in p&&n(7,g=p.mieDirectionalG),"elevation"in p&&n(8,c=p.elevation),"azimuth"in p&&n(9,f=p.azimuth),"setEnvironment"in p&&n(10,m=p.setEnvironment),"cubeMapSize"in p&&n(11,x=p.cubeMapSize),"webGLRenderTargetOptions"in p&&n(12,D=p.webGLRenderTargetOptions),"$$scope"in p&&n(14,s=p.$$scope)},i.$$.update=()=>{i.$$.dirty&1025&&(m&&d?R.environment=d.texture:m||(R.environment=u)),i.$$.dirty&1016&&B()},[d,E,w,a,o,r,l,g,c,f,m,x,D,t,s]}class Tt extends Z{constructor(e){super(),Y(this,e,Dt,Pt,X,{scale:3,turbidity:4,rayleigh:5,mieCoefficient:6,mieDirectionalG:7,elevation:8,azimuth:9,setEnvironment:10,cubeMapSize:11,webGLRenderTargetOptions:12})}}const xt=.5*(Math.sqrt(3)-1),Q=(3-Math.sqrt(3))/6,Me=i=>Math.floor(i)|0,Ae=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Se(i=Math.random){const e=Ft(i),n=new Float64Array(e).map(s=>Ae[s%12*2]),t=new Float64Array(e).map(s=>Ae[s%12*2+1]);return function(a,o){let r=0,l=0,g=0;const c=(a+o)*xt,f=Me(a+c),m=Me(o+c),x=(f+m)*Q,D=f-x,E=m-x,w=a-D,C=o-E;let h,R;w>C?(h=1,R=0):(h=0,R=1);const d=w-h+Q,b=C-R+Q,T=w-1+2*Q,u=C-1+2*Q,B=f&255,k=m&255;let p=.5-w*w-C*C;if(p>=0){const z=B+e[k],V=n[z],L=t[z];p*=p,r=p*p*(V*w+L*C)}let P=.5-d*d-b*b;if(P>=0){const z=B+h+e[k+R],V=n[z],L=t[z];P*=P,l=P*P*(V*d+L*b)}let y=.5-T*T-u*u;if(y>=0){const z=B+1+e[k+1],V=n[z],L=t[z];y*=y,g=y*y*(V*T+L*u)}return 70*(r+l+g)}}function Ft(i){const n=new Uint8Array(512);for(let t=0;t<512/2;t++)n[t]=t;for(let t=0;t<512/2-1;t++){const s=t+~~(i()*(256-t)),a=n[t];n[t]=n[s],n[s]=a}for(let t=256;t<512;t++)n[t]=n[t-256];return n}function Ee(i,e,n){const t=i.slice();return t[7]=e[n],t[9]=n,t}function Ot(i){let e,n,t,s,a;return e=new yt({props:{points:i[2][i[9]],shape:"taper"}}),t=new Ct({props:{opacity:i[7].opacity,transparent:!0,dashArray:1,dashRatio:.8,dashOffset:i[7].dashOffset,depthWrite:!1,width:.04,color:"#DFD4B4"}}),{c(){$(e.$$.fragment),n=G(),$(t.$$.fragment),s=G()},l(o){M(e.$$.fragment,o),n=I(o),M(t.$$.fragment,o),s=I(o)},m(o,r){A(e,o,r),O(o,n,r),A(t,o,r),O(o,s,r),a=!0},p(o,r){const l={};r&2&&(l.opacity=o[7].opacity),r&2&&(l.dashOffset=o[7].dashOffset),t.$set(l)},i(o){a||(v(e.$$.fragment,o),v(t.$$.fragment,o),a=!0)},o(o){_(e.$$.fragment,o),_(t.$$.fragment,o),a=!1},d(o){o&&(F(n),F(s)),S(e,o),S(t,o)}}}function Ce(i){let e,n;return e=new N.Mesh({props:{"position.x":i[7].x,"position.z":i[7].z,$$slots:{default:[Ot]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,s){const a={};s&2&&(a["position.x"]=t[7].x),s&2&&(a["position.z"]=t[7].z),s&1026&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Bt(i){let e,n,t=ve(i[1]),s=[];for(let o=0;o<t.length;o+=1)s[o]=Ce(Ee(i,t,o));const a=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=fe()},l(o){for(let r=0;r<s.length;r+=1)s[r].l(o);e=fe()},m(o,r){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(o,r);O(o,e,r),n=!0},p(o,r){if(r&6){t=ve(o[1]);let l;for(l=0;l<t.length;l+=1){const g=Ee(o,t,l);s[l]?(s[l].p(g,r),v(s[l],1)):(s[l]=Ce(g),s[l].c(),v(s[l],1),s[l].m(e.parentNode,e))}for(Te(),l=t.length;l<s.length;l+=1)a(l);xe()}},i(o){if(!n){for(let r=0;r<t.length;r+=1)v(s[r]);n=!0}},o(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)_(s[r]);n=!1},d(o){o&&F(e),Ue(s,o)}}}function Lt(i){let e,n;return e=new N.Group({props:{position:i[0],$$slots:{default:[Bt]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const a={};s&1&&(a.position=t[0]),s&1026&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}const U=()=>Math.random();class Gt{constructor(e){H(this,"z");H(this,"x");H(this,"opacity");H(this,"dashOffset",0);this.z=0,this.x=0,this.opacity=0}}let Re=3;function It(i,e,n){let{offset:t=0}=e,{position:s=[0,0,0]}=e,a=new Array(Re).fill(0).map((c,f)=>f);const o=[],r=[];function l(){const c=[];c.push(new j(U()/1.5,U()/2,6)),c.push(new j(U()/1.5,U()/2,4)),c.push(new j(U()/1.5,U()/2,0)),c.push(new j(U()/1.5,U()/2,-4)),c.push(new j(U()/1.5,U()/2,-6));const f=new it(c);r.push(f.getPoints(20))}function g(){n(1,o.length=0,o);for(let c=0;c<Re;c++)o.push(new Gt(c)),l()}return g(),le((c,f)=>{if(f<.5){n(3,t+=.4*f);for(let m=0;m<a.length;m++)t<.5?n(1,o[m].opacity+=f*(m*.2),o):n(1,o[m].opacity-=f*(m*.2),o),n(1,o[m].dashOffset=-t-.1,o)}if(t>3){n(3,t=0);for(let m=0;m<a.length;m++)n(1,o[m].opacity=0,o)}}),i.$$set=c=>{"offset"in c&&n(3,t=c.offset),"position"in c&&n(0,s=c.position)},[s,o,r,t]}class ze extends Z{constructor(e){super(),Y(this,e,It,Lt,X,{offset:3,position:0})}}function Pe(i){let e,n,t,s;function a(l){i[5](l)}function o(l){i[6](l)}let r={material:i[2].materials.Composition,object:i[2].scene};return i[0]!==void 0&&(r.ids=i[0]),i[1]!==void 0&&(r.mesh=i[1]),e=new lt({props:r}),te.push(()=>ue(e,"ids",a)),te.push(()=>ue(e,"mesh",o)),e.$on("create",i[7]),{c(){$(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,g){A(e,l,g),s=!0},p(l,g){const c={};g&4&&(c.material=l[2].materials.Composition),g&4&&(c.object=l[2].scene),!n&&g&1&&(n=!0,c.ids=l[0],ce(()=>n=!1)),!t&&g&2&&(t=!0,c.mesh=l[1],ce(()=>t=!1)),e.$set(c)},i(l){s||(v(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){S(e,l)}}}function kt(i){let e,n,t,s,a,o,r,l,g,c=i[2]&&Pe(i);return n=new Tt({props:{elevation:0,azimuth:-90}}),s=new ze({props:{position:[5,1,-2],offset:1}}),o=new ze({props:{position:[0,1,-8]}}),l=new N.AmbientLight({}),{c(){c&&c.c(),e=G(),$(n.$$.fragment),t=G(),$(s.$$.fragment),a=G(),$(o.$$.fragment),r=G(),$(l.$$.fragment)},l(f){c&&c.l(f),e=I(f),M(n.$$.fragment,f),t=I(f),M(s.$$.fragment,f),a=I(f),M(o.$$.fragment,f),r=I(f),M(l.$$.fragment,f)},m(f,m){c&&c.m(f,m),O(f,e,m),A(n,f,m),O(f,t,m),A(s,f,m),O(f,a,m),A(o,f,m),O(f,r,m),A(l,f,m),g=!0},p(f,[m]){f[2]?c?(c.p(f,m),m&4&&v(c,1)):(c=Pe(f),c.c(),v(c,1),c.m(e.parentNode,e)):c&&(Te(),_(c,1,1,()=>{c=null}),xe())},i(f){g||(v(c),v(n.$$.fragment,f),v(s.$$.fragment,f),v(o.$$.fragment,f),v(l.$$.fragment,f),g=!0)},o(f){_(c),_(n.$$.fragment,f),_(s.$$.fragment,f),_(o.$$.fragment,f),_(l.$$.fragment,f),g=!1},d(f){f&&(F(e),F(t),F(a),F(r)),c&&c.d(f),S(n,f),S(s,f),S(o,f),S(l,f)}}}function Ut(i,e,n){let t;const s=ot("./scene_vr.glb");ee(i,s,b=>n(2,t=b));const a=Se(),o=Se();let r,l;const g=new j,c=new de,f=new ft,m=new j(1,1,1),x=new rt,D=new de;let E=0;const w=(b,T)=>{const u=r.get(b);l.getMatrixAt(u,x),x.decompose(g,f,m),f.setFromEuler(T),x.compose(g,f,m),l.setMatrixAt(u,x)},{start:C}=le((b,T)=>{E+=T,c.set(a(E/4,0)/2.5+.4,0,a(0,E/4)/4.5),w("Lamp1",c),D.x+=.2,w("Prop1",D);for(const u of[1,2,3,4])c.set(0,0,a(E/16,0)/10+o(E*2,0)/7-u/5),w(`Shutter${u}`,c);c.set(0,0,a(0,E)/10+Math.PI/16),w("Panel1",c),c.set(a(E/2,0)/15+Math.PI/8,0,0),w("Panel2",c),c.set(a(0,E)*2,0,0),w("Dial1",c),c.set(a(E,0)*3+2,0,0),w("Dial2",c)},{autostart:!1});function h(b){r=b,n(0,r)}function R(b){l=b,n(1,l)}return[r,l,t,s,C,h,R,()=>{console.log(r),C()}]}class jt extends Z{constructor(e){super(),Y(this,e,Ut,kt,X,{})}}function Nt(i){let e,n,t,s;return e=new N.PlaneGeometry({}),t=new N.MeshBasicMaterial({}),{c(){$(e.$$.fragment),n=G(),$(t.$$.fragment)},l(a){M(e.$$.fragment,a),n=I(a),M(t.$$.fragment,a)},m(a,o){A(e,a,o),O(a,n,o),A(t,a,o),s=!0},i(a){s||(v(e.$$.fragment,a),v(t.$$.fragment,a),s=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),s=!1},d(a){a&&F(n),S(e,a),S(t,a)}}}function Vt(i){let e,n;return e=new N.Mesh({props:{$$slots:{default:[Nt]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}class Wt extends Z{constructor(e){super(),Y(this,e,null,Vt,X,{})}}function Xt(i){let e,n,t,s,a,o;return e=new pe({props:{left:!0}}),t=new pe({props:{right:!0}}),a=new Wt({}),{c(){$(e.$$.fragment),n=G(),$(t.$$.fragment),s=G(),$(a.$$.fragment)},l(r){M(e.$$.fragment,r),n=I(r),M(t.$$.fragment,r),s=I(r),M(a.$$.fragment,r)},m(r,l){A(e,r,l),O(r,n,l),A(t,r,l),O(r,s,l),A(a,r,l),o=!0},p:je,i(r){o||(v(e.$$.fragment,r),v(t.$$.fragment,r),v(a.$$.fragment,r),o=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),_(a.$$.fragment,r),o=!1},d(r){r&&(F(n),F(s)),S(e,r),S(t,r),S(a,r)}}}function Zt(i){let e,n;return e=new mt({}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Yt(i){let e,n;return e=new N.PerspectiveCamera({props:{slot:"fallback",makeDefault:!0,position:[23,6,-8],$$slots:{default:[Zt]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function qt(i){let e,n,t,s,a,o;return e=new ct({}),t=new ut({props:{$$slots:{fallback:[Yt],default:[Xt]},$$scope:{ctx:i}}}),a=new jt({}),{c(){$(e.$$.fragment),n=G(),$(t.$$.fragment),s=G(),$(a.$$.fragment)},l(r){M(e.$$.fragment,r),n=I(r),M(t.$$.fragment,r),s=I(r),M(a.$$.fragment,r)},m(r,l){A(e,r,l),O(r,n,l),A(t,r,l),O(r,s,l),A(a,r,l),o=!0},p(r,[l]){const g={};l&1&&(g.$$scope={dirty:l,ctx:r}),t.$set(g)},i(r){o||(v(e.$$.fragment,r),v(t.$$.fragment,r),v(a.$$.fragment,r),o=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),_(a.$$.fragment,r),o=!1},d(r){r&&(F(n),F(s)),S(e,r),S(t,r),S(a,r)}}}class Ht extends Z{constructor(e){super(),Y(this,e,null,qt,X,{})}}function Kt(i){let e,n;return e=new Ht({}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Qt(i){let e,n,t,s,a;return n=new ht({props:{$$slots:{default:[Kt]},$$scope:{ctx:i}}}),s=new gt({}),{c(){e=Ne("div"),$(n.$$.fragment),t=G(),$(s.$$.fragment),this.h()},l(o){e=Ve(o,"DIV",{class:!0});var r=We(e);M(n.$$.fragment,r),t=I(r),M(s.$$.fragment,r),r.forEach(F),this.h()},h(){Xe(e,"class","svelte-12k73yi")},m(o,r){O(o,e,r),A(n,e,null),Ze(e,t),A(s,e,null),a=!0},p(o,[r]){const l={};r&1&&(l.$$scope={dirty:r,ctx:o}),n.$set(l)},i(o){a||(v(n.$$.fragment,o),v(s.$$.fragment,o),a=!0)},o(o){_(n.$$.fragment,o),_(s.$$.fragment,o),a=!1},d(o){o&&F(e),S(n),S(s)}}}class sn extends Z{constructor(e){super(),Y(this,e,null,Qt,X,{})}}export{sn as component};
