(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="158",Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ol=0,Na=1,ll=2,xo=1,Mo=2,mn=3,Pn=0,Bt=1,gn=2,Cn=0,xi=1,Fa=2,Oa=3,za=4,cl=5,On=100,ul=101,hl=102,Ba=103,Ga=104,dl=200,fl=201,pl=202,ml=203,pa=204,ma=205,gl=206,_l=207,vl=208,xl=209,Ml=210,Sl=211,El=212,yl=213,Tl=214,bl=0,Al=1,wl=2,Sr=3,Cl=4,Rl=5,Ll=6,Pl=7,So=0,Dl=1,Ul=2,Rn=0,Il=1,Nl=2,Fl=3,Ol=4,zl=5,Eo=300,Si=301,Ei=302,ga=303,_a=304,Rr=306,va=1e3,rn=1001,xa=1002,Ft=1003,Ha=1004,Nr=1005,jt=1006,Bl=1007,Vi=1008,Ln=1009,Gl=1010,Hl=1011,ba=1012,yo=1013,An=1014,wn=1015,ki=1016,To=1017,bo=1018,kn=1020,Vl=1021,an=1023,kl=1024,Wl=1025,Wn=1026,yi=1027,Xl=1028,Ao=1029,ql=1030,wo=1031,Co=1033,Fr=33776,Or=33777,zr=33778,Br=33779,Va=35840,ka=35841,Wa=35842,Xa=35843,Yl=36196,qa=37492,Ya=37496,ja=37808,Ka=37809,Za=37810,$a=37811,Ja=37812,Qa=37813,es=37814,ts=37815,ns=37816,is=37817,rs=37818,as=37819,ss=37820,os=37821,Gr=36492,ls=36494,cs=36495,jl=36283,us=36284,hs=36285,ds=36286,Ro=3e3,Xn=3001,Kl=3200,Zl=3201,Lo=0,$l=1,Zt="",wt="srgb",xn="srgb-linear",Aa="display-p3",Lr="display-p3-linear",Er="linear",ft="srgb",yr="rec709",Tr="p3",ei=7680,fs=519,Jl=512,Ql=513,ec=514,tc=515,nc=516,ic=517,rc=518,ac=519,ps=35044,ms="300 es",Ma=1035,_n=2e3,br=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gs=1234567;const Bi=Math.PI/180,Wi=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function wa(n,e){return(n%e+e)%e}function sc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function oc(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function lc(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function cc(n,e=1){return e-Math.abs(wa(n,e*2)-e)}function uc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fc(n,e){return n+Math.random()*(e-n)}function pc(n){return n*(.5-Math.random())}function mc(n){n!==void 0&&(gs=n);let e=gs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gc(n){return n*Bi}function _c(n){return n*Wi}function Sa(n){return(n&n-1)===0&&n!==0}function vc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ar(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xc(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),u=o((e+i)/2),d=a((e-i)/2),f=o((e-i)/2),m=a((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(s*u,l*d,l*f,s*c);break;case"YZY":n.set(l*f,s*u,l*d,s*c);break;case"ZXZ":n.set(l*d,l*f,s*u,s*c);break;case"XZX":n.set(s*u,l*_,l*m,s*c);break;case"YXY":n.set(l*m,s*u,l*_,s*c);break;case"ZYZ":n.set(l*_,l*m,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Mc={DEG2RAD:Bi,RAD2DEG:Wi,generateUUID:bi,clamp:Dt,euclideanModulo:wa,mapLinear:sc,inverseLerp:oc,lerp:Gi,damp:lc,pingpong:cc,smoothstep:uc,smootherstep:hc,randInt:dc,randFloat:fc,randFloatSpread:pc,seededRandom:mc,degToRad:gc,radToDeg:_c,isPowerOfTwo:Sa,ceilPowerOfTwo:vc,floorPowerOfTwo:Ar,setQuaternionFromProperEuler:xc,normalize:It,denormalize:_i};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,r,a,o,s,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],_=i[8],x=r[0],p=r[3],h=r[6],T=r[1],v=r[4],y=r[7],w=r[2],C=r[5],b=r[8];return a[0]=o*x+s*T+l*w,a[3]=o*p+s*v+l*C,a[6]=o*h+s*y+l*b,a[1]=c*x+u*T+d*w,a[4]=c*p+u*v+d*C,a[7]=c*h+u*y+d*b,a[2]=f*x+m*T+_*w,a[5]=f*p+m*v+_*C,a[8]=f*h+m*y+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*o-s*c,f=s*l-u*a,m=c*a-o*l,_=t*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(s*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*a-s*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new at;function Po(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sc(){const n=wr("canvas");return n.style.display="block",n}const _s={};function Hi(n){n in _s||(_s[n]=!0,console.warn(n))}const vs=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xs=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[xn]:{transfer:Er,primaries:yr,toReference:n=>n,fromReference:n=>n},[wt]:{transfer:ft,primaries:yr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lr]:{transfer:Er,primaries:Tr,toReference:n=>n.applyMatrix3(xs),fromReference:n=>n.applyMatrix3(vs)},[Aa]:{transfer:ft,primaries:Tr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xs),fromReference:n=>n.applyMatrix3(vs).convertLinearToSRGB()}},Ec=new Set([xn,Lr]),lt={enabled:!0,_workingColorSpace:xn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ec.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ji[e].toReference,r=ji[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ji[n].primaries},getTransfer:function(n){return n===Zt?Er:ji[n].transfer}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ti;class Do{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=wr("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Mi(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yc=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(kr(r[o].image)):a.push(kr(r[o]))}else a=kr(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Do.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class Wt extends Kn{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=rn,r=rn,a=jt,o=Vi,s=an,l=Ln,c=Wt.DEFAULT_ANISOTROPY,u=Zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=bi(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xn?wt:Zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?Xn:Ro}set encoding(e){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xn?wt:Zt}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Eo;Wt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,w=(h+1)/2,C=(u+f)/4,b=(d+x)/4,q=(_+p)/4;return v>y&&v>w?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=C/i,a=b/i):y>w?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=C/r,a=q/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=b/a,r=q/a),this.set(i,r,a,t),this}let T=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bc extends Kn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xn?wt:Zt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends bc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Io extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ac extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=a[o+0],m=a[o+1],_=a[o+2],x=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==f||c!==m||u!==_){let p=1-s;const h=l*f+c*m+u*_+d*x,T=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const w=Math.sqrt(v),C=Math.atan2(w,h*T);p=Math.sin(p*C)/w,s=Math.sin(s*C)/w}const y=s*T;if(l=l*p+f*y,c=c*p+m*y,u=u*p+_*y,d=d*p+x*y,p===1-s){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=a[o],f=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+u*d+l*m-c*f,e[t+1]=l*_+u*f+c*d-s*m,e[t+2]=c*_+u*m+s*f-l*d,e[t+3]=u*_-s*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),d=s(a/2),f=l(i/2),m=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(o-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(a-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(o-r)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ms.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ms.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*t-a*r),d=2*(a*i-o*t);return this.x=t+l*c+o*d-s*u,this.y=i+l*u+s*c-a*d,this.z=r+l*d+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new z,Ms=new Yn;class Zn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(a,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ki.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ki.copy(i.boundingBox)),Ki.applyMatrix4(e.matrixWorld),this.union(Ki)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),Zi.subVectors(this.max,Ri),ni.subVectors(e.a,Ri),ii.subVectors(e.b,Ri),ri.subVectors(e.c,Ri),Mn.subVectors(ii,ni),Sn.subVectors(ri,ii),Dn.subVectors(ni,ri);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Dn.z,Dn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Dn.z,0,-Dn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Dn.y,Dn.x,0];return!Xr(t,ni,ii,ri,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,ni,ii,ri,Zi))?!1:($i.crossVectors(Mn,Sn),t=[$i.x,$i.y,$i.z],Xr(t,ni,ii,ri,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new z,new z,new z,new z,new z,new z,new z,new z],Qt=new z,Ki=new Zn,ni=new z,ii=new z,ri=new z,Mn=new z,Sn=new z,Dn=new z,Ri=new z,Zi=new z,$i=new z,Un=new z;function Xr(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Un.fromArray(n,a);const s=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),u=i.dot(Un);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const wc=new Zn,Li=new z,qr=new z;class Ai{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Li,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(qr)),this.expandByPoint(Li.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new z,Yr=new z,Ji=new z,En=new z,jr=new z,Qi=new z,Kr=new z;class Ca{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yr.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),En.copy(this.origin).sub(Yr);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Ji),s=En.dot(this.direction),l=-En.dot(Ji),c=En.lengthSq(),u=Math.abs(1-o*o);let d,f,m,_;if(u>0)if(d=o*l-s,f=o*s-l,_=a*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,m=d*(d+o*f+2*s)+f*(o*d+f+2*l)+c}else f=a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c);else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yr).addScaledVector(Ji,f),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,a){jr.subVectors(t,e),Qi.subVectors(i,e),Kr.crossVectors(jr,Qi);let o=this.direction.dot(Kr),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;En.subVectors(this.origin,e);const l=s*this.direction.dot(Qi.crossVectors(En,Qi));if(l<0)return null;const c=s*this.direction.dot(jr.cross(En));if(c<0||l+c>o)return null;const u=-s*En.dot(Kr);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,a,o,s,l,c,u,d,f,m,_,x,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,d,f,m,_,x,p)}set(e,t,i,r,a,o,s,l,c,u,d,f,m,_,x,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),a=1/ai.setFromMatrixColumn(e,1).length(),o=1/ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=o*u,m=o*d,_=s*u,x=s*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-s*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,_=c*u,x=c*d;t[0]=f+x*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-s,t[2]=m*s-_,t[6]=x+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,_=c*u,x=c*d;t[0]=f-x*s,t[4]=-o*d,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*u,t[9]=x-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,_=s*u,x=s*d;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=s*l,x=s*c;t[0]=l*u,t[4]=x-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*d+_,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,m=o*c,_=s*l,x=s*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=s*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cc,e,Rc)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),yn.crossVectors(i,Gt),yn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),yn.crossVectors(i,Gt)),yn.normalize(),er.crossVectors(Gt,yn),r[0]=yn.x,r[4]=er.x,r[8]=Gt.x,r[1]=yn.y,r[5]=er.y,r[9]=Gt.y,r[2]=yn.z,r[6]=er.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],h=i[14],T=i[3],v=i[7],y=i[11],w=i[15],C=r[0],b=r[4],q=r[8],M=r[12],A=r[1],Y=r[5],j=r[9],te=r[13],D=r[2],G=r[6],X=r[10],K=r[14],ae=r[3],J=r[7],Q=r[11],I=r[15];return a[0]=o*C+s*A+l*D+c*ae,a[4]=o*b+s*Y+l*G+c*J,a[8]=o*q+s*j+l*X+c*Q,a[12]=o*M+s*te+l*K+c*I,a[1]=u*C+d*A+f*D+m*ae,a[5]=u*b+d*Y+f*G+m*J,a[9]=u*q+d*j+f*X+m*Q,a[13]=u*M+d*te+f*K+m*I,a[2]=_*C+x*A+p*D+h*ae,a[6]=_*b+x*Y+p*G+h*J,a[10]=_*q+x*j+p*X+h*Q,a[14]=_*M+x*te+p*K+h*I,a[3]=T*C+v*A+y*D+w*ae,a[7]=T*b+v*Y+y*G+w*J,a[11]=T*q+v*j+y*X+w*Q,a[15]=T*M+v*te+y*K+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],h=e[15];return _*(+a*l*d-r*c*d-a*s*f+i*c*f+r*s*m-i*l*m)+x*(+t*l*m-t*c*f+a*o*f-r*o*m+r*c*u-a*l*u)+p*(+t*c*d-t*s*m-a*o*d+i*o*m+a*s*u-i*c*u)+h*(-r*s*u-t*l*d+t*s*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],h=e[15],T=d*p*c-x*f*c+x*l*m-s*p*m-d*l*h+s*f*h,v=_*f*c-u*p*c-_*l*m+o*p*m+u*l*h-o*f*h,y=u*x*c-_*d*c+_*s*m-o*x*m-u*s*h+o*d*h,w=_*d*l-u*x*l-_*s*f+o*x*f+u*s*p-o*d*p,C=t*T+i*v+r*y+a*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=T*b,e[1]=(x*f*a-d*p*a-x*r*m+i*p*m+d*r*h-i*f*h)*b,e[2]=(s*p*a-x*l*a+x*r*c-i*p*c-s*r*h+i*l*h)*b,e[3]=(d*l*a-s*f*a-d*r*c+i*f*c+s*r*m-i*l*m)*b,e[4]=v*b,e[5]=(u*p*a-_*f*a+_*r*m-t*p*m-u*r*h+t*f*h)*b,e[6]=(_*l*a-o*p*a-_*r*c+t*p*c+o*r*h-t*l*h)*b,e[7]=(o*f*a-u*l*a+u*r*c-t*f*c-o*r*m+t*l*m)*b,e[8]=y*b,e[9]=(_*d*a-u*x*a-_*i*m+t*x*m+u*i*h-t*d*h)*b,e[10]=(o*x*a-_*s*a+_*i*c-t*x*c-o*i*h+t*s*h)*b,e[11]=(u*s*a-o*d*a-u*i*c+t*d*c+o*i*m-t*s*m)*b,e[12]=w*b,e[13]=(u*x*r-_*d*r+_*i*f-t*x*f-u*i*p+t*d*p)*b,e[14]=(_*s*r-o*x*r-_*i*l+t*x*l+o*i*p-t*s*p)*b,e[15]=(o*d*r-u*s*r+u*i*l-t*d*l-o*i*f+t*s*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,d=s+s,f=a*c,m=a*u,_=a*d,x=o*u,p=o*d,h=s*d,T=l*c,v=l*u,y=l*d,w=i.x,C=i.y,b=i.z;return r[0]=(1-(x+h))*w,r[1]=(m+y)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(f+h))*C,r[6]=(p+T)*C,r[7]=0,r[8]=(_+v)*b,r[9]=(p-T)*b,r[10]=(1-(f+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=ai.set(r[0],r[1],r[2]).length();const o=ai.set(r[4],r[5],r[6]).length(),s=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/a,u=1/o,d=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=_n){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(s===_n)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===br)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=_n){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-a),f=(t+e)*c,m=(i+r)*u;let _,x;if(s===_n)_=(o+a)*d,x=-2*d;else if(s===br)_=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ai=new z,en=new ht,Cc=new z(0,0,0),Rc=new z(1,1,1),yn=new z,er=new z,Gt=new z,Ss=new ht,Es=new Yn;class Pr{constructor(e=0,t=0,i=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ss.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ss,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Es.setFromEuler(this),this.setFromQuaternion(Es,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lc=0;const ys=new z,si=new Yn,dn=new ht,tr=new z,Pi=new z,Pc=new z,Dc=new Yn,Ts=new z(1,0,0),bs=new z(0,1,0),As=new z(0,0,1),Uc={type:"added"},Ic={type:"removed"};class gt extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new z,t=new Pr,i=new Yn,r=new z(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new at}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Ts,e)}rotateY(e){return this.rotateOnAxis(bs,e)}rotateZ(e){return this.rotateOnAxis(As,e)}translateOnAxis(e,t){return ys.copy(e).applyQuaternion(this.quaternion),this.position.add(ys.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ts,e)}translateY(e){return this.translateOnAxis(bs,e)}translateZ(e){return this.translateOnAxis(As,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tr.copy(e):tr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Pi,tr,this.up):dn.lookAt(tr,Pi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),si.setFromRotationMatrix(dn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,Pc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new z(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new z,fn=new z,Zr=new z,pn=new z,oi=new z,li=new z,ws=new z,$r=new z,Jr=new z,Qr=new z;let nr=!1;class nn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){tn.subVectors(r,t),fn.subVectors(i,t),Zr.subVectors(e,t);const o=tn.dot(tn),s=tn.dot(fn),l=tn.dot(Zr),c=fn.dot(fn),u=fn.dot(Zr),d=o*c-s*s;if(d===0)return a.set(-2,-1,-1);const f=1/d,m=(c*l-s*u)*f,_=(o*u-s*l)*f;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,r,a,o,s,l){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,pn),l.setScalar(0),l.addScaledVector(a,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(s,pn.z),l}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),fn.subVectors(e,t),tn.cross(fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),tn.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;oi.subVectors(r,i),li.subVectors(a,i),$r.subVectors(e,i);const l=oi.dot($r),c=li.dot($r);if(l<=0&&c<=0)return t.copy(i);Jr.subVectors(e,r);const u=oi.dot(Jr),d=li.dot(Jr);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(oi,o);Qr.subVectors(e,a);const m=oi.dot(Qr),_=li.dot(Qr);if(_>=0&&m<=_)return t.copy(a);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(li,s);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return ws.subVectors(a,r),s=(d-u)/(d-u+(m-_)),t.copy(r).addScaledVector(ws,s);const h=1/(p+x+f);return o=x*h,s=f*h,t.copy(i).addScaledVector(oi,o).addScaledVector(li,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=wa(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=ea(o,a,e+1/3),this.g=ea(o,a,e),this.b=ea(o,a,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const i=Fo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return lt.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Dt(Pt.r*255,0,255))*65536+Math.round(Dt(Pt.g*255,0,255))*256+Math.round(Dt(Pt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,a=Pt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=u<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=wt){lt.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(ir);const i=Gi(Tn.h,ir.h,t),r=Gi(Tn.s,ir.s,t),a=Gi(Tn.l,ir.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new tt;tt.NAMES=Fo;let Nc=0;class $n extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=xi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pa&&(i.blendSrc=this.blendSrc),this.blendDst!==ma&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ra extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new z,rr=new et;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ps,this.updateRange={offset:0,count:-1},this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ps&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Oo extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zo extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fc=0;const Yt=new ht,ta=new gt,ci=new z,Ht=new Zn,Di=new Zn,yt=new z;class on extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Po(e)?zo:Oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new at().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Ht.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(Ht.min,Di.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,Di.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(Di.min),Ht.expandByPoint(Di.max))}Ht.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)yt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)yt.fromBufferAttribute(s,c),l&&(ci.fromBufferAttribute(e,c),yt.add(ci)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<s;A++)c[A]=new z,u[A]=new z;const d=new z,f=new z,m=new z,_=new et,x=new et,p=new et,h=new z,T=new z;function v(A,Y,j){d.fromArray(r,A*3),f.fromArray(r,Y*3),m.fromArray(r,j*3),_.fromArray(o,A*2),x.fromArray(o,Y*2),p.fromArray(o,j*2),f.sub(d),m.sub(d),x.sub(_),p.sub(_);const te=1/(x.x*p.y-p.x*x.y);isFinite(te)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(te),T.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(te),c[A].add(h),c[Y].add(h),c[j].add(h),u[A].add(T),u[Y].add(T),u[j].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,Y=y.length;A<Y;++A){const j=y[A],te=j.start,D=j.count;for(let G=te,X=te+D;G<X;G+=3)v(i[G+0],i[G+1],i[G+2])}const w=new z,C=new z,b=new z,q=new z;function M(A){b.fromArray(a,A*3),q.copy(b);const Y=c[A];w.copy(Y),w.sub(b.multiplyScalar(b.dot(Y))).normalize(),C.crossVectors(q,Y);const te=C.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=te}for(let A=0,Y=y.length;A<Y;++A){const j=y[A],te=j.start,D=j.count;for(let G=te,X=te+D;G<X;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,a=new z,o=new z,s=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),s.add(u),l.add(u),c.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new Xt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cs=new ht,In=new Ca,ar=new Ai,Rs=new z,ui=new z,hi=new z,di=new z,na=new z,sr=new z,or=new et,lr=new et,cr=new et,Ls=new z,Ps=new z,Ds=new z,ur=new z,hr=new z;class kt extends gt{constructor(e=new on,t=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){sr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],d=a[l];u!==0&&(na.fromBufferAttribute(d,e),o?sr.addScaledVector(na,u):sr.addScaledVector(na.sub(t),u))}t.add(sr)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(a),In.copy(e.ray).recast(e.near),!(ar.containsPoint(In.origin)===!1&&(In.intersectSphere(ar,Rs)===null||In.origin.distanceToSquared(Rs)>(e.far-e.near)**2))&&(Cs.copy(a).invert(),In.copy(e.ray).applyMatrix4(Cs),!(i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],h=o[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,w=v;y<w;y+=3){const C=s.getX(y),b=s.getX(y+1),q=s.getX(y+2);r=dr(this,h,e,i,c,u,d,C,b,q),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=_,h=x;p<h;p+=3){const T=s.getX(p),v=s.getX(p+1),y=s.getX(p+2);r=dr(this,o,e,i,c,u,d,T,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],h=o[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,w=v;y<w;y+=3){const C=y,b=y+1,q=y+2;r=dr(this,h,e,i,c,u,d,C,b,q),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,h=x;p<h;p+=3){const T=p,v=p+1,y=p+2;r=dr(this,o,e,i,c,u,d,T,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Oc(n,e,t,i,r,a,o,s){let l;if(e.side===Bt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Pn,s),l===null)return null;hr.copy(s),hr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(hr);return c<t.near||c>t.far?null:{distance:c,point:hr.clone(),object:n}}function dr(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,ui),n.getVertexPosition(l,hi),n.getVertexPosition(c,di);const u=Oc(n,e,t,i,ui,hi,di,ur);if(u){r&&(or.fromBufferAttribute(r,s),lr.fromBufferAttribute(r,l),cr.fromBufferAttribute(r,c),u.uv=nn.getInterpolation(ur,ui,hi,di,or,lr,cr,new et)),a&&(or.fromBufferAttribute(a,s),lr.fromBufferAttribute(a,l),cr.fromBufferAttribute(a,c),u.uv1=nn.getInterpolation(ur,ui,hi,di,or,lr,cr,new et),u.uv2=u.uv1),o&&(Ls.fromBufferAttribute(o,s),Ps.fromBufferAttribute(o,l),Ds.fromBufferAttribute(o,c),u.normal=nn.getInterpolation(ur,ui,hi,di,Ls,Ps,Ds,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new z,materialIndex:0};nn.getNormal(ui,hi,di,d.normal),u.face=d}return u}class qi extends on{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(d,2));function _(x,p,h,T,v,y,w,C,b,q,M){const A=y/b,Y=w/q,j=y/2,te=w/2,D=C/2,G=b+1,X=q+1;let K=0,ae=0;const J=new z;for(let Q=0;Q<X;Q++){const I=Q*Y-te;for(let N=0;N<G;N++){const me=N*A-j;J[x]=me*T,J[p]=I*v,J[h]=D,c.push(J.x,J.y,J.z),J[x]=0,J[p]=0,J[h]=C>0?1:-1,u.push(J.x,J.y,J.z),d.push(N/b),d.push(1-Q/q),K+=1}}for(let Q=0;Q<q;Q++)for(let I=0;I<b;I++){const N=f+I+G*Q,me=f+I+G*(Q+1),_e=f+(I+1)+G*(Q+1),ne=f+(I+1)+G*Q;l.push(N,me,ne),l.push(me,_e,ne),ae+=6}s.addGroup(m,ae,M),m+=ae,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const r in i)e[r]=i[r]}return e}function zc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bo(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}const Bc={clone:Ti,merge:Nt};var Gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gc,this.fragmentShader=Hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=zc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Go extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Go{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Vc extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(fi,pi,e,t);o.layers=this.layers,this.add(o);const s=new Kt(fi,pi,e,t);s.layers=this.layers,this.add(s);const l=new Kt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ho extends Wt{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kc extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xn?wt:Zt),this.texture=new Ho(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qi(5,5,5),a=new jn({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Cn});a.uniforms.tEquirect.value=t;const o=new kt(r,a),s=t.minFilter;return t.minFilter===Vi&&(t.minFilter=jt),new Vc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const ia=new z,Wc=new z,Xc=new at;class bn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ia.subVectors(i,t).cross(Wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xc.getNormalMatrix(e),r=this.coplanarPoint(ia).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ai,fr=new z;class Dr{constructor(e=new bn,t=new bn,i=new bn,r=new bn,a=new bn,o=new bn){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],x=r[10],p=r[11],h=r[12],T=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-a,f-c,p-m,y-h).normalize(),i[1].setComponents(l+a,f+c,p+m,y+h).normalize(),i[2].setComponents(l+o,f+u,p+_,y+T).normalize(),i[3].setComponents(l-o,f-u,p-_,y-T).normalize(),i[4].setComponents(l-s,f-d,p-x,y-v).normalize(),t===_n)i[5].setComponents(l+s,f+d,p+x,y+v).normalize();else if(t===br)i[5].setComponents(s,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fr.x=r.normal.x>0?e.max.x:e.min.x,fr.y=r.normal.y>0?e.max.y:e.min.y,fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vo(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function qc(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,d){const f=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(a(d.buffer,c,u),d.version=c.version)}return{get:o,remove:s,update:l}}class La extends on{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,d=e/s,f=t/l,m=[],_=[],x=[],p=[];for(let h=0;h<u;h++){const T=h*f-o;for(let v=0;v<c;v++){const y=v*d-a;_.push(y,-T,0),x.push(0,0,1),p.push(v/s),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<s;T++){const v=T+c*h,y=T+c*(h+1),w=T+1+c*(h+1),C=T+1+c*h;m.push(v,y,C),m.push(y,w,C)}this.setIndex(m),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jc=`#ifdef USE_ALPHAHASH
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
#endif`,Kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$c=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qc=`#ifdef USE_AOMAP
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
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ru=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
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
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gu=`vec3 transformedNormal = objectNormal;
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
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`
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
}`,yu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
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
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ku=`PhysicalMaterial material;
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
#endif`,Wu=`struct PhysicalMaterial {
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
}`,Xu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,th=`#if defined( USE_POINTS_UV )
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
#endif`,nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ah=`#ifdef USE_MORPHNORMALS
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
#endif`,sh=`#ifdef USE_MORPHTARGETS
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
#endif`,oh=`#ifdef USE_MORPHTARGETS
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
#endif`,lh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ch=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fh=`#ifdef USE_NORMALMAP
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
#endif`,ph=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ah=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ch=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rh=`float getShadowMask() {
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
}`,Lh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ph=`#ifdef USE_SKINNING
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
#endif`,Dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uh=`#ifdef USE_SKINNING
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
#endif`,Ih=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zh=`#ifdef USE_TRANSMISSION
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
#endif`,Bh=`#ifdef USE_TRANSMISSION
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
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xh=`uniform sampler2D t2D;
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
}`,qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`#include <common>
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
}`,$h=`#if DEPTH_PACKING == 3200
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
}`,Jh=`#define DISTANCE
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
}`,Qh=`#define DISTANCE
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`uniform float scale;
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
}`,id=`uniform vec3 diffuse;
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
}`,rd=`#include <common>
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
}`,ad=`uniform vec3 diffuse;
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
}`,sd=`#define LAMBERT
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
}`,od=`#define LAMBERT
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
}`,ld=`#define MATCAP
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
}`,cd=`#define MATCAP
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
}`,ud=`#define NORMAL
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
}`,hd=`#define NORMAL
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
}`,dd=`#define PHONG
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
}`,fd=`#define PHONG
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
}`,pd=`#define STANDARD
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
}`,md=`#define STANDARD
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
}`,gd=`#define TOON
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
}`,_d=`#define TOON
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
}`,vd=`uniform float size;
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
}`,xd=`uniform vec3 diffuse;
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
}`,Md=`#include <common>
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
}`,Sd=`uniform vec3 color;
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
}`,Ed=`uniform float rotation;
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
}`,yd=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Yc,alphahash_pars_fragment:jc,alphamap_fragment:Kc,alphamap_pars_fragment:Zc,alphatest_fragment:$c,alphatest_pars_fragment:Jc,aomap_fragment:Qc,aomap_pars_fragment:eu,begin_vertex:tu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:su,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:uu,color_pars_fragment:hu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:Eu,envmap_fragment:yu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:bu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:zu,envmap_vertex:wu,fog_vertex:Cu,fog_pars_vertex:Ru,fog_fragment:Lu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Du,lightmap_fragment:Uu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:Bu,lights_toon_pars_fragment:Gu,lights_phong_fragment:Hu,lights_phong_pars_fragment:Vu,lights_physical_fragment:ku,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:$u,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:eh,map_particle_pars_fragment:th,metalnessmap_fragment:nh,metalnessmap_pars_fragment:ih,morphcolor_vertex:rh,morphnormal_vertex:ah,morphtarget_pars_vertex:sh,morphtarget_vertex:oh,normal_fragment_begin:lh,normal_fragment_maps:ch,normal_pars_fragment:uh,normal_pars_vertex:hh,normal_vertex:dh,normalmap_pars_fragment:fh,clearcoat_normal_fragment_begin:ph,clearcoat_normal_fragment_maps:mh,clearcoat_pars_fragment:gh,iridescence_pars_fragment:_h,opaque_fragment:vh,packing:xh,premultiplied_alpha_fragment:Mh,project_vertex:Sh,dithering_fragment:Eh,dithering_pars_fragment:yh,roughnessmap_fragment:Th,roughnessmap_pars_fragment:bh,shadowmap_pars_fragment:Ah,shadowmap_pars_vertex:wh,shadowmap_vertex:Ch,shadowmask_pars_fragment:Rh,skinbase_vertex:Lh,skinning_pars_vertex:Ph,skinning_vertex:Dh,skinnormal_vertex:Uh,specularmap_fragment:Ih,specularmap_pars_fragment:Nh,tonemapping_fragment:Fh,tonemapping_pars_fragment:Oh,transmission_fragment:zh,transmission_pars_fragment:Bh,uv_pars_fragment:Gh,uv_pars_vertex:Hh,uv_vertex:Vh,worldpos_vertex:kh,background_vert:Wh,background_frag:Xh,backgroundCube_vert:qh,backgroundCube_frag:Yh,cube_vert:jh,cube_frag:Kh,depth_vert:Zh,depth_frag:$h,distanceRGBA_vert:Jh,distanceRGBA_frag:Qh,equirect_vert:ed,equirect_frag:td,linedashed_vert:nd,linedashed_frag:id,meshbasic_vert:rd,meshbasic_frag:ad,meshlambert_vert:sd,meshlambert_frag:od,meshmatcap_vert:ld,meshmatcap_frag:cd,meshnormal_vert:ud,meshnormal_frag:hd,meshphong_vert:dd,meshphong_frag:fd,meshphysical_vert:pd,meshphysical_frag:md,meshtoon_vert:gd,meshtoon_frag:_d,points_vert:vd,points_frag:xd,shadow_vert:Md,shadow_frag:Sd,sprite_vert:Ed,sprite_frag:yd},Ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ln={basic:{uniforms:Nt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Nt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Nt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Nt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Nt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Nt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Nt([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Nt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Nt([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Nt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Nt([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Nt([Ce.common,Ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Nt([Ce.lights,Ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ln.physical={uniforms:Nt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const pr={r:0,b:0,g:0};function Td(n,e,t,i,r,a,o){const s=new tt(0);let l=a===!0?0:1,c,u,d=null,f=0,m=null;function _(p,h){let T=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?x(s,l):v&&v.isColor&&(x(v,1),T=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Rr)?(u===void 0&&(u=new kt(new qi(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Ti(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=lt.getTransfer(v.colorSpace)!==ft,(d!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new kt(new La(2,2),new jn({name:"BackgroundMaterial",uniforms:Ti(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,h){p.getRGB(pr,Bo(n)),i.buffers.color.setClear(pr.r,pr.g,pr.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(p,h=1){s.set(p),l=h,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(s,l)},render:_}}function bd(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=p(null);let c=l,u=!1;function d(D,G,X,K,ae){let J=!1;if(o){const Q=x(K,X,G);c!==Q&&(c=Q,m(c.object)),J=h(D,K,X,ae),J&&T(D,K,X,ae)}else{const Q=G.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==Q)&&(c.geometry=K.id,c.program=X.id,c.wireframe=Q,J=!0)}ae!==null&&t.update(ae,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,q(D,G,X,K),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ae).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):a.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function x(D,G,X){const K=X.wireframe===!0;let ae=s[D.id];ae===void 0&&(ae={},s[D.id]=ae);let J=ae[G.id];J===void 0&&(J={},ae[G.id]=J);let Q=J[K];return Q===void 0&&(Q=p(f()),J[K]=Q),Q}function p(D){const G=[],X=[],K=[];for(let ae=0;ae<r;ae++)G[ae]=0,X[ae]=0,K[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:K,object:D,attributes:{},index:null}}function h(D,G,X,K){const ae=c.attributes,J=G.attributes;let Q=0;const I=X.getAttributes();for(const N in I)if(I[N].location>=0){const _e=ae[N];let ne=J[N];if(ne===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),_e===void 0||_e.attribute!==ne||ne&&_e.data!==ne.data)return!0;Q++}return c.attributesNum!==Q||c.index!==K}function T(D,G,X,K){const ae={},J=G.attributes;let Q=0;const I=X.getAttributes();for(const N in I)if(I[N].location>=0){let _e=J[N];_e===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const ne={};ne.attribute=_e,_e&&_e.data&&(ne.data=_e.data),ae[N]=ne,Q++}c.attributes=ae,c.attributesNum=Q,c.index=K}function v(){const D=c.newAttributes;for(let G=0,X=D.length;G<X;G++)D[G]=0}function y(D){w(D,0)}function w(D,G){const X=c.newAttributes,K=c.enabledAttributes,ae=c.attributeDivisors;X[D]=1,K[D]===0&&(n.enableVertexAttribArray(D),K[D]=1),ae[D]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),ae[D]=G)}function C(){const D=c.newAttributes,G=c.enabledAttributes;for(let X=0,K=G.length;X<K;X++)G[X]!==D[X]&&(n.disableVertexAttribArray(X),G[X]=0)}function b(D,G,X,K,ae,J,Q){Q===!0?n.vertexAttribIPointer(D,G,X,ae,J):n.vertexAttribPointer(D,G,X,K,ae,J)}function q(D,G,X,K){if(i.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ae=K.attributes,J=X.getAttributes(),Q=G.defaultAttributeValues;for(const I in J){const N=J[I];if(N.location>=0){let me=ae[I];if(me===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),me!==void 0){const _e=me.normalized,ne=me.itemSize,de=t.get(me);if(de===void 0)continue;const Fe=de.buffer,Se=de.type,Ue=de.bytesPerElement,ke=i.isWebGL2===!0&&(Se===n.INT||Se===n.UNSIGNED_INT||me.gpuType===yo);if(me.isInterleavedBufferAttribute){const He=me.data,U=He.stride,it=me.offset;if(He.isInstancedInterleavedBuffer){for(let ve=0;ve<N.locationSize;ve++)w(N.location+ve,He.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let ve=0;ve<N.locationSize;ve++)y(N.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ve=0;ve<N.locationSize;ve++)b(N.location+ve,ne/N.locationSize,Se,_e,U*Ue,(it+ne/N.locationSize*ve)*Ue,ke)}else{if(me.isInstancedBufferAttribute){for(let He=0;He<N.locationSize;He++)w(N.location+He,me.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<N.locationSize;He++)y(N.location+He);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let He=0;He<N.locationSize;He++)b(N.location+He,ne/N.locationSize,Se,_e,ne*Ue,ne/N.locationSize*He*Ue,ke)}}else if(Q!==void 0){const _e=Q[I];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(N.location,_e);break;case 3:n.vertexAttrib3fv(N.location,_e);break;case 4:n.vertexAttrib4fv(N.location,_e);break;default:n.vertexAttrib1fv(N.location,_e)}}}}C()}function M(){j();for(const D in s){const G=s[D];for(const X in G){const K=G[X];for(const ae in K)_(K[ae].object),delete K[ae];delete G[X]}delete s[D]}}function A(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const X in G){const K=G[X];for(const ae in K)_(K[ae].object),delete K[ae];delete G[X]}delete s[D.id]}function Y(D){for(const G in s){const X=s[G];if(X[D.id]===void 0)continue;const K=X[D.id];for(const ae in K)_(K[ae].object),delete K[ae];delete X[D.id]}}function j(){te(),u=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function Ad(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){n.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](a,c,u,d),t.update(u,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function wd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),w=v&&y,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:C}}function Cd(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new bn,s=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||a&&!p)a?u(null):c();else{const T=a?0:i,v=T*4;let y=h.clippingState||null;l.value=y,y=u(_,f,v,m);for(let w=0;w!==v;++w)y[w]=t[w];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const h=m+x*4,T=f.matrixWorldInverse;s.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,y=m;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(T,s),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Rd(n){let e=new WeakMap;function t(o,s){return s===ga?o.mapping=Si:s===_a&&(o.mapping=Ei),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ga||s===_a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class ko extends Go{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,Us=[.125,.215,.35,.446,.526,.582],zn=20,ra=new ko,Is=new tt;let aa=null,sa=0,oa=0;const Fn=(1+Math.sqrt(5))/2,mi=1/Fn,Ns=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Fn,mi),new z(0,Fn,-mi),new z(mi,0,Fn),new z(-mi,0,Fn),new z(Fn,mi,0),new z(-Fn,mi,0)];class Fs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){aa=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,sa,oa),e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ki,format:an,colorSpace:xn,depthBuffer:!1},r=Os(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Os(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ld(a)),this._blurMaterial=Pd(a,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,i,r){const s=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Is),u.toneMapping=Rn,u.autoClear=!1;const m=new Ra({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new kt(new qi,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Is),x=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):T===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const v=this._cubeSize;mr(r,T*v,h>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Si||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zs());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;mr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ns[(r-1)%Ns.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new kt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*zn-1),x=a/_,p=isFinite(a)?1+Math.floor(u*x):zn;p>zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const h=[];let T=0;for(let b=0;b<zn;++b){const q=b/x,M=Math.exp(-q*q/2);h.push(M),b===0?T+=M:b<p&&(T+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],w=3*y*(r>v-vi?r-v+vi:0),C=4*(this._cubeSize-y);mr(t,w,C,3*y,2*y),l.setRenderTarget(t),l.render(d,ra)}}function Ld(n){const e=[],t=[],i=[];let r=n;const a=n-vi+1+Us.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-vi?l=Us[o-n+vi-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,x=3,p=2,h=1,T=new Float32Array(x*_*m),v=new Float32Array(p*_*m),y=new Float32Array(h*_*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,q=C>2?0:-1,M=[b,q,0,b+2/3,q,0,b+2/3,q+1,0,b,q,0,b+2/3,q+1,0,b,q+1,0];T.set(M,x*_*C),v.set(f,p*_*C);const A=[C,C,C,C,C,C];y.set(A,h*_*C)}const w=new on;w.setAttribute("position",new Xt(T,x)),w.setAttribute("uv",new Xt(v,p)),w.setAttribute("faceIndex",new Xt(y,h)),e.push(w),r>vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Os(n,e,t){const i=new qn(n,e,t);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pd(n,e,t){const i=new Float32Array(zn),r=new z(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function zs(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Bs(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function Dd(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===ga||l===_a,u=l===Si||l===Ei;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Fs(n)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Fs(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ud(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Id(n,e,t,i){const r={},a=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,h=x.length;p<h;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,h=x.length;p<h;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let v=0,y=T.length;v<y;v+=3){const w=T[v+0],C=T[v+1],b=T[v+2];f.push(w,C,C,b,b,w)}}else if(_!==void 0){const T=_.array;x=_.version;for(let v=0,y=T.length/3-1;v<y;v+=3){const w=v+0,C=v+1,b=v+2;f.push(w,C,C,b,b,w)}}else return;const p=new(Po(f)?zo:Oo)(f,1);p.version=x;const h=a.get(d);h&&e.remove(h),a.set(d,p)}function u(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function Nd(n,e,t,i){const r=i.isWebGL2;let a;function o(f){a=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(a,m,s,f*l),t.update(m,a,1)}function d(f,m,_){if(_===0)return;let x,p;if(r)x=n,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](a,m,s,f*l,_),t.update(m,a,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function Fd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Od(n,e){return n[0]-e[0]}function zd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Bd(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Tt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let p=a.get(u);if(p===void 0||p.count!==x){let G=function(){te.dispose(),a.delete(u),u.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],q=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let A=u.attributes.position.count*M,Y=1;A>e.maxTextureSize&&(Y=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const j=new Float32Array(A*Y*4*x),te=new Io(j,A,Y,x);te.type=wn,te.needsUpdate=!0;const D=M*4;for(let X=0;X<x;X++){const K=C[X],ae=b[X],J=q[X],Q=A*Y*4*X;for(let I=0;I<K.count;I++){const N=I*D;v===!0&&(o.fromBufferAttribute(K,I),j[Q+N+0]=o.x,j[Q+N+1]=o.y,j[Q+N+2]=o.z,j[Q+N+3]=0),y===!0&&(o.fromBufferAttribute(ae,I),j[Q+N+4]=o.x,j[Q+N+5]=o.y,j[Q+N+6]=o.z,j[Q+N+7]=0),w===!0&&(o.fromBufferAttribute(J,I),j[Q+N+8]=o.x,j[Q+N+9]=o.y,j[Q+N+10]=o.z,j[Q+N+11]=J.itemSize===4?o.w:1)}}p={count:x,texture:te,size:new et(A,Y)},a.set(u,p),u.addEventListener("dispose",G)}let h=0;for(let v=0;v<f.length;v++)h+=f[v];const T=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<_;y++){const w=x[y];w[0]=y,w[1]=f[y]}x.sort(zd);for(let y=0;y<8;y++)y<_&&x[y][1]?(s[y][0]=x[y][0],s[y][1]=x[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(Od);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const w=s[y],C=w[0],b=w[1];C!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+y)!==p[C]&&u.setAttribute("morphTarget"+y,p[C]),h&&u.getAttribute("morphNormal"+y)!==h[C]&&u.setAttribute("morphNormal"+y,h[C]),r[y]=b,T+=b):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-T;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Gd(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Wo=new Wt,Xo=new Io,qo=new Ac,Yo=new Ho,Gs=[],Hs=[],Vs=new Float32Array(16),ks=new Float32Array(9),Ws=new Float32Array(4);function wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Gs[r];if(a===void 0&&(a=new Float32Array(r),Gs[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ur(n,e){let t=Hs[e];t===void 0&&(t=new Int32Array(e),Hs[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Wd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Xd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Ws.set(i),n.uniformMatrix2fv(this.addr,!1,Ws),Mt(t,i)}}function qd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;ks.set(i),n.uniformMatrix3fv(this.addr,!1,ks),Mt(t,i)}}function Yd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Vs.set(i),n.uniformMatrix4fv(this.addr,!1,Vs),Mt(t,i)}}function jd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function $d(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Jd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function nf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Wo,r)}function rf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qo,r)}function af(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yo,r)}function sf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xo,r)}function of(n){switch(n){case 5126:return Hd;case 35664:return Vd;case 35665:return kd;case 35666:return Wd;case 35674:return Xd;case 35675:return qd;case 35676:return Yd;case 5124:case 35670:return jd;case 35667:case 35671:return Kd;case 35668:case 35672:return Zd;case 35669:case 35673:return $d;case 5125:return Jd;case 36294:return Qd;case 36295:return ef;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return nf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return sf}}function lf(n,e){n.uniform1fv(this.addr,e)}function cf(n,e){const t=wi(e,this.size,2);n.uniform2fv(this.addr,t)}function uf(n,e){const t=wi(e,this.size,3);n.uniform3fv(this.addr,t)}function hf(n,e){const t=wi(e,this.size,4);n.uniform4fv(this.addr,t)}function df(n,e){const t=wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ff(n,e){const t=wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pf(n,e){const t=wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mf(n,e){n.uniform1iv(this.addr,e)}function gf(n,e){n.uniform2iv(this.addr,e)}function _f(n,e){n.uniform3iv(this.addr,e)}function vf(n,e){n.uniform4iv(this.addr,e)}function xf(n,e){n.uniform1uiv(this.addr,e)}function Mf(n,e){n.uniform2uiv(this.addr,e)}function Sf(n,e){n.uniform3uiv(this.addr,e)}function Ef(n,e){n.uniform4uiv(this.addr,e)}function yf(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Wo,a[o])}function Tf(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qo,a[o])}function bf(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Yo,a[o])}function Af(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Xo,a[o])}function wf(n){switch(n){case 5126:return lf;case 35664:return cf;case 35665:return uf;case 35666:return hf;case 35674:return df;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return gf;case 35668:case 35672:return _f;case 35669:case 35673:return vf;case 5125:return xf;case 36294:return Mf;case 36295:return Sf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Af}}class Cf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=of(t.type)}}class Rf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=wf(t.type)}}class Lf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Xs(n,e){n.seq.push(e),n.map[e.id]=e}function Pf(n,e,t){const i=n.name,r=i.length;for(la.lastIndex=0;;){const a=la.exec(i),o=la.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Xs(t,c===void 0?new Cf(s,n,e):new Rf(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new Lf(s),Xs(t,d)),t=d}}}class xr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Pf(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qs(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Df=37297;let Uf=0;function If(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Nf(n){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n);let i;switch(e===t?i="":e===Tr&&t===yr?i="LinearDisplayP3ToLinearSRGB":e===yr&&t===Tr&&(i="LinearSRGBToLinearDisplayP3"),n){case xn:case Lr:return[i,"LinearTransferOETF"];case wt:case Aa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ys(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+If(n.getShaderSource(e),o)}else return r}function Ff(n,e){const t=Nf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Of(n,e){let t;switch(e){case Il:t="Linear";break;case Nl:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case Ol:t="ACESFilmic";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function Bf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Oi(n){return n!==""}function js(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ks(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(n){return n.replace(Hf,kf)}const Vf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(n,e){let t=nt[e];if(t===void 0){const i=Vf.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ea(t)}const Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zs(n){return n.replace(Wf,Xf)}function Xf(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function $s(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qf(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yf(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case Ei:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jf(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function Kf(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case Dl:e="ENVMAP_BLENDING_MIX";break;case Ul:e="ENVMAP_BLENDING_ADD";break}return e}function Zf(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $f(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=qf(t),c=Yf(t),u=jf(t),d=Kf(t),f=Zf(t),m=t.isWebGL2?"":zf(t),_=Bf(a),x=r.createProgram();let p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),h.length>0&&(h+=`
`)):(p=[$s(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),h=[m,$s(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ff("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Ea(o),o=js(o,t),o=Ks(o,t),s=Ea(s),s=js(s,t),s=Ks(s,t),o=Zs(o),s=Zs(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ms?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ms?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=T+p+o,y=T+h+s,w=qs(r,r.VERTEX_SHADER,v),C=qs(r,r.FRAGMENT_SHADER,y);r.attachShader(x,w),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(Y){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),te=r.getShaderInfoLog(w).trim(),D=r.getShaderInfoLog(C).trim();let G=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,w,C);else{const K=Ys(r,w,"vertex"),ae=Ys(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+K+`
`+ae)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(te===""||D==="")&&(X=!1);X&&(Y.diagnostics={runnable:G,programLog:j,vertexShader:{log:te,prefix:p},fragmentShader:{log:D,prefix:h}})}r.deleteShader(w),r.deleteShader(C),q=new xr(r,x),M=Gf(r,x)}let q;this.getUniforms=function(){return q===void 0&&b(this),q};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(x,Df)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=C,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ep(e),t.set(e,i)),i}}class ep{constructor(e){this.id=Jf++,this.code=e,this.usedTimes=0}}function tp(n,e,t,i,r,a,o){const s=new No,l=new Qf,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,A,Y,j,te){const D=j.fog,G=te.geometry,X=M.isMeshStandardMaterial?j.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),ae=K&&K.mapping===Rr?K.image.height:null,J=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,I=Q!==void 0?Q.length:0;let N=0;G.morphAttributes.position!==void 0&&(N=1),G.morphAttributes.normal!==void 0&&(N=2),G.morphAttributes.color!==void 0&&(N=3);let me,_e,ne,de;if(J){const rt=ln[J];me=rt.vertexShader,_e=rt.fragmentShader}else me=M.vertexShader,_e=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const Fe=n.getRenderTarget(),Se=te.isInstancedMesh===!0,Ue=!!M.map,ke=!!M.matcap,He=!!K,U=!!M.aoMap,it=!!M.lightMap,ve=!!M.bumpMap,ye=!!M.normalMap,Le=!!M.displacementMap,Ve=!!M.emissiveMap,Ae=!!M.metalnessMap,Re=!!M.roughnessMap,Ie=M.anisotropy>0,Oe=M.clearcoat>0,Ze=M.iridescence>0,E=M.sheen>0,g=M.transmission>0,O=Ie&&!!M.anisotropyMap,oe=Oe&&!!M.clearcoatMap,re=Oe&&!!M.clearcoatNormalMap,le=Oe&&!!M.clearcoatRoughnessMap,be=Ze&&!!M.iridescenceMap,he=Ze&&!!M.iridescenceThicknessMap,xe=E&&!!M.sheenColorMap,R=E&&!!M.sheenRoughnessMap,ce=!!M.specularMap,$=!!M.specularColorMap,ze=!!M.specularIntensityMap,Pe=g&&!!M.transmissionMap,we=g&&!!M.thicknessMap,Ee=!!M.gradientMap,Me=!!M.alphaMap,qe=M.alphaTest>0,P=!!M.alphaHash,ge=!!M.extensions,ee=!!G.attributes.uv1,Z=!!G.attributes.uv2,ue=!!G.attributes.uv3;let Ne=Rn;return M.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Ne=n.toneMapping),{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:me,fragmentShader:_e,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Se,instancingColor:Se&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Fe===null?n.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:xn,map:Ue,matcap:ke,envMap:He,envMapMode:He&&K.mapping,envMapCubeUVHeight:ae,aoMap:U,lightMap:it,bumpMap:ve,normalMap:ye,displacementMap:f&&Le,emissiveMap:Ve,normalMapObjectSpace:ye&&M.normalMapType===$l,normalMapTangentSpace:ye&&M.normalMapType===Lo,metalnessMap:Ae,roughnessMap:Re,anisotropy:Ie,anisotropyMap:O,clearcoat:Oe,clearcoatMap:oe,clearcoatNormalMap:re,clearcoatRoughnessMap:le,iridescence:Ze,iridescenceMap:be,iridescenceThicknessMap:he,sheen:E,sheenColorMap:xe,sheenRoughnessMap:R,specularMap:ce,specularColorMap:$,specularIntensityMap:ze,transmission:g,transmissionMap:Pe,thicknessMap:we,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===xi,alphaMap:Me,alphaTest:qe,alphaHash:P,combine:M.combine,mapUv:Ue&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:it&&x(M.lightMap.channel),bumpMapUv:ve&&x(M.bumpMap.channel),normalMapUv:ye&&x(M.normalMap.channel),displacementMapUv:Le&&x(M.displacementMap.channel),emissiveMapUv:Ve&&x(M.emissiveMap.channel),metalnessMapUv:Ae&&x(M.metalnessMap.channel),roughnessMapUv:Re&&x(M.roughnessMap.channel),anisotropyMapUv:O&&x(M.anisotropyMap.channel),clearcoatMapUv:oe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:R&&x(M.sheenRoughnessMap.channel),specularMapUv:ce&&x(M.specularMap.channel),specularColorMapUv:$&&x(M.specularColorMap.channel),specularIntensityMapUv:ze&&x(M.specularIntensityMap.channel),transmissionMapUv:Pe&&x(M.transmissionMap.channel),thicknessMapUv:we&&x(M.thicknessMap.channel),alphaMapUv:Me&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||Ie),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:Z,vertexUv3s:ue,pointsUvs:te.isPoints===!0&&!!G.attributes.uv&&(Ue||Me),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:N,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)A.push(Y),A.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(T(A,M),v(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function T(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),A.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function y(M){const A=_[M.type];let Y;if(A){const j=ln[A];Y=Bc.clone(j.uniforms)}else Y=M.uniforms;return Y}function w(M,A){let Y;for(let j=0,te=c.length;j<te;j++){const D=c[j];if(D.cacheKey===A){Y=D,++Y.usedTimes;break}}return Y===void 0&&(Y=new $f(n,A,M,a),c.push(Y)),Y}function C(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function q(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:q}}function np(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ip(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Js(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qs(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,_,x,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=p),e++,h}function s(d,f,m,_,x,p){const h=o(d,f,m,_,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,_,x,p){const h=o(d,f,m,_,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||ip),i.length>1&&i.sort(f||Js),r.length>1&&r.sort(f||Js)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function rp(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Qs,n.set(i,[o])):r>=a.length?(o=new Qs,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ap(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function sp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let op=0;function lp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cp(n,e){const t=new ap,i=sp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const a=new z,o=new ht,s=new ht;function l(u,d){let f=0,m=0,_=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,p=0,h=0,T=0,v=0,y=0,w=0,C=0,b=0,q=0,M=0;u.sort(lp);const A=d===!0?Math.PI:1;for(let j=0,te=u.length;j<te;j++){const D=u[j],G=D.color,X=D.intensity,K=D.distance,ae=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*X*A,m+=G.g*X*A,_+=G.b*X*A;else if(D.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(D.sh.coefficients[J],X);M++}else if(D.isDirectionalLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const Q=D.shadow,I=i.get(D);I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,r.directionalShadow[x]=I,r.directionalShadowMap[x]=ae,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=J,x++}else if(D.isSpotLight){const J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(G).multiplyScalar(X*A),J.distance=K,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,r.spot[h]=J;const Q=D.shadow;if(D.map&&(r.spotLightMap[b]=D.map,b++,Q.updateMatrices(D),D.castShadow&&q++),r.spotLightMatrix[h]=Q.matrix,D.castShadow){const I=i.get(D);I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,r.spotShadow[h]=I,r.spotShadowMap[h]=ae,C++}h++}else if(D.isRectAreaLight){const J=t.get(D);J.color.copy(G).multiplyScalar(X),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),r.rectArea[T]=J,T++}else if(D.isPointLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*A),J.distance=D.distance,J.decay=D.decay,D.castShadow){const Q=D.shadow,I=i.get(D);I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,I.shadowCameraNear=Q.camera.near,I.shadowCameraFar=Q.camera.far,r.pointShadow[p]=I,r.pointShadowMap[p]=ae,r.pointShadowMatrix[p]=D.shadow.matrix,w++}r.point[p]=J,p++}else if(D.isHemisphereLight){const J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(X*A),J.groundColor.copy(D.groundColor).multiplyScalar(X*A),r.hemi[v]=J,v++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const Y=r.hash;(Y.directionalLength!==x||Y.pointLength!==p||Y.spotLength!==h||Y.rectAreaLength!==T||Y.hemiLength!==v||Y.numDirectionalShadows!==y||Y.numPointShadows!==w||Y.numSpotShadows!==C||Y.numSpotMaps!==b||Y.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=T,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+b-q,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=M,Y.directionalLength=x,Y.pointLength=p,Y.spotLength=h,Y.rectAreaLength=T,Y.hemiLength=v,Y.numDirectionalShadows=y,Y.numPointShadows=w,Y.numSpotShadows=C,Y.numSpotMaps=b,Y.numLightProbes=M,r.version=op++)}function c(u,d){let f=0,m=0,_=0,x=0,p=0;const h=d.matrixWorldInverse;for(let T=0,v=u.length;T<v;T++){const y=u[T];if(y.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),f++}else if(y.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),s.identity(),o.copy(y.matrixWorld),o.premultiply(h),s.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),m++}else if(y.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function eo(n,e){const t=new cp(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(d){i.push(d)}function s(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function up(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new eo(n,e),t.set(a,[l])):o>=s.length?(l=new eo(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class hp extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pp=`uniform sampler2D shadow_pass;
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
}`;function mp(n,e,t){let i=new Dr;const r=new et,a=new et,o=new Tt,s=new hp({depthPacking:Zl}),l=new dp,c={},u=t.maxTextureSize,d={[Pn]:Bt,[Bt]:Pn,[gn]:gn},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new kt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let h=this.type;this.render=function(w,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const q=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Cn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const j=h!==mn&&this.type===mn,te=h===mn&&this.type!==mn;for(let D=0,G=w.length;D<G;D++){const X=w[D],K=X.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const ae=K.getFrameExtents();if(r.multiply(ae),a.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ae.x),r.x=a.x*ae.x,K.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ae.y),r.y=a.y*ae.y,K.mapSize.y=a.y)),K.map===null||j===!0||te===!0){const Q=this.type!==mn?{minFilter:Ft,magFilter:Ft}:{};K.map!==null&&K.map.dispose(),K.map=new qn(r.x,r.y,Q),K.map.texture.name=X.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const J=K.getViewportCount();for(let Q=0;Q<J;Q++){const I=K.getViewport(Q);o.set(a.x*I.x,a.y*I.y,a.x*I.z,a.y*I.w),Y.viewport(o),K.updateMatrices(X,Q),i=K.getFrustum(),y(C,b,K.camera,X,this.type)}K.isPointLightShadow!==!0&&this.type===mn&&T(K,b),K.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(q,M,A)};function T(w,C){const b=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,b,f,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,b,m,x,null)}function v(w,C,b,q){let M=null;const A=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)M=A;else if(M=b.isPointLight===!0?l:s,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=M.uuid,j=C.uuid;let te=c[Y];te===void 0&&(te={},c[Y]=te);let D=te[j];D===void 0&&(D=M.clone(),te[j]=D),M=D}if(M.visible=C.visible,M.wireframe=C.wireframe,q===mn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=b}return M}function y(w,C,b,q,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===mn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const j=e.update(w),te=w.material;if(Array.isArray(te)){const D=j.groups;for(let G=0,X=D.length;G<X;G++){const K=D[G],ae=te[K.materialIndex];if(ae&&ae.visible){const J=v(w,ae,q,M);n.renderBufferDirect(b,null,j,J,w,K)}}}else if(te.visible){const D=v(w,te,q,M);n.renderBufferDirect(b,null,j,D,w,null)}}const Y=w.children;for(let j=0,te=Y.length;j<te;j++)y(Y[j],C,b,q,M)}}function gp(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const ge=new Tt;let ee=null;const Z=new Tt(0,0,0,0);return{setMask:function(ue){ee!==ue&&!P&&(n.colorMask(ue,ue,ue,ue),ee=ue)},setLocked:function(ue){P=ue},setClear:function(ue,Ne,We,rt,ct){ct===!0&&(ue*=rt,Ne*=rt,We*=rt),ge.set(ue,Ne,We,rt),Z.equals(ge)===!1&&(n.clearColor(ue,Ne,We,rt),Z.copy(ge))},reset:function(){P=!1,ee=null,Z.set(-1,0,0,0)}}}function a(){let P=!1,ge=null,ee=null,Z=null;return{setTest:function(ue){ue?Ue(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(ue){ge!==ue&&!P&&(n.depthMask(ue),ge=ue)},setFunc:function(ue){if(ee!==ue){switch(ue){case bl:n.depthFunc(n.NEVER);break;case Al:n.depthFunc(n.ALWAYS);break;case wl:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ue}},setLocked:function(ue){P=ue},setClear:function(ue){Z!==ue&&(n.clearDepth(ue),Z=ue)},reset:function(){P=!1,ge=null,ee=null,Z=null}}}function o(){let P=!1,ge=null,ee=null,Z=null,ue=null,Ne=null,We=null,rt=null,ct=null;return{setTest:function(Je){P||(Je?Ue(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Je){ge!==Je&&!P&&(n.stencilMask(Je),ge=Je)},setFunc:function(Je,pe,ut){(ee!==Je||Z!==pe||ue!==ut)&&(n.stencilFunc(Je,pe,ut),ee=Je,Z=pe,ue=ut)},setOp:function(Je,pe,ut){(Ne!==Je||We!==pe||rt!==ut)&&(n.stencilOp(Je,pe,ut),Ne=Je,We=pe,rt=ut)},setLocked:function(Je){P=Je},setClear:function(Je){ct!==Je&&(n.clearStencil(Je),ct=Je)},reset:function(){P=!1,ge=null,ee=null,Z=null,ue=null,Ne=null,We=null,rt=null,ct=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,x=[],p=null,h=!1,T=null,v=null,y=null,w=null,C=null,b=null,q=null,M=new tt(0,0,0),A=0,Y=!1,j=null,te=null,D=null,G=null,X=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,J=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ae=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ae=J>=2);let I=null,N={};const me=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ne=new Tt().fromArray(me),de=new Tt().fromArray(_e);function Fe(P,ge,ee,Z){const ue=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(P,Ne),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<ee;We++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ge+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return Ne}const Se={};Se[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(Sr),Ae(!1),Re(Na),Ue(n.CULL_FACE),Le(Cn);function Ue(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function ke(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function He(P,ge){return m[P]!==ge?(n.bindFramebuffer(P,ge),m[P]=ge,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ge),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function U(P,ge){let ee=x,Z=!1;if(P)if(ee=_.get(ge),ee===void 0&&(ee=[],_.set(ge,ee)),P.isWebGLMultipleRenderTargets){const ue=P.texture;if(ee.length!==ue.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,We=ue.length;Ne<We;Ne++)ee[Ne]=n.COLOR_ATTACHMENT0+Ne;ee.length=ue.length,Z=!0}}else ee[0]!==n.COLOR_ATTACHMENT0&&(ee[0]=n.COLOR_ATTACHMENT0,Z=!0);else ee[0]!==n.BACK&&(ee[0]=n.BACK,Z=!0);Z&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function it(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const ve={[On]:n.FUNC_ADD,[ul]:n.FUNC_SUBTRACT,[hl]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Ba]=n.MIN,ve[Ga]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ve[Ba]=P.MIN_EXT,ve[Ga]=P.MAX_EXT)}const ye={[dl]:n.ZERO,[fl]:n.ONE,[pl]:n.SRC_COLOR,[pa]:n.SRC_ALPHA,[Ml]:n.SRC_ALPHA_SATURATE,[vl]:n.DST_COLOR,[gl]:n.DST_ALPHA,[ml]:n.ONE_MINUS_SRC_COLOR,[ma]:n.ONE_MINUS_SRC_ALPHA,[xl]:n.ONE_MINUS_DST_COLOR,[_l]:n.ONE_MINUS_DST_ALPHA,[Sl]:n.CONSTANT_COLOR,[El]:n.ONE_MINUS_CONSTANT_COLOR,[yl]:n.CONSTANT_ALPHA,[Tl]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(P,ge,ee,Z,ue,Ne,We,rt,ct,Je){if(P===Cn){h===!0&&(ke(n.BLEND),h=!1);return}if(h===!1&&(Ue(n.BLEND),h=!0),P!==cl){if(P!==T||Je!==Y){if((v!==On||C!==On)&&(n.blendEquation(n.FUNC_ADD),v=On,C=On),Je)switch(P){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.ONE,n.ONE);break;case Oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case za:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,w=null,b=null,q=null,M.set(0,0,0),A=0,T=P,Y=Je}return}ue=ue||ge,Ne=Ne||ee,We=We||Z,(ge!==v||ue!==C)&&(n.blendEquationSeparate(ve[ge],ve[ue]),v=ge,C=ue),(ee!==y||Z!==w||Ne!==b||We!==q)&&(n.blendFuncSeparate(ye[ee],ye[Z],ye[Ne],ye[We]),y=ee,w=Z,b=Ne,q=We),(rt.equals(M)===!1||ct!==A)&&(n.blendColor(rt.r,rt.g,rt.b,ct),M.copy(rt),A=ct),T=P,Y=!1}function Ve(P,ge){P.side===gn?ke(n.CULL_FACE):Ue(n.CULL_FACE);let ee=P.side===Bt;ge&&(ee=!ee),Ae(ee),P.blending===xi&&P.transparent===!1?Le(Cn):Le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const Z=P.stencilWrite;c.setTest(Z),Z&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(P){j!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),j=P)}function Re(P){P!==ol?(Ue(n.CULL_FACE),P!==te&&(P===Na?n.cullFace(n.BACK):P===ll?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),te=P}function Ie(P){P!==D&&(ae&&n.lineWidth(P),D=P)}function Oe(P,ge,ee){P?(Ue(n.POLYGON_OFFSET_FILL),(G!==ge||X!==ee)&&(n.polygonOffset(ge,ee),G=ge,X=ee)):ke(n.POLYGON_OFFSET_FILL)}function Ze(P){P?Ue(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function E(P){P===void 0&&(P=n.TEXTURE0+K-1),I!==P&&(n.activeTexture(P),I=P)}function g(P,ge,ee){ee===void 0&&(I===null?ee=n.TEXTURE0+K-1:ee=I);let Z=N[ee];Z===void 0&&(Z={type:void 0,texture:void 0},N[ee]=Z),(Z.type!==P||Z.texture!==ge)&&(I!==ee&&(n.activeTexture(ee),I=ee),n.bindTexture(P,ge||Se[P]),Z.type=P,Z.texture=ge)}function O(){const P=N[I];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(P){ne.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function we(P){de.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),de.copy(P))}function Ee(P,ge){let ee=d.get(ge);ee===void 0&&(ee=new WeakMap,d.set(ge,ee));let Z=ee.get(P);Z===void 0&&(Z=n.getUniformBlockIndex(ge,P.name),ee.set(P,Z))}function Me(P,ge){const Z=d.get(ge).get(P);u.get(ge)!==Z&&(n.uniformBlockBinding(ge,Z,P.__bindingPointIndex),u.set(ge,Z))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},I=null,N={},m={},_=new WeakMap,x=[],p=null,h=!1,T=null,v=null,y=null,w=null,C=null,b=null,q=null,M=new tt(0,0,0),A=0,Y=!1,j=null,te=null,D=null,G=null,X=null,ne.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ue,disable:ke,bindFramebuffer:He,drawBuffers:U,useProgram:it,setBlending:Le,setMaterial:Ve,setFlipSided:Ae,setCullFace:Re,setLineWidth:Ie,setPolygonOffset:Oe,setScissorTest:Ze,activeTexture:E,bindTexture:g,unbindTexture:O,compressedTexImage2D:oe,compressedTexImage3D:re,texImage2D:$,texImage3D:ze,updateUBOMapping:Ee,uniformBlockBinding:Me,texStorage2D:R,texStorage3D:ce,texSubImage2D:le,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:Pe,viewport:we,reset:qe}}function _p(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,g){return h?new OffscreenCanvas(E,g):wr("canvas")}function v(E,g,O,oe){let re=1;if((E.width>oe||E.height>oe)&&(re=oe/Math.max(E.width,E.height)),re<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=g?Ar:Math.floor,be=le(re*E.width),he=le(re*E.height);x===void 0&&(x=T(be,he));const xe=O?T(be,he):x;return xe.width=be,xe.height=he,xe.getContext("2d").drawImage(E,0,0,be,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+he+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return Sa(E.width)&&Sa(E.height)}function w(E){return s?!1:E.wrapS!==rn||E.wrapT!==rn||E.minFilter!==Ft&&E.minFilter!==jt}function C(E,g){return E.generateMipmaps&&g&&E.minFilter!==Ft&&E.minFilter!==jt}function b(E){n.generateMipmap(E)}function q(E,g,O,oe,re=!1){if(s===!1)return g;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=g;if(g===n.RED&&(O===n.FLOAT&&(le=n.R32F),O===n.HALF_FLOAT&&(le=n.R16F),O===n.UNSIGNED_BYTE&&(le=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(le=n.R8UI),O===n.UNSIGNED_SHORT&&(le=n.R16UI),O===n.UNSIGNED_INT&&(le=n.R32UI),O===n.BYTE&&(le=n.R8I),O===n.SHORT&&(le=n.R16I),O===n.INT&&(le=n.R32I)),g===n.RG&&(O===n.FLOAT&&(le=n.RG32F),O===n.HALF_FLOAT&&(le=n.RG16F),O===n.UNSIGNED_BYTE&&(le=n.RG8)),g===n.RGBA){const be=re?Er:lt.getTransfer(oe);O===n.FLOAT&&(le=n.RGBA32F),O===n.HALF_FLOAT&&(le=n.RGBA16F),O===n.UNSIGNED_BYTE&&(le=be===ft?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(E,g,O){return C(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==Ft&&E.minFilter!==jt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){return E===Ft||E===Ha||E===Nr?n.NEAREST:n.LINEAR}function Y(E){const g=E.target;g.removeEventListener("dispose",Y),te(g),g.isVideoTexture&&_.delete(g)}function j(E){const g=E.target;g.removeEventListener("dispose",j),G(g)}function te(E){const g=i.get(E);if(g.__webglInit===void 0)return;const O=E.source,oe=p.get(O);if(oe){const re=oe[g.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(E),Object.keys(oe).length===0&&p.delete(O)}i.remove(E)}function D(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const O=E.source,oe=p.get(O);delete oe[g.__cacheKey],o.memory.textures--}function G(E){const g=E.texture,O=i.get(E),oe=i.get(g);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(O.__webglFramebuffer[re]))for(let le=0;le<O.__webglFramebuffer[re].length;le++)n.deleteFramebuffer(O.__webglFramebuffer[re][le]);else n.deleteFramebuffer(O.__webglFramebuffer[re]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[re])}else{if(Array.isArray(O.__webglFramebuffer))for(let re=0;re<O.__webglFramebuffer.length;re++)n.deleteFramebuffer(O.__webglFramebuffer[re]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let re=0;re<O.__webglColorRenderbuffer.length;re++)O.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[re]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,le=g.length;re<le;re++){const be=i.get(g[re]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(g[re])}i.remove(g),i.remove(E)}let X=0;function K(){X=0}function ae(){const E=X;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),X+=1,E}function J(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Q(E,g){const O=i.get(E);if(E.isVideoTexture&&Oe(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const oe=E.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(O,E,g);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function I(E,g){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Ue(O,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function N(E,g){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Ue(O,E,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function me(E,g){const O=i.get(E);if(E.version>0&&O.__version!==E.version){ke(O,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const _e={[va]:n.REPEAT,[rn]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},ne={[Ft]:n.NEAREST,[Ha]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},de={[Jl]:n.NEVER,[ac]:n.ALWAYS,[Ql]:n.LESS,[tc]:n.LEQUAL,[ec]:n.EQUAL,[rc]:n.GEQUAL,[nc]:n.GREATER,[ic]:n.NOTEQUAL};function Fe(E,g,O){if(O?(n.texParameteri(E,n.TEXTURE_WRAP_S,_e[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,_e[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,_e[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ne[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ne[g.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==rn||g.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,A(g.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,A(g.minFilter)),g.minFilter!==Ft&&g.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ft||g.minFilter!==Nr&&g.minFilter!==Vi||g.type===wn&&e.has("OES_texture_float_linear")===!1||s===!1&&g.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Se(E,g){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",Y));const oe=g.source;let re=p.get(oe);re===void 0&&(re={},p.set(oe,re));const le=J(g);if(le!==E.__cacheKey){re[le]===void 0&&(re[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),re[le].usedTimes++;const be=re[E.__cacheKey];be!==void 0&&(re[E.__cacheKey].usedTimes--,be.usedTimes===0&&D(g)),E.__cacheKey=le,E.__webglTexture=re[le].texture}return O}function Ue(E,g,O){let oe=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(oe=n.TEXTURE_3D);const re=Se(E,g),le=g.source;t.bindTexture(oe,E.__webglTexture,n.TEXTURE0+O);const be=i.get(le);if(le.version!==be.__version||re===!0){t.activeTexture(n.TEXTURE0+O);const he=lt.getPrimaries(lt.workingColorSpace),xe=g.colorSpace===Zt?null:lt.getPrimaries(g.colorSpace),R=g.colorSpace===Zt||he===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);const ce=w(g)&&y(g.image)===!1;let $=v(g.image,ce,!1,u);$=Ze(g,$);const ze=y($)||s,Pe=a.convert(g.format,g.colorSpace);let we=a.convert(g.type),Ee=q(g.internalFormat,Pe,we,g.colorSpace,g.isVideoTexture);Fe(oe,g,ze);let Me;const qe=g.mipmaps,P=s&&g.isVideoTexture!==!0,ge=be.__version===void 0||re===!0,ee=M(g,$,ze);if(g.isDepthTexture)Ee=n.DEPTH_COMPONENT,s?g.type===wn?Ee=n.DEPTH_COMPONENT32F:g.type===An?Ee=n.DEPTH_COMPONENT24:g.type===kn?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:g.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Wn&&Ee===n.DEPTH_COMPONENT&&g.type!==ba&&g.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=An,we=a.convert(g.type)),g.format===yi&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,g.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=kn,we=a.convert(g.type))),ge&&(P?t.texStorage2D(n.TEXTURE_2D,1,Ee,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,Pe,we,null));else if(g.isDataTexture)if(qe.length>0&&ze){P&&ge&&t.texStorage2D(n.TEXTURE_2D,ee,Ee,qe[0].width,qe[0].height);for(let Z=0,ue=qe.length;Z<ue;Z++)Me=qe[Z],P?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Me.width,Me.height,Pe,we,Me.data):t.texImage2D(n.TEXTURE_2D,Z,Ee,Me.width,Me.height,0,Pe,we,Me.data);g.generateMipmaps=!1}else P?(ge&&t.texStorage2D(n.TEXTURE_2D,ee,Ee,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,Pe,we,$.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,Pe,we,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ee,qe[0].width,qe[0].height,$.depth);for(let Z=0,ue=qe.length;Z<ue;Z++)Me=qe[Z],g.format!==an?Pe!==null?P?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,$.depth,Pe,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ee,Me.width,Me.height,$.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,$.depth,Pe,we,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ee,Me.width,Me.height,$.depth,0,Pe,we,Me.data)}else{P&&ge&&t.texStorage2D(n.TEXTURE_2D,ee,Ee,qe[0].width,qe[0].height);for(let Z=0,ue=qe.length;Z<ue;Z++)Me=qe[Z],g.format!==an?Pe!==null?P?t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Me.width,Me.height,Pe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Me.width,Me.height,Pe,we,Me.data):t.texImage2D(n.TEXTURE_2D,Z,Ee,Me.width,Me.height,0,Pe,we,Me.data)}else if(g.isDataArrayTexture)P?(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ee,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Pe,we,$.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,$.width,$.height,$.depth,0,Pe,we,$.data);else if(g.isData3DTexture)P?(ge&&t.texStorage3D(n.TEXTURE_3D,ee,Ee,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Pe,we,$.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,$.width,$.height,$.depth,0,Pe,we,$.data);else if(g.isFramebufferTexture){if(ge)if(P)t.texStorage2D(n.TEXTURE_2D,ee,Ee,$.width,$.height);else{let Z=$.width,ue=$.height;for(let Ne=0;Ne<ee;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ee,Z,ue,0,Pe,we,null),Z>>=1,ue>>=1}}else if(qe.length>0&&ze){P&&ge&&t.texStorage2D(n.TEXTURE_2D,ee,Ee,qe[0].width,qe[0].height);for(let Z=0,ue=qe.length;Z<ue;Z++)Me=qe[Z],P?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Pe,we,Me):t.texImage2D(n.TEXTURE_2D,Z,Ee,Pe,we,Me);g.generateMipmaps=!1}else P?(ge&&t.texStorage2D(n.TEXTURE_2D,ee,Ee,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,we,$)):t.texImage2D(n.TEXTURE_2D,0,Ee,Pe,we,$);C(g,ze)&&b(oe),be.__version=le.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ke(E,g,O){if(g.image.length!==6)return;const oe=Se(E,g),re=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const le=i.get(re);if(re.version!==le.__version||oe===!0){t.activeTexture(n.TEXTURE0+O);const be=lt.getPrimaries(lt.workingColorSpace),he=g.colorSpace===Zt?null:lt.getPrimaries(g.colorSpace),xe=g.colorSpace===Zt||be===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const R=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,$=[];for(let Z=0;Z<6;Z++)!R&&!ce?$[Z]=v(g.image[Z],!1,!0,c):$[Z]=ce?g.image[Z].image:g.image[Z],$[Z]=Ze(g,$[Z]);const ze=$[0],Pe=y(ze)||s,we=a.convert(g.format,g.colorSpace),Ee=a.convert(g.type),Me=q(g.internalFormat,we,Ee,g.colorSpace),qe=s&&g.isVideoTexture!==!0,P=le.__version===void 0||oe===!0;let ge=M(g,ze,Pe);Fe(n.TEXTURE_CUBE_MAP,g,Pe);let ee;if(R){qe&&P&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Me,ze.width,ze.height);for(let Z=0;Z<6;Z++){ee=$[Z].mipmaps;for(let ue=0;ue<ee.length;ue++){const Ne=ee[ue];g.format!==an?we!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Me,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Ne.width,Ne.height,we,Ee,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Me,Ne.width,Ne.height,0,we,Ee,Ne.data)}}}else{ee=g.mipmaps,qe&&P&&(ee.length>0&&ge++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Me,$[0].width,$[0].height));for(let Z=0;Z<6;Z++)if(ce){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,$[Z].width,$[Z].height,we,Ee,$[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Me,$[Z].width,$[Z].height,0,we,Ee,$[Z].data);for(let ue=0;ue<ee.length;ue++){const We=ee[ue].image[Z].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,We.width,We.height,we,Ee,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Me,We.width,We.height,0,we,Ee,We.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,Ee,$[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Me,we,Ee,$[Z]);for(let ue=0;ue<ee.length;ue++){const Ne=ee[ue];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,we,Ee,Ne.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Me,we,Ee,Ne.image[Z])}}}C(g,Pe)&&b(n.TEXTURE_CUBE_MAP),le.__version=re.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function He(E,g,O,oe,re,le){const be=a.convert(O.format,O.colorSpace),he=a.convert(O.type),xe=q(O.internalFormat,be,he,O.colorSpace);if(!i.get(g).__hasExternalTextures){const ce=Math.max(1,g.width>>le),$=Math.max(1,g.height>>le);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,le,xe,ce,$,g.depth,0,be,he,null):t.texImage2D(re,le,xe,ce,$,0,be,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ie(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,i.get(O).__webglTexture,0,Re(g)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,i.get(O).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(E,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer&&!g.stencilBuffer){let oe=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||Ie(g)){const re=g.depthTexture;re&&re.isDepthTexture&&(re.type===wn?oe=n.DEPTH_COMPONENT32F:re.type===An&&(oe=n.DEPTH_COMPONENT24));const le=Re(g);Ie(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,oe,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,oe,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(g.depthBuffer&&g.stencilBuffer){const oe=Re(g);O&&Ie(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,g.width,g.height):Ie(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const oe=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let re=0;re<oe.length;re++){const le=oe[re],be=a.convert(le.format,le.colorSpace),he=a.convert(le.type),xe=q(le.internalFormat,be,he,le.colorSpace),R=Re(g);O&&Ie(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,xe,g.width,g.height):Ie(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,xe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,xe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const oe=i.get(g.depthTexture).__webglTexture,re=Re(g);if(g.depthTexture.format===Wn)Ie(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(g.depthTexture.format===yi)Ie(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ve(E){const g=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");it(g.__webglFramebuffer,E)}else if(O){g.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[oe]),g.__webglDepthbuffer[oe]=n.createRenderbuffer(),U(g.__webglDepthbuffer[oe],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),U(g.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(E,g,O){const oe=i.get(E);g!==void 0&&He(oe.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ve(E)}function Le(E){const g=E.texture,O=i.get(E),oe=i.get(g);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=g.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,be=y(E)||s;if(re){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(s&&g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let xe=0;xe<g.mipmaps.length;xe++)O.__webglFramebuffer[he][xe]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(s&&g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(le)if(r.drawBuffers){const he=E.texture;for(let xe=0,R=he.length;xe<R;xe++){const ce=i.get(he[xe]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ie(E)===!1){const he=le?g:[g];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const R=he[xe];O.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[xe]);const ce=a.convert(R.format,R.colorSpace),$=a.convert(R.type),ze=q(R.internalFormat,ce,$,R.colorSpace,E.isXRRenderTarget===!0),Pe=Re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ze,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,O.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),U(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g,be);for(let he=0;he<6;he++)if(s&&g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)He(O.__webglFramebuffer[he][xe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else He(O.__webglFramebuffer[he],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);C(g,be)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const he=E.texture;for(let xe=0,R=he.length;xe<R;xe++){const ce=he[xe],$=i.get(ce);t.bindTexture(n.TEXTURE_2D,$.__webglTexture),Fe(n.TEXTURE_2D,ce,be),He(O.__webglFramebuffer,E,ce,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),C(ce,be)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,oe.__webglTexture),Fe(he,g,be),s&&g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)He(O.__webglFramebuffer[xe],E,g,n.COLOR_ATTACHMENT0,he,xe);else He(O.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,he,0);C(g,be)&&b(he),t.unbindTexture()}E.depthBuffer&&ve(E)}function Ve(E){const g=y(E)||s,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,re=O.length;oe<re;oe++){const le=O[oe];if(C(le,g)){const be=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(le).__webglTexture;t.bindTexture(be,he),b(be),t.unbindTexture()}}}function Ae(E){if(s&&E.samples>0&&Ie(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,oe=E.height;let re=n.COLOR_BUFFER_BIT;const le=[],be=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(E),xe=E.isWebGLMultipleRenderTargets===!0;if(xe)for(let R=0;R<g.length;R++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let R=0;R<g.length;R++){le.push(n.COLOR_ATTACHMENT0+R),E.depthBuffer&&le.push(be);const ce=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ce===!1&&(E.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),xe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[R]),ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[be])),xe){const $=i.get(g[R]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,O,oe,0,0,O,oe,re,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let R=0;R<g.length;R++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,he.__webglColorRenderbuffer[R]);const ce=i.get(g[R]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(d,E.samples)}function Ie(E){const g=i.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Oe(E){const g=o.render.frame;_.get(E)!==g&&(_.set(E,g),E.update())}function Ze(E,g){const O=E.colorSpace,oe=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ma||O!==xn&&O!==Zt&&(lt.getTransfer(O)===ft?s===!1?e.has("EXT_sRGB")===!0&&oe===an?(E.format=Ma,E.minFilter=jt,E.generateMipmaps=!1):g=Do.sRGBToLinear(g):(oe!==an||re!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}this.allocateTextureUnit=ae,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=me,this.rebindTextures=ye,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Ie}function vp(n,e,t){const i=t.isWebGL2;function r(a,o=Zt){let s;const l=lt.getTransfer(o);if(a===Ln)return n.UNSIGNED_BYTE;if(a===To)return n.UNSIGNED_SHORT_4_4_4_4;if(a===bo)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Gl)return n.BYTE;if(a===Hl)return n.SHORT;if(a===ba)return n.UNSIGNED_SHORT;if(a===yo)return n.INT;if(a===An)return n.UNSIGNED_INT;if(a===wn)return n.FLOAT;if(a===ki)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Vl)return n.ALPHA;if(a===an)return n.RGBA;if(a===kl)return n.LUMINANCE;if(a===Wl)return n.LUMINANCE_ALPHA;if(a===Wn)return n.DEPTH_COMPONENT;if(a===yi)return n.DEPTH_STENCIL;if(a===Ma)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Xl)return n.RED;if(a===Ao)return n.RED_INTEGER;if(a===ql)return n.RG;if(a===wo)return n.RG_INTEGER;if(a===Co)return n.RGBA_INTEGER;if(a===Fr||a===Or||a===zr||a===Br)if(l===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Va||a===ka||a===Wa||a===Xa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===qa||a===Ya)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===qa)return l===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Ya)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ja||a===Ka||a===Za||a===$a||a===Ja||a===Qa||a===es||a===ts||a===ns||a===is||a===rs||a===as||a===ss||a===os)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===ja)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ka)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Za)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===$a)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ja)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Qa)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===es)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ts)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ns)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===is)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===rs)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===as)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ss)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===os)return l===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gr||a===ls||a===cs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Gr)return l===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ls)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===cs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===jl||a===us||a===hs||a===ds)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Gr)return s.COMPRESSED_RED_RGTC1_EXT;if(a===us)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ds)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===kn?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class xp extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),h=this._getHandJoint(c,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Sp extends Wt{constructor(e,t,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:Wn,u!==Wn&&u!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wn&&(i=An),i===void 0&&u===yi&&(i=kn),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ep extends Kn{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const x=t.getContextAttributes();let p=null,h=null;const T=[],v=[],y=new Kt;y.layers.enable(1),y.viewport=new Tt;const w=new Kt;w.layers.enable(2),w.viewport=new Tt;const C=[y,w],b=new xp;b.layers.enable(1),b.layers.enable(2);let q=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let N=T[I];return N===void 0&&(N=new ca,T[I]=N),N.getTargetRaySpace()},this.getControllerGrip=function(I){let N=T[I];return N===void 0&&(N=new ca,T[I]=N),N.getGripSpace()},this.getHand=function(I){let N=T[I];return N===void 0&&(N=new ca,T[I]=N),N.getHandSpace()};function A(I){const N=v.indexOf(I.inputSource);if(N===-1)return;const me=T[N];me!==void 0&&(me.update(I.inputSource,I.frame,c||o),me.dispatchEvent({type:I.type,data:I.inputSource}))}function Y(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let I=0;I<T.length;I++){const N=v[I];N!==null&&(v[I]=null,T[I].disconnect(N))}q=null,M=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,Q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:m}),h=new qn(m.framebufferWidth,m.framebufferHeight,{format:an,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let N=null,me=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=x.stencil?yi:Wn,me=x.stencil?kn:An);const ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),h=new qn(f.textureWidth,f.textureHeight,{format:an,type:Ln,depthTexture:new Sp(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const de=e.properties.get(h);de.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(I){for(let N=0;N<I.removed.length;N++){const me=I.removed[N],_e=v.indexOf(me);_e>=0&&(v[_e]=null,T[_e].disconnect(me))}for(let N=0;N<I.added.length;N++){const me=I.added[N];let _e=v.indexOf(me);if(_e===-1){for(let de=0;de<T.length;de++)if(de>=v.length){v.push(me),_e=de;break}else if(v[de]===null){v[de]=me,_e=de;break}if(_e===-1)break}const ne=T[_e];ne&&ne.connect(me)}}const te=new z,D=new z;function G(I,N,me){te.setFromMatrixPosition(N.matrixWorld),D.setFromMatrixPosition(me.matrixWorld);const _e=te.distanceTo(D),ne=N.projectionMatrix.elements,de=me.projectionMatrix.elements,Fe=ne[14]/(ne[10]-1),Se=ne[14]/(ne[10]+1),Ue=(ne[9]+1)/ne[5],ke=(ne[9]-1)/ne[5],He=(ne[8]-1)/ne[0],U=(de[8]+1)/de[0],it=Fe*He,ve=Fe*U,ye=_e/(-He+U),Le=ye*-He;N.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Le),I.translateZ(ye),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Ve=Fe+ye,Ae=Se+ye,Re=it-Le,Ie=ve+(_e-Le),Oe=Ue*Se/Ae*Ve,Ze=ke*Se/Ae*Ve;I.projectionMatrix.makePerspective(Re,Ie,Oe,Ze,Ve,Ae),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function X(I,N){N===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(N.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;b.near=w.near=y.near=I.near,b.far=w.far=y.far=I.far,(q!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),q=b.near,M=b.far);const N=I.parent,me=b.cameras;X(b,N);for(let _e=0;_e<me.length;_e++)X(me[_e],N);me.length===2?G(b,y,w):b.projectionMatrix.copy(y.projectionMatrix),K(I,b,N)};function K(I,N,me){me===null?I.matrix.copy(N.matrixWorld):(I.matrix.copy(me.matrixWorld),I.matrix.invert(),I.matrix.multiply(N.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Wi*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)};let ae=null;function J(I,N){if(u=N.getViewerPose(c||o),_=N,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let _e=!1;me.length!==b.cameras.length&&(b.cameras.length=0,_e=!0);for(let ne=0;ne<me.length;ne++){const de=me[ne];let Fe=null;if(m!==null)Fe=m.getViewport(de);else{const Ue=d.getViewSubImage(f,de);Fe=Ue.viewport,ne===0&&(e.setRenderTargetTextures(h,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(h))}let Se=C[ne];Se===void 0&&(Se=new Kt,Se.layers.enable(ne),Se.viewport=new Tt,C[ne]=Se),Se.matrix.fromArray(de.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(de.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ne===0&&(b.matrix.copy(Se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_e===!0&&b.cameras.push(Se)}}for(let me=0;me<T.length;me++){const _e=v[me],ne=T[me];_e!==null&&ne!==void 0&&ne.update(_e,N,c||o)}ae&&ae(I,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),_=null}const Q=new Vo;Q.setAnimationLoop(J),this.setAnimationLoop=function(I){ae=I},this.dispose=function(){}}}function yp(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Bo(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),d(p,h)):h.isMeshPhongMaterial?(a(p,h),u(p,h)):h.isMeshStandardMaterial?(a(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(a(p,h),_(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),x(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&s(p,h)):h.isPointsMaterial?l(p,h,T,v):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Bt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Bt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*v,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function s(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=v*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tp(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){const y=v.program;i.uniformBlockBinding(T,y)}function c(T,v){let y=r[T.id];y===void 0&&(_(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",p));const w=v.program;i.updateUBOMapping(T,w);const C=e.render.frame;a[T.id]!==C&&(f(T),a[T.id]=C)}function u(T){const v=d();T.__bindingPointIndex=v;const y=n.createBuffer(),w=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const v=r[T.id],y=T.uniforms,w=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,b=y.length;C<b;C++){const q=y[C];if(m(q,C,w)===!0){const M=q.__offset,A=Array.isArray(q.value)?q.value:[q.value];let Y=0;for(let j=0;j<A.length;j++){const te=A[j],D=x(te);typeof te=="number"?(q.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,M+Y,q.__data)):te.isMatrix3?(q.__data[0]=te.elements[0],q.__data[1]=te.elements[1],q.__data[2]=te.elements[2],q.__data[3]=te.elements[0],q.__data[4]=te.elements[3],q.__data[5]=te.elements[4],q.__data[6]=te.elements[5],q.__data[7]=te.elements[0],q.__data[8]=te.elements[6],q.__data[9]=te.elements[7],q.__data[10]=te.elements[8],q.__data[11]=te.elements[0]):(te.toArray(q.__data,Y),Y+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,q.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,v,y){const w=T.value;if(y[v]===void 0){if(typeof w=="number")y[v]=w;else{const C=Array.isArray(w)?w:[w],b=[];for(let q=0;q<C.length;q++)b.push(C[q].clone());y[v]=b}return!0}else if(typeof w=="number"){if(y[v]!==w)return y[v]=w,!0}else{const C=Array.isArray(y[v])?y[v]:[y[v]],b=Array.isArray(w)?w:[w];for(let q=0;q<C.length;q++){const M=C[q];if(M.equals(b[q])===!1)return M.copy(b[q]),!0}}return!1}function _(T){const v=T.uniforms;let y=0;const w=16;let C=0;for(let b=0,q=v.length;b<q;b++){const M=v[b],A={boundary:0,storage:0},Y=Array.isArray(M.value)?M.value:[M.value];for(let j=0,te=Y.length;j<te;j++){const D=Y[j],G=x(D);A.boundary+=G.boundary,A.storage+=G.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,b>0){C=y%w;const j=w-C;C!==0&&j-A.boundary<0&&(y+=w-C,M.__offset=y)}y+=A.storage}return C=y%w,C>0&&(y+=w-C),T.__size=y,T.__cache={},this}function x(T){const v={boundary:0,storage:0};return typeof T=="number"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function p(T){const v=T.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class jo{constructor(e={}){const{canvas:t=Sc(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;const v=this;let y=!1,w=0,C=0,b=null,q=-1,M=null;const A=new Tt,Y=new Tt;let j=null;const te=new tt(0);let D=0,G=t.width,X=t.height,K=1,ae=null,J=null;const Q=new Tt(0,0,G,X),I=new Tt(0,0,G,X);let N=!1;const me=new Dr;let _e=!1,ne=!1,de=null;const Fe=new ht,Se=new et,Ue=new z,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return b===null?K:1}let U=i;function it(S,B){for(let k=0;k<S.length;k++){const W=S[k],H=t.getContext(W,B);if(H!==null)return H}return null}try{const S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),U=it(B,S),U===null)throw it(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,ye,Le,Ve,Ae,Re,Ie,Oe,Ze,E,g,O,oe,re,le,be,he,xe,R,ce,$,ze,Pe,we;function Ee(){ve=new Ud(U),ye=new wd(U,ve,e),ve.init(ye),ze=new vp(U,ve,ye),Le=new gp(U,ve,ye),Ve=new Fd(U),Ae=new np,Re=new _p(U,ve,Le,Ae,ye,ze,Ve),Ie=new Rd(v),Oe=new Dd(v),Ze=new qc(U,ye),Pe=new bd(U,ve,Ze,ye),E=new Id(U,Ze,Ve,Pe),g=new Gd(U,E,Ze,Ve),R=new Bd(U,ye,Re),be=new Cd(Ae),O=new tp(v,Ie,Oe,ve,ye,Pe,be),oe=new yp(v,Ae),re=new rp,le=new up(ve,ye),xe=new Td(v,Ie,Oe,Le,g,f,l),he=new mp(v,g,ye),we=new Tp(U,Ve,ye,Le),ce=new Ad(U,ve,Ve,ye),$=new Nd(U,ve,Ve,ye),Ve.programs=O.programs,v.capabilities=ye,v.extensions=ve,v.properties=Ae,v.renderLists=re,v.shadowMap=he,v.state=Le,v.info=Ve}Ee();const Me=new Ep(v,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(G,X,!1))},this.getSize=function(S){return S.set(G,X)},this.setSize=function(S,B,k=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,X=B,t.width=Math.floor(S*K),t.height=Math.floor(B*K),k===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(G*K,X*K).floor()},this.setDrawingBufferSize=function(S,B,k){G=S,X=B,K=k,t.width=Math.floor(S*k),t.height=Math.floor(B*k),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,B,k,W){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,B,k,W),Le.viewport(A.copy(Q).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(I)},this.setScissor=function(S,B,k,W){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,B,k,W),Le.scissor(Y.copy(I).multiplyScalar(K).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(S){Le.setScissorTest(N=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(S=!0,B=!0,k=!0){let W=0;if(S){let H=!1;if(b!==null){const Te=b.texture.format;H=Te===Co||Te===wo||Te===Ao}if(H){const Te=b.texture.type,Be=Te===Ln||Te===An||Te===ba||Te===kn||Te===To||Te===bo,Xe=xe.getClearColor(),Ye=xe.getClearAlpha(),$e=Xe.r,Ke=Xe.g,je=Xe.b;Be?(m[0]=$e,m[1]=Ke,m[2]=je,m[3]=Ye,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=$e,_[1]=Ke,_[2]=je,_[3]=Ye,U.clearBufferiv(U.COLOR,0,_))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT),k&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),re.dispose(),le.dispose(),Ae.dispose(),Ie.dispose(),Oe.dispose(),g.dispose(),Pe.dispose(),we.dispose(),O.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ct),Me.removeEventListener("sessionend",Je),de&&(de.dispose(),de=null),pe.stop()};function qe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Ve.autoReset,B=he.enabled,k=he.autoUpdate,W=he.needsUpdate,H=he.type;Ee(),Ve.autoReset=S,he.enabled=B,he.autoUpdate=k,he.needsUpdate=W,he.type=H}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){const B=S.target;B.removeEventListener("dispose",ee),Z(B)}function Z(S){ue(S),Ae.remove(S)}function ue(S){const B=Ae.get(S).programs;B!==void 0&&(B.forEach(function(k){O.releaseProgram(k)}),S.isShaderMaterial&&O.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,k,W,H,Te){B===null&&(B=ke);const Be=H.isMesh&&H.matrixWorld.determinant()<0,Xe=Ct(S,B,k,W,H);Le.setMaterial(W,Be);let Ye=k.index,$e=1;if(W.wireframe===!0){if(Ye=E.getWireframeAttribute(k),Ye===void 0)return;$e=2}const Ke=k.drawRange,je=k.attributes.position;let L=Ke.start*$e,F=(Ke.start+Ke.count)*$e;Te!==null&&(L=Math.max(L,Te.start*$e),F=Math.min(F,(Te.start+Te.count)*$e)),Ye!==null?(L=Math.max(L,0),F=Math.min(F,Ye.count)):je!=null&&(L=Math.max(L,0),F=Math.min(F,je.count));const V=F-L;if(V<0||V===1/0)return;Pe.setup(H,W,Xe,k,Ye);let ie,fe=ce;if(Ye!==null&&(ie=Ze.get(Ye),fe=$,fe.setIndex(ie)),H.isMesh)W.wireframe===!0?(Le.setLineWidth(W.wireframeLinewidth*He()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(H.isLine){let se=W.linewidth;se===void 0&&(se=1),Le.setLineWidth(se*He()),H.isLineSegments?fe.setMode(U.LINES):H.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else H.isPoints?fe.setMode(U.POINTS):H.isSprite&&fe.setMode(U.TRIANGLES);if(H.isInstancedMesh)fe.renderInstances(L,V,H.count);else if(k.isInstancedBufferGeometry){const se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ge=Math.min(k.instanceCount,se);fe.renderInstances(L,V,Ge)}else fe.render(L,V)};function Ne(S,B,k){S.transparent===!0&&S.side===gn&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,qt(S,B,k),S.side=Pn,S.needsUpdate=!0,qt(S,B,k),S.side=gn):qt(S,B,k)}this.compile=function(S,B,k=null){k===null&&(k=S),p=le.get(k),p.init(),T.push(p),k.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==k&&S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights);const W=new Set;return S.traverse(function(H){const Te=H.material;if(Te)if(Array.isArray(Te))for(let Be=0;Be<Te.length;Be++){const Xe=Te[Be];Ne(Xe,k,H),W.add(Xe)}else Ne(Te,k,H),W.add(Te)}),T.pop(),p=null,W},this.compileAsync=function(S,B,k=null){const W=this.compile(S,B,k);return new Promise(H=>{function Te(){if(W.forEach(function(Be){Ae.get(Be).currentProgram.isReady()&&W.delete(Be)}),W.size===0){H(S);return}setTimeout(Te,10)}ve.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let We=null;function rt(S){We&&We(S)}function ct(){pe.stop()}function Je(){pe.start()}const pe=new Vo;pe.setAnimationLoop(rt),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(S){We=S,Me.setAnimationLoop(S),S===null?pe.stop():pe.start()},Me.addEventListener("sessionstart",ct),Me.addEventListener("sessionend",Je),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(B),B=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,B,b),p=le.get(S,T.length),p.init(),T.push(p),Fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),me.setFromProjectionMatrix(Fe),ne=this.localClippingEnabled,_e=be.init(this.clippingPlanes,ne),x=re.get(S,h.length),x.init(),h.push(x),ut(S,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(ae,J),this.info.render.frame++,_e===!0&&be.beginShadows();const k=p.state.shadowsArray;if(he.render(k,S,B),_e===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(x,S),p.setupLights(v._useLegacyLights),B.isArrayCamera){const W=B.cameras;for(let H=0,Te=W.length;H<Te;H++){const Be=W[H];_t(x,S,Be,Be.viewport)}}else _t(x,S,B);b!==null&&(Re.updateMultisampleRenderTarget(b),Re.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,B),Pe.resetDefaultState(),q=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function ut(S,B,k,W){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||me.intersectsSprite(S)){W&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Fe);const Be=g.update(S),Xe=S.material;Xe.visible&&x.push(S,Be,Xe,k,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||me.intersectsObject(S))){const Be=g.update(S),Xe=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ue.copy(Be.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(Fe)),Array.isArray(Xe)){const Ye=Be.groups;for(let $e=0,Ke=Ye.length;$e<Ke;$e++){const je=Ye[$e],L=Xe[je.materialIndex];L&&L.visible&&x.push(S,Be,L,k,Ue.z,je)}}else Xe.visible&&x.push(S,Be,Xe,k,Ue.z,null)}}const Te=S.children;for(let Be=0,Xe=Te.length;Be<Xe;Be++)ut(Te[Be],B,k,W)}function _t(S,B,k,W){const H=S.opaque,Te=S.transmissive,Be=S.transparent;p.setupLightsView(k),_e===!0&&be.setGlobalState(v.clippingPlanes,k),Te.length>0&&$t(H,Te,B,k),W&&Le.viewport(A.copy(W)),H.length>0&&Qe(H,B,k),Te.length>0&&Qe(Te,B,k),Be.length>0&&Qe(Be,B,k),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function $t(S,B,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const Te=ye.isWebGL2;de===null&&(de=new qn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ki:Ln,minFilter:Vi,samples:Te?4:0})),v.getDrawingBufferSize(Se),Te?de.setSize(Se.x,Se.y):de.setSize(Ar(Se.x),Ar(Se.y));const Be=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(te),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Xe=v.toneMapping;v.toneMapping=Rn,Qe(S,k,W),Re.updateMultisampleRenderTarget(de),Re.updateRenderTargetMipmap(de);let Ye=!1;for(let $e=0,Ke=B.length;$e<Ke;$e++){const je=B[$e],L=je.object,F=je.geometry,V=je.material,ie=je.group;if(V.side===gn&&L.layers.test(W.layers)){const fe=V.side;V.side=Bt,V.needsUpdate=!0,Ot(L,k,W,F,V,ie),V.side=fe,V.needsUpdate=!0,Ye=!0}}Ye===!0&&(Re.updateMultisampleRenderTarget(de),Re.updateRenderTargetMipmap(de)),v.setRenderTarget(Be),v.setClearColor(te,D),v.toneMapping=Xe}function Qe(S,B,k){const W=B.isScene===!0?B.overrideMaterial:null;for(let H=0,Te=S.length;H<Te;H++){const Be=S[H],Xe=Be.object,Ye=Be.geometry,$e=W===null?Be.material:W,Ke=Be.group;Xe.layers.test(k.layers)&&Ot(Xe,B,k,Ye,$e,Ke)}}function Ot(S,B,k,W,H,Te){S.onBeforeRender(v,B,k,W,H,Te),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(v,B,k,W,S,Te),H.transparent===!0&&H.side===gn&&H.forceSinglePass===!1?(H.side=Bt,H.needsUpdate=!0,v.renderBufferDirect(k,B,W,H,S,Te),H.side=Pn,H.needsUpdate=!0,v.renderBufferDirect(k,B,W,H,S,Te),H.side=gn):v.renderBufferDirect(k,B,W,H,S,Te),S.onAfterRender(v,B,k,W,H,Te)}function qt(S,B,k){B.isScene!==!0&&(B=ke);const W=Ae.get(S),H=p.state.lights,Te=p.state.shadowsArray,Be=H.state.version,Xe=O.getParameters(S,H.state,Te,B,k),Ye=O.getProgramCacheKey(Xe);let $e=W.programs;W.environment=S.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(S.isMeshStandardMaterial?Oe:Ie).get(S.envMap||W.environment),$e===void 0&&(S.addEventListener("dispose",ee),$e=new Map,W.programs=$e);let Ke=$e.get(Ye);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Be)return zt(S,Xe),Ke}else Xe.uniforms=O.getUniforms(S),S.onBuild(k,Xe,v),S.onBeforeCompile(Xe,v),Ke=O.acquireProgram(Xe,Ye),$e.set(Ye,Ke),W.uniforms=Xe.uniforms;const je=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(je.clippingPlanes=be.uniform),zt(S,Xe),W.needsLights=Rt(S),W.lightsStateVersion=Be,W.needsLights&&(je.ambientLightColor.value=H.state.ambient,je.lightProbe.value=H.state.probe,je.directionalLights.value=H.state.directional,je.directionalLightShadows.value=H.state.directionalShadow,je.spotLights.value=H.state.spot,je.spotLightShadows.value=H.state.spotShadow,je.rectAreaLights.value=H.state.rectArea,je.ltc_1.value=H.state.rectAreaLTC1,je.ltc_2.value=H.state.rectAreaLTC2,je.pointLights.value=H.state.point,je.pointLightShadows.value=H.state.pointShadow,je.hemisphereLights.value=H.state.hemi,je.directionalShadowMap.value=H.state.directionalShadowMap,je.directionalShadowMatrix.value=H.state.directionalShadowMatrix,je.spotShadowMap.value=H.state.spotShadowMap,je.spotLightMatrix.value=H.state.spotLightMatrix,je.spotLightMap.value=H.state.spotLightMap,je.pointShadowMap.value=H.state.pointShadowMap,je.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ke,W.uniformsList=null,Ke}function Jt(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=xr.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function zt(S,B){const k=Ae.get(S);k.outputColorSpace=B.outputColorSpace,k.instancing=B.instancing,k.instancingColor=B.instancingColor,k.skinning=B.skinning,k.morphTargets=B.morphTargets,k.morphNormals=B.morphNormals,k.morphColors=B.morphColors,k.morphTargetsCount=B.morphTargetsCount,k.numClippingPlanes=B.numClippingPlanes,k.numIntersection=B.numClipIntersection,k.vertexAlphas=B.vertexAlphas,k.vertexTangents=B.vertexTangents,k.toneMapping=B.toneMapping}function Ct(S,B,k,W,H){B.isScene!==!0&&(B=ke),Re.resetTextureUnits();const Te=B.fog,Be=W.isMeshStandardMaterial?B.environment:null,Xe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:xn,Ye=(W.isMeshStandardMaterial?Oe:Ie).get(W.envMap||Be),$e=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ke=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),je=!!k.morphAttributes.position,L=!!k.morphAttributes.normal,F=!!k.morphAttributes.color;let V=Rn;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(V=v.toneMapping);const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=ie!==void 0?ie.length:0,se=Ae.get(W),Ge=p.state.lights;if(_e===!0&&(ne===!0||S!==M)){const At=S===M&&W.id===q;be.setState(W,S,At)}let De=!1;W.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Ge.state.version||se.outputColorSpace!==Xe||H.isInstancedMesh&&se.instancing===!1||!H.isInstancedMesh&&se.instancing===!0||H.isSkinnedMesh&&se.skinning===!1||!H.isSkinnedMesh&&se.skinning===!0||H.isInstancedMesh&&se.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&se.instancingColor===!1&&H.instanceColor!==null||se.envMap!==Ye||W.fog===!0&&se.fog!==Te||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==be.numPlanes||se.numIntersection!==be.numIntersection)||se.vertexAlphas!==$e||se.vertexTangents!==Ke||se.morphTargets!==je||se.morphNormals!==L||se.morphColors!==F||se.toneMapping!==V||ye.isWebGL2===!0&&se.morphTargetsCount!==fe)&&(De=!0):(De=!0,se.__version=W.version);let st=se.currentProgram;De===!0&&(st=qt(W,B,H));let mt=!1,St=!1,bt=!1;const ot=st.getUniforms(),Et=se.uniforms;if(Le.useProgram(st.program)&&(mt=!0,St=!0,bt=!0),W.id!==q&&(q=W.id,St=!0),mt||M!==S){ot.setValue(U,"projectionMatrix",S.projectionMatrix),ot.setValue(U,"viewMatrix",S.matrixWorldInverse);const At=ot.map.cameraPosition;At!==void 0&&At.setValue(U,Ue.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ot.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,St=!0,bt=!0)}if(H.isSkinnedMesh){ot.setOptional(U,H,"bindMatrix"),ot.setOptional(U,H,"bindMatrixInverse");const At=H.skeleton;At&&(ye.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),ot.setValue(U,"boneTexture",At.boneTexture,Re),ot.setValue(U,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cn=k.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0&&ye.isWebGL2===!0)&&R.update(H,k,st),(St||se.receiveShadow!==H.receiveShadow)&&(se.receiveShadow=H.receiveShadow,ot.setValue(U,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Et.envMap.value=Ye,Et.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),St&&(ot.setValue(U,"toneMappingExposure",v.toneMappingExposure),se.needsLights&&dt(Et,bt),Te&&W.fog===!0&&oe.refreshFogUniforms(Et,Te),oe.refreshMaterialUniforms(Et,W,K,X,de),xr.upload(U,Jt(se),Et,Re)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xr.upload(U,Jt(se),Et,Re),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ot.setValue(U,"center",H.center),ot.setValue(U,"modelViewMatrix",H.modelViewMatrix),ot.setValue(U,"normalMatrix",H.normalMatrix),ot.setValue(U,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const At=W.uniformsGroups;for(let Ci=0,Ir=At.length;Ci<Ir;Ci++)if(ye.isWebGL2){const Yi=At[Ci];we.update(Yi,st),we.bind(Yi,st)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return st}function dt(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Rt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,B,k){Ae.get(S.texture).__webglTexture=B,Ae.get(S.depthTexture).__webglTexture=k;const W=Ae.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const k=Ae.get(S);k.__webglFramebuffer=B,k.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,k=0){b=S,w=B,C=k;let W=!0,H=null,Te=!1,Be=!1;if(S){const Ye=Ae.get(S);Ye.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(U.FRAMEBUFFER,null),W=!1):Ye.__webglFramebuffer===void 0?Re.setupRenderTarget(S):Ye.__hasExternalTextures&&Re.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);const $e=S.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Be=!0);const Ke=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ke[B])?H=Ke[B][k]:H=Ke[B],Te=!0):ye.isWebGL2&&S.samples>0&&Re.useMultisampledRTT(S)===!1?H=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(Ke)?H=Ke[k]:H=Ke,A.copy(S.viewport),Y.copy(S.scissor),j=S.scissorTest}else A.copy(Q).multiplyScalar(K).floor(),Y.copy(I).multiplyScalar(K).floor(),j=N;if(Le.bindFramebuffer(U.FRAMEBUFFER,H)&&ye.drawBuffers&&W&&Le.drawBuffers(S,H),Le.viewport(A),Le.scissor(Y),Le.setScissorTest(j),Te){const Ye=Ae.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ye.__webglTexture,k)}else if(Be){const Ye=Ae.get(S.texture),$e=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.__webglTexture,k||0,$e)}q=-1},this.readRenderTargetPixels=function(S,B,k,W,H,Te,Be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){Le.bindFramebuffer(U.FRAMEBUFFER,Xe);try{const Ye=S.texture,$e=Ye.format,Ke=Ye.type;if($e!==an&&ze.convert($e)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ke===ki&&(ve.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ke!==Ln&&ze.convert(Ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===wn&&(ye.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-W&&k>=0&&k<=S.height-H&&U.readPixels(B,k,W,H,ze.convert($e),ze.convert(Ke),Te)}finally{const Ye=b!==null?Ae.get(b).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(S,B,k=0){const W=Math.pow(2,-k),H=Math.floor(B.image.width*W),Te=Math.floor(B.image.height*W);Re.setTexture2D(B,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,S.x,S.y,H,Te),Le.unbindTexture()},this.copyTextureToTexture=function(S,B,k,W=0){const H=B.image.width,Te=B.image.height,Be=ze.convert(k.format),Xe=ze.convert(k.type);Re.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment),B.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,S.x,S.y,H,Te,Be,Xe,B.image.data):B.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Be,B.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,W,S.x,S.y,Be,Xe,B.image),W===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(S,B,k,W,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=S.max.x-S.min.x+1,Be=S.max.y-S.min.y+1,Xe=S.max.z-S.min.z+1,Ye=ze.convert(W.format),$e=ze.convert(W.type);let Ke;if(W.isData3DTexture)Re.setTexture3D(W,0),Ke=U.TEXTURE_3D;else if(W.isDataArrayTexture)Re.setTexture2DArray(W,0),Ke=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);const je=U.getParameter(U.UNPACK_ROW_LENGTH),L=U.getParameter(U.UNPACK_IMAGE_HEIGHT),F=U.getParameter(U.UNPACK_SKIP_PIXELS),V=U.getParameter(U.UNPACK_SKIP_ROWS),ie=U.getParameter(U.UNPACK_SKIP_IMAGES),fe=k.isCompressedTexture?k.mipmaps[0]:k.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?U.texSubImage3D(Ke,H,B.x,B.y,B.z,Te,Be,Xe,Ye,$e,fe.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ke,H,B.x,B.y,B.z,Te,Be,Xe,Ye,fe.data)):U.texSubImage3D(Ke,H,B.x,B.y,B.z,Te,Be,Xe,Ye,$e,fe),U.pixelStorei(U.UNPACK_ROW_LENGTH,je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,L),U.pixelStorei(U.UNPACK_SKIP_PIXELS,F),U.pixelStorei(U.UNPACK_SKIP_ROWS,V),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ie),H===0&&W.generateMipmaps&&U.generateMipmap(Ke),Le.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Re.setTextureCube(S,0):S.isData3DTexture?Re.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Re.setTexture2DArray(S,0):Re.setTexture2D(S,0),Le.unbindTexture()},this.resetState=function(){w=0,C=0,b=null,Le.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Aa?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Lr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?Xn:Ro}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xn?wt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bp extends jo{}bp.prototype.isWebGL1Renderer=!0;class Ap extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Cr extends Xt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new ht,to=new ht,gr=[],no=new Zn,wp=new ht,Ui=new kt,Ii=new Ai;class Cp extends kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),no.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(no)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),Ii.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Ii)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ii.copy(this.boundingSphere),Ii.applyMatrix4(i),e.ray.intersectsSphere(Ii)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,gi),to.multiplyMatrices(i,gi),Ui.matrixWorld=to,Ui.raycast(e,gr);for(let o=0,s=gr.length;o<s;o++){const l=gr[o];l.instanceId=a,l.object=this,t.push(l)}gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const io=new z,ro=new z,ao=new ht,ua=new Ca,_r=new Ai;class Ni extends gt{constructor(e=new on,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)io.fromBufferAttribute(t,r-1),ro.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=io.distanceTo(ro);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(r),_r.radius+=a,e.ray.intersectsSphere(_r)===!1)return;ao.copy(r).invert(),ua.copy(e.ray).applyMatrix4(ao);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new z,u=new z,d=new z,f=new z,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),T=Math.min(_.count,o.start+o.count);for(let v=h,y=T-1;v<y;v+=m){const w=_.getX(v),C=_.getX(v+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,C),ua.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(f);q<e.near||q>e.far||t.push({distance:q,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let v=h,y=T-1;v<y;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),ua.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}class Rp extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Bn extends on{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const u=[],d=new z,f=new z,m=[],_=[],x=[],p=[];for(let h=0;h<=i;h++){const T=[],v=h/i;let y=0;h===0&&o===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const C=w/t;d.x=-e*Math.cos(r+C*a)*Math.sin(o+v*s),d.y=e*Math.cos(o+v*s),d.z=e*Math.sin(r+C*a)*Math.sin(o+v*s),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(C+y,1-v),T.push(c++)}u.push(T)}for(let h=0;h<i;h++)for(let T=0;T<t;T++){const v=u[h][T+1],y=u[h][T],w=u[h+1][T],C=u[h+1][T+1];(h!==0||o>0)&&m.push(v,y,C),(h!==i-1||l<Math.PI)&&m.push(y,w,C)}this.setIndex(m),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class so extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Da extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Lp extends Da{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ha=new ht,oo=new z,lo=new z;class Pp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(oo),lo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lo),t.updateMatrixWorld(),ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dp extends Pp{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Up extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Dp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ip extends Da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Np{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=co(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=co();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function co(){return(typeof performance>"u"?Date:performance).now()}class uo{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);const ho={type:"change"},da={type:"start"},fo={type:"end"},vr=new Ca,po=new bn,Fp=Math.cos(70*Mc.DEG2RAD);class Op extends Kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",g),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ho),i.update(),a=r.NONE},this.update=function(){const R=new z,ce=new Yn().setFromUnitVectors(e.up,new z(0,1,0)),$=ce.clone().invert(),ze=new z,Pe=new Yn,we=new z,Ee=2*Math.PI;return function(qe=null){const P=i.object.position;R.copy(P).sub(i.target),R.applyQuaternion(ce),s.setFromVector3(R),i.autoRotate&&a===r.NONE&&Y(M(qe)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let ge=i.minAzimuthAngle,ee=i.maxAzimuthAngle;isFinite(ge)&&isFinite(ee)&&(ge<-Math.PI?ge+=Ee:ge>Math.PI&&(ge-=Ee),ee<-Math.PI?ee+=Ee:ee>Math.PI&&(ee-=Ee),ge<=ee?s.theta=Math.max(ge,Math.min(ee,s.theta)):s.theta=s.theta>(ge+ee)/2?Math.max(ge,s.theta):Math.min(ee,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=J(s.radius):s.radius=J(s.radius*c),R.setFromSpherical(s),R.applyQuaternion($),P.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Z=!1;if(i.zoomToCursor&&C){let ue=null;if(i.object.isPerspectiveCamera){const Ne=R.length();ue=J(Ne*c);const We=Ne-ue;i.object.position.addScaledVector(y,We),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ne=new z(w.x,w.y,0);Ne.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Z=!0;const We=new z(w.x,w.y,0);We.unproject(i.object),i.object.position.sub(We).add(Ne),i.object.updateMatrixWorld(),ue=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ue).add(i.object.position):(vr.origin.copy(i.object.position),vr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(vr.direction))<Fp?e.lookAt(i.target):(po.setFromNormalAndCoplanarPoint(i.object.up,i.target),vr.intersectPlane(po,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Z=!0);return c=1,C=!1,Z||ze.distanceToSquared(i.object.position)>o||8*(1-Pe.dot(i.object.quaternion))>o||we.distanceToSquared(i.target)>0?(i.dispatchEvent(ho),ze.copy(i.object.position),Pe.copy(i.object.quaternion),we.copy(i.target),Z=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",re),i.domElement.removeEventListener("pointerdown",Ae),i.domElement.removeEventListener("pointercancel",Ie),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",Re),i.domElement.removeEventListener("pointerup",Ie),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new uo,l=new uo;let c=1;const u=new z,d=new et,f=new et,m=new et,_=new et,x=new et,p=new et,h=new et,T=new et,v=new et,y=new z,w=new et;let C=!1;const b=[],q={};function M(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function Y(R){l.theta-=R}function j(R){l.phi-=R}const te=function(){const R=new z;return function($,ze){R.setFromMatrixColumn(ze,0),R.multiplyScalar(-$),u.add(R)}}(),D=function(){const R=new z;return function($,ze){i.screenSpacePanning===!0?R.setFromMatrixColumn(ze,1):(R.setFromMatrixColumn(ze,0),R.crossVectors(i.object.up,R)),R.multiplyScalar($),u.add(R)}}(),G=function(){const R=new z;return function($,ze){const Pe=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;R.copy(we).sub(i.target);let Ee=R.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),te(2*$*Ee/Pe.clientHeight,i.object.matrix),D(2*ze*Ee/Pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(te($*(i.object.right-i.object.left)/i.object.zoom/Pe.clientWidth,i.object.matrix),D(ze*(i.object.top-i.object.bottom)/i.object.zoom/Pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ae(R){if(!i.zoomToCursor)return;C=!0;const ce=i.domElement.getBoundingClientRect(),$=R.clientX-ce.left,ze=R.clientY-ce.top,Pe=ce.width,we=ce.height;w.x=$/Pe*2-1,w.y=-(ze/we)*2+1,y.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function Q(R){d.set(R.clientX,R.clientY)}function I(R){ae(R),h.set(R.clientX,R.clientY)}function N(R){_.set(R.clientX,R.clientY)}function me(R){f.set(R.clientX,R.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;Y(2*Math.PI*m.x/ce.clientHeight),j(2*Math.PI*m.y/ce.clientHeight),d.copy(f),i.update()}function _e(R){T.set(R.clientX,R.clientY),v.subVectors(T,h),v.y>0?X(A()):v.y<0&&K(A()),h.copy(T),i.update()}function ne(R){x.set(R.clientX,R.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(x),i.update()}function de(R){ae(R),R.deltaY<0?K(A()):R.deltaY>0&&X(A()),i.update()}function Fe(R){let ce=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ce=!0;break}ce&&(R.preventDefault(),i.update())}function Se(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),ce=.5*(b[0].pageY+b[1].pageY);d.set(R,ce)}}function Ue(){if(b.length===1)_.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),ce=.5*(b[0].pageY+b[1].pageY);_.set(R,ce)}}function ke(){const R=b[0].pageX-b[1].pageX,ce=b[0].pageY-b[1].pageY,$=Math.sqrt(R*R+ce*ce);h.set(0,$)}function He(){i.enableZoom&&ke(),i.enablePan&&Ue()}function U(){i.enableZoom&&ke(),i.enableRotate&&Se()}function it(R){if(b.length==1)f.set(R.pageX,R.pageY);else{const $=xe(R),ze=.5*(R.pageX+$.x),Pe=.5*(R.pageY+$.y);f.set(ze,Pe)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;Y(2*Math.PI*m.x/ce.clientHeight),j(2*Math.PI*m.y/ce.clientHeight),d.copy(f)}function ve(R){if(b.length===1)x.set(R.pageX,R.pageY);else{const ce=xe(R),$=.5*(R.pageX+ce.x),ze=.5*(R.pageY+ce.y);x.set($,ze)}p.subVectors(x,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(x)}function ye(R){const ce=xe(R),$=R.pageX-ce.x,ze=R.pageY-ce.y,Pe=Math.sqrt($*$+ze*ze);T.set(0,Pe),v.set(0,Math.pow(T.y/h.y,i.zoomSpeed)),X(v.y),h.copy(T)}function Le(R){i.enableZoom&&ye(R),i.enablePan&&ve(R)}function Ve(R){i.enableZoom&&ye(R),i.enableRotate&&it(R)}function Ae(R){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",Re),i.domElement.addEventListener("pointerup",Ie)),le(R),R.pointerType==="touch"?O(R):Oe(R))}function Re(R){i.enabled!==!1&&(R.pointerType==="touch"?oe(R):Ze(R))}function Ie(R){be(R),b.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",Re),i.domElement.removeEventListener("pointerup",Ie)),i.dispatchEvent(fo),a=r.NONE}function Oe(R){let ce;switch(R.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case Jn.DOLLY:if(i.enableZoom===!1)return;I(R),a=r.DOLLY;break;case Jn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;N(R),a=r.PAN}else{if(i.enableRotate===!1)return;Q(R),a=r.ROTATE}break;case Jn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;Q(R),a=r.ROTATE}else{if(i.enablePan===!1)return;N(R),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(da)}function Ze(R){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;me(R);break;case r.DOLLY:if(i.enableZoom===!1)return;_e(R);break;case r.PAN:if(i.enablePan===!1)return;ne(R);break}}function E(R){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(R.preventDefault(),i.dispatchEvent(da),de(R),i.dispatchEvent(fo))}function g(R){i.enabled===!1||i.enablePan===!1||Fe(R)}function O(R){switch(he(R),b.length){case 1:switch(i.touches.ONE){case Qn.ROTATE:if(i.enableRotate===!1)return;Se(),a=r.TOUCH_ROTATE;break;case Qn.PAN:if(i.enablePan===!1)return;Ue(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Qn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;He(),a=r.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(da)}function oe(R){switch(he(R),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;it(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ve(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ve(R),i.update();break;default:a=r.NONE}}function re(R){i.enabled!==!1&&R.preventDefault()}function le(R){b.push(R)}function be(R){delete q[R.pointerId];for(let ce=0;ce<b.length;ce++)if(b[ce].pointerId==R.pointerId){b.splice(ce,1);return}}function he(R){let ce=q[R.pointerId];ce===void 0&&(ce=new et,q[R.pointerId]=ce),ce.set(R.pageX,R.pageY)}function xe(R){const ce=R.pointerId===b[0].pointerId?b[1]:b[0];return q[ce.pointerId]}i.domElement.addEventListener("contextmenu",re),i.domElement.addEventListener("pointerdown",Ae),i.domElement.addEventListener("pointercancel",Ie),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var Ut=Math.PI,pt=Ut*2,zi=Ut/180,zp=180/Ut,Bp=1440,Gp=398600.8,Vt=6378.135,vn=60/Math.sqrt(Vt*Vt*Vt/Gp),fa=Vt*vn/60,Hp=1/vn,Hn=.001082616,Vp=-253881e-11,kp=-165597e-11,Vn=Vp/Hn,Xi=2/3;function Wp(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,a=0;i>a+t[r-1]&&r<12;)a+=t[r-1],r+=1;var o=r,s=i-a,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var u=Math.floor(l),d=(l-u)*60;return{mon:o,day:s,hr:c,minute:u,sec:d}}function mo(n,e,t,i,r,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+a/60+r)/60+i)/24}function Ua(n,e,t,i,r,a,o){if(n instanceof Date){var s=n;return mo(s.getUTCFullYear(),s.getUTCMonth()+1,s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return mo(n,e,t,i,r,a,o)}function Ko(n,e){var t=n.e3,i=n.ee2,r=n.peo,a=n.pgho,o=n.pho,s=n.pinco,l=n.plo,c=n.se2,u=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,_=n.sh2,x=n.sh3,p=n.si2,h=n.si3,T=n.sl2,v=n.sl3,y=n.sl4,w=n.t,C=n.xgh2,b=n.xgh3,q=n.xgh4,M=n.xh2,A=n.xh3,Y=n.xi2,j=n.xi3,te=n.xl2,D=n.xl3,G=n.xl4,X=n.zmol,K=n.zmos,ae=e.init,J=e.opsmode,Q=e.ep,I=e.inclp,N=e.nodep,me=e.argpp,_e=e.mp,ne,de,Fe,Se,Ue,ke,He,U,it,ve,ye,Le,Ve,Ae,Re,Ie,Oe,Ze,E,g,O,oe=119459e-10,re=.01675,le=.00015835218,be=.0549;O=K+oe*w,ae==="y"&&(O=K),g=O+2*re*Math.sin(O),Oe=Math.sin(g),ve=.5*Oe*Oe-.25,ye=-.5*Oe*Math.cos(g);var he=c*ve+u*ye,xe=p*ve+h*ye,R=T*ve+v*ye+y*Oe,ce=d*ve+f*ye+m*Oe,$=_*ve+x*ye;O=X+le*w,ae==="y"&&(O=X),g=O+2*be*Math.sin(O),Oe=Math.sin(g),ve=.5*Oe*Oe-.25,ye=-.5*Oe*Math.cos(g);var ze=i*ve+t*ye,Pe=Y*ve+j*ye,we=te*ve+D*ye+G*Oe,Ee=C*ve+b*ye+q*Oe,Me=M*ve+A*ye;return Le=he+ze,Re=xe+Pe,Ie=R+we,Ve=ce+Ee,Ae=$+Me,ae==="n"&&(Le-=r,Re-=s,Ie-=l,Ve-=a,Ae-=o,I+=Re,Q+=Le,Se=Math.sin(I),Fe=Math.cos(I),I>=.2?(Ae/=Se,Ve-=Fe*Ae,me+=Ve,N+=Ae,_e+=Ie):(ke=Math.sin(N),Ue=Math.cos(N),ne=Se*ke,de=Se*Ue,He=Ae*Ue+Re*Fe*ke,U=-Ae*ke+Re*Fe*Ue,ne+=He,de+=U,N%=pt,N<0&&J==="a"&&(N+=pt),Ze=_e+me+Fe*N,it=Ie+Ve-Re*N*Se,Ze+=it,E=N,N=Math.atan2(ne,de),N<0&&J==="a"&&(N+=pt),Math.abs(E-N)>Ut&&(N<E?N+=pt:N-=pt),_e+=Ie,me=Ze-_e-Fe*N)),{ep:Q,inclp:I,nodep:N,argpp:me,mp:_e}}function Xp(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,a=n.inclp,o=n.nodep,s=n.np,l,c,u,d,f,m,_,x,p,h,T,v,y,w,C,b,q,M,A,Y,j,te,D,G,X,K,ae,J,Q,I,N,me,_e,ne,de,Fe,Se,Ue,ke,He,U,it,ve,ye,Le,Ve,Ae,Re,Ie,Oe,Ze,E,g,O,oe,re,le,be,he,xe,R,ce,$,ze=.01675,Pe=.0549,we=29864797e-13,Ee=47968065e-14,Me=.39785416,qe=.91744867,P=.1945905,ge=-.98088458,ee=s,Z=t,ue=Math.sin(o),Ne=Math.cos(o),We=Math.sin(i),rt=Math.cos(i),ct=Math.sin(a),Je=Math.cos(a),pe=Z*Z,ut=1-pe,_t=Math.sqrt(ut),$t=0,Qe=0,Ot=0,qt=0,Jt=0,zt=e+18261.5+r/1440,Ct=(4.523602-.00092422029*zt)%pt,dt=Math.sin(Ct),Rt=Math.cos(Ct),S=.91375164-.03568096*Rt,B=Math.sqrt(1-S*S),k=.089683511*dt/B,W=Math.sqrt(1-k*k),H=5.8351514+.001944368*zt,Te=.39785416*dt/B,Be=W*Rt+.91744867*k*dt;Te=Math.atan2(Te,Be),Te+=H-Ct;var Xe=Math.cos(Te),Ye=Math.sin(Te);Y=P,j=ge,G=qe,X=Me,te=Ne,D=ue,T=we;for(var $e=1/ee,Ke=0;Ke<2;)Ke+=1,l=Y*te+j*G*D,u=-j*te+Y*G*D,_=-Y*D+j*G*te,x=j*X,p=j*D+Y*G*te,h=Y*X,c=Je*_+ct*x,d=Je*p+ct*h,f=-ct*_+Je*x,m=-ct*p+Je*h,v=l*rt+c*We,y=u*rt+d*We,w=-l*We+c*rt,C=-u*We+d*rt,b=f*We,q=m*We,M=f*rt,A=m*rt,R=12*v*v-3*w*w,ce=24*v*y-6*w*C,$=12*y*y-3*C*C,E=3*(l*l+c*c)+R*pe,g=6*(l*u+c*d)+ce*pe,O=3*(u*u+d*d)+$*pe,oe=-6*l*f+pe*(-24*v*M-6*w*b),re=-6*(l*m+u*f)+pe*(-24*(y*M+v*A)+-6*(w*q+C*b)),le=-6*u*m+pe*(-24*y*A-6*C*q),be=6*c*f+pe*(24*v*b-6*w*M),he=6*(d*f+c*m)+pe*(24*(y*b+v*q)-6*(C*M+w*A)),xe=6*d*m+pe*(24*y*q-6*C*A),E=E+E+ut*R,g=g+g+ut*ce,O=O+O+ut*$,Ae=T*$e,Ve=-.5*Ae/_t,Re=Ae*_t,Le=-15*Z*Re,Ie=v*w+y*C,Oe=y*w+v*C,Ze=y*C-v*w,Ke===1&&(K=Le,ae=Ve,J=Ae,Q=Re,I=Ie,N=Oe,me=Ze,_e=E,ne=g,de=O,Fe=oe,Se=re,Ue=le,ke=be,He=he,U=xe,it=R,ve=ce,ye=$,Y=Xe,j=Ye,G=S,X=B,te=W*Ne+k*ue,D=ue*W-Ne*k,T=Ee);var je=(4.7199672+(.2299715*zt-H))%pt,L=(6.2565837+.017201977*zt)%pt,F=2*K*N,V=2*K*me,ie=2*ae*Se,fe=2*ae*(Ue-Fe),se=-2*J*ne,Ge=-2*J*(de-_e),De=-2*J*(-21-9*pe)*ze,st=2*Q*ve,mt=2*Q*(ye-it),St=-18*Q*ze,bt=-2*ae*He,ot=-2*ae*(U-ke),Et=2*Le*Oe,cn=2*Le*Ze,At=2*Ve*re,Ci=2*Ve*(le-oe),Ir=-2*Ae*g,Yi=-2*Ae*(O-E),tl=-2*Ae*(-21-9*pe)*Pe,nl=2*Re*ce,il=2*Re*($-R),rl=-18*Re*Pe,al=-2*Ve*he,sl=-2*Ve*(xe-be);return{snodm:ue,cnodm:Ne,sinim:ct,cosim:Je,sinomm:We,cosomm:rt,day:zt,e3:cn,ee2:Et,em:Z,emsq:pe,gam:H,peo:$t,pgho:qt,pho:Jt,pinco:Qe,plo:Ot,rtemsq:_t,se2:F,se3:V,sgh2:st,sgh3:mt,sgh4:St,sh2:bt,sh3:ot,si2:ie,si3:fe,sl2:se,sl3:Ge,sl4:De,s1:Le,s2:Ve,s3:Ae,s4:Re,s5:Ie,s6:Oe,s7:Ze,ss1:K,ss2:ae,ss3:J,ss4:Q,ss5:I,ss6:N,ss7:me,sz1:_e,sz2:ne,sz3:de,sz11:Fe,sz12:Se,sz13:Ue,sz21:ke,sz22:He,sz23:U,sz31:it,sz32:ve,sz33:ye,xgh2:nl,xgh3:il,xgh4:rl,xh2:al,xh3:sl,xi2:At,xi3:Ci,xl2:Ir,xl3:Yi,xl4:tl,nm:ee,z1:E,z2:g,z3:O,z11:oe,z12:re,z13:le,z21:be,z22:he,z23:xe,z31:R,z32:ce,z33:$,zmol:je,zmos:L}}function qp(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,a=n.s3,o=n.s4,s=n.s5,l=n.sinim,c=n.ss1,u=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,_=n.sz1,x=n.sz3,p=n.sz11,h=n.sz13,T=n.sz21,v=n.sz23,y=n.sz31,w=n.sz33,C=n.t,b=n.tc,q=n.gsto,M=n.mo,A=n.mdot,Y=n.no,j=n.nodeo,te=n.nodedot,D=n.xpidot,G=n.z1,X=n.z3,K=n.z11,ae=n.z13,J=n.z21,Q=n.z23,I=n.z31,N=n.z33,me=n.ecco,_e=n.eccsq,ne=n.emsq,de=n.em,Fe=n.argpm,Se=n.inclm,Ue=n.mm,ke=n.nm,He=n.nodem,U=n.irez,it=n.atime,ve=n.d2201,ye=n.d2211,Le=n.d3210,Ve=n.d3222,Ae=n.d4410,Re=n.d4422,Ie=n.d5220,Oe=n.d5232,Ze=n.d5421,E=n.d5433,g=n.dedt,O=n.didt,oe=n.dmdt,re=n.dnodt,le=n.domdt,be=n.del1,he=n.del2,xe=n.del3,R=n.xfact,ce=n.xlamo,$=n.xli,ze=n.xni,Pe,we,Ee,Me,qe,P,ge,ee,Z,ue,Ne,We,rt,ct,Je,pe,ut,_t,$t,Qe,Ot,qt,Jt,zt,Ct,dt,Rt,S,B,k,W,H,Te=17891679e-13,Be=21460748e-13,Xe=22123015e-14,Ye=17891679e-13,$e=73636953e-16,Ke=21765803e-16,je=.0043752690880113,L=37393792e-14,F=11428639e-14,V=.00015835218,ie=119459e-10;U=0,ke<.0052359877&&ke>.0034906585&&(U=1),ke>=.00826&&ke<=.00924&&de>=.5&&(U=2);var fe=c*ie*m,se=u*ie*(p+h),Ge=-ie*d*(_+x-14-6*ne),De=f*ie*(y+w-6),st=-ie*u*(T+v);(Se<.052359877||Se>Ut-.052359877)&&(st=0),l!==0&&(st/=l);var mt=De-e*st;g=fe+i*V*s,O=se+r*V*(K+ae),oe=Ge-V*a*(G+X-14-6*ne);var St=o*V*(I+N-6),bt=-V*r*(J+Q);(Se<.052359877||Se>Ut-.052359877)&&(bt=0),le=mt+St,re=st,l!==0&&(le-=e/l*bt,re+=bt/l);var ot=0,Et=(q+b*je)%pt;if(de+=g*C,Se+=O*C,Fe+=le*C,He+=re*C,Ue+=oe*C,U!==0){if(k=Math.pow(ke/vn,Xi),U===2){W=e*e;var cn=de;de=me;var At=ne;ne=_e,H=de*ne,ct=-.306-(de-.64)*.44,de<=.65?(Je=3.616-13.247*de+16.29*ne,ut=-19.302+117.39*de-228.419*ne+156.591*H,_t=-18.9068+109.7927*de-214.6334*ne+146.5816*H,$t=-41.122+242.694*de-471.094*ne+313.953*H,Qe=-146.407+841.88*de-1629.014*ne+1083.435*H,Ot=-532.114+3017.977*de-5740.032*ne+3708.276*H):(Je=-72.099+331.819*de-508.738*ne+266.724*H,ut=-346.844+1582.851*de-2415.925*ne+1246.113*H,_t=-342.585+1554.908*de-2366.899*ne+1215.972*H,$t=-1052.797+4758.686*de-7193.992*ne+3651.957*H,Qe=-3581.69+16178.11*de-24462.77*ne+12422.52*H,de>.715?Ot=-5149.66+29936.92*de-54087.36*ne+31324.56*H:Ot=1464.74-4664.75*de+3763.64*ne),de<.7?(zt=-919.2277+4988.61*de-9064.77*ne+5542.21*H,qt=-822.71072+4568.6173*de-8491.4146*ne+5337.524*H,Jt=-853.666+4690.25*de-8624.77*ne+5341.4*H):(zt=-37995.78+161616.52*de-229838.2*ne+109377.94*H,qt=-51752.104+218913.95*de-309468.16*ne+146349.42*H,Jt=-40023.88+170470.89*de-242699.48*ne+115605.82*H),Ct=l*l,Pe=.75*(1+2*e+W),we=1.5*Ct,Me=1.875*l*(1-2*e-3*W),qe=-1.875*l*(1+2*e-3*W),ge=35*Ct*Pe,ee=39.375*Ct*Ct,Z=9.84375*l*(Ct*(1-2*e-5*W)+.33333333*(-2+4*e+6*W)),ue=l*(4.92187512*Ct*(-2-4*e+10*W)+6.56250012*(1+2*e-3*W)),Ne=29.53125*l*(2-8*e+W*(-12+8*e+10*W)),We=29.53125*l*(-2-8*e+W*(12+8*e-10*W)),S=ke*ke,B=k*k,Rt=3*S*B,dt=Rt*Ye,ve=dt*Pe*ct,ye=dt*we*Je,Rt*=k,dt=Rt*L,Le=dt*Me*ut,Ve=dt*qe*_t,Rt*=k,dt=2*Rt*$e,Ae=dt*ge*$t,Re=dt*ee*Qe,Rt*=k,dt=Rt*F,Ie=dt*Z*Ot,Oe=dt*ue*Jt,dt=2*Rt*Ke,Ze=dt*Ne*qt,E=dt*We*zt,ce=(M+j+j-(Et+Et))%pt,R=A+oe+2*(te+re-je)-Y,de=cn,ne=At}U===1&&(rt=1+ne*(-2.5+.8125*ne),ut=1+2*ne,pe=1+ne*(-6+6.60937*ne),Pe=.75*(1+e)*(1+e),Ee=.9375*l*l*(1+3*e)-.75*(1+e),P=1+e,P*=1.875*P*P,be=3*ke*ke*k*k,he=2*be*Pe*rt*Te,xe=3*be*P*pe*Xe*k,be=be*Ee*ut*Be*k,ce=(M+j+t-Et)%pt,R=A+D+oe+le+re-(Y+je)),$=ce,ze=Y,it=0,ke=Y+ot}return{em:de,argpm:Fe,inclm:Se,mm:Ue,nm:ke,nodem:He,irez:U,atime:it,d2201:ve,d2211:ye,d3210:Le,d3222:Ve,d4410:Ae,d4422:Re,d5220:Ie,d5232:Oe,d5421:Ze,d5433:E,dedt:g,didt:O,dmdt:oe,dndt:ot,dnodt:re,domdt:le,del1:be,del2:he,del3:xe,xfact:R,xlamo:ce,xli:$,xni:ze}}function go(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*zi/240%pt,t<0&&(t+=pt),t}function Zo(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?go(Ua.apply(void 0,arguments)):go.apply(void 0,arguments)}function Yp(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,a=n.no,o=e*e,s=1-o,l=Math.sqrt(s),c=Math.cos(i),u=c*c,d=Math.pow(vn/a,Xi),f=.75*Hn*(3*u-1)/(l*s),m=f/(d*d),_=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(_*_),a/=1+m;var x=Math.pow(vn/a,Xi),p=Math.sin(i),h=x*s,T=1-5*u,v=-T-u-u,y=1/x,w=h*h,C=x*(1-e),b="n",q;if(r==="a"){var M=t-7305,A=Math.floor(M+1e-8),Y=M-A,j=.017202791694070362,te=1.7321343856509375,D=5075514194322695e-30,G=j+pt;q=(te+j*A+G*Y+M*M*D)%pt,q<0&&(q+=pt)}else q=Zo(t+24332815e-1);return{no:a,method:b,ainv:y,ao:x,con41:v,con42:T,cosio:c,cosio2:u,eccsq:o,omeosq:s,posq:w,rp:C,rteosq:l,sinio:p,gsto:q}}function jp(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,a=n.d3222,o=n.d4410,s=n.d4422,l=n.d5220,c=n.d5232,u=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,_=n.del2,x=n.del3,p=n.didt,h=n.dmdt,T=n.dnodt,v=n.domdt,y=n.argpo,w=n.argpdot,C=n.t,b=n.tc,q=n.gsto,M=n.xfact,A=n.xlamo,Y=n.no,j=n.atime,te=n.em,D=n.argpm,G=n.inclm,X=n.xli,K=n.mm,ae=n.xni,J=n.nodem,Q=n.nm,I=.13130908,N=2.8843198,me=.37448087,_e=5.7686396,ne=.95240898,de=1.8014998,Fe=1.050833,Se=4.4108898,Ue=.0043752690880113,ke=720,He=-720,U=259200,it,ve,ye,Le,Ve,Ae,Re,Ie,Oe=0,Ze=0,E=(q+b*Ue)%pt;if(te+=f*C,G+=p*C,D+=v*C,J+=T*C,K+=h*C,e!==0){(j===0||C*j<=0||Math.abs(C)<Math.abs(j))&&(j=0,ae=Y,X=A),C>0?it=ke:it=He;for(var g=381;g===381;)e!==2?(Re=m*Math.sin(X-I)+_*Math.sin(2*(X-N))+x*Math.sin(3*(X-me)),Ve=ae+M,Ae=m*Math.cos(X-I)+2*_*Math.cos(2*(X-N))+3*x*Math.cos(3*(X-me)),Ae*=Ve):(Ie=y+w*j,ye=Ie+Ie,ve=X+X,Re=t*Math.sin(ye+X-_e)+i*Math.sin(X-_e)+r*Math.sin(Ie+X-ne)+a*Math.sin(-Ie+X-ne)+o*Math.sin(ye+ve-de)+s*Math.sin(ve-de)+l*Math.sin(Ie+X-Fe)+c*Math.sin(-Ie+X-Fe)+u*Math.sin(Ie+ve-Se)+d*Math.sin(-Ie+ve-Se),Ve=ae+M,Ae=t*Math.cos(ye+X-_e)+i*Math.cos(X-_e)+r*Math.cos(Ie+X-ne)+a*Math.cos(-Ie+X-ne)+l*Math.cos(Ie+X-Fe)+c*Math.cos(-Ie+X-Fe)+2*(o*Math.cos(ye+ve-de)+s*Math.cos(ve-de)+u*Math.cos(Ie+ve-Se)+d*Math.cos(-Ie+ve-Se)),Ae*=Ve),Math.abs(C-j)>=ke?g=381:(Ze=C-j,g=0),g===381&&(X+=Ve*it+Re*U,ae+=Re*it+Ae*U,j+=it);Q=ae+Re*Ze+Ae*Ze*Ze*.5,Le=X+Ve*Ze+Re*Ze*Ze*.5,e!==1?(K=Le-2*J+2*E,Oe=Q-Y):(K=Le-J-D+E,Oe=Q-Y),Q=Y+Oe}return{atime:j,em:te,argpm:D,inclm:G,xli:X,mm:K,xni:ae,nodem:J,dndt:Oe,nm:Q}}function $o(n,e){var t,i,r,a,o,s,l,c,u,d,f,m,_,x,p,h,T,v,y,w,C,b,q,M,A,Y,j,te=15e-13;n.t=e,n.error=0;var D=n.mo+n.mdot*n.t,G=n.argpo+n.argpdot*n.t,X=n.nodeo+n.nodedot*n.t;u=G,C=D;var K=n.t*n.t;if(q=X+n.nodecf*K,T=1-n.cc1*n.t,v=n.bstar*n.cc4*n.t,y=n.t2cof*K,n.isimp!==1){l=n.omgcof*n.t;var ae=1+n.eta*Math.cos(D);s=n.xmcof*(ae*ae*ae-n.delmo),h=l+s,C=D+h,u=G-h,m=K*n.t,_=m*n.t,T=T-n.d2*K-n.d3*m-n.d4*_,v+=n.bstar*n.cc5*(Math.sin(C)-n.sinmao),y=y+n.t3cof*m+_*(n.t4cof+n.t*n.t5cof)}b=n.no;var J=n.ecco;if(w=n.inclo,n.method==="d"){x=n.t;var Q={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:x,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:J,argpm:u,inclm:w,xli:n.xli,mm:C,xni:n.xni,nodem:q,nm:b},I=jp(Q);J=I.em,u=I.argpm,w=I.inclm,C=I.mm,q=I.nodem,b=I.nm}if(b<=0)return n.error=2,[!1,!1];var N=Math.pow(vn/b,Xi)*T*T;if(b=vn/Math.pow(N,1.5),J-=v,J>=1||J<-.001)return n.error=1,[!1,!1];J<1e-6&&(J=1e-6),C+=n.no*y,A=C+u+q,q%=pt,u%=pt,A%=pt,C=(A-u-q)%pt;var me=Math.sin(w),_e=Math.cos(w),ne=J;if(M=w,d=u,j=q,Y=C,a=me,r=_e,n.method==="d"){var de={inclo:n.inclo,init:"n",ep:ne,inclp:M,nodep:j,argpp:d,mp:Y,opsmode:n.operationmode},Fe=Ko(n,de);if(ne=Fe.ep,j=Fe.nodep,d=Fe.argpp,Y=Fe.mp,M=Fe.inclp,M<0&&(M=-M,j+=Ut,d-=Ut),ne<0||ne>1)return n.error=3,[!1,!1]}n.method==="d"&&(a=Math.sin(M),r=Math.cos(M),n.aycof=-.5*Vn*a,Math.abs(r+1)>15e-13?n.xlcof=-.25*Vn*a*(3+5*r)/(1+r):n.xlcof=-.25*Vn*a*(3+5*r)/te);var Se=ne*Math.cos(d);h=1/(N*(1-ne*ne));var Ue=ne*Math.sin(d)+h*n.aycof,ke=Y+d+j+h*n.xlcof*Se,He=(ke-j)%pt;c=He,p=9999.9;for(var U=1;Math.abs(p)>=1e-12&&U<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*Se-i*Ue,p=(He-Ue*t+Se*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,U+=1;var it=Se*t+Ue*i,ve=Se*i-Ue*t,ye=Se*Se+Ue*Ue,Le=N*(1-ye);if(Le<0)return n.error=4,[!1,!1];var Ve=N*(1-it),Ae=Math.sqrt(N)*ve/Ve,Re=Math.sqrt(Le)/Ve,Ie=Math.sqrt(1-ye);h=ve/(1+Ie);var Oe=N/Ve*(i-Ue-Se*h),Ze=N/Ve*(t-Se+Ue*h);f=Math.atan2(Oe,Ze);var E=(Ze+Ze)*Oe,g=1-2*Oe*Oe;h=1/Le;var O=.5*Hn*h,oe=O*h;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var re=Ve*(1-1.5*oe*Ie*n.con41)+.5*O*n.x1mth2*g;if(re<1)return n.error=6,{position:!1,velocity:!1};f-=.25*oe*n.x7thm1*E;var le=j+1.5*oe*r*E,be=M+1.5*oe*r*a*g,he=Ae-b*O*n.x1mth2*E/vn,xe=Re+b*O*(n.x1mth2*g+1.5*n.con41)/vn,R=Math.sin(f),ce=Math.cos(f),$=Math.sin(le),ze=Math.cos(le),Pe=Math.sin(be),we=Math.cos(be),Ee=-$*we,Me=ze*we,qe=Ee*R+ze*ce,P=Me*R+$*ce,ge=Pe*R,ee=Ee*ce-ze*R,Z=Me*ce-$*R,ue=Pe*ce,Ne={x:re*qe*Vt,y:re*P*Vt,z:re*ge*Vt},We={x:(he*qe+xe*ee)*fa,y:(he*P+xe*Z)*fa,z:(he*ge+xe*ue)*fa};return{position:Ne,velocity:We}}function Kp(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,a=e.xbstar,o=e.xecco,s=e.xargpo,l=e.xinclo,c=e.xmo,u=e.xno,d=e.xnodeo,f,m,_,x,p,h,T,v,y,w,C,b,q,M,A,Y,j,te,D,G,X,K,ae,J,Q,I,N,me,_e,ne,de,Fe,Se,Ue,ke,He,U,it,ve,ye,Le,Ve,Ae,Re,Ie,Oe,Ze,E,g,O,oe,re,le,be,he,xe,R=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=a,n.ecco=o,n.argpo=s,n.inclo=l,n.mo=c,n.no=u,n.nodeo=d,n.operationmode=t;var ce=78/Vt+1,$=42/Vt,ze=$*$*$*$;n.init="y",n.t=0;var Pe={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},we=Yp(Pe),Ee=we.ao,Me=we.con42,qe=we.cosio,P=we.cosio2,ge=we.eccsq,ee=we.omeosq,Z=we.posq,ue=we.rp,Ne=we.rteosq,We=we.sinio;if(n.no=we.no,n.con41=we.con41,n.gsto=we.gsto,n.a=Math.pow(n.no*Hp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,ee>=0||n.no>=0){if(n.isimp=0,ue<220/Vt+1&&(n.isimp=1),N=ce,X=ze,te=(ue-1)*Vt,te<156){N=te-78,te<98&&(N=20);var rt=(120-N)/Vt;X=rt*rt*rt*rt,N=N/Vt+1}D=1/Z,Oe=1/(Ee-N),n.eta=Ee*n.ecco*Oe,b=n.eta*n.eta,C=n.ecco*n.eta,G=Math.abs(1-b),h=X*Math.pow(Oe,4),T=h/Math.pow(G,3.5),x=T*n.no*(Ee*(1+1.5*b+C*(4+b))+.375*Hn*Oe/G*n.con41*(8+3*b*(8+b))),n.cc1=n.bstar*x,p=0,n.ecco>1e-4&&(p=-2*h*Oe*Vn*n.no*We/n.ecco),n.x1mth2=1-P,n.cc4=2*n.no*T*Ee*ee*(n.eta*(2+.5*b)+n.ecco*(.5+2*b)-Hn*Oe/(Ee*G)*(-3*n.con41*(1-2*C+b*(1.5-.5*C))+.75*n.x1mth2*(2*b-C*(1+b))*Math.cos(2*n.argpo))),n.cc5=2*T*Ee*ee*(1+2.75*(b+C)+C*b),v=P*P,Ae=1.5*Hn*D*n.no,Re=.5*Ae*Hn*D,Ie=-.46875*kp*D*D*n.no,n.mdot=n.no+.5*Ae*Ne*n.con41+.0625*Re*Ne*(13-78*P+137*v),n.argpdot=-.5*Ae*Me+.0625*Re*(7-114*P+395*v)+Ie*(3-36*P+49*v),E=-Ae*qe,n.nodedot=E+(.5*Re*(4-19*P)+2*Ie*(3-7*P))*qe,Ze=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-Xi*h*n.bstar/C),n.nodecf=3.5*ee*E*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(qe+1)>15e-13?n.xlcof=-.25*Vn*We*(3+5*qe)/(1+qe):n.xlcof=-.25*Vn*We*(3+5*qe)/R,n.aycof=-.5*Vn*We;var ct=1+n.eta*Math.cos(n.mo);if(n.delmo=ct*ct*ct,n.sinmao=Math.sin(n.mo),n.x7thm1=7*P-1,2*Ut/n.no>=225){n.method="d",n.isimp=1,Le=0,A=n.inclo;var Je={epoch:r,ep:n.ecco,argpp:n.argpo,tc:Le,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},pe=Xp(Je);n.e3=pe.e3,n.ee2=pe.ee2,n.peo=pe.peo,n.pgho=pe.pgho,n.pho=pe.pho,n.pinco=pe.pinco,n.plo=pe.plo,n.se2=pe.se2,n.se3=pe.se3,n.sgh2=pe.sgh2,n.sgh3=pe.sgh3,n.sgh4=pe.sgh4,n.sh2=pe.sh2,n.sh3=pe.sh3,n.si2=pe.si2,n.si3=pe.si3,n.sl2=pe.sl2,n.sl3=pe.sl3,n.sl4=pe.sl4,m=pe.sinim,f=pe.cosim,y=pe.em,w=pe.emsq,K=pe.s1,ae=pe.s2,J=pe.s3,Q=pe.s4,I=pe.s5,me=pe.ss1,_e=pe.ss2,ne=pe.ss3,de=pe.ss4,Fe=pe.ss5,Se=pe.sz1,Ue=pe.sz3,ke=pe.sz11,He=pe.sz13,U=pe.sz21,it=pe.sz23,ve=pe.sz31,ye=pe.sz33,n.xgh2=pe.xgh2,n.xgh3=pe.xgh3,n.xgh4=pe.xgh4,n.xh2=pe.xh2,n.xh3=pe.xh3,n.xi2=pe.xi2,n.xi3=pe.xi3,n.xl2=pe.xl2,n.xl3=pe.xl3,n.xl4=pe.xl4,n.zmol=pe.zmol,n.zmos=pe.zmos,j=pe.nm,g=pe.z1,O=pe.z3,oe=pe.z11,re=pe.z13,le=pe.z21,be=pe.z23,he=pe.z31,xe=pe.z33;var ut={inclo:A,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},_t=Ko(n,ut);n.ecco=_t.ep,n.inclo=_t.inclp,n.nodeo=_t.nodep,n.argpo=_t.argpp,n.mo=_t.mp,q=0,M=0,Y=0;var $t={cosim:f,emsq:w,argpo:n.argpo,s1:K,s2:ae,s3:J,s4:Q,s5:I,sinim:m,ss1:me,ss2:_e,ss3:ne,ss4:de,ss5:Fe,sz1:Se,sz3:Ue,sz11:ke,sz13:He,sz21:U,sz23:it,sz31:ve,sz33:ye,t:n.t,tc:Le,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:Ze,z1:g,z3:O,z11:oe,z13:re,z21:le,z23:be,z31:he,z33:xe,ecco:n.ecco,eccsq:ge,em:y,argpm:q,inclm:A,mm:Y,nm:j,nodem:M,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},Qe=qp($t);n.irez=Qe.irez,n.atime=Qe.atime,n.d2201=Qe.d2201,n.d2211=Qe.d2211,n.d3210=Qe.d3210,n.d3222=Qe.d3222,n.d4410=Qe.d4410,n.d4422=Qe.d4422,n.d5220=Qe.d5220,n.d5232=Qe.d5232,n.d5421=Qe.d5421,n.d5433=Qe.d5433,n.dedt=Qe.dedt,n.didt=Qe.didt,n.dmdt=Qe.dmdt,n.dnodt=Qe.dnodt,n.domdt=Qe.domdt,n.del1=Qe.del1,n.del2=Qe.del2,n.del3=Qe.del3,n.xfact=Qe.xfact,n.xlamo=Qe.xlamo,n.xli=Qe.xli,n.xni=Qe.xni}n.isimp!==1&&(_=n.cc1*n.cc1,n.d2=4*Ee*Oe*_,Ve=n.d2*Oe*n.cc1/3,n.d3=(17*Ee+N)*Ve,n.d4=.5*Ve*Ee*Oe*(221*Ee+31*N)*n.cc1,n.t3cof=n.d2+2*_,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*_)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*_*(2*n.d2+_)))}$o(n,0),n.init="n"}function Zp(n,e){var t="i",i=1440/(2*Ut),r=0,a={};a.error=0,a.satnum=n.substring(2,7),a.epochyr=parseInt(n.substring(18,20),10),a.epochdays=parseFloat(n.substring(20,32)),a.ndot=parseFloat(n.substring(33,43)),a.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),a.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),a.inclo=parseFloat(e.substring(8,16)),a.nodeo=parseFloat(e.substring(17,25)),a.ecco=parseFloat(".".concat(e.substring(26,33))),a.argpo=parseFloat(e.substring(34,42)),a.mo=parseFloat(e.substring(43,51)),a.no=parseFloat(e.substring(52,63)),a.no/=i,a.inclo*=zi,a.nodeo*=zi,a.argpo*=zi,a.mo*=zi,a.epochyr<57?r=a.epochyr+2e3:r=a.epochyr+1900;var o=Wp(r,a.epochdays),s=o.mon,l=o.day,c=o.hr,u=o.minute,d=o.sec;return a.jdsatepoch=Ua(r,s,l,c,u,d),Kp(a,{opsmode:t,satn:a.satnum,epoch:a.jdsatepoch-24332815e-1,xbstar:a.bstar,xecco:a.ecco,xargpo:a.argpo,xinclo:a.inclo,xmo:a.mo,xno:a.no,xnodeo:a.nodeo}),a}function $p(n){return Jp(n)||Qp(n)||em(n)||tm()}function Jp(n){if(Array.isArray(n))return ya(n)}function Qp(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function em(n,e){if(n){if(typeof n=="string")return ya(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ya(n,e)}}function ya(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function tm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),a=Ua.apply(void 0,$p(r)),o=(a-i.jdsatepoch)*Bp;return $o(i,o)}function Jo(n){return n*zp}function im(n){if(n<-Ut/2||n>Ut/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return Jo(n)}function rm(n){if(n<-Ut||n>Ut)throw new RangeError("Longitude radians must be in range [-pi; pi].");return Jo(n)}function am(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),a=(t-i)/t,o=2*a-a*a,s=Math.atan2(n.y,n.x)-e;s<-Ut;)s+=pt;for(;s>Ut;)s-=pt;for(var l=20,c=0,u=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(u)*Math.sin(u))),u=Math.atan2(n.z+t*d*o*Math.sin(u),r),c+=1;var f=r/Math.cos(u)-t*d;return{longitude:s,latitude:u,height:f}}var sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function om(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qo={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(sm,function(){var t=function(){function i(m){return o.appendChild(m.dom),m}function r(m){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===m?"block":"none";a=m}var a=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++a%o.children.length)},!1);var s=(performance||Date).now(),l=s,c=0,u=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-s,200),m>l+1e3&&(u.update(1e3*c/(m-l),100),l=m,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return m},update:function(){s=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,a){var o=1/0,s=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,d=48*c,f=3*c,m=2*c,_=3*c,x=15*c,p=74*c,h=30*c,T=document.createElement("canvas");T.width=u,T.height=d,T.style.cssText="width:80px;height:48px";var v=T.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=a,v.fillRect(0,0,u,d),v.fillStyle=r,v.fillText(i,f,m),v.fillRect(_,x,p,h),v.fillStyle=a,v.globalAlpha=.9,v.fillRect(_,x,p,h),{dom:T,update:function(y,w){o=Math.min(o,y),s=Math.max(s,y),v.fillStyle=a,v.globalAlpha=1,v.fillRect(0,0,u,x),v.fillStyle=r,v.fillText(l(y)+" "+i+" ("+l(o)+"-"+l(s)+")",f,m),v.drawImage(T,_+c,x,p-c,h,_,x,p-c,h),v.fillRect(_+p-c,x,c,h),v.fillStyle=a,v.globalAlpha=.9,v.fillRect(_+p-c,x,c,l((1-y/w)*h))}}},t})})(Qo);var lm=Qo.exports;const cm=om(lm),el=Math.sqrt(3),um=.5*(el-1),Fi=(3-el)/6,_o=n=>Math.floor(n)|0,vo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function hm(n=Math.random){const e=dm(n),t=new Float64Array(e).map(r=>vo[r%12*2]),i=new Float64Array(e).map(r=>vo[r%12*2+1]);return function(a,o){let s=0,l=0,c=0;const u=(a+o)*um,d=_o(a+u),f=_o(o+u),m=(d+f)*Fi,_=d-m,x=f-m,p=a-_,h=o-x;let T,v;p>h?(T=1,v=0):(T=0,v=1);const y=p-T+Fi,w=h-v+Fi,C=p-1+2*Fi,b=h-1+2*Fi,q=d&255,M=f&255;let A=.5-p*p-h*h;if(A>=0){const te=q+e[M],D=t[te],G=i[te];A*=A,s=A*A*(D*p+G*h)}let Y=.5-y*y-w*w;if(Y>=0){const te=q+T+e[M+v],D=t[te],G=i[te];Y*=Y,l=Y*Y*(D*y+G*w)}let j=.5-C*C-b*b;if(j>=0){const te=q+1+e[M+1],D=t[te],G=i[te];j*=j,c=j*j*(D*C+G*b)}return 70*(s+l+c)}}function dm(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),a=t[i];t[i]=t[r],t[r]=a}for(let i=256;i<512;i++)t[i]=t[i-256];return t}function fm(n,e){let t,i,r,a,o,s,l,c=[],u,d,f,m="smallScale",_,x,p=!0,h=!1,T,v="orbitClass";const y=66,w=2;let C,b;const q=6371,M=1,A=M/q,Y=2*Math.PI/86400,j=23.44*(Math.PI/180),te=27.32*24*3600,D=2*Math.PI/te;let G=1,X;const K=new cm;K.showPanel(0),K.dom.id="statistics",window.addEventListener("keydown",L=>{(L.key==="R"||L.key==="r")&&(p=!p)}),window.addEventListener("keydown",L=>{(L.key==="W"||L.key==="w")&&(h=!h,a.traverse(function(F){F.isMesh&&(F.material.wireframe=h,F.material.needsUpdate=!0)}))});function ae(){u=new Op(i,r.domElement),u.enableDamping=!0,u.enablePan=!1,u.dampingFactor=.25,u.rotateSpeed=.25,u.minDistance=5,u.maxDistance=100,J(u)}function J(L){u.enabled=!1,L&&(L.enabled=!0)}async function Q(){t=new Ap,i=new Kt(5,window.innerWidth/window.innerHeight,.1,3e5),i.position.set(0,0,800),i.position.z=66,r=new jo({alpha:!1}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(12632256,0),r.shadowMap.enabled=!0,r.shadowMap.type=Mo,document.getElementById(n).appendChild(r.domElement),ae(),ge(),await Ne(),I(),_e(),me(ee,A),a=new Gn,a.rotation.z=j,t.add(a),o=new Gn,t.add(o),Rt(),ke(),it(),S(),Ke(),window.addEventListener("resize",je,!1),je(),await Ie("config/classification_config.json"),g(v),_t()}function I(){const L=new Ip(4210752,1);t.add(L),C=new Up(5987163,100),C.castShadow=!0,t.add(C);const F=new Lp(16777147,526368,5.5);t.add(F);const V=M*109*G,ie=new Bn(V,24,24),fe=new Ra({color:16776960,emissive:16753920,opacity:.25,transparent:!0,wireframe:!0,alphaHash:!0});s=new kt(ie,fe),t.add(s);const se=new Gn;t.add(se),se.add(s),se.add(C)}function N(L){return L.getTime()/864e5+24405875e-1}function me(L,F){const ie=(N(L)-2451545)/36525,fe=280.46646+ie*(36000.76983+ie*3032e-7),se=357.52911+ie*(35999.05029-1537e-7*ie),Ge=(1.914602-ie*(.004817+14e-6*ie))*Math.sin(se*(Math.PI/180))+(.019993-101e-6*ie)*Math.sin(2*se*(Math.PI/180))+289e-6*Math.sin(3*se*(Math.PI/180)),De=fe+Ge,st=23.44*(Math.PI/180),mt=Math.cos(De*(Math.PI/180)),St=Math.cos(st)*Math.sin(De*(Math.PI/180)),bt=Math.sin(st)*Math.sin(De*(Math.PI/180)),ot=1,Et=new z(mt*ot,bt*ot,-St*ot).multiplyScalar(F*1496e5);s.position.copy(Et),C.position.copy(Et),C.target.position.set(0,0,0),C.target.updateMatrixWorld()}function _e(){const L=1496e5*A*G;s.position.set(L,0,0),C.position.copy(s.position)}const ne=new hm;let de=0;const Fe=1e-5,Se=.002;function Ue(){de+=Fe;const L=ne(de,0)*Se,F=ne(0,de)*Se,V=ne(de,de)*Se;s.rotation.x+=L,s.rotation.y+=F,s.rotation.z+=V}function ke(){const L=M*.273,F=new so({color:9079434,roughness:1,metalness:1.25}),V=new Bn(L,32,32);X=new kt(V,F),o.add(X)}function He(){if(!X)return;const F=384400*A*G,ie=ee.getTime()/1e3*D%(2*Math.PI),fe=.0549,se=F*(Math.cos(ie)-fe),Ge=F*Math.sin(ie)*Math.sqrt(1-fe**2);let De=new z(se,0,Ge);const st=5.145*(Math.PI/180);De.applyAxisAngle(new z(1,0,0),st),De.applyAxisAngle(new z(0,0,1),j),X.position.copy(De)}let U;function it(){const L=["Navigation","Communications","Scientific","Space Stations","Weather & Earth Resources","Debris"];Promise.all(L.map(F=>ve(F))).then(F=>{const V=F.flat();Le(V),console.log("Successfully loaded and processed all satellite data."),e(),g(v)}).catch(F=>{console.error("Failed to load some satellite data:",F),console.log("Attempting to load data from local cache..."),fetch("cache/active.json").then(V=>{if(!V.ok)throw new Error("Local cache fetch failed");return V.json()}).then(Le).catch(V=>{console.error("Failed to load satellite data from both server and local cache:",V),e()})})}async function ve(L){const F=`https://orbital-bbfd.onrender.com/satellites/${L}`;try{const V=await fetch(F);if(!V.ok)throw new Error(`Failed to load data for ${L}`);const ie=await V.json(),fe=ye(L,ie);return console.log(`Loaded and flattened data for ${L}`),fe}catch(V){return console.warn(`Error loading data for ${L}:`,V),[]}}function ye(L,F){const V=[];return F.data&&typeof F.data=="object"?Object.entries(F.data).forEach(([ie,fe])=>{Array.isArray(fe)?fe.forEach(se=>{se.tleLine1&&se.tleLine2?V.push({name:se.name||"Unknown",tleLine1:se.tleLine1,tleLine2:se.tleLine2,country:se.country||"Unknown",orbitClass:se.orbitClass||"Unknown",group_major:L||"Unknown",group_minor:ie||"Unknown"}):console.warn("Satellite missing TLE data:",se)}):console.warn(`Expected an array of satellites under group_minor: ${ie}, but got:`,fe)}):console.warn(`Expected a 'data' object for group_major: ${L}, but got:`,F.data),V}function Le(L){if(!Array.isArray(L)||L.length===0){console.error("No valid satellite data to process.");return}const F={group_major:new Set,group_minor:new Set,orbitClass:new Set,country:new Set};L.forEach(V=>{V.metadata={satrec:Ve(V.tleLine1,V.tleLine2),orbitClass:V.orbitClass.toLowerCase(),country:V.country.toLowerCase(),group_major:V.group_major.toLowerCase(),group_minor:V.group_minor.toLowerCase()},F.group_major.add(V.metadata.group_major),F.group_minor.add(V.metadata.group_minor),F.orbitClass.add(V.metadata.orbitClass),F.country.add(V.metadata.country)}),Re(F),R(L)}function Ve(L,F){try{return Zp(L.trim(),F.trim())}catch(V){return console.warn("Failed to create Satrec from TLE:",{tleLine1:L,tleLine2:F},V),null}}function Ae(L){const F={};for(const[V,ie]of Object.entries(L))F[V]={colors:Object.fromEntries(Object.entries(ie.colors).map(([fe,se])=>[fe.trim().toLowerCase(),parseInt(se,10)||16711680]))};return F}function Re(L){for(const[F,{colors:V}]of Object.entries(T)){const ie=L[F];if(ie)for(const fe of Object.keys(V))ie.has(fe)||delete V[fe]}}async function Ie(L){try{const F=await fetch(L);if(!F.ok)throw new Error(`Failed to load classification config from ${L}: ${F.statusText}`);const V=await F.json();T=Ae(V),console.log("Classification schemes initialized:",T)}catch(F){console.error("Error initializing classification schemes:",F),T={}}}function Oe(L,F){const{colors:V}=T[L],ie=(F[L]||"unknown").toString().trim().toLowerCase(),fe=V[ie];return fe?new tt(fe):(console.warn(`No color found for category '${ie}' in scheme '${L}'. Defaulting to red.`),new tt(16711680))}function Ze(L,F,V){if(!L||!L.count){console.error("InstancedMesh is not properly initialized.");return}const ie=new gt,fe=new Float32Array(L.count*3);V.forEach((se,Ge)=>{if(Ge>=L.count){console.warn(`Instance index ${Ge} exceeds InstancedMesh count (${L.count}).`);return}if(!se.metadata){console.warn(`Satellite at index ${Ge} is missing metadata. Skipping.`);return}const De=Oe(v,se.metadata),st=new tt(De);try{L.getMatrixAt(Ge,ie.matrix)}catch(mt){console.error(`Error accessing matrix for instance ${Ge}:`,mt);return}ie.updateMatrix(),se.originalMatrix=ie.matrix.clone(),L.setMatrixAt(Ge,ie.matrix),fe.set(st.toArray(),Ge*3)}),L.instanceColor=new Cr(fe,3),L.instanceMatrix.needsUpdate=!0}document.getElementById("orbit-class").addEventListener("click",()=>{E("orbitClass")}),document.getElementById("group-major").addEventListener("click",()=>{E("group_major")}),document.getElementById("group-minor").addEventListener("click",()=>{E("group_minor")}),document.getElementById("owner-country").addEventListener("click",()=>{E("country")});function E(L){if(!U||!U.count){console.error("Satellite mesh is not initialized or empty. Cannot switch classification.");return}v&&he(),v=L,Ze(U,v,c),he(),xe(U),Ee(U),g(v)}function g(L){const F=document.getElementById("legend-container");F.innerHTML="";const V=T[L];if(!V){console.warn(`Scheme '${L}' not found.`),F.innerHTML="<p>No legend available for the selected scheme.</p>";return}const{colors:ie}=V;Object.keys(ie).sort().forEach(se=>{const Ge=ie[se],De=document.createElement("div");De.className="legend-item";const st=document.createElement("div");st.className="legend-color",st.style.backgroundColor=`#${parseInt(Ge).toString(16).padStart(6,"0")}`;const mt=document.createElement("span");mt.textContent=se,De.addEventListener("click",()=>{O(L,se,De)}),De.appendChild(st),De.appendChild(mt),F.appendChild(De)})}function O(L,F,V){const ie=document.getElementById("legend-container"),fe=ie.querySelector(".legend-item.active");fe===V?(V.classList.remove("active"),re(ie),he()):(fe&&fe.classList.remove("active"),V.classList.add("active"),oe(ie,V),be(L,F)),le(),P()}function oe(L,F){L.querySelectorAll(".legend-item").forEach(V=>{V!==F?V.classList.add("inactive"):V.classList.remove("inactive")})}function re(L){L.querySelectorAll(".legend-item").forEach(F=>{F.classList.remove("inactive")})}function le(){const L=new gt;U.userData.forEach((F,V)=>{!F||!F.metadata||(F.visible?(U.getMatrixAt(V,L.matrix),U.setMatrixAt(V,L.matrix)):U.setMatrixAt(V,new ht))}),U.instanceMatrix.needsUpdate=!0}function be(L,F){const{colors:V}=T[L],ie=F.trim().toLowerCase();V[ie]&&(U.userData.forEach((fe,se)=>{const Ge=(fe.metadata[L]||"unknown").toString().trim().toLowerCase();fe.visible=Ge===ie}),le())}function he(L){U.userData.forEach(F=>{F&&(F.visible=!0)}),le()}function xe(L){const F=L.instanceColor.array;L.userData.forEach((V,ie)=>{const fe=new tt(Oe(v,V.metadata));F.set(fe.toArray(),ie*3)}),L.instanceColor.needsUpdate=!0}function R(L){console.log("Satellite count:",L.length);const F=new Rp({metalness:.3,roughness:.2,transparent:!1,wireframe:!0});U=we(L,F,m==="smallScale"),U&&U.count>0?(console.log("Consolidated satellite mesh created and added to the scene."),a.add(U)):console.error("Failed to create satellite mesh or no instances were added.")}function ce(L,F){const V=nm(L,ee);if(!V.position)return null;const ie=am(V.position,F),fe=ie.height*A*G,se=im(ie.latitude),Ge=rm(ie.longitude);return Te(se,Ge,M+fe)}const $=new Dr,ze=new ht;function Pe(L){i.updateMatrixWorld();const F=1.2,V=i.projectionMatrix.clone();if(V.scale(new z(F,F,1)),ze.multiplyMatrices(V,i.matrixWorldInverse),$.setFromProjectionMatrix(ze),!$.containsPoint(L))return!1;const ie=new z(0,0,0),fe=L.clone().sub(ie).normalize(),se=i.position.clone().sub(ie).normalize();return!(fe.dot(se)<.1)}function we(L,F,V=!1){console.log("Creating instanced mesh. Satellite count:",L.length);const ie=L.length;if(ie===0)return console.error("No satellites to create instanced mesh."),null;const fe=V?new Bn(.0035,2,3):new Bn(.004,2,3),se=new Cp(fe,F,ie),Ge=new Float32Array(ie*3),De=new gt;return se.userData=[],L.forEach((st,mt)=>{try{De.position.set(0,0,0),De.updateMatrix(),se.setMatrixAt(mt,De.matrix);const St=new tt(Oe(v,st.metadata));Ge.set(St.toArray(),mt*3),se.userData[mt]={metadata:st.metadata,visible:!0}}catch(St){console.error(`Error initializing satellite ${st.name}:`,St),se.userData[mt]=null}}),se.instanceColor=new Cr(Ge,3),se.instanceMatrix.needsUpdate=!0,se.instanceColor.needsUpdate=!0,se}function Ee(L){const F=Zo(ee),V=new gt;let ie=new z(0,0,0);for(let fe=0;fe<L.count;fe++){const{metadata:se,visible:Ge}=L.userData[fe];if(!se)continue;const De=ce(se.satrec,F);De&&(V.position.copy(De),V.updateMatrix(),Ge?L.setMatrixAt(fe,V.matrix):L.setMatrixAt(fe,new ht),m!=="smallScale"&&qe(fe,De,ie,Ge))}L.instanceMatrix.needsUpdate=!0}const Me=new Map;function qe(L,F,V,ie){if(!ie){if(Me.has(L)){const De=Me.get(L);a.remove(De),De.geometry.dispose(),De.material.dispose(),Me.delete(L)}return}if(!Me.has(L)){const De=U.instanceColor.array,st=new tt(De[L*3],De[L*3+1],De[L*3+2]),mt=new on,St=new Float32Array(6);mt.setAttribute("position",new Xt(St,3));const bt=new Mr({color:st,transparent:!1,alphaHash:!0}),ot=new Ni(mt,bt);a.add(ot),Me.set(L,ot)}const se=Me.get(L),Ge=se.geometry.attributes.position.array;Ge[0]=V.x,Ge[1]=V.y,Ge[2]=V.z,Ge[3]=F.x,Ge[4]=F.y,Ge[5]=F.z,se.geometry.attributes.position.needsUpdate=!0}function P(){Me.forEach((L,F)=>{const{metadata:V,visible:ie}=U.userData[F];if(!V)return;if(!(ie&&Pe(U.userData[F].position))){L.visible&&(L.visible=!1);return}const se=U.instanceColor.array,Ge=new tt(se[F*3],se[F*3+1],se[F*3+2]);L.material.color=Ge,L.material.needsUpdate=!0,L.visible=!0})}function ge(){const L=window.innerWidth<=768;u.enabled?(u.minDistance=L?50:5,u.maxDistance=L?500:100):d.enabled||d.enabled||f.enabled,i.position.z=L?y*w:y}let ee;const Z=1e3/20;let ue=1e3;function Ne(){return fetch("https://orbital-bbfd.onrender.com/timestamps").then(L=>{if(!L.ok)throw new Error("Failed to fetch timestamps from server");return L.json()}).then(L=>{const F=Math.max(...Object.values(L).filter(ie=>ie>0)),V=L.PAYLOAD||null;if(!F&&!V)throw new Error("No valid timestamps found in server response");ee=new Date(F||V),document.getElementById("simulation-time").textContent=ee.toUTCString().replace("GMT","UTC")}).catch(L=>(console.error("Error loading timestamps from server, attempting local cache:",L),fetch("cache/timestamps.json").then(F=>{if(!F.ok)throw new Error("Failed to fetch timestamps from local cache");return F.json()}).then(F=>{const V=Math.max(...Object.values(F).filter(fe=>fe>0)),ie=F.PAYLOAD||null;if(!V&&!ie)throw new Error("No valid timestamps found in local cache");ee=new Date(V||ie),document.getElementById("simulation-time").textContent=ee.toUTCString().replace("GMT","UTC")}).catch(F=>{console.error("Error loading timestamps from local cache, using hardcoded fallback:",F),ee=new Date("2024-11-01T00:00:00Z"),document.getElementById("simulation-time").textContent=ee.toUTCString().replace("GMT","UTC")})))}function We(){ee=new Date(ee.getTime()+Z*ue);const L=ee.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=L,me(ee,A)}function rt(){if(p){const F=ee.getTime()/1e3%86400*Y%(2*Math.PI);a.rotation.set(0,0,0),a.rotateZ(j),a.rotateY(F)}}let ct=new Np,Je=0,ut=1/20;function _t(){if(Je+=ct.getDelta(),Je>ut){if(K.begin(),l=requestAnimationFrame(_t),We(),rt(),zt(),U&&Ee(U),He(),Ue(),_e(),me(ee,A),m==="fixed"){const{lat:L,lon:F}=chapterConfig.fixed.coordinates[$t];(L!==_||F!==x)&&(Ct(L,F),_=L,x=F)}u.enabled&&u.update(),r.render(t,i),K.end(),Je=Je%ut}requestAnimationFrame(_t)}let $t="newYork";const Qe={smallScale:{activate:()=>{J(u),u.enablePan=!1,i.lookAt(new z(0,0,0)),i.updateProjectionMatrix(),u.target.set(0,0,0),u.update(),dt("smallScale")}},largeScale:{activate:()=>{J(u),u.enablePan=!0,u.target.set(0,1,0);const L=i.position.distanceTo(u.target);u.minDistance=L,u.update(),dt("largeScale")}},fixed:{cities:{newYork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},tokyo:{lat:35.6895,lon:139.6917}},activate:L=>{const{lat:F,lon:V}=Qe.fixed.cities[L];Ct(F,V),J(f),dt("fixed")}}};let Ot={position:new z,zoom:1};function qt(){Me.forEach((L,F)=>{a.remove(L),L.geometry.dispose(),L.material.dispose()}),Me.clear()}function Jt(L,F){m!==L&&(Ot.position.copy(i.position),Ot.zoom=i.zoom,L==="fixed"&&Qe.fixed.activate(F),L==="smallScale"?(qt(),Qe[L].activate()):L==="largeScale"&&(Qe[L].activate(),i.position.copy(Ot.position),i.zoom=Ot.zoom,i.updateProjectionMatrix()),m=L)}function zt(){const L=i.position.length(),F=M*8;L<F&&m!=="largeScale"?Jt("largeScale"):L>=F&&m!=="smallScale"&&Jt("smallScale")}function Ct(L,F){const ie=Te(L,F,M);i.position.copy(ie),i.lookAt(new z(0,0,0)),i.updateProjectionMatrix()}function dt(L){var V;(V=Qe[L])!=null&&V.controls}function Rt(){const L=new Bn(M,64,64),F=new so({color:0,opacity:1,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:h});b=new kt(L,F),b.castShadow=!0,b.receiveShadow=!0,a.add(b)}return Q(),{dispose(){window.removeEventListener("resize",je),cancelAnimationFrame(l);const L=document.getElementById(n);L&&r.domElement&&L.removeChild(r.domElement)}};async function S(){console.log("Attempting to load data...");const L=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_graticules_5.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson","data/ne_50m_ocean.geojson"];try{const F=L.map(V=>fetch(V).then(ie=>{if(!ie.ok)throw new Error(`Network response was not ok for ${V}`);return ie.json()}).then(ie=>(B(V,ie),"loaded")).catch(ie=>{throw console.error(`Error loading ${V}:`,ie),ie}));await Promise.all(F),console.log("All GeoJSON data loaded successfully.")}catch(F){console.error("Failed to load some GeoJSON data:",F)}}function B(L,F){switch(L){case"data/ne_110m_graticules_5.geojson":console.log("Loaded graticules:",F),W(F);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",F),k(F);break;case"data/ne_110m_land.geojson":break;case"data/ne_50m_ocean.geojson":console.log("loaded ocean:",F);break;default:console.warn("Unrecognized GeoJSON URL:",L);break}}function k(L){const F=new Mr({color:16777215,opacity:.75,alphaHash:!0}),V=1;L.features.forEach(ie=>{const fe=ie.geometry.coordinates;if(ie.geometry.type==="LineString"){const se=H(fe,V),Ge=new Ni(se,F);a.add(Ge)}else ie.geometry.type==="MultiLineString"&&fe.forEach(se=>{const Ge=H(se,V),De=new Ni(Ge,F);a.add(De)})})}function W(L){const F=new Mr({color:4473924,opacity:.5,alphaHash:!0,visible:!0,transparent:!1}),V=M;L.features.forEach(ie=>{const fe=ie.geometry.coordinates;if(ie.geometry.type==="LineString"){const se=H(fe,V),Ge=new Ni(se,F);a.add(Ge)}else ie.geometry.type==="MultiLineString"&&fe.forEach(se=>{const Ge=H(se,V),De=new Ni(Ge,F);a.add(De)})})}function H(L,F){const V=new on,ie=[];L.forEach(([se,Ge])=>{const De=Te(Ge,se,F);ie.push(De.x,De.y,De.z)});const fe=new Float32Array(ie);return V.setAttribute("position",new Xt(fe,3)),V}function Te(L,F,V){const ie=(90-L)*(Math.PI/180),fe=(F+180)*(Math.PI/180),se=-V*Math.sin(ie)*Math.cos(fe),Ge=V*Math.sin(ie)*Math.sin(fe),De=V*Math.cos(ie);return new z(se,De,Ge)}function Be(L,F){let V;return function(...ie){clearTimeout(V),V=setTimeout(()=>L.apply(this,ie),F)}}function Xe(L,F=2e4){const fe=Math.log(1),Ge=(Math.log(F)-fe)/100;return Math.exp(fe+Ge*(L-0))}function Ye(L,F,V){return(Math.log10(L)-F)/(V-F)*100}function $e(L,F,V){const ie=F+L/100*(V-F);return Math.pow(10,ie)}function Ke(){const L=document.getElementById("exaggeration-slider"),F=document.getElementById("exaggeration-value"),V=1;function ie(){return m==="fixed"?{minExp:Math.log10(.05),maxExp:Math.log10(1)}:{minExp:Math.log10(.1),maxExp:Math.log10(25)}}let{minExp:fe,maxExp:se}=ie();L.value=Ye(V,fe,se),G=V,F.textContent=G.toFixed(2)+"x",L.addEventListener("input",bt=>{const ot=parseFloat(bt.target.value);({minExp:fe,maxExp:se}=ie()),G=$e(ot,fe,se),F.textContent=G.toFixed(2)+"x",U&&Be(Ee(U),10)});const Ge=document.getElementById("speed-slider"),De=document.getElementById("speed-value"),st=1;Ge.value=0,ue=st,De.textContent=ue.toFixed(0)+"x";function mt(){return m==="smallScale"?2e4:500}Ge.addEventListener("input",bt=>{const ot=parseFloat(bt.target.value),Et=mt();ue=Xe(ot,Et),De.textContent=ue.toFixed(0)+"x";let cn=ee.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=cn,document.getElementById("simulation-time").textContent=ee.toUTCString().replace("GMT","UTC")}),document.getElementById("reset-button").addEventListener("click",()=>{({minExp:fe,maxExp:se}=ie()),L.value=Ye(V,fe,se),G=V,F.textContent=G.toFixed(2)+"x",Ge.value=0,ue=st,De.textContent=ue.toFixed(0)+"x",U&&Be(Ee(U),10)})}function je(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight);const L=window.innerWidth<=768;i.position.z=L?y*w:y}}const pm="threeContainer1",Ia=document.createElement("div");Ia.id="loadingOverlay";Ia.innerHTML='<div id="loadingText">Loading</div>';document.body.appendChild(Ia);function mm(){const n=document.getElementById("loadingText"),e=setInterval(()=>{n.textContent+="."},50);return console.log("Loading animation started"),()=>{clearInterval(e),console.log("Loading animation stopped")}}const gm=mm();function _m(){setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none",gm()},100)}fm(pm,_m);
