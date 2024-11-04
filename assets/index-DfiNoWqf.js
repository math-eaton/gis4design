import"https://cdn.skypack.dev/three@0.136.0";import"https://cdn.skypack.dev/three@0.136.0/examples/jsm/renderers/CSS2DRenderer.js";import"https://cdn.skypack.dev/gsap@3.9.1";import"https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="158",Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ko=0,Pa=1,Zo=2,lo=1,co=2,un=3,Rn=0,Pt=1,dn=2,bn=0,mi=1,Da=2,Ua=3,Ia=4,$o=5,Fn=100,Jo=101,Qo=102,Na=103,Fa=104,el=200,tl=201,nl=202,il=203,la=204,ca=205,rl=206,al=207,sl=208,ol=209,ll=210,cl=211,hl=212,ul=213,dl=214,fl=0,pl=1,ml=2,gr=3,gl=4,_l=5,vl=6,xl=7,ho=0,Ml=1,Sl=2,An=0,El=1,yl=2,Tl=3,bl=4,Al=5,uo=300,_i=301,vi=302,ha=303,ua=304,yr=306,da=1e3,jt=1001,fa=1002,Rt=1003,Oa=1004,Cr=1005,Gt=1006,wl=1007,Fi=1008,wn=1009,Rl=1010,Cl=1011,Sa=1012,fo=1013,yn=1014,Tn=1015,Oi=1016,po=1017,mo=1018,Gn=1020,Ll=1021,Kt=1023,Pl=1024,Dl=1025,Vn=1026,xi=1027,Ul=1028,go=1029,Il=1030,_o=1031,vo=1033,Lr=33776,Pr=33777,Dr=33778,Ur=33779,za=35840,Ba=35841,Ha=35842,Ga=35843,Nl=36196,Va=37492,ka=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,ja=37812,Ka=37813,Za=37814,$a=37815,Ja=37816,Qa=37817,es=37818,ts=37819,ns=37820,is=37821,Ir=36492,rs=36494,as=36495,Fl=36283,ss=36284,os=36285,ls=36286,xo=3e3,kn=3001,Ol=3200,zl=3201,Mo=0,Bl=1,kt="",Mt="srgb",mn="srgb-linear",Ea="display-p3",Tr="display-p3-linear",_r="linear",rt="srgb",vr="rec709",xr="p3",$n=7680,cs=519,Hl=512,Gl=513,Vl=514,kl=515,Wl=516,Xl=517,ql=518,Yl=519,hs=35044,us="300 es",pa=1035,fn=2e3,Mr=2001;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ds=1234567;const Ui=Math.PI/180,zi=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function ya(n,e){return(n%e+e)%e}function jl(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Kl(n,e,t){return n!==e?(t-n)/(e-n):0}function Ii(n,e,t){return(1-t)*n+t*e}function Zl(n,e,t,i){return Ii(n,e,1-Math.exp(-t*i))}function $l(n,e=1){return e-Math.abs(ya(n,e*2)-e)}function Jl(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ql(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ec(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tc(n,e){return n+Math.random()*(e-n)}function nc(n){return n*(.5-Math.random())}function ic(n){n!==void 0&&(ds=n);let e=ds+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rc(n){return n*Ui}function ac(n){return n*zi}function ma(n){return(n&n-1)===0&&n!==0}function sc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oc(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),h=o((e+i)/2),d=a((e-i)/2),f=o((e-i)/2),m=a((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(s*h,l*d,l*f,s*c);break;case"YZY":n.set(l*f,s*h,l*d,s*c);break;case"ZXZ":n.set(l*d,l*f,s*h,s*c);break;case"XZX":n.set(s*h,l*v,l*m,s*c);break;case"YXY":n.set(l*m,s*h,l*v,s*c);break;case"ZYZ":n.set(l*v,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:Ui,RAD2DEG:zi,generateUUID:Si,clamp:Tt,euclideanModulo:ya,mapLinear:jl,inverseLerp:Kl,lerp:Ii,damp:Zl,pingpong:$l,smoothstep:Jl,smootherstep:Ql,randInt:ec,randFloat:tc,randFloatSpread:nc,seededRandom:ic,degToRad:rc,radToDeg:ac,isPowerOfTwo:ma,ceilPowerOfTwo:sc,floorPowerOfTwo:Sr,setQuaternionFromProperEuler:oc,normalize:At,denormalize:fi};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,r,a,o,s,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],v=i[8],x=r[0],p=r[3],u=r[6],y=r[1],_=r[4],R=r[7],T=r[2],C=r[5],b=r[8];return a[0]=o*x+s*y+l*T,a[3]=o*p+s*_+l*C,a[6]=o*u+s*R+l*b,a[1]=c*x+h*y+d*T,a[4]=c*p+h*_+d*C,a[7]=c*u+h*R+d*b,a[2]=f*x+m*y+v*T,a[5]=f*p+m*_+v*C,a[8]=f*u+m*R+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*a*h+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=h*o-s*c,f=s*l-h*a,m=c*a-o*l,v=t*d+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-h*i)*x,e[2]=(s*i-r*o)*x,e[3]=f*x,e[4]=(h*t-r*l)*x,e[5]=(r*a-s*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Ke;function So(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lc(){const n=Er("canvas");return n.style.display="block",n}const fs={};function Ni(n){n in fs||(fs[n]=!0,console.warn(n))}const ps=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ms=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ki={[mn]:{transfer:_r,primaries:vr,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:rt,primaries:vr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Tr]:{transfer:_r,primaries:xr,toReference:n=>n.applyMatrix3(ms),fromReference:n=>n.applyMatrix3(ps)},[Ea]:{transfer:rt,primaries:xr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ms),fromReference:n=>n.applyMatrix3(ps).convertLinearToSRGB()}},cc=new Set([mn,Tr]),Qe={enabled:!0,_workingColorSpace:mn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ki[e].toReference,r=ki[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ki[n].primaries},getTransfer:function(n){return n===kt?_r:ki[n].transfer}};function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jn;class Eo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Er("canvas")),Jn.width=e.width,Jn.height=e.height;const i=Jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=gi(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hc=0;class yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Or(r[o].image)):a.push(Or(r[o]))}else a=Or(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Or(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uc=0;class zt extends Yn{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=jt,r=jt,a=Gt,o=Fi,s=Kt,l=wn,c=zt.DEFAULT_ANISOTROPY,h=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Si(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===kn?Mt:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?kn:xo}set encoding(e){Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kn?Mt:kt}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=uo;zt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],v=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,R=(m+1)/2,T=(u+1)/2,C=(h+f)/4,b=(d+x)/4,k=(v+p)/4;return _>R&&_>T?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=C/i,a=b/i):R>T?R<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(R),i=C/r,a=k/r):T<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),i=b/a,r=k/a),this.set(i,r,a,t),this}let y=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dc extends Yn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ni("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kn?Mt:kt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends dc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class To extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=a[o+0],m=a[o+1],v=a[o+2],x=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(d!==x||l!==f||c!==m||h!==v){let p=1-s;const u=l*f+c*m+h*v+d*x,y=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const T=Math.sqrt(_),C=Math.atan2(T,u*y);p=Math.sin(p*C)/T,s=Math.sin(s*C)/T}const R=s*y;if(l=l*p+f*R,c=c*p+m*R,h=h*p+v*R,d=d*p+x*R,p===1-s){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=a[o],f=a[o+1],m=a[o+2],v=a[o+3];return e[t]=s*v+h*d+l*m-c*f,e[t+1]=l*v+h*f+c*d-s*m,e[t+2]=c*v+h*m+s*f-l*d,e[t+3]=h*v-s*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),d=s(a/2),f=l(i/2),m=l(r/2),v=l(a/2);switch(o){case"XYZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"YXZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"ZXY":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"ZYX":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"YZX":this._x=f*h*d+c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d-f*m*v;break;case"XZY":this._x=f*h*d-c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(a-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(o-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+r*c-a*l,this._y=r*h+o*l+a*s-i*c,this._z=a*h+o*c+i*l-r*s,this._w=o*h-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),h=2*(s*t-a*r),d=2*(a*i-o*t);return this.x=t+l*c+o*d-s*h,this.y=i+l*h+s*c-a*d,this.z=r+l*d+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new z,gs=new Xn;class Hi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(a,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wi.copy(i.boundingBox)),Wi.applyMatrix4(e.matrixWorld),this.union(Wi)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Xi.subVectors(this.max,bi),Qn.subVectors(e.a,bi),ei.subVectors(e.b,bi),ti.subVectors(e.c,bi),_n.subVectors(ei,Qn),vn.subVectors(ti,ei),Pn.subVectors(Qn,ti);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Pn.z,Pn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Pn.z,0,-Pn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Pn.y,Pn.x,0];return!Br(t,Qn,ei,ti,Xi)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,Qn,ei,ti,Xi))?!1:(qi.crossVectors(_n,vn),t=[qi.x,qi.y,qi.z],Br(t,Qn,ei,ti,Xi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new z,new z,new z,new z,new z,new z,new z,new z],Wt=new z,Wi=new Hi,Qn=new z,ei=new z,ti=new z,_n=new z,vn=new z,Pn=new z,bi=new z,Xi=new z,qi=new z,Dn=new z;function Br(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Dn.fromArray(n,a);const s=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const pc=new Hi,Ai=new z,Hr=new z;class br{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ai,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Hr)),this.expandByPoint(Ai.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new z,Gr=new z,Yi=new z,xn=new z,Vr=new z,ji=new z,kr=new z;class Ta{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gr.copy(e).add(t).multiplyScalar(.5),Yi.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Gr);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Yi),s=xn.dot(this.direction),l=-xn.dot(Yi),c=xn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,v;if(h>0)if(d=o*l-s,f=o*s-l,v=a*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,m=d*(d+o*f+2*s)+f*(o*d+f+2*l)+c}else f=a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c);else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gr).addScaledVector(Yi,f),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const i=on.dot(this.direction),r=on.dot(on)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,r,a){Vr.subVectors(t,e),ji.subVectors(i,e),kr.crossVectors(Vr,ji);let o=this.direction.dot(kr),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;xn.subVectors(this.origin,e);const l=s*this.direction.dot(ji.crossVectors(xn,ji));if(l<0)return null;const c=s*this.direction.dot(Vr.cross(xn));if(c<0||l+c>o)return null;const h=-s*xn.dot(kr);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,a,o,s,l,c,h,d,f,m,v,x,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,h,d,f,m,v,x,p)}set(e,t,i,r,a,o,s,l,c,h,d,f,m,v,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=v,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),a=1/ni.setFromMatrixColumn(e,1).length(),o=1/ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=o*h,m=o*d,v=s*h,x=s*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-x*c,t[9]=-s*l,t[2]=x-f*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,v=c*h,x=c*d;t[0]=f+x*s,t[4]=v*s-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-s,t[2]=m*s-v,t[6]=x+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,v=c*h,x=c*d;t[0]=f-x*s,t[4]=-o*d,t[8]=v+m*s,t[1]=m+v*s,t[5]=o*h,t[9]=x-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,v=s*h,x=s*d;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,v=s*l,x=s*c;t[0]=l*h,t[4]=x-f*d,t[8]=v*d+m,t[1]=d,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*d+v,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,m=o*c,v=s*l,x=s*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=s*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mc,e,gc)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Mn.crossVectors(i,It),Mn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Mn.crossVectors(i,It)),Mn.normalize(),Ki.crossVectors(It,Mn),r[0]=Mn.x,r[4]=Ki.x,r[8]=It.x,r[1]=Mn.y,r[5]=Ki.y,r[9]=It.y,r[2]=Mn.z,r[6]=Ki.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],v=i[2],x=i[6],p=i[10],u=i[14],y=i[3],_=i[7],R=i[11],T=i[15],C=r[0],b=r[4],k=r[8],M=r[12],A=r[1],X=r[5],$=r[9],se=r[13],D=r[2],G=r[6],q=r[10],Z=r[14],ne=r[3],j=r[7],ee=r[11],U=r[15];return a[0]=o*C+s*A+l*D+c*ne,a[4]=o*b+s*X+l*G+c*j,a[8]=o*k+s*$+l*q+c*ee,a[12]=o*M+s*se+l*Z+c*U,a[1]=h*C+d*A+f*D+m*ne,a[5]=h*b+d*X+f*G+m*j,a[9]=h*k+d*$+f*q+m*ee,a[13]=h*M+d*se+f*Z+m*U,a[2]=v*C+x*A+p*D+u*ne,a[6]=v*b+x*X+p*G+u*j,a[10]=v*k+x*$+p*q+u*ee,a[14]=v*M+x*se+p*Z+u*U,a[3]=y*C+_*A+R*D+T*ne,a[7]=y*b+_*X+R*G+T*j,a[11]=y*k+_*$+R*q+T*ee,a[15]=y*M+_*se+R*Z+T*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],v=e[3],x=e[7],p=e[11],u=e[15];return v*(+a*l*d-r*c*d-a*s*f+i*c*f+r*s*m-i*l*m)+x*(+t*l*m-t*c*f+a*o*f-r*o*m+r*c*h-a*l*h)+p*(+t*c*d-t*s*m-a*o*d+i*o*m+a*s*h-i*c*h)+u*(-r*s*h-t*l*d+t*s*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],v=e[12],x=e[13],p=e[14],u=e[15],y=d*p*c-x*f*c+x*l*m-s*p*m-d*l*u+s*f*u,_=v*f*c-h*p*c-v*l*m+o*p*m+h*l*u-o*f*u,R=h*x*c-v*d*c+v*s*m-o*x*m-h*s*u+o*d*u,T=v*d*l-h*x*l-v*s*f+o*x*f+h*s*p-o*d*p,C=t*y+i*_+r*R+a*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=y*b,e[1]=(x*f*a-d*p*a-x*r*m+i*p*m+d*r*u-i*f*u)*b,e[2]=(s*p*a-x*l*a+x*r*c-i*p*c-s*r*u+i*l*u)*b,e[3]=(d*l*a-s*f*a-d*r*c+i*f*c+s*r*m-i*l*m)*b,e[4]=_*b,e[5]=(h*p*a-v*f*a+v*r*m-t*p*m-h*r*u+t*f*u)*b,e[6]=(v*l*a-o*p*a-v*r*c+t*p*c+o*r*u-t*l*u)*b,e[7]=(o*f*a-h*l*a+h*r*c-t*f*c-o*r*m+t*l*m)*b,e[8]=R*b,e[9]=(v*d*a-h*x*a-v*i*m+t*x*m+h*i*u-t*d*u)*b,e[10]=(o*x*a-v*s*a+v*i*c-t*x*c-o*i*u+t*s*u)*b,e[11]=(h*s*a-o*d*a-h*i*c+t*d*c+o*i*m-t*s*m)*b,e[12]=T*b,e[13]=(h*x*r-v*d*r+v*i*f-t*x*f-h*i*p+t*d*p)*b,e[14]=(v*s*r-o*x*r-v*i*l+t*x*l+o*i*p-t*s*p)*b,e[15]=(o*d*r-h*s*r+h*i*l-t*d*l-o*i*f+t*s*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*o,0,c*l-r*s,h*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,d=s+s,f=a*c,m=a*h,v=a*d,x=o*h,p=o*d,u=s*d,y=l*c,_=l*h,R=l*d,T=i.x,C=i.y,b=i.z;return r[0]=(1-(x+u))*T,r[1]=(m+R)*T,r[2]=(v-_)*T,r[3]=0,r[4]=(m-R)*C,r[5]=(1-(f+u))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(v+_)*b,r[9]=(p-y)*b,r[10]=(1-(f+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=ni.set(r[0],r[1],r[2]).length();const o=ni.set(r[4],r[5],r[6]).length(),s=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/a,h=1/o,d=1/s;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=fn){const l=this.elements,c=2*a/(t-e),h=2*a/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,v;if(s===fn)m=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===Mr)m=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=fn){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-a),f=(t+e)*c,m=(i+r)*h;let v,x;if(s===fn)v=(o+a)*d,x=-2*d;else if(s===Mr)v=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ni=new z,Xt=new ut,mc=new z(0,0,0),gc=new z(1,1,1),Mn=new z,Ki=new z,It=new z,_s=new ut,vs=new Xn;class Ar{constructor(e=0,t=0,i=0,r=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _s.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_s,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vs.setFromEuler(this),this.setFromQuaternion(vs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _c=0;const xs=new z,ii=new Xn,ln=new ut,Zi=new z,wi=new z,vc=new z,xc=new Xn,Ms=new z(1,0,0),Ss=new z(0,1,0),Es=new z(0,0,1),Mc={type:"added"},Sc={type:"removed"};class gt extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new z,t=new Ar,i=new Xn,r=new z(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Ms,e)}rotateY(e){return this.rotateOnAxis(Ss,e)}rotateZ(e){return this.rotateOnAxis(Es,e)}translateOnAxis(e,t){return xs.copy(e).applyQuaternion(this.quaternion),this.position.add(xs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ms,e)}translateY(e){return this.translateOnAxis(Ss,e)}translateZ(e){return this.translateOnAxis(Es,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zi.copy(e):Zi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(wi,Zi,this.up):ln.lookAt(Zi,wi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(ln),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,vc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new z(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new z,cn=new z,Wr=new z,hn=new z,ri=new z,ai=new z,ys=new z,Xr=new z,qr=new z,Yr=new z;let $i=!1;class Yt{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qt.subVectors(r,t),cn.subVectors(i,t),Wr.subVectors(e,t);const o=qt.dot(qt),s=qt.dot(cn),l=qt.dot(Wr),c=cn.dot(cn),h=cn.dot(Wr),d=o*c-s*s;if(d===0)return a.set(-2,-1,-1);const f=1/d,m=(c*l-s*h)*f,v=(o*h-s*l)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,i,r,a,o,s,l){return $i===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$i=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,hn),l.setScalar(0),l.addScaledVector(a,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(s,hn.z),l}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),cn.subVectors(e,t),qt.cross(cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),qt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return $i===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$i=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;ri.subVectors(r,i),ai.subVectors(a,i),Xr.subVectors(e,i);const l=ri.dot(Xr),c=ai.dot(Xr);if(l<=0&&c<=0)return t.copy(i);qr.subVectors(e,r);const h=ri.dot(qr),d=ai.dot(qr);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ri,o);Yr.subVectors(e,a);const m=ri.dot(Yr),v=ai.dot(Yr);if(v>=0&&m<=v)return t.copy(a);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(ai,s);const p=h*v-m*d;if(p<=0&&d-h>=0&&m-v>=0)return ys.subVectors(a,r),s=(d-h)/(d-h+(m-v)),t.copy(r).addScaledVector(ys,s);const u=1/(p+x+f);return o=x*u,s=f*u,t.copy(i).addScaledVector(ri,o).addScaledVector(ai,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function jr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=ya(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=jr(o,a,e+1/3),this.g=jr(o,a,e),this.b=jr(o,a,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Ao[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Qe.fromWorkingColorSpace(yt.copy(this),e),Math.round(Tt(yt.r*255,0,255))*65536+Math.round(Tt(yt.g*255,0,255))*256+Math.round(Tt(yt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,a=yt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=h<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Mt){Qe.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Ji);const i=Ii(Sn.h,Ji.h,t),r=Ii(Sn.s,Ji.s,t),a=Ii(Sn.l,Ji.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Je;Je.NAMES=Ao;let Ec=0;class Ei extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=mi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,Qi=new We;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hs,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),a=At(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class wo extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ro extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yc=0;const Ht=new ut,Kr=new gt,si=new z,Nt=new Hi,Ri=new Hi,pt=new z;class en extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(So(e)?Ro:wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Kr.lookAt(e),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ri.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(Nt.min,Ri.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,Ri.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(Ri.min),Nt.expandByPoint(Ri.max))}Nt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)pt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)pt.fromBufferAttribute(s,c),l&&(si.fromBufferAttribute(e,c),pt.add(si)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<s;A++)c[A]=new z,h[A]=new z;const d=new z,f=new z,m=new z,v=new We,x=new We,p=new We,u=new z,y=new z;function _(A,X,$){d.fromArray(r,A*3),f.fromArray(r,X*3),m.fromArray(r,$*3),v.fromArray(o,A*2),x.fromArray(o,X*2),p.fromArray(o,$*2),f.sub(d),m.sub(d),x.sub(v),p.sub(v);const se=1/(x.x*p.y-p.x*x.y);isFinite(se)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(se),y.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(se),c[A].add(u),c[X].add(u),c[$].add(u),h[A].add(y),h[X].add(y),h[$].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let A=0,X=R.length;A<X;++A){const $=R[A],se=$.start,D=$.count;for(let G=se,q=se+D;G<q;G+=3)_(i[G+0],i[G+1],i[G+2])}const T=new z,C=new z,b=new z,k=new z;function M(A){b.fromArray(a,A*3),k.copy(b);const X=c[A];T.copy(X),T.sub(b.multiplyScalar(b.dot(X))).normalize(),C.crossVectors(k,X);const se=C.dot(h[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=se}for(let A=0,X=R.length;A<X;++A){const $=R[A],se=$.start,D=$.count;for(let G=se,q=se+D;G<q;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,a=new z,o=new z,s=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),s.add(h),l.add(h),c.add(h),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,d=s.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[m++]}return new Zt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ts=new ut,Un=new Ta,er=new br,bs=new z,oi=new z,li=new z,ci=new z,Zr=new z,tr=new z,nr=new We,ir=new We,rr=new We,As=new z,ws=new z,Rs=new z,ar=new z,sr=new z;class Ot extends gt{constructor(e=new en,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){tr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],d=a[l];h!==0&&(Zr.fromBufferAttribute(d,e),o?tr.addScaledVector(Zr,h):tr.addScaledVector(Zr.sub(t),h))}t.add(tr)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere),er.applyMatrix4(a),Un.copy(e.ray).recast(e.near),!(er.containsPoint(Un.origin)===!1&&(Un.intersectSphere(er,bs)===null||Un.origin.distanceToSquared(bs)>(e.far-e.near)**2))&&(Ts.copy(a).invert(),Un.copy(e.ray).applyMatrix4(Ts),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const p=f[v],u=o[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let R=y,T=_;R<T;R+=3){const C=s.getX(R),b=s.getX(R+1),k=s.getX(R+2);r=or(this,u,e,i,c,h,d,C,b,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const y=s.getX(p),_=s.getX(p+1),R=s.getX(p+2);r=or(this,o,e,i,c,h,d,y,_,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const p=f[v],u=o[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let R=y,T=_;R<T;R+=3){const C=R,b=R+1,k=R+2;r=or(this,u,e,i,c,h,d,C,b,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const y=p,_=p+1,R=p+2;r=or(this,o,e,i,c,h,d,y,_,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Tc(n,e,t,i,r,a,o,s){let l;if(e.side===Pt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Rn,s),l===null)return null;sr.copy(s),sr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:n}}function or(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,oi),n.getVertexPosition(l,li),n.getVertexPosition(c,ci);const h=Tc(n,e,t,i,oi,li,ci,ar);if(h){r&&(nr.fromBufferAttribute(r,s),ir.fromBufferAttribute(r,l),rr.fromBufferAttribute(r,c),h.uv=Yt.getInterpolation(ar,oi,li,ci,nr,ir,rr,new We)),a&&(nr.fromBufferAttribute(a,s),ir.fromBufferAttribute(a,l),rr.fromBufferAttribute(a,c),h.uv1=Yt.getInterpolation(ar,oi,li,ci,nr,ir,rr,new We),h.uv2=h.uv1),o&&(As.fromBufferAttribute(o,s),ws.fromBufferAttribute(o,l),Rs.fromBufferAttribute(o,c),h.normal=Yt.getInterpolation(ar,oi,li,ci,As,ws,Rs,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new z,materialIndex:0};Yt.getNormal(oi,li,ci,d.normal),h.face=d}return h}class Gi extends en{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,o,a,0),v("z","y","x",1,-1,i,t,-e,o,a,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function v(x,p,u,y,_,R,T,C,b,k,M){const A=R/b,X=T/k,$=R/2,se=T/2,D=C/2,G=b+1,q=k+1;let Z=0,ne=0;const j=new z;for(let ee=0;ee<q;ee++){const U=ee*X-se;for(let F=0;F<G;F++){const ue=F*A-$;j[x]=ue*y,j[p]=U*_,j[u]=D,c.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[u]=C>0?1:-1,h.push(j.x,j.y,j.z),d.push(F/b),d.push(1-ee/k),Z+=1}}for(let ee=0;ee<k;ee++)for(let U=0;U<b;U++){const F=f+U+G*ee,ue=f+U+G*(ee+1),de=f+(U+1)+G*(ee+1),te=f+(U+1)+G*ee;l.push(F,ue,te),l.push(ue,de,te),ne+=6}s.addGroup(m,ne,M),m+=ne,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=Mi(n[t]);for(const r in i)e[r]=i[r]}return e}function bc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Co(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const Ac={clone:Mi,merge:wt};var wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wc,this.fragmentShader=Rc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=bc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lo extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Lo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ui*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class Cc extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(hi,ui,e,t);r.layers=this.layers,this.add(r);const a=new Vt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Vt(hi,ui,e,t);o.layers=this.layers,this.add(o);const s=new Vt(hi,ui,e,t);s.layers=this.layers,this.add(s);const l=new Vt(hi,ui,e,t);l.layers=this.layers,this.add(l);const c=new Vt(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Po extends zt{constructor(e,t,i,r,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,i,r,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lc extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ni("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===kn?Mt:kt),this.texture=new Po(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:Mi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:bn});a.uniforms.tEquirect.value=t;const o=new Ot(r,a),s=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Gt),new Cc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const $r=new z,Pc=new z,Dc=new Ke;class En{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$r.subVectors(i,t).cross(Pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($r),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dc.getNormalMatrix(e),r=this.coplanarPoint($r).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new br,lr=new z;class Aa{constructor(e=new En,t=new En,i=new En,r=new En,a=new En,o=new En){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],v=r[9],x=r[10],p=r[11],u=r[12],y=r[13],_=r[14],R=r[15];if(i[0].setComponents(l-a,f-c,p-m,R-u).normalize(),i[1].setComponents(l+a,f+c,p+m,R+u).normalize(),i[2].setComponents(l+o,f+h,p+v,R+y).normalize(),i[3].setComponents(l-o,f-h,p-v,R-y).normalize(),i[4].setComponents(l-s,f-d,p-x,R-_).normalize(),t===fn)i[5].setComponents(l+s,f+d,p+x,R+_).normalize();else if(t===Mr)i[5].setComponents(s,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(lr.x=r.normal.x>0?e.max.x:e.min.x,lr.y=r.normal.y>0?e.max.y:e.min.y,lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Do(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Uc(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,d){const f=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(a(d.buffer,c,h),d.version=c.version)}return{get:o,remove:s,update:l}}class wa extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,d=e/s,f=t/l,m=[],v=[],x=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let _=0;_<c;_++){const R=_*d-a;v.push(R,-y,0),x.push(0,0,1),p.push(_/s),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<s;y++){const _=y+c*u,R=y+c*(u+1),T=y+1+c*(u+1),C=y+1+c*u;m.push(_,R,C),m.push(R,T,C)}this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ic=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nc=`#ifdef USE_ALPHAHASH
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
#endif`,Fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hc=`#ifdef USE_AOMAP
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
#endif`,Gc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xc=`#ifdef USE_IRIDESCENCE
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
#endif`,qc=`#ifdef USE_BUMPMAP
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
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,th=`#define PI 3.141592653589793
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
} // validated`,nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ih=`vec3 transformedNormal = objectNormal;
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
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`
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
}`,hh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
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
}`,Mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Th=`uniform bool receiveShadow;
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
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
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
#endif`,Ph=`struct PhysicalMaterial {
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
}`,Dh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qh=`#ifdef USE_MORPHNORMALS
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
#endif`,Yh=`#ifdef USE_MORPHTARGETS
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
#endif`,jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eu=`#ifdef USE_NORMALMAP
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
#endif`,tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,su=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,du=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gu=`float getShadowMask() {
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
}`,_u=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
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
#endif`,xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mu=`#ifdef USE_SKINNING
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
#endif`,Su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bu=`#ifdef USE_TRANSMISSION
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
#endif`,Au=`#ifdef USE_TRANSMISSION
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
#endif`,wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Du=`uniform sampler2D t2D;
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
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ou=`#include <common>
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
}`,zu=`#if DEPTH_PACKING == 3200
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
}`,Bu=`#define DISTANCE
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
}`,Hu=`#define DISTANCE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ku=`uniform float scale;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Xu=`#include <common>
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
}`,qu=`uniform vec3 diffuse;
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
}`,Yu=`#define LAMBERT
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
}`,ju=`#define LAMBERT
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
}`,Ku=`#define MATCAP
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
}`,Zu=`#define MATCAP
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
}`,$u=`#define NORMAL
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
}`,Ju=`#define NORMAL
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
}`,Qu=`#define PHONG
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
}`,ed=`#define PHONG
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
}`,td=`#define STANDARD
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
}`,nd=`#define STANDARD
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
}`,id=`#define TOON
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
}`,rd=`#define TOON
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
}`,ad=`uniform float size;
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
}`,sd=`uniform vec3 diffuse;
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
}`,od=`#include <common>
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
}`,ld=`uniform vec3 color;
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
}`,cd=`uniform float rotation;
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
}`,hd=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Ic,alphahash_pars_fragment:Nc,alphamap_fragment:Fc,alphamap_pars_fragment:Oc,alphatest_fragment:zc,alphatest_pars_fragment:Bc,aomap_fragment:Hc,aomap_pars_fragment:Gc,begin_vertex:Vc,beginnormal_vertex:kc,bsdfs:Wc,iridescence_fragment:Xc,bumpmap_pars_fragment:qc,clipping_planes_fragment:Yc,clipping_planes_pars_fragment:jc,clipping_planes_pars_vertex:Kc,clipping_planes_vertex:Zc,color_fragment:$c,color_pars_fragment:Jc,color_pars_vertex:Qc,color_vertex:eh,common:th,cube_uv_reflection_fragment:nh,defaultnormal_vertex:ih,displacementmap_pars_vertex:rh,displacementmap_vertex:ah,emissivemap_fragment:sh,emissivemap_pars_fragment:oh,colorspace_fragment:lh,colorspace_pars_fragment:ch,envmap_fragment:hh,envmap_common_pars_fragment:uh,envmap_pars_fragment:dh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:bh,envmap_vertex:ph,fog_vertex:mh,fog_pars_vertex:gh,fog_fragment:_h,fog_pars_fragment:vh,gradientmap_pars_fragment:xh,lightmap_fragment:Mh,lightmap_pars_fragment:Sh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:yh,lights_pars_begin:Th,lights_toon_fragment:Ah,lights_toon_pars_fragment:wh,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ch,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Dh,lights_fragment_maps:Uh,lights_fragment_end:Ih,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:zh,map_fragment:Bh,map_pars_fragment:Hh,map_particle_fragment:Gh,map_particle_pars_fragment:Vh,metalnessmap_fragment:kh,metalnessmap_pars_fragment:Wh,morphcolor_vertex:Xh,morphnormal_vertex:qh,morphtarget_pars_vertex:Yh,morphtarget_vertex:jh,normal_fragment_begin:Kh,normal_fragment_maps:Zh,normal_pars_fragment:$h,normal_pars_vertex:Jh,normal_vertex:Qh,normalmap_pars_fragment:eu,clearcoat_normal_fragment_begin:tu,clearcoat_normal_fragment_maps:nu,clearcoat_pars_fragment:iu,iridescence_pars_fragment:ru,opaque_fragment:au,packing:su,premultiplied_alpha_fragment:ou,project_vertex:lu,dithering_fragment:cu,dithering_pars_fragment:hu,roughnessmap_fragment:uu,roughnessmap_pars_fragment:du,shadowmap_pars_fragment:fu,shadowmap_pars_vertex:pu,shadowmap_vertex:mu,shadowmask_pars_fragment:gu,skinbase_vertex:_u,skinning_pars_vertex:vu,skinning_vertex:xu,skinnormal_vertex:Mu,specularmap_fragment:Su,specularmap_pars_fragment:Eu,tonemapping_fragment:yu,tonemapping_pars_fragment:Tu,transmission_fragment:bu,transmission_pars_fragment:Au,uv_pars_fragment:wu,uv_pars_vertex:Ru,uv_vertex:Cu,worldpos_vertex:Lu,background_vert:Pu,background_frag:Du,backgroundCube_vert:Uu,backgroundCube_frag:Iu,cube_vert:Nu,cube_frag:Fu,depth_vert:Ou,depth_frag:zu,distanceRGBA_vert:Bu,distanceRGBA_frag:Hu,equirect_vert:Gu,equirect_frag:Vu,linedashed_vert:ku,linedashed_frag:Wu,meshbasic_vert:Xu,meshbasic_frag:qu,meshlambert_vert:Yu,meshlambert_frag:ju,meshmatcap_vert:Ku,meshmatcap_frag:Zu,meshnormal_vert:$u,meshnormal_frag:Ju,meshphong_vert:Qu,meshphong_frag:ed,meshphysical_vert:td,meshphysical_frag:nd,meshtoon_vert:id,meshtoon_frag:rd,points_vert:ad,points_frag:sd,shadow_vert:od,shadow_frag:ld,sprite_vert:cd,sprite_frag:hd},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Qt={basic:{uniforms:wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:wt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:wt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:wt([Te.points,Te.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:wt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:wt([Te.common,Te.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:wt([Te.sprite,Te.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:wt([Te.common,Te.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:wt([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Qt.physical={uniforms:wt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const cr={r:0,b:0,g:0};function ud(n,e,t,i,r,a,o){const s=new Je(0);let l=a===!0?0:1,c,h,d=null,f=0,m=null;function v(p,u){let y=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?x(s,l):_&&_.isColor&&(x(_,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yr)?(h===void 0&&(h=new Ot(new Gi(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Mi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(_.colorSpace)!==rt,(d!==_||f!==_.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ot(new wa(2,2),new qn({name:"BackgroundMaterial",uniforms:Mi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(cr,Co(n)),i.buffers.color.setClear(cr.r,cr.g,cr.b,u,o)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),l=u,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(s,l)},render:v}}function dd(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=p(null);let c=l,h=!1;function d(D,G,q,Z,ne){let j=!1;if(o){const ee=x(Z,q,G);c!==ee&&(c=ee,m(c.object)),j=u(D,Z,q,ne),j&&y(D,Z,q,ne)}else{const ee=G.wireframe===!0;(c.geometry!==Z.id||c.program!==q.id||c.wireframe!==ee)&&(c.geometry=Z.id,c.program=q.id,c.wireframe=ee,j=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,k(D,G,q,Z),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):a.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?n.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function x(D,G,q){const Z=q.wireframe===!0;let ne=s[D.id];ne===void 0&&(ne={},s[D.id]=ne);let j=ne[G.id];j===void 0&&(j={},ne[G.id]=j);let ee=j[Z];return ee===void 0&&(ee=p(f()),j[Z]=ee),ee}function p(D){const G=[],q=[],Z=[];for(let ne=0;ne<r;ne++)G[ne]=0,q[ne]=0,Z[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:Z,object:D,attributes:{},index:null}}function u(D,G,q,Z){const ne=c.attributes,j=G.attributes;let ee=0;const U=q.getAttributes();for(const F in U)if(U[F].location>=0){const de=ne[F];let te=j[F];if(te===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),de===void 0||de.attribute!==te||te&&de.data!==te.data)return!0;ee++}return c.attributesNum!==ee||c.index!==Z}function y(D,G,q,Z){const ne={},j=G.attributes;let ee=0;const U=q.getAttributes();for(const F in U)if(U[F].location>=0){let de=j[F];de===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(de=D.instanceColor));const te={};te.attribute=de,de&&de.data&&(te.data=de.data),ne[F]=te,ee++}c.attributes=ne,c.attributesNum=ee,c.index=Z}function _(){const D=c.newAttributes;for(let G=0,q=D.length;G<q;G++)D[G]=0}function R(D){T(D,0)}function T(D,G){const q=c.newAttributes,Z=c.enabledAttributes,ne=c.attributeDivisors;q[D]=1,Z[D]===0&&(n.enableVertexAttribArray(D),Z[D]=1),ne[D]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),ne[D]=G)}function C(){const D=c.newAttributes,G=c.enabledAttributes;for(let q=0,Z=G.length;q<Z;q++)G[q]!==D[q]&&(n.disableVertexAttribArray(q),G[q]=0)}function b(D,G,q,Z,ne,j,ee){ee===!0?n.vertexAttribIPointer(D,G,q,ne,j):n.vertexAttribPointer(D,G,q,Z,ne,j)}function k(D,G,q,Z){if(i.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ne=Z.attributes,j=q.getAttributes(),ee=G.defaultAttributeValues;for(const U in j){const F=j[U];if(F.location>=0){let ue=ne[U];if(ue===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const de=ue.normalized,te=ue.itemSize,le=t.get(ue);if(le===void 0)continue;const Ce=le.buffer,pe=le.type,we=le.bytesPerElement,Ne=i.isWebGL2===!0&&(pe===n.INT||pe===n.UNSIGNED_INT||ue.gpuType===fo);if(ue.isInterleavedBufferAttribute){const De=ue.data,I=De.stride,Ye=ue.offset;if(De.isInstancedInterleavedBuffer){for(let fe=0;fe<F.locationSize;fe++)T(F.location+fe,De.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let fe=0;fe<F.locationSize;fe++)R(F.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let fe=0;fe<F.locationSize;fe++)b(F.location+fe,te/F.locationSize,pe,de,I*we,(Ye+te/F.locationSize*fe)*we,Ne)}else{if(ue.isInstancedBufferAttribute){for(let De=0;De<F.locationSize;De++)T(F.location+De,ue.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<F.locationSize;De++)R(F.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let De=0;De<F.locationSize;De++)b(F.location+De,te/F.locationSize,pe,de,te*we,te/F.locationSize*De*we,Ne)}}else if(ee!==void 0){const de=ee[U];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(F.location,de);break;case 3:n.vertexAttrib3fv(F.location,de);break;case 4:n.vertexAttrib4fv(F.location,de);break;default:n.vertexAttrib1fv(F.location,de)}}}}C()}function M(){$();for(const D in s){const G=s[D];for(const q in G){const Z=G[q];for(const ne in Z)v(Z[ne].object),delete Z[ne];delete G[q]}delete s[D]}}function A(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const q in G){const Z=G[q];for(const ne in Z)v(Z[ne].object),delete Z[ne];delete G[q]}delete s[D.id]}function X(D){for(const G in s){const q=s[G];if(q[D.id]===void 0)continue;const Z=q[D.id];for(const ne in Z)v(Z[ne].object),delete Z[ne];delete q[D.id]}}function $(){se(),h=!0,c!==l&&(c=l,m(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:se,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:X,initAttributes:_,enableAttribute:R,disableUnusedAttributes:C}}function fd(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,h){n.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](a,c,h,d),t.update(h,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function pd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,R=o||e.has("OES_texture_float"),T=_&&R,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:R,floatVertexTextures:T,maxSamples:C}}function md(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new En,s=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||v===null||v.length===0||a&&!p)a?h(null):c();else{const y=a?0:i,_=y*4;let R=u.clippingState||null;l.value=R,R=h(v,f,_,m);for(let T=0;T!==_;++T)R[T]=t[T];u.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const u=m+x*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,R=m;_!==x;++_,R+=4)o.copy(d[_]).applyMatrix4(y,s),o.normal.toArray(p,R),p[R+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function gd(n){let e=new WeakMap;function t(o,s){return s===ha?o.mapping=_i:s===ua&&(o.mapping=vi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ha||s===ua)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Uo extends Lo{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,Cs=[.125,.215,.35,.446,.526,.582],On=20,Jr=new Uo,Ls=new Je;let Qr=null,ea=0,ta=0;const Nn=(1+Math.sqrt(5))/2,di=1/Nn,Ps=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Nn,di),new z(0,Nn,-di),new z(di,0,Nn),new z(-di,0,Nn),new z(Nn,di,0),new z(-Nn,di,0)];class Ds{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qr=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ns(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Is(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,ea,ta),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Oi,format:Kt,colorSpace:mn,depthBuffer:!1},r=Us(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Us(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_d(a)),this._blurMaterial=vd(a,e,t)}return r}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,i,r){const s=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ls),h.toneMapping=An,h.autoClear=!1;const m=new ba({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),v=new Ot(new Gi,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ls),x=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):y===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const _=this._cubeSize;hr(r,y*_,u>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(v,s),h.render(e,s)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_i||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ns()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Is());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ps[(r-1)%Ps.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ot(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*On-1),x=a/v,p=isFinite(a)?1+Math.floor(h*x):On;p>On&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const u=[];let y=0;for(let b=0;b<On;++b){const k=b/x,M=Math.exp(-k*k/2);u.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const R=this._sizeLods[r],T=3*R*(r>_-pi?r-_+pi:0),C=4*(this._cubeSize-R);hr(t,T,C,3*R,2*R),l.setRenderTarget(t),l.render(d,Jr)}}function _d(n){const e=[],t=[],i=[];let r=n;const a=n-pi+1+Cs.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-pi?l=Cs[o-n+pi-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,x=3,p=2,u=1,y=new Float32Array(x*v*m),_=new Float32Array(p*v*m),R=new Float32Array(u*v*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,k=C>2?0:-1,M=[b,k,0,b+2/3,k,0,b+2/3,k+1,0,b,k,0,b+2/3,k+1,0,b,k+1,0];y.set(M,x*v*C),_.set(f,p*v*C);const A=[C,C,C,C,C,C];R.set(A,u*v*C)}const T=new en;T.setAttribute("position",new Zt(y,x)),T.setAttribute("uv",new Zt(_,p)),T.setAttribute("faceIndex",new Zt(R,u)),e.push(T),r>pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Us(n,e,t){const i=new Wn(n,e,t);return i.texture.mapping=yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vd(n,e,t){const i=new Float32Array(On),r=new z(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ra(),fragmentShader:`

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
	`}function xd(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===ha||l===ua,h=l===_i||l===vi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Ds(n)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ds(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Md(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sd(n,e,t,i){const r={},a=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,u=x.length;p<u;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let _=0,R=y.length;_<R;_+=3){const T=y[_+0],C=y[_+1],b=y[_+2];f.push(T,C,C,b,b,T)}}else if(v!==void 0){const y=v.array;x=v.version;for(let _=0,R=y.length/3-1;_<R;_+=3){const T=_+0,C=_+1,b=_+2;f.push(T,C,C,b,b,T)}}else return;const p=new(So(f)?Ro:wo)(f,1);p.version=x;const u=a.get(d);u&&e.remove(u),a.set(d,p)}function h(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function Ed(n,e,t,i){const r=i.isWebGL2;let a;function o(f){a=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function h(f,m){n.drawElements(a,m,s,f*l),t.update(m,a,1)}function d(f,m,v){if(v===0)return;let x,p;if(r)x=n,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](a,m,s,f*l,v),t.update(m,a,v)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function yd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Td(n,e){return n[0]-e[0]}function bd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ad(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new mt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let x=a.get(h);if(x===void 0||x.count!==v){let D=function(){$.dispose(),a.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let k=0;y===!0&&(k=1),_===!0&&(k=2),R===!0&&(k=3);let M=h.attributes.position.count*k,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const X=new Float32Array(M*A*4*v),$=new To(X,M,A,v);$.type=Tn,$.needsUpdate=!0;const se=k*4;for(let G=0;G<v;G++){const q=T[G],Z=C[G],ne=b[G],j=M*A*4*G;for(let ee=0;ee<q.count;ee++){const U=ee*se;y===!0&&(o.fromBufferAttribute(q,ee),X[j+U+0]=o.x,X[j+U+1]=o.y,X[j+U+2]=o.z,X[j+U+3]=0),_===!0&&(o.fromBufferAttribute(Z,ee),X[j+U+4]=o.x,X[j+U+5]=o.y,X[j+U+6]=o.z,X[j+U+7]=0),R===!0&&(o.fromBufferAttribute(ne,ee),X[j+U+8]=o.x,X[j+U+9]=o.y,X[j+U+10]=o.z,X[j+U+11]=ne.itemSize===4?o.w:1)}}x={count:v,texture:$,size:new We(M,A)},a.set(h,x),h.addEventListener("dispose",D)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const m=f===void 0?0:f.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let _=0;_<m;_++)v[_]=[_,0];i[h.id]=v}for(let _=0;_<m;_++){const R=v[_];R[0]=_,R[1]=f[_]}v.sort(bd);for(let _=0;_<8;_++)_<m&&v[_][1]?(s[_][0]=v[_][0],s[_][1]=v[_][1]):(s[_][0]=Number.MAX_SAFE_INTEGER,s[_][1]=0);s.sort(Td);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let u=0;for(let _=0;_<8;_++){const R=s[_],T=R[0],C=R[1];T!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+_)!==x[T]&&h.setAttribute("morphTarget"+_,x[T]),p&&h.getAttribute("morphNormal"+_)!==p[T]&&h.setAttribute("morphNormal"+_,p[T]),r[_]=C,u+=C):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function wd(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Io=new zt,No=new To,Fo=new fc,Oo=new Po,Fs=[],Os=[],zs=new Float32Array(16),Bs=new Float32Array(9),Hs=new Float32Array(4);function yi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Fs[r];if(a===void 0&&(a=new Float32Array(r),Fs[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wr(n,e){let t=Os[e];t===void 0&&(t=new Int32Array(e),Os[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Ld(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Pd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Dd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Hs.set(i),n.uniformMatrix2fv(this.addr,!1,Hs),ft(t,i)}}function Ud(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Bs.set(i),n.uniformMatrix3fv(this.addr,!1,Bs),ft(t,i)}}function Id(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;zs.set(i),n.uniformMatrix4fv(this.addr,!1,zs),ft(t,i)}}function Nd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Od(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Bd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Gd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Vd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function kd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Io,r)}function Wd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fo,r)}function Xd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Oo,r)}function qd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||No,r)}function Yd(n){switch(n){case 5126:return Rd;case 35664:return Cd;case 35665:return Ld;case 35666:return Pd;case 35674:return Dd;case 35675:return Ud;case 35676:return Id;case 5124:case 35670:return Nd;case 35667:case 35671:return Fd;case 35668:case 35672:return Od;case 35669:case 35673:return zd;case 5125:return Bd;case 36294:return Hd;case 36295:return Gd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return qd}}function jd(n,e){n.uniform1fv(this.addr,e)}function Kd(n,e){const t=yi(e,this.size,2);n.uniform2fv(this.addr,t)}function Zd(n,e){const t=yi(e,this.size,3);n.uniform3fv(this.addr,t)}function $d(n,e){const t=yi(e,this.size,4);n.uniform4fv(this.addr,t)}function Jd(n,e){const t=yi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qd(n,e){const t=yi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ef(n,e){const t=yi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tf(n,e){n.uniform1iv(this.addr,e)}function nf(n,e){n.uniform2iv(this.addr,e)}function rf(n,e){n.uniform3iv(this.addr,e)}function af(n,e){n.uniform4iv(this.addr,e)}function sf(n,e){n.uniform1uiv(this.addr,e)}function of(n,e){n.uniform2uiv(this.addr,e)}function lf(n,e){n.uniform3uiv(this.addr,e)}function cf(n,e){n.uniform4uiv(this.addr,e)}function hf(n,e,t){const i=this.cache,r=e.length,a=wr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Io,a[o])}function uf(n,e,t){const i=this.cache,r=e.length,a=wr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fo,a[o])}function df(n,e,t){const i=this.cache,r=e.length,a=wr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Oo,a[o])}function ff(n,e,t){const i=this.cache,r=e.length,a=wr(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||No,a[o])}function pf(n){switch(n){case 5126:return jd;case 35664:return Kd;case 35665:return Zd;case 35666:return $d;case 35674:return Jd;case 35675:return Qd;case 35676:return ef;case 5124:case 35670:return tf;case 35667:case 35671:return nf;case 35668:case 35672:return rf;case 35669:case 35673:return af;case 5125:return sf;case 36294:return of;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}class mf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Yd(t.type)}}class gf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=pf(t.type)}}class _f{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Gs(n,e){n.seq.push(e),n.map[e.id]=e}function vf(n,e,t){const i=n.name,r=i.length;for(na.lastIndex=0;;){const a=na.exec(i),o=na.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Gs(t,c===void 0?new mf(s,n,e):new gf(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new _f(s),Gs(t,d)),t=d}}}class mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);vf(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vs(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xf=37297;let Mf=0;function Sf(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Ef(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===xr&&t===vr?i="LinearDisplayP3ToLinearSRGB":e===vr&&t===xr&&(i="LinearSRGBToLinearDisplayP3"),n){case mn:case Tr:return[i,"LinearTransferOETF"];case Mt:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ks(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sf(n.getShaderSource(e),o)}else return r}function yf(n,e){const t=Ef(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Tf(n,e){let t;switch(e){case El:t="Linear";break;case yl:t="Reinhard";break;case Tl:t="OptimizedCineon";break;case bl:t="ACESFilmic";break;case Al:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function Af(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Li(n){return n!==""}function Ws(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xs(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(n){return n.replace(Rf,Lf)}const Cf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lf(n,e){let t=qe[e];if(t===void 0){const i=Cf.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}const Pf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qs(n){return n.replace(Pf,Df)}function Df(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ys(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uf(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===co?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function If(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _i:case vi:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nf(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ff(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ho:e="ENVMAP_BLENDING_MULTIPLY";break;case Ml:e="ENVMAP_BLENDING_MIX";break;case Sl:e="ENVMAP_BLENDING_ADD";break}return e}function Of(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zf(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Uf(t),c=If(t),h=Nf(t),d=Ff(t),f=Of(t),m=t.isWebGL2?"":bf(t),v=Af(a),x=r.createProgram();let p,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),u.length>0&&(u+=`
`)):(p=[Ys(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),u=[m,Ys(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?qe.tonemapping_pars_fragment:"",t.toneMapping!==An?Tf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,yf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),o=ga(o),o=Ws(o,t),o=Xs(o,t),s=ga(s),s=Ws(s,t),s=Xs(s,t),o=qs(o),s=qs(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===us?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===us?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=y+p+o,R=y+u+s,T=Vs(r,r.VERTEX_SHADER,_),C=Vs(r,r.FRAGMENT_SHADER,R);r.attachShader(x,T),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(X){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(x).trim(),se=r.getShaderInfoLog(T).trim(),D=r.getShaderInfoLog(C).trim();let G=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,C);else{const Z=ks(r,T,"vertex"),ne=ks(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+Z+`
`+ne)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(se===""||D==="")&&(q=!1);q&&(X.diagnostics={runnable:G,programLog:$,vertexShader:{log:se,prefix:p},fragmentShader:{log:D,prefix:u}})}r.deleteShader(T),r.deleteShader(C),k=new mr(r,x),M=wf(r,x)}let k;this.getUniforms=function(){return k===void 0&&b(this),k};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(x,xf)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=C,this}let Bf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Gf(e),t.set(e,i)),i}}class Gf{constructor(e){this.id=Bf++,this.code=e,this.usedTimes=0}}function Vf(n,e,t,i,r,a,o){const s=new bo,l=new Hf,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,A,X,$,se){const D=$.fog,G=se.geometry,q=M.isMeshStandardMaterial?$.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),ne=Z&&Z.mapping===yr?Z.image.height:null,j=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,U=ee!==void 0?ee.length:0;let F=0;G.morphAttributes.position!==void 0&&(F=1),G.morphAttributes.normal!==void 0&&(F=2),G.morphAttributes.color!==void 0&&(F=3);let ue,de,te,le;if(j){const Ze=Qt[j];ue=Ze.vertexShader,de=Ze.fragmentShader}else ue=M.vertexShader,de=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const Ce=n.getRenderTarget(),pe=se.isInstancedMesh===!0,we=!!M.map,Ne=!!M.matcap,De=!!Z,I=!!M.aoMap,Ye=!!M.lightMap,fe=!!M.bumpMap,xe=!!M.normalMap,Ae=!!M.displacementMap,Ue=!!M.emissiveMap,_e=!!M.metalnessMap,Se=!!M.roughnessMap,Re=M.anisotropy>0,Pe=M.clearcoat>0,Ge=M.iridescence>0,E=M.sheen>0,g=M.transmission>0,L=Re&&!!M.anisotropyMap,B=Pe&&!!M.clearcoatMap,N=Pe&&!!M.clearcoatNormalMap,Y=Pe&&!!M.clearcoatRoughnessMap,re=Ge&&!!M.iridescenceMap,Q=Ge&&!!M.iridescenceThicknessMap,ae=E&&!!M.sheenColorMap,w=E&&!!M.sheenRoughnessMap,ie=!!M.specularMap,K=!!M.specularColorMap,Me=!!M.specularIntensityMap,Ee=g&&!!M.transmissionMap,ve=g&&!!M.thicknessMap,ge=!!M.gradientMap,ye=!!M.alphaMap,ze=M.alphaTest>0,P=!!M.alphaHash,me=!!M.extensions,oe=!!G.attributes.uv1,J=!!G.attributes.uv2,ce=!!G.attributes.uv3;let Le=An;return M.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Le=n.toneMapping),{isWebGL2:h,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:de,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:pe,instancingColor:pe&&se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:mn,map:we,matcap:Ne,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:ne,aoMap:I,lightMap:Ye,bumpMap:fe,normalMap:xe,displacementMap:f&&Ae,emissiveMap:Ue,normalMapObjectSpace:xe&&M.normalMapType===Bl,normalMapTangentSpace:xe&&M.normalMapType===Mo,metalnessMap:_e,roughnessMap:Se,anisotropy:Re,anisotropyMap:L,clearcoat:Pe,clearcoatMap:B,clearcoatNormalMap:N,clearcoatRoughnessMap:Y,iridescence:Ge,iridescenceMap:re,iridescenceThicknessMap:Q,sheen:E,sheenColorMap:ae,sheenRoughnessMap:w,specularMap:ie,specularColorMap:K,specularIntensityMap:Me,transmission:g,transmissionMap:Ee,thicknessMap:ve,gradientMap:ge,opaque:M.transparent===!1&&M.blending===mi,alphaMap:ye,alphaTest:ze,alphaHash:P,combine:M.combine,mapUv:we&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:Ye&&x(M.lightMap.channel),bumpMapUv:fe&&x(M.bumpMap.channel),normalMapUv:xe&&x(M.normalMap.channel),displacementMapUv:Ae&&x(M.displacementMap.channel),emissiveMapUv:Ue&&x(M.emissiveMap.channel),metalnessMapUv:_e&&x(M.metalnessMap.channel),roughnessMapUv:Se&&x(M.roughnessMap.channel),anisotropyMapUv:L&&x(M.anisotropyMap.channel),clearcoatMapUv:B&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:N&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:w&&x(M.sheenRoughnessMap.channel),specularMapUv:ie&&x(M.specularMap.channel),specularColorMapUv:K&&x(M.specularColorMap.channel),specularIntensityMapUv:Me&&x(M.specularIntensityMap.channel),transmissionMapUv:Ee&&x(M.transmissionMap.channel),thicknessMapUv:ve&&x(M.thicknessMap.channel),alphaMapUv:ye&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xe||Re),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:J,vertexUv3s:ce,pointsUvs:se.isPoints===!0&&!!G.attributes.uv&&(we||ye),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:se.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:F,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(y(A,M),_(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function _(M,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),A.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function R(M){const A=v[M.type];let X;if(A){const $=Qt[A];X=Ac.clone($.uniforms)}else X=M.uniforms;return X}function T(M,A){let X;for(let $=0,se=c.length;$<se;$++){const D=c[$];if(D.cacheKey===A){X=D,++X.usedTimes;break}}return X===void 0&&(X=new zf(n,A,M,a),c.push(X)),X}function C(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:R,acquireProgram:T,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:k}}function kf(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function js(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ks(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,v,x,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function s(d,f,m,v,x,p){const u=o(d,f,m,v,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,v,x,p){const u=o(d,f,m,v,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Wf),i.length>1&&i.sort(f||js),r.length>1&&r.sort(f||js)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:h,sort:c}}function Xf(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Ks,n.set(i,[o])):r>=a.length?(o=new Ks,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Yf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jf=0;function Kf(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Zf(n,e){const t=new qf,i=Yf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new z);const a=new z,o=new ut,s=new ut;function l(h,d){let f=0,m=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,p=0,u=0,y=0,_=0,R=0,T=0,C=0,b=0,k=0,M=0;h.sort(Kf);const A=d===!0?Math.PI:1;for(let $=0,se=h.length;$<se;$++){const D=h[$],G=D.color,q=D.intensity,Z=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*q*A,m+=G.g*q*A,v+=G.b*q*A;else if(D.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],q);M++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const ee=D.shadow,U=i.get(D);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,r.directionalShadow[x]=U,r.directionalShadowMap[x]=ne,r.directionalShadowMatrix[x]=D.shadow.matrix,R++}r.directional[x]=j,x++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(q*A),j.distance=Z,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[u]=j;const ee=D.shadow;if(D.map&&(r.spotLightMap[b]=D.map,b++,ee.updateMatrices(D),D.castShadow&&k++),r.spotLightMatrix[u]=ee.matrix,D.castShadow){const U=i.get(D);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,r.spotShadow[u]=U,r.spotShadowMap[u]=ne,C++}u++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(G).multiplyScalar(q),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=j,y++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),j.distance=D.distance,j.decay=D.decay,D.castShadow){const ee=D.shadow,U=i.get(D);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,U.shadowCameraNear=ee.camera.near,U.shadowCameraFar=ee.camera.far,r.pointShadow[p]=U,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=D.shadow.matrix,T++}r.point[p]=j,p++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(q*A),j.groundColor.copy(D.groundColor).multiplyScalar(q*A),r.hemi[_]=j,_++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==x||X.pointLength!==p||X.spotLength!==u||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==R||X.numPointShadows!==T||X.numSpotShadows!==C||X.numSpotMaps!==b||X.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=y,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+b-k,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=M,X.directionalLength=x,X.pointLength=p,X.spotLength=u,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=R,X.numPointShadows=T,X.numSpotShadows=C,X.numSpotMaps=b,X.numLightProbes=M,r.version=jf++)}function c(h,d){let f=0,m=0,v=0,x=0,p=0;const u=d.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const R=h[y];if(R.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),f++}else if(R.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),v++}else if(R.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(u),s.identity(),o.copy(R.matrixWorld),o.premultiply(u),s.extractRotation(o),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),x++}else if(R.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(u),m++}else if(R.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Zs(n,e){const t=new Zf(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(d){i.push(d)}function s(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function $f(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Zs(n,e),t.set(a,[l])):o>=s.length?(l=new Zs(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jf extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ol,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tp=`uniform sampler2D shadow_pass;
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
}`;function np(n,e,t){let i=new Aa;const r=new We,a=new We,o=new mt,s=new Jf({depthPacking:zl}),l=new Qf,c={},h=t.maxTextureSize,d={[Rn]:Pt,[Pt]:Rn,[dn]:dn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:ep,fragmentShader:tp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let u=this.type;this.render=function(T,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const k=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),X=n.state;X.setBlending(bn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const $=u!==un&&this.type===un,se=u===un&&this.type!==un;for(let D=0,G=T.length;D<G;D++){const q=T[D],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const ne=Z.getFrameExtents();if(r.multiply(ne),a.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ne.x),r.x=a.x*ne.x,Z.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ne.y),r.y=a.y*ne.y,Z.mapSize.y=a.y)),Z.map===null||$===!0||se===!0){const ee=this.type!==un?{minFilter:Rt,magFilter:Rt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Wn(r.x,r.y,ee),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const j=Z.getViewportCount();for(let ee=0;ee<j;ee++){const U=Z.getViewport(ee);o.set(a.x*U.x,a.y*U.y,a.x*U.z,a.y*U.w),X.viewport(o),Z.updateMatrices(q,ee),i=Z.getFrustum(),R(C,b,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===un&&y(Z,b),Z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(k,M,A)};function y(T,C){const b=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,b,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,b,m,x,null)}function _(T,C,b,k){let M=null;const A=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=b.isPointLight===!0?l:s,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=M.uuid,$=C.uuid;let se=c[X];se===void 0&&(se={},c[X]=se);let D=se[$];D===void 0&&(D=M.clone(),se[$]=D),M=D}if(M.visible=C.visible,M.wireframe=C.wireframe,k===un?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=n.properties.get(M);X.light=b}return M}function R(T,C,b,k,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===un)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const $=e.update(T),se=T.material;if(Array.isArray(se)){const D=$.groups;for(let G=0,q=D.length;G<q;G++){const Z=D[G],ne=se[Z.materialIndex];if(ne&&ne.visible){const j=_(T,ne,k,M);n.renderBufferDirect(b,null,$,j,T,Z)}}}else if(se.visible){const D=_(T,se,k,M);n.renderBufferDirect(b,null,$,D,T,null)}}const X=T.children;for(let $=0,se=X.length;$<se;$++)R(X[$],C,b,k,M)}}function ip(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const me=new mt;let oe=null;const J=new mt(0,0,0,0);return{setMask:function(ce){oe!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),oe=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Le,Fe,Ze,nt){nt===!0&&(ce*=Ze,Le*=Ze,Fe*=Ze),me.set(ce,Le,Fe,Ze),J.equals(me)===!1&&(n.clearColor(ce,Le,Fe,Ze),J.copy(me))},reset:function(){P=!1,oe=null,J.set(-1,0,0,0)}}}function a(){let P=!1,me=null,oe=null,J=null;return{setTest:function(ce){ce?we(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(ce){me!==ce&&!P&&(n.depthMask(ce),me=ce)},setFunc:function(ce){if(oe!==ce){switch(ce){case fl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=ce}},setLocked:function(ce){P=ce},setClear:function(ce){J!==ce&&(n.clearDepth(ce),J=ce)},reset:function(){P=!1,me=null,oe=null,J=null}}}function o(){let P=!1,me=null,oe=null,J=null,ce=null,Le=null,Fe=null,Ze=null,nt=null;return{setTest:function(je){P||(je?we(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(je){me!==je&&!P&&(n.stencilMask(je),me=je)},setFunc:function(je,he,ot){(oe!==je||J!==he||ce!==ot)&&(n.stencilFunc(je,he,ot),oe=je,J=he,ce=ot)},setOp:function(je,he,ot){(Le!==je||Fe!==he||Ze!==ot)&&(n.stencilOp(je,he,ot),Le=je,Fe=he,Ze=ot)},setLocked:function(je){P=je},setClear:function(je){nt!==je&&(n.clearStencil(je),nt=je)},reset:function(){P=!1,me=null,oe=null,J=null,ce=null,Le=null,Fe=null,Ze=null,nt=null}}}const s=new r,l=new a,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,x=[],p=null,u=!1,y=null,_=null,R=null,T=null,C=null,b=null,k=null,M=new Je(0,0,0),A=0,X=!1,$=null,se=null,D=null,G=null,q=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,j=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ne=j>=1):ee.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ne=j>=2);let U=null,F={};const ue=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),te=new mt().fromArray(ue),le=new mt().fromArray(de);function Ce(P,me,oe,J){const ce=new Uint8Array(4),Le=n.createTexture();n.bindTexture(P,Le),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<oe;Fe++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(me+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Le}const pe={};pe[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(pe[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(n.DEPTH_TEST),l.setFunc(gr),_e(!1),Se(Pa),we(n.CULL_FACE),Ae(bn);function we(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Ne(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function De(P,me){return m[P]!==me?(n.bindFramebuffer(P,me),m[P]=me,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function I(P,me){let oe=x,J=!1;if(P)if(oe=v.get(me),oe===void 0&&(oe=[],v.set(me,oe)),P.isWebGLMultipleRenderTargets){const ce=P.texture;if(oe.length!==ce.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Fe=ce.length;Le<Fe;Le++)oe[Le]=n.COLOR_ATTACHMENT0+Le;oe.length=ce.length,J=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,J=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,J=!0);J&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ye(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const fe={[Fn]:n.FUNC_ADD,[Jo]:n.FUNC_SUBTRACT,[Qo]:n.FUNC_REVERSE_SUBTRACT};if(i)fe[Na]=n.MIN,fe[Fa]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(fe[Na]=P.MIN_EXT,fe[Fa]=P.MAX_EXT)}const xe={[el]:n.ZERO,[tl]:n.ONE,[nl]:n.SRC_COLOR,[la]:n.SRC_ALPHA,[ll]:n.SRC_ALPHA_SATURATE,[sl]:n.DST_COLOR,[rl]:n.DST_ALPHA,[il]:n.ONE_MINUS_SRC_COLOR,[ca]:n.ONE_MINUS_SRC_ALPHA,[ol]:n.ONE_MINUS_DST_COLOR,[al]:n.ONE_MINUS_DST_ALPHA,[cl]:n.CONSTANT_COLOR,[hl]:n.ONE_MINUS_CONSTANT_COLOR,[ul]:n.CONSTANT_ALPHA,[dl]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(P,me,oe,J,ce,Le,Fe,Ze,nt,je){if(P===bn){u===!0&&(Ne(n.BLEND),u=!1);return}if(u===!1&&(we(n.BLEND),u=!0),P!==$o){if(P!==y||je!==X){if((_!==Fn||C!==Fn)&&(n.blendEquation(n.FUNC_ADD),_=Fn,C=Fn),je)switch(P){case mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.ONE,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ia:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}R=null,T=null,b=null,k=null,M.set(0,0,0),A=0,y=P,X=je}return}ce=ce||me,Le=Le||oe,Fe=Fe||J,(me!==_||ce!==C)&&(n.blendEquationSeparate(fe[me],fe[ce]),_=me,C=ce),(oe!==R||J!==T||Le!==b||Fe!==k)&&(n.blendFuncSeparate(xe[oe],xe[J],xe[Le],xe[Fe]),R=oe,T=J,b=Le,k=Fe),(Ze.equals(M)===!1||nt!==A)&&(n.blendColor(Ze.r,Ze.g,Ze.b,nt),M.copy(Ze),A=nt),y=P,X=!1}function Ue(P,me){P.side===dn?Ne(n.CULL_FACE):we(n.CULL_FACE);let oe=P.side===Pt;me&&(oe=!oe),_e(oe),P.blending===mi&&P.transparent===!1?Ae(bn):Ae(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const J=P.stencilWrite;c.setTest(J),J&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(P){$!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),$=P)}function Se(P){P!==Ko?(we(n.CULL_FACE),P!==se&&(P===Pa?n.cullFace(n.BACK):P===Zo?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),se=P}function Re(P){P!==D&&(ne&&n.lineWidth(P),D=P)}function Pe(P,me,oe){P?(we(n.POLYGON_OFFSET_FILL),(G!==me||q!==oe)&&(n.polygonOffset(me,oe),G=me,q=oe)):Ne(n.POLYGON_OFFSET_FILL)}function Ge(P){P?we(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function E(P){P===void 0&&(P=n.TEXTURE0+Z-1),U!==P&&(n.activeTexture(P),U=P)}function g(P,me,oe){oe===void 0&&(U===null?oe=n.TEXTURE0+Z-1:oe=U);let J=F[oe];J===void 0&&(J={type:void 0,texture:void 0},F[oe]=J),(J.type!==P||J.texture!==me)&&(U!==oe&&(n.activeTexture(oe),U=oe),n.bindTexture(P,me||pe[P]),J.type=P,J.texture=me)}function L(){const P=F[U];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function w(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){te.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),te.copy(P))}function ve(P){le.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),le.copy(P))}function ge(P,me){let oe=d.get(me);oe===void 0&&(oe=new WeakMap,d.set(me,oe));let J=oe.get(P);J===void 0&&(J=n.getUniformBlockIndex(me,P.name),oe.set(P,J))}function ye(P,me){const J=d.get(me).get(P);h.get(me)!==J&&(n.uniformBlockBinding(me,J,P.__bindingPointIndex),h.set(me,J))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},U=null,F={},m={},v=new WeakMap,x=[],p=null,u=!1,y=null,_=null,R=null,T=null,C=null,b=null,k=null,M=new Je(0,0,0),A=0,X=!1,$=null,se=null,D=null,G=null,q=null,te.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:we,disable:Ne,bindFramebuffer:De,drawBuffers:I,useProgram:Ye,setBlending:Ae,setMaterial:Ue,setFlipSided:_e,setCullFace:Se,setLineWidth:Re,setPolygonOffset:Pe,setScissorTest:Ge,activeTexture:E,bindTexture:g,unbindTexture:L,compressedTexImage2D:B,compressedTexImage3D:N,texImage2D:K,texImage3D:Me,updateUBOMapping:ge,uniformBlockBinding:ye,texStorage2D:w,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:re,compressedTexSubImage2D:Q,compressedTexSubImage3D:ae,scissor:Ee,viewport:ve,reset:ze}}function rp(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,g){return u?new OffscreenCanvas(E,g):Er("canvas")}function _(E,g,L,B){let N=1;if((E.width>B||E.height>B)&&(N=B/Math.max(E.width,E.height)),N<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Y=g?Sr:Math.floor,re=Y(N*E.width),Q=Y(N*E.height);x===void 0&&(x=y(re,Q));const ae=L?y(re,Q):x;return ae.width=re,ae.height=Q,ae.getContext("2d").drawImage(E,0,0,re,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+re+"x"+Q+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function R(E){return ma(E.width)&&ma(E.height)}function T(E){return s?!1:E.wrapS!==jt||E.wrapT!==jt||E.minFilter!==Rt&&E.minFilter!==Gt}function C(E,g){return E.generateMipmaps&&g&&E.minFilter!==Rt&&E.minFilter!==Gt}function b(E){n.generateMipmap(E)}function k(E,g,L,B,N=!1){if(s===!1)return g;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=g;if(g===n.RED&&(L===n.FLOAT&&(Y=n.R32F),L===n.HALF_FLOAT&&(Y=n.R16F),L===n.UNSIGNED_BYTE&&(Y=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Y=n.R8UI),L===n.UNSIGNED_SHORT&&(Y=n.R16UI),L===n.UNSIGNED_INT&&(Y=n.R32UI),L===n.BYTE&&(Y=n.R8I),L===n.SHORT&&(Y=n.R16I),L===n.INT&&(Y=n.R32I)),g===n.RG&&(L===n.FLOAT&&(Y=n.RG32F),L===n.HALF_FLOAT&&(Y=n.RG16F),L===n.UNSIGNED_BYTE&&(Y=n.RG8)),g===n.RGBA){const re=N?_r:Qe.getTransfer(B);L===n.FLOAT&&(Y=n.RGBA32F),L===n.HALF_FLOAT&&(Y=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Y=re===rt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(E,g,L){return C(E,L)===!0||E.isFramebufferTexture&&E.minFilter!==Rt&&E.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){return E===Rt||E===Oa||E===Cr?n.NEAREST:n.LINEAR}function X(E){const g=E.target;g.removeEventListener("dispose",X),se(g),g.isVideoTexture&&v.delete(g)}function $(E){const g=E.target;g.removeEventListener("dispose",$),G(g)}function se(E){const g=i.get(E);if(g.__webglInit===void 0)return;const L=E.source,B=p.get(L);if(B){const N=B[g.__cacheKey];N.usedTimes--,N.usedTimes===0&&D(E),Object.keys(B).length===0&&p.delete(L)}i.remove(E)}function D(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const L=E.source,B=p.get(L);delete B[g.__cacheKey],o.memory.textures--}function G(E){const g=E.texture,L=i.get(E),B=i.get(g);if(B.__webglTexture!==void 0&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(L.__webglFramebuffer[N]))for(let Y=0;Y<L.__webglFramebuffer[N].length;Y++)n.deleteFramebuffer(L.__webglFramebuffer[N][Y]);else n.deleteFramebuffer(L.__webglFramebuffer[N]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[N])}else{if(Array.isArray(L.__webglFramebuffer))for(let N=0;N<L.__webglFramebuffer.length;N++)n.deleteFramebuffer(L.__webglFramebuffer[N]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let N=0;N<L.__webglColorRenderbuffer.length;N++)L.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[N]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let N=0,Y=g.length;N<Y;N++){const re=i.get(g[N]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(g[N])}i.remove(g),i.remove(E)}let q=0;function Z(){q=0}function ne(){const E=q;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),q+=1,E}function j(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ee(E,g){const L=i.get(E);if(E.isVideoTexture&&Pe(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const B=E.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(L,E,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function U(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){we(L,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function F(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){we(L,E,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function ue(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ne(L,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const de={[da]:n.REPEAT,[jt]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},te={[Rt]:n.NEAREST,[Oa]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[wl]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},le={[Hl]:n.NEVER,[Yl]:n.ALWAYS,[Gl]:n.LESS,[kl]:n.LEQUAL,[Vl]:n.EQUAL,[ql]:n.GEQUAL,[Wl]:n.GREATER,[Xl]:n.NOTEQUAL};function Ce(E,g,L){if(L?(n.texParameteri(E,n.TEXTURE_WRAP_S,de[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,de[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,de[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,te[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,te[g.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==jt||g.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,A(g.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,A(g.minFilter)),g.minFilter!==Rt&&g.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,le[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Rt||g.minFilter!==Cr&&g.minFilter!==Fi||g.type===Tn&&e.has("OES_texture_float_linear")===!1||s===!1&&g.type===Oi&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function pe(E,g){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",X));const B=g.source;let N=p.get(B);N===void 0&&(N={},p.set(B,N));const Y=j(g);if(Y!==E.__cacheKey){N[Y]===void 0&&(N[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),N[Y].usedTimes++;const re=N[E.__cacheKey];re!==void 0&&(N[E.__cacheKey].usedTimes--,re.usedTimes===0&&D(g)),E.__cacheKey=Y,E.__webglTexture=N[Y].texture}return L}function we(E,g,L){let B=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=n.TEXTURE_3D);const N=pe(E,g),Y=g.source;t.bindTexture(B,E.__webglTexture,n.TEXTURE0+L);const re=i.get(Y);if(Y.version!==re.__version||N===!0){t.activeTexture(n.TEXTURE0+L);const Q=Qe.getPrimaries(Qe.workingColorSpace),ae=g.colorSpace===kt?null:Qe.getPrimaries(g.colorSpace),w=g.colorSpace===kt||Q===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);const ie=T(g)&&R(g.image)===!1;let K=_(g.image,ie,!1,h);K=Ge(g,K);const Me=R(K)||s,Ee=a.convert(g.format,g.colorSpace);let ve=a.convert(g.type),ge=k(g.internalFormat,Ee,ve,g.colorSpace,g.isVideoTexture);Ce(B,g,Me);let ye;const ze=g.mipmaps,P=s&&g.isVideoTexture!==!0,me=re.__version===void 0||N===!0,oe=M(g,K,Me);if(g.isDepthTexture)ge=n.DEPTH_COMPONENT,s?g.type===Tn?ge=n.DEPTH_COMPONENT32F:g.type===yn?ge=n.DEPTH_COMPONENT24:g.type===Gn?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:g.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Vn&&ge===n.DEPTH_COMPONENT&&g.type!==Sa&&g.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=yn,ve=a.convert(g.type)),g.format===xi&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,g.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Gn,ve=a.convert(g.type))),me&&(P?t.texStorage2D(n.TEXTURE_2D,1,ge,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,ge,K.width,K.height,0,Ee,ve,null));else if(g.isDataTexture)if(ze.length>0&&Me){P&&me&&t.texStorage2D(n.TEXTURE_2D,oe,ge,ze[0].width,ze[0].height);for(let J=0,ce=ze.length;J<ce;J++)ye=ze[J],P?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,Ee,ve,ye.data):t.texImage2D(n.TEXTURE_2D,J,ge,ye.width,ye.height,0,Ee,ve,ye.data);g.generateMipmaps=!1}else P?(me&&t.texStorage2D(n.TEXTURE_2D,oe,ge,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Ee,ve,K.data)):t.texImage2D(n.TEXTURE_2D,0,ge,K.width,K.height,0,Ee,ve,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,ge,ze[0].width,ze[0].height,K.depth);for(let J=0,ce=ze.length;J<ce;J++)ye=ze[J],g.format!==Kt?Ee!==null?P?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,K.depth,Ee,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ge,ye.width,ye.height,K.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,K.depth,Ee,ve,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ge,ye.width,ye.height,K.depth,0,Ee,ve,ye.data)}else{P&&me&&t.texStorage2D(n.TEXTURE_2D,oe,ge,ze[0].width,ze[0].height);for(let J=0,ce=ze.length;J<ce;J++)ye=ze[J],g.format!==Kt?Ee!==null?P?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,Ee,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ge,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,Ee,ve,ye.data):t.texImage2D(n.TEXTURE_2D,J,ge,ye.width,ye.height,0,Ee,ve,ye.data)}else if(g.isDataArrayTexture)P?(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,ge,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ee,ve,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,K.width,K.height,K.depth,0,Ee,ve,K.data);else if(g.isData3DTexture)P?(me&&t.texStorage3D(n.TEXTURE_3D,oe,ge,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ee,ve,K.data)):t.texImage3D(n.TEXTURE_3D,0,ge,K.width,K.height,K.depth,0,Ee,ve,K.data);else if(g.isFramebufferTexture){if(me)if(P)t.texStorage2D(n.TEXTURE_2D,oe,ge,K.width,K.height);else{let J=K.width,ce=K.height;for(let Le=0;Le<oe;Le++)t.texImage2D(n.TEXTURE_2D,Le,ge,J,ce,0,Ee,ve,null),J>>=1,ce>>=1}}else if(ze.length>0&&Me){P&&me&&t.texStorage2D(n.TEXTURE_2D,oe,ge,ze[0].width,ze[0].height);for(let J=0,ce=ze.length;J<ce;J++)ye=ze[J],P?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ee,ve,ye):t.texImage2D(n.TEXTURE_2D,J,ge,Ee,ve,ye);g.generateMipmaps=!1}else P?(me&&t.texStorage2D(n.TEXTURE_2D,oe,ge,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,ve,K)):t.texImage2D(n.TEXTURE_2D,0,ge,Ee,ve,K);C(g,Me)&&b(B),re.__version=Y.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ne(E,g,L){if(g.image.length!==6)return;const B=pe(E,g),N=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const Y=i.get(N);if(N.version!==Y.__version||B===!0){t.activeTexture(n.TEXTURE0+L);const re=Qe.getPrimaries(Qe.workingColorSpace),Q=g.colorSpace===kt?null:Qe.getPrimaries(g.colorSpace),ae=g.colorSpace===kt||re===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const w=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,K=[];for(let J=0;J<6;J++)!w&&!ie?K[J]=_(g.image[J],!1,!0,c):K[J]=ie?g.image[J].image:g.image[J],K[J]=Ge(g,K[J]);const Me=K[0],Ee=R(Me)||s,ve=a.convert(g.format,g.colorSpace),ge=a.convert(g.type),ye=k(g.internalFormat,ve,ge,g.colorSpace),ze=s&&g.isVideoTexture!==!0,P=Y.__version===void 0||B===!0;let me=M(g,Me,Ee);Ce(n.TEXTURE_CUBE_MAP,g,Ee);let oe;if(w){ze&&P&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ye,Me.width,Me.height);for(let J=0;J<6;J++){oe=K[J].mipmaps;for(let ce=0;ce<oe.length;ce++){const Le=oe[ce];g.format!==Kt?ve!==null?ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Le.width,Le.height,ve,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Le.width,Le.height,ve,ge,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,ye,Le.width,Le.height,0,ve,ge,Le.data)}}}else{oe=g.mipmaps,ze&&P&&(oe.length>0&&me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ye,K[0].width,K[0].height));for(let J=0;J<6;J++)if(ie){ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,K[J].width,K[J].height,ve,ge,K[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ye,K[J].width,K[J].height,0,ve,ge,K[J].data);for(let ce=0;ce<oe.length;ce++){const Fe=oe[ce].image[J].image;ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Fe.width,Fe.height,ve,ge,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,ye,Fe.width,Fe.height,0,ve,ge,Fe.data)}}else{ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve,ge,K[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ye,ve,ge,K[J]);for(let ce=0;ce<oe.length;ce++){const Le=oe[ce];ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,ve,ge,Le.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,ye,ve,ge,Le.image[J])}}}C(g,Ee)&&b(n.TEXTURE_CUBE_MAP),Y.__version=N.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function De(E,g,L,B,N,Y){const re=a.convert(L.format,L.colorSpace),Q=a.convert(L.type),ae=k(L.internalFormat,re,Q,L.colorSpace);if(!i.get(g).__hasExternalTextures){const ie=Math.max(1,g.width>>Y),K=Math.max(1,g.height>>Y);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,Y,ae,ie,K,g.depth,0,re,Q,null):t.texImage2D(N,Y,ae,ie,K,0,re,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Re(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,N,i.get(L).__webglTexture,0,Se(g)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,N,i.get(L).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(E,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer&&!g.stencilBuffer){let B=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(L||Re(g)){const N=g.depthTexture;N&&N.isDepthTexture&&(N.type===Tn?B=n.DEPTH_COMPONENT32F:N.type===yn&&(B=n.DEPTH_COMPONENT24));const Y=Se(g);Re(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,B,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,B,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,B,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(g.depthBuffer&&g.stencilBuffer){const B=Se(g);L&&Re(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,B,n.DEPTH24_STENCIL8,g.width,g.height):Re(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const B=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let N=0;N<B.length;N++){const Y=B[N],re=a.convert(Y.format,Y.colorSpace),Q=a.convert(Y.type),ae=k(Y.internalFormat,re,Q,Y.colorSpace),w=Se(g);L&&Re(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,w,ae,g.width,g.height):Re(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w,ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ee(g.depthTexture,0);const B=i.get(g.depthTexture).__webglTexture,N=Se(g);if(g.depthTexture.format===Vn)Re(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(g.depthTexture.format===xi)Re(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function fe(E){const g=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Ye(g.__webglFramebuffer,E)}else if(L){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]=n.createRenderbuffer(),I(g.__webglDepthbuffer[B],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),I(g.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(E,g,L){const B=i.get(E);g!==void 0&&De(B.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&fe(E)}function Ae(E){const g=E.texture,L=i.get(E),B=i.get(g);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=g.version,o.memory.textures++);const N=E.isWebGLCubeRenderTarget===!0,Y=E.isWebGLMultipleRenderTargets===!0,re=R(E)||s;if(N){L.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(s&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[Q]=[];for(let ae=0;ae<g.mipmaps.length;ae++)L.__webglFramebuffer[Q][ae]=n.createFramebuffer()}else L.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(s&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)L.__webglFramebuffer[Q]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Y)if(r.drawBuffers){const Q=E.texture;for(let ae=0,w=Q.length;ae<w;ae++){const ie=i.get(Q[ae]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Re(E)===!1){const Q=Y?g:[g];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const w=Q[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const ie=a.convert(w.format,w.colorSpace),K=a.convert(w.type),Me=k(w.internalFormat,ie,K,w.colorSpace,E.isXRRenderTarget===!0),Ee=Se(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),I(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(N){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,g,re);for(let Q=0;Q<6;Q++)if(s&&g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)De(L.__webglFramebuffer[Q][ae],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae);else De(L.__webglFramebuffer[Q],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);C(g,re)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){const Q=E.texture;for(let ae=0,w=Q.length;ae<w;ae++){const ie=Q[ae],K=i.get(ie);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),Ce(n.TEXTURE_2D,ie,re),De(L.__webglFramebuffer,E,ie,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),C(ie,re)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?Q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,B.__webglTexture),Ce(Q,g,re),s&&g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)De(L.__webglFramebuffer[ae],E,g,n.COLOR_ATTACHMENT0,Q,ae);else De(L.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,Q,0);C(g,re)&&b(Q),t.unbindTexture()}E.depthBuffer&&fe(E)}function Ue(E){const g=R(E)||s,L=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let B=0,N=L.length;B<N;B++){const Y=L[B];if(C(Y,g)){const re=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Q=i.get(Y).__webglTexture;t.bindTexture(re,Q),b(re),t.unbindTexture()}}}function _e(E){if(s&&E.samples>0&&Re(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],L=E.width,B=E.height;let N=n.COLOR_BUFFER_BIT;const Y=[],re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=i.get(E),ae=E.isWebGLMultipleRenderTargets===!0;if(ae)for(let w=0;w<g.length;w++)t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let w=0;w<g.length;w++){Y.push(n.COLOR_ATTACHMENT0+w),E.depthBuffer&&Y.push(re);const ie=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(ie===!1&&(E.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Q.__webglColorRenderbuffer[w]),ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[re])),ae){const K=i.get(g[w]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,L,B,0,0,L,B,N,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let w=0;w<g.length;w++){t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.RENDERBUFFER,Q.__webglColorRenderbuffer[w]);const ie=i.get(g[w]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function Se(E){return Math.min(d,E.samples)}function Re(E){const g=i.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Pe(E){const g=o.render.frame;v.get(E)!==g&&(v.set(E,g),E.update())}function Ge(E,g){const L=E.colorSpace,B=E.format,N=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===pa||L!==mn&&L!==kt&&(Qe.getTransfer(L)===rt?s===!1?e.has("EXT_sRGB")===!0&&B===Kt?(E.format=pa,E.minFilter=Gt,E.generateMipmaps=!1):g=Eo.sRGBToLinear(g):(B!==Kt||N!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}this.allocateTextureUnit=ne,this.resetTextureUnits=Z,this.setTexture2D=ee,this.setTexture2DArray=U,this.setTexture3D=F,this.setTextureCube=ue,this.rebindTextures=xe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Re}function ap(n,e,t){const i=t.isWebGL2;function r(a,o=kt){let s;const l=Qe.getTransfer(o);if(a===wn)return n.UNSIGNED_BYTE;if(a===po)return n.UNSIGNED_SHORT_4_4_4_4;if(a===mo)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Rl)return n.BYTE;if(a===Cl)return n.SHORT;if(a===Sa)return n.UNSIGNED_SHORT;if(a===fo)return n.INT;if(a===yn)return n.UNSIGNED_INT;if(a===Tn)return n.FLOAT;if(a===Oi)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Ll)return n.ALPHA;if(a===Kt)return n.RGBA;if(a===Pl)return n.LUMINANCE;if(a===Dl)return n.LUMINANCE_ALPHA;if(a===Vn)return n.DEPTH_COMPONENT;if(a===xi)return n.DEPTH_STENCIL;if(a===pa)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Ul)return n.RED;if(a===go)return n.RED_INTEGER;if(a===Il)return n.RG;if(a===_o)return n.RG_INTEGER;if(a===vo)return n.RGBA_INTEGER;if(a===Lr||a===Pr||a===Dr||a===Ur)if(l===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===za||a===Ba||a===Ha||a===Ga)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Nl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Va||a===ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Va)return l===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===ka)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wa||a===Xa||a===qa||a===Ya||a===ja||a===Ka||a===Za||a===$a||a===Ja||a===Qa||a===es||a===ts||a===ns||a===is)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Wa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ya)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ja)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ka)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Za)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$a)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ja)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===es)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ts)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ns)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===is)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ir||a===rs||a===as)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Ir)return l===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===rs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===as)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Fl||a===ss||a===os||a===ls)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Ir)return s.COMPRESSED_RED_RGTC1_EXT;if(a===ss)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===os)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ls)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Gn?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class sp extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(op)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lp extends zt{constructor(e,t,i,r,a,o,s,l,c,h){if(h=h!==void 0?h:Vn,h!==Vn&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vn&&(i=yn),i===void 0&&h===xi&&(i=Gn),super(null,r,a,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cp extends Yn{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,v=null;const x=t.getContextAttributes();let p=null,u=null;const y=[],_=[],R=new Vt;R.layers.enable(1),R.viewport=new mt;const T=new Vt;T.layers.enable(2),T.viewport=new mt;const C=[R,T],b=new sp;b.layers.enable(1),b.layers.enable(2);let k=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let F=y[U];return F===void 0&&(F=new ia,y[U]=F),F.getTargetRaySpace()},this.getControllerGrip=function(U){let F=y[U];return F===void 0&&(F=new ia,y[U]=F),F.getGripSpace()},this.getHand=function(U){let F=y[U];return F===void 0&&(F=new ia,y[U]=F),F.getHandSpace()};function A(U){const F=_.indexOf(U.inputSource);if(F===-1)return;const ue=y[F];ue!==void 0&&(ue.update(U.inputSource,U.frame,c||o),ue.dispatchEvent({type:U.type,data:U.inputSource}))}function X(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let U=0;U<y.length;U++){const F=_[U];F!==null&&(_[U]=null,y[U].disconnect(F))}k=null,M=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:m}),u=new Wn(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let F=null,ue=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=x.stencil?xi:Vn,ue=x.stencil?Gn:yn);const te={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(te),r.updateRenderState({layers:[f]}),u=new Wn(f.textureWidth,f.textureHeight,{format:Kt,type:wn,depthTexture:new lp(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const le=e.properties.get(u);le.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(U){for(let F=0;F<U.removed.length;F++){const ue=U.removed[F],de=_.indexOf(ue);de>=0&&(_[de]=null,y[de].disconnect(ue))}for(let F=0;F<U.added.length;F++){const ue=U.added[F];let de=_.indexOf(ue);if(de===-1){for(let le=0;le<y.length;le++)if(le>=_.length){_.push(ue),de=le;break}else if(_[le]===null){_[le]=ue,de=le;break}if(de===-1)break}const te=y[de];te&&te.connect(ue)}}const se=new z,D=new z;function G(U,F,ue){se.setFromMatrixPosition(F.matrixWorld),D.setFromMatrixPosition(ue.matrixWorld);const de=se.distanceTo(D),te=F.projectionMatrix.elements,le=ue.projectionMatrix.elements,Ce=te[14]/(te[10]-1),pe=te[14]/(te[10]+1),we=(te[9]+1)/te[5],Ne=(te[9]-1)/te[5],De=(te[8]-1)/te[0],I=(le[8]+1)/le[0],Ye=Ce*De,fe=Ce*I,xe=de/(-De+I),Ae=xe*-De;F.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ae),U.translateZ(xe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Ue=Ce+xe,_e=pe+xe,Se=Ye-Ae,Re=fe+(de-Ae),Pe=we*pe/_e*Ue,Ge=Ne*pe/_e*Ue;U.projectionMatrix.makePerspective(Se,Re,Pe,Ge,Ue,_e),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function q(U,F){F===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(F.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;b.near=T.near=R.near=U.near,b.far=T.far=R.far=U.far,(k!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,M=b.far);const F=U.parent,ue=b.cameras;q(b,F);for(let de=0;de<ue.length;de++)q(ue[de],F);ue.length===2?G(b,R,T):b.projectionMatrix.copy(R.projectionMatrix),Z(U,b,F)};function Z(U,F,ue){ue===null?U.matrix.copy(F.matrixWorld):(U.matrix.copy(ue.matrixWorld),U.matrix.invert(),U.matrix.multiply(F.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(F.projectionMatrix),U.projectionMatrixInverse.copy(F.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=zi*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let ne=null;function j(U,F){if(h=F.getViewerPose(c||o),v=F,h!==null){const ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let de=!1;ue.length!==b.cameras.length&&(b.cameras.length=0,de=!0);for(let te=0;te<ue.length;te++){const le=ue[te];let Ce=null;if(m!==null)Ce=m.getViewport(le);else{const we=d.getViewSubImage(f,le);Ce=we.viewport,te===0&&(e.setRenderTargetTextures(u,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(u))}let pe=C[te];pe===void 0&&(pe=new Vt,pe.layers.enable(te),pe.viewport=new mt,C[te]=pe),pe.matrix.fromArray(le.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(le.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),te===0&&(b.matrix.copy(pe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),de===!0&&b.cameras.push(pe)}}for(let ue=0;ue<y.length;ue++){const de=_[ue],te=y[ue];de!==null&&te!==void 0&&te.update(de,F,c||o)}ne&&ne(U,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),v=null}const ee=new Do;ee.setAnimationLoop(j),this.setAnimationLoop=function(U){ne=U},this.dispose=function(){}}}function hp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Co(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,y,_,R){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),d(p,u)):u.isMeshPhongMaterial?(a(p,u),h(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,R)):u.isMeshMatcapMaterial?(a(p,u),v(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),x(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?l(p,u,y,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=_*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function up(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){const R=_.program;i.uniformBlockBinding(y,R)}function c(y,_){let R=r[y.id];R===void 0&&(v(y),R=h(y),r[y.id]=R,y.addEventListener("dispose",p));const T=_.program;i.updateUBOMapping(y,T);const C=e.render.frame;a[y.id]!==C&&(f(y),a[y.id]=C)}function h(y){const _=d();y.__bindingPointIndex=_;const R=n.createBuffer(),T=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,R),R}function d(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=r[y.id],R=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,b=R.length;C<b;C++){const k=R[C];if(m(k,C,T)===!0){const M=k.__offset,A=Array.isArray(k.value)?k.value:[k.value];let X=0;for(let $=0;$<A.length;$++){const se=A[$],D=x(se);typeof se=="number"?(k.__data[0]=se,n.bufferSubData(n.UNIFORM_BUFFER,M+X,k.__data)):se.isMatrix3?(k.__data[0]=se.elements[0],k.__data[1]=se.elements[1],k.__data[2]=se.elements[2],k.__data[3]=se.elements[0],k.__data[4]=se.elements[3],k.__data[5]=se.elements[4],k.__data[6]=se.elements[5],k.__data[7]=se.elements[0],k.__data[8]=se.elements[6],k.__data[9]=se.elements[7],k.__data[10]=se.elements[8],k.__data[11]=se.elements[0]):(se.toArray(k.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,k.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,_,R){const T=y.value;if(R[_]===void 0){if(typeof T=="number")R[_]=T;else{const C=Array.isArray(T)?T:[T],b=[];for(let k=0;k<C.length;k++)b.push(C[k].clone());R[_]=b}return!0}else if(typeof T=="number"){if(R[_]!==T)return R[_]=T,!0}else{const C=Array.isArray(R[_])?R[_]:[R[_]],b=Array.isArray(T)?T:[T];for(let k=0;k<C.length;k++){const M=C[k];if(M.equals(b[k])===!1)return M.copy(b[k]),!0}}return!1}function v(y){const _=y.uniforms;let R=0;const T=16;let C=0;for(let b=0,k=_.length;b<k;b++){const M=_[b],A={boundary:0,storage:0},X=Array.isArray(M.value)?M.value:[M.value];for(let $=0,se=X.length;$<se;$++){const D=X[$],G=x(D);A.boundary+=G.boundary,A.storage+=G.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=R,b>0){C=R%T;const $=T-C;C!==0&&$-A.boundary<0&&(R+=T-C,M.__offset=R)}R+=A.storage}return C=R%T,C>0&&(R+=T-C),y.__size=R,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const R=o.indexOf(_.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function u(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},a={}}return{bind:l,update:c,dispose:u}}class zo{constructor(e={}){const{canvas:t=lc(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const _=this;let R=!1,T=0,C=0,b=null,k=-1,M=null;const A=new mt,X=new mt;let $=null;const se=new Je(0);let D=0,G=t.width,q=t.height,Z=1,ne=null,j=null;const ee=new mt(0,0,G,q),U=new mt(0,0,G,q);let F=!1;const ue=new Aa;let de=!1,te=!1,le=null;const Ce=new ut,pe=new We,we=new z,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return b===null?Z:1}let I=i;function Ye(S,O){for(let H=0;H<S.length;H++){const W=S[H],V=t.getContext(W,O);if(V!==null)return V}return null}try{const S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),I=Ye(O,S),I===null)throw Ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let fe,xe,Ae,Ue,_e,Se,Re,Pe,Ge,E,g,L,B,N,Y,re,Q,ae,w,ie,K,Me,Ee,ve;function ge(){fe=new Md(I),xe=new pd(I,fe,e),fe.init(xe),Me=new ap(I,fe,xe),Ae=new ip(I,fe,xe),Ue=new yd(I),_e=new kf,Se=new rp(I,fe,Ae,_e,xe,Me,Ue),Re=new gd(_),Pe=new xd(_),Ge=new Uc(I,xe),Ee=new dd(I,fe,Ge,xe),E=new Sd(I,Ge,Ue,Ee),g=new wd(I,E,Ge,Ue),w=new Ad(I,xe,Se),re=new md(_e),L=new Vf(_,Re,Pe,fe,xe,Ee,re),B=new hp(_,_e),N=new Xf,Y=new $f(fe,xe),ae=new ud(_,Re,Pe,Ae,g,f,l),Q=new np(_,g,xe),ve=new up(I,Ue,xe,Ae),ie=new fd(I,fe,Ue,xe),K=new Ed(I,fe,Ue,xe),Ue.programs=L.programs,_.capabilities=xe,_.extensions=fe,_.properties=_e,_.renderLists=N,_.shadowMap=Q,_.state=Ae,_.info=Ue}ge();const ye=new cp(_,I);this.xr=ye,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(G,q,!1))},this.getSize=function(S){return S.set(G,q)},this.setSize=function(S,O,H=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,q=O,t.width=Math.floor(S*Z),t.height=Math.floor(O*Z),H===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(G*Z,q*Z).floor()},this.setDrawingBufferSize=function(S,O,H){G=S,q=O,Z=H,t.width=Math.floor(S*H),t.height=Math.floor(O*H),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,O,H,W){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,O,H,W),Ae.viewport(A.copy(ee).multiplyScalar(Z).floor())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,O,H,W){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,O,H,W),Ae.scissor(X.copy(U).multiplyScalar(Z).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(S){Ae.setScissorTest(F=S)},this.setOpaqueSort=function(S){ne=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(S=!0,O=!0,H=!0){let W=0;if(S){let V=!1;if(b!==null){const be=b.texture.format;V=be===vo||be===_o||be===go}if(V){const be=b.texture.type,Ie=be===wn||be===yn||be===Sa||be===Gn||be===po||be===mo,Oe=ae.getClearColor(),Be=ae.getClearAlpha(),ke=Oe.r,He=Oe.g,Ve=Oe.b;Ie?(m[0]=ke,m[1]=He,m[2]=Ve,m[3]=Be,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=ke,v[1]=He,v[2]=Ve,v[3]=Be,I.clearBufferiv(I.COLOR,0,v))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",me,!1),N.dispose(),Y.dispose(),_e.dispose(),Re.dispose(),Pe.dispose(),g.dispose(),Ee.dispose(),ve.dispose(),L.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",nt),ye.removeEventListener("sessionend",je),le&&(le.dispose(),le=null),he.stop()};function ze(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=Ue.autoReset,O=Q.enabled,H=Q.autoUpdate,W=Q.needsUpdate,V=Q.type;ge(),Ue.autoReset=S,Q.enabled=O,Q.autoUpdate=H,Q.needsUpdate=W,Q.type=V}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){const O=S.target;O.removeEventListener("dispose",oe),J(O)}function J(S){ce(S),_e.remove(S)}function ce(S){const O=_e.get(S).programs;O!==void 0&&(O.forEach(function(H){L.releaseProgram(H)}),S.isShaderMaterial&&L.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,H,W,V,be){O===null&&(O=Ne);const Ie=V.isMesh&&V.matrixWorld.determinant()<0,Oe=Dt(S,O,H,W,V);Ae.setMaterial(W,Ie);let Be=H.index,ke=1;if(W.wireframe===!0){if(Be=E.getWireframeAttribute(H),Be===void 0)return;ke=2}const He=H.drawRange,Ve=H.attributes.position;let it=He.start*ke,_t=(He.start+He.count)*ke;be!==null&&(it=Math.max(it,be.start*ke),_t=Math.min(_t,(be.start+be.count)*ke)),Be!==null?(it=Math.max(it,0),_t=Math.min(_t,Be.count)):Ve!=null&&(it=Math.max(it,0),_t=Math.min(_t,Ve.count));const et=_t-it;if(et<0||et===1/0)return;Ee.setup(V,W,Oe,H,Be);let vt,tt=ie;if(Be!==null&&(vt=Ge.get(Be),tt=K,tt.setIndex(vt)),V.isMesh)W.wireframe===!0?(Ae.setLineWidth(W.wireframeLinewidth*De()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(V.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),Ae.setLineWidth(Xe*De()),V.isLineSegments?tt.setMode(I.LINES):V.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else V.isPoints?tt.setMode(I.POINTS):V.isSprite&&tt.setMode(I.TRIANGLES);if(V.isInstancedMesh)tt.renderInstances(it,et,V.count);else if(H.isInstancedBufferGeometry){const Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Cn=Math.min(H.instanceCount,Xe);tt.renderInstances(it,et,Cn)}else tt.render(it,et)};function Le(S,O,H){S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,Jt(S,O,H),S.side=Rn,S.needsUpdate=!0,Jt(S,O,H),S.side=dn):Jt(S,O,H)}this.compile=function(S,O,H=null){H===null&&(H=S),p=Y.get(H),p.init(),y.push(p),H.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),S!==H&&S.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(_._useLegacyLights);const W=new Set;return S.traverse(function(V){const be=V.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){const Oe=be[Ie];Le(Oe,H,V),W.add(Oe)}else Le(be,H,V),W.add(be)}),y.pop(),p=null,W},this.compileAsync=function(S,O,H=null){const W=this.compile(S,O,H);return new Promise(V=>{function be(){if(W.forEach(function(Ie){_e.get(Ie).currentProgram.isReady()&&W.delete(Ie)}),W.size===0){V(S);return}setTimeout(be,10)}fe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Fe=null;function Ze(S){Fe&&Fe(S)}function nt(){he.stop()}function je(){he.start()}const he=new Do;he.setAnimationLoop(Ze),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(S){Fe=S,ye.setAnimationLoop(S),S===null?he.stop():he.start()},ye.addEventListener("sessionstart",nt),ye.addEventListener("sessionend",je),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(O),O=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,O,b),p=Y.get(S,y.length),p.init(),y.push(p),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ue.setFromProjectionMatrix(Ce),te=this.localClippingEnabled,de=re.init(this.clippingPlanes,te),x=N.get(S,u.length),x.init(),u.push(x),ot(S,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(ne,j),this.info.render.frame++,de===!0&&re.beginShadows();const H=p.state.shadowsArray;if(Q.render(H,S,O),de===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(x,S),p.setupLights(_._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let V=0,be=W.length;V<be;V++){const Ie=W[V];St(x,S,Ie,Ie.viewport)}}else St(x,S,O);b!==null&&(Se.updateMultisampleRenderTarget(b),Se.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(_,S,O),Ee.resetDefaultState(),k=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ot(S,O,H,W){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ue.intersectsSprite(S)){W&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ce);const Ie=g.update(S),Oe=S.material;Oe.visible&&x.push(S,Ie,Oe,H,we.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ue.intersectsObject(S))){const Ie=g.update(S),Oe=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),we.copy(S.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),we.copy(Ie.boundingSphere.center)),we.applyMatrix4(S.matrixWorld).applyMatrix4(Ce)),Array.isArray(Oe)){const Be=Ie.groups;for(let ke=0,He=Be.length;ke<He;ke++){const Ve=Be[ke],it=Oe[Ve.materialIndex];it&&it.visible&&x.push(S,Ie,it,H,we.z,Ve)}}else Oe.visible&&x.push(S,Ie,Oe,H,we.z,null)}}const be=S.children;for(let Ie=0,Oe=be.length;Ie<Oe;Ie++)ot(be[Ie],O,H,W)}function St(S,O,H,W){const V=S.opaque,be=S.transmissive,Ie=S.transparent;p.setupLightsView(H),de===!0&&re.setGlobalState(_.clippingPlanes,H),be.length>0&&tn(V,be,O,H),W&&Ae.viewport(A.copy(W)),V.length>0&&$e(V,O,H),be.length>0&&$e(be,O,H),Ie.length>0&&$e(Ie,O,H),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function tn(S,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const be=xe.isWebGL2;le===null&&(le=new Wn(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Oi:wn,minFilter:Fi,samples:be?4:0})),_.getDrawingBufferSize(pe),be?le.setSize(pe.x,pe.y):le.setSize(Sr(pe.x),Sr(pe.y));const Ie=_.getRenderTarget();_.setRenderTarget(le),_.getClearColor(se),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Oe=_.toneMapping;_.toneMapping=An,$e(S,H,W),Se.updateMultisampleRenderTarget(le),Se.updateRenderTargetMipmap(le);let Be=!1;for(let ke=0,He=O.length;ke<He;ke++){const Ve=O[ke],it=Ve.object,_t=Ve.geometry,et=Ve.material,vt=Ve.group;if(et.side===dn&&it.layers.test(W.layers)){const tt=et.side;et.side=Pt,et.needsUpdate=!0,nn(it,H,W,_t,et,vt),et.side=tt,et.needsUpdate=!0,Be=!0}}Be===!0&&(Se.updateMultisampleRenderTarget(le),Se.updateRenderTargetMipmap(le)),_.setRenderTarget(Ie),_.setClearColor(se,D),_.toneMapping=Oe}function $e(S,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,be=S.length;V<be;V++){const Ie=S[V],Oe=Ie.object,Be=Ie.geometry,ke=W===null?Ie.material:W,He=Ie.group;Oe.layers.test(H.layers)&&nn(Oe,O,H,Be,ke,He)}}function nn(S,O,H,W,V,be){S.onBeforeRender(_,O,H,W,V,be),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(_,O,H,W,S,be),V.transparent===!0&&V.side===dn&&V.forceSinglePass===!1?(V.side=Pt,V.needsUpdate=!0,_.renderBufferDirect(H,O,W,V,S,be),V.side=Rn,V.needsUpdate=!0,_.renderBufferDirect(H,O,W,V,S,be),V.side=dn):_.renderBufferDirect(H,O,W,V,S,be),S.onAfterRender(_,O,H,W,V,be)}function Jt(S,O,H){O.isScene!==!0&&(O=Ne);const W=_e.get(S),V=p.state.lights,be=p.state.shadowsArray,Ie=V.state.version,Oe=L.getParameters(S,V.state,be,O,H),Be=L.getProgramCacheKey(Oe);let ke=W.programs;W.environment=S.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(S.isMeshStandardMaterial?Pe:Re).get(S.envMap||W.environment),ke===void 0&&(S.addEventListener("dispose",oe),ke=new Map,W.programs=ke);let He=ke.get(Be);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Ie)return Bt(S,Oe),He}else Oe.uniforms=L.getUniforms(S),S.onBuild(H,Oe,_),S.onBeforeCompile(Oe,_),He=L.acquireProgram(Oe,Be),ke.set(Be,He),W.uniforms=Oe.uniforms;const Ve=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=re.uniform),Bt(S,Oe),W.needsLights=Ct(S),W.lightsStateVersion=Ie,W.needsLights&&(Ve.ambientLightColor.value=V.state.ambient,Ve.lightProbe.value=V.state.probe,Ve.directionalLights.value=V.state.directional,Ve.directionalLightShadows.value=V.state.directionalShadow,Ve.spotLights.value=V.state.spot,Ve.spotLightShadows.value=V.state.spotShadow,Ve.rectAreaLights.value=V.state.rectArea,Ve.ltc_1.value=V.state.rectAreaLTC1,Ve.ltc_2.value=V.state.rectAreaLTC2,Ve.pointLights.value=V.state.point,Ve.pointLightShadows.value=V.state.pointShadow,Ve.hemisphereLights.value=V.state.hemi,Ve.directionalShadowMap.value=V.state.directionalShadowMap,Ve.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ve.spotShadowMap.value=V.state.spotShadowMap,Ve.spotLightMatrix.value=V.state.spotLightMatrix,Ve.spotLightMap.value=V.state.spotLightMap,Ve.pointShadowMap.value=V.state.pointShadowMap,Ve.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function gn(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Bt(S,O){const H=_e.get(S);H.outputColorSpace=O.outputColorSpace,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Dt(S,O,H,W,V){O.isScene!==!0&&(O=Ne),Se.resetTextureUnits();const be=O.fog,Ie=W.isMeshStandardMaterial?O.environment:null,Oe=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mn,Be=(W.isMeshStandardMaterial?Pe:Re).get(W.envMap||Ie),ke=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,_t=!!H.morphAttributes.color;let et=An;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(et=_.toneMapping);const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=vt!==void 0?vt.length:0,Xe=_e.get(W),Cn=p.state.lights;if(de===!0&&(te===!0||S!==M)){const xt=S===M&&W.id===k;re.setState(W,S,xt)}let at=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Cn.state.version||Xe.outputColorSpace!==Oe||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||Xe.envMap!==Be||W.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==re.numPlanes||Xe.numIntersection!==re.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==He||Xe.morphTargets!==Ve||Xe.morphNormals!==it||Xe.morphColors!==_t||Xe.toneMapping!==et||xe.isWebGL2===!0&&Xe.morphTargetsCount!==tt)&&(at=!0):(at=!0,Xe.__version=W.version);let Lt=Xe.currentProgram;at===!0&&(Lt=Jt(W,O,V));let jn=!1,rn=!1,an=!1;const ct=Lt.getUniforms(),Ut=Xe.uniforms;if(Ae.useProgram(Lt.program)&&(jn=!0,rn=!0,an=!0),W.id!==k&&(k=W.id,rn=!0),jn||M!==S){ct.setValue(I,"projectionMatrix",S.projectionMatrix),ct.setValue(I,"viewMatrix",S.matrixWorldInverse);const xt=ct.map.cameraPosition;xt!==void 0&&xt.setValue(I,we.setFromMatrixPosition(S.matrixWorld)),xe.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,rn=!0,an=!0)}if(V.isSkinnedMesh){ct.setOptional(I,V,"bindMatrix"),ct.setOptional(I,V,"bindMatrixInverse");const xt=V.skeleton;xt&&(xe.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),ct.setValue(I,"boneTexture",xt.boneTexture,Se),ct.setValue(I,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ln=H.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0&&xe.isWebGL2===!0)&&w.update(V,H,Lt),(rn||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,ct.setValue(I,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ut.envMap.value=Be,Ut.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),rn&&(ct.setValue(I,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&lt(Ut,an),be&&W.fog===!0&&B.refreshFogUniforms(Ut,be),B.refreshMaterialUniforms(Ut,W,Z,q,le),mr.upload(I,gn(Xe),Ut,Se)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mr.upload(I,gn(Xe),Ut,Se),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(I,"center",V.center),ct.setValue(I,"modelViewMatrix",V.modelViewMatrix),ct.setValue(I,"normalMatrix",V.normalMatrix),ct.setValue(I,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const xt=W.uniformsGroups;for(let Ti=0,Rr=xt.length;Ti<Rr;Ti++)if(xe.isWebGL2){const Vi=xt[Ti];ve.update(Vi,Lt),ve.bind(Vi,Lt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lt}function lt(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Ct(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,O,H){_e.get(S.texture).__webglTexture=O,_e.get(S.depthTexture).__webglTexture=H;const W=_e.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const H=_e.get(S);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,H=0){b=S,T=O,C=H;let W=!0,V=null,be=!1,Ie=!1;if(S){const Be=_e.get(S);Be.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Be.__webglFramebuffer===void 0?Se.setupRenderTarget(S):Be.__hasExternalTextures&&Se.rebindTextures(S,_e.get(S.texture).__webglTexture,_e.get(S.depthTexture).__webglTexture);const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ie=!0);const He=_e.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[O])?V=He[O][H]:V=He[O],be=!0):xe.isWebGL2&&S.samples>0&&Se.useMultisampledRTT(S)===!1?V=_e.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?V=He[H]:V=He,A.copy(S.viewport),X.copy(S.scissor),$=S.scissorTest}else A.copy(ee).multiplyScalar(Z).floor(),X.copy(U).multiplyScalar(Z).floor(),$=F;if(Ae.bindFramebuffer(I.FRAMEBUFFER,V)&&xe.drawBuffers&&W&&Ae.drawBuffers(S,V),Ae.viewport(A),Ae.scissor(X),Ae.setScissorTest($),be){const Be=_e.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Be.__webglTexture,H)}else if(Ie){const Be=_e.get(S.texture),ke=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,H||0,ke)}k=-1},this.readRenderTargetPixels=function(S,O,H,W,V,be,Ie){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){Ae.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const Be=S.texture,ke=Be.format,He=Be.type;if(ke!==Kt&&Me.convert(ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===Oi&&(fe.has("EXT_color_buffer_half_float")||xe.isWebGL2&&fe.has("EXT_color_buffer_float"));if(He!==wn&&Me.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Tn&&(xe.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-W&&H>=0&&H<=S.height-V&&I.readPixels(O,H,W,V,Me.convert(ke),Me.convert(He),be)}finally{const Be=b!==null?_e.get(b).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(S,O,H=0){const W=Math.pow(2,-H),V=Math.floor(O.image.width*W),be=Math.floor(O.image.height*W);Se.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,S.x,S.y,V,be),Ae.unbindTexture()},this.copyTextureToTexture=function(S,O,H,W=0){const V=O.image.width,be=O.image.height,Ie=Me.convert(H.format),Oe=Me.convert(H.type);Se.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,W,S.x,S.y,V,be,Ie,Oe,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,W,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Ie,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,W,S.x,S.y,Ie,Oe,O.image),W===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,O,H,W,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=S.max.x-S.min.x+1,Ie=S.max.y-S.min.y+1,Oe=S.max.z-S.min.z+1,Be=Me.convert(W.format),ke=Me.convert(W.type);let He;if(W.isData3DTexture)Se.setTexture3D(W,0),He=I.TEXTURE_3D;else if(W.isDataArrayTexture)Se.setTexture2DArray(W,0),He=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Ve=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_t=I.getParameter(I.UNPACK_SKIP_PIXELS),et=I.getParameter(I.UNPACK_SKIP_ROWS),vt=I.getParameter(I.UNPACK_SKIP_IMAGES),tt=H.isCompressedTexture?H.mipmaps[0]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(He,V,O.x,O.y,O.z,be,Ie,Oe,Be,ke,tt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(He,V,O.x,O.y,O.z,be,Ie,Oe,Be,tt.data)):I.texSubImage3D(He,V,O.x,O.y,O.z,be,Ie,Oe,Be,ke,tt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vt),V===0&&W.generateMipmaps&&I.generateMipmap(He),Ae.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Se.setTextureCube(S,0):S.isData3DTexture?Se.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Se.setTexture2DArray(S,0):Se.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){T=0,C=0,b=null,Ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ea?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Tr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?kn:xo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kn?Mt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dp extends zo{}dp.prototype.isWebGL1Renderer=!0;class fp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class _a extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $s=new z,Js=new z,Qs=new ut,ra=new Ta,ur=new br;class dr extends gt{constructor(e=new en,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)$s.fromBufferAttribute(t,r-1),Js.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$s.distanceTo(Js);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),ur.radius+=a,e.ray.intersectsSphere(ur)===!1)return;Qs.copy(r).invert(),ra.copy(e.ray).applyMatrix4(Qs);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new z,h=new z,d=new z,f=new z,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const u=Math.max(0,o.start),y=Math.min(v.count,o.start+o.count);for(let _=u,R=y-1;_<R;_+=m){const T=v.getX(_),C=v.getX(_+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,C),ra.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let _=u,R=y-1;_<R;_+=m){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),ra.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}class zn extends en{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const h=[],d=new z,f=new z,m=[],v=[],x=[],p=[];for(let u=0;u<=i;u++){const y=[],_=u/i;let R=0;u===0&&o===0?R=.5/t:u===i&&l===Math.PI&&(R=-.5/t);for(let T=0;T<=t;T++){const C=T/t;d.x=-e*Math.cos(r+C*a)*Math.sin(o+_*s),d.y=e*Math.cos(o+_*s),d.z=e*Math.sin(r+C*a)*Math.sin(o+_*s),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(C+R,1-_),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){const _=h[u][y+1],R=h[u][y],T=h[u+1][y],C=h[u+1][y+1];(u!==0||o>0)&&m.push(_,R,C),(u!==i-1||l<Math.PI)&&m.push(R,T,C)}this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fr extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ca extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class pp extends Ca{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const aa=new ut,eo=new z,to=new z;class mp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;eo.setFromMatrixPosition(e.matrixWorld),t.position.copy(eo),to.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(to),t.updateMatrixWorld(),aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gp extends mp{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _p extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new gp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vp extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class no{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const io={type:"change"},sa={type:"start"},ro={type:"end"},pr=new Ta,ao=new En,xp=Math.cos(70*Ci.DEG2RAD);class Mp extends Yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",g),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(io),i.update(),a=r.NONE},this.update=function(){const w=new z,ie=new Xn().setFromUnitVectors(e.up,new z(0,1,0)),K=ie.clone().invert(),Me=new z,Ee=new Xn,ve=new z,ge=2*Math.PI;return function(ze=null){const P=i.object.position;w.copy(P).sub(i.target),w.applyQuaternion(ie),s.setFromVector3(w),i.autoRotate&&a===r.NONE&&X(M(ze)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let me=i.minAzimuthAngle,oe=i.maxAzimuthAngle;isFinite(me)&&isFinite(oe)&&(me<-Math.PI?me+=ge:me>Math.PI&&(me-=ge),oe<-Math.PI?oe+=ge:oe>Math.PI&&(oe-=ge),me<=oe?s.theta=Math.max(me,Math.min(oe,s.theta)):s.theta=s.theta>(me+oe)/2?Math.max(me,s.theta):Math.min(oe,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=j(s.radius):s.radius=j(s.radius*c),w.setFromSpherical(s),w.applyQuaternion(K),P.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let J=!1;if(i.zoomToCursor&&C){let ce=null;if(i.object.isPerspectiveCamera){const Le=w.length();ce=j(Le*c);const Fe=Le-ce;i.object.position.addScaledVector(R,Fe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Le=new z(T.x,T.y,0);Le.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),J=!0;const Fe=new z(T.x,T.y,0);Fe.unproject(i.object),i.object.position.sub(Fe).add(Le),i.object.updateMatrixWorld(),ce=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ce).add(i.object.position):(pr.origin.copy(i.object.position),pr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(pr.direction))<xp?e.lookAt(i.target):(ao.setFromNormalAndCoplanarPoint(i.object.up,i.target),pr.intersectPlane(ao,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),J=!0);return c=1,C=!1,J||Me.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||ve.distanceToSquared(i.target)>0?(i.dispatchEvent(io),Me.copy(i.object.position),Ee.copy(i.object.quaternion),ve.copy(i.target),J=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",N),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",Re),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",Se),i.domElement.removeEventListener("pointerup",Re),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new no,l=new no;let c=1;const h=new z,d=new We,f=new We,m=new We,v=new We,x=new We,p=new We,u=new We,y=new We,_=new We,R=new z,T=new We;let C=!1;const b=[],k={};function M(w){return w!==null?2*Math.PI/60*i.autoRotateSpeed*w:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function X(w){l.theta-=w}function $(w){l.phi-=w}const se=function(){const w=new z;return function(K,Me){w.setFromMatrixColumn(Me,0),w.multiplyScalar(-K),h.add(w)}}(),D=function(){const w=new z;return function(K,Me){i.screenSpacePanning===!0?w.setFromMatrixColumn(Me,1):(w.setFromMatrixColumn(Me,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(K),h.add(w)}}(),G=function(){const w=new z;return function(K,Me){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const ve=i.object.position;w.copy(ve).sub(i.target);let ge=w.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),se(2*K*ge/Ee.clientHeight,i.object.matrix),D(2*Me*ge/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(se(K*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),D(Me*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(w){if(!i.zoomToCursor)return;C=!0;const ie=i.domElement.getBoundingClientRect(),K=w.clientX-ie.left,Me=w.clientY-ie.top,Ee=ie.width,ve=ie.height;T.x=K/Ee*2-1,T.y=-(Me/ve)*2+1,R.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(w){return Math.max(i.minDistance,Math.min(i.maxDistance,w))}function ee(w){d.set(w.clientX,w.clientY)}function U(w){ne(w),u.set(w.clientX,w.clientY)}function F(w){v.set(w.clientX,w.clientY)}function ue(w){f.set(w.clientX,w.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;X(2*Math.PI*m.x/ie.clientHeight),$(2*Math.PI*m.y/ie.clientHeight),d.copy(f),i.update()}function de(w){y.set(w.clientX,w.clientY),_.subVectors(y,u),_.y>0?q(A()):_.y<0&&Z(A()),u.copy(y),i.update()}function te(w){x.set(w.clientX,w.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),G(p.x,p.y),v.copy(x),i.update()}function le(w){ne(w),w.deltaY<0?Z(A()):w.deltaY>0&&q(A()),i.update()}function Ce(w){let ie=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ie=!0;break}ie&&(w.preventDefault(),i.update())}function pe(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const w=.5*(b[0].pageX+b[1].pageX),ie=.5*(b[0].pageY+b[1].pageY);d.set(w,ie)}}function we(){if(b.length===1)v.set(b[0].pageX,b[0].pageY);else{const w=.5*(b[0].pageX+b[1].pageX),ie=.5*(b[0].pageY+b[1].pageY);v.set(w,ie)}}function Ne(){const w=b[0].pageX-b[1].pageX,ie=b[0].pageY-b[1].pageY,K=Math.sqrt(w*w+ie*ie);u.set(0,K)}function De(){i.enableZoom&&Ne(),i.enablePan&&we()}function I(){i.enableZoom&&Ne(),i.enableRotate&&pe()}function Ye(w){if(b.length==1)f.set(w.pageX,w.pageY);else{const K=ae(w),Me=.5*(w.pageX+K.x),Ee=.5*(w.pageY+K.y);f.set(Me,Ee)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;X(2*Math.PI*m.x/ie.clientHeight),$(2*Math.PI*m.y/ie.clientHeight),d.copy(f)}function fe(w){if(b.length===1)x.set(w.pageX,w.pageY);else{const ie=ae(w),K=.5*(w.pageX+ie.x),Me=.5*(w.pageY+ie.y);x.set(K,Me)}p.subVectors(x,v).multiplyScalar(i.panSpeed),G(p.x,p.y),v.copy(x)}function xe(w){const ie=ae(w),K=w.pageX-ie.x,Me=w.pageY-ie.y,Ee=Math.sqrt(K*K+Me*Me);y.set(0,Ee),_.set(0,Math.pow(y.y/u.y,i.zoomSpeed)),q(_.y),u.copy(y)}function Ae(w){i.enableZoom&&xe(w),i.enablePan&&fe(w)}function Ue(w){i.enableZoom&&xe(w),i.enableRotate&&Ye(w)}function _e(w){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",Se),i.domElement.addEventListener("pointerup",Re)),Y(w),w.pointerType==="touch"?L(w):Pe(w))}function Se(w){i.enabled!==!1&&(w.pointerType==="touch"?B(w):Ge(w))}function Re(w){re(w),b.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",Se),i.domElement.removeEventListener("pointerup",Re)),i.dispatchEvent(ro),a=r.NONE}function Pe(w){let ie;switch(w.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Kn.DOLLY:if(i.enableZoom===!1)return;U(w),a=r.DOLLY;break;case Kn.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;F(w),a=r.PAN}else{if(i.enableRotate===!1)return;ee(w),a=r.ROTATE}break;case Kn.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;ee(w),a=r.ROTATE}else{if(i.enablePan===!1)return;F(w),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(sa)}function Ge(w){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;ue(w);break;case r.DOLLY:if(i.enableZoom===!1)return;de(w);break;case r.PAN:if(i.enablePan===!1)return;te(w);break}}function E(w){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(w.preventDefault(),i.dispatchEvent(sa),le(w),i.dispatchEvent(ro))}function g(w){i.enabled===!1||i.enablePan===!1||Ce(w)}function L(w){switch(Q(w),b.length){case 1:switch(i.touches.ONE){case Zn.ROTATE:if(i.enableRotate===!1)return;pe(),a=r.TOUCH_ROTATE;break;case Zn.PAN:if(i.enablePan===!1)return;we(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Zn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(),a=r.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(sa)}function B(w){switch(Q(w),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(w),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;fe(w),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(w),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(w),i.update();break;default:a=r.NONE}}function N(w){i.enabled!==!1&&w.preventDefault()}function Y(w){b.push(w)}function re(w){delete k[w.pointerId];for(let ie=0;ie<b.length;ie++)if(b[ie].pointerId==w.pointerId){b.splice(ie,1);return}}function Q(w){let ie=k[w.pointerId];ie===void 0&&(ie=new We,k[w.pointerId]=ie),ie.set(w.pageX,w.pageY)}function ae(w){const ie=w.pointerId===b[0].pointerId?b[1]:b[0];return k[ie.pointerId]}i.domElement.addEventListener("contextmenu",N),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",Re),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var bt=Math.PI,st=bt*2,Di=bt/180,Sp=180/bt,Ep=1440,yp=398600.8,Ft=6378.135,pn=60/Math.sqrt(Ft*Ft*Ft/yp),oa=Ft*pn/60,Tp=1/pn,Bn=.001082616,bp=-253881e-11,Ap=-165597e-11,Hn=bp/Bn,Bi=2/3;function wp(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,a=0;i>a+t[r-1]&&r<12;)a+=t[r-1],r+=1;var o=r,s=i-a,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:o,day:s,hr:c,minute:h,sec:d}}function so(n,e,t,i,r,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+a/60+r)/60+i)/24}function La(n,e,t,i,r,a,o){if(n instanceof Date){var s=n;return so(s.getUTCFullYear(),s.getUTCMonth()+1,s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return so(n,e,t,i,r,a,o)}function Bo(n,e){var t=n.e3,i=n.ee2,r=n.peo,a=n.pgho,o=n.pho,s=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,v=n.sh2,x=n.sh3,p=n.si2,u=n.si3,y=n.sl2,_=n.sl3,R=n.sl4,T=n.t,C=n.xgh2,b=n.xgh3,k=n.xgh4,M=n.xh2,A=n.xh3,X=n.xi2,$=n.xi3,se=n.xl2,D=n.xl3,G=n.xl4,q=n.zmol,Z=n.zmos,ne=e.init,j=e.opsmode,ee=e.ep,U=e.inclp,F=e.nodep,ue=e.argpp,de=e.mp,te,le,Ce,pe,we,Ne,De,I,Ye,fe,xe,Ae,Ue,_e,Se,Re,Pe,Ge,E,g,L,B=119459e-10,N=.01675,Y=.00015835218,re=.0549;L=Z+B*T,ne==="y"&&(L=Z),g=L+2*N*Math.sin(L),Pe=Math.sin(g),fe=.5*Pe*Pe-.25,xe=-.5*Pe*Math.cos(g);var Q=c*fe+h*xe,ae=p*fe+u*xe,w=y*fe+_*xe+R*Pe,ie=d*fe+f*xe+m*Pe,K=v*fe+x*xe;L=q+Y*T,ne==="y"&&(L=q),g=L+2*re*Math.sin(L),Pe=Math.sin(g),fe=.5*Pe*Pe-.25,xe=-.5*Pe*Math.cos(g);var Me=i*fe+t*xe,Ee=X*fe+$*xe,ve=se*fe+D*xe+G*Pe,ge=C*fe+b*xe+k*Pe,ye=M*fe+A*xe;return Ae=Q+Me,Se=ae+Ee,Re=w+ve,Ue=ie+ge,_e=K+ye,ne==="n"&&(Ae-=r,Se-=s,Re-=l,Ue-=a,_e-=o,U+=Se,ee+=Ae,pe=Math.sin(U),Ce=Math.cos(U),U>=.2?(_e/=pe,Ue-=Ce*_e,ue+=Ue,F+=_e,de+=Re):(Ne=Math.sin(F),we=Math.cos(F),te=pe*Ne,le=pe*we,De=_e*we+Se*Ce*Ne,I=-_e*Ne+Se*Ce*we,te+=De,le+=I,F%=st,F<0&&j==="a"&&(F+=st),Ge=de+ue+Ce*F,Ye=Re+Ue-Se*F*pe,Ge+=Ye,E=F,F=Math.atan2(te,le),F<0&&j==="a"&&(F+=st),Math.abs(E-F)>bt&&(F<E?F+=st:F-=st),de+=Re,ue=Ge-de-Ce*F)),{ep:ee,inclp:U,nodep:F,argpp:ue,mp:de}}function Rp(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,a=n.inclp,o=n.nodep,s=n.np,l,c,h,d,f,m,v,x,p,u,y,_,R,T,C,b,k,M,A,X,$,se,D,G,q,Z,ne,j,ee,U,F,ue,de,te,le,Ce,pe,we,Ne,De,I,Ye,fe,xe,Ae,Ue,_e,Se,Re,Pe,Ge,E,g,L,B,N,Y,re,Q,ae,w,ie,K,Me=.01675,Ee=.0549,ve=29864797e-13,ge=47968065e-14,ye=.39785416,ze=.91744867,P=.1945905,me=-.98088458,oe=s,J=t,ce=Math.sin(o),Le=Math.cos(o),Fe=Math.sin(i),Ze=Math.cos(i),nt=Math.sin(a),je=Math.cos(a),he=J*J,ot=1-he,St=Math.sqrt(ot),tn=0,$e=0,nn=0,Jt=0,gn=0,Bt=e+18261.5+r/1440,Dt=(4.523602-.00092422029*Bt)%st,lt=Math.sin(Dt),Ct=Math.cos(Dt),S=.91375164-.03568096*Ct,O=Math.sqrt(1-S*S),H=.089683511*lt/O,W=Math.sqrt(1-H*H),V=5.8351514+.001944368*Bt,be=.39785416*lt/O,Ie=W*Ct+.91744867*H*lt;be=Math.atan2(be,Ie),be+=V-Dt;var Oe=Math.cos(be),Be=Math.sin(be);X=P,$=me,G=ze,q=ye,se=Le,D=ce,y=ve;for(var ke=1/oe,He=0;He<2;)He+=1,l=X*se+$*G*D,h=-$*se+X*G*D,v=-X*D+$*G*se,x=$*q,p=$*D+X*G*se,u=X*q,c=je*v+nt*x,d=je*p+nt*u,f=-nt*v+je*x,m=-nt*p+je*u,_=l*Ze+c*Fe,R=h*Ze+d*Fe,T=-l*Fe+c*Ze,C=-h*Fe+d*Ze,b=f*Fe,k=m*Fe,M=f*Ze,A=m*Ze,w=12*_*_-3*T*T,ie=24*_*R-6*T*C,K=12*R*R-3*C*C,E=3*(l*l+c*c)+w*he,g=6*(l*h+c*d)+ie*he,L=3*(h*h+d*d)+K*he,B=-6*l*f+he*(-24*_*M-6*T*b),N=-6*(l*m+h*f)+he*(-24*(R*M+_*A)+-6*(T*k+C*b)),Y=-6*h*m+he*(-24*R*A-6*C*k),re=6*c*f+he*(24*_*b-6*T*M),Q=6*(d*f+c*m)+he*(24*(R*b+_*k)-6*(C*M+T*A)),ae=6*d*m+he*(24*R*k-6*C*A),E=E+E+ot*w,g=g+g+ot*ie,L=L+L+ot*K,_e=y*ke,Ue=-.5*_e/St,Se=_e*St,Ae=-15*J*Se,Re=_*T+R*C,Pe=R*T+_*C,Ge=R*C-_*T,He===1&&(Z=Ae,ne=Ue,j=_e,ee=Se,U=Re,F=Pe,ue=Ge,de=E,te=g,le=L,Ce=B,pe=N,we=Y,Ne=re,De=Q,I=ae,Ye=w,fe=ie,xe=K,X=Oe,$=Be,G=S,q=O,se=W*Le+H*ce,D=ce*W-Le*H,y=ge);var Ve=(4.7199672+(.2299715*Bt-V))%st,it=(6.2565837+.017201977*Bt)%st,_t=2*Z*F,et=2*Z*ue,vt=2*ne*pe,tt=2*ne*(we-Ce),Xe=-2*j*te,Cn=-2*j*(le-de),at=-2*j*(-21-9*he)*Me,Lt=2*ee*fe,jn=2*ee*(xe-Ye),rn=-18*ee*Me,an=-2*ne*De,ct=-2*ne*(I-Ne),Ut=2*Ae*Pe,Ln=2*Ae*Ge,xt=2*Ue*N,Ti=2*Ue*(Y-B),Rr=-2*_e*g,Vi=-2*_e*(L-E),ko=-2*_e*(-21-9*he)*Ee,Wo=2*Se*ie,Xo=2*Se*(K-w),qo=-18*Se*Ee,Yo=-2*Ue*Q,jo=-2*Ue*(ae-re);return{snodm:ce,cnodm:Le,sinim:nt,cosim:je,sinomm:Fe,cosomm:Ze,day:Bt,e3:Ln,ee2:Ut,em:J,emsq:he,gam:V,peo:tn,pgho:Jt,pho:gn,pinco:$e,plo:nn,rtemsq:St,se2:_t,se3:et,sgh2:Lt,sgh3:jn,sgh4:rn,sh2:an,sh3:ct,si2:vt,si3:tt,sl2:Xe,sl3:Cn,sl4:at,s1:Ae,s2:Ue,s3:_e,s4:Se,s5:Re,s6:Pe,s7:Ge,ss1:Z,ss2:ne,ss3:j,ss4:ee,ss5:U,ss6:F,ss7:ue,sz1:de,sz2:te,sz3:le,sz11:Ce,sz12:pe,sz13:we,sz21:Ne,sz22:De,sz23:I,sz31:Ye,sz32:fe,sz33:xe,xgh2:Wo,xgh3:Xo,xgh4:qo,xh2:Yo,xh3:jo,xi2:xt,xi3:Ti,xl2:Rr,xl3:Vi,xl4:ko,nm:oe,z1:E,z2:g,z3:L,z11:B,z12:N,z13:Y,z21:re,z22:Q,z23:ae,z31:w,z32:ie,z33:K,zmol:Ve,zmos:it}}function Cp(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,a=n.s3,o=n.s4,s=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,v=n.sz1,x=n.sz3,p=n.sz11,u=n.sz13,y=n.sz21,_=n.sz23,R=n.sz31,T=n.sz33,C=n.t,b=n.tc,k=n.gsto,M=n.mo,A=n.mdot,X=n.no,$=n.nodeo,se=n.nodedot,D=n.xpidot,G=n.z1,q=n.z3,Z=n.z11,ne=n.z13,j=n.z21,ee=n.z23,U=n.z31,F=n.z33,ue=n.ecco,de=n.eccsq,te=n.emsq,le=n.em,Ce=n.argpm,pe=n.inclm,we=n.mm,Ne=n.nm,De=n.nodem,I=n.irez,Ye=n.atime,fe=n.d2201,xe=n.d2211,Ae=n.d3210,Ue=n.d3222,_e=n.d4410,Se=n.d4422,Re=n.d5220,Pe=n.d5232,Ge=n.d5421,E=n.d5433,g=n.dedt,L=n.didt,B=n.dmdt,N=n.dnodt,Y=n.domdt,re=n.del1,Q=n.del2,ae=n.del3,w=n.xfact,ie=n.xlamo,K=n.xli,Me=n.xni,Ee,ve,ge,ye,ze,P,me,oe,J,ce,Le,Fe,Ze,nt,je,he,ot,St,tn,$e,nn,Jt,gn,Bt,Dt,lt,Ct,S,O,H,W,V,be=17891679e-13,Ie=21460748e-13,Oe=22123015e-14,Be=17891679e-13,ke=73636953e-16,He=21765803e-16,Ve=.0043752690880113,it=37393792e-14,_t=11428639e-14,et=.00015835218,vt=119459e-10;I=0,Ne<.0052359877&&Ne>.0034906585&&(I=1),Ne>=.00826&&Ne<=.00924&&le>=.5&&(I=2);var tt=c*vt*m,Xe=h*vt*(p+u),Cn=-vt*d*(v+x-14-6*te),at=f*vt*(R+T-6),Lt=-vt*h*(y+_);(pe<.052359877||pe>bt-.052359877)&&(Lt=0),l!==0&&(Lt/=l);var jn=at-e*Lt;g=tt+i*et*s,L=Xe+r*et*(Z+ne),B=Cn-et*a*(G+q-14-6*te);var rn=o*et*(U+F-6),an=-et*r*(j+ee);(pe<.052359877||pe>bt-.052359877)&&(an=0),Y=jn+rn,N=Lt,l!==0&&(Y-=e/l*an,N+=an/l);var ct=0,Ut=(k+b*Ve)%st;if(le+=g*C,pe+=L*C,Ce+=Y*C,De+=N*C,we+=B*C,I!==0){if(H=Math.pow(Ne/pn,Bi),I===2){W=e*e;var Ln=le;le=ue;var xt=te;te=de,V=le*te,nt=-.306-(le-.64)*.44,le<=.65?(je=3.616-13.247*le+16.29*te,ot=-19.302+117.39*le-228.419*te+156.591*V,St=-18.9068+109.7927*le-214.6334*te+146.5816*V,tn=-41.122+242.694*le-471.094*te+313.953*V,$e=-146.407+841.88*le-1629.014*te+1083.435*V,nn=-532.114+3017.977*le-5740.032*te+3708.276*V):(je=-72.099+331.819*le-508.738*te+266.724*V,ot=-346.844+1582.851*le-2415.925*te+1246.113*V,St=-342.585+1554.908*le-2366.899*te+1215.972*V,tn=-1052.797+4758.686*le-7193.992*te+3651.957*V,$e=-3581.69+16178.11*le-24462.77*te+12422.52*V,le>.715?nn=-5149.66+29936.92*le-54087.36*te+31324.56*V:nn=1464.74-4664.75*le+3763.64*te),le<.7?(Bt=-919.2277+4988.61*le-9064.77*te+5542.21*V,Jt=-822.71072+4568.6173*le-8491.4146*te+5337.524*V,gn=-853.666+4690.25*le-8624.77*te+5341.4*V):(Bt=-37995.78+161616.52*le-229838.2*te+109377.94*V,Jt=-51752.104+218913.95*le-309468.16*te+146349.42*V,gn=-40023.88+170470.89*le-242699.48*te+115605.82*V),Dt=l*l,Ee=.75*(1+2*e+W),ve=1.5*Dt,ye=1.875*l*(1-2*e-3*W),ze=-1.875*l*(1+2*e-3*W),me=35*Dt*Ee,oe=39.375*Dt*Dt,J=9.84375*l*(Dt*(1-2*e-5*W)+.33333333*(-2+4*e+6*W)),ce=l*(4.92187512*Dt*(-2-4*e+10*W)+6.56250012*(1+2*e-3*W)),Le=29.53125*l*(2-8*e+W*(-12+8*e+10*W)),Fe=29.53125*l*(-2-8*e+W*(12+8*e-10*W)),S=Ne*Ne,O=H*H,Ct=3*S*O,lt=Ct*Be,fe=lt*Ee*nt,xe=lt*ve*je,Ct*=H,lt=Ct*it,Ae=lt*ye*ot,Ue=lt*ze*St,Ct*=H,lt=2*Ct*ke,_e=lt*me*tn,Se=lt*oe*$e,Ct*=H,lt=Ct*_t,Re=lt*J*nn,Pe=lt*ce*gn,lt=2*Ct*He,Ge=lt*Le*Jt,E=lt*Fe*Bt,ie=(M+$+$-(Ut+Ut))%st,w=A+B+2*(se+N-Ve)-X,le=Ln,te=xt}I===1&&(Ze=1+te*(-2.5+.8125*te),ot=1+2*te,he=1+te*(-6+6.60937*te),Ee=.75*(1+e)*(1+e),ge=.9375*l*l*(1+3*e)-.75*(1+e),P=1+e,P*=1.875*P*P,re=3*Ne*Ne*H*H,Q=2*re*Ee*Ze*be,ae=3*re*P*he*Oe*H,re=re*ge*ot*Ie*H,ie=(M+$+t-Ut)%st,w=A+D+B+Y+N-(X+Ve)),K=ie,Me=X,Ye=0,Ne=X+ct}return{em:le,argpm:Ce,inclm:pe,mm:we,nm:Ne,nodem:De,irez:I,atime:Ye,d2201:fe,d2211:xe,d3210:Ae,d3222:Ue,d4410:_e,d4422:Se,d5220:Re,d5232:Pe,d5421:Ge,d5433:E,dedt:g,didt:L,dmdt:B,dndt:ct,dnodt:N,domdt:Y,del1:re,del2:Q,del3:ae,xfact:w,xlamo:ie,xli:K,xni:Me}}function oo(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Di/240%st,t<0&&(t+=st),t}function va(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?oo(La.apply(void 0,arguments)):oo.apply(void 0,arguments)}function Lp(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,a=n.no,o=e*e,s=1-o,l=Math.sqrt(s),c=Math.cos(i),h=c*c,d=Math.pow(pn/a,Bi),f=.75*Bn*(3*h-1)/(l*s),m=f/(d*d),v=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(v*v),a/=1+m;var x=Math.pow(pn/a,Bi),p=Math.sin(i),u=x*s,y=1-5*h,_=-y-h-h,R=1/x,T=u*u,C=x*(1-e),b="n",k;if(r==="a"){var M=t-7305,A=Math.floor(M+1e-8),X=M-A,$=.017202791694070362,se=1.7321343856509375,D=5075514194322695e-30,G=$+st;k=(se+$*A+G*X+M*M*D)%st,k<0&&(k+=st)}else k=va(t+24332815e-1);return{no:a,method:b,ainv:R,ao:x,con41:_,con42:y,cosio:c,cosio2:h,eccsq:o,omeosq:s,posq:T,rp:C,rteosq:l,sinio:p,gsto:k}}function Pp(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,a=n.d3222,o=n.d4410,s=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,v=n.del2,x=n.del3,p=n.didt,u=n.dmdt,y=n.dnodt,_=n.domdt,R=n.argpo,T=n.argpdot,C=n.t,b=n.tc,k=n.gsto,M=n.xfact,A=n.xlamo,X=n.no,$=n.atime,se=n.em,D=n.argpm,G=n.inclm,q=n.xli,Z=n.mm,ne=n.xni,j=n.nodem,ee=n.nm,U=.13130908,F=2.8843198,ue=.37448087,de=5.7686396,te=.95240898,le=1.8014998,Ce=1.050833,pe=4.4108898,we=.0043752690880113,Ne=720,De=-720,I=259200,Ye,fe,xe,Ae,Ue,_e,Se,Re,Pe=0,Ge=0,E=(k+b*we)%st;if(se+=f*C,G+=p*C,D+=_*C,j+=y*C,Z+=u*C,e!==0){($===0||C*$<=0||Math.abs(C)<Math.abs($))&&($=0,ne=X,q=A),C>0?Ye=Ne:Ye=De;for(var g=381;g===381;)e!==2?(Se=m*Math.sin(q-U)+v*Math.sin(2*(q-F))+x*Math.sin(3*(q-ue)),Ue=ne+M,_e=m*Math.cos(q-U)+2*v*Math.cos(2*(q-F))+3*x*Math.cos(3*(q-ue)),_e*=Ue):(Re=R+T*$,xe=Re+Re,fe=q+q,Se=t*Math.sin(xe+q-de)+i*Math.sin(q-de)+r*Math.sin(Re+q-te)+a*Math.sin(-Re+q-te)+o*Math.sin(xe+fe-le)+s*Math.sin(fe-le)+l*Math.sin(Re+q-Ce)+c*Math.sin(-Re+q-Ce)+h*Math.sin(Re+fe-pe)+d*Math.sin(-Re+fe-pe),Ue=ne+M,_e=t*Math.cos(xe+q-de)+i*Math.cos(q-de)+r*Math.cos(Re+q-te)+a*Math.cos(-Re+q-te)+l*Math.cos(Re+q-Ce)+c*Math.cos(-Re+q-Ce)+2*(o*Math.cos(xe+fe-le)+s*Math.cos(fe-le)+h*Math.cos(Re+fe-pe)+d*Math.cos(-Re+fe-pe)),_e*=Ue),Math.abs(C-$)>=Ne?g=381:(Ge=C-$,g=0),g===381&&(q+=Ue*Ye+Se*I,ne+=Se*Ye+_e*I,$+=Ye);ee=ne+Se*Ge+_e*Ge*Ge*.5,Ae=q+Ue*Ge+Se*Ge*Ge*.5,e!==1?(Z=Ae-2*j+2*E,Pe=ee-X):(Z=Ae-j-D+E,Pe=ee-X),ee=X+Pe}return{atime:$,em:se,argpm:D,inclm:G,xli:q,mm:Z,xni:ne,nodem:j,dndt:Pe,nm:ee}}function Ho(n,e){var t,i,r,a,o,s,l,c,h,d,f,m,v,x,p,u,y,_,R,T,C,b,k,M,A,X,$,se=15e-13;n.t=e,n.error=0;var D=n.mo+n.mdot*n.t,G=n.argpo+n.argpdot*n.t,q=n.nodeo+n.nodedot*n.t;h=G,C=D;var Z=n.t*n.t;if(k=q+n.nodecf*Z,y=1-n.cc1*n.t,_=n.bstar*n.cc4*n.t,R=n.t2cof*Z,n.isimp!==1){l=n.omgcof*n.t;var ne=1+n.eta*Math.cos(D);s=n.xmcof*(ne*ne*ne-n.delmo),u=l+s,C=D+u,h=G-u,m=Z*n.t,v=m*n.t,y=y-n.d2*Z-n.d3*m-n.d4*v,_+=n.bstar*n.cc5*(Math.sin(C)-n.sinmao),R=R+n.t3cof*m+v*(n.t4cof+n.t*n.t5cof)}b=n.no;var j=n.ecco;if(T=n.inclo,n.method==="d"){x=n.t;var ee={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:x,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:j,argpm:h,inclm:T,xli:n.xli,mm:C,xni:n.xni,nodem:k,nm:b},U=Pp(ee);j=U.em,h=U.argpm,T=U.inclm,C=U.mm,k=U.nodem,b=U.nm}if(b<=0)return n.error=2,[!1,!1];var F=Math.pow(pn/b,Bi)*y*y;if(b=pn/Math.pow(F,1.5),j-=_,j>=1||j<-.001)return n.error=1,[!1,!1];j<1e-6&&(j=1e-6),C+=n.no*R,A=C+h+k,k%=st,h%=st,A%=st,C=(A-h-k)%st;var ue=Math.sin(T),de=Math.cos(T),te=j;if(M=T,d=h,$=k,X=C,a=ue,r=de,n.method==="d"){var le={inclo:n.inclo,init:"n",ep:te,inclp:M,nodep:$,argpp:d,mp:X,opsmode:n.operationmode},Ce=Bo(n,le);if(te=Ce.ep,$=Ce.nodep,d=Ce.argpp,X=Ce.mp,M=Ce.inclp,M<0&&(M=-M,$+=bt,d-=bt),te<0||te>1)return n.error=3,[!1,!1]}n.method==="d"&&(a=Math.sin(M),r=Math.cos(M),n.aycof=-.5*Hn*a,Math.abs(r+1)>15e-13?n.xlcof=-.25*Hn*a*(3+5*r)/(1+r):n.xlcof=-.25*Hn*a*(3+5*r)/se);var pe=te*Math.cos(d);u=1/(F*(1-te*te));var we=te*Math.sin(d)+u*n.aycof,Ne=X+d+$+u*n.xlcof*pe,De=(Ne-$)%st;c=De,p=9999.9;for(var I=1;Math.abs(p)>=1e-12&&I<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*pe-i*we,p=(De-we*t+pe*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,I+=1;var Ye=pe*t+we*i,fe=pe*i-we*t,xe=pe*pe+we*we,Ae=F*(1-xe);if(Ae<0)return n.error=4,[!1,!1];var Ue=F*(1-Ye),_e=Math.sqrt(F)*fe/Ue,Se=Math.sqrt(Ae)/Ue,Re=Math.sqrt(1-xe);u=fe/(1+Re);var Pe=F/Ue*(i-we-pe*u),Ge=F/Ue*(t-pe+we*u);f=Math.atan2(Pe,Ge);var E=(Ge+Ge)*Pe,g=1-2*Pe*Pe;u=1/Ae;var L=.5*Bn*u,B=L*u;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var N=Ue*(1-1.5*B*Re*n.con41)+.5*L*n.x1mth2*g;if(N<1)return n.error=6,{position:!1,velocity:!1};f-=.25*B*n.x7thm1*E;var Y=$+1.5*B*r*E,re=M+1.5*B*r*a*g,Q=_e-b*L*n.x1mth2*E/pn,ae=Se+b*L*(n.x1mth2*g+1.5*n.con41)/pn,w=Math.sin(f),ie=Math.cos(f),K=Math.sin(Y),Me=Math.cos(Y),Ee=Math.sin(re),ve=Math.cos(re),ge=-K*ve,ye=Me*ve,ze=ge*w+Me*ie,P=ye*w+K*ie,me=Ee*w,oe=ge*ie-Me*w,J=ye*ie-K*w,ce=Ee*ie,Le={x:N*ze*Ft,y:N*P*Ft,z:N*me*Ft},Fe={x:(Q*ze+ae*oe)*oa,y:(Q*P+ae*J)*oa,z:(Q*me+ae*ce)*oa};return{position:Le,velocity:Fe}}function Dp(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,a=e.xbstar,o=e.xecco,s=e.xargpo,l=e.xinclo,c=e.xmo,h=e.xno,d=e.xnodeo,f,m,v,x,p,u,y,_,R,T,C,b,k,M,A,X,$,se,D,G,q,Z,ne,j,ee,U,F,ue,de,te,le,Ce,pe,we,Ne,De,I,Ye,fe,xe,Ae,Ue,_e,Se,Re,Pe,Ge,E,g,L,B,N,Y,re,Q,ae,w=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=a,n.ecco=o,n.argpo=s,n.inclo=l,n.mo=c,n.no=h,n.nodeo=d,n.operationmode=t;var ie=78/Ft+1,K=42/Ft,Me=K*K*K*K;n.init="y",n.t=0;var Ee={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},ve=Lp(Ee),ge=ve.ao,ye=ve.con42,ze=ve.cosio,P=ve.cosio2,me=ve.eccsq,oe=ve.omeosq,J=ve.posq,ce=ve.rp,Le=ve.rteosq,Fe=ve.sinio;if(n.no=ve.no,n.con41=ve.con41,n.gsto=ve.gsto,n.a=Math.pow(n.no*Tp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,oe>=0||n.no>=0){if(n.isimp=0,ce<220/Ft+1&&(n.isimp=1),F=ie,q=Me,se=(ce-1)*Ft,se<156){F=se-78,se<98&&(F=20);var Ze=(120-F)/Ft;q=Ze*Ze*Ze*Ze,F=F/Ft+1}D=1/J,Pe=1/(ge-F),n.eta=ge*n.ecco*Pe,b=n.eta*n.eta,C=n.ecco*n.eta,G=Math.abs(1-b),u=q*Math.pow(Pe,4),y=u/Math.pow(G,3.5),x=y*n.no*(ge*(1+1.5*b+C*(4+b))+.375*Bn*Pe/G*n.con41*(8+3*b*(8+b))),n.cc1=n.bstar*x,p=0,n.ecco>1e-4&&(p=-2*u*Pe*Hn*n.no*Fe/n.ecco),n.x1mth2=1-P,n.cc4=2*n.no*y*ge*oe*(n.eta*(2+.5*b)+n.ecco*(.5+2*b)-Bn*Pe/(ge*G)*(-3*n.con41*(1-2*C+b*(1.5-.5*C))+.75*n.x1mth2*(2*b-C*(1+b))*Math.cos(2*n.argpo))),n.cc5=2*y*ge*oe*(1+2.75*(b+C)+C*b),_=P*P,_e=1.5*Bn*D*n.no,Se=.5*_e*Bn*D,Re=-.46875*Ap*D*D*n.no,n.mdot=n.no+.5*_e*Le*n.con41+.0625*Se*Le*(13-78*P+137*_),n.argpdot=-.5*_e*ye+.0625*Se*(7-114*P+395*_)+Re*(3-36*P+49*_),E=-_e*ze,n.nodedot=E+(.5*Se*(4-19*P)+2*Re*(3-7*P))*ze,Ge=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-Bi*u*n.bstar/C),n.nodecf=3.5*oe*E*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(ze+1)>15e-13?n.xlcof=-.25*Hn*Fe*(3+5*ze)/(1+ze):n.xlcof=-.25*Hn*Fe*(3+5*ze)/w,n.aycof=-.5*Hn*Fe;var nt=1+n.eta*Math.cos(n.mo);if(n.delmo=nt*nt*nt,n.sinmao=Math.sin(n.mo),n.x7thm1=7*P-1,2*bt/n.no>=225){n.method="d",n.isimp=1,Ae=0,A=n.inclo;var je={epoch:r,ep:n.ecco,argpp:n.argpo,tc:Ae,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},he=Rp(je);n.e3=he.e3,n.ee2=he.ee2,n.peo=he.peo,n.pgho=he.pgho,n.pho=he.pho,n.pinco=he.pinco,n.plo=he.plo,n.se2=he.se2,n.se3=he.se3,n.sgh2=he.sgh2,n.sgh3=he.sgh3,n.sgh4=he.sgh4,n.sh2=he.sh2,n.sh3=he.sh3,n.si2=he.si2,n.si3=he.si3,n.sl2=he.sl2,n.sl3=he.sl3,n.sl4=he.sl4,m=he.sinim,f=he.cosim,R=he.em,T=he.emsq,Z=he.s1,ne=he.s2,j=he.s3,ee=he.s4,U=he.s5,ue=he.ss1,de=he.ss2,te=he.ss3,le=he.ss4,Ce=he.ss5,pe=he.sz1,we=he.sz3,Ne=he.sz11,De=he.sz13,I=he.sz21,Ye=he.sz23,fe=he.sz31,xe=he.sz33,n.xgh2=he.xgh2,n.xgh3=he.xgh3,n.xgh4=he.xgh4,n.xh2=he.xh2,n.xh3=he.xh3,n.xi2=he.xi2,n.xi3=he.xi3,n.xl2=he.xl2,n.xl3=he.xl3,n.xl4=he.xl4,n.zmol=he.zmol,n.zmos=he.zmos,$=he.nm,g=he.z1,L=he.z3,B=he.z11,N=he.z13,Y=he.z21,re=he.z23,Q=he.z31,ae=he.z33;var ot={inclo:A,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},St=Bo(n,ot);n.ecco=St.ep,n.inclo=St.inclp,n.nodeo=St.nodep,n.argpo=St.argpp,n.mo=St.mp,k=0,M=0,X=0;var tn={cosim:f,emsq:T,argpo:n.argpo,s1:Z,s2:ne,s3:j,s4:ee,s5:U,sinim:m,ss1:ue,ss2:de,ss3:te,ss4:le,ss5:Ce,sz1:pe,sz3:we,sz11:Ne,sz13:De,sz21:I,sz23:Ye,sz31:fe,sz33:xe,t:n.t,tc:Ae,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:Ge,z1:g,z3:L,z11:B,z13:N,z21:Y,z23:re,z31:Q,z33:ae,ecco:n.ecco,eccsq:me,em:R,argpm:k,inclm:A,mm:X,nm:$,nodem:M,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},$e=Cp(tn);n.irez=$e.irez,n.atime=$e.atime,n.d2201=$e.d2201,n.d2211=$e.d2211,n.d3210=$e.d3210,n.d3222=$e.d3222,n.d4410=$e.d4410,n.d4422=$e.d4422,n.d5220=$e.d5220,n.d5232=$e.d5232,n.d5421=$e.d5421,n.d5433=$e.d5433,n.dedt=$e.dedt,n.didt=$e.didt,n.dmdt=$e.dmdt,n.dnodt=$e.dnodt,n.domdt=$e.domdt,n.del1=$e.del1,n.del2=$e.del2,n.del3=$e.del3,n.xfact=$e.xfact,n.xlamo=$e.xlamo,n.xli=$e.xli,n.xni=$e.xni}n.isimp!==1&&(v=n.cc1*n.cc1,n.d2=4*ge*Pe*v,Ue=n.d2*Pe*n.cc1/3,n.d3=(17*ge+F)*Ue,n.d4=.5*Ue*ge*Pe*(221*ge+31*F)*n.cc1,n.t3cof=n.d2+2*v,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*v)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*v*(2*n.d2+v)))}Ho(n,0),n.init="n"}function Up(n,e){var t="i",i=1440/(2*bt),r=0,a={};a.error=0,a.satnum=n.substring(2,7),a.epochyr=parseInt(n.substring(18,20),10),a.epochdays=parseFloat(n.substring(20,32)),a.ndot=parseFloat(n.substring(33,43)),a.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),a.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),a.inclo=parseFloat(e.substring(8,16)),a.nodeo=parseFloat(e.substring(17,25)),a.ecco=parseFloat(".".concat(e.substring(26,33))),a.argpo=parseFloat(e.substring(34,42)),a.mo=parseFloat(e.substring(43,51)),a.no=parseFloat(e.substring(52,63)),a.no/=i,a.inclo*=Di,a.nodeo*=Di,a.argpo*=Di,a.mo*=Di,a.epochyr<57?r=a.epochyr+2e3:r=a.epochyr+1900;var o=wp(r,a.epochdays),s=o.mon,l=o.day,c=o.hr,h=o.minute,d=o.sec;return a.jdsatepoch=La(r,s,l,c,h,d),Dp(a,{opsmode:t,satn:a.satnum,epoch:a.jdsatepoch-24332815e-1,xbstar:a.bstar,xecco:a.ecco,xargpo:a.argpo,xinclo:a.inclo,xmo:a.mo,xno:a.no,xnodeo:a.nodeo}),a}function Ip(n){return Np(n)||Fp(n)||Op(n)||zp()}function Np(n){if(Array.isArray(n))return xa(n)}function Fp(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Op(n,e){if(n){if(typeof n=="string")return xa(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xa(n,e)}}function xa(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function zp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bp(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),a=La.apply(void 0,Ip(r)),o=(a-i.jdsatepoch)*Ep;return Ho(i,o)}function Go(n){return n*Sp}function Hp(n){if(n<-bt/2||n>bt/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return Go(n)}function Gp(n){if(n<-bt||n>bt)throw new RangeError("Longitude radians must be in range [-pi; pi].");return Go(n)}function Vp(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),a=(t-i)/t,o=2*a-a*a,s=Math.atan2(n.y,n.x)-e;s<-bt;)s+=st;for(;s>bt;)s-=st;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*o*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:s,latitude:h,height:f}}var kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vo={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(kp,function(){var t=function(){function i(m){return o.appendChild(m.dom),m}function r(m){for(var v=0;v<o.children.length;v++)o.children[v].style.display=v===m?"block":"none";a=m}var a=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++a%o.children.length)},!1);var s=(performance||Date).now(),l=s,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-s,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,f)){var v=performance.memory;f.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return m},update:function(){s=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,a){var o=1/0,s=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,f=3*c,m=2*c,v=3*c,x=15*c,p=74*c,u=30*c,y=document.createElement("canvas");y.width=h,y.height=d,y.style.cssText="width:80px;height:48px";var _=y.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=a,_.fillRect(0,0,h,d),_.fillStyle=r,_.fillText(i,f,m),_.fillRect(v,x,p,u),_.fillStyle=a,_.globalAlpha=.9,_.fillRect(v,x,p,u),{dom:y,update:function(R,T){o=Math.min(o,R),s=Math.max(s,R),_.fillStyle=a,_.globalAlpha=1,_.fillRect(0,0,h,x),_.fillStyle=r,_.fillText(l(R)+" "+i+" ("+l(o)+"-"+l(s)+")",f,m),_.drawImage(y,v+c,x,p-c,u,v,x,p-c,u),_.fillRect(v+p-c,x,c,u),_.fillStyle=a,_.globalAlpha=.9,_.fillRect(v+p-c,x,c,l((1-R/T)*u))}}},t})})(Vo);var Xp=Vo.exports;const qp=Wp(Xp);function Yp(n){let e,t,i,r,a,o,s=!0,l=!1;const c=66,h=2;let d,f;const m=6371,v=1,x=v/m,p=2*Math.PI/86400,u=23.4*(Math.PI/180),y=27.32*24*3600,_=2*Math.PI/y,R=[];let T=1,C;const b=new qp;b.showPanel(0),window.addEventListener("keydown",g=>{(g.key==="R"||g.key==="r")&&(s=!s)}),window.addEventListener("keydown",g=>{(g.key==="W"||g.key==="w")&&(l=!l,a.traverse(function(L){L.isMesh&&(L.material.wireframe=l,L.material.needsUpdate=!0)}))});function k(){e=new fp,t=new Vt(5,window.innerWidth/window.innerHeight,.1,1e3),t.position.set(0,0,800),t.rotation.x=-u,t.position.z=66,i=new zo({alpha:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(12632256,0),i.shadowMap.enabled=!0,i.shadowMap.type=co,document.getElementById(n).appendChild(i.domElement),r=new Mp(t,i.domElement),r.enableDamping=!0,r.enableZoom=!0,r.enablePan=!1,r.dampingFactor=.25,r.zoomSpeed=.666,r.rotateSpeed=.25,r.minDistance=10,r.maxDistance=100,de(),M(),a=new Pi,a.rotation.z=u,e.add(a),A(),D("Mercury",12500670,2439.7),D("Venus",16768324,6051.8),D("Earth",2254591,6371),D("Mars",16729122,3389.5),D("Jupiter",14540202,69911),D("Saturn",15654331,58232),D("Uranus",11206655,25362),D("Neptune",4482815,24622),Ye(),G(),fe(),Ge(),window.addEventListener("resize",E,!1),E(),I()}function M(){const g=new vp(4210752,1);e.add(g),d=new _p(9079434,100),d.position.set(10,0,0),d.castShadow=!0,e.add(d);const B=new pp(16777147,526368,.5);e.add(B);const N=v*109/1e3,Y=new zn(N,64,64),re=new ba({color:16777147,emissive:16753920,opacity:.8,alphaHash:!0});new Ot(Y,re).position.copy(d.position)}function A(){const g=v*.273,L=new fr({color:16777215,roughness:1,metalness:0,opacity:.5,alphaHash:!0}),B=new zn(g,32,32);C=new Ot(B,L),a.add(C)}function X(){if(!C)return;const L=384400*x,B=_*(le.getTime()/1e3),N=.0549,Y=L*(Math.cos(B)-N),re=L*Math.sin(B)*Math.sqrt(1-N**2);let Q=new z(Y,0,re);const ae=5.145*(Math.PI/180);Q.applyAxisAngle(new z(1,0,0),ae),Q.applyAxisAngle(new z(0,0,1),u),C.position.copy(Q)}const $=.05;function se(g,L){const B={Mercury:{a:5791e4*$,e:.205,i:7,T:.24},Venus:{a:1082e5*$,e:.007,i:3.4,T:.62},Earth:{a:1496e5*$,e:.017,i:0,T:1},Mars:{a:2279e5*$,e:.093,i:1.85,T:1.88},Jupiter:{a:7785e5*$,e:.049,i:1.3,T:11.86},Saturn:{a:1429e6*$,e:.056,i:2.49,T:29.46},Uranus:{a:2871e6*$,e:.046,i:.77,T:84.01},Neptune:{a:4495e6*$,e:.009,i:1.77,T:164.8}},{a:N,e:Y,i:re,T:Q}=B[g],ae=2*Math.PI*L/Q,w=N*(Math.cos(ae)-Y)*x*T,ie=N*Math.sin(ae)*Math.sqrt(1-Y**2)*x*T,K=Math.cos(re*(Math.PI/180)),Me=Math.sin(re*(Math.PI/180)),Ee=0*K-ie*Me,ve=0*Me+ie*K,ge=d.position;return new z(w+ge.x,Ee+ge.y,ve+ge.z)}function D(g,L,B){const N=v*(B/m)*x,Y=new zn(N,32,32),re=new fr({color:L}),Q=new Ot(Y,re);e.add(Q),R.push({name:g,mesh:Q})}function G(){fetch("data/cachedSatellites.json").then(g=>{if(!g.ok)throw new Error("Failed to load cached TLE data");return g.json()}).then(g=>{Z(g)}).catch(g=>{console.error("Error loading TLE data:",g)})}let q=[];function Z(g){va(new Date),g.forEach((B,N)=>{const Y=Up(B.tleLine1,B.tleLine2),re={period:Y.no?2*Math.PI/Y.no*60:1440,inclination:Y.inclo*(180/Math.PI),eccentricity:Y.ecco,apogee:Y.apogee,perigee:Y.perigee},Q=new zn(.004,1,1),ae=new fr({color:16711680,wireframe:!0,opacity:.75,alphaHash:!0,depthTest:!0,metalness:1}),w=new Ot(Q,ae);w.userData={satrec:Y,orbitalParams:re,index:N},a.add(w),q.push(w)})}const ne=8,j=40;let ee=.3,U=1,F=.75,ue=1.25;function de(){const g=window.innerWidth<=768;t.position.z=g?c*h:c,g?(r.minDistance=10,r.maxDistance=500,ee=.15,U=.75,F=.75,ue=1.3):(r.minDistance=10,r.maxDistance=100,ee=.3,U=1,F=.75,ue=1.25)}function te(){const g=t.position.length(),L=Ci.clamp((j-g)/(j-ne)*(U-ee)+ee,ee,U),B=Math.floor(q.length*L);q.forEach((N,Y)=>{if(!N){console.warn(`Skipping undefined satellite mesh at index ${Y}`);return}N.visible=Y<B;const re=Ci.lerp(F,ue,(g-ne)/(j-ne));N.scale.set(re,re,re)}),console.log(`Visible satellites: ${B} of ${q.length}`)}let le=new Date;const Ce=1e3/60;let pe=1e3;function we(){le=new Date(le.getTime()+Ce*pe)}function Ne(){s&&(a.rotation.y+=p*(Ce/1e3)*pe)}function De(){we();const g=va(le),L=t.position.length(),B=Ci.clamp((j-L)/(j-ne)*(U-ee)+ee,ee,U),N=Math.floor(q.length*B);q.forEach((Y,re)=>{if(re>=N){Y.visible=!1;return}Y.visible=!0;const{satrec:Q}=Y.userData,ae=Bp(Q,le);if(!ae.position)return;const w=Vp(ae.position,g),ie=w.height*x*T,K=Se(Hp(w.latitude),Gp(w.longitude),v+ie);Y.position.copy(K);const Me=Ci.lerp(F,ue,(L-ne)/(j-ne));Y.scale.set(Me,Me,Me)})}function I(g){b.begin(),o=requestAnimationFrame(I),te(),De(),Ne(),X(),R.forEach(({name:L,mesh:B})=>{const N=se(L,g/1e3);B.position.copy(N)}),r.update(),i.render(e,t),b.end()}function Ye(){const g=new zn(v,64,64),L=new fr({color:0,opacity:.95,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:l});f=new Ot(g,L),f.castShadow=!0,f.receiveShadow=!0,a.add(f)}return k(),{dispose(){window.removeEventListener("resize",E),cancelAnimationFrame(o);const g=document.getElementById(n);g&&i.domElement&&g.removeChild(i.domElement)}};async function fe(){console.log("Attempting to load data...");const g=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson"];try{const L=g.map(B=>fetch(B).then(N=>{if(!N.ok)throw new Error(`Network response was not ok for ${B}`);return N.json()}).then(N=>(xe(B,N),"loaded")).catch(N=>{throw console.error(`Error loading ${B}:`,N),N}));await Promise.all(L),console.log("All GeoJSON data loaded successfully.")}catch(L){console.error("Failed to load some GeoJSON data:",L)}}function xe(g,L){switch(g){case"data/ne_110m_graticules_10.geojson":console.log("Loaded graticules:",L),Ue(L);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",L),Ae(L);break;case"data/ne_110m_land.geojson":console.log("loaded land:",L);break;case"data/ne_110m_ocean.geojson":console.log("loaded land:",L);break;default:console.warn("Unrecognized GeoJSON URL:",g);break}}function Ae(g){const L=new _a({color:16777215,opacity:.75,alphaHash:!0}),B=1;g.features.forEach(N=>{const Y=N.geometry.coordinates;if(N.geometry.type==="LineString"){const re=_e(Y,B),Q=new dr(re,L);a.add(Q)}else N.geometry.type==="MultiLineString"&&Y.forEach(re=>{const Q=_e(re,B),ae=new dr(Q,L);a.add(ae)})})}function Ue(g){const L=new _a({color:11184810,opacity:.35,alphaHash:!0,linewidth:1}),B=v;g.features.forEach(N=>{const Y=N.geometry.coordinates;if(N.geometry.type==="LineString"){const re=_e(Y,B),Q=new dr(re,L);a.add(Q)}else N.geometry.type==="MultiLineString"&&Y.forEach(re=>{const Q=_e(re,B),ae=new dr(Q,L);a.add(ae)})})}function _e(g,L){const B=new en,N=[];g.forEach(([re,Q])=>{const ae=Se(Q,re,L);N.push(ae.x,ae.y,ae.z)});const Y=new Float32Array(N);return B.setAttribute("position",new Zt(Y,3)),B}function Se(g,L,B){const N=(90-g)*(Math.PI/180),Y=(L+180)*(Math.PI/180),re=-B*Math.sin(N)*Math.cos(Y),Q=B*Math.sin(N)*Math.sin(Y),ae=B*Math.cos(N);return new z(re,ae,Q)}function Re(g,L){let B;return function(...N){clearTimeout(B),B=setTimeout(()=>g.apply(this,N),L)}}function Pe(g){const N=Math.log(1),re=(Math.log(1e4)-N)/100;return Math.exp(N+re*(g-0))}function Ge(){const g=document.getElementById("exaggeration-slider"),L=document.getElementById("exaggeration-value");function B(K,Me,Ee){const ve=Me+K/100*(Ee-Me);return Math.pow(10,ve)}function N(K,Me,Ee){return(Math.log10(K)-Me)/(Ee-Me)*100}const Y=1,re=Math.log10(.1),Q=Math.log10(25);g.value=N(Y,re,Q),T=Y,L.textContent=T.toFixed(1)+"x",g.addEventListener("input",K=>{const Me=parseFloat(K.target.value);T=B(Me,re,Q),L.textContent=T.toFixed(1)+"x",Re(De,1)()});const ae=document.getElementById("speed-slider"),w=document.getElementById("speed-value");pe=1,w.textContent=pe.toFixed(1)+"x";const ie=1;ae.value=0,pe=ie,w.textContent=pe.toFixed(0)+"x",ae.addEventListener("input",K=>{const Me=parseFloat(K.target.value);pe=Pe(Me),w.textContent=pe.toFixed(0)+"x"})}function E(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight);const g=window.innerWidth<=768;t.position.z=g?c*h:c}}const jp="threeContainer1";Yp(jp);
