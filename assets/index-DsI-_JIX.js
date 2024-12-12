(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="158",Wt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},An={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gl=0,Wo=1,_l=2,wa=1,Ra=2,pn=3,Un=0,It=1,gn=2,Ln=0,xi=1,Xo=2,qo=3,jo=4,vl=5,Gn=100,xl=101,Ml=102,Yo=103,Ko=104,Sl=200,El=201,yl=202,Tl=203,Eo=204,yo=205,bl=206,Al=207,wl=208,Rl=209,Cl=210,Ll=211,Pl=212,Dl=213,Ul=214,Il=0,Nl=1,Fl=2,Er=3,Ol=4,zl=5,Bl=6,Hl=7,Ca=0,Gl=1,kl=2,Pn=0,Vl=1,Wl=2,Xl=3,ql=4,jl=5,La=300,Si=301,Ei=302,To=303,bo=304,Lr=306,Ao=1e3,en=1001,wo=1002,Dt=1003,Zo=1004,Fr=1005,Xt=1006,Yl=1007,Vi=1008,Dn=1009,Kl=1010,Zl=1011,Io=1012,Pa=1013,Rn=1014,Cn=1015,Wi=1016,Da=1017,Ua=1018,jn=1020,$l=1021,tn=1023,Jl=1024,Ql=1025,Yn=1026,yi=1027,ec=1028,Ia=1029,tc=1030,Na=1031,Fa=1033,Or=33776,zr=33777,Br=33778,Hr=33779,$o=35840,Jo=35841,Qo=35842,es=35843,nc=36196,ts=37492,ns=37496,is=37808,rs=37809,os=37810,ss=37811,as=37812,ls=37813,cs=37814,hs=37815,us=37816,ds=37817,fs=37818,ps=37819,ms=37820,gs=37821,Gr=36492,_s=36494,vs=36495,ic=36283,xs=36284,Ms=36285,Ss=36286,Oa=3e3,Kn=3001,rc=3200,oc=3201,za=0,sc=1,jt="",St="srgb",xn="srgb-linear",No="display-p3",Pr="display-p3-linear",yr="linear",st="srgb",Tr="rec709",br="p3",ei=7680,Es=519,ac=512,lc=513,cc=514,hc=515,uc=516,dc=517,fc=518,pc=519,ys=35044,Ts="300 es",Ro=1035,_n=2e3,Ar=2001;class Mn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bs=1234567;const Hi=Math.PI/180,Xi=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Fo(n,e){return(n%e+e)%e}function mc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gc(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function _c(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function vc(n,e=1){return e-Math.abs(Fo(n,e*2)-e)}function xc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Sc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ec(n,e){return n+Math.random()*(e-n)}function yc(n){return n*(.5-Math.random())}function Tc(n){n!==void 0&&(bs=n);let e=bs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bc(n){return n*Hi}function Ac(n){return n*Xi}function Co(n){return(n&n-1)===0&&n!==0}function wc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rc(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),l=a(t/2),c=o((e+i)/2),h=a((e+i)/2),d=o((e-i)/2),f=a((e-i)/2),m=o((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(s*h,l*d,l*f,s*c);break;case"YZY":n.set(l*f,s*h,l*d,s*c);break;case"ZXZ":n.set(l*d,l*f,s*h,s*c);break;case"XZX":n.set(s*h,l*g,l*m,s*c);break;case"YXY":n.set(l*m,s*h,l*g,s*c);break;case"ZYZ":n.set(l*g,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mn={DEG2RAD:Hi,RAD2DEG:Xi,generateUUID:bi,clamp:bt,euclideanModulo:Fo,mapLinear:mc,inverseLerp:gc,lerp:Gi,damp:_c,pingpong:vc,smoothstep:xc,smootherstep:Mc,randInt:Sc,randFloat:Ec,randFloatSpread:yc,seededRandom:Tc,degToRad:bc,radToDeg:Ac,isPowerOfTwo:Co,ceilPowerOfTwo:wc,floorPowerOfTwo:wr,setQuaternionFromProperEuler:Rc,normalize:Lt,denormalize:_i};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,o,a,s,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c)}set(e,t,i,r,o,a,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],w=r[1],x=r[4],y=r[7],T=r[2],L=r[5],R=r[8];return o[0]=a*_+s*w+l*T,o[3]=a*p+s*x+l*L,o[6]=a*u+s*y+l*R,o[1]=c*_+h*w+d*T,o[4]=c*p+h*x+d*L,o[7]=c*u+h*y+d*R,o[2]=f*_+m*w+g*T,o[5]=f*p+m*x+g*L,o[8]=f*u+m*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*s*c-i*o*h+i*s*l+r*o*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=h*a-s*c,f=s*l-h*o,m=c*o-a*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(s*i-r*a)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*o-s*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Ze;function Ba(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cc(){const n=Rr("canvas");return n.style.display="block",n}const As={};function ki(n){n in As||(As[n]=!0,console.warn(n))}const ws=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rs=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[xn]:{transfer:yr,primaries:Tr,toReference:n=>n,fromReference:n=>n},[St]:{transfer:st,primaries:Tr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pr]:{transfer:yr,primaries:br,toReference:n=>n.applyMatrix3(Rs),fromReference:n=>n.applyMatrix3(ws)},[No]:{transfer:st,primaries:br,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rs),fromReference:n=>n.applyMatrix3(ws).convertLinearToSRGB()}},Lc=new Set([xn,Pr]),nt={enabled:!0,_workingColorSpace:xn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Lc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ki[e].toReference,r=Ki[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ki[n].primaries},getTransfer:function(n){return n===jt?yr:Ki[n].transfer}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ti;class Ha{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Rr("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Mi(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pc=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Wr(r[a].image)):o.push(Wr(r[a]))}else o=Wr(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Wr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ha.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dc=0;class Gt extends Mn{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=en,r=en,o=Xt,a=Vi,s=tn,l=Dn,c=Gt.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=bi(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Kn?St:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==La)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Kn:Oa}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?St:jt}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=La;Gt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,T=(u+1)/2,L=(h+f)/4,R=(d+_)/4,V=(g+p)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=L/i,o=R/i):y>T?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=L/r,o=V/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=R/o,r=V/o),this.set(i,r,o,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends Mn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Kn?St:jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Uc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ka extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ic extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=o[a+0],m=o[a+1],g=o[a+2],_=o[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-s;const u=l*f+c*m+h*g+d*_,w=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const T=Math.sqrt(x),L=Math.atan2(T,u*w);p=Math.sin(p*L)/T,s=Math.sin(s*L)/T}const y=s*w;if(l=l*p+f*y,c=c*p+m*y,h=h*p+g*y,d=d*p+_*y,p===1-s){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=o[a],f=o[a+1],m=o[a+2],g=o[a+3];return e[t]=s*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-s*m,e[t+2]=c*g+h*m+s*f-l*d,e[t+3]=h*g-s*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),d=s(o/2),f=l(i/2),m=l(r/2),g=l(o/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(a-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(o-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(a-r)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*s+r*c-o*l,this._y=r*h+a*l+o*s-i*c,this._z=o*h+a*c+i*l-r*s,this._w=a*h-i*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*r-s*i),h=2*(s*t-o*r),d=2*(o*i-a*t);return this.x=t+l*c+a*d-s*h,this.y=i+l*h+s*c-o*d,this.z=r+l*d+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,l=t.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new O,Cs=new sn;class Jn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(o,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zi.copy(i.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),$i.subVectors(this.max,Li),ni.subVectors(e.a,Li),ii.subVectors(e.b,Li),ri.subVectors(e.c,Li),Sn.subVectors(ii,ni),En.subVectors(ri,ii),Fn.subVectors(ni,ri);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Fn.y,Fn.x,0];return!qr(t,ni,ii,ri,$i)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,ni,ii,ri,$i))?!1:(Ji.crossVectors(Sn,En),t=[Ji.x,Ji.y,Ji.z],qr(t,ni,ii,ri,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new O,new O,new O,new O,new O,new O,new O,new O],Zt=new O,Zi=new Jn,ni=new O,ii=new O,ri=new O,Sn=new O,En=new O,Fn=new O,Li=new O,$i=new O,Ji=new O,On=new O;function qr(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){On.fromArray(n,o);const s=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),h=i.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const Nc=new Jn,Pi=new O,jr=new O;class Ai{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nc.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(jr)),this.expandByPoint(Pi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new O,Yr=new O,Qi=new O,yn=new O,Kr=new O,er=new O,Zr=new O;class Oo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Yr);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),s=yn.dot(this.direction),l=-yn.dot(Qi),c=yn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-s,f=a*s-l,g=o*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*s)+f*(a*d+f+2*l)+c}else f=o,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*o+s)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(a*o+s)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=a>0?-o:o,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yr).addScaledVector(Qi,f),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(o=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,o){Kr.subVectors(t,e),er.subVectors(i,e),Zr.crossVectors(Kr,er);let a=this.direction.dot(Zr),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;yn.subVectors(this.origin,e);const l=s*this.direction.dot(er.crossVectors(yn,er));if(l<0)return null;const c=s*this.direction.dot(Kr.cross(yn));if(c<0||l+c>a)return null;const h=-s*yn.dot(Zr);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,o,a,s,l,c,h,d,f,m,g,_,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c,h,d,f,m,g,_,p)}set(e,t,i,r,o,a,s,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=o,u[5]=a,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oi.setFromMatrixColumn(e,0).length(),o=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=a*h,m=a*d,g=s*h,_=s*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-s*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-s,t[2]=m*s-g,t[6]=_+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*s,t[4]=-a*d,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*h,t[9]=_-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=s*h,_=s*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=s*l,_=s*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=s*l,_=s*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=s*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fc,e,Oc)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Tn.crossVectors(i,Ot),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Tn.crossVectors(i,Ot)),Tn.normalize(),tr.crossVectors(Ot,Tn),r[0]=Tn.x,r[4]=tr.x,r[8]=Ot.x,r[1]=Tn.y,r[5]=tr.y,r[9]=Ot.y,r[2]=Tn.z,r[6]=tr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],w=i[3],x=i[7],y=i[11],T=i[15],L=r[0],R=r[4],V=r[8],S=r[12],C=r[1],q=r[5],j=r[9],Q=r[13],I=r[2],k=r[6],X=r[10],Y=r[14],oe=r[3],$=r[7],ee=r[11],F=r[15];return o[0]=a*L+s*C+l*I+c*oe,o[4]=a*R+s*q+l*k+c*$,o[8]=a*V+s*j+l*X+c*ee,o[12]=a*S+s*Q+l*Y+c*F,o[1]=h*L+d*C+f*I+m*oe,o[5]=h*R+d*q+f*k+m*$,o[9]=h*V+d*j+f*X+m*ee,o[13]=h*S+d*Q+f*Y+m*F,o[2]=g*L+_*C+p*I+u*oe,o[6]=g*R+_*q+p*k+u*$,o[10]=g*V+_*j+p*X+u*ee,o[14]=g*S+_*Q+p*Y+u*F,o[3]=w*L+x*C+y*I+T*oe,o[7]=w*R+x*q+y*k+T*$,o[11]=w*V+x*j+y*X+T*ee,o[15]=w*S+x*Q+y*Y+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+o*l*d-r*c*d-o*s*f+i*c*f+r*s*m-i*l*m)+_*(+t*l*m-t*c*f+o*a*f-r*a*m+r*c*h-o*l*h)+p*(+t*c*d-t*s*m-o*a*d+i*a*m+o*s*h-i*c*h)+u*(-r*s*h-t*l*d+t*s*f+r*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],w=d*p*c-_*f*c+_*l*m-s*p*m-d*l*u+s*f*u,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,y=h*_*c-g*d*c+g*s*m-a*_*m-h*s*u+a*d*u,T=g*d*l-h*_*l-g*s*f+a*_*f+h*s*p-a*d*p,L=t*w+i*x+r*y+o*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=w*R,e[1]=(_*f*o-d*p*o-_*r*m+i*p*m+d*r*u-i*f*u)*R,e[2]=(s*p*o-_*l*o+_*r*c-i*p*c-s*r*u+i*l*u)*R,e[3]=(d*l*o-s*f*o-d*r*c+i*f*c+s*r*m-i*l*m)*R,e[4]=x*R,e[5]=(h*p*o-g*f*o+g*r*m-t*p*m-h*r*u+t*f*u)*R,e[6]=(g*l*o-a*p*o-g*r*c+t*p*c+a*r*u-t*l*u)*R,e[7]=(a*f*o-h*l*o+h*r*c-t*f*c-a*r*m+t*l*m)*R,e[8]=y*R,e[9]=(g*d*o-h*_*o-g*i*m+t*_*m+h*i*u-t*d*u)*R,e[10]=(a*_*o-g*s*o+g*i*c-t*_*c-a*i*u+t*s*u)*R,e[11]=(h*s*o-a*d*o-h*i*c+t*d*c+a*i*m-t*s*m)*R,e[12]=T*R,e[13]=(h*_*r-g*d*r+g*i*f-t*_*f-h*i*p+t*d*p)*R,e[14]=(g*s*r-a*_*r-g*i*l+t*_*l+a*i*p-t*s*p)*R,e[15]=(a*d*r-h*s*r+h*i*l-t*d*l-a*i*f+t*s*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,l=e.z,c=o*a,h=o*s;return this.set(c*a+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*a,0,c*l-r*s,h*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,l=t._w,c=o+o,h=a+a,d=s+s,f=o*c,m=o*h,g=o*d,_=a*h,p=a*d,u=s*d,w=l*c,x=l*h,y=l*d,T=i.x,L=i.y,R=i.z;return r[0]=(1-(_+u))*T,r[1]=(m+y)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(m-y)*L,r[5]=(1-(f+u))*L,r[6]=(p+w)*L,r[7]=0,r[8]=(g+x)*R,r[9]=(p-w)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=oi.set(r[0],r[1],r[2]).length();const a=oi.set(r[4],r[5],r[6]).length(),s=oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const c=1/o,h=1/a,d=1/s;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=_n){const l=this.elements,c=2*o/(t-e),h=2*o/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(s===_n)m=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===Ar)m=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=_n){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(a-o),f=(t+e)*c,m=(i+r)*h;let g,_;if(s===_n)g=(a+o)*d,_=-2*d;else if(s===Ar)g=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oi=new O,$t=new ht,Fc=new O(0,0,0),Oc=new O(1,1,1),Tn=new O,tr=new O,Ot=new O,Ls=new ht,Ps=new sn;class Dr{constructor(e=0,t=0,i=0,r=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ls.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ls,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ps.setFromEuler(this),this.setFromQuaternion(Ps,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zc=0;const Ds=new O,si=new sn,un=new ht,nr=new O,Di=new O,Bc=new O,Hc=new sn,Us=new O(1,0,0),Is=new O(0,1,0),Ns=new O(0,0,1),Gc={type:"added"},kc={type:"removed"};class dt extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new O,t=new Dr,i=new sn,r=new O(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Us,e)}rotateY(e){return this.rotateOnAxis(Is,e)}rotateZ(e){return this.rotateOnAxis(Ns,e)}translateOnAxis(e,t){return Ds.copy(e).applyQuaternion(this.quaternion),this.position.add(Ds.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Us,e)}translateY(e){return this.translateOnAxis(Is,e)}translateZ(e){return this.translateOnAxis(Ns,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nr.copy(e):nr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Di,nr,this.up):un.lookAt(nr,Di,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),si.setFromRotationMatrix(un),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Hc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new O(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new O,dn=new O,$r=new O,fn=new O,ai=new O,li=new O,Fs=new O,Jr=new O,Qr=new O,eo=new O;let ir=!1;class Qt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Jt.subVectors(r,t),dn.subVectors(i,t),$r.subVectors(e,t);const a=Jt.dot(Jt),s=Jt.dot(dn),l=Jt.dot($r),c=dn.dot(dn),h=dn.dot($r),d=a*c-s*s;if(d===0)return o.set(-2,-1,-1);const f=1/d,m=(c*l-s*h)*f,g=(a*h-s*l)*f;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,i,r,o,a,s,l){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),this.getInterpolation(e,t,i,r,o,a,s,l)}static getInterpolation(e,t,i,r,o,a,s,l){return this.getBarycoord(e,t,i,r,fn),l.setScalar(0),l.addScaledVector(o,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(s,fn.z),l}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),dn.subVectors(e,t),Jt.cross(dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Jt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;ai.subVectors(r,i),li.subVectors(o,i),Jr.subVectors(e,i);const l=ai.dot(Jr),c=li.dot(Jr);if(l<=0&&c<=0)return t.copy(i);Qr.subVectors(e,r);const h=ai.dot(Qr),d=li.dot(Qr);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ai,a);eo.subVectors(e,o);const m=ai.dot(eo),g=li.dot(eo);if(g>=0&&m<=g)return t.copy(o);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(li,s);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Fs.subVectors(o,r),s=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(Fs,s);const u=1/(p+_+f);return a=_*u,s=f*u,t.copy(i).addScaledVector(ai,a).addScaledVector(li,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function to(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Fo(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=to(a,o,e+1/3),this.g=to(a,o,e),this.b=to(a,o,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=Wa[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return nt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(bt(Tt.r*255,0,255))*65536+Math.round(bt(Tt.g*255,0,255))*256+Math.round(bt(Tt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,o=Tt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,c;const h=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=h<=.5?d/(a+s):d/(2-a-s),a){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=St){nt.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(rr);const i=Gi(bn.h,rr.h,t),r=Gi(bn.s,rr.s,t),o=Gi(bn.l,rr.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Je;Je.NAMES=Wa;let Vc=0;class wi extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=xi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=yo,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Es,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==yo&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Es&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zo extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new O,or=new Ve;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ys,this.updateRange={offset:0,count:-1},this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),o=Lt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ys&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xa extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qa extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wc=0;const Vt=new ht,no=new dt,ci=new O,zt=new Jn,Ui=new Jn,vt=new O;class rn extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ba(e)?qa:Xa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];zt.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];Ui.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(zt.min,Ui.min),zt.expandByPoint(vt),vt.addVectors(zt.max,Ui.max),zt.expandByPoint(vt)):(zt.expandByPoint(Ui.min),zt.expandByPoint(Ui.max))}zt.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)vt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)vt.fromBufferAttribute(s,c),l&&(ci.fromBufferAttribute(e,c),vt.add(ci)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<s;C++)c[C]=new O,h[C]=new O;const d=new O,f=new O,m=new O,g=new Ve,_=new Ve,p=new Ve,u=new O,w=new O;function x(C,q,j){d.fromArray(r,C*3),f.fromArray(r,q*3),m.fromArray(r,j*3),g.fromArray(a,C*2),_.fromArray(a,q*2),p.fromArray(a,j*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),w.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[C].add(u),c[q].add(u),c[j].add(u),h[C].add(w),h[q].add(w),h[j].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let C=0,q=y.length;C<q;++C){const j=y[C],Q=j.start,I=j.count;for(let k=Q,X=Q+I;k<X;k+=3)x(i[k+0],i[k+1],i[k+2])}const T=new O,L=new O,R=new O,V=new O;function S(C){R.fromArray(o,C*3),V.copy(R);const q=c[C];T.copy(q),T.sub(R.multiplyScalar(R.dot(q))).normalize(),L.crossVectors(V,q);const Q=L.dot(h[C])<0?-1:1;l[C*4]=T.x,l[C*4+1]=T.y,l[C*4+2]=T.z,l[C*4+3]=Q}for(let C=0,q=y.length;C<q;++C){const j=y[C],Q=j.start,I=j.count;for(let k=Q,X=Q+I;k<X;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,o=new O,a=new O,s=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,o),d.subVectors(r,o),h.cross(d),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),s.add(h),l.add(h),c.add(h),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,o),d.subVectors(r,o),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,d=s.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){s.isInterleavedBufferAttribute?m=l[_]*s.data.stride+s.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new kt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],d=o[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Os=new ht,zn=new Oo,sr=new Ai,zs=new O,hi=new O,ui=new O,di=new O,io=new O,ar=new O,lr=new Ve,cr=new Ve,hr=new Ve,Bs=new O,Hs=new O,Gs=new O,ur=new O,dr=new O;class Ht extends dt{constructor(e=new rn,t=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){ar.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=s[l],d=o[l];h!==0&&(io.fromBufferAttribute(d,e),a?ar.addScaledVector(io,h):ar.addScaledVector(io.sub(t),h))}t.add(ar)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(o),zn.copy(e.ray).recast(e.near),!(sr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(sr,zs)===null||zn.origin.distanceToSquared(zs)>(e.far-e.near)**2))&&(Os.copy(o).invert(),zn.copy(e.ray).applyMatrix4(Os),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],w=Math.max(p.start,m.start),x=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,T=x;y<T;y+=3){const L=s.getX(y),R=s.getX(y+1),V=s.getX(y+2);r=fr(this,u,e,i,c,h,d,L,R,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const w=s.getX(p),x=s.getX(p+1),y=s.getX(p+2);r=fr(this,a,e,i,c,h,d,w,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],w=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,T=x;y<T;y+=3){const L=y,R=y+1,V=y+2;r=fr(this,u,e,i,c,h,d,L,R,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const w=p,x=p+1,y=p+2;r=fr(this,a,e,i,c,h,d,w,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Xc(n,e,t,i,r,o,a,s){let l;if(e.side===It?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===Un,s),l===null)return null;dr.copy(s),dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:n}}function fr(n,e,t,i,r,o,a,s,l,c){n.getVertexPosition(s,hi),n.getVertexPosition(l,ui),n.getVertexPosition(c,di);const h=Xc(n,e,t,i,hi,ui,di,ur);if(h){r&&(lr.fromBufferAttribute(r,s),cr.fromBufferAttribute(r,l),hr.fromBufferAttribute(r,c),h.uv=Qt.getInterpolation(ur,hi,ui,di,lr,cr,hr,new Ve)),o&&(lr.fromBufferAttribute(o,s),cr.fromBufferAttribute(o,l),hr.fromBufferAttribute(o,c),h.uv1=Qt.getInterpolation(ur,hi,ui,di,lr,cr,hr,new Ve),h.uv2=h.uv1),a&&(Bs.fromBufferAttribute(a,s),Hs.fromBufferAttribute(a,l),Gs.fromBufferAttribute(a,c),h.normal=Qt.getInterpolation(ur,hi,ui,di,Bs,Hs,Gs,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new O,materialIndex:0};Qt.getNormal(hi,ui,di,d.normal),h.face=d}return h}class ji extends rn{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,o,0),g("z","y","x",1,-1,i,t,-e,a,o,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function g(_,p,u,w,x,y,T,L,R,V,S){const C=y/R,q=T/V,j=y/2,Q=T/2,I=L/2,k=R+1,X=V+1;let Y=0,oe=0;const $=new O;for(let ee=0;ee<X;ee++){const F=ee*q-Q;for(let z=0;z<k;z++){const ge=z*C-j;$[_]=ge*w,$[p]=F*x,$[u]=I,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[u]=L>0?1:-1,h.push($.x,$.y,$.z),d.push(z/R),d.push(1-ee/V),Y+=1}}for(let ee=0;ee<V;ee++)for(let F=0;F<R;F++){const z=f+F+k*ee,ge=f+F+k*(ee+1),_e=f+(F+1)+k*(ee+1),ne=f+(F+1)+k*ee;l.push(z,ge,ne),l.push(ge,_e,ne),oe+=6}s.addGroup(m,oe,S),m+=oe,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const r in i)e[r]=i[r]}return e}function qc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ja(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const jc={clone:Ti,merge:Pt};var Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=Kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ya extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends Ya{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Zc extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(fi,pi,e,t);r.layers=this.layers,this.add(r);const o=new qt(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new qt(fi,pi,e,t);a.layers=this.layers,this.add(a);const s=new qt(fi,pi,e,t);s.layers=this.layers,this.add(s);const l=new qt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new qt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,l]=t;for(const c of t)this.remove(c);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ka extends Gt{constructor(e,t,i,r,o,a,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,i,r,o,a,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $c extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?St:jt),this.texture=new Ka(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Ln});o.uniforms.tEquirect.value=t;const a=new Ht(r,o),s=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Xt),new Zc(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const ro=new O,Jc=new O,Qc=new Ze;class wn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross(Jc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qc.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Ai,pr=new O;class Ur{constructor(e=new wn,t=new wn,i=new wn,r=new wn,o=new wn,a=new wn){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],w=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-o,f-c,p-m,y-u).normalize(),i[1].setComponents(l+o,f+c,p+m,y+u).normalize(),i[2].setComponents(l+a,f+h,p+g,y+w).normalize(),i[3].setComponents(l-a,f-h,p-g,y-w).normalize(),i[4].setComponents(l-s,f-d,p-_,y-x).normalize(),t===_n)i[5].setComponents(l+s,f+d,p+_,y+x).normalize();else if(t===Ar)i[5].setComponents(s,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Za(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function eh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function o(c,h,d){const f=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(o(d.buffer,c,h),d.version=c.version)}return{get:a,remove:s,update:l}}class Bo extends rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,d=e/s,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const w=u*f-a;for(let x=0;x<c;x++){const y=x*d-o;g.push(y,-w,0),_.push(0,0,1),p.push(x/s),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<s;w++){const x=w+c*u,y=w+c*(u+1),T=w+1+c*(u+1),L=w+1+c*u;m.push(x,y,L),m.push(y,T,L)}this.setIndex(m),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nh=`#ifdef USE_ALPHAHASH
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
#endif`,ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dh=`#ifdef USE_IRIDESCENCE
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
#endif`,fh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eh=`#define PI 3.141592653589793
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Th=`vec3 transformedNormal = objectNormal;
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
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`
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
}`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hh=`#ifdef USE_GRADIENTMAP
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
}`,Gh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xh=`uniform bool receiveShadow;
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
#endif`,qh=`#ifdef USE_ENVMAP
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
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
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
#endif`,Jh=`struct PhysicalMaterial {
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
}`,Qh=`
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
#endif`,eu=`#if defined( RE_IndirectDiffuse )
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
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cu=`#if defined( USE_POINTS_UV )
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
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,du=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fu=`#ifdef USE_MORPHNORMALS
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
#endif`,pu=`#ifdef USE_MORPHTARGETS
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
#endif`,mu=`#ifdef USE_MORPHTARGETS
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
#endif`,gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_u=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
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
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ru=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ou=`float getShadowMask() {
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
}`,zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bu=`#ifdef USE_SKINNING
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
#endif`,Hu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gu=`#ifdef USE_SKINNING
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
#endif`,ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
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
#endif`,ju=`#ifdef USE_TRANSMISSION
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qu=`uniform sampler2D t2D;
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
}`,sd=`#define DISTANCE
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
}`,ad=`#define DISTANCE
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
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
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
}`,ud=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,fd=`uniform vec3 diffuse;
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
}`,pd=`#define LAMBERT
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
}`,md=`#define LAMBERT
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
}`,gd=`#define MATCAP
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
}`,_d=`#define MATCAP
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
}`,vd=`#define NORMAL
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
}`,xd=`#define NORMAL
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
}`,Md=`#define PHONG
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
}`,Sd=`#define PHONG
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
}`,Ed=`#define STANDARD
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
}`,yd=`#define STANDARD
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
}`,Td=`#define TOON
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
}`,bd=`#define TOON
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
}`,Ad=`uniform float size;
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
}`,wd=`uniform vec3 diffuse;
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
}`,Rd=`#include <common>
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
}`,Cd=`uniform vec3 color;
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
}`,Ld=`uniform float rotation;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:th,alphahash_pars_fragment:nh,alphamap_fragment:ih,alphamap_pars_fragment:rh,alphatest_fragment:oh,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:lh,begin_vertex:ch,beginnormal_vertex:hh,bsdfs:uh,iridescence_fragment:dh,bumpmap_pars_fragment:fh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:xh,color_pars_vertex:Mh,color_vertex:Sh,common:Eh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Th,displacementmap_pars_vertex:bh,displacementmap_vertex:Ah,emissivemap_fragment:wh,emissivemap_pars_fragment:Rh,colorspace_fragment:Ch,colorspace_pars_fragment:Lh,envmap_fragment:Ph,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Uh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:qh,envmap_vertex:Nh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:zh,fog_pars_fragment:Bh,gradientmap_pars_fragment:Hh,lightmap_fragment:Gh,lightmap_pars_fragment:kh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:jh,lights_toon_pars_fragment:Yh,lights_phong_fragment:Kh,lights_phong_pars_fragment:Zh,lights_physical_fragment:$h,lights_physical_pars_fragment:Jh,lights_fragment_begin:Qh,lights_fragment_maps:eu,lights_fragment_end:tu,logdepthbuf_fragment:nu,logdepthbuf_pars_fragment:iu,logdepthbuf_pars_vertex:ru,logdepthbuf_vertex:ou,map_fragment:su,map_pars_fragment:au,map_particle_fragment:lu,map_particle_pars_fragment:cu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:uu,morphcolor_vertex:du,morphnormal_vertex:fu,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:gu,normal_fragment_maps:_u,normal_pars_fragment:vu,normal_pars_vertex:xu,normal_vertex:Mu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:yu,clearcoat_pars_fragment:Tu,iridescence_pars_fragment:bu,opaque_fragment:Au,packing:wu,premultiplied_alpha_fragment:Ru,project_vertex:Cu,dithering_fragment:Lu,dithering_pars_fragment:Pu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Uu,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Nu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Ou,skinbase_vertex:zu,skinning_pars_vertex:Bu,skinning_vertex:Hu,skinnormal_vertex:Gu,specularmap_fragment:ku,specularmap_pars_fragment:Vu,tonemapping_fragment:Wu,tonemapping_pars_fragment:Xu,transmission_fragment:qu,transmission_pars_fragment:ju,uv_pars_fragment:Yu,uv_pars_vertex:Ku,uv_vertex:Zu,worldpos_vertex:$u,background_vert:Ju,background_frag:Qu,backgroundCube_vert:ed,backgroundCube_frag:td,cube_vert:nd,cube_frag:id,depth_vert:rd,depth_frag:od,distanceRGBA_vert:sd,distanceRGBA_frag:ad,equirect_vert:ld,equirect_frag:cd,linedashed_vert:hd,linedashed_frag:ud,meshbasic_vert:dd,meshbasic_frag:fd,meshlambert_vert:pd,meshlambert_frag:md,meshmatcap_vert:gd,meshmatcap_frag:_d,meshnormal_vert:vd,meshnormal_frag:xd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:Ed,meshphysical_frag:yd,meshtoon_vert:Td,meshtoon_frag:bd,points_vert:Ad,points_frag:wd,shadow_vert:Rd,shadow_frag:Cd,sprite_vert:Ld,sprite_frag:Pd},Ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},on={basic:{uniforms:Pt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Pt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Pt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Pt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Pt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Pt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Pt([Ce.points,Ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Pt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Pt([Ce.common,Ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Pt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Pt([Ce.sprite,Ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Pt([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Pt([Ce.lights,Ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};on.physical={uniforms:Pt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const mr={r:0,b:0,g:0};function Dd(n,e,t,i,r,o,a){const s=new Je(0);let l=o===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let w=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(s,l):x&&x.isColor&&(_(x,1),w=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Lr)?(h===void 0&&(h=new Ht(new ji(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ti(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(x.colorSpace)!==st,(d!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ht(new Bo(2,2),new $n({name:"BackgroundMaterial",uniforms:Ti(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(mr,ja(n)),i.buffers.color.setClear(mr.r,mr.g,mr.b,u,a)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),l=u,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(s,l)},render:g}}function Ud(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,s={},l=p(null);let c=l,h=!1;function d(I,k,X,Y,oe){let $=!1;if(a){const ee=_(Y,X,k);c!==ee&&(c=ee,m(c.object)),$=u(I,Y,X,oe),$&&w(I,Y,X,oe)}else{const ee=k.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==ee)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=ee,$=!0)}oe!==null&&t.update(oe,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,V(I,k,X,Y),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(oe).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):o.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):o.deleteVertexArrayOES(I)}function _(I,k,X){const Y=X.wireframe===!0;let oe=s[I.id];oe===void 0&&(oe={},s[I.id]=oe);let $=oe[k.id];$===void 0&&($={},oe[k.id]=$);let ee=$[Y];return ee===void 0&&(ee=p(f()),$[Y]=ee),ee}function p(I){const k=[],X=[],Y=[];for(let oe=0;oe<r;oe++)k[oe]=0,X[oe]=0,Y[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:Y,object:I,attributes:{},index:null}}function u(I,k,X,Y){const oe=c.attributes,$=k.attributes;let ee=0;const F=X.getAttributes();for(const z in F)if(F[z].location>=0){const _e=oe[z];let ne=$[z];if(ne===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),_e===void 0||_e.attribute!==ne||ne&&_e.data!==ne.data)return!0;ee++}return c.attributesNum!==ee||c.index!==Y}function w(I,k,X,Y){const oe={},$=k.attributes;let ee=0;const F=X.getAttributes();for(const z in F)if(F[z].location>=0){let _e=$[z];_e===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor));const ne={};ne.attribute=_e,_e&&_e.data&&(ne.data=_e.data),oe[z]=ne,ee++}c.attributes=oe,c.attributesNum=ee,c.index=Y}function x(){const I=c.newAttributes;for(let k=0,X=I.length;k<X;k++)I[k]=0}function y(I){T(I,0)}function T(I,k){const X=c.newAttributes,Y=c.enabledAttributes,oe=c.attributeDivisors;X[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),oe[I]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),oe[I]=k)}function L(){const I=c.newAttributes,k=c.enabledAttributes;for(let X=0,Y=k.length;X<Y;X++)k[X]!==I[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function R(I,k,X,Y,oe,$,ee){ee===!0?n.vertexAttribIPointer(I,k,X,oe,$):n.vertexAttribPointer(I,k,X,Y,oe,$)}function V(I,k,X,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const oe=Y.attributes,$=X.getAttributes(),ee=k.defaultAttributeValues;for(const F in $){const z=$[F];if(z.location>=0){let ge=oe[F];if(ge===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ge!==void 0){const _e=ge.normalized,ne=ge.itemSize,ue=t.get(ge);if(ue===void 0)continue;const G=ue.buffer,Z=ue.type,xe=ue.bytesPerElement,Ue=i.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT||ge.gpuType===Pa);if(ge.isInterleavedBufferAttribute){const Ne=ge.data,N=Ne.stride,qe=ge.offset;if(Ne.isInstancedInterleavedBuffer){for(let me=0;me<z.locationSize;me++)T(z.location+me,Ne.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let me=0;me<z.locationSize;me++)y(z.location+me);n.bindBuffer(n.ARRAY_BUFFER,G);for(let me=0;me<z.locationSize;me++)R(z.location+me,ne/z.locationSize,Z,_e,N*xe,(qe+ne/z.locationSize*me)*xe,Ue)}else{if(ge.isInstancedBufferAttribute){for(let Ne=0;Ne<z.locationSize;Ne++)T(z.location+Ne,ge.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)y(z.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,G);for(let Ne=0;Ne<z.locationSize;Ne++)R(z.location+Ne,ne/z.locationSize,Z,_e,ne*xe,ne/z.locationSize*Ne*xe,Ue)}}else if(ee!==void 0){const _e=ee[F];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(z.location,_e);break;case 3:n.vertexAttrib3fv(z.location,_e);break;case 4:n.vertexAttrib4fv(z.location,_e);break;default:n.vertexAttrib1fv(z.location,_e)}}}}L()}function S(){j();for(const I in s){const k=s[I];for(const X in k){const Y=k[X];for(const oe in Y)g(Y[oe].object),delete Y[oe];delete k[X]}delete s[I]}}function C(I){if(s[I.id]===void 0)return;const k=s[I.id];for(const X in k){const Y=k[X];for(const oe in Y)g(Y[oe].object),delete Y[oe];delete k[X]}delete s[I.id]}function q(I){for(const k in s){const X=s[k];if(X[I.id]===void 0)continue;const Y=X[I.id];for(const oe in Y)g(Y[oe].object),delete Y[oe];delete X[I.id]}}function j(){Q(),h=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:q,initAttributes:x,enableAttribute:y,disableUnusedAttributes:L}}function Id(n,e,t,i){const r=i.isWebGL2;let o;function a(c){o=c}function s(c,h){n.drawArrays(o,c,h),t.update(h,o,1)}function l(c,h,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](o,c,h,d),t.update(h,o,d)}this.setMode=a,this.render=s,this.renderInstances=l}function Nd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=a||e.has("OES_texture_float"),T=x&&y,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:L}}function Fd(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new wn,s=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||o&&!p)o?h(null):c();else{const w=o?0:i,x=w*4;let y=u.clippingState||null;l.value=y,y=h(g,f,x,m);for(let T=0;T!==x;++T)y[T]=t[T];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,w=f.matrixWorldInverse;s.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,y=m;x!==_;++x,y+=4)a.copy(d[x]).applyMatrix4(w,s),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Od(n){let e=new WeakMap;function t(a,s){return s===To?a.mapping=Si:s===bo&&(a.mapping=Ei),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===To||s===bo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $c(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class $a extends Ya{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,ks=[.125,.215,.35,.446,.526,.582],kn=20,oo=new $a,Vs=new Je;let so=null,ao=0,lo=0;const Hn=(1+Math.sqrt(5))/2,mi=1/Hn,Ws=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Hn,mi),new O(0,Hn,-mi),new O(mi,0,Hn),new O(-mi,0,Hn),new O(Hn,mi,0),new O(-Hn,mi,0)];class Xs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=js(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(so,ao,lo),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Wi,format:tn,colorSpace:xn,depthBuffer:!1},r=qs(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qs(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(o)),this._blurMaterial=Bd(o,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,i,r){const s=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Vs),h.toneMapping=Pn,h.autoClear=!1;const m=new zo({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new Ht(new ji,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Vs),_=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):w===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const x=this._cubeSize;gr(r,w*x,u>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,s),h.render(e,s)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Si||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ys()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=js());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ws[(r-1)%Ws.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ht(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*kn-1),_=o/g,p=isFinite(o)?1+Math.floor(h*_):kn;p>kn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const u=[];let w=0;for(let R=0;R<kn;++R){const V=R/_,S=Math.exp(-V*V/2);u.push(S),R===0?w+=S:R<p&&(w+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-vi?r-x+vi:0),L=4*(this._cubeSize-y);gr(t,T,L,3*y,2*y),l.setRenderTarget(t),l.render(d,oo)}}function zd(n){const e=[],t=[],i=[];let r=n;const o=n-vi+1+ks.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let l=1/s;a>n-vi?l=ks[a-n+vi-1]:a===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,w=new Float32Array(_*g*m),x=new Float32Array(p*g*m),y=new Float32Array(u*g*m);for(let L=0;L<m;L++){const R=L%3*2/3-1,V=L>2?0:-1,S=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];w.set(S,_*g*L),x.set(f,p*g*L);const C=[L,L,L,L,L,L];y.set(C,u*g*L)}const T=new rn;T.setAttribute("position",new kt(w,_)),T.setAttribute("uv",new kt(x,p)),T.setAttribute("faceIndex",new kt(y,u)),e.push(T),r>vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qs(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bd(n,e,t){const i=new Float32Array(kn),r=new O(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function js(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ys(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function Hd(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===To||l===bo,h=l===Si||l===Ei;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Xs(n)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Xs(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",o),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Gd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kd(n,e,t,i){const r={},o=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let x=0,y=w.length;x<y;x+=3){const T=w[x+0],L=w[x+1],R=w[x+2];f.push(T,L,L,R,R,T)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,y=w.length/3-1;x<y;x+=3){const T=x+0,L=x+1,R=x+2;f.push(T,L,L,R,R,T)}}else return;const p=new(Ba(f)?qa:Xa)(f,1);p.version=_;const u=o.get(d);u&&e.remove(u),o.set(d,p)}function h(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function Vd(n,e,t,i){const r=i.isWebGL2;let o;function a(f){o=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function h(f,m){n.drawElements(o,m,s,f*l),t.update(m,o,1)}function d(f,m,g){if(g===0)return;let _,p;if(r)_=n,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](o,m,s,f*l,g),t.update(m,o,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Wd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xd(n,e){return n[0]-e[0]}function qd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function jd(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,a=new xt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=o.get(h);if(p===void 0||p.count!==_){let k=function(){Q.dispose(),o.delete(h),h.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let C=h.attributes.position.count*S,q=1;C>e.maxTextureSize&&(q=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const j=new Float32Array(C*q*4*_),Q=new ka(j,C,q,_);Q.type=Cn,Q.needsUpdate=!0;const I=S*4;for(let X=0;X<_;X++){const Y=L[X],oe=R[X],$=V[X],ee=C*q*4*X;for(let F=0;F<Y.count;F++){const z=F*I;x===!0&&(a.fromBufferAttribute(Y,F),j[ee+z+0]=a.x,j[ee+z+1]=a.y,j[ee+z+2]=a.z,j[ee+z+3]=0),y===!0&&(a.fromBufferAttribute(oe,F),j[ee+z+4]=a.x,j[ee+z+5]=a.y,j[ee+z+6]=a.z,j[ee+z+7]=0),T===!0&&(a.fromBufferAttribute($,F),j[ee+z+8]=a.x,j[ee+z+9]=a.y,j[ee+z+10]=a.z,j[ee+z+11]=$.itemSize===4?a.w:1)}}p={count:_,texture:Q,size:new Ve(C,q)},o.set(h,p),h.addEventListener("dispose",k)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const w=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[h.id]=_}for(let y=0;y<g;y++){const T=_[y];T[0]=y,T[1]=f[y]}_.sort(qd);for(let y=0;y<8;y++)y<g&&_[y][1]?(s[y][0]=_[y][0],s[y][1]=_[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(Xd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const T=s[y],L=T[0],R=T[1];L!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+y)!==p[L]&&h.setAttribute("morphTarget"+y,p[L]),u&&h.getAttribute("morphNormal"+y)!==u[L]&&h.setAttribute("morphNormal"+y,u[L]),r[y]=R,w+=R):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),u&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const x=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Yd(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const Ja=new Gt,Qa=new ka,el=new Ic,tl=new Ka,Ks=[],Zs=[],$s=new Float32Array(16),Js=new Float32Array(9),Qs=new Float32Array(4);function Ri(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Ks[r];if(o===void 0&&(o=new Float32Array(r),Ks[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ir(n,e){let t=Zs[e];t===void 0&&(t=new Int32Array(e),Zs[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function $d(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function Jd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function Qd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Qs.set(i),n.uniformMatrix2fv(this.addr,!1,Qs),gt(t,i)}}function ef(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Js.set(i),n.uniformMatrix3fv(this.addr,!1,Js),gt(t,i)}}function tf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;$s.set(i),n.uniformMatrix4fv(this.addr,!1,$s),gt(t,i)}}function nf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function af(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function uf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ja,r)}function df(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||el,r)}function ff(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tl,r)}function pf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qa,r)}function mf(n){switch(n){case 5126:return Kd;case 35664:return Zd;case 35665:return $d;case 35666:return Jd;case 35674:return Qd;case 35675:return ef;case 35676:return tf;case 5124:case 35670:return nf;case 35667:case 35671:return rf;case 35668:case 35672:return of;case 35669:case 35673:return sf;case 5125:return af;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}function gf(n,e){n.uniform1fv(this.addr,e)}function _f(n,e){const t=Ri(e,this.size,2);n.uniform2fv(this.addr,t)}function vf(n,e){const t=Ri(e,this.size,3);n.uniform3fv(this.addr,t)}function xf(n,e){const t=Ri(e,this.size,4);n.uniform4fv(this.addr,t)}function Mf(n,e){const t=Ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sf(n,e){const t=Ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ef(n,e){const t=Ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yf(n,e){n.uniform1iv(this.addr,e)}function Tf(n,e){n.uniform2iv(this.addr,e)}function bf(n,e){n.uniform3iv(this.addr,e)}function Af(n,e){n.uniform4iv(this.addr,e)}function wf(n,e){n.uniform1uiv(this.addr,e)}function Rf(n,e){n.uniform2uiv(this.addr,e)}function Cf(n,e){n.uniform3uiv(this.addr,e)}function Lf(n,e){n.uniform4uiv(this.addr,e)}function Pf(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);mt(i,o)||(n.uniform1iv(this.addr,o),gt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ja,o[a])}function Df(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);mt(i,o)||(n.uniform1iv(this.addr,o),gt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||el,o[a])}function Uf(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);mt(i,o)||(n.uniform1iv(this.addr,o),gt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tl,o[a])}function If(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);mt(i,o)||(n.uniform1iv(this.addr,o),gt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qa,o[a])}function Nf(n){switch(n){case 5126:return gf;case 35664:return _f;case 35665:return vf;case 35666:return xf;case 35674:return Mf;case 35675:return Sf;case 35676:return Ef;case 5124:case 35670:return yf;case 35667:case 35671:return Tf;case 35668:case 35672:return bf;case 35669:case 35673:return Af;case 5125:return wf;case 36294:return Rf;case 36295:return Cf;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return If}}class Ff{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=mf(t.type)}}class Of{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Nf(t.type)}}class zf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const co=/(\w+)(\])?(\[|\.)?/g;function ea(n,e){n.seq.push(e),n.map[e.id]=e}function Bf(n,e,t){const i=n.name,r=i.length;for(co.lastIndex=0;;){const o=co.exec(i),a=co.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){ea(t,c===void 0?new Ff(s,n,e):new Of(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new zf(s),ea(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Bf(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ta(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hf=37297;let Gf=0;function kf(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function Vf(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===br&&t===Tr?i="LinearDisplayP3ToLinearSRGB":e===Tr&&t===br&&(i="LinearSRGBToLinearDisplayP3"),n){case xn:case Pr:return[i,"LinearTransferOETF"];case St:case No:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function na(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+kf(n.getShaderSource(e),a)}else return r}function Wf(n,e){const t=Vf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xf(n,e){let t;switch(e){case Vl:t="Linear";break;case Wl:t="Reinhard";break;case Xl:t="OptimizedCineon";break;case ql:t="ACESFilmic";break;case jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function jf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function zi(n){return n!==""}function ia(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ra(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(n){return n.replace(Kf,$f)}const Zf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $f(n,e){let t=Ye[e];if(t===void 0){const i=Zf.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const Jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oa(n){return n.replace(Jf,Qf)}function Qf(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function sa(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ep(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ra?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function tp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case Ei:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function np(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function ip(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ca:e="ENVMAP_BLENDING_MULTIPLY";break;case Gl:e="ENVMAP_BLENDING_MIX";break;case kl:e="ENVMAP_BLENDING_ADD";break}return e}function rp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function op(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=ep(t),c=tp(t),h=np(t),d=ip(t),f=rp(t),m=t.isWebGL2?"":qf(t),g=jf(o),_=r.createProgram();let p,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),u.length>0&&(u+=`
`)):(p=[sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),u=[m,sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Xf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Wf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=Lo(a),a=ia(a,t),a=ra(a,t),s=Lo(s),s=ia(s,t),s=ra(s,t),a=oa(a),s=oa(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ts?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ts?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=w+p+a,y=w+u+s,T=ta(r,r.VERTEX_SHADER,x),L=ta(r,r.FRAGMENT_SHADER,y);r.attachShader(_,T),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(q){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(_).trim(),Q=r.getShaderInfoLog(T).trim(),I=r.getShaderInfoLog(L).trim();let k=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,L);else{const Y=na(r,T,"vertex"),oe=na(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+Y+`
`+oe)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Q===""||I==="")&&(X=!1);X&&(q.diagnostics={runnable:k,programLog:j,vertexShader:{log:Q,prefix:p},fragmentShader:{log:I,prefix:u}})}r.deleteShader(T),r.deleteShader(L),V=new Mr(r,_),S=Yf(r,_)}let V;this.getUniforms=function(){return V===void 0&&R(this),V};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,Hf)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=L,this}let sp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lp(e),t.set(e,i)),i}}class lp{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function cp(n,e,t,i,r,o,a){const s=new Va,l=new ap,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,C,q,j,Q){const I=j.fog,k=Q.geometry,X=S.isMeshStandardMaterial?j.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),oe=Y&&Y.mapping===Lr?Y.image.height:null,$=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,F=ee!==void 0?ee.length:0;let z=0;k.morphAttributes.position!==void 0&&(z=1),k.morphAttributes.normal!==void 0&&(z=2),k.morphAttributes.color!==void 0&&(z=3);let ge,_e,ne,ue;if($){const Ke=on[$];ge=Ke.vertexShader,_e=Ke.fragmentShader}else ge=S.vertexShader,_e=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const G=n.getRenderTarget(),Z=Q.isInstancedMesh===!0,xe=!!S.map,Ue=!!S.matcap,Ne=!!Y,N=!!S.aoMap,qe=!!S.lightMap,me=!!S.bumpMap,Te=!!S.normalMap,Le=!!S.displacementMap,He=!!S.emissiveMap,Ae=!!S.metalnessMap,we=!!S.roughnessMap,Ie=S.anisotropy>0,ze=S.clearcoat>0,We=S.iridescence>0,b=S.sheen>0,v=S.transmission>0,B=Ie&&!!S.anisotropyMap,ae=ze&&!!S.clearcoatMap,re=ze&&!!S.clearcoatNormalMap,ce=ze&&!!S.clearcoatRoughnessMap,Se=We&&!!S.iridescenceMap,de=We&&!!S.iridescenceThicknessMap,Me=b&&!!S.sheenColorMap,D=b&&!!S.sheenRoughnessMap,te=!!S.specularMap,J=!!S.specularColorMap,Fe=!!S.specularIntensityMap,Pe=v&&!!S.transmissionMap,Re=v&&!!S.thicknessMap,Ee=!!S.gradientMap,ye=!!S.alphaMap,Ge=S.alphaTest>0,U=!!S.alphaHash,ve=!!S.extensions,le=!!k.attributes.uv1,K=!!k.attributes.uv2,he=!!k.attributes.uv3;let De=Pn;return S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(De=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:_e,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Z,instancingColor:Z&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:xn,map:xe,matcap:Ue,envMap:Ne,envMapMode:Ne&&Y.mapping,envMapCubeUVHeight:oe,aoMap:N,lightMap:qe,bumpMap:me,normalMap:Te,displacementMap:f&&Le,emissiveMap:He,normalMapObjectSpace:Te&&S.normalMapType===sc,normalMapTangentSpace:Te&&S.normalMapType===za,metalnessMap:Ae,roughnessMap:we,anisotropy:Ie,anisotropyMap:B,clearcoat:ze,clearcoatMap:ae,clearcoatNormalMap:re,clearcoatRoughnessMap:ce,iridescence:We,iridescenceMap:Se,iridescenceThicknessMap:de,sheen:b,sheenColorMap:Me,sheenRoughnessMap:D,specularMap:te,specularColorMap:J,specularIntensityMap:Fe,transmission:v,transmissionMap:Pe,thicknessMap:Re,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===xi,alphaMap:ye,alphaTest:Ge,alphaHash:U,combine:S.combine,mapUv:xe&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:qe&&_(S.lightMap.channel),bumpMapUv:me&&_(S.bumpMap.channel),normalMapUv:Te&&_(S.normalMap.channel),displacementMapUv:Le&&_(S.displacementMap.channel),emissiveMapUv:He&&_(S.emissiveMap.channel),metalnessMapUv:Ae&&_(S.metalnessMap.channel),roughnessMapUv:we&&_(S.roughnessMap.channel),anisotropyMapUv:B&&_(S.anisotropyMap.channel),clearcoatMapUv:ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:D&&_(S.sheenRoughnessMap.channel),specularMapUv:te&&_(S.specularMap.channel),specularColorMapUv:J&&_(S.specularColorMap.channel),specularIntensityMapUv:Fe&&_(S.specularIntensityMap.channel),transmissionMapUv:Pe&&_(S.transmissionMap.channel),thicknessMapUv:Re&&_(S.thicknessMap.channel),alphaMapUv:ye&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Te||Ie),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:K,vertexUv3s:he,pointsUvs:Q.isPoints===!0&&!!k.attributes.uv&&(xe||ye),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:z,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)C.push(q),C.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(w(C,S),x(C,S),C.push(n.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function w(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function x(S,C){s.disableAll(),C.isWebGL2&&s.enable(0),C.supportsVertexTextures&&s.enable(1),C.instancing&&s.enable(2),C.instancingColor&&s.enable(3),C.matcap&&s.enable(4),C.envMap&&s.enable(5),C.normalMapObjectSpace&&s.enable(6),C.normalMapTangentSpace&&s.enable(7),C.clearcoat&&s.enable(8),C.iridescence&&s.enable(9),C.alphaTest&&s.enable(10),C.vertexColors&&s.enable(11),C.vertexAlphas&&s.enable(12),C.vertexUv1s&&s.enable(13),C.vertexUv2s&&s.enable(14),C.vertexUv3s&&s.enable(15),C.vertexTangents&&s.enable(16),C.anisotropy&&s.enable(17),C.alphaHash&&s.enable(18),S.push(s.mask),s.disableAll(),C.fog&&s.enable(0),C.useFog&&s.enable(1),C.flatShading&&s.enable(2),C.logarithmicDepthBuffer&&s.enable(3),C.skinning&&s.enable(4),C.morphTargets&&s.enable(5),C.morphNormals&&s.enable(6),C.morphColors&&s.enable(7),C.premultipliedAlpha&&s.enable(8),C.shadowMapEnabled&&s.enable(9),C.useLegacyLights&&s.enable(10),C.doubleSided&&s.enable(11),C.flipSided&&s.enable(12),C.useDepthPacking&&s.enable(13),C.dithering&&s.enable(14),C.transmission&&s.enable(15),C.sheen&&s.enable(16),C.opaque&&s.enable(17),C.pointsUvs&&s.enable(18),C.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function y(S){const C=g[S.type];let q;if(C){const j=on[C];q=jc.clone(j.uniforms)}else q=S.uniforms;return q}function T(S,C){let q;for(let j=0,Q=c.length;j<Q;j++){const I=c[j];if(I.cacheKey===C){q=I,++q.usedTimes;break}}return q===void 0&&(q=new op(n,C,S,o),c.push(q)),q}function L(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:L,releaseShaderCache:R,programs:c,dispose:V}}function hp(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function aa(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function la(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function s(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||up),i.length>1&&i.sort(f||aa),r.length>1&&r.sort(f||aa)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:h,sort:c}}function dp(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new la,n.set(i,[a])):r>=o.length?(a=new la,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function pp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mp=0;function gp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _p(n,e){const t=new fp,i=pp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new O);const o=new O,a=new ht,s=new ht;function l(h,d){let f=0,m=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,p=0,u=0,w=0,x=0,y=0,T=0,L=0,R=0,V=0,S=0;h.sort(gp);const C=d===!0?Math.PI:1;for(let j=0,Q=h.length;j<Q;j++){const I=h[j],k=I.color,X=I.intensity,Y=I.distance,oe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=k.r*X*C,m+=k.g*X*C,g+=k.b*X*C;else if(I.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(I.sh.coefficients[$],X);S++}else if(I.isDirectionalLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const ee=I.shadow,F=i.get(I);F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,r.directionalShadow[_]=F,r.directionalShadowMap[_]=oe,r.directionalShadowMatrix[_]=I.shadow.matrix,y++}r.directional[_]=$,_++}else if(I.isSpotLight){const $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(k).multiplyScalar(X*C),$.distance=Y,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,r.spot[u]=$;const ee=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,ee.updateMatrices(I),I.castShadow&&V++),r.spotLightMatrix[u]=ee.matrix,I.castShadow){const F=i.get(I);F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,r.spotShadow[u]=F,r.spotShadowMap[u]=oe,L++}u++}else if(I.isRectAreaLight){const $=t.get(I);$.color.copy(k).multiplyScalar(X),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),r.rectArea[w]=$,w++}else if(I.isPointLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*C),$.distance=I.distance,$.decay=I.decay,I.castShadow){const ee=I.shadow,F=i.get(I);F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,F.shadowCameraNear=ee.camera.near,F.shadowCameraFar=ee.camera.far,r.pointShadow[p]=F,r.pointShadowMap[p]=oe,r.pointShadowMatrix[p]=I.shadow.matrix,T++}r.point[p]=$,p++}else if(I.isHemisphereLight){const $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(X*C),$.groundColor.copy(I.groundColor).multiplyScalar(X*C),r.hemi[x]=$,x++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const q=r.hash;(q.directionalLength!==_||q.pointLength!==p||q.spotLength!==u||q.rectAreaLength!==w||q.hemiLength!==x||q.numDirectionalShadows!==y||q.numPointShadows!==T||q.numSpotShadows!==L||q.numSpotMaps!==R||q.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=w,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=L+R-V,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=S,q.directionalLength=_,q.pointLength=p,q.spotLength=u,q.rectAreaLength=w,q.hemiLength=x,q.numDirectionalShadows=y,q.numPointShadows=T,q.numSpotShadows=L,q.numSpotMaps=R,q.numLightProbes=S,r.version=mp++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let w=0,x=h.length;w<x;w++){const y=h[w];if(y.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(u),f++}else if(y.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(u),g++}else if(y.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),s.identity(),a.copy(y.matrixWorld),a.premultiply(u),s.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ca(n,e){const t=new _p(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(d){i.push(d)}function s(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function vp(n,e){let t=new WeakMap;function i(o,a=0){const s=t.get(o);let l;return s===void 0?(l=new ca(n,e),t.set(o,[l])):a>=s.length?(l=new ca(n,e),s.push(l)):l=s[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class xp extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mp extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ep=`uniform sampler2D shadow_pass;
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
}`;function yp(n,e,t){let i=new Ur;const r=new Ve,o=new Ve,a=new xt,s=new xp({depthPacking:oc}),l=new Mp,c={},h=t.maxTextureSize,d={[Un]:It,[It]:Un,[gn]:gn},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Sp,fragmentShader:Ep}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let u=this.type;this.render=function(T,L,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const V=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Ln),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=u!==pn&&this.type===pn,Q=u===pn&&this.type!==pn;for(let I=0,k=T.length;I<k;I++){const X=T[I],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const oe=Y.getFrameExtents();if(r.multiply(oe),o.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/oe.x),r.x=o.x*oe.x,Y.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/oe.y),r.y=o.y*oe.y,Y.mapSize.y=o.y)),Y.map===null||j===!0||Q===!0){const ee=this.type!==pn?{minFilter:Dt,magFilter:Dt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Zn(r.x,r.y,ee),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const $=Y.getViewportCount();for(let ee=0;ee<$;ee++){const F=Y.getViewport(ee);a.set(o.x*F.x,o.y*F.y,o.x*F.z,o.y*F.w),q.viewport(a),Y.updateMatrices(X,ee),i=Y.getFrustum(),y(L,R,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===pn&&w(Y,R),Y.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(V,S,C)};function w(T,L){const R=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,R,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,R,m,_,null)}function x(T,L,R,V){let S=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=R.isPointLight===!0?l:s,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=S.uuid,j=L.uuid;let Q=c[q];Q===void 0&&(Q={},c[q]=Q);let I=Q[j];I===void 0&&(I=S.clone(),Q[j]=I),S=I}if(S.visible=L.visible,S.wireframe=L.wireframe,V===pn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=n.properties.get(S);q.light=R}return S}function y(T,L,R,V,S){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===pn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const j=e.update(T),Q=T.material;if(Array.isArray(Q)){const I=j.groups;for(let k=0,X=I.length;k<X;k++){const Y=I[k],oe=Q[Y.materialIndex];if(oe&&oe.visible){const $=x(T,oe,V,S);n.renderBufferDirect(R,null,j,$,T,Y)}}}else if(Q.visible){const I=x(T,Q,V,S);n.renderBufferDirect(R,null,j,I,T,null)}}const q=T.children;for(let j=0,Q=q.length;j<Q;j++)y(q[j],L,R,V,S)}}function Tp(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const ve=new xt;let le=null;const K=new xt(0,0,0,0);return{setMask:function(he){le!==he&&!U&&(n.colorMask(he,he,he,he),le=he)},setLocked:function(he){U=he},setClear:function(he,De,ke,Ke,it){it===!0&&(he*=Ke,De*=Ke,ke*=Ke),ve.set(he,De,ke,Ke),K.equals(ve)===!1&&(n.clearColor(he,De,ke,Ke),K.copy(ve))},reset:function(){U=!1,le=null,K.set(-1,0,0,0)}}}function o(){let U=!1,ve=null,le=null,K=null;return{setTest:function(he){he?xe(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(he){ve!==he&&!U&&(n.depthMask(he),ve=he)},setFunc:function(he){if(le!==he){switch(he){case Il:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=he}},setLocked:function(he){U=he},setClear:function(he){K!==he&&(n.clearDepth(he),K=he)},reset:function(){U=!1,ve=null,le=null,K=null}}}function a(){let U=!1,ve=null,le=null,K=null,he=null,De=null,ke=null,Ke=null,it=null;return{setTest:function(Xe){U||(Xe?xe(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Xe){ve!==Xe&&!U&&(n.stencilMask(Xe),ve=Xe)},setFunc:function(Xe,fe,ot){(le!==Xe||K!==fe||he!==ot)&&(n.stencilFunc(Xe,fe,ot),le=Xe,K=fe,he=ot)},setOp:function(Xe,fe,ot){(De!==Xe||ke!==fe||Ke!==ot)&&(n.stencilOp(Xe,fe,ot),De=Xe,ke=fe,Ke=ot)},setLocked:function(Xe){U=Xe},setClear:function(Xe){it!==Xe&&(n.clearStencil(Xe),it=Xe)},reset:function(){U=!1,ve=null,le=null,K=null,he=null,De=null,ke=null,Ke=null,it=null}}}const s=new r,l=new o,c=new a,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,w=null,x=null,y=null,T=null,L=null,R=null,V=null,S=new Je(0,0,0),C=0,q=!1,j=null,Q=null,I=null,k=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,$=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),oe=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),oe=$>=2);let F=null,z={};const ge=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ne=new xt().fromArray(ge),ue=new xt().fromArray(_e);function G(U,ve,le,K){const he=new Uint8Array(4),De=n.createTexture();n.bindTexture(U,De),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<le;ke++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ve+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return De}const Z={};Z[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Z[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(n.DEPTH_TEST),l.setFunc(Er),Ae(!1),we(Wo),xe(n.CULL_FACE),Le(Ln);function xe(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function Ue(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Ne(U,ve){return m[U]!==ve?(n.bindFramebuffer(U,ve),m[U]=ve,i&&(U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function N(U,ve){let le=_,K=!1;if(U)if(le=g.get(ve),le===void 0&&(le=[],g.set(ve,le)),U.isWebGLMultipleRenderTargets){const he=U.texture;if(le.length!==he.length||le[0]!==n.COLOR_ATTACHMENT0){for(let De=0,ke=he.length;De<ke;De++)le[De]=n.COLOR_ATTACHMENT0+De;le.length=he.length,K=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,K=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,K=!0);K&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function qe(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const me={[Gn]:n.FUNC_ADD,[xl]:n.FUNC_SUBTRACT,[Ml]:n.FUNC_REVERSE_SUBTRACT};if(i)me[Yo]=n.MIN,me[Ko]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(me[Yo]=U.MIN_EXT,me[Ko]=U.MAX_EXT)}const Te={[Sl]:n.ZERO,[El]:n.ONE,[yl]:n.SRC_COLOR,[Eo]:n.SRC_ALPHA,[Cl]:n.SRC_ALPHA_SATURATE,[wl]:n.DST_COLOR,[bl]:n.DST_ALPHA,[Tl]:n.ONE_MINUS_SRC_COLOR,[yo]:n.ONE_MINUS_SRC_ALPHA,[Rl]:n.ONE_MINUS_DST_COLOR,[Al]:n.ONE_MINUS_DST_ALPHA,[Ll]:n.CONSTANT_COLOR,[Pl]:n.ONE_MINUS_CONSTANT_COLOR,[Dl]:n.CONSTANT_ALPHA,[Ul]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(U,ve,le,K,he,De,ke,Ke,it,Xe){if(U===Ln){u===!0&&(Ue(n.BLEND),u=!1);return}if(u===!1&&(xe(n.BLEND),u=!0),U!==vl){if(U!==w||Xe!==q){if((x!==Gn||L!==Gn)&&(n.blendEquation(n.FUNC_ADD),x=Gn,L=Gn),Xe)switch(U){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xo:n.blendFunc(n.ONE,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,T=null,R=null,V=null,S.set(0,0,0),C=0,w=U,q=Xe}return}he=he||ve,De=De||le,ke=ke||K,(ve!==x||he!==L)&&(n.blendEquationSeparate(me[ve],me[he]),x=ve,L=he),(le!==y||K!==T||De!==R||ke!==V)&&(n.blendFuncSeparate(Te[le],Te[K],Te[De],Te[ke]),y=le,T=K,R=De,V=ke),(Ke.equals(S)===!1||it!==C)&&(n.blendColor(Ke.r,Ke.g,Ke.b,it),S.copy(Ke),C=it),w=U,q=!1}function He(U,ve){U.side===gn?Ue(n.CULL_FACE):xe(n.CULL_FACE);let le=U.side===It;ve&&(le=!le),Ae(le),U.blending===xi&&U.transparent===!1?Le(Ln):Le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),s.setMask(U.colorWrite);const K=U.stencilWrite;c.setTest(K),K&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(U){j!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),j=U)}function we(U){U!==gl?(xe(n.CULL_FACE),U!==Q&&(U===Wo?n.cullFace(n.BACK):U===_l?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),Q=U}function Ie(U){U!==I&&(oe&&n.lineWidth(U),I=U)}function ze(U,ve,le){U?(xe(n.POLYGON_OFFSET_FILL),(k!==ve||X!==le)&&(n.polygonOffset(ve,le),k=ve,X=le)):Ue(n.POLYGON_OFFSET_FILL)}function We(U){U?xe(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function b(U){U===void 0&&(U=n.TEXTURE0+Y-1),F!==U&&(n.activeTexture(U),F=U)}function v(U,ve,le){le===void 0&&(F===null?le=n.TEXTURE0+Y-1:le=F);let K=z[le];K===void 0&&(K={type:void 0,texture:void 0},z[le]=K),(K.type!==U||K.texture!==ve)&&(F!==le&&(n.activeTexture(le),F=le),n.bindTexture(U,ve||Z[U]),K.type=U,K.texture=ve)}function B(){const U=z[F];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){ne.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function Re(U){ue.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function Ee(U,ve){let le=d.get(ve);le===void 0&&(le=new WeakMap,d.set(ve,le));let K=le.get(U);K===void 0&&(K=n.getUniformBlockIndex(ve,U.name),le.set(U,K))}function ye(U,ve){const K=d.get(ve).get(U);h.get(ve)!==K&&(n.uniformBlockBinding(ve,K,U.__bindingPointIndex),h.set(ve,K))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},F=null,z={},m={},g=new WeakMap,_=[],p=null,u=!1,w=null,x=null,y=null,T=null,L=null,R=null,V=null,S=new Je(0,0,0),C=0,q=!1,j=null,Q=null,I=null,k=null,X=null,ne.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:xe,disable:Ue,bindFramebuffer:Ne,drawBuffers:N,useProgram:qe,setBlending:Le,setMaterial:He,setFlipSided:Ae,setCullFace:we,setLineWidth:Ie,setPolygonOffset:ze,setScissorTest:We,activeTexture:b,bindTexture:v,unbindTexture:B,compressedTexImage2D:ae,compressedTexImage3D:re,texImage2D:J,texImage3D:Fe,updateUBOMapping:Ee,uniformBlockBinding:ye,texStorage2D:D,texStorage3D:te,texSubImage2D:ce,texSubImage3D:Se,compressedTexSubImage2D:de,compressedTexSubImage3D:Me,scissor:Pe,viewport:Re,reset:Ge}}function bp(n,e,t,i,r,o,a){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,v){return u?new OffscreenCanvas(b,v):Rr("canvas")}function x(b,v,B,ae){let re=1;if((b.width>ae||b.height>ae)&&(re=ae/Math.max(b.width,b.height)),re<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ce=v?wr:Math.floor,Se=ce(re*b.width),de=ce(re*b.height);_===void 0&&(_=w(Se,de));const Me=B?w(Se,de):_;return Me.width=Se,Me.height=de,Me.getContext("2d").drawImage(b,0,0,Se,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Se+"x"+de+")."),Me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return Co(b.width)&&Co(b.height)}function T(b){return s?!1:b.wrapS!==en||b.wrapT!==en||b.minFilter!==Dt&&b.minFilter!==Xt}function L(b,v){return b.generateMipmaps&&v&&b.minFilter!==Dt&&b.minFilter!==Xt}function R(b){n.generateMipmap(b)}function V(b,v,B,ae,re=!1){if(s===!1)return v;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=v;if(v===n.RED&&(B===n.FLOAT&&(ce=n.R32F),B===n.HALF_FLOAT&&(ce=n.R16F),B===n.UNSIGNED_BYTE&&(ce=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ce=n.R8UI),B===n.UNSIGNED_SHORT&&(ce=n.R16UI),B===n.UNSIGNED_INT&&(ce=n.R32UI),B===n.BYTE&&(ce=n.R8I),B===n.SHORT&&(ce=n.R16I),B===n.INT&&(ce=n.R32I)),v===n.RG&&(B===n.FLOAT&&(ce=n.RG32F),B===n.HALF_FLOAT&&(ce=n.RG16F),B===n.UNSIGNED_BYTE&&(ce=n.RG8)),v===n.RGBA){const Se=re?yr:nt.getTransfer(ae);B===n.FLOAT&&(ce=n.RGBA32F),B===n.HALF_FLOAT&&(ce=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ce=Se===st?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(b,v,B){return L(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==Dt&&b.minFilter!==Xt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){return b===Dt||b===Zo||b===Fr?n.NEAREST:n.LINEAR}function q(b){const v=b.target;v.removeEventListener("dispose",q),Q(v),v.isVideoTexture&&g.delete(v)}function j(b){const v=b.target;v.removeEventListener("dispose",j),k(v)}function Q(b){const v=i.get(b);if(v.__webglInit===void 0)return;const B=b.source,ae=p.get(B);if(ae){const re=ae[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(b),Object.keys(ae).length===0&&p.delete(B)}i.remove(b)}function I(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const B=b.source,ae=p.get(B);delete ae[v.__cacheKey],a.memory.textures--}function k(b){const v=b.texture,B=i.get(b),ae=i.get(v);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(B.__webglFramebuffer[re]))for(let ce=0;ce<B.__webglFramebuffer[re].length;ce++)n.deleteFramebuffer(B.__webglFramebuffer[re][ce]);else n.deleteFramebuffer(B.__webglFramebuffer[re]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[re])}else{if(Array.isArray(B.__webglFramebuffer))for(let re=0;re<B.__webglFramebuffer.length;re++)n.deleteFramebuffer(B.__webglFramebuffer[re]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let re=0;re<B.__webglColorRenderbuffer.length;re++)B.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[re]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,ce=v.length;re<ce;re++){const Se=i.get(v[re]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(v[re])}i.remove(v),i.remove(b)}let X=0;function Y(){X=0}function oe(){const b=X;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),X+=1,b}function $(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ee(b,v){const B=i.get(b);if(b.isVideoTexture&&ze(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,b,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function F(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){xe(B,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function z(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){xe(B,b,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function ge(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Ue(B,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const _e={[Ao]:n.REPEAT,[en]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},ne={[Dt]:n.NEAREST,[Zo]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},ue={[ac]:n.NEVER,[pc]:n.ALWAYS,[lc]:n.LESS,[hc]:n.LEQUAL,[cc]:n.EQUAL,[fc]:n.GEQUAL,[uc]:n.GREATER,[dc]:n.NOTEQUAL};function G(b,v,B){if(B?(n.texParameteri(b,n.TEXTURE_WRAP_S,_e[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,_e[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,_e[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ne[v.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==en||v.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,C(v.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==Dt&&v.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Dt||v.minFilter!==Fr&&v.minFilter!==Vi||v.type===Cn&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Z(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",q));const ae=v.source;let re=p.get(ae);re===void 0&&(re={},p.set(ae,re));const ce=$(v);if(ce!==b.__cacheKey){re[ce]===void 0&&(re[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),re[ce].usedTimes++;const Se=re[b.__cacheKey];Se!==void 0&&(re[b.__cacheKey].usedTimes--,Se.usedTimes===0&&I(v)),b.__cacheKey=ce,b.__webglTexture=re[ce].texture}return B}function xe(b,v,B){let ae=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=n.TEXTURE_3D);const re=Z(b,v),ce=v.source;t.bindTexture(ae,b.__webglTexture,n.TEXTURE0+B);const Se=i.get(ce);if(ce.version!==Se.__version||re===!0){t.activeTexture(n.TEXTURE0+B);const de=nt.getPrimaries(nt.workingColorSpace),Me=v.colorSpace===jt?null:nt.getPrimaries(v.colorSpace),D=v.colorSpace===jt||de===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const te=T(v)&&y(v.image)===!1;let J=x(v.image,te,!1,h);J=We(v,J);const Fe=y(J)||s,Pe=o.convert(v.format,v.colorSpace);let Re=o.convert(v.type),Ee=V(v.internalFormat,Pe,Re,v.colorSpace,v.isVideoTexture);G(ae,v,Fe);let ye;const Ge=v.mipmaps,U=s&&v.isVideoTexture!==!0,ve=Se.__version===void 0||re===!0,le=S(v,J,Fe);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT,s?v.type===Cn?Ee=n.DEPTH_COMPONENT32F:v.type===Rn?Ee=n.DEPTH_COMPONENT24:v.type===jn?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:v.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Yn&&Ee===n.DEPTH_COMPONENT&&v.type!==Io&&v.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Rn,Re=o.convert(v.type)),v.format===yi&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,v.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=jn,Re=o.convert(v.type))),ve&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Pe,Re,null));else if(v.isDataTexture)if(Ge.length>0&&Fe){U&&ve&&t.texStorage2D(n.TEXTURE_2D,le,Ee,Ge[0].width,Ge[0].height);for(let K=0,he=Ge.length;K<he;K++)ye=Ge[K],U?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,Pe,Re,ye.data):t.texImage2D(n.TEXTURE_2D,K,Ee,ye.width,ye.height,0,Pe,Re,ye.data);v.generateMipmaps=!1}else U?(ve&&t.texStorage2D(n.TEXTURE_2D,le,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Pe,Re,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Pe,Re,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ee,Ge[0].width,Ge[0].height,J.depth);for(let K=0,he=Ge.length;K<he;K++)ye=Ge[K],v.format!==tn?Pe!==null?U?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,J.depth,Pe,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ee,ye.width,ye.height,J.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,J.depth,Pe,Re,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Ee,ye.width,ye.height,J.depth,0,Pe,Re,ye.data)}else{U&&ve&&t.texStorage2D(n.TEXTURE_2D,le,Ee,Ge[0].width,Ge[0].height);for(let K=0,he=Ge.length;K<he;K++)ye=Ge[K],v.format!==tn?Pe!==null?U?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,Pe,Re,ye.data):t.texImage2D(n.TEXTURE_2D,K,Ee,ye.width,ye.height,0,Pe,Re,ye.data)}else if(v.isDataArrayTexture)U?(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Pe,Re,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,Pe,Re,J.data);else if(v.isData3DTexture)U?(ve&&t.texStorage3D(n.TEXTURE_3D,le,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Pe,Re,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,Pe,Re,J.data);else if(v.isFramebufferTexture){if(ve)if(U)t.texStorage2D(n.TEXTURE_2D,le,Ee,J.width,J.height);else{let K=J.width,he=J.height;for(let De=0;De<le;De++)t.texImage2D(n.TEXTURE_2D,De,Ee,K,he,0,Pe,Re,null),K>>=1,he>>=1}}else if(Ge.length>0&&Fe){U&&ve&&t.texStorage2D(n.TEXTURE_2D,le,Ee,Ge[0].width,Ge[0].height);for(let K=0,he=Ge.length;K<he;K++)ye=Ge[K],U?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Pe,Re,ye):t.texImage2D(n.TEXTURE_2D,K,Ee,Pe,Re,ye);v.generateMipmaps=!1}else U?(ve&&t.texStorage2D(n.TEXTURE_2D,le,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Re,J)):t.texImage2D(n.TEXTURE_2D,0,Ee,Pe,Re,J);L(v,Fe)&&R(ae),Se.__version=ce.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ue(b,v,B){if(v.image.length!==6)return;const ae=Z(b,v),re=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);const ce=i.get(re);if(re.version!==ce.__version||ae===!0){t.activeTexture(n.TEXTURE0+B);const Se=nt.getPrimaries(nt.workingColorSpace),de=v.colorSpace===jt?null:nt.getPrimaries(v.colorSpace),Me=v.colorSpace===jt||Se===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const D=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,J=[];for(let K=0;K<6;K++)!D&&!te?J[K]=x(v.image[K],!1,!0,c):J[K]=te?v.image[K].image:v.image[K],J[K]=We(v,J[K]);const Fe=J[0],Pe=y(Fe)||s,Re=o.convert(v.format,v.colorSpace),Ee=o.convert(v.type),ye=V(v.internalFormat,Re,Ee,v.colorSpace),Ge=s&&v.isVideoTexture!==!0,U=ce.__version===void 0||ae===!0;let ve=S(v,Fe,Pe);G(n.TEXTURE_CUBE_MAP,v,Pe);let le;if(D){Ge&&U&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ye,Fe.width,Fe.height);for(let K=0;K<6;K++){le=J[K].mipmaps;for(let he=0;he<le.length;he++){const De=le[he];v.format!==tn?Re!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,De.width,De.height,Re,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,ye,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,De.width,De.height,Re,Ee,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,ye,De.width,De.height,0,Re,Ee,De.data)}}}else{le=v.mipmaps,Ge&&U&&(le.length>0&&ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ye,J[0].width,J[0].height));for(let K=0;K<6;K++)if(te){Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,J[K].width,J[K].height,Re,Ee,J[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ye,J[K].width,J[K].height,0,Re,Ee,J[K].data);for(let he=0;he<le.length;he++){const ke=le[he].image[K].image;Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,ke.width,ke.height,Re,Ee,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,ye,ke.width,ke.height,0,Re,Ee,ke.data)}}else{Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,Ee,J[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ye,Re,Ee,J[K]);for(let he=0;he<le.length;he++){const De=le[he];Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Re,Ee,De.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,ye,Re,Ee,De.image[K])}}}L(v,Pe)&&R(n.TEXTURE_CUBE_MAP),ce.__version=re.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ne(b,v,B,ae,re,ce){const Se=o.convert(B.format,B.colorSpace),de=o.convert(B.type),Me=V(B.internalFormat,Se,de,B.colorSpace);if(!i.get(v).__hasExternalTextures){const te=Math.max(1,v.width>>ce),J=Math.max(1,v.height>>ce);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ce,Me,te,J,v.depth,0,Se,de,null):t.texImage2D(re,ce,Me,te,J,0,Se,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Ie(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,re,i.get(B).__webglTexture,0,we(v)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,re,i.get(B).__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(b,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let ae=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Ie(v)){const re=v.depthTexture;re&&re.isDepthTexture&&(re.type===Cn?ae=n.DEPTH_COMPONENT32F:re.type===Rn&&(ae=n.DEPTH_COMPONENT24));const ce=we(v);Ie(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,ae,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ae,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const ae=we(v);B&&Ie(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,v.width,v.height):Ie(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ae=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let re=0;re<ae.length;re++){const ce=ae[re],Se=o.convert(ce.format,ce.colorSpace),de=o.convert(ce.type),Me=V(ce.internalFormat,Se,de,ce.colorSpace),D=we(v);B&&Ie(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,Me,v.width,v.height):Ie(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,Me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const ae=i.get(v.depthTexture).__webglTexture,re=we(v);if(v.depthTexture.format===Yn)Ie(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(v.depthTexture.format===yi)Ie(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function me(b){const v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");qe(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]=n.createRenderbuffer(),N(v.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),N(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(b,v,B){const ae=i.get(b);v!==void 0&&Ne(ae.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&me(b)}function Le(b){const v=b.texture,B=i.get(b),ae=i.get(v);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=v.version,a.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,ce=b.isWebGLMultipleRenderTargets===!0,Se=y(b)||s;if(re){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(s&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let Me=0;Me<v.mipmaps.length;Me++)B.__webglFramebuffer[de][Me]=n.createFramebuffer()}else B.__webglFramebuffer[de]=n.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)B.__webglFramebuffer[de]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ce)if(r.drawBuffers){const de=b.texture;for(let Me=0,D=de.length;Me<D;Me++){const te=i.get(de[Me]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&Ie(b)===!1){const de=ce?v:[v];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Me=0;Me<de.length;Me++){const D=de[Me];B.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Me]);const te=o.convert(D.format,D.colorSpace),J=o.convert(D.type),Fe=V(D.internalFormat,te,J,D.colorSpace,b.isXRRenderTarget===!0),Pe=we(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Fe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,B.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),N(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),G(n.TEXTURE_CUBE_MAP,v,Se);for(let de=0;de<6;de++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Ne(B.__webglFramebuffer[de][Me],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else Ne(B.__webglFramebuffer[de],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);L(v,Se)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const de=b.texture;for(let Me=0,D=de.length;Me<D;Me++){const te=de[Me],J=i.get(te);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),G(n.TEXTURE_2D,te,Se),Ne(B.__webglFramebuffer,b,te,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),L(te,Se)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?de=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ae.__webglTexture),G(de,v,Se),s&&v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Ne(B.__webglFramebuffer[Me],b,v,n.COLOR_ATTACHMENT0,de,Me);else Ne(B.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,de,0);L(v,Se)&&R(de),t.unbindTexture()}b.depthBuffer&&me(b)}function He(b){const v=y(b)||s,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,re=B.length;ae<re;ae++){const ce=B[ae];if(L(ce,v)){const Se=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(ce).__webglTexture;t.bindTexture(Se,de),R(Se),t.unbindTexture()}}}function Ae(b){if(s&&b.samples>0&&Ie(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,ae=b.height;let re=n.COLOR_BUFFER_BIT;const ce=[],Se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),Me=b.isWebGLMultipleRenderTargets===!0;if(Me)for(let D=0;D<v.length;D++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let D=0;D<v.length;D++){ce.push(n.COLOR_ATTACHMENT0+D),b.depthBuffer&&ce.push(Se);const te=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(te===!1&&(b.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[D]),te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),Me){const J=i.get(v[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,ae,0,0,B,ae,re,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let D=0;D<v.length;D++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,de.__webglColorRenderbuffer[D]);const te=i.get(v[D]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function we(b){return Math.min(d,b.samples)}function Ie(b){const v=i.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ze(b){const v=a.render.frame;g.get(b)!==v&&(g.set(b,v),b.update())}function We(b,v){const B=b.colorSpace,ae=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ro||B!==xn&&B!==jt&&(nt.getTransfer(B)===st?s===!1?e.has("EXT_sRGB")===!0&&ae===tn?(b.format=Ro,b.minFilter=Xt,b.generateMipmaps=!1):v=Ha.sRGBToLinear(v):(ae!==tn||re!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=oe,this.resetTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=ge,this.rebindTextures=Te,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ie}function Ap(n,e,t){const i=t.isWebGL2;function r(o,a=jt){let s;const l=nt.getTransfer(a);if(o===Dn)return n.UNSIGNED_BYTE;if(o===Da)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Ua)return n.UNSIGNED_SHORT_5_5_5_1;if(o===Kl)return n.BYTE;if(o===Zl)return n.SHORT;if(o===Io)return n.UNSIGNED_SHORT;if(o===Pa)return n.INT;if(o===Rn)return n.UNSIGNED_INT;if(o===Cn)return n.FLOAT;if(o===Wi)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===$l)return n.ALPHA;if(o===tn)return n.RGBA;if(o===Jl)return n.LUMINANCE;if(o===Ql)return n.LUMINANCE_ALPHA;if(o===Yn)return n.DEPTH_COMPONENT;if(o===yi)return n.DEPTH_STENCIL;if(o===Ro)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===ec)return n.RED;if(o===Ia)return n.RED_INTEGER;if(o===tc)return n.RG;if(o===Na)return n.RG_INTEGER;if(o===Fa)return n.RGBA_INTEGER;if(o===Or||o===zr||o===Br||o===Hr)if(l===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$o||o===Jo||o===Qo||o===es)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===es)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===nc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ts||o===ns)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===ts)return l===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===ns)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===is||o===rs||o===os||o===ss||o===as||o===ls||o===cs||o===hs||o===us||o===ds||o===fs||o===ps||o===ms||o===gs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===is)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===rs)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===os)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ss)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===as)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ls)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===cs)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===hs)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===us)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ds)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===fs)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ps)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===ms)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===gs)return l===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Gr||o===_s||o===vs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===Gr)return l===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===_s)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===vs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===ic||o===xs||o===Ms||o===Ss)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===Gr)return s.COMPRESSED_RED_RGTC1_EXT;if(o===xs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ms)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ss)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===jn?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class wp extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Cp extends Gt{constructor(e,t,i,r,o,a,s,l,c,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yn&&(i=Rn),i===void 0&&h===yi&&(i=jn),super(null,r,o,a,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lp extends Mn{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const w=[],x=[],y=new qt;y.layers.enable(1),y.viewport=new xt;const T=new qt;T.layers.enable(2),T.viewport=new xt;const L=[y,T],R=new wp;R.layers.enable(1),R.layers.enable(2);let V=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let z=w[F];return z===void 0&&(z=new ho,w[F]=z),z.getTargetRaySpace()},this.getControllerGrip=function(F){let z=w[F];return z===void 0&&(z=new ho,w[F]=z),z.getGripSpace()},this.getHand=function(F){let z=w[F];return z===void 0&&(z=new ho,w[F]=z),z.getHandSpace()};function C(F){const z=x.indexOf(F.inputSource);if(z===-1)return;const ge=w[z];ge!==void 0&&(ge.update(F.inputSource,F.frame,c||a),ge.dispatchEvent({type:F.type,data:F.inputSource}))}function q(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let F=0;F<w.length;F++){const z=x[F];z!==null&&(x[F]=null,w[F].disconnect(z))}V=null,S=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:m}),u=new Zn(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let z=null,ge=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=_.stencil?yi:Yn,ge=_.stencil?jn:Rn);const ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),u=new Zn(f.textureWidth,f.textureHeight,{format:tn,type:Dn,depthTexture:new Cp(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ue=e.properties.get(u);ue.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(F){for(let z=0;z<F.removed.length;z++){const ge=F.removed[z],_e=x.indexOf(ge);_e>=0&&(x[_e]=null,w[_e].disconnect(ge))}for(let z=0;z<F.added.length;z++){const ge=F.added[z];let _e=x.indexOf(ge);if(_e===-1){for(let ue=0;ue<w.length;ue++)if(ue>=x.length){x.push(ge),_e=ue;break}else if(x[ue]===null){x[ue]=ge,_e=ue;break}if(_e===-1)break}const ne=w[_e];ne&&ne.connect(ge)}}const Q=new O,I=new O;function k(F,z,ge){Q.setFromMatrixPosition(z.matrixWorld),I.setFromMatrixPosition(ge.matrixWorld);const _e=Q.distanceTo(I),ne=z.projectionMatrix.elements,ue=ge.projectionMatrix.elements,G=ne[14]/(ne[10]-1),Z=ne[14]/(ne[10]+1),xe=(ne[9]+1)/ne[5],Ue=(ne[9]-1)/ne[5],Ne=(ne[8]-1)/ne[0],N=(ue[8]+1)/ue[0],qe=G*Ne,me=G*N,Te=_e/(-Ne+N),Le=Te*-Ne;z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Le),F.translateZ(Te),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const He=G+Te,Ae=Z+Te,we=qe-Le,Ie=me+(_e-Le),ze=xe*Z/Ae*He,We=Ue*Z/Ae*He;F.projectionMatrix.makePerspective(we,Ie,ze,We,He,Ae),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function X(F,z){z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;R.near=T.near=y.near=F.near,R.far=T.far=y.far=F.far,(V!==R.near||S!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,S=R.far);const z=F.parent,ge=R.cameras;X(R,z);for(let _e=0;_e<ge.length;_e++)X(ge[_e],z);ge.length===2?k(R,y,T):R.projectionMatrix.copy(y.projectionMatrix),Y(F,R,z)};function Y(F,z,ge){ge===null?F.matrix.copy(z.matrixWorld):(F.matrix.copy(ge.matrixWorld),F.matrix.invert(),F.matrix.multiply(z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(z.projectionMatrix),F.projectionMatrixInverse.copy(z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Xi*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let oe=null;function $(F,z){if(h=z.getViewerPose(c||a),g=z,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;ge.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let ne=0;ne<ge.length;ne++){const ue=ge[ne];let G=null;if(m!==null)G=m.getViewport(ue);else{const xe=d.getViewSubImage(f,ue);G=xe.viewport,ne===0&&(e.setRenderTargetTextures(u,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(u))}let Z=L[ne];Z===void 0&&(Z=new qt,Z.layers.enable(ne),Z.viewport=new xt,L[ne]=Z),Z.matrix.fromArray(ue.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ue.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(G.x,G.y,G.width,G.height),ne===0&&(R.matrix.copy(Z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(Z)}}for(let ge=0;ge<w.length;ge++){const _e=x[ge],ne=w[ge];_e!==null&&ne!==void 0&&ne.update(_e,z,c||a)}oe&&oe(F,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}const ee=new Za;ee.setAnimationLoop($),this.setAnimationLoop=function(F){oe=F},this.dispose=function(){}}}function Pp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,ja(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,w,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(p,u):u.isMeshToonMaterial?(o(p,u),d(p,u)):u.isMeshPhongMaterial?(o(p,u),h(p,u)):u.isMeshStandardMaterial?(o(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(o(p,u),g(p,u)):u.isMeshDepthMaterial?o(p,u):u.isMeshDistanceMaterial?(o(p,u),_(p,u)):u.isMeshNormalMaterial?o(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?l(p,u,w,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===It&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===It&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const w=e.get(u).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,w,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const w=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dp(n,e,t,i){let r={},o={},a=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,x){const y=x.program;i.uniformBlockBinding(w,y)}function c(w,x){let y=r[w.id];y===void 0&&(g(w),y=h(w),r[w.id]=y,w.addEventListener("dispose",p));const T=x.program;i.updateUBOMapping(w,T);const L=e.render.frame;o[w.id]!==L&&(f(w),o[w.id]=L)}function h(w){const x=d();w.__bindingPointIndex=x;const y=n.createBuffer(),T=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let w=0;w<s;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=r[w.id],y=w.uniforms,T=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let L=0,R=y.length;L<R;L++){const V=y[L];if(m(V,L,T)===!0){const S=V.__offset,C=Array.isArray(V.value)?V.value:[V.value];let q=0;for(let j=0;j<C.length;j++){const Q=C[j],I=_(Q);typeof Q=="number"?(V.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,S+q,V.__data)):Q.isMatrix3?(V.__data[0]=Q.elements[0],V.__data[1]=Q.elements[1],V.__data[2]=Q.elements[2],V.__data[3]=Q.elements[0],V.__data[4]=Q.elements[3],V.__data[5]=Q.elements[4],V.__data[6]=Q.elements[5],V.__data[7]=Q.elements[0],V.__data[8]=Q.elements[6],V.__data[9]=Q.elements[7],V.__data[10]=Q.elements[8],V.__data[11]=Q.elements[0]):(Q.toArray(V.__data,q),q+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,V.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,x,y){const T=w.value;if(y[x]===void 0){if(typeof T=="number")y[x]=T;else{const L=Array.isArray(T)?T:[T],R=[];for(let V=0;V<L.length;V++)R.push(L[V].clone());y[x]=R}return!0}else if(typeof T=="number"){if(y[x]!==T)return y[x]=T,!0}else{const L=Array.isArray(y[x])?y[x]:[y[x]],R=Array.isArray(T)?T:[T];for(let V=0;V<L.length;V++){const S=L[V];if(S.equals(R[V])===!1)return S.copy(R[V]),!0}}return!1}function g(w){const x=w.uniforms;let y=0;const T=16;let L=0;for(let R=0,V=x.length;R<V;R++){const S=x[R],C={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let j=0,Q=q.length;j<Q;j++){const I=q[j],k=_(I);C.boundary+=k.boundary,C.storage+=k.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,R>0){L=y%T;const j=T-L;L!==0&&j-C.boundary<0&&(y+=T-L,S.__offset=y)}y+=C.storage}return L=y%T,L>0&&(y+=T-L),w.__size=y,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function p(w){const x=w.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function u(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},o={}}return{bind:l,update:c,dispose:u}}class nl{constructor(e={}){const{canvas:t=Cc(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let y=!1,T=0,L=0,R=null,V=-1,S=null;const C=new xt,q=new xt;let j=null;const Q=new Je(0);let I=0,k=t.width,X=t.height,Y=1,oe=null,$=null;const ee=new xt(0,0,k,X),F=new xt(0,0,k,X);let z=!1;const ge=new Ur;let _e=!1,ne=!1,ue=null;const G=new ht,Z=new Ve,xe=new O,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return R===null?Y:1}let N=i;function qe(E,H){for(let M=0;M<E.length;M++){const A=E[M],P=t.getContext(A,H);if(P!==null)return P}return null}try{const E={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ve,!1),N===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),N=qe(H,E),N===null)throw qe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let me,Te,Le,He,Ae,we,Ie,ze,We,b,v,B,ae,re,ce,Se,de,Me,D,te,J,Fe,Pe,Re;function Ee(){me=new Gd(N),Te=new Nd(N,me,e),me.init(Te),Fe=new Ap(N,me,Te),Le=new Tp(N,me,Te),He=new Wd(N),Ae=new hp,we=new bp(N,me,Le,Ae,Te,Fe,He),Ie=new Od(x),ze=new Hd(x),We=new eh(N,Te),Pe=new Ud(N,me,We,Te),b=new kd(N,We,He,Pe),v=new Yd(N,b,We,He),D=new jd(N,Te,we),Se=new Fd(Ae),B=new cp(x,Ie,ze,me,Te,Pe,Se),ae=new Pp(x,Ae),re=new dp,ce=new vp(me,Te),Me=new Dd(x,Ie,ze,Le,v,f,l),de=new yp(x,v,Te),Re=new Dp(N,He,Te,Le),te=new Id(N,me,He,Te),J=new Vd(N,me,He,Te),He.programs=B.programs,x.capabilities=Te,x.extensions=me,x.properties=Ae,x.renderLists=re,x.shadowMap=de,x.state=Le,x.info=He}Ee();const ye=new Lp(x,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(k,X,!1))},this.getSize=function(E){return E.set(k,X)},this.setSize=function(E,H,M=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,X=H,t.width=Math.floor(E*Y),t.height=Math.floor(H*Y),M===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(k*Y,X*Y).floor()},this.setDrawingBufferSize=function(E,H,M){k=E,X=H,Y=M,t.width=Math.floor(E*M),t.height=Math.floor(H*M),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,H,M,A){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,H,M,A),Le.viewport(C.copy(ee).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(F)},this.setScissor=function(E,H,M,A){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,H,M,A),Le.scissor(q.copy(F).multiplyScalar(Y).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){Le.setScissorTest(z=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(E=!0,H=!0,M=!0){let A=0;if(E){let P=!1;if(R!==null){const W=R.texture.format;P=W===Fa||W===Na||W===Ia}if(P){const W=R.texture.type,se=W===Dn||W===Rn||W===Io||W===jn||W===Da||W===Ua,ie=Me.getClearColor(),pe=Me.getClearAlpha(),be=ie.r,Oe=ie.g,Be=ie.b;se?(m[0]=be,m[1]=Oe,m[2]=Be,m[3]=pe,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=be,g[1]=Oe,g[2]=Be,g[3]=pe,N.clearBufferiv(N.COLOR,0,g))}else A|=N.COLOR_BUFFER_BIT}H&&(A|=N.DEPTH_BUFFER_BIT),M&&(A|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),re.dispose(),ce.dispose(),Ae.dispose(),Ie.dispose(),ze.dispose(),v.dispose(),Pe.dispose(),Re.dispose(),B.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",it),ye.removeEventListener("sessionend",Xe),ue&&(ue.dispose(),ue=null),fe.stop()};function Ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=He.autoReset,H=de.enabled,M=de.autoUpdate,A=de.needsUpdate,P=de.type;Ee(),He.autoReset=E,de.enabled=H,de.autoUpdate=M,de.needsUpdate=A,de.type=P}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){const H=E.target;H.removeEventListener("dispose",le),K(H)}function K(E){he(E),Ae.remove(E)}function he(E){const H=Ae.get(E).programs;H!==void 0&&(H.forEach(function(M){B.releaseProgram(M)}),E.isShaderMaterial&&B.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,M,A,P,W){H===null&&(H=Ue);const se=P.isMesh&&P.matrixWorld.determinant()<0,ie=Ct(E,H,M,A,P);Le.setMaterial(A,se);let pe=M.index,be=1;if(A.wireframe===!0){if(pe=b.getWireframeAttribute(M),pe===void 0)return;be=2}const Oe=M.drawRange,Be=M.attributes.position;let Qe=Oe.start*be,rt=(Oe.start+Oe.count)*be;W!==null&&(Qe=Math.max(Qe,W.start*be),rt=Math.min(rt,(W.start+W.count)*be)),pe!==null?(Qe=Math.max(Qe,0),rt=Math.min(rt,pe.count)):Be!=null&&(Qe=Math.max(Qe,0),rt=Math.min(rt,Be.count));const et=rt-Qe;if(et<0||et===1/0)return;Pe.setup(P,A,ie,M,pe);let ut,tt=te;if(pe!==null&&(ut=We.get(pe),tt=J,tt.setIndex(ut)),P.isMesh)A.wireframe===!0?(Le.setLineWidth(A.wireframeLinewidth*Ne()),tt.setMode(N.LINES)):tt.setMode(N.TRIANGLES);else if(P.isLine){let je=A.linewidth;je===void 0&&(je=1),Le.setLineWidth(je*Ne()),P.isLineSegments?tt.setMode(N.LINES):P.isLineLoop?tt.setMode(N.LINE_LOOP):tt.setMode(N.LINE_STRIP)}else P.isPoints?tt.setMode(N.POINTS):P.isSprite&&tt.setMode(N.TRIANGLES);if(P.isInstancedMesh)tt.renderInstances(Qe,et,P.count);else if(M.isInstancedBufferGeometry){const je=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,In=Math.min(M.instanceCount,je);tt.renderInstances(Qe,et,In)}else tt.render(Qe,et)};function De(E,H,M){E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=It,E.needsUpdate=!0,wt(E,H,M),E.side=Un,E.needsUpdate=!0,wt(E,H,M),E.side=gn):wt(E,H,M)}this.compile=function(E,H,M=null){M===null&&(M=E),p=ce.get(M),p.init(),w.push(p),M.traverseVisible(function(P){P.isLight&&P.layers.test(H.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),E!==M&&E.traverseVisible(function(P){P.isLight&&P.layers.test(H.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights(x._useLegacyLights);const A=new Set;return E.traverse(function(P){const W=P.material;if(W)if(Array.isArray(W))for(let se=0;se<W.length;se++){const ie=W[se];De(ie,M,P),A.add(ie)}else De(W,M,P),A.add(W)}),w.pop(),p=null,A},this.compileAsync=function(E,H,M=null){const A=this.compile(E,H,M);return new Promise(P=>{function W(){if(A.forEach(function(se){Ae.get(se).currentProgram.isReady()&&A.delete(se)}),A.size===0){P(E);return}setTimeout(W,10)}me.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let ke=null;function Ke(E){ke&&ke(E)}function it(){fe.stop()}function Xe(){fe.start()}const fe=new Za;fe.setAnimationLoop(Ke),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(E){ke=E,ye.setAnimationLoop(E),E===null?fe.stop():fe.start()},ye.addEventListener("sessionstart",it),ye.addEventListener("sessionend",Xe),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,R),p=ce.get(E,w.length),p.init(),w.push(p),G.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ge.setFromProjectionMatrix(G),ne=this.localClippingEnabled,_e=Se.init(this.clippingPlanes,ne),_=re.get(E,u.length),_.init(),u.push(_),ot(E,H,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(oe,$),this.info.render.frame++,_e===!0&&Se.beginShadows();const M=p.state.shadowsArray;if(de.render(M,E,H),_e===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(_,E),p.setupLights(x._useLegacyLights),H.isArrayCamera){const A=H.cameras;for(let P=0,W=A.length;P<W;P++){const se=A[P];_t(_,E,se,se.viewport)}}else _t(_,E,H);R!==null&&(we.updateMultisampleRenderTarget(R),we.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,H),Pe.resetDefaultState(),V=-1,S=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function ot(E,H,M,A){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)M=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ge.intersectsSprite(E)){A&&xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const se=v.update(E),ie=E.material;ie.visible&&_.push(E,se,ie,M,xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ge.intersectsObject(E))){const se=v.update(E),ie=E.material;if(A&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xe.copy(E.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),xe.copy(se.boundingSphere.center)),xe.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(ie)){const pe=se.groups;for(let be=0,Oe=pe.length;be<Oe;be++){const Be=pe[be],Qe=ie[Be.materialIndex];Qe&&Qe.visible&&_.push(E,se,Qe,M,xe.z,Be)}}else ie.visible&&_.push(E,se,ie,M,xe.z,null)}}const W=E.children;for(let se=0,ie=W.length;se<ie;se++)ot(W[se],H,M,A)}function _t(E,H,M,A){const P=E.opaque,W=E.transmissive,se=E.transparent;p.setupLightsView(M),_e===!0&&Se.setGlobalState(x.clippingPlanes,M),W.length>0&&Yt(P,W,H,M),A&&Le.viewport(C.copy(A)),P.length>0&&$e(P,H,M),W.length>0&&$e(W,H,M),se.length>0&&$e(se,H,M),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Yt(E,H,M,A){if((M.isScene===!0?M.overrideMaterial:null)!==null)return;const W=Te.isWebGL2;ue===null&&(ue=new Zn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Wi:Dn,minFilter:Vi,samples:W?4:0})),x.getDrawingBufferSize(Z),W?ue.setSize(Z.x,Z.y):ue.setSize(wr(Z.x),wr(Z.y));const se=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(Q),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const ie=x.toneMapping;x.toneMapping=Pn,$e(E,M,A),we.updateMultisampleRenderTarget(ue),we.updateRenderTargetMipmap(ue);let pe=!1;for(let be=0,Oe=H.length;be<Oe;be++){const Be=H[be],Qe=Be.object,rt=Be.geometry,et=Be.material,ut=Be.group;if(et.side===gn&&Qe.layers.test(A.layers)){const tt=et.side;et.side=It,et.needsUpdate=!0,Kt(Qe,M,A,rt,et,ut),et.side=tt,et.needsUpdate=!0,pe=!0}}pe===!0&&(we.updateMultisampleRenderTarget(ue),we.updateRenderTargetMipmap(ue)),x.setRenderTarget(se),x.setClearColor(Q,I),x.toneMapping=ie}function $e(E,H,M){const A=H.isScene===!0?H.overrideMaterial:null;for(let P=0,W=E.length;P<W;P++){const se=E[P],ie=se.object,pe=se.geometry,be=A===null?se.material:A,Oe=se.group;ie.layers.test(M.layers)&&Kt(ie,H,M,pe,be,Oe)}}function Kt(E,H,M,A,P,W){E.onBeforeRender(x,H,M,A,P,W),E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.onBeforeRender(x,H,M,A,E,W),P.transparent===!0&&P.side===gn&&P.forceSinglePass===!1?(P.side=It,P.needsUpdate=!0,x.renderBufferDirect(M,H,A,P,E,W),P.side=Un,P.needsUpdate=!0,x.renderBufferDirect(M,H,A,P,E,W),P.side=gn):x.renderBufferDirect(M,H,A,P,E,W),E.onAfterRender(x,H,M,A,P,W)}function wt(E,H,M){H.isScene!==!0&&(H=Ue);const A=Ae.get(E),P=p.state.lights,W=p.state.shadowsArray,se=P.state.version,ie=B.getParameters(E,P.state,W,H,M),pe=B.getProgramCacheKey(ie);let be=A.programs;A.environment=E.isMeshStandardMaterial?H.environment:null,A.fog=H.fog,A.envMap=(E.isMeshStandardMaterial?ze:Ie).get(E.envMap||A.environment),be===void 0&&(E.addEventListener("dispose",le),be=new Map,A.programs=be);let Oe=be.get(pe);if(Oe!==void 0){if(A.currentProgram===Oe&&A.lightsStateVersion===se)return Rt(E,ie),Oe}else ie.uniforms=B.getUniforms(E),E.onBuild(M,ie,x),E.onBeforeCompile(ie,x),Oe=B.acquireProgram(ie,pe),be.set(pe,Oe),A.uniforms=ie.uniforms;const Be=A.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=Se.uniform),Rt(E,ie),A.needsLights=Et(E),A.lightsStateVersion=se,A.needsLights&&(Be.ambientLightColor.value=P.state.ambient,Be.lightProbe.value=P.state.probe,Be.directionalLights.value=P.state.directional,Be.directionalLightShadows.value=P.state.directionalShadow,Be.spotLights.value=P.state.spot,Be.spotLightShadows.value=P.state.spotShadow,Be.rectAreaLights.value=P.state.rectArea,Be.ltc_1.value=P.state.rectAreaLTC1,Be.ltc_2.value=P.state.rectAreaLTC2,Be.pointLights.value=P.state.point,Be.pointLightShadows.value=P.state.pointShadow,Be.hemisphereLights.value=P.state.hemi,Be.directionalShadowMap.value=P.state.directionalShadowMap,Be.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Be.spotShadowMap.value=P.state.spotShadowMap,Be.spotLightMatrix.value=P.state.spotLightMatrix,Be.spotLightMap.value=P.state.spotLightMap,Be.pointShadowMap.value=P.state.pointShadowMap,Be.pointShadowMatrix.value=P.state.pointShadowMatrix),A.currentProgram=Oe,A.uniformsList=null,Oe}function Nt(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Rt(E,H){const M=Ae.get(E);M.outputColorSpace=H.outputColorSpace,M.instancing=H.instancing,M.instancingColor=H.instancingColor,M.skinning=H.skinning,M.morphTargets=H.morphTargets,M.morphNormals=H.morphNormals,M.morphColors=H.morphColors,M.morphTargetsCount=H.morphTargetsCount,M.numClippingPlanes=H.numClippingPlanes,M.numIntersection=H.numClipIntersection,M.vertexAlphas=H.vertexAlphas,M.vertexTangents=H.vertexTangents,M.toneMapping=H.toneMapping}function Ct(E,H,M,A,P){H.isScene!==!0&&(H=Ue),we.resetTextureUnits();const W=H.fog,se=A.isMeshStandardMaterial?H.environment:null,ie=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xn,pe=(A.isMeshStandardMaterial?ze:Ie).get(A.envMap||se),be=A.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,Oe=!!M.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),Be=!!M.morphAttributes.position,Qe=!!M.morphAttributes.normal,rt=!!M.morphAttributes.color;let et=Pn;A.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(et=x.toneMapping);const ut=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,tt=ut!==void 0?ut.length:0,je=Ae.get(A),In=p.state.lights;if(_e===!0&&(ne===!0||E!==S)){const Mt=E===S&&A.id===V;Se.setState(A,E,Mt)}let lt=!1;A.version===je.__version?(je.needsLights&&je.lightsStateVersion!==In.state.version||je.outputColorSpace!==ie||P.isInstancedMesh&&je.instancing===!1||!P.isInstancedMesh&&je.instancing===!0||P.isSkinnedMesh&&je.skinning===!1||!P.isSkinnedMesh&&je.skinning===!0||P.isInstancedMesh&&je.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&je.instancingColor===!1&&P.instanceColor!==null||je.envMap!==pe||A.fog===!0&&je.fog!==W||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==be||je.vertexTangents!==Oe||je.morphTargets!==Be||je.morphNormals!==Qe||je.morphColors!==rt||je.toneMapping!==et||Te.isWebGL2===!0&&je.morphTargetsCount!==tt)&&(lt=!0):(lt=!0,je.__version=A.version);let Ut=je.currentProgram;lt===!0&&(Ut=wt(A,H,P));let Qn=!1,an=!1,ln=!1;const ft=Ut.getUniforms(),Ft=je.uniforms;if(Le.useProgram(Ut.program)&&(Qn=!0,an=!0,ln=!0),A.id!==V&&(V=A.id,an=!0),Qn||S!==E){ft.setValue(N,"projectionMatrix",E.projectionMatrix),ft.setValue(N,"viewMatrix",E.matrixWorldInverse);const Mt=ft.map.cameraPosition;Mt!==void 0&&Mt.setValue(N,xe.setFromMatrixPosition(E.matrixWorld)),Te.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&ft.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,an=!0,ln=!0)}if(P.isSkinnedMesh){ft.setOptional(N,P,"bindMatrix"),ft.setOptional(N,P,"bindMatrixInverse");const Mt=P.skeleton;Mt&&(Te.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),ft.setValue(N,"boneTexture",Mt.boneTexture,we),ft.setValue(N,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nn=M.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0&&Te.isWebGL2===!0)&&D.update(P,M,Ut),(an||je.receiveShadow!==P.receiveShadow)&&(je.receiveShadow=P.receiveShadow,ft.setValue(N,"receiveShadow",P.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Ft.envMap.value=pe,Ft.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),an&&(ft.setValue(N,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&at(Ft,ln),W&&A.fog===!0&&ae.refreshFogUniforms(Ft,W),ae.refreshMaterialUniforms(Ft,A,Y,X,ue),Mr.upload(N,Nt(je),Ft,we)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Mr.upload(N,Nt(je),Ft,we),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&ft.setValue(N,"center",P.center),ft.setValue(N,"modelViewMatrix",P.modelViewMatrix),ft.setValue(N,"normalMatrix",P.normalMatrix),ft.setValue(N,"modelMatrix",P.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const Mt=A.uniformsGroups;for(let Ci=0,Nr=Mt.length;Ci<Nr;Ci++)if(Te.isWebGL2){const Yi=Mt[Ci];Re.update(Yi,Ut),Re.bind(Yi,Ut)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ut}function at(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Et(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,H,M){Ae.get(E.texture).__webglTexture=H,Ae.get(E.depthTexture).__webglTexture=M;const A=Ae.get(E);A.__hasExternalTextures=!0,A.__hasExternalTextures&&(A.__autoAllocateDepthBuffer=M===void 0,A.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const M=Ae.get(E);M.__webglFramebuffer=H,M.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,M=0){R=E,T=H,L=M;let A=!0,P=null,W=!1,se=!1;if(E){const pe=Ae.get(E);pe.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(N.FRAMEBUFFER,null),A=!1):pe.__webglFramebuffer===void 0?we.setupRenderTarget(E):pe.__hasExternalTextures&&we.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(se=!0);const Oe=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?P=Oe[H][M]:P=Oe[H],W=!0):Te.isWebGL2&&E.samples>0&&we.useMultisampledRTT(E)===!1?P=Ae.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?P=Oe[M]:P=Oe,C.copy(E.viewport),q.copy(E.scissor),j=E.scissorTest}else C.copy(ee).multiplyScalar(Y).floor(),q.copy(F).multiplyScalar(Y).floor(),j=z;if(Le.bindFramebuffer(N.FRAMEBUFFER,P)&&Te.drawBuffers&&A&&Le.drawBuffers(E,P),Le.viewport(C),Le.scissor(q),Le.setScissorTest(j),W){const pe=Ae.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,pe.__webglTexture,M)}else if(se){const pe=Ae.get(E.texture),be=H||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,pe.__webglTexture,M||0,be)}V=-1},this.readRenderTargetPixels=function(E,H,M,A,P,W,se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&se!==void 0&&(ie=ie[se]),ie){Le.bindFramebuffer(N.FRAMEBUFFER,ie);try{const pe=E.texture,be=pe.format,Oe=pe.type;if(be!==tn&&Fe.convert(be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===Wi&&(me.has("EXT_color_buffer_half_float")||Te.isWebGL2&&me.has("EXT_color_buffer_float"));if(Oe!==Dn&&Fe.convert(Oe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Cn&&(Te.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-A&&M>=0&&M<=E.height-P&&N.readPixels(H,M,A,P,Fe.convert(be),Fe.convert(Oe),W)}finally{const pe=R!==null?Ae.get(R).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(E,H,M=0){const A=Math.pow(2,-M),P=Math.floor(H.image.width*A),W=Math.floor(H.image.height*A);we.setTexture2D(H,0),N.copyTexSubImage2D(N.TEXTURE_2D,M,0,0,E.x,E.y,P,W),Le.unbindTexture()},this.copyTextureToTexture=function(E,H,M,A=0){const P=H.image.width,W=H.image.height,se=Fe.convert(M.format),ie=Fe.convert(M.type);we.setTexture2D(M,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,M.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,M.unpackAlignment),H.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,A,E.x,E.y,P,W,se,ie,H.image.data):H.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,A,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,se,H.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,A,E.x,E.y,se,ie,H.image),A===0&&M.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,H,M,A,P=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const W=E.max.x-E.min.x+1,se=E.max.y-E.min.y+1,ie=E.max.z-E.min.z+1,pe=Fe.convert(A.format),be=Fe.convert(A.type);let Oe;if(A.isData3DTexture)we.setTexture3D(A,0),Oe=N.TEXTURE_3D;else if(A.isDataArrayTexture)we.setTexture2DArray(A,0),Oe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,A.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,A.unpackAlignment);const Be=N.getParameter(N.UNPACK_ROW_LENGTH),Qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),rt=N.getParameter(N.UNPACK_SKIP_PIXELS),et=N.getParameter(N.UNPACK_SKIP_ROWS),ut=N.getParameter(N.UNPACK_SKIP_IMAGES),tt=M.isCompressedTexture?M.mipmaps[0]:M.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,tt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Oe,P,H.x,H.y,H.z,W,se,ie,pe,be,tt.data):M.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Oe,P,H.x,H.y,H.z,W,se,ie,pe,tt.data)):N.texSubImage3D(Oe,P,H.x,H.y,H.z,W,se,ie,pe,be,tt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Be),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,rt),N.pixelStorei(N.UNPACK_SKIP_ROWS,et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ut),P===0&&A.generateMipmaps&&N.generateMipmap(Oe),Le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?we.setTextureCube(E,0):E.isData3DTexture?we.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?we.setTexture2DArray(E,0):we.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){T=0,L=0,R=null,Le.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===No?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Pr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Kn:Oa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?St:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Up extends nl{}Up.prototype.isWebGL1Renderer=!0;class Ip extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Cr extends kt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new ht,ha=new ht,_r=[],ua=new Jn,Np=new ht,Ii=new Ht,Ni=new Ai;class Fp extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),ua.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(ua)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),Ni.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Ni)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(i),e.ray.intersectsSphere(Ni)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,gi),ha.multiplyMatrices(i,gi),Ii.matrixWorld=ha,Ii.raycast(e,_r);for(let a=0,s=_r.length;a<s;a++){const l=_r[a];l.instanceId=o,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new O,fa=new O,pa=new ht,uo=new Oo,vr=new Ai;class Fi extends dt{constructor(e=new rn,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)da.fromBufferAttribute(t,r-1),fa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=da.distanceTo(fa);e.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),vr.radius+=o,e.ray.intersectsSphere(vr)===!1)return;pa.copy(r).invert(),uo.copy(e.ray).applyMatrix4(pa);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new O,h=new O,d=new O,f=new O,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const u=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let x=u,y=w-1;x<y;x+=m){const T=g.getX(x),L=g.getX(x+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,L),uo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(f);V<e.near||V>e.far||t.push({distance:V,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),w=Math.min(p.count,a.start+a.count);for(let x=u,y=w-1;x<y;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),uo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}class Vn extends rn{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+s,Math.PI);let c=0;const h=[],d=new O,f=new O,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const w=[],x=u/i;let y=0;u===0&&a===0?y=.5/t:u===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const L=T/t;d.x=-e*Math.cos(r+L*o)*Math.sin(a+x*s),d.y=e*Math.cos(a+x*s),d.z=e*Math.sin(r+L*o)*Math.sin(a+x*s),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(L+y,1-x),w.push(c++)}h.push(w)}for(let u=0;u<i;u++)for(let w=0;w<t;w++){const x=h[u][w+1],y=h[u][w],T=h[u+1][w],L=h[u+1][w+1];(u!==0||a>0)&&m.push(x,y,L),(u!==i-1||l<Math.PI)&&m.push(y,T,L)}this.setIndex(m),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fo extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Go extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Op extends Go{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const po=new ht,ma=new O,ga=new O;class zp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ma.setFromMatrixPosition(e.matrixWorld),t.position.copy(ma),ga.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ga),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bp extends zp{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends Go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gp extends Go{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_a(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_a();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _a(){return(typeof performance>"u"?Date:performance).now()}class Po{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);const va={type:"change"},mo={type:"start"},xa={type:"end"},xr=new Oo,Ma=new wn,Vp=Math.cos(70*mn.DEG2RAD);class il extends Mn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wt.ROTATE,MIDDLE:Wt.DOLLY,RIGHT:Wt.PAN},this.touches={ONE:An.ROTATE,TWO:An.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",v),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(va),i.update(),o=r.NONE},this.update=function(){const D=new O,te=new sn().setFromUnitVectors(e.up,new O(0,1,0)),J=te.clone().invert(),Fe=new O,Pe=new sn,Re=new O,Ee=2*Math.PI;return function(Ge=null){const U=i.object.position;D.copy(U).sub(i.target),D.applyQuaternion(te),s.setFromVector3(D),i.autoRotate&&o===r.NONE&&q(S(Ge)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let ve=i.minAzimuthAngle,le=i.maxAzimuthAngle;isFinite(ve)&&isFinite(le)&&(ve<-Math.PI?ve+=Ee:ve>Math.PI&&(ve-=Ee),le<-Math.PI?le+=Ee:le>Math.PI&&(le-=Ee),ve<=le?s.theta=Math.max(ve,Math.min(le,s.theta)):s.theta=s.theta>(ve+le)/2?Math.max(ve,s.theta):Math.min(le,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&L||i.object.isOrthographicCamera?s.radius=$(s.radius):s.radius=$(s.radius*c),D.setFromSpherical(s),D.applyQuaternion(J),U.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let K=!1;if(i.zoomToCursor&&L){let he=null;if(i.object.isPerspectiveCamera){const De=D.length();he=$(De*c);const ke=De-he;i.object.position.addScaledVector(y,ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const De=new O(T.x,T.y,0);De.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),K=!0;const ke=new O(T.x,T.y,0);ke.unproject(i.object),i.object.position.sub(ke).add(De),i.object.updateMatrixWorld(),he=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(he).add(i.object.position):(xr.origin.copy(i.object.position),xr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xr.direction))<Vp?e.lookAt(i.target):(Ma.setFromNormalAndCoplanarPoint(i.object.up,i.target),xr.intersectPlane(Ma,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),K=!0);return c=1,L=!1,K||Fe.distanceToSquared(i.object.position)>a||8*(1-Pe.dot(i.object.quaternion))>a||Re.distanceToSquared(i.target)>0?(i.dispatchEvent(va),Fe.copy(i.object.position),Pe.copy(i.object.quaternion),Re.copy(i.target),K=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",re),i.domElement.removeEventListener("pointerdown",Ae),i.domElement.removeEventListener("pointercancel",Ie),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Ie),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new Po,l=new Po;let c=1;const h=new O,d=new Ve,f=new Ve,m=new Ve,g=new Ve,_=new Ve,p=new Ve,u=new Ve,w=new Ve,x=new Ve,y=new O,T=new Ve;let L=!1;const R=[],V={};function S(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function C(){return Math.pow(.95,i.zoomSpeed)}function q(D){l.theta-=D}function j(D){l.phi-=D}const Q=function(){const D=new O;return function(J,Fe){D.setFromMatrixColumn(Fe,0),D.multiplyScalar(-J),h.add(D)}}(),I=function(){const D=new O;return function(J,Fe){i.screenSpacePanning===!0?D.setFromMatrixColumn(Fe,1):(D.setFromMatrixColumn(Fe,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(J),h.add(D)}}(),k=function(){const D=new O;return function(J,Fe){const Pe=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;D.copy(Re).sub(i.target);let Ee=D.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*J*Ee/Pe.clientHeight,i.object.matrix),I(2*Fe*Ee/Pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(J*(i.object.right-i.object.left)/i.object.zoom/Pe.clientWidth,i.object.matrix),I(Fe*(i.object.top-i.object.bottom)/i.object.zoom/Pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function oe(D){if(!i.zoomToCursor)return;L=!0;const te=i.domElement.getBoundingClientRect(),J=D.clientX-te.left,Fe=D.clientY-te.top,Pe=te.width,Re=te.height;T.x=J/Pe*2-1,T.y=-(Fe/Re)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function ee(D){d.set(D.clientX,D.clientY)}function F(D){oe(D),u.set(D.clientX,D.clientY)}function z(D){g.set(D.clientX,D.clientY)}function ge(D){f.set(D.clientX,D.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const te=i.domElement;q(2*Math.PI*m.x/te.clientHeight),j(2*Math.PI*m.y/te.clientHeight),d.copy(f),i.update()}function _e(D){w.set(D.clientX,D.clientY),x.subVectors(w,u),x.y>0?X(C()):x.y<0&&Y(C()),u.copy(w),i.update()}function ne(D){_.set(D.clientX,D.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),k(p.x,p.y),g.copy(_),i.update()}function ue(D){oe(D),D.deltaY<0?Y(C()):D.deltaY>0&&X(C()),i.update()}function G(D){let te=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),te=!0;break}te&&(D.preventDefault(),i.update())}function Z(){if(R.length===1)d.set(R[0].pageX,R[0].pageY);else{const D=.5*(R[0].pageX+R[1].pageX),te=.5*(R[0].pageY+R[1].pageY);d.set(D,te)}}function xe(){if(R.length===1)g.set(R[0].pageX,R[0].pageY);else{const D=.5*(R[0].pageX+R[1].pageX),te=.5*(R[0].pageY+R[1].pageY);g.set(D,te)}}function Ue(){const D=R[0].pageX-R[1].pageX,te=R[0].pageY-R[1].pageY,J=Math.sqrt(D*D+te*te);u.set(0,J)}function Ne(){i.enableZoom&&Ue(),i.enablePan&&xe()}function N(){i.enableZoom&&Ue(),i.enableRotate&&Z()}function qe(D){if(R.length==1)f.set(D.pageX,D.pageY);else{const J=Me(D),Fe=.5*(D.pageX+J.x),Pe=.5*(D.pageY+J.y);f.set(Fe,Pe)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const te=i.domElement;q(2*Math.PI*m.x/te.clientHeight),j(2*Math.PI*m.y/te.clientHeight),d.copy(f)}function me(D){if(R.length===1)_.set(D.pageX,D.pageY);else{const te=Me(D),J=.5*(D.pageX+te.x),Fe=.5*(D.pageY+te.y);_.set(J,Fe)}p.subVectors(_,g).multiplyScalar(i.panSpeed),k(p.x,p.y),g.copy(_)}function Te(D){const te=Me(D),J=D.pageX-te.x,Fe=D.pageY-te.y,Pe=Math.sqrt(J*J+Fe*Fe);w.set(0,Pe),x.set(0,Math.pow(w.y/u.y,i.zoomSpeed)),X(x.y),u.copy(w)}function Le(D){i.enableZoom&&Te(D),i.enablePan&&me(D)}function He(D){i.enableZoom&&Te(D),i.enableRotate&&qe(D)}function Ae(D){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",we),i.domElement.addEventListener("pointerup",Ie)),ce(D),D.pointerType==="touch"?B(D):ze(D))}function we(D){i.enabled!==!1&&(D.pointerType==="touch"?ae(D):We(D))}function Ie(D){Se(D),R.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Ie)),i.dispatchEvent(xa),o=r.NONE}function ze(D){let te;switch(D.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Wt.DOLLY:if(i.enableZoom===!1)return;F(D),o=r.DOLLY;break;case Wt.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;z(D),o=r.PAN}else{if(i.enableRotate===!1)return;ee(D),o=r.ROTATE}break;case Wt.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;ee(D),o=r.ROTATE}else{if(i.enablePan===!1)return;z(D),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(mo)}function We(D){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;ge(D);break;case r.DOLLY:if(i.enableZoom===!1)return;_e(D);break;case r.PAN:if(i.enablePan===!1)return;ne(D);break}}function b(D){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(D.preventDefault(),i.dispatchEvent(mo),ue(D),i.dispatchEvent(xa))}function v(D){i.enabled===!1||i.enablePan===!1||G(D)}function B(D){switch(de(D),R.length){case 1:switch(i.touches.ONE){case An.ROTATE:if(i.enableRotate===!1)return;Z(),o=r.TOUCH_ROTATE;break;case An.PAN:if(i.enablePan===!1)return;xe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case An.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ne(),o=r.TOUCH_DOLLY_PAN;break;case An.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(mo)}function ae(D){switch(de(D),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;qe(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;He(D),i.update();break;default:o=r.NONE}}function re(D){i.enabled!==!1&&D.preventDefault()}function ce(D){R.push(D)}function Se(D){delete V[D.pointerId];for(let te=0;te<R.length;te++)if(R[te].pointerId==D.pointerId){R.splice(te,1);return}}function de(D){let te=V[D.pointerId];te===void 0&&(te=new Ve,V[D.pointerId]=te),te.set(D.pageX,D.pageY)}function Me(D){const te=D.pointerId===R[0].pointerId?R[1]:R[0];return V[te.pointerId]}i.domElement.addEventListener("contextmenu",re),i.domElement.addEventListener("pointerdown",Ae),i.domElement.addEventListener("pointercancel",Ie),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var At=Math.PI,ct=At*2,Bi=At/180,Wp=180/At,Xp=1440,qp=398600.8,Bt=6378.135,vn=60/Math.sqrt(Bt*Bt*Bt/qp),go=Bt*vn/60,jp=1/vn,Xn=.001082616,Yp=-253881e-11,Kp=-165597e-11,qn=Yp/Xn,qi=2/3;function Zp(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,o=0;i>o+t[r-1]&&r<12;)o+=t[r-1],r+=1;var a=r,s=i-o,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:a,day:s,hr:c,minute:h,sec:d}}function Sa(n,e,t,i,r,o){var a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((a/6e4+o/60+r)/60+i)/24}function ko(n,e,t,i,r,o,a){if(n instanceof Date){var s=n;return Sa(s.getUTCFullYear(),s.getUTCMonth()+1,s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return Sa(n,e,t,i,r,o,a)}function rl(n,e){var t=n.e3,i=n.ee2,r=n.peo,o=n.pgho,a=n.pho,s=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,g=n.sh2,_=n.sh3,p=n.si2,u=n.si3,w=n.sl2,x=n.sl3,y=n.sl4,T=n.t,L=n.xgh2,R=n.xgh3,V=n.xgh4,S=n.xh2,C=n.xh3,q=n.xi2,j=n.xi3,Q=n.xl2,I=n.xl3,k=n.xl4,X=n.zmol,Y=n.zmos,oe=e.init,$=e.opsmode,ee=e.ep,F=e.inclp,z=e.nodep,ge=e.argpp,_e=e.mp,ne,ue,G,Z,xe,Ue,Ne,N,qe,me,Te,Le,He,Ae,we,Ie,ze,We,b,v,B,ae=119459e-10,re=.01675,ce=.00015835218,Se=.0549;B=Y+ae*T,oe==="y"&&(B=Y),v=B+2*re*Math.sin(B),ze=Math.sin(v),me=.5*ze*ze-.25,Te=-.5*ze*Math.cos(v);var de=c*me+h*Te,Me=p*me+u*Te,D=w*me+x*Te+y*ze,te=d*me+f*Te+m*ze,J=g*me+_*Te;B=X+ce*T,oe==="y"&&(B=X),v=B+2*Se*Math.sin(B),ze=Math.sin(v),me=.5*ze*ze-.25,Te=-.5*ze*Math.cos(v);var Fe=i*me+t*Te,Pe=q*me+j*Te,Re=Q*me+I*Te+k*ze,Ee=L*me+R*Te+V*ze,ye=S*me+C*Te;return Le=de+Fe,we=Me+Pe,Ie=D+Re,He=te+Ee,Ae=J+ye,oe==="n"&&(Le-=r,we-=s,Ie-=l,He-=o,Ae-=a,F+=we,ee+=Le,Z=Math.sin(F),G=Math.cos(F),F>=.2?(Ae/=Z,He-=G*Ae,ge+=He,z+=Ae,_e+=Ie):(Ue=Math.sin(z),xe=Math.cos(z),ne=Z*Ue,ue=Z*xe,Ne=Ae*xe+we*G*Ue,N=-Ae*Ue+we*G*xe,ne+=Ne,ue+=N,z%=ct,z<0&&$==="a"&&(z+=ct),We=_e+ge+G*z,qe=Ie+He-we*z*Z,We+=qe,b=z,z=Math.atan2(ne,ue),z<0&&$==="a"&&(z+=ct),Math.abs(b-z)>At&&(z<b?z+=ct:z-=ct),_e+=Ie,ge=We-_e-G*z)),{ep:ee,inclp:F,nodep:z,argpp:ge,mp:_e}}function $p(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,o=n.inclp,a=n.nodep,s=n.np,l,c,h,d,f,m,g,_,p,u,w,x,y,T,L,R,V,S,C,q,j,Q,I,k,X,Y,oe,$,ee,F,z,ge,_e,ne,ue,G,Z,xe,Ue,Ne,N,qe,me,Te,Le,He,Ae,we,Ie,ze,We,b,v,B,ae,re,ce,Se,de,Me,D,te,J,Fe=.01675,Pe=.0549,Re=29864797e-13,Ee=47968065e-14,ye=.39785416,Ge=.91744867,U=.1945905,ve=-.98088458,le=s,K=t,he=Math.sin(a),De=Math.cos(a),ke=Math.sin(i),Ke=Math.cos(i),it=Math.sin(o),Xe=Math.cos(o),fe=K*K,ot=1-fe,_t=Math.sqrt(ot),Yt=0,$e=0,Kt=0,wt=0,Nt=0,Rt=e+18261.5+r/1440,Ct=(4.523602-.00092422029*Rt)%ct,at=Math.sin(Ct),Et=Math.cos(Ct),E=.91375164-.03568096*Et,H=Math.sqrt(1-E*E),M=.089683511*at/H,A=Math.sqrt(1-M*M),P=5.8351514+.001944368*Rt,W=.39785416*at/H,se=A*Et+.91744867*M*at;W=Math.atan2(W,se),W+=P-Ct;var ie=Math.cos(W),pe=Math.sin(W);q=U,j=ve,k=Ge,X=ye,Q=De,I=he,w=Re;for(var be=1/le,Oe=0;Oe<2;)Oe+=1,l=q*Q+j*k*I,h=-j*Q+q*k*I,g=-q*I+j*k*Q,_=j*X,p=j*I+q*k*Q,u=q*X,c=Xe*g+it*_,d=Xe*p+it*u,f=-it*g+Xe*_,m=-it*p+Xe*u,x=l*Ke+c*ke,y=h*Ke+d*ke,T=-l*ke+c*Ke,L=-h*ke+d*Ke,R=f*ke,V=m*ke,S=f*Ke,C=m*Ke,D=12*x*x-3*T*T,te=24*x*y-6*T*L,J=12*y*y-3*L*L,b=3*(l*l+c*c)+D*fe,v=6*(l*h+c*d)+te*fe,B=3*(h*h+d*d)+J*fe,ae=-6*l*f+fe*(-24*x*S-6*T*R),re=-6*(l*m+h*f)+fe*(-24*(y*S+x*C)+-6*(T*V+L*R)),ce=-6*h*m+fe*(-24*y*C-6*L*V),Se=6*c*f+fe*(24*x*R-6*T*S),de=6*(d*f+c*m)+fe*(24*(y*R+x*V)-6*(L*S+T*C)),Me=6*d*m+fe*(24*y*V-6*L*C),b=b+b+ot*D,v=v+v+ot*te,B=B+B+ot*J,Ae=w*be,He=-.5*Ae/_t,we=Ae*_t,Le=-15*K*we,Ie=x*T+y*L,ze=y*T+x*L,We=y*L-x*T,Oe===1&&(Y=Le,oe=He,$=Ae,ee=we,F=Ie,z=ze,ge=We,_e=b,ne=v,ue=B,G=ae,Z=re,xe=ce,Ue=Se,Ne=de,N=Me,qe=D,me=te,Te=J,q=ie,j=pe,k=E,X=H,Q=A*De+M*he,I=he*A-De*M,w=Ee);var Be=(4.7199672+(.2299715*Rt-P))%ct,Qe=(6.2565837+.017201977*Rt)%ct,rt=2*Y*z,et=2*Y*ge,ut=2*oe*Z,tt=2*oe*(xe-G),je=-2*$*ne,In=-2*$*(ue-_e),lt=-2*$*(-21-9*fe)*Fe,Ut=2*ee*me,Qn=2*ee*(Te-qe),an=-18*ee*Fe,ln=-2*oe*Ne,ft=-2*oe*(N-Ue),Ft=2*Le*ze,Nn=2*Le*We,Mt=2*He*re,Ci=2*He*(ce-ae),Nr=-2*Ae*v,Yi=-2*Ae*(B-b),hl=-2*Ae*(-21-9*fe)*Pe,ul=2*we*te,dl=2*we*(J-D),fl=-18*we*Pe,pl=-2*He*de,ml=-2*He*(Me-Se);return{snodm:he,cnodm:De,sinim:it,cosim:Xe,sinomm:ke,cosomm:Ke,day:Rt,e3:Nn,ee2:Ft,em:K,emsq:fe,gam:P,peo:Yt,pgho:wt,pho:Nt,pinco:$e,plo:Kt,rtemsq:_t,se2:rt,se3:et,sgh2:Ut,sgh3:Qn,sgh4:an,sh2:ln,sh3:ft,si2:ut,si3:tt,sl2:je,sl3:In,sl4:lt,s1:Le,s2:He,s3:Ae,s4:we,s5:Ie,s6:ze,s7:We,ss1:Y,ss2:oe,ss3:$,ss4:ee,ss5:F,ss6:z,ss7:ge,sz1:_e,sz2:ne,sz3:ue,sz11:G,sz12:Z,sz13:xe,sz21:Ue,sz22:Ne,sz23:N,sz31:qe,sz32:me,sz33:Te,xgh2:ul,xgh3:dl,xgh4:fl,xh2:pl,xh3:ml,xi2:Mt,xi3:Ci,xl2:Nr,xl3:Yi,xl4:hl,nm:le,z1:b,z2:v,z3:B,z11:ae,z12:re,z13:ce,z21:Se,z22:de,z23:Me,z31:D,z32:te,z33:J,zmol:Be,zmos:Qe}}function Jp(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,o=n.s3,a=n.s4,s=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,g=n.sz1,_=n.sz3,p=n.sz11,u=n.sz13,w=n.sz21,x=n.sz23,y=n.sz31,T=n.sz33,L=n.t,R=n.tc,V=n.gsto,S=n.mo,C=n.mdot,q=n.no,j=n.nodeo,Q=n.nodedot,I=n.xpidot,k=n.z1,X=n.z3,Y=n.z11,oe=n.z13,$=n.z21,ee=n.z23,F=n.z31,z=n.z33,ge=n.ecco,_e=n.eccsq,ne=n.emsq,ue=n.em,G=n.argpm,Z=n.inclm,xe=n.mm,Ue=n.nm,Ne=n.nodem,N=n.irez,qe=n.atime,me=n.d2201,Te=n.d2211,Le=n.d3210,He=n.d3222,Ae=n.d4410,we=n.d4422,Ie=n.d5220,ze=n.d5232,We=n.d5421,b=n.d5433,v=n.dedt,B=n.didt,ae=n.dmdt,re=n.dnodt,ce=n.domdt,Se=n.del1,de=n.del2,Me=n.del3,D=n.xfact,te=n.xlamo,J=n.xli,Fe=n.xni,Pe,Re,Ee,ye,Ge,U,ve,le,K,he,De,ke,Ke,it,Xe,fe,ot,_t,Yt,$e,Kt,wt,Nt,Rt,Ct,at,Et,E,H,M,A,P,W=17891679e-13,se=21460748e-13,ie=22123015e-14,pe=17891679e-13,be=73636953e-16,Oe=21765803e-16,Be=.0043752690880113,Qe=37393792e-14,rt=11428639e-14,et=.00015835218,ut=119459e-10;N=0,Ue<.0052359877&&Ue>.0034906585&&(N=1),Ue>=.00826&&Ue<=.00924&&ue>=.5&&(N=2);var tt=c*ut*m,je=h*ut*(p+u),In=-ut*d*(g+_-14-6*ne),lt=f*ut*(y+T-6),Ut=-ut*h*(w+x);(Z<.052359877||Z>At-.052359877)&&(Ut=0),l!==0&&(Ut/=l);var Qn=lt-e*Ut;v=tt+i*et*s,B=je+r*et*(Y+oe),ae=In-et*o*(k+X-14-6*ne);var an=a*et*(F+z-6),ln=-et*r*($+ee);(Z<.052359877||Z>At-.052359877)&&(ln=0),ce=Qn+an,re=Ut,l!==0&&(ce-=e/l*ln,re+=ln/l);var ft=0,Ft=(V+R*Be)%ct;if(ue+=v*L,Z+=B*L,G+=ce*L,Ne+=re*L,xe+=ae*L,N!==0){if(M=Math.pow(Ue/vn,qi),N===2){A=e*e;var Nn=ue;ue=ge;var Mt=ne;ne=_e,P=ue*ne,it=-.306-(ue-.64)*.44,ue<=.65?(Xe=3.616-13.247*ue+16.29*ne,ot=-19.302+117.39*ue-228.419*ne+156.591*P,_t=-18.9068+109.7927*ue-214.6334*ne+146.5816*P,Yt=-41.122+242.694*ue-471.094*ne+313.953*P,$e=-146.407+841.88*ue-1629.014*ne+1083.435*P,Kt=-532.114+3017.977*ue-5740.032*ne+3708.276*P):(Xe=-72.099+331.819*ue-508.738*ne+266.724*P,ot=-346.844+1582.851*ue-2415.925*ne+1246.113*P,_t=-342.585+1554.908*ue-2366.899*ne+1215.972*P,Yt=-1052.797+4758.686*ue-7193.992*ne+3651.957*P,$e=-3581.69+16178.11*ue-24462.77*ne+12422.52*P,ue>.715?Kt=-5149.66+29936.92*ue-54087.36*ne+31324.56*P:Kt=1464.74-4664.75*ue+3763.64*ne),ue<.7?(Rt=-919.2277+4988.61*ue-9064.77*ne+5542.21*P,wt=-822.71072+4568.6173*ue-8491.4146*ne+5337.524*P,Nt=-853.666+4690.25*ue-8624.77*ne+5341.4*P):(Rt=-37995.78+161616.52*ue-229838.2*ne+109377.94*P,wt=-51752.104+218913.95*ue-309468.16*ne+146349.42*P,Nt=-40023.88+170470.89*ue-242699.48*ne+115605.82*P),Ct=l*l,Pe=.75*(1+2*e+A),Re=1.5*Ct,ye=1.875*l*(1-2*e-3*A),Ge=-1.875*l*(1+2*e-3*A),ve=35*Ct*Pe,le=39.375*Ct*Ct,K=9.84375*l*(Ct*(1-2*e-5*A)+.33333333*(-2+4*e+6*A)),he=l*(4.92187512*Ct*(-2-4*e+10*A)+6.56250012*(1+2*e-3*A)),De=29.53125*l*(2-8*e+A*(-12+8*e+10*A)),ke=29.53125*l*(-2-8*e+A*(12+8*e-10*A)),E=Ue*Ue,H=M*M,Et=3*E*H,at=Et*pe,me=at*Pe*it,Te=at*Re*Xe,Et*=M,at=Et*Qe,Le=at*ye*ot,He=at*Ge*_t,Et*=M,at=2*Et*be,Ae=at*ve*Yt,we=at*le*$e,Et*=M,at=Et*rt,Ie=at*K*Kt,ze=at*he*Nt,at=2*Et*Oe,We=at*De*wt,b=at*ke*Rt,te=(S+j+j-(Ft+Ft))%ct,D=C+ae+2*(Q+re-Be)-q,ue=Nn,ne=Mt}N===1&&(Ke=1+ne*(-2.5+.8125*ne),ot=1+2*ne,fe=1+ne*(-6+6.60937*ne),Pe=.75*(1+e)*(1+e),Ee=.9375*l*l*(1+3*e)-.75*(1+e),U=1+e,U*=1.875*U*U,Se=3*Ue*Ue*M*M,de=2*Se*Pe*Ke*W,Me=3*Se*U*fe*ie*M,Se=Se*Ee*ot*se*M,te=(S+j+t-Ft)%ct,D=C+I+ae+ce+re-(q+Be)),J=te,Fe=q,qe=0,Ue=q+ft}return{em:ue,argpm:G,inclm:Z,mm:xe,nm:Ue,nodem:Ne,irez:N,atime:qe,d2201:me,d2211:Te,d3210:Le,d3222:He,d4410:Ae,d4422:we,d5220:Ie,d5232:ze,d5421:We,d5433:b,dedt:v,didt:B,dmdt:ae,dndt:ft,dnodt:re,domdt:ce,del1:Se,del2:de,del3:Me,xfact:D,xlamo:te,xli:J,xni:Fe}}function Ea(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Bi/240%ct,t<0&&(t+=ct),t}function ol(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?Ea(ko.apply(void 0,arguments)):Ea.apply(void 0,arguments)}function Qp(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,o=n.no,a=e*e,s=1-a,l=Math.sqrt(s),c=Math.cos(i),h=c*c,d=Math.pow(vn/o,qi),f=.75*Xn*(3*h-1)/(l*s),m=f/(d*d),g=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(g*g),o/=1+m;var _=Math.pow(vn/o,qi),p=Math.sin(i),u=_*s,w=1-5*h,x=-w-h-h,y=1/_,T=u*u,L=_*(1-e),R="n",V;if(r==="a"){var S=t-7305,C=Math.floor(S+1e-8),q=S-C,j=.017202791694070362,Q=1.7321343856509375,I=5075514194322695e-30,k=j+ct;V=(Q+j*C+k*q+S*S*I)%ct,V<0&&(V+=ct)}else V=ol(t+24332815e-1);return{no:o,method:R,ainv:y,ao:_,con41:x,con42:w,cosio:c,cosio2:h,eccsq:a,omeosq:s,posq:T,rp:L,rteosq:l,sinio:p,gsto:V}}function em(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,o=n.d3222,a=n.d4410,s=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,g=n.del2,_=n.del3,p=n.didt,u=n.dmdt,w=n.dnodt,x=n.domdt,y=n.argpo,T=n.argpdot,L=n.t,R=n.tc,V=n.gsto,S=n.xfact,C=n.xlamo,q=n.no,j=n.atime,Q=n.em,I=n.argpm,k=n.inclm,X=n.xli,Y=n.mm,oe=n.xni,$=n.nodem,ee=n.nm,F=.13130908,z=2.8843198,ge=.37448087,_e=5.7686396,ne=.95240898,ue=1.8014998,G=1.050833,Z=4.4108898,xe=.0043752690880113,Ue=720,Ne=-720,N=259200,qe,me,Te,Le,He,Ae,we,Ie,ze=0,We=0,b=(V+R*xe)%ct;if(Q+=f*L,k+=p*L,I+=x*L,$+=w*L,Y+=u*L,e!==0){(j===0||L*j<=0||Math.abs(L)<Math.abs(j))&&(j=0,oe=q,X=C),L>0?qe=Ue:qe=Ne;for(var v=381;v===381;)e!==2?(we=m*Math.sin(X-F)+g*Math.sin(2*(X-z))+_*Math.sin(3*(X-ge)),He=oe+S,Ae=m*Math.cos(X-F)+2*g*Math.cos(2*(X-z))+3*_*Math.cos(3*(X-ge)),Ae*=He):(Ie=y+T*j,Te=Ie+Ie,me=X+X,we=t*Math.sin(Te+X-_e)+i*Math.sin(X-_e)+r*Math.sin(Ie+X-ne)+o*Math.sin(-Ie+X-ne)+a*Math.sin(Te+me-ue)+s*Math.sin(me-ue)+l*Math.sin(Ie+X-G)+c*Math.sin(-Ie+X-G)+h*Math.sin(Ie+me-Z)+d*Math.sin(-Ie+me-Z),He=oe+S,Ae=t*Math.cos(Te+X-_e)+i*Math.cos(X-_e)+r*Math.cos(Ie+X-ne)+o*Math.cos(-Ie+X-ne)+l*Math.cos(Ie+X-G)+c*Math.cos(-Ie+X-G)+2*(a*Math.cos(Te+me-ue)+s*Math.cos(me-ue)+h*Math.cos(Ie+me-Z)+d*Math.cos(-Ie+me-Z)),Ae*=He),Math.abs(L-j)>=Ue?v=381:(We=L-j,v=0),v===381&&(X+=He*qe+we*N,oe+=we*qe+Ae*N,j+=qe);ee=oe+we*We+Ae*We*We*.5,Le=X+He*We+we*We*We*.5,e!==1?(Y=Le-2*$+2*b,ze=ee-q):(Y=Le-$-I+b,ze=ee-q),ee=q+ze}return{atime:j,em:Q,argpm:I,inclm:k,xli:X,mm:Y,xni:oe,nodem:$,dndt:ze,nm:ee}}function sl(n,e){var t,i,r,o,a,s,l,c,h,d,f,m,g,_,p,u,w,x,y,T,L,R,V,S,C,q,j,Q=15e-13;n.t=e,n.error=0;var I=n.mo+n.mdot*n.t,k=n.argpo+n.argpdot*n.t,X=n.nodeo+n.nodedot*n.t;h=k,L=I;var Y=n.t*n.t;if(V=X+n.nodecf*Y,w=1-n.cc1*n.t,x=n.bstar*n.cc4*n.t,y=n.t2cof*Y,n.isimp!==1){l=n.omgcof*n.t;var oe=1+n.eta*Math.cos(I);s=n.xmcof*(oe*oe*oe-n.delmo),u=l+s,L=I+u,h=k-u,m=Y*n.t,g=m*n.t,w=w-n.d2*Y-n.d3*m-n.d4*g,x+=n.bstar*n.cc5*(Math.sin(L)-n.sinmao),y=y+n.t3cof*m+g*(n.t4cof+n.t*n.t5cof)}R=n.no;var $=n.ecco;if(T=n.inclo,n.method==="d"){_=n.t;var ee={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:_,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:$,argpm:h,inclm:T,xli:n.xli,mm:L,xni:n.xni,nodem:V,nm:R},F=em(ee);$=F.em,h=F.argpm,T=F.inclm,L=F.mm,V=F.nodem,R=F.nm}if(R<=0)return n.error=2,[!1,!1];var z=Math.pow(vn/R,qi)*w*w;if(R=vn/Math.pow(z,1.5),$-=x,$>=1||$<-.001)return n.error=1,[!1,!1];$<1e-6&&($=1e-6),L+=n.no*y,C=L+h+V,V%=ct,h%=ct,C%=ct,L=(C-h-V)%ct;var ge=Math.sin(T),_e=Math.cos(T),ne=$;if(S=T,d=h,j=V,q=L,o=ge,r=_e,n.method==="d"){var ue={inclo:n.inclo,init:"n",ep:ne,inclp:S,nodep:j,argpp:d,mp:q,opsmode:n.operationmode},G=rl(n,ue);if(ne=G.ep,j=G.nodep,d=G.argpp,q=G.mp,S=G.inclp,S<0&&(S=-S,j+=At,d-=At),ne<0||ne>1)return n.error=3,[!1,!1]}n.method==="d"&&(o=Math.sin(S),r=Math.cos(S),n.aycof=-.5*qn*o,Math.abs(r+1)>15e-13?n.xlcof=-.25*qn*o*(3+5*r)/(1+r):n.xlcof=-.25*qn*o*(3+5*r)/Q);var Z=ne*Math.cos(d);u=1/(z*(1-ne*ne));var xe=ne*Math.sin(d)+u*n.aycof,Ue=q+d+j+u*n.xlcof*Z,Ne=(Ue-j)%ct;c=Ne,p=9999.9;for(var N=1;Math.abs(p)>=1e-12&&N<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*Z-i*xe,p=(Ne-xe*t+Z*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,N+=1;var qe=Z*t+xe*i,me=Z*i-xe*t,Te=Z*Z+xe*xe,Le=z*(1-Te);if(Le<0)return n.error=4,[!1,!1];var He=z*(1-qe),Ae=Math.sqrt(z)*me/He,we=Math.sqrt(Le)/He,Ie=Math.sqrt(1-Te);u=me/(1+Ie);var ze=z/He*(i-xe-Z*u),We=z/He*(t-Z+xe*u);f=Math.atan2(ze,We);var b=(We+We)*ze,v=1-2*ze*ze;u=1/Le;var B=.5*Xn*u,ae=B*u;n.method==="d"&&(a=r*r,n.con41=3*a-1,n.x1mth2=1-a,n.x7thm1=7*a-1);var re=He*(1-1.5*ae*Ie*n.con41)+.5*B*n.x1mth2*v;if(re<1)return n.error=6,{position:!1,velocity:!1};f-=.25*ae*n.x7thm1*b;var ce=j+1.5*ae*r*b,Se=S+1.5*ae*r*o*v,de=Ae-R*B*n.x1mth2*b/vn,Me=we+R*B*(n.x1mth2*v+1.5*n.con41)/vn,D=Math.sin(f),te=Math.cos(f),J=Math.sin(ce),Fe=Math.cos(ce),Pe=Math.sin(Se),Re=Math.cos(Se),Ee=-J*Re,ye=Fe*Re,Ge=Ee*D+Fe*te,U=ye*D+J*te,ve=Pe*D,le=Ee*te-Fe*D,K=ye*te-J*D,he=Pe*te,De={x:re*Ge*Bt,y:re*U*Bt,z:re*ve*Bt},ke={x:(de*Ge+Me*le)*go,y:(de*U+Me*K)*go,z:(de*ve+Me*he)*go};return{position:De,velocity:ke}}function tm(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,o=e.xbstar,a=e.xecco,s=e.xargpo,l=e.xinclo,c=e.xmo,h=e.xno,d=e.xnodeo,f,m,g,_,p,u,w,x,y,T,L,R,V,S,C,q,j,Q,I,k,X,Y,oe,$,ee,F,z,ge,_e,ne,ue,G,Z,xe,Ue,Ne,N,qe,me,Te,Le,He,Ae,we,Ie,ze,We,b,v,B,ae,re,ce,Se,de,Me,D=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=o,n.ecco=a,n.argpo=s,n.inclo=l,n.mo=c,n.no=h,n.nodeo=d,n.operationmode=t;var te=78/Bt+1,J=42/Bt,Fe=J*J*J*J;n.init="y",n.t=0;var Pe={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},Re=Qp(Pe),Ee=Re.ao,ye=Re.con42,Ge=Re.cosio,U=Re.cosio2,ve=Re.eccsq,le=Re.omeosq,K=Re.posq,he=Re.rp,De=Re.rteosq,ke=Re.sinio;if(n.no=Re.no,n.con41=Re.con41,n.gsto=Re.gsto,n.a=Math.pow(n.no*jp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,le>=0||n.no>=0){if(n.isimp=0,he<220/Bt+1&&(n.isimp=1),z=te,X=Fe,Q=(he-1)*Bt,Q<156){z=Q-78,Q<98&&(z=20);var Ke=(120-z)/Bt;X=Ke*Ke*Ke*Ke,z=z/Bt+1}I=1/K,ze=1/(Ee-z),n.eta=Ee*n.ecco*ze,R=n.eta*n.eta,L=n.ecco*n.eta,k=Math.abs(1-R),u=X*Math.pow(ze,4),w=u/Math.pow(k,3.5),_=w*n.no*(Ee*(1+1.5*R+L*(4+R))+.375*Xn*ze/k*n.con41*(8+3*R*(8+R))),n.cc1=n.bstar*_,p=0,n.ecco>1e-4&&(p=-2*u*ze*qn*n.no*ke/n.ecco),n.x1mth2=1-U,n.cc4=2*n.no*w*Ee*le*(n.eta*(2+.5*R)+n.ecco*(.5+2*R)-Xn*ze/(Ee*k)*(-3*n.con41*(1-2*L+R*(1.5-.5*L))+.75*n.x1mth2*(2*R-L*(1+R))*Math.cos(2*n.argpo))),n.cc5=2*w*Ee*le*(1+2.75*(R+L)+L*R),x=U*U,Ae=1.5*Xn*I*n.no,we=.5*Ae*Xn*I,Ie=-.46875*Kp*I*I*n.no,n.mdot=n.no+.5*Ae*De*n.con41+.0625*we*De*(13-78*U+137*x),n.argpdot=-.5*Ae*ye+.0625*we*(7-114*U+395*x)+Ie*(3-36*U+49*x),b=-Ae*Ge,n.nodedot=b+(.5*we*(4-19*U)+2*Ie*(3-7*U))*Ge,We=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-qi*u*n.bstar/L),n.nodecf=3.5*le*b*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(Ge+1)>15e-13?n.xlcof=-.25*qn*ke*(3+5*Ge)/(1+Ge):n.xlcof=-.25*qn*ke*(3+5*Ge)/D,n.aycof=-.5*qn*ke;var it=1+n.eta*Math.cos(n.mo);if(n.delmo=it*it*it,n.sinmao=Math.sin(n.mo),n.x7thm1=7*U-1,2*At/n.no>=225){n.method="d",n.isimp=1,Le=0,C=n.inclo;var Xe={epoch:r,ep:n.ecco,argpp:n.argpo,tc:Le,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},fe=$p(Xe);n.e3=fe.e3,n.ee2=fe.ee2,n.peo=fe.peo,n.pgho=fe.pgho,n.pho=fe.pho,n.pinco=fe.pinco,n.plo=fe.plo,n.se2=fe.se2,n.se3=fe.se3,n.sgh2=fe.sgh2,n.sgh3=fe.sgh3,n.sgh4=fe.sgh4,n.sh2=fe.sh2,n.sh3=fe.sh3,n.si2=fe.si2,n.si3=fe.si3,n.sl2=fe.sl2,n.sl3=fe.sl3,n.sl4=fe.sl4,m=fe.sinim,f=fe.cosim,y=fe.em,T=fe.emsq,Y=fe.s1,oe=fe.s2,$=fe.s3,ee=fe.s4,F=fe.s5,ge=fe.ss1,_e=fe.ss2,ne=fe.ss3,ue=fe.ss4,G=fe.ss5,Z=fe.sz1,xe=fe.sz3,Ue=fe.sz11,Ne=fe.sz13,N=fe.sz21,qe=fe.sz23,me=fe.sz31,Te=fe.sz33,n.xgh2=fe.xgh2,n.xgh3=fe.xgh3,n.xgh4=fe.xgh4,n.xh2=fe.xh2,n.xh3=fe.xh3,n.xi2=fe.xi2,n.xi3=fe.xi3,n.xl2=fe.xl2,n.xl3=fe.xl3,n.xl4=fe.xl4,n.zmol=fe.zmol,n.zmos=fe.zmos,j=fe.nm,v=fe.z1,B=fe.z3,ae=fe.z11,re=fe.z13,ce=fe.z21,Se=fe.z23,de=fe.z31,Me=fe.z33;var ot={inclo:C,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},_t=rl(n,ot);n.ecco=_t.ep,n.inclo=_t.inclp,n.nodeo=_t.nodep,n.argpo=_t.argpp,n.mo=_t.mp,V=0,S=0,q=0;var Yt={cosim:f,emsq:T,argpo:n.argpo,s1:Y,s2:oe,s3:$,s4:ee,s5:F,sinim:m,ss1:ge,ss2:_e,ss3:ne,ss4:ue,ss5:G,sz1:Z,sz3:xe,sz11:Ue,sz13:Ne,sz21:N,sz23:qe,sz31:me,sz33:Te,t:n.t,tc:Le,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:We,z1:v,z3:B,z11:ae,z13:re,z21:ce,z23:Se,z31:de,z33:Me,ecco:n.ecco,eccsq:ve,em:y,argpm:V,inclm:C,mm:q,nm:j,nodem:S,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},$e=Jp(Yt);n.irez=$e.irez,n.atime=$e.atime,n.d2201=$e.d2201,n.d2211=$e.d2211,n.d3210=$e.d3210,n.d3222=$e.d3222,n.d4410=$e.d4410,n.d4422=$e.d4422,n.d5220=$e.d5220,n.d5232=$e.d5232,n.d5421=$e.d5421,n.d5433=$e.d5433,n.dedt=$e.dedt,n.didt=$e.didt,n.dmdt=$e.dmdt,n.dnodt=$e.dnodt,n.domdt=$e.domdt,n.del1=$e.del1,n.del2=$e.del2,n.del3=$e.del3,n.xfact=$e.xfact,n.xlamo=$e.xlamo,n.xli=$e.xli,n.xni=$e.xni}n.isimp!==1&&(g=n.cc1*n.cc1,n.d2=4*Ee*ze*g,He=n.d2*ze*n.cc1/3,n.d3=(17*Ee+z)*He,n.d4=.5*He*Ee*ze*(221*Ee+31*z)*n.cc1,n.t3cof=n.d2+2*g,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*g)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*g*(2*n.d2+g)))}sl(n,0),n.init="n"}function nm(n,e){var t="i",i=1440/(2*At),r=0,o={};o.error=0,o.satnum=n.substring(2,7),o.epochyr=parseInt(n.substring(18,20),10),o.epochdays=parseFloat(n.substring(20,32)),o.ndot=parseFloat(n.substring(33,43)),o.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),o.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),o.inclo=parseFloat(e.substring(8,16)),o.nodeo=parseFloat(e.substring(17,25)),o.ecco=parseFloat(".".concat(e.substring(26,33))),o.argpo=parseFloat(e.substring(34,42)),o.mo=parseFloat(e.substring(43,51)),o.no=parseFloat(e.substring(52,63)),o.no/=i,o.inclo*=Bi,o.nodeo*=Bi,o.argpo*=Bi,o.mo*=Bi,o.epochyr<57?r=o.epochyr+2e3:r=o.epochyr+1900;var a=Zp(r,o.epochdays),s=a.mon,l=a.day,c=a.hr,h=a.minute,d=a.sec;return o.jdsatepoch=ko(r,s,l,c,h,d),tm(o,{opsmode:t,satn:o.satnum,epoch:o.jdsatepoch-24332815e-1,xbstar:o.bstar,xecco:o.ecco,xargpo:o.argpo,xinclo:o.inclo,xmo:o.mo,xno:o.no,xnodeo:o.nodeo}),o}function im(n){return rm(n)||om(n)||sm(n)||am()}function rm(n){if(Array.isArray(n))return Do(n)}function om(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function sm(n,e){if(n){if(typeof n=="string")return Do(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Do(n,e)}}function Do(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function am(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),o=ko.apply(void 0,im(r)),a=(o-i.jdsatepoch)*Xp;return sl(i,a)}function al(n){return n*Wp}function cm(n){if(n<-At/2||n>At/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return al(n)}function hm(n){if(n<-At||n>At)throw new RangeError("Longitude radians must be in range [-pi; pi].");return al(n)}function um(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),o=(t-i)/t,a=2*o-o*o,s=Math.atan2(n.y,n.x)-e;s<-At;)s+=ct;for(;s>At;)s-=ct;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-a*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*a*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:s,latitude:h,height:f}}var dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ll={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(dm,function(){var t=function(){function i(m){return a.appendChild(m.dom),m}function r(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";o=m}var o=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),r(++o%a.children.length)},!1);var s=(performance||Date).now(),l=s,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-s,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){s=this.end()},domElement:a,setMode:r}};return t.Panel=function(i,r,o){var a=1/0,s=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,f=3*c,m=2*c,g=3*c,_=15*c,p=74*c,u=30*c,w=document.createElement("canvas");w.width=h,w.height=d,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=o,x.fillRect(0,0,h,d),x.fillStyle=r,x.fillText(i,f,m),x.fillRect(g,_,p,u),x.fillStyle=o,x.globalAlpha=.9,x.fillRect(g,_,p,u),{dom:w,update:function(y,T){a=Math.min(a,y),s=Math.max(s,y),x.fillStyle=o,x.globalAlpha=1,x.fillRect(0,0,h,_),x.fillStyle=r,x.fillText(l(y)+" "+i+" ("+l(a)+"-"+l(s)+")",f,m),x.drawImage(w,g+c,_,p-c,u,g,_,p-c,u),x.fillRect(g+p-c,_,c,u),x.fillStyle=o,x.globalAlpha=.9,x.fillRect(g+p-c,_,c,l((1-y/T)*u))}}},t})})(ll);var pm=ll.exports;const mm=fm(pm),cl=Math.sqrt(3),gm=.5*(cl-1),Oi=(3-cl)/6,ya=n=>Math.floor(n)|0,Ta=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function _m(n=Math.random){const e=vm(n),t=new Float64Array(e).map(r=>Ta[r%12*2]),i=new Float64Array(e).map(r=>Ta[r%12*2+1]);return function(o,a){let s=0,l=0,c=0;const h=(o+a)*gm,d=ya(o+h),f=ya(a+h),m=(d+f)*Oi,g=d-m,_=f-m,p=o-g,u=a-_;let w,x;p>u?(w=1,x=0):(w=0,x=1);const y=p-w+Oi,T=u-x+Oi,L=p-1+2*Oi,R=u-1+2*Oi,V=d&255,S=f&255;let C=.5-p*p-u*u;if(C>=0){const Q=V+e[S],I=t[Q],k=i[Q];C*=C,s=C*C*(I*p+k*u)}let q=.5-y*y-T*T;if(q>=0){const Q=V+w+e[S+x],I=t[Q],k=i[Q];q*=q,l=q*q*(I*y+k*T)}let j=.5-L*L-R*R;if(j>=0){const Q=V+1+e[S+1],I=t[Q],k=i[Q];j*=j,c=j*j*(I*L+k*R)}return 70*(s+l+c)}}function vm(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),o=t[i];t[i]=t[r],t[r]=o}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const _o={type:"change"},vo={type:"start"},xo={type:"end"};class xm extends Mn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Wt.ROTATE,MIDDLE:Wt.DOLLY,RIGHT:Wt.PAN},this.target=new O;const o=1e-6,a=new O;let s=1,l=r.NONE,c=r.NONE,h=0,d=0,f=0;const m=new O,g=new Ve,_=new Ve,p=new O,u=new Ve,w=new Ve,x=new Ve,y=new Ve,T=[],L={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const G=i.domElement.getBoundingClientRect(),Z=i.domElement.ownerDocument.documentElement;i.screen.left=G.left+window.pageXOffset-Z.clientLeft,i.screen.top=G.top+window.pageYOffset-Z.clientTop,i.screen.width=G.width,i.screen.height=G.height};const R=function(){const G=new Ve;return function(xe,Ue){return G.set((xe-i.screen.left)/i.screen.width,(Ue-i.screen.top)/i.screen.height),G}}(),V=function(){const G=new Ve;return function(xe,Ue){return G.set((xe-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Ue))/i.screen.width),G}}();this.rotateCamera=function(){const G=new O,Z=new sn,xe=new O,Ue=new O,Ne=new O,N=new O;return function(){N.set(_.x-g.x,_.y-g.y,0);let me=N.length();me?(m.copy(i.object.position).sub(i.target),xe.copy(m).normalize(),Ue.copy(i.object.up).normalize(),Ne.crossVectors(Ue,xe).normalize(),Ue.setLength(_.y-g.y),Ne.setLength(_.x-g.x),N.copy(Ue.add(Ne)),G.crossVectors(N,m).normalize(),me*=i.rotateSpeed,Z.setFromAxisAngle(G,me),m.applyQuaternion(Z),i.object.up.applyQuaternion(Z),p.copy(G),f=me):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),m.copy(i.object.position).sub(i.target),Z.setFromAxisAngle(p,f),m.applyQuaternion(Z),i.object.up.applyQuaternion(Z)),g.copy(_)}}(),this.zoomCamera=function(){let G;l===r.TOUCH_ZOOM_PAN?(G=h/d,h=d,i.object.isPerspectiveCamera?m.multiplyScalar(G):i.object.isOrthographicCamera?(i.object.zoom=mn.clamp(i.object.zoom/G,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(G=1+(w.y-u.y)*i.zoomSpeed,G!==1&&G>0&&(i.object.isPerspectiveCamera?m.multiplyScalar(G):i.object.isOrthographicCamera?(i.object.zoom=mn.clamp(i.object.zoom/G,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?u.copy(w):u.y+=(w.y-u.y)*this.dynamicDampingFactor)},this.panCamera=function(){const G=new Ve,Z=new O,xe=new O;return function(){if(G.copy(y).sub(x),G.lengthSq()){if(i.object.isOrthographicCamera){const Ne=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,N=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;G.x*=Ne,G.y*=N}G.multiplyScalar(m.length()*i.panSpeed),xe.copy(m).cross(i.object.up).setLength(G.x),xe.add(Z.copy(i.object.up).setLength(G.y)),i.object.position.add(xe),i.target.add(xe),i.staticMoving?x.copy(y):x.add(G.subVectors(y,x).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(m.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,m.setLength(i.maxDistance)),u.copy(w)),m.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,m.setLength(i.minDistance)),u.copy(w)))},this.update=function(){m.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,m),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),a.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(_o),a.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(a.distanceToSquared(i.object.position)>o||s!==i.object.zoom)&&(i.dispatchEvent(_o),a.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),m.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(_o),a.copy(i.object.position),s=i.object.zoom};function S(G){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(G.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",q)),ge(G),G.pointerType==="touch"?$(G):k(G))}function C(G){i.enabled!==!1&&(G.pointerType==="touch"?ee(G):X(G))}function q(G){i.enabled!==!1&&(G.pointerType==="touch"?F(G):Y(),_e(G),T.length===0&&(i.domElement.releasePointerCapture(G.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",q)))}function j(G){_e(G)}function Q(G){i.enabled!==!1&&(window.removeEventListener("keydown",Q),c===r.NONE&&(G.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:G.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:G.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function I(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",Q))}function k(G){if(l===r.NONE)switch(G.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Z=c!==r.NONE?c:l;Z===r.ROTATE&&!i.noRotate?(_.copy(V(G.pageX,G.pageY)),g.copy(_)):Z===r.ZOOM&&!i.noZoom?(u.copy(R(G.pageX,G.pageY)),w.copy(u)):Z===r.PAN&&!i.noPan&&(x.copy(R(G.pageX,G.pageY)),y.copy(x)),i.dispatchEvent(vo)}function X(G){const Z=c!==r.NONE?c:l;Z===r.ROTATE&&!i.noRotate?(g.copy(_),_.copy(V(G.pageX,G.pageY))):Z===r.ZOOM&&!i.noZoom?w.copy(R(G.pageX,G.pageY)):Z===r.PAN&&!i.noPan&&y.copy(R(G.pageX,G.pageY))}function Y(){l=r.NONE,i.dispatchEvent(xo)}function oe(G){if(i.enabled!==!1&&i.noZoom!==!0){switch(G.preventDefault(),G.deltaMode){case 2:u.y-=G.deltaY*.025;break;case 1:u.y-=G.deltaY*.01;break;default:u.y-=G.deltaY*25e-5;break}i.dispatchEvent(vo),i.dispatchEvent(xo)}}function $(G){switch(ne(G),T.length){case 1:l=r.TOUCH_ROTATE,_.copy(V(T[0].pageX,T[0].pageY)),g.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const Z=T[0].pageX-T[1].pageX,xe=T[0].pageY-T[1].pageY;d=h=Math.sqrt(Z*Z+xe*xe);const Ue=(T[0].pageX+T[1].pageX)/2,Ne=(T[0].pageY+T[1].pageY)/2;x.copy(R(Ue,Ne)),y.copy(x);break}i.dispatchEvent(vo)}function ee(G){switch(ne(G),T.length){case 1:g.copy(_),_.copy(V(G.pageX,G.pageY));break;default:const Z=ue(G),xe=G.pageX-Z.x,Ue=G.pageY-Z.y;d=Math.sqrt(xe*xe+Ue*Ue);const Ne=(G.pageX+Z.x)/2,N=(G.pageY+Z.y)/2;y.copy(R(Ne,N));break}}function F(G){switch(T.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(V(G.pageX,G.pageY)),g.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Z=0;Z<T.length;Z++)if(T[Z].pointerId!==G.pointerId){const xe=L[T[Z].pointerId];_.copy(V(xe.x,xe.y)),g.copy(_);break}break}i.dispatchEvent(xo)}function z(G){i.enabled!==!1&&G.preventDefault()}function ge(G){T.push(G)}function _e(G){delete L[G.pointerId];for(let Z=0;Z<T.length;Z++)if(T[Z].pointerId==G.pointerId){T.splice(Z,1);return}}function ne(G){let Z=L[G.pointerId];Z===void 0&&(Z=new Ve,L[G.pointerId]=Z),Z.set(G.pageX,G.pageY)}function ue(G){const Z=G.pointerId===T[0].pointerId?T[1]:T[0];return L[Z.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",z),i.domElement.removeEventListener("pointerdown",S),i.domElement.removeEventListener("pointercancel",j),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",q),window.removeEventListener("keydown",Q),window.removeEventListener("keyup",I)},this.domElement.addEventListener("contextmenu",z),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",j),this.domElement.addEventListener("wheel",oe,{passive:!1}),window.addEventListener("keydown",Q),window.addEventListener("keyup",I),this.handleResize(),this.update()}}const ba=new O,Mo=new Po,So=new O;class Mm{constructor(e,t){this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this.autoSpeedFactor=0,this.pointerX=0,this.pointerY=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.viewHalfX=0,this.viewHalfY=0;let i=0,r=0;this.handleResize=function(){this.domElement===document?(this.viewHalfX=window.innerWidth/2,this.viewHalfY=window.innerHeight/2):(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)},this.onPointerDown=function(d){if(this.domElement!==document&&this.domElement.focus(),this.activeLook)switch(d.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0},this.onPointerUp=function(d){if(this.activeLook)switch(d.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1},this.onPointerMove=function(d){this.domElement===document?(this.pointerX=d.pageX-this.viewHalfX,this.pointerY=d.pageY-this.viewHalfY):(this.pointerX=d.pageX-this.domElement.offsetLeft-this.viewHalfX,this.pointerY=d.pageY-this.domElement.offsetTop-this.viewHalfY)},this.onKeyDown=function(d){switch(d.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}},this.onKeyUp=function(d){switch(d.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}},this.lookAt=function(d,f,m){return d.isVector3?So.copy(d):So.set(d,f,m),this.object.lookAt(So),h(this),this},this.update=function(){const d=new O;return function(m){if(this.enabled===!1)return;if(this.heightSpeed){const T=mn.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=m*(T*this.heightCoef)}else this.autoSpeedFactor=0;const g=m*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(g+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(g),this.moveLeft&&this.object.translateX(-g),this.moveRight&&this.object.translateX(g),this.moveUp&&this.object.translateY(g),this.moveDown&&this.object.translateY(-g);let _=m*this.lookSpeed;this.activeLook||(_=0);let p=1;this.constrainVertical&&(p=Math.PI/(this.verticalMax-this.verticalMin)),r-=this.pointerX*_,this.lookVertical&&(i-=this.pointerY*_*p),i=Math.max(-85,Math.min(85,i));let u=mn.degToRad(90-i);const w=mn.degToRad(r);this.constrainVertical&&(u=mn.mapLinear(u,0,Math.PI,this.verticalMin,this.verticalMax));const x=this.object.position;d.setFromSphericalCoords(1,u,w).add(x),this.object.lookAt(d)}}(),this.dispose=function(){this.domElement.removeEventListener("contextmenu",Aa),this.domElement.removeEventListener("pointerdown",a),this.domElement.removeEventListener("pointermove",o),this.domElement.removeEventListener("pointerup",s),window.removeEventListener("keydown",l),window.removeEventListener("keyup",c)};const o=this.onPointerMove.bind(this),a=this.onPointerDown.bind(this),s=this.onPointerUp.bind(this),l=this.onKeyDown.bind(this),c=this.onKeyUp.bind(this);this.domElement.addEventListener("contextmenu",Aa),this.domElement.addEventListener("pointerdown",a),this.domElement.addEventListener("pointermove",o),this.domElement.addEventListener("pointerup",s),window.addEventListener("keydown",l),window.addEventListener("keyup",c);function h(d){const f=d.object.quaternion;ba.set(0,0,-1).applyQuaternion(f),Mo.setFromVector3(ba),i=90-mn.radToDeg(Mo.phi),r=mn.radToDeg(Mo.theta)}this.handleResize(),h(this)}}function Aa(n){n.preventDefault()}class Sm extends il{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Wt.PAN,MIDDLE:Wt.DOLLY,RIGHT:Wt.ROTATE},this.touches={ONE:An.PAN,TWO:An.DOLLY_ROTATE}}}const Em={type:"change"};class ym extends Mn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,o=new sn,a=new O;this.tmpQuaternion=new sn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new O(0,0,0),this.rotationVector=new O(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const _=this.getContainerDimensions(),p=_.size[0]/2,u=_.size[1]/2;this.moveState.yawLeft=-(g.pageX-_.offset[0]-p)/p,this.moveState.pitchDown=(g.pageY-_.offset[1]-u)/u,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const _=g*i.movementSpeed,p=g*i.rollSpeed;i.object.translateX(i.moveVector.x*_),i.object.translateY(i.moveVector.y*_),i.object.translateZ(i.moveVector.z*_),i.tmpQuaternion.set(i.rotationVector.x*p,i.rotationVector.y*p,i.rotationVector.z*p,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(a.distanceToSquared(i.object.position)>r||8*(1-o.dot(i.object.quaternion))>r)&&(i.dispatchEvent(Em),o.copy(i.object.quaternion),a.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",s),this.domElement.removeEventListener("pointerdown",c),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",h),this.domElement.removeEventListener("pointercancel",d),window.removeEventListener("keydown",f),window.removeEventListener("keyup",m)};const s=this.contextMenu.bind(this),l=this.pointermove.bind(this),c=this.pointerdown.bind(this),h=this.pointerup.bind(this),d=this.pointercancel.bind(this),f=this.keydown.bind(this),m=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",s),this.domElement.addEventListener("pointerdown",c),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",h),this.domElement.addEventListener("pointercancel",d),window.addEventListener("keydown",f),window.addEventListener("keyup",m),this.updateMovementVector(),this.updateRotationVector()}}function Tm(n,e){let t,i,r,o,a,s,l,c=[],h,d,f,m,g,_="smallScale",p,u,w=!0,x=!1;const y=66,T=2;let L,R;const V=6371,S=1,C=S/V,q=2*Math.PI/86400,j=23.44*(Math.PI/180),Q=27.32*24*3600,I=2*Math.PI/Q;let k=1,X;const Y=new mm;Y.showPanel(0),document.body.appendChild(Y.dom),Y.dom.id="statistics",window.addEventListener("keydown",M=>{(M.key==="R"||M.key==="r")&&(w=!w)}),window.addEventListener("keydown",M=>{(M.key==="W"||M.key==="w")&&(x=!x,o.traverse(function(A){A.isMesh&&(A.material.wireframe=x,A.material.needsUpdate=!0)}))});function oe(){h=new il(i,r.domElement),h.enableDamping=!0,h.enablePan=!1,h.dampingFactor=.25,h.rotateSpeed=.25,h.minDistance=5,h.maxDistance=100,m=new xm(i,r.domElement),m.rotateSpeed=1.25,m.panSpeed=.2,m.noZoom=!1,m.noPan=!1,m.staticMoving=!1,m.dynamicDampingFactor=.33,d=new Sm(i,r.domElement),f=new Mm(i,r.domElement),f.lookSpeed=.1,f.movementSpeed=5,f.noFly=!0,f.lookVertical=!0,g=new ym(i,r.domElement),$(h)}function $(M){h.enabled=!1,d.enabled=!1,f.enabled=!1,g.enabled=!1,m.enabled=!1,M&&(M.enabled=!0)}async function ee(){t=new Ip,i=new qt(5,window.innerWidth/window.innerHeight,.1,3e5),i.position.set(0,0,800),i.position.z=66,r=new nl({alpha:!1}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(12632256,0),r.shadowMap.enabled=!0,r.shadowMap.type=Ra,document.getElementById(n).appendChild(r.domElement),oe(),D(),await Pe(),F(),_e(),ge(te,C),o=new Wn,o.rotation.z=j,t.add(o),a=new Wn,t.add(a),ot(),Ue(),qe(),_t(),E(),window.addEventListener("resize",H,!1),H(),le()}function F(){const M=new Gp(4210752,1);t.add(M),L=new Hp(5987163,100),L.castShadow=!0,t.add(L);const A=new Op(16777147,526368,5.5);t.add(A);const P=S*109*k,W=new Vn(P,24,24),se=new zo({color:16776960,emissive:16753920,opacity:.25,transparent:!0,wireframe:!0,alphaHash:!0});s=new Ht(W,se),t.add(s);const ie=new Wn;t.add(ie),ie.add(s),ie.add(L)}function z(M){return M.getTime()/864e5+24405875e-1}function ge(M,A){const W=(z(M)-2451545)/36525,se=280.46646+W*(36000.76983+W*3032e-7),ie=357.52911+W*(35999.05029-1537e-7*W),pe=(1.914602-W*(.004817+14e-6*W))*Math.sin(ie*(Math.PI/180))+(.019993-101e-6*W)*Math.sin(2*ie*(Math.PI/180))+289e-6*Math.sin(3*ie*(Math.PI/180)),be=se+pe,Oe=23.44*(Math.PI/180),Be=Math.cos(be*(Math.PI/180)),Qe=Math.cos(Oe)*Math.sin(be*(Math.PI/180)),rt=Math.sin(Oe)*Math.sin(be*(Math.PI/180)),et=1,ut=new O(Be*et,rt*et,-Qe*et).multiplyScalar(A*1496e5);s.position.copy(ut),L.position.copy(ut),L.target.position.set(0,0,0),L.target.updateMatrixWorld()}function _e(){const M=1496e5*C*k;s.position.set(M,0,0),L.position.copy(s.position)}const ne=new _m;let ue=0;const G=1e-5,Z=.002;function xe(){ue+=G;const M=ne(ue,0)*Z,A=ne(0,ue)*Z,P=ne(ue,ue)*Z;s.rotation.x+=M,s.rotation.y+=A,s.rotation.z+=P}function Ue(){const M=S*.273,A=new fo({color:9079434,roughness:1,metalness:1.25}),P=new Vn(M,32,32);X=new Ht(P,A),a.add(X)}function Ne(){if(!X)return;const A=384400*C*k,W=te.getTime()/1e3*I%(2*Math.PI),se=.0549,ie=A*(Math.cos(W)-se),pe=A*Math.sin(W)*Math.sqrt(1-se**2);let be=new O(ie,0,pe);const Oe=5.145*(Math.PI/180);be.applyAxisAngle(new O(1,0,0),Oe),be.applyAxisAngle(new O(0,0,1),j),X.position.copy(be)}let N;function qe(){const M=["100 Brightest","Space Stations","Active","Debris"];Promise.all(M.map(A=>me(A))).then(A=>{const P=A.flat();Le(P),console.log("Successfully loaded and processed all satellite data."),e()}).catch(A=>{console.error("Failed to load some satellite data:",A),console.log("Attempting to load data from local cache..."),fetch("cache/active.json").then(P=>{if(!P.ok)throw new Error("Local cache fetch failed");return P.json()}).then(Le).catch(P=>{console.error("Failed to load satellite data from both server and local cache:",P),e()})})}async function me(M){const A=`https://orbital-bbfd.onrender.com/satellites/${M}`;try{const P=await fetch(A);if(!P.ok)throw new Error(`Failed to load data for ${M}`);const W=await P.json(),se=Te(M,W);return console.log(`Loaded and flattened data for ${M}`),se}catch(P){return console.warn(`Error loading data for ${M}:`,P),[]}}function Te(M,A){const P=[];return A.data&&typeof A.data=="object"?Object.entries(A.data).forEach(([W,se])=>{Array.isArray(se)?se.forEach(ie=>{ie.tleLine1&&ie.tleLine2?P.push({name:ie.name||"Unknown",tleLine1:ie.tleLine1,tleLine2:ie.tleLine2,country:ie.country||"Unknown",orbitClass:ie.orbitClass||"Unknown",group_major:M||"Unknown",group_minor:W||"Unknown"}):console.warn("Satellite missing TLE data:",ie)}):console.warn(`Expected an array of satellites under group_minor: ${W}, but got:`,se)}):console.warn(`Expected a 'data' object for group_major: ${M}, but got:`,A.data),P}function Le(M){if(!Array.isArray(M)||M.length===0){console.error("No valid satellite data to process.");return}M.forEach(A=>{A.metadata={satrec:He(A.tleLine1,A.tleLine2),orbitClass:A.orbitClass,country:A.country,satelliteType:A.objType,group_major:A.group_major,group_minor:A.group_minor}}),b(M)}function He(M,A){try{return nm(M.trim(),A.trim())}catch(P){return console.warn("Failed to create Satrec from TLE:",{tleLine1:M,tleLine2:A},P),null}}const Ae={orbitClass:{getClass:M=>M.orbitClass,colors:{geostationary:16777215,sunSynchronous:16776960,nonGeostationary:16711680,unknown:16711935}},country:{getClass:M=>M.country||"Unknown",colors:{US:255,PRC:16711680,CIS:65535,ESA:16776960,JPN:11211282,Unknown:65280}},group_major:{getClass:M=>M.group_major||"Unknown",colors:{Active:16711935,"Last 30 Days":16711680,"Space Stations":65280,"100 Brightest":255,Debris:16776960,"Weather & Earth Resources":16746496,Communications:35071,Navigation:8978176,Scientific:16711935,Miscellaneous:8947848,Unknown:16711680}}};function we(M,A){const{getClass:P,colors:W}=Ae[M],se=P(A);return W[se]||16711680}function Ie(M,A,P){if(!M||!M.count){console.error("InstancedMesh is not properly initialized.");return}const W=new dt,se=new Float32Array(M.count*3);P.forEach((ie,pe)=>{if(pe>=M.count){console.warn(`Instance index ${pe} exceeds InstancedMesh count (${M.count}).`);return}if(!ie.metadata){console.warn(`Satellite at index ${pe} is missing metadata. Skipping.`);return}const be=we(ze,ie.metadata),Oe=new Je(be);try{M.getMatrixAt(pe,W.matrix)}catch(Be){console.error(`Error accessing matrix for instance ${pe}:`,Be);return}W.updateMatrix(),M.setMatrixAt(pe,W.matrix),se.set(Oe.toArray(),pe*3)}),M.instanceColor=new Cr(se,3),M.instanceMatrix.needsUpdate=!0}let ze="group_major";document.getElementById("orbit-class").addEventListener("click",()=>{We("orbitClass")}),document.getElementById("group-major").addEventListener("click",()=>{We("group_major")}),document.getElementById("owner-country").addEventListener("click",()=>{We("country")});function We(M){if(!N||!N.count){console.error("Satellite mesh is not initialized or empty. Cannot switch classification.");return}ze=M,Ie(N,ze,c)}function b(M){console.log("Satellite count:",M.length);const A=new fo({metalness:.3,roughness:.2,transparent:!1,wireframe:!0});N=ce(M,A,_==="smallScale"),N&&N.count>0?(console.log("Consolidated satellite mesh created and added to the scene."),o.add(N)):console.error("Failed to create satellite mesh or no instances were added.")}function v(M,A){const P=lm(M,te);if(!P.position)return null;const W=um(P.position,A),se=W.height*C*k,ie=cm(W.latitude),pe=hm(W.longitude);return Nt(ie,pe,S+se)}const B=new Ur,ae=new ht;function re(M){i.updateMatrixWorld();const A=.5,P=i.projectionMatrix.clone();if(P.elements[0]*=A,P.elements[5]*=A,ae.multiplyMatrices(P,i.matrixWorldInverse),B.setFromProjectionMatrix(ae),!B.containsPoint(M))return!1;const W=new O(0,0,0),se=M.clone().sub(W).normalize(),ie=i.position.clone().sub(W).normalize();return!(se.dot(ie)<0)}function ce(M,A,P=!1){console.log("Creating instanced mesh. Satellite count:",M.length);const W=M.length;if(W===0)return console.error("No satellites to create instanced mesh."),null;const se=P?new Vn(.0035,2,3):new Vn(.004,2,3),ie=new Fp(se,A,W),pe=new Float32Array(W*3),be=new dt;return ie.userData=[],M.forEach((Oe,Be)=>{try{be.position.set(0,0,0),be.updateMatrix(),ie.setMatrixAt(Be,be.matrix);const Qe=new Je(we(ze,Oe.metadata));pe.set(Qe.toArray(),Be*3),ie.userData[Be]={metadata:Oe.metadata}}catch(Qe){console.error(`Error initializing satellite ${Oe.name}:`,Qe),ie.userData[Be]=null}}),ie.instanceColor=new Cr(pe,3),ie.instanceMatrix.needsUpdate=!0,ie.instanceColor.needsUpdate=!0,ie}const Se=new Map;function de(M){if(!M||!M.instanceColor){console.error("InstancedMesh or its color buffer is not initialized.");return}const A=ol(te),P=new dt,W=M.instanceColor.array,se=new O(0,0,0);for(let ie=0;ie<M.count;ie++){const{metadata:pe}=M.userData[ie];if(!pe){console.warn(`Missing metadata for satellite at index ${ie}`);continue}let be;try{be=be=M.userData[ie].metadata.satrec}catch(Qe){console.error(`Error creating satrec for satellite at index ${ie}:`,Qe);continue}let Oe=v(be,A);if(!Oe)continue;M&&(te.getTime()/1e3%86400,new O(0,1,0).applyAxisAngle(new O(0,0,1),j)),P.position.copy(Oe),P.updateMatrix(),M.setMatrixAt(ie,P.matrix);const Be=new Je(we(ze,pe));W.set(Be.toArray(),ie*3),_!=="smallScale"&&Me(ie,Oe,se)}M.instanceMatrix.needsUpdate=!0,M.instanceColor.needsUpdate=!0}function Me(M,A,P){if(!re(A)){if(Se.has(M)){const pe=Se.get(M);o.remove(pe),pe.geometry.dispose(),pe.material.dispose(),Se.delete(M)}return}if(!Se.has(M)){const pe=N.instanceColor.array,be=new Je(pe[M*3],pe[M*3+1],pe[M*3+2]),Oe=new rn,Be=new Float32Array(6);Oe.setAttribute("position",new kt(Be,3));const Qe=new Sr({color:be,transparent:!1,alphaHash:!0}),rt=new Fi(Oe,Qe);o.add(rt),Se.set(M,rt)}const se=Se.get(M),ie=se.geometry.attributes.position.array;ie[0]=P.x,ie[1]=P.y,ie[2]=P.z,ie[3]=A.x,ie[4]=A.y,ie[5]=A.z,se.geometry.attributes.position.needsUpdate=!0}function D(){const M=window.innerWidth<=768;h.enabled?(h.minDistance=M?50:5,h.maxDistance=M?500:100):d.enabled?(d.minDistance=M?20:10,d.maxDistance=M?150:50):d.enabled?(m.minDistance=M?20:5,m.maxDistance=M?100:50):f.enabled&&(f.movementSpeed=M?2:5),i.position.z=M?y*T:y}let te;const J=1e3/20;let Fe=1e3;function Pe(){return fetch("https://orbital-bbfd.onrender.com/timestamps").then(M=>{if(!M.ok)throw new Error("Failed to fetch timestamps from server");return M.json()}).then(M=>{const A=Math.max(...Object.values(M).filter(W=>W>0)),P=M.PAYLOAD||null;if(!A&&!P)throw new Error("No valid timestamps found in server response");te=new Date(A||P),document.getElementById("simulation-time").textContent=te.toUTCString().replace("GMT","UTC")}).catch(M=>(console.error("Error loading timestamps from server, attempting local cache:",M),fetch("cache/timestamps.json").then(A=>{if(!A.ok)throw new Error("Failed to fetch timestamps from local cache");return A.json()}).then(A=>{const P=Math.max(...Object.values(A).filter(se=>se>0)),W=A.PAYLOAD||null;if(!P&&!W)throw new Error("No valid timestamps found in local cache");te=new Date(P||W),document.getElementById("simulation-time").textContent=te.toUTCString().replace("GMT","UTC")}).catch(A=>{console.error("Error loading timestamps from local cache, using hardcoded fallback:",A),te=new Date("2024-11-01T00:00:00Z"),document.getElementById("simulation-time").textContent=te.toUTCString().replace("GMT","UTC")})))}function Re(){te=new Date(te.getTime()+J*Fe);const M=te.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=M,ge(te,C)}function Ee(){if(w){const A=te.getTime()/1e3%86400*q%(2*Math.PI);o.rotation.set(0,0,0),o.rotateZ(j),o.rotateY(A)}}let ye=new kp,Ge=0,ve=1/20;function le(){if(Ge+=ye.getDelta(),Ge>ve){if(Y.begin(),l=requestAnimationFrame(le),Re(),Ee(),it(),N&&de(N),Ne(),xe(),_e(),ge(te,C),_==="fixed"){const{lat:M,lon:A}=chapterConfig.fixed.coordinates[K];(M!==p||A!==u)&&(Xe(M,A),p=M,u=A)}h.enabled&&h.update(),f.enabled&&f.update(ye.getDelta()),m.enabled&&m.update(),r.render(t,i),Y.end(),Ge=Ge%ve}requestAnimationFrame(le)}let K="newYork";const he={smallScale:{activate:()=>{$(h),h.enablePan=!1,i.lookAt(new O(0,0,0)),i.updateProjectionMatrix(),h.target.set(0,0,0),h.update(),fe("smallScale")}},largeScale:{activate:()=>{$(h),h.enablePan=!0,h.target.set(0,1,0);const M=i.position.distanceTo(h.target);h.minDistance=M,h.update(),fe("largeScale")}},fixed:{cities:{newYork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},tokyo:{lat:35.6895,lon:139.6917}},activate:M=>{const{lat:A,lon:P}=he.fixed.cities[M];Xe(A,P),$(f),fe("fixed")}}};let De={position:new O,zoom:1};function ke(){Se.forEach((M,A)=>{o.remove(M),M.geometry.dispose(),M.material.dispose()}),Se.clear()}function Ke(M,A){_!==M&&(De.position.copy(i.position),De.zoom=i.zoom,M==="fixed"&&he.fixed.activate(A),M==="smallScale"?(ke(),he[M].activate()):M==="largeScale"&&(he[M].activate(),i.position.copy(De.position),i.zoom=De.zoom,i.updateProjectionMatrix()),_=M)}function it(){const M=i.position.length(),A=S*8;M<A&&_!=="largeScale"?Ke("largeScale"):M>=A&&_!=="smallScale"&&Ke("smallScale")}function Xe(M,A){const W=Nt(M,A,S);i.position.copy(W),i.lookAt(new O(0,0,0)),i.updateProjectionMatrix()}function fe(M){var P;(P=he[M])!=null&&P.controls}function ot(){const M=new Vn(S,64,64),A=new fo({color:0,opacity:1,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:x});R=new Ht(M,A),R.castShadow=!0,R.receiveShadow=!0,o.add(R)}return ee(),{dispose(){window.removeEventListener("resize",H),cancelAnimationFrame(l);const M=document.getElementById(n);M&&r.domElement&&M.removeChild(r.domElement)}};async function _t(){console.log("Attempting to load data...");const M=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_graticules_5.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson","data/ne_50m_ocean.geojson"];try{const A=M.map(P=>fetch(P).then(W=>{if(!W.ok)throw new Error(`Network response was not ok for ${P}`);return W.json()}).then(W=>(Yt(P,W),"loaded")).catch(W=>{throw console.error(`Error loading ${P}:`,W),W}));await Promise.all(A),console.log("All GeoJSON data loaded successfully.")}catch(A){console.error("Failed to load some GeoJSON data:",A)}}function Yt(M,A){switch(M){case"data/ne_110m_graticules_5.geojson":console.log("Loaded graticules:",A),Kt(A);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",A),$e(A);break;case"data/ne_110m_land.geojson":break;case"data/ne_50m_ocean.geojson":console.log("loaded ocean:",A);break;default:console.warn("Unrecognized GeoJSON URL:",M);break}}function $e(M){const A=new Sr({color:16777215,opacity:.75,alphaHash:!0}),P=1;M.features.forEach(W=>{const se=W.geometry.coordinates;if(W.geometry.type==="LineString"){const ie=wt(se,P),pe=new Fi(ie,A);o.add(pe)}else W.geometry.type==="MultiLineString"&&se.forEach(ie=>{const pe=wt(ie,P),be=new Fi(pe,A);o.add(be)})})}function Kt(M){const A=new Sr({color:4473924,opacity:.5,alphaHash:!0,visible:!0,transparent:!1}),P=S;M.features.forEach(W=>{const se=W.geometry.coordinates;if(W.geometry.type==="LineString"){const ie=wt(se,P),pe=new Fi(ie,A);o.add(pe)}else W.geometry.type==="MultiLineString"&&se.forEach(ie=>{const pe=wt(ie,P),be=new Fi(pe,A);o.add(be)})})}function wt(M,A){const P=new rn,W=[];M.forEach(([ie,pe])=>{const be=Nt(pe,ie,A);W.push(be.x,be.y,be.z)});const se=new Float32Array(W);return P.setAttribute("position",new kt(se,3)),P}function Nt(M,A,P){const W=(90-M)*(Math.PI/180),se=(A+180)*(Math.PI/180),ie=-P*Math.sin(W)*Math.cos(se),pe=P*Math.sin(W)*Math.sin(se),be=P*Math.cos(W);return new O(ie,be,pe)}function Rt(M,A){let P;return function(...W){clearTimeout(P),P=setTimeout(()=>M.apply(this,W),A)}}function Ct(M,A=2e4){const se=Math.log(1),pe=(Math.log(A)-se)/100;return Math.exp(se+pe*(M-0))}function at(M,A,P){return(Math.log10(M)-A)/(P-A)*100}function Et(M,A,P){const W=A+M/100*(P-A);return Math.pow(10,W)}function E(){const M=document.getElementById("exaggeration-slider"),A=document.getElementById("exaggeration-value"),P=1;function W(){return _==="fixed"?{minExp:Math.log10(.05),maxExp:Math.log10(1)}:{minExp:Math.log10(.1),maxExp:Math.log10(25)}}let{minExp:se,maxExp:ie}=W();M.value=at(P,se,ie),k=P,A.textContent=k.toFixed(2)+"x",M.addEventListener("input",rt=>{const et=parseFloat(rt.target.value);({minExp:se,maxExp:ie}=W()),k=Et(et,se,ie),A.textContent=k.toFixed(2)+"x",N&&Rt(de(N),10)});const pe=document.getElementById("speed-slider"),be=document.getElementById("speed-value"),Oe=1;pe.value=0,Fe=Oe,be.textContent=Fe.toFixed(0)+"x";function Be(){return _==="smallScale"?2e4:500}pe.addEventListener("input",rt=>{const et=parseFloat(rt.target.value),ut=Be();Fe=Ct(et,ut),be.textContent=Fe.toFixed(0)+"x";let tt=te.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=tt,document.getElementById("simulation-time").textContent=te.toUTCString().replace("GMT","UTC")}),document.getElementById("reset-button").addEventListener("click",()=>{({minExp:se,maxExp:ie}=W()),M.value=at(P,se,ie),k=P,A.textContent=k.toFixed(2)+"x",pe.value=0,Fe=Oe,be.textContent=Fe.toFixed(0)+"x",N&&Rt(de(N),10)})}function H(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight);const M=window.innerWidth<=768;i.position.z=M?y*T:y}}const bm="threeContainer1",Vo=document.createElement("div");Vo.id="loadingOverlay";Vo.innerHTML='<div id="loadingText">Loading</div>';document.body.appendChild(Vo);function Am(){const n=document.getElementById("loadingText"),e=setInterval(()=>{n.textContent+="."},50);return console.log("Loading animation started"),()=>{clearInterval(e),console.log("Loading animation stopped")}}const wm=Am();function Rm(){setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none",wm()},100)}Tm(bm,Rm);
