(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="158",Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ol=0,Fa=1,ll=2,xo=1,Mo=2,gn=3,Dn=0,Ht=1,_n=2,Rn=0,Mi=1,Oa=2,za=3,Ba=4,cl=5,zn=100,ul=101,hl=102,Ha=103,Ga=104,dl=200,fl=201,pl=202,ml=203,ma=204,ga=205,gl=206,_l=207,vl=208,xl=209,Ml=210,Sl=211,El=212,yl=213,Tl=214,bl=0,Al=1,wl=2,Sr=3,Cl=4,Rl=5,Ll=6,Pl=7,So=0,Dl=1,Ul=2,Ln=0,Il=1,Nl=2,Fl=3,Ol=4,zl=5,Eo=300,Ei=301,yi=302,_a=303,va=304,Rr=306,xa=1e3,sn=1001,Ma=1002,zt=1003,Va=1004,Nr=1005,Zt=1006,Bl=1007,ki=1008,Pn=1009,Hl=1010,Gl=1011,Aa=1012,yo=1013,wn=1014,Cn=1015,Wi=1016,To=1017,bo=1018,Wn=1020,Vl=1021,on=1023,kl=1024,Wl=1025,Xn=1026,Ti=1027,Xl=1028,Ao=1029,ql=1030,wo=1031,Co=1033,Fr=33776,Or=33777,zr=33778,Br=33779,ka=35840,Wa=35841,Xa=35842,qa=35843,Yl=36196,Ya=37492,ja=37496,Ka=37808,Za=37809,$a=37810,Ja=37811,Qa=37812,es=37813,ts=37814,ns=37815,is=37816,rs=37817,as=37818,ss=37819,os=37820,ls=37821,Hr=36492,cs=36494,us=36495,jl=36283,hs=36284,ds=36285,fs=36286,Ro=3e3,qn=3001,Kl=3200,Zl=3201,Lo=0,$l=1,Jt="",Rt="srgb",Mn="srgb-linear",wa="display-p3",Lr="display-p3-linear",Er="linear",gt="srgb",yr="rec709",Tr="p3",ei=7680,ps=519,Jl=512,Ql=513,ec=514,tc=515,nc=516,ic=517,rc=518,ac=519,ms=35044,gs="300 es",Sa=1035,vn=2e3,br=2001;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _s=1234567;const Hi=Math.PI/180,Xi=180/Math.PI;function Ai(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Ca(n,e){return(n%e+e)%e}function sc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function oc(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function lc(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function cc(n,e=1){return e-Math.abs(Ca(n,e*2)-e)}function uc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fc(n,e){return n+Math.random()*(e-n)}function pc(n){return n*(.5-Math.random())}function mc(n){n!==void 0&&(_s=n);let e=_s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gc(n){return n*Hi}function _c(n){return n*Xi}function Ea(n){return(n&n-1)===0&&n!==0}function vc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ar(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xc(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),h=o((e+i)/2),d=a((e-i)/2),f=o((e-i)/2),m=a((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(s*h,l*d,l*f,s*c);break;case"YZY":n.set(l*f,s*h,l*d,s*c);break;case"ZXZ":n.set(l*d,l*f,s*h,s*c);break;case"XZX":n.set(s*h,l*_,l*m,s*c);break;case"YXY":n.set(l*m,s*h,l*_,s*c);break;case"ZYZ":n.set(l*_,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Mc={DEG2RAD:Hi,RAD2DEG:Xi,generateUUID:Ai,clamp:It,euclideanModulo:Ca,mapLinear:sc,inverseLerp:oc,lerp:Gi,damp:lc,pingpong:cc,smoothstep:uc,smootherstep:hc,randInt:dc,randFloat:fc,randFloatSpread:pc,seededRandom:mc,degToRad:gc,radToDeg:_c,isPowerOfTwo:Ea,ceilPowerOfTwo:vc,floorPowerOfTwo:Ar,setQuaternionFromProperEuler:xc,normalize:Ft,denormalize:vi};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,r,a,o,s,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],T=r[1],v=r[4],y=r[7],b=r[2],C=r[5],A=r[8];return a[0]=o*x+s*T+l*b,a[3]=o*p+s*v+l*C,a[6]=o*u+s*y+l*A,a[1]=c*x+h*T+d*b,a[4]=c*p+h*v+d*C,a[7]=c*u+h*y+d*A,a[2]=f*x+m*T+_*b,a[5]=f*p+m*v+_*C,a[8]=f*u+m*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*a*h+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=h*o-s*c,f=s*l-h*a,m=c*a-o*l,_=t*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-h*i)*x,e[2]=(s*i-r*o)*x,e[3]=f*x,e[4]=(h*t-r*l)*x,e[5]=(r*a-s*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new st;function Po(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sc(){const n=wr("canvas");return n.style.display="block",n}const vs={};function Vi(n){n in vs||(vs[n]=!0,console.warn(n))}const xs=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ms=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[Mn]:{transfer:Er,primaries:yr,toReference:n=>n,fromReference:n=>n},[Rt]:{transfer:gt,primaries:yr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lr]:{transfer:Er,primaries:Tr,toReference:n=>n.applyMatrix3(Ms),fromReference:n=>n.applyMatrix3(xs)},[wa]:{transfer:gt,primaries:Tr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ms),fromReference:n=>n.applyMatrix3(xs).convertLinearToSRGB()}},Ec=new Set([Mn,Lr]),ht={enabled:!0,_workingColorSpace:Mn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ec.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ki[e].toReference,r=Ki[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ki[n].primaries},getTransfer:function(n){return n===Jt?Er:Ki[n].transfer}};function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ti;class Do{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=wr("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Si(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yc=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(kr(r[o].image)):a.push(kr(r[o]))}else a=kr(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Do.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class qt extends Zn{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=sn,r=sn,a=Zt,o=ki,s=on,l=Pn,c=qt.DEFAULT_ANISOTROPY,h=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Ai(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qn?Rt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?qn:Ro}set encoding(e){Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qn?Rt:Jt}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Eo;qt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,b=(u+1)/2,C=(h+f)/4,A=(d+x)/4,V=(_+p)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=C/i,a=A/i):y>b?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=C/r,a=V/r):b<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),i=A/a,r=V/a),this.set(i,r,a,t),this}let T=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-x)/T,this.z=(f-h)/T,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bc extends Zn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Vi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qn?Rt:Jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends bc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Io extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ac extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=a[o+0],m=a[o+1],_=a[o+2],x=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==f||c!==m||h!==_){let p=1-s;const u=l*f+c*m+h*_+d*x,T=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,u*T);p=Math.sin(p*C)/b,s=Math.sin(s*C)/b}const y=s*T;if(l=l*p+f*y,c=c*p+m*y,h=h*p+_*y,d=d*p+x*y,p===1-s){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=a[o],f=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+h*d+l*m-c*f,e[t+1]=l*_+h*f+c*d-s*m,e[t+2]=c*_+h*m+s*f-l*d,e[t+3]=h*_-s*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),d=s(a/2),f=l(i/2),m=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(a-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(o-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+r*c-a*l,this._y=r*h+o*l+a*s-i*c,this._z=a*h+o*c+i*l-r*s,this._w=o*h-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ss.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ss.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),h=2*(s*t-a*r),d=2*(a*i-o*t);return this.x=t+l*c+o*d-s*h,this.y=i+l*h+s*c-a*d,this.z=r+l*d+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new O,Ss=new jn;class $n{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(a,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zi.copy(i.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),$i.subVectors(this.max,Li),ni.subVectors(e.a,Li),ii.subVectors(e.b,Li),ri.subVectors(e.c,Li),Sn.subVectors(ii,ni),En.subVectors(ri,ii),Un.subVectors(ni,ri);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Un.z,Un.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Un.z,0,-Un.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Un.y,Un.x,0];return!Xr(t,ni,ii,ri,$i)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,ni,ii,ri,$i))?!1:(Ji.crossVectors(Sn,En),t=[Ji.x,Ji.y,Ji.z],Xr(t,ni,ii,ri,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new O,new O,new O,new O,new O,new O,new O,new O],tn=new O,Zi=new $n,ni=new O,ii=new O,ri=new O,Sn=new O,En=new O,Un=new O,Li=new O,$i=new O,Ji=new O,In=new O;function Xr(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){In.fromArray(n,a);const s=r.x*Math.abs(In.x)+r.y*Math.abs(In.y)+r.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const wc=new $n,Pi=new O,qr=new O;class wi{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(qr)),this.expandByPoint(Pi.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new O,Yr=new O,Qi=new O,yn=new O,jr=new O,er=new O,Kr=new O;class Ra{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Yr);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Qi),s=yn.dot(this.direction),l=-yn.dot(Qi),c=yn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,_;if(h>0)if(d=o*l-s,f=o*s-l,_=a*h,d>=0)if(f>=-_)if(f<=_){const x=1/h;d*=x,f*=x,m=d*(d+o*f+2*s)+f*(o*d+f+2*l)+c}else f=a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c);else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yr).addScaledVector(Qi,f),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,r,a){jr.subVectors(t,e),er.subVectors(i,e),Kr.crossVectors(jr,er);let o=this.direction.dot(Kr),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=s*this.direction.dot(er.crossVectors(yn,er));if(l<0)return null;const c=s*this.direction.dot(jr.cross(yn));if(c<0||l+c>o)return null;const h=-s*yn.dot(Kr);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,a,o,s,l,c,h,d,f,m,_,x,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,h,d,f,m,_,x,p)}set(e,t,i,r,a,o,s,l,c,h,d,f,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),a=1/ai.setFromMatrixColumn(e,1).length(),o=1/ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=o*h,m=o*d,_=s*h,x=s*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-s*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,_=c*h,x=c*d;t[0]=f+x*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-s,t[2]=m*s-_,t[6]=x+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,_=c*h,x=c*d;t[0]=f-x*s,t[4]=-o*d,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*h,t[9]=x-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,_=s*h,x=s*d;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=s*l,x=s*c;t[0]=l*h,t[4]=x-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*d+_,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,m=o*c,_=s*l,x=s*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=s*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cc,e,Rc)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Tn.crossVectors(i,Vt),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Tn.crossVectors(i,Vt)),Tn.normalize(),tr.crossVectors(Vt,Tn),r[0]=Tn.x,r[4]=tr.x,r[8]=Vt.x,r[1]=Tn.y,r[5]=tr.y,r[9]=Vt.y,r[2]=Tn.z,r[6]=tr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],T=i[3],v=i[7],y=i[11],b=i[15],C=r[0],A=r[4],V=r[8],M=r[12],w=r[1],j=r[5],K=r[9],ie=r[13],P=r[2],G=r[6],Y=r[10],$=r[14],ae=r[3],ee=r[7],te=r[11],I=r[15];return a[0]=o*C+s*w+l*P+c*ae,a[4]=o*A+s*j+l*G+c*ee,a[8]=o*V+s*K+l*Y+c*te,a[12]=o*M+s*ie+l*$+c*I,a[1]=h*C+d*w+f*P+m*ae,a[5]=h*A+d*j+f*G+m*ee,a[9]=h*V+d*K+f*Y+m*te,a[13]=h*M+d*ie+f*$+m*I,a[2]=_*C+x*w+p*P+u*ae,a[6]=_*A+x*j+p*G+u*ee,a[10]=_*V+x*K+p*Y+u*te,a[14]=_*M+x*ie+p*$+u*I,a[3]=T*C+v*w+y*P+b*ae,a[7]=T*A+v*j+y*G+b*ee,a[11]=T*V+v*K+y*Y+b*te,a[15]=T*M+v*ie+y*$+b*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+a*l*d-r*c*d-a*s*f+i*c*f+r*s*m-i*l*m)+x*(+t*l*m-t*c*f+a*o*f-r*o*m+r*c*h-a*l*h)+p*(+t*c*d-t*s*m-a*o*d+i*o*m+a*s*h-i*c*h)+u*(-r*s*h-t*l*d+t*s*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],T=d*p*c-x*f*c+x*l*m-s*p*m-d*l*u+s*f*u,v=_*f*c-h*p*c-_*l*m+o*p*m+h*l*u-o*f*u,y=h*x*c-_*d*c+_*s*m-o*x*m-h*s*u+o*d*u,b=_*d*l-h*x*l-_*s*f+o*x*f+h*s*p-o*d*p,C=t*T+i*v+r*y+a*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=T*A,e[1]=(x*f*a-d*p*a-x*r*m+i*p*m+d*r*u-i*f*u)*A,e[2]=(s*p*a-x*l*a+x*r*c-i*p*c-s*r*u+i*l*u)*A,e[3]=(d*l*a-s*f*a-d*r*c+i*f*c+s*r*m-i*l*m)*A,e[4]=v*A,e[5]=(h*p*a-_*f*a+_*r*m-t*p*m-h*r*u+t*f*u)*A,e[6]=(_*l*a-o*p*a-_*r*c+t*p*c+o*r*u-t*l*u)*A,e[7]=(o*f*a-h*l*a+h*r*c-t*f*c-o*r*m+t*l*m)*A,e[8]=y*A,e[9]=(_*d*a-h*x*a-_*i*m+t*x*m+h*i*u-t*d*u)*A,e[10]=(o*x*a-_*s*a+_*i*c-t*x*c-o*i*u+t*s*u)*A,e[11]=(h*s*a-o*d*a-h*i*c+t*d*c+o*i*m-t*s*m)*A,e[12]=b*A,e[13]=(h*x*r-_*d*r+_*i*f-t*x*f-h*i*p+t*d*p)*A,e[14]=(_*s*r-o*x*r-_*i*l+t*x*l+o*i*p-t*s*p)*A,e[15]=(o*d*r-h*s*r+h*i*l-t*d*l-o*i*f+t*s*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*o,0,c*l-r*s,h*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,d=s+s,f=a*c,m=a*h,_=a*d,x=o*h,p=o*d,u=s*d,T=l*c,v=l*h,y=l*d,b=i.x,C=i.y,A=i.z;return r[0]=(1-(x+u))*b,r[1]=(m+y)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(f+u))*C,r[6]=(p+T)*C,r[7]=0,r[8]=(_+v)*A,r[9]=(p-T)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=ai.set(r[0],r[1],r[2]).length();const o=ai.set(r[4],r[5],r[6]).length(),s=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/a,h=1/o,d=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=vn){const l=this.elements,c=2*a/(t-e),h=2*a/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(s===vn)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===br)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=vn){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-a),f=(t+e)*c,m=(i+r)*h;let _,x;if(s===vn)_=(o+a)*d,x=-2*d;else if(s===br)_=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ai=new O,nn=new dt,Cc=new O(0,0,0),Rc=new O(1,1,1),Tn=new O,tr=new O,Vt=new O,Es=new dt,ys=new jn;class Pr{constructor(e=0,t=0,i=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(It(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Es.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Es,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ys.setFromEuler(this),this.setFromQuaternion(ys,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lc=0;const Ts=new O,si=new jn,fn=new dt,nr=new O,Di=new O,Pc=new O,Dc=new jn,bs=new O(1,0,0),As=new O(0,1,0),ws=new O(0,0,1),Uc={type:"added"},Ic={type:"removed"};class xt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new O,t=new Pr,i=new jn,r=new O(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new st}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(bs,e)}rotateY(e){return this.rotateOnAxis(As,e)}rotateZ(e){return this.rotateOnAxis(ws,e)}translateOnAxis(e,t){return Ts.copy(e).applyQuaternion(this.quaternion),this.position.add(Ts.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bs,e)}translateY(e){return this.translateOnAxis(As,e)}translateZ(e){return this.translateOnAxis(ws,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nr.copy(e):nr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Di,nr,this.up):fn.lookAt(nr,Di,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),si.setFromRotationMatrix(fn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Pc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new O(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new O,pn=new O,Zr=new O,mn=new O,oi=new O,li=new O,Cs=new O,$r=new O,Jr=new O,Qr=new O;let ir=!1;class an{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){rn.subVectors(r,t),pn.subVectors(i,t),Zr.subVectors(e,t);const o=rn.dot(rn),s=rn.dot(pn),l=rn.dot(Zr),c=pn.dot(pn),h=pn.dot(Zr),d=o*c-s*s;if(d===0)return a.set(-2,-1,-1);const f=1/d,m=(c*l-s*h)*f,_=(o*h-s*l)*f;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,i,r,a,o,s,l){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,mn),l.setScalar(0),l.addScaledVector(a,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(s,mn.z),l}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),pn.subVectors(e,t),rn.cross(pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),rn.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),an.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return an.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;oi.subVectors(r,i),li.subVectors(a,i),$r.subVectors(e,i);const l=oi.dot($r),c=li.dot($r);if(l<=0&&c<=0)return t.copy(i);Jr.subVectors(e,r);const h=oi.dot(Jr),d=li.dot(Jr);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(oi,o);Qr.subVectors(e,a);const m=oi.dot(Qr),_=li.dot(Qr);if(_>=0&&m<=_)return t.copy(a);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(li,s);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Cs.subVectors(a,r),s=(d-h)/(d-h+(m-_)),t.copy(r).addScaledVector(Cs,s);const u=1/(p+x+f);return o=x*u,s=f*u,t.copy(i).addScaledVector(oi,o).addScaledVector(li,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=Ca(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=ea(o,a,e+1/3),this.g=ea(o,a,e),this.b=ea(o,a,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=Fo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ht.fromWorkingColorSpace(Ut.copy(this),e),Math.round(It(Ut.r*255,0,255))*65536+Math.round(It(Ut.g*255,0,255))*256+Math.round(It(Ut.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,a=Ut.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=h<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Rt){ht.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(rr);const i=Gi(bn.h,rr.h,t),r=Gi(bn.s,rr.s,t),a=Gi(bn.l,rr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new et;et.NAMES=Fo;let Nc=0;class Ci extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Mi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ps,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ma&&(i.blendSrc=this.blendSrc),this.blendDst!==ga&&(i.blendDst=this.blendDst),this.blendEquation!==zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ps&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class La extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new O,ar=new Qe;class Yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ms,this.updateRange={offset:0,count:-1},this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ms&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Oo extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zo extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fc=0;const Kt=new dt,ta=new xt,ci=new O,kt=new $n,Ui=new $n,bt=new O;class Qt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Po(e)?zo:Oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new st().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];kt.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ui.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(kt.min,Ui.min),kt.expandByPoint(bt),bt.addVectors(kt.max,Ui.max),kt.expandByPoint(bt)):(kt.expandByPoint(Ui.min),kt.expandByPoint(Ui.max))}kt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)bt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)bt.fromBufferAttribute(s,c),l&&(ci.fromBufferAttribute(e,c),bt.add(ci)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<s;w++)c[w]=new O,h[w]=new O;const d=new O,f=new O,m=new O,_=new Qe,x=new Qe,p=new Qe,u=new O,T=new O;function v(w,j,K){d.fromArray(r,w*3),f.fromArray(r,j*3),m.fromArray(r,K*3),_.fromArray(o,w*2),x.fromArray(o,j*2),p.fromArray(o,K*2),f.sub(d),m.sub(d),x.sub(_),p.sub(_);const ie=1/(x.x*p.y-p.x*x.y);isFinite(ie)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(ie),T.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(ie),c[w].add(u),c[j].add(u),c[K].add(u),h[w].add(T),h[j].add(T),h[K].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,j=y.length;w<j;++w){const K=y[w],ie=K.start,P=K.count;for(let G=ie,Y=ie+P;G<Y;G+=3)v(i[G+0],i[G+1],i[G+2])}const b=new O,C=new O,A=new O,V=new O;function M(w){A.fromArray(a,w*3),V.copy(A);const j=c[w];b.copy(j),b.sub(A.multiplyScalar(A.dot(j))).normalize(),C.crossVectors(V,j);const ie=C.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=ie}for(let w=0,j=y.length;w<j;++w){const K=y[w],ie=K.start,P=K.count;for(let G=ie,Y=ie+P;G<Y;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,a=new O,o=new O,s=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),s.add(h),l.add(h),c.add(h),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,a),d.subVectors(r,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,d=s.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new Yt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rs=new dt,Nn=new Ra,sr=new wi,Ls=new O,ui=new O,hi=new O,di=new O,na=new O,or=new O,lr=new Qe,cr=new Qe,ur=new Qe,Ps=new O,Ds=new O,Us=new O,hr=new O,dr=new O;class Xt extends xt{constructor(e=new Qt,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){or.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],d=a[l];h!==0&&(na.fromBufferAttribute(d,e),o?or.addScaledVector(na,h):or.addScaledVector(na.sub(t),h))}t.add(or)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(a),Nn.copy(e.ray).recast(e.near),!(sr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(sr,Ls)===null||Nn.origin.distanceToSquared(Ls)>(e.far-e.near)**2))&&(Rs.copy(a).invert(),Nn.copy(e.ray).applyMatrix4(Rs),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=o[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,b=v;y<b;y+=3){const C=s.getX(y),A=s.getX(y+1),V=s.getX(y+2);r=fr(this,u,e,i,c,h,d,C,A,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const T=s.getX(p),v=s.getX(p+1),y=s.getX(p+2);r=fr(this,o,e,i,c,h,d,T,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=o[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,b=v;y<b;y+=3){const C=y,A=y+1,V=y+2;r=fr(this,u,e,i,c,h,d,C,A,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const T=p,v=p+1,y=p+2;r=fr(this,o,e,i,c,h,d,T,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Oc(n,e,t,i,r,a,o,s){let l;if(e.side===Ht?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Dn,s),l===null)return null;dr.copy(s),dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:n}}function fr(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,ui),n.getVertexPosition(l,hi),n.getVertexPosition(c,di);const h=Oc(n,e,t,i,ui,hi,di,hr);if(h){r&&(lr.fromBufferAttribute(r,s),cr.fromBufferAttribute(r,l),ur.fromBufferAttribute(r,c),h.uv=an.getInterpolation(hr,ui,hi,di,lr,cr,ur,new Qe)),a&&(lr.fromBufferAttribute(a,s),cr.fromBufferAttribute(a,l),ur.fromBufferAttribute(a,c),h.uv1=an.getInterpolation(hr,ui,hi,di,lr,cr,ur,new Qe),h.uv2=h.uv1),o&&(Ps.fromBufferAttribute(o,s),Ds.fromBufferAttribute(o,l),Us.fromBufferAttribute(o,c),h.normal=an.getInterpolation(hr,ui,hi,di,Ps,Ds,Us,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new O,materialIndex:0};an.getNormal(ui,hi,di,d.normal),h.face=d}return h}class Yi extends Qt{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(d,2));function _(x,p,u,T,v,y,b,C,A,V,M){const w=y/A,j=b/V,K=y/2,ie=b/2,P=C/2,G=A+1,Y=V+1;let $=0,ae=0;const ee=new O;for(let te=0;te<Y;te++){const I=te*j-ie;for(let N=0;N<G;N++){const _e=N*w-K;ee[x]=_e*T,ee[p]=I*v,ee[u]=P,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[p]=0,ee[u]=C>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(N/A),d.push(1-te/V),$+=1}}for(let te=0;te<V;te++)for(let I=0;I<A;I++){const N=f+I+G*te,_e=f+I+G*(te+1),ge=f+(I+1)+G*(te+1),ne=f+(I+1)+G*te;l.push(N,_e,ne),l.push(_e,ge,ne),ae+=6}s.addGroup(m,ae,M),m+=ae,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=bi(n[t]);for(const r in i)e[r]=i[r]}return e}function zc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bo(n){return n.getRenderTarget()===null?n.outputColorSpace:ht.workingColorSpace}const Bc={clone:bi,merge:Ot};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=zc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ho extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends Ho{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Vc extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new $t(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new $t(fi,pi,e,t);o.layers=this.layers,this.add(o);const s=new $t(fi,pi,e,t);s.layers=this.layers,this.add(s);const l=new $t(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new $t(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Go extends qt{constructor(e,t,i,r,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,i,r,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kc extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Vi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qn?Rt:Jt),this.texture=new Go(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),a=new Kn({name:"CubemapFromEquirect",uniforms:bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Rn});a.uniforms.tEquirect.value=t;const o=new Xt(r,a),s=t.minFilter;return t.minFilter===ki&&(t.minFilter=Zt),new Vc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const ia=new O,Wc=new O,Xc=new st;class An{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ia.subVectors(i,t).cross(Wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xc.getNormalMatrix(e),r=this.coplanarPoint(ia).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new wi,pr=new O;class Dr{constructor(e=new An,t=new An,i=new An,r=new An,a=new An,o=new An){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],T=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-a,f-c,p-m,y-u).normalize(),i[1].setComponents(l+a,f+c,p+m,y+u).normalize(),i[2].setComponents(l+o,f+h,p+_,y+T).normalize(),i[3].setComponents(l-o,f-h,p-_,y-T).normalize(),i[4].setComponents(l-s,f-d,p-x,y-v).normalize(),t===vn)i[5].setComponents(l+s,f+d,p+x,y+v).normalize();else if(t===br)i[5].setComponents(s,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vo(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function qc(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,d){const f=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(a(d.buffer,c,h),d.version=c.version)}return{get:o,remove:s,update:l}}class Pa extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,d=e/s,f=t/l,m=[],_=[],x=[],p=[];for(let u=0;u<h;u++){const T=u*f-o;for(let v=0;v<c;v++){const y=v*d-a;_.push(y,-T,0),x.push(0,0,1),p.push(v/s),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<s;T++){const v=T+c*u,y=T+c*(u+1),b=T+1+c*(u+1),C=T+1+c*u;m.push(v,y,C),m.push(y,b,C)}this.setIndex(m),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yc=`#ifdef USE_ALPHAHASH
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
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
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
#endif`,Hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,nt={alphahash_fragment:Yc,alphahash_pars_fragment:jc,alphamap_fragment:Kc,alphamap_pars_fragment:Zc,alphatest_fragment:$c,alphatest_pars_fragment:Jc,aomap_fragment:Qc,aomap_pars_fragment:eu,begin_vertex:tu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:su,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:uu,color_pars_fragment:hu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:Eu,envmap_fragment:yu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:bu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:zu,envmap_vertex:wu,fog_vertex:Cu,fog_pars_vertex:Ru,fog_fragment:Lu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Du,lightmap_fragment:Uu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:Bu,lights_toon_pars_fragment:Hu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Vu,lights_physical_fragment:ku,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:$u,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:eh,map_particle_pars_fragment:th,metalnessmap_fragment:nh,metalnessmap_pars_fragment:ih,morphcolor_vertex:rh,morphnormal_vertex:ah,morphtarget_pars_vertex:sh,morphtarget_vertex:oh,normal_fragment_begin:lh,normal_fragment_maps:ch,normal_pars_fragment:uh,normal_pars_vertex:hh,normal_vertex:dh,normalmap_pars_fragment:fh,clearcoat_normal_fragment_begin:ph,clearcoat_normal_fragment_maps:mh,clearcoat_pars_fragment:gh,iridescence_pars_fragment:_h,opaque_fragment:vh,packing:xh,premultiplied_alpha_fragment:Mh,project_vertex:Sh,dithering_fragment:Eh,dithering_pars_fragment:yh,roughnessmap_fragment:Th,roughnessmap_pars_fragment:bh,shadowmap_pars_fragment:Ah,shadowmap_pars_vertex:wh,shadowmap_vertex:Ch,shadowmask_pars_fragment:Rh,skinbase_vertex:Lh,skinning_pars_vertex:Ph,skinning_vertex:Dh,skinnormal_vertex:Uh,specularmap_fragment:Ih,specularmap_pars_fragment:Nh,tonemapping_fragment:Fh,tonemapping_pars_fragment:Oh,transmission_fragment:zh,transmission_pars_fragment:Bh,uv_pars_fragment:Hh,uv_pars_vertex:Gh,uv_vertex:Vh,worldpos_vertex:kh,background_vert:Wh,background_frag:Xh,backgroundCube_vert:qh,backgroundCube_frag:Yh,cube_vert:jh,cube_frag:Kh,depth_vert:Zh,depth_frag:$h,distanceRGBA_vert:Jh,distanceRGBA_frag:Qh,equirect_vert:ed,equirect_frag:td,linedashed_vert:nd,linedashed_frag:id,meshbasic_vert:rd,meshbasic_frag:ad,meshlambert_vert:sd,meshlambert_frag:od,meshmatcap_vert:ld,meshmatcap_frag:cd,meshnormal_vert:ud,meshnormal_frag:hd,meshphong_vert:dd,meshphong_frag:fd,meshphysical_vert:pd,meshphysical_frag:md,meshtoon_vert:gd,meshtoon_frag:_d,points_vert:vd,points_frag:xd,shadow_vert:Md,shadow_frag:Sd,sprite_vert:Ed,sprite_frag:yd},Le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},un={basic:{uniforms:Ot([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Ot([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Ot([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Ot([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Ot([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Ot([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Ot([Le.points,Le.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Ot([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Ot([Le.common,Le.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Ot([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Ot([Le.sprite,Le.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Ot([Le.common,Le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Ot([Le.lights,Le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};un.physical={uniforms:Ot([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const mr={r:0,b:0,g:0};function Td(n,e,t,i,r,a,o){const s=new et(0);let l=a===!0?0:1,c,h,d=null,f=0,m=null;function _(p,u){let T=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?x(s,l):v&&v.isColor&&(x(v,1),T=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Rr)?(h===void 0&&(h=new Xt(new Yi(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:bi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new Pa(2,2),new Kn({name:"BackgroundMaterial",uniforms:bi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(mr,Bo(n)),i.buffers.color.setClear(mr.r,mr.g,mr.b,u,o)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),l=u,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(s,l)},render:_}}function bd(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=p(null);let c=l,h=!1;function d(P,G,Y,$,ae){let ee=!1;if(o){const te=x($,Y,G);c!==te&&(c=te,m(c.object)),ee=u(P,$,Y,ae),ee&&T(P,$,Y,ae)}else{const te=G.wireframe===!0;(c.geometry!==$.id||c.program!==Y.id||c.wireframe!==te)&&(c.geometry=$.id,c.program=Y.id,c.wireframe=te,ee=!0)}ae!==null&&t.update(ae,n.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,V(P,G,Y,$),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ae).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):a.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function x(P,G,Y){const $=Y.wireframe===!0;let ae=s[P.id];ae===void 0&&(ae={},s[P.id]=ae);let ee=ae[G.id];ee===void 0&&(ee={},ae[G.id]=ee);let te=ee[$];return te===void 0&&(te=p(f()),ee[$]=te),te}function p(P){const G=[],Y=[],$=[];for(let ae=0;ae<r;ae++)G[ae]=0,Y[ae]=0,$[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:$,object:P,attributes:{},index:null}}function u(P,G,Y,$){const ae=c.attributes,ee=G.attributes;let te=0;const I=Y.getAttributes();for(const N in I)if(I[N].location>=0){const ge=ae[N];let ne=ee[N];if(ne===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ge===void 0||ge.attribute!==ne||ne&&ge.data!==ne.data)return!0;te++}return c.attributesNum!==te||c.index!==$}function T(P,G,Y,$){const ae={},ee=G.attributes;let te=0;const I=Y.getAttributes();for(const N in I)if(I[N].location>=0){let ge=ee[N];ge===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor));const ne={};ne.attribute=ge,ge&&ge.data&&(ne.data=ge.data),ae[N]=ne,te++}c.attributes=ae,c.attributesNum=te,c.index=$}function v(){const P=c.newAttributes;for(let G=0,Y=P.length;G<Y;G++)P[G]=0}function y(P){b(P,0)}function b(P,G){const Y=c.newAttributes,$=c.enabledAttributes,ae=c.attributeDivisors;Y[P]=1,$[P]===0&&(n.enableVertexAttribArray(P),$[P]=1),ae[P]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),ae[P]=G)}function C(){const P=c.newAttributes,G=c.enabledAttributes;for(let Y=0,$=G.length;Y<$;Y++)G[Y]!==P[Y]&&(n.disableVertexAttribArray(Y),G[Y]=0)}function A(P,G,Y,$,ae,ee,te){te===!0?n.vertexAttribIPointer(P,G,Y,ae,ee):n.vertexAttribPointer(P,G,Y,$,ae,ee)}function V(P,G,Y,$){if(i.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ae=$.attributes,ee=Y.getAttributes(),te=G.defaultAttributeValues;for(const I in ee){const N=ee[I];if(N.location>=0){let _e=ae[I];if(_e===void 0&&(I==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),I==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor)),_e!==void 0){const ge=_e.normalized,ne=_e.itemSize,fe=t.get(_e);if(fe===void 0)continue;const Ne=fe.buffer,Se=fe.type,Ue=fe.bytesPerElement,Xe=i.isWebGL2===!0&&(Se===n.INT||Se===n.UNSIGNED_INT||_e.gpuType===yo);if(_e.isInterleavedBufferAttribute){const Ge=_e.data,U=Ge.stride,it=_e.offset;if(Ge.isInstancedInterleavedBuffer){for(let ve=0;ve<N.locationSize;ve++)b(N.location+ve,Ge.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let ve=0;ve<N.locationSize;ve++)y(N.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ve=0;ve<N.locationSize;ve++)A(N.location+ve,ne/N.locationSize,Se,ge,U*Ue,(it+ne/N.locationSize*ve)*Ue,Xe)}else{if(_e.isInstancedBufferAttribute){for(let Ge=0;Ge<N.locationSize;Ge++)b(N.location+Ge,_e.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ge=0;Ge<N.locationSize;Ge++)y(N.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Ge=0;Ge<N.locationSize;Ge++)A(N.location+Ge,ne/N.locationSize,Se,ge,ne*Ue,ne/N.locationSize*Ge*Ue,Xe)}}else if(te!==void 0){const ge=te[I];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(N.location,ge);break;case 3:n.vertexAttrib3fv(N.location,ge);break;case 4:n.vertexAttrib4fv(N.location,ge);break;default:n.vertexAttrib1fv(N.location,ge)}}}}C()}function M(){K();for(const P in s){const G=s[P];for(const Y in G){const $=G[Y];for(const ae in $)_($[ae].object),delete $[ae];delete G[Y]}delete s[P]}}function w(P){if(s[P.id]===void 0)return;const G=s[P.id];for(const Y in G){const $=G[Y];for(const ae in $)_($[ae].object),delete $[ae];delete G[Y]}delete s[P.id]}function j(P){for(const G in s){const Y=s[G];if(Y[P.id]===void 0)continue;const $=Y[P.id];for(const ae in $)_($[ae].object),delete $[ae];delete Y[P.id]}}function K(){ie(),h=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:j,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function Ad(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,h){n.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](a,c,h,d),t.update(h,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function wd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),b=v&&y,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:C}}function Cd(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new An,s=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||_===null||_.length===0||a&&!p)a?h(null):c();else{const T=a?0:i,v=T*4;let y=u.clippingState||null;l.value=y,y=h(_,f,v,m);for(let b=0;b!==v;++b)y[b]=t[b];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,T=f.matrixWorldInverse;s.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,y=m;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(T,s),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Rd(n){let e=new WeakMap;function t(o,s){return s===_a?o.mapping=Ei:s===va&&(o.mapping=yi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===_a||s===va)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class ko extends Ho{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,Is=[.125,.215,.35,.446,.526,.582],Bn=20,ra=new ko,Ns=new et;let aa=null,sa=0,oa=0;const On=(1+Math.sqrt(5))/2,mi=1/On,Fs=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,On,mi),new O(0,On,-mi),new O(mi,0,On),new O(-mi,0,On),new O(On,mi,0),new O(-On,mi,0)];class Os{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){aa=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,sa,oa),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Wi,format:on,colorSpace:Mn,depthBuffer:!1},r=zs(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zs(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ld(a)),this._blurMaterial=Pd(a,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,i,r){const s=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ns),h.toneMapping=Ln,h.autoClear=!1;const m=new La({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),_=new Xt(new Yi,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ns),x=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):T===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const v=this._cubeSize;gr(r,T*v,u>2?v:0,v,v),h.setRenderTarget(r),x&&h.render(_,s),h.render(e,s)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ei||e.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bs());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fs[(r-1)%Fs.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),x=a/_,p=isFinite(a)?1+Math.floor(h*x):Bn;p>Bn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const u=[];let T=0;for(let A=0;A<Bn;++A){const V=A/x,M=Math.exp(-V*V/2);u.push(M),A===0?T+=M:A<p&&(T+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-xi?r-v+xi:0),C=4*(this._cubeSize-y);gr(t,b,C,3*y,2*y),l.setRenderTarget(t),l.render(d,ra)}}function Ld(n){const e=[],t=[],i=[];let r=n;const a=n-xi+1+Is.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-xi?l=Is[o-n+xi-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,x=3,p=2,u=1,T=new Float32Array(x*_*m),v=new Float32Array(p*_*m),y=new Float32Array(u*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,V=C>2?0:-1,M=[A,V,0,A+2/3,V,0,A+2/3,V+1,0,A,V,0,A+2/3,V+1,0,A,V+1,0];T.set(M,x*_*C),v.set(f,p*_*C);const w=[C,C,C,C,C,C];y.set(w,u*_*C)}const b=new Qt;b.setAttribute("position",new Yt(T,x)),b.setAttribute("uv",new Yt(v,p)),b.setAttribute("faceIndex",new Yt(y,u)),e.push(b),r>xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zs(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pd(n,e,t){const i=new Float32Array(Bn),r=new O(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Bs(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Hs(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function Dd(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===_a||l===va,h=l===Ei||l===yi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Os(n)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Os(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ud(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Id(n,e,t,i){const r={},a=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let v=0,y=T.length;v<y;v+=3){const b=T[v+0],C=T[v+1],A=T[v+2];f.push(b,C,C,A,A,b)}}else if(_!==void 0){const T=_.array;x=_.version;for(let v=0,y=T.length/3-1;v<y;v+=3){const b=v+0,C=v+1,A=v+2;f.push(b,C,C,A,A,b)}}else return;const p=new(Po(f)?zo:Oo)(f,1);p.version=x;const u=a.get(d);u&&e.remove(u),a.set(d,p)}function h(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function Nd(n,e,t,i){const r=i.isWebGL2;let a;function o(f){a=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function h(f,m){n.drawElements(a,m,s,f*l),t.update(m,a,1)}function d(f,m,_){if(_===0)return;let x,p;if(r)x=n,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](a,m,s,f*l,_),t.update(m,a,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Fd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Od(n,e){return n[0]-e[0]}function zd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Bd(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new At,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let p=a.get(h);if(p===void 0||p.count!==x){let G=function(){ie.dispose(),a.delete(h),h.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),b===!0&&(M=3);let w=h.attributes.position.count*M,j=1;w>e.maxTextureSize&&(j=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const K=new Float32Array(w*j*4*x),ie=new Io(K,w,j,x);ie.type=Cn,ie.needsUpdate=!0;const P=M*4;for(let Y=0;Y<x;Y++){const $=C[Y],ae=A[Y],ee=V[Y],te=w*j*4*Y;for(let I=0;I<$.count;I++){const N=I*P;v===!0&&(o.fromBufferAttribute($,I),K[te+N+0]=o.x,K[te+N+1]=o.y,K[te+N+2]=o.z,K[te+N+3]=0),y===!0&&(o.fromBufferAttribute(ae,I),K[te+N+4]=o.x,K[te+N+5]=o.y,K[te+N+6]=o.z,K[te+N+7]=0),b===!0&&(o.fromBufferAttribute(ee,I),K[te+N+8]=o.x,K[te+N+9]=o.y,K[te+N+10]=o.z,K[te+N+11]=ee.itemSize===4?o.w:1)}}p={count:x,texture:ie,size:new Qe(w,j)},a.set(h,p),h.addEventListener("dispose",G)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const T=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let x=i[h.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<_;y++){const b=x[y];b[0]=y,b[1]=f[y]}x.sort(zd);for(let y=0;y<8;y++)y<_&&x[y][1]?(s[y][0]=x[y][0],s[y][1]=x[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(Od);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const b=s[y],C=b[0],A=b[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+y)!==p[C]&&h.setAttribute("morphTarget"+y,p[C]),u&&h.getAttribute("morphNormal"+y)!==u[C]&&h.setAttribute("morphNormal"+y,u[C]),r[y]=A,T+=A):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),u&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const v=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Hd(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Wo=new qt,Xo=new Io,qo=new Ac,Yo=new Go,Gs=[],Vs=[],ks=new Float32Array(16),Ws=new Float32Array(9),Xs=new Float32Array(4);function Ri(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Gs[r];if(a===void 0&&(a=new Float32Array(r),Gs[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ur(n,e){let t=Vs[e];t===void 0&&(t=new Int32Array(e),Vs[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Wd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function Xd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Xs.set(i),n.uniformMatrix2fv(this.addr,!1,Xs),Tt(t,i)}}function qd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Ws.set(i),n.uniformMatrix3fv(this.addr,!1,Ws),Tt(t,i)}}function Yd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;ks.set(i),n.uniformMatrix4fv(this.addr,!1,ks),Tt(t,i)}}function jd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function $d(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function Jd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function nf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Wo,r)}function rf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qo,r)}function af(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yo,r)}function sf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xo,r)}function of(n){switch(n){case 5126:return Gd;case 35664:return Vd;case 35665:return kd;case 35666:return Wd;case 35674:return Xd;case 35675:return qd;case 35676:return Yd;case 5124:case 35670:return jd;case 35667:case 35671:return Kd;case 35668:case 35672:return Zd;case 35669:case 35673:return $d;case 5125:return Jd;case 36294:return Qd;case 36295:return ef;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return nf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return sf}}function lf(n,e){n.uniform1fv(this.addr,e)}function cf(n,e){const t=Ri(e,this.size,2);n.uniform2fv(this.addr,t)}function uf(n,e){const t=Ri(e,this.size,3);n.uniform3fv(this.addr,t)}function hf(n,e){const t=Ri(e,this.size,4);n.uniform4fv(this.addr,t)}function df(n,e){const t=Ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ff(n,e){const t=Ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pf(n,e){const t=Ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mf(n,e){n.uniform1iv(this.addr,e)}function gf(n,e){n.uniform2iv(this.addr,e)}function _f(n,e){n.uniform3iv(this.addr,e)}function vf(n,e){n.uniform4iv(this.addr,e)}function xf(n,e){n.uniform1uiv(this.addr,e)}function Mf(n,e){n.uniform2uiv(this.addr,e)}function Sf(n,e){n.uniform3uiv(this.addr,e)}function Ef(n,e){n.uniform4uiv(this.addr,e)}function yf(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Wo,a[o])}function Tf(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qo,a[o])}function bf(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Yo,a[o])}function Af(n,e,t){const i=this.cache,r=e.length,a=Ur(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Xo,a[o])}function wf(n){switch(n){case 5126:return lf;case 35664:return cf;case 35665:return uf;case 35666:return hf;case 35674:return df;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return gf;case 35668:case 35672:return _f;case 35669:case 35673:return vf;case 5125:return xf;case 36294:return Mf;case 36295:return Sf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Af}}class Cf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=of(t.type)}}class Rf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=wf(t.type)}}class Lf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function qs(n,e){n.seq.push(e),n.map[e.id]=e}function Pf(n,e,t){const i=n.name,r=i.length;for(la.lastIndex=0;;){const a=la.exec(i),o=la.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){qs(t,c===void 0?new Cf(s,n,e):new Rf(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new Lf(s),qs(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Pf(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ys(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Df=37297;let Uf=0;function If(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Nf(n){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n);let i;switch(e===t?i="":e===Tr&&t===yr?i="LinearDisplayP3ToLinearSRGB":e===yr&&t===Tr&&(i="LinearSRGBToLinearDisplayP3"),n){case Mn:case Lr:return[i,"LinearTransferOETF"];case Rt:case wa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function js(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+If(n.getShaderSource(e),o)}else return r}function Ff(n,e){const t=Nf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Of(n,e){let t;switch(e){case Il:t="Linear";break;case Nl:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case Ol:t="ACESFilmic";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function Bf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Oi(n){return n!==""}function Ks(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zs(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(n){return n.replace(Gf,kf)}const Vf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(n,e){let t=nt[e];if(t===void 0){const i=Vf.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ya(t)}const Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(n){return n.replace(Wf,Xf)}function Xf(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Js(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qf(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yf(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case yi:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jf(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Kf(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case Dl:e="ENVMAP_BLENDING_MIX";break;case Ul:e="ENVMAP_BLENDING_ADD";break}return e}function Zf(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $f(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=qf(t),c=Yf(t),h=jf(t),d=Kf(t),f=Zf(t),m=t.isWebGL2?"":zf(t),_=Bf(a),x=r.createProgram();let p,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),u.length>0&&(u+=`
`)):(p=[Js(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),u=[m,Js(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ff("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),o=ya(o),o=Ks(o,t),o=Zs(o,t),s=ya(s),s=Ks(s,t),s=Zs(s,t),o=$s(o),s=$s(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=T+p+o,y=T+u+s,b=Ys(r,r.VERTEX_SHADER,v),C=Ys(r,r.FRAGMENT_SHADER,y);r.attachShader(x,b),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(j){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(x).trim(),ie=r.getShaderInfoLog(b).trim(),P=r.getShaderInfoLog(C).trim();let G=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,b,C);else{const $=js(r,b,"vertex"),ae=js(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+$+`
`+ae)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(ie===""||P==="")&&(Y=!1);Y&&(j.diagnostics={runnable:G,programLog:K,vertexShader:{log:ie,prefix:p},fragmentShader:{log:P,prefix:u}})}r.deleteShader(b),r.deleteShader(C),V=new Mr(r,x),M=Hf(r,x)}let V;this.getUniforms=function(){return V===void 0&&A(this),V};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,Df)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=C,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ep(e),t.set(e,i)),i}}class ep{constructor(e){this.id=Jf++,this.code=e,this.usedTimes=0}}function tp(n,e,t,i,r,a,o){const s=new No,l=new Qf,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,w,j,K,ie){const P=K.fog,G=ie.geometry,Y=M.isMeshStandardMaterial?K.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),ae=$&&$.mapping===Rr?$.image.height:null,ee=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,I=te!==void 0?te.length:0;let N=0;G.morphAttributes.position!==void 0&&(N=1),G.morphAttributes.normal!==void 0&&(N=2),G.morphAttributes.color!==void 0&&(N=3);let _e,ge,ne,fe;if(ee){const at=un[ee];_e=at.vertexShader,ge=at.fragmentShader}else _e=M.vertexShader,ge=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const Ne=n.getRenderTarget(),Se=ie.isInstancedMesh===!0,Ue=!!M.map,Xe=!!M.matcap,Ge=!!$,U=!!M.aoMap,it=!!M.lightMap,ve=!!M.bumpMap,ye=!!M.normalMap,De=!!M.displacementMap,ke=!!M.emissiveMap,be=!!M.metalnessMap,Ce=!!M.roughnessMap,Ie=M.anisotropy>0,He=M.clearcoat>0,Ke=M.iridescence>0,E=M.sheen>0,g=M.transmission>0,z=Ie&&!!M.anisotropyMap,oe=He&&!!M.clearcoatMap,re=He&&!!M.clearcoatNormalMap,ue=He&&!!M.clearcoatRoughnessMap,Ae=Ke&&!!M.iridescenceMap,he=Ke&&!!M.iridescenceThicknessMap,xe=E&&!!M.sheenColorMap,R=E&&!!M.sheenRoughnessMap,le=!!M.specularMap,Q=!!M.specularColorMap,Oe=!!M.specularIntensityMap,Pe=g&&!!M.transmissionMap,we=g&&!!M.thicknessMap,Ee=!!M.gradientMap,Te=!!M.alphaMap,qe=M.alphaTest>0,D=!!M.alphaHash,me=!!M.extensions,ce=!!G.attributes.uv1,J=!!G.attributes.uv2,se=!!G.attributes.uv3;let Fe=Ln;return M.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Fe=n.toneMapping),{isWebGL2:h,shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:ge,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Se,instancingColor:Se&&ie.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Mn,map:Ue,matcap:Xe,envMap:Ge,envMapMode:Ge&&$.mapping,envMapCubeUVHeight:ae,aoMap:U,lightMap:it,bumpMap:ve,normalMap:ye,displacementMap:f&&De,emissiveMap:ke,normalMapObjectSpace:ye&&M.normalMapType===$l,normalMapTangentSpace:ye&&M.normalMapType===Lo,metalnessMap:be,roughnessMap:Ce,anisotropy:Ie,anisotropyMap:z,clearcoat:He,clearcoatMap:oe,clearcoatNormalMap:re,clearcoatRoughnessMap:ue,iridescence:Ke,iridescenceMap:Ae,iridescenceThicknessMap:he,sheen:E,sheenColorMap:xe,sheenRoughnessMap:R,specularMap:le,specularColorMap:Q,specularIntensityMap:Oe,transmission:g,transmissionMap:Pe,thicknessMap:we,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===Mi,alphaMap:Te,alphaTest:qe,alphaHash:D,combine:M.combine,mapUv:Ue&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:it&&x(M.lightMap.channel),bumpMapUv:ve&&x(M.bumpMap.channel),normalMapUv:ye&&x(M.normalMap.channel),displacementMapUv:De&&x(M.displacementMap.channel),emissiveMapUv:ke&&x(M.emissiveMap.channel),metalnessMapUv:be&&x(M.metalnessMap.channel),roughnessMapUv:Ce&&x(M.roughnessMap.channel),anisotropyMapUv:z&&x(M.anisotropyMap.channel),clearcoatMapUv:oe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:R&&x(M.sheenRoughnessMap.channel),specularMapUv:le&&x(M.specularMap.channel),specularColorMapUv:Q&&x(M.specularColorMap.channel),specularIntensityMapUv:Oe&&x(M.specularIntensityMap.channel),transmissionMapUv:Pe&&x(M.transmissionMap.channel),thicknessMapUv:we&&x(M.thicknessMap.channel),alphaMapUv:Te&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||Ie),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:J,vertexUv3s:se,pointsUvs:ie.isPoints===!0&&!!G.attributes.uv&&(Ue||Te),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:N,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)w.push(j),w.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(T(w,M),v(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function T(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function y(M){const w=_[M.type];let j;if(w){const K=un[w];j=Bc.clone(K.uniforms)}else j=M.uniforms;return j}function b(M,w){let j;for(let K=0,ie=c.length;K<ie;K++){const P=c[K];if(P.cacheKey===w){j=P,++j.usedTimes;break}}return j===void 0&&(j=new $f(n,w,M,a),c.push(j)),j}function C(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:V}}function np(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ip(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qs(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eo(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,_,x,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function s(d,f,m,_,x,p){const u=o(d,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,_,x,p){const u=o(d,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||ip),i.length>1&&i.sort(f||Qs),r.length>1&&r.sort(f||Qs)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:h,sort:c}}function rp(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new eo,n.set(i,[o])):r>=a.length?(o=new eo,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ap(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new et};break;case"SpotLight":t={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function sp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let op=0;function lp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cp(n,e){const t=new ap,i=sp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new O);const a=new O,o=new dt,s=new dt;function l(h,d){let f=0,m=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let x=0,p=0,u=0,T=0,v=0,y=0,b=0,C=0,A=0,V=0,M=0;h.sort(lp);const w=d===!0?Math.PI:1;for(let K=0,ie=h.length;K<ie;K++){const P=h[K],G=P.color,Y=P.intensity,$=P.distance,ae=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=G.r*Y*w,m+=G.g*Y*w,_+=G.b*Y*w;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(P.sh.coefficients[ee],Y);M++}else if(P.isDirectionalLight){const ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const te=P.shadow,I=i.get(P);I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,r.directionalShadow[x]=I,r.directionalShadowMap[x]=ae,r.directionalShadowMatrix[x]=P.shadow.matrix,y++}r.directional[x]=ee,x++}else if(P.isSpotLight){const ee=t.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(G).multiplyScalar(Y*w),ee.distance=$,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,r.spot[u]=ee;const te=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,te.updateMatrices(P),P.castShadow&&V++),r.spotLightMatrix[u]=te.matrix,P.castShadow){const I=i.get(P);I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,r.spotShadow[u]=I,r.spotShadowMap[u]=ae,C++}u++}else if(P.isRectAreaLight){const ee=t.get(P);ee.color.copy(G).multiplyScalar(Y),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),r.rectArea[T]=ee,T++}else if(P.isPointLight){const ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*w),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){const te=P.shadow,I=i.get(P);I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,r.pointShadow[p]=I,r.pointShadowMap[p]=ae,r.pointShadowMatrix[p]=P.shadow.matrix,b++}r.point[p]=ee,p++}else if(P.isHemisphereLight){const ee=t.get(P);ee.skyColor.copy(P.color).multiplyScalar(Y*w),ee.groundColor.copy(P.groundColor).multiplyScalar(Y*w),r.hemi[v]=ee,v++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const j=r.hash;(j.directionalLength!==x||j.pointLength!==p||j.spotLength!==u||j.rectAreaLength!==T||j.hemiLength!==v||j.numDirectionalShadows!==y||j.numPointShadows!==b||j.numSpotShadows!==C||j.numSpotMaps!==A||j.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=T,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+A-V,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=M,j.directionalLength=x,j.pointLength=p,j.spotLength=u,j.rectAreaLength=T,j.hemiLength=v,j.numDirectionalShadows=y,j.numPointShadows=b,j.numSpotShadows=C,j.numSpotMaps=A,j.numLightProbes=M,r.version=op++)}function c(h,d){let f=0,m=0,_=0,x=0,p=0;const u=d.matrixWorldInverse;for(let T=0,v=h.length;T<v;T++){const y=h[T];if(y.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(u),f++}else if(y.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(u),_++}else if(y.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),s.identity(),o.copy(y.matrixWorld),o.premultiply(u),s.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function to(n,e){const t=new cp(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(d){i.push(d)}function s(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function up(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new to(n,e),t.set(a,[l])):o>=s.length?(l=new to(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class hp extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fp=`void main() {
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
}`;function mp(n,e,t){let i=new Dr;const r=new Qe,a=new Qe,o=new At,s=new hp({depthPacking:Zl}),l=new dp,c={},h=t.maxTextureSize,d={[Dn]:Ht,[Ht]:Dn,[_n]:_n},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let u=this.type;this.render=function(b,C,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const V=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Rn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=u!==gn&&this.type===gn,ie=u===gn&&this.type!==gn;for(let P=0,G=b.length;P<G;P++){const Y=b[P],$=Y.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ae=$.getFrameExtents();if(r.multiply(ae),a.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ae.x),r.x=a.x*ae.x,$.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ae.y),r.y=a.y*ae.y,$.mapSize.y=a.y)),$.map===null||K===!0||ie===!0){const te=this.type!==gn?{minFilter:zt,magFilter:zt}:{};$.map!==null&&$.map.dispose(),$.map=new Yn(r.x,r.y,te),$.map.texture.name=Y.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ee=$.getViewportCount();for(let te=0;te<ee;te++){const I=$.getViewport(te);o.set(a.x*I.x,a.y*I.y,a.x*I.z,a.y*I.w),j.viewport(o),$.updateMatrices(Y,te),i=$.getFrustum(),y(C,A,$.camera,Y,this.type)}$.isPointLightShadow!==!0&&this.type===gn&&T($,A),$.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(V,M,w)};function T(b,C){const A=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Yn(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,A,f,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,A,m,x,null)}function v(b,C,A,V){let M=null;const w=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)M=w;else if(M=A.isPointLight===!0?l:s,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=M.uuid,K=C.uuid;let ie=c[j];ie===void 0&&(ie={},c[j]=ie);let P=ie[K];P===void 0&&(P=M.clone(),ie[K]=P),M=P}if(M.visible=C.visible,M.wireframe=C.wireframe,V===gn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=n.properties.get(M);j.light=A}return M}function y(b,C,A,V,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===gn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const K=e.update(b),ie=b.material;if(Array.isArray(ie)){const P=K.groups;for(let G=0,Y=P.length;G<Y;G++){const $=P[G],ae=ie[$.materialIndex];if(ae&&ae.visible){const ee=v(b,ae,V,M);n.renderBufferDirect(A,null,K,ee,b,$)}}}else if(ie.visible){const P=v(b,ie,V,M);n.renderBufferDirect(A,null,K,P,b,null)}}const j=b.children;for(let K=0,ie=j.length;K<ie;K++)y(j[K],C,A,V,M)}}function gp(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const me=new At;let ce=null;const J=new At(0,0,0,0);return{setMask:function(se){ce!==se&&!D&&(n.colorMask(se,se,se,se),ce=se)},setLocked:function(se){D=se},setClear:function(se,Fe,Ve,at,ft){ft===!0&&(se*=at,Fe*=at,Ve*=at),me.set(se,Fe,Ve,at),J.equals(me)===!1&&(n.clearColor(se,Fe,Ve,at),J.copy(me))},reset:function(){D=!1,ce=null,J.set(-1,0,0,0)}}}function a(){let D=!1,me=null,ce=null,J=null;return{setTest:function(se){se?Ue(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(se){me!==se&&!D&&(n.depthMask(se),me=se)},setFunc:function(se){if(ce!==se){switch(se){case bl:n.depthFunc(n.NEVER);break;case Al:n.depthFunc(n.ALWAYS);break;case wl:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=se}},setLocked:function(se){D=se},setClear:function(se){J!==se&&(n.clearDepth(se),J=se)},reset:function(){D=!1,me=null,ce=null,J=null}}}function o(){let D=!1,me=null,ce=null,J=null,se=null,Fe=null,Ve=null,at=null,ft=null;return{setTest:function(tt){D||(tt?Ue(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(tt){me!==tt&&!D&&(n.stencilMask(tt),me=tt)},setFunc:function(tt,pe,ct){(ce!==tt||J!==pe||se!==ct)&&(n.stencilFunc(tt,pe,ct),ce=tt,J=pe,se=ct)},setOp:function(tt,pe,ct){(Fe!==tt||Ve!==pe||at!==ct)&&(n.stencilOp(tt,pe,ct),Fe=tt,Ve=pe,at=ct)},setLocked:function(tt){D=tt},setClear:function(tt){ft!==tt&&(n.clearStencil(tt),ft=tt)},reset:function(){D=!1,me=null,ce=null,J=null,se=null,Fe=null,Ve=null,at=null,ft=null}}}const s=new r,l=new a,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,x=[],p=null,u=!1,T=null,v=null,y=null,b=null,C=null,A=null,V=null,M=new et(0,0,0),w=0,j=!1,K=null,ie=null,P=null,G=null,Y=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ee=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),ae=ee>=1):te.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ae=ee>=2);let I=null,N={};const _e=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),ne=new At().fromArray(_e),fe=new At().fromArray(ge);function Ne(D,me,ce,J){const se=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(D,Fe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ce;Ve++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(me+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Fe}const Se={};Se[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(Sr),be(!1),Ce(Fa),Ue(n.CULL_FACE),De(Rn);function Ue(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function Xe(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Ge(D,me){return m[D]!==me?(n.bindFramebuffer(D,me),m[D]=me,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function U(D,me){let ce=x,J=!1;if(D)if(ce=_.get(me),ce===void 0&&(ce=[],_.set(me,ce)),D.isWebGLMultipleRenderTargets){const se=D.texture;if(ce.length!==se.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,Ve=se.length;Fe<Ve;Fe++)ce[Fe]=n.COLOR_ATTACHMENT0+Fe;ce.length=se.length,J=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,J=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,J=!0);J&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function it(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const ve={[zn]:n.FUNC_ADD,[ul]:n.FUNC_SUBTRACT,[hl]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Ha]=n.MIN,ve[Ga]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ve[Ha]=D.MIN_EXT,ve[Ga]=D.MAX_EXT)}const ye={[dl]:n.ZERO,[fl]:n.ONE,[pl]:n.SRC_COLOR,[ma]:n.SRC_ALPHA,[Ml]:n.SRC_ALPHA_SATURATE,[vl]:n.DST_COLOR,[gl]:n.DST_ALPHA,[ml]:n.ONE_MINUS_SRC_COLOR,[ga]:n.ONE_MINUS_SRC_ALPHA,[xl]:n.ONE_MINUS_DST_COLOR,[_l]:n.ONE_MINUS_DST_ALPHA,[Sl]:n.CONSTANT_COLOR,[El]:n.ONE_MINUS_CONSTANT_COLOR,[yl]:n.CONSTANT_ALPHA,[Tl]:n.ONE_MINUS_CONSTANT_ALPHA};function De(D,me,ce,J,se,Fe,Ve,at,ft,tt){if(D===Rn){u===!0&&(Xe(n.BLEND),u=!1);return}if(u===!1&&(Ue(n.BLEND),u=!0),D!==cl){if(D!==T||tt!==j){if((v!==zn||C!==zn)&&(n.blendEquation(n.FUNC_ADD),v=zn,C=zn),tt)switch(D){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oa:n.blendFunc(n.ONE,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ba:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ba:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,A=null,V=null,M.set(0,0,0),w=0,T=D,j=tt}return}se=se||me,Fe=Fe||ce,Ve=Ve||J,(me!==v||se!==C)&&(n.blendEquationSeparate(ve[me],ve[se]),v=me,C=se),(ce!==y||J!==b||Fe!==A||Ve!==V)&&(n.blendFuncSeparate(ye[ce],ye[J],ye[Fe],ye[Ve]),y=ce,b=J,A=Fe,V=Ve),(at.equals(M)===!1||ft!==w)&&(n.blendColor(at.r,at.g,at.b,ft),M.copy(at),w=ft),T=D,j=!1}function ke(D,me){D.side===_n?Xe(n.CULL_FACE):Ue(n.CULL_FACE);let ce=D.side===Ht;me&&(ce=!ce),be(ce),D.blending===Mi&&D.transparent===!1?De(Rn):De(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const J=D.stencilWrite;c.setTest(J),J&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),He(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(D){K!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),K=D)}function Ce(D){D!==ol?(Ue(n.CULL_FACE),D!==ie&&(D===Fa?n.cullFace(n.BACK):D===ll?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),ie=D}function Ie(D){D!==P&&(ae&&n.lineWidth(D),P=D)}function He(D,me,ce){D?(Ue(n.POLYGON_OFFSET_FILL),(G!==me||Y!==ce)&&(n.polygonOffset(me,ce),G=me,Y=ce)):Xe(n.POLYGON_OFFSET_FILL)}function Ke(D){D?Ue(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function E(D){D===void 0&&(D=n.TEXTURE0+$-1),I!==D&&(n.activeTexture(D),I=D)}function g(D,me,ce){ce===void 0&&(I===null?ce=n.TEXTURE0+$-1:ce=I);let J=N[ce];J===void 0&&(J={type:void 0,texture:void 0},N[ce]=J),(J.type!==D||J.texture!==me)&&(I!==ce&&(n.activeTexture(ce),I=ce),n.bindTexture(D,me||Se[D]),J.type=D,J.texture=me)}function z(){const D=N[I];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){ne.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function we(D){fe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),fe.copy(D))}function Ee(D,me){let ce=d.get(me);ce===void 0&&(ce=new WeakMap,d.set(me,ce));let J=ce.get(D);J===void 0&&(J=n.getUniformBlockIndex(me,D.name),ce.set(D,J))}function Te(D,me){const J=d.get(me).get(D);h.get(me)!==J&&(n.uniformBlockBinding(me,J,D.__bindingPointIndex),h.set(me,J))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},I=null,N={},m={},_=new WeakMap,x=[],p=null,u=!1,T=null,v=null,y=null,b=null,C=null,A=null,V=null,M=new et(0,0,0),w=0,j=!1,K=null,ie=null,P=null,G=null,Y=null,ne.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ue,disable:Xe,bindFramebuffer:Ge,drawBuffers:U,useProgram:it,setBlending:De,setMaterial:ke,setFlipSided:be,setCullFace:Ce,setLineWidth:Ie,setPolygonOffset:He,setScissorTest:Ke,activeTexture:E,bindTexture:g,unbindTexture:z,compressedTexImage2D:oe,compressedTexImage3D:re,texImage2D:Q,texImage3D:Oe,updateUBOMapping:Ee,uniformBlockBinding:Te,texStorage2D:R,texStorage3D:le,texSubImage2D:ue,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:Pe,viewport:we,reset:qe}}function _p(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,g){return u?new OffscreenCanvas(E,g):wr("canvas")}function v(E,g,z,oe){let re=1;if((E.width>oe||E.height>oe)&&(re=oe/Math.max(E.width,E.height)),re<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ue=g?Ar:Math.floor,Ae=ue(re*E.width),he=ue(re*E.height);x===void 0&&(x=T(Ae,he));const xe=z?T(Ae,he):x;return xe.width=Ae,xe.height=he,xe.getContext("2d").drawImage(E,0,0,Ae,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ae+"x"+he+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return Ea(E.width)&&Ea(E.height)}function b(E){return s?!1:E.wrapS!==sn||E.wrapT!==sn||E.minFilter!==zt&&E.minFilter!==Zt}function C(E,g){return E.generateMipmaps&&g&&E.minFilter!==zt&&E.minFilter!==Zt}function A(E){n.generateMipmap(E)}function V(E,g,z,oe,re=!1){if(s===!1)return g;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue=g;if(g===n.RED&&(z===n.FLOAT&&(ue=n.R32F),z===n.HALF_FLOAT&&(ue=n.R16F),z===n.UNSIGNED_BYTE&&(ue=n.R8)),g===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ue=n.R8UI),z===n.UNSIGNED_SHORT&&(ue=n.R16UI),z===n.UNSIGNED_INT&&(ue=n.R32UI),z===n.BYTE&&(ue=n.R8I),z===n.SHORT&&(ue=n.R16I),z===n.INT&&(ue=n.R32I)),g===n.RG&&(z===n.FLOAT&&(ue=n.RG32F),z===n.HALF_FLOAT&&(ue=n.RG16F),z===n.UNSIGNED_BYTE&&(ue=n.RG8)),g===n.RGBA){const Ae=re?Er:ht.getTransfer(oe);z===n.FLOAT&&(ue=n.RGBA32F),z===n.HALF_FLOAT&&(ue=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ue=Ae===gt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function M(E,g,z){return C(E,z)===!0||E.isFramebufferTexture&&E.minFilter!==zt&&E.minFilter!==Zt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function w(E){return E===zt||E===Va||E===Nr?n.NEAREST:n.LINEAR}function j(E){const g=E.target;g.removeEventListener("dispose",j),ie(g),g.isVideoTexture&&_.delete(g)}function K(E){const g=E.target;g.removeEventListener("dispose",K),G(g)}function ie(E){const g=i.get(E);if(g.__webglInit===void 0)return;const z=E.source,oe=p.get(z);if(oe){const re=oe[g.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(E),Object.keys(oe).length===0&&p.delete(z)}i.remove(E)}function P(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const z=E.source,oe=p.get(z);delete oe[g.__cacheKey],o.memory.textures--}function G(E){const g=E.texture,z=i.get(E),oe=i.get(g);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(z.__webglFramebuffer[re]))for(let ue=0;ue<z.__webglFramebuffer[re].length;ue++)n.deleteFramebuffer(z.__webglFramebuffer[re][ue]);else n.deleteFramebuffer(z.__webglFramebuffer[re]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[re])}else{if(Array.isArray(z.__webglFramebuffer))for(let re=0;re<z.__webglFramebuffer.length;re++)n.deleteFramebuffer(z.__webglFramebuffer[re]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let re=0;re<z.__webglColorRenderbuffer.length;re++)z.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[re]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,ue=g.length;re<ue;re++){const Ae=i.get(g[re]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(g[re])}i.remove(g),i.remove(E)}let Y=0;function $(){Y=0}function ae(){const E=Y;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Y+=1,E}function ee(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function te(E,g){const z=i.get(E);if(E.isVideoTexture&&He(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const oe=E.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(z,E,g);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+g)}function I(E,g){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Ue(z,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+g)}function N(E,g){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Ue(z,E,g);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+g)}function _e(E,g){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Xe(z,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+g)}const ge={[xa]:n.REPEAT,[sn]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},ne={[zt]:n.NEAREST,[Va]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},fe={[Jl]:n.NEVER,[ac]:n.ALWAYS,[Ql]:n.LESS,[tc]:n.LEQUAL,[ec]:n.EQUAL,[rc]:n.GEQUAL,[nc]:n.GREATER,[ic]:n.NOTEQUAL};function Ne(E,g,z){if(z?(n.texParameteri(E,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ge[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ne[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ne[g.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==sn||g.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(g.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(g.minFilter)),g.minFilter!==zt&&g.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===zt||g.minFilter!==Nr&&g.minFilter!==ki||g.type===Cn&&e.has("OES_texture_float_linear")===!1||s===!1&&g.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Se(E,g){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",j));const oe=g.source;let re=p.get(oe);re===void 0&&(re={},p.set(oe,re));const ue=ee(g);if(ue!==E.__cacheKey){re[ue]===void 0&&(re[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),re[ue].usedTimes++;const Ae=re[E.__cacheKey];Ae!==void 0&&(re[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&P(g)),E.__cacheKey=ue,E.__webglTexture=re[ue].texture}return z}function Ue(E,g,z){let oe=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(oe=n.TEXTURE_3D);const re=Se(E,g),ue=g.source;t.bindTexture(oe,E.__webglTexture,n.TEXTURE0+z);const Ae=i.get(ue);if(ue.version!==Ae.__version||re===!0){t.activeTexture(n.TEXTURE0+z);const he=ht.getPrimaries(ht.workingColorSpace),xe=g.colorSpace===Jt?null:ht.getPrimaries(g.colorSpace),R=g.colorSpace===Jt||he===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);const le=b(g)&&y(g.image)===!1;let Q=v(g.image,le,!1,h);Q=Ke(g,Q);const Oe=y(Q)||s,Pe=a.convert(g.format,g.colorSpace);let we=a.convert(g.type),Ee=V(g.internalFormat,Pe,we,g.colorSpace,g.isVideoTexture);Ne(oe,g,Oe);let Te;const qe=g.mipmaps,D=s&&g.isVideoTexture!==!0,me=Ae.__version===void 0||re===!0,ce=M(g,Q,Oe);if(g.isDepthTexture)Ee=n.DEPTH_COMPONENT,s?g.type===Cn?Ee=n.DEPTH_COMPONENT32F:g.type===wn?Ee=n.DEPTH_COMPONENT24:g.type===Wn?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:g.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Xn&&Ee===n.DEPTH_COMPONENT&&g.type!==Aa&&g.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=wn,we=a.convert(g.type)),g.format===Ti&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,g.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Wn,we=a.convert(g.type))),me&&(D?t.texStorage2D(n.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ee,Q.width,Q.height,0,Pe,we,null));else if(g.isDataTexture)if(qe.length>0&&Oe){D&&me&&t.texStorage2D(n.TEXTURE_2D,ce,Ee,qe[0].width,qe[0].height);for(let J=0,se=qe.length;J<se;J++)Te=qe[J],D?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Te.width,Te.height,Pe,we,Te.data):t.texImage2D(n.TEXTURE_2D,J,Ee,Te.width,Te.height,0,Pe,we,Te.data);g.generateMipmaps=!1}else D?(me&&t.texStorage2D(n.TEXTURE_2D,ce,Ee,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Pe,we,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,Q.width,Q.height,0,Pe,we,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ee,qe[0].width,qe[0].height,Q.depth);for(let J=0,se=qe.length;J<se;J++)Te=qe[J],g.format!==on?Pe!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,Q.depth,Pe,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ee,Te.width,Te.height,Q.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,Q.depth,Pe,we,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ee,Te.width,Te.height,Q.depth,0,Pe,we,Te.data)}else{D&&me&&t.texStorage2D(n.TEXTURE_2D,ce,Ee,qe[0].width,qe[0].height);for(let J=0,se=qe.length;J<se;J++)Te=qe[J],g.format!==on?Pe!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ee,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Te.width,Te.height,Pe,we,Te.data):t.texImage2D(n.TEXTURE_2D,J,Ee,Te.width,Te.height,0,Pe,we,Te.data)}else if(g.isDataArrayTexture)D?(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Pe,we,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,Pe,we,Q.data);else if(g.isData3DTexture)D?(me&&t.texStorage3D(n.TEXTURE_3D,ce,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Pe,we,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,Pe,we,Q.data);else if(g.isFramebufferTexture){if(me)if(D)t.texStorage2D(n.TEXTURE_2D,ce,Ee,Q.width,Q.height);else{let J=Q.width,se=Q.height;for(let Fe=0;Fe<ce;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ee,J,se,0,Pe,we,null),J>>=1,se>>=1}}else if(qe.length>0&&Oe){D&&me&&t.texStorage2D(n.TEXTURE_2D,ce,Ee,qe[0].width,qe[0].height);for(let J=0,se=qe.length;J<se;J++)Te=qe[J],D?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Pe,we,Te):t.texImage2D(n.TEXTURE_2D,J,Ee,Pe,we,Te);g.generateMipmaps=!1}else D?(me&&t.texStorage2D(n.TEXTURE_2D,ce,Ee,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,we,Q)):t.texImage2D(n.TEXTURE_2D,0,Ee,Pe,we,Q);C(g,Oe)&&A(oe),Ae.__version=ue.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Xe(E,g,z){if(g.image.length!==6)return;const oe=Se(E,g),re=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);const ue=i.get(re);if(re.version!==ue.__version||oe===!0){t.activeTexture(n.TEXTURE0+z);const Ae=ht.getPrimaries(ht.workingColorSpace),he=g.colorSpace===Jt?null:ht.getPrimaries(g.colorSpace),xe=g.colorSpace===Jt||Ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const R=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,Q=[];for(let J=0;J<6;J++)!R&&!le?Q[J]=v(g.image[J],!1,!0,c):Q[J]=le?g.image[J].image:g.image[J],Q[J]=Ke(g,Q[J]);const Oe=Q[0],Pe=y(Oe)||s,we=a.convert(g.format,g.colorSpace),Ee=a.convert(g.type),Te=V(g.internalFormat,we,Ee,g.colorSpace),qe=s&&g.isVideoTexture!==!0,D=ue.__version===void 0||oe===!0;let me=M(g,Oe,Pe);Ne(n.TEXTURE_CUBE_MAP,g,Pe);let ce;if(R){qe&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Te,Oe.width,Oe.height);for(let J=0;J<6;J++){ce=Q[J].mipmaps;for(let se=0;se<ce.length;se++){const Fe=ce[se];g.format!==on?we!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,Fe.width,Fe.height,we,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,Te,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,Fe.width,Fe.height,we,Ee,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,Te,Fe.width,Fe.height,0,we,Ee,Fe.data)}}}else{ce=g.mipmaps,qe&&D&&(ce.length>0&&me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Te,Q[0].width,Q[0].height));for(let J=0;J<6;J++)if(le){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Q[J].width,Q[J].height,we,Ee,Q[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Te,Q[J].width,Q[J].height,0,we,Ee,Q[J].data);for(let se=0;se<ce.length;se++){const Ve=ce[se].image[J].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,Ve.width,Ve.height,we,Ee,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,Te,Ve.width,Ve.height,0,we,Ee,Ve.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,Ee,Q[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Te,we,Ee,Q[J]);for(let se=0;se<ce.length;se++){const Fe=ce[se];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,we,Ee,Fe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,Te,we,Ee,Fe.image[J])}}}C(g,Pe)&&A(n.TEXTURE_CUBE_MAP),ue.__version=re.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ge(E,g,z,oe,re,ue){const Ae=a.convert(z.format,z.colorSpace),he=a.convert(z.type),xe=V(z.internalFormat,Ae,he,z.colorSpace);if(!i.get(g).__hasExternalTextures){const le=Math.max(1,g.width>>ue),Q=Math.max(1,g.height>>ue);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ue,xe,le,Q,g.depth,0,Ae,he,null):t.texImage2D(re,ue,xe,le,Q,0,Ae,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ie(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,i.get(z).__webglTexture,0,Ce(g)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,i.get(z).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(E,g,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer&&!g.stencilBuffer){let oe=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||Ie(g)){const re=g.depthTexture;re&&re.isDepthTexture&&(re.type===Cn?oe=n.DEPTH_COMPONENT32F:re.type===wn&&(oe=n.DEPTH_COMPONENT24));const ue=Ce(g);Ie(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,oe,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,oe,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(g.depthBuffer&&g.stencilBuffer){const oe=Ce(g);z&&Ie(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,g.width,g.height):Ie(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const oe=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let re=0;re<oe.length;re++){const ue=oe[re],Ae=a.convert(ue.format,ue.colorSpace),he=a.convert(ue.type),xe=V(ue.internalFormat,Ae,he,ue.colorSpace),R=Ce(g);z&&Ie(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,xe,g.width,g.height):Ie(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,xe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,xe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const oe=i.get(g.depthTexture).__webglTexture,re=Ce(g);if(g.depthTexture.format===Xn)Ie(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(g.depthTexture.format===Ti)Ie(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ve(E){const g=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");it(g.__webglFramebuffer,E)}else if(z){g.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[oe]),g.__webglDepthbuffer[oe]=n.createRenderbuffer(),U(g.__webglDepthbuffer[oe],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),U(g.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(E,g,z){const oe=i.get(E);g!==void 0&&Ge(oe.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ve(E)}function De(E){const g=E.texture,z=i.get(E),oe=i.get(g);E.addEventListener("dispose",K),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=g.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,ue=E.isWebGLMultipleRenderTargets===!0,Ae=y(E)||s;if(re){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(s&&g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let xe=0;xe<g.mipmaps.length;xe++)z.__webglFramebuffer[he][xe]=n.createFramebuffer()}else z.__webglFramebuffer[he]=n.createFramebuffer()}else{if(s&&g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)z.__webglFramebuffer[he]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ue)if(r.drawBuffers){const he=E.texture;for(let xe=0,R=he.length;xe<R;xe++){const le=i.get(he[xe]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ie(E)===!1){const he=ue?g:[g];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const R=he[xe];z.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const le=a.convert(R.format,R.colorSpace),Q=a.convert(R.type),Oe=V(R.internalFormat,le,Q,R.colorSpace,E.isXRRenderTarget===!0),Pe=Ce(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Oe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),U(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g,Ae);for(let he=0;he<6;he++)if(s&&g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Ge(z.__webglFramebuffer[he][xe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else Ge(z.__webglFramebuffer[he],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);C(g,Ae)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const he=E.texture;for(let xe=0,R=he.length;xe<R;xe++){const le=he[xe],Q=i.get(le);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ne(n.TEXTURE_2D,le,Ae),Ge(z.__webglFramebuffer,E,le,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),C(le,Ae)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,oe.__webglTexture),Ne(he,g,Ae),s&&g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Ge(z.__webglFramebuffer[xe],E,g,n.COLOR_ATTACHMENT0,he,xe);else Ge(z.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,he,0);C(g,Ae)&&A(he),t.unbindTexture()}E.depthBuffer&&ve(E)}function ke(E){const g=y(E)||s,z=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,re=z.length;oe<re;oe++){const ue=z[oe];if(C(ue,g)){const Ae=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ue).__webglTexture;t.bindTexture(Ae,he),A(Ae),t.unbindTexture()}}}function be(E){if(s&&E.samples>0&&Ie(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],z=E.width,oe=E.height;let re=n.COLOR_BUFFER_BIT;const ue=[],Ae=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(E),xe=E.isWebGLMultipleRenderTargets===!0;if(xe)for(let R=0;R<g.length;R++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let R=0;R<g.length;R++){ue.push(n.COLOR_ATTACHMENT0+R),E.depthBuffer&&ue.push(Ae);const le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(le===!1&&(E.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),xe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[R]),le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),xe){const Q=i.get(g[R]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,z,oe,0,0,z,oe,re,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let R=0;R<g.length;R++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,he.__webglColorRenderbuffer[R]);const le=i.get(g[R]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ce(E){return Math.min(d,E.samples)}function Ie(E){const g=i.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function He(E){const g=o.render.frame;_.get(E)!==g&&(_.set(E,g),E.update())}function Ke(E,g){const z=E.colorSpace,oe=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Sa||z!==Mn&&z!==Jt&&(ht.getTransfer(z)===gt?s===!1?e.has("EXT_sRGB")===!0&&oe===on?(E.format=Sa,E.minFilter=Zt,E.generateMipmaps=!1):g=Do.sRGBToLinear(g):(oe!==on||re!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),g}this.allocateTextureUnit=ae,this.resetTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=_e,this.rebindTextures=ye,this.setupRenderTarget=De,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Ie}function vp(n,e,t){const i=t.isWebGL2;function r(a,o=Jt){let s;const l=ht.getTransfer(o);if(a===Pn)return n.UNSIGNED_BYTE;if(a===To)return n.UNSIGNED_SHORT_4_4_4_4;if(a===bo)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Hl)return n.BYTE;if(a===Gl)return n.SHORT;if(a===Aa)return n.UNSIGNED_SHORT;if(a===yo)return n.INT;if(a===wn)return n.UNSIGNED_INT;if(a===Cn)return n.FLOAT;if(a===Wi)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Vl)return n.ALPHA;if(a===on)return n.RGBA;if(a===kl)return n.LUMINANCE;if(a===Wl)return n.LUMINANCE_ALPHA;if(a===Xn)return n.DEPTH_COMPONENT;if(a===Ti)return n.DEPTH_STENCIL;if(a===Sa)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Xl)return n.RED;if(a===Ao)return n.RED_INTEGER;if(a===ql)return n.RG;if(a===wo)return n.RG_INTEGER;if(a===Co)return n.RGBA_INTEGER;if(a===Fr||a===Or||a===zr||a===Br)if(l===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ka||a===Wa||a===Xa||a===qa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ya||a===ja)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Ya)return l===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===ja)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ka||a===Za||a===$a||a===Ja||a===Qa||a===es||a===ts||a===ns||a===is||a===rs||a===as||a===ss||a===os||a===ls)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ka)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Za)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===$a)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ja)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Qa)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===es)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ts)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ns)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===is)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===rs)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===as)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ss)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===os)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ls)return l===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Hr||a===cs||a===us)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Hr)return l===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===cs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===us)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===jl||a===hs||a===ds||a===fs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Hr)return s.COMPRESSED_RED_RGTC1_EXT;if(a===hs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Wn?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class xp extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Sp extends qt{constructor(e,t,i,r,a,o,s,l,c,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xn&&(i=wn),i===void 0&&h===Ti&&(i=Wn),super(null,r,a,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ep extends Zn{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null;const x=t.getContextAttributes();let p=null,u=null;const T=[],v=[],y=new $t;y.layers.enable(1),y.viewport=new At;const b=new $t;b.layers.enable(2),b.viewport=new At;const C=[y,b],A=new xp;A.layers.enable(1),A.layers.enable(2);let V=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let N=T[I];return N===void 0&&(N=new ca,T[I]=N),N.getTargetRaySpace()},this.getControllerGrip=function(I){let N=T[I];return N===void 0&&(N=new ca,T[I]=N),N.getGripSpace()},this.getHand=function(I){let N=T[I];return N===void 0&&(N=new ca,T[I]=N),N.getHandSpace()};function w(I){const N=v.indexOf(I.inputSource);if(N===-1)return;const _e=T[N];_e!==void 0&&(_e.update(I.inputSource,I.frame,c||o),_e.dispatchEvent({type:I.type,data:I.inputSource}))}function j(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let I=0;I<T.length;I++){const N=v[I];N!==null&&(v[I]=null,T[I].disconnect(N))}V=null,M=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:m}),u=new Yn(m.framebufferWidth,m.framebufferHeight,{format:on,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let N=null,_e=null,ge=null;x.depth&&(ge=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=x.stencil?Ti:Xn,_e=x.stencil?Wn:wn);const ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),u=new Yn(f.textureWidth,f.textureHeight,{format:on,type:Pn,depthTexture:new Sp(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const fe=e.properties.get(u);fe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(I){for(let N=0;N<I.removed.length;N++){const _e=I.removed[N],ge=v.indexOf(_e);ge>=0&&(v[ge]=null,T[ge].disconnect(_e))}for(let N=0;N<I.added.length;N++){const _e=I.added[N];let ge=v.indexOf(_e);if(ge===-1){for(let fe=0;fe<T.length;fe++)if(fe>=v.length){v.push(_e),ge=fe;break}else if(v[fe]===null){v[fe]=_e,ge=fe;break}if(ge===-1)break}const ne=T[ge];ne&&ne.connect(_e)}}const ie=new O,P=new O;function G(I,N,_e){ie.setFromMatrixPosition(N.matrixWorld),P.setFromMatrixPosition(_e.matrixWorld);const ge=ie.distanceTo(P),ne=N.projectionMatrix.elements,fe=_e.projectionMatrix.elements,Ne=ne[14]/(ne[10]-1),Se=ne[14]/(ne[10]+1),Ue=(ne[9]+1)/ne[5],Xe=(ne[9]-1)/ne[5],Ge=(ne[8]-1)/ne[0],U=(fe[8]+1)/fe[0],it=Ne*Ge,ve=Ne*U,ye=ge/(-Ge+U),De=ye*-Ge;N.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(De),I.translateZ(ye),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ke=Ne+ye,be=Se+ye,Ce=it-De,Ie=ve+(ge-De),He=Ue*Se/be*ke,Ke=Xe*Se/be*ke;I.projectionMatrix.makePerspective(Ce,Ie,He,Ke,ke,be),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function Y(I,N){N===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(N.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;A.near=b.near=y.near=I.near,A.far=b.far=y.far=I.far,(V!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),V=A.near,M=A.far);const N=I.parent,_e=A.cameras;Y(A,N);for(let ge=0;ge<_e.length;ge++)Y(_e[ge],N);_e.length===2?G(A,y,b):A.projectionMatrix.copy(y.projectionMatrix),$(I,A,N)};function $(I,N,_e){_e===null?I.matrix.copy(N.matrixWorld):(I.matrix.copy(_e.matrixWorld),I.matrix.invert(),I.matrix.multiply(N.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Xi*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)};let ae=null;function ee(I,N){if(h=N.getViewerPose(c||o),_=N,h!==null){const _e=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ge=!1;_e.length!==A.cameras.length&&(A.cameras.length=0,ge=!0);for(let ne=0;ne<_e.length;ne++){const fe=_e[ne];let Ne=null;if(m!==null)Ne=m.getViewport(fe);else{const Ue=d.getViewSubImage(f,fe);Ne=Ue.viewport,ne===0&&(e.setRenderTargetTextures(u,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(u))}let Se=C[ne];Se===void 0&&(Se=new $t,Se.layers.enable(ne),Se.viewport=new At,C[ne]=Se),Se.matrix.fromArray(fe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(fe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ne===0&&(A.matrix.copy(Se.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ge===!0&&A.cameras.push(Se)}}for(let _e=0;_e<T.length;_e++){const ge=v[_e],ne=T[_e];ge!==null&&ne!==void 0&&ne.update(ge,N,c||o)}ae&&ae(I,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),_=null}const te=new Vo;te.setAnimationLoop(ee),this.setAnimationLoop=function(I){ae=I},this.dispose=function(){}}}function yp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Bo(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,T,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),d(p,u)):u.isMeshPhongMaterial?(a(p,u),h(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(a(p,u),_(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),x(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?l(p,u,T,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ht&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ht&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,T,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ht&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tp(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){const y=v.program;i.uniformBlockBinding(T,y)}function c(T,v){let y=r[T.id];y===void 0&&(_(T),y=h(T),r[T.id]=y,T.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(T,b);const C=e.render.frame;a[T.id]!==C&&(f(T),a[T.id]=C)}function h(T){const v=d();T.__bindingPointIndex=v;const y=n.createBuffer(),b=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,b,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const v=r[T.id],y=T.uniforms,b=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,A=y.length;C<A;C++){const V=y[C];if(m(V,C,b)===!0){const M=V.__offset,w=Array.isArray(V.value)?V.value:[V.value];let j=0;for(let K=0;K<w.length;K++){const ie=w[K],P=x(ie);typeof ie=="number"?(V.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,M+j,V.__data)):ie.isMatrix3?(V.__data[0]=ie.elements[0],V.__data[1]=ie.elements[1],V.__data[2]=ie.elements[2],V.__data[3]=ie.elements[0],V.__data[4]=ie.elements[3],V.__data[5]=ie.elements[4],V.__data[6]=ie.elements[5],V.__data[7]=ie.elements[0],V.__data[8]=ie.elements[6],V.__data[9]=ie.elements[7],V.__data[10]=ie.elements[8],V.__data[11]=ie.elements[0]):(ie.toArray(V.__data,j),j+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,V.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,v,y){const b=T.value;if(y[v]===void 0){if(typeof b=="number")y[v]=b;else{const C=Array.isArray(b)?b:[b],A=[];for(let V=0;V<C.length;V++)A.push(C[V].clone());y[v]=A}return!0}else if(typeof b=="number"){if(y[v]!==b)return y[v]=b,!0}else{const C=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(b)?b:[b];for(let V=0;V<C.length;V++){const M=C[V];if(M.equals(A[V])===!1)return M.copy(A[V]),!0}}return!1}function _(T){const v=T.uniforms;let y=0;const b=16;let C=0;for(let A=0,V=v.length;A<V;A++){const M=v[A],w={boundary:0,storage:0},j=Array.isArray(M.value)?M.value:[M.value];for(let K=0,ie=j.length;K<ie;K++){const P=j[K],G=x(P);w.boundary+=G.boundary,w.storage+=G.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,A>0){C=y%b;const K=b-C;C!==0&&K-w.boundary<0&&(y+=b-C,M.__offset=y)}y+=w.storage}return C=y%b,C>0&&(y+=b-C),T.__size=y,T.__cache={},this}function x(T){const v={boundary:0,storage:0};return typeof T=="number"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function p(T){const v=T.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function u(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},a={}}return{bind:l,update:c,dispose:u}}class jo{constructor(e={}){const{canvas:t=Sc(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;const v=this;let y=!1,b=0,C=0,A=null,V=-1,M=null;const w=new At,j=new At;let K=null;const ie=new et(0);let P=0,G=t.width,Y=t.height,$=1,ae=null,ee=null;const te=new At(0,0,G,Y),I=new At(0,0,G,Y);let N=!1;const _e=new Dr;let ge=!1,ne=!1,fe=null;const Ne=new dt,Se=new Qe,Ue=new O,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return A===null?$:1}let U=i;function it(S,H){for(let k=0;k<S.length;k++){const q=S[k],W=t.getContext(q,H);if(W!==null)return W}return null}try{const S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),U=it(H,S),U===null)throw it(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,ye,De,ke,be,Ce,Ie,He,Ke,E,g,z,oe,re,ue,Ae,he,xe,R,le,Q,Oe,Pe,we;function Ee(){ve=new Ud(U),ye=new wd(U,ve,e),ve.init(ye),Oe=new vp(U,ve,ye),De=new gp(U,ve,ye),ke=new Fd(U),be=new np,Ce=new _p(U,ve,De,be,ye,Oe,ke),Ie=new Rd(v),He=new Dd(v),Ke=new qc(U,ye),Pe=new bd(U,ve,Ke,ye),E=new Id(U,Ke,ke,Pe),g=new Hd(U,E,Ke,ke),R=new Bd(U,ye,Ce),Ae=new Cd(be),z=new tp(v,Ie,He,ve,ye,Pe,Ae),oe=new yp(v,be),re=new rp,ue=new up(ve,ye),xe=new Td(v,Ie,He,De,g,f,l),he=new mp(v,g,ye),we=new Tp(U,ke,ye,De),le=new Ad(U,ve,ke,ye),Q=new Nd(U,ve,ke,ye),ke.programs=z.programs,v.capabilities=ye,v.extensions=ve,v.properties=be,v.renderLists=re,v.shadowMap=he,v.state=De,v.info=ke}Ee();const Te=new Ep(v,U);this.xr=Te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(G,Y,!1))},this.getSize=function(S){return S.set(G,Y)},this.setSize=function(S,H,k=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Y=H,t.width=Math.floor(S*$),t.height=Math.floor(H*$),k===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(G*$,Y*$).floor()},this.setDrawingBufferSize=function(S,H,k){G=S,Y=H,$=k,t.width=Math.floor(S*k),t.height=Math.floor(H*k),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,H,k,q){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,H,k,q),De.viewport(w.copy(te).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(I)},this.setScissor=function(S,H,k,q){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,H,k,q),De.scissor(j.copy(I).multiplyScalar($).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(S){De.setScissorTest(N=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){ee=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(S=!0,H=!0,k=!0){let q=0;if(S){let W=!1;if(A!==null){const Re=A.texture.format;W=Re===Co||Re===wo||Re===Ao}if(W){const Re=A.texture.type,Be=Re===Pn||Re===wn||Re===Aa||Re===Wn||Re===To||Re===bo,We=xe.getClearColor(),Ye=xe.getClearAlpha(),Je=We.r,je=We.g,Ze=We.b;Be?(m[0]=Je,m[1]=je,m[2]=Ze,m[3]=Ye,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Je,_[1]=je,_[2]=Ze,_[3]=Ye,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}H&&(q|=U.DEPTH_BUFFER_BIT),k&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),re.dispose(),ue.dispose(),be.dispose(),Ie.dispose(),He.dispose(),g.dispose(),Pe.dispose(),we.dispose(),z.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ft),Te.removeEventListener("sessionend",tt),fe&&(fe.dispose(),fe=null),pe.stop()};function qe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=ke.autoReset,H=he.enabled,k=he.autoUpdate,q=he.needsUpdate,W=he.type;Ee(),ke.autoReset=S,he.enabled=H,he.autoUpdate=k,he.needsUpdate=q,he.type=W}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ce(S){const H=S.target;H.removeEventListener("dispose",ce),J(H)}function J(S){se(S),be.remove(S)}function se(S){const H=be.get(S).programs;H!==void 0&&(H.forEach(function(k){z.releaseProgram(k)}),S.isShaderMaterial&&z.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,k,q,W,Re){H===null&&(H=Xe);const Be=W.isMesh&&W.matrixWorld.determinant()<0,We=Pt(S,H,k,q,W);De.setMaterial(q,Be);let Ye=k.index,Je=1;if(q.wireframe===!0){if(Ye=E.getWireframeAttribute(k),Ye===void 0)return;Je=2}const je=k.drawRange,Ze=k.attributes.position;let pt=je.start*Je,Mt=(je.start+je.count)*Je;Re!==null&&(pt=Math.max(pt,Re.start*Je),Mt=Math.min(Mt,(Re.start+Re.count)*Je)),Ye!==null?(pt=Math.max(pt,0),Mt=Math.min(Mt,Ye.count)):Ze!=null&&(pt=Math.max(pt,0),Mt=Math.min(Mt,Ze.count));const L=Mt-pt;if(L<0||L===1/0)return;Pe.setup(W,q,We,k,Ye);let F,B=le;if(Ye!==null&&(F=Ke.get(Ye),B=Q,B.setIndex(F)),W.isMesh)q.wireframe===!0?(De.setLineWidth(q.wireframeLinewidth*Ge()),B.setMode(U.LINES)):B.setMode(U.TRIANGLES);else if(W.isLine){let X=q.linewidth;X===void 0&&(X=1),De.setLineWidth(X*Ge()),W.isLineSegments?B.setMode(U.LINES):W.isLineLoop?B.setMode(U.LINE_LOOP):B.setMode(U.LINE_STRIP)}else W.isPoints?B.setMode(U.POINTS):W.isSprite&&B.setMode(U.TRIANGLES);if(W.isInstancedMesh)B.renderInstances(pt,L,W.count);else if(k.isInstancedBufferGeometry){const X=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,de=Math.min(k.instanceCount,X);B.renderInstances(pt,L,de)}else B.render(pt,L)};function Fe(S,H,k){S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,Lt(S,H,k),S.side=Dn,S.needsUpdate=!0,Lt(S,H,k),S.side=_n):Lt(S,H,k)}this.compile=function(S,H,k=null){k===null&&(k=S),p=ue.get(k),p.init(),T.push(p),k.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),S!==k&&S.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(v._useLegacyLights);const q=new Set;return S.traverse(function(W){const Re=W.material;if(Re)if(Array.isArray(Re))for(let Be=0;Be<Re.length;Be++){const We=Re[Be];Fe(We,k,W),q.add(We)}else Fe(Re,k,W),q.add(Re)}),T.pop(),p=null,q},this.compileAsync=function(S,H,k=null){const q=this.compile(S,H,k);return new Promise(W=>{function Re(){if(q.forEach(function(Be){be.get(Be).currentProgram.isReady()&&q.delete(Be)}),q.size===0){W(S);return}setTimeout(Re,10)}ve.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ve=null;function at(S){Ve&&Ve(S)}function ft(){pe.stop()}function tt(){pe.start()}const pe=new Vo;pe.setAnimationLoop(at),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(S){Ve=S,Te.setAnimationLoop(S),S===null?pe.stop():pe.start()},Te.addEventListener("sessionstart",ft),Te.addEventListener("sessionend",tt),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(H),H=Te.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,H,A),p=ue.get(S,T.length),p.init(),T.push(p),Ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),_e.setFromProjectionMatrix(Ne),ne=this.localClippingEnabled,ge=Ae.init(this.clippingPlanes,ne),x=re.get(S,u.length),x.init(),u.push(x),ct(S,H,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(ae,ee),this.info.render.frame++,ge===!0&&Ae.beginShadows();const k=p.state.shadowsArray;if(he.render(k,S,H),ge===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(x,S),p.setupLights(v._useLegacyLights),H.isArrayCamera){const q=H.cameras;for(let W=0,Re=q.length;W<Re;W++){const Be=q[W];wt(x,S,Be,Be.viewport)}}else wt(x,S,H);A!==null&&(Ce.updateMultisampleRenderTarget(A),Ce.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(v,S,H),Pe.resetDefaultState(),V=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ct(S,H,k,q){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||_e.intersectsSprite(S)){q&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const Be=g.update(S),We=S.material;We.visible&&x.push(S,Be,We,k,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||_e.intersectsObject(S))){const Be=g.update(S),We=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ue.copy(Be.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(We)){const Ye=Be.groups;for(let Je=0,je=Ye.length;Je<je;Je++){const Ze=Ye[Je],pt=We[Ze.materialIndex];pt&&pt.visible&&x.push(S,Be,pt,k,Ue.z,Ze)}}else We.visible&&x.push(S,Be,We,k,Ue.z,null)}}const Re=S.children;for(let Be=0,We=Re.length;Be<We;Be++)ct(Re[Be],H,k,q)}function wt(S,H,k,q){const W=S.opaque,Re=S.transmissive,Be=S.transparent;p.setupLightsView(k),ge===!0&&Ae.setGlobalState(v.clippingPlanes,k),Re.length>0&&jt(W,Re,H,k),q&&De.viewport(w.copy(q)),W.length>0&&rt(W,H,k),Re.length>0&&rt(Re,H,k),Be.length>0&&rt(Be,H,k),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function jt(S,H,k,q){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const Re=ye.isWebGL2;fe===null&&(fe=new Yn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Wi:Pn,minFilter:ki,samples:Re?4:0})),v.getDrawingBufferSize(Se),Re?fe.setSize(Se.x,Se.y):fe.setSize(Ar(Se.x),Ar(Se.y));const Be=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(ie),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const We=v.toneMapping;v.toneMapping=Ln,rt(S,k,q),Ce.updateMultisampleRenderTarget(fe),Ce.updateRenderTargetMipmap(fe);let Ye=!1;for(let Je=0,je=H.length;Je<je;Je++){const Ze=H[Je],pt=Ze.object,Mt=Ze.geometry,L=Ze.material,F=Ze.group;if(L.side===_n&&pt.layers.test(q.layers)){const B=L.side;L.side=Ht,L.needsUpdate=!0,en(pt,k,q,Mt,L,F),L.side=B,L.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ce.updateMultisampleRenderTarget(fe),Ce.updateRenderTargetMipmap(fe)),v.setRenderTarget(Be),v.setClearColor(ie,P),v.toneMapping=We}function rt(S,H,k){const q=H.isScene===!0?H.overrideMaterial:null;for(let W=0,Re=S.length;W<Re;W++){const Be=S[W],We=Be.object,Ye=Be.geometry,Je=q===null?Be.material:q,je=Be.group;We.layers.test(k.layers)&&en(We,H,k,Ye,Je,je)}}function en(S,H,k,q,W,Re){S.onBeforeRender(v,H,k,q,W,Re),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(v,H,k,q,S,Re),W.transparent===!0&&W.side===_n&&W.forceSinglePass===!1?(W.side=Ht,W.needsUpdate=!0,v.renderBufferDirect(k,H,q,W,S,Re),W.side=Dn,W.needsUpdate=!0,v.renderBufferDirect(k,H,q,W,S,Re),W.side=_n):v.renderBufferDirect(k,H,q,W,S,Re),S.onAfterRender(v,H,k,q,W,Re)}function Lt(S,H,k){H.isScene!==!0&&(H=Xe);const q=be.get(S),W=p.state.lights,Re=p.state.shadowsArray,Be=W.state.version,We=z.getParameters(S,W.state,Re,H,k),Ye=z.getProgramCacheKey(We);let Je=q.programs;q.environment=S.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(S.isMeshStandardMaterial?He:Ie).get(S.envMap||q.environment),Je===void 0&&(S.addEventListener("dispose",ce),Je=new Map,q.programs=Je);let je=Je.get(Ye);if(je!==void 0){if(q.currentProgram===je&&q.lightsStateVersion===Be)return Bt(S,We),je}else We.uniforms=z.getUniforms(S),S.onBuild(k,We,v),S.onBeforeCompile(We,v),je=z.acquireProgram(We,Ye),Je.set(Ye,je),q.uniforms=We.uniforms;const Ze=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ze.clippingPlanes=Ae.uniform),Bt(S,We),q.needsLights=Ct(S),q.lightsStateVersion=Be,q.needsLights&&(Ze.ambientLightColor.value=W.state.ambient,Ze.lightProbe.value=W.state.probe,Ze.directionalLights.value=W.state.directional,Ze.directionalLightShadows.value=W.state.directionalShadow,Ze.spotLights.value=W.state.spot,Ze.spotLightShadows.value=W.state.spotShadow,Ze.rectAreaLights.value=W.state.rectArea,Ze.ltc_1.value=W.state.rectAreaLTC1,Ze.ltc_2.value=W.state.rectAreaLTC2,Ze.pointLights.value=W.state.point,Ze.pointLightShadows.value=W.state.pointShadow,Ze.hemisphereLights.value=W.state.hemi,Ze.directionalShadowMap.value=W.state.directionalShadowMap,Ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ze.spotShadowMap.value=W.state.spotShadowMap,Ze.spotLightMatrix.value=W.state.spotLightMatrix,Ze.spotLightMap.value=W.state.spotLightMap,Ze.pointShadowMap.value=W.state.pointShadowMap,Ze.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=je,q.uniformsList=null,je}function Gt(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=Mr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Bt(S,H){const k=be.get(S);k.outputColorSpace=H.outputColorSpace,k.instancing=H.instancing,k.instancingColor=H.instancingColor,k.skinning=H.skinning,k.morphTargets=H.morphTargets,k.morphNormals=H.morphNormals,k.morphColors=H.morphColors,k.morphTargetsCount=H.morphTargetsCount,k.numClippingPlanes=H.numClippingPlanes,k.numIntersection=H.numClipIntersection,k.vertexAlphas=H.vertexAlphas,k.vertexTangents=H.vertexTangents,k.toneMapping=H.toneMapping}function Pt(S,H,k,q,W){H.isScene!==!0&&(H=Xe),Ce.resetTextureUnits();const Re=H.fog,Be=q.isMeshStandardMaterial?H.environment:null,We=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mn,Ye=(q.isMeshStandardMaterial?He:Ie).get(q.envMap||Be),Je=q.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,je=!!k.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ze=!!k.morphAttributes.position,pt=!!k.morphAttributes.normal,Mt=!!k.morphAttributes.color;let L=Ln;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(L=v.toneMapping);const F=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,B=F!==void 0?F.length:0,X=be.get(q),de=p.state.lights;if(ge===!0&&(ne===!0||S!==M)){const mt=S===M&&q.id===V;Ae.setState(q,S,mt)}let Z=!1;q.version===X.__version?(X.needsLights&&X.lightsStateVersion!==de.state.version||X.outputColorSpace!==We||W.isInstancedMesh&&X.instancing===!1||!W.isInstancedMesh&&X.instancing===!0||W.isSkinnedMesh&&X.skinning===!1||!W.isSkinnedMesh&&X.skinning===!0||W.isInstancedMesh&&X.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&X.instancingColor===!1&&W.instanceColor!==null||X.envMap!==Ye||q.fog===!0&&X.fog!==Re||X.numClippingPlanes!==void 0&&(X.numClippingPlanes!==Ae.numPlanes||X.numIntersection!==Ae.numIntersection)||X.vertexAlphas!==Je||X.vertexTangents!==je||X.morphTargets!==Ze||X.morphNormals!==pt||X.morphColors!==Mt||X.toneMapping!==L||ye.isWebGL2===!0&&X.morphTargetsCount!==B)&&(Z=!0):(Z=!0,X.__version=q.version);let Me=X.currentProgram;Z===!0&&(Me=Lt(q,H,W));let ze=!1,$e=!1,lt=!1;const ot=Me.getUniforms(),ut=X.uniforms;if(De.useProgram(Me.program)&&(ze=!0,$e=!0,lt=!0),q.id!==V&&(V=q.id,$e=!0),ze||M!==S){ot.setValue(U,"projectionMatrix",S.projectionMatrix),ot.setValue(U,"viewMatrix",S.matrixWorldInverse);const mt=ot.map.cameraPosition;mt!==void 0&&mt.setValue(U,Ue.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ot.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,$e=!0,lt=!0)}if(W.isSkinnedMesh){ot.setOptional(U,W,"bindMatrix"),ot.setOptional(U,W,"bindMatrixInverse");const mt=W.skeleton;mt&&(ye.floatVertexTextures?(mt.boneTexture===null&&mt.computeBoneTexture(),ot.setValue(U,"boneTexture",mt.boneTexture,Ce),ot.setValue(U,"boneTextureSize",mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Et=k.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0&&ye.isWebGL2===!0)&&R.update(W,k,Me),($e||X.receiveShadow!==W.receiveShadow)&&(X.receiveShadow=W.receiveShadow,ot.setValue(U,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ut.envMap.value=Ye,ut.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),$e&&(ot.setValue(U,"toneMappingExposure",v.toneMappingExposure),X.needsLights&&vt(ut,lt),Re&&q.fog===!0&&oe.refreshFogUniforms(ut,Re),oe.refreshMaterialUniforms(ut,q,$,Y,fe),Mr.upload(U,Gt(X),ut,Ce)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Mr.upload(U,Gt(X),ut,Ce),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ot.setValue(U,"center",W.center),ot.setValue(U,"modelViewMatrix",W.modelViewMatrix),ot.setValue(U,"normalMatrix",W.normalMatrix),ot.setValue(U,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const mt=q.uniformsGroups;for(let cn=0,Ir=mt.length;cn<Ir;cn++)if(ye.isWebGL2){const ji=mt[cn];we.update(ji,Me),we.bind(ji,Me)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Me}function vt(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Ct(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,H,k){be.get(S.texture).__webglTexture=H,be.get(S.depthTexture).__webglTexture=k;const q=be.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=k===void 0,q.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,H){const k=be.get(S);k.__webglFramebuffer=H,k.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,k=0){A=S,b=H,C=k;let q=!0,W=null,Re=!1,Be=!1;if(S){const Ye=be.get(S);Ye.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(U.FRAMEBUFFER,null),q=!1):Ye.__webglFramebuffer===void 0?Ce.setupRenderTarget(S):Ye.__hasExternalTextures&&Ce.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);const Je=S.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Be=!0);const je=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(je[H])?W=je[H][k]:W=je[H],Re=!0):ye.isWebGL2&&S.samples>0&&Ce.useMultisampledRTT(S)===!1?W=be.get(S).__webglMultisampledFramebuffer:Array.isArray(je)?W=je[k]:W=je,w.copy(S.viewport),j.copy(S.scissor),K=S.scissorTest}else w.copy(te).multiplyScalar($).floor(),j.copy(I).multiplyScalar($).floor(),K=N;if(De.bindFramebuffer(U.FRAMEBUFFER,W)&&ye.drawBuffers&&q&&De.drawBuffers(S,W),De.viewport(w),De.scissor(j),De.setScissorTest(K),Re){const Ye=be.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ye.__webglTexture,k)}else if(Be){const Ye=be.get(S.texture),Je=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.__webglTexture,k||0,Je)}V=-1},this.readRenderTargetPixels=function(S,H,k,q,W,Re,Be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){De.bindFramebuffer(U.FRAMEBUFFER,We);try{const Ye=S.texture,Je=Ye.format,je=Ye.type;if(Je!==on&&Oe.convert(Je)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=je===Wi&&(ve.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ve.has("EXT_color_buffer_float"));if(je!==Pn&&Oe.convert(je)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Cn&&(ye.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-q&&k>=0&&k<=S.height-W&&U.readPixels(H,k,q,W,Oe.convert(Je),Oe.convert(je),Re)}finally{const Ye=A!==null?be.get(A).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(S,H,k=0){const q=Math.pow(2,-k),W=Math.floor(H.image.width*q),Re=Math.floor(H.image.height*q);Ce.setTexture2D(H,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,S.x,S.y,W,Re),De.unbindTexture()},this.copyTextureToTexture=function(S,H,k,q=0){const W=H.image.width,Re=H.image.height,Be=Oe.convert(k.format),We=Oe.convert(k.type);Ce.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment),H.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,q,S.x,S.y,W,Re,Be,We,H.image.data):H.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,q,S.x,S.y,H.mipmaps[0].width,H.mipmaps[0].height,Be,H.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,q,S.x,S.y,Be,We,H.image),q===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(S,H,k,q,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=S.max.x-S.min.x+1,Be=S.max.y-S.min.y+1,We=S.max.z-S.min.z+1,Ye=Oe.convert(q.format),Je=Oe.convert(q.type);let je;if(q.isData3DTexture)Ce.setTexture3D(q,0),je=U.TEXTURE_3D;else if(q.isDataArrayTexture)Ce.setTexture2DArray(q,0),je=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const Ze=U.getParameter(U.UNPACK_ROW_LENGTH),pt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mt=U.getParameter(U.UNPACK_SKIP_PIXELS),L=U.getParameter(U.UNPACK_SKIP_ROWS),F=U.getParameter(U.UNPACK_SKIP_IMAGES),B=k.isCompressedTexture?k.mipmaps[0]:k.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,B.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,B.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?U.texSubImage3D(je,W,H.x,H.y,H.z,Re,Be,We,Ye,Je,B.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(je,W,H.x,H.y,H.z,Re,Be,We,Ye,B.data)):U.texSubImage3D(je,W,H.x,H.y,H.z,Re,Be,We,Ye,Je,B),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,L),U.pixelStorei(U.UNPACK_SKIP_IMAGES,F),W===0&&q.generateMipmaps&&U.generateMipmap(je),De.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ce.setTextureCube(S,0):S.isData3DTexture?Ce.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ce.setTexture2DArray(S,0):Ce.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){b=0,C=0,A=null,De.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wa?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Lr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?qn:Ro}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qn?Rt:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bp extends jo{}bp.prototype.isWebGL1Renderer=!0;class Ap extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Cr extends Yt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new dt,no=new dt,_r=[],io=new $n,wp=new dt,Ii=new Xt,Ni=new wi;class Cp extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),io.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(io)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),Ni.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Ni)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(i),e.ray.intersectsSphere(Ni)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,gi),no.multiplyMatrices(i,gi),Ii.matrixWorld=no,Ii.raycast(e,_r);for(let o=0,s=_r.length;o<s;o++){const l=_r[o];l.instanceId=a,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ro=new O,ao=new O,so=new dt,ua=new Ra,vr=new wi;class _i extends xt{constructor(e=new Qt,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)ro.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ro.distanceTo(ao);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),vr.radius+=a,e.ray.intersectsSphere(vr)===!1)return;so.copy(r).invert(),ua.copy(e.ray).applyMatrix4(so);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new O,h=new O,d=new O,f=new O,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),T=Math.min(_.count,o.start+o.count);for(let v=u,y=T-1;v<y;v+=m){const b=_.getX(v),C=_.getX(v+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,C),ua.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(f);V<e.near||V>e.far||t.push({distance:V,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let v=u,y=T-1;v<y;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),ua.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}class Hn extends Qt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const h=[],d=new O,f=new O,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const T=[],v=u/i;let y=0;u===0&&o===0?y=.5/t:u===i&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const C=b/t;d.x=-e*Math.cos(r+C*a)*Math.sin(o+v*s),d.y=e*Math.cos(o+v*s),d.z=e*Math.sin(r+C*a)*Math.sin(o+v*s),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(C+y,1-v),T.push(c++)}h.push(T)}for(let u=0;u<i;u++)for(let T=0;T<t;T++){const v=h[u][T+1],y=h[u][T],b=h[u+1][T],C=h[u+1][T+1];(u!==0||o>0)&&m.push(v,y,C),(u!==i-1||l<Math.PI)&&m.push(y,b,C)}this.setIndex(m),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ha extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ua extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Rp extends Ua{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const da=new dt,oo=new O,lo=new O;class Lp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(oo),lo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lo),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pp extends Lp{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dp extends Ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Up extends Ua{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ip{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=co(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=co();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function co(){return(typeof performance>"u"?Date:performance).now()}class uo{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const ho={type:"change"},fa={type:"start"},fo={type:"end"},xr=new Ra,po=new An,Np=Math.cos(70*Mc.DEG2RAD);class Fp extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",g),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ho),i.update(),a=r.NONE},this.update=function(){const R=new O,le=new jn().setFromUnitVectors(e.up,new O(0,1,0)),Q=le.clone().invert(),Oe=new O,Pe=new jn,we=new O,Ee=2*Math.PI;return function(qe=null){const D=i.object.position;R.copy(D).sub(i.target),R.applyQuaternion(le),s.setFromVector3(R),i.autoRotate&&a===r.NONE&&j(M(qe)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let me=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(me)&&isFinite(ce)&&(me<-Math.PI?me+=Ee:me>Math.PI&&(me-=Ee),ce<-Math.PI?ce+=Ee:ce>Math.PI&&(ce-=Ee),me<=ce?s.theta=Math.max(me,Math.min(ce,s.theta)):s.theta=s.theta>(me+ce)/2?Math.max(me,s.theta):Math.min(ce,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=ee(s.radius):s.radius=ee(s.radius*c),R.setFromSpherical(s),R.applyQuaternion(Q),D.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let J=!1;if(i.zoomToCursor&&C){let se=null;if(i.object.isPerspectiveCamera){const Fe=R.length();se=ee(Fe*c);const Ve=Fe-se;i.object.position.addScaledVector(y,Ve),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Fe=new O(b.x,b.y,0);Fe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),J=!0;const Ve=new O(b.x,b.y,0);Ve.unproject(i.object),i.object.position.sub(Ve).add(Fe),i.object.updateMatrixWorld(),se=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;se!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(se).add(i.object.position):(xr.origin.copy(i.object.position),xr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xr.direction))<Np?e.lookAt(i.target):(po.setFromNormalAndCoplanarPoint(i.object.up,i.target),xr.intersectPlane(po,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),J=!0);return c=1,C=!1,J||Oe.distanceToSquared(i.object.position)>o||8*(1-Pe.dot(i.object.quaternion))>o||we.distanceToSquared(i.target)>0?(i.dispatchEvent(ho),Oe.copy(i.object.position),Pe.copy(i.object.quaternion),we.copy(i.target),J=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",re),i.domElement.removeEventListener("pointerdown",be),i.domElement.removeEventListener("pointercancel",Ie),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Ie),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new uo,l=new uo;let c=1;const h=new O,d=new Qe,f=new Qe,m=new Qe,_=new Qe,x=new Qe,p=new Qe,u=new Qe,T=new Qe,v=new Qe,y=new O,b=new Qe;let C=!1;const A=[],V={};function M(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function j(R){l.theta-=R}function K(R){l.phi-=R}const ie=function(){const R=new O;return function(Q,Oe){R.setFromMatrixColumn(Oe,0),R.multiplyScalar(-Q),h.add(R)}}(),P=function(){const R=new O;return function(Q,Oe){i.screenSpacePanning===!0?R.setFromMatrixColumn(Oe,1):(R.setFromMatrixColumn(Oe,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Q),h.add(R)}}(),G=function(){const R=new O;return function(Q,Oe){const Pe=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;R.copy(we).sub(i.target);let Ee=R.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*Q*Ee/Pe.clientHeight,i.object.matrix),P(2*Oe*Ee/Pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie(Q*(i.object.right-i.object.left)/i.object.zoom/Pe.clientWidth,i.object.matrix),P(Oe*(i.object.top-i.object.bottom)/i.object.zoom/Pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ae(R){if(!i.zoomToCursor)return;C=!0;const le=i.domElement.getBoundingClientRect(),Q=R.clientX-le.left,Oe=R.clientY-le.top,Pe=le.width,we=le.height;b.x=Q/Pe*2-1,b.y=-(Oe/we)*2+1,y.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function te(R){d.set(R.clientX,R.clientY)}function I(R){ae(R),u.set(R.clientX,R.clientY)}function N(R){_.set(R.clientX,R.clientY)}function _e(R){f.set(R.clientX,R.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const le=i.domElement;j(2*Math.PI*m.x/le.clientHeight),K(2*Math.PI*m.y/le.clientHeight),d.copy(f),i.update()}function ge(R){T.set(R.clientX,R.clientY),v.subVectors(T,u),v.y>0?Y(w()):v.y<0&&$(w()),u.copy(T),i.update()}function ne(R){x.set(R.clientX,R.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(x),i.update()}function fe(R){ae(R),R.deltaY<0?$(w()):R.deltaY>0&&Y(w()),i.update()}function Ne(R){let le=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),le=!0;break}le&&(R.preventDefault(),i.update())}function Se(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),le=.5*(A[0].pageY+A[1].pageY);d.set(R,le)}}function Ue(){if(A.length===1)_.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),le=.5*(A[0].pageY+A[1].pageY);_.set(R,le)}}function Xe(){const R=A[0].pageX-A[1].pageX,le=A[0].pageY-A[1].pageY,Q=Math.sqrt(R*R+le*le);u.set(0,Q)}function Ge(){i.enableZoom&&Xe(),i.enablePan&&Ue()}function U(){i.enableZoom&&Xe(),i.enableRotate&&Se()}function it(R){if(A.length==1)f.set(R.pageX,R.pageY);else{const Q=xe(R),Oe=.5*(R.pageX+Q.x),Pe=.5*(R.pageY+Q.y);f.set(Oe,Pe)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const le=i.domElement;j(2*Math.PI*m.x/le.clientHeight),K(2*Math.PI*m.y/le.clientHeight),d.copy(f)}function ve(R){if(A.length===1)x.set(R.pageX,R.pageY);else{const le=xe(R),Q=.5*(R.pageX+le.x),Oe=.5*(R.pageY+le.y);x.set(Q,Oe)}p.subVectors(x,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(x)}function ye(R){const le=xe(R),Q=R.pageX-le.x,Oe=R.pageY-le.y,Pe=Math.sqrt(Q*Q+Oe*Oe);T.set(0,Pe),v.set(0,Math.pow(T.y/u.y,i.zoomSpeed)),Y(v.y),u.copy(T)}function De(R){i.enableZoom&&ye(R),i.enablePan&&ve(R)}function ke(R){i.enableZoom&&ye(R),i.enableRotate&&it(R)}function be(R){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",Ce),i.domElement.addEventListener("pointerup",Ie)),ue(R),R.pointerType==="touch"?z(R):He(R))}function Ce(R){i.enabled!==!1&&(R.pointerType==="touch"?oe(R):Ke(R))}function Ie(R){Ae(R),A.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Ie)),i.dispatchEvent(fo),a=r.NONE}function He(R){let le;switch(R.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Jn.DOLLY:if(i.enableZoom===!1)return;I(R),a=r.DOLLY;break;case Jn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;N(R),a=r.PAN}else{if(i.enableRotate===!1)return;te(R),a=r.ROTATE}break;case Jn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;te(R),a=r.ROTATE}else{if(i.enablePan===!1)return;N(R),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(fa)}function Ke(R){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;_e(R);break;case r.DOLLY:if(i.enableZoom===!1)return;ge(R);break;case r.PAN:if(i.enablePan===!1)return;ne(R);break}}function E(R){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(R.preventDefault(),i.dispatchEvent(fa),fe(R),i.dispatchEvent(fo))}function g(R){i.enabled===!1||i.enablePan===!1||Ne(R)}function z(R){switch(he(R),A.length){case 1:switch(i.touches.ONE){case Qn.ROTATE:if(i.enableRotate===!1)return;Se(),a=r.TOUCH_ROTATE;break;case Qn.PAN:if(i.enablePan===!1)return;Ue(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Qn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(),a=r.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(fa)}function oe(R){switch(he(R),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;it(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ve(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(R),i.update();break;default:a=r.NONE}}function re(R){i.enabled!==!1&&R.preventDefault()}function ue(R){A.push(R)}function Ae(R){delete V[R.pointerId];for(let le=0;le<A.length;le++)if(A[le].pointerId==R.pointerId){A.splice(le,1);return}}function he(R){let le=V[R.pointerId];le===void 0&&(le=new Qe,V[R.pointerId]=le),le.set(R.pageX,R.pageY)}function xe(R){const le=R.pointerId===A[0].pointerId?A[1]:A[0];return V[le.pointerId]}i.domElement.addEventListener("contextmenu",re),i.domElement.addEventListener("pointerdown",be),i.domElement.addEventListener("pointercancel",Ie),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var Nt=Math.PI,_t=Nt*2,Bi=Nt/180,Op=180/Nt,zp=1440,Bp=398600.8,Wt=6378.135,xn=60/Math.sqrt(Wt*Wt*Wt/Bp),pa=Wt*xn/60,Hp=1/xn,Vn=.001082616,Gp=-253881e-11,Vp=-165597e-11,kn=Gp/Vn,qi=2/3;function kp(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,a=0;i>a+t[r-1]&&r<12;)a+=t[r-1],r+=1;var o=r,s=i-a,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:o,day:s,hr:c,minute:h,sec:d}}function mo(n,e,t,i,r,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+a/60+r)/60+i)/24}function Ia(n,e,t,i,r,a,o){if(n instanceof Date){var s=n;return mo(s.getUTCFullYear(),s.getUTCMonth()+1,s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return mo(n,e,t,i,r,a,o)}function Ko(n,e){var t=n.e3,i=n.ee2,r=n.peo,a=n.pgho,o=n.pho,s=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,_=n.sh2,x=n.sh3,p=n.si2,u=n.si3,T=n.sl2,v=n.sl3,y=n.sl4,b=n.t,C=n.xgh2,A=n.xgh3,V=n.xgh4,M=n.xh2,w=n.xh3,j=n.xi2,K=n.xi3,ie=n.xl2,P=n.xl3,G=n.xl4,Y=n.zmol,$=n.zmos,ae=e.init,ee=e.opsmode,te=e.ep,I=e.inclp,N=e.nodep,_e=e.argpp,ge=e.mp,ne,fe,Ne,Se,Ue,Xe,Ge,U,it,ve,ye,De,ke,be,Ce,Ie,He,Ke,E,g,z,oe=119459e-10,re=.01675,ue=.00015835218,Ae=.0549;z=$+oe*b,ae==="y"&&(z=$),g=z+2*re*Math.sin(z),He=Math.sin(g),ve=.5*He*He-.25,ye=-.5*He*Math.cos(g);var he=c*ve+h*ye,xe=p*ve+u*ye,R=T*ve+v*ye+y*He,le=d*ve+f*ye+m*He,Q=_*ve+x*ye;z=Y+ue*b,ae==="y"&&(z=Y),g=z+2*Ae*Math.sin(z),He=Math.sin(g),ve=.5*He*He-.25,ye=-.5*He*Math.cos(g);var Oe=i*ve+t*ye,Pe=j*ve+K*ye,we=ie*ve+P*ye+G*He,Ee=C*ve+A*ye+V*He,Te=M*ve+w*ye;return De=he+Oe,Ce=xe+Pe,Ie=R+we,ke=le+Ee,be=Q+Te,ae==="n"&&(De-=r,Ce-=s,Ie-=l,ke-=a,be-=o,I+=Ce,te+=De,Se=Math.sin(I),Ne=Math.cos(I),I>=.2?(be/=Se,ke-=Ne*be,_e+=ke,N+=be,ge+=Ie):(Xe=Math.sin(N),Ue=Math.cos(N),ne=Se*Xe,fe=Se*Ue,Ge=be*Ue+Ce*Ne*Xe,U=-be*Xe+Ce*Ne*Ue,ne+=Ge,fe+=U,N%=_t,N<0&&ee==="a"&&(N+=_t),Ke=ge+_e+Ne*N,it=Ie+ke-Ce*N*Se,Ke+=it,E=N,N=Math.atan2(ne,fe),N<0&&ee==="a"&&(N+=_t),Math.abs(E-N)>Nt&&(N<E?N+=_t:N-=_t),ge+=Ie,_e=Ke-ge-Ne*N)),{ep:te,inclp:I,nodep:N,argpp:_e,mp:ge}}function Wp(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,a=n.inclp,o=n.nodep,s=n.np,l,c,h,d,f,m,_,x,p,u,T,v,y,b,C,A,V,M,w,j,K,ie,P,G,Y,$,ae,ee,te,I,N,_e,ge,ne,fe,Ne,Se,Ue,Xe,Ge,U,it,ve,ye,De,ke,be,Ce,Ie,He,Ke,E,g,z,oe,re,ue,Ae,he,xe,R,le,Q,Oe=.01675,Pe=.0549,we=29864797e-13,Ee=47968065e-14,Te=.39785416,qe=.91744867,D=.1945905,me=-.98088458,ce=s,J=t,se=Math.sin(o),Fe=Math.cos(o),Ve=Math.sin(i),at=Math.cos(i),ft=Math.sin(a),tt=Math.cos(a),pe=J*J,ct=1-pe,wt=Math.sqrt(ct),jt=0,rt=0,en=0,Lt=0,Gt=0,Bt=e+18261.5+r/1440,Pt=(4.523602-.00092422029*Bt)%_t,vt=Math.sin(Pt),Ct=Math.cos(Pt),S=.91375164-.03568096*Ct,H=Math.sqrt(1-S*S),k=.089683511*vt/H,q=Math.sqrt(1-k*k),W=5.8351514+.001944368*Bt,Re=.39785416*vt/H,Be=q*Ct+.91744867*k*vt;Re=Math.atan2(Re,Be),Re+=W-Pt;var We=Math.cos(Re),Ye=Math.sin(Re);j=D,K=me,G=qe,Y=Te,ie=Fe,P=se,T=we;for(var Je=1/ce,je=0;je<2;)je+=1,l=j*ie+K*G*P,h=-K*ie+j*G*P,_=-j*P+K*G*ie,x=K*Y,p=K*P+j*G*ie,u=j*Y,c=tt*_+ft*x,d=tt*p+ft*u,f=-ft*_+tt*x,m=-ft*p+tt*u,v=l*at+c*Ve,y=h*at+d*Ve,b=-l*Ve+c*at,C=-h*Ve+d*at,A=f*Ve,V=m*Ve,M=f*at,w=m*at,R=12*v*v-3*b*b,le=24*v*y-6*b*C,Q=12*y*y-3*C*C,E=3*(l*l+c*c)+R*pe,g=6*(l*h+c*d)+le*pe,z=3*(h*h+d*d)+Q*pe,oe=-6*l*f+pe*(-24*v*M-6*b*A),re=-6*(l*m+h*f)+pe*(-24*(y*M+v*w)+-6*(b*V+C*A)),ue=-6*h*m+pe*(-24*y*w-6*C*V),Ae=6*c*f+pe*(24*v*A-6*b*M),he=6*(d*f+c*m)+pe*(24*(y*A+v*V)-6*(C*M+b*w)),xe=6*d*m+pe*(24*y*V-6*C*w),E=E+E+ct*R,g=g+g+ct*le,z=z+z+ct*Q,be=T*Je,ke=-.5*be/wt,Ce=be*wt,De=-15*J*Ce,Ie=v*b+y*C,He=y*b+v*C,Ke=y*C-v*b,je===1&&($=De,ae=ke,ee=be,te=Ce,I=Ie,N=He,_e=Ke,ge=E,ne=g,fe=z,Ne=oe,Se=re,Ue=ue,Xe=Ae,Ge=he,U=xe,it=R,ve=le,ye=Q,j=We,K=Ye,G=S,Y=H,ie=q*Fe+k*se,P=se*q-Fe*k,T=Ee);var Ze=(4.7199672+(.2299715*Bt-W))%_t,pt=(6.2565837+.017201977*Bt)%_t,Mt=2*$*N,L=2*$*_e,F=2*ae*Se,B=2*ae*(Ue-Ne),X=-2*ee*ne,de=-2*ee*(fe-ge),Z=-2*ee*(-21-9*pe)*Oe,Me=2*te*ve,ze=2*te*(ye-it),$e=-18*te*Oe,lt=-2*ae*Ge,ot=-2*ae*(U-Xe),ut=2*De*He,Et=2*De*Ke,mt=2*ke*re,cn=2*ke*(ue-oe),Ir=-2*be*g,ji=-2*be*(z-E),tl=-2*be*(-21-9*pe)*Pe,nl=2*Ce*le,il=2*Ce*(Q-R),rl=-18*Ce*Pe,al=-2*ke*he,sl=-2*ke*(xe-Ae);return{snodm:se,cnodm:Fe,sinim:ft,cosim:tt,sinomm:Ve,cosomm:at,day:Bt,e3:Et,ee2:ut,em:J,emsq:pe,gam:W,peo:jt,pgho:Lt,pho:Gt,pinco:rt,plo:en,rtemsq:wt,se2:Mt,se3:L,sgh2:Me,sgh3:ze,sgh4:$e,sh2:lt,sh3:ot,si2:F,si3:B,sl2:X,sl3:de,sl4:Z,s1:De,s2:ke,s3:be,s4:Ce,s5:Ie,s6:He,s7:Ke,ss1:$,ss2:ae,ss3:ee,ss4:te,ss5:I,ss6:N,ss7:_e,sz1:ge,sz2:ne,sz3:fe,sz11:Ne,sz12:Se,sz13:Ue,sz21:Xe,sz22:Ge,sz23:U,sz31:it,sz32:ve,sz33:ye,xgh2:nl,xgh3:il,xgh4:rl,xh2:al,xh3:sl,xi2:mt,xi3:cn,xl2:Ir,xl3:ji,xl4:tl,nm:ce,z1:E,z2:g,z3:z,z11:oe,z12:re,z13:ue,z21:Ae,z22:he,z23:xe,z31:R,z32:le,z33:Q,zmol:Ze,zmos:pt}}function Xp(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,a=n.s3,o=n.s4,s=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,_=n.sz1,x=n.sz3,p=n.sz11,u=n.sz13,T=n.sz21,v=n.sz23,y=n.sz31,b=n.sz33,C=n.t,A=n.tc,V=n.gsto,M=n.mo,w=n.mdot,j=n.no,K=n.nodeo,ie=n.nodedot,P=n.xpidot,G=n.z1,Y=n.z3,$=n.z11,ae=n.z13,ee=n.z21,te=n.z23,I=n.z31,N=n.z33,_e=n.ecco,ge=n.eccsq,ne=n.emsq,fe=n.em,Ne=n.argpm,Se=n.inclm,Ue=n.mm,Xe=n.nm,Ge=n.nodem,U=n.irez,it=n.atime,ve=n.d2201,ye=n.d2211,De=n.d3210,ke=n.d3222,be=n.d4410,Ce=n.d4422,Ie=n.d5220,He=n.d5232,Ke=n.d5421,E=n.d5433,g=n.dedt,z=n.didt,oe=n.dmdt,re=n.dnodt,ue=n.domdt,Ae=n.del1,he=n.del2,xe=n.del3,R=n.xfact,le=n.xlamo,Q=n.xli,Oe=n.xni,Pe,we,Ee,Te,qe,D,me,ce,J,se,Fe,Ve,at,ft,tt,pe,ct,wt,jt,rt,en,Lt,Gt,Bt,Pt,vt,Ct,S,H,k,q,W,Re=17891679e-13,Be=21460748e-13,We=22123015e-14,Ye=17891679e-13,Je=73636953e-16,je=21765803e-16,Ze=.0043752690880113,pt=37393792e-14,Mt=11428639e-14,L=.00015835218,F=119459e-10;U=0,Xe<.0052359877&&Xe>.0034906585&&(U=1),Xe>=.00826&&Xe<=.00924&&fe>=.5&&(U=2);var B=c*F*m,X=h*F*(p+u),de=-F*d*(_+x-14-6*ne),Z=f*F*(y+b-6),Me=-F*h*(T+v);(Se<.052359877||Se>Nt-.052359877)&&(Me=0),l!==0&&(Me/=l);var ze=Z-e*Me;g=B+i*L*s,z=X+r*L*($+ae),oe=de-L*a*(G+Y-14-6*ne);var $e=o*L*(I+N-6),lt=-L*r*(ee+te);(Se<.052359877||Se>Nt-.052359877)&&(lt=0),ue=ze+$e,re=Me,l!==0&&(ue-=e/l*lt,re+=lt/l);var ot=0,ut=(V+A*Ze)%_t;if(fe+=g*C,Se+=z*C,Ne+=ue*C,Ge+=re*C,Ue+=oe*C,U!==0){if(k=Math.pow(Xe/xn,qi),U===2){q=e*e;var Et=fe;fe=_e;var mt=ne;ne=ge,W=fe*ne,ft=-.306-(fe-.64)*.44,fe<=.65?(tt=3.616-13.247*fe+16.29*ne,ct=-19.302+117.39*fe-228.419*ne+156.591*W,wt=-18.9068+109.7927*fe-214.6334*ne+146.5816*W,jt=-41.122+242.694*fe-471.094*ne+313.953*W,rt=-146.407+841.88*fe-1629.014*ne+1083.435*W,en=-532.114+3017.977*fe-5740.032*ne+3708.276*W):(tt=-72.099+331.819*fe-508.738*ne+266.724*W,ct=-346.844+1582.851*fe-2415.925*ne+1246.113*W,wt=-342.585+1554.908*fe-2366.899*ne+1215.972*W,jt=-1052.797+4758.686*fe-7193.992*ne+3651.957*W,rt=-3581.69+16178.11*fe-24462.77*ne+12422.52*W,fe>.715?en=-5149.66+29936.92*fe-54087.36*ne+31324.56*W:en=1464.74-4664.75*fe+3763.64*ne),fe<.7?(Bt=-919.2277+4988.61*fe-9064.77*ne+5542.21*W,Lt=-822.71072+4568.6173*fe-8491.4146*ne+5337.524*W,Gt=-853.666+4690.25*fe-8624.77*ne+5341.4*W):(Bt=-37995.78+161616.52*fe-229838.2*ne+109377.94*W,Lt=-51752.104+218913.95*fe-309468.16*ne+146349.42*W,Gt=-40023.88+170470.89*fe-242699.48*ne+115605.82*W),Pt=l*l,Pe=.75*(1+2*e+q),we=1.5*Pt,Te=1.875*l*(1-2*e-3*q),qe=-1.875*l*(1+2*e-3*q),me=35*Pt*Pe,ce=39.375*Pt*Pt,J=9.84375*l*(Pt*(1-2*e-5*q)+.33333333*(-2+4*e+6*q)),se=l*(4.92187512*Pt*(-2-4*e+10*q)+6.56250012*(1+2*e-3*q)),Fe=29.53125*l*(2-8*e+q*(-12+8*e+10*q)),Ve=29.53125*l*(-2-8*e+q*(12+8*e-10*q)),S=Xe*Xe,H=k*k,Ct=3*S*H,vt=Ct*Ye,ve=vt*Pe*ft,ye=vt*we*tt,Ct*=k,vt=Ct*pt,De=vt*Te*ct,ke=vt*qe*wt,Ct*=k,vt=2*Ct*Je,be=vt*me*jt,Ce=vt*ce*rt,Ct*=k,vt=Ct*Mt,Ie=vt*J*en,He=vt*se*Gt,vt=2*Ct*je,Ke=vt*Fe*Lt,E=vt*Ve*Bt,le=(M+K+K-(ut+ut))%_t,R=w+oe+2*(ie+re-Ze)-j,fe=Et,ne=mt}U===1&&(at=1+ne*(-2.5+.8125*ne),ct=1+2*ne,pe=1+ne*(-6+6.60937*ne),Pe=.75*(1+e)*(1+e),Ee=.9375*l*l*(1+3*e)-.75*(1+e),D=1+e,D*=1.875*D*D,Ae=3*Xe*Xe*k*k,he=2*Ae*Pe*at*Re,xe=3*Ae*D*pe*We*k,Ae=Ae*Ee*ct*Be*k,le=(M+K+t-ut)%_t,R=w+P+oe+ue+re-(j+Ze)),Q=le,Oe=j,it=0,Xe=j+ot}return{em:fe,argpm:Ne,inclm:Se,mm:Ue,nm:Xe,nodem:Ge,irez:U,atime:it,d2201:ve,d2211:ye,d3210:De,d3222:ke,d4410:be,d4422:Ce,d5220:Ie,d5232:He,d5421:Ke,d5433:E,dedt:g,didt:z,dmdt:oe,dndt:ot,dnodt:re,domdt:ue,del1:Ae,del2:he,del3:xe,xfact:R,xlamo:le,xli:Q,xni:Oe}}function go(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Bi/240%_t,t<0&&(t+=_t),t}function Zo(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?go(Ia.apply(void 0,arguments)):go.apply(void 0,arguments)}function qp(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,a=n.no,o=e*e,s=1-o,l=Math.sqrt(s),c=Math.cos(i),h=c*c,d=Math.pow(xn/a,qi),f=.75*Vn*(3*h-1)/(l*s),m=f/(d*d),_=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(_*_),a/=1+m;var x=Math.pow(xn/a,qi),p=Math.sin(i),u=x*s,T=1-5*h,v=-T-h-h,y=1/x,b=u*u,C=x*(1-e),A="n",V;if(r==="a"){var M=t-7305,w=Math.floor(M+1e-8),j=M-w,K=.017202791694070362,ie=1.7321343856509375,P=5075514194322695e-30,G=K+_t;V=(ie+K*w+G*j+M*M*P)%_t,V<0&&(V+=_t)}else V=Zo(t+24332815e-1);return{no:a,method:A,ainv:y,ao:x,con41:v,con42:T,cosio:c,cosio2:h,eccsq:o,omeosq:s,posq:b,rp:C,rteosq:l,sinio:p,gsto:V}}function Yp(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,a=n.d3222,o=n.d4410,s=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,_=n.del2,x=n.del3,p=n.didt,u=n.dmdt,T=n.dnodt,v=n.domdt,y=n.argpo,b=n.argpdot,C=n.t,A=n.tc,V=n.gsto,M=n.xfact,w=n.xlamo,j=n.no,K=n.atime,ie=n.em,P=n.argpm,G=n.inclm,Y=n.xli,$=n.mm,ae=n.xni,ee=n.nodem,te=n.nm,I=.13130908,N=2.8843198,_e=.37448087,ge=5.7686396,ne=.95240898,fe=1.8014998,Ne=1.050833,Se=4.4108898,Ue=.0043752690880113,Xe=720,Ge=-720,U=259200,it,ve,ye,De,ke,be,Ce,Ie,He=0,Ke=0,E=(V+A*Ue)%_t;if(ie+=f*C,G+=p*C,P+=v*C,ee+=T*C,$+=u*C,e!==0){(K===0||C*K<=0||Math.abs(C)<Math.abs(K))&&(K=0,ae=j,Y=w),C>0?it=Xe:it=Ge;for(var g=381;g===381;)e!==2?(Ce=m*Math.sin(Y-I)+_*Math.sin(2*(Y-N))+x*Math.sin(3*(Y-_e)),ke=ae+M,be=m*Math.cos(Y-I)+2*_*Math.cos(2*(Y-N))+3*x*Math.cos(3*(Y-_e)),be*=ke):(Ie=y+b*K,ye=Ie+Ie,ve=Y+Y,Ce=t*Math.sin(ye+Y-ge)+i*Math.sin(Y-ge)+r*Math.sin(Ie+Y-ne)+a*Math.sin(-Ie+Y-ne)+o*Math.sin(ye+ve-fe)+s*Math.sin(ve-fe)+l*Math.sin(Ie+Y-Ne)+c*Math.sin(-Ie+Y-Ne)+h*Math.sin(Ie+ve-Se)+d*Math.sin(-Ie+ve-Se),ke=ae+M,be=t*Math.cos(ye+Y-ge)+i*Math.cos(Y-ge)+r*Math.cos(Ie+Y-ne)+a*Math.cos(-Ie+Y-ne)+l*Math.cos(Ie+Y-Ne)+c*Math.cos(-Ie+Y-Ne)+2*(o*Math.cos(ye+ve-fe)+s*Math.cos(ve-fe)+h*Math.cos(Ie+ve-Se)+d*Math.cos(-Ie+ve-Se)),be*=ke),Math.abs(C-K)>=Xe?g=381:(Ke=C-K,g=0),g===381&&(Y+=ke*it+Ce*U,ae+=Ce*it+be*U,K+=it);te=ae+Ce*Ke+be*Ke*Ke*.5,De=Y+ke*Ke+Ce*Ke*Ke*.5,e!==1?($=De-2*ee+2*E,He=te-j):($=De-ee-P+E,He=te-j),te=j+He}return{atime:K,em:ie,argpm:P,inclm:G,xli:Y,mm:$,xni:ae,nodem:ee,dndt:He,nm:te}}function $o(n,e){var t,i,r,a,o,s,l,c,h,d,f,m,_,x,p,u,T,v,y,b,C,A,V,M,w,j,K,ie=15e-13;n.t=e,n.error=0;var P=n.mo+n.mdot*n.t,G=n.argpo+n.argpdot*n.t,Y=n.nodeo+n.nodedot*n.t;h=G,C=P;var $=n.t*n.t;if(V=Y+n.nodecf*$,T=1-n.cc1*n.t,v=n.bstar*n.cc4*n.t,y=n.t2cof*$,n.isimp!==1){l=n.omgcof*n.t;var ae=1+n.eta*Math.cos(P);s=n.xmcof*(ae*ae*ae-n.delmo),u=l+s,C=P+u,h=G-u,m=$*n.t,_=m*n.t,T=T-n.d2*$-n.d3*m-n.d4*_,v+=n.bstar*n.cc5*(Math.sin(C)-n.sinmao),y=y+n.t3cof*m+_*(n.t4cof+n.t*n.t5cof)}A=n.no;var ee=n.ecco;if(b=n.inclo,n.method==="d"){x=n.t;var te={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:x,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:ee,argpm:h,inclm:b,xli:n.xli,mm:C,xni:n.xni,nodem:V,nm:A},I=Yp(te);ee=I.em,h=I.argpm,b=I.inclm,C=I.mm,V=I.nodem,A=I.nm}if(A<=0)return n.error=2,[!1,!1];var N=Math.pow(xn/A,qi)*T*T;if(A=xn/Math.pow(N,1.5),ee-=v,ee>=1||ee<-.001)return n.error=1,[!1,!1];ee<1e-6&&(ee=1e-6),C+=n.no*y,w=C+h+V,V%=_t,h%=_t,w%=_t,C=(w-h-V)%_t;var _e=Math.sin(b),ge=Math.cos(b),ne=ee;if(M=b,d=h,K=V,j=C,a=_e,r=ge,n.method==="d"){var fe={inclo:n.inclo,init:"n",ep:ne,inclp:M,nodep:K,argpp:d,mp:j,opsmode:n.operationmode},Ne=Ko(n,fe);if(ne=Ne.ep,K=Ne.nodep,d=Ne.argpp,j=Ne.mp,M=Ne.inclp,M<0&&(M=-M,K+=Nt,d-=Nt),ne<0||ne>1)return n.error=3,[!1,!1]}n.method==="d"&&(a=Math.sin(M),r=Math.cos(M),n.aycof=-.5*kn*a,Math.abs(r+1)>15e-13?n.xlcof=-.25*kn*a*(3+5*r)/(1+r):n.xlcof=-.25*kn*a*(3+5*r)/ie);var Se=ne*Math.cos(d);u=1/(N*(1-ne*ne));var Ue=ne*Math.sin(d)+u*n.aycof,Xe=j+d+K+u*n.xlcof*Se,Ge=(Xe-K)%_t;c=Ge,p=9999.9;for(var U=1;Math.abs(p)>=1e-12&&U<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*Se-i*Ue,p=(Ge-Ue*t+Se*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,U+=1;var it=Se*t+Ue*i,ve=Se*i-Ue*t,ye=Se*Se+Ue*Ue,De=N*(1-ye);if(De<0)return n.error=4,[!1,!1];var ke=N*(1-it),be=Math.sqrt(N)*ve/ke,Ce=Math.sqrt(De)/ke,Ie=Math.sqrt(1-ye);u=ve/(1+Ie);var He=N/ke*(i-Ue-Se*u),Ke=N/ke*(t-Se+Ue*u);f=Math.atan2(He,Ke);var E=(Ke+Ke)*He,g=1-2*He*He;u=1/De;var z=.5*Vn*u,oe=z*u;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var re=ke*(1-1.5*oe*Ie*n.con41)+.5*z*n.x1mth2*g;if(re<1)return n.error=6,{position:!1,velocity:!1};f-=.25*oe*n.x7thm1*E;var ue=K+1.5*oe*r*E,Ae=M+1.5*oe*r*a*g,he=be-A*z*n.x1mth2*E/xn,xe=Ce+A*z*(n.x1mth2*g+1.5*n.con41)/xn,R=Math.sin(f),le=Math.cos(f),Q=Math.sin(ue),Oe=Math.cos(ue),Pe=Math.sin(Ae),we=Math.cos(Ae),Ee=-Q*we,Te=Oe*we,qe=Ee*R+Oe*le,D=Te*R+Q*le,me=Pe*R,ce=Ee*le-Oe*R,J=Te*le-Q*R,se=Pe*le,Fe={x:re*qe*Wt,y:re*D*Wt,z:re*me*Wt},Ve={x:(he*qe+xe*ce)*pa,y:(he*D+xe*J)*pa,z:(he*me+xe*se)*pa};return{position:Fe,velocity:Ve}}function jp(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,a=e.xbstar,o=e.xecco,s=e.xargpo,l=e.xinclo,c=e.xmo,h=e.xno,d=e.xnodeo,f,m,_,x,p,u,T,v,y,b,C,A,V,M,w,j,K,ie,P,G,Y,$,ae,ee,te,I,N,_e,ge,ne,fe,Ne,Se,Ue,Xe,Ge,U,it,ve,ye,De,ke,be,Ce,Ie,He,Ke,E,g,z,oe,re,ue,Ae,he,xe,R=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=a,n.ecco=o,n.argpo=s,n.inclo=l,n.mo=c,n.no=h,n.nodeo=d,n.operationmode=t;var le=78/Wt+1,Q=42/Wt,Oe=Q*Q*Q*Q;n.init="y",n.t=0;var Pe={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},we=qp(Pe),Ee=we.ao,Te=we.con42,qe=we.cosio,D=we.cosio2,me=we.eccsq,ce=we.omeosq,J=we.posq,se=we.rp,Fe=we.rteosq,Ve=we.sinio;if(n.no=we.no,n.con41=we.con41,n.gsto=we.gsto,n.a=Math.pow(n.no*Hp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,ce>=0||n.no>=0){if(n.isimp=0,se<220/Wt+1&&(n.isimp=1),N=le,Y=Oe,ie=(se-1)*Wt,ie<156){N=ie-78,ie<98&&(N=20);var at=(120-N)/Wt;Y=at*at*at*at,N=N/Wt+1}P=1/J,He=1/(Ee-N),n.eta=Ee*n.ecco*He,A=n.eta*n.eta,C=n.ecco*n.eta,G=Math.abs(1-A),u=Y*Math.pow(He,4),T=u/Math.pow(G,3.5),x=T*n.no*(Ee*(1+1.5*A+C*(4+A))+.375*Vn*He/G*n.con41*(8+3*A*(8+A))),n.cc1=n.bstar*x,p=0,n.ecco>1e-4&&(p=-2*u*He*kn*n.no*Ve/n.ecco),n.x1mth2=1-D,n.cc4=2*n.no*T*Ee*ce*(n.eta*(2+.5*A)+n.ecco*(.5+2*A)-Vn*He/(Ee*G)*(-3*n.con41*(1-2*C+A*(1.5-.5*C))+.75*n.x1mth2*(2*A-C*(1+A))*Math.cos(2*n.argpo))),n.cc5=2*T*Ee*ce*(1+2.75*(A+C)+C*A),v=D*D,be=1.5*Vn*P*n.no,Ce=.5*be*Vn*P,Ie=-.46875*Vp*P*P*n.no,n.mdot=n.no+.5*be*Fe*n.con41+.0625*Ce*Fe*(13-78*D+137*v),n.argpdot=-.5*be*Te+.0625*Ce*(7-114*D+395*v)+Ie*(3-36*D+49*v),E=-be*qe,n.nodedot=E+(.5*Ce*(4-19*D)+2*Ie*(3-7*D))*qe,Ke=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-qi*u*n.bstar/C),n.nodecf=3.5*ce*E*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(qe+1)>15e-13?n.xlcof=-.25*kn*Ve*(3+5*qe)/(1+qe):n.xlcof=-.25*kn*Ve*(3+5*qe)/R,n.aycof=-.5*kn*Ve;var ft=1+n.eta*Math.cos(n.mo);if(n.delmo=ft*ft*ft,n.sinmao=Math.sin(n.mo),n.x7thm1=7*D-1,2*Nt/n.no>=225){n.method="d",n.isimp=1,De=0,w=n.inclo;var tt={epoch:r,ep:n.ecco,argpp:n.argpo,tc:De,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},pe=Wp(tt);n.e3=pe.e3,n.ee2=pe.ee2,n.peo=pe.peo,n.pgho=pe.pgho,n.pho=pe.pho,n.pinco=pe.pinco,n.plo=pe.plo,n.se2=pe.se2,n.se3=pe.se3,n.sgh2=pe.sgh2,n.sgh3=pe.sgh3,n.sgh4=pe.sgh4,n.sh2=pe.sh2,n.sh3=pe.sh3,n.si2=pe.si2,n.si3=pe.si3,n.sl2=pe.sl2,n.sl3=pe.sl3,n.sl4=pe.sl4,m=pe.sinim,f=pe.cosim,y=pe.em,b=pe.emsq,$=pe.s1,ae=pe.s2,ee=pe.s3,te=pe.s4,I=pe.s5,_e=pe.ss1,ge=pe.ss2,ne=pe.ss3,fe=pe.ss4,Ne=pe.ss5,Se=pe.sz1,Ue=pe.sz3,Xe=pe.sz11,Ge=pe.sz13,U=pe.sz21,it=pe.sz23,ve=pe.sz31,ye=pe.sz33,n.xgh2=pe.xgh2,n.xgh3=pe.xgh3,n.xgh4=pe.xgh4,n.xh2=pe.xh2,n.xh3=pe.xh3,n.xi2=pe.xi2,n.xi3=pe.xi3,n.xl2=pe.xl2,n.xl3=pe.xl3,n.xl4=pe.xl4,n.zmol=pe.zmol,n.zmos=pe.zmos,K=pe.nm,g=pe.z1,z=pe.z3,oe=pe.z11,re=pe.z13,ue=pe.z21,Ae=pe.z23,he=pe.z31,xe=pe.z33;var ct={inclo:w,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},wt=Ko(n,ct);n.ecco=wt.ep,n.inclo=wt.inclp,n.nodeo=wt.nodep,n.argpo=wt.argpp,n.mo=wt.mp,V=0,M=0,j=0;var jt={cosim:f,emsq:b,argpo:n.argpo,s1:$,s2:ae,s3:ee,s4:te,s5:I,sinim:m,ss1:_e,ss2:ge,ss3:ne,ss4:fe,ss5:Ne,sz1:Se,sz3:Ue,sz11:Xe,sz13:Ge,sz21:U,sz23:it,sz31:ve,sz33:ye,t:n.t,tc:De,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:Ke,z1:g,z3:z,z11:oe,z13:re,z21:ue,z23:Ae,z31:he,z33:xe,ecco:n.ecco,eccsq:me,em:y,argpm:V,inclm:w,mm:j,nm:K,nodem:M,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},rt=Xp(jt);n.irez=rt.irez,n.atime=rt.atime,n.d2201=rt.d2201,n.d2211=rt.d2211,n.d3210=rt.d3210,n.d3222=rt.d3222,n.d4410=rt.d4410,n.d4422=rt.d4422,n.d5220=rt.d5220,n.d5232=rt.d5232,n.d5421=rt.d5421,n.d5433=rt.d5433,n.dedt=rt.dedt,n.didt=rt.didt,n.dmdt=rt.dmdt,n.dnodt=rt.dnodt,n.domdt=rt.domdt,n.del1=rt.del1,n.del2=rt.del2,n.del3=rt.del3,n.xfact=rt.xfact,n.xlamo=rt.xlamo,n.xli=rt.xli,n.xni=rt.xni}n.isimp!==1&&(_=n.cc1*n.cc1,n.d2=4*Ee*He*_,ke=n.d2*He*n.cc1/3,n.d3=(17*Ee+N)*ke,n.d4=.5*ke*Ee*He*(221*Ee+31*N)*n.cc1,n.t3cof=n.d2+2*_,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*_)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*_*(2*n.d2+_)))}$o(n,0),n.init="n"}function Kp(n,e){var t="i",i=1440/(2*Nt),r=0,a={};a.error=0,a.satnum=n.substring(2,7),a.epochyr=parseInt(n.substring(18,20),10),a.epochdays=parseFloat(n.substring(20,32)),a.ndot=parseFloat(n.substring(33,43)),a.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),a.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),a.inclo=parseFloat(e.substring(8,16)),a.nodeo=parseFloat(e.substring(17,25)),a.ecco=parseFloat(".".concat(e.substring(26,33))),a.argpo=parseFloat(e.substring(34,42)),a.mo=parseFloat(e.substring(43,51)),a.no=parseFloat(e.substring(52,63)),a.no/=i,a.inclo*=Bi,a.nodeo*=Bi,a.argpo*=Bi,a.mo*=Bi,a.epochyr<57?r=a.epochyr+2e3:r=a.epochyr+1900;var o=kp(r,a.epochdays),s=o.mon,l=o.day,c=o.hr,h=o.minute,d=o.sec;return a.jdsatepoch=Ia(r,s,l,c,h,d),jp(a,{opsmode:t,satn:a.satnum,epoch:a.jdsatepoch-24332815e-1,xbstar:a.bstar,xecco:a.ecco,xargpo:a.argpo,xinclo:a.inclo,xmo:a.mo,xno:a.no,xnodeo:a.nodeo}),a}function Zp(n){return $p(n)||Jp(n)||Qp(n)||em()}function $p(n){if(Array.isArray(n))return Ta(n)}function Jp(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Qp(n,e){if(n){if(typeof n=="string")return Ta(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ta(n,e)}}function Ta(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function em(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),a=Ia.apply(void 0,Zp(r)),o=(a-i.jdsatepoch)*zp;return $o(i,o)}function Jo(n){return n*Op}function nm(n){if(n<-Nt/2||n>Nt/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return Jo(n)}function im(n){if(n<-Nt||n>Nt)throw new RangeError("Longitude radians must be in range [-pi; pi].");return Jo(n)}function rm(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),a=(t-i)/t,o=2*a-a*a,s=Math.atan2(n.y,n.x)-e;s<-Nt;)s+=_t;for(;s>Nt;)s-=_t;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*o*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:s,latitude:h,height:f}}var am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qo={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(am,function(){var t=function(){function i(m){return o.appendChild(m.dom),m}function r(m){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===m?"block":"none";a=m}var a=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++a%o.children.length)},!1);var s=(performance||Date).now(),l=s,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-s,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return m},update:function(){s=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,a){var o=1/0,s=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,f=3*c,m=2*c,_=3*c,x=15*c,p=74*c,u=30*c,T=document.createElement("canvas");T.width=h,T.height=d,T.style.cssText="width:80px;height:48px";var v=T.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=a,v.fillRect(0,0,h,d),v.fillStyle=r,v.fillText(i,f,m),v.fillRect(_,x,p,u),v.fillStyle=a,v.globalAlpha=.9,v.fillRect(_,x,p,u),{dom:T,update:function(y,b){o=Math.min(o,y),s=Math.max(s,y),v.fillStyle=a,v.globalAlpha=1,v.fillRect(0,0,h,x),v.fillStyle=r,v.fillText(l(y)+" "+i+" ("+l(o)+"-"+l(s)+")",f,m),v.drawImage(T,_+c,x,p-c,u,_,x,p-c,u),v.fillRect(_+p-c,x,c,u),v.fillStyle=a,v.globalAlpha=.9,v.fillRect(_+p-c,x,c,l((1-y/b)*u))}}},t})})(Qo);var om=Qo.exports;const lm=sm(om),el=Math.sqrt(3),cm=.5*(el-1),Fi=(3-el)/6,_o=n=>Math.floor(n)|0,vo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function um(n=Math.random){const e=hm(n),t=new Float64Array(e).map(r=>vo[r%12*2]),i=new Float64Array(e).map(r=>vo[r%12*2+1]);return function(a,o){let s=0,l=0,c=0;const h=(a+o)*cm,d=_o(a+h),f=_o(o+h),m=(d+f)*Fi,_=d-m,x=f-m,p=a-_,u=o-x;let T,v;p>u?(T=1,v=0):(T=0,v=1);const y=p-T+Fi,b=u-v+Fi,C=p-1+2*Fi,A=u-1+2*Fi,V=d&255,M=f&255;let w=.5-p*p-u*u;if(w>=0){const ie=V+e[M],P=t[ie],G=i[ie];w*=w,s=w*w*(P*p+G*u)}let j=.5-y*y-b*b;if(j>=0){const ie=V+T+e[M+v],P=t[ie],G=i[ie];j*=j,l=j*j*(P*y+G*b)}let K=.5-C*C-A*A;if(K>=0){const ie=V+1+e[M+1],P=t[ie],G=i[ie];K*=K,c=K*K*(P*C+G*A)}return 70*(s+l+c)}}function hm(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),a=t[i];t[i]=t[r],t[r]=a}for(let i=256;i<512;i++)t[i]=t[i-256];return t}function dm(n,e){let t,i,r,a,o,s,l,c,h,d,f="smallScale",m,_,x=!0,p=!1,u,T="orbitClass";const v=66,y=2;let b,C;const A=6371,V=1,M=V/A,w=2*Math.PI/86400,j=23.44*(Math.PI/180),K=27.32*24*3600,ie=2*Math.PI/K;let P=1,G;const Y=new lm;Y.showPanel(0),Y.dom.id="statistics",window.addEventListener("keydown",L=>{(L.key==="R"||L.key==="r")&&(x=!x)}),window.addEventListener("keydown",L=>{(L.key==="W"||L.key==="w")&&(p=!p,a.traverse(function(F){F.isMesh&&(F.material.wireframe=p,F.material.needsUpdate=!0)}))});function $(){c=new Fp(i,r.domElement),c.enableDamping=!0,c.enablePan=!1,c.dampingFactor=.25,c.rotateSpeed=.25,c.minDistance=5,c.maxDistance=100,ae(c)}function ae(L){c.enabled=!1,L&&(L.enabled=!0)}async function ee(){t=new Ap,i=new $t(5,window.innerWidth/window.innerHeight,.1,3e5),i.position.set(0,0,800),i.position.z=66,r=new jo({alpha:!1}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(12632256,0),r.shadowMap.enabled=!0,r.shadowMap.type=Mo,document.getElementById(n).appendChild(r.domElement),$(),J(),await at(),te(),_e(),N(se,M),a=new Gn,a.rotation.z=j,t.add(a),o=new Gn,t.add(o),H(),Ue(),await Ae("config/classification_config.json"),it(),k(),pt(),window.addEventListener("resize",Mt,!1),Mt(),Oe(T),rt()}function te(){const L=new Up(4210752,1);t.add(L),b=new Dp(5987163,100),b.castShadow=!0,t.add(b);const F=new Rp(16777147,526368,5.5);t.add(F);const B=V*109*P,X=new Hn(B,24,24),de=new La({color:16776960,opacity:.25,transparent:!0,wireframe:!0,alphaHash:!0});s=new Xt(X,de),t.add(s);const Z=new Gn;t.add(Z),Z.add(s),Z.add(b);const Me=new zi({color:16776960}),ze=new Qt().setFromPoints([new O(0,0,0),s.position]),$e=new _i(ze,Me);t.add($e)}function I(L){return L.getTime()/864e5+24405875e-1}function N(L,F){const X=(I(L)-2451545)/36525,de=280.46646+X*(36000.76983+X*3032e-7),Z=357.52911+X*(35999.05029-1537e-7*X),Me=(1.914602-X*(.004817+14e-6*X))*Math.sin(Z*(Math.PI/180))+(.019993-101e-6*X)*Math.sin(2*Z*(Math.PI/180))+289e-6*Math.sin(3*Z*(Math.PI/180)),ze=de+Me,$e=23.44*(Math.PI/180),lt=Math.cos(ze*(Math.PI/180)),ot=Math.cos($e)*Math.sin(ze*(Math.PI/180)),ut=Math.sin($e)*Math.sin(ze*(Math.PI/180)),Et=1,mt=new O(lt*Et,ut*Et,-ot*Et).multiplyScalar(F*1496e5);s.position.copy(mt),b.position.copy(mt),b.target.position.set(0,0,0),b.target.updateMatrixWorld()}function _e(){const L=1496e5*M*P;s.position.set(L,0,0),b.position.copy(s.position)}const ge=new um;let ne=0;const fe=1e-5,Ne=.002;function Se(){ne+=fe;const L=ge(ne,0)*Ne,F=ge(0,ne)*Ne,B=ge(ne,ne)*Ne;s.rotation.x+=L,s.rotation.y+=F,s.rotation.z+=B}function Ue(){const L=V*.273,F=new ha({color:9079434,roughness:1,metalness:1.25}),B=new Hn(L,32,32);G=new Xt(B,F),o.add(G)}function Xe(){if(!G)return;const F=384400*M*P,X=se.getTime()/1e3*ie%(2*Math.PI),de=.0549,Z=F*(Math.cos(X)-de),Me=F*Math.sin(X)*Math.sqrt(1-de**2);let ze=new O(Z,0,Me);const $e=5.145*(Math.PI/180);ze.applyAxisAngle(new O(1,0,0),$e),ze.applyAxisAngle(new O(0,0,1),j),G.position.copy(ze)}let Ge=[],U;function it(L=2e3){const F="data/consolidated_satellites.json",B=document.getElementById("loading-progress");B.style.display="block";function X(){B.style.display="none"}function de(){fetch(F).then(Z=>{if(!Z.ok)throw new Error(`Failed to load from local: ${Z.statusText}`);return Z.json()}).then(Z=>{console.log("Loaded data from local cache.");const Me=Array.isArray(Z)?Z:Z.data;if(!Array.isArray(Me))throw new Error("Local JSON didn't contain an array");console.log("Local data length:",Me.length),ve(Me);const ze=Me.filter($e=>$e.isActive===!0);console.log(`Total satellites in JSON: ${Me.length}`),console.log(`Active satellites found: ${ze.length}`),Ge.push(...ze),U&&(console.log("removing previous"),a.remove(U)),U=De(Ge),U&&(console.log("adding new"),a.add(U)),c.enabled=!0,e(),X()}).catch(Z=>{console.error("Failed local load:",Z),e(),X()})}de()}function ve(L){if(!Array.isArray(L)||L.length===0){console.error("No valid satellite data to process.");return}const F={group_major:new Set,group_minor:new Set,orbitClass:new Set,country:new Set,constellation:new Set,launchYear:new Set};for(const B in u)u[B].counts={total:{},active:{}};return L.forEach(B=>{const X=B.isActive===!0,de=B.launchDate?new Date(B.launchDate).getFullYear().toString():"Unknown";B.metadata={satrec:ye(B.tleLine1,B.tleLine2),orbitClass:B.orbitClass.map(Z=>Z.toLowerCase()),country:B.country.toLowerCase(),group_major:B.group_major.map(Z=>Z.toLowerCase()),group_minor:B.group_minor.map(Z=>Z.toLowerCase()),launchYear:de.toLowerCase(),constellation:B.constellation?B.constellation.toLowerCase():null,isActive:X};for(const Z in u)(Array.isArray(B.metadata[Z])?B.metadata[Z]:[B.metadata[Z]]).forEach(ze=>{if(!ze)return;const $e=ze.toLowerCase();u[Z].counts.total[$e]=(u[Z].counts.total[$e]||0)+1,X&&(u[Z].counts.active[$e]=(u[Z].counts.active[$e]||0)+1)});B.metadata.orbitClass.forEach(Z=>F.orbitClass.add(Z)),B.metadata.group_major.forEach(Z=>F.group_major.add(Z)),B.metadata.group_minor.forEach(Z=>F.group_minor.add(Z)),B.metadata.constellation&&F.constellation.add(B.metadata.constellation),F.country.add(B.metadata.country),F.launchYear.add(B.metadata.launchYear)}),ue(F),xe(L),Oe(T),console.log("Processed satellites with updated counts."),U}function ye(L,F){try{return Kp(L.trim(),F.trim())}catch(B){return console.warn("Failed to create Satrec from TLE:",{tleLine1:L,tleLine2:F},B),null}}function De(L){console.log("Satellite count:",L.length);const F=new ha({metalness:.3,roughness:.2,transparent:!1,wireframe:!0});return U=He(L,F,f==="smallScale"),U&&U.count>0?(console.log("Consolidated satellite mesh created and added to the scene."),g(U)):console.error("Failed to create satellite mesh or no instances were added."),U}function ke(L,F){const B=tm(L,se);if(!B.position)return null;const X=rm(B.position,F),de=X.height*M*P,Z=nm(X.latitude),Me=im(X.longitude);return We(Z,Me,V+de)}const be=new Dr,Ce=new dt;function Ie(L){i.updateMatrixWorld();const F=1.2,B=i.projectionMatrix.clone();if(B.scale(new O(F,F,1)),Ce.multiplyMatrices(B,i.matrixWorldInverse),be.setFromProjectionMatrix(Ce),!be.containsPoint(L))return!1;const X=new O(0,0,0),de=L.clone().sub(X).normalize(),Z=i.position.clone().sub(X).normalize();return!(de.dot(Z)<.1)}function He(L,F,B=!1){console.log("Creating instanced mesh. Satellite count:",L.length);const X=L.length;if(X===0)return console.error("No satellites to create instanced mesh."),null;const de=B?new Hn(.0035,2,3):new Hn(.004,2,3),Z=new Cp(de,F,X),Me=new Float32Array(X*3),ze=new xt;return Z.userData=[],L.forEach(($e,lt)=>{try{ze.position.set(0,0,0),ze.updateMatrix(),Z.setMatrixAt(lt,ze.matrix);const ot=new et(he(T,$e.metadata));Me.set(ot.toArray(),lt*3),$e.originalMatrix=ze.matrix.clone(),Z.userData[lt]={metadata:$e.metadata,visible:!0,originalMatrix:ze.matrix.clone()}}catch(ot){console.error(`Error initializing satellite ${$e.name}:`,ot),Z.userData[lt]=null}}),Z.instanceColor=new Cr(Me,3),Z.instanceMatrix.needsUpdate=!0,Z.instanceColor.needsUpdate=!0,Z}function Ke(L){const F=Zo(se),B=new xt;let X=new O(0,0,0);for(let de=0;de<L.count;de++){const{metadata:Z,visible:Me}=L.userData[de];if(!Z)continue;const ze=ke(Z.satrec,F);ze&&(B.position.copy(ze),B.updateMatrix(),Me?L.setMatrixAt(de,B.matrix):L.setMatrixAt(de,new dt),f!=="smallScale"&&z(de,ze,X,Me))}L.instanceMatrix.needsUpdate=!0}const E=new Map;function g(L){const F=L.count;for(let B=0;B<F;B++){const X=new Qt,de=new Float32Array(6);X.setAttribute("position",new Yt(de,3));const Z=new zi({color:16777215,transparent:!1,alphaHash:!0}),Me=new _i(X,Z);Me.visible=!1,a.add(Me),E.set(B,Me)}}function z(L,F,B,X){const de=E.get(L);if(!de)return;if(!X){de.visible=!1;return}const Z=de.geometry.attributes.position.array;Z[0]=B.x,Z[1]=B.y,Z[2]=B.z,Z[3]=F.x,Z[4]=F.y,Z[5]=F.z,de.geometry.attributes.position.needsUpdate=!0;const Me=U.instanceColor.array,ze=new et(Me[L*3],Me[L*3+1],Me[L*3+2]);de.material.color=ze,de.visible=!0}function oe(){E.forEach((L,F)=>{const{metadata:B,visible:X}=U.userData[F];if(!B)return;if(!(X&&Ie(U.userData[F].position))){L.visible=!1;return}const Z=U.instanceColor.array,Me=new et(Z[F*3],Z[F*3+1],Z[F*3+2]);L.material.color=Me,L.material.needsUpdate=!0,L.visible=!0})}function re(L){const F={};for(const[B,X]of Object.entries(L)){F[B]={colors:Object.fromEntries(Object.entries(X.colors).map(([de,Z])=>{const Me=de.trim().toLowerCase();let ze;return typeof Z=="string"&&/^#?[0-9A-Fa-f]{6}$/.test(Z)?ze=parseInt(Z.replace("#",""),16):(console.warn(`Invalid color '${Z}' for category '${de}'. Defaulting to red.`),ze=16711680),[Me,ze]})),counts:{}};for(const de of Object.keys(F[B].colors))F[B].counts[de]=0}return F}function ue(L){for(const[F,{colors:B}]of Object.entries(u)){const X=L[F];if(X)for(const de of Object.keys(B))X.has(de)||delete B[de]}}async function Ae(L){try{const F=await fetch(L);if(!F.ok)throw new Error(`Failed to load classification config from ${L}: ${F.statusText}`);const B=await F.json();u=re(B)}catch(F){console.error("Error initializing classification schemes:",F),u={}}}function he(L,F){const{colors:B}=u[L],de=(Array.isArray(F[L])?F[L]:F[L]?[F[L]]:[]).map(Z=>(Z||"unknown").toString().trim().toLowerCase());for(const Z of de)if(B[Z])return new et(B[Z]);return console.warn(`No color found for categories '${de}' in scheme '${L}'. Defaulting to red.`),new et(16711935)}function xe(L){L.forEach(F=>{if(F.metadata){F.metadata.precomputedColors={};for(const B in u){const X=R(B,F.metadata);F.metadata.precomputedColors[B]=X.toArray()}}})}function R(L,F){const{colors:B}=u[L],de=(Array.isArray(F[L])?F[L]:F[L]?[F[L]]:[]).map(Z=>(Z||"unknown").trim().toLowerCase());for(const Z of de)if(B[Z])return new et(B[Z]);return new et(16711935)}function le(L,F,B){if(!L||!L.count){console.error("InstancedMesh is not properly initialized.");return}const X=new xt,de=new Float32Array(L.count*3);B.forEach((Z,Me)=>{if(Me>=L.count){console.warn(`Instance index ${Me} exceeds InstancedMesh count (${L.count}).`);return}if(!Z.metadata){console.warn(`Satellite at index ${Me} is missing metadata. Skipping.`);return}let ze=Z.metadata.precomputedColors[F];ze||(console.warn(`No precomputed color found for scheme ${F} on satellite index ${Me}. Using default magenta.`),ze=[1,0,1]);try{L.getMatrixAt(Me,X.matrix)}catch($e){console.error(`Error accessing matrix for instance ${Me}:`,$e);return}X.updateMatrix(),Z.originalMatrix=X.matrix.clone(),L.setMatrixAt(Me,X.matrix),de.set(ze,Me*3)}),L.instanceColor=new Cr(de,3),L.instanceMatrix.needsUpdate=!0}document.getElementById("orbit-class").addEventListener("click",()=>{Q("orbitClass")}),document.getElementById("group-major").addEventListener("click",()=>{Q("group_major")}),document.getElementById("group-minor").addEventListener("click",()=>{Q("group_minor")}),document.getElementById("owner-country").addEventListener("click",()=>{Q("country")}),document.getElementById("launch-year").addEventListener("click",()=>{Q("launchYear")});function Q(L){if(!U||!U.count){console.error("Satellite mesh is not initialized or empty. Cannot switch classification.");return}T&&me(),T=L,le(U,T,Ge),me(),ce(U),Ke(U),Oe(T)}function Oe(L){const F=document.getElementById("legend-container");F.innerHTML="";const B=u[L];if(!B){console.warn(`Scheme '${L}' not found.`),F.innerHTML="<p>No legend available for the selected scheme.</p>";return}const{colors:X,counts:de}=B,Z=new Intl.NumberFormat;Object.keys(X).filter($e=>{var lt;return(((lt=de.active)==null?void 0:lt[$e])||0)>0}).sort(($e,lt)=>L==="launchYear"?parseInt(lt,10)-parseInt($e,10):L==="group_minor"?(de.active[lt]||0)-(de.active[$e]||0)||(de.total[lt]||0)-(de.total[$e]||0):$e.localeCompare(lt)).forEach($e=>{var cn;const lt=X[$e],ot=((cn=de.active)==null?void 0:cn[$e])||0,ut=document.createElement("div");ut.className="legend-item";const Et=document.createElement("div");Et.className="legend-patch",Et.style.backgroundColor=`#${parseInt(lt).toString(16).padStart(6,"0")}`;const mt=document.createElement("span");mt.textContent=`${$e}: ${Z.format(ot)}`,ut.addEventListener("click",()=>{Pe(L,$e,ut)}),ut.appendChild(Et),ut.appendChild(mt),F.appendChild(ut)})}function Pe(L,F,B){const X=document.getElementById("legend-container"),de=X.querySelector(".legend-item.active"),Z=F.trim().toLowerCase();de===B?(B.classList.remove("active"),Te(X),me()):(de&&de.classList.remove("active"),B.classList.add("active"),Ee(X,B),D(L,Z),we(L,Z)),qe(),oe()}function we(L,F){const{colors:B}=u[L],X=F.trim().toLowerCase(),de=B[X];if(!de){console.warn(`No color found for category '${X}' in scheme '${L}'.`);return}const Z=new et(de).toArray(),Me=U.instanceColor.array;U.userData.forEach((ze,$e)=>{(Array.isArray(ze.metadata[L])?ze.metadata[L]:[ze.metadata[L]]).some(ut=>ut.toString().trim().toLowerCase()===X)&&Me.set(Z,$e*3)}),U.instanceColor.needsUpdate=!0}function Ee(L,F){L.querySelectorAll(".legend-item").forEach(B=>{B!==F?B.classList.add("inactive"):B.classList.remove("inactive")})}function Te(L){L.querySelectorAll(".legend-item").forEach(F=>{F.classList.remove("inactive")})}function qe(){const L=new xt;U.userData.forEach((F,B)=>{!F||!F.metadata||(F.visible?(U.getMatrixAt(B,L.matrix),U.setMatrixAt(B,L.matrix)):U.setMatrixAt(B,new dt))}),U.instanceMatrix.needsUpdate=!0}function D(L,F){const B=F.trim().toLowerCase();new xt,U.userData.forEach((X,de)=>{const Me=(Array.isArray(X.metadata[L])?X.metadata[L]:[X.metadata[L]]).some(ze=>ze.toString().trim().toLowerCase()===B);X.visible!==Me&&(X.visible=Me,Me?(X.originalMatrix||(X.originalMatrix=new dt),U.setMatrixAt(de,X.originalMatrix)):U.setMatrixAt(de,new dt))}),U.instanceMatrix.needsUpdate=!0}function me(L){U.userData.forEach(F=>{F&&(F.visible=!0)}),qe()}function ce(L){const F=L.instanceColor.array;L.userData.forEach((B,X)=>{if(!B||!B.metadata)return;const de=B.metadata.precomputedColors[T]||[1,0,1];F.set(de,X*3)}),L.instanceColor.needsUpdate=!0}function J(){const L=window.innerWidth<=768;c.enabled?(c.minDistance=L?50:5,c.maxDistance=L?500:100):h.enabled||h.enabled||d.enabled,i.position.z=L?v*y:v}let se;const Fe=1e3/20;let Ve=1e3;async function at(){return fetch("data/timestamp.json").then(L=>{if(!L.ok)throw new Error("Failed to fetch timestamp from local cache");return L.json()}).then(L=>{if(!L||typeof L.lastCached!="number")throw new Error("No valid lastCached timestamp found in local cache");se=new Date(L.lastCached),document.getElementById("simulation-time").textContent=se.toUTCString().replace("GMT","UTC")}).catch(L=>{console.error("Error loading timestamp from local cache:",L),se=new Date("2024-11-01T00:00:00Z"),document.getElementById("simulation-time").textContent=se.toUTCString().replace("GMT","UTC")})}function ft(){se=new Date(se.getTime()+Fe*Ve);const L=se.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=L,N(se,M)}function tt(){if(x){const F=se.getTime()/1e3%86400*w%(2*Math.PI);a.rotation.set(0,0,0),a.rotateZ(j),a.rotateY(F)}}let pe=new Ip,ct=0,jt=1/20;function rt(){if(ct+=pe.getDelta(),ct>jt){if(Y.begin(),l=requestAnimationFrame(rt),ft(),tt(),vt(),U&&Ke(U),Xe(),Se(),_e(),f==="fixed"){const{lat:L,lon:F}=chapterConfig.fixed.coordinates[en];(L!==m||F!==_)&&(Ct(L,F),m=L,_=F)}c.enabled&&c.update(),r.render(t,i),Y.end(),ct=ct%jt}requestAnimationFrame(rt)}let en="newYork";const Lt={smallScale:{activate:()=>{ae(c),c.enablePan=!1,i.lookAt(new O(0,0,0)),i.updateProjectionMatrix(),c.target.set(0,0,0),c.update(),S("smallScale")}},largeScale:{activate:()=>{ae(c),c.enablePan=!0,c.target.set(0,1,0);const L=i.position.distanceTo(c.target);c.minDistance=L,c.update(),S("largeScale")}},fixed:{cities:{newYork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},tokyo:{lat:35.6895,lon:139.6917}},activate:L=>{const{lat:F,lon:B}=Lt.fixed.cities[L];Ct(F,B),ae(d),S("fixed")}}};let Gt={position:new O,zoom:1};function Bt(){E.forEach((L,F)=>{a.remove(L),L.geometry.dispose(),L.material.dispose()}),E.clear()}function Pt(L,F){f!==L&&(Gt.position.copy(i.position),Gt.zoom=i.zoom,L==="fixed"&&Lt.fixed.activate(F),L==="smallScale"?(Bt(),Lt[L].activate()):L==="largeScale"&&(Lt[L].activate(),i.position.copy(Gt.position),i.zoom=Gt.zoom,i.updateProjectionMatrix()),f=L)}function vt(){const L=i.position.length(),F=V*8;L<F&&f!=="largeScale"?Pt("largeScale"):L>=F&&f!=="smallScale"&&Pt("smallScale")}function Ct(L,F){const X=We(L,F,V);i.position.copy(X),i.lookAt(new O(0,0,0)),i.updateProjectionMatrix()}function S(L){var B;(B=Lt[L])!=null&&B.controls}function H(){const L=new Hn(V,64,64),F=new ha({color:0,opacity:1,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:p});C=new Xt(L,F),C.castShadow=!0,C.receiveShadow=!0,a.add(C)}return ee(),{dispose(){window.removeEventListener("resize",Mt),cancelAnimationFrame(l);const L=document.getElementById(n);L&&r.domElement&&L.removeChild(r.domElement)}};async function k(){console.log("Attempting to load data...");const L=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_graticules_5.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson","data/ne_50m_ocean.geojson"];try{const F=L.map(B=>fetch(B).then(X=>{if(!X.ok)throw new Error(`Network response was not ok for ${B}`);return X.json()}).then(X=>(q(B,X),"loaded")).catch(X=>{throw console.error(`Error loading ${B}:`,X),X}));await Promise.all(F)}catch(F){console.error("Failed to load some GeoJSON data:",F)}}function q(L,F){switch(L){case"data/ne_110m_graticules_5.geojson":console.log("Loaded graticules:",F),Re(F);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",F),W(F);break;case"data/ne_110m_land.geojson":break;case"data/ne_50m_ocean.geojson":console.log("loaded ocean:",F);break;default:console.warn("Unrecognized GeoJSON URL:",L);break}}function W(L){const F=new zi({color:16777215,opacity:.75,alphaHash:!0}),B=1;L.features.forEach(X=>{const de=X.geometry.coordinates;if(X.geometry.type==="LineString"){const Z=Be(de,B),Me=new _i(Z,F);a.add(Me)}else X.geometry.type==="MultiLineString"&&de.forEach(Z=>{const Me=Be(Z,B),ze=new _i(Me,F);a.add(ze)})})}function Re(L){const F=new zi({color:4473924,opacity:.5,alphaHash:!0,visible:!0,transparent:!1}),B=V;L.features.forEach(X=>{const de=X.geometry.coordinates;if(X.geometry.type==="LineString"){const Z=Be(de,B),Me=new _i(Z,F);a.add(Me)}else X.geometry.type==="MultiLineString"&&de.forEach(Z=>{const Me=Be(Z,B),ze=new _i(Me,F);a.add(ze)})})}function Be(L,F){const B=new Qt,X=[];L.forEach(([Z,Me])=>{const ze=We(Me,Z,F);X.push(ze.x,ze.y,ze.z)});const de=new Float32Array(X);return B.setAttribute("position",new Yt(de,3)),B}function We(L,F,B){const X=(90-L)*(Math.PI/180),de=(F+180)*(Math.PI/180),Z=-B*Math.sin(X)*Math.cos(de),Me=B*Math.sin(X)*Math.sin(de),ze=B*Math.cos(X);return new O(Z,ze,Me)}function Ye(L,F){let B;return function(...X){clearTimeout(B),B=setTimeout(()=>L.apply(this,X),F)}}function Je(L,F=2e4){const de=Math.log(1),Me=(Math.log(F)-de)/100;return Math.exp(de+Me*(L-0))}function je(L,F,B){return(Math.log10(L)-F)/(B-F)*100}function Ze(L,F,B){const X=F+L/100*(B-F);return Math.pow(10,X)}function pt(){const L=document.getElementById("exaggeration-slider"),F=document.getElementById("exaggeration-value"),B=1;function X(){return f==="fixed"?{minExp:Math.log10(.05),maxExp:Math.log10(1)}:{minExp:Math.log10(.1),maxExp:Math.log10(25)}}let{minExp:de,maxExp:Z}=X();L.value=je(B,de,Z),P=B,F.textContent=P.toFixed(2)+"x",L.addEventListener("input",ut=>{const Et=parseFloat(ut.target.value);({minExp:de,maxExp:Z}=X()),P=Ze(Et,de,Z),F.textContent=P.toFixed(2)+"x",U&&Ye(Ke(U),10)});const Me=document.getElementById("speed-slider"),ze=document.getElementById("speed-value"),$e=1;Me.value=0,Ve=$e,ze.textContent=Ve.toFixed(0)+"x";function lt(){return f==="smallScale"?2e4:500}Me.addEventListener("input",ut=>{const Et=parseFloat(ut.target.value),mt=lt();Ve=Je(Et,mt),ze.textContent=Ve.toFixed(0)+"x";let cn=se.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=cn,document.getElementById("simulation-time").textContent=se.toUTCString().replace("GMT","UTC")}),document.getElementById("reset-button").addEventListener("click",()=>{({minExp:de,maxExp:Z}=X()),L.value=je(B,de,Z),P=B,F.textContent=P.toFixed(2)+"x",Me.value=0,Ve=$e,ze.textContent=Ve.toFixed(0)+"x",U&&Ye(Ke(U),10)})}function Mt(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight);const L=window.innerWidth<=768;i.position.z=L?v*y:v}}const fm="threeContainer1",Na=document.createElement("div");Na.id="loadingOverlay";Na.innerHTML='<div id="loadingText">Loading</div>';document.body.appendChild(Na);function pm(){const n=document.getElementById("loadingText"),e=setInterval(()=>{n.textContent+="."},50);return console.log("Loading animation started"),()=>{clearInterval(e),console.log("Loading animation stopped")}}const mm=pm();function gm(){setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none",mm()},100)}dm(fm,gm);
