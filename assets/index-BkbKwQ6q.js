import"https://cdn.skypack.dev/three@0.136.0";import"https://cdn.skypack.dev/three@0.136.0/examples/jsm/renderers/CSS2DRenderer.js";import"https://cdn.skypack.dev/gsap@3.9.1";import"https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="158",Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},el=0,Pa=1,tl=2,uo=1,fo=2,un=3,Rn=0,Pt=1,dn=2,bn=0,gi=1,Da=2,Ua=3,Ia=4,nl=5,Fn=100,il=101,rl=102,Na=103,Fa=104,al=200,sl=201,ol=202,ll=203,ca=204,ha=205,cl=206,hl=207,ul=208,dl=209,fl=210,pl=211,ml=212,gl=213,_l=214,vl=0,xl=1,Ml=2,_r=3,Sl=4,El=5,yl=6,Tl=7,po=0,bl=1,Al=2,An=0,wl=1,Rl=2,Cl=3,Ll=4,Pl=5,mo=300,vi=301,xi=302,ua=303,da=304,Tr=306,fa=1e3,jt=1001,pa=1002,Rt=1003,Oa=1004,Lr=1005,Ht=1006,Dl=1007,Oi=1008,wn=1009,Ul=1010,Il=1011,Sa=1012,go=1013,yn=1014,Tn=1015,zi=1016,_o=1017,vo=1018,Hn=1020,Nl=1021,Kt=1023,Fl=1024,Ol=1025,Vn=1026,Mi=1027,zl=1028,xo=1029,Bl=1030,Mo=1031,So=1033,Pr=33776,Dr=33777,Ur=33778,Ir=33779,za=35840,Ba=35841,Ga=35842,Ha=35843,Gl=36196,Va=37492,ka=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,ja=37812,Ka=37813,Za=37814,$a=37815,Ja=37816,Qa=37817,es=37818,ts=37819,ns=37820,is=37821,Nr=36492,rs=36494,as=36495,Hl=36283,ss=36284,os=36285,ls=36286,Eo=3e3,kn=3001,Vl=3200,kl=3201,yo=0,Wl=1,kt="",Mt="srgb",mn="srgb-linear",Ea="display-p3",br="display-p3-linear",vr="linear",rt="srgb",xr="rec709",Mr="p3",$n=7680,cs=519,Xl=512,ql=513,Yl=514,jl=515,Kl=516,Zl=517,$l=518,Jl=519,hs=35044,us="300 es",ma=1035,fn=2e3,Sr=2001;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ds=1234567;const Ii=Math.PI/180,Bi=180/Math.PI;function Ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function ya(n,e){return(n%e+e)%e}function Ql(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ec(n,e,t){return n!==e?(t-n)/(e-n):0}function Ni(n,e,t){return(1-t)*n+t*e}function tc(n,e,t,i){return Ni(n,e,1-Math.exp(-t*i))}function nc(n,e=1){return e-Math.abs(ya(n,e*2)-e)}function ic(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ac(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sc(n,e){return n+Math.random()*(e-n)}function oc(n){return n*(.5-Math.random())}function lc(n){n!==void 0&&(ds=n);let e=ds+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cc(n){return n*Ii}function hc(n){return n*Bi}function ga(n){return(n&n-1)===0&&n!==0}function uc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Er(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dc(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),h=o((e+i)/2),d=a((e-i)/2),f=o((e-i)/2),m=a((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(s*h,l*d,l*f,s*c);break;case"YZY":n.set(l*f,s*h,l*d,s*c);break;case"ZXZ":n.set(l*d,l*f,s*h,s*c);break;case"XZX":n.set(s*h,l*v,l*m,s*c);break;case"YXY":n.set(l*m,s*h,l*v,s*c);break;case"ZYZ":n.set(l*v,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pi={DEG2RAD:Ii,RAD2DEG:Bi,generateUUID:Ei,clamp:Tt,euclideanModulo:ya,mapLinear:Ql,inverseLerp:ec,lerp:Ni,damp:tc,pingpong:nc,smoothstep:ic,smootherstep:rc,randInt:ac,randFloat:sc,randFloatSpread:oc,seededRandom:lc,degToRad:cc,radToDeg:hc,isPowerOfTwo:ga,ceilPowerOfTwo:uc,floorPowerOfTwo:Er,setQuaternionFromProperEuler:dc,normalize:At,denormalize:fi};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,r,a,o,s,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],v=i[8],x=r[0],p=r[3],u=r[6],y=r[1],g=r[4],w=r[7],T=r[2],R=r[5],b=r[8];return a[0]=o*x+s*y+l*T,a[3]=o*p+s*g+l*R,a[6]=o*u+s*w+l*b,a[1]=c*x+h*y+d*T,a[4]=c*p+h*g+d*R,a[7]=c*u+h*w+d*b,a[2]=f*x+m*y+v*T,a[5]=f*p+m*g+v*R,a[8]=f*u+m*w+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*a*h+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=h*o-s*c,f=s*l-h*a,m=c*a-o*l,v=t*d+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-h*i)*x,e[2]=(s*i-r*o)*x,e[3]=f*x,e[4]=(h*t-r*l)*x,e[5]=(r*a-s*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ke;function To(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fc(){const n=yr("canvas");return n.style.display="block",n}const fs={};function Fi(n){n in fs||(fs[n]=!0,console.warn(n))}const ps=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ms=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[mn]:{transfer:vr,primaries:xr,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:rt,primaries:xr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[br]:{transfer:vr,primaries:Mr,toReference:n=>n.applyMatrix3(ms),fromReference:n=>n.applyMatrix3(ps)},[Ea]:{transfer:rt,primaries:Mr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ms),fromReference:n=>n.applyMatrix3(ps).convertLinearToSRGB()}},pc=new Set([mn,br]),Qe={enabled:!0,_workingColorSpace:mn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Wi[e].toReference,r=Wi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Wi[n].primaries},getTransfer:function(n){return n===kt?vr:Wi[n].transfer}};function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jn;class bo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=yr("canvas")),Jn.width=e.width,Jn.height=e.height;const i=Jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=_i(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mc=0;class Ao{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(zr(r[o].image)):a.push(zr(r[o]))}else a=zr(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function zr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;class zt extends Yn{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=jt,r=jt,a=Ht,o=Oi,s=Kt,l=wn,c=zt.DEFAULT_ANISOTROPY,h=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Ei(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===kn?Mt:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?kn:Eo}set encoding(e){Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kn?Mt:kt}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=mo;zt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],v=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,w=(m+1)/2,T=(u+1)/2,R=(h+f)/4,b=(d+x)/4,V=(v+p)/4;return g>w&&g>T?g<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(g),r=R/i,a=b/i):w>T?w<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),i=R/r,a=V/r):T<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),i=b/a,r=V/a),this.set(i,r,a,t),this}let y=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _c extends Yn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kn?Mt:kt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends _c{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wo extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=a[o+0],m=a[o+1],v=a[o+2],x=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(d!==x||l!==f||c!==m||h!==v){let p=1-s;const u=l*f+c*m+h*v+d*x,y=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const T=Math.sqrt(g),R=Math.atan2(T,u*y);p=Math.sin(p*R)/T,s=Math.sin(s*R)/T}const w=s*y;if(l=l*p+f*w,c=c*p+m*w,h=h*p+v*w,d=d*p+x*w,p===1-s){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=a[o],f=a[o+1],m=a[o+2],v=a[o+3];return e[t]=s*v+h*d+l*m-c*f,e[t+1]=l*v+h*f+c*d-s*m,e[t+2]=c*v+h*m+s*f-l*d,e[t+3]=h*v-s*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),d=s(a/2),f=l(i/2),m=l(r/2),v=l(a/2);switch(o){case"XYZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"YXZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"ZXY":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"ZYX":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"YZX":this._x=f*h*d+c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d-f*m*v;break;case"XZY":this._x=f*h*d-c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(a-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(o-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+r*c-a*l,this._y=r*h+o*l+a*s-i*c,this._z=a*h+o*c+i*l-r*s,this._w=o*h-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),h=2*(s*t-a*r),d=2*(a*i-o*t);return this.x=t+l*c+o*d-s*h,this.y=i+l*h+s*c-a*d,this.z=r+l*d+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new O,gs=new Xn;class Hi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(a,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xi.copy(i.boundingBox)),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),qi.subVectors(this.max,Ai),Qn.subVectors(e.a,Ai),ei.subVectors(e.b,Ai),ti.subVectors(e.c,Ai),_n.subVectors(ei,Qn),vn.subVectors(ti,ei),Pn.subVectors(Qn,ti);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Pn.z,Pn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Pn.z,0,-Pn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Pn.y,Pn.x,0];return!Gr(t,Qn,ei,ti,qi)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,Qn,ei,ti,qi))?!1:(Yi.crossVectors(_n,vn),t=[Yi.x,Yi.y,Yi.z],Gr(t,Qn,ei,ti,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new O,new O,new O,new O,new O,new O,new O,new O],Wt=new O,Xi=new Hi,Qn=new O,ei=new O,ti=new O,_n=new O,vn=new O,Pn=new O,Ai=new O,qi=new O,Yi=new O,Dn=new O;function Gr(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Dn.fromArray(n,a);const s=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const xc=new Hi,wi=new O,Hr=new O;class Ar{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Hr)),this.expandByPoint(wi.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new O,Vr=new O,ji=new O,xn=new O,kr=new O,Ki=new O,Wr=new O;class Ta{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vr.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Vr);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ji),s=xn.dot(this.direction),l=-xn.dot(ji),c=xn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,v;if(h>0)if(d=o*l-s,f=o*s-l,v=a*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,m=d*(d+o*f+2*s)+f*(o*d+f+2*l)+c}else f=a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c);else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Vr).addScaledVector(ji,f),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const i=on.dot(this.direction),r=on.dot(on)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,r,a){kr.subVectors(t,e),Ki.subVectors(i,e),Wr.crossVectors(kr,Ki);let o=this.direction.dot(Wr),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;xn.subVectors(this.origin,e);const l=s*this.direction.dot(Ki.crossVectors(xn,Ki));if(l<0)return null;const c=s*this.direction.dot(kr.cross(xn));if(c<0||l+c>o)return null;const h=-s*xn.dot(Wr);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,a,o,s,l,c,h,d,f,m,v,x,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,h,d,f,m,v,x,p)}set(e,t,i,r,a,o,s,l,c,h,d,f,m,v,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=v,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),a=1/ni.setFromMatrixColumn(e,1).length(),o=1/ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=o*h,m=o*d,v=s*h,x=s*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-x*c,t[9]=-s*l,t[2]=x-f*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,v=c*h,x=c*d;t[0]=f+x*s,t[4]=v*s-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-s,t[2]=m*s-v,t[6]=x+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,v=c*h,x=c*d;t[0]=f-x*s,t[4]=-o*d,t[8]=v+m*s,t[1]=m+v*s,t[5]=o*h,t[9]=x-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,v=s*h,x=s*d;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,v=s*l,x=s*c;t[0]=l*h,t[4]=x-f*d,t[8]=v*d+m,t[1]=d,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*d+v,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,m=o*c,v=s*l,x=s*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=s*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mc,e,Sc)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Mn.crossVectors(i,It),Mn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Mn.crossVectors(i,It)),Mn.normalize(),Zi.crossVectors(It,Mn),r[0]=Mn.x,r[4]=Zi.x,r[8]=It.x,r[1]=Mn.y,r[5]=Zi.y,r[9]=It.y,r[2]=Mn.z,r[6]=Zi.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],v=i[2],x=i[6],p=i[10],u=i[14],y=i[3],g=i[7],w=i[11],T=i[15],R=r[0],b=r[4],V=r[8],M=r[12],A=r[1],B=r[5],j=r[9],ae=r[13],P=r[2],z=r[6],q=r[10],K=r[14],ie=r[3],$=r[7],ne=r[11],D=r[15];return a[0]=o*R+s*A+l*P+c*ie,a[4]=o*b+s*B+l*z+c*$,a[8]=o*V+s*j+l*q+c*ne,a[12]=o*M+s*ae+l*K+c*D,a[1]=h*R+d*A+f*P+m*ie,a[5]=h*b+d*B+f*z+m*$,a[9]=h*V+d*j+f*q+m*ne,a[13]=h*M+d*ae+f*K+m*D,a[2]=v*R+x*A+p*P+u*ie,a[6]=v*b+x*B+p*z+u*$,a[10]=v*V+x*j+p*q+u*ne,a[14]=v*M+x*ae+p*K+u*D,a[3]=y*R+g*A+w*P+T*ie,a[7]=y*b+g*B+w*z+T*$,a[11]=y*V+g*j+w*q+T*ne,a[15]=y*M+g*ae+w*K+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],v=e[3],x=e[7],p=e[11],u=e[15];return v*(+a*l*d-r*c*d-a*s*f+i*c*f+r*s*m-i*l*m)+x*(+t*l*m-t*c*f+a*o*f-r*o*m+r*c*h-a*l*h)+p*(+t*c*d-t*s*m-a*o*d+i*o*m+a*s*h-i*c*h)+u*(-r*s*h-t*l*d+t*s*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],v=e[12],x=e[13],p=e[14],u=e[15],y=d*p*c-x*f*c+x*l*m-s*p*m-d*l*u+s*f*u,g=v*f*c-h*p*c-v*l*m+o*p*m+h*l*u-o*f*u,w=h*x*c-v*d*c+v*s*m-o*x*m-h*s*u+o*d*u,T=v*d*l-h*x*l-v*s*f+o*x*f+h*s*p-o*d*p,R=t*y+i*g+r*w+a*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=y*b,e[1]=(x*f*a-d*p*a-x*r*m+i*p*m+d*r*u-i*f*u)*b,e[2]=(s*p*a-x*l*a+x*r*c-i*p*c-s*r*u+i*l*u)*b,e[3]=(d*l*a-s*f*a-d*r*c+i*f*c+s*r*m-i*l*m)*b,e[4]=g*b,e[5]=(h*p*a-v*f*a+v*r*m-t*p*m-h*r*u+t*f*u)*b,e[6]=(v*l*a-o*p*a-v*r*c+t*p*c+o*r*u-t*l*u)*b,e[7]=(o*f*a-h*l*a+h*r*c-t*f*c-o*r*m+t*l*m)*b,e[8]=w*b,e[9]=(v*d*a-h*x*a-v*i*m+t*x*m+h*i*u-t*d*u)*b,e[10]=(o*x*a-v*s*a+v*i*c-t*x*c-o*i*u+t*s*u)*b,e[11]=(h*s*a-o*d*a-h*i*c+t*d*c+o*i*m-t*s*m)*b,e[12]=T*b,e[13]=(h*x*r-v*d*r+v*i*f-t*x*f-h*i*p+t*d*p)*b,e[14]=(v*s*r-o*x*r-v*i*l+t*x*l+o*i*p-t*s*p)*b,e[15]=(o*d*r-h*s*r+h*i*l-t*d*l-o*i*f+t*s*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*o,0,c*l-r*s,h*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,d=s+s,f=a*c,m=a*h,v=a*d,x=o*h,p=o*d,u=s*d,y=l*c,g=l*h,w=l*d,T=i.x,R=i.y,b=i.z;return r[0]=(1-(x+u))*T,r[1]=(m+w)*T,r[2]=(v-g)*T,r[3]=0,r[4]=(m-w)*R,r[5]=(1-(f+u))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(v+g)*b,r[9]=(p-y)*b,r[10]=(1-(f+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=ni.set(r[0],r[1],r[2]).length();const o=ni.set(r[4],r[5],r[6]).length(),s=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/a,h=1/o,d=1/s;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=fn){const l=this.elements,c=2*a/(t-e),h=2*a/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,v;if(s===fn)m=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===Sr)m=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=fn){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-a),f=(t+e)*c,m=(i+r)*h;let v,x;if(s===fn)v=(o+a)*d,x=-2*d;else if(s===Sr)v=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ni=new O,Xt=new ut,Mc=new O(0,0,0),Sc=new O(1,1,1),Mn=new O,Zi=new O,It=new O,_s=new ut,vs=new Xn;class wr{constructor(e=0,t=0,i=0,r=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _s.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_s,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vs.setFromEuler(this),this.setFromQuaternion(vs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ec=0;const xs=new O,ii=new Xn,ln=new ut,$i=new O,Ri=new O,yc=new O,Tc=new Xn,Ms=new O(1,0,0),Ss=new O(0,1,0),Es=new O(0,0,1),bc={type:"added"},Ac={type:"removed"};class gt extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new O,t=new wr,i=new Xn,r=new O(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Ms,e)}rotateY(e){return this.rotateOnAxis(Ss,e)}rotateZ(e){return this.rotateOnAxis(Es,e)}translateOnAxis(e,t){return xs.copy(e).applyQuaternion(this.quaternion),this.position.add(xs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ms,e)}translateY(e){return this.translateOnAxis(Ss,e)}translateZ(e){return this.translateOnAxis(Es,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$i.copy(e):$i.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ri,$i,this.up):ln.lookAt($i,Ri,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(ln),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,yc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new O,cn=new O,Xr=new O,hn=new O,ri=new O,ai=new O,ys=new O,qr=new O,Yr=new O,jr=new O;let Ji=!1;class Yt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qt.subVectors(r,t),cn.subVectors(i,t),Xr.subVectors(e,t);const o=qt.dot(qt),s=qt.dot(cn),l=qt.dot(Xr),c=cn.dot(cn),h=cn.dot(Xr),d=o*c-s*s;if(d===0)return a.set(-2,-1,-1);const f=1/d,m=(c*l-s*h)*f,v=(o*h-s*l)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,i,r,a,o,s,l){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,hn),l.setScalar(0),l.addScaledVector(a,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(s,hn.z),l}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),cn.subVectors(e,t),qt.cross(cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),qt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;ri.subVectors(r,i),ai.subVectors(a,i),qr.subVectors(e,i);const l=ri.dot(qr),c=ai.dot(qr);if(l<=0&&c<=0)return t.copy(i);Yr.subVectors(e,r);const h=ri.dot(Yr),d=ai.dot(Yr);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ri,o);jr.subVectors(e,a);const m=ri.dot(jr),v=ai.dot(jr);if(v>=0&&m<=v)return t.copy(a);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(ai,s);const p=h*v-m*d;if(p<=0&&d-h>=0&&m-v>=0)return ys.subVectors(a,r),s=(d-h)/(d-h+(m-v)),t.copy(r).addScaledVector(ys,s);const u=1/(p+x+f);return o=x*u,s=f*u,t.copy(i).addScaledVector(ri,o).addScaledVector(ai,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Co={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Kr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=ya(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Kr(o,a,e+1/3),this.g=Kr(o,a,e),this.b=Kr(o,a,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Co[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Qe.fromWorkingColorSpace(yt.copy(this),e),Math.round(Tt(yt.r*255,0,255))*65536+Math.round(Tt(yt.g*255,0,255))*256+Math.round(Tt(yt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,a=yt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=h<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Mt){Qe.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Qi);const i=Ni(Sn.h,Qi.h,t),r=Ni(Sn.s,Qi.s,t),a=Ni(Sn.l,Qi.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Je;Je.NAMES=Co;let wc=0;class yi extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=gi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ca&&(i.blendSrc=this.blendSrc),this.blendDst!==ha&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new O,er=new We;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hs,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),a=At(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Lo extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Po extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rc=0;const Gt=new ut,Zr=new gt,si=new O,Nt=new Hi,Ci=new Hi,pt=new O;class en extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(To(e)?Po:Lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ci.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(Nt.min,Ci.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,Ci.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(Ci.min),Nt.expandByPoint(Ci.max))}Nt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)pt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)pt.fromBufferAttribute(s,c),l&&(si.fromBufferAttribute(e,c),pt.add(si)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<s;A++)c[A]=new O,h[A]=new O;const d=new O,f=new O,m=new O,v=new We,x=new We,p=new We,u=new O,y=new O;function g(A,B,j){d.fromArray(r,A*3),f.fromArray(r,B*3),m.fromArray(r,j*3),v.fromArray(o,A*2),x.fromArray(o,B*2),p.fromArray(o,j*2),f.sub(d),m.sub(d),x.sub(v),p.sub(v);const ae=1/(x.x*p.y-p.x*x.y);isFinite(ae)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(ae),y.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(ae),c[A].add(u),c[B].add(u),c[j].add(u),h[A].add(y),h[B].add(y),h[j].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let A=0,B=w.length;A<B;++A){const j=w[A],ae=j.start,P=j.count;for(let z=ae,q=ae+P;z<q;z+=3)g(i[z+0],i[z+1],i[z+2])}const T=new O,R=new O,b=new O,V=new O;function M(A){b.fromArray(a,A*3),V.copy(b);const B=c[A];T.copy(B),T.sub(b.multiplyScalar(b.dot(B))).normalize(),R.crossVectors(V,B);const ae=R.dot(h[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=ae}for(let A=0,B=w.length;A<B;++A){const j=w[A],ae=j.start,P=j.count;for(let z=ae,q=ae+P;z<q;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,a=new O,o=new O,s=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),s.add(h),l.add(h),c.add(h),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,d=s.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[m++]}return new Zt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ts=new ut,Un=new Ta,tr=new Ar,bs=new O,oi=new O,li=new O,ci=new O,$r=new O,nr=new O,ir=new We,rr=new We,ar=new We,As=new O,ws=new O,Rs=new O,sr=new O,or=new O;class Ot extends gt{constructor(e=new en,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){nr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],d=a[l];h!==0&&($r.fromBufferAttribute(d,e),o?nr.addScaledVector($r,h):nr.addScaledVector($r.sub(t),h))}t.add(nr)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(a),Un.copy(e.ray).recast(e.near),!(tr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(tr,bs)===null||Un.origin.distanceToSquared(bs)>(e.far-e.near)**2))&&(Ts.copy(a).invert(),Un.copy(e.ray).applyMatrix4(Ts),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const p=f[v],u=o[p.materialIndex],y=Math.max(p.start,m.start),g=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=g;w<T;w+=3){const R=s.getX(w),b=s.getX(w+1),V=s.getX(w+2);r=lr(this,u,e,i,c,h,d,R,b,V),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const y=s.getX(p),g=s.getX(p+1),w=s.getX(p+2);r=lr(this,o,e,i,c,h,d,y,g,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const p=f[v],u=o[p.materialIndex],y=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=g;w<T;w+=3){const R=w,b=w+1,V=w+2;r=lr(this,u,e,i,c,h,d,R,b,V),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const y=p,g=p+1,w=p+2;r=lr(this,o,e,i,c,h,d,y,g,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Cc(n,e,t,i,r,a,o,s){let l;if(e.side===Pt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Rn,s),l===null)return null;or.copy(s),or.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(or);return c<t.near||c>t.far?null:{distance:c,point:or.clone(),object:n}}function lr(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,oi),n.getVertexPosition(l,li),n.getVertexPosition(c,ci);const h=Cc(n,e,t,i,oi,li,ci,sr);if(h){r&&(ir.fromBufferAttribute(r,s),rr.fromBufferAttribute(r,l),ar.fromBufferAttribute(r,c),h.uv=Yt.getInterpolation(sr,oi,li,ci,ir,rr,ar,new We)),a&&(ir.fromBufferAttribute(a,s),rr.fromBufferAttribute(a,l),ar.fromBufferAttribute(a,c),h.uv1=Yt.getInterpolation(sr,oi,li,ci,ir,rr,ar,new We),h.uv2=h.uv1),o&&(As.fromBufferAttribute(o,s),ws.fromBufferAttribute(o,l),Rs.fromBufferAttribute(o,c),h.normal=Yt.getInterpolation(sr,oi,li,ci,As,ws,Rs,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new O,materialIndex:0};Yt.getNormal(oi,li,ci,d.normal),h.face=d}return h}class Vi extends en{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,o,a,0),v("z","y","x",1,-1,i,t,-e,o,a,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function v(x,p,u,y,g,w,T,R,b,V,M){const A=w/b,B=T/V,j=w/2,ae=T/2,P=R/2,z=b+1,q=V+1;let K=0,ie=0;const $=new O;for(let ne=0;ne<q;ne++){const D=ne*B-ae;for(let N=0;N<z;N++){const pe=N*A-j;$[x]=pe*y,$[p]=D*g,$[u]=P,c.push($.x,$.y,$.z),$[x]=0,$[p]=0,$[u]=R>0?1:-1,h.push($.x,$.y,$.z),d.push(N/b),d.push(1-ne/V),K+=1}}for(let ne=0;ne<V;ne++)for(let D=0;D<b;D++){const N=f+D+z*ne,pe=f+D+z*(ne+1),fe=f+(D+1)+z*(ne+1),te=f+(D+1)+z*ne;l.push(N,pe,te),l.push(pe,fe,te),ie+=6}s.addGroup(m,ie,M),m+=ie,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=Si(n[t]);for(const r in i)e[r]=i[r]}return e}function Lc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Do(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const Pc={clone:Si,merge:wt};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uo extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Uo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ii*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class Ic extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(hi,ui,e,t);r.layers=this.layers,this.add(r);const a=new Vt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Vt(hi,ui,e,t);o.layers=this.layers,this.add(o);const s=new Vt(hi,ui,e,t);s.layers=this.layers,this.add(s);const l=new Vt(hi,ui,e,t);l.layers=this.layers,this.add(l);const c=new Vt(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Io extends zt{constructor(e,t,i,r,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:vi,super(e,t,i,r,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nc extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===kn?Mt:kt),this.texture=new Io(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vi(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:Si(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:bn});a.uniforms.tEquirect.value=t;const o=new Ot(r,a),s=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Ht),new Ic(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const Jr=new O,Fc=new O,Oc=new Ke;class En{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jr.subVectors(i,t).cross(Fc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Oc.getNormalMatrix(e),r=this.coplanarPoint(Jr).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ar,cr=new O;class Aa{constructor(e=new En,t=new En,i=new En,r=new En,a=new En,o=new En){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],v=r[9],x=r[10],p=r[11],u=r[12],y=r[13],g=r[14],w=r[15];if(i[0].setComponents(l-a,f-c,p-m,w-u).normalize(),i[1].setComponents(l+a,f+c,p+m,w+u).normalize(),i[2].setComponents(l+o,f+h,p+v,w+y).normalize(),i[3].setComponents(l-o,f-h,p-v,w-y).normalize(),i[4].setComponents(l-s,f-d,p-x,w-g).normalize(),t===fn)i[5].setComponents(l+s,f+d,p+x,w+g).normalize();else if(t===Sr)i[5].setComponents(s,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cr.x=r.normal.x>0?e.max.x:e.min.x,cr.y=r.normal.y>0?e.max.y:e.min.y,cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function No(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function zc(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,d){const f=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(a(d.buffer,c,h),d.version=c.version)}return{get:o,remove:s,update:l}}class wa extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,d=e/s,f=t/l,m=[],v=[],x=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let g=0;g<c;g++){const w=g*d-a;v.push(w,-y,0),x.push(0,0,1),p.push(g/s),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<s;y++){const g=y+c*u,w=y+c*(u+1),T=y+1+c*(u+1),R=y+1+c*u;m.push(g,w,R),m.push(w,T,R)}this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$c=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Oh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Su=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ou=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ku=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,td=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Bc,alphahash_pars_fragment:Gc,alphamap_fragment:Hc,alphamap_pars_fragment:Vc,alphatest_fragment:kc,alphatest_pars_fragment:Wc,aomap_fragment:Xc,aomap_pars_fragment:qc,begin_vertex:Yc,beginnormal_vertex:jc,bsdfs:Kc,iridescence_fragment:Zc,bumpmap_pars_fragment:$c,clipping_planes_fragment:Jc,clipping_planes_pars_fragment:Qc,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:ah,common:sh,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:hh,emissivemap_fragment:uh,emissivemap_pars_fragment:dh,colorspace_fragment:fh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:_h,envmap_pars_vertex:vh,envmap_physical_pars_fragment:Lh,envmap_vertex:xh,fog_vertex:Mh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:yh,gradientmap_pars_fragment:Th,lightmap_fragment:bh,lightmap_pars_fragment:Ah,lights_lambert_fragment:wh,lights_lambert_pars_fragment:Rh,lights_pars_begin:Ch,lights_toon_fragment:Ph,lights_toon_pars_fragment:Dh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Nh,lights_physical_pars_fragment:Fh,lights_fragment_begin:Oh,lights_fragment_maps:zh,lights_fragment_end:Bh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:kh,map_fragment:Wh,map_pars_fragment:Xh,map_particle_fragment:qh,map_particle_pars_fragment:Yh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:Kh,morphcolor_vertex:Zh,morphnormal_vertex:$h,morphtarget_pars_vertex:Jh,morphtarget_vertex:Qh,normal_fragment_begin:eu,normal_fragment_maps:tu,normal_pars_fragment:nu,normal_pars_vertex:iu,normal_vertex:ru,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:su,clearcoat_normal_fragment_maps:ou,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,opaque_fragment:hu,packing:uu,premultiplied_alpha_fragment:du,project_vertex:fu,dithering_fragment:pu,dithering_pars_fragment:mu,roughnessmap_fragment:gu,roughnessmap_pars_fragment:_u,shadowmap_pars_fragment:vu,shadowmap_pars_vertex:xu,shadowmap_vertex:Mu,shadowmask_pars_fragment:Su,skinbase_vertex:Eu,skinning_pars_vertex:yu,skinning_vertex:Tu,skinnormal_vertex:bu,specularmap_fragment:Au,specularmap_pars_fragment:wu,tonemapping_fragment:Ru,tonemapping_pars_fragment:Cu,transmission_fragment:Lu,transmission_pars_fragment:Pu,uv_pars_fragment:Du,uv_pars_vertex:Uu,uv_vertex:Iu,worldpos_vertex:Nu,background_vert:Fu,background_frag:Ou,backgroundCube_vert:zu,backgroundCube_frag:Bu,cube_vert:Gu,cube_frag:Hu,depth_vert:Vu,depth_frag:ku,distanceRGBA_vert:Wu,distanceRGBA_frag:Xu,equirect_vert:qu,equirect_frag:Yu,linedashed_vert:ju,linedashed_frag:Ku,meshbasic_vert:Zu,meshbasic_frag:$u,meshlambert_vert:Ju,meshlambert_frag:Qu,meshmatcap_vert:ed,meshmatcap_frag:td,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:rd,meshphong_frag:ad,meshphysical_vert:sd,meshphysical_frag:od,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:hd,points_frag:ud,shadow_vert:dd,shadow_frag:fd,sprite_vert:pd,sprite_frag:md},ye={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Qt={basic:{uniforms:wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:wt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:wt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:wt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:wt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:wt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:wt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:wt([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:wt([ye.lights,ye.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Qt.physical={uniforms:wt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const hr={r:0,b:0,g:0};function gd(n,e,t,i,r,a,o){const s=new Je(0);let l=a===!0?0:1,c,h,d=null,f=0,m=null;function v(p,u){let y=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?t:e).get(g)),g===null?x(s,l):g&&g.isColor&&(x(g,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Tr)?(h===void 0&&(h=new Ot(new Vi(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Si(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,(d!==g||f!==g.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ot(new wa(2,2),new qn({name:"BackgroundMaterial",uniforms:Si(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(hr,Do(n)),i.buffers.color.setClear(hr.r,hr.g,hr.b,u,o)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),l=u,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(s,l)},render:v}}function _d(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=p(null);let c=l,h=!1;function d(P,z,q,K,ie){let $=!1;if(o){const ne=x(K,q,z);c!==ne&&(c=ne,m(c.object)),$=u(P,K,q,ie),$&&y(P,K,q,ie)}else{const ne=z.wireframe===!0;(c.geometry!==K.id||c.program!==q.id||c.wireframe!==ne)&&(c.geometry=K.id,c.program=q.id,c.wireframe=ne,$=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,V(P,z,q,K),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):a.bindVertexArrayOES(P)}function v(P){return i.isWebGL2?n.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function x(P,z,q){const K=q.wireframe===!0;let ie=s[P.id];ie===void 0&&(ie={},s[P.id]=ie);let $=ie[z.id];$===void 0&&($={},ie[z.id]=$);let ne=$[K];return ne===void 0&&(ne=p(f()),$[K]=ne),ne}function p(P){const z=[],q=[],K=[];for(let ie=0;ie<r;ie++)z[ie]=0,q[ie]=0,K[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:K,object:P,attributes:{},index:null}}function u(P,z,q,K){const ie=c.attributes,$=z.attributes;let ne=0;const D=q.getAttributes();for(const N in D)if(D[N].location>=0){const fe=ie[N];let te=$[N];if(te===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),fe===void 0||fe.attribute!==te||te&&fe.data!==te.data)return!0;ne++}return c.attributesNum!==ne||c.index!==K}function y(P,z,q,K){const ie={},$=z.attributes;let ne=0;const D=q.getAttributes();for(const N in D)if(D[N].location>=0){let fe=$[N];fe===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor));const te={};te.attribute=fe,fe&&fe.data&&(te.data=fe.data),ie[N]=te,ne++}c.attributes=ie,c.attributesNum=ne,c.index=K}function g(){const P=c.newAttributes;for(let z=0,q=P.length;z<q;z++)P[z]=0}function w(P){T(P,0)}function T(P,z){const q=c.newAttributes,K=c.enabledAttributes,ie=c.attributeDivisors;q[P]=1,K[P]===0&&(n.enableVertexAttribArray(P),K[P]=1),ie[P]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),ie[P]=z)}function R(){const P=c.newAttributes,z=c.enabledAttributes;for(let q=0,K=z.length;q<K;q++)z[q]!==P[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function b(P,z,q,K,ie,$,ne){ne===!0?n.vertexAttribIPointer(P,z,q,ie,$):n.vertexAttribPointer(P,z,q,K,ie,$)}function V(P,z,q,K){if(i.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const ie=K.attributes,$=q.getAttributes(),ne=z.defaultAttributeValues;for(const D in $){const N=$[D];if(N.location>=0){let pe=ie[D];if(pe===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),pe!==void 0){const fe=pe.normalized,te=pe.itemSize,ue=t.get(pe);if(ue===void 0)continue;const Ce=ue.buffer,xe=ue.type,Re=ue.bytesPerElement,Pe=i.isWebGL2===!0&&(xe===n.INT||xe===n.UNSIGNED_INT||pe.gpuType===go);if(pe.isInterleavedBufferAttribute){const Ie=pe.data,U=Ie.stride,Ye=pe.offset;if(Ie.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)T(N.location+ge,Ie.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let ge=0;ge<N.locationSize;ge++)w(N.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ge=0;ge<N.locationSize;ge++)b(N.location+ge,te/N.locationSize,xe,fe,U*Re,(Ye+te/N.locationSize*ge)*Re,Pe)}else{if(pe.isInstancedBufferAttribute){for(let Ie=0;Ie<N.locationSize;Ie++)T(N.location+Ie,pe.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ie=0;Ie<N.locationSize;Ie++)w(N.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ie=0;Ie<N.locationSize;Ie++)b(N.location+Ie,te/N.locationSize,xe,fe,te*Re,te/N.locationSize*Ie*Re,Pe)}}else if(ne!==void 0){const fe=ne[D];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(N.location,fe);break;case 3:n.vertexAttrib3fv(N.location,fe);break;case 4:n.vertexAttrib4fv(N.location,fe);break;default:n.vertexAttrib1fv(N.location,fe)}}}}R()}function M(){j();for(const P in s){const z=s[P];for(const q in z){const K=z[q];for(const ie in K)v(K[ie].object),delete K[ie];delete z[q]}delete s[P]}}function A(P){if(s[P.id]===void 0)return;const z=s[P.id];for(const q in z){const K=z[q];for(const ie in K)v(K[ie].object),delete K[ie];delete z[q]}delete s[P.id]}function B(P){for(const z in s){const q=s[z];if(q[P.id]===void 0)continue;const K=q[P.id];for(const ie in K)v(K[ie].object),delete K[ie];delete q[P.id]}}function j(){ae(),h=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:ae,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:w,disableUnusedAttributes:R}}function vd(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,h){n.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](a,c,h,d),t.update(h,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function xd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,w=o||e.has("OES_texture_float"),T=g&&w,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:R}}function Md(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new En,s=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||v===null||v.length===0||a&&!p)a?h(null):c();else{const y=a?0:i,g=y*4;let w=u.clippingState||null;l.value=w,w=h(v,f,g,m);for(let T=0;T!==g;++T)w[T]=t[T];u.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const u=m+x*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,w=m;g!==x;++g,w+=4)o.copy(d[g]).applyMatrix4(y,s),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Sd(n){let e=new WeakMap;function t(o,s){return s===ua?o.mapping=vi:s===da&&(o.mapping=xi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ua||s===da)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Fo extends Uo{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,Cs=[.125,.215,.35,.446,.526,.582],On=20,Qr=new Fo,Ls=new Je;let ea=null,ta=0,na=0;const Nn=(1+Math.sqrt(5))/2,di=1/Nn,Ps=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Nn,di),new O(0,Nn,-di),new O(di,0,Nn),new O(-di,0,Nn),new O(Nn,di,0),new O(-Nn,di,0)];class Ds{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ns(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Is(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,na),e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:zi,format:Kt,colorSpace:mn,depthBuffer:!1},r=Us(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Us(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ed(a)),this._blurMaterial=yd(a,e,t)}return r}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,i,r){const s=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ls),h.toneMapping=An,h.autoClear=!1;const m=new ba({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),v=new Ot(new Vi,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ls),x=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):y===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const g=this._cubeSize;ur(r,y*g,u>2?g:0,g,g),h.setRenderTarget(r),x&&h.render(v,s),h.render(e,s)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vi||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ns()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Is());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ps[(r-1)%Ps.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ot(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*On-1),x=a/v,p=isFinite(a)?1+Math.floor(h*x):On;p>On&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const u=[];let y=0;for(let b=0;b<On;++b){const V=b/x,M=Math.exp(-V*V/2);u.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const w=this._sizeLods[r],T=3*w*(r>g-pi?r-g+pi:0),R=4*(this._cubeSize-w);ur(t,T,R,3*w,2*w),l.setRenderTarget(t),l.render(d,Qr)}}function Ed(n){const e=[],t=[],i=[];let r=n;const a=n-pi+1+Cs.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-pi?l=Cs[o-n+pi-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,x=3,p=2,u=1,y=new Float32Array(x*v*m),g=new Float32Array(p*v*m),w=new Float32Array(u*v*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,V=R>2?0:-1,M=[b,V,0,b+2/3,V,0,b+2/3,V+1,0,b,V,0,b+2/3,V+1,0,b,V+1,0];y.set(M,x*v*R),g.set(f,p*v*R);const A=[R,R,R,R,R,R];w.set(A,u*v*R)}const T=new en;T.setAttribute("position",new Zt(y,x)),T.setAttribute("uv",new Zt(g,p)),T.setAttribute("faceIndex",new Zt(w,u)),e.push(T),r>pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Us(n,e,t){const i=new Wn(n,e,t);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yd(n,e,t){const i=new Float32Array(On),r=new O(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Is(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ns(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Td(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===ua||l===da,h=l===vi||l===xi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Ds(n)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ds(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ad(n,e,t,i){const r={},a=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,u=x.length;p<u;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let g=0,w=y.length;g<w;g+=3){const T=y[g+0],R=y[g+1],b=y[g+2];f.push(T,R,R,b,b,T)}}else if(v!==void 0){const y=v.array;x=v.version;for(let g=0,w=y.length/3-1;g<w;g+=3){const T=g+0,R=g+1,b=g+2;f.push(T,R,R,b,b,T)}}else return;const p=new(To(f)?Po:Lo)(f,1);p.version=x;const u=a.get(d);u&&e.remove(u),a.set(d,p)}function h(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function wd(n,e,t,i){const r=i.isWebGL2;let a;function o(f){a=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function h(f,m){n.drawElements(a,m,s,f*l),t.update(m,a,1)}function d(f,m,v){if(v===0)return;let x,p;if(r)x=n,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](a,m,s,f*l,v),t.update(m,a,v)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Rd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Cd(n,e){return n[0]-e[0]}function Ld(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Pd(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new mt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let x=a.get(h);if(x===void 0||x.count!==v){let P=function(){j.dispose(),a.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let V=0;y===!0&&(V=1),g===!0&&(V=2),w===!0&&(V=3);let M=h.attributes.position.count*V,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const B=new Float32Array(M*A*4*v),j=new wo(B,M,A,v);j.type=Tn,j.needsUpdate=!0;const ae=V*4;for(let z=0;z<v;z++){const q=T[z],K=R[z],ie=b[z],$=M*A*4*z;for(let ne=0;ne<q.count;ne++){const D=ne*ae;y===!0&&(o.fromBufferAttribute(q,ne),B[$+D+0]=o.x,B[$+D+1]=o.y,B[$+D+2]=o.z,B[$+D+3]=0),g===!0&&(o.fromBufferAttribute(K,ne),B[$+D+4]=o.x,B[$+D+5]=o.y,B[$+D+6]=o.z,B[$+D+7]=0),w===!0&&(o.fromBufferAttribute(ie,ne),B[$+D+8]=o.x,B[$+D+9]=o.y,B[$+D+10]=o.z,B[$+D+11]=ie.itemSize===4?o.w:1)}}x={count:v,texture:j,size:new We(M,A)},a.set(h,x),h.addEventListener("dispose",P)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const m=f===void 0?0:f.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let g=0;g<m;g++)v[g]=[g,0];i[h.id]=v}for(let g=0;g<m;g++){const w=v[g];w[0]=g,w[1]=f[g]}v.sort(Ld);for(let g=0;g<8;g++)g<m&&v[g][1]?(s[g][0]=v[g][0],s[g][1]=v[g][1]):(s[g][0]=Number.MAX_SAFE_INTEGER,s[g][1]=0);s.sort(Cd);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let u=0;for(let g=0;g<8;g++){const w=s[g],T=w[0],R=w[1];T!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+g)!==x[T]&&h.setAttribute("morphTarget"+g,x[T]),p&&h.getAttribute("morphNormal"+g)!==p[T]&&h.setAttribute("morphNormal"+g,p[T]),r[g]=R,u+=R):(x&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),p&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),r[g]=0)}const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Dd(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Oo=new zt,zo=new wo,Bo=new vc,Go=new Io,Fs=[],Os=[],zs=new Float32Array(16),Bs=new Float32Array(9),Gs=new Float32Array(4);function Ti(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Fs[r];if(a===void 0&&(a=new Float32Array(r),Fs[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rr(n,e){let t=Os[e];t===void 0&&(t=new Int32Array(e),Os[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ud(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Id(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Nd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Fd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Od(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Gs.set(i),n.uniformMatrix2fv(this.addr,!1,Gs),ft(t,i)}}function zd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Bs.set(i),n.uniformMatrix3fv(this.addr,!1,Bs),ft(t,i)}}function Bd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;zs.set(i),n.uniformMatrix4fv(this.addr,!1,zs),ft(t,i)}}function Gd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Hd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Vd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Wd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function qd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Yd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function jd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Oo,r)}function Kd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bo,r)}function Zd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Go,r)}function $d(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zo,r)}function Jd(n){switch(n){case 5126:return Ud;case 35664:return Id;case 35665:return Nd;case 35666:return Fd;case 35674:return Od;case 35675:return zd;case 35676:return Bd;case 5124:case 35670:return Gd;case 35667:case 35671:return Hd;case 35668:case 35672:return Vd;case 35669:case 35673:return kd;case 5125:return Wd;case 36294:return Xd;case 36295:return qd;case 36296:return Yd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return $d}}function Qd(n,e){n.uniform1fv(this.addr,e)}function ef(n,e){const t=Ti(e,this.size,2);n.uniform2fv(this.addr,t)}function tf(n,e){const t=Ti(e,this.size,3);n.uniform3fv(this.addr,t)}function nf(n,e){const t=Ti(e,this.size,4);n.uniform4fv(this.addr,t)}function rf(n,e){const t=Ti(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function af(n,e){const t=Ti(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sf(n,e){const t=Ti(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function of(n,e){n.uniform1iv(this.addr,e)}function lf(n,e){n.uniform2iv(this.addr,e)}function cf(n,e){n.uniform3iv(this.addr,e)}function hf(n,e){n.uniform4iv(this.addr,e)}function uf(n,e){n.uniform1uiv(this.addr,e)}function df(n,e){n.uniform2uiv(this.addr,e)}function ff(n,e){n.uniform3uiv(this.addr,e)}function pf(n,e){n.uniform4uiv(this.addr,e)}function mf(n,e,t){const i=this.cache,r=e.length,a=Rr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oo,a[o])}function gf(n,e,t){const i=this.cache,r=e.length,a=Rr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bo,a[o])}function _f(n,e,t){const i=this.cache,r=e.length,a=Rr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Go,a[o])}function vf(n,e,t){const i=this.cache,r=e.length,a=Rr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zo,a[o])}function xf(n){switch(n){case 5126:return Qd;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return rf;case 35675:return af;case 35676:return sf;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return df;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return vf}}class Mf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Jd(t.type)}}class Sf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=xf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Hs(n,e){n.seq.push(e),n.map[e.id]=e}function yf(n,e,t){const i=n.name,r=i.length;for(ia.lastIndex=0;;){const a=ia.exec(i),o=ia.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Hs(t,c===void 0?new Mf(s,n,e):new Sf(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new Ef(s),Hs(t,d)),t=d}}}class gr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);yf(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vs(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tf=37297;let bf=0;function Af(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function wf(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Mr&&t===xr?i="LinearDisplayP3ToLinearSRGB":e===xr&&t===Mr&&(i="LinearSRGBToLinearDisplayP3"),n){case mn:case br:return[i,"LinearTransferOETF"];case Mt:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ks(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Af(n.getShaderSource(e),o)}else return r}function Rf(n,e){const t=wf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cf(n,e){let t;switch(e){case wl:t="Linear";break;case Rl:t="Reinhard";break;case Cl:t="OptimizedCineon";break;case Ll:t="ACESFilmic";break;case Pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function Pf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Df(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Di(n){return n!==""}function Ws(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xs(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(n){return n.replace(Uf,Nf)}const If=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nf(n,e){let t=qe[e];if(t===void 0){const i=If.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const Ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qs(n){return n.replace(Ff,Of)}function Of(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ys(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zf(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Bf(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vi:case xi:e="ENVMAP_TYPE_CUBE";break;case Tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gf(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Hf(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case po:e="ENVMAP_BLENDING_MULTIPLY";break;case bl:e="ENVMAP_BLENDING_MIX";break;case Al:e="ENVMAP_BLENDING_ADD";break}return e}function Vf(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kf(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=zf(t),c=Bf(t),h=Gf(t),d=Hf(t),f=Vf(t),m=t.isWebGL2?"":Lf(t),v=Pf(a),x=r.createProgram();let p,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Di).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Di).join(`
`),u.length>0&&(u+=`
`)):(p=[Ys(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),u=[m,Ys(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?qe.tonemapping_pars_fragment:"",t.toneMapping!==An?Cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Rf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),o=_a(o),o=Ws(o,t),o=Xs(o,t),s=_a(s),s=Ws(s,t),s=Xs(s,t),o=qs(o),s=qs(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===us?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===us?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=y+p+o,w=y+u+s,T=Vs(r,r.VERTEX_SHADER,g),R=Vs(r,r.FRAGMENT_SHADER,w);r.attachShader(x,T),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(B){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),ae=r.getShaderInfoLog(T).trim(),P=r.getShaderInfoLog(R).trim();let z=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,R);else{const K=ks(r,T,"vertex"),ie=ks(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+K+`
`+ie)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(ae===""||P==="")&&(q=!1);q&&(B.diagnostics={runnable:z,programLog:j,vertexShader:{log:ae,prefix:p},fragmentShader:{log:P,prefix:u}})}r.deleteShader(T),r.deleteShader(R),V=new gr(r,x),M=Df(r,x)}let V;this.getUniforms=function(){return V===void 0&&b(this),V};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(x,Tf)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}let Wf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qf(e),t.set(e,i)),i}}class qf{constructor(e){this.id=Wf++,this.code=e,this.usedTimes=0}}function Yf(n,e,t,i,r,a,o){const s=new Ro,l=new Xf,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,A,B,j,ae){const P=j.fog,z=ae.geometry,q=M.isMeshStandardMaterial?j.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),ie=K&&K.mapping===Tr?K.image.height:null,$=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,D=ne!==void 0?ne.length:0;let N=0;z.morphAttributes.position!==void 0&&(N=1),z.morphAttributes.normal!==void 0&&(N=2),z.morphAttributes.color!==void 0&&(N=3);let pe,fe,te,ue;if($){const Ze=Qt[$];pe=Ze.vertexShader,fe=Ze.fragmentShader}else pe=M.vertexShader,fe=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const Ce=n.getRenderTarget(),xe=ae.isInstancedMesh===!0,Re=!!M.map,Pe=!!M.matcap,Ie=!!K,U=!!M.aoMap,Ye=!!M.lightMap,ge=!!M.bumpMap,Se=!!M.normalMap,Te=!!M.displacementMap,Ne=!!M.emissiveMap,Me=!!M.metalnessMap,be=!!M.roughnessMap,we=M.anisotropy>0,Ue=M.clearcoat>0,He=M.iridescence>0,E=M.sheen>0,_=M.transmission>0,I=we&&!!M.anisotropyMap,oe=Ue&&!!M.clearcoatMap,re=Ue&&!!M.clearcoatNormalMap,le=Ue&&!!M.clearcoatRoughnessMap,Ee=He&&!!M.iridescenceMap,de=He&&!!M.iridescenceThicknessMap,_e=E&&!!M.sheenColorMap,L=E&&!!M.sheenRoughnessMap,ce=!!M.specularMap,Q=!!M.specularColorMap,De=!!M.specularIntensityMap,G=_&&!!M.transmissionMap,W=_&&!!M.thicknessMap,ee=!!M.gradientMap,Z=!!M.alphaMap,ve=M.alphaTest>0,C=!!M.alphaHash,se=!!M.extensions,J=!!z.attributes.uv1,Y=!!z.attributes.uv2,he=!!z.attributes.uv3;let Le=An;return M.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Le=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:fe,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:xe,instancingColor:xe&&ae.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:mn,map:Re,matcap:Pe,envMap:Ie,envMapMode:Ie&&K.mapping,envMapCubeUVHeight:ie,aoMap:U,lightMap:Ye,bumpMap:ge,normalMap:Se,displacementMap:f&&Te,emissiveMap:Ne,normalMapObjectSpace:Se&&M.normalMapType===Wl,normalMapTangentSpace:Se&&M.normalMapType===yo,metalnessMap:Me,roughnessMap:be,anisotropy:we,anisotropyMap:I,clearcoat:Ue,clearcoatMap:oe,clearcoatNormalMap:re,clearcoatRoughnessMap:le,iridescence:He,iridescenceMap:Ee,iridescenceThicknessMap:de,sheen:E,sheenColorMap:_e,sheenRoughnessMap:L,specularMap:ce,specularColorMap:Q,specularIntensityMap:De,transmission:_,transmissionMap:G,thicknessMap:W,gradientMap:ee,opaque:M.transparent===!1&&M.blending===gi,alphaMap:Z,alphaTest:ve,alphaHash:C,combine:M.combine,mapUv:Re&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:Ye&&x(M.lightMap.channel),bumpMapUv:ge&&x(M.bumpMap.channel),normalMapUv:Se&&x(M.normalMap.channel),displacementMapUv:Te&&x(M.displacementMap.channel),emissiveMapUv:Ne&&x(M.emissiveMap.channel),metalnessMapUv:Me&&x(M.metalnessMap.channel),roughnessMapUv:be&&x(M.roughnessMap.channel),anisotropyMapUv:I&&x(M.anisotropyMap.channel),clearcoatMapUv:oe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:L&&x(M.sheenRoughnessMap.channel),specularMapUv:ce&&x(M.specularMap.channel),specularColorMapUv:Q&&x(M.specularColorMap.channel),specularIntensityMapUv:De&&x(M.specularIntensityMap.channel),transmissionMapUv:G&&x(M.transmissionMap.channel),thicknessMapUv:W&&x(M.thicknessMap.channel),alphaMapUv:Z&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Se||we),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:Y,vertexUv3s:he,pointsUvs:ae.isPoints===!0&&!!z.attributes.uv&&(Re||Z),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ae.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:N,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)A.push(B),A.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(y(A,M),g(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function g(M,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),A.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function w(M){const A=v[M.type];let B;if(A){const j=Qt[A];B=Pc.clone(j.uniforms)}else B=M.uniforms;return B}function T(M,A){let B;for(let j=0,ae=c.length;j<ae;j++){const P=c[j];if(P.cacheKey===A){B=P,++B.usedTimes;break}}return B===void 0&&(B=new kf(n,A,M,a),c.push(B)),B}function R(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:T,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:V}}function jf(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function js(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ks(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,v,x,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function s(d,f,m,v,x,p){const u=o(d,f,m,v,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,v,x,p){const u=o(d,f,m,v,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Kf),i.length>1&&i.sort(f||js),r.length>1&&r.sort(f||js)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:h,sort:c}}function Zf(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Ks,n.set(i,[o])):r>=a.length?(o=new Ks,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $f(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Jf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Qf=0;function ep(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tp(n,e){const t=new $f,i=Jf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new O);const a=new O,o=new ut,s=new ut;function l(h,d){let f=0,m=0,v=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,p=0,u=0,y=0,g=0,w=0,T=0,R=0,b=0,V=0,M=0;h.sort(ep);const A=d===!0?Math.PI:1;for(let j=0,ae=h.length;j<ae;j++){const P=h[j],z=P.color,q=P.intensity,K=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*q*A,m+=z.g*q*A,v+=z.b*q*A;else if(P.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(P.sh.coefficients[$],q);M++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const ne=P.shadow,D=i.get(P);D.shadowBias=ne.bias,D.shadowNormalBias=ne.normalBias,D.shadowRadius=ne.radius,D.shadowMapSize=ne.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=ie,r.directionalShadowMatrix[x]=P.shadow.matrix,w++}r.directional[x]=$,x++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(z).multiplyScalar(q*A),$.distance=K,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,r.spot[u]=$;const ne=P.shadow;if(P.map&&(r.spotLightMap[b]=P.map,b++,ne.updateMatrices(P),P.castShadow&&V++),r.spotLightMatrix[u]=ne.matrix,P.castShadow){const D=i.get(P);D.shadowBias=ne.bias,D.shadowNormalBias=ne.normalBias,D.shadowRadius=ne.radius,D.shadowMapSize=ne.mapSize,r.spotShadow[u]=D,r.spotShadowMap[u]=ie,R++}u++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(z).multiplyScalar(q),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=$,y++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*A),$.distance=P.distance,$.decay=P.decay,P.castShadow){const ne=P.shadow,D=i.get(P);D.shadowBias=ne.bias,D.shadowNormalBias=ne.normalBias,D.shadowRadius=ne.radius,D.shadowMapSize=ne.mapSize,D.shadowCameraNear=ne.camera.near,D.shadowCameraFar=ne.camera.far,r.pointShadow[p]=D,r.pointShadowMap[p]=ie,r.pointShadowMatrix[p]=P.shadow.matrix,T++}r.point[p]=$,p++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(q*A),$.groundColor.copy(P.groundColor).multiplyScalar(q*A),r.hemi[g]=$,g++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==x||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==w||B.numPointShadows!==T||B.numSpotShadows!==R||B.numSpotMaps!==b||B.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=y,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+b-V,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=M,B.directionalLength=x,B.pointLength=p,B.spotLength=u,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=w,B.numPointShadows=T,B.numSpotShadows=R,B.numSpotMaps=b,B.numLightProbes=M,r.version=Qf++)}function c(h,d){let f=0,m=0,v=0,x=0,p=0;const u=d.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){const w=h[y];if(w.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),f++}else if(w.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),v++}else if(w.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(u),s.identity(),o.copy(w.matrixWorld),o.premultiply(u),s.extractRotation(o),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),x++}else if(w.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Zs(n,e){const t=new tp(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(d){i.push(d)}function s(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function np(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Zs(n,e),t.set(a,[l])):o>=s.length?(l=new Zs(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ip extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rp extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ap=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function op(n,e,t){let i=new Aa;const r=new We,a=new We,o=new mt,s=new ip({depthPacking:kl}),l=new rp,c={},h=t.maxTextureSize,d={[Rn]:Pt,[Pt]:Rn,[dn]:dn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:ap,fragmentShader:sp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let u=this.type;this.render=function(T,R,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const V=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),B=n.state;B.setBlending(bn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const j=u!==un&&this.type===un,ae=u===un&&this.type!==un;for(let P=0,z=T.length;P<z;P++){const q=T[P],K=q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const ie=K.getFrameExtents();if(r.multiply(ie),a.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ie.x),r.x=a.x*ie.x,K.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ie.y),r.y=a.y*ie.y,K.mapSize.y=a.y)),K.map===null||j===!0||ae===!0){const ne=this.type!==un?{minFilter:Rt,magFilter:Rt}:{};K.map!==null&&K.map.dispose(),K.map=new Wn(r.x,r.y,ne),K.map.texture.name=q.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const $=K.getViewportCount();for(let ne=0;ne<$;ne++){const D=K.getViewport(ne);o.set(a.x*D.x,a.y*D.y,a.x*D.z,a.y*D.w),B.viewport(o),K.updateMatrices(q,ne),i=K.getFrustum(),w(R,b,K.camera,q,this.type)}K.isPointLightShadow!==!0&&this.type===un&&y(K,b),K.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(V,M,A)};function y(T,R){const b=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,b,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,b,m,x,null)}function g(T,R,b,V){let M=null;const A=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=b.isPointLight===!0?l:s,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=M.uuid,j=R.uuid;let ae=c[B];ae===void 0&&(ae={},c[B]=ae);let P=ae[j];P===void 0&&(P=M.clone(),ae[j]=P),M=P}if(M.visible=R.visible,M.wireframe=R.wireframe,V===un?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=b}return M}function w(T,R,b,V,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===un)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const j=e.update(T),ae=T.material;if(Array.isArray(ae)){const P=j.groups;for(let z=0,q=P.length;z<q;z++){const K=P[z],ie=ae[K.materialIndex];if(ie&&ie.visible){const $=g(T,ie,V,M);n.renderBufferDirect(b,null,j,$,T,K)}}}else if(ae.visible){const P=g(T,ae,V,M);n.renderBufferDirect(b,null,j,P,T,null)}}const B=T.children;for(let j=0,ae=B.length;j<ae;j++)w(B[j],R,b,V,M)}}function lp(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const se=new mt;let J=null;const Y=new mt(0,0,0,0);return{setMask:function(he){J!==he&&!C&&(n.colorMask(he,he,he,he),J=he)},setLocked:function(he){C=he},setClear:function(he,Le,Oe,Ze,nt){nt===!0&&(he*=Ze,Le*=Ze,Oe*=Ze),se.set(he,Le,Oe,Ze),Y.equals(se)===!1&&(n.clearColor(he,Le,Oe,Ze),Y.copy(se))},reset:function(){C=!1,J=null,Y.set(-1,0,0,0)}}}function a(){let C=!1,se=null,J=null,Y=null;return{setTest:function(he){he?Re(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(he){se!==he&&!C&&(n.depthMask(he),se=he)},setFunc:function(he){if(J!==he){switch(he){case vl:n.depthFunc(n.NEVER);break;case xl:n.depthFunc(n.ALWAYS);break;case Ml:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case Sl:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case yl:n.depthFunc(n.GREATER);break;case Tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=he}},setLocked:function(he){C=he},setClear:function(he){Y!==he&&(n.clearDepth(he),Y=he)},reset:function(){C=!1,se=null,J=null,Y=null}}}function o(){let C=!1,se=null,J=null,Y=null,he=null,Le=null,Oe=null,Ze=null,nt=null;return{setTest:function(je){C||(je?Re(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(je){se!==je&&!C&&(n.stencilMask(je),se=je)},setFunc:function(je,me,ot){(J!==je||Y!==me||he!==ot)&&(n.stencilFunc(je,me,ot),J=je,Y=me,he=ot)},setOp:function(je,me,ot){(Le!==je||Oe!==me||Ze!==ot)&&(n.stencilOp(je,me,ot),Le=je,Oe=me,Ze=ot)},setLocked:function(je){C=je},setClear:function(je){nt!==je&&(n.clearStencil(je),nt=je)},reset:function(){C=!1,se=null,J=null,Y=null,he=null,Le=null,Oe=null,Ze=null,nt=null}}}const s=new r,l=new a,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,x=[],p=null,u=!1,y=null,g=null,w=null,T=null,R=null,b=null,V=null,M=new Je(0,0,0),A=0,B=!1,j=null,ae=null,P=null,z=null,q=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,$=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ie=$>=1):ne.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ie=$>=2);let D=null,N={};const pe=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),te=new mt().fromArray(pe),ue=new mt().fromArray(fe);function Ce(C,se,J,Y){const he=new Uint8Array(4),Le=n.createTexture();n.bindTexture(C,Le),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<J;Oe++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(se+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Le}const xe={};xe[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(n.DEPTH_TEST),l.setFunc(_r),Me(!1),be(Pa),Re(n.CULL_FACE),Te(bn);function Re(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function Pe(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function Ie(C,se){return m[C]!==se?(n.bindFramebuffer(C,se),m[C]=se,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(C,se){let J=x,Y=!1;if(C)if(J=v.get(se),J===void 0&&(J=[],v.set(se,J)),C.isWebGLMultipleRenderTargets){const he=C.texture;if(J.length!==he.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Oe=he.length;Le<Oe;Le++)J[Le]=n.COLOR_ATTACHMENT0+Le;J.length=he.length,Y=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,Y=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,Y=!0);Y&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ye(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const ge={[Fn]:n.FUNC_ADD,[il]:n.FUNC_SUBTRACT,[rl]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[Na]=n.MIN,ge[Fa]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ge[Na]=C.MIN_EXT,ge[Fa]=C.MAX_EXT)}const Se={[al]:n.ZERO,[sl]:n.ONE,[ol]:n.SRC_COLOR,[ca]:n.SRC_ALPHA,[fl]:n.SRC_ALPHA_SATURATE,[ul]:n.DST_COLOR,[cl]:n.DST_ALPHA,[ll]:n.ONE_MINUS_SRC_COLOR,[ha]:n.ONE_MINUS_SRC_ALPHA,[dl]:n.ONE_MINUS_DST_COLOR,[hl]:n.ONE_MINUS_DST_ALPHA,[pl]:n.CONSTANT_COLOR,[ml]:n.ONE_MINUS_CONSTANT_COLOR,[gl]:n.CONSTANT_ALPHA,[_l]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(C,se,J,Y,he,Le,Oe,Ze,nt,je){if(C===bn){u===!0&&(Pe(n.BLEND),u=!1);return}if(u===!1&&(Re(n.BLEND),u=!0),C!==nl){if(C!==y||je!==B){if((g!==Fn||R!==Fn)&&(n.blendEquation(n.FUNC_ADD),g=Fn,R=Fn),je)switch(C){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.ONE,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ia:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,T=null,b=null,V=null,M.set(0,0,0),A=0,y=C,B=je}return}he=he||se,Le=Le||J,Oe=Oe||Y,(se!==g||he!==R)&&(n.blendEquationSeparate(ge[se],ge[he]),g=se,R=he),(J!==w||Y!==T||Le!==b||Oe!==V)&&(n.blendFuncSeparate(Se[J],Se[Y],Se[Le],Se[Oe]),w=J,T=Y,b=Le,V=Oe),(Ze.equals(M)===!1||nt!==A)&&(n.blendColor(Ze.r,Ze.g,Ze.b,nt),M.copy(Ze),A=nt),y=C,B=!1}function Ne(C,se){C.side===dn?Pe(n.CULL_FACE):Re(n.CULL_FACE);let J=C.side===Pt;se&&(J=!J),Me(J),C.blending===gi&&C.transparent===!1?Te(bn):Te(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),s.setMask(C.colorWrite);const Y=C.stencilWrite;c.setTest(Y),Y&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(C){j!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),j=C)}function be(C){C!==el?(Re(n.CULL_FACE),C!==ae&&(C===Pa?n.cullFace(n.BACK):C===tl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),ae=C}function we(C){C!==P&&(ie&&n.lineWidth(C),P=C)}function Ue(C,se,J){C?(Re(n.POLYGON_OFFSET_FILL),(z!==se||q!==J)&&(n.polygonOffset(se,J),z=se,q=J)):Pe(n.POLYGON_OFFSET_FILL)}function He(C){C?Re(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function E(C){C===void 0&&(C=n.TEXTURE0+K-1),D!==C&&(n.activeTexture(C),D=C)}function _(C,se,J){J===void 0&&(D===null?J=n.TEXTURE0+K-1:J=D);let Y=N[J];Y===void 0&&(Y={type:void 0,texture:void 0},N[J]=Y),(Y.type!==C||Y.texture!==se)&&(D!==J&&(n.activeTexture(J),D=J),n.bindTexture(C,se||xe[C]),Y.type=C,Y.texture=se)}function I(){const C=N[D];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function L(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(C){te.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),te.copy(C))}function W(C){ue.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ue.copy(C))}function ee(C,se){let J=d.get(se);J===void 0&&(J=new WeakMap,d.set(se,J));let Y=J.get(C);Y===void 0&&(Y=n.getUniformBlockIndex(se,C.name),J.set(C,Y))}function Z(C,se){const Y=d.get(se).get(C);h.get(se)!==Y&&(n.uniformBlockBinding(se,Y,C.__bindingPointIndex),h.set(se,Y))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},D=null,N={},m={},v=new WeakMap,x=[],p=null,u=!1,y=null,g=null,w=null,T=null,R=null,b=null,V=null,M=new Je(0,0,0),A=0,B=!1,j=null,ae=null,P=null,z=null,q=null,te.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Re,disable:Pe,bindFramebuffer:Ie,drawBuffers:U,useProgram:Ye,setBlending:Te,setMaterial:Ne,setFlipSided:Me,setCullFace:be,setLineWidth:we,setPolygonOffset:Ue,setScissorTest:He,activeTexture:E,bindTexture:_,unbindTexture:I,compressedTexImage2D:oe,compressedTexImage3D:re,texImage2D:Q,texImage3D:De,updateUBOMapping:ee,uniformBlockBinding:Z,texStorage2D:L,texStorage3D:ce,texSubImage2D:le,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:G,viewport:W,reset:ve}}function cp(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,_){return u?new OffscreenCanvas(E,_):yr("canvas")}function g(E,_,I,oe){let re=1;if((E.width>oe||E.height>oe)&&(re=oe/Math.max(E.width,E.height)),re<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=_?Er:Math.floor,Ee=le(re*E.width),de=le(re*E.height);x===void 0&&(x=y(Ee,de));const _e=I?y(Ee,de):x;return _e.width=Ee,_e.height=de,_e.getContext("2d").drawImage(E,0,0,Ee,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+de+")."),_e}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return ga(E.width)&&ga(E.height)}function T(E){return s?!1:E.wrapS!==jt||E.wrapT!==jt||E.minFilter!==Rt&&E.minFilter!==Ht}function R(E,_){return E.generateMipmaps&&_&&E.minFilter!==Rt&&E.minFilter!==Ht}function b(E){n.generateMipmap(E)}function V(E,_,I,oe,re=!1){if(s===!1)return _;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=_;if(_===n.RED&&(I===n.FLOAT&&(le=n.R32F),I===n.HALF_FLOAT&&(le=n.R16F),I===n.UNSIGNED_BYTE&&(le=n.R8)),_===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(le=n.R8UI),I===n.UNSIGNED_SHORT&&(le=n.R16UI),I===n.UNSIGNED_INT&&(le=n.R32UI),I===n.BYTE&&(le=n.R8I),I===n.SHORT&&(le=n.R16I),I===n.INT&&(le=n.R32I)),_===n.RG&&(I===n.FLOAT&&(le=n.RG32F),I===n.HALF_FLOAT&&(le=n.RG16F),I===n.UNSIGNED_BYTE&&(le=n.RG8)),_===n.RGBA){const Ee=re?vr:Qe.getTransfer(oe);I===n.FLOAT&&(le=n.RGBA32F),I===n.HALF_FLOAT&&(le=n.RGBA16F),I===n.UNSIGNED_BYTE&&(le=Ee===rt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(E,_,I){return R(E,I)===!0||E.isFramebufferTexture&&E.minFilter!==Rt&&E.minFilter!==Ht?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){return E===Rt||E===Oa||E===Lr?n.NEAREST:n.LINEAR}function B(E){const _=E.target;_.removeEventListener("dispose",B),ae(_),_.isVideoTexture&&v.delete(_)}function j(E){const _=E.target;_.removeEventListener("dispose",j),z(_)}function ae(E){const _=i.get(E);if(_.__webglInit===void 0)return;const I=E.source,oe=p.get(I);if(oe){const re=oe[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(E),Object.keys(oe).length===0&&p.delete(I)}i.remove(E)}function P(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const I=E.source,oe=p.get(I);delete oe[_.__cacheKey],o.memory.textures--}function z(E){const _=E.texture,I=i.get(E),oe=i.get(_);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(I.__webglFramebuffer[re]))for(let le=0;le<I.__webglFramebuffer[re].length;le++)n.deleteFramebuffer(I.__webglFramebuffer[re][le]);else n.deleteFramebuffer(I.__webglFramebuffer[re]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[re])}else{if(Array.isArray(I.__webglFramebuffer))for(let re=0;re<I.__webglFramebuffer.length;re++)n.deleteFramebuffer(I.__webglFramebuffer[re]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let re=0;re<I.__webglColorRenderbuffer.length;re++)I.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[re]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,le=_.length;re<le;re++){const Ee=i.get(_[re]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(_[re])}i.remove(_),i.remove(E)}let q=0;function K(){q=0}function ie(){const E=q;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),q+=1,E}function $(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ne(E,_){const I=i.get(E);if(E.isVideoTexture&&Ue(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const oe=E.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(I,E,_);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+_)}function D(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Re(I,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+_)}function N(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Re(I,E,_);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+_)}function pe(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Pe(I,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+_)}const fe={[fa]:n.REPEAT,[jt]:n.CLAMP_TO_EDGE,[pa]:n.MIRRORED_REPEAT},te={[Rt]:n.NEAREST,[Oa]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Dl]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},ue={[Xl]:n.NEVER,[Jl]:n.ALWAYS,[ql]:n.LESS,[jl]:n.LEQUAL,[Yl]:n.EQUAL,[$l]:n.GEQUAL,[Kl]:n.GREATER,[Zl]:n.NOTEQUAL};function Ce(E,_,I){if(I?(n.texParameteri(E,n.TEXTURE_WRAP_S,fe[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,fe[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,fe[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,te[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,te[_.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==jt||_.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Rt&&_.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Rt||_.minFilter!==Lr&&_.minFilter!==Oi||_.type===Tn&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===zi&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function xe(E,_){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",B));const oe=_.source;let re=p.get(oe);re===void 0&&(re={},p.set(oe,re));const le=$(_);if(le!==E.__cacheKey){re[le]===void 0&&(re[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),re[le].usedTimes++;const Ee=re[E.__cacheKey];Ee!==void 0&&(re[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(_)),E.__cacheKey=le,E.__webglTexture=re[le].texture}return I}function Re(E,_,I){let oe=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(oe=n.TEXTURE_3D);const re=xe(E,_),le=_.source;t.bindTexture(oe,E.__webglTexture,n.TEXTURE0+I);const Ee=i.get(le);if(le.version!==Ee.__version||re===!0){t.activeTexture(n.TEXTURE0+I);const de=Qe.getPrimaries(Qe.workingColorSpace),_e=_.colorSpace===kt?null:Qe.getPrimaries(_.colorSpace),L=_.colorSpace===kt||de===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const ce=T(_)&&w(_.image)===!1;let Q=g(_.image,ce,!1,h);Q=He(_,Q);const De=w(Q)||s,G=a.convert(_.format,_.colorSpace);let W=a.convert(_.type),ee=V(_.internalFormat,G,W,_.colorSpace,_.isVideoTexture);Ce(oe,_,De);let Z;const ve=_.mipmaps,C=s&&_.isVideoTexture!==!0,se=Ee.__version===void 0||re===!0,J=M(_,Q,De);if(_.isDepthTexture)ee=n.DEPTH_COMPONENT,s?_.type===Tn?ee=n.DEPTH_COMPONENT32F:_.type===yn?ee=n.DEPTH_COMPONENT24:_.type===Hn?ee=n.DEPTH24_STENCIL8:ee=n.DEPTH_COMPONENT16:_.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Vn&&ee===n.DEPTH_COMPONENT&&_.type!==Sa&&_.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=yn,W=a.convert(_.type)),_.format===Mi&&ee===n.DEPTH_COMPONENT&&(ee=n.DEPTH_STENCIL,_.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Hn,W=a.convert(_.type))),se&&(C?t.texStorage2D(n.TEXTURE_2D,1,ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,G,W,null));else if(_.isDataTexture)if(ve.length>0&&De){C&&se&&t.texStorage2D(n.TEXTURE_2D,J,ee,ve[0].width,ve[0].height);for(let Y=0,he=ve.length;Y<he;Y++)Z=ve[Y],C?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Z.width,Z.height,G,W,Z.data):t.texImage2D(n.TEXTURE_2D,Y,ee,Z.width,Z.height,0,G,W,Z.data);_.generateMipmaps=!1}else C?(se&&t.texStorage2D(n.TEXTURE_2D,J,ee,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,G,W,Q.data)):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,G,W,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,ee,ve[0].width,ve[0].height,Q.depth);for(let Y=0,he=ve.length;Y<he;Y++)Z=ve[Y],_.format!==Kt?G!==null?C?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Z.width,Z.height,Q.depth,G,Z.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,ee,Z.width,Z.height,Q.depth,0,Z.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Z.width,Z.height,Q.depth,G,W,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,ee,Z.width,Z.height,Q.depth,0,G,W,Z.data)}else{C&&se&&t.texStorage2D(n.TEXTURE_2D,J,ee,ve[0].width,ve[0].height);for(let Y=0,he=ve.length;Y<he;Y++)Z=ve[Y],_.format!==Kt?G!==null?C?t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Z.width,Z.height,G,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,ee,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Z.width,Z.height,G,W,Z.data):t.texImage2D(n.TEXTURE_2D,Y,ee,Z.width,Z.height,0,G,W,Z.data)}else if(_.isDataArrayTexture)C?(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,ee,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,G,W,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,G,W,Q.data);else if(_.isData3DTexture)C?(se&&t.texStorage3D(n.TEXTURE_3D,J,ee,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,G,W,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,G,W,Q.data);else if(_.isFramebufferTexture){if(se)if(C)t.texStorage2D(n.TEXTURE_2D,J,ee,Q.width,Q.height);else{let Y=Q.width,he=Q.height;for(let Le=0;Le<J;Le++)t.texImage2D(n.TEXTURE_2D,Le,ee,Y,he,0,G,W,null),Y>>=1,he>>=1}}else if(ve.length>0&&De){C&&se&&t.texStorage2D(n.TEXTURE_2D,J,ee,ve[0].width,ve[0].height);for(let Y=0,he=ve.length;Y<he;Y++)Z=ve[Y],C?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,G,W,Z):t.texImage2D(n.TEXTURE_2D,Y,ee,G,W,Z);_.generateMipmaps=!1}else C?(se&&t.texStorage2D(n.TEXTURE_2D,J,ee,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,G,W,Q)):t.texImage2D(n.TEXTURE_2D,0,ee,G,W,Q);R(_,De)&&b(oe),Ee.__version=le.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Pe(E,_,I){if(_.image.length!==6)return;const oe=xe(E,_),re=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const le=i.get(re);if(re.version!==le.__version||oe===!0){t.activeTexture(n.TEXTURE0+I);const Ee=Qe.getPrimaries(Qe.workingColorSpace),de=_.colorSpace===kt?null:Qe.getPrimaries(_.colorSpace),_e=_.colorSpace===kt||Ee===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const L=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let Y=0;Y<6;Y++)!L&&!ce?Q[Y]=g(_.image[Y],!1,!0,c):Q[Y]=ce?_.image[Y].image:_.image[Y],Q[Y]=He(_,Q[Y]);const De=Q[0],G=w(De)||s,W=a.convert(_.format,_.colorSpace),ee=a.convert(_.type),Z=V(_.internalFormat,W,ee,_.colorSpace),ve=s&&_.isVideoTexture!==!0,C=le.__version===void 0||oe===!0;let se=M(_,De,G);Ce(n.TEXTURE_CUBE_MAP,_,G);let J;if(L){ve&&C&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Z,De.width,De.height);for(let Y=0;Y<6;Y++){J=Q[Y].mipmaps;for(let he=0;he<J.length;he++){const Le=J[he];_.format!==Kt?W!==null?ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,Le.width,Le.height,W,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,Z,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,Le.width,Le.height,W,ee,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,Z,Le.width,Le.height,0,W,ee,Le.data)}}}else{J=_.mipmaps,ve&&C&&(J.length>0&&se++,t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Z,Q[0].width,Q[0].height));for(let Y=0;Y<6;Y++)if(ce){ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Q[Y].width,Q[Y].height,W,ee,Q[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Z,Q[Y].width,Q[Y].height,0,W,ee,Q[Y].data);for(let he=0;he<J.length;he++){const Oe=J[he].image[Y].image;ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Oe.width,Oe.height,W,ee,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,Z,Oe.width,Oe.height,0,W,ee,Oe.data)}}else{ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,W,ee,Q[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Z,W,ee,Q[Y]);for(let he=0;he<J.length;he++){const Le=J[he];ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,W,ee,Le.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,Z,W,ee,Le.image[Y])}}}R(_,G)&&b(n.TEXTURE_CUBE_MAP),le.__version=re.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ie(E,_,I,oe,re,le){const Ee=a.convert(I.format,I.colorSpace),de=a.convert(I.type),_e=V(I.internalFormat,Ee,de,I.colorSpace);if(!i.get(_).__hasExternalTextures){const ce=Math.max(1,_.width>>le),Q=Math.max(1,_.height>>le);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,le,_e,ce,Q,_.depth,0,Ee,de,null):t.texImage2D(re,le,_e,ce,Q,0,Ee,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),we(_)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,i.get(I).__webglTexture,0,be(_)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,i.get(I).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(E,_,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let oe=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(I||we(_)){const re=_.depthTexture;re&&re.isDepthTexture&&(re.type===Tn?oe=n.DEPTH_COMPONENT32F:re.type===yn&&(oe=n.DEPTH_COMPONENT24));const le=be(_);we(_)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,oe,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,oe,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){const oe=be(_);I&&we(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,_.width,_.height):we(_)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const oe=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let re=0;re<oe.length;re++){const le=oe[re],Ee=a.convert(le.format,le.colorSpace),de=a.convert(le.type),_e=V(le.internalFormat,Ee,de,le.colorSpace),L=be(_);I&&we(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,_e,_.width,_.height):we(_)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,_e,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,_e,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const oe=i.get(_.depthTexture).__webglTexture,re=be(_);if(_.depthTexture.format===Vn)we(_)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(_.depthTexture.format===Mi)we(_)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ge(E){const _=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ye(_.__webglFramebuffer,E)}else if(I){_.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[oe]),_.__webglDepthbuffer[oe]=n.createRenderbuffer(),U(_.__webglDepthbuffer[oe],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),U(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(E,_,I){const oe=i.get(E);_!==void 0&&Ie(oe.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ge(E)}function Te(E){const _=E.texture,I=i.get(E),oe=i.get(_);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=_.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,Ee=w(E)||s;if(re){I.__webglFramebuffer=[];for(let de=0;de<6;de++)if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[de]=[];for(let _e=0;_e<_.mipmaps.length;_e++)I.__webglFramebuffer[de][_e]=n.createFramebuffer()}else I.__webglFramebuffer[de]=n.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)I.__webglFramebuffer[de]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(le)if(r.drawBuffers){const de=E.texture;for(let _e=0,L=de.length;_e<L;_e++){const ce=i.get(de[_e]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&we(E)===!1){const de=le?_:[_];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const L=de[_e];I.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[_e]);const ce=a.convert(L.format,L.colorSpace),Q=a.convert(L.type),De=V(L.internalFormat,ce,Q,L.colorSpace,E.isXRRenderTarget===!0),G=be(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,G,De,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,I.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),U(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,_,Ee);for(let de=0;de<6;de++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Ie(I.__webglFramebuffer[de][_e],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else Ie(I.__webglFramebuffer[de],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);R(_,Ee)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const de=E.texture;for(let _e=0,L=de.length;_e<L;_e++){const ce=de[_e],Q=i.get(ce);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ce(n.TEXTURE_2D,ce,Ee),Ie(I.__webglFramebuffer,E,ce,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),R(ce,Ee)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?de=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,oe.__webglTexture),Ce(de,_,Ee),s&&_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Ie(I.__webglFramebuffer[_e],E,_,n.COLOR_ATTACHMENT0,de,_e);else Ie(I.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,de,0);R(_,Ee)&&b(de),t.unbindTexture()}E.depthBuffer&&ge(E)}function Ne(E){const _=w(E)||s,I=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,re=I.length;oe<re;oe++){const le=I[oe];if(R(le,_)){const Ee=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(le).__webglTexture;t.bindTexture(Ee,de),b(Ee),t.unbindTexture()}}}function Me(E){if(s&&E.samples>0&&we(E)===!1){const _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],I=E.width,oe=E.height;let re=n.COLOR_BUFFER_BIT;const le=[],Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(E),_e=E.isWebGLMultipleRenderTargets===!0;if(_e)for(let L=0;L<_.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let L=0;L<_.length;L++){le.push(n.COLOR_ATTACHMENT0+L),E.depthBuffer&&le.push(Ee);const ce=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ce===!1&&(E.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[L]),ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),_e){const Q=i.get(_[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,I,oe,0,0,I,oe,re,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let L=0;L<_.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,de.__webglColorRenderbuffer[L]);const ce=i.get(_[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function be(E){return Math.min(d,E.samples)}function we(E){const _=i.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ue(E){const _=o.render.frame;v.get(E)!==_&&(v.set(E,_),E.update())}function He(E,_){const I=E.colorSpace,oe=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ma||I!==mn&&I!==kt&&(Qe.getTransfer(I)===rt?s===!1?e.has("EXT_sRGB")===!0&&oe===Kt?(E.format=ma,E.minFilter=Ht,E.generateMipmaps=!1):_=bo.sRGBToLinear(_):(oe!==Kt||re!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}this.allocateTextureUnit=ie,this.resetTextureUnits=K,this.setTexture2D=ne,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=pe,this.rebindTextures=Se,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=we}function hp(n,e,t){const i=t.isWebGL2;function r(a,o=kt){let s;const l=Qe.getTransfer(o);if(a===wn)return n.UNSIGNED_BYTE;if(a===_o)return n.UNSIGNED_SHORT_4_4_4_4;if(a===vo)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Ul)return n.BYTE;if(a===Il)return n.SHORT;if(a===Sa)return n.UNSIGNED_SHORT;if(a===go)return n.INT;if(a===yn)return n.UNSIGNED_INT;if(a===Tn)return n.FLOAT;if(a===zi)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Nl)return n.ALPHA;if(a===Kt)return n.RGBA;if(a===Fl)return n.LUMINANCE;if(a===Ol)return n.LUMINANCE_ALPHA;if(a===Vn)return n.DEPTH_COMPONENT;if(a===Mi)return n.DEPTH_STENCIL;if(a===ma)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===zl)return n.RED;if(a===xo)return n.RED_INTEGER;if(a===Bl)return n.RG;if(a===Mo)return n.RG_INTEGER;if(a===So)return n.RGBA_INTEGER;if(a===Pr||a===Dr||a===Ur||a===Ir)if(l===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Dr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===za||a===Ba||a===Ga||a===Ha)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ha)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Va||a===ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Va)return l===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===ka)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wa||a===Xa||a===qa||a===Ya||a===ja||a===Ka||a===Za||a===$a||a===Ja||a===Qa||a===es||a===ts||a===ns||a===is)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Wa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ya)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ja)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ka)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Za)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$a)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ja)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===es)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ts)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ns)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===is)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Nr||a===rs||a===as)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Nr)return l===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===rs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===as)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Hl||a===ss||a===os||a===ls)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(a===ss)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===os)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ls)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Hn?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class up extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dp={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fp extends zt{constructor(e,t,i,r,a,o,s,l,c,h){if(h=h!==void 0?h:Vn,h!==Vn&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vn&&(i=yn),i===void 0&&h===Mi&&(i=Hn),super(null,r,a,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pp extends Yn{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,v=null;const x=t.getContextAttributes();let p=null,u=null;const y=[],g=[],w=new Vt;w.layers.enable(1),w.viewport=new mt;const T=new Vt;T.layers.enable(2),T.viewport=new mt;const R=[w,T],b=new up;b.layers.enable(1),b.layers.enable(2);let V=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let N=y[D];return N===void 0&&(N=new ra,y[D]=N),N.getTargetRaySpace()},this.getControllerGrip=function(D){let N=y[D];return N===void 0&&(N=new ra,y[D]=N),N.getGripSpace()},this.getHand=function(D){let N=y[D];return N===void 0&&(N=new ra,y[D]=N),N.getHandSpace()};function A(D){const N=g.indexOf(D.inputSource);if(N===-1)return;const pe=y[N];pe!==void 0&&(pe.update(D.inputSource,D.frame,c||o),pe.dispatchEvent({type:D.type,data:D.inputSource}))}function B(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",j);for(let D=0;D<y.length;D++){const N=g[D];N!==null&&(g[D]=null,y[D].disconnect(N))}V=null,M=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,ne.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",B),r.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:m}),u=new Wn(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let N=null,pe=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=x.stencil?Mi:Vn,pe=x.stencil?Hn:yn);const te={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(te),r.updateRenderState({layers:[f]}),u=new Wn(f.textureWidth,f.textureHeight,{format:Kt,type:wn,depthTexture:new fp(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ue=e.properties.get(u);ue.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(D){for(let N=0;N<D.removed.length;N++){const pe=D.removed[N],fe=g.indexOf(pe);fe>=0&&(g[fe]=null,y[fe].disconnect(pe))}for(let N=0;N<D.added.length;N++){const pe=D.added[N];let fe=g.indexOf(pe);if(fe===-1){for(let ue=0;ue<y.length;ue++)if(ue>=g.length){g.push(pe),fe=ue;break}else if(g[ue]===null){g[ue]=pe,fe=ue;break}if(fe===-1)break}const te=y[fe];te&&te.connect(pe)}}const ae=new O,P=new O;function z(D,N,pe){ae.setFromMatrixPosition(N.matrixWorld),P.setFromMatrixPosition(pe.matrixWorld);const fe=ae.distanceTo(P),te=N.projectionMatrix.elements,ue=pe.projectionMatrix.elements,Ce=te[14]/(te[10]-1),xe=te[14]/(te[10]+1),Re=(te[9]+1)/te[5],Pe=(te[9]-1)/te[5],Ie=(te[8]-1)/te[0],U=(ue[8]+1)/ue[0],Ye=Ce*Ie,ge=Ce*U,Se=fe/(-Ie+U),Te=Se*-Ie;N.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Te),D.translateZ(Se),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Ne=Ce+Se,Me=xe+Se,be=Ye-Te,we=ge+(fe-Te),Ue=Re*xe/Me*Ne,He=Pe*xe/Me*Ne;D.projectionMatrix.makePerspective(be,we,Ue,He,Ne,Me),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function q(D,N){N===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(N.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;b.near=T.near=w.near=D.near,b.far=T.far=w.far=D.far,(V!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),V=b.near,M=b.far);const N=D.parent,pe=b.cameras;q(b,N);for(let fe=0;fe<pe.length;fe++)q(pe[fe],N);pe.length===2?z(b,w,T):b.projectionMatrix.copy(w.projectionMatrix),K(D,b,N)};function K(D,N,pe){pe===null?D.matrix.copy(N.matrixWorld):(D.matrix.copy(pe.matrixWorld),D.matrix.invert(),D.matrix.multiply(N.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(N.projectionMatrix),D.projectionMatrixInverse.copy(N.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Bi*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)};let ie=null;function $(D,N){if(h=N.getViewerPose(c||o),v=N,h!==null){const pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let fe=!1;pe.length!==b.cameras.length&&(b.cameras.length=0,fe=!0);for(let te=0;te<pe.length;te++){const ue=pe[te];let Ce=null;if(m!==null)Ce=m.getViewport(ue);else{const Re=d.getViewSubImage(f,ue);Ce=Re.viewport,te===0&&(e.setRenderTargetTextures(u,Re.colorTexture,f.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(u))}let xe=R[te];xe===void 0&&(xe=new Vt,xe.layers.enable(te),xe.viewport=new mt,R[te]=xe),xe.matrix.fromArray(ue.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(ue.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),te===0&&(b.matrix.copy(xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),fe===!0&&b.cameras.push(xe)}}for(let pe=0;pe<y.length;pe++){const fe=g[pe],te=y[pe];fe!==null&&te!==void 0&&te.update(fe,N,c||o)}ie&&ie(D,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),v=null}const ne=new No;ne.setAnimationLoop($),this.setAnimationLoop=function(D){ie=D},this.dispose=function(){}}}function mp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Do(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,y,g,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),d(p,u)):u.isMeshPhongMaterial?(a(p,u),h(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(a(p,u),v(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),x(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?l(p,u,y,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=g*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gp(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){const w=g.program;i.uniformBlockBinding(y,w)}function c(y,g){let w=r[y.id];w===void 0&&(v(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",p));const T=g.program;i.updateUBOMapping(y,T);const R=e.render.frame;a[y.id]!==R&&(f(y),a[y.id]=R)}function h(y){const g=d();y.__bindingPointIndex=g;const w=n.createBuffer(),T=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,w),w}function d(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const g=r[y.id],w=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let R=0,b=w.length;R<b;R++){const V=w[R];if(m(V,R,T)===!0){const M=V.__offset,A=Array.isArray(V.value)?V.value:[V.value];let B=0;for(let j=0;j<A.length;j++){const ae=A[j],P=x(ae);typeof ae=="number"?(V.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,M+B,V.__data)):ae.isMatrix3?(V.__data[0]=ae.elements[0],V.__data[1]=ae.elements[1],V.__data[2]=ae.elements[2],V.__data[3]=ae.elements[0],V.__data[4]=ae.elements[3],V.__data[5]=ae.elements[4],V.__data[6]=ae.elements[5],V.__data[7]=ae.elements[0],V.__data[8]=ae.elements[6],V.__data[9]=ae.elements[7],V.__data[10]=ae.elements[8],V.__data[11]=ae.elements[0]):(ae.toArray(V.__data,B),B+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,V.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,g,w){const T=y.value;if(w[g]===void 0){if(typeof T=="number")w[g]=T;else{const R=Array.isArray(T)?T:[T],b=[];for(let V=0;V<R.length;V++)b.push(R[V].clone());w[g]=b}return!0}else if(typeof T=="number"){if(w[g]!==T)return w[g]=T,!0}else{const R=Array.isArray(w[g])?w[g]:[w[g]],b=Array.isArray(T)?T:[T];for(let V=0;V<R.length;V++){const M=R[V];if(M.equals(b[V])===!1)return M.copy(b[V]),!0}}return!1}function v(y){const g=y.uniforms;let w=0;const T=16;let R=0;for(let b=0,V=g.length;b<V;b++){const M=g[b],A={boundary:0,storage:0},B=Array.isArray(M.value)?M.value:[M.value];for(let j=0,ae=B.length;j<ae;j++){const P=B[j],z=x(P);A.boundary+=z.boundary,A.storage+=z.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=w,b>0){R=w%T;const j=T-R;R!==0&&j-A.boundary<0&&(w+=T-R,M.__offset=w)}w+=A.storage}return R=w%T,R>0&&(w+=T-R),y.__size=w,y.__cache={},this}function x(y){const g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function p(y){const g=y.target;g.removeEventListener("dispose",p);const w=o.indexOf(g.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete a[g.id]}function u(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},a={}}return{bind:l,update:c,dispose:u}}class Ho{constructor(e={}){const{canvas:t=fc(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const g=this;let w=!1,T=0,R=0,b=null,V=-1,M=null;const A=new mt,B=new mt;let j=null;const ae=new Je(0);let P=0,z=t.width,q=t.height,K=1,ie=null,$=null;const ne=new mt(0,0,z,q),D=new mt(0,0,z,q);let N=!1;const pe=new Aa;let fe=!1,te=!1,ue=null;const Ce=new ut,xe=new We,Re=new O,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return b===null?K:1}let U=i;function Ye(S,F){for(let H=0;H<S.length;H++){const X=S[H],k=t.getContext(X,F);if(k!==null)return k}return null}try{const S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),U=Ye(F,S),U===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ge,Se,Te,Ne,Me,be,we,Ue,He,E,_,I,oe,re,le,Ee,de,_e,L,ce,Q,De,G,W;function ee(){ge=new bd(U),Se=new xd(U,ge,e),ge.init(Se),De=new hp(U,ge,Se),Te=new lp(U,ge,Se),Ne=new Rd(U),Me=new jf,be=new cp(U,ge,Te,Me,Se,De,Ne),we=new Sd(g),Ue=new Td(g),He=new zc(U,Se),G=new _d(U,ge,He,Se),E=new Ad(U,He,Ne,G),_=new Dd(U,E,He,Ne),L=new Pd(U,Se,be),Ee=new Md(Me),I=new Yf(g,we,Ue,ge,Se,G,Ee),oe=new mp(g,Me),re=new Zf,le=new np(ge,Se),_e=new gd(g,we,Ue,Te,_,f,l),de=new op(g,_,Se),W=new gp(U,Ne,Se,Te),ce=new vd(U,ge,Ne,Se),Q=new wd(U,ge,Ne,Se),Ne.programs=I.programs,g.capabilities=Se,g.extensions=ge,g.properties=Me,g.renderLists=re,g.shadowMap=de,g.state=Te,g.info=Ne}ee();const Z=new pp(g,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(z,q,!1))},this.getSize=function(S){return S.set(z,q)},this.setSize=function(S,F,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,q=F,t.width=Math.floor(S*K),t.height=Math.floor(F*K),H===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(z*K,q*K).floor()},this.setDrawingBufferSize=function(S,F,H){z=S,q=F,K=H,t.width=Math.floor(S*H),t.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(ne)},this.setViewport=function(S,F,H,X){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,F,H,X),Te.viewport(A.copy(ne).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(D)},this.setScissor=function(S,F,H,X){S.isVector4?D.set(S.x,S.y,S.z,S.w):D.set(S,F,H,X),Te.scissor(B.copy(D).multiplyScalar(K).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(S){Te.setScissorTest(N=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(S=!0,F=!0,H=!0){let X=0;if(S){let k=!1;if(b!==null){const Ae=b.texture.format;k=Ae===So||Ae===Mo||Ae===xo}if(k){const Ae=b.texture.type,Fe=Ae===wn||Ae===yn||Ae===Sa||Ae===Hn||Ae===_o||Ae===vo,ze=_e.getClearColor(),Be=_e.getClearAlpha(),ke=ze.r,Ge=ze.g,Ve=ze.b;Fe?(m[0]=ke,m[1]=Ge,m[2]=Ve,m[3]=Be,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=ke,v[1]=Ge,v[2]=Ve,v[3]=Be,U.clearBufferiv(U.COLOR,0,v))}else X|=U.COLOR_BUFFER_BIT}F&&(X|=U.DEPTH_BUFFER_BIT),H&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),re.dispose(),le.dispose(),Me.dispose(),we.dispose(),Ue.dispose(),_.dispose(),G.dispose(),W.dispose(),I.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",nt),Z.removeEventListener("sessionend",je),ue&&(ue.dispose(),ue=null),me.stop()};function ve(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=Ne.autoReset,F=de.enabled,H=de.autoUpdate,X=de.needsUpdate,k=de.type;ee(),Ne.autoReset=S,de.enabled=F,de.autoUpdate=H,de.needsUpdate=X,de.type=k}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function J(S){const F=S.target;F.removeEventListener("dispose",J),Y(F)}function Y(S){he(S),Me.remove(S)}function he(S){const F=Me.get(S).programs;F!==void 0&&(F.forEach(function(H){I.releaseProgram(H)}),S.isShaderMaterial&&I.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,X,k,Ae){F===null&&(F=Pe);const Fe=k.isMesh&&k.matrixWorld.determinant()<0,ze=Dt(S,F,H,X,k);Te.setMaterial(X,Fe);let Be=H.index,ke=1;if(X.wireframe===!0){if(Be=E.getWireframeAttribute(H),Be===void 0)return;ke=2}const Ge=H.drawRange,Ve=H.attributes.position;let it=Ge.start*ke,_t=(Ge.start+Ge.count)*ke;Ae!==null&&(it=Math.max(it,Ae.start*ke),_t=Math.min(_t,(Ae.start+Ae.count)*ke)),Be!==null?(it=Math.max(it,0),_t=Math.min(_t,Be.count)):Ve!=null&&(it=Math.max(it,0),_t=Math.min(_t,Ve.count));const et=_t-it;if(et<0||et===1/0)return;G.setup(k,X,ze,H,Be);let vt,tt=ce;if(Be!==null&&(vt=He.get(Be),tt=Q,tt.setIndex(vt)),k.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*Ie()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(k.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),Te.setLineWidth(Xe*Ie()),k.isLineSegments?tt.setMode(U.LINES):k.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else k.isPoints?tt.setMode(U.POINTS):k.isSprite&&tt.setMode(U.TRIANGLES);if(k.isInstancedMesh)tt.renderInstances(it,et,k.count);else if(H.isInstancedBufferGeometry){const Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Cn=Math.min(H.instanceCount,Xe);tt.renderInstances(it,et,Cn)}else tt.render(it,et)};function Le(S,F,H){S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,Jt(S,F,H),S.side=Rn,S.needsUpdate=!0,Jt(S,F,H),S.side=dn):Jt(S,F,H)}this.compile=function(S,F,H=null){H===null&&(H=S),p=le.get(H),p.init(),y.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==H&&S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(g._useLegacyLights);const X=new Set;return S.traverse(function(k){const Ae=k.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){const ze=Ae[Fe];Le(ze,H,k),X.add(ze)}else Le(Ae,H,k),X.add(Ae)}),y.pop(),p=null,X},this.compileAsync=function(S,F,H=null){const X=this.compile(S,F,H);return new Promise(k=>{function Ae(){if(X.forEach(function(Fe){Me.get(Fe).currentProgram.isReady()&&X.delete(Fe)}),X.size===0){k(S);return}setTimeout(Ae,10)}ge.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Oe=null;function Ze(S){Oe&&Oe(S)}function nt(){me.stop()}function je(){me.start()}const me=new No;me.setAnimationLoop(Ze),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(S){Oe=S,Z.setAnimationLoop(S),S===null?me.stop():me.start()},Z.addEventListener("sessionstart",nt),Z.addEventListener("sessionend",je),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,F,b),p=le.get(S,y.length),p.init(),y.push(p),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(Ce),te=this.localClippingEnabled,fe=Ee.init(this.clippingPlanes,te),x=re.get(S,u.length),x.init(),u.push(x),ot(S,F,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(ie,$),this.info.render.frame++,fe===!0&&Ee.beginShadows();const H=p.state.shadowsArray;if(de.render(H,S,F),fe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(x,S),p.setupLights(g._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let k=0,Ae=X.length;k<Ae;k++){const Fe=X[k];St(x,S,Fe,Fe.viewport)}}else St(x,S,F);b!==null&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(g,S,F),G.resetDefaultState(),V=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ot(S,F,H,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||pe.intersectsSprite(S)){X&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ce);const Fe=_.update(S),ze=S.material;ze.visible&&x.push(S,Fe,ze,H,Re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||pe.intersectsObject(S))){const Fe=_.update(S),ze=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Re.copy(Fe.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(Ce)),Array.isArray(ze)){const Be=Fe.groups;for(let ke=0,Ge=Be.length;ke<Ge;ke++){const Ve=Be[ke],it=ze[Ve.materialIndex];it&&it.visible&&x.push(S,Fe,it,H,Re.z,Ve)}}else ze.visible&&x.push(S,Fe,ze,H,Re.z,null)}}const Ae=S.children;for(let Fe=0,ze=Ae.length;Fe<ze;Fe++)ot(Ae[Fe],F,H,X)}function St(S,F,H,X){const k=S.opaque,Ae=S.transmissive,Fe=S.transparent;p.setupLightsView(H),fe===!0&&Ee.setGlobalState(g.clippingPlanes,H),Ae.length>0&&tn(k,Ae,F,H),X&&Te.viewport(A.copy(X)),k.length>0&&$e(k,F,H),Ae.length>0&&$e(Ae,F,H),Fe.length>0&&$e(Fe,F,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function tn(S,F,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const Ae=Se.isWebGL2;ue===null&&(ue=new Wn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?zi:wn,minFilter:Oi,samples:Ae?4:0})),g.getDrawingBufferSize(xe),Ae?ue.setSize(xe.x,xe.y):ue.setSize(Er(xe.x),Er(xe.y));const Fe=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(ae),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const ze=g.toneMapping;g.toneMapping=An,$e(S,H,X),be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue);let Be=!1;for(let ke=0,Ge=F.length;ke<Ge;ke++){const Ve=F[ke],it=Ve.object,_t=Ve.geometry,et=Ve.material,vt=Ve.group;if(et.side===dn&&it.layers.test(X.layers)){const tt=et.side;et.side=Pt,et.needsUpdate=!0,nn(it,H,X,_t,et,vt),et.side=tt,et.needsUpdate=!0,Be=!0}}Be===!0&&(be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue)),g.setRenderTarget(Fe),g.setClearColor(ae,P),g.toneMapping=ze}function $e(S,F,H){const X=F.isScene===!0?F.overrideMaterial:null;for(let k=0,Ae=S.length;k<Ae;k++){const Fe=S[k],ze=Fe.object,Be=Fe.geometry,ke=X===null?Fe.material:X,Ge=Fe.group;ze.layers.test(H.layers)&&nn(ze,F,H,Be,ke,Ge)}}function nn(S,F,H,X,k,Ae){S.onBeforeRender(g,F,H,X,k,Ae),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(g,F,H,X,S,Ae),k.transparent===!0&&k.side===dn&&k.forceSinglePass===!1?(k.side=Pt,k.needsUpdate=!0,g.renderBufferDirect(H,F,X,k,S,Ae),k.side=Rn,k.needsUpdate=!0,g.renderBufferDirect(H,F,X,k,S,Ae),k.side=dn):g.renderBufferDirect(H,F,X,k,S,Ae),S.onAfterRender(g,F,H,X,k,Ae)}function Jt(S,F,H){F.isScene!==!0&&(F=Pe);const X=Me.get(S),k=p.state.lights,Ae=p.state.shadowsArray,Fe=k.state.version,ze=I.getParameters(S,k.state,Ae,F,H),Be=I.getProgramCacheKey(ze);let ke=X.programs;X.environment=S.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(S.isMeshStandardMaterial?Ue:we).get(S.envMap||X.environment),ke===void 0&&(S.addEventListener("dispose",J),ke=new Map,X.programs=ke);let Ge=ke.get(Be);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Fe)return Bt(S,ze),Ge}else ze.uniforms=I.getUniforms(S),S.onBuild(H,ze,g),S.onBeforeCompile(ze,g),Ge=I.acquireProgram(ze,Be),ke.set(Be,Ge),X.uniforms=ze.uniforms;const Ve=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),Bt(S,ze),X.needsLights=Ct(S),X.lightsStateVersion=Fe,X.needsLights&&(Ve.ambientLightColor.value=k.state.ambient,Ve.lightProbe.value=k.state.probe,Ve.directionalLights.value=k.state.directional,Ve.directionalLightShadows.value=k.state.directionalShadow,Ve.spotLights.value=k.state.spot,Ve.spotLightShadows.value=k.state.spotShadow,Ve.rectAreaLights.value=k.state.rectArea,Ve.ltc_1.value=k.state.rectAreaLTC1,Ve.ltc_2.value=k.state.rectAreaLTC2,Ve.pointLights.value=k.state.point,Ve.pointLightShadows.value=k.state.pointShadow,Ve.hemisphereLights.value=k.state.hemi,Ve.directionalShadowMap.value=k.state.directionalShadowMap,Ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ve.spotShadowMap.value=k.state.spotShadowMap,Ve.spotLightMatrix.value=k.state.spotLightMatrix,Ve.spotLightMap.value=k.state.spotLightMap,Ve.pointShadowMap.value=k.state.pointShadowMap,Ve.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function gn(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=gr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Bt(S,F){const H=Me.get(S);H.outputColorSpace=F.outputColorSpace,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Dt(S,F,H,X,k){F.isScene!==!0&&(F=Pe),be.resetTextureUnits();const Ae=F.fog,Fe=X.isMeshStandardMaterial?F.environment:null,ze=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mn,Be=(X.isMeshStandardMaterial?Ue:we).get(X.envMap||Fe),ke=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,_t=!!H.morphAttributes.color;let et=An;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(et=g.toneMapping);const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=vt!==void 0?vt.length:0,Xe=Me.get(X),Cn=p.state.lights;if(fe===!0&&(te===!0||S!==M)){const xt=S===M&&X.id===V;Ee.setState(X,S,xt)}let at=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Cn.state.version||Xe.outputColorSpace!==ze||k.isInstancedMesh&&Xe.instancing===!1||!k.isInstancedMesh&&Xe.instancing===!0||k.isSkinnedMesh&&Xe.skinning===!1||!k.isSkinnedMesh&&Xe.skinning===!0||k.isInstancedMesh&&Xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Xe.instancingColor===!1&&k.instanceColor!==null||Xe.envMap!==Be||X.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ee.numPlanes||Xe.numIntersection!==Ee.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==Ge||Xe.morphTargets!==Ve||Xe.morphNormals!==it||Xe.morphColors!==_t||Xe.toneMapping!==et||Se.isWebGL2===!0&&Xe.morphTargetsCount!==tt)&&(at=!0):(at=!0,Xe.__version=X.version);let Lt=Xe.currentProgram;at===!0&&(Lt=Jt(X,F,k));let jn=!1,rn=!1,an=!1;const ct=Lt.getUniforms(),Ut=Xe.uniforms;if(Te.useProgram(Lt.program)&&(jn=!0,rn=!0,an=!0),X.id!==V&&(V=X.id,rn=!0),jn||M!==S){ct.setValue(U,"projectionMatrix",S.projectionMatrix),ct.setValue(U,"viewMatrix",S.matrixWorldInverse);const xt=ct.map.cameraPosition;xt!==void 0&&xt.setValue(U,Re.setFromMatrixPosition(S.matrixWorld)),Se.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ct.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,rn=!0,an=!0)}if(k.isSkinnedMesh){ct.setOptional(U,k,"bindMatrix"),ct.setOptional(U,k,"bindMatrixInverse");const xt=k.skeleton;xt&&(Se.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),ct.setValue(U,"boneTexture",xt.boneTexture,be),ct.setValue(U,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ln=H.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0&&Se.isWebGL2===!0)&&L.update(k,H,Lt),(rn||Xe.receiveShadow!==k.receiveShadow)&&(Xe.receiveShadow=k.receiveShadow,ct.setValue(U,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ut.envMap.value=Be,Ut.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),rn&&(ct.setValue(U,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&lt(Ut,an),Ae&&X.fog===!0&&oe.refreshFogUniforms(Ut,Ae),oe.refreshMaterialUniforms(Ut,X,K,q,ue),gr.upload(U,gn(Xe),Ut,be)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gr.upload(U,gn(Xe),Ut,be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ct.setValue(U,"center",k.center),ct.setValue(U,"modelViewMatrix",k.modelViewMatrix),ct.setValue(U,"normalMatrix",k.normalMatrix),ct.setValue(U,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const xt=X.uniformsGroups;for(let bi=0,Cr=xt.length;bi<Cr;bi++)if(Se.isWebGL2){const ki=xt[bi];W.update(ki,Lt),W.bind(ki,Lt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lt}function lt(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Ct(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,F,H){Me.get(S.texture).__webglTexture=F,Me.get(S.depthTexture).__webglTexture=H;const X=Me.get(S);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){const H=Me.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,H=0){b=S,T=F,R=H;let X=!0,k=null,Ae=!1,Fe=!1;if(S){const Be=Me.get(S);Be.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):Be.__webglFramebuffer===void 0?be.setupRenderTarget(S):Be.__hasExternalTextures&&be.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Fe=!0);const Ge=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?k=Ge[F][H]:k=Ge[F],Ae=!0):Se.isWebGL2&&S.samples>0&&be.useMultisampledRTT(S)===!1?k=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[H]:k=Ge,A.copy(S.viewport),B.copy(S.scissor),j=S.scissorTest}else A.copy(ne).multiplyScalar(K).floor(),B.copy(D).multiplyScalar(K).floor(),j=N;if(Te.bindFramebuffer(U.FRAMEBUFFER,k)&&Se.drawBuffers&&X&&Te.drawBuffers(S,k),Te.viewport(A),Te.scissor(B),Te.setScissorTest(j),Ae){const Be=Me.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Be.__webglTexture,H)}else if(Fe){const Be=Me.get(S.texture),ke=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.__webglTexture,H||0,ke)}V=-1},this.readRenderTargetPixels=function(S,F,H,X,k,Ae,Fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){Te.bindFramebuffer(U.FRAMEBUFFER,ze);try{const Be=S.texture,ke=Be.format,Ge=Be.type;if(ke!==Kt&&De.convert(ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===zi&&(ge.has("EXT_color_buffer_half_float")||Se.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ge!==wn&&De.convert(Ge)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Tn&&(Se.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&H>=0&&H<=S.height-k&&U.readPixels(F,H,X,k,De.convert(ke),De.convert(Ge),Ae)}finally{const Be=b!==null?Me.get(b).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(S,F,H=0){const X=Math.pow(2,-H),k=Math.floor(F.image.width*X),Ae=Math.floor(F.image.height*X);be.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,S.x,S.y,k,Ae),Te.unbindTexture()},this.copyTextureToTexture=function(S,F,H,X=0){const k=F.image.width,Ae=F.image.height,Fe=De.convert(H.format),ze=De.convert(H.type);be.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,S.x,S.y,k,Ae,Fe,ze,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Fe,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,X,S.x,S.y,Fe,ze,F.image),X===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(S,F,H,X,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=S.max.x-S.min.x+1,Fe=S.max.y-S.min.y+1,ze=S.max.z-S.min.z+1,Be=De.convert(X.format),ke=De.convert(X.type);let Ge;if(X.isData3DTexture)be.setTexture3D(X,0),Ge=U.TEXTURE_3D;else if(X.isDataArrayTexture)be.setTexture2DArray(X,0),Ge=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const Ve=U.getParameter(U.UNPACK_ROW_LENGTH),it=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_t=U.getParameter(U.UNPACK_SKIP_PIXELS),et=U.getParameter(U.UNPACK_SKIP_ROWS),vt=U.getParameter(U.UNPACK_SKIP_IMAGES),tt=H.isCompressedTexture?H.mipmaps[0]:H.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,tt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?U.texSubImage3D(Ge,k,F.x,F.y,F.z,Ae,Fe,ze,Be,ke,tt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ge,k,F.x,F.y,F.z,Ae,Fe,ze,Be,tt.data)):U.texSubImage3D(Ge,k,F.x,F.y,F.z,Ae,Fe,ze,Be,ke,tt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ve),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vt),k===0&&X.generateMipmaps&&U.generateMipmap(Ge),Te.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?be.setTextureCube(S,0):S.isData3DTexture?be.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?be.setTexture2DArray(S,0):be.setTexture2D(S,0),Te.unbindTexture()},this.resetState=function(){T=0,R=0,b=null,Te.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ea?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===br?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?kn:Eo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kn?Mt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _p extends Ho{}_p.prototype.isWebGL1Renderer=!0;class vp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class va extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $s=new O,Js=new O,Qs=new ut,aa=new Ta,dr=new Ar;class fr extends gt{constructor(e=new en,t=new va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)$s.fromBufferAttribute(t,r-1),Js.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$s.distanceTo(Js);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(r),dr.radius+=a,e.ray.intersectsSphere(dr)===!1)return;Qs.copy(r).invert(),aa.copy(e.ray).applyMatrix4(Qs);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new O,h=new O,d=new O,f=new O,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const u=Math.max(0,o.start),y=Math.min(v.count,o.start+o.count);for(let g=u,w=y-1;g<w;g+=m){const T=v.getX(g),R=v.getX(g+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,R),aa.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(f);V<e.near||V>e.far||t.push({distance:V,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let g=u,w=y-1;g<w;g+=m){if(c.fromBufferAttribute(p,g),h.fromBufferAttribute(p,g+1),aa.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}class zn extends en{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const h=[],d=new O,f=new O,m=[],v=[],x=[],p=[];for(let u=0;u<=i;u++){const y=[],g=u/i;let w=0;u===0&&o===0?w=.5/t:u===i&&l===Math.PI&&(w=-.5/t);for(let T=0;T<=t;T++){const R=T/t;d.x=-e*Math.cos(r+R*a)*Math.sin(o+g*s),d.y=e*Math.cos(o+g*s),d.z=e*Math.sin(r+R*a)*Math.sin(o+g*s),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(R+w,1-g),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){const g=h[u][y+1],w=h[u][y],T=h[u+1][y],R=h[u+1][y+1];(u!==0||o>0)&&m.push(g,w,R),(u!==i-1||l<Math.PI)&&m.push(w,T,R)}this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pr extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ca extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class xp extends Ca{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sa=new ut,eo=new O,to=new O;class Mp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;eo.setFromMatrixPosition(e.matrixWorld),t.position.copy(eo),to.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(to),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sp extends Mp{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ep extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yp extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=no(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=no();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function no(){return(typeof performance>"u"?Date:performance).now()}class io{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const ro={type:"change"},oa={type:"start"},ao={type:"end"},mr=new Ta,so=new En,bp=Math.cos(70*Pi.DEG2RAD);class Ap extends Yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",_),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ro),i.update(),a=r.NONE},this.update=function(){const L=new O,ce=new Xn().setFromUnitVectors(e.up,new O(0,1,0)),Q=ce.clone().invert(),De=new O,G=new Xn,W=new O,ee=2*Math.PI;return function(ve=null){const C=i.object.position;L.copy(C).sub(i.target),L.applyQuaternion(ce),s.setFromVector3(L),i.autoRotate&&a===r.NONE&&B(M(ve)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let se=i.minAzimuthAngle,J=i.maxAzimuthAngle;isFinite(se)&&isFinite(J)&&(se<-Math.PI?se+=ee:se>Math.PI&&(se-=ee),J<-Math.PI?J+=ee:J>Math.PI&&(J-=ee),se<=J?s.theta=Math.max(se,Math.min(J,s.theta)):s.theta=s.theta>(se+J)/2?Math.max(se,s.theta):Math.min(J,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?s.radius=$(s.radius):s.radius=$(s.radius*c),L.setFromSpherical(s),L.applyQuaternion(Q),C.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Y=!1;if(i.zoomToCursor&&R){let he=null;if(i.object.isPerspectiveCamera){const Le=L.length();he=$(Le*c);const Oe=Le-he;i.object.position.addScaledVector(w,Oe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Le=new O(T.x,T.y,0);Le.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Y=!0;const Oe=new O(T.x,T.y,0);Oe.unproject(i.object),i.object.position.sub(Oe).add(Le),i.object.updateMatrixWorld(),he=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(he).add(i.object.position):(mr.origin.copy(i.object.position),mr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(mr.direction))<bp?e.lookAt(i.target):(so.setFromNormalAndCoplanarPoint(i.object.up,i.target),mr.intersectPlane(so,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Y=!0);return c=1,R=!1,Y||De.distanceToSquared(i.object.position)>o||8*(1-G.dot(i.object.quaternion))>o||W.distanceToSquared(i.target)>0?(i.dispatchEvent(ro),De.copy(i.object.position),G.copy(i.object.quaternion),W.copy(i.target),Y=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",re),i.domElement.removeEventListener("pointerdown",Me),i.domElement.removeEventListener("pointercancel",we),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",be),i.domElement.removeEventListener("pointerup",we),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new io,l=new io;let c=1;const h=new O,d=new We,f=new We,m=new We,v=new We,x=new We,p=new We,u=new We,y=new We,g=new We,w=new O,T=new We;let R=!1;const b=[],V={};function M(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function B(L){l.theta-=L}function j(L){l.phi-=L}const ae=function(){const L=new O;return function(Q,De){L.setFromMatrixColumn(De,0),L.multiplyScalar(-Q),h.add(L)}}(),P=function(){const L=new O;return function(Q,De){i.screenSpacePanning===!0?L.setFromMatrixColumn(De,1):(L.setFromMatrixColumn(De,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Q),h.add(L)}}(),z=function(){const L=new O;return function(Q,De){const G=i.domElement;if(i.object.isPerspectiveCamera){const W=i.object.position;L.copy(W).sub(i.target);let ee=L.length();ee*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*Q*ee/G.clientHeight,i.object.matrix),P(2*De*ee/G.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(Q*(i.object.right-i.object.left)/i.object.zoom/G.clientWidth,i.object.matrix),P(De*(i.object.top-i.object.bottom)/i.object.zoom/G.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(L){if(!i.zoomToCursor)return;R=!0;const ce=i.domElement.getBoundingClientRect(),Q=L.clientX-ce.left,De=L.clientY-ce.top,G=ce.width,W=ce.height;T.x=Q/G*2-1,T.y=-(De/W)*2+1,w.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ne(L){d.set(L.clientX,L.clientY)}function D(L){ie(L),u.set(L.clientX,L.clientY)}function N(L){v.set(L.clientX,L.clientY)}function pe(L){f.set(L.clientX,L.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;B(2*Math.PI*m.x/ce.clientHeight),j(2*Math.PI*m.y/ce.clientHeight),d.copy(f),i.update()}function fe(L){y.set(L.clientX,L.clientY),g.subVectors(y,u),g.y>0?q(A()):g.y<0&&K(A()),u.copy(y),i.update()}function te(L){x.set(L.clientX,L.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),z(p.x,p.y),v.copy(x),i.update()}function ue(L){ie(L),L.deltaY<0?K(A()):L.deltaY>0&&q(A()),i.update()}function Ce(L){let ce=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),ce=!0;break}ce&&(L.preventDefault(),i.update())}function xe(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),ce=.5*(b[0].pageY+b[1].pageY);d.set(L,ce)}}function Re(){if(b.length===1)v.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),ce=.5*(b[0].pageY+b[1].pageY);v.set(L,ce)}}function Pe(){const L=b[0].pageX-b[1].pageX,ce=b[0].pageY-b[1].pageY,Q=Math.sqrt(L*L+ce*ce);u.set(0,Q)}function Ie(){i.enableZoom&&Pe(),i.enablePan&&Re()}function U(){i.enableZoom&&Pe(),i.enableRotate&&xe()}function Ye(L){if(b.length==1)f.set(L.pageX,L.pageY);else{const Q=_e(L),De=.5*(L.pageX+Q.x),G=.5*(L.pageY+Q.y);f.set(De,G)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;B(2*Math.PI*m.x/ce.clientHeight),j(2*Math.PI*m.y/ce.clientHeight),d.copy(f)}function ge(L){if(b.length===1)x.set(L.pageX,L.pageY);else{const ce=_e(L),Q=.5*(L.pageX+ce.x),De=.5*(L.pageY+ce.y);x.set(Q,De)}p.subVectors(x,v).multiplyScalar(i.panSpeed),z(p.x,p.y),v.copy(x)}function Se(L){const ce=_e(L),Q=L.pageX-ce.x,De=L.pageY-ce.y,G=Math.sqrt(Q*Q+De*De);y.set(0,G),g.set(0,Math.pow(y.y/u.y,i.zoomSpeed)),q(g.y),u.copy(y)}function Te(L){i.enableZoom&&Se(L),i.enablePan&&ge(L)}function Ne(L){i.enableZoom&&Se(L),i.enableRotate&&Ye(L)}function Me(L){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",be),i.domElement.addEventListener("pointerup",we)),le(L),L.pointerType==="touch"?I(L):Ue(L))}function be(L){i.enabled!==!1&&(L.pointerType==="touch"?oe(L):He(L))}function we(L){Ee(L),b.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",be),i.domElement.removeEventListener("pointerup",we)),i.dispatchEvent(ao),a=r.NONE}function Ue(L){let ce;switch(L.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case Kn.DOLLY:if(i.enableZoom===!1)return;D(L),a=r.DOLLY;break;case Kn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;N(L),a=r.PAN}else{if(i.enableRotate===!1)return;ne(L),a=r.ROTATE}break;case Kn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ne(L),a=r.ROTATE}else{if(i.enablePan===!1)return;N(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(oa)}function He(L){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;pe(L);break;case r.DOLLY:if(i.enableZoom===!1)return;fe(L);break;case r.PAN:if(i.enablePan===!1)return;te(L);break}}function E(L){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(L.preventDefault(),i.dispatchEvent(oa),ue(L),i.dispatchEvent(ao))}function _(L){i.enabled===!1||i.enablePan===!1||Ce(L)}function I(L){switch(de(L),b.length){case 1:switch(i.touches.ONE){case Zn.ROTATE:if(i.enableRotate===!1)return;xe(),a=r.TOUCH_ROTATE;break;case Zn.PAN:if(i.enablePan===!1)return;Re(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Zn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(),a=r.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(oa)}function oe(L){switch(de(L),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ge(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(L),i.update();break;default:a=r.NONE}}function re(L){i.enabled!==!1&&L.preventDefault()}function le(L){b.push(L)}function Ee(L){delete V[L.pointerId];for(let ce=0;ce<b.length;ce++)if(b[ce].pointerId==L.pointerId){b.splice(ce,1);return}}function de(L){let ce=V[L.pointerId];ce===void 0&&(ce=new We,V[L.pointerId]=ce),ce.set(L.pageX,L.pageY)}function _e(L){const ce=L.pointerId===b[0].pointerId?b[1]:b[0];return V[ce.pointerId]}i.domElement.addEventListener("contextmenu",re),i.domElement.addEventListener("pointerdown",Me),i.domElement.addEventListener("pointercancel",we),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var bt=Math.PI,st=bt*2,Ui=bt/180,wp=180/bt,Rp=1440,Cp=398600.8,Ft=6378.135,pn=60/Math.sqrt(Ft*Ft*Ft/Cp),la=Ft*pn/60,Lp=1/pn,Bn=.001082616,Pp=-253881e-11,Dp=-165597e-11,Gn=Pp/Bn,Gi=2/3;function Up(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,a=0;i>a+t[r-1]&&r<12;)a+=t[r-1],r+=1;var o=r,s=i-a,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:o,day:s,hr:c,minute:h,sec:d}}function oo(n,e,t,i,r,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+a/60+r)/60+i)/24}function La(n,e,t,i,r,a,o){if(n instanceof Date){var s=n;return oo(s.getUTCFullYear(),s.getUTCMonth()+1,s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return oo(n,e,t,i,r,a,o)}function Vo(n,e){var t=n.e3,i=n.ee2,r=n.peo,a=n.pgho,o=n.pho,s=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,v=n.sh2,x=n.sh3,p=n.si2,u=n.si3,y=n.sl2,g=n.sl3,w=n.sl4,T=n.t,R=n.xgh2,b=n.xgh3,V=n.xgh4,M=n.xh2,A=n.xh3,B=n.xi2,j=n.xi3,ae=n.xl2,P=n.xl3,z=n.xl4,q=n.zmol,K=n.zmos,ie=e.init,$=e.opsmode,ne=e.ep,D=e.inclp,N=e.nodep,pe=e.argpp,fe=e.mp,te,ue,Ce,xe,Re,Pe,Ie,U,Ye,ge,Se,Te,Ne,Me,be,we,Ue,He,E,_,I,oe=119459e-10,re=.01675,le=.00015835218,Ee=.0549;I=K+oe*T,ie==="y"&&(I=K),_=I+2*re*Math.sin(I),Ue=Math.sin(_),ge=.5*Ue*Ue-.25,Se=-.5*Ue*Math.cos(_);var de=c*ge+h*Se,_e=p*ge+u*Se,L=y*ge+g*Se+w*Ue,ce=d*ge+f*Se+m*Ue,Q=v*ge+x*Se;I=q+le*T,ie==="y"&&(I=q),_=I+2*Ee*Math.sin(I),Ue=Math.sin(_),ge=.5*Ue*Ue-.25,Se=-.5*Ue*Math.cos(_);var De=i*ge+t*Se,G=B*ge+j*Se,W=ae*ge+P*Se+z*Ue,ee=R*ge+b*Se+V*Ue,Z=M*ge+A*Se;return Te=de+De,be=_e+G,we=L+W,Ne=ce+ee,Me=Q+Z,ie==="n"&&(Te-=r,be-=s,we-=l,Ne-=a,Me-=o,D+=be,ne+=Te,xe=Math.sin(D),Ce=Math.cos(D),D>=.2?(Me/=xe,Ne-=Ce*Me,pe+=Ne,N+=Me,fe+=we):(Pe=Math.sin(N),Re=Math.cos(N),te=xe*Pe,ue=xe*Re,Ie=Me*Re+be*Ce*Pe,U=-Me*Pe+be*Ce*Re,te+=Ie,ue+=U,N%=st,N<0&&$==="a"&&(N+=st),He=fe+pe+Ce*N,Ye=we+Ne-be*N*xe,He+=Ye,E=N,N=Math.atan2(te,ue),N<0&&$==="a"&&(N+=st),Math.abs(E-N)>bt&&(N<E?N+=st:N-=st),fe+=we,pe=He-fe-Ce*N)),{ep:ne,inclp:D,nodep:N,argpp:pe,mp:fe}}function Ip(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,a=n.inclp,o=n.nodep,s=n.np,l,c,h,d,f,m,v,x,p,u,y,g,w,T,R,b,V,M,A,B,j,ae,P,z,q,K,ie,$,ne,D,N,pe,fe,te,ue,Ce,xe,Re,Pe,Ie,U,Ye,ge,Se,Te,Ne,Me,be,we,Ue,He,E,_,I,oe,re,le,Ee,de,_e,L,ce,Q,De=.01675,G=.0549,W=29864797e-13,ee=47968065e-14,Z=.39785416,ve=.91744867,C=.1945905,se=-.98088458,J=s,Y=t,he=Math.sin(o),Le=Math.cos(o),Oe=Math.sin(i),Ze=Math.cos(i),nt=Math.sin(a),je=Math.cos(a),me=Y*Y,ot=1-me,St=Math.sqrt(ot),tn=0,$e=0,nn=0,Jt=0,gn=0,Bt=e+18261.5+r/1440,Dt=(4.523602-.00092422029*Bt)%st,lt=Math.sin(Dt),Ct=Math.cos(Dt),S=.91375164-.03568096*Ct,F=Math.sqrt(1-S*S),H=.089683511*lt/F,X=Math.sqrt(1-H*H),k=5.8351514+.001944368*Bt,Ae=.39785416*lt/F,Fe=X*Ct+.91744867*H*lt;Ae=Math.atan2(Ae,Fe),Ae+=k-Dt;var ze=Math.cos(Ae),Be=Math.sin(Ae);B=C,j=se,z=ve,q=Z,ae=Le,P=he,y=W;for(var ke=1/J,Ge=0;Ge<2;)Ge+=1,l=B*ae+j*z*P,h=-j*ae+B*z*P,v=-B*P+j*z*ae,x=j*q,p=j*P+B*z*ae,u=B*q,c=je*v+nt*x,d=je*p+nt*u,f=-nt*v+je*x,m=-nt*p+je*u,g=l*Ze+c*Oe,w=h*Ze+d*Oe,T=-l*Oe+c*Ze,R=-h*Oe+d*Ze,b=f*Oe,V=m*Oe,M=f*Ze,A=m*Ze,L=12*g*g-3*T*T,ce=24*g*w-6*T*R,Q=12*w*w-3*R*R,E=3*(l*l+c*c)+L*me,_=6*(l*h+c*d)+ce*me,I=3*(h*h+d*d)+Q*me,oe=-6*l*f+me*(-24*g*M-6*T*b),re=-6*(l*m+h*f)+me*(-24*(w*M+g*A)+-6*(T*V+R*b)),le=-6*h*m+me*(-24*w*A-6*R*V),Ee=6*c*f+me*(24*g*b-6*T*M),de=6*(d*f+c*m)+me*(24*(w*b+g*V)-6*(R*M+T*A)),_e=6*d*m+me*(24*w*V-6*R*A),E=E+E+ot*L,_=_+_+ot*ce,I=I+I+ot*Q,Me=y*ke,Ne=-.5*Me/St,be=Me*St,Te=-15*Y*be,we=g*T+w*R,Ue=w*T+g*R,He=w*R-g*T,Ge===1&&(K=Te,ie=Ne,$=Me,ne=be,D=we,N=Ue,pe=He,fe=E,te=_,ue=I,Ce=oe,xe=re,Re=le,Pe=Ee,Ie=de,U=_e,Ye=L,ge=ce,Se=Q,B=ze,j=Be,z=S,q=F,ae=X*Le+H*he,P=he*X-Le*H,y=ee);var Ve=(4.7199672+(.2299715*Bt-k))%st,it=(6.2565837+.017201977*Bt)%st,_t=2*K*N,et=2*K*pe,vt=2*ie*xe,tt=2*ie*(Re-Ce),Xe=-2*$*te,Cn=-2*$*(ue-fe),at=-2*$*(-21-9*me)*De,Lt=2*ne*ge,jn=2*ne*(Se-Ye),rn=-18*ne*De,an=-2*ie*Ie,ct=-2*ie*(U-Pe),Ut=2*Te*Ue,Ln=2*Te*He,xt=2*Ne*re,bi=2*Ne*(le-oe),Cr=-2*Me*_,ki=-2*Me*(I-E),jo=-2*Me*(-21-9*me)*G,Ko=2*be*ce,Zo=2*be*(Q-L),$o=-18*be*G,Jo=-2*Ne*de,Qo=-2*Ne*(_e-Ee);return{snodm:he,cnodm:Le,sinim:nt,cosim:je,sinomm:Oe,cosomm:Ze,day:Bt,e3:Ln,ee2:Ut,em:Y,emsq:me,gam:k,peo:tn,pgho:Jt,pho:gn,pinco:$e,plo:nn,rtemsq:St,se2:_t,se3:et,sgh2:Lt,sgh3:jn,sgh4:rn,sh2:an,sh3:ct,si2:vt,si3:tt,sl2:Xe,sl3:Cn,sl4:at,s1:Te,s2:Ne,s3:Me,s4:be,s5:we,s6:Ue,s7:He,ss1:K,ss2:ie,ss3:$,ss4:ne,ss5:D,ss6:N,ss7:pe,sz1:fe,sz2:te,sz3:ue,sz11:Ce,sz12:xe,sz13:Re,sz21:Pe,sz22:Ie,sz23:U,sz31:Ye,sz32:ge,sz33:Se,xgh2:Ko,xgh3:Zo,xgh4:$o,xh2:Jo,xh3:Qo,xi2:xt,xi3:bi,xl2:Cr,xl3:ki,xl4:jo,nm:J,z1:E,z2:_,z3:I,z11:oe,z12:re,z13:le,z21:Ee,z22:de,z23:_e,z31:L,z32:ce,z33:Q,zmol:Ve,zmos:it}}function Np(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,a=n.s3,o=n.s4,s=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,v=n.sz1,x=n.sz3,p=n.sz11,u=n.sz13,y=n.sz21,g=n.sz23,w=n.sz31,T=n.sz33,R=n.t,b=n.tc,V=n.gsto,M=n.mo,A=n.mdot,B=n.no,j=n.nodeo,ae=n.nodedot,P=n.xpidot,z=n.z1,q=n.z3,K=n.z11,ie=n.z13,$=n.z21,ne=n.z23,D=n.z31,N=n.z33,pe=n.ecco,fe=n.eccsq,te=n.emsq,ue=n.em,Ce=n.argpm,xe=n.inclm,Re=n.mm,Pe=n.nm,Ie=n.nodem,U=n.irez,Ye=n.atime,ge=n.d2201,Se=n.d2211,Te=n.d3210,Ne=n.d3222,Me=n.d4410,be=n.d4422,we=n.d5220,Ue=n.d5232,He=n.d5421,E=n.d5433,_=n.dedt,I=n.didt,oe=n.dmdt,re=n.dnodt,le=n.domdt,Ee=n.del1,de=n.del2,_e=n.del3,L=n.xfact,ce=n.xlamo,Q=n.xli,De=n.xni,G,W,ee,Z,ve,C,se,J,Y,he,Le,Oe,Ze,nt,je,me,ot,St,tn,$e,nn,Jt,gn,Bt,Dt,lt,Ct,S,F,H,X,k,Ae=17891679e-13,Fe=21460748e-13,ze=22123015e-14,Be=17891679e-13,ke=73636953e-16,Ge=21765803e-16,Ve=.0043752690880113,it=37393792e-14,_t=11428639e-14,et=.00015835218,vt=119459e-10;U=0,Pe<.0052359877&&Pe>.0034906585&&(U=1),Pe>=.00826&&Pe<=.00924&&ue>=.5&&(U=2);var tt=c*vt*m,Xe=h*vt*(p+u),Cn=-vt*d*(v+x-14-6*te),at=f*vt*(w+T-6),Lt=-vt*h*(y+g);(xe<.052359877||xe>bt-.052359877)&&(Lt=0),l!==0&&(Lt/=l);var jn=at-e*Lt;_=tt+i*et*s,I=Xe+r*et*(K+ie),oe=Cn-et*a*(z+q-14-6*te);var rn=o*et*(D+N-6),an=-et*r*($+ne);(xe<.052359877||xe>bt-.052359877)&&(an=0),le=jn+rn,re=Lt,l!==0&&(le-=e/l*an,re+=an/l);var ct=0,Ut=(V+b*Ve)%st;if(ue+=_*R,xe+=I*R,Ce+=le*R,Ie+=re*R,Re+=oe*R,U!==0){if(H=Math.pow(Pe/pn,Gi),U===2){X=e*e;var Ln=ue;ue=pe;var xt=te;te=fe,k=ue*te,nt=-.306-(ue-.64)*.44,ue<=.65?(je=3.616-13.247*ue+16.29*te,ot=-19.302+117.39*ue-228.419*te+156.591*k,St=-18.9068+109.7927*ue-214.6334*te+146.5816*k,tn=-41.122+242.694*ue-471.094*te+313.953*k,$e=-146.407+841.88*ue-1629.014*te+1083.435*k,nn=-532.114+3017.977*ue-5740.032*te+3708.276*k):(je=-72.099+331.819*ue-508.738*te+266.724*k,ot=-346.844+1582.851*ue-2415.925*te+1246.113*k,St=-342.585+1554.908*ue-2366.899*te+1215.972*k,tn=-1052.797+4758.686*ue-7193.992*te+3651.957*k,$e=-3581.69+16178.11*ue-24462.77*te+12422.52*k,ue>.715?nn=-5149.66+29936.92*ue-54087.36*te+31324.56*k:nn=1464.74-4664.75*ue+3763.64*te),ue<.7?(Bt=-919.2277+4988.61*ue-9064.77*te+5542.21*k,Jt=-822.71072+4568.6173*ue-8491.4146*te+5337.524*k,gn=-853.666+4690.25*ue-8624.77*te+5341.4*k):(Bt=-37995.78+161616.52*ue-229838.2*te+109377.94*k,Jt=-51752.104+218913.95*ue-309468.16*te+146349.42*k,gn=-40023.88+170470.89*ue-242699.48*te+115605.82*k),Dt=l*l,G=.75*(1+2*e+X),W=1.5*Dt,Z=1.875*l*(1-2*e-3*X),ve=-1.875*l*(1+2*e-3*X),se=35*Dt*G,J=39.375*Dt*Dt,Y=9.84375*l*(Dt*(1-2*e-5*X)+.33333333*(-2+4*e+6*X)),he=l*(4.92187512*Dt*(-2-4*e+10*X)+6.56250012*(1+2*e-3*X)),Le=29.53125*l*(2-8*e+X*(-12+8*e+10*X)),Oe=29.53125*l*(-2-8*e+X*(12+8*e-10*X)),S=Pe*Pe,F=H*H,Ct=3*S*F,lt=Ct*Be,ge=lt*G*nt,Se=lt*W*je,Ct*=H,lt=Ct*it,Te=lt*Z*ot,Ne=lt*ve*St,Ct*=H,lt=2*Ct*ke,Me=lt*se*tn,be=lt*J*$e,Ct*=H,lt=Ct*_t,we=lt*Y*nn,Ue=lt*he*gn,lt=2*Ct*Ge,He=lt*Le*Jt,E=lt*Oe*Bt,ce=(M+j+j-(Ut+Ut))%st,L=A+oe+2*(ae+re-Ve)-B,ue=Ln,te=xt}U===1&&(Ze=1+te*(-2.5+.8125*te),ot=1+2*te,me=1+te*(-6+6.60937*te),G=.75*(1+e)*(1+e),ee=.9375*l*l*(1+3*e)-.75*(1+e),C=1+e,C*=1.875*C*C,Ee=3*Pe*Pe*H*H,de=2*Ee*G*Ze*Ae,_e=3*Ee*C*me*ze*H,Ee=Ee*ee*ot*Fe*H,ce=(M+j+t-Ut)%st,L=A+P+oe+le+re-(B+Ve)),Q=ce,De=B,Ye=0,Pe=B+ct}return{em:ue,argpm:Ce,inclm:xe,mm:Re,nm:Pe,nodem:Ie,irez:U,atime:Ye,d2201:ge,d2211:Se,d3210:Te,d3222:Ne,d4410:Me,d4422:be,d5220:we,d5232:Ue,d5421:He,d5433:E,dedt:_,didt:I,dmdt:oe,dndt:ct,dnodt:re,domdt:le,del1:Ee,del2:de,del3:_e,xfact:L,xlamo:ce,xli:Q,xni:De}}function lo(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Ui/240%st,t<0&&(t+=st),t}function ko(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?lo(La.apply(void 0,arguments)):lo.apply(void 0,arguments)}function Fp(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,a=n.no,o=e*e,s=1-o,l=Math.sqrt(s),c=Math.cos(i),h=c*c,d=Math.pow(pn/a,Gi),f=.75*Bn*(3*h-1)/(l*s),m=f/(d*d),v=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(v*v),a/=1+m;var x=Math.pow(pn/a,Gi),p=Math.sin(i),u=x*s,y=1-5*h,g=-y-h-h,w=1/x,T=u*u,R=x*(1-e),b="n",V;if(r==="a"){var M=t-7305,A=Math.floor(M+1e-8),B=M-A,j=.017202791694070362,ae=1.7321343856509375,P=5075514194322695e-30,z=j+st;V=(ae+j*A+z*B+M*M*P)%st,V<0&&(V+=st)}else V=ko(t+24332815e-1);return{no:a,method:b,ainv:w,ao:x,con41:g,con42:y,cosio:c,cosio2:h,eccsq:o,omeosq:s,posq:T,rp:R,rteosq:l,sinio:p,gsto:V}}function Op(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,a=n.d3222,o=n.d4410,s=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,v=n.del2,x=n.del3,p=n.didt,u=n.dmdt,y=n.dnodt,g=n.domdt,w=n.argpo,T=n.argpdot,R=n.t,b=n.tc,V=n.gsto,M=n.xfact,A=n.xlamo,B=n.no,j=n.atime,ae=n.em,P=n.argpm,z=n.inclm,q=n.xli,K=n.mm,ie=n.xni,$=n.nodem,ne=n.nm,D=.13130908,N=2.8843198,pe=.37448087,fe=5.7686396,te=.95240898,ue=1.8014998,Ce=1.050833,xe=4.4108898,Re=.0043752690880113,Pe=720,Ie=-720,U=259200,Ye,ge,Se,Te,Ne,Me,be,we,Ue=0,He=0,E=(V+b*Re)%st;if(ae+=f*R,z+=p*R,P+=g*R,$+=y*R,K+=u*R,e!==0){(j===0||R*j<=0||Math.abs(R)<Math.abs(j))&&(j=0,ie=B,q=A),R>0?Ye=Pe:Ye=Ie;for(var _=381;_===381;)e!==2?(be=m*Math.sin(q-D)+v*Math.sin(2*(q-N))+x*Math.sin(3*(q-pe)),Ne=ie+M,Me=m*Math.cos(q-D)+2*v*Math.cos(2*(q-N))+3*x*Math.cos(3*(q-pe)),Me*=Ne):(we=w+T*j,Se=we+we,ge=q+q,be=t*Math.sin(Se+q-fe)+i*Math.sin(q-fe)+r*Math.sin(we+q-te)+a*Math.sin(-we+q-te)+o*Math.sin(Se+ge-ue)+s*Math.sin(ge-ue)+l*Math.sin(we+q-Ce)+c*Math.sin(-we+q-Ce)+h*Math.sin(we+ge-xe)+d*Math.sin(-we+ge-xe),Ne=ie+M,Me=t*Math.cos(Se+q-fe)+i*Math.cos(q-fe)+r*Math.cos(we+q-te)+a*Math.cos(-we+q-te)+l*Math.cos(we+q-Ce)+c*Math.cos(-we+q-Ce)+2*(o*Math.cos(Se+ge-ue)+s*Math.cos(ge-ue)+h*Math.cos(we+ge-xe)+d*Math.cos(-we+ge-xe)),Me*=Ne),Math.abs(R-j)>=Pe?_=381:(He=R-j,_=0),_===381&&(q+=Ne*Ye+be*U,ie+=be*Ye+Me*U,j+=Ye);ne=ie+be*He+Me*He*He*.5,Te=q+Ne*He+be*He*He*.5,e!==1?(K=Te-2*$+2*E,Ue=ne-B):(K=Te-$-P+E,Ue=ne-B),ne=B+Ue}return{atime:j,em:ae,argpm:P,inclm:z,xli:q,mm:K,xni:ie,nodem:$,dndt:Ue,nm:ne}}function Wo(n,e){var t,i,r,a,o,s,l,c,h,d,f,m,v,x,p,u,y,g,w,T,R,b,V,M,A,B,j,ae=15e-13;n.t=e,n.error=0;var P=n.mo+n.mdot*n.t,z=n.argpo+n.argpdot*n.t,q=n.nodeo+n.nodedot*n.t;h=z,R=P;var K=n.t*n.t;if(V=q+n.nodecf*K,y=1-n.cc1*n.t,g=n.bstar*n.cc4*n.t,w=n.t2cof*K,n.isimp!==1){l=n.omgcof*n.t;var ie=1+n.eta*Math.cos(P);s=n.xmcof*(ie*ie*ie-n.delmo),u=l+s,R=P+u,h=z-u,m=K*n.t,v=m*n.t,y=y-n.d2*K-n.d3*m-n.d4*v,g+=n.bstar*n.cc5*(Math.sin(R)-n.sinmao),w=w+n.t3cof*m+v*(n.t4cof+n.t*n.t5cof)}b=n.no;var $=n.ecco;if(T=n.inclo,n.method==="d"){x=n.t;var ne={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:x,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:$,argpm:h,inclm:T,xli:n.xli,mm:R,xni:n.xni,nodem:V,nm:b},D=Op(ne);$=D.em,h=D.argpm,T=D.inclm,R=D.mm,V=D.nodem,b=D.nm}if(b<=0)return n.error=2,[!1,!1];var N=Math.pow(pn/b,Gi)*y*y;if(b=pn/Math.pow(N,1.5),$-=g,$>=1||$<-.001)return n.error=1,[!1,!1];$<1e-6&&($=1e-6),R+=n.no*w,A=R+h+V,V%=st,h%=st,A%=st,R=(A-h-V)%st;var pe=Math.sin(T),fe=Math.cos(T),te=$;if(M=T,d=h,j=V,B=R,a=pe,r=fe,n.method==="d"){var ue={inclo:n.inclo,init:"n",ep:te,inclp:M,nodep:j,argpp:d,mp:B,opsmode:n.operationmode},Ce=Vo(n,ue);if(te=Ce.ep,j=Ce.nodep,d=Ce.argpp,B=Ce.mp,M=Ce.inclp,M<0&&(M=-M,j+=bt,d-=bt),te<0||te>1)return n.error=3,[!1,!1]}n.method==="d"&&(a=Math.sin(M),r=Math.cos(M),n.aycof=-.5*Gn*a,Math.abs(r+1)>15e-13?n.xlcof=-.25*Gn*a*(3+5*r)/(1+r):n.xlcof=-.25*Gn*a*(3+5*r)/ae);var xe=te*Math.cos(d);u=1/(N*(1-te*te));var Re=te*Math.sin(d)+u*n.aycof,Pe=B+d+j+u*n.xlcof*xe,Ie=(Pe-j)%st;c=Ie,p=9999.9;for(var U=1;Math.abs(p)>=1e-12&&U<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*xe-i*Re,p=(Ie-Re*t+xe*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,U+=1;var Ye=xe*t+Re*i,ge=xe*i-Re*t,Se=xe*xe+Re*Re,Te=N*(1-Se);if(Te<0)return n.error=4,[!1,!1];var Ne=N*(1-Ye),Me=Math.sqrt(N)*ge/Ne,be=Math.sqrt(Te)/Ne,we=Math.sqrt(1-Se);u=ge/(1+we);var Ue=N/Ne*(i-Re-xe*u),He=N/Ne*(t-xe+Re*u);f=Math.atan2(Ue,He);var E=(He+He)*Ue,_=1-2*Ue*Ue;u=1/Te;var I=.5*Bn*u,oe=I*u;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var re=Ne*(1-1.5*oe*we*n.con41)+.5*I*n.x1mth2*_;if(re<1)return n.error=6,{position:!1,velocity:!1};f-=.25*oe*n.x7thm1*E;var le=j+1.5*oe*r*E,Ee=M+1.5*oe*r*a*_,de=Me-b*I*n.x1mth2*E/pn,_e=be+b*I*(n.x1mth2*_+1.5*n.con41)/pn,L=Math.sin(f),ce=Math.cos(f),Q=Math.sin(le),De=Math.cos(le),G=Math.sin(Ee),W=Math.cos(Ee),ee=-Q*W,Z=De*W,ve=ee*L+De*ce,C=Z*L+Q*ce,se=G*L,J=ee*ce-De*L,Y=Z*ce-Q*L,he=G*ce,Le={x:re*ve*Ft,y:re*C*Ft,z:re*se*Ft},Oe={x:(de*ve+_e*J)*la,y:(de*C+_e*Y)*la,z:(de*se+_e*he)*la};return{position:Le,velocity:Oe}}function zp(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,a=e.xbstar,o=e.xecco,s=e.xargpo,l=e.xinclo,c=e.xmo,h=e.xno,d=e.xnodeo,f,m,v,x,p,u,y,g,w,T,R,b,V,M,A,B,j,ae,P,z,q,K,ie,$,ne,D,N,pe,fe,te,ue,Ce,xe,Re,Pe,Ie,U,Ye,ge,Se,Te,Ne,Me,be,we,Ue,He,E,_,I,oe,re,le,Ee,de,_e,L=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=a,n.ecco=o,n.argpo=s,n.inclo=l,n.mo=c,n.no=h,n.nodeo=d,n.operationmode=t;var ce=78/Ft+1,Q=42/Ft,De=Q*Q*Q*Q;n.init="y",n.t=0;var G={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},W=Fp(G),ee=W.ao,Z=W.con42,ve=W.cosio,C=W.cosio2,se=W.eccsq,J=W.omeosq,Y=W.posq,he=W.rp,Le=W.rteosq,Oe=W.sinio;if(n.no=W.no,n.con41=W.con41,n.gsto=W.gsto,n.a=Math.pow(n.no*Lp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,J>=0||n.no>=0){if(n.isimp=0,he<220/Ft+1&&(n.isimp=1),N=ce,q=De,ae=(he-1)*Ft,ae<156){N=ae-78,ae<98&&(N=20);var Ze=(120-N)/Ft;q=Ze*Ze*Ze*Ze,N=N/Ft+1}P=1/Y,Ue=1/(ee-N),n.eta=ee*n.ecco*Ue,b=n.eta*n.eta,R=n.ecco*n.eta,z=Math.abs(1-b),u=q*Math.pow(Ue,4),y=u/Math.pow(z,3.5),x=y*n.no*(ee*(1+1.5*b+R*(4+b))+.375*Bn*Ue/z*n.con41*(8+3*b*(8+b))),n.cc1=n.bstar*x,p=0,n.ecco>1e-4&&(p=-2*u*Ue*Gn*n.no*Oe/n.ecco),n.x1mth2=1-C,n.cc4=2*n.no*y*ee*J*(n.eta*(2+.5*b)+n.ecco*(.5+2*b)-Bn*Ue/(ee*z)*(-3*n.con41*(1-2*R+b*(1.5-.5*R))+.75*n.x1mth2*(2*b-R*(1+b))*Math.cos(2*n.argpo))),n.cc5=2*y*ee*J*(1+2.75*(b+R)+R*b),g=C*C,Me=1.5*Bn*P*n.no,be=.5*Me*Bn*P,we=-.46875*Dp*P*P*n.no,n.mdot=n.no+.5*Me*Le*n.con41+.0625*be*Le*(13-78*C+137*g),n.argpdot=-.5*Me*Z+.0625*be*(7-114*C+395*g)+we*(3-36*C+49*g),E=-Me*ve,n.nodedot=E+(.5*be*(4-19*C)+2*we*(3-7*C))*ve,He=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-Gi*u*n.bstar/R),n.nodecf=3.5*J*E*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(ve+1)>15e-13?n.xlcof=-.25*Gn*Oe*(3+5*ve)/(1+ve):n.xlcof=-.25*Gn*Oe*(3+5*ve)/L,n.aycof=-.5*Gn*Oe;var nt=1+n.eta*Math.cos(n.mo);if(n.delmo=nt*nt*nt,n.sinmao=Math.sin(n.mo),n.x7thm1=7*C-1,2*bt/n.no>=225){n.method="d",n.isimp=1,Te=0,A=n.inclo;var je={epoch:r,ep:n.ecco,argpp:n.argpo,tc:Te,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},me=Ip(je);n.e3=me.e3,n.ee2=me.ee2,n.peo=me.peo,n.pgho=me.pgho,n.pho=me.pho,n.pinco=me.pinco,n.plo=me.plo,n.se2=me.se2,n.se3=me.se3,n.sgh2=me.sgh2,n.sgh3=me.sgh3,n.sgh4=me.sgh4,n.sh2=me.sh2,n.sh3=me.sh3,n.si2=me.si2,n.si3=me.si3,n.sl2=me.sl2,n.sl3=me.sl3,n.sl4=me.sl4,m=me.sinim,f=me.cosim,w=me.em,T=me.emsq,K=me.s1,ie=me.s2,$=me.s3,ne=me.s4,D=me.s5,pe=me.ss1,fe=me.ss2,te=me.ss3,ue=me.ss4,Ce=me.ss5,xe=me.sz1,Re=me.sz3,Pe=me.sz11,Ie=me.sz13,U=me.sz21,Ye=me.sz23,ge=me.sz31,Se=me.sz33,n.xgh2=me.xgh2,n.xgh3=me.xgh3,n.xgh4=me.xgh4,n.xh2=me.xh2,n.xh3=me.xh3,n.xi2=me.xi2,n.xi3=me.xi3,n.xl2=me.xl2,n.xl3=me.xl3,n.xl4=me.xl4,n.zmol=me.zmol,n.zmos=me.zmos,j=me.nm,_=me.z1,I=me.z3,oe=me.z11,re=me.z13,le=me.z21,Ee=me.z23,de=me.z31,_e=me.z33;var ot={inclo:A,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},St=Vo(n,ot);n.ecco=St.ep,n.inclo=St.inclp,n.nodeo=St.nodep,n.argpo=St.argpp,n.mo=St.mp,V=0,M=0,B=0;var tn={cosim:f,emsq:T,argpo:n.argpo,s1:K,s2:ie,s3:$,s4:ne,s5:D,sinim:m,ss1:pe,ss2:fe,ss3:te,ss4:ue,ss5:Ce,sz1:xe,sz3:Re,sz11:Pe,sz13:Ie,sz21:U,sz23:Ye,sz31:ge,sz33:Se,t:n.t,tc:Te,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:He,z1:_,z3:I,z11:oe,z13:re,z21:le,z23:Ee,z31:de,z33:_e,ecco:n.ecco,eccsq:se,em:w,argpm:V,inclm:A,mm:B,nm:j,nodem:M,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},$e=Np(tn);n.irez=$e.irez,n.atime=$e.atime,n.d2201=$e.d2201,n.d2211=$e.d2211,n.d3210=$e.d3210,n.d3222=$e.d3222,n.d4410=$e.d4410,n.d4422=$e.d4422,n.d5220=$e.d5220,n.d5232=$e.d5232,n.d5421=$e.d5421,n.d5433=$e.d5433,n.dedt=$e.dedt,n.didt=$e.didt,n.dmdt=$e.dmdt,n.dnodt=$e.dnodt,n.domdt=$e.domdt,n.del1=$e.del1,n.del2=$e.del2,n.del3=$e.del3,n.xfact=$e.xfact,n.xlamo=$e.xlamo,n.xli=$e.xli,n.xni=$e.xni}n.isimp!==1&&(v=n.cc1*n.cc1,n.d2=4*ee*Ue*v,Ne=n.d2*Ue*n.cc1/3,n.d3=(17*ee+N)*Ne,n.d4=.5*Ne*ee*Ue*(221*ee+31*N)*n.cc1,n.t3cof=n.d2+2*v,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*v)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*v*(2*n.d2+v)))}Wo(n,0),n.init="n"}function Bp(n,e){var t="i",i=1440/(2*bt),r=0,a={};a.error=0,a.satnum=n.substring(2,7),a.epochyr=parseInt(n.substring(18,20),10),a.epochdays=parseFloat(n.substring(20,32)),a.ndot=parseFloat(n.substring(33,43)),a.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),a.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),a.inclo=parseFloat(e.substring(8,16)),a.nodeo=parseFloat(e.substring(17,25)),a.ecco=parseFloat(".".concat(e.substring(26,33))),a.argpo=parseFloat(e.substring(34,42)),a.mo=parseFloat(e.substring(43,51)),a.no=parseFloat(e.substring(52,63)),a.no/=i,a.inclo*=Ui,a.nodeo*=Ui,a.argpo*=Ui,a.mo*=Ui,a.epochyr<57?r=a.epochyr+2e3:r=a.epochyr+1900;var o=Up(r,a.epochdays),s=o.mon,l=o.day,c=o.hr,h=o.minute,d=o.sec;return a.jdsatepoch=La(r,s,l,c,h,d),zp(a,{opsmode:t,satn:a.satnum,epoch:a.jdsatepoch-24332815e-1,xbstar:a.bstar,xecco:a.ecco,xargpo:a.argpo,xinclo:a.inclo,xmo:a.mo,xno:a.no,xnodeo:a.nodeo}),a}function Gp(n){return Hp(n)||Vp(n)||kp(n)||Wp()}function Hp(n){if(Array.isArray(n))return xa(n)}function Vp(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function kp(n,e){if(n){if(typeof n=="string")return xa(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xa(n,e)}}function xa(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Wp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xp(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),a=La.apply(void 0,Gp(r)),o=(a-i.jdsatepoch)*Rp;return Wo(i,o)}function Xo(n){return n*wp}function qp(n){if(n<-bt/2||n>bt/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return Xo(n)}function Yp(n){if(n<-bt||n>bt)throw new RangeError("Longitude radians must be in range [-pi; pi].");return Xo(n)}function jp(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),a=(t-i)/t,o=2*a-a*a,s=Math.atan2(n.y,n.x)-e;s<-bt;)s+=st;for(;s>bt;)s-=st;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*o*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:s,latitude:h,height:f}}var Kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qo={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(Kp,function(){var t=function(){function i(m){return o.appendChild(m.dom),m}function r(m){for(var v=0;v<o.children.length;v++)o.children[v].style.display=v===m?"block":"none";a=m}var a=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++a%o.children.length)},!1);var s=(performance||Date).now(),l=s,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-s,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,f)){var v=performance.memory;f.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return m},update:function(){s=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,a){var o=1/0,s=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,f=3*c,m=2*c,v=3*c,x=15*c,p=74*c,u=30*c,y=document.createElement("canvas");y.width=h,y.height=d,y.style.cssText="width:80px;height:48px";var g=y.getContext("2d");return g.font="bold "+9*c+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=a,g.fillRect(0,0,h,d),g.fillStyle=r,g.fillText(i,f,m),g.fillRect(v,x,p,u),g.fillStyle=a,g.globalAlpha=.9,g.fillRect(v,x,p,u),{dom:y,update:function(w,T){o=Math.min(o,w),s=Math.max(s,w),g.fillStyle=a,g.globalAlpha=1,g.fillRect(0,0,h,x),g.fillStyle=r,g.fillText(l(w)+" "+i+" ("+l(o)+"-"+l(s)+")",f,m),g.drawImage(y,v+c,x,p-c,u,v,x,p-c,u),g.fillRect(v+p-c,x,c,u),g.fillStyle=a,g.globalAlpha=.9,g.fillRect(v+p-c,x,c,l((1-w/T)*u))}}},t})})(qo);var $p=qo.exports;const Jp=Zp($p),Yo=Math.sqrt(3),Qp=.5*(Yo-1),Li=(3-Yo)/6,co=n=>Math.floor(n)|0,ho=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function em(n=Math.random){const e=tm(n),t=new Float64Array(e).map(r=>ho[r%12*2]),i=new Float64Array(e).map(r=>ho[r%12*2+1]);return function(a,o){let s=0,l=0,c=0;const h=(a+o)*Qp,d=co(a+h),f=co(o+h),m=(d+f)*Li,v=d-m,x=f-m,p=a-v,u=o-x;let y,g;p>u?(y=1,g=0):(y=0,g=1);const w=p-y+Li,T=u-g+Li,R=p-1+2*Li,b=u-1+2*Li,V=d&255,M=f&255;let A=.5-p*p-u*u;if(A>=0){const ae=V+e[M],P=t[ae],z=i[ae];A*=A,s=A*A*(P*p+z*u)}let B=.5-w*w-T*T;if(B>=0){const ae=V+y+e[M+g],P=t[ae],z=i[ae];B*=B,l=B*B*(P*w+z*T)}let j=.5-R*R-b*b;if(j>=0){const ae=V+1+e[M+1],P=t[ae],z=i[ae];j*=j,c=j*j*(P*R+z*b)}return 70*(s+l+c)}}function tm(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),a=t[i];t[i]=t[r],t[r]=a}for(let i=256;i<512;i++)t[i]=t[i-256];return t}function nm(n){let e,t,i,r,a,o,s,l=!0,c=!1;const h=66,d=2;let f,m;const v=6371,x=1,p=x/v,u=2*Math.PI/86400,y=23.4*(Math.PI/180),g=27.32*24*3600,w=2*Math.PI/g;let T=1,R;const b=new Jp;b.showPanel(0),window.addEventListener("keydown",G=>{(G.key==="R"||G.key==="r")&&(l=!l)}),window.addEventListener("keydown",G=>{(G.key==="W"||G.key==="w")&&(c=!c,a.traverse(function(W){W.isMesh&&(W.material.wireframe=c,W.material.needsUpdate=!0)}))});function V(){e=new vp,t=new Vt(5,window.innerWidth/window.innerHeight,.1,3e5),t.position.set(0,0,800),t.position.z=66,i=new Ho({alpha:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(12632256,0),i.shadowMap.enabled=!0,i.shadowMap.type=fo,document.getElementById(n).appendChild(i.domElement),r=new Ap(t,i.domElement),r.enableDamping=!0,r.enableZoom=!0,r.enablePan=!1,r.dampingFactor=.25,r.zoomSpeed=.666,r.rotateSpeed=.25,r.minDistance=10,r.maxDistance=100,xe(),Ye(),M(),A(),a=new mi,a.rotation.z=y,e.add(a),q(),ie("Mercury",12500670,2439.7),ie("Venus",16768324,6051.8),ie("Earth",2254591,6371),ie("Mars",16729122,3389.5),ie("Jupiter",14540202,69911),ie("Saturn",15654331,58232),ie("Uranus",11206655,25362),ie("Neptune",4482815,24622),He(),$(),E(),ce(),Q(),window.addEventListener("resize",De,!1),De(),Ue()}function M(){const G=new yp(4210752,1);e.add(G),f=new Ep(9079434,100),f.castShadow=!0,e.add(f);const W=new xp(16777147,526368,.5);e.add(W);const ee=x*109*T,Z=new zn(ee,24,24),ve=new ba({color:16776960,emissive:16753920,opacity:.25,transparent:!0,wireframe:!0,alphaHash:!0});o=new Ot(Z,ve),e.add(o);const C=new mi;e.add(C),C.add(o),C.add(f)}function A(){const G=1496e5*p*T;o.position.set(G,0,0),f.position.copy(o.position)}const B=new em;let j=0;const ae=1e-5,P=.002;function z(){j+=ae;const G=B(j,0)*P,W=B(0,j)*P,ee=B(j,j)*P;o.rotation.x+=G,o.rotation.y+=W,o.rotation.z+=ee}function q(){const G=x*.273,W=new pr({color:9079434,roughness:1,metalness:1.25}),ee=new zn(G,32,32);R=new Ot(ee,W),a.add(R)}function K(){if(!R)return;const W=384400*p*T,Z=Pe.getTime()/1e3*w%(2*Math.PI),ve=.0549,C=W*(Math.cos(Z)-ve),se=W*Math.sin(Z)*Math.sqrt(1-ve**2);let J=new O(C,0,se);const Y=5.145*(Math.PI/180);J.applyAxisAngle(new O(1,0,0),Y),J.applyAxisAngle(new O(0,0,1),y),R.position.copy(J)}function ie(G,W,ee){const Z=x*(ee/v)*p,ve=new zn(Z,32,32),C=new pr({color:W}),se=new Ot(ve,C);e.add(se)}function $(){fetch("https://orbital-bbfd.onrender.com/satellites").then(G=>{if(!G.ok)throw new Error("Failed to load cached TLE data");return G.json()}).then(G=>{D(G)}).catch(G=>{console.warn("Error fetching TLE data from server:",G),console.log("Attempting to load data from local static file..."),fetch("data/cachedSatellites.json").then(W=>{if(!W.ok)throw new Error("Local file fetch failed");return W.json()}).then(W=>{console.log("Loaded TLE data from local static file."),D(W)}).catch(W=>{console.error("Failed to load TLE data from both server and local file:",W)})})}let ne=[];function D(G){G.forEach((W,ee)=>{const Z=Bp(W.tleLine1,W.tleLine2),ve={period:Z.no?2*Math.PI/Z.no*60:1440,inclination:Z.inclo*(180/Math.PI),eccentricity:Z.ecco,apogee:Z.apogee,perigee:Z.perigee},C=new zn(.004,1,1),se=new pr({color:16711680,wireframe:!0,opacity:.75,alphaHash:!0,depthTest:!0,metalness:1}),J=new Ot(C,se);J.userData={satrec:Z,orbitalParams:ve,index:ee},a.add(J),ne.push(J)})}const N=8,pe=40;let fe=.3,te=1,ue=.75,Ce=1.25;function xe(){const G=window.innerWidth<=768;t.position.z=G?h*d:h,G?(r.minDistance=10,r.maxDistance=500,fe=.15,te=.75,ue=.75,Ce=1.3):(r.minDistance=10,r.maxDistance=100,fe=.3,te=1,ue=.75,Ce=1.25)}function Re(){const G=t.position.length(),W=Pi.clamp((pe-G)/(pe-N)*(te-fe)+fe,fe,te),ee=Math.floor(ne.length*W);ne.forEach((Z,ve)=>{if(!Z){console.warn(`Skipping undefined satellite mesh at index ${ve}`);return}Z.visible=ve<ee;const C=Pi.lerp(ue,Ce,(G-N)/(pe-N));Z.scale.set(C,C,C)})}let Pe;const Ie=1e3/24;let U=1e3;function Ye(){fetch("lastCacheTime.json").then(G=>{if(!G.ok)throw new Error("Failed to fetch last cache time");return G.json()}).then(G=>{Pe=new Date(G.timestamp),document.getElementById("simulation-time").textContent=Pe.toUTCString().replace("GMT","UTC")}).catch(G=>{console.error("Error loading cache time:",G),Pe=new Date("2024-11-01T00:00:00Z")})}function ge(){Pe=new Date(Pe.getTime()+Ie*U);let G=Pe.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=G}function Se(){if(l){const G=Pe.getTime()/1e3%86400;a.rotation.y=G*u%(2*Math.PI)}}function Te(){const G=ko(Pe),W=t.position.length(),ee=Pi.clamp((pe-W)/(pe-N)*(te-fe)+fe,fe,te),Z=Math.floor(ne.length*ee);ne.forEach((ve,C)=>{if(C>=Z){ve.visible=!1;return}ve.visible=!0;const{satrec:se}=ve.userData,J=Xp(se,Pe);if(!J.position)return;const Y=jp(J.position,G),he=Y.height*p*T,Le=le(qp(Y.latitude),Yp(Y.longitude),x+he);ve.position.copy(Le);const Oe=Pi.lerp(ue,Ce,(W-N)/(pe-N));ve.scale.set(Oe,Oe,Oe)})}let Ne=new Tp,Me=0,we=1/24;function Ue(){Me+=Ne.getDelta(),Me>we&&(b.begin(),s=requestAnimationFrame(Ue),ge(),Re(),Te(),Se(),K(),z(),A(),r.update(),i.render(e,t),b.end(),Me=Me%we),requestAnimationFrame(Ue)}function He(){const G=new zn(x,64,64),W=new pr({color:0,opacity:1,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:c});m=new Ot(G,W),m.castShadow=!0,m.receiveShadow=!0,a.add(m)}return V(),{dispose(){window.removeEventListener("resize",De),cancelAnimationFrame(s);const G=document.getElementById(n);G&&i.domElement&&G.removeChild(i.domElement)}};async function E(){console.log("Attempting to load data...");const G=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson","data/ne_50m_ocean.geojson"];try{const W=G.map(ee=>fetch(ee).then(Z=>{if(!Z.ok)throw new Error(`Network response was not ok for ${ee}`);return Z.json()}).then(Z=>(_(ee,Z),"loaded")).catch(Z=>{throw console.error(`Error loading ${ee}:`,Z),Z}));await Promise.all(W),console.log("All GeoJSON data loaded successfully.")}catch(W){console.error("Failed to load some GeoJSON data:",W)}}function _(G,W){switch(G){case"data/ne_110m_graticules_10.geojson":console.log("Loaded graticules:",W),oe(W);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",W),I(W);break;case"data/ne_110m_land.geojson":break;case"data/ne_50m_ocean.geojson":console.log("loaded ocean:",W);break;default:console.warn("Unrecognized GeoJSON URL:",G);break}}function I(G){const W=new va({color:16777215,opacity:.75,alphaHash:!0}),ee=1;G.features.forEach(Z=>{const ve=Z.geometry.coordinates;if(Z.geometry.type==="LineString"){const C=re(ve,ee),se=new fr(C,W);a.add(se)}else Z.geometry.type==="MultiLineString"&&ve.forEach(C=>{const se=re(C,ee),J=new fr(se,W);a.add(J)})})}function oe(G){const W=new va({color:11184810,opacity:.35,alphaHash:!0,linewidth:1}),ee=x;G.features.forEach(Z=>{const ve=Z.geometry.coordinates;if(Z.geometry.type==="LineString"){const C=re(ve,ee),se=new fr(C,W);a.add(se)}else Z.geometry.type==="MultiLineString"&&ve.forEach(C=>{const se=re(C,ee),J=new fr(se,W);a.add(J)})})}function re(G,W){const ee=new en,Z=[];G.forEach(([C,se])=>{const J=le(se,C,W);Z.push(J.x,J.y,J.z)});const ve=new Float32Array(Z);return ee.setAttribute("position",new Zt(ve,3)),ee}function le(G,W,ee){const Z=(90-G)*(Math.PI/180),ve=(W+180)*(Math.PI/180),C=-ee*Math.sin(Z)*Math.cos(ve),se=ee*Math.sin(Z)*Math.sin(ve),J=ee*Math.cos(Z);return new O(C,J,se)}function Ee(G,W){let ee;return function(...Z){clearTimeout(ee),ee=setTimeout(()=>G.apply(this,Z),W)}}function de(G){const Z=Math.log(1),C=(Math.log(2e4)-Z)/100;return Math.exp(Z+C*(G-0))}function _e(G){const W=Math.log10(.1),ee=Math.log10(25);return(Math.log10(G)-W)/(ee-W)*100}function L(G){const W=Math.log10(.1),ee=Math.log10(25),Z=W+G/100*(ee-W);return Math.pow(10,Z)}function ce(){const G=document.getElementById("exaggeration-slider"),W=document.getElementById("exaggeration-value"),ee=1;G.value=_e(ee),T=ee,W.textContent=T.toFixed(1)+"x",G.addEventListener("input",J=>{const Y=parseFloat(J.target.value);T=L(Y),W.textContent=T.toFixed(1)+"x",Ee(Te,5)()});const Z=document.getElementById("speed-slider"),ve=document.getElementById("speed-value"),C=1;Z.value=0,U=C,ve.textContent=U.toFixed(0)+"x",Z.addEventListener("input",J=>{const Y=parseFloat(J.target.value);U=de(Y),ve.textContent=U.toFixed(0)+"x";let he=Pe.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=he,document.getElementById("simulation-time").textContent=Pe.toUTCString().replace("GMT","UTC")}),document.getElementById("reset-button").addEventListener("click",()=>{G.value=_e(ee),T=ee,W.textContent=T.toFixed(1)+"x",Te(),Z.value=0,U=C,ve.textContent=U.toFixed(0)+"x"})}function Q(){const G=document.createElement("div");G.id="scale-bar",G.style.position="absolute",G.style.height="20px",G.style.backgroundColor="#ffd700",document.body.appendChild(G);const W=document.createElement("div");return W.id="scale-bar-label",W.style.position="absolute",W.style.color="#ffd700",W.style.fontSize="12px",W.style.fontFamily="Arial, sans-serif",document.body.appendChild(W),{scaleBar:G,scaleBarLabel:W}}function De(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight);const G=window.innerWidth<=768;t.position.z=G?h*d:h}}const im="threeContainer1";nm(im);
