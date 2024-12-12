(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="158",Zt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gl=0,Wo=1,_l=2,wa=1,Ca=2,_n=3,Fn=0,Ht=1,xn=2,Un=0,xi=1,Xo=2,qo=3,jo=4,vl=5,kn=100,xl=101,Ml=102,Yo=103,Ko=104,Sl=200,El=201,yl=202,Tl=203,Eo=204,yo=205,bl=206,Al=207,wl=208,Cl=209,Rl=210,Ll=211,Pl=212,Dl=213,Ul=214,Il=0,Nl=1,Fl=2,Er=3,Ol=4,zl=5,Bl=6,Hl=7,Ra=0,Gl=1,kl=2,In=0,Vl=1,Wl=2,Xl=3,ql=4,jl=5,La=300,Si=301,Ei=302,To=303,bo=304,Lr=306,Ao=1e3,on=1001,wo=1002,Bt=1003,Zo=1004,Fr=1005,$t=1006,Yl=1007,Vi=1008,Nn=1009,Kl=1010,Zl=1011,Io=1012,Pa=1013,Pn=1014,Dn=1015,Wi=1016,Da=1017,Ua=1018,Yn=1020,$l=1021,sn=1023,Jl=1024,Ql=1025,Kn=1026,yi=1027,ec=1028,Ia=1029,tc=1030,Na=1031,Fa=1033,Or=33776,zr=33777,Br=33778,Hr=33779,$o=35840,Jo=35841,Qo=35842,es=35843,nc=36196,ts=37492,ns=37496,is=37808,rs=37809,os=37810,ss=37811,as=37812,ls=37813,cs=37814,hs=37815,us=37816,ds=37817,fs=37818,ps=37819,ms=37820,gs=37821,Gr=36492,_s=36494,vs=36495,ic=36283,xs=36284,Ms=36285,Ss=36286,Oa=3e3,Zn=3001,rc=3200,oc=3201,za=0,sc=1,Qt="",Ct="srgb",En="srgb-linear",No="display-p3",Pr="display-p3-linear",yr="linear",ft="srgb",Tr="rec709",br="p3",ei=7680,Es=519,ac=512,lc=513,cc=514,hc=515,uc=516,dc=517,fc=518,pc=519,ys=35044,Ts="300 es",Co=1035,Mn=2e3,Ar=2001;class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bs=1234567;const Hi=Math.PI/180,Xi=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Fo(n,e){return(n%e+e)%e}function mc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gc(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function _c(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function vc(n,e=1){return e-Math.abs(Fo(n,e*2)-e)}function xc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Sc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ec(n,e){return n+Math.random()*(e-n)}function yc(n){return n*(.5-Math.random())}function Tc(n){n!==void 0&&(bs=n);let e=bs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bc(n){return n*Hi}function Ac(n){return n*Xi}function Ro(n){return(n&n-1)===0&&n!==0}function wc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cc(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),l=a(t/2),c=o((e+i)/2),h=a((e+i)/2),d=o((e-i)/2),f=a((e-i)/2),m=o((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(s*h,l*d,l*f,s*c);break;case"YZY":n.set(l*f,s*h,l*d,s*c);break;case"ZXZ":n.set(l*d,l*f,s*h,s*c);break;case"XZX":n.set(s*h,l*g,l*m,s*c);break;case"YXY":n.set(l*m,s*h,l*g,s*c);break;case"ZYZ":n.set(l*g,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vn={DEG2RAD:Hi,RAD2DEG:Xi,generateUUID:bi,clamp:Pt,euclideanModulo:Fo,mapLinear:mc,inverseLerp:gc,lerp:Gi,damp:_c,pingpong:vc,smoothstep:xc,smootherstep:Mc,randInt:Sc,randFloat:Ec,randFloatSpread:yc,seededRandom:Tc,degToRad:bc,radToDeg:Ac,isPowerOfTwo:Ro,ceilPowerOfTwo:wc,floorPowerOfTwo:wr,setQuaternionFromProperEuler:Cc,normalize:Ot,denormalize:_i};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,r,o,a,s,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c)}set(e,t,i,r,o,a,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],b=r[1],x=r[4],E=r[7],y=r[2],C=r[5],A=r[8];return o[0]=a*_+s*b+l*y,o[3]=a*p+s*x+l*C,o[6]=a*u+s*E+l*A,o[1]=c*_+h*b+d*y,o[4]=c*p+h*x+d*C,o[7]=c*u+h*E+d*A,o[2]=f*_+m*b+g*y,o[5]=f*p+m*x+g*C,o[8]=f*u+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*s*c-i*o*h+i*s*l+r*o*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=h*a-s*c,f=s*l-h*o,m=c*o-a*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(s*i-r*a)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*o-s*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new rt;function Ba(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rc(){const n=Cr("canvas");return n.style.display="block",n}const As={};function ki(n){n in As||(As[n]=!0,console.warn(n))}const ws=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cs=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[En]:{transfer:yr,primaries:Tr,toReference:n=>n,fromReference:n=>n},[Ct]:{transfer:ft,primaries:Tr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pr]:{transfer:yr,primaries:br,toReference:n=>n.applyMatrix3(Cs),fromReference:n=>n.applyMatrix3(ws)},[No]:{transfer:ft,primaries:br,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Cs),fromReference:n=>n.applyMatrix3(ws).convertLinearToSRGB()}},Lc=new Set([En,Pr]),lt={enabled:!0,_workingColorSpace:En,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Lc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ki[e].toReference,r=Ki[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ki[n].primaries},getTransfer:function(n){return n===Qt?yr:Ki[n].transfer}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ti;class Ha{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Cr("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Mi(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pc=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Wr(r[a].image)):o.push(Wr(r[a]))}else o=Wr(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Wr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ha.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dc=0;class qt extends yn{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=on,r=on,o=$t,a=Vi,s=sn,l=Nn,c=qt.DEFAULT_ANISOTROPY,h=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=bi(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zn?Ct:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==La)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?Zn:Oa}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?Ct:Qt}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=La;qt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(m+1)/2,y=(u+1)/2,C=(h+f)/4,A=(d+_)/4,k=(g+p)/4;return x>E&&x>y?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=C/i,o=A/i):E>y?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=C/r,o=k/r):y<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),i=A/o,r=k/o),this.set(i,r,o,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends yn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Zn?Ct:Qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Uc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ka extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ic extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=o[a+0],m=o[a+1],g=o[a+2],_=o[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-s;const u=l*f+c*m+h*g+d*_,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const y=Math.sqrt(x),C=Math.atan2(y,u*b);p=Math.sin(p*C)/y,s=Math.sin(s*C)/y}const E=s*b;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,d=d*p+_*E,p===1-s){const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=o[a],f=o[a+1],m=o[a+2],g=o[a+3];return e[t]=s*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-s*m,e[t+2]=c*g+h*m+s*f-l*d,e[t+3]=h*g-s*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),d=s(o/2),f=l(i/2),m=l(r/2),g=l(o/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(a-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(o-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(a-r)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*s+r*c-o*l,this._y=r*h+a*l+o*s-i*c,this._z=o*h+a*c+i*l-r*s,this._w=a*h-i*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*r-s*i),h=2*(s*t-o*r),d=2*(o*i-a*t);return this.x=t+l*c+a*d-s*h,this.y=i+l*h+s*c-o*d,this.z=r+l*d+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,l=t.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new I,Rs=new un;class Qn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(o,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zi.copy(i.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),$i.subVectors(this.max,Li),ni.subVectors(e.a,Li),ii.subVectors(e.b,Li),ri.subVectors(e.c,Li),Tn.subVectors(ii,ni),bn.subVectors(ri,ii),On.subVectors(ni,ri);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-On.z,On.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,On.z,0,-On.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-On.y,On.x,0];return!qr(t,ni,ii,ri,$i)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,ni,ii,ri,$i))?!1:(Ji.crossVectors(Tn,bn),t=[Ji.x,Ji.y,Ji.z],qr(t,ni,ii,ri,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],en=new I,Zi=new Qn,ni=new I,ii=new I,ri=new I,Tn=new I,bn=new I,On=new I,Li=new I,$i=new I,Ji=new I,zn=new I;function qr(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){zn.fromArray(n,o);const s=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),h=i.dot(zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const Nc=new Qn,Pi=new I,jr=new I;class Ai{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nc.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(jr)),this.expandByPoint(Pi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new I,Yr=new I,Qi=new I,An=new I,Kr=new I,er=new I,Zr=new I;class Oo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Yr);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),s=An.dot(this.direction),l=-An.dot(Qi),c=An.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-s,f=a*s-l,g=o*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*s)+f*(a*d+f+2*l)+c}else f=o,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*o+s)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(a*o+s)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=a>0?-o:o,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yr).addScaledVector(Qi,f),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),r=fn.dot(fn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(o=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,r,o){Kr.subVectors(t,e),er.subVectors(i,e),Zr.crossVectors(Kr,er);let a=this.direction.dot(Zr),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=s*this.direction.dot(er.crossVectors(An,er));if(l<0)return null;const c=s*this.direction.dot(Kr.cross(An));if(c<0||l+c>a)return null;const h=-s*An.dot(Zr);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,o,a,s,l,c,h,d,f,m,g,_,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c,h,d,f,m,g,_,p)}set(e,t,i,r,o,a,s,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=o,u[5]=a,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oi.setFromMatrixColumn(e,0).length(),o=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=a*h,m=a*d,g=s*h,_=s*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-s*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-s,t[2]=m*s-g,t[6]=_+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*s,t[4]=-a*d,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*h,t[9]=_-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=s*h,_=s*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=s*l,_=s*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=s*l,_=s*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=s*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fc,e,Oc)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),wn.crossVectors(i,kt),wn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),wn.crossVectors(i,kt)),wn.normalize(),tr.crossVectors(kt,wn),r[0]=wn.x,r[4]=tr.x,r[8]=kt.x,r[1]=wn.y,r[5]=tr.y,r[9]=kt.y,r[2]=wn.z,r[6]=tr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],b=i[3],x=i[7],E=i[11],y=i[15],C=r[0],A=r[4],k=r[8],M=r[12],w=r[1],Y=r[5],X=r[9],J=r[13],D=r[2],G=r[6],K=r[10],$=r[14],re=r[3],ee=r[7],te=r[11],U=r[15];return o[0]=a*C+s*w+l*D+c*re,o[4]=a*A+s*Y+l*G+c*ee,o[8]=a*k+s*X+l*K+c*te,o[12]=a*M+s*J+l*$+c*U,o[1]=h*C+d*w+f*D+m*re,o[5]=h*A+d*Y+f*G+m*ee,o[9]=h*k+d*X+f*K+m*te,o[13]=h*M+d*J+f*$+m*U,o[2]=g*C+_*w+p*D+u*re,o[6]=g*A+_*Y+p*G+u*ee,o[10]=g*k+_*X+p*K+u*te,o[14]=g*M+_*J+p*$+u*U,o[3]=b*C+x*w+E*D+y*re,o[7]=b*A+x*Y+E*G+y*ee,o[11]=b*k+x*X+E*K+y*te,o[15]=b*M+x*J+E*$+y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+o*l*d-r*c*d-o*s*f+i*c*f+r*s*m-i*l*m)+_*(+t*l*m-t*c*f+o*a*f-r*a*m+r*c*h-o*l*h)+p*(+t*c*d-t*s*m-o*a*d+i*a*m+o*s*h-i*c*h)+u*(-r*s*h-t*l*d+t*s*f+r*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],b=d*p*c-_*f*c+_*l*m-s*p*m-d*l*u+s*f*u,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,E=h*_*c-g*d*c+g*s*m-a*_*m-h*s*u+a*d*u,y=g*d*l-h*_*l-g*s*f+a*_*f+h*s*p-a*d*p,C=t*b+i*x+r*E+o*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*f*o-d*p*o-_*r*m+i*p*m+d*r*u-i*f*u)*A,e[2]=(s*p*o-_*l*o+_*r*c-i*p*c-s*r*u+i*l*u)*A,e[3]=(d*l*o-s*f*o-d*r*c+i*f*c+s*r*m-i*l*m)*A,e[4]=x*A,e[5]=(h*p*o-g*f*o+g*r*m-t*p*m-h*r*u+t*f*u)*A,e[6]=(g*l*o-a*p*o-g*r*c+t*p*c+a*r*u-t*l*u)*A,e[7]=(a*f*o-h*l*o+h*r*c-t*f*c-a*r*m+t*l*m)*A,e[8]=E*A,e[9]=(g*d*o-h*_*o-g*i*m+t*_*m+h*i*u-t*d*u)*A,e[10]=(a*_*o-g*s*o+g*i*c-t*_*c-a*i*u+t*s*u)*A,e[11]=(h*s*o-a*d*o-h*i*c+t*d*c+a*i*m-t*s*m)*A,e[12]=y*A,e[13]=(h*_*r-g*d*r+g*i*f-t*_*f-h*i*p+t*d*p)*A,e[14]=(g*s*r-a*_*r-g*i*l+t*_*l+a*i*p-t*s*p)*A,e[15]=(a*d*r-h*s*r+h*i*l-t*d*l-a*i*f+t*s*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,l=e.z,c=o*a,h=o*s;return this.set(c*a+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*a,0,c*l-r*s,h*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,l=t._w,c=o+o,h=a+a,d=s+s,f=o*c,m=o*h,g=o*d,_=a*h,p=a*d,u=s*d,b=l*c,x=l*h,E=l*d,y=i.x,C=i.y,A=i.z;return r[0]=(1-(_+u))*y,r[1]=(m+E)*y,r[2]=(g-x)*y,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(f+u))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(g+x)*A,r[9]=(p-b)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=oi.set(r[0],r[1],r[2]).length();const a=oi.set(r[4],r[5],r[6]).length(),s=oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/o,h=1/a,d=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=Mn){const l=this.elements,c=2*o/(t-e),h=2*o/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(s===Mn)m=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===Ar)m=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=Mn){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(a-o),f=(t+e)*c,m=(i+r)*h;let g,_;if(s===Mn)g=(a+o)*d,_=-2*d;else if(s===Ar)g=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oi=new I,tn=new dt,Fc=new I(0,0,0),Oc=new I(1,1,1),wn=new I,tr=new I,kt=new I,Ls=new dt,Ps=new un;class Dr{constructor(e=0,t=0,i=0,r=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ls.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ls,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ps.setFromEuler(this),this.setFromQuaternion(Ps,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zc=0;const Ds=new I,si=new un,pn=new dt,nr=new I,Di=new I,Bc=new I,Hc=new un,Us=new I(1,0,0),Is=new I(0,1,0),Ns=new I(0,0,1),Gc={type:"added"},kc={type:"removed"};class vt extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new Dr,i=new un,r=new I(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new rt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Us,e)}rotateY(e){return this.rotateOnAxis(Is,e)}rotateZ(e){return this.rotateOnAxis(Ns,e)}translateOnAxis(e,t){return Ds.copy(e).applyQuaternion(this.quaternion),this.position.add(Ds.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Us,e)}translateY(e){return this.translateOnAxis(Is,e)}translateZ(e){return this.translateOnAxis(Ns,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nr.copy(e):nr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Di,nr,this.up):pn.lookAt(nr,Di,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),si.setFromRotationMatrix(pn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Hc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new I,mn=new I,$r=new I,gn=new I,ai=new I,li=new I,Fs=new I,Jr=new I,Qr=new I,eo=new I;let ir=!1;class rn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){nn.subVectors(r,t),mn.subVectors(i,t),$r.subVectors(e,t);const a=nn.dot(nn),s=nn.dot(mn),l=nn.dot($r),c=mn.dot(mn),h=mn.dot($r),d=a*c-s*s;if(d===0)return o.set(-2,-1,-1);const f=1/d,m=(c*l-s*h)*f,g=(a*h-s*l)*f;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,i,r,o,a,s,l){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),this.getInterpolation(e,t,i,r,o,a,s,l)}static getInterpolation(e,t,i,r,o,a,s,l){return this.getBarycoord(e,t,i,r,gn),l.setScalar(0),l.addScaledVector(o,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(s,gn.z),l}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),mn.subVectors(e,t),nn.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),nn.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;ai.subVectors(r,i),li.subVectors(o,i),Jr.subVectors(e,i);const l=ai.dot(Jr),c=li.dot(Jr);if(l<=0&&c<=0)return t.copy(i);Qr.subVectors(e,r);const h=ai.dot(Qr),d=li.dot(Qr);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ai,a);eo.subVectors(e,o);const m=ai.dot(eo),g=li.dot(eo);if(g>=0&&m<=g)return t.copy(o);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(li,s);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Fs.subVectors(o,r),s=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(Fs,s);const u=1/(p+_+f);return a=_*u,s=f*u,t.copy(i).addScaledVector(ai,a).addScaledVector(li,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function to(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=Fo(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=to(a,o,e+1/3),this.g=to(a,o,e),this.b=to(a,o,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const i=Wa[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return lt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Pt(Lt.r*255,0,255))*65536+Math.round(Pt(Lt.g*255,0,255))*256+Math.round(Pt(Lt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,o=Lt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,c;const h=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=h<=.5?d/(a+s):d/(2-a-s),a){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ct){lt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(rr);const i=Gi(Cn.h,rr.h,t),r=Gi(Cn.s,rr.s,t),o=Gi(Cn.l,rr.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new nt;nt.NAMES=Wa;let Vc=0;class wi extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=xi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=yo,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Es,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==yo&&(i.blendDst=this.blendDst),this.blendEquation!==kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Es&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zo extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new I,or=new Ye;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ys,this.updateRange={offset:0,count:-1},this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),o=Ot(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ys&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xa extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qa extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wc=0;const Kt=new dt,no=new vt,ci=new I,Vt=new Qn,Ui=new Qn,At=new I;class ln extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ba(e)?qa:Xa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new rt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Vt.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];Ui.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(Vt.min,Ui.min),Vt.expandByPoint(At),At.addVectors(Vt.max,Ui.max),Vt.expandByPoint(At)):(Vt.expandByPoint(Ui.min),Vt.expandByPoint(Ui.max))}Vt.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)At.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(At));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)At.fromBufferAttribute(s,c),l&&(ci.fromBufferAttribute(e,c),At.add(ci)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<s;w++)c[w]=new I,h[w]=new I;const d=new I,f=new I,m=new I,g=new Ye,_=new Ye,p=new Ye,u=new I,b=new I;function x(w,Y,X){d.fromArray(r,w*3),f.fromArray(r,Y*3),m.fromArray(r,X*3),g.fromArray(a,w*2),_.fromArray(a,Y*2),p.fromArray(a,X*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const J=1/(_.x*p.y-p.x*_.y);isFinite(J)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(J),b.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(J),c[w].add(u),c[Y].add(u),c[X].add(u),h[w].add(b),h[Y].add(b),h[X].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,Y=E.length;w<Y;++w){const X=E[w],J=X.start,D=X.count;for(let G=J,K=J+D;G<K;G+=3)x(i[G+0],i[G+1],i[G+2])}const y=new I,C=new I,A=new I,k=new I;function M(w){A.fromArray(o,w*3),k.copy(A);const Y=c[w];y.copy(Y),y.sub(A.multiplyScalar(A.dot(Y))).normalize(),C.crossVectors(k,Y);const J=C.dot(h[w])<0?-1:1;l[w*4]=y.x,l[w*4+1]=y.y,l[w*4+2]=y.z,l[w*4+3]=J}for(let w=0,Y=E.length;w<Y;++w){const X=E[w],J=X.start,D=X.count;for(let G=J,K=J+D;G<K;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new I,o=new I,a=new I,s=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,o),d.subVectors(r,o),h.cross(d),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),s.add(h),l.add(h),c.add(h),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,o),d.subVectors(r,o),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,d=s.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){s.isInterleavedBufferAttribute?m=l[_]*s.data.stride+s.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new jt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],d=o[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Os=new dt,Bn=new Oo,sr=new Ai,zs=new I,hi=new I,ui=new I,di=new I,io=new I,ar=new I,lr=new Ye,cr=new Ye,hr=new Ye,Bs=new I,Hs=new I,Gs=new I,ur=new I,dr=new I;class Xt extends vt{constructor(e=new ln,t=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){ar.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=s[l],d=o[l];h!==0&&(io.fromBufferAttribute(d,e),a?ar.addScaledVector(io,h):ar.addScaledVector(io.sub(t),h))}t.add(ar)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(o),Bn.copy(e.ray).recast(e.near),!(sr.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(sr,zs)===null||Bn.origin.distanceToSquared(zs)>(e.far-e.near)**2))&&(Os.copy(o).invert(),Bn.copy(e.ray).applyMatrix4(Os),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,y=x;E<y;E+=3){const C=s.getX(E),A=s.getX(E+1),k=s.getX(E+2);r=fr(this,u,e,i,c,h,d,C,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=s.getX(p),x=s.getX(p+1),E=s.getX(p+2);r=fr(this,a,e,i,c,h,d,b,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,y=x;E<y;E+=3){const C=E,A=E+1,k=E+2;r=fr(this,u,e,i,c,h,d,C,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=p,x=p+1,E=p+2;r=fr(this,a,e,i,c,h,d,b,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Xc(n,e,t,i,r,o,a,s){let l;if(e.side===Ht?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===Fn,s),l===null)return null;dr.copy(s),dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:n}}function fr(n,e,t,i,r,o,a,s,l,c){n.getVertexPosition(s,hi),n.getVertexPosition(l,ui),n.getVertexPosition(c,di);const h=Xc(n,e,t,i,hi,ui,di,ur);if(h){r&&(lr.fromBufferAttribute(r,s),cr.fromBufferAttribute(r,l),hr.fromBufferAttribute(r,c),h.uv=rn.getInterpolation(ur,hi,ui,di,lr,cr,hr,new Ye)),o&&(lr.fromBufferAttribute(o,s),cr.fromBufferAttribute(o,l),hr.fromBufferAttribute(o,c),h.uv1=rn.getInterpolation(ur,hi,ui,di,lr,cr,hr,new Ye),h.uv2=h.uv1),a&&(Bs.fromBufferAttribute(a,s),Hs.fromBufferAttribute(a,l),Gs.fromBufferAttribute(a,c),h.normal=rn.getInterpolation(ur,hi,ui,di,Bs,Hs,Gs,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new I,materialIndex:0};rn.getNormal(hi,ui,di,d.normal),h.face=d}return h}class ji extends ln{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,o,0),g("z","y","x",1,-1,i,t,-e,a,o,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(d,2));function g(_,p,u,b,x,E,y,C,A,k,M){const w=E/A,Y=y/k,X=E/2,J=y/2,D=C/2,G=A+1,K=k+1;let $=0,re=0;const ee=new I;for(let te=0;te<K;te++){const U=te*Y-J;for(let F=0;F<G;F++){const Me=F*w-X;ee[_]=Me*b,ee[p]=U*x,ee[u]=D,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[u]=C>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(F/A),d.push(1-te/k),$+=1}}for(let te=0;te<k;te++)for(let U=0;U<A;U++){const F=f+U+G*te,Me=f+U+G*(te+1),xe=f+(U+1)+G*(te+1),oe=f+(U+1)+G*te;l.push(F,Me,oe),l.push(Me,xe,oe),re+=6}s.addGroup(m,re,M),m+=re,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const r in i)e[r]=i[r]}return e}function qc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ja(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}const jc={clone:Ti,merge:zt};var Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=Kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ya extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Ya{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Zc extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(fi,pi,e,t);r.layers=this.layers,this.add(r);const o=new Jt(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new Jt(fi,pi,e,t);a.layers=this.layers,this.add(a);const s=new Jt(fi,pi,e,t);s.layers=this.layers,this.add(s);const l=new Jt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,l]=t;for(const c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ka extends qt{constructor(e,t,i,r,o,a,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,i,r,o,a,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $c extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?Ct:Qt),this.texture=new Ka(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),o=new Jn({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Un});o.uniforms.tEquirect.value=t;const a=new Xt(r,o),s=t.minFilter;return t.minFilter===Vi&&(t.minFilter=$t),new Zc(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const ro=new I,Jc=new I,Qc=new rt;class Ln{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross(Jc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qc.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Ai,pr=new I;class Ur{constructor(e=new Ln,t=new Ln,i=new Ln,r=new Ln,o=new Ln,a=new Ln){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],b=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-o,f-c,p-m,E-u).normalize(),i[1].setComponents(l+o,f+c,p+m,E+u).normalize(),i[2].setComponents(l+a,f+h,p+g,E+b).normalize(),i[3].setComponents(l-a,f-h,p-g,E-b).normalize(),i[4].setComponents(l-s,f-d,p-_,E-x).normalize(),t===Mn)i[5].setComponents(l+s,f+d,p+_,E+x).normalize();else if(t===Ar)i[5].setComponents(s,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Za(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function eh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function o(c,h,d){const f=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(o(d.buffer,c,h),d.version=c.version)}return{get:a,remove:s,update:l}}class Bo extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,d=e/s,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const b=u*f-a;for(let x=0;x<c;x++){const E=x*d-o;g.push(E,-b,0),_.push(0,0,1),p.push(x/s),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<s;b++){const x=b+c*u,E=b+c*(u+1),y=b+1+c*(u+1),C=b+1+c*u;m.push(x,E,C),m.push(E,y,C)}this.setIndex(m),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var th=`#ifdef USE_ALPHAHASH
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
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`
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
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
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
}`,Cd=`#include <common>
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
}`,Rd=`uniform vec3 color;
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
}`,tt={alphahash_fragment:th,alphahash_pars_fragment:nh,alphamap_fragment:ih,alphamap_pars_fragment:rh,alphatest_fragment:oh,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:lh,begin_vertex:ch,beginnormal_vertex:hh,bsdfs:uh,iridescence_fragment:dh,bumpmap_pars_fragment:fh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:xh,color_pars_vertex:Mh,color_vertex:Sh,common:Eh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Th,displacementmap_pars_vertex:bh,displacementmap_vertex:Ah,emissivemap_fragment:wh,emissivemap_pars_fragment:Ch,colorspace_fragment:Rh,colorspace_pars_fragment:Lh,envmap_fragment:Ph,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Uh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:qh,envmap_vertex:Nh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:zh,fog_pars_fragment:Bh,gradientmap_pars_fragment:Hh,lightmap_fragment:Gh,lightmap_pars_fragment:kh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:jh,lights_toon_pars_fragment:Yh,lights_phong_fragment:Kh,lights_phong_pars_fragment:Zh,lights_physical_fragment:$h,lights_physical_pars_fragment:Jh,lights_fragment_begin:Qh,lights_fragment_maps:eu,lights_fragment_end:tu,logdepthbuf_fragment:nu,logdepthbuf_pars_fragment:iu,logdepthbuf_pars_vertex:ru,logdepthbuf_vertex:ou,map_fragment:su,map_pars_fragment:au,map_particle_fragment:lu,map_particle_pars_fragment:cu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:uu,morphcolor_vertex:du,morphnormal_vertex:fu,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:gu,normal_fragment_maps:_u,normal_pars_fragment:vu,normal_pars_vertex:xu,normal_vertex:Mu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:yu,clearcoat_pars_fragment:Tu,iridescence_pars_fragment:bu,opaque_fragment:Au,packing:wu,premultiplied_alpha_fragment:Cu,project_vertex:Ru,dithering_fragment:Lu,dithering_pars_fragment:Pu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Uu,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Nu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Ou,skinbase_vertex:zu,skinning_pars_vertex:Bu,skinning_vertex:Hu,skinnormal_vertex:Gu,specularmap_fragment:ku,specularmap_pars_fragment:Vu,tonemapping_fragment:Wu,tonemapping_pars_fragment:Xu,transmission_fragment:qu,transmission_pars_fragment:ju,uv_pars_fragment:Yu,uv_pars_vertex:Ku,uv_vertex:Zu,worldpos_vertex:$u,background_vert:Ju,background_frag:Qu,backgroundCube_vert:ed,backgroundCube_frag:td,cube_vert:nd,cube_frag:id,depth_vert:rd,depth_frag:od,distanceRGBA_vert:sd,distanceRGBA_frag:ad,equirect_vert:ld,equirect_frag:cd,linedashed_vert:hd,linedashed_frag:ud,meshbasic_vert:dd,meshbasic_frag:fd,meshlambert_vert:pd,meshlambert_frag:md,meshmatcap_vert:gd,meshmatcap_frag:_d,meshnormal_vert:vd,meshnormal_frag:xd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:Ed,meshphysical_frag:yd,meshtoon_vert:Td,meshtoon_frag:bd,points_vert:Ad,points_frag:wd,shadow_vert:Cd,shadow_frag:Rd,sprite_vert:Ld,sprite_frag:Pd},De={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},hn={basic:{uniforms:zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:zt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:zt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:zt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:zt([De.points,De.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:zt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:zt([De.common,De.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:zt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:zt([De.sprite,De.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:zt([De.common,De.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:zt([De.lights,De.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};hn.physical={uniforms:zt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const mr={r:0,b:0,g:0};function Dd(n,e,t,i,r,o,a){const s=new nt(0);let l=o===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let b=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(s,l):x&&x.isColor&&(_(x,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Lr)?(h===void 0&&(h=new Xt(new ji(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ti(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=lt.getTransfer(x.colorSpace)!==ft,(d!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xt(new Bo(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ti(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=lt.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(mr,ja(n)),i.buffers.color.setClear(mr.r,mr.g,mr.b,u,a)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),l=u,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(s,l)},render:g}}function Ud(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,s={},l=p(null);let c=l,h=!1;function d(D,G,K,$,re){let ee=!1;if(a){const te=_($,K,G);c!==te&&(c=te,m(c.object)),ee=u(D,$,K,re),ee&&b(D,$,K,re)}else{const te=G.wireframe===!0;(c.geometry!==$.id||c.program!==K.id||c.wireframe!==te)&&(c.geometry=$.id,c.program=K.id,c.wireframe=te,ee=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,k(D,G,K,$),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):o.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):o.deleteVertexArrayOES(D)}function _(D,G,K){const $=K.wireframe===!0;let re=s[D.id];re===void 0&&(re={},s[D.id]=re);let ee=re[G.id];ee===void 0&&(ee={},re[G.id]=ee);let te=ee[$];return te===void 0&&(te=p(f()),ee[$]=te),te}function p(D){const G=[],K=[],$=[];for(let re=0;re<r;re++)G[re]=0,K[re]=0,$[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:$,object:D,attributes:{},index:null}}function u(D,G,K,$){const re=c.attributes,ee=G.attributes;let te=0;const U=K.getAttributes();for(const F in U)if(U[F].location>=0){const xe=re[F];let oe=ee[F];if(oe===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),xe===void 0||xe.attribute!==oe||oe&&xe.data!==oe.data)return!0;te++}return c.attributesNum!==te||c.index!==$}function b(D,G,K,$){const re={},ee=G.attributes;let te=0;const U=K.getAttributes();for(const F in U)if(U[F].location>=0){let xe=ee[F];xe===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor));const oe={};oe.attribute=xe,xe&&xe.data&&(oe.data=xe.data),re[F]=oe,te++}c.attributes=re,c.attributesNum=te,c.index=$}function x(){const D=c.newAttributes;for(let G=0,K=D.length;G<K;G++)D[G]=0}function E(D){y(D,0)}function y(D,G){const K=c.newAttributes,$=c.enabledAttributes,re=c.attributeDivisors;K[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),re[D]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),re[D]=G)}function C(){const D=c.newAttributes,G=c.enabledAttributes;for(let K=0,$=G.length;K<$;K++)G[K]!==D[K]&&(n.disableVertexAttribArray(K),G[K]=0)}function A(D,G,K,$,re,ee,te){te===!0?n.vertexAttribIPointer(D,G,K,re,ee):n.vertexAttribPointer(D,G,K,$,re,ee)}function k(D,G,K,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const re=$.attributes,ee=K.getAttributes(),te=G.defaultAttributeValues;for(const U in ee){const F=ee[U];if(F.location>=0){let Me=re[U];if(Me===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),Me!==void 0){const xe=Me.normalized,oe=Me.itemSize,fe=t.get(Me);if(fe===void 0)continue;const z=fe.buffer,Q=fe.type,_e=fe.bytesPerElement,Oe=i.isWebGL2===!0&&(Q===n.INT||Q===n.UNSIGNED_INT||Me.gpuType===Pa);if(Me.isInterleavedBufferAttribute){const Fe=Me.data,O=Fe.stride,et=Me.offset;if(Fe.isInstancedInterleavedBuffer){for(let ve=0;ve<F.locationSize;ve++)y(F.location+ve,Fe.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let ve=0;ve<F.locationSize;ve++)E(F.location+ve);n.bindBuffer(n.ARRAY_BUFFER,z);for(let ve=0;ve<F.locationSize;ve++)A(F.location+ve,oe/F.locationSize,Q,xe,O*_e,(et+oe/F.locationSize*ve)*_e,Oe)}else{if(Me.isInstancedBufferAttribute){for(let Fe=0;Fe<F.locationSize;Fe++)y(F.location+Fe,Me.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Fe=0;Fe<F.locationSize;Fe++)E(F.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,z);for(let Fe=0;Fe<F.locationSize;Fe++)A(F.location+Fe,oe/F.locationSize,Q,xe,oe*_e,oe/F.locationSize*Fe*_e,Oe)}}else if(te!==void 0){const xe=te[U];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(F.location,xe);break;case 3:n.vertexAttrib3fv(F.location,xe);break;case 4:n.vertexAttrib4fv(F.location,xe);break;default:n.vertexAttrib1fv(F.location,xe)}}}}C()}function M(){X();for(const D in s){const G=s[D];for(const K in G){const $=G[K];for(const re in $)g($[re].object),delete $[re];delete G[K]}delete s[D]}}function w(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const K in G){const $=G[K];for(const re in $)g($[re].object),delete $[re];delete G[K]}delete s[D.id]}function Y(D){for(const G in s){const K=s[G];if(K[D.id]===void 0)continue;const $=K[D.id];for(const re in $)g($[re].object),delete $[re];delete K[D.id]}}function X(){J(),h=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:Y,initAttributes:x,enableAttribute:E,disableUnusedAttributes:C}}function Id(n,e,t,i){const r=i.isWebGL2;let o;function a(c){o=c}function s(c,h){n.drawArrays(o,c,h),t.update(h,o,1)}function l(c,h,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](o,c,h,d),t.update(h,o,d)}this.setMode=a,this.render=s,this.renderInstances=l}function Nd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=a||e.has("OES_texture_float"),y=x&&E,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:y,maxSamples:C}}function Fd(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new Ln,s=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||o&&!p)o?h(null):c();else{const b=o?0:i,x=b*4;let E=u.clippingState||null;l.value=E,E=h(g,f,x,m);for(let y=0;y!==x;++y)E[y]=t[y];u.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,b=f.matrixWorldInverse;s.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,E=m;x!==_;++x,E+=4)a.copy(d[x]).applyMatrix4(b,s),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Od(n){let e=new WeakMap;function t(a,s){return s===To?a.mapping=Si:s===bo&&(a.mapping=Ei),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===To||s===bo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $c(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class $a extends Ya{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,ks=[.125,.215,.35,.446,.526,.582],Vn=20,oo=new $a,Vs=new nt;let so=null,ao=0,lo=0;const Gn=(1+Math.sqrt(5))/2,mi=1/Gn,Ws=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Gn,mi),new I(0,Gn,-mi),new I(mi,0,Gn),new I(-mi,0,Gn),new I(Gn,mi,0),new I(-Gn,mi,0)];class Xs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=js(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(so,ao,lo),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Wi,format:sn,colorSpace:En,depthBuffer:!1},r=qs(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qs(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(o)),this._blurMaterial=Bd(o,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,i,r){const s=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Vs),h.toneMapping=In,h.autoClear=!1;const m=new zo({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Xt(new ji,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Vs),_=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):b===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const x=this._cubeSize;gr(r,b*x,u>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,s),h.render(e,s)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Si||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ys()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=js());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ws[(r-1)%Ws.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),_=o/g,p=isFinite(o)?1+Math.floor(h*_):Vn;p>Vn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const u=[];let b=0;for(let A=0;A<Vn;++A){const k=A/_,M=Math.exp(-k*k/2);u.push(M),A===0?b+=M:A<p&&(b+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const E=this._sizeLods[r],y=3*E*(r>x-vi?r-x+vi:0),C=4*(this._cubeSize-E);gr(t,y,C,3*E,2*E),l.setRenderTarget(t),l.render(d,oo)}}function zd(n){const e=[],t=[],i=[];let r=n;const o=n-vi+1+ks.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let l=1/s;a>n-vi?l=ks[a-n+vi-1]:a===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,b=new Float32Array(_*g*m),x=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,k=C>2?0:-1,M=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];b.set(M,_*g*C),x.set(f,p*g*C);const w=[C,C,C,C,C,C];E.set(w,u*g*C)}const y=new ln;y.setAttribute("position",new jt(b,_)),y.setAttribute("uv",new jt(x,p)),y.setAttribute("faceIndex",new jt(E,u)),e.push(y),r>vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qs(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bd(n,e,t){const i=new Float32Array(Vn),r=new I(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function js(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ys(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function Hd(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===To||l===bo,h=l===Si||l===Ei;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Xs(n)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Xs(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",o),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Gd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kd(n,e,t,i){const r={},o=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let x=0,E=b.length;x<E;x+=3){const y=b[x+0],C=b[x+1],A=b[x+2];f.push(y,C,C,A,A,y)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,E=b.length/3-1;x<E;x+=3){const y=x+0,C=x+1,A=x+2;f.push(y,C,C,A,A,y)}}else return;const p=new(Ba(f)?qa:Xa)(f,1);p.version=_;const u=o.get(d);u&&e.remove(u),o.set(d,p)}function h(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function Vd(n,e,t,i){const r=i.isWebGL2;let o;function a(f){o=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function h(f,m){n.drawElements(o,m,s,f*l),t.update(m,o,1)}function d(f,m,g){if(g===0)return;let _,p;if(r)_=n,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](o,m,s,f*l,g),t.update(m,o,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Wd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xd(n,e){return n[0]-e[0]}function qd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function jd(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,a=new wt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=o.get(h);if(p===void 0||p.count!==_){let G=function(){J.dispose(),o.delete(h),h.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),E===!0&&(M=2),y===!0&&(M=3);let w=h.attributes.position.count*M,Y=1;w>e.maxTextureSize&&(Y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const X=new Float32Array(w*Y*4*_),J=new ka(X,w,Y,_);J.type=Dn,J.needsUpdate=!0;const D=M*4;for(let K=0;K<_;K++){const $=C[K],re=A[K],ee=k[K],te=w*Y*4*K;for(let U=0;U<$.count;U++){const F=U*D;x===!0&&(a.fromBufferAttribute($,U),X[te+F+0]=a.x,X[te+F+1]=a.y,X[te+F+2]=a.z,X[te+F+3]=0),E===!0&&(a.fromBufferAttribute(re,U),X[te+F+4]=a.x,X[te+F+5]=a.y,X[te+F+6]=a.z,X[te+F+7]=0),y===!0&&(a.fromBufferAttribute(ee,U),X[te+F+8]=a.x,X[te+F+9]=a.y,X[te+F+10]=a.z,X[te+F+11]=ee.itemSize===4?a.w:1)}}p={count:_,texture:J,size:new Ye(w,Y)},o.set(h,p),h.addEventListener("dispose",G)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];i[h.id]=_}for(let E=0;E<g;E++){const y=_[E];y[0]=E,y[1]=f[E]}_.sort(qd);for(let E=0;E<8;E++)E<g&&_[E][1]?(s[E][0]=_[E][0],s[E][1]=_[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(Xd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const y=s[E],C=y[0],A=y[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+E)!==p[C]&&h.setAttribute("morphTarget"+E,p[C]),u&&h.getAttribute("morphNormal"+E)!==u[C]&&h.setAttribute("morphNormal"+E,u[C]),r[E]=A,b+=A):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),u&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const x=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Yd(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const Ja=new qt,Qa=new ka,el=new Ic,tl=new Ka,Ks=[],Zs=[],$s=new Float32Array(16),Js=new Float32Array(9),Qs=new Float32Array(4);function Ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Ks[r];if(o===void 0&&(o=new Float32Array(r),Ks[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ir(n,e){let t=Zs[e];t===void 0&&(t=new Int32Array(e),Zs[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function $d(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Jd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Qd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Qs.set(i),n.uniformMatrix2fv(this.addr,!1,Qs),yt(t,i)}}function ef(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Js.set(i),n.uniformMatrix3fv(this.addr,!1,Js),yt(t,i)}}function tf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;$s.set(i),n.uniformMatrix4fv(this.addr,!1,$s),yt(t,i)}}function nf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function af(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function uf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ja,r)}function df(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||el,r)}function ff(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tl,r)}function pf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qa,r)}function mf(n){switch(n){case 5126:return Kd;case 35664:return Zd;case 35665:return $d;case 35666:return Jd;case 35674:return Qd;case 35675:return ef;case 35676:return tf;case 5124:case 35670:return nf;case 35667:case 35671:return rf;case 35668:case 35672:return of;case 35669:case 35673:return sf;case 5125:return af;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}function gf(n,e){n.uniform1fv(this.addr,e)}function _f(n,e){const t=Ci(e,this.size,2);n.uniform2fv(this.addr,t)}function vf(n,e){const t=Ci(e,this.size,3);n.uniform3fv(this.addr,t)}function xf(n,e){const t=Ci(e,this.size,4);n.uniform4fv(this.addr,t)}function Mf(n,e){const t=Ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sf(n,e){const t=Ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ef(n,e){const t=Ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yf(n,e){n.uniform1iv(this.addr,e)}function Tf(n,e){n.uniform2iv(this.addr,e)}function bf(n,e){n.uniform3iv(this.addr,e)}function Af(n,e){n.uniform4iv(this.addr,e)}function wf(n,e){n.uniform1uiv(this.addr,e)}function Cf(n,e){n.uniform2uiv(this.addr,e)}function Rf(n,e){n.uniform3uiv(this.addr,e)}function Lf(n,e){n.uniform4uiv(this.addr,e)}function Pf(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);Et(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ja,o[a])}function Df(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);Et(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||el,o[a])}function Uf(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);Et(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tl,o[a])}function If(n,e,t){const i=this.cache,r=e.length,o=Ir(t,r);Et(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qa,o[a])}function Nf(n){switch(n){case 5126:return gf;case 35664:return _f;case 35665:return vf;case 35666:return xf;case 35674:return Mf;case 35675:return Sf;case 35676:return Ef;case 5124:case 35670:return yf;case 35667:case 35671:return Tf;case 35668:case 35672:return bf;case 35669:case 35673:return Af;case 5125:return wf;case 36294:return Cf;case 36295:return Rf;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return If}}class Ff{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=mf(t.type)}}class Of{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Nf(t.type)}}class zf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const co=/(\w+)(\])?(\[|\.)?/g;function ea(n,e){n.seq.push(e),n.map[e.id]=e}function Bf(n,e,t){const i=n.name,r=i.length;for(co.lastIndex=0;;){const o=co.exec(i),a=co.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){ea(t,c===void 0?new Ff(s,n,e):new Of(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new zf(s),ea(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Bf(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ta(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hf=37297;let Gf=0;function kf(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function Vf(n){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n);let i;switch(e===t?i="":e===br&&t===Tr?i="LinearDisplayP3ToLinearSRGB":e===Tr&&t===br&&(i="LinearSRGBToLinearDisplayP3"),n){case En:case Pr:return[i,"LinearTransferOETF"];case Ct:case No:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function na(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+kf(n.getShaderSource(e),a)}else return r}function Wf(n,e){const t=Vf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xf(n,e){let t;switch(e){case Vl:t="Linear";break;case Wl:t="Reinhard";break;case Xl:t="OptimizedCineon";break;case ql:t="ACESFilmic";break;case jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function jf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function zi(n){return n!==""}function ia(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ra(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(n){return n.replace(Kf,$f)}const Zf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $f(n,e){let t=tt[e];if(t===void 0){const i=Zf.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const Jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oa(n){return n.replace(Jf,Qf)}function Qf(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function sa(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ep(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ca?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function tp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case Ei:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function np(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function ip(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ra:e="ENVMAP_BLENDING_MULTIPLY";break;case Gl:e="ENVMAP_BLENDING_MIX";break;case kl:e="ENVMAP_BLENDING_ADD";break}return e}function rp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function op(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=ep(t),c=tp(t),h=np(t),d=ip(t),f=rp(t),m=t.isWebGL2?"":qf(t),g=jf(o),_=r.createProgram();let p,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),u.length>0&&(u+=`
`)):(p=[sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),u=[m,sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?tt.tonemapping_pars_fragment:"",t.toneMapping!==In?Xf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Wf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=Lo(a),a=ia(a,t),a=ra(a,t),s=Lo(s),s=ia(s,t),s=ra(s,t),a=oa(a),s=oa(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ts?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ts?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=b+p+a,E=b+u+s,y=ta(r,r.VERTEX_SHADER,x),C=ta(r,r.FRAGMENT_SHADER,E);r.attachShader(_,y),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(Y){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),J=r.getShaderInfoLog(y).trim(),D=r.getShaderInfoLog(C).trim();let G=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,y,C);else{const $=na(r,y,"vertex"),re=na(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+$+`
`+re)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(J===""||D==="")&&(K=!1);K&&(Y.diagnostics={runnable:G,programLog:X,vertexShader:{log:J,prefix:p},fragmentShader:{log:D,prefix:u}})}r.deleteShader(y),r.deleteShader(C),k=new Mr(r,_),M=Yf(r,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,Hf)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=C,this}let sp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lp(e),t.set(e,i)),i}}class lp{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function cp(n,e,t,i,r,o,a){const s=new Va,l=new ap,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,w,Y,X,J){const D=X.fog,G=J.geometry,K=M.isMeshStandardMaterial?X.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),re=$&&$.mapping===Lr?$.image.height:null,ee=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,U=te!==void 0?te.length:0;let F=0;G.morphAttributes.position!==void 0&&(F=1),G.morphAttributes.normal!==void 0&&(F=2),G.morphAttributes.color!==void 0&&(F=3);let Me,xe,oe,fe;if(ee){const it=hn[ee];Me=it.vertexShader,xe=it.fragmentShader}else Me=M.vertexShader,xe=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const z=n.getRenderTarget(),Q=J.isInstancedMesh===!0,_e=!!M.map,Oe=!!M.matcap,Fe=!!$,O=!!M.aoMap,et=!!M.lightMap,ve=!!M.bumpMap,de=!!M.normalMap,Ne=!!M.displacementMap,We=!!M.emissiveMap,Le=!!M.metalnessMap,Pe=!!M.roughnessMap,ze=M.anisotropy>0,Ge=M.clearcoat>0,$e=M.iridescence>0,T=M.sheen>0,v=M.transmission>0,B=ze&&!!M.anisotropyMap,ae=Ge&&!!M.clearcoatMap,se=Ge&&!!M.clearcoatNormalMap,ue=Ge&&!!M.clearcoatRoughnessMap,be=$e&&!!M.iridescenceMap,pe=$e&&!!M.iridescenceThicknessMap,Se=T&&!!M.sheenColorMap,R=T&&!!M.sheenRoughnessMap,ce=!!M.specularMap,ie=!!M.specularColorMap,Be=!!M.specularIntensityMap,Ue=v&&!!M.transmissionMap,Re=v&&!!M.thicknessMap,Ae=!!M.gradientMap,ye=!!M.alphaMap,Ve=M.alphaTest>0,P=!!M.alphaHash,Ee=!!M.extensions,he=!!G.attributes.uv1,q=!!G.attributes.uv2,me=!!G.attributes.uv3;let Ie=In;return M.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ie=n.toneMapping),{isWebGL2:h,shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:Me,fragmentShader:xe,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Q,instancingColor:Q&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:En,map:_e,matcap:Oe,envMap:Fe,envMapMode:Fe&&$.mapping,envMapCubeUVHeight:re,aoMap:O,lightMap:et,bumpMap:ve,normalMap:de,displacementMap:f&&Ne,emissiveMap:We,normalMapObjectSpace:de&&M.normalMapType===sc,normalMapTangentSpace:de&&M.normalMapType===za,metalnessMap:Le,roughnessMap:Pe,anisotropy:ze,anisotropyMap:B,clearcoat:Ge,clearcoatMap:ae,clearcoatNormalMap:se,clearcoatRoughnessMap:ue,iridescence:$e,iridescenceMap:be,iridescenceThicknessMap:pe,sheen:T,sheenColorMap:Se,sheenRoughnessMap:R,specularMap:ce,specularColorMap:ie,specularIntensityMap:Be,transmission:v,transmissionMap:Ue,thicknessMap:Re,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===xi,alphaMap:ye,alphaTest:Ve,alphaHash:P,combine:M.combine,mapUv:_e&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:et&&_(M.lightMap.channel),bumpMapUv:ve&&_(M.bumpMap.channel),normalMapUv:de&&_(M.normalMap.channel),displacementMapUv:Ne&&_(M.displacementMap.channel),emissiveMapUv:We&&_(M.emissiveMap.channel),metalnessMapUv:Le&&_(M.metalnessMap.channel),roughnessMapUv:Pe&&_(M.roughnessMap.channel),anisotropyMapUv:B&&_(M.anisotropyMap.channel),clearcoatMapUv:ae&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:R&&_(M.sheenRoughnessMap.channel),specularMapUv:ce&&_(M.specularMap.channel),specularColorMapUv:ie&&_(M.specularColorMap.channel),specularIntensityMapUv:Be&&_(M.specularIntensityMap.channel),transmissionMapUv:Ue&&_(M.transmissionMap.channel),thicknessMapUv:Re&&_(M.thicknessMap.channel),alphaMapUv:ye&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(de||ze),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:q,vertexUv3s:me,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(_e||ye),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:F,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,useLegacyLights:n._useLegacyLights,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ee&&M.extensions.derivatives===!0,extensionFragDepth:Ee&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)w.push(Y),w.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(b(w,M),x(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function b(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function E(M){const w=g[M.type];let Y;if(w){const X=hn[w];Y=jc.clone(X.uniforms)}else Y=M.uniforms;return Y}function y(M,w){let Y;for(let X=0,J=c.length;X<J;X++){const D=c[X];if(D.cacheKey===w){Y=D,++Y.usedTimes;break}}return Y===void 0&&(Y=new op(n,w,M,o),c.push(Y)),Y}function C(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:y,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:k}}function hp(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function aa(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function la(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function s(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||up),i.length>1&&i.sort(f||aa),r.length>1&&r.sort(f||aa)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:h,sort:c}}function dp(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new la,n.set(i,[a])):r>=o.length?(a=new la,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new nt};break;case"SpotLight":t={position:new I,direction:new I,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function pp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mp=0;function gp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _p(n,e){const t=new fp,i=pp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new I);const o=new I,a=new dt,s=new dt;function l(h,d){let f=0,m=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,p=0,u=0,b=0,x=0,E=0,y=0,C=0,A=0,k=0,M=0;h.sort(gp);const w=d===!0?Math.PI:1;for(let X=0,J=h.length;X<J;X++){const D=h[X],G=D.color,K=D.intensity,$=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*K*w,m+=G.g*K*w,g+=G.b*K*w;else if(D.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(D.sh.coefficients[ee],K);M++}else if(D.isDirectionalLight){const ee=t.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const te=D.shadow,U=i.get(D);U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,r.directionalShadow[_]=U,r.directionalShadowMap[_]=re,r.directionalShadowMatrix[_]=D.shadow.matrix,E++}r.directional[_]=ee,_++}else if(D.isSpotLight){const ee=t.get(D);ee.position.setFromMatrixPosition(D.matrixWorld),ee.color.copy(G).multiplyScalar(K*w),ee.distance=$,ee.coneCos=Math.cos(D.angle),ee.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ee.decay=D.decay,r.spot[u]=ee;const te=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,te.updateMatrices(D),D.castShadow&&k++),r.spotLightMatrix[u]=te.matrix,D.castShadow){const U=i.get(D);U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,r.spotShadow[u]=U,r.spotShadowMap[u]=re,C++}u++}else if(D.isRectAreaLight){const ee=t.get(D);ee.color.copy(G).multiplyScalar(K),ee.halfWidth.set(D.width*.5,0,0),ee.halfHeight.set(0,D.height*.5,0),r.rectArea[b]=ee,b++}else if(D.isPointLight){const ee=t.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity*w),ee.distance=D.distance,ee.decay=D.decay,D.castShadow){const te=D.shadow,U=i.get(D);U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,U.shadowCameraNear=te.camera.near,U.shadowCameraFar=te.camera.far,r.pointShadow[p]=U,r.pointShadowMap[p]=re,r.pointShadowMatrix[p]=D.shadow.matrix,y++}r.point[p]=ee,p++}else if(D.isHemisphereLight){const ee=t.get(D);ee.skyColor.copy(D.color).multiplyScalar(K*w),ee.groundColor.copy(D.groundColor).multiplyScalar(K*w),r.hemi[x]=ee,x++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const Y=r.hash;(Y.directionalLength!==_||Y.pointLength!==p||Y.spotLength!==u||Y.rectAreaLength!==b||Y.hemiLength!==x||Y.numDirectionalShadows!==E||Y.numPointShadows!==y||Y.numSpotShadows!==C||Y.numSpotMaps!==A||Y.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=b,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=C+A-k,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=M,Y.directionalLength=_,Y.pointLength=p,Y.spotLength=u,Y.rectAreaLength=b,Y.hemiLength=x,Y.numDirectionalShadows=E,Y.numPointShadows=y,Y.numSpotShadows=C,Y.numSpotMaps=A,Y.numLightProbes=M,r.version=mp++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const E=h[b];if(E.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(u),f++}else if(E.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(u),g++}else if(E.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),s.identity(),a.copy(E.matrixWorld),a.premultiply(u),s.extractRotation(a),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ca(n,e){const t=new _p(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(d){i.push(d)}function s(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function vp(n,e){let t=new WeakMap;function i(o,a=0){const s=t.get(o);let l;return s===void 0?(l=new ca(n,e),t.set(o,[l])):a>=s.length?(l=new ca(n,e),s.push(l)):l=s[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class xp extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mp extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sp=`void main() {
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
}`;function yp(n,e,t){let i=new Ur;const r=new Ye,o=new Ye,a=new wt,s=new xp({depthPacking:oc}),l=new Mp,c={},h=t.maxTextureSize,d={[Fn]:Ht,[Ht]:Fn,[xn]:xn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Sp,fragmentShader:Ep}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let u=this.type;this.render=function(y,C,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const k=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Un),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const X=u!==_n&&this.type===_n,J=u===_n&&this.type!==_n;for(let D=0,G=y.length;D<G;D++){const K=y[D],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const re=$.getFrameExtents();if(r.multiply(re),o.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/re.x),r.x=o.x*re.x,$.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/re.y),r.y=o.y*re.y,$.mapSize.y=o.y)),$.map===null||X===!0||J===!0){const te=this.type!==_n?{minFilter:Bt,magFilter:Bt}:{};$.map!==null&&$.map.dispose(),$.map=new $n(r.x,r.y,te),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ee=$.getViewportCount();for(let te=0;te<ee;te++){const U=$.getViewport(te);a.set(o.x*U.x,o.y*U.y,o.x*U.z,o.y*U.w),Y.viewport(a),$.updateMatrices(K,te),i=$.getFrustum(),E(C,A,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===_n&&b($,A),$.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(k,M,w)};function b(y,C){const A=e.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new $n(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(C,null,A,f,_,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(C,null,A,m,_,null)}function x(y,C,A,k){let M=null;const w=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)M=w;else if(M=A.isPointLight===!0?l:s,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=M.uuid,X=C.uuid;let J=c[Y];J===void 0&&(J={},c[Y]=J);let D=J[X];D===void 0&&(D=M.clone(),J[X]=D),M=D}if(M.visible=C.visible,M.wireframe=C.wireframe,k===_n?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=A}return M}function E(y,C,A,k,M){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===_n)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const X=e.update(y),J=y.material;if(Array.isArray(J)){const D=X.groups;for(let G=0,K=D.length;G<K;G++){const $=D[G],re=J[$.materialIndex];if(re&&re.visible){const ee=x(y,re,k,M);n.renderBufferDirect(A,null,X,ee,y,$)}}}else if(J.visible){const D=x(y,J,k,M);n.renderBufferDirect(A,null,X,D,y,null)}}const Y=y.children;for(let X=0,J=Y.length;X<J;X++)E(Y[X],C,A,k,M)}}function Tp(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const Ee=new wt;let he=null;const q=new wt(0,0,0,0);return{setMask:function(me){he!==me&&!P&&(n.colorMask(me,me,me,me),he=me)},setLocked:function(me){P=me},setClear:function(me,Ie,Xe,it,ct){ct===!0&&(me*=it,Ie*=it,Xe*=it),Ee.set(me,Ie,Xe,it),q.equals(Ee)===!1&&(n.clearColor(me,Ie,Xe,it),q.copy(Ee))},reset:function(){P=!1,he=null,q.set(-1,0,0,0)}}}function o(){let P=!1,Ee=null,he=null,q=null;return{setTest:function(me){me?_e(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(me){Ee!==me&&!P&&(n.depthMask(me),Ee=me)},setFunc:function(me){if(he!==me){switch(me){case Il:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=me}},setLocked:function(me){P=me},setClear:function(me){q!==me&&(n.clearDepth(me),q=me)},reset:function(){P=!1,Ee=null,he=null,q=null}}}function a(){let P=!1,Ee=null,he=null,q=null,me=null,Ie=null,Xe=null,it=null,ct=null;return{setTest:function(Qe){P||(Qe?_e(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Qe){Ee!==Qe&&!P&&(n.stencilMask(Qe),Ee=Qe)},setFunc:function(Qe,ge,pt){(he!==Qe||q!==ge||me!==pt)&&(n.stencilFunc(Qe,ge,pt),he=Qe,q=ge,me=pt)},setOp:function(Qe,ge,pt){(Ie!==Qe||Xe!==ge||it!==pt)&&(n.stencilOp(Qe,ge,pt),Ie=Qe,Xe=ge,it=pt)},setLocked:function(Qe){P=Qe},setClear:function(Qe){ct!==Qe&&(n.clearStencil(Qe),ct=Qe)},reset:function(){P=!1,Ee=null,he=null,q=null,me=null,Ie=null,Xe=null,it=null,ct=null}}}const s=new r,l=new o,c=new a,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,x=null,E=null,y=null,C=null,A=null,k=null,M=new nt(0,0,0),w=0,Y=!1,X=null,J=null,D=null,G=null,K=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ee=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),re=ee>=1):te.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),re=ee>=2);let U=null,F={};const Me=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),oe=new wt().fromArray(Me),fe=new wt().fromArray(xe);function z(P,Ee,he,q){const me=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(P,Ie),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<he;Xe++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(Ee+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ie}const Q={};Q[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Q[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(n.DEPTH_TEST),l.setFunc(Er),Le(!1),Pe(Wo),_e(n.CULL_FACE),Ne(Un);function _e(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Oe(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Fe(P,Ee){return m[P]!==Ee?(n.bindFramebuffer(P,Ee),m[P]=Ee,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ee),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function O(P,Ee){let he=_,q=!1;if(P)if(he=g.get(Ee),he===void 0&&(he=[],g.set(Ee,he)),P.isWebGLMultipleRenderTargets){const me=P.texture;if(he.length!==me.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,Xe=me.length;Ie<Xe;Ie++)he[Ie]=n.COLOR_ATTACHMENT0+Ie;he.length=me.length,q=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,q=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,q=!0);q&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function et(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const ve={[kn]:n.FUNC_ADD,[xl]:n.FUNC_SUBTRACT,[Ml]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Yo]=n.MIN,ve[Ko]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ve[Yo]=P.MIN_EXT,ve[Ko]=P.MAX_EXT)}const de={[Sl]:n.ZERO,[El]:n.ONE,[yl]:n.SRC_COLOR,[Eo]:n.SRC_ALPHA,[Rl]:n.SRC_ALPHA_SATURATE,[wl]:n.DST_COLOR,[bl]:n.DST_ALPHA,[Tl]:n.ONE_MINUS_SRC_COLOR,[yo]:n.ONE_MINUS_SRC_ALPHA,[Cl]:n.ONE_MINUS_DST_COLOR,[Al]:n.ONE_MINUS_DST_ALPHA,[Ll]:n.CONSTANT_COLOR,[Pl]:n.ONE_MINUS_CONSTANT_COLOR,[Dl]:n.CONSTANT_ALPHA,[Ul]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(P,Ee,he,q,me,Ie,Xe,it,ct,Qe){if(P===Un){u===!0&&(Oe(n.BLEND),u=!1);return}if(u===!1&&(_e(n.BLEND),u=!0),P!==vl){if(P!==b||Qe!==Y){if((x!==kn||C!==kn)&&(n.blendEquation(n.FUNC_ADD),x=kn,C=kn),Qe)switch(P){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xo:n.blendFunc(n.ONE,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,y=null,A=null,k=null,M.set(0,0,0),w=0,b=P,Y=Qe}return}me=me||Ee,Ie=Ie||he,Xe=Xe||q,(Ee!==x||me!==C)&&(n.blendEquationSeparate(ve[Ee],ve[me]),x=Ee,C=me),(he!==E||q!==y||Ie!==A||Xe!==k)&&(n.blendFuncSeparate(de[he],de[q],de[Ie],de[Xe]),E=he,y=q,A=Ie,k=Xe),(it.equals(M)===!1||ct!==w)&&(n.blendColor(it.r,it.g,it.b,ct),M.copy(it),w=ct),b=P,Y=!1}function We(P,Ee){P.side===xn?Oe(n.CULL_FACE):_e(n.CULL_FACE);let he=P.side===Ht;Ee&&(he=!he),Le(he),P.blending===xi&&P.transparent===!1?Ne(Un):Ne(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const q=P.stencilWrite;c.setTest(q),q&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(P){X!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),X=P)}function Pe(P){P!==gl?(_e(n.CULL_FACE),P!==J&&(P===Wo?n.cullFace(n.BACK):P===_l?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),J=P}function ze(P){P!==D&&(re&&n.lineWidth(P),D=P)}function Ge(P,Ee,he){P?(_e(n.POLYGON_OFFSET_FILL),(G!==Ee||K!==he)&&(n.polygonOffset(Ee,he),G=Ee,K=he)):Oe(n.POLYGON_OFFSET_FILL)}function $e(P){P?_e(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function T(P){P===void 0&&(P=n.TEXTURE0+$-1),U!==P&&(n.activeTexture(P),U=P)}function v(P,Ee,he){he===void 0&&(U===null?he=n.TEXTURE0+$-1:he=U);let q=F[he];q===void 0&&(q={type:void 0,texture:void 0},F[he]=q),(q.type!==P||q.texture!==Ee)&&(U!==he&&(n.activeTexture(he),U=he),n.bindTexture(P,Ee||Q[P]),q.type=P,q.texture=Ee)}function B(){const P=F[U];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(P){oe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function Re(P){fe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function Ae(P,Ee){let he=d.get(Ee);he===void 0&&(he=new WeakMap,d.set(Ee,he));let q=he.get(P);q===void 0&&(q=n.getUniformBlockIndex(Ee,P.name),he.set(P,q))}function ye(P,Ee){const q=d.get(Ee).get(P);h.get(Ee)!==q&&(n.uniformBlockBinding(Ee,q,P.__bindingPointIndex),h.set(Ee,q))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},U=null,F={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,x=null,E=null,y=null,C=null,A=null,k=null,M=new nt(0,0,0),w=0,Y=!1,X=null,J=null,D=null,G=null,K=null,oe.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:_e,disable:Oe,bindFramebuffer:Fe,drawBuffers:O,useProgram:et,setBlending:Ne,setMaterial:We,setFlipSided:Le,setCullFace:Pe,setLineWidth:ze,setPolygonOffset:Ge,setScissorTest:$e,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:ae,compressedTexImage3D:se,texImage2D:ie,texImage3D:Be,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:R,texStorage3D:ce,texSubImage2D:ue,texSubImage3D:be,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:Ue,viewport:Re,reset:Ve}}function bp(n,e,t,i,r,o,a){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,v){return u?new OffscreenCanvas(T,v):Cr("canvas")}function x(T,v,B,ae){let se=1;if((T.width>ae||T.height>ae)&&(se=ae/Math.max(T.width,T.height)),se<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ue=v?wr:Math.floor,be=ue(se*T.width),pe=ue(se*T.height);_===void 0&&(_=b(be,pe));const Se=B?b(be,pe):_;return Se.width=be,Se.height=pe,Se.getContext("2d").drawImage(T,0,0,be,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+pe+")."),Se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function E(T){return Ro(T.width)&&Ro(T.height)}function y(T){return s?!1:T.wrapS!==on||T.wrapT!==on||T.minFilter!==Bt&&T.minFilter!==$t}function C(T,v){return T.generateMipmaps&&v&&T.minFilter!==Bt&&T.minFilter!==$t}function A(T){n.generateMipmap(T)}function k(T,v,B,ae,se=!1){if(s===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue=v;if(v===n.RED&&(B===n.FLOAT&&(ue=n.R32F),B===n.HALF_FLOAT&&(ue=n.R16F),B===n.UNSIGNED_BYTE&&(ue=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ue=n.R8UI),B===n.UNSIGNED_SHORT&&(ue=n.R16UI),B===n.UNSIGNED_INT&&(ue=n.R32UI),B===n.BYTE&&(ue=n.R8I),B===n.SHORT&&(ue=n.R16I),B===n.INT&&(ue=n.R32I)),v===n.RG&&(B===n.FLOAT&&(ue=n.RG32F),B===n.HALF_FLOAT&&(ue=n.RG16F),B===n.UNSIGNED_BYTE&&(ue=n.RG8)),v===n.RGBA){const be=se?yr:lt.getTransfer(ae);B===n.FLOAT&&(ue=n.RGBA32F),B===n.HALF_FLOAT&&(ue=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ue=be===ft?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function M(T,v,B){return C(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){return T===Bt||T===Zo||T===Fr?n.NEAREST:n.LINEAR}function Y(T){const v=T.target;v.removeEventListener("dispose",Y),J(v),v.isVideoTexture&&g.delete(v)}function X(T){const v=T.target;v.removeEventListener("dispose",X),G(v)}function J(T){const v=i.get(T);if(v.__webglInit===void 0)return;const B=T.source,ae=p.get(B);if(ae){const se=ae[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(T),Object.keys(ae).length===0&&p.delete(B)}i.remove(T)}function D(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const B=T.source,ae=p.get(B);delete ae[v.__cacheKey],a.memory.textures--}function G(T){const v=T.texture,B=i.get(T),ae=i.get(v);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(B.__webglFramebuffer[se]))for(let ue=0;ue<B.__webglFramebuffer[se].length;ue++)n.deleteFramebuffer(B.__webglFramebuffer[se][ue]);else n.deleteFramebuffer(B.__webglFramebuffer[se]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[se])}else{if(Array.isArray(B.__webglFramebuffer))for(let se=0;se<B.__webglFramebuffer.length;se++)n.deleteFramebuffer(B.__webglFramebuffer[se]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let se=0;se<B.__webglColorRenderbuffer.length;se++)B.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[se]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,ue=v.length;se<ue;se++){const be=i.get(v[se]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(v[se])}i.remove(v),i.remove(T)}let K=0;function $(){K=0}function re(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function ee(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function te(T,v){const B=i.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const ae=T.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,T,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function U(T,v){const B=i.get(T);if(T.version>0&&B.__version!==T.version){_e(B,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function F(T,v){const B=i.get(T);if(T.version>0&&B.__version!==T.version){_e(B,T,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function Me(T,v){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Oe(B,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const xe={[Ao]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},oe={[Bt]:n.NEAREST,[Zo]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},fe={[ac]:n.NEVER,[pc]:n.ALWAYS,[lc]:n.LESS,[hc]:n.LEQUAL,[cc]:n.EQUAL,[fc]:n.GEQUAL,[uc]:n.GREATER,[dc]:n.NOTEQUAL};function z(T,v,B){if(B?(n.texParameteri(T,n.TEXTURE_WRAP_S,xe[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,xe[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,xe[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,oe[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,oe[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==on||v.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Bt&&v.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Bt||v.minFilter!==Fr&&v.minFilter!==Vi||v.type===Dn&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Q(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",Y));const ae=v.source;let se=p.get(ae);se===void 0&&(se={},p.set(ae,se));const ue=ee(v);if(ue!==T.__cacheKey){se[ue]===void 0&&(se[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),se[ue].usedTimes++;const be=se[T.__cacheKey];be!==void 0&&(se[T.__cacheKey].usedTimes--,be.usedTimes===0&&D(v)),T.__cacheKey=ue,T.__webglTexture=se[ue].texture}return B}function _e(T,v,B){let ae=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=n.TEXTURE_3D);const se=Q(T,v),ue=v.source;t.bindTexture(ae,T.__webglTexture,n.TEXTURE0+B);const be=i.get(ue);if(ue.version!==be.__version||se===!0){t.activeTexture(n.TEXTURE0+B);const pe=lt.getPrimaries(lt.workingColorSpace),Se=v.colorSpace===Qt?null:lt.getPrimaries(v.colorSpace),R=v.colorSpace===Qt||pe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);const ce=y(v)&&E(v.image)===!1;let ie=x(v.image,ce,!1,h);ie=$e(v,ie);const Be=E(ie)||s,Ue=o.convert(v.format,v.colorSpace);let Re=o.convert(v.type),Ae=k(v.internalFormat,Ue,Re,v.colorSpace,v.isVideoTexture);z(ae,v,Be);let ye;const Ve=v.mipmaps,P=s&&v.isVideoTexture!==!0,Ee=be.__version===void 0||se===!0,he=M(v,ie,Be);if(v.isDepthTexture)Ae=n.DEPTH_COMPONENT,s?v.type===Dn?Ae=n.DEPTH_COMPONENT32F:v.type===Pn?Ae=n.DEPTH_COMPONENT24:v.type===Yn?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:v.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Kn&&Ae===n.DEPTH_COMPONENT&&v.type!==Io&&v.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Pn,Re=o.convert(v.type)),v.format===yi&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,v.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Yn,Re=o.convert(v.type))),Ee&&(P?t.texStorage2D(n.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Ue,Re,null));else if(v.isDataTexture)if(Ve.length>0&&Be){P&&Ee&&t.texStorage2D(n.TEXTURE_2D,he,Ae,Ve[0].width,Ve[0].height);for(let q=0,me=Ve.length;q<me;q++)ye=Ve[q],P?t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,Ue,Re,ye.data):t.texImage2D(n.TEXTURE_2D,q,Ae,ye.width,ye.height,0,Ue,Re,ye.data);v.generateMipmaps=!1}else P?(Ee&&t.texStorage2D(n.TEXTURE_2D,he,Ae,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Ue,Re,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Ue,Re,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ae,Ve[0].width,Ve[0].height,ie.depth);for(let q=0,me=Ve.length;q<me;q++)ye=Ve[q],v.format!==sn?Ue!==null?P?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,ie.depth,Ue,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ae,ye.width,ye.height,ie.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,ie.depth,Ue,Re,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ae,ye.width,ye.height,ie.depth,0,Ue,Re,ye.data)}else{P&&Ee&&t.texStorage2D(n.TEXTURE_2D,he,Ae,Ve[0].width,Ve[0].height);for(let q=0,me=Ve.length;q<me;q++)ye=Ve[q],v.format!==sn?Ue!==null?P?t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,Ue,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,Ue,Re,ye.data):t.texImage2D(n.TEXTURE_2D,q,Ae,ye.width,ye.height,0,Ue,Re,ye.data)}else if(v.isDataArrayTexture)P?(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ue,Re,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,Ue,Re,ie.data);else if(v.isData3DTexture)P?(Ee&&t.texStorage3D(n.TEXTURE_3D,he,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ue,Re,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,Ue,Re,ie.data);else if(v.isFramebufferTexture){if(Ee)if(P)t.texStorage2D(n.TEXTURE_2D,he,Ae,ie.width,ie.height);else{let q=ie.width,me=ie.height;for(let Ie=0;Ie<he;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Ae,q,me,0,Ue,Re,null),q>>=1,me>>=1}}else if(Ve.length>0&&Be){P&&Ee&&t.texStorage2D(n.TEXTURE_2D,he,Ae,Ve[0].width,Ve[0].height);for(let q=0,me=Ve.length;q<me;q++)ye=Ve[q],P?t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ue,Re,ye):t.texImage2D(n.TEXTURE_2D,q,Ae,Ue,Re,ye);v.generateMipmaps=!1}else P?(Ee&&t.texStorage2D(n.TEXTURE_2D,he,Ae,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Re,ie)):t.texImage2D(n.TEXTURE_2D,0,Ae,Ue,Re,ie);C(v,Be)&&A(ae),be.__version=ue.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Oe(T,v,B){if(v.image.length!==6)return;const ae=Q(T,v),se=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const ue=i.get(se);if(se.version!==ue.__version||ae===!0){t.activeTexture(n.TEXTURE0+B);const be=lt.getPrimaries(lt.workingColorSpace),pe=v.colorSpace===Qt?null:lt.getPrimaries(v.colorSpace),Se=v.colorSpace===Qt||be===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const R=v.isCompressedTexture||v.image[0].isCompressedTexture,ce=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let q=0;q<6;q++)!R&&!ce?ie[q]=x(v.image[q],!1,!0,c):ie[q]=ce?v.image[q].image:v.image[q],ie[q]=$e(v,ie[q]);const Be=ie[0],Ue=E(Be)||s,Re=o.convert(v.format,v.colorSpace),Ae=o.convert(v.type),ye=k(v.internalFormat,Re,Ae,v.colorSpace),Ve=s&&v.isVideoTexture!==!0,P=ue.__version===void 0||ae===!0;let Ee=M(v,Be,Ue);z(n.TEXTURE_CUBE_MAP,v,Ue);let he;if(R){Ve&&P&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ye,Be.width,Be.height);for(let q=0;q<6;q++){he=ie[q].mipmaps;for(let me=0;me<he.length;me++){const Ie=he[me];v.format!==sn?Re!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,Ie.width,Ie.height,Re,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,ye,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,Ie.width,Ie.height,Re,Ae,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,ye,Ie.width,Ie.height,0,Re,Ae,Ie.data)}}}else{he=v.mipmaps,Ve&&P&&(he.length>0&&Ee++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ye,ie[0].width,ie[0].height));for(let q=0;q<6;q++)if(ce){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ie[q].width,ie[q].height,Re,Ae,ie[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ye,ie[q].width,ie[q].height,0,Re,Ae,ie[q].data);for(let me=0;me<he.length;me++){const Xe=he[me].image[q].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,Xe.width,Xe.height,Re,Ae,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,ye,Xe.width,Xe.height,0,Re,Ae,Xe.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,Ae,ie[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ye,Re,Ae,ie[q]);for(let me=0;me<he.length;me++){const Ie=he[me];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,Re,Ae,Ie.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,ye,Re,Ae,Ie.image[q])}}}C(v,Ue)&&A(n.TEXTURE_CUBE_MAP),ue.__version=se.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Fe(T,v,B,ae,se,ue){const be=o.convert(B.format,B.colorSpace),pe=o.convert(B.type),Se=k(B.internalFormat,be,pe,B.colorSpace);if(!i.get(v).__hasExternalTextures){const ce=Math.max(1,v.width>>ue),ie=Math.max(1,v.height>>ue);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ue,Se,ce,ie,v.depth,0,be,pe,null):t.texImage2D(se,ue,Se,ce,ie,0,be,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ze(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,i.get(B).__webglTexture,0,Pe(v)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,i.get(B).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(T,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let ae=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||ze(v)){const se=v.depthTexture;se&&se.isDepthTexture&&(se.type===Dn?ae=n.DEPTH_COMPONENT32F:se.type===Pn&&(ae=n.DEPTH_COMPONENT24));const ue=Pe(v);ze(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ae,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ae,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const ae=Pe(v);B&&ze(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,v.width,v.height):ze(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ae=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let se=0;se<ae.length;se++){const ue=ae[se],be=o.convert(ue.format,ue.colorSpace),pe=o.convert(ue.type),Se=k(ue.internalFormat,be,pe,ue.colorSpace),R=Pe(v);B&&ze(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,Se,v.width,v.height):ze(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,Se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Se,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function et(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te(v.depthTexture,0);const ae=i.get(v.depthTexture).__webglTexture,se=Pe(v);if(v.depthTexture.format===Kn)ze(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(v.depthTexture.format===yi)ze(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ve(T){const v=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");et(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]=n.createRenderbuffer(),O(v.__webglDepthbuffer[ae],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),O(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(T,v,B){const ae=i.get(T);v!==void 0&&Fe(ae.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ve(T)}function Ne(T){const v=T.texture,B=i.get(T),ae=i.get(v);T.addEventListener("dispose",X),T.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=v.version,a.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,be=E(T)||s;if(se){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(s&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let Se=0;Se<v.mipmaps.length;Se++)B.__webglFramebuffer[pe][Se]=n.createFramebuffer()}else B.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)B.__webglFramebuffer[pe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ue)if(r.drawBuffers){const pe=T.texture;for(let Se=0,R=pe.length;Se<R;Se++){const ce=i.get(pe[Se]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&ze(T)===!1){const pe=ue?v:[v];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Se=0;Se<pe.length;Se++){const R=pe[Se];B.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Se]);const ce=o.convert(R.format,R.colorSpace),ie=o.convert(R.type),Be=k(R.internalFormat,ce,ie,R.colorSpace,T.isXRRenderTarget===!0),Ue=Pe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Be,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,B.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),O(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),z(n.TEXTURE_CUBE_MAP,v,be);for(let pe=0;pe<6;pe++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Fe(B.__webglFramebuffer[pe][Se],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else Fe(B.__webglFramebuffer[pe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);C(v,be)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const pe=T.texture;for(let Se=0,R=pe.length;Se<R;Se++){const ce=pe[Se],ie=i.get(ce);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),z(n.TEXTURE_2D,ce,be),Fe(B.__webglFramebuffer,T,ce,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),C(ce,be)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ae.__webglTexture),z(pe,v,be),s&&v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Fe(B.__webglFramebuffer[Se],T,v,n.COLOR_ATTACHMENT0,pe,Se);else Fe(B.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,pe,0);C(v,be)&&A(pe),t.unbindTexture()}T.depthBuffer&&ve(T)}function We(T){const v=E(T)||s,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0,se=B.length;ae<se;ae++){const ue=B[ae];if(C(ue,v)){const be=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(ue).__webglTexture;t.bindTexture(be,pe),A(be),t.unbindTexture()}}}function Le(T){if(s&&T.samples>0&&ze(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,ae=T.height;let se=n.COLOR_BUFFER_BIT;const ue=[],be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(T),Se=T.isWebGLMultipleRenderTargets===!0;if(Se)for(let R=0;R<v.length;R++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let R=0;R<v.length;R++){ue.push(n.COLOR_ATTACHMENT0+R),T.depthBuffer&&ue.push(be);const ce=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ce===!1&&(T.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[R]),ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[be])),Se){const ie=i.get(v[R]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,B,ae,0,0,B,ae,se,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let R=0;R<v.length;R++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,pe.__webglColorRenderbuffer[R]);const ce=i.get(v[R]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Pe(T){return Math.min(d,T.samples)}function ze(T){const v=i.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ge(T){const v=a.render.frame;g.get(T)!==v&&(g.set(T,v),T.update())}function $e(T,v){const B=T.colorSpace,ae=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Co||B!==En&&B!==Qt&&(lt.getTransfer(B)===ft?s===!1?e.has("EXT_sRGB")===!0&&ae===sn?(T.format=Co,T.minFilter=$t,T.generateMipmaps=!1):v=Ha.sRGBToLinear(v):(ae!==sn||se!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=re,this.resetTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=U,this.setTexture3D=F,this.setTextureCube=Me,this.rebindTextures=de,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=ze}function Ap(n,e,t){const i=t.isWebGL2;function r(o,a=Qt){let s;const l=lt.getTransfer(a);if(o===Nn)return n.UNSIGNED_BYTE;if(o===Da)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Ua)return n.UNSIGNED_SHORT_5_5_5_1;if(o===Kl)return n.BYTE;if(o===Zl)return n.SHORT;if(o===Io)return n.UNSIGNED_SHORT;if(o===Pa)return n.INT;if(o===Pn)return n.UNSIGNED_INT;if(o===Dn)return n.FLOAT;if(o===Wi)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===$l)return n.ALPHA;if(o===sn)return n.RGBA;if(o===Jl)return n.LUMINANCE;if(o===Ql)return n.LUMINANCE_ALPHA;if(o===Kn)return n.DEPTH_COMPONENT;if(o===yi)return n.DEPTH_STENCIL;if(o===Co)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===ec)return n.RED;if(o===Ia)return n.RED_INTEGER;if(o===tc)return n.RG;if(o===Na)return n.RG_INTEGER;if(o===Fa)return n.RGBA_INTEGER;if(o===Or||o===zr||o===Br||o===Hr)if(l===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$o||o===Jo||o===Qo||o===es)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===es)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===nc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ts||o===ns)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===ts)return l===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===ns)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===is||o===rs||o===os||o===ss||o===as||o===ls||o===cs||o===hs||o===us||o===ds||o===fs||o===ps||o===ms||o===gs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===is)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===rs)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===os)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ss)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===as)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ls)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===cs)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===hs)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===us)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ds)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===fs)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ps)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===ms)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===gs)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Gr||o===_s||o===vs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===Gr)return l===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===_s)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===vs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===ic||o===xs||o===Ms||o===Ss)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===Gr)return s.COMPRESSED_RED_RGTC1_EXT;if(o===xs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ms)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ss)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Yn?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class wp extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cp={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rp extends qt{constructor(e,t,i,r,o,a,s,l,c,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Kn&&(i=Pn),i===void 0&&h===yi&&(i=Yn),super(null,r,o,a,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lp extends yn{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const b=[],x=[],E=new Jt;E.layers.enable(1),E.viewport=new wt;const y=new Jt;y.layers.enable(2),y.viewport=new wt;const C=[E,y],A=new wp;A.layers.enable(1),A.layers.enable(2);let k=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let F=b[U];return F===void 0&&(F=new ho,b[U]=F),F.getTargetRaySpace()},this.getControllerGrip=function(U){let F=b[U];return F===void 0&&(F=new ho,b[U]=F),F.getGripSpace()},this.getHand=function(U){let F=b[U];return F===void 0&&(F=new ho,b[U]=F),F.getHandSpace()};function w(U){const F=x.indexOf(U.inputSource);if(F===-1)return;const Me=b[F];Me!==void 0&&(Me.update(U.inputSource,U.frame,c||a),Me.dispatchEvent({type:U.type,data:U.inputSource}))}function Y(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",X);for(let U=0;U<b.length;U++){const F=x[U];F!==null&&(x[U]=null,b[U].disconnect(F))}k=null,M=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:m}),u=new $n(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let F=null,Me=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=_.stencil?yi:Kn,Me=_.stencil?Yn:Pn);const oe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),u=new $n(f.textureWidth,f.textureHeight,{format:sn,type:Nn,depthTexture:new Rp(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const fe=e.properties.get(u);fe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(U){for(let F=0;F<U.removed.length;F++){const Me=U.removed[F],xe=x.indexOf(Me);xe>=0&&(x[xe]=null,b[xe].disconnect(Me))}for(let F=0;F<U.added.length;F++){const Me=U.added[F];let xe=x.indexOf(Me);if(xe===-1){for(let fe=0;fe<b.length;fe++)if(fe>=x.length){x.push(Me),xe=fe;break}else if(x[fe]===null){x[fe]=Me,xe=fe;break}if(xe===-1)break}const oe=b[xe];oe&&oe.connect(Me)}}const J=new I,D=new I;function G(U,F,Me){J.setFromMatrixPosition(F.matrixWorld),D.setFromMatrixPosition(Me.matrixWorld);const xe=J.distanceTo(D),oe=F.projectionMatrix.elements,fe=Me.projectionMatrix.elements,z=oe[14]/(oe[10]-1),Q=oe[14]/(oe[10]+1),_e=(oe[9]+1)/oe[5],Oe=(oe[9]-1)/oe[5],Fe=(oe[8]-1)/oe[0],O=(fe[8]+1)/fe[0],et=z*Fe,ve=z*O,de=xe/(-Fe+O),Ne=de*-Fe;F.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ne),U.translateZ(de),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const We=z+de,Le=Q+de,Pe=et-Ne,ze=ve+(xe-Ne),Ge=_e*Q/Le*We,$e=Oe*Q/Le*We;U.projectionMatrix.makePerspective(Pe,ze,Ge,$e,We,Le),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function K(U,F){F===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(F.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;A.near=y.near=E.near=U.near,A.far=y.far=E.far=U.far,(k!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,M=A.far);const F=U.parent,Me=A.cameras;K(A,F);for(let xe=0;xe<Me.length;xe++)K(Me[xe],F);Me.length===2?G(A,E,y):A.projectionMatrix.copy(E.projectionMatrix),$(U,A,F)};function $(U,F,Me){Me===null?U.matrix.copy(F.matrixWorld):(U.matrix.copy(Me.matrixWorld),U.matrix.invert(),U.matrix.multiply(F.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(F.projectionMatrix),U.projectionMatrixInverse.copy(F.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Xi*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let re=null;function ee(U,F){if(h=F.getViewerPose(c||a),g=F,h!==null){const Me=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let xe=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let oe=0;oe<Me.length;oe++){const fe=Me[oe];let z=null;if(m!==null)z=m.getViewport(fe);else{const _e=d.getViewSubImage(f,fe);z=_e.viewport,oe===0&&(e.setRenderTargetTextures(u,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(u))}let Q=C[oe];Q===void 0&&(Q=new Jt,Q.layers.enable(oe),Q.viewport=new wt,C[oe]=Q),Q.matrix.fromArray(fe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(fe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(z.x,z.y,z.width,z.height),oe===0&&(A.matrix.copy(Q.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(Q)}}for(let Me=0;Me<b.length;Me++){const xe=x[Me],oe=b[Me];xe!==null&&oe!==void 0&&oe.update(xe,F,c||a)}re&&re(U,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),g=null}const te=new Za;te.setAnimationLoop(ee),this.setAnimationLoop=function(U){re=U},this.dispose=function(){}}}function Pp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,ja(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(p,u):u.isMeshToonMaterial?(o(p,u),d(p,u)):u.isMeshPhongMaterial?(o(p,u),h(p,u)):u.isMeshStandardMaterial?(o(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(o(p,u),g(p,u)):u.isMeshDepthMaterial?o(p,u):u.isMeshDistanceMaterial?(o(p,u),_(p,u)):u.isMeshNormalMaterial?o(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?l(p,u,b,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ht&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ht&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ht&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dp(n,e,t,i){let r={},o={},a=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const E=x.program;i.uniformBlockBinding(b,E)}function c(b,x){let E=r[b.id];E===void 0&&(g(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",p));const y=x.program;i.updateUBOMapping(b,y);const C=e.render.frame;o[b.id]!==C&&(f(b),o[b.id]=C)}function h(b){const x=d();b.__bindingPointIndex=x;const E=n.createBuffer(),y=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function d(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],E=b.uniforms,y=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,A=E.length;C<A;C++){const k=E[C];if(m(k,C,y)===!0){const M=k.__offset,w=Array.isArray(k.value)?k.value:[k.value];let Y=0;for(let X=0;X<w.length;X++){const J=w[X],D=_(J);typeof J=="number"?(k.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,M+Y,k.__data)):J.isMatrix3?(k.__data[0]=J.elements[0],k.__data[1]=J.elements[1],k.__data[2]=J.elements[2],k.__data[3]=J.elements[0],k.__data[4]=J.elements[3],k.__data[5]=J.elements[4],k.__data[6]=J.elements[5],k.__data[7]=J.elements[0],k.__data[8]=J.elements[6],k.__data[9]=J.elements[7],k.__data[10]=J.elements[8],k.__data[11]=J.elements[0]):(J.toArray(k.__data,Y),Y+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,k.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,E){const y=b.value;if(E[x]===void 0){if(typeof y=="number")E[x]=y;else{const C=Array.isArray(y)?y:[y],A=[];for(let k=0;k<C.length;k++)A.push(C[k].clone());E[x]=A}return!0}else if(typeof y=="number"){if(E[x]!==y)return E[x]=y,!0}else{const C=Array.isArray(E[x])?E[x]:[E[x]],A=Array.isArray(y)?y:[y];for(let k=0;k<C.length;k++){const M=C[k];if(M.equals(A[k])===!1)return M.copy(A[k]),!0}}return!1}function g(b){const x=b.uniforms;let E=0;const y=16;let C=0;for(let A=0,k=x.length;A<k;A++){const M=x[A],w={boundary:0,storage:0},Y=Array.isArray(M.value)?M.value:[M.value];for(let X=0,J=Y.length;X<J;X++){const D=Y[X],G=_(D);w.boundary+=G.boundary,w.storage+=G.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=E,A>0){C=E%y;const X=y-C;C!==0&&X-w.boundary<0&&(E+=y-C,M.__offset=E)}E+=w.storage}return C=E%y,C>0&&(E+=y-C),b.__size=E,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function u(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},o={}}return{bind:l,update:c,dispose:u}}class nl{constructor(e={}){const{canvas:t=Rc(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const x=this;let E=!1,y=0,C=0,A=null,k=-1,M=null;const w=new wt,Y=new wt;let X=null;const J=new nt(0);let D=0,G=t.width,K=t.height,$=1,re=null,ee=null;const te=new wt(0,0,G,K),U=new wt(0,0,G,K);let F=!1;const Me=new Ur;let xe=!1,oe=!1,fe=null;const z=new dt,Q=new Ye,_e=new I,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return A===null?$:1}let O=i;function et(S,H){for(let V=0;V<S.length;V++){const j=S[V],W=t.getContext(j,H);if(W!==null)return W}return null}try{const S={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),O===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),O=et(H,S),O===null)throw et(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,de,Ne,We,Le,Pe,ze,Ge,$e,T,v,B,ae,se,ue,be,pe,Se,R,ce,ie,Be,Ue,Re;function Ae(){ve=new Gd(O),de=new Nd(O,ve,e),ve.init(de),Be=new Ap(O,ve,de),Ne=new Tp(O,ve,de),We=new Wd(O),Le=new hp,Pe=new bp(O,ve,Ne,Le,de,Be,We),ze=new Od(x),Ge=new Hd(x),$e=new eh(O,de),Ue=new Ud(O,ve,$e,de),T=new kd(O,$e,We,Ue),v=new Yd(O,T,$e,We),R=new jd(O,de,Pe),be=new Fd(Le),B=new cp(x,ze,Ge,ve,de,Ue,be),ae=new Pp(x,Le),se=new dp,ue=new vp(ve,de),Se=new Dd(x,ze,Ge,Ne,v,f,l),pe=new yp(x,v,de),Re=new Dp(O,We,de,Ne),ce=new Id(O,ve,We,de),ie=new Vd(O,ve,We,de),We.programs=B.programs,x.capabilities=de,x.extensions=ve,x.properties=Le,x.renderLists=se,x.shadowMap=pe,x.state=Ne,x.info=We}Ae();const ye=new Lp(x,O);this.xr=ye,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(G,K,!1))},this.getSize=function(S){return S.set(G,K)},this.setSize=function(S,H,V=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,K=H,t.width=Math.floor(S*$),t.height=Math.floor(H*$),V===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(G*$,K*$).floor()},this.setDrawingBufferSize=function(S,H,V){G=S,K=H,$=V,t.width=Math.floor(S*V),t.height=Math.floor(H*V),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,H,V,j){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,H,V,j),Ne.viewport(w.copy(te).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,H,V,j){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,H,V,j),Ne.scissor(Y.copy(U).multiplyScalar($).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(S){Ne.setScissorTest(F=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){ee=S},this.getClearColor=function(S){return S.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(S=!0,H=!0,V=!0){let j=0;if(S){let W=!1;if(A!==null){const we=A.texture.format;W=we===Fa||we===Na||we===Ia}if(W){const we=A.texture.type,He=we===Nn||we===Pn||we===Io||we===Yn||we===Da||we===Ua,qe=Se.getClearColor(),je=Se.getClearAlpha(),Je=qe.r,Ke=qe.g,Ze=qe.b;He?(m[0]=Je,m[1]=Ke,m[2]=Ze,m[3]=je,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Je,g[1]=Ke,g[2]=Ze,g[3]=je,O.clearBufferiv(O.COLOR,0,g))}else j|=O.COLOR_BUFFER_BIT}H&&(j|=O.DEPTH_BUFFER_BIT),V&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),se.dispose(),ue.dispose(),Le.dispose(),ze.dispose(),Ge.dispose(),v.dispose(),Ue.dispose(),Re.dispose(),B.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ct),ye.removeEventListener("sessionend",Qe),fe&&(fe.dispose(),fe=null),ge.stop()};function Ve(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=We.autoReset,H=pe.enabled,V=pe.autoUpdate,j=pe.needsUpdate,W=pe.type;Ae(),We.autoReset=S,pe.enabled=H,pe.autoUpdate=V,pe.needsUpdate=j,pe.type=W}function Ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function he(S){const H=S.target;H.removeEventListener("dispose",he),q(H)}function q(S){me(S),Le.remove(S)}function me(S){const H=Le.get(S).programs;H!==void 0&&(H.forEach(function(V){B.releaseProgram(V)}),S.isShaderMaterial&&B.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,V,j,W,we){H===null&&(H=Oe);const He=W.isMesh&&W.matrixWorld.determinant()<0,qe=Ft(S,H,V,j,W);Ne.setMaterial(j,He);let je=V.index,Je=1;if(j.wireframe===!0){if(je=T.getWireframeAttribute(V),je===void 0)return;Je=2}const Ke=V.drawRange,Ze=V.attributes.position;let st=Ke.start*Je,L=(Ke.start+Ke.count)*Je;we!==null&&(st=Math.max(st,we.start*Je),L=Math.min(L,(we.start+we.count)*Je)),je!==null?(st=Math.max(st,0),L=Math.min(L,je.count)):Ze!=null&&(st=Math.max(st,0),L=Math.min(L,Ze.count));const N=L-st;if(N<0||N===1/0)return;Ue.setup(W,j,qe,V,je);let Z,ne=ce;if(je!==null&&(Z=$e.get(je),ne=ie,ne.setIndex(Z)),W.isMesh)j.wireframe===!0?(Ne.setLineWidth(j.wireframeLinewidth*Fe()),ne.setMode(O.LINES)):ne.setMode(O.TRIANGLES);else if(W.isLine){let le=j.linewidth;le===void 0&&(le=1),Ne.setLineWidth(le*Fe()),W.isLineSegments?ne.setMode(O.LINES):W.isLineLoop?ne.setMode(O.LINE_LOOP):ne.setMode(O.LINE_STRIP)}else W.isPoints?ne.setMode(O.POINTS):W.isSprite&&ne.setMode(O.TRIANGLES);if(W.isInstancedMesh)ne.renderInstances(st,N,W.count);else if(V.isInstancedBufferGeometry){const le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Te=Math.min(V.instanceCount,le);ne.renderInstances(st,N,Te)}else ne.render(st,N)};function Ie(S,H,V){S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,It(S,H,V),S.side=Fn,S.needsUpdate=!0,It(S,H,V),S.side=xn):It(S,H,V)}this.compile=function(S,H,V=null){V===null&&(V=S),p=ue.get(V),p.init(),b.push(p),V.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),S!==V&&S.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(x._useLegacyLights);const j=new Set;return S.traverse(function(W){const we=W.material;if(we)if(Array.isArray(we))for(let He=0;He<we.length;He++){const qe=we[He];Ie(qe,V,W),j.add(qe)}else Ie(we,V,W),j.add(we)}),b.pop(),p=null,j},this.compileAsync=function(S,H,V=null){const j=this.compile(S,H,V);return new Promise(W=>{function we(){if(j.forEach(function(He){Le.get(He).currentProgram.isReady()&&j.delete(He)}),j.size===0){W(S);return}setTimeout(we,10)}ve.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Xe=null;function it(S){Xe&&Xe(S)}function ct(){ge.stop()}function Qe(){ge.start()}const ge=new Za;ge.setAnimationLoop(it),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(S){Xe=S,ye.setAnimationLoop(S),S===null?ge.stop():ge.start()},ye.addEventListener("sessionstart",ct),ye.addEventListener("sessionend",Qe),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,H,A),p=ue.get(S,b.length),p.init(),b.push(p),z.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Me.setFromProjectionMatrix(z),oe=this.localClippingEnabled,xe=be.init(this.clippingPlanes,oe),_=se.get(S,u.length),_.init(),u.push(_),pt(S,H,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(re,ee),this.info.render.frame++,xe===!0&&be.beginShadows();const V=p.state.shadowsArray;if(pe.render(V,S,H),xe===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(_,S),p.setupLights(x._useLegacyLights),H.isArrayCamera){const j=H.cameras;for(let W=0,we=j.length;W<we;W++){const He=j[W];Mt(_,S,He,He.viewport)}}else Mt(_,S,H);A!==null&&(Pe.updateMultisampleRenderTarget(A),Pe.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,H),Ue.resetDefaultState(),k=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function pt(S,H,V,j){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Me.intersectsSprite(S)){j&&_e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(z);const He=v.update(S),qe=S.material;qe.visible&&_.push(S,He,qe,V,_e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Me.intersectsObject(S))){const He=v.update(S),qe=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),_e.copy(S.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),_e.copy(He.boundingSphere.center)),_e.applyMatrix4(S.matrixWorld).applyMatrix4(z)),Array.isArray(qe)){const je=He.groups;for(let Je=0,Ke=je.length;Je<Ke;Je++){const Ze=je[Je],st=qe[Ze.materialIndex];st&&st.visible&&_.push(S,He,st,V,_e.z,Ze)}}else qe.visible&&_.push(S,He,qe,V,_e.z,null)}}const we=S.children;for(let He=0,qe=we.length;He<qe;He++)pt(we[He],H,V,j)}function Mt(S,H,V,j){const W=S.opaque,we=S.transmissive,He=S.transparent;p.setupLightsView(V),xe===!0&&be.setGlobalState(x.clippingPlanes,V),we.length>0&&Gt(W,we,H,V),j&&Ne.viewport(w.copy(j)),W.length>0&&ot(W,H,V),we.length>0&&ot(we,H,V),He.length>0&&ot(He,H,V),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Gt(S,H,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const we=de.isWebGL2;fe===null&&(fe=new $n(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Wi:Nn,minFilter:Vi,samples:we?4:0})),x.getDrawingBufferSize(Q),we?fe.setSize(Q.x,Q.y):fe.setSize(wr(Q.x),wr(Q.y));const He=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(J),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const qe=x.toneMapping;x.toneMapping=In,ot(S,V,j),Pe.updateMultisampleRenderTarget(fe),Pe.updateRenderTargetMipmap(fe);let je=!1;for(let Je=0,Ke=H.length;Je<Ke;Je++){const Ze=H[Je],st=Ze.object,L=Ze.geometry,N=Ze.material,Z=Ze.group;if(N.side===xn&&st.layers.test(j.layers)){const ne=N.side;N.side=Ht,N.needsUpdate=!0,Ut(st,V,j,L,N,Z),N.side=ne,N.needsUpdate=!0,je=!0}}je===!0&&(Pe.updateMultisampleRenderTarget(fe),Pe.updateRenderTargetMipmap(fe)),x.setRenderTarget(He),x.setClearColor(J,D),x.toneMapping=qe}function ot(S,H,V){const j=H.isScene===!0?H.overrideMaterial:null;for(let W=0,we=S.length;W<we;W++){const He=S[W],qe=He.object,je=He.geometry,Je=j===null?He.material:j,Ke=He.group;qe.layers.test(V.layers)&&Ut(qe,H,V,je,Je,Ke)}}function Ut(S,H,V,j,W,we){S.onBeforeRender(x,H,V,j,W,we),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(x,H,V,j,S,we),W.transparent===!0&&W.side===xn&&W.forceSinglePass===!1?(W.side=Ht,W.needsUpdate=!0,x.renderBufferDirect(V,H,j,W,S,we),W.side=Fn,W.needsUpdate=!0,x.renderBufferDirect(V,H,j,W,S,we),W.side=xn):x.renderBufferDirect(V,H,j,W,S,we),S.onAfterRender(x,H,V,j,W,we)}function It(S,H,V){H.isScene!==!0&&(H=Oe);const j=Le.get(S),W=p.state.lights,we=p.state.shadowsArray,He=W.state.version,qe=B.getParameters(S,W.state,we,H,V),je=B.getProgramCacheKey(qe);let Je=j.programs;j.environment=S.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(S.isMeshStandardMaterial?Ge:ze).get(S.envMap||j.environment),Je===void 0&&(S.addEventListener("dispose",he),Je=new Map,j.programs=Je);let Ke=Je.get(je);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===He)return Nt(S,qe),Ke}else qe.uniforms=B.getUniforms(S),S.onBuild(V,qe,x),S.onBeforeCompile(qe,x),Ke=B.acquireProgram(qe,je),Je.set(je,Ke),j.uniforms=qe.uniforms;const Ze=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ze.clippingPlanes=be.uniform),Nt(S,qe),j.needsLights=Tt(S),j.lightsStateVersion=He,j.needsLights&&(Ze.ambientLightColor.value=W.state.ambient,Ze.lightProbe.value=W.state.probe,Ze.directionalLights.value=W.state.directional,Ze.directionalLightShadows.value=W.state.directionalShadow,Ze.spotLights.value=W.state.spot,Ze.spotLightShadows.value=W.state.spotShadow,Ze.rectAreaLights.value=W.state.rectArea,Ze.ltc_1.value=W.state.rectAreaLTC1,Ze.ltc_2.value=W.state.rectAreaLTC2,Ze.pointLights.value=W.state.point,Ze.pointLightShadows.value=W.state.pointShadow,Ze.hemisphereLights.value=W.state.hemi,Ze.directionalShadowMap.value=W.state.directionalShadowMap,Ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ze.spotShadowMap.value=W.state.spotShadowMap,Ze.spotLightMatrix.value=W.state.spotLightMatrix,Ze.spotLightMap.value=W.state.spotLightMap,Ze.pointShadowMap.value=W.state.pointShadowMap,Ze.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Ke,j.uniformsList=null,Ke}function cn(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=Mr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Nt(S,H){const V=Le.get(S);V.outputColorSpace=H.outputColorSpace,V.instancing=H.instancing,V.instancingColor=H.instancingColor,V.skinning=H.skinning,V.morphTargets=H.morphTargets,V.morphNormals=H.morphNormals,V.morphColors=H.morphColors,V.morphTargetsCount=H.morphTargetsCount,V.numClippingPlanes=H.numClippingPlanes,V.numIntersection=H.numClipIntersection,V.vertexAlphas=H.vertexAlphas,V.vertexTangents=H.vertexTangents,V.toneMapping=H.toneMapping}function Ft(S,H,V,j,W){H.isScene!==!0&&(H=Oe),Pe.resetTextureUnits();const we=H.fog,He=j.isMeshStandardMaterial?H.environment:null,qe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:En,je=(j.isMeshStandardMaterial?Ge:ze).get(j.envMap||He),Je=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ke=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ze=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,L=!!V.morphAttributes.color;let N=In;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(N=x.toneMapping);const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=Z!==void 0?Z.length:0,le=Le.get(j),Te=p.state.lights;if(xe===!0&&(oe===!0||S!==M)){const St=S===M&&j.id===k;be.setState(j,S,St)}let Ce=!1;j.version===le.__version?(le.needsLights&&le.lightsStateVersion!==Te.state.version||le.outputColorSpace!==qe||W.isInstancedMesh&&le.instancing===!1||!W.isInstancedMesh&&le.instancing===!0||W.isSkinnedMesh&&le.skinning===!1||!W.isSkinnedMesh&&le.skinning===!0||W.isInstancedMesh&&le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&le.instancingColor===!1&&W.instanceColor!==null||le.envMap!==je||j.fog===!0&&le.fog!==we||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==be.numPlanes||le.numIntersection!==be.numIntersection)||le.vertexAlphas!==Je||le.vertexTangents!==Ke||le.morphTargets!==Ze||le.morphNormals!==st||le.morphColors!==L||le.toneMapping!==N||de.isWebGL2===!0&&le.morphTargetsCount!==ne)&&(Ce=!0):(Ce=!0,le.__version=j.version);let ke=le.currentProgram;Ce===!0&&(ke=It(j,H,W));let ht=!1,ut=!1,bt=!1;const at=ke.getUniforms(),gt=le.uniforms;if(Ne.useProgram(ke.program)&&(ht=!0,ut=!0,bt=!0),j.id!==k&&(k=j.id,ut=!0),ht||M!==S){at.setValue(O,"projectionMatrix",S.projectionMatrix),at.setValue(O,"viewMatrix",S.matrixWorldInverse);const St=at.map.cameraPosition;St!==void 0&&St.setValue(O,_e.setFromMatrixPosition(S.matrixWorld)),de.logarithmicDepthBuffer&&at.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&at.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ut=!0,bt=!0)}if(W.isSkinnedMesh){at.setOptional(O,W,"bindMatrix"),at.setOptional(O,W,"bindMatrixInverse");const St=W.skeleton;St&&(de.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),at.setValue(O,"boneTexture",St.boneTexture,Pe),at.setValue(O,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Yt=V.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0&&de.isWebGL2===!0)&&R.update(W,V,ke),(ut||le.receiveShadow!==W.receiveShadow)&&(le.receiveShadow=W.receiveShadow,at.setValue(O,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gt.envMap.value=je,gt.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ut&&(at.setValue(O,"toneMappingExposure",x.toneMappingExposure),le.needsLights&&mt(gt,bt),we&&j.fog===!0&&ae.refreshFogUniforms(gt,we),ae.refreshMaterialUniforms(gt,j,$,K,fe),Mr.upload(O,cn(le),gt,Pe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Mr.upload(O,cn(le),gt,Pe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&at.setValue(O,"center",W.center),at.setValue(O,"modelViewMatrix",W.modelViewMatrix),at.setValue(O,"normalMatrix",W.normalMatrix),at.setValue(O,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const St=j.uniformsGroups;for(let Ri=0,Nr=St.length;Ri<Nr;Ri++)if(de.isWebGL2){const Yi=St[Ri];Re.update(Yi,ke),Re.bind(Yi,ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ke}function mt(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Tt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,H,V){Le.get(S.texture).__webglTexture=H,Le.get(S.depthTexture).__webglTexture=V;const j=Le.get(S);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=V===void 0,j.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,H){const V=Le.get(S);V.__webglFramebuffer=H,V.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,V=0){A=S,y=H,C=V;let j=!0,W=null,we=!1,He=!1;if(S){const je=Le.get(S);je.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(O.FRAMEBUFFER,null),j=!1):je.__webglFramebuffer===void 0?Pe.setupRenderTarget(S):je.__hasExternalTextures&&Pe.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);const Je=S.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(He=!0);const Ke=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?W=Ke[H][V]:W=Ke[H],we=!0):de.isWebGL2&&S.samples>0&&Pe.useMultisampledRTT(S)===!1?W=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(Ke)?W=Ke[V]:W=Ke,w.copy(S.viewport),Y.copy(S.scissor),X=S.scissorTest}else w.copy(te).multiplyScalar($).floor(),Y.copy(U).multiplyScalar($).floor(),X=F;if(Ne.bindFramebuffer(O.FRAMEBUFFER,W)&&de.drawBuffers&&j&&Ne.drawBuffers(S,W),Ne.viewport(w),Ne.scissor(Y),Ne.setScissorTest(X),we){const je=Le.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,je.__webglTexture,V)}else if(He){const je=Le.get(S.texture),Je=H||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,je.__webglTexture,V||0,Je)}k=-1},this.readRenderTargetPixels=function(S,H,V,j,W,we,He){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){Ne.bindFramebuffer(O.FRAMEBUFFER,qe);try{const je=S.texture,Je=je.format,Ke=je.type;if(Je!==sn&&Be.convert(Je)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ke===Wi&&(ve.has("EXT_color_buffer_half_float")||de.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ke!==Nn&&Be.convert(Ke)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Dn&&(de.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-j&&V>=0&&V<=S.height-W&&O.readPixels(H,V,j,W,Be.convert(Je),Be.convert(Ke),we)}finally{const je=A!==null?Le.get(A).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(S,H,V=0){const j=Math.pow(2,-V),W=Math.floor(H.image.width*j),we=Math.floor(H.image.height*j);Pe.setTexture2D(H,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,S.x,S.y,W,we),Ne.unbindTexture()},this.copyTextureToTexture=function(S,H,V,j=0){const W=H.image.width,we=H.image.height,He=Be.convert(V.format),qe=Be.convert(V.type);Pe.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),H.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,S.x,S.y,W,we,He,qe,H.image.data):H.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,S.x,S.y,H.mipmaps[0].width,H.mipmaps[0].height,He,H.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,j,S.x,S.y,He,qe,H.image),j===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(S,H,V,j,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=S.max.x-S.min.x+1,He=S.max.y-S.min.y+1,qe=S.max.z-S.min.z+1,je=Be.convert(j.format),Je=Be.convert(j.type);let Ke;if(j.isData3DTexture)Pe.setTexture3D(j,0),Ke=O.TEXTURE_3D;else if(j.isDataArrayTexture)Pe.setTexture2DArray(j,0),Ke=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const Ze=O.getParameter(O.UNPACK_ROW_LENGTH),st=O.getParameter(O.UNPACK_IMAGE_HEIGHT),L=O.getParameter(O.UNPACK_SKIP_PIXELS),N=O.getParameter(O.UNPACK_SKIP_ROWS),Z=O.getParameter(O.UNPACK_SKIP_IMAGES),ne=V.isCompressedTexture?V.mipmaps[0]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ne.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(Ke,W,H.x,H.y,H.z,we,He,qe,je,Je,ne.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ke,W,H.x,H.y,H.z,we,He,qe,je,ne.data)):O.texSubImage3D(Ke,W,H.x,H.y,H.z,we,He,qe,je,Je,ne),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ze),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),O.pixelStorei(O.UNPACK_SKIP_PIXELS,L),O.pixelStorei(O.UNPACK_SKIP_ROWS,N),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Z),W===0&&j.generateMipmaps&&O.generateMipmap(Ke),Ne.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Pe.setTextureCube(S,0):S.isData3DTexture?Pe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Pe.setTexture2DArray(S,0):Pe.setTexture2D(S,0),Ne.unbindTexture()},this.resetState=function(){y=0,C=0,A=null,Ne.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===No?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Pr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?Zn:Oa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?Ct:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Up extends nl{}Up.prototype.isWebGL1Renderer=!0;class Ip extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Rr extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new dt,ha=new dt,_r=[],ua=new Qn,Np=new dt,Ii=new Xt,Ni=new Ai;class Fp extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),ua.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(ua)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),Ni.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Ni)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(i),e.ray.intersectsSphere(Ni)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,gi),ha.multiplyMatrices(i,gi),Ii.matrixWorld=ha,Ii.raycast(e,_r);for(let a=0,s=_r.length;a<s;a++){const l=_r[a];l.instanceId=o,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new I,fa=new I,pa=new dt,uo=new Oo,vr=new Ai;class Fi extends vt{constructor(e=new ln,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)da.fromBufferAttribute(t,r-1),fa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=da.distanceTo(fa);e.setAttribute("lineDistance",new an(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),vr.radius+=o,e.ray.intersectsSphere(vr)===!1)return;pa.copy(r).invert(),uo.copy(e.ray).applyMatrix4(pa);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new I,h=new I,d=new I,f=new I,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const u=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let x=u,E=b-1;x<E;x+=m){const y=g.getX(x),C=g.getX(x+1);if(c.fromBufferAttribute(p,y),h.fromBufferAttribute(p,C),uo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let x=u,E=b-1;x<E;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),uo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}class Wn extends ln{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+s,Math.PI);let c=0;const h=[],d=new I,f=new I,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const b=[],x=u/i;let E=0;u===0&&a===0?E=.5/t:u===i&&l===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){const C=y/t;d.x=-e*Math.cos(r+C*o)*Math.sin(a+x*s),d.y=e*Math.cos(a+x*s),d.z=e*Math.sin(r+C*o)*Math.sin(a+x*s),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(C+E,1-x),b.push(c++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<t;b++){const x=h[u][b+1],E=h[u][b],y=h[u+1][b],C=h[u+1][b+1];(u!==0||a>0)&&m.push(x,E,C),(u!==i-1||l<Math.PI)&&m.push(E,y,C)}this.setIndex(m),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fo extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Go extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Op extends Go{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const po=new dt,ma=new I,ga=new I;class zp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ma.setFromMatrixPosition(e.matrixWorld),t.position.copy(ma),ga.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ga),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bp extends zp{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends Go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gp extends Go{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_a(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_a();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _a(){return(typeof performance>"u"?Date:performance).now()}class Po{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);const va={type:"change"},mo={type:"start"},xa={type:"end"},xr=new Oo,Ma=new Ln,Vp=Math.cos(70*vn.DEG2RAD);class il extends yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zt.ROTATE,MIDDLE:Zt.DOLLY,RIGHT:Zt.PAN},this.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",v),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(va),i.update(),o=r.NONE},this.update=function(){const R=new I,ce=new un().setFromUnitVectors(e.up,new I(0,1,0)),ie=ce.clone().invert(),Be=new I,Ue=new un,Re=new I,Ae=2*Math.PI;return function(Ve=null){const P=i.object.position;R.copy(P).sub(i.target),R.applyQuaternion(ce),s.setFromVector3(R),i.autoRotate&&o===r.NONE&&Y(M(Ve)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Ee=i.minAzimuthAngle,he=i.maxAzimuthAngle;isFinite(Ee)&&isFinite(he)&&(Ee<-Math.PI?Ee+=Ae:Ee>Math.PI&&(Ee-=Ae),he<-Math.PI?he+=Ae:he>Math.PI&&(he-=Ae),Ee<=he?s.theta=Math.max(Ee,Math.min(he,s.theta)):s.theta=s.theta>(Ee+he)/2?Math.max(Ee,s.theta):Math.min(he,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=ee(s.radius):s.radius=ee(s.radius*c),R.setFromSpherical(s),R.applyQuaternion(ie),P.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let q=!1;if(i.zoomToCursor&&C){let me=null;if(i.object.isPerspectiveCamera){const Ie=R.length();me=ee(Ie*c);const Xe=Ie-me;i.object.position.addScaledVector(E,Xe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ie=new I(y.x,y.y,0);Ie.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),q=!0;const Xe=new I(y.x,y.y,0);Xe.unproject(i.object),i.object.position.sub(Xe).add(Ie),i.object.updateMatrixWorld(),me=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(xr.origin.copy(i.object.position),xr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xr.direction))<Vp?e.lookAt(i.target):(Ma.setFromNormalAndCoplanarPoint(i.object.up,i.target),xr.intersectPlane(Ma,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),q=!0);return c=1,C=!1,q||Be.distanceToSquared(i.object.position)>a||8*(1-Ue.dot(i.object.quaternion))>a||Re.distanceToSquared(i.target)>0?(i.dispatchEvent(va),Be.copy(i.object.position),Ue.copy(i.object.quaternion),Re.copy(i.target),q=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",se),i.domElement.removeEventListener("pointerdown",Le),i.domElement.removeEventListener("pointercancel",ze),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",Pe),i.domElement.removeEventListener("pointerup",ze),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new Po,l=new Po;let c=1;const h=new I,d=new Ye,f=new Ye,m=new Ye,g=new Ye,_=new Ye,p=new Ye,u=new Ye,b=new Ye,x=new Ye,E=new I,y=new Ye;let C=!1;const A=[],k={};function M(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function Y(R){l.theta-=R}function X(R){l.phi-=R}const J=function(){const R=new I;return function(ie,Be){R.setFromMatrixColumn(Be,0),R.multiplyScalar(-ie),h.add(R)}}(),D=function(){const R=new I;return function(ie,Be){i.screenSpacePanning===!0?R.setFromMatrixColumn(Be,1):(R.setFromMatrixColumn(Be,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(ie),h.add(R)}}(),G=function(){const R=new I;return function(ie,Be){const Ue=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;R.copy(Re).sub(i.target);let Ae=R.length();Ae*=Math.tan(i.object.fov/2*Math.PI/180),J(2*ie*Ae/Ue.clientHeight,i.object.matrix),D(2*Be*Ae/Ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(ie*(i.object.right-i.object.left)/i.object.zoom/Ue.clientWidth,i.object.matrix),D(Be*(i.object.top-i.object.bottom)/i.object.zoom/Ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(R){if(!i.zoomToCursor)return;C=!0;const ce=i.domElement.getBoundingClientRect(),ie=R.clientX-ce.left,Be=R.clientY-ce.top,Ue=ce.width,Re=ce.height;y.x=ie/Ue*2-1,y.y=-(Be/Re)*2+1,E.set(y.x,y.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function te(R){d.set(R.clientX,R.clientY)}function U(R){re(R),u.set(R.clientX,R.clientY)}function F(R){g.set(R.clientX,R.clientY)}function Me(R){f.set(R.clientX,R.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;Y(2*Math.PI*m.x/ce.clientHeight),X(2*Math.PI*m.y/ce.clientHeight),d.copy(f),i.update()}function xe(R){b.set(R.clientX,R.clientY),x.subVectors(b,u),x.y>0?K(w()):x.y<0&&$(w()),u.copy(b),i.update()}function oe(R){_.set(R.clientX,R.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(_),i.update()}function fe(R){re(R),R.deltaY<0?$(w()):R.deltaY>0&&K(w()),i.update()}function z(R){let ce=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ce=!0;break}ce&&(R.preventDefault(),i.update())}function Q(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),ce=.5*(A[0].pageY+A[1].pageY);d.set(R,ce)}}function _e(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),ce=.5*(A[0].pageY+A[1].pageY);g.set(R,ce)}}function Oe(){const R=A[0].pageX-A[1].pageX,ce=A[0].pageY-A[1].pageY,ie=Math.sqrt(R*R+ce*ce);u.set(0,ie)}function Fe(){i.enableZoom&&Oe(),i.enablePan&&_e()}function O(){i.enableZoom&&Oe(),i.enableRotate&&Q()}function et(R){if(A.length==1)f.set(R.pageX,R.pageY);else{const ie=Se(R),Be=.5*(R.pageX+ie.x),Ue=.5*(R.pageY+ie.y);f.set(Be,Ue)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;Y(2*Math.PI*m.x/ce.clientHeight),X(2*Math.PI*m.y/ce.clientHeight),d.copy(f)}function ve(R){if(A.length===1)_.set(R.pageX,R.pageY);else{const ce=Se(R),ie=.5*(R.pageX+ce.x),Be=.5*(R.pageY+ce.y);_.set(ie,Be)}p.subVectors(_,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(_)}function de(R){const ce=Se(R),ie=R.pageX-ce.x,Be=R.pageY-ce.y,Ue=Math.sqrt(ie*ie+Be*Be);b.set(0,Ue),x.set(0,Math.pow(b.y/u.y,i.zoomSpeed)),K(x.y),u.copy(b)}function Ne(R){i.enableZoom&&de(R),i.enablePan&&ve(R)}function We(R){i.enableZoom&&de(R),i.enableRotate&&et(R)}function Le(R){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",Pe),i.domElement.addEventListener("pointerup",ze)),ue(R),R.pointerType==="touch"?B(R):Ge(R))}function Pe(R){i.enabled!==!1&&(R.pointerType==="touch"?ae(R):$e(R))}function ze(R){be(R),A.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",Pe),i.domElement.removeEventListener("pointerup",ze)),i.dispatchEvent(xa),o=r.NONE}function Ge(R){let ce;switch(R.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case Zt.DOLLY:if(i.enableZoom===!1)return;U(R),o=r.DOLLY;break;case Zt.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;F(R),o=r.PAN}else{if(i.enableRotate===!1)return;te(R),o=r.ROTATE}break;case Zt.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;te(R),o=r.ROTATE}else{if(i.enablePan===!1)return;F(R),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(mo)}function $e(R){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;Me(R);break;case r.DOLLY:if(i.enableZoom===!1)return;xe(R);break;case r.PAN:if(i.enablePan===!1)return;oe(R);break}}function T(R){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(R.preventDefault(),i.dispatchEvent(mo),fe(R),i.dispatchEvent(xa))}function v(R){i.enabled===!1||i.enablePan===!1||z(R)}function B(R){switch(pe(R),A.length){case 1:switch(i.touches.ONE){case Rn.ROTATE:if(i.enableRotate===!1)return;Q(),o=r.TOUCH_ROTATE;break;case Rn.PAN:if(i.enablePan===!1)return;_e(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Rn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(),o=r.TOUCH_DOLLY_PAN;break;case Rn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(mo)}function ae(R){switch(pe(R),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;et(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ve(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ne(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;We(R),i.update();break;default:o=r.NONE}}function se(R){i.enabled!==!1&&R.preventDefault()}function ue(R){A.push(R)}function be(R){delete k[R.pointerId];for(let ce=0;ce<A.length;ce++)if(A[ce].pointerId==R.pointerId){A.splice(ce,1);return}}function pe(R){let ce=k[R.pointerId];ce===void 0&&(ce=new Ye,k[R.pointerId]=ce),ce.set(R.pageX,R.pageY)}function Se(R){const ce=R.pointerId===A[0].pointerId?A[1]:A[0];return k[ce.pointerId]}i.domElement.addEventListener("contextmenu",se),i.domElement.addEventListener("pointerdown",Le),i.domElement.addEventListener("pointercancel",ze),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var Dt=Math.PI,_t=Dt*2,Bi=Dt/180,Wp=180/Dt,Xp=1440,qp=398600.8,Wt=6378.135,Sn=60/Math.sqrt(Wt*Wt*Wt/qp),go=Wt*Sn/60,jp=1/Sn,qn=.001082616,Yp=-253881e-11,Kp=-165597e-11,jn=Yp/qn,qi=2/3;function Zp(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,o=0;i>o+t[r-1]&&r<12;)o+=t[r-1],r+=1;var a=r,s=i-o,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:a,day:s,hr:c,minute:h,sec:d}}function Sa(n,e,t,i,r,o){var a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((a/6e4+o/60+r)/60+i)/24}function ko(n,e,t,i,r,o,a){if(n instanceof Date){var s=n;return Sa(s.getUTCFullYear(),s.getUTCMonth()+1,s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return Sa(n,e,t,i,r,o,a)}function rl(n,e){var t=n.e3,i=n.ee2,r=n.peo,o=n.pgho,a=n.pho,s=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,g=n.sh2,_=n.sh3,p=n.si2,u=n.si3,b=n.sl2,x=n.sl3,E=n.sl4,y=n.t,C=n.xgh2,A=n.xgh3,k=n.xgh4,M=n.xh2,w=n.xh3,Y=n.xi2,X=n.xi3,J=n.xl2,D=n.xl3,G=n.xl4,K=n.zmol,$=n.zmos,re=e.init,ee=e.opsmode,te=e.ep,U=e.inclp,F=e.nodep,Me=e.argpp,xe=e.mp,oe,fe,z,Q,_e,Oe,Fe,O,et,ve,de,Ne,We,Le,Pe,ze,Ge,$e,T,v,B,ae=119459e-10,se=.01675,ue=.00015835218,be=.0549;B=$+ae*y,re==="y"&&(B=$),v=B+2*se*Math.sin(B),Ge=Math.sin(v),ve=.5*Ge*Ge-.25,de=-.5*Ge*Math.cos(v);var pe=c*ve+h*de,Se=p*ve+u*de,R=b*ve+x*de+E*Ge,ce=d*ve+f*de+m*Ge,ie=g*ve+_*de;B=K+ue*y,re==="y"&&(B=K),v=B+2*be*Math.sin(B),Ge=Math.sin(v),ve=.5*Ge*Ge-.25,de=-.5*Ge*Math.cos(v);var Be=i*ve+t*de,Ue=Y*ve+X*de,Re=J*ve+D*de+G*Ge,Ae=C*ve+A*de+k*Ge,ye=M*ve+w*de;return Ne=pe+Be,Pe=Se+Ue,ze=R+Re,We=ce+Ae,Le=ie+ye,re==="n"&&(Ne-=r,Pe-=s,ze-=l,We-=o,Le-=a,U+=Pe,te+=Ne,Q=Math.sin(U),z=Math.cos(U),U>=.2?(Le/=Q,We-=z*Le,Me+=We,F+=Le,xe+=ze):(Oe=Math.sin(F),_e=Math.cos(F),oe=Q*Oe,fe=Q*_e,Fe=Le*_e+Pe*z*Oe,O=-Le*Oe+Pe*z*_e,oe+=Fe,fe+=O,F%=_t,F<0&&ee==="a"&&(F+=_t),$e=xe+Me+z*F,et=ze+We-Pe*F*Q,$e+=et,T=F,F=Math.atan2(oe,fe),F<0&&ee==="a"&&(F+=_t),Math.abs(T-F)>Dt&&(F<T?F+=_t:F-=_t),xe+=ze,Me=$e-xe-z*F)),{ep:te,inclp:U,nodep:F,argpp:Me,mp:xe}}function $p(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,o=n.inclp,a=n.nodep,s=n.np,l,c,h,d,f,m,g,_,p,u,b,x,E,y,C,A,k,M,w,Y,X,J,D,G,K,$,re,ee,te,U,F,Me,xe,oe,fe,z,Q,_e,Oe,Fe,O,et,ve,de,Ne,We,Le,Pe,ze,Ge,$e,T,v,B,ae,se,ue,be,pe,Se,R,ce,ie,Be=.01675,Ue=.0549,Re=29864797e-13,Ae=47968065e-14,ye=.39785416,Ve=.91744867,P=.1945905,Ee=-.98088458,he=s,q=t,me=Math.sin(a),Ie=Math.cos(a),Xe=Math.sin(i),it=Math.cos(i),ct=Math.sin(o),Qe=Math.cos(o),ge=q*q,pt=1-ge,Mt=Math.sqrt(pt),Gt=0,ot=0,Ut=0,It=0,cn=0,Nt=e+18261.5+r/1440,Ft=(4.523602-.00092422029*Nt)%_t,mt=Math.sin(Ft),Tt=Math.cos(Ft),S=.91375164-.03568096*Tt,H=Math.sqrt(1-S*S),V=.089683511*mt/H,j=Math.sqrt(1-V*V),W=5.8351514+.001944368*Nt,we=.39785416*mt/H,He=j*Tt+.91744867*V*mt;we=Math.atan2(we,He),we+=W-Ft;var qe=Math.cos(we),je=Math.sin(we);Y=P,X=Ee,G=Ve,K=ye,J=Ie,D=me,b=Re;for(var Je=1/he,Ke=0;Ke<2;)Ke+=1,l=Y*J+X*G*D,h=-X*J+Y*G*D,g=-Y*D+X*G*J,_=X*K,p=X*D+Y*G*J,u=Y*K,c=Qe*g+ct*_,d=Qe*p+ct*u,f=-ct*g+Qe*_,m=-ct*p+Qe*u,x=l*it+c*Xe,E=h*it+d*Xe,y=-l*Xe+c*it,C=-h*Xe+d*it,A=f*Xe,k=m*Xe,M=f*it,w=m*it,R=12*x*x-3*y*y,ce=24*x*E-6*y*C,ie=12*E*E-3*C*C,T=3*(l*l+c*c)+R*ge,v=6*(l*h+c*d)+ce*ge,B=3*(h*h+d*d)+ie*ge,ae=-6*l*f+ge*(-24*x*M-6*y*A),se=-6*(l*m+h*f)+ge*(-24*(E*M+x*w)+-6*(y*k+C*A)),ue=-6*h*m+ge*(-24*E*w-6*C*k),be=6*c*f+ge*(24*x*A-6*y*M),pe=6*(d*f+c*m)+ge*(24*(E*A+x*k)-6*(C*M+y*w)),Se=6*d*m+ge*(24*E*k-6*C*w),T=T+T+pt*R,v=v+v+pt*ce,B=B+B+pt*ie,Le=b*Je,We=-.5*Le/Mt,Pe=Le*Mt,Ne=-15*q*Pe,ze=x*y+E*C,Ge=E*y+x*C,$e=E*C-x*y,Ke===1&&($=Ne,re=We,ee=Le,te=Pe,U=ze,F=Ge,Me=$e,xe=T,oe=v,fe=B,z=ae,Q=se,_e=ue,Oe=be,Fe=pe,O=Se,et=R,ve=ce,de=ie,Y=qe,X=je,G=S,K=H,J=j*Ie+V*me,D=me*j-Ie*V,b=Ae);var Ze=(4.7199672+(.2299715*Nt-W))%_t,st=(6.2565837+.017201977*Nt)%_t,L=2*$*F,N=2*$*Me,Z=2*re*Q,ne=2*re*(_e-z),le=-2*ee*oe,Te=-2*ee*(fe-xe),Ce=-2*ee*(-21-9*ge)*Be,ke=2*te*ve,ht=2*te*(de-et),ut=-18*te*Be,bt=-2*re*Fe,at=-2*re*(O-Oe),gt=2*Ne*Ge,Yt=2*Ne*$e,St=2*We*se,Ri=2*We*(ue-ae),Nr=-2*Le*v,Yi=-2*Le*(B-T),hl=-2*Le*(-21-9*ge)*Ue,ul=2*Pe*ce,dl=2*Pe*(ie-R),fl=-18*Pe*Ue,pl=-2*We*pe,ml=-2*We*(Se-be);return{snodm:me,cnodm:Ie,sinim:ct,cosim:Qe,sinomm:Xe,cosomm:it,day:Nt,e3:Yt,ee2:gt,em:q,emsq:ge,gam:W,peo:Gt,pgho:It,pho:cn,pinco:ot,plo:Ut,rtemsq:Mt,se2:L,se3:N,sgh2:ke,sgh3:ht,sgh4:ut,sh2:bt,sh3:at,si2:Z,si3:ne,sl2:le,sl3:Te,sl4:Ce,s1:Ne,s2:We,s3:Le,s4:Pe,s5:ze,s6:Ge,s7:$e,ss1:$,ss2:re,ss3:ee,ss4:te,ss5:U,ss6:F,ss7:Me,sz1:xe,sz2:oe,sz3:fe,sz11:z,sz12:Q,sz13:_e,sz21:Oe,sz22:Fe,sz23:O,sz31:et,sz32:ve,sz33:de,xgh2:ul,xgh3:dl,xgh4:fl,xh2:pl,xh3:ml,xi2:St,xi3:Ri,xl2:Nr,xl3:Yi,xl4:hl,nm:he,z1:T,z2:v,z3:B,z11:ae,z12:se,z13:ue,z21:be,z22:pe,z23:Se,z31:R,z32:ce,z33:ie,zmol:Ze,zmos:st}}function Jp(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,o=n.s3,a=n.s4,s=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,g=n.sz1,_=n.sz3,p=n.sz11,u=n.sz13,b=n.sz21,x=n.sz23,E=n.sz31,y=n.sz33,C=n.t,A=n.tc,k=n.gsto,M=n.mo,w=n.mdot,Y=n.no,X=n.nodeo,J=n.nodedot,D=n.xpidot,G=n.z1,K=n.z3,$=n.z11,re=n.z13,ee=n.z21,te=n.z23,U=n.z31,F=n.z33,Me=n.ecco,xe=n.eccsq,oe=n.emsq,fe=n.em,z=n.argpm,Q=n.inclm,_e=n.mm,Oe=n.nm,Fe=n.nodem,O=n.irez,et=n.atime,ve=n.d2201,de=n.d2211,Ne=n.d3210,We=n.d3222,Le=n.d4410,Pe=n.d4422,ze=n.d5220,Ge=n.d5232,$e=n.d5421,T=n.d5433,v=n.dedt,B=n.didt,ae=n.dmdt,se=n.dnodt,ue=n.domdt,be=n.del1,pe=n.del2,Se=n.del3,R=n.xfact,ce=n.xlamo,ie=n.xli,Be=n.xni,Ue,Re,Ae,ye,Ve,P,Ee,he,q,me,Ie,Xe,it,ct,Qe,ge,pt,Mt,Gt,ot,Ut,It,cn,Nt,Ft,mt,Tt,S,H,V,j,W,we=17891679e-13,He=21460748e-13,qe=22123015e-14,je=17891679e-13,Je=73636953e-16,Ke=21765803e-16,Ze=.0043752690880113,st=37393792e-14,L=11428639e-14,N=.00015835218,Z=119459e-10;O=0,Oe<.0052359877&&Oe>.0034906585&&(O=1),Oe>=.00826&&Oe<=.00924&&fe>=.5&&(O=2);var ne=c*Z*m,le=h*Z*(p+u),Te=-Z*d*(g+_-14-6*oe),Ce=f*Z*(E+y-6),ke=-Z*h*(b+x);(Q<.052359877||Q>Dt-.052359877)&&(ke=0),l!==0&&(ke/=l);var ht=Ce-e*ke;v=ne+i*N*s,B=le+r*N*($+re),ae=Te-N*o*(G+K-14-6*oe);var ut=a*N*(U+F-6),bt=-N*r*(ee+te);(Q<.052359877||Q>Dt-.052359877)&&(bt=0),ue=ht+ut,se=ke,l!==0&&(ue-=e/l*bt,se+=bt/l);var at=0,gt=(k+A*Ze)%_t;if(fe+=v*C,Q+=B*C,z+=ue*C,Fe+=se*C,_e+=ae*C,O!==0){if(V=Math.pow(Oe/Sn,qi),O===2){j=e*e;var Yt=fe;fe=Me;var St=oe;oe=xe,W=fe*oe,ct=-.306-(fe-.64)*.44,fe<=.65?(Qe=3.616-13.247*fe+16.29*oe,pt=-19.302+117.39*fe-228.419*oe+156.591*W,Mt=-18.9068+109.7927*fe-214.6334*oe+146.5816*W,Gt=-41.122+242.694*fe-471.094*oe+313.953*W,ot=-146.407+841.88*fe-1629.014*oe+1083.435*W,Ut=-532.114+3017.977*fe-5740.032*oe+3708.276*W):(Qe=-72.099+331.819*fe-508.738*oe+266.724*W,pt=-346.844+1582.851*fe-2415.925*oe+1246.113*W,Mt=-342.585+1554.908*fe-2366.899*oe+1215.972*W,Gt=-1052.797+4758.686*fe-7193.992*oe+3651.957*W,ot=-3581.69+16178.11*fe-24462.77*oe+12422.52*W,fe>.715?Ut=-5149.66+29936.92*fe-54087.36*oe+31324.56*W:Ut=1464.74-4664.75*fe+3763.64*oe),fe<.7?(Nt=-919.2277+4988.61*fe-9064.77*oe+5542.21*W,It=-822.71072+4568.6173*fe-8491.4146*oe+5337.524*W,cn=-853.666+4690.25*fe-8624.77*oe+5341.4*W):(Nt=-37995.78+161616.52*fe-229838.2*oe+109377.94*W,It=-51752.104+218913.95*fe-309468.16*oe+146349.42*W,cn=-40023.88+170470.89*fe-242699.48*oe+115605.82*W),Ft=l*l,Ue=.75*(1+2*e+j),Re=1.5*Ft,ye=1.875*l*(1-2*e-3*j),Ve=-1.875*l*(1+2*e-3*j),Ee=35*Ft*Ue,he=39.375*Ft*Ft,q=9.84375*l*(Ft*(1-2*e-5*j)+.33333333*(-2+4*e+6*j)),me=l*(4.92187512*Ft*(-2-4*e+10*j)+6.56250012*(1+2*e-3*j)),Ie=29.53125*l*(2-8*e+j*(-12+8*e+10*j)),Xe=29.53125*l*(-2-8*e+j*(12+8*e-10*j)),S=Oe*Oe,H=V*V,Tt=3*S*H,mt=Tt*je,ve=mt*Ue*ct,de=mt*Re*Qe,Tt*=V,mt=Tt*st,Ne=mt*ye*pt,We=mt*Ve*Mt,Tt*=V,mt=2*Tt*Je,Le=mt*Ee*Gt,Pe=mt*he*ot,Tt*=V,mt=Tt*L,ze=mt*q*Ut,Ge=mt*me*cn,mt=2*Tt*Ke,$e=mt*Ie*It,T=mt*Xe*Nt,ce=(M+X+X-(gt+gt))%_t,R=w+ae+2*(J+se-Ze)-Y,fe=Yt,oe=St}O===1&&(it=1+oe*(-2.5+.8125*oe),pt=1+2*oe,ge=1+oe*(-6+6.60937*oe),Ue=.75*(1+e)*(1+e),Ae=.9375*l*l*(1+3*e)-.75*(1+e),P=1+e,P*=1.875*P*P,be=3*Oe*Oe*V*V,pe=2*be*Ue*it*we,Se=3*be*P*ge*qe*V,be=be*Ae*pt*He*V,ce=(M+X+t-gt)%_t,R=w+D+ae+ue+se-(Y+Ze)),ie=ce,Be=Y,et=0,Oe=Y+at}return{em:fe,argpm:z,inclm:Q,mm:_e,nm:Oe,nodem:Fe,irez:O,atime:et,d2201:ve,d2211:de,d3210:Ne,d3222:We,d4410:Le,d4422:Pe,d5220:ze,d5232:Ge,d5421:$e,d5433:T,dedt:v,didt:B,dmdt:ae,dndt:at,dnodt:se,domdt:ue,del1:be,del2:pe,del3:Se,xfact:R,xlamo:ce,xli:ie,xni:Be}}function Ea(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Bi/240%_t,t<0&&(t+=_t),t}function ol(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?Ea(ko.apply(void 0,arguments)):Ea.apply(void 0,arguments)}function Qp(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,o=n.no,a=e*e,s=1-a,l=Math.sqrt(s),c=Math.cos(i),h=c*c,d=Math.pow(Sn/o,qi),f=.75*qn*(3*h-1)/(l*s),m=f/(d*d),g=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(g*g),o/=1+m;var _=Math.pow(Sn/o,qi),p=Math.sin(i),u=_*s,b=1-5*h,x=-b-h-h,E=1/_,y=u*u,C=_*(1-e),A="n",k;if(r==="a"){var M=t-7305,w=Math.floor(M+1e-8),Y=M-w,X=.017202791694070362,J=1.7321343856509375,D=5075514194322695e-30,G=X+_t;k=(J+X*w+G*Y+M*M*D)%_t,k<0&&(k+=_t)}else k=ol(t+24332815e-1);return{no:o,method:A,ainv:E,ao:_,con41:x,con42:b,cosio:c,cosio2:h,eccsq:a,omeosq:s,posq:y,rp:C,rteosq:l,sinio:p,gsto:k}}function em(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,o=n.d3222,a=n.d4410,s=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,g=n.del2,_=n.del3,p=n.didt,u=n.dmdt,b=n.dnodt,x=n.domdt,E=n.argpo,y=n.argpdot,C=n.t,A=n.tc,k=n.gsto,M=n.xfact,w=n.xlamo,Y=n.no,X=n.atime,J=n.em,D=n.argpm,G=n.inclm,K=n.xli,$=n.mm,re=n.xni,ee=n.nodem,te=n.nm,U=.13130908,F=2.8843198,Me=.37448087,xe=5.7686396,oe=.95240898,fe=1.8014998,z=1.050833,Q=4.4108898,_e=.0043752690880113,Oe=720,Fe=-720,O=259200,et,ve,de,Ne,We,Le,Pe,ze,Ge=0,$e=0,T=(k+A*_e)%_t;if(J+=f*C,G+=p*C,D+=x*C,ee+=b*C,$+=u*C,e!==0){(X===0||C*X<=0||Math.abs(C)<Math.abs(X))&&(X=0,re=Y,K=w),C>0?et=Oe:et=Fe;for(var v=381;v===381;)e!==2?(Pe=m*Math.sin(K-U)+g*Math.sin(2*(K-F))+_*Math.sin(3*(K-Me)),We=re+M,Le=m*Math.cos(K-U)+2*g*Math.cos(2*(K-F))+3*_*Math.cos(3*(K-Me)),Le*=We):(ze=E+y*X,de=ze+ze,ve=K+K,Pe=t*Math.sin(de+K-xe)+i*Math.sin(K-xe)+r*Math.sin(ze+K-oe)+o*Math.sin(-ze+K-oe)+a*Math.sin(de+ve-fe)+s*Math.sin(ve-fe)+l*Math.sin(ze+K-z)+c*Math.sin(-ze+K-z)+h*Math.sin(ze+ve-Q)+d*Math.sin(-ze+ve-Q),We=re+M,Le=t*Math.cos(de+K-xe)+i*Math.cos(K-xe)+r*Math.cos(ze+K-oe)+o*Math.cos(-ze+K-oe)+l*Math.cos(ze+K-z)+c*Math.cos(-ze+K-z)+2*(a*Math.cos(de+ve-fe)+s*Math.cos(ve-fe)+h*Math.cos(ze+ve-Q)+d*Math.cos(-ze+ve-Q)),Le*=We),Math.abs(C-X)>=Oe?v=381:($e=C-X,v=0),v===381&&(K+=We*et+Pe*O,re+=Pe*et+Le*O,X+=et);te=re+Pe*$e+Le*$e*$e*.5,Ne=K+We*$e+Pe*$e*$e*.5,e!==1?($=Ne-2*ee+2*T,Ge=te-Y):($=Ne-ee-D+T,Ge=te-Y),te=Y+Ge}return{atime:X,em:J,argpm:D,inclm:G,xli:K,mm:$,xni:re,nodem:ee,dndt:Ge,nm:te}}function sl(n,e){var t,i,r,o,a,s,l,c,h,d,f,m,g,_,p,u,b,x,E,y,C,A,k,M,w,Y,X,J=15e-13;n.t=e,n.error=0;var D=n.mo+n.mdot*n.t,G=n.argpo+n.argpdot*n.t,K=n.nodeo+n.nodedot*n.t;h=G,C=D;var $=n.t*n.t;if(k=K+n.nodecf*$,b=1-n.cc1*n.t,x=n.bstar*n.cc4*n.t,E=n.t2cof*$,n.isimp!==1){l=n.omgcof*n.t;var re=1+n.eta*Math.cos(D);s=n.xmcof*(re*re*re-n.delmo),u=l+s,C=D+u,h=G-u,m=$*n.t,g=m*n.t,b=b-n.d2*$-n.d3*m-n.d4*g,x+=n.bstar*n.cc5*(Math.sin(C)-n.sinmao),E=E+n.t3cof*m+g*(n.t4cof+n.t*n.t5cof)}A=n.no;var ee=n.ecco;if(y=n.inclo,n.method==="d"){_=n.t;var te={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:_,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:ee,argpm:h,inclm:y,xli:n.xli,mm:C,xni:n.xni,nodem:k,nm:A},U=em(te);ee=U.em,h=U.argpm,y=U.inclm,C=U.mm,k=U.nodem,A=U.nm}if(A<=0)return n.error=2,[!1,!1];var F=Math.pow(Sn/A,qi)*b*b;if(A=Sn/Math.pow(F,1.5),ee-=x,ee>=1||ee<-.001)return n.error=1,[!1,!1];ee<1e-6&&(ee=1e-6),C+=n.no*E,w=C+h+k,k%=_t,h%=_t,w%=_t,C=(w-h-k)%_t;var Me=Math.sin(y),xe=Math.cos(y),oe=ee;if(M=y,d=h,X=k,Y=C,o=Me,r=xe,n.method==="d"){var fe={inclo:n.inclo,init:"n",ep:oe,inclp:M,nodep:X,argpp:d,mp:Y,opsmode:n.operationmode},z=rl(n,fe);if(oe=z.ep,X=z.nodep,d=z.argpp,Y=z.mp,M=z.inclp,M<0&&(M=-M,X+=Dt,d-=Dt),oe<0||oe>1)return n.error=3,[!1,!1]}n.method==="d"&&(o=Math.sin(M),r=Math.cos(M),n.aycof=-.5*jn*o,Math.abs(r+1)>15e-13?n.xlcof=-.25*jn*o*(3+5*r)/(1+r):n.xlcof=-.25*jn*o*(3+5*r)/J);var Q=oe*Math.cos(d);u=1/(F*(1-oe*oe));var _e=oe*Math.sin(d)+u*n.aycof,Oe=Y+d+X+u*n.xlcof*Q,Fe=(Oe-X)%_t;c=Fe,p=9999.9;for(var O=1;Math.abs(p)>=1e-12&&O<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*Q-i*_e,p=(Fe-_e*t+Q*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,O+=1;var et=Q*t+_e*i,ve=Q*i-_e*t,de=Q*Q+_e*_e,Ne=F*(1-de);if(Ne<0)return n.error=4,[!1,!1];var We=F*(1-et),Le=Math.sqrt(F)*ve/We,Pe=Math.sqrt(Ne)/We,ze=Math.sqrt(1-de);u=ve/(1+ze);var Ge=F/We*(i-_e-Q*u),$e=F/We*(t-Q+_e*u);f=Math.atan2(Ge,$e);var T=($e+$e)*Ge,v=1-2*Ge*Ge;u=1/Ne;var B=.5*qn*u,ae=B*u;n.method==="d"&&(a=r*r,n.con41=3*a-1,n.x1mth2=1-a,n.x7thm1=7*a-1);var se=We*(1-1.5*ae*ze*n.con41)+.5*B*n.x1mth2*v;if(se<1)return n.error=6,{position:!1,velocity:!1};f-=.25*ae*n.x7thm1*T;var ue=X+1.5*ae*r*T,be=M+1.5*ae*r*o*v,pe=Le-A*B*n.x1mth2*T/Sn,Se=Pe+A*B*(n.x1mth2*v+1.5*n.con41)/Sn,R=Math.sin(f),ce=Math.cos(f),ie=Math.sin(ue),Be=Math.cos(ue),Ue=Math.sin(be),Re=Math.cos(be),Ae=-ie*Re,ye=Be*Re,Ve=Ae*R+Be*ce,P=ye*R+ie*ce,Ee=Ue*R,he=Ae*ce-Be*R,q=ye*ce-ie*R,me=Ue*ce,Ie={x:se*Ve*Wt,y:se*P*Wt,z:se*Ee*Wt},Xe={x:(pe*Ve+Se*he)*go,y:(pe*P+Se*q)*go,z:(pe*Ee+Se*me)*go};return{position:Ie,velocity:Xe}}function tm(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,o=e.xbstar,a=e.xecco,s=e.xargpo,l=e.xinclo,c=e.xmo,h=e.xno,d=e.xnodeo,f,m,g,_,p,u,b,x,E,y,C,A,k,M,w,Y,X,J,D,G,K,$,re,ee,te,U,F,Me,xe,oe,fe,z,Q,_e,Oe,Fe,O,et,ve,de,Ne,We,Le,Pe,ze,Ge,$e,T,v,B,ae,se,ue,be,pe,Se,R=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=o,n.ecco=a,n.argpo=s,n.inclo=l,n.mo=c,n.no=h,n.nodeo=d,n.operationmode=t;var ce=78/Wt+1,ie=42/Wt,Be=ie*ie*ie*ie;n.init="y",n.t=0;var Ue={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},Re=Qp(Ue),Ae=Re.ao,ye=Re.con42,Ve=Re.cosio,P=Re.cosio2,Ee=Re.eccsq,he=Re.omeosq,q=Re.posq,me=Re.rp,Ie=Re.rteosq,Xe=Re.sinio;if(n.no=Re.no,n.con41=Re.con41,n.gsto=Re.gsto,n.a=Math.pow(n.no*jp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,he>=0||n.no>=0){if(n.isimp=0,me<220/Wt+1&&(n.isimp=1),F=ce,K=Be,J=(me-1)*Wt,J<156){F=J-78,J<98&&(F=20);var it=(120-F)/Wt;K=it*it*it*it,F=F/Wt+1}D=1/q,Ge=1/(Ae-F),n.eta=Ae*n.ecco*Ge,A=n.eta*n.eta,C=n.ecco*n.eta,G=Math.abs(1-A),u=K*Math.pow(Ge,4),b=u/Math.pow(G,3.5),_=b*n.no*(Ae*(1+1.5*A+C*(4+A))+.375*qn*Ge/G*n.con41*(8+3*A*(8+A))),n.cc1=n.bstar*_,p=0,n.ecco>1e-4&&(p=-2*u*Ge*jn*n.no*Xe/n.ecco),n.x1mth2=1-P,n.cc4=2*n.no*b*Ae*he*(n.eta*(2+.5*A)+n.ecco*(.5+2*A)-qn*Ge/(Ae*G)*(-3*n.con41*(1-2*C+A*(1.5-.5*C))+.75*n.x1mth2*(2*A-C*(1+A))*Math.cos(2*n.argpo))),n.cc5=2*b*Ae*he*(1+2.75*(A+C)+C*A),x=P*P,Le=1.5*qn*D*n.no,Pe=.5*Le*qn*D,ze=-.46875*Kp*D*D*n.no,n.mdot=n.no+.5*Le*Ie*n.con41+.0625*Pe*Ie*(13-78*P+137*x),n.argpdot=-.5*Le*ye+.0625*Pe*(7-114*P+395*x)+ze*(3-36*P+49*x),T=-Le*Ve,n.nodedot=T+(.5*Pe*(4-19*P)+2*ze*(3-7*P))*Ve,$e=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-qi*u*n.bstar/C),n.nodecf=3.5*he*T*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(Ve+1)>15e-13?n.xlcof=-.25*jn*Xe*(3+5*Ve)/(1+Ve):n.xlcof=-.25*jn*Xe*(3+5*Ve)/R,n.aycof=-.5*jn*Xe;var ct=1+n.eta*Math.cos(n.mo);if(n.delmo=ct*ct*ct,n.sinmao=Math.sin(n.mo),n.x7thm1=7*P-1,2*Dt/n.no>=225){n.method="d",n.isimp=1,Ne=0,w=n.inclo;var Qe={epoch:r,ep:n.ecco,argpp:n.argpo,tc:Ne,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},ge=$p(Qe);n.e3=ge.e3,n.ee2=ge.ee2,n.peo=ge.peo,n.pgho=ge.pgho,n.pho=ge.pho,n.pinco=ge.pinco,n.plo=ge.plo,n.se2=ge.se2,n.se3=ge.se3,n.sgh2=ge.sgh2,n.sgh3=ge.sgh3,n.sgh4=ge.sgh4,n.sh2=ge.sh2,n.sh3=ge.sh3,n.si2=ge.si2,n.si3=ge.si3,n.sl2=ge.sl2,n.sl3=ge.sl3,n.sl4=ge.sl4,m=ge.sinim,f=ge.cosim,E=ge.em,y=ge.emsq,$=ge.s1,re=ge.s2,ee=ge.s3,te=ge.s4,U=ge.s5,Me=ge.ss1,xe=ge.ss2,oe=ge.ss3,fe=ge.ss4,z=ge.ss5,Q=ge.sz1,_e=ge.sz3,Oe=ge.sz11,Fe=ge.sz13,O=ge.sz21,et=ge.sz23,ve=ge.sz31,de=ge.sz33,n.xgh2=ge.xgh2,n.xgh3=ge.xgh3,n.xgh4=ge.xgh4,n.xh2=ge.xh2,n.xh3=ge.xh3,n.xi2=ge.xi2,n.xi3=ge.xi3,n.xl2=ge.xl2,n.xl3=ge.xl3,n.xl4=ge.xl4,n.zmol=ge.zmol,n.zmos=ge.zmos,X=ge.nm,v=ge.z1,B=ge.z3,ae=ge.z11,se=ge.z13,ue=ge.z21,be=ge.z23,pe=ge.z31,Se=ge.z33;var pt={inclo:w,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},Mt=rl(n,pt);n.ecco=Mt.ep,n.inclo=Mt.inclp,n.nodeo=Mt.nodep,n.argpo=Mt.argpp,n.mo=Mt.mp,k=0,M=0,Y=0;var Gt={cosim:f,emsq:y,argpo:n.argpo,s1:$,s2:re,s3:ee,s4:te,s5:U,sinim:m,ss1:Me,ss2:xe,ss3:oe,ss4:fe,ss5:z,sz1:Q,sz3:_e,sz11:Oe,sz13:Fe,sz21:O,sz23:et,sz31:ve,sz33:de,t:n.t,tc:Ne,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:$e,z1:v,z3:B,z11:ae,z13:se,z21:ue,z23:be,z31:pe,z33:Se,ecco:n.ecco,eccsq:Ee,em:E,argpm:k,inclm:w,mm:Y,nm:X,nodem:M,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},ot=Jp(Gt);n.irez=ot.irez,n.atime=ot.atime,n.d2201=ot.d2201,n.d2211=ot.d2211,n.d3210=ot.d3210,n.d3222=ot.d3222,n.d4410=ot.d4410,n.d4422=ot.d4422,n.d5220=ot.d5220,n.d5232=ot.d5232,n.d5421=ot.d5421,n.d5433=ot.d5433,n.dedt=ot.dedt,n.didt=ot.didt,n.dmdt=ot.dmdt,n.dnodt=ot.dnodt,n.domdt=ot.domdt,n.del1=ot.del1,n.del2=ot.del2,n.del3=ot.del3,n.xfact=ot.xfact,n.xlamo=ot.xlamo,n.xli=ot.xli,n.xni=ot.xni}n.isimp!==1&&(g=n.cc1*n.cc1,n.d2=4*Ae*Ge*g,We=n.d2*Ge*n.cc1/3,n.d3=(17*Ae+F)*We,n.d4=.5*We*Ae*Ge*(221*Ae+31*F)*n.cc1,n.t3cof=n.d2+2*g,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*g)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*g*(2*n.d2+g)))}sl(n,0),n.init="n"}function nm(n,e){var t="i",i=1440/(2*Dt),r=0,o={};o.error=0,o.satnum=n.substring(2,7),o.epochyr=parseInt(n.substring(18,20),10),o.epochdays=parseFloat(n.substring(20,32)),o.ndot=parseFloat(n.substring(33,43)),o.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),o.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),o.inclo=parseFloat(e.substring(8,16)),o.nodeo=parseFloat(e.substring(17,25)),o.ecco=parseFloat(".".concat(e.substring(26,33))),o.argpo=parseFloat(e.substring(34,42)),o.mo=parseFloat(e.substring(43,51)),o.no=parseFloat(e.substring(52,63)),o.no/=i,o.inclo*=Bi,o.nodeo*=Bi,o.argpo*=Bi,o.mo*=Bi,o.epochyr<57?r=o.epochyr+2e3:r=o.epochyr+1900;var a=Zp(r,o.epochdays),s=a.mon,l=a.day,c=a.hr,h=a.minute,d=a.sec;return o.jdsatepoch=ko(r,s,l,c,h,d),tm(o,{opsmode:t,satn:o.satnum,epoch:o.jdsatepoch-24332815e-1,xbstar:o.bstar,xecco:o.ecco,xargpo:o.argpo,xinclo:o.inclo,xmo:o.mo,xno:o.no,xnodeo:o.nodeo}),o}function im(n){return rm(n)||om(n)||sm(n)||am()}function rm(n){if(Array.isArray(n))return Do(n)}function om(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function sm(n,e){if(n){if(typeof n=="string")return Do(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Do(n,e)}}function Do(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function am(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),o=ko.apply(void 0,im(r)),a=(o-i.jdsatepoch)*Xp;return sl(i,a)}function al(n){return n*Wp}function cm(n){if(n<-Dt/2||n>Dt/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return al(n)}function hm(n){if(n<-Dt||n>Dt)throw new RangeError("Longitude radians must be in range [-pi; pi].");return al(n)}function um(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),o=(t-i)/t,a=2*o-o*o,s=Math.atan2(n.y,n.x)-e;s<-Dt;)s+=_t;for(;s>Dt;)s-=_t;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-a*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*a*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:s,latitude:h,height:f}}var dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ll={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(dm,function(){var t=function(){function i(m){return a.appendChild(m.dom),m}function r(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";o=m}var o=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),r(++o%a.children.length)},!1);var s=(performance||Date).now(),l=s,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-s,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){s=this.end()},domElement:a,setMode:r}};return t.Panel=function(i,r,o){var a=1/0,s=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,f=3*c,m=2*c,g=3*c,_=15*c,p=74*c,u=30*c,b=document.createElement("canvas");b.width=h,b.height=d,b.style.cssText="width:80px;height:48px";var x=b.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=o,x.fillRect(0,0,h,d),x.fillStyle=r,x.fillText(i,f,m),x.fillRect(g,_,p,u),x.fillStyle=o,x.globalAlpha=.9,x.fillRect(g,_,p,u),{dom:b,update:function(E,y){a=Math.min(a,E),s=Math.max(s,E),x.fillStyle=o,x.globalAlpha=1,x.fillRect(0,0,h,_),x.fillStyle=r,x.fillText(l(E)+" "+i+" ("+l(a)+"-"+l(s)+")",f,m),x.drawImage(b,g+c,_,p-c,u,g,_,p-c,u),x.fillRect(g+p-c,_,c,u),x.fillStyle=o,x.globalAlpha=.9,x.fillRect(g+p-c,_,c,l((1-E/y)*u))}}},t})})(ll);var pm=ll.exports;const mm=fm(pm),cl=Math.sqrt(3),gm=.5*(cl-1),Oi=(3-cl)/6,ya=n=>Math.floor(n)|0,Ta=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function _m(n=Math.random){const e=vm(n),t=new Float64Array(e).map(r=>Ta[r%12*2]),i=new Float64Array(e).map(r=>Ta[r%12*2+1]);return function(o,a){let s=0,l=0,c=0;const h=(o+a)*gm,d=ya(o+h),f=ya(a+h),m=(d+f)*Oi,g=d-m,_=f-m,p=o-g,u=a-_;let b,x;p>u?(b=1,x=0):(b=0,x=1);const E=p-b+Oi,y=u-x+Oi,C=p-1+2*Oi,A=u-1+2*Oi,k=d&255,M=f&255;let w=.5-p*p-u*u;if(w>=0){const J=k+e[M],D=t[J],G=i[J];w*=w,s=w*w*(D*p+G*u)}let Y=.5-E*E-y*y;if(Y>=0){const J=k+b+e[M+x],D=t[J],G=i[J];Y*=Y,l=Y*Y*(D*E+G*y)}let X=.5-C*C-A*A;if(X>=0){const J=k+1+e[M+1],D=t[J],G=i[J];X*=X,c=X*X*(D*C+G*A)}return 70*(s+l+c)}}function vm(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),o=t[i];t[i]=t[r],t[r]=o}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const _o={type:"change"},vo={type:"start"},xo={type:"end"};class xm extends yn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Zt.ROTATE,MIDDLE:Zt.DOLLY,RIGHT:Zt.PAN},this.target=new I;const o=1e-6,a=new I;let s=1,l=r.NONE,c=r.NONE,h=0,d=0,f=0;const m=new I,g=new Ye,_=new Ye,p=new I,u=new Ye,b=new Ye,x=new Ye,E=new Ye,y=[],C={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const z=i.domElement.getBoundingClientRect(),Q=i.domElement.ownerDocument.documentElement;i.screen.left=z.left+window.pageXOffset-Q.clientLeft,i.screen.top=z.top+window.pageYOffset-Q.clientTop,i.screen.width=z.width,i.screen.height=z.height};const A=function(){const z=new Ye;return function(_e,Oe){return z.set((_e-i.screen.left)/i.screen.width,(Oe-i.screen.top)/i.screen.height),z}}(),k=function(){const z=new Ye;return function(_e,Oe){return z.set((_e-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Oe))/i.screen.width),z}}();this.rotateCamera=function(){const z=new I,Q=new un,_e=new I,Oe=new I,Fe=new I,O=new I;return function(){O.set(_.x-g.x,_.y-g.y,0);let ve=O.length();ve?(m.copy(i.object.position).sub(i.target),_e.copy(m).normalize(),Oe.copy(i.object.up).normalize(),Fe.crossVectors(Oe,_e).normalize(),Oe.setLength(_.y-g.y),Fe.setLength(_.x-g.x),O.copy(Oe.add(Fe)),z.crossVectors(O,m).normalize(),ve*=i.rotateSpeed,Q.setFromAxisAngle(z,ve),m.applyQuaternion(Q),i.object.up.applyQuaternion(Q),p.copy(z),f=ve):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),m.copy(i.object.position).sub(i.target),Q.setFromAxisAngle(p,f),m.applyQuaternion(Q),i.object.up.applyQuaternion(Q)),g.copy(_)}}(),this.zoomCamera=function(){let z;l===r.TOUCH_ZOOM_PAN?(z=h/d,h=d,i.object.isPerspectiveCamera?m.multiplyScalar(z):i.object.isOrthographicCamera?(i.object.zoom=vn.clamp(i.object.zoom/z,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(z=1+(b.y-u.y)*i.zoomSpeed,z!==1&&z>0&&(i.object.isPerspectiveCamera?m.multiplyScalar(z):i.object.isOrthographicCamera?(i.object.zoom=vn.clamp(i.object.zoom/z,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?u.copy(b):u.y+=(b.y-u.y)*this.dynamicDampingFactor)},this.panCamera=function(){const z=new Ye,Q=new I,_e=new I;return function(){if(z.copy(E).sub(x),z.lengthSq()){if(i.object.isOrthographicCamera){const Fe=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,O=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;z.x*=Fe,z.y*=O}z.multiplyScalar(m.length()*i.panSpeed),_e.copy(m).cross(i.object.up).setLength(z.x),_e.add(Q.copy(i.object.up).setLength(z.y)),i.object.position.add(_e),i.target.add(_e),i.staticMoving?x.copy(E):x.add(z.subVectors(E,x).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(m.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,m.setLength(i.maxDistance)),u.copy(b)),m.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,m.setLength(i.minDistance)),u.copy(b)))},this.update=function(){m.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,m),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),a.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(_o),a.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(a.distanceToSquared(i.object.position)>o||s!==i.object.zoom)&&(i.dispatchEvent(_o),a.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),m.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(_o),a.copy(i.object.position),s=i.object.zoom};function M(z){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(z.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",Y)),Me(z),z.pointerType==="touch"?ee(z):G(z))}function w(z){i.enabled!==!1&&(z.pointerType==="touch"?te(z):K(z))}function Y(z){i.enabled!==!1&&(z.pointerType==="touch"?U(z):$(),xe(z),y.length===0&&(i.domElement.releasePointerCapture(z.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",Y)))}function X(z){xe(z)}function J(z){i.enabled!==!1&&(window.removeEventListener("keydown",J),c===r.NONE&&(z.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:z.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:z.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function D(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",J))}function G(z){if(l===r.NONE)switch(z.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(_.copy(k(z.pageX,z.pageY)),g.copy(_)):Q===r.ZOOM&&!i.noZoom?(u.copy(A(z.pageX,z.pageY)),b.copy(u)):Q===r.PAN&&!i.noPan&&(x.copy(A(z.pageX,z.pageY)),E.copy(x)),i.dispatchEvent(vo)}function K(z){const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(g.copy(_),_.copy(k(z.pageX,z.pageY))):Q===r.ZOOM&&!i.noZoom?b.copy(A(z.pageX,z.pageY)):Q===r.PAN&&!i.noPan&&E.copy(A(z.pageX,z.pageY))}function $(){l=r.NONE,i.dispatchEvent(xo)}function re(z){if(i.enabled!==!1&&i.noZoom!==!0){switch(z.preventDefault(),z.deltaMode){case 2:u.y-=z.deltaY*.025;break;case 1:u.y-=z.deltaY*.01;break;default:u.y-=z.deltaY*25e-5;break}i.dispatchEvent(vo),i.dispatchEvent(xo)}}function ee(z){switch(oe(z),y.length){case 1:l=r.TOUCH_ROTATE,_.copy(k(y[0].pageX,y[0].pageY)),g.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const Q=y[0].pageX-y[1].pageX,_e=y[0].pageY-y[1].pageY;d=h=Math.sqrt(Q*Q+_e*_e);const Oe=(y[0].pageX+y[1].pageX)/2,Fe=(y[0].pageY+y[1].pageY)/2;x.copy(A(Oe,Fe)),E.copy(x);break}i.dispatchEvent(vo)}function te(z){switch(oe(z),y.length){case 1:g.copy(_),_.copy(k(z.pageX,z.pageY));break;default:const Q=fe(z),_e=z.pageX-Q.x,Oe=z.pageY-Q.y;d=Math.sqrt(_e*_e+Oe*Oe);const Fe=(z.pageX+Q.x)/2,O=(z.pageY+Q.y)/2;E.copy(A(Fe,O));break}}function U(z){switch(y.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(k(z.pageX,z.pageY)),g.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Q=0;Q<y.length;Q++)if(y[Q].pointerId!==z.pointerId){const _e=C[y[Q].pointerId];_.copy(k(_e.x,_e.y)),g.copy(_);break}break}i.dispatchEvent(xo)}function F(z){i.enabled!==!1&&z.preventDefault()}function Me(z){y.push(z)}function xe(z){delete C[z.pointerId];for(let Q=0;Q<y.length;Q++)if(y[Q].pointerId==z.pointerId){y.splice(Q,1);return}}function oe(z){let Q=C[z.pointerId];Q===void 0&&(Q=new Ye,C[z.pointerId]=Q),Q.set(z.pageX,z.pageY)}function fe(z){const Q=z.pointerId===y[0].pointerId?y[1]:y[0];return C[Q.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",F),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",Y),window.removeEventListener("keydown",J),window.removeEventListener("keyup",D)},this.domElement.addEventListener("contextmenu",F),this.domElement.addEventListener("pointerdown",M),this.domElement.addEventListener("pointercancel",X),this.domElement.addEventListener("wheel",re,{passive:!1}),window.addEventListener("keydown",J),window.addEventListener("keyup",D),this.handleResize(),this.update()}}const ba=new I,Mo=new Po,So=new I;class Mm{constructor(e,t){this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this.autoSpeedFactor=0,this.pointerX=0,this.pointerY=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.viewHalfX=0,this.viewHalfY=0;let i=0,r=0;this.handleResize=function(){this.domElement===document?(this.viewHalfX=window.innerWidth/2,this.viewHalfY=window.innerHeight/2):(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)},this.onPointerDown=function(d){if(this.domElement!==document&&this.domElement.focus(),this.activeLook)switch(d.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0},this.onPointerUp=function(d){if(this.activeLook)switch(d.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1},this.onPointerMove=function(d){this.domElement===document?(this.pointerX=d.pageX-this.viewHalfX,this.pointerY=d.pageY-this.viewHalfY):(this.pointerX=d.pageX-this.domElement.offsetLeft-this.viewHalfX,this.pointerY=d.pageY-this.domElement.offsetTop-this.viewHalfY)},this.onKeyDown=function(d){switch(d.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}},this.onKeyUp=function(d){switch(d.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}},this.lookAt=function(d,f,m){return d.isVector3?So.copy(d):So.set(d,f,m),this.object.lookAt(So),h(this),this},this.update=function(){const d=new I;return function(m){if(this.enabled===!1)return;if(this.heightSpeed){const y=vn.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=m*(y*this.heightCoef)}else this.autoSpeedFactor=0;const g=m*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(g+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(g),this.moveLeft&&this.object.translateX(-g),this.moveRight&&this.object.translateX(g),this.moveUp&&this.object.translateY(g),this.moveDown&&this.object.translateY(-g);let _=m*this.lookSpeed;this.activeLook||(_=0);let p=1;this.constrainVertical&&(p=Math.PI/(this.verticalMax-this.verticalMin)),r-=this.pointerX*_,this.lookVertical&&(i-=this.pointerY*_*p),i=Math.max(-85,Math.min(85,i));let u=vn.degToRad(90-i);const b=vn.degToRad(r);this.constrainVertical&&(u=vn.mapLinear(u,0,Math.PI,this.verticalMin,this.verticalMax));const x=this.object.position;d.setFromSphericalCoords(1,u,b).add(x),this.object.lookAt(d)}}(),this.dispose=function(){this.domElement.removeEventListener("contextmenu",Aa),this.domElement.removeEventListener("pointerdown",a),this.domElement.removeEventListener("pointermove",o),this.domElement.removeEventListener("pointerup",s),window.removeEventListener("keydown",l),window.removeEventListener("keyup",c)};const o=this.onPointerMove.bind(this),a=this.onPointerDown.bind(this),s=this.onPointerUp.bind(this),l=this.onKeyDown.bind(this),c=this.onKeyUp.bind(this);this.domElement.addEventListener("contextmenu",Aa),this.domElement.addEventListener("pointerdown",a),this.domElement.addEventListener("pointermove",o),this.domElement.addEventListener("pointerup",s),window.addEventListener("keydown",l),window.addEventListener("keyup",c);function h(d){const f=d.object.quaternion;ba.set(0,0,-1).applyQuaternion(f),Mo.setFromVector3(ba),i=90-vn.radToDeg(Mo.phi),r=vn.radToDeg(Mo.theta)}this.handleResize(),h(this)}}function Aa(n){n.preventDefault()}class Sm extends il{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Zt.PAN,MIDDLE:Zt.DOLLY,RIGHT:Zt.ROTATE},this.touches={ONE:Rn.PAN,TWO:Rn.DOLLY_ROTATE}}}const Em={type:"change"};class ym extends yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,o=new un,a=new I;this.tmpQuaternion=new un,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new I(0,0,0),this.rotationVector=new I(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const _=this.getContainerDimensions(),p=_.size[0]/2,u=_.size[1]/2;this.moveState.yawLeft=-(g.pageX-_.offset[0]-p)/p,this.moveState.pitchDown=(g.pageY-_.offset[1]-u)/u,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const _=g*i.movementSpeed,p=g*i.rollSpeed;i.object.translateX(i.moveVector.x*_),i.object.translateY(i.moveVector.y*_),i.object.translateZ(i.moveVector.z*_),i.tmpQuaternion.set(i.rotationVector.x*p,i.rotationVector.y*p,i.rotationVector.z*p,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(a.distanceToSquared(i.object.position)>r||8*(1-o.dot(i.object.quaternion))>r)&&(i.dispatchEvent(Em),o.copy(i.object.quaternion),a.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",s),this.domElement.removeEventListener("pointerdown",c),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",h),this.domElement.removeEventListener("pointercancel",d),window.removeEventListener("keydown",f),window.removeEventListener("keyup",m)};const s=this.contextMenu.bind(this),l=this.pointermove.bind(this),c=this.pointerdown.bind(this),h=this.pointerup.bind(this),d=this.pointercancel.bind(this),f=this.keydown.bind(this),m=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",s),this.domElement.addEventListener("pointerdown",c),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",h),this.domElement.addEventListener("pointercancel",d),window.addEventListener("keydown",f),window.addEventListener("keyup",m),this.updateMovementVector(),this.updateRotationVector()}}function Tm(n,e){let t,i,r,o,a,s,l,c=[],h,d,f,m,g,_="smallScale",p,u,b=!0,x=!1,E,y="group_major",C=null;const A=66,k=2;let M,w;const Y=6371,X=1,J=X/Y,D=2*Math.PI/86400,G=23.44*(Math.PI/180),K=27.32*24*3600,$=2*Math.PI/K;let re=1,ee;const te=new mm;te.showPanel(0),te.dom.id="statistics",window.addEventListener("keydown",L=>{(L.key==="R"||L.key==="r")&&(b=!b)}),window.addEventListener("keydown",L=>{(L.key==="W"||L.key==="w")&&(x=!x,o.traverse(function(N){N.isMesh&&(N.material.wireframe=x,N.material.needsUpdate=!0)}))});function U(){h=new il(i,r.domElement),h.enableDamping=!0,h.enablePan=!1,h.dampingFactor=.25,h.rotateSpeed=.25,h.minDistance=5,h.maxDistance=100,m=new xm(i,r.domElement),m.rotateSpeed=1.25,m.panSpeed=.2,m.noZoom=!1,m.noPan=!1,m.staticMoving=!1,m.dynamicDampingFactor=.33,d=new Sm(i,r.domElement),f=new Mm(i,r.domElement),f.lookSpeed=.1,f.movementSpeed=5,f.noFly=!0,f.lookVertical=!0,g=new ym(i,r.domElement),F(h)}function F(L){h.enabled=!1,d.enabled=!1,f.enabled=!1,g.enabled=!1,m.enabled=!1,L&&(L.enabled=!0)}async function Me(){t=new Ip,i=new Jt(5,window.innerWidth/window.innerHeight,.1,3e5),i.position.set(0,0,800),i.position.z=66,r=new nl({alpha:!1}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(12632256,0),r.shadowMap.enabled=!0,r.shadowMap.type=Ca,document.getElementById(n).appendChild(r.domElement),U(),he(),await Xe(),xe(),z(),fe(q,J),o=new Xn,o.rotation.z=G,t.add(o),a=new Xn,t.add(a),S(),et(),Ne(),H(),Ze(),window.addEventListener("resize",st,!1),st(),await T("config/classification_config.json"),console.log("Parsed Classification Schemes:",JSON.stringify(E,null,2)),se(y),Gt()}function xe(){const L=new Gp(4210752,1);t.add(L),M=new Hp(5987163,100),M.castShadow=!0,t.add(M);const N=new Op(16777147,526368,5.5);t.add(N);const Z=X*109*re,ne=new Wn(Z,24,24),le=new zo({color:16776960,emissive:16753920,opacity:.25,transparent:!0,wireframe:!0,alphaHash:!0});s=new Xt(ne,le),t.add(s);const Te=new Xn;t.add(Te),Te.add(s),Te.add(M)}function oe(L){return L.getTime()/864e5+24405875e-1}function fe(L,N){const ne=(oe(L)-2451545)/36525,le=280.46646+ne*(36000.76983+ne*3032e-7),Te=357.52911+ne*(35999.05029-1537e-7*ne),Ce=(1.914602-ne*(.004817+14e-6*ne))*Math.sin(Te*(Math.PI/180))+(.019993-101e-6*ne)*Math.sin(2*Te*(Math.PI/180))+289e-6*Math.sin(3*Te*(Math.PI/180)),ke=le+Ce,ht=23.44*(Math.PI/180),ut=Math.cos(ke*(Math.PI/180)),bt=Math.cos(ht)*Math.sin(ke*(Math.PI/180)),at=Math.sin(ht)*Math.sin(ke*(Math.PI/180)),gt=1,Yt=new I(ut*gt,at*gt,-bt*gt).multiplyScalar(N*1496e5);s.position.copy(Yt),M.position.copy(Yt),M.target.position.set(0,0,0),M.target.updateMatrixWorld()}function z(){const L=1496e5*J*re;s.position.set(L,0,0),M.position.copy(s.position)}const Q=new _m;let _e=0;const Oe=1e-5,Fe=.002;function O(){_e+=Oe;const L=Q(_e,0)*Fe,N=Q(0,_e)*Fe,Z=Q(_e,_e)*Fe;s.rotation.x+=L,s.rotation.y+=N,s.rotation.z+=Z}function et(){const L=X*.273,N=new fo({color:9079434,roughness:1,metalness:1.25}),Z=new Wn(L,32,32);ee=new Xt(Z,N),a.add(ee)}function ve(){if(!ee)return;const N=384400*J*re,ne=q.getTime()/1e3*$%(2*Math.PI),le=.0549,Te=N*(Math.cos(ne)-le),Ce=N*Math.sin(ne)*Math.sqrt(1-le**2);let ke=new I(Te,0,Ce);const ht=5.145*(Math.PI/180);ke.applyAxisAngle(new I(1,0,0),ht),ke.applyAxisAngle(new I(0,0,1),G),ee.position.copy(ke)}let de;function Ne(){const L=["100 Brightest","Space Stations","Debris","Navigation","Communications","Scientific"];Promise.all(L.map(N=>We(N))).then(N=>{const Z=N.flat();Pe(Z),console.log("Successfully loaded and processed all satellite data."),e(),se(y)}).catch(N=>{console.error("Failed to load some satellite data:",N),console.log("Attempting to load data from local cache..."),fetch("cache/active.json").then(Z=>{if(!Z.ok)throw new Error("Local cache fetch failed");return Z.json()}).then(Pe).catch(Z=>{console.error("Failed to load satellite data from both server and local cache:",Z),e()})})}async function We(L){const N=`https://orbital-bbfd.onrender.com/satellites/${L}`;try{const Z=await fetch(N);if(!Z.ok)throw new Error(`Failed to load data for ${L}`);const ne=await Z.json(),le=Le(L,ne);return console.log(`Loaded and flattened data for ${L}`),le}catch(Z){return console.warn(`Error loading data for ${L}:`,Z),[]}}function Le(L,N){const Z=[];return N.data&&typeof N.data=="object"?Object.entries(N.data).forEach(([ne,le])=>{Array.isArray(le)?le.forEach(Te=>{Te.tleLine1&&Te.tleLine2?Z.push({name:Te.name||"Unknown",tleLine1:Te.tleLine1,tleLine2:Te.tleLine2,country:Te.country||"Unknown",orbitClass:Te.orbitClass||"Unknown",group_major:L||"Unknown",group_minor:ne||"Unknown"}):console.warn("Satellite missing TLE data:",Te)}):console.warn(`Expected an array of satellites under group_minor: ${ne}, but got:`,le)}):console.warn(`Expected a 'data' object for group_major: ${L}, but got:`,N.data),Z}function Pe(L){if(!Array.isArray(L)||L.length===0){console.error("No valid satellite data to process.");return}const N={group_major:new Set,group_minor:new Set,orbitClass:new Set,country:new Set};L.forEach(Z=>{Z.metadata={satrec:ze(Z.tleLine1,Z.tleLine2),orbitClass:Z.orbitClass.toLowerCase(),country:Z.country.toLowerCase(),group_major:Z.group_major.toLowerCase(),group_minor:Z.group_minor.toLowerCase()},N.group_major.add(Z.metadata.group_major),N.group_minor.add(Z.metadata.group_minor),N.orbitClass.add(Z.metadata.orbitClass),N.country.add(Z.metadata.country)}),$e(N),ce(L)}function ze(L,N){try{return nm(L.trim(),N.trim())}catch(Z){return console.warn("Failed to create Satrec from TLE:",{tleLine1:L,tleLine2:N},Z),null}}function Ge(L){const N={};for(const[Z,ne]of Object.entries(L))N[Z]={colors:Object.fromEntries(Object.entries(ne.colors).map(([le,Te])=>[le.trim().toLowerCase(),parseInt(Te,10)||16711680]))},console.log("sccccc: ",N[Z]);return N}function $e(L){for(const[N,{colors:Z}]of Object.entries(E)){const ne=L[N];if(ne)for(const le of Object.keys(Z))ne.has(le)||delete Z[le]}console.log("Filtered Classification Schemes:",E)}async function T(L){try{const N=await fetch(L);if(!N.ok)throw new Error(`Failed to load classification config from ${L}: ${N.statusText}`);const Z=await N.json();E=Ge(Z),console.log("Classification schemes initialized:",E)}catch(N){console.error("Error initializing classification schemes:",N),E={}}}function v(L,N){const{colors:Z}=E[L],ne=(N[L]||"unknown").toString().trim().toLowerCase(),le=Z[ne];return le?(console.log(`Scheme: ${L}, Category: ${ne}, Color: ${le}`),new nt(le)):(console.warn(`No color found for category '${ne}' in scheme '${L}'. Defaulting to red.`),new nt(16711680))}function B(L,N,Z){if(!L||!L.count){console.error("InstancedMesh is not properly initialized.");return}const ne=new vt,le=new Float32Array(L.count*3);Z.forEach((Te,Ce)=>{if(Ce>=L.count){console.warn(`Instance index ${Ce} exceeds InstancedMesh count (${L.count}).`);return}if(!Te.metadata){console.warn(`Satellite at index ${Ce} is missing metadata. Skipping.`);return}const ke=v(y,Te.metadata),ht=new nt(ke);try{L.getMatrixAt(Ce,ne.matrix)}catch(ut){console.error(`Error accessing matrix for instance ${Ce}:`,ut);return}ne.updateMatrix(),Te.originalMatrix=ne.matrix.clone(),L.setMatrixAt(Ce,ne.matrix),le.set(ht.toArray(),Ce*3)}),L.instanceColor=new Rr(le,3),L.instanceMatrix.needsUpdate=!0}document.getElementById("orbit-class").addEventListener("click",()=>{ae("orbitClass")}),document.getElementById("group-major").addEventListener("click",()=>{ae("group_major")}),document.getElementById("group-minor").addEventListener("click",()=>{ae("group_minor")}),document.getElementById("owner-country").addEventListener("click",()=>{ae("country")});function ae(L){if(!de||!de.count){console.error("Satellite mesh is not initialized or empty. Cannot switch classification.");return}y&&Se(),y=L,B(de,y,c),Se(),R(de),ye(de),se(y)}function se(L){const N=document.getElementById("legend-container");N.innerHTML="";const Z=E[L];if(!Z){console.warn(`Scheme '${L}' not found.`),N.innerHTML="<p>No legend available for the selected scheme.</p>";return}const{colors:ne}=Z;console.log(`Legend Colors for Scheme '${L}':`,ne),Object.keys(ne).sort().forEach(Te=>{const Ce=ne[Te],ke=document.createElement("div");ke.className="legend-item";const ht=document.createElement("div");ht.className="legend-color",ht.style.backgroundColor=`#${parseInt(Ce).toString(16).padStart(6,"0")}`;const ut=document.createElement("span");ut.textContent=Te,ke.addEventListener("click",()=>{console.log(`Clicked on category: ${Te}`),ue(L,Te)}),ke.appendChild(ht),ke.appendChild(ut),N.appendChild(ke)})}function ue(L,N){C===N?(C=null,Se()):(C=N,pe(L,N)),be(),Ee()}function be(){const L=new vt;de.userData.forEach((N,Z)=>{!N||!N.metadata||(N.visible?(de.getMatrixAt(Z,L.matrix),de.setMatrixAt(Z,L.matrix)):de.setMatrixAt(Z,new dt))}),de.instanceMatrix.needsUpdate=!0}function pe(L,N){const{colors:Z}=E[L],ne=N.trim().toLowerCase();if(!Z[ne]){console.warn(`Category '${ne}' not found in scheme '${L}'.`);return}de.userData.forEach((le,Te)=>{const Ce=(le.metadata[L]||"unknown").toString().trim().toLowerCase();console.log(`Satellite ${Te}: Class (${L}): '${Ce}', Filter Visible: ${Ce===ne}`),le.visible=Ce===ne}),be()}function Se(L){de.userData.forEach(N=>{N&&(N.visible=!0)}),be()}function R(L){const N=L.instanceColor.array;L.userData.forEach((Z,ne)=>{const le=new nt(v(y,Z.metadata));N.set(le.toArray(),ne*3)}),L.instanceColor.needsUpdate=!0}function ce(L){console.log("Satellite count:",L.length);const N=new fo({metalness:.3,roughness:.2,transparent:!1,wireframe:!0});de=Ae(L,N,_==="smallScale"),de&&de.count>0?(console.log("Consolidated satellite mesh created and added to the scene."),o.add(de)):console.error("Failed to create satellite mesh or no instances were added.")}function ie(L,N){const Z=lm(L,q);if(!Z.position)return null;const ne=um(Z.position,N),le=ne.height*J*re,Te=cm(ne.latitude),Ce=hm(ne.longitude);return He(Te,Ce,X+le)}const Be=new Ur,Ue=new dt;function Re(L){i.updateMatrixWorld();const N=.5,Z=i.projectionMatrix.clone();if(Z.elements[0]*=N,Z.elements[5]*=N,Ue.multiplyMatrices(Z,i.matrixWorldInverse),Be.setFromProjectionMatrix(Ue),!Be.containsPoint(L))return!1;let ne=new I(0,0,0);const le=L.clone().sub(ne).normalize(),Te=i.position.clone().sub(ne).normalize();return!(le.dot(Te)<0)}function Ae(L,N,Z=!1){console.log("Creating instanced mesh. Satellite count:",L.length);const ne=L.length;if(ne===0)return console.error("No satellites to create instanced mesh."),null;const le=Z?new Wn(.0035,2,3):new Wn(.004,2,3),Te=new Fp(le,N,ne),Ce=new Float32Array(ne*3),ke=new vt;return Te.userData=[],L.forEach((ht,ut)=>{try{ke.position.set(0,0,0),ke.updateMatrix(),Te.setMatrixAt(ut,ke.matrix);const bt=new nt(v(y,ht.metadata));Ce.set(bt.toArray(),ut*3),Te.userData[ut]={metadata:ht.metadata,visible:!0}}catch(bt){console.error(`Error initializing satellite ${ht.name}:`,bt),Te.userData[ut]=null}}),Te.instanceColor=new Rr(Ce,3),Te.instanceMatrix.needsUpdate=!0,Te.instanceColor.needsUpdate=!0,Te}function ye(L){const N=ol(q),Z=new vt;let ne=new I(0,0,0);for(let le=0;le<L.count;le++){const{metadata:Te,visible:Ce}=L.userData[le];if(!Te)continue;const ke=ie(Te.satrec,N);ke&&(Z.position.copy(ke),Z.updateMatrix(),Ce?L.setMatrixAt(le,Z.matrix):L.setMatrixAt(le,new dt),_!=="smallScale"&&P(le,ke,ne,Ce))}L.instanceMatrix.needsUpdate=!0}const Ve=new Map;function P(L,N,Z,ne){if(!(ne&&Re(N))){if(Ve.has(L)){const ke=Ve.get(L);o.remove(ke),ke.geometry.dispose(),ke.material.dispose(),Ve.delete(L)}return}if(!Ve.has(L)){const ke=de.instanceColor.array,ht=new nt(ke[L*3],ke[L*3+1],ke[L*3+2]),ut=new ln,bt=new Float32Array(6);ut.setAttribute("position",new jt(bt,3));const at=new Sr({color:ht,transparent:!1,alphaHash:!0}),gt=new Fi(ut,at);o.add(gt),Ve.set(L,gt)}const Te=Ve.get(L),Ce=Te.geometry.attributes.position.array;Ce[0]=Z.x,Ce[1]=Z.y,Ce[2]=Z.z,Ce[3]=N.x,Ce[4]=N.y,Ce[5]=N.z,Te.geometry.attributes.position.needsUpdate=!0}function Ee(){Ve.forEach((L,N)=>{const{metadata:Z,visible:ne}=de.userData[N];if(!Z)return;if(!(ne&&Re(de.userData[N].position))){L.visible&&(L.visible=!1);return}const Te=de.instanceColor.array,Ce=new nt(Te[N*3],Te[N*3+1],Te[N*3+2]);L.material.color=Ce,L.material.needsUpdate=!0,L.visible=!0})}function he(){const L=window.innerWidth<=768;h.enabled?(h.minDistance=L?50:5,h.maxDistance=L?500:100):d.enabled?(d.minDistance=L?20:10,d.maxDistance=L?150:50):d.enabled?(m.minDistance=L?20:5,m.maxDistance=L?100:50):f.enabled&&(f.movementSpeed=L?2:5),i.position.z=L?A*k:A}let q;const me=1e3/20;let Ie=1e3;function Xe(){return fetch("https://orbital-bbfd.onrender.com/timestamps").then(L=>{if(!L.ok)throw new Error("Failed to fetch timestamps from server");return L.json()}).then(L=>{const N=Math.max(...Object.values(L).filter(ne=>ne>0)),Z=L.PAYLOAD||null;if(!N&&!Z)throw new Error("No valid timestamps found in server response");q=new Date(N||Z),document.getElementById("simulation-time").textContent=q.toUTCString().replace("GMT","UTC")}).catch(L=>(console.error("Error loading timestamps from server, attempting local cache:",L),fetch("cache/timestamps.json").then(N=>{if(!N.ok)throw new Error("Failed to fetch timestamps from local cache");return N.json()}).then(N=>{const Z=Math.max(...Object.values(N).filter(le=>le>0)),ne=N.PAYLOAD||null;if(!Z&&!ne)throw new Error("No valid timestamps found in local cache");q=new Date(Z||ne),document.getElementById("simulation-time").textContent=q.toUTCString().replace("GMT","UTC")}).catch(N=>{console.error("Error loading timestamps from local cache, using hardcoded fallback:",N),q=new Date("2024-11-01T00:00:00Z"),document.getElementById("simulation-time").textContent=q.toUTCString().replace("GMT","UTC")})))}function it(){q=new Date(q.getTime()+me*Ie);const L=q.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=L,fe(q,J)}function ct(){if(b){const N=q.getTime()/1e3%86400*D%(2*Math.PI);o.rotation.set(0,0,0),o.rotateZ(G),o.rotateY(N)}}let Qe=new kp,ge=0,Mt=1/20;function Gt(){if(ge+=Qe.getDelta(),ge>Mt){if(te.begin(),l=requestAnimationFrame(Gt),it(),ct(),Ft(),de&&ye(de),ve(),O(),z(),fe(q,J),_==="fixed"){const{lat:L,lon:N}=chapterConfig.fixed.coordinates[ot];(L!==p||N!==u)&&(mt(L,N),p=L,u=N)}h.enabled&&h.update(),f.enabled&&f.update(Qe.getDelta()),m.enabled&&m.update(),r.render(t,i),te.end(),ge=ge%Mt}requestAnimationFrame(Gt)}let ot="newYork";const Ut={smallScale:{activate:()=>{F(h),h.enablePan=!1,i.lookAt(new I(0,0,0)),i.updateProjectionMatrix(),h.target.set(0,0,0),h.update(),Tt("smallScale")}},largeScale:{activate:()=>{F(h),h.enablePan=!0,h.target.set(0,1,0);const L=i.position.distanceTo(h.target);h.minDistance=L,h.update(),Tt("largeScale")}},fixed:{cities:{newYork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},tokyo:{lat:35.6895,lon:139.6917}},activate:L=>{const{lat:N,lon:Z}=Ut.fixed.cities[L];mt(N,Z),F(f),Tt("fixed")}}};let It={position:new I,zoom:1};function cn(){Ve.forEach((L,N)=>{o.remove(L),L.geometry.dispose(),L.material.dispose()}),Ve.clear()}function Nt(L,N){_!==L&&(It.position.copy(i.position),It.zoom=i.zoom,L==="fixed"&&Ut.fixed.activate(N),L==="smallScale"?(cn(),Ut[L].activate()):L==="largeScale"&&(Ut[L].activate(),i.position.copy(It.position),i.zoom=It.zoom,i.updateProjectionMatrix()),_=L)}function Ft(){const L=i.position.length(),N=X*8;L<N&&_!=="largeScale"?Nt("largeScale"):L>=N&&_!=="smallScale"&&Nt("smallScale")}function mt(L,N){const ne=He(L,N,X);i.position.copy(ne),i.lookAt(new I(0,0,0)),i.updateProjectionMatrix()}function Tt(L){var Z;(Z=Ut[L])!=null&&Z.controls}function S(){const L=new Wn(X,64,64),N=new fo({color:0,opacity:1,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:x});w=new Xt(L,N),w.castShadow=!0,w.receiveShadow=!0,o.add(w)}return Me(),{dispose(){window.removeEventListener("resize",st),cancelAnimationFrame(l);const L=document.getElementById(n);L&&r.domElement&&L.removeChild(r.domElement)}};async function H(){console.log("Attempting to load data...");const L=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_graticules_5.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson","data/ne_50m_ocean.geojson"];try{const N=L.map(Z=>fetch(Z).then(ne=>{if(!ne.ok)throw new Error(`Network response was not ok for ${Z}`);return ne.json()}).then(ne=>(V(Z,ne),"loaded")).catch(ne=>{throw console.error(`Error loading ${Z}:`,ne),ne}));await Promise.all(N),console.log("All GeoJSON data loaded successfully.")}catch(N){console.error("Failed to load some GeoJSON data:",N)}}function V(L,N){switch(L){case"data/ne_110m_graticules_5.geojson":console.log("Loaded graticules:",N),W(N);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",N),j(N);break;case"data/ne_110m_land.geojson":break;case"data/ne_50m_ocean.geojson":console.log("loaded ocean:",N);break;default:console.warn("Unrecognized GeoJSON URL:",L);break}}function j(L){const N=new Sr({color:16777215,opacity:.75,alphaHash:!0}),Z=1;L.features.forEach(ne=>{const le=ne.geometry.coordinates;if(ne.geometry.type==="LineString"){const Te=we(le,Z),Ce=new Fi(Te,N);o.add(Ce)}else ne.geometry.type==="MultiLineString"&&le.forEach(Te=>{const Ce=we(Te,Z),ke=new Fi(Ce,N);o.add(ke)})})}function W(L){const N=new Sr({color:4473924,opacity:.5,alphaHash:!0,visible:!0,transparent:!1}),Z=X;L.features.forEach(ne=>{const le=ne.geometry.coordinates;if(ne.geometry.type==="LineString"){const Te=we(le,Z),Ce=new Fi(Te,N);o.add(Ce)}else ne.geometry.type==="MultiLineString"&&le.forEach(Te=>{const Ce=we(Te,Z),ke=new Fi(Ce,N);o.add(ke)})})}function we(L,N){const Z=new ln,ne=[];L.forEach(([Te,Ce])=>{const ke=He(Ce,Te,N);ne.push(ke.x,ke.y,ke.z)});const le=new Float32Array(ne);return Z.setAttribute("position",new jt(le,3)),Z}function He(L,N,Z){const ne=(90-L)*(Math.PI/180),le=(N+180)*(Math.PI/180),Te=-Z*Math.sin(ne)*Math.cos(le),Ce=Z*Math.sin(ne)*Math.sin(le),ke=Z*Math.cos(ne);return new I(Te,ke,Ce)}function qe(L,N){let Z;return function(...ne){clearTimeout(Z),Z=setTimeout(()=>L.apply(this,ne),N)}}function je(L,N=2e4){const le=Math.log(1),Ce=(Math.log(N)-le)/100;return Math.exp(le+Ce*(L-0))}function Je(L,N,Z){return(Math.log10(L)-N)/(Z-N)*100}function Ke(L,N,Z){const ne=N+L/100*(Z-N);return Math.pow(10,ne)}function Ze(){const L=document.getElementById("exaggeration-slider"),N=document.getElementById("exaggeration-value"),Z=1;function ne(){return _==="fixed"?{minExp:Math.log10(.05),maxExp:Math.log10(1)}:{minExp:Math.log10(.1),maxExp:Math.log10(25)}}let{minExp:le,maxExp:Te}=ne();L.value=Je(Z,le,Te),re=Z,N.textContent=re.toFixed(2)+"x",L.addEventListener("input",at=>{const gt=parseFloat(at.target.value);({minExp:le,maxExp:Te}=ne()),re=Ke(gt,le,Te),N.textContent=re.toFixed(2)+"x",de&&qe(ye(de),10)});const Ce=document.getElementById("speed-slider"),ke=document.getElementById("speed-value"),ht=1;Ce.value=0,Ie=ht,ke.textContent=Ie.toFixed(0)+"x";function ut(){return _==="smallScale"?2e4:500}Ce.addEventListener("input",at=>{const gt=parseFloat(at.target.value),Yt=ut();Ie=je(gt,Yt),ke.textContent=Ie.toFixed(0)+"x";let St=q.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=St,document.getElementById("simulation-time").textContent=q.toUTCString().replace("GMT","UTC")}),document.getElementById("reset-button").addEventListener("click",()=>{({minExp:le,maxExp:Te}=ne()),L.value=Je(Z,le,Te),re=Z,N.textContent=re.toFixed(2)+"x",Ce.value=0,Ie=ht,ke.textContent=Ie.toFixed(0)+"x",de&&qe(ye(de),10)})}function st(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight);const L=window.innerWidth<=768;i.position.z=L?A*k:A}}const bm="threeContainer1",Vo=document.createElement("div");Vo.id="loadingOverlay";Vo.innerHTML='<div id="loadingText">Loading</div>';document.body.appendChild(Vo);function Am(){const n=document.getElementById("loadingText"),e=setInterval(()=>{n.textContent+="."},50);return console.log("Loading animation started"),()=>{clearInterval(e),console.log("Loading animation stopped")}}const wm=Am();function Cm(){setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none",wm()},100)}Tm(bm,Cm);
