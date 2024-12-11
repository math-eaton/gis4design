(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Us="158",Wt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},An={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xl=0,Vs=1,Ml=2,Pa=1,Da=2,pn=3,Un=0,It=1,gn=2,Ln=0,xi=1,Ws=2,Xs=3,qs=4,Sl=5,Gn=100,El=101,yl=102,js=103,Ys=104,Tl=200,bl=201,Al=202,wl=203,Ss=204,Es=205,Rl=206,Cl=207,Ll=208,Pl=209,Dl=210,Ul=211,Il=212,Nl=213,Fl=214,Ol=0,zl=1,Bl=2,Er=3,Hl=4,Gl=5,kl=6,Vl=7,Ua=0,Wl=1,Xl=2,Pn=0,ql=1,jl=2,Yl=3,Kl=4,Zl=5,Ia=300,Si=301,Ei=302,ys=303,Ts=304,Pr=306,bs=1e3,Qt=1001,As=1002,Dt=1003,Ks=1004,Or=1005,Xt=1006,$l=1007,Vi=1008,Dn=1009,Jl=1010,Ql=1011,Is=1012,Na=1013,Rn=1014,Cn=1015,Wi=1016,Fa=1017,Oa=1018,jn=1020,ec=1021,en=1023,tc=1024,nc=1025,Yn=1026,yi=1027,ic=1028,za=1029,rc=1030,Ba=1031,Ha=1033,zr=33776,Br=33777,Hr=33778,Gr=33779,Zs=35840,$s=35841,Js=35842,Qs=35843,sc=36196,eo=37492,to=37496,no=37808,io=37809,ro=37810,so=37811,oo=37812,ao=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,kr=36492,_o=36494,vo=36495,oc=36283,xo=36284,Mo=36285,So=36286,Ga=3e3,Kn=3001,ac=3200,lc=3201,ka=0,cc=1,jt="",Et="srgb",xn="srgb-linear",Ns="display-p3",Dr="display-p3-linear",yr="linear",st="srgb",Tr="rec709",br="p3",ei=7680,Eo=519,hc=512,uc=513,dc=514,fc=515,pc=516,mc=517,gc=518,_c=519,yo=35044,To="300 es",ws=1035,_n=2e3,Ar=2001;class Mn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bo=1234567;const Hi=Math.PI/180,Xi=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Fs(n,e){return(n%e+e)%e}function vc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xc(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function Mc(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function Sc(n,e=1){return e-Math.abs(Fs(n,e*2)-e)}function Ec(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bc(n,e){return n+Math.random()*(e-n)}function Ac(n){return n*(.5-Math.random())}function wc(n){n!==void 0&&(bo=n);let e=bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rc(n){return n*Hi}function Cc(n){return n*Xi}function Rs(n){return(n&n-1)===0&&n!==0}function Lc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pc(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),g=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*g,o*c);break;case"YXY":n.set(l*g,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*g,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mn={DEG2RAD:Hi,RAD2DEG:Xi,generateUUID:bi,clamp:bt,euclideanModulo:Fs,mapLinear:vc,inverseLerp:xc,lerp:Gi,damp:Mc,pingpong:Sc,smoothstep:Ec,smootherstep:yc,randInt:Tc,randFloat:bc,randFloatSpread:Ac,seededRandom:wc,degToRad:Rc,radToDeg:Cc,isPowerOfTwo:Rs,ceilPowerOfTwo:Lc,floorPowerOfTwo:wr,setQuaternionFromProperEuler:Pc,normalize:Lt,denormalize:_i};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],g=i[5],_=i[8],v=r[0],p=r[3],u=r[6],A=r[1],M=r[4],E=r[7],y=r[2],C=r[5],w=r[8];return s[0]=a*v+o*A+l*y,s[3]=a*p+o*M+l*C,s[6]=a*u+o*E+l*w,s[1]=c*v+h*A+d*y,s[4]=c*p+h*M+d*C,s[7]=c*u+h*E+d*w,s[2]=f*v+g*A+_*y,s[5]=f*p+g*M+_*C,s[8]=f*u+g*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,g=c*s-a*l,_=t*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=g*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new $e;function Va(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dc(){const n=Rr("canvas");return n.style.display="block",n}const Ao={};function ki(n){n in Ao||(Ao[n]=!0,console.warn(n))}const wo=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ro=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[xn]:{transfer:yr,primaries:Tr,toReference:n=>n,fromReference:n=>n},[Et]:{transfer:st,primaries:Tr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Dr]:{transfer:yr,primaries:br,toReference:n=>n.applyMatrix3(Ro),fromReference:n=>n.applyMatrix3(wo)},[Ns]:{transfer:st,primaries:br,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ro),fromReference:n=>n.applyMatrix3(wo).convertLinearToSRGB()}},Uc=new Set([xn,Dr]),nt={enabled:!0,_workingColorSpace:xn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Uc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ki[e].toReference,r=Ki[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ki[n].primaries},getTransfer:function(n){return n===jt?yr:Ki[n].transfer}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ti;class Wa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Rr("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ic=0;class Xa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xr(r[a].image)):s.push(Xr(r[a]))}else s=Xr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Gt extends Mn{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Qt,r=Qt,s=Xt,a=Vi,o=en,l=Dn,c=Gt.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=bi(),this.name="",this.source=new Xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Kn?Et:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ia)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case As:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case As:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Kn:Ga}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?Et:jt}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Ia;Gt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],_=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(g+1)/2,y=(u+1)/2,C=(h+f)/4,w=(d+v)/4,V=(_+p)/4;return M>E&&M>y?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=w/i):E>y?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=V/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=w/s,r=V/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(d-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fc extends Mn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Kn?Et:jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Fc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qa extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],g=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==g||h!==_){let p=1-o;const u=l*f+c*g+h*_+d*v,A=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const y=Math.sqrt(M),C=Math.atan2(y,u*A);p=Math.sin(p*C)/y,o=Math.sin(o*C)/y}const E=o*A;if(l=l*p+f*E,c=c*p+g*E,h=h*p+_*E,d=d*p+v*E,p===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],f=s[a+1],g=s[a+2],_=s[a+3];return e[t]=o*_+h*d+l*g-c*f,e[t+1]=l*_+h*f+c*d-o*g,e[t+2]=c*_+h*g+o*f-l*d,e[t+3]=h*_-o*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"YXZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"ZXY":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"ZYX":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"YZX":this._x=f*h*d+c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d-f*g*_;break;case"XZY":this._x=f*h*d-c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new O,Co=new on;class Jn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zi.copy(i.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),$i.subVectors(this.max,Li),ni.subVectors(e.a,Li),ii.subVectors(e.b,Li),ri.subVectors(e.c,Li),Sn.subVectors(ii,ni),En.subVectors(ri,ii),Fn.subVectors(ni,ri);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Fn.y,Fn.x,0];return!jr(t,ni,ii,ri,$i)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,ni,ii,ri,$i))?!1:(Ji.crossVectors(Sn,En),t=[Ji.x,Ji.y,Ji.z],jr(t,ni,ii,ri,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new O,new O,new O,new O,new O,new O,new O,new O],Kt=new O,Zi=new Jn,ni=new O,ii=new O,ri=new O,Sn=new O,En=new O,Fn=new O,Li=new O,$i=new O,Ji=new O,On=new O;function jr(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){On.fromArray(n,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),h=i.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zc=new Jn,Pi=new O,Yr=new O;class Ai{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(Yr)),this.expandByPoint(Pi.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new O,Kr=new O,Qi=new O,yn=new O,Zr=new O,er=new O,$r=new O;class Os{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Kr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=yn.dot(this.direction),l=-yn.dot(Qi),c=yn.lengthSq(),h=Math.abs(1-a*a);let d,f,g,_;if(h>0)if(d=a*l-o,f=a*o-l,_=s*h,d>=0)if(f>=-_)if(f<=_){const v=1/h;d*=v,f*=v,g=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Kr).addScaledVector(Qi,f),g}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,s){Zr.subVectors(t,e),er.subVectors(i,e),$r.crossVectors(Zr,er);let a=this.direction.dot($r),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,e);const l=o*this.direction.dot(er.crossVectors(yn,er));if(l<0)return null;const c=o*this.direction.dot(Zr.cross(yn));if(c<0||l+c>a)return null;const h=-o*yn.dot($r);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,l,c,h,d,f,g,_,v,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,d,f,g,_,v,p)}set(e,t,i,r,s,a,o,l,c,h,d,f,g,_,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=g,u[7]=_,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,g=a*d,_=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+_*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=_+g*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,g=l*d,_=c*h,v=c*d;t[0]=f+v*o,t[4]=_*o-g,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=g*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,g=l*d,_=c*h,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+g*o,t[1]=g+_*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,g=a*d,_=o*h,v=o*d;t[0]=l*h,t[4]=_*c-g,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=g*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-f*d,t[8]=_*d+g,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,g=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=a*h,t[9]=g*d-_,t[2]=_*d-g,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,Hc)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Tn.crossVectors(i,Ot),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Tn.crossVectors(i,Ot)),Tn.normalize(),tr.crossVectors(Ot,Tn),r[0]=Tn.x,r[4]=tr.x,r[8]=Ot.x,r[1]=Tn.y,r[5]=tr.y,r[9]=Ot.y,r[2]=Tn.z,r[6]=tr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],g=i[13],_=i[2],v=i[6],p=i[10],u=i[14],A=i[3],M=i[7],E=i[11],y=i[15],C=r[0],w=r[4],V=r[8],S=r[12],R=r[1],W=r[5],q=r[9],Q=r[13],N=r[2],k=r[6],X=r[10],j=r[14],se=r[3],$=r[7],ee=r[11],z=r[15];return s[0]=a*C+o*R+l*N+c*se,s[4]=a*w+o*W+l*k+c*$,s[8]=a*V+o*q+l*X+c*ee,s[12]=a*S+o*Q+l*j+c*z,s[1]=h*C+d*R+f*N+g*se,s[5]=h*w+d*W+f*k+g*$,s[9]=h*V+d*q+f*X+g*ee,s[13]=h*S+d*Q+f*j+g*z,s[2]=_*C+v*R+p*N+u*se,s[6]=_*w+v*W+p*k+u*$,s[10]=_*V+v*q+p*X+u*ee,s[14]=_*S+v*Q+p*j+u*z,s[3]=A*C+M*R+E*N+y*se,s[7]=A*w+M*W+E*k+y*$,s[11]=A*V+M*q+E*X+y*ee,s[15]=A*S+M*Q+E*j+y*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],g=e[14],_=e[3],v=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*g-i*l*g)+v*(+t*l*g-t*c*f+s*a*f-r*a*g+r*c*h-s*l*h)+p*(+t*c*d-t*o*g-s*a*d+i*a*g+s*o*h-i*c*h)+u*(-r*o*h-t*l*d+t*o*f+r*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],g=e[11],_=e[12],v=e[13],p=e[14],u=e[15],A=d*p*c-v*f*c+v*l*g-o*p*g-d*l*u+o*f*u,M=_*f*c-h*p*c-_*l*g+a*p*g+h*l*u-a*f*u,E=h*v*c-_*d*c+_*o*g-a*v*g-h*o*u+a*d*u,y=_*d*l-h*v*l-_*o*f+a*v*f+h*o*p-a*d*p,C=t*A+i*M+r*E+s*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=A*w,e[1]=(v*f*s-d*p*s-v*r*g+i*p*g+d*r*u-i*f*u)*w,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*u+i*l*u)*w,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*g-i*l*g)*w,e[4]=M*w,e[5]=(h*p*s-_*f*s+_*r*g-t*p*g-h*r*u+t*f*u)*w,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*u-t*l*u)*w,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*g+t*l*g)*w,e[8]=E*w,e[9]=(_*d*s-h*v*s-_*i*g+t*v*g+h*i*u-t*d*u)*w,e[10]=(a*v*s-_*o*s+_*i*c-t*v*c-a*i*u+t*o*u)*w,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*g-t*o*g)*w,e[12]=y*w,e[13]=(h*v*r-_*d*r+_*i*f-t*v*f-h*i*p+t*d*p)*w,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*p-t*o*p)*w,e[15]=(a*d*r-h*o*r+h*i*l-t*d*l-a*i*f+t*o*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,g=s*h,_=s*d,v=a*h,p=a*d,u=o*d,A=l*c,M=l*h,E=l*d,y=i.x,C=i.y,w=i.z;return r[0]=(1-(v+u))*y,r[1]=(g+E)*y,r[2]=(_-M)*y,r[3]=0,r[4]=(g-E)*C,r[5]=(1-(f+u))*C,r[6]=(p+A)*C,r[7]=0,r[8]=(_+M)*w,r[9]=(p-A)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const a=si.set(r[4],r[5],r[6]).length(),o=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,h=1/a,d=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=_n){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(o===_n)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ar)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=_n){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(a-s),f=(t+e)*c,g=(i+r)*h;let _,v;if(o===_n)_=(a+s)*d,v=-2*d;else if(o===Ar)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const si=new O,Zt=new ct,Bc=new O(0,0,0),Hc=new O(1,1,1),Tn=new O,tr=new O,Ot=new O,Lo=new ct,Po=new on;class Ur{constructor(e=0,t=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Po.setFromEuler(this),this.setFromQuaternion(Po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gc=0;const Do=new O,oi=new on,un=new ct,nr=new O,Di=new O,kc=new O,Vc=new on,Uo=new O(1,0,0),Io=new O(0,1,0),No=new O(0,0,1),Wc={type:"added"},Xc={type:"removed"};class ut extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new O,t=new Ur,i=new on,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new $e}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Uo,e)}rotateY(e){return this.rotateOnAxis(Io,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uo,e)}translateY(e){return this.translateOnAxis(Io,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nr.copy(e):nr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Di,nr,this.up):un.lookAt(nr,Di,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(un),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ut.DEFAULT_UP=new O(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new O,dn=new O,Jr=new O,fn=new O,ai=new O,li=new O,Fo=new O,Qr=new O,es=new O,ts=new O;let ir=!1;class Jt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$t.subVectors(r,t),dn.subVectors(i,t),Jr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(dn),l=$t.dot(Jr),c=dn.dot(dn),h=dn.dot(Jr),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,i,r,s,a,o,l){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,fn),l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l}static isFrontFacing(e,t,i,r){return $t.subVectors(i,t),dn.subVectors(e,t),$t.cross(dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),$t.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ai.subVectors(r,i),li.subVectors(s,i),Qr.subVectors(e,i);const l=ai.dot(Qr),c=li.dot(Qr);if(l<=0&&c<=0)return t.copy(i);es.subVectors(e,r);const h=ai.dot(es),d=li.dot(es);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ai,a);ts.subVectors(e,s);const g=ai.dot(ts),_=li.dot(ts);if(_>=0&&g<=_)return t.copy(s);const v=g*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(li,o);const p=h*_-g*d;if(p<=0&&d-h>=0&&g-_>=0)return Fo.subVectors(s,r),o=(d-h)/(d-h+(g-_)),t.copy(r).addScaledVector(Fo,o);const u=1/(p+v+f);return a=v*u,o=f*u,t.copy(i).addScaledVector(ai,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ya={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ns(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Fs(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ns(a,s,e+1/3),this.g=ns(a,s,e),this.b=ns(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Et){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const i=Ya[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return nt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(bt(Tt.r*255,0,255))*65536+Math.round(bt(Tt.g*255,0,255))*256+Math.round(bt(Tt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Et){nt.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(rr);const i=Gi(bn.h,rr.h,t),r=Gi(bn.s,rr.s,t),s=Gi(bn.l,rr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Je;Je.NAMES=Ya;let qc=0;class wi extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=xi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ss,this.blendDst=Es,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ss&&(i.blendSrc=this.blendSrc),this.blendDst!==Es&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cr extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new O,sr=new Ve;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yo,this.updateRange={offset:0,count:-1},this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ka extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Za extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let jc=0;const Vt=new ct,is=new ut,ci=new O,zt=new Jn,Ui=new Jn,vt=new O;class nn extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Va(e)?Za:Ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return is.lookAt(e),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(zt.min,Ui.min),zt.expandByPoint(vt),vt.addVectors(zt.max,Ui.max),zt.expandByPoint(vt)):(zt.expandByPoint(Ui.min),zt.expandByPoint(Ui.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),vt.add(ci)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new O,h[R]=new O;const d=new O,f=new O,g=new O,_=new Ve,v=new Ve,p=new Ve,u=new O,A=new O;function M(R,W,q){d.fromArray(r,R*3),f.fromArray(r,W*3),g.fromArray(r,q*3),_.fromArray(a,R*2),v.fromArray(a,W*2),p.fromArray(a,q*2),f.sub(d),g.sub(d),v.sub(_),p.sub(_);const Q=1/(v.x*p.y-p.x*v.y);isFinite(Q)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(g,-v.y).multiplyScalar(Q),A.copy(g).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[R].add(u),c[W].add(u),c[q].add(u),h[R].add(A),h[W].add(A),h[q].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let R=0,W=E.length;R<W;++R){const q=E[R],Q=q.start,N=q.count;for(let k=Q,X=Q+N;k<X;k+=3)M(i[k+0],i[k+1],i[k+2])}const y=new O,C=new O,w=new O,V=new O;function S(R){w.fromArray(s,R*3),V.copy(w);const W=c[R];y.copy(W),y.sub(w.multiplyScalar(w.dot(W))).normalize(),C.crossVectors(V,W);const Q=C.dot(h[R])<0?-1:1;l[R*4]=y.x,l[R*4+1]=y.y,l[R*4+2]=y.z,l[R*4+3]=Q}for(let R=0,W=E.length;R<W;++R){const q=E[R],Q=q.start,N=q.count;for(let k=Q,X=Q+N;k<X;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let g=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[g++]}return new kt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],g=e(f,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new ct,zn=new Os,or=new Ai,zo=new O,hi=new O,ui=new O,di=new O,rs=new O,ar=new O,lr=new Ve,cr=new Ve,hr=new Ve,Bo=new O,Ho=new O,Go=new O,ur=new O,dr=new O;class Ht extends ut{constructor(e=new nn,t=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ar.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(rs.fromBufferAttribute(d,e),a?ar.addScaledVector(rs,h):ar.addScaledVector(rs.sub(t),h))}t.add(ar)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(or.containsPoint(zn.origin)===!1&&(zn.intersectSphere(or,zo)===null||zn.origin.distanceToSquared(zo)>(e.far-e.near)**2))&&(Oo.copy(s).invert(),zn.copy(e.ray).applyMatrix4(Oo),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=a[p.materialIndex],A=Math.max(p.start,g.start),M=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=A,y=M;E<y;E+=3){const C=o.getX(E),w=o.getX(E+1),V=o.getX(E+2);r=fr(this,u,e,i,c,h,d,C,w,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let p=_,u=v;p<u;p+=3){const A=o.getX(p),M=o.getX(p+1),E=o.getX(p+2);r=fr(this,a,e,i,c,h,d,A,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=a[p.materialIndex],A=Math.max(p.start,g.start),M=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=A,y=M;E<y;E+=3){const C=E,w=E+1,V=E+2;r=fr(this,u,e,i,c,h,d,C,w,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=_,u=v;p<u;p+=3){const A=p,M=p+1,E=p+2;r=fr(this,a,e,i,c,h,d,A,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Yc(n,e,t,i,r,s,a,o){let l;if(e.side===It?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Un,o),l===null)return null;dr.copy(o),dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:n}}function fr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,hi),n.getVertexPosition(l,ui),n.getVertexPosition(c,di);const h=Yc(n,e,t,i,hi,ui,di,ur);if(h){r&&(lr.fromBufferAttribute(r,o),cr.fromBufferAttribute(r,l),hr.fromBufferAttribute(r,c),h.uv=Jt.getInterpolation(ur,hi,ui,di,lr,cr,hr,new Ve)),s&&(lr.fromBufferAttribute(s,o),cr.fromBufferAttribute(s,l),hr.fromBufferAttribute(s,c),h.uv1=Jt.getInterpolation(ur,hi,ui,di,lr,cr,hr,new Ve),h.uv2=h.uv1),a&&(Bo.fromBufferAttribute(a,o),Ho.fromBufferAttribute(a,l),Go.fromBufferAttribute(a,c),h.normal=Jt.getInterpolation(ur,hi,ui,di,Bo,Ho,Go,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};Jt.getNormal(hi,ui,di,d.normal),h.face=d}return h}class ji extends nn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(d,2));function _(v,p,u,A,M,E,y,C,w,V,S){const R=E/w,W=y/V,q=E/2,Q=y/2,N=C/2,k=w+1,X=V+1;let j=0,se=0;const $=new O;for(let ee=0;ee<X;ee++){const z=ee*W-Q;for(let B=0;B<k;B++){const ge=B*R-q;$[v]=ge*A,$[p]=z*M,$[u]=N,c.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[u]=C>0?1:-1,h.push($.x,$.y,$.z),d.push(B/w),d.push(1-ee/V),j+=1}}for(let ee=0;ee<V;ee++)for(let z=0;z<w;z++){const B=f+z+k*ee,ge=f+z+k*(ee+1),_e=f+(z+1)+k*(ee+1),ne=f+(z+1)+k*ee;l.push(B,ge,ne),l.push(ge,_e,ne),se+=6}o.addGroup(g,se,S),g+=se,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const r in i)e[r]=i[r]}return e}function Kc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $a(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const Zc={clone:Ti,merge:Pt};var $c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$c,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ja extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends Ja{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Qc extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(fi,pi,e,t);r.layers=this.layers,this.add(r);const s=new qt(fi,pi,e,t);s.layers=this.layers,this.add(s);const a=new qt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new qt(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new qt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new qt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Qa extends Gt{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?Et:jt),this.texture=new Qa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Ln});s.uniforms.tEquirect.value=t;const a=new Ht(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Xt),new Qc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ss=new O,th=new O,nh=new $e;class wn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ss.subVectors(i,t).cross(th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ss),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nh.getNormalMatrix(e),r=this.coplanarPoint(ss).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Ai,pr=new O;class Ir{constructor(e=new wn,t=new wn,i=new wn,r=new wn,s=new wn,a=new wn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],v=r[10],p=r[11],u=r[12],A=r[13],M=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,p-g,E-u).normalize(),i[1].setComponents(l+s,f+c,p+g,E+u).normalize(),i[2].setComponents(l+a,f+h,p+_,E+A).normalize(),i[3].setComponents(l-a,f-h,p-_,E-A).normalize(),i[4].setComponents(l-o,f-d,p-v,E-M).normalize(),t===_n)i[5].setComponents(l+o,f+d,p+v,E+M).normalize();else if(t===Ar)i[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function el(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ih(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const f=h.array,g=h.updateRange;n.bindBuffer(d,c),g.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class zs extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,g=[],_=[],v=[],p=[];for(let u=0;u<h;u++){const A=u*f-a;for(let M=0;M<c;M++){const E=M*d-s;_.push(E,-A,0),v.push(0,0,1),p.push(M/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<o;A++){const M=A+c*u,E=A+c*(u+1),y=A+1+c*(u+1),C=A+1+c*u;g.push(M,E,C),g.push(E,y,C)}this.setIndex(g),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
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
#endif`,oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hh=`#ifdef USE_AOMAP
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
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mh=`#ifdef USE_IRIDESCENCE
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
#endif`,gh=`#ifdef USE_BUMPMAP
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
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
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`
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
}`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
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
}`,Wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
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
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eu=`PhysicalMaterial material;
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
#endif`,tu=`struct PhysicalMaterial {
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
}`,nu=`
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,du=`#if defined( USE_POINTS_UV )
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
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
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
#endif`,_u=`#ifdef USE_MORPHTARGETS
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
#endif`,vu=`#ifdef USE_MORPHTARGETS
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
#endif`,xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tu=`#ifdef USE_NORMALMAP
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
#endif`,bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hu=`float getShadowMask() {
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
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,Xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
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
}`,ld=`#if DEPTH_PACKING == 3200
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
}`,cd=`#define DISTANCE
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
}`,hd=`#define DISTANCE
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#include <common>
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
}`,gd=`uniform vec3 diffuse;
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
}`,_d=`#define LAMBERT
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
}`,vd=`#define LAMBERT
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
}`,xd=`#define MATCAP
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
}`,Md=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,Ed=`#define NORMAL
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
}`,yd=`#define PHONG
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
}`,Td=`#define PHONG
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
}`,bd=`#define STANDARD
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
}`,Ad=`#define STANDARD
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
}`,wd=`#define TOON
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
}`,Rd=`#define TOON
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
}`,Cd=`uniform float size;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Dd=`uniform vec3 color;
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
}`,Ud=`uniform float rotation;
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
}`,Id=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:rh,alphahash_pars_fragment:sh,alphamap_fragment:oh,alphamap_pars_fragment:ah,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:hh,aomap_pars_fragment:uh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Sh,color_pars_fragment:Eh,color_pars_vertex:yh,color_vertex:Th,common:bh,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:wh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ch,emissivemap_fragment:Lh,emissivemap_pars_fragment:Ph,colorspace_fragment:Dh,colorspace_pars_fragment:Uh,envmap_fragment:Ih,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:Kh,envmap_vertex:zh,fog_vertex:Bh,fog_pars_vertex:Hh,fog_fragment:Gh,fog_pars_fragment:kh,gradientmap_pars_fragment:Vh,lightmap_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:jh,lights_pars_begin:Yh,lights_toon_fragment:Zh,lights_toon_pars_fragment:$h,lights_phong_fragment:Jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:eu,lights_physical_pars_fragment:tu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:ru,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:hu,map_particle_fragment:uu,map_particle_pars_fragment:du,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphcolor_vertex:mu,morphnormal_vertex:gu,morphtarget_pars_vertex:_u,morphtarget_vertex:vu,normal_fragment_begin:xu,normal_fragment_maps:Mu,normal_pars_fragment:Su,normal_pars_vertex:Eu,normal_vertex:yu,normalmap_pars_fragment:Tu,clearcoat_normal_fragment_begin:bu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:wu,iridescence_pars_fragment:Ru,opaque_fragment:Cu,packing:Lu,premultiplied_alpha_fragment:Pu,project_vertex:Du,dithering_fragment:Uu,dithering_pars_fragment:Iu,roughnessmap_fragment:Nu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:zu,shadowmap_vertex:Bu,shadowmask_pars_fragment:Hu,skinbase_vertex:Gu,skinning_pars_vertex:ku,skinning_vertex:Vu,skinnormal_vertex:Wu,specularmap_fragment:Xu,specularmap_pars_fragment:qu,tonemapping_fragment:ju,tonemapping_pars_fragment:Yu,transmission_fragment:Ku,transmission_pars_fragment:Zu,uv_pars_fragment:$u,uv_pars_vertex:Ju,uv_vertex:Qu,worldpos_vertex:ed,background_vert:td,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:rd,cube_vert:sd,cube_frag:od,depth_vert:ad,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:dd,linedashed_vert:fd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:gd,meshlambert_vert:_d,meshlambert_frag:vd,meshmatcap_vert:xd,meshmatcap_frag:Md,meshnormal_vert:Sd,meshnormal_frag:Ed,meshphong_vert:yd,meshphong_frag:Td,meshphysical_vert:bd,meshphysical_frag:Ad,meshtoon_vert:wd,meshtoon_frag:Rd,points_vert:Cd,points_frag:Ld,shadow_vert:Pd,shadow_frag:Dd,sprite_vert:Ud,sprite_frag:Id},Re={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},sn={basic:{uniforms:Pt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Pt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Pt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Pt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Pt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Pt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Pt([Re.points,Re.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Pt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Pt([Re.common,Re.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Pt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Pt([Re.sprite,Re.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Pt([Re.common,Re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Pt([Re.lights,Re.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};sn.physical={uniforms:Pt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const mr={r:0,b:0,g:0};function Nd(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,h,d=null,f=0,g=null;function _(p,u){let A=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M)),M===null?v(o,l):M&&M.isColor&&(v(M,1),A=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Pr)?(h===void 0&&(h=new Ht(new ji(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ti(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(M.colorSpace)!==st,(d!==M||f!==M.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,g=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ht(new zs(2,2),new $n({name:"BackgroundMaterial",uniforms:Ti(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,g=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(mr,$a(n)),i.buffers.color.setClear(mr.r,mr.g,mr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:_}}function Fd(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(N,k,X,j,se){let $=!1;if(a){const ee=v(j,X,k);c!==ee&&(c=ee,g(c.object)),$=u(N,j,X,se),$&&A(N,j,X,se)}else{const ee=k.wireframe===!0;(c.geometry!==j.id||c.program!==X.id||c.wireframe!==ee)&&(c.geometry=j.id,c.program=X.id,c.wireframe=ee,$=!0)}se!==null&&t.update(se,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,V(N,k,X,j),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,k,X){const j=X.wireframe===!0;let se=o[N.id];se===void 0&&(se={},o[N.id]=se);let $=se[k.id];$===void 0&&($={},se[k.id]=$);let ee=$[j];return ee===void 0&&(ee=p(f()),$[j]=ee),ee}function p(N){const k=[],X=[],j=[];for(let se=0;se<r;se++)k[se]=0,X[se]=0,j[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:j,object:N,attributes:{},index:null}}function u(N,k,X,j){const se=c.attributes,$=k.attributes;let ee=0;const z=X.getAttributes();for(const B in z)if(z[B].location>=0){const _e=se[B];let ne=$[B];if(ne===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),_e===void 0||_e.attribute!==ne||ne&&_e.data!==ne.data)return!0;ee++}return c.attributesNum!==ee||c.index!==j}function A(N,k,X,j){const se={},$=k.attributes;let ee=0;const z=X.getAttributes();for(const B in z)if(z[B].location>=0){let _e=$[B];_e===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor));const ne={};ne.attribute=_e,_e&&_e.data&&(ne.data=_e.data),se[B]=ne,ee++}c.attributes=se,c.attributesNum=ee,c.index=j}function M(){const N=c.newAttributes;for(let k=0,X=N.length;k<X;k++)N[k]=0}function E(N){y(N,0)}function y(N,k){const X=c.newAttributes,j=c.enabledAttributes,se=c.attributeDivisors;X[N]=1,j[N]===0&&(n.enableVertexAttribArray(N),j[N]=1),se[N]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),se[N]=k)}function C(){const N=c.newAttributes,k=c.enabledAttributes;for(let X=0,j=k.length;X<j;X++)k[X]!==N[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function w(N,k,X,j,se,$,ee){ee===!0?n.vertexAttribIPointer(N,k,X,se,$):n.vertexAttribPointer(N,k,X,j,se,$)}function V(N,k,X,j){if(i.isWebGL2===!1&&(N.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const se=j.attributes,$=X.getAttributes(),ee=k.defaultAttributeValues;for(const z in $){const B=$[z];if(B.location>=0){let ge=se[z];if(ge===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),ge!==void 0){const _e=ge.normalized,ne=ge.itemSize,he=t.get(ge);if(he===void 0)continue;const G=he.buffer,Z=he.type,ve=he.bytesPerElement,De=i.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT||ge.gpuType===Na);if(ge.isInterleavedBufferAttribute){const Ue=ge.data,F=Ue.stride,Xe=ge.offset;if(Ue.isInstancedInterleavedBuffer){for(let pe=0;pe<B.locationSize;pe++)y(B.location+pe,Ue.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let pe=0;pe<B.locationSize;pe++)E(B.location+pe);n.bindBuffer(n.ARRAY_BUFFER,G);for(let pe=0;pe<B.locationSize;pe++)w(B.location+pe,ne/B.locationSize,Z,_e,F*ve,(Xe+ne/B.locationSize*pe)*ve,De)}else{if(ge.isInstancedBufferAttribute){for(let Ue=0;Ue<B.locationSize;Ue++)y(B.location+Ue,ge.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)E(B.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,G);for(let Ue=0;Ue<B.locationSize;Ue++)w(B.location+Ue,ne/B.locationSize,Z,_e,ne*ve,ne/B.locationSize*Ue*ve,De)}}else if(ee!==void 0){const _e=ee[z];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(B.location,_e);break;case 3:n.vertexAttrib3fv(B.location,_e);break;case 4:n.vertexAttrib4fv(B.location,_e);break;default:n.vertexAttrib1fv(B.location,_e)}}}}C()}function S(){q();for(const N in o){const k=o[N];for(const X in k){const j=k[X];for(const se in j)_(j[se].object),delete j[se];delete k[X]}delete o[N]}}function R(N){if(o[N.id]===void 0)return;const k=o[N.id];for(const X in k){const j=k[X];for(const se in j)_(j[se].object),delete j[se];delete k[X]}delete o[N.id]}function W(N){for(const k in o){const X=o[k];if(X[N.id]===void 0)continue;const j=X[N.id];for(const se in j)_(j[se].object),delete j[se];delete X[N.id]}}function q(){Q(),h=!0,c!==l&&(c=l,g(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:W,initAttributes:M,enableAttribute:E,disableUnusedAttributes:C}}function Od(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,c,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function zd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,E=a||e.has("OES_texture_float"),y=M&&E,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:A,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:y,maxSamples:C}}function Bd(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new wn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,g){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?h(null):c();else{const A=s?0:i,M=A*4;let E=u.clippingState||null;l.value=E,E=h(_,f,M,g);for(let y=0;y!==M;++y)E[y]=t[y];u.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,g,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const u=g+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,E=g;M!==v;++M,E+=4)a.copy(d[M]).applyMatrix4(A,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Hd(n){let e=new WeakMap;function t(a,o){return o===ys?a.mapping=Si:o===Ts&&(a.mapping=Ei),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ys||o===Ts)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new eh(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tl extends Ja{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,ko=[.125,.215,.35,.446,.526,.582],kn=20,os=new tl,Vo=new Je;let as=null,ls=0,cs=0;const Hn=(1+Math.sqrt(5))/2,mi=1/Hn,Wo=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Hn,mi),new O(0,Hn,-mi),new O(mi,0,Hn),new O(-mi,0,Hn),new O(Hn,mi,0),new O(-Hn,mi,0)];class Xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){as=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(as,ls,cs),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Wi,format:en,colorSpace:xn,depthBuffer:!1},r=qo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(s)),this._blurMaterial=kd(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,i,r){const o=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Vo),h.toneMapping=Pn,h.autoClear=!1;const g=new Cr({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Ht(new ji,g);let v=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,v=!0):(g.color.copy(Vo),v=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):A===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const M=this._cubeSize;gr(r,A*M,u>2?M:0,M,M),h.setRenderTarget(r),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Si||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,os)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wo[(r-1)%Wo.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ht(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*kn-1),v=s/_,p=isFinite(s)?1+Math.floor(h*v):kn;p>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const u=[];let A=0;for(let w=0;w<kn;++w){const V=w/v,S=Math.exp(-V*V/2);u.push(S),w===0?A+=S:w<p&&(A+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const E=this._sizeLods[r],y=3*E*(r>M-vi?r-M+vi:0),C=4*(this._cubeSize-E);gr(t,y,C,3*E,2*E),l.setRenderTarget(t),l.render(d,os)}}function Gd(n){const e=[],t=[],i=[];let r=n;const s=n-vi+1+ko.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-vi?l=ko[a-n+vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,v=3,p=2,u=1,A=new Float32Array(v*_*g),M=new Float32Array(p*_*g),E=new Float32Array(u*_*g);for(let C=0;C<g;C++){const w=C%3*2/3-1,V=C>2?0:-1,S=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];A.set(S,v*_*C),M.set(f,p*_*C);const R=[C,C,C,C,C,C];E.set(R,u*_*C)}const y=new nn;y.setAttribute("position",new kt(A,v)),y.setAttribute("uv",new kt(M,p)),y.setAttribute("faceIndex",new kt(E,u)),e.push(y),r>vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qo(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kd(n,e,t){const i=new Float32Array(kn),r=new O(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function jo(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Yo(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Bs(){return`

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
	`}function Vd(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ys||l===Ts,h=l===Si||l===Ei;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Xo(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Xo(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Wd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xd(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const v=g[_];for(let p=0,u=v.length;p<u;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(d){const f=[],g=d.index,_=d.attributes.position;let v=0;if(g!==null){const A=g.array;v=g.version;for(let M=0,E=A.length;M<E;M+=3){const y=A[M+0],C=A[M+1],w=A[M+2];f.push(y,C,C,w,w,y)}}else if(_!==void 0){const A=_.array;v=_.version;for(let M=0,E=A.length/3-1;M<E;M+=3){const y=M+0,C=M+1,w=M+2;f.push(y,C,C,w,w,y)}}else return;const p=new(Va(f)?Za:Ka)(f,1);p.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function qd(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(s,g,o,f*l),t.update(g,s,1)}function d(f,g,_){if(_===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,g,o,f*l,_),t.update(g,s,_)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function jd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yd(n,e){return n[0]-e[0]}function Kd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Zd(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let p=s.get(h);if(p===void 0||p.count!==v){let k=function(){Q.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var g=k;p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let S=0;M===!0&&(S=1),E===!0&&(S=2),y===!0&&(S=3);let R=h.attributes.position.count*S,W=1;R>e.maxTextureSize&&(W=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const q=new Float32Array(R*W*4*v),Q=new qa(q,R,W,v);Q.type=Cn,Q.needsUpdate=!0;const N=S*4;for(let X=0;X<v;X++){const j=C[X],se=w[X],$=V[X],ee=R*W*4*X;for(let z=0;z<j.count;z++){const B=z*N;M===!0&&(a.fromBufferAttribute(j,z),q[ee+B+0]=a.x,q[ee+B+1]=a.y,q[ee+B+2]=a.z,q[ee+B+3]=0),E===!0&&(a.fromBufferAttribute(se,z),q[ee+B+4]=a.x,q[ee+B+5]=a.y,q[ee+B+6]=a.z,q[ee+B+7]=0),y===!0&&(a.fromBufferAttribute($,z),q[ee+B+8]=a.x,q[ee+B+9]=a.y,q[ee+B+10]=a.z,q[ee+B+11]=$.itemSize===4?a.w:1)}}p={count:v,texture:Q,size:new Ve(R,W)},s.set(h,p),h.addEventListener("dispose",k)}let u=0;for(let M=0;M<f.length;M++)u+=f[M];const A=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let v=i[h.id];if(v===void 0||v.length!==_){v=[];for(let E=0;E<_;E++)v[E]=[E,0];i[h.id]=v}for(let E=0;E<_;E++){const y=v[E];y[0]=E,y[1]=f[E]}v.sort(Kd);for(let E=0;E<8;E++)E<_&&v[E][1]?(o[E][0]=v[E][0],o[E][1]=v[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Yd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let A=0;for(let E=0;E<8;E++){const y=o[E],C=y[0],w=y[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+E)!==p[C]&&h.setAttribute("morphTarget"+E,p[C]),u&&h.getAttribute("morphNormal"+E)!==u[C]&&h.setAttribute("morphNormal"+E,u[C]),r[E]=w,A+=w):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),u&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const M=h.morphTargetsRelative?1:1-A;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function $d(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const nl=new Gt,il=new qa,rl=new Oc,sl=new Qa,Ko=[],Zo=[],$o=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function Ri(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ko[r];if(s===void 0&&(s=new Float32Array(r),Ko[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nr(n,e){let t=Zo[e];t===void 0&&(t=new Int32Array(e),Zo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function nf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Qo.set(i),n.uniformMatrix2fv(this.addr,!1,Qo),gt(t,i)}}function rf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Jo.set(i),n.uniformMatrix3fv(this.addr,!1,Jo),gt(t,i)}}function sf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;$o.set(i),n.uniformMatrix4fv(this.addr,!1,$o),gt(t,i)}}function of(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function hf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function ff(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function pf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||nl,r)}function mf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rl,r)}function gf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sl,r)}function _f(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||il,r)}function vf(n){switch(n){case 5126:return Jd;case 35664:return Qd;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return rf;case 35676:return sf;case 5124:case 35670:return of;case 35667:case 35671:return af;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(n,e){n.uniform1fv(this.addr,e)}function Mf(n,e){const t=Ri(e,this.size,2);n.uniform2fv(this.addr,t)}function Sf(n,e){const t=Ri(e,this.size,3);n.uniform3fv(this.addr,t)}function Ef(n,e){const t=Ri(e,this.size,4);n.uniform4fv(this.addr,t)}function yf(n,e){const t=Ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tf(n,e){const t=Ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bf(n,e){const t=Ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Af(n,e){n.uniform1iv(this.addr,e)}function wf(n,e){n.uniform2iv(this.addr,e)}function Rf(n,e){n.uniform3iv(this.addr,e)}function Cf(n,e){n.uniform4iv(this.addr,e)}function Lf(n,e){n.uniform1uiv(this.addr,e)}function Pf(n,e){n.uniform2uiv(this.addr,e)}function Df(n,e){n.uniform3uiv(this.addr,e)}function Uf(n,e){n.uniform4uiv(this.addr,e)}function If(n,e,t){const i=this.cache,r=e.length,s=Nr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||nl,s[a])}function Nf(n,e,t){const i=this.cache,r=e.length,s=Nr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||rl,s[a])}function Ff(n,e,t){const i=this.cache,r=e.length,s=Nr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||sl,s[a])}function Of(n,e,t){const i=this.cache,r=e.length,s=Nr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||il,s[a])}function zf(n){switch(n){case 5126:return xf;case 35664:return Mf;case 35665:return Sf;case 35666:return Ef;case 35674:return yf;case 35675:return Tf;case 35676:return bf;case 5124:case 35670:return Af;case 35667:case 35671:return wf;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Lf;case 36294:return Pf;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}class Bf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=vf(t.type)}}class Hf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=zf(t.type)}}class Gf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const hs=/(\w+)(\])?(\[|\.)?/g;function ea(n,e){n.seq.push(e),n.map[e.id]=e}function kf(n,e,t){const i=n.name,r=i.length;for(hs.lastIndex=0;;){const s=hs.exec(i),a=hs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ea(t,c===void 0?new Bf(o,n,e):new Hf(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Gf(o),ea(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);kf(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ta(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vf=37297;let Wf=0;function Xf(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function qf(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===br&&t===Tr?i="LinearDisplayP3ToLinearSRGB":e===Tr&&t===br&&(i="LinearSRGBToLinearDisplayP3"),n){case xn:case Dr:return[i,"LinearTransferOETF"];case Et:case Ns:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function na(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Xf(n.getShaderSource(e),a)}else return r}function jf(n,e){const t=qf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yf(n,e){let t;switch(e){case ql:t="Linear";break;case jl:t="Reinhard";break;case Yl:t="OptimizedCineon";break;case Kl:t="ACESFilmic";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function Zf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $f(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zi(n){return n!==""}function ia(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ra(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cs(n){return n.replace(Jf,ep)}const Qf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ep(n,e){let t=Ke[e];if(t===void 0){const i=Qf.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cs(t)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sa(n){return n.replace(tp,np)}function np(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oa(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ip(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function rp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case Ei:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function op(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ua:e="ENVMAP_BLENDING_MULTIPLY";break;case Wl:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function ap(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ip(t),c=rp(t),h=sp(t),d=op(t),f=ap(t),g=t.isWebGL2?"":Kf(t),_=Zf(s),v=r.createProgram();let p,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zi).join(`
`),p.length>0&&(p+=`
`),u=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zi).join(`
`),u.length>0&&(u+=`
`)):(p=[oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),u=[g,oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Yf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,jf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=Cs(a),a=ia(a,t),a=ra(a,t),o=Cs(o),o=ia(o,t),o=ra(o,t),a=sa(a),o=sa(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=A+p+a,E=A+u+o,y=ta(r,r.VERTEX_SHADER,M),C=ta(r,r.FRAGMENT_SHADER,E);r.attachShader(v,y),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(W){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(v).trim(),Q=r.getShaderInfoLog(y).trim(),N=r.getShaderInfoLog(C).trim();let k=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,y,C);else{const j=na(r,y,"vertex"),se=na(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+j+`
`+se)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Q===""||N==="")&&(X=!1);X&&(W.diagnostics={runnable:k,programLog:q,vertexShader:{log:Q,prefix:p},fragmentShader:{log:N,prefix:u}})}r.deleteShader(y),r.deleteShader(C),V=new Mr(r,v),S=$f(r,v)}let V;this.getUniforms=function(){return V===void 0&&w(this),V};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,Vf)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=C,this}let cp=0;class hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new up(e),t.set(e,i)),i}}class up{constructor(e){this.id=cp++,this.code=e,this.usedTimes=0}}function dp(n,e,t,i,r,s,a){const o=new ja,l=new hp,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,R,W,q,Q){const N=q.fog,k=Q.geometry,X=S.isMeshStandardMaterial?q.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),se=j&&j.mapping===Pr?j.image.height:null,$=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,z=ee!==void 0?ee.length:0;let B=0;k.morphAttributes.position!==void 0&&(B=1),k.morphAttributes.normal!==void 0&&(B=2),k.morphAttributes.color!==void 0&&(B=3);let ge,_e,ne,he;if($){const Ze=sn[$];ge=Ze.vertexShader,_e=Ze.fragmentShader}else ge=S.vertexShader,_e=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),he=l.getFragmentShaderID(S);const G=n.getRenderTarget(),Z=Q.isInstancedMesh===!0,ve=!!S.map,De=!!S.matcap,Ue=!!j,F=!!S.aoMap,Xe=!!S.lightMap,pe=!!S.bumpMap,Me=!!S.normalMap,Le=!!S.displacementMap,Fe=!!S.emissiveMap,ye=!!S.metalnessMap,Ae=!!S.roughnessMap,Pe=S.anisotropy>0,Oe=S.clearcoat>0,We=S.iridescence>0,T=S.sheen>0,x=S.transmission>0,H=Pe&&!!S.anisotropyMap,oe=Oe&&!!S.clearcoatMap,re=Oe&&!!S.clearcoatNormalMap,ce=Oe&&!!S.clearcoatRoughnessMap,Te=We&&!!S.iridescenceMap,ie=We&&!!S.iridescenceThicknessMap,xe=T&&!!S.sheenColorMap,P=T&&!!S.sheenRoughnessMap,le=!!S.specularMap,J=!!S.specularColorMap,ze=!!S.specularIntensityMap,Ce=x&&!!S.transmissionMap,Se=x&&!!S.thicknessMap,be=!!S.gradientMap,Ee=!!S.alphaMap,ke=S.alphaTest>0,U=!!S.alphaHash,me=!!S.extensions,ae=!!k.attributes.uv1,K=!!k.attributes.uv2,ue=!!k.attributes.uv3;let Ie=Pn;return S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ie=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:_e,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Z,instancingColor:Z&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:xn,map:ve,matcap:De,envMap:Ue,envMapMode:Ue&&j.mapping,envMapCubeUVHeight:se,aoMap:F,lightMap:Xe,bumpMap:pe,normalMap:Me,displacementMap:f&&Le,emissiveMap:Fe,normalMapObjectSpace:Me&&S.normalMapType===cc,normalMapTangentSpace:Me&&S.normalMapType===ka,metalnessMap:ye,roughnessMap:Ae,anisotropy:Pe,anisotropyMap:H,clearcoat:Oe,clearcoatMap:oe,clearcoatNormalMap:re,clearcoatRoughnessMap:ce,iridescence:We,iridescenceMap:Te,iridescenceThicknessMap:ie,sheen:T,sheenColorMap:xe,sheenRoughnessMap:P,specularMap:le,specularColorMap:J,specularIntensityMap:ze,transmission:x,transmissionMap:Ce,thicknessMap:Se,gradientMap:be,opaque:S.transparent===!1&&S.blending===xi,alphaMap:Ee,alphaTest:ke,alphaHash:U,combine:S.combine,mapUv:ve&&v(S.map.channel),aoMapUv:F&&v(S.aoMap.channel),lightMapUv:Xe&&v(S.lightMap.channel),bumpMapUv:pe&&v(S.bumpMap.channel),normalMapUv:Me&&v(S.normalMap.channel),displacementMapUv:Le&&v(S.displacementMap.channel),emissiveMapUv:Fe&&v(S.emissiveMap.channel),metalnessMapUv:ye&&v(S.metalnessMap.channel),roughnessMapUv:Ae&&v(S.roughnessMap.channel),anisotropyMapUv:H&&v(S.anisotropyMap.channel),clearcoatMapUv:oe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:P&&v(S.sheenRoughnessMap.channel),specularMapUv:le&&v(S.specularMap.channel),specularColorMapUv:J&&v(S.specularColorMap.channel),specularIntensityMapUv:ze&&v(S.specularIntensityMap.channel),transmissionMapUv:Ce&&v(S.transmissionMap.channel),thicknessMapUv:Se&&v(S.thicknessMap.channel),alphaMapUv:Ee&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Me||Pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:K,vertexUv3s:ue,pointsUvs:Q.isPoints===!0&&!!k.attributes.uv&&(ve||Ee),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:B,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)R.push(W),R.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(A(R,S),M(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function A(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function M(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function E(S){const R=_[S.type];let W;if(R){const q=sn[R];W=Zc.clone(q.uniforms)}else W=S.uniforms;return W}function y(S,R){let W;for(let q=0,Q=c.length;q<Q;q++){const N=c[q];if(N.cacheKey===R){W=N,++W.usedTimes;break}}return W===void 0&&(W=new lp(n,R,S,s),c.push(W)),W}function C(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:y,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:V}}function fp(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function aa(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function la(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,g,_,v,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=g,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=p),e++,u}function o(d,f,g,_,v,p){const u=a(d,f,g,_,v,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):t.push(u)}function l(d,f,g,_,v,p){const u=a(d,f,g,_,v,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||pp),i.length>1&&i.sort(f||aa),r.length>1&&r.sort(f||aa)}function h(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function mp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new la,n.set(i,[a])):r>=s.length?(a=new la,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function gp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function _p(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vp=0;function xp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Mp(n,e){const t=new gp,i=_p(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new O);const s=new O,a=new ct,o=new ct;function l(h,d){let f=0,g=0,_=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,p=0,u=0,A=0,M=0,E=0,y=0,C=0,w=0,V=0,S=0;h.sort(xp);const R=d===!0?Math.PI:1;for(let q=0,Q=h.length;q<Q;q++){const N=h[q],k=N.color,X=N.intensity,j=N.distance,se=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=k.r*X*R,g+=k.g*X*R,_+=k.b*X*R;else if(N.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(N.sh.coefficients[$],X);S++}else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*R),N.castShadow){const ee=N.shadow,z=i.get(N);z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,r.directionalShadow[v]=z,r.directionalShadowMap[v]=se,r.directionalShadowMatrix[v]=N.shadow.matrix,E++}r.directional[v]=$,v++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(k).multiplyScalar(X*R),$.distance=j,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,r.spot[u]=$;const ee=N.shadow;if(N.map&&(r.spotLightMap[w]=N.map,w++,ee.updateMatrices(N),N.castShadow&&V++),r.spotLightMatrix[u]=ee.matrix,N.castShadow){const z=i.get(N);z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,r.spotShadow[u]=z,r.spotShadowMap[u]=se,C++}u++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(k).multiplyScalar(X),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),r.rectArea[A]=$,A++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*R),$.distance=N.distance,$.decay=N.decay,N.castShadow){const ee=N.shadow,z=i.get(N);z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,r.pointShadow[p]=z,r.pointShadowMap[p]=se,r.pointShadowMatrix[p]=N.shadow.matrix,y++}r.point[p]=$,p++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(X*R),$.groundColor.copy(N.groundColor).multiplyScalar(X*R),r.hemi[M]=$,M++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==v||W.pointLength!==p||W.spotLength!==u||W.rectAreaLength!==A||W.hemiLength!==M||W.numDirectionalShadows!==E||W.numPointShadows!==y||W.numSpotShadows!==C||W.numSpotMaps!==w||W.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=A,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=C+w-V,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=S,W.directionalLength=v,W.pointLength=p,W.spotLength=u,W.rectAreaLength=A,W.hemiLength=M,W.numDirectionalShadows=E,W.numPointShadows=y,W.numSpotShadows=C,W.numSpotMaps=w,W.numLightProbes=S,r.version=vp++)}function c(h,d){let f=0,g=0,_=0,v=0,p=0;const u=d.matrixWorldInverse;for(let A=0,M=h.length;A<M;A++){const E=h[A];if(E.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),f++}else if(E.isSpotLight){const y=r.spot[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const y=r.point[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(u),g++}else if(E.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ca(n,e){const t=new Mp(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Sp(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new ca(n,e),t.set(s,[l])):a>=o.length?(l=new ca(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ep extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yp extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bp=`uniform sampler2D shadow_pass;
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
}`;function Ap(n,e,t){let i=new Ir;const r=new Ve,s=new Ve,a=new xt,o=new Ep({depthPacking:lc}),l=new yp,c={},h=t.maxTextureSize,d={[Un]:It,[It]:Un,[gn]:gn},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Tp,fragmentShader:bp}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let u=this.type;this.render=function(y,C,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const V=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Ln),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=u!==pn&&this.type===pn,Q=u===pn&&this.type!==pn;for(let N=0,k=y.length;N<k;N++){const X=y[N],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const se=j.getFrameExtents();if(r.multiply(se),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,j.mapSize.y=s.y)),j.map===null||q===!0||Q===!0){const ee=this.type!==pn?{minFilter:Dt,magFilter:Dt}:{};j.map!==null&&j.map.dispose(),j.map=new Zn(r.x,r.y,ee),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const $=j.getViewportCount();for(let ee=0;ee<$;ee++){const z=j.getViewport(ee);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),W.viewport(a),j.updateMatrices(X,ee),i=j.getFrustum(),E(C,w,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===pn&&A(j,w),j.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(V,S,R)};function A(y,C){const w=e.update(v);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zn(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(C,null,w,f,v,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(C,null,w,g,v,null)}function M(y,C,w,V){let S=null;const R=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)S=R;else if(S=w.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=S.uuid,q=C.uuid;let Q=c[W];Q===void 0&&(Q={},c[W]=Q);let N=Q[q];N===void 0&&(N=S.clone(),Q[q]=N),S=N}if(S.visible=C.visible,S.wireframe=C.wireframe,V===pn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=n.properties.get(S);W.light=w}return S}function E(y,C,w,V,S){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===pn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const q=e.update(y),Q=y.material;if(Array.isArray(Q)){const N=q.groups;for(let k=0,X=N.length;k<X;k++){const j=N[k],se=Q[j.materialIndex];if(se&&se.visible){const $=M(y,se,V,S);n.renderBufferDirect(w,null,q,$,y,j)}}}else if(Q.visible){const N=M(y,Q,V,S);n.renderBufferDirect(w,null,q,N,y,null)}}const W=y.children;for(let q=0,Q=W.length;q<Q;q++)E(W[q],C,w,V,S)}}function wp(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const me=new xt;let ae=null;const K=new xt(0,0,0,0);return{setMask:function(ue){ae!==ue&&!U&&(n.colorMask(ue,ue,ue,ue),ae=ue)},setLocked:function(ue){U=ue},setClear:function(ue,Ie,Ge,Ze,tt){tt===!0&&(ue*=Ze,Ie*=Ze,Ge*=Ze),me.set(ue,Ie,Ge,Ze),K.equals(me)===!1&&(n.clearColor(ue,Ie,Ge,Ze),K.copy(me))},reset:function(){U=!1,ae=null,K.set(-1,0,0,0)}}}function s(){let U=!1,me=null,ae=null,K=null;return{setTest:function(ue){ue?ve(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(ue){me!==ue&&!U&&(n.depthMask(ue),me=ue)},setFunc:function(ue){if(ae!==ue){switch(ue){case Ol:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=ue}},setLocked:function(ue){U=ue},setClear:function(ue){K!==ue&&(n.clearDepth(ue),K=ue)},reset:function(){U=!1,me=null,ae=null,K=null}}}function a(){let U=!1,me=null,ae=null,K=null,ue=null,Ie=null,Ge=null,Ze=null,tt=null;return{setTest:function(qe){U||(qe?ve(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(qe){me!==qe&&!U&&(n.stencilMask(qe),me=qe)},setFunc:function(qe,fe,rt){(ae!==qe||K!==fe||ue!==rt)&&(n.stencilFunc(qe,fe,rt),ae=qe,K=fe,ue=rt)},setOp:function(qe,fe,rt){(Ie!==qe||Ge!==fe||Ze!==rt)&&(n.stencilOp(qe,fe,rt),Ie=qe,Ge=fe,Ze=rt)},setLocked:function(qe){U=qe},setClear:function(qe){tt!==qe&&(n.clearStencil(qe),tt=qe)},reset:function(){U=!1,me=null,ae=null,K=null,ue=null,Ie=null,Ge=null,Ze=null,tt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let f={},g={},_=new WeakMap,v=[],p=null,u=!1,A=null,M=null,E=null,y=null,C=null,w=null,V=null,S=new Je(0,0,0),R=0,W=!1,q=null,Q=null,N=null,k=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,$=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),se=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),se=$>=2);let z=null,B={};const ge=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ne=new xt().fromArray(ge),he=new xt().fromArray(_e);function G(U,me,ae,K){const ue=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(U,Ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<ae;Ge++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(me+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return Ie}const Z={};Z[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Z[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(n.DEPTH_TEST),l.setFunc(Er),ye(!1),Ae(Vs),ve(n.CULL_FACE),Le(Ln);function ve(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function De(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Ue(U,me){return g[U]!==me?(n.bindFramebuffer(U,me),g[U]=me,i&&(U===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=me),U===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function F(U,me){let ae=v,K=!1;if(U)if(ae=_.get(me),ae===void 0&&(ae=[],_.set(me,ae)),U.isWebGLMultipleRenderTargets){const ue=U.texture;if(ae.length!==ue.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,Ge=ue.length;Ie<Ge;Ie++)ae[Ie]=n.COLOR_ATTACHMENT0+Ie;ae.length=ue.length,K=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,K=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,K=!0);K&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Xe(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const pe={[Gn]:n.FUNC_ADD,[El]:n.FUNC_SUBTRACT,[yl]:n.FUNC_REVERSE_SUBTRACT};if(i)pe[js]=n.MIN,pe[Ys]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(pe[js]=U.MIN_EXT,pe[Ys]=U.MAX_EXT)}const Me={[Tl]:n.ZERO,[bl]:n.ONE,[Al]:n.SRC_COLOR,[Ss]:n.SRC_ALPHA,[Dl]:n.SRC_ALPHA_SATURATE,[Ll]:n.DST_COLOR,[Rl]:n.DST_ALPHA,[wl]:n.ONE_MINUS_SRC_COLOR,[Es]:n.ONE_MINUS_SRC_ALPHA,[Pl]:n.ONE_MINUS_DST_COLOR,[Cl]:n.ONE_MINUS_DST_ALPHA,[Ul]:n.CONSTANT_COLOR,[Il]:n.ONE_MINUS_CONSTANT_COLOR,[Nl]:n.CONSTANT_ALPHA,[Fl]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(U,me,ae,K,ue,Ie,Ge,Ze,tt,qe){if(U===Ln){u===!0&&(De(n.BLEND),u=!1);return}if(u===!1&&(ve(n.BLEND),u=!0),U!==Sl){if(U!==A||qe!==W){if((M!==Gn||C!==Gn)&&(n.blendEquation(n.FUNC_ADD),M=Gn,C=Gn),qe)switch(U){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFunc(n.ONE,n.ONE);break;case Xs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qs:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qs:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,y=null,w=null,V=null,S.set(0,0,0),R=0,A=U,W=qe}return}ue=ue||me,Ie=Ie||ae,Ge=Ge||K,(me!==M||ue!==C)&&(n.blendEquationSeparate(pe[me],pe[ue]),M=me,C=ue),(ae!==E||K!==y||Ie!==w||Ge!==V)&&(n.blendFuncSeparate(Me[ae],Me[K],Me[Ie],Me[Ge]),E=ae,y=K,w=Ie,V=Ge),(Ze.equals(S)===!1||tt!==R)&&(n.blendColor(Ze.r,Ze.g,Ze.b,tt),S.copy(Ze),R=tt),A=U,W=!1}function Fe(U,me){U.side===gn?De(n.CULL_FACE):ve(n.CULL_FACE);let ae=U.side===It;me&&(ae=!ae),ye(ae),U.blending===xi&&U.transparent===!1?Le(Ln):Le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const K=U.stencilWrite;c.setTest(K),K&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){q!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),q=U)}function Ae(U){U!==xl?(ve(n.CULL_FACE),U!==Q&&(U===Vs?n.cullFace(n.BACK):U===Ml?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),Q=U}function Pe(U){U!==N&&(se&&n.lineWidth(U),N=U)}function Oe(U,me,ae){U?(ve(n.POLYGON_OFFSET_FILL),(k!==me||X!==ae)&&(n.polygonOffset(me,ae),k=me,X=ae)):De(n.POLYGON_OFFSET_FILL)}function We(U){U?ve(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function T(U){U===void 0&&(U=n.TEXTURE0+j-1),z!==U&&(n.activeTexture(U),z=U)}function x(U,me,ae){ae===void 0&&(z===null?ae=n.TEXTURE0+j-1:ae=z);let K=B[ae];K===void 0&&(K={type:void 0,texture:void 0},B[ae]=K),(K.type!==U||K.texture!==me)&&(z!==ae&&(n.activeTexture(ae),z=ae),n.bindTexture(U,me||Z[U]),K.type=U,K.texture=me)}function H(){const U=B[z];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(U){ne.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function Se(U){he.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function be(U,me){let ae=d.get(me);ae===void 0&&(ae=new WeakMap,d.set(me,ae));let K=ae.get(U);K===void 0&&(K=n.getUniformBlockIndex(me,U.name),ae.set(U,K))}function Ee(U,me){const K=d.get(me).get(U);h.get(me)!==K&&(n.uniformBlockBinding(me,K,U.__bindingPointIndex),h.set(me,K))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},z=null,B={},g={},_=new WeakMap,v=[],p=null,u=!1,A=null,M=null,E=null,y=null,C=null,w=null,V=null,S=new Je(0,0,0),R=0,W=!1,q=null,Q=null,N=null,k=null,X=null,ne.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:De,bindFramebuffer:Ue,drawBuffers:F,useProgram:Xe,setBlending:Le,setMaterial:Fe,setFlipSided:ye,setCullFace:Ae,setLineWidth:Pe,setPolygonOffset:Oe,setScissorTest:We,activeTexture:T,bindTexture:x,unbindTexture:H,compressedTexImage2D:oe,compressedTexImage3D:re,texImage2D:J,texImage3D:ze,updateUBOMapping:be,uniformBlockBinding:Ee,texStorage2D:P,texStorage3D:le,texSubImage2D:ce,texSubImage3D:Te,compressedTexSubImage2D:ie,compressedTexSubImage3D:xe,scissor:Ce,viewport:Se,reset:ke}}function Rp(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,x){return u?new OffscreenCanvas(T,x):Rr("canvas")}function M(T,x,H,oe){let re=1;if((T.width>oe||T.height>oe)&&(re=oe/Math.max(T.width,T.height)),re<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ce=x?wr:Math.floor,Te=ce(re*T.width),ie=ce(re*T.height);v===void 0&&(v=A(Te,ie));const xe=H?A(Te,ie):v;return xe.width=Te,xe.height=ie,xe.getContext("2d").drawImage(T,0,0,Te,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Te+"x"+ie+")."),xe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function E(T){return Rs(T.width)&&Rs(T.height)}function y(T){return o?!1:T.wrapS!==Qt||T.wrapT!==Qt||T.minFilter!==Dt&&T.minFilter!==Xt}function C(T,x){return T.generateMipmaps&&x&&T.minFilter!==Dt&&T.minFilter!==Xt}function w(T){n.generateMipmap(T)}function V(T,x,H,oe,re=!1){if(o===!1)return x;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce=x;if(x===n.RED&&(H===n.FLOAT&&(ce=n.R32F),H===n.HALF_FLOAT&&(ce=n.R16F),H===n.UNSIGNED_BYTE&&(ce=n.R8)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ce=n.R8UI),H===n.UNSIGNED_SHORT&&(ce=n.R16UI),H===n.UNSIGNED_INT&&(ce=n.R32UI),H===n.BYTE&&(ce=n.R8I),H===n.SHORT&&(ce=n.R16I),H===n.INT&&(ce=n.R32I)),x===n.RG&&(H===n.FLOAT&&(ce=n.RG32F),H===n.HALF_FLOAT&&(ce=n.RG16F),H===n.UNSIGNED_BYTE&&(ce=n.RG8)),x===n.RGBA){const Te=re?yr:nt.getTransfer(oe);H===n.FLOAT&&(ce=n.RGBA32F),H===n.HALF_FLOAT&&(ce=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ce=Te===st?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(T,x,H){return C(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){return T===Dt||T===Ks||T===Or?n.NEAREST:n.LINEAR}function W(T){const x=T.target;x.removeEventListener("dispose",W),Q(x),x.isVideoTexture&&_.delete(x)}function q(T){const x=T.target;x.removeEventListener("dispose",q),k(x)}function Q(T){const x=i.get(T);if(x.__webglInit===void 0)return;const H=T.source,oe=p.get(H);if(oe){const re=oe[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(T),Object.keys(oe).length===0&&p.delete(H)}i.remove(T)}function N(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const H=T.source,oe=p.get(H);delete oe[x.__cacheKey],a.memory.textures--}function k(T){const x=T.texture,H=i.get(T),oe=i.get(x);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(H.__webglFramebuffer[re]))for(let ce=0;ce<H.__webglFramebuffer[re].length;ce++)n.deleteFramebuffer(H.__webglFramebuffer[re][ce]);else n.deleteFramebuffer(H.__webglFramebuffer[re]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[re])}else{if(Array.isArray(H.__webglFramebuffer))for(let re=0;re<H.__webglFramebuffer.length;re++)n.deleteFramebuffer(H.__webglFramebuffer[re]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let re=0;re<H.__webglColorRenderbuffer.length;re++)H.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[re]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,ce=x.length;re<ce;re++){const Te=i.get(x[re]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),a.memory.textures--),i.remove(x[re])}i.remove(x),i.remove(T)}let X=0;function j(){X=0}function se(){const T=X;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),X+=1,T}function $(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ee(T,x){const H=i.get(T);if(T.isVideoTexture&&Oe(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const oe=T.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,T,x);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function z(T,x){const H=i.get(T);if(T.version>0&&H.__version!==T.version){ve(H,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function B(T,x){const H=i.get(T);if(T.version>0&&H.__version!==T.version){ve(H,T,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function ge(T,x){const H=i.get(T);if(T.version>0&&H.__version!==T.version){De(H,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const _e={[bs]:n.REPEAT,[Qt]:n.CLAMP_TO_EDGE,[As]:n.MIRRORED_REPEAT},ne={[Dt]:n.NEAREST,[Ks]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[$l]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},he={[hc]:n.NEVER,[_c]:n.ALWAYS,[uc]:n.LESS,[fc]:n.LEQUAL,[dc]:n.EQUAL,[gc]:n.GEQUAL,[pc]:n.GREATER,[mc]:n.NOTEQUAL};function G(T,x,H){if(H?(n.texParameteri(T,n.TEXTURE_WRAP_S,_e[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,_e[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,_e[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ne[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ne[x.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Qt||x.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,R(x.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Dt&&x.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Dt||x.minFilter!==Or&&x.minFilter!==Vi||x.type===Cn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(T,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Z(T,x){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",W));const oe=x.source;let re=p.get(oe);re===void 0&&(re={},p.set(oe,re));const ce=$(x);if(ce!==T.__cacheKey){re[ce]===void 0&&(re[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),re[ce].usedTimes++;const Te=re[T.__cacheKey];Te!==void 0&&(re[T.__cacheKey].usedTimes--,Te.usedTimes===0&&N(x)),T.__cacheKey=ce,T.__webglTexture=re[ce].texture}return H}function ve(T,x,H){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);const re=Z(T,x),ce=x.source;t.bindTexture(oe,T.__webglTexture,n.TEXTURE0+H);const Te=i.get(ce);if(ce.version!==Te.__version||re===!0){t.activeTexture(n.TEXTURE0+H);const ie=nt.getPrimaries(nt.workingColorSpace),xe=x.colorSpace===jt?null:nt.getPrimaries(x.colorSpace),P=x.colorSpace===jt||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const le=y(x)&&E(x.image)===!1;let J=M(x.image,le,!1,h);J=We(x,J);const ze=E(J)||o,Ce=s.convert(x.format,x.colorSpace);let Se=s.convert(x.type),be=V(x.internalFormat,Ce,Se,x.colorSpace,x.isVideoTexture);G(oe,x,ze);let Ee;const ke=x.mipmaps,U=o&&x.isVideoTexture!==!0,me=Te.__version===void 0||re===!0,ae=S(x,J,ze);if(x.isDepthTexture)be=n.DEPTH_COMPONENT,o?x.type===Cn?be=n.DEPTH_COMPONENT32F:x.type===Rn?be=n.DEPTH_COMPONENT24:x.type===jn?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:x.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Yn&&be===n.DEPTH_COMPONENT&&x.type!==Is&&x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Rn,Se=s.convert(x.type)),x.format===yi&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,x.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=jn,Se=s.convert(x.type))),me&&(U?t.texStorage2D(n.TEXTURE_2D,1,be,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,be,J.width,J.height,0,Ce,Se,null));else if(x.isDataTexture)if(ke.length>0&&ze){U&&me&&t.texStorage2D(n.TEXTURE_2D,ae,be,ke[0].width,ke[0].height);for(let K=0,ue=ke.length;K<ue;K++)Ee=ke[K],U?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ce,Se,Ee.data):t.texImage2D(n.TEXTURE_2D,K,be,Ee.width,Ee.height,0,Ce,Se,Ee.data);x.generateMipmaps=!1}else U?(me&&t.texStorage2D(n.TEXTURE_2D,ae,be,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Ce,Se,J.data)):t.texImage2D(n.TEXTURE_2D,0,be,J.width,J.height,0,Ce,Se,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,be,ke[0].width,ke[0].height,J.depth);for(let K=0,ue=ke.length;K<ue;K++)Ee=ke[K],x.format!==en?Ce!==null?U?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,J.depth,Ce,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,be,Ee.width,Ee.height,J.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,J.depth,Ce,Se,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,be,Ee.width,Ee.height,J.depth,0,Ce,Se,Ee.data)}else{U&&me&&t.texStorage2D(n.TEXTURE_2D,ae,be,ke[0].width,ke[0].height);for(let K=0,ue=ke.length;K<ue;K++)Ee=ke[K],x.format!==en?Ce!==null?U?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,K,be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ce,Se,Ee.data):t.texImage2D(n.TEXTURE_2D,K,be,Ee.width,Ee.height,0,Ce,Se,Ee.data)}else if(x.isDataArrayTexture)U?(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,be,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ce,Se,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,J.width,J.height,J.depth,0,Ce,Se,J.data);else if(x.isData3DTexture)U?(me&&t.texStorage3D(n.TEXTURE_3D,ae,be,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ce,Se,J.data)):t.texImage3D(n.TEXTURE_3D,0,be,J.width,J.height,J.depth,0,Ce,Se,J.data);else if(x.isFramebufferTexture){if(me)if(U)t.texStorage2D(n.TEXTURE_2D,ae,be,J.width,J.height);else{let K=J.width,ue=J.height;for(let Ie=0;Ie<ae;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,be,K,ue,0,Ce,Se,null),K>>=1,ue>>=1}}else if(ke.length>0&&ze){U&&me&&t.texStorage2D(n.TEXTURE_2D,ae,be,ke[0].width,ke[0].height);for(let K=0,ue=ke.length;K<ue;K++)Ee=ke[K],U?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ce,Se,Ee):t.texImage2D(n.TEXTURE_2D,K,be,Ce,Se,Ee);x.generateMipmaps=!1}else U?(me&&t.texStorage2D(n.TEXTURE_2D,ae,be,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Se,J)):t.texImage2D(n.TEXTURE_2D,0,be,Ce,Se,J);C(x,ze)&&w(oe),Te.__version=ce.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function De(T,x,H){if(x.image.length!==6)return;const oe=Z(T,x),re=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+H);const ce=i.get(re);if(re.version!==ce.__version||oe===!0){t.activeTexture(n.TEXTURE0+H);const Te=nt.getPrimaries(nt.workingColorSpace),ie=x.colorSpace===jt?null:nt.getPrimaries(x.colorSpace),xe=x.colorSpace===jt||Te===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const P=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,J=[];for(let K=0;K<6;K++)!P&&!le?J[K]=M(x.image[K],!1,!0,c):J[K]=le?x.image[K].image:x.image[K],J[K]=We(x,J[K]);const ze=J[0],Ce=E(ze)||o,Se=s.convert(x.format,x.colorSpace),be=s.convert(x.type),Ee=V(x.internalFormat,Se,be,x.colorSpace),ke=o&&x.isVideoTexture!==!0,U=ce.__version===void 0||oe===!0;let me=S(x,ze,Ce);G(n.TEXTURE_CUBE_MAP,x,Ce);let ae;if(P){ke&&U&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ee,ze.width,ze.height);for(let K=0;K<6;K++){ae=J[K].mipmaps;for(let ue=0;ue<ae.length;ue++){const Ie=ae[ue];x.format!==en?Se!==null?ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Ie.width,Ie.height,Se,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,Ee,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Ie.width,Ie.height,Se,be,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,Ee,Ie.width,Ie.height,0,Se,be,Ie.data)}}}else{ae=x.mipmaps,ke&&U&&(ae.length>0&&me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ee,J[0].width,J[0].height));for(let K=0;K<6;K++)if(le){ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,J[K].width,J[K].height,Se,be,J[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,J[K].width,J[K].height,0,Se,be,J[K].data);for(let ue=0;ue<ae.length;ue++){const Ge=ae[ue].image[K].image;ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Ge.width,Ge.height,Se,be,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,Ee,Ge.width,Ge.height,0,Se,be,Ge.data)}}else{ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,be,J[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Se,be,J[K]);for(let ue=0;ue<ae.length;ue++){const Ie=ae[ue];ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Se,be,Ie.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,Ee,Se,be,Ie.image[K])}}}C(x,Ce)&&w(n.TEXTURE_CUBE_MAP),ce.__version=re.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ue(T,x,H,oe,re,ce){const Te=s.convert(H.format,H.colorSpace),ie=s.convert(H.type),xe=V(H.internalFormat,Te,ie,H.colorSpace);if(!i.get(x).__hasExternalTextures){const le=Math.max(1,x.width>>ce),J=Math.max(1,x.height>>ce);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ce,xe,le,J,x.depth,0,Te,ie,null):t.texImage2D(re,ce,xe,le,J,0,Te,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Pe(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,i.get(H).__webglTexture,0,Ae(x)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,i.get(H).__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(T,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let oe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||Pe(x)){const re=x.depthTexture;re&&re.isDepthTexture&&(re.type===Cn?oe=n.DEPTH_COMPONENT32F:re.type===Rn&&(oe=n.DEPTH_COMPONENT24));const ce=Ae(x);Pe(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,oe,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,oe,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const oe=Ae(x);H&&Pe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,x.width,x.height):Pe(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const oe=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let re=0;re<oe.length;re++){const ce=oe[re],Te=s.convert(ce.format,ce.colorSpace),ie=s.convert(ce.type),xe=V(ce.internalFormat,Te,ie,ce.colorSpace),P=Ae(x);H&&Pe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,P,xe,x.width,x.height):Pe(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const oe=i.get(x.depthTexture).__webglTexture,re=Ae(x);if(x.depthTexture.format===Yn)Pe(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(x.depthTexture.format===yi)Pe(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function pe(T){const x=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Xe(x.__webglFramebuffer,T)}else if(H){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]=n.createRenderbuffer(),F(x.__webglDepthbuffer[oe],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),F(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(T,x,H){const oe=i.get(T);x!==void 0&&Ue(oe.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&pe(T)}function Le(T){const x=T.texture,H=i.get(T),oe=i.get(x);T.addEventListener("dispose",q),T.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,a.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,ce=T.isWebGLMultipleRenderTargets===!0,Te=E(T)||o;if(re){H.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(o&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)H.__webglFramebuffer[ie][xe]=n.createFramebuffer()}else H.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)H.__webglFramebuffer[ie]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ce)if(r.drawBuffers){const ie=T.texture;for(let xe=0,P=ie.length;xe<P;xe++){const le=i.get(ie[xe]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Pe(T)===!1){const ie=ce?x:[x];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){const P=ie[xe];H.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const le=s.convert(P.format,P.colorSpace),J=s.convert(P.type),ze=V(P.internalFormat,le,J,P.colorSpace,T.isXRRenderTarget===!0),Ce=Ae(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ze,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),F(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),G(n.TEXTURE_CUBE_MAP,x,Te);for(let ie=0;ie<6;ie++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Ue(H.__webglFramebuffer[ie][xe],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else Ue(H.__webglFramebuffer[ie],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);C(x,Te)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ie=T.texture;for(let xe=0,P=ie.length;xe<P;xe++){const le=ie[xe],J=i.get(le);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),G(n.TEXTURE_2D,le,Te),Ue(H.__webglFramebuffer,T,le,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),C(le,Te)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,oe.__webglTexture),G(ie,x,Te),o&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Ue(H.__webglFramebuffer[xe],T,x,n.COLOR_ATTACHMENT0,ie,xe);else Ue(H.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ie,0);C(x,Te)&&w(ie),t.unbindTexture()}T.depthBuffer&&pe(T)}function Fe(T){const x=E(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let oe=0,re=H.length;oe<re;oe++){const ce=H[oe];if(C(ce,x)){const Te=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ie=i.get(ce).__webglTexture;t.bindTexture(Te,ie),w(Te),t.unbindTexture()}}}function ye(T){if(o&&T.samples>0&&Pe(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,oe=T.height;let re=n.COLOR_BUFFER_BIT;const ce=[],Te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(T),xe=T.isWebGLMultipleRenderTargets===!0;if(xe)for(let P=0;P<x.length;P++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let P=0;P<x.length;P++){ce.push(n.COLOR_ATTACHMENT0+P),T.depthBuffer&&ce.push(Te);const le=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(le===!1&&(T.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),xe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[P]),le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),xe){const J=i.get(x[P]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,H,oe,0,0,H,oe,re,n.NEAREST),g&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let P=0;P<x.length;P++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,ie.__webglColorRenderbuffer[P]);const le=i.get(x[P]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Ae(T){return Math.min(d,T.samples)}function Pe(T){const x=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Oe(T){const x=a.render.frame;_.get(T)!==x&&(_.set(T,x),T.update())}function We(T,x){const H=T.colorSpace,oe=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ws||H!==xn&&H!==jt&&(nt.getTransfer(H)===st?o===!1?e.has("EXT_sRGB")===!0&&oe===en?(T.format=ws,T.minFilter=Xt,T.generateMipmaps=!1):x=Wa.sRGBToLinear(x):(oe!==en||re!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}this.allocateTextureUnit=se,this.resetTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=ge,this.rebindTextures=Me,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Pe}function Cp(n,e,t){const i=t.isWebGL2;function r(s,a=jt){let o;const l=nt.getTransfer(a);if(s===Dn)return n.UNSIGNED_BYTE;if(s===Fa)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Oa)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Jl)return n.BYTE;if(s===Ql)return n.SHORT;if(s===Is)return n.UNSIGNED_SHORT;if(s===Na)return n.INT;if(s===Rn)return n.UNSIGNED_INT;if(s===Cn)return n.FLOAT;if(s===Wi)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ec)return n.ALPHA;if(s===en)return n.RGBA;if(s===tc)return n.LUMINANCE;if(s===nc)return n.LUMINANCE_ALPHA;if(s===Yn)return n.DEPTH_COMPONENT;if(s===yi)return n.DEPTH_STENCIL;if(s===ws)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ic)return n.RED;if(s===za)return n.RED_INTEGER;if(s===rc)return n.RG;if(s===Ba)return n.RG_INTEGER;if(s===Ha)return n.RGBA_INTEGER;if(s===zr||s===Br||s===Hr||s===Gr)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zs||s===$s||s===Js||s===Qs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Zs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$s)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Js)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eo||s===to)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===eo)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===to)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===no||s===io||s===ro||s===so||s===oo||s===ao||s===lo||s===co||s===ho||s===uo||s===fo||s===po||s===mo||s===go)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===no)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===io)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ro)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===so)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ao)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===co)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ho)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===po)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===go)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kr||s===_o||s===vo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===kr)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_o)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oc||s===xo||s===Mo||s===So)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===kr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===So)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jn?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Lp extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pp={type:"move"};class us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Dp extends Gt{constructor(e,t,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yn&&(i=Rn),i===void 0&&h===yi&&(i=jn),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Up extends Mn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,_=null;const v=t.getContextAttributes();let p=null,u=null;const A=[],M=[],E=new qt;E.layers.enable(1),E.viewport=new xt;const y=new qt;y.layers.enable(2),y.viewport=new xt;const C=[E,y],w=new Lp;w.layers.enable(1),w.layers.enable(2);let V=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let B=A[z];return B===void 0&&(B=new us,A[z]=B),B.getTargetRaySpace()},this.getControllerGrip=function(z){let B=A[z];return B===void 0&&(B=new us,A[z]=B),B.getGripSpace()},this.getHand=function(z){let B=A[z];return B===void 0&&(B=new us,A[z]=B),B.getHandSpace()};function R(z){const B=M.indexOf(z.inputSource);if(B===-1)return;const ge=A[B];ge!==void 0&&(ge.update(z.inputSource,z.frame,c||a),ge.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let z=0;z<A.length;z++){const B=M[z];B!==null&&(M[z]=null,A[z].disconnect(B))}V=null,S=null,e.setRenderTarget(p),g=null,f=null,d=null,r=null,u=null,ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:g}),u=new Zn(g.framebufferWidth,g.framebufferHeight,{format:en,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let B=null,ge=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=v.stencil?yi:Yn,ge=v.stencil?jn:Rn);const ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),u=new Zn(f.textureWidth,f.textureHeight,{format:en,type:Dn,depthTexture:new Dp(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const he=e.properties.get(u);he.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(z){for(let B=0;B<z.removed.length;B++){const ge=z.removed[B],_e=M.indexOf(ge);_e>=0&&(M[_e]=null,A[_e].disconnect(ge))}for(let B=0;B<z.added.length;B++){const ge=z.added[B];let _e=M.indexOf(ge);if(_e===-1){for(let he=0;he<A.length;he++)if(he>=M.length){M.push(ge),_e=he;break}else if(M[he]===null){M[he]=ge,_e=he;break}if(_e===-1)break}const ne=A[_e];ne&&ne.connect(ge)}}const Q=new O,N=new O;function k(z,B,ge){Q.setFromMatrixPosition(B.matrixWorld),N.setFromMatrixPosition(ge.matrixWorld);const _e=Q.distanceTo(N),ne=B.projectionMatrix.elements,he=ge.projectionMatrix.elements,G=ne[14]/(ne[10]-1),Z=ne[14]/(ne[10]+1),ve=(ne[9]+1)/ne[5],De=(ne[9]-1)/ne[5],Ue=(ne[8]-1)/ne[0],F=(he[8]+1)/he[0],Xe=G*Ue,pe=G*F,Me=_e/(-Ue+F),Le=Me*-Ue;B.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Le),z.translateZ(Me),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Fe=G+Me,ye=Z+Me,Ae=Xe-Le,Pe=pe+(_e-Le),Oe=ve*Z/ye*Fe,We=De*Z/ye*Fe;z.projectionMatrix.makePerspective(Ae,Pe,Oe,We,Fe,ye),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,B){B===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(B.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;w.near=y.near=E.near=z.near,w.far=y.far=E.far=z.far,(V!==w.near||S!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,S=w.far);const B=z.parent,ge=w.cameras;X(w,B);for(let _e=0;_e<ge.length;_e++)X(ge[_e],B);ge.length===2?k(w,E,y):w.projectionMatrix.copy(E.projectionMatrix),j(z,w,B)};function j(z,B,ge){ge===null?z.matrix.copy(B.matrixWorld):(z.matrix.copy(ge.matrixWorld),z.matrix.invert(),z.matrix.multiply(B.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(B.projectionMatrix),z.projectionMatrixInverse.copy(B.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Xi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)};let se=null;function $(z,B){if(h=B.getViewerPose(c||a),_=B,h!==null){const ge=h.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let _e=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,_e=!0);for(let ne=0;ne<ge.length;ne++){const he=ge[ne];let G=null;if(g!==null)G=g.getViewport(he);else{const ve=d.getViewSubImage(f,he);G=ve.viewport,ne===0&&(e.setRenderTargetTextures(u,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(u))}let Z=C[ne];Z===void 0&&(Z=new qt,Z.layers.enable(ne),Z.viewport=new xt,C[ne]=Z),Z.matrix.fromArray(he.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(he.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(G.x,G.y,G.width,G.height),ne===0&&(w.matrix.copy(Z.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),_e===!0&&w.cameras.push(Z)}}for(let ge=0;ge<A.length;ge++){const _e=M[ge],ne=A[ge];_e!==null&&ne!==void 0&&ne.update(_e,B,c||a)}se&&se(z,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),_=null}const ee=new el;ee.setAnimationLoop($),this.setAnimationLoop=function(z){se=z},this.dispose=function(){}}}function Ip(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,$a(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,A,M,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&g(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,A,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===It&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===It&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=e.get(u).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,A,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const A=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Np(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,M){const E=M.program;i.uniformBlockBinding(A,E)}function c(A,M){let E=r[A.id];E===void 0&&(_(A),E=h(A),r[A.id]=E,A.addEventListener("dispose",p));const y=M.program;i.updateUBOMapping(A,y);const C=e.render.frame;s[A.id]!==C&&(f(A),s[A.id]=C)}function h(A){const M=d();A.__bindingPointIndex=M;const E=n.createBuffer(),y=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const M=r[A.id],E=A.uniforms,y=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,w=E.length;C<w;C++){const V=E[C];if(g(V,C,y)===!0){const S=V.__offset,R=Array.isArray(V.value)?V.value:[V.value];let W=0;for(let q=0;q<R.length;q++){const Q=R[q],N=v(Q);typeof Q=="number"?(V.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,S+W,V.__data)):Q.isMatrix3?(V.__data[0]=Q.elements[0],V.__data[1]=Q.elements[1],V.__data[2]=Q.elements[2],V.__data[3]=Q.elements[0],V.__data[4]=Q.elements[3],V.__data[5]=Q.elements[4],V.__data[6]=Q.elements[5],V.__data[7]=Q.elements[0],V.__data[8]=Q.elements[6],V.__data[9]=Q.elements[7],V.__data[10]=Q.elements[8],V.__data[11]=Q.elements[0]):(Q.toArray(V.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,V.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(A,M,E){const y=A.value;if(E[M]===void 0){if(typeof y=="number")E[M]=y;else{const C=Array.isArray(y)?y:[y],w=[];for(let V=0;V<C.length;V++)w.push(C[V].clone());E[M]=w}return!0}else if(typeof y=="number"){if(E[M]!==y)return E[M]=y,!0}else{const C=Array.isArray(E[M])?E[M]:[E[M]],w=Array.isArray(y)?y:[y];for(let V=0;V<C.length;V++){const S=C[V];if(S.equals(w[V])===!1)return S.copy(w[V]),!0}}return!1}function _(A){const M=A.uniforms;let E=0;const y=16;let C=0;for(let w=0,V=M.length;w<V;w++){const S=M[w],R={boundary:0,storage:0},W=Array.isArray(S.value)?S.value:[S.value];for(let q=0,Q=W.length;q<Q;q++){const N=W[q],k=v(N);R.boundary+=k.boundary,R.storage+=k.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=E,w>0){C=E%y;const q=y-C;C!==0&&q-R.boundary<0&&(E+=y-C,S.__offset=E)}E+=R.storage}return C=E%y,C>0&&(E+=y-C),A.__size=E,A.__cache={},this}function v(A){const M={boundary:0,storage:0};return typeof A=="number"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function p(A){const M=A.target;M.removeEventListener("dispose",p);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ol{constructor(e={}){const{canvas:t=Dc(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const u=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const M=this;let E=!1,y=0,C=0,w=null,V=-1,S=null;const R=new xt,W=new xt;let q=null;const Q=new Je(0);let N=0,k=t.width,X=t.height,j=1,se=null,$=null;const ee=new xt(0,0,k,X),z=new xt(0,0,k,X);let B=!1;const ge=new Ir;let _e=!1,ne=!1,he=null;const G=new ct,Z=new Ve,ve=new O,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return w===null?j:1}let F=i;function Xe(m,b){for(let L=0;L<m.length;L++){const D=m[L],I=t.getContext(D,b);if(I!==null)return I}return null}try{const m={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Us}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){const b=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&b.shift(),F=Xe(b,m),F===null)throw Xe(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let pe,Me,Le,Fe,ye,Ae,Pe,Oe,We,T,x,H,oe,re,ce,Te,ie,xe,P,le,J,ze,Ce,Se;function be(){pe=new Wd(F),Me=new zd(F,pe,e),pe.init(Me),ze=new Cp(F,pe,Me),Le=new wp(F,pe,Me),Fe=new jd(F),ye=new fp,Ae=new Rp(F,pe,Le,ye,Me,ze,Fe),Pe=new Hd(M),Oe=new Vd(M),We=new ih(F,Me),Ce=new Fd(F,pe,We,Me),T=new Xd(F,We,Fe,Ce),x=new $d(F,T,We,Fe),P=new Zd(F,Me,Ae),Te=new Bd(ye),H=new dp(M,Pe,Oe,pe,Me,Ce,Te),oe=new Ip(M,ye),re=new mp,ce=new Sp(pe,Me),xe=new Nd(M,Pe,Oe,Le,x,f,l),ie=new Ap(M,x,Me),Se=new Np(F,Fe,Me,Le),le=new Od(F,pe,Fe,Me),J=new qd(F,pe,Fe,Me),Fe.programs=H.programs,M.capabilities=Me,M.extensions=pe,M.properties=ye,M.renderLists=re,M.shadowMap=ie,M.state=Le,M.info=Fe}be();const Ee=new Up(M,F);this.xr=Ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const m=pe.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){const m=pe.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(m){m!==void 0&&(j=m,this.setSize(k,X,!1))},this.getSize=function(m){return m.set(k,X)},this.setSize=function(m,b,L=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=m,X=b,t.width=Math.floor(m*j),t.height=Math.floor(b*j),L===!0&&(t.style.width=m+"px",t.style.height=b+"px"),this.setViewport(0,0,m,b)},this.getDrawingBufferSize=function(m){return m.set(k*j,X*j).floor()},this.setDrawingBufferSize=function(m,b,L){k=m,X=b,j=L,t.width=Math.floor(m*L),t.height=Math.floor(b*L),this.setViewport(0,0,m,b)},this.getCurrentViewport=function(m){return m.copy(R)},this.getViewport=function(m){return m.copy(ee)},this.setViewport=function(m,b,L,D){m.isVector4?ee.set(m.x,m.y,m.z,m.w):ee.set(m,b,L,D),Le.viewport(R.copy(ee).multiplyScalar(j).floor())},this.getScissor=function(m){return m.copy(z)},this.setScissor=function(m,b,L,D){m.isVector4?z.set(m.x,m.y,m.z,m.w):z.set(m,b,L,D),Le.scissor(W.copy(z).multiplyScalar(j).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(m){Le.setScissorTest(B=m)},this.setOpaqueSort=function(m){se=m},this.setTransparentSort=function(m){$=m},this.getClearColor=function(m){return m.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(m=!0,b=!0,L=!0){let D=0;if(m){let I=!1;if(w!==null){const Y=w.texture.format;I=Y===Ha||Y===Ba||Y===za}if(I){const Y=w.texture.type,te=Y===Dn||Y===Rn||Y===Is||Y===jn||Y===Fa||Y===Oa,de=xe.getClearColor(),we=xe.getClearAlpha(),Ne=de.r,Be=de.g,He=de.b;te?(g[0]=Ne,g[1]=Be,g[2]=He,g[3]=we,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ne,_[1]=Be,_[2]=He,_[3]=we,F.clearBufferiv(F.COLOR,0,_))}else D|=F.COLOR_BUFFER_BIT}b&&(D|=F.DEPTH_BUFFER_BIT),L&&(D|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",me,!1),re.dispose(),ce.dispose(),ye.dispose(),Pe.dispose(),Oe.dispose(),x.dispose(),Ce.dispose(),Se.dispose(),H.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",tt),Ee.removeEventListener("sessionend",qe),he&&(he.dispose(),he=null),fe.stop()};function ke(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const m=Fe.autoReset,b=ie.enabled,L=ie.autoUpdate,D=ie.needsUpdate,I=ie.type;be(),Fe.autoReset=m,ie.enabled=b,ie.autoUpdate=L,ie.needsUpdate=D,ie.type=I}function me(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function ae(m){const b=m.target;b.removeEventListener("dispose",ae),K(b)}function K(m){ue(m),ye.remove(m)}function ue(m){const b=ye.get(m).programs;b!==void 0&&(b.forEach(function(L){H.releaseProgram(L)}),m.isShaderMaterial&&H.releaseShaderCache(m))}this.renderBufferDirect=function(m,b,L,D,I,Y){b===null&&(b=De);const te=I.isMesh&&I.matrixWorld.determinant()<0,de=Ct(m,b,L,D,I);Le.setMaterial(D,te);let we=L.index,Ne=1;if(D.wireframe===!0){if(we=T.getWireframeAttribute(L),we===void 0)return;Ne=2}const Be=L.drawRange,He=L.attributes.position;let Qe=Be.start*Ne,ot=(Be.start+Be.count)*Ne;Y!==null&&(Qe=Math.max(Qe,Y.start*Ne),ot=Math.min(ot,(Y.start+Y.count)*Ne)),we!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,we.count)):He!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,He.count));const et=ot-Qe;if(et<0||et===1/0)return;Ce.setup(I,D,de,L,we);let Mt,it=le;if(we!==null&&(Mt=We.get(we),it=J,it.setIndex(Mt)),I.isMesh)D.wireframe===!0?(Le.setLineWidth(D.wireframeLinewidth*Ue()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(I.isLine){let Ye=D.linewidth;Ye===void 0&&(Ye=1),Le.setLineWidth(Ye*Ue()),I.isLineSegments?it.setMode(F.LINES):I.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else I.isPoints?it.setMode(F.POINTS):I.isSprite&&it.setMode(F.TRIANGLES);if(I.isInstancedMesh)it.renderInstances(Qe,et,I.count);else if(L.isInstancedBufferGeometry){const Ye=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,In=Math.min(L.instanceCount,Ye);it.renderInstances(Qe,et,In)}else it.render(Qe,et)};function Ie(m,b,L){m.transparent===!0&&m.side===gn&&m.forceSinglePass===!1?(m.side=It,m.needsUpdate=!0,Nt(m,b,L),m.side=Un,m.needsUpdate=!0,Nt(m,b,L),m.side=gn):Nt(m,b,L)}this.compile=function(m,b,L=null){L===null&&(L=m),p=ce.get(L),p.init(),A.push(p),L.traverseVisible(function(I){I.isLight&&I.layers.test(b.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),m!==L&&m.traverseVisible(function(I){I.isLight&&I.layers.test(b.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(M._useLegacyLights);const D=new Set;return m.traverse(function(I){const Y=I.material;if(Y)if(Array.isArray(Y))for(let te=0;te<Y.length;te++){const de=Y[te];Ie(de,L,I),D.add(de)}else Ie(Y,L,I),D.add(Y)}),A.pop(),p=null,D},this.compileAsync=function(m,b,L=null){const D=this.compile(m,b,L);return new Promise(I=>{function Y(){if(D.forEach(function(te){ye.get(te).currentProgram.isReady()&&D.delete(te)}),D.size===0){I(m);return}setTimeout(Y,10)}pe.get("KHR_parallel_shader_compile")!==null?Y():setTimeout(Y,10)})};let Ge=null;function Ze(m){Ge&&Ge(m)}function tt(){fe.stop()}function qe(){fe.start()}const fe=new el;fe.setAnimationLoop(Ze),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(m){Ge=m,Ee.setAnimationLoop(m),m===null?fe.stop():fe.start()},Ee.addEventListener("sessionstart",tt),Ee.addEventListener("sessionend",qe),this.render=function(m,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(b),b=Ee.getCamera()),m.isScene===!0&&m.onBeforeRender(M,m,b,w),p=ce.get(m,A.length),p.init(),A.push(p),G.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),ge.setFromProjectionMatrix(G),ne=this.localClippingEnabled,_e=Te.init(this.clippingPlanes,ne),v=re.get(m,u.length),v.init(),u.push(v),rt(m,b,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(se,$),this.info.render.frame++,_e===!0&&Te.beginShadows();const L=p.state.shadowsArray;if(ie.render(L,m,b),_e===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(v,m),p.setupLights(M._useLegacyLights),b.isArrayCamera){const D=b.cameras;for(let I=0,Y=D.length;I<Y;I++){const te=D[I];_t(v,m,te,te.viewport)}}else _t(v,m,b);w!==null&&(Ae.updateMultisampleRenderTarget(w),Ae.updateRenderTargetMipmap(w)),m.isScene===!0&&m.onAfterRender(M,m,b),Ce.resetDefaultState(),V=-1,S=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function rt(m,b,L,D){if(m.visible===!1)return;if(m.layers.test(b.layers)){if(m.isGroup)L=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(b);else if(m.isLight)p.pushLight(m),m.castShadow&&p.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||ge.intersectsSprite(m)){D&&ve.setFromMatrixPosition(m.matrixWorld).applyMatrix4(G);const te=x.update(m),de=m.material;de.visible&&v.push(m,te,de,L,ve.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||ge.intersectsObject(m))){const te=x.update(m),de=m.material;if(D&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),ve.copy(m.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),ve.copy(te.boundingSphere.center)),ve.applyMatrix4(m.matrixWorld).applyMatrix4(G)),Array.isArray(de)){const we=te.groups;for(let Ne=0,Be=we.length;Ne<Be;Ne++){const He=we[Ne],Qe=de[He.materialIndex];Qe&&Qe.visible&&v.push(m,te,Qe,L,ve.z,He)}}else de.visible&&v.push(m,te,de,L,ve.z,null)}}const Y=m.children;for(let te=0,de=Y.length;te<de;te++)rt(Y[te],b,L,D)}function _t(m,b,L,D){const I=m.opaque,Y=m.transmissive,te=m.transparent;p.setupLightsView(L),_e===!0&&Te.setGlobalState(M.clippingPlanes,L),Y.length>0&&Yt(I,Y,b,L),D&&Le.viewport(R.copy(D)),I.length>0&&je(I,b,L),Y.length>0&&je(Y,b,L),te.length>0&&je(te,b,L),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Yt(m,b,L,D){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;const Y=Me.isWebGL2;he===null&&(he=new Zn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Wi:Dn,minFilter:Vi,samples:Y?4:0})),M.getDrawingBufferSize(Z),Y?he.setSize(Z.x,Z.y):he.setSize(wr(Z.x),wr(Z.y));const te=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(Q),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear();const de=M.toneMapping;M.toneMapping=Pn,je(m,L,D),Ae.updateMultisampleRenderTarget(he),Ae.updateRenderTargetMipmap(he);let we=!1;for(let Ne=0,Be=b.length;Ne<Be;Ne++){const He=b[Ne],Qe=He.object,ot=He.geometry,et=He.material,Mt=He.group;if(et.side===gn&&Qe.layers.test(D.layers)){const it=et.side;et.side=It,et.needsUpdate=!0,wt(Qe,L,D,ot,et,Mt),et.side=it,et.needsUpdate=!0,we=!0}}we===!0&&(Ae.updateMultisampleRenderTarget(he),Ae.updateRenderTargetMipmap(he)),M.setRenderTarget(te),M.setClearColor(Q,N),M.toneMapping=de}function je(m,b,L){const D=b.isScene===!0?b.overrideMaterial:null;for(let I=0,Y=m.length;I<Y;I++){const te=m[I],de=te.object,we=te.geometry,Ne=D===null?te.material:D,Be=te.group;de.layers.test(L.layers)&&wt(de,b,L,we,Ne,Be)}}function wt(m,b,L,D,I,Y){m.onBeforeRender(M,b,L,D,I,Y),m.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),I.onBeforeRender(M,b,L,D,m,Y),I.transparent===!0&&I.side===gn&&I.forceSinglePass===!1?(I.side=It,I.needsUpdate=!0,M.renderBufferDirect(L,b,D,I,m,Y),I.side=Un,I.needsUpdate=!0,M.renderBufferDirect(L,b,D,I,m,Y),I.side=gn):M.renderBufferDirect(L,b,D,I,m,Y),m.onAfterRender(M,b,L,D,I,Y)}function Nt(m,b,L){b.isScene!==!0&&(b=De);const D=ye.get(m),I=p.state.lights,Y=p.state.shadowsArray,te=I.state.version,de=H.getParameters(m,I.state,Y,b,L),we=H.getProgramCacheKey(de);let Ne=D.programs;D.environment=m.isMeshStandardMaterial?b.environment:null,D.fog=b.fog,D.envMap=(m.isMeshStandardMaterial?Oe:Pe).get(m.envMap||D.environment),Ne===void 0&&(m.addEventListener("dispose",ae),Ne=new Map,D.programs=Ne);let Be=Ne.get(we);if(Be!==void 0){if(D.currentProgram===Be&&D.lightsStateVersion===te)return Rt(m,de),Be}else de.uniforms=H.getUniforms(m),m.onBuild(L,de,M),m.onBeforeCompile(de,M),Be=H.acquireProgram(de,we),Ne.set(we,Be),D.uniforms=de.uniforms;const He=D.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(He.clippingPlanes=Te.uniform),Rt(m,de),D.needsLights=pt(m),D.lightsStateVersion=te,D.needsLights&&(He.ambientLightColor.value=I.state.ambient,He.lightProbe.value=I.state.probe,He.directionalLights.value=I.state.directional,He.directionalLightShadows.value=I.state.directionalShadow,He.spotLights.value=I.state.spot,He.spotLightShadows.value=I.state.spotShadow,He.rectAreaLights.value=I.state.rectArea,He.ltc_1.value=I.state.rectAreaLTC1,He.ltc_2.value=I.state.rectAreaLTC2,He.pointLights.value=I.state.point,He.pointLightShadows.value=I.state.pointShadow,He.hemisphereLights.value=I.state.hemi,He.directionalShadowMap.value=I.state.directionalShadowMap,He.directionalShadowMatrix.value=I.state.directionalShadowMatrix,He.spotShadowMap.value=I.state.spotShadowMap,He.spotLightMatrix.value=I.state.spotLightMatrix,He.spotLightMap.value=I.state.spotLightMap,He.pointShadowMap.value=I.state.pointShadowMap,He.pointShadowMatrix.value=I.state.pointShadowMatrix),D.currentProgram=Be,D.uniformsList=null,Be}function rn(m){if(m.uniformsList===null){const b=m.currentProgram.getUniforms();m.uniformsList=Mr.seqWithValue(b.seq,m.uniforms)}return m.uniformsList}function Rt(m,b){const L=ye.get(m);L.outputColorSpace=b.outputColorSpace,L.instancing=b.instancing,L.instancingColor=b.instancingColor,L.skinning=b.skinning,L.morphTargets=b.morphTargets,L.morphNormals=b.morphNormals,L.morphColors=b.morphColors,L.morphTargetsCount=b.morphTargetsCount,L.numClippingPlanes=b.numClippingPlanes,L.numIntersection=b.numClipIntersection,L.vertexAlphas=b.vertexAlphas,L.vertexTangents=b.vertexTangents,L.toneMapping=b.toneMapping}function Ct(m,b,L,D,I){b.isScene!==!0&&(b=De),Ae.resetTextureUnits();const Y=b.fog,te=D.isMeshStandardMaterial?b.environment:null,de=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xn,we=(D.isMeshStandardMaterial?Oe:Pe).get(D.envMap||te),Ne=D.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,Be=!!L.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),He=!!L.morphAttributes.position,Qe=!!L.morphAttributes.normal,ot=!!L.morphAttributes.color;let et=Pn;D.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(et=M.toneMapping);const Mt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,it=Mt!==void 0?Mt.length:0,Ye=ye.get(D),In=p.state.lights;if(_e===!0&&(ne===!0||m!==S)){const St=m===S&&D.id===V;Te.setState(D,m,St)}let at=!1;D.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==In.state.version||Ye.outputColorSpace!==de||I.isInstancedMesh&&Ye.instancing===!1||!I.isInstancedMesh&&Ye.instancing===!0||I.isSkinnedMesh&&Ye.skinning===!1||!I.isSkinnedMesh&&Ye.skinning===!0||I.isInstancedMesh&&Ye.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ye.instancingColor===!1&&I.instanceColor!==null||Ye.envMap!==we||D.fog===!0&&Ye.fog!==Y||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Te.numPlanes||Ye.numIntersection!==Te.numIntersection)||Ye.vertexAlphas!==Ne||Ye.vertexTangents!==Be||Ye.morphTargets!==He||Ye.morphNormals!==Qe||Ye.morphColors!==ot||Ye.toneMapping!==et||Me.isWebGL2===!0&&Ye.morphTargetsCount!==it)&&(at=!0):(at=!0,Ye.__version=D.version);let Ut=Ye.currentProgram;at===!0&&(Ut=Nt(D,b,I));let Qn=!1,an=!1,ln=!1;const dt=Ut.getUniforms(),Ft=Ye.uniforms;if(Le.useProgram(Ut.program)&&(Qn=!0,an=!0,ln=!0),D.id!==V&&(V=D.id,an=!0),Qn||S!==m){dt.setValue(F,"projectionMatrix",m.projectionMatrix),dt.setValue(F,"viewMatrix",m.matrixWorldInverse);const St=dt.map.cameraPosition;St!==void 0&&St.setValue(F,ve.setFromMatrixPosition(m.matrixWorld)),Me.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&dt.setValue(F,"isOrthographic",m.isOrthographicCamera===!0),S!==m&&(S=m,an=!0,ln=!0)}if(I.isSkinnedMesh){dt.setOptional(F,I,"bindMatrix"),dt.setOptional(F,I,"bindMatrixInverse");const St=I.skeleton;St&&(Me.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),dt.setValue(F,"boneTexture",St.boneTexture,Ae),dt.setValue(F,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nn=L.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0&&Me.isWebGL2===!0)&&P.update(I,L,Ut),(an||Ye.receiveShadow!==I.receiveShadow)&&(Ye.receiveShadow=I.receiveShadow,dt.setValue(F,"receiveShadow",I.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Ft.envMap.value=we,Ft.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),an&&(dt.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&ht(Ft,ln),Y&&D.fog===!0&&oe.refreshFogUniforms(Ft,Y),oe.refreshMaterialUniforms(Ft,D,j,X,he),Mr.upload(F,rn(Ye),Ft,Ae)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Mr.upload(F,rn(Ye),Ft,Ae),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&dt.setValue(F,"center",I.center),dt.setValue(F,"modelViewMatrix",I.modelViewMatrix),dt.setValue(F,"normalMatrix",I.normalMatrix),dt.setValue(F,"modelMatrix",I.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const St=D.uniformsGroups;for(let Ci=0,Fr=St.length;Ci<Fr;Ci++)if(Me.isWebGL2){const Yi=St[Ci];Se.update(Yi,Ut),Se.bind(Yi,Ut)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ut}function ht(m,b){m.ambientLightColor.needsUpdate=b,m.lightProbe.needsUpdate=b,m.directionalLights.needsUpdate=b,m.directionalLightShadows.needsUpdate=b,m.pointLights.needsUpdate=b,m.pointLightShadows.needsUpdate=b,m.spotLights.needsUpdate=b,m.spotLightShadows.needsUpdate=b,m.rectAreaLights.needsUpdate=b,m.hemisphereLights.needsUpdate=b}function pt(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(m,b,L){ye.get(m.texture).__webglTexture=b,ye.get(m.depthTexture).__webglTexture=L;const D=ye.get(m);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=L===void 0,D.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(m,b){const L=ye.get(m);L.__webglFramebuffer=b,L.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(m,b=0,L=0){w=m,y=b,C=L;let D=!0,I=null,Y=!1,te=!1;if(m){const we=ye.get(m);we.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(F.FRAMEBUFFER,null),D=!1):we.__webglFramebuffer===void 0?Ae.setupRenderTarget(m):we.__hasExternalTextures&&Ae.rebindTextures(m,ye.get(m.texture).__webglTexture,ye.get(m.depthTexture).__webglTexture);const Ne=m.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(te=!0);const Be=ye.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(Be[b])?I=Be[b][L]:I=Be[b],Y=!0):Me.isWebGL2&&m.samples>0&&Ae.useMultisampledRTT(m)===!1?I=ye.get(m).__webglMultisampledFramebuffer:Array.isArray(Be)?I=Be[L]:I=Be,R.copy(m.viewport),W.copy(m.scissor),q=m.scissorTest}else R.copy(ee).multiplyScalar(j).floor(),W.copy(z).multiplyScalar(j).floor(),q=B;if(Le.bindFramebuffer(F.FRAMEBUFFER,I)&&Me.drawBuffers&&D&&Le.drawBuffers(m,I),Le.viewport(R),Le.scissor(W),Le.setScissorTest(q),Y){const we=ye.get(m.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+b,we.__webglTexture,L)}else if(te){const we=ye.get(m.texture),Ne=b||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,L||0,Ne)}V=-1},this.readRenderTargetPixels=function(m,b,L,D,I,Y,te){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ye.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&te!==void 0&&(de=de[te]),de){Le.bindFramebuffer(F.FRAMEBUFFER,de);try{const we=m.texture,Ne=we.format,Be=we.type;if(Ne!==en&&ze.convert(Ne)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Wi&&(pe.has("EXT_color_buffer_half_float")||Me.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Be!==Dn&&ze.convert(Be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Cn&&(Me.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=m.width-D&&L>=0&&L<=m.height-I&&F.readPixels(b,L,D,I,ze.convert(Ne),ze.convert(Be),Y)}finally{const we=w!==null?ye.get(w).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(m,b,L=0){const D=Math.pow(2,-L),I=Math.floor(b.image.width*D),Y=Math.floor(b.image.height*D);Ae.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,L,0,0,m.x,m.y,I,Y),Le.unbindTexture()},this.copyTextureToTexture=function(m,b,L,D=0){const I=b.image.width,Y=b.image.height,te=ze.convert(L.format),de=ze.convert(L.type);Ae.setTexture2D(L,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment),b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,D,m.x,m.y,I,Y,te,de,b.image.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,D,m.x,m.y,b.mipmaps[0].width,b.mipmaps[0].height,te,b.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,D,m.x,m.y,te,de,b.image),D===0&&L.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(m,b,L,D,I=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Y=m.max.x-m.min.x+1,te=m.max.y-m.min.y+1,de=m.max.z-m.min.z+1,we=ze.convert(D.format),Ne=ze.convert(D.type);let Be;if(D.isData3DTexture)Ae.setTexture3D(D,0),Be=F.TEXTURE_3D;else if(D.isDataArrayTexture)Ae.setTexture2DArray(D,0),Be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const He=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ot=F.getParameter(F.UNPACK_SKIP_PIXELS),et=F.getParameter(F.UNPACK_SKIP_ROWS),Mt=F.getParameter(F.UNPACK_SKIP_IMAGES),it=L.isCompressedTexture?L.mipmaps[0]:L.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,it.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,m.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,m.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,m.min.z),L.isDataTexture||L.isData3DTexture?F.texSubImage3D(Be,I,b.x,b.y,b.z,Y,te,de,we,Ne,it.data):L.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Be,I,b.x,b.y,b.z,Y,te,de,we,it.data)):F.texSubImage3D(Be,I,b.x,b.y,b.z,Y,te,de,we,Ne,it),F.pixelStorei(F.UNPACK_ROW_LENGTH,He),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Mt),I===0&&D.generateMipmaps&&F.generateMipmap(Be),Le.unbindTexture()},this.initTexture=function(m){m.isCubeTexture?Ae.setTextureCube(m,0):m.isData3DTexture?Ae.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?Ae.setTexture2DArray(m,0):Ae.setTexture2D(m,0),Le.unbindTexture()},this.resetState=function(){y=0,C=0,w=null,Le.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ns?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Dr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Kn:Ga}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?Et:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fp extends ol{}Fp.prototype.isWebGL1Renderer=!0;class Op extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Lr extends kt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new ct,ha=new ct,_r=[],ua=new Jn,zp=new ct,Ii=new Ht,Ni=new Ai;class Bp extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),ua.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(ua)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),Ni.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Ni)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(i),e.ray.intersectsSphere(Ni)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gi),ha.multiplyMatrices(i,gi),Ii.matrixWorld=ha,Ii.raycast(e,_r);for(let a=0,o=_r.length;a<o;a++){const l=_r[a];l.instanceId=s,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new O,fa=new O,pa=new ct,ds=new Os,vr=new Ai;class Fi extends ut{constructor(e=new nn,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)da.fromBufferAttribute(t,r-1),fa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=da.distanceTo(fa);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),vr.radius+=s,e.ray.intersectsSphere(vr)===!1)return;pa.copy(r).invert(),ds.copy(e.ray).applyMatrix4(pa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new O,h=new O,d=new O,f=new O,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,a.start),A=Math.min(_.count,a.start+a.count);for(let M=u,E=A-1;M<E;M+=g){const y=_.getX(M),C=_.getX(M+1);if(c.fromBufferAttribute(p,y),h.fromBufferAttribute(p,C),ds.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(f);V<e.near||V>e.far||t.push({distance:V,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),A=Math.min(p.count,a.start+a.count);for(let M=u,E=A-1;M<E;M+=g){if(c.fromBufferAttribute(p,M),h.fromBufferAttribute(p,M+1),ds.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Vn extends nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new O,f=new O,g=[],_=[],v=[],p=[];for(let u=0;u<=i;u++){const A=[],M=u/i;let E=0;u===0&&a===0?E=.5/t:u===i&&l===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){const C=y/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+M*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(C+E,1-M),A.push(c++)}h.push(A)}for(let u=0;u<i;u++)for(let A=0;A<t;A++){const M=h[u][A+1],E=h[u][A],y=h[u+1][A],C=h[u+1][A+1];(u!==0||a>0)&&g.push(M,E,C),(u!==i-1||l<Math.PI)&&g.push(E,y,C)}this.setIndex(g),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ma extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hs extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Hp extends Hs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fs=new ct,ga=new O,_a=new O;class Gp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ga.setFromMatrixPosition(e.matrixWorld),t.position.copy(ga),_a.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_a),t.updateMatrixWorld(),fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kp extends Gp{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vp extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wp extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=va(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=va();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function va(){return(typeof performance>"u"?Date:performance).now()}class Ls{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Us}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Us);const xa={type:"change"},ps={type:"start"},Ma={type:"end"},xr=new Os,Sa=new wn,qp=Math.cos(70*mn.DEG2RAD);class al extends Mn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wt.ROTATE,MIDDLE:Wt.DOLLY,RIGHT:Wt.PAN},this.touches={ONE:An.ROTATE,TWO:An.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",x),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",x),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(xa),i.update(),s=r.NONE},this.update=function(){const P=new O,le=new on().setFromUnitVectors(e.up,new O(0,1,0)),J=le.clone().invert(),ze=new O,Ce=new on,Se=new O,be=2*Math.PI;return function(ke=null){const U=i.object.position;P.copy(U).sub(i.target),P.applyQuaternion(le),o.setFromVector3(P),i.autoRotate&&s===r.NONE&&W(S(ke)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let me=i.minAzimuthAngle,ae=i.maxAzimuthAngle;isFinite(me)&&isFinite(ae)&&(me<-Math.PI?me+=be:me>Math.PI&&(me-=be),ae<-Math.PI?ae+=be:ae>Math.PI&&(ae-=be),me<=ae?o.theta=Math.max(me,Math.min(ae,o.theta)):o.theta=o.theta>(me+ae)/2?Math.max(me,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?o.radius=$(o.radius):o.radius=$(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(J),U.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let K=!1;if(i.zoomToCursor&&C){let ue=null;if(i.object.isPerspectiveCamera){const Ie=P.length();ue=$(Ie*c);const Ge=Ie-ue;i.object.position.addScaledVector(E,Ge),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ie=new O(y.x,y.y,0);Ie.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),K=!0;const Ge=new O(y.x,y.y,0);Ge.unproject(i.object),i.object.position.sub(Ge).add(Ie),i.object.updateMatrixWorld(),ue=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ue).add(i.object.position):(xr.origin.copy(i.object.position),xr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xr.direction))<qp?e.lookAt(i.target):(Sa.setFromNormalAndCoplanarPoint(i.object.up,i.target),xr.intersectPlane(Sa,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),K=!0);return c=1,C=!1,K||ze.distanceToSquared(i.object.position)>a||8*(1-Ce.dot(i.object.quaternion))>a||Se.distanceToSquared(i.target)>0?(i.dispatchEvent(xa),ze.copy(i.object.position),Ce.copy(i.object.quaternion),Se.copy(i.target),K=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",re),i.domElement.removeEventListener("pointerdown",ye),i.domElement.removeEventListener("pointercancel",Pe),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",Pe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",x),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Ls,l=new Ls;let c=1;const h=new O,d=new Ve,f=new Ve,g=new Ve,_=new Ve,v=new Ve,p=new Ve,u=new Ve,A=new Ve,M=new Ve,E=new O,y=new Ve;let C=!1;const w=[],V={};function S(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function R(){return Math.pow(.95,i.zoomSpeed)}function W(P){l.theta-=P}function q(P){l.phi-=P}const Q=function(){const P=new O;return function(J,ze){P.setFromMatrixColumn(ze,0),P.multiplyScalar(-J),h.add(P)}}(),N=function(){const P=new O;return function(J,ze){i.screenSpacePanning===!0?P.setFromMatrixColumn(ze,1):(P.setFromMatrixColumn(ze,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(J),h.add(P)}}(),k=function(){const P=new O;return function(J,ze){const Ce=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;P.copy(Se).sub(i.target);let be=P.length();be*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*J*be/Ce.clientHeight,i.object.matrix),N(2*ze*be/Ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(J*(i.object.right-i.object.left)/i.object.zoom/Ce.clientWidth,i.object.matrix),N(ze*(i.object.top-i.object.bottom)/i.object.zoom/Ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(P){if(!i.zoomToCursor)return;C=!0;const le=i.domElement.getBoundingClientRect(),J=P.clientX-le.left,ze=P.clientY-le.top,Ce=le.width,Se=le.height;y.x=J/Ce*2-1,y.y=-(ze/Se)*2+1,E.set(y.x,y.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function ee(P){d.set(P.clientX,P.clientY)}function z(P){se(P),u.set(P.clientX,P.clientY)}function B(P){_.set(P.clientX,P.clientY)}function ge(P){f.set(P.clientX,P.clientY),g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const le=i.domElement;W(2*Math.PI*g.x/le.clientHeight),q(2*Math.PI*g.y/le.clientHeight),d.copy(f),i.update()}function _e(P){A.set(P.clientX,P.clientY),M.subVectors(A,u),M.y>0?X(R()):M.y<0&&j(R()),u.copy(A),i.update()}function ne(P){v.set(P.clientX,P.clientY),p.subVectors(v,_).multiplyScalar(i.panSpeed),k(p.x,p.y),_.copy(v),i.update()}function he(P){se(P),P.deltaY<0?j(R()):P.deltaY>0&&X(R()),i.update()}function G(P){let le=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),le=!0;break}le&&(P.preventDefault(),i.update())}function Z(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),le=.5*(w[0].pageY+w[1].pageY);d.set(P,le)}}function ve(){if(w.length===1)_.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),le=.5*(w[0].pageY+w[1].pageY);_.set(P,le)}}function De(){const P=w[0].pageX-w[1].pageX,le=w[0].pageY-w[1].pageY,J=Math.sqrt(P*P+le*le);u.set(0,J)}function Ue(){i.enableZoom&&De(),i.enablePan&&ve()}function F(){i.enableZoom&&De(),i.enableRotate&&Z()}function Xe(P){if(w.length==1)f.set(P.pageX,P.pageY);else{const J=xe(P),ze=.5*(P.pageX+J.x),Ce=.5*(P.pageY+J.y);f.set(ze,Ce)}g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const le=i.domElement;W(2*Math.PI*g.x/le.clientHeight),q(2*Math.PI*g.y/le.clientHeight),d.copy(f)}function pe(P){if(w.length===1)v.set(P.pageX,P.pageY);else{const le=xe(P),J=.5*(P.pageX+le.x),ze=.5*(P.pageY+le.y);v.set(J,ze)}p.subVectors(v,_).multiplyScalar(i.panSpeed),k(p.x,p.y),_.copy(v)}function Me(P){const le=xe(P),J=P.pageX-le.x,ze=P.pageY-le.y,Ce=Math.sqrt(J*J+ze*ze);A.set(0,Ce),M.set(0,Math.pow(A.y/u.y,i.zoomSpeed)),X(M.y),u.copy(A)}function Le(P){i.enableZoom&&Me(P),i.enablePan&&pe(P)}function Fe(P){i.enableZoom&&Me(P),i.enableRotate&&Xe(P)}function ye(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",Ae),i.domElement.addEventListener("pointerup",Pe)),ce(P),P.pointerType==="touch"?H(P):Oe(P))}function Ae(P){i.enabled!==!1&&(P.pointerType==="touch"?oe(P):We(P))}function Pe(P){Te(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",Pe)),i.dispatchEvent(Ma),s=r.NONE}function Oe(P){let le;switch(P.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Wt.DOLLY:if(i.enableZoom===!1)return;z(P),s=r.DOLLY;break;case Wt.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;B(P),s=r.PAN}else{if(i.enableRotate===!1)return;ee(P),s=r.ROTATE}break;case Wt.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;ee(P),s=r.ROTATE}else{if(i.enablePan===!1)return;B(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ps)}function We(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ge(P);break;case r.DOLLY:if(i.enableZoom===!1)return;_e(P);break;case r.PAN:if(i.enablePan===!1)return;ne(P);break}}function T(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(ps),he(P),i.dispatchEvent(Ma))}function x(P){i.enabled===!1||i.enablePan===!1||G(P)}function H(P){switch(ie(P),w.length){case 1:switch(i.touches.ONE){case An.ROTATE:if(i.enableRotate===!1)return;Z(),s=r.TOUCH_ROTATE;break;case An.PAN:if(i.enablePan===!1)return;ve(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case An.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),s=r.TOUCH_DOLLY_PAN;break;case An.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ps)}function oe(P){switch(ie(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Xe(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(P),i.update();break;default:s=r.NONE}}function re(P){i.enabled!==!1&&P.preventDefault()}function ce(P){w.push(P)}function Te(P){delete V[P.pointerId];for(let le=0;le<w.length;le++)if(w[le].pointerId==P.pointerId){w.splice(le,1);return}}function ie(P){let le=V[P.pointerId];le===void 0&&(le=new Ve,V[P.pointerId]=le),le.set(P.pageX,P.pageY)}function xe(P){const le=P.pointerId===w[0].pointerId?w[1]:w[0];return V[le.pointerId]}i.domElement.addEventListener("contextmenu",re),i.domElement.addEventListener("pointerdown",ye),i.domElement.addEventListener("pointercancel",Pe),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var At=Math.PI,lt=At*2,Bi=At/180,jp=180/At,Yp=1440,Kp=398600.8,Bt=6378.135,vn=60/Math.sqrt(Bt*Bt*Bt/Kp),ms=Bt*vn/60,Zp=1/vn,Xn=.001082616,$p=-253881e-11,Jp=-165597e-11,qn=$p/Xn,qi=2/3;function Qp(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+t[r-1]&&r<12;)s+=t[r-1],r+=1;var a=r,o=i-s,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:a,day:o,hr:c,minute:h,sec:d}}function Ea(n,e,t,i,r,s){var a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((a/6e4+s/60+r)/60+i)/24}function Gs(n,e,t,i,r,s,a){if(n instanceof Date){var o=n;return Ea(o.getUTCFullYear(),o.getUTCMonth()+1,o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds())}return Ea(n,e,t,i,r,s,a)}function ll(n,e){var t=n.e3,i=n.ee2,r=n.peo,s=n.pgho,a=n.pho,o=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,g=n.sgh4,_=n.sh2,v=n.sh3,p=n.si2,u=n.si3,A=n.sl2,M=n.sl3,E=n.sl4,y=n.t,C=n.xgh2,w=n.xgh3,V=n.xgh4,S=n.xh2,R=n.xh3,W=n.xi2,q=n.xi3,Q=n.xl2,N=n.xl3,k=n.xl4,X=n.zmol,j=n.zmos,se=e.init,$=e.opsmode,ee=e.ep,z=e.inclp,B=e.nodep,ge=e.argpp,_e=e.mp,ne,he,G,Z,ve,De,Ue,F,Xe,pe,Me,Le,Fe,ye,Ae,Pe,Oe,We,T,x,H,oe=119459e-10,re=.01675,ce=.00015835218,Te=.0549;H=j+oe*y,se==="y"&&(H=j),x=H+2*re*Math.sin(H),Oe=Math.sin(x),pe=.5*Oe*Oe-.25,Me=-.5*Oe*Math.cos(x);var ie=c*pe+h*Me,xe=p*pe+u*Me,P=A*pe+M*Me+E*Oe,le=d*pe+f*Me+g*Oe,J=_*pe+v*Me;H=X+ce*y,se==="y"&&(H=X),x=H+2*Te*Math.sin(H),Oe=Math.sin(x),pe=.5*Oe*Oe-.25,Me=-.5*Oe*Math.cos(x);var ze=i*pe+t*Me,Ce=W*pe+q*Me,Se=Q*pe+N*Me+k*Oe,be=C*pe+w*Me+V*Oe,Ee=S*pe+R*Me;return Le=ie+ze,Ae=xe+Ce,Pe=P+Se,Fe=le+be,ye=J+Ee,se==="n"&&(Le-=r,Ae-=o,Pe-=l,Fe-=s,ye-=a,z+=Ae,ee+=Le,Z=Math.sin(z),G=Math.cos(z),z>=.2?(ye/=Z,Fe-=G*ye,ge+=Fe,B+=ye,_e+=Pe):(De=Math.sin(B),ve=Math.cos(B),ne=Z*De,he=Z*ve,Ue=ye*ve+Ae*G*De,F=-ye*De+Ae*G*ve,ne+=Ue,he+=F,B%=lt,B<0&&$==="a"&&(B+=lt),We=_e+ge+G*B,Xe=Pe+Fe-Ae*B*Z,We+=Xe,T=B,B=Math.atan2(ne,he),B<0&&$==="a"&&(B+=lt),Math.abs(T-B)>At&&(B<T?B+=lt:B-=lt),_e+=Pe,ge=We-_e-G*B)),{ep:ee,inclp:z,nodep:B,argpp:ge,mp:_e}}function em(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,s=n.inclp,a=n.nodep,o=n.np,l,c,h,d,f,g,_,v,p,u,A,M,E,y,C,w,V,S,R,W,q,Q,N,k,X,j,se,$,ee,z,B,ge,_e,ne,he,G,Z,ve,De,Ue,F,Xe,pe,Me,Le,Fe,ye,Ae,Pe,Oe,We,T,x,H,oe,re,ce,Te,ie,xe,P,le,J,ze=.01675,Ce=.0549,Se=29864797e-13,be=47968065e-14,Ee=.39785416,ke=.91744867,U=.1945905,me=-.98088458,ae=o,K=t,ue=Math.sin(a),Ie=Math.cos(a),Ge=Math.sin(i),Ze=Math.cos(i),tt=Math.sin(s),qe=Math.cos(s),fe=K*K,rt=1-fe,_t=Math.sqrt(rt),Yt=0,je=0,wt=0,Nt=0,rn=0,Rt=e+18261.5+r/1440,Ct=(4.523602-.00092422029*Rt)%lt,ht=Math.sin(Ct),pt=Math.cos(Ct),m=.91375164-.03568096*pt,b=Math.sqrt(1-m*m),L=.089683511*ht/b,D=Math.sqrt(1-L*L),I=5.8351514+.001944368*Rt,Y=.39785416*ht/b,te=D*pt+.91744867*L*ht;Y=Math.atan2(Y,te),Y+=I-Ct;var de=Math.cos(Y),we=Math.sin(Y);W=U,q=me,k=ke,X=Ee,Q=Ie,N=ue,A=Se;for(var Ne=1/ae,Be=0;Be<2;)Be+=1,l=W*Q+q*k*N,h=-q*Q+W*k*N,_=-W*N+q*k*Q,v=q*X,p=q*N+W*k*Q,u=W*X,c=qe*_+tt*v,d=qe*p+tt*u,f=-tt*_+qe*v,g=-tt*p+qe*u,M=l*Ze+c*Ge,E=h*Ze+d*Ge,y=-l*Ge+c*Ze,C=-h*Ge+d*Ze,w=f*Ge,V=g*Ge,S=f*Ze,R=g*Ze,P=12*M*M-3*y*y,le=24*M*E-6*y*C,J=12*E*E-3*C*C,T=3*(l*l+c*c)+P*fe,x=6*(l*h+c*d)+le*fe,H=3*(h*h+d*d)+J*fe,oe=-6*l*f+fe*(-24*M*S-6*y*w),re=-6*(l*g+h*f)+fe*(-24*(E*S+M*R)+-6*(y*V+C*w)),ce=-6*h*g+fe*(-24*E*R-6*C*V),Te=6*c*f+fe*(24*M*w-6*y*S),ie=6*(d*f+c*g)+fe*(24*(E*w+M*V)-6*(C*S+y*R)),xe=6*d*g+fe*(24*E*V-6*C*R),T=T+T+rt*P,x=x+x+rt*le,H=H+H+rt*J,ye=A*Ne,Fe=-.5*ye/_t,Ae=ye*_t,Le=-15*K*Ae,Pe=M*y+E*C,Oe=E*y+M*C,We=E*C-M*y,Be===1&&(j=Le,se=Fe,$=ye,ee=Ae,z=Pe,B=Oe,ge=We,_e=T,ne=x,he=H,G=oe,Z=re,ve=ce,De=Te,Ue=ie,F=xe,Xe=P,pe=le,Me=J,W=de,q=we,k=m,X=b,Q=D*Ie+L*ue,N=ue*D-Ie*L,A=be);var He=(4.7199672+(.2299715*Rt-I))%lt,Qe=(6.2565837+.017201977*Rt)%lt,ot=2*j*B,et=2*j*ge,Mt=2*se*Z,it=2*se*(ve-G),Ye=-2*$*ne,In=-2*$*(he-_e),at=-2*$*(-21-9*fe)*ze,Ut=2*ee*pe,Qn=2*ee*(Me-Xe),an=-18*ee*ze,ln=-2*se*Ue,dt=-2*se*(F-De),Ft=2*Le*Oe,Nn=2*Le*We,St=2*Fe*re,Ci=2*Fe*(ce-oe),Fr=-2*ye*x,Yi=-2*ye*(H-T),fl=-2*ye*(-21-9*fe)*Ce,pl=2*Ae*le,ml=2*Ae*(J-P),gl=-18*Ae*Ce,_l=-2*Fe*ie,vl=-2*Fe*(xe-Te);return{snodm:ue,cnodm:Ie,sinim:tt,cosim:qe,sinomm:Ge,cosomm:Ze,day:Rt,e3:Nn,ee2:Ft,em:K,emsq:fe,gam:I,peo:Yt,pgho:Nt,pho:rn,pinco:je,plo:wt,rtemsq:_t,se2:ot,se3:et,sgh2:Ut,sgh3:Qn,sgh4:an,sh2:ln,sh3:dt,si2:Mt,si3:it,sl2:Ye,sl3:In,sl4:at,s1:Le,s2:Fe,s3:ye,s4:Ae,s5:Pe,s6:Oe,s7:We,ss1:j,ss2:se,ss3:$,ss4:ee,ss5:z,ss6:B,ss7:ge,sz1:_e,sz2:ne,sz3:he,sz11:G,sz12:Z,sz13:ve,sz21:De,sz22:Ue,sz23:F,sz31:Xe,sz32:pe,sz33:Me,xgh2:pl,xgh3:ml,xgh4:gl,xh2:_l,xh3:vl,xi2:St,xi3:Ci,xl2:Fr,xl3:Yi,xl4:fl,nm:ae,z1:T,z2:x,z3:H,z11:oe,z12:re,z13:ce,z21:Te,z22:ie,z23:xe,z31:P,z32:le,z33:J,zmol:He,zmos:Qe}}function tm(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,s=n.s3,a=n.s4,o=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,g=n.ss5,_=n.sz1,v=n.sz3,p=n.sz11,u=n.sz13,A=n.sz21,M=n.sz23,E=n.sz31,y=n.sz33,C=n.t,w=n.tc,V=n.gsto,S=n.mo,R=n.mdot,W=n.no,q=n.nodeo,Q=n.nodedot,N=n.xpidot,k=n.z1,X=n.z3,j=n.z11,se=n.z13,$=n.z21,ee=n.z23,z=n.z31,B=n.z33,ge=n.ecco,_e=n.eccsq,ne=n.emsq,he=n.em,G=n.argpm,Z=n.inclm,ve=n.mm,De=n.nm,Ue=n.nodem,F=n.irez,Xe=n.atime,pe=n.d2201,Me=n.d2211,Le=n.d3210,Fe=n.d3222,ye=n.d4410,Ae=n.d4422,Pe=n.d5220,Oe=n.d5232,We=n.d5421,T=n.d5433,x=n.dedt,H=n.didt,oe=n.dmdt,re=n.dnodt,ce=n.domdt,Te=n.del1,ie=n.del2,xe=n.del3,P=n.xfact,le=n.xlamo,J=n.xli,ze=n.xni,Ce,Se,be,Ee,ke,U,me,ae,K,ue,Ie,Ge,Ze,tt,qe,fe,rt,_t,Yt,je,wt,Nt,rn,Rt,Ct,ht,pt,m,b,L,D,I,Y=17891679e-13,te=21460748e-13,de=22123015e-14,we=17891679e-13,Ne=73636953e-16,Be=21765803e-16,He=.0043752690880113,Qe=37393792e-14,ot=11428639e-14,et=.00015835218,Mt=119459e-10;F=0,De<.0052359877&&De>.0034906585&&(F=1),De>=.00826&&De<=.00924&&he>=.5&&(F=2);var it=c*Mt*g,Ye=h*Mt*(p+u),In=-Mt*d*(_+v-14-6*ne),at=f*Mt*(E+y-6),Ut=-Mt*h*(A+M);(Z<.052359877||Z>At-.052359877)&&(Ut=0),l!==0&&(Ut/=l);var Qn=at-e*Ut;x=it+i*et*o,H=Ye+r*et*(j+se),oe=In-et*s*(k+X-14-6*ne);var an=a*et*(z+B-6),ln=-et*r*($+ee);(Z<.052359877||Z>At-.052359877)&&(ln=0),ce=Qn+an,re=Ut,l!==0&&(ce-=e/l*ln,re+=ln/l);var dt=0,Ft=(V+w*He)%lt;if(he+=x*C,Z+=H*C,G+=ce*C,Ue+=re*C,ve+=oe*C,F!==0){if(L=Math.pow(De/vn,qi),F===2){D=e*e;var Nn=he;he=ge;var St=ne;ne=_e,I=he*ne,tt=-.306-(he-.64)*.44,he<=.65?(qe=3.616-13.247*he+16.29*ne,rt=-19.302+117.39*he-228.419*ne+156.591*I,_t=-18.9068+109.7927*he-214.6334*ne+146.5816*I,Yt=-41.122+242.694*he-471.094*ne+313.953*I,je=-146.407+841.88*he-1629.014*ne+1083.435*I,wt=-532.114+3017.977*he-5740.032*ne+3708.276*I):(qe=-72.099+331.819*he-508.738*ne+266.724*I,rt=-346.844+1582.851*he-2415.925*ne+1246.113*I,_t=-342.585+1554.908*he-2366.899*ne+1215.972*I,Yt=-1052.797+4758.686*he-7193.992*ne+3651.957*I,je=-3581.69+16178.11*he-24462.77*ne+12422.52*I,he>.715?wt=-5149.66+29936.92*he-54087.36*ne+31324.56*I:wt=1464.74-4664.75*he+3763.64*ne),he<.7?(Rt=-919.2277+4988.61*he-9064.77*ne+5542.21*I,Nt=-822.71072+4568.6173*he-8491.4146*ne+5337.524*I,rn=-853.666+4690.25*he-8624.77*ne+5341.4*I):(Rt=-37995.78+161616.52*he-229838.2*ne+109377.94*I,Nt=-51752.104+218913.95*he-309468.16*ne+146349.42*I,rn=-40023.88+170470.89*he-242699.48*ne+115605.82*I),Ct=l*l,Ce=.75*(1+2*e+D),Se=1.5*Ct,Ee=1.875*l*(1-2*e-3*D),ke=-1.875*l*(1+2*e-3*D),me=35*Ct*Ce,ae=39.375*Ct*Ct,K=9.84375*l*(Ct*(1-2*e-5*D)+.33333333*(-2+4*e+6*D)),ue=l*(4.92187512*Ct*(-2-4*e+10*D)+6.56250012*(1+2*e-3*D)),Ie=29.53125*l*(2-8*e+D*(-12+8*e+10*D)),Ge=29.53125*l*(-2-8*e+D*(12+8*e-10*D)),m=De*De,b=L*L,pt=3*m*b,ht=pt*we,pe=ht*Ce*tt,Me=ht*Se*qe,pt*=L,ht=pt*Qe,Le=ht*Ee*rt,Fe=ht*ke*_t,pt*=L,ht=2*pt*Ne,ye=ht*me*Yt,Ae=ht*ae*je,pt*=L,ht=pt*ot,Pe=ht*K*wt,Oe=ht*ue*rn,ht=2*pt*Be,We=ht*Ie*Nt,T=ht*Ge*Rt,le=(S+q+q-(Ft+Ft))%lt,P=R+oe+2*(Q+re-He)-W,he=Nn,ne=St}F===1&&(Ze=1+ne*(-2.5+.8125*ne),rt=1+2*ne,fe=1+ne*(-6+6.60937*ne),Ce=.75*(1+e)*(1+e),be=.9375*l*l*(1+3*e)-.75*(1+e),U=1+e,U*=1.875*U*U,Te=3*De*De*L*L,ie=2*Te*Ce*Ze*Y,xe=3*Te*U*fe*de*L,Te=Te*be*rt*te*L,le=(S+q+t-Ft)%lt,P=R+N+oe+ce+re-(W+He)),J=le,ze=W,Xe=0,De=W+dt}return{em:he,argpm:G,inclm:Z,mm:ve,nm:De,nodem:Ue,irez:F,atime:Xe,d2201:pe,d2211:Me,d3210:Le,d3222:Fe,d4410:ye,d4422:Ae,d5220:Pe,d5232:Oe,d5421:We,d5433:T,dedt:x,didt:H,dmdt:oe,dndt:dt,dnodt:re,domdt:ce,del1:Te,del2:ie,del3:xe,xfact:P,xlamo:le,xli:J,xni:ze}}function ya(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Bi/240%lt,t<0&&(t+=lt),t}function Ps(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?ya(Gs.apply(void 0,arguments)):ya.apply(void 0,arguments)}function nm(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,s=n.no,a=e*e,o=1-a,l=Math.sqrt(o),c=Math.cos(i),h=c*c,d=Math.pow(vn/s,qi),f=.75*Xn*(3*h-1)/(l*o),g=f/(d*d),_=d*(1-g*g-g*(1/3+134*g*g/81));g=f/(_*_),s/=1+g;var v=Math.pow(vn/s,qi),p=Math.sin(i),u=v*o,A=1-5*h,M=-A-h-h,E=1/v,y=u*u,C=v*(1-e),w="n",V;if(r==="a"){var S=t-7305,R=Math.floor(S+1e-8),W=S-R,q=.017202791694070362,Q=1.7321343856509375,N=5075514194322695e-30,k=q+lt;V=(Q+q*R+k*W+S*S*N)%lt,V<0&&(V+=lt)}else V=Ps(t+24332815e-1);return{no:s,method:w,ainv:E,ao:v,con41:M,con42:A,cosio:c,cosio2:h,eccsq:a,omeosq:o,posq:y,rp:C,rteosq:l,sinio:p,gsto:V}}function im(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,s=n.d3222,a=n.d4410,o=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,g=n.del1,_=n.del2,v=n.del3,p=n.didt,u=n.dmdt,A=n.dnodt,M=n.domdt,E=n.argpo,y=n.argpdot,C=n.t,w=n.tc,V=n.gsto,S=n.xfact,R=n.xlamo,W=n.no,q=n.atime,Q=n.em,N=n.argpm,k=n.inclm,X=n.xli,j=n.mm,se=n.xni,$=n.nodem,ee=n.nm,z=.13130908,B=2.8843198,ge=.37448087,_e=5.7686396,ne=.95240898,he=1.8014998,G=1.050833,Z=4.4108898,ve=.0043752690880113,De=720,Ue=-720,F=259200,Xe,pe,Me,Le,Fe,ye,Ae,Pe,Oe=0,We=0,T=(V+w*ve)%lt;if(Q+=f*C,k+=p*C,N+=M*C,$+=A*C,j+=u*C,e!==0){(q===0||C*q<=0||Math.abs(C)<Math.abs(q))&&(q=0,se=W,X=R),C>0?Xe=De:Xe=Ue;for(var x=381;x===381;)e!==2?(Ae=g*Math.sin(X-z)+_*Math.sin(2*(X-B))+v*Math.sin(3*(X-ge)),Fe=se+S,ye=g*Math.cos(X-z)+2*_*Math.cos(2*(X-B))+3*v*Math.cos(3*(X-ge)),ye*=Fe):(Pe=E+y*q,Me=Pe+Pe,pe=X+X,Ae=t*Math.sin(Me+X-_e)+i*Math.sin(X-_e)+r*Math.sin(Pe+X-ne)+s*Math.sin(-Pe+X-ne)+a*Math.sin(Me+pe-he)+o*Math.sin(pe-he)+l*Math.sin(Pe+X-G)+c*Math.sin(-Pe+X-G)+h*Math.sin(Pe+pe-Z)+d*Math.sin(-Pe+pe-Z),Fe=se+S,ye=t*Math.cos(Me+X-_e)+i*Math.cos(X-_e)+r*Math.cos(Pe+X-ne)+s*Math.cos(-Pe+X-ne)+l*Math.cos(Pe+X-G)+c*Math.cos(-Pe+X-G)+2*(a*Math.cos(Me+pe-he)+o*Math.cos(pe-he)+h*Math.cos(Pe+pe-Z)+d*Math.cos(-Pe+pe-Z)),ye*=Fe),Math.abs(C-q)>=De?x=381:(We=C-q,x=0),x===381&&(X+=Fe*Xe+Ae*F,se+=Ae*Xe+ye*F,q+=Xe);ee=se+Ae*We+ye*We*We*.5,Le=X+Fe*We+Ae*We*We*.5,e!==1?(j=Le-2*$+2*T,Oe=ee-W):(j=Le-$-N+T,Oe=ee-W),ee=W+Oe}return{atime:q,em:Q,argpm:N,inclm:k,xli:X,mm:j,xni:se,nodem:$,dndt:Oe,nm:ee}}function cl(n,e){var t,i,r,s,a,o,l,c,h,d,f,g,_,v,p,u,A,M,E,y,C,w,V,S,R,W,q,Q=15e-13;n.t=e,n.error=0;var N=n.mo+n.mdot*n.t,k=n.argpo+n.argpdot*n.t,X=n.nodeo+n.nodedot*n.t;h=k,C=N;var j=n.t*n.t;if(V=X+n.nodecf*j,A=1-n.cc1*n.t,M=n.bstar*n.cc4*n.t,E=n.t2cof*j,n.isimp!==1){l=n.omgcof*n.t;var se=1+n.eta*Math.cos(N);o=n.xmcof*(se*se*se-n.delmo),u=l+o,C=N+u,h=k-u,g=j*n.t,_=g*n.t,A=A-n.d2*j-n.d3*g-n.d4*_,M+=n.bstar*n.cc5*(Math.sin(C)-n.sinmao),E=E+n.t3cof*g+_*(n.t4cof+n.t*n.t5cof)}w=n.no;var $=n.ecco;if(y=n.inclo,n.method==="d"){v=n.t;var ee={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:v,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:$,argpm:h,inclm:y,xli:n.xli,mm:C,xni:n.xni,nodem:V,nm:w},z=im(ee);$=z.em,h=z.argpm,y=z.inclm,C=z.mm,V=z.nodem,w=z.nm}if(w<=0)return n.error=2,[!1,!1];var B=Math.pow(vn/w,qi)*A*A;if(w=vn/Math.pow(B,1.5),$-=M,$>=1||$<-.001)return n.error=1,[!1,!1];$<1e-6&&($=1e-6),C+=n.no*E,R=C+h+V,V%=lt,h%=lt,R%=lt,C=(R-h-V)%lt;var ge=Math.sin(y),_e=Math.cos(y),ne=$;if(S=y,d=h,q=V,W=C,s=ge,r=_e,n.method==="d"){var he={inclo:n.inclo,init:"n",ep:ne,inclp:S,nodep:q,argpp:d,mp:W,opsmode:n.operationmode},G=ll(n,he);if(ne=G.ep,q=G.nodep,d=G.argpp,W=G.mp,S=G.inclp,S<0&&(S=-S,q+=At,d-=At),ne<0||ne>1)return n.error=3,[!1,!1]}n.method==="d"&&(s=Math.sin(S),r=Math.cos(S),n.aycof=-.5*qn*s,Math.abs(r+1)>15e-13?n.xlcof=-.25*qn*s*(3+5*r)/(1+r):n.xlcof=-.25*qn*s*(3+5*r)/Q);var Z=ne*Math.cos(d);u=1/(B*(1-ne*ne));var ve=ne*Math.sin(d)+u*n.aycof,De=W+d+q+u*n.xlcof*Z,Ue=(De-q)%lt;c=Ue,p=9999.9;for(var F=1;Math.abs(p)>=1e-12&&F<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*Z-i*ve,p=(Ue-ve*t+Z*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,F+=1;var Xe=Z*t+ve*i,pe=Z*i-ve*t,Me=Z*Z+ve*ve,Le=B*(1-Me);if(Le<0)return n.error=4,[!1,!1];var Fe=B*(1-Xe),ye=Math.sqrt(B)*pe/Fe,Ae=Math.sqrt(Le)/Fe,Pe=Math.sqrt(1-Me);u=pe/(1+Pe);var Oe=B/Fe*(i-ve-Z*u),We=B/Fe*(t-Z+ve*u);f=Math.atan2(Oe,We);var T=(We+We)*Oe,x=1-2*Oe*Oe;u=1/Le;var H=.5*Xn*u,oe=H*u;n.method==="d"&&(a=r*r,n.con41=3*a-1,n.x1mth2=1-a,n.x7thm1=7*a-1);var re=Fe*(1-1.5*oe*Pe*n.con41)+.5*H*n.x1mth2*x;if(re<1)return n.error=6,{position:!1,velocity:!1};f-=.25*oe*n.x7thm1*T;var ce=q+1.5*oe*r*T,Te=S+1.5*oe*r*s*x,ie=ye-w*H*n.x1mth2*T/vn,xe=Ae+w*H*(n.x1mth2*x+1.5*n.con41)/vn,P=Math.sin(f),le=Math.cos(f),J=Math.sin(ce),ze=Math.cos(ce),Ce=Math.sin(Te),Se=Math.cos(Te),be=-J*Se,Ee=ze*Se,ke=be*P+ze*le,U=Ee*P+J*le,me=Ce*P,ae=be*le-ze*P,K=Ee*le-J*P,ue=Ce*le,Ie={x:re*ke*Bt,y:re*U*Bt,z:re*me*Bt},Ge={x:(ie*ke+xe*ae)*ms,y:(ie*U+xe*K)*ms,z:(ie*me+xe*ue)*ms};return{position:Ie,velocity:Ge}}function rm(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,s=e.xbstar,a=e.xecco,o=e.xargpo,l=e.xinclo,c=e.xmo,h=e.xno,d=e.xnodeo,f,g,_,v,p,u,A,M,E,y,C,w,V,S,R,W,q,Q,N,k,X,j,se,$,ee,z,B,ge,_e,ne,he,G,Z,ve,De,Ue,F,Xe,pe,Me,Le,Fe,ye,Ae,Pe,Oe,We,T,x,H,oe,re,ce,Te,ie,xe,P=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=s,n.ecco=a,n.argpo=o,n.inclo=l,n.mo=c,n.no=h,n.nodeo=d,n.operationmode=t;var le=78/Bt+1,J=42/Bt,ze=J*J*J*J;n.init="y",n.t=0;var Ce={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},Se=nm(Ce),be=Se.ao,Ee=Se.con42,ke=Se.cosio,U=Se.cosio2,me=Se.eccsq,ae=Se.omeosq,K=Se.posq,ue=Se.rp,Ie=Se.rteosq,Ge=Se.sinio;if(n.no=Se.no,n.con41=Se.con41,n.gsto=Se.gsto,n.a=Math.pow(n.no*Zp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,ae>=0||n.no>=0){if(n.isimp=0,ue<220/Bt+1&&(n.isimp=1),B=le,X=ze,Q=(ue-1)*Bt,Q<156){B=Q-78,Q<98&&(B=20);var Ze=(120-B)/Bt;X=Ze*Ze*Ze*Ze,B=B/Bt+1}N=1/K,Oe=1/(be-B),n.eta=be*n.ecco*Oe,w=n.eta*n.eta,C=n.ecco*n.eta,k=Math.abs(1-w),u=X*Math.pow(Oe,4),A=u/Math.pow(k,3.5),v=A*n.no*(be*(1+1.5*w+C*(4+w))+.375*Xn*Oe/k*n.con41*(8+3*w*(8+w))),n.cc1=n.bstar*v,p=0,n.ecco>1e-4&&(p=-2*u*Oe*qn*n.no*Ge/n.ecco),n.x1mth2=1-U,n.cc4=2*n.no*A*be*ae*(n.eta*(2+.5*w)+n.ecco*(.5+2*w)-Xn*Oe/(be*k)*(-3*n.con41*(1-2*C+w*(1.5-.5*C))+.75*n.x1mth2*(2*w-C*(1+w))*Math.cos(2*n.argpo))),n.cc5=2*A*be*ae*(1+2.75*(w+C)+C*w),M=U*U,ye=1.5*Xn*N*n.no,Ae=.5*ye*Xn*N,Pe=-.46875*Jp*N*N*n.no,n.mdot=n.no+.5*ye*Ie*n.con41+.0625*Ae*Ie*(13-78*U+137*M),n.argpdot=-.5*ye*Ee+.0625*Ae*(7-114*U+395*M)+Pe*(3-36*U+49*M),T=-ye*ke,n.nodedot=T+(.5*Ae*(4-19*U)+2*Pe*(3-7*U))*ke,We=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-qi*u*n.bstar/C),n.nodecf=3.5*ae*T*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(ke+1)>15e-13?n.xlcof=-.25*qn*Ge*(3+5*ke)/(1+ke):n.xlcof=-.25*qn*Ge*(3+5*ke)/P,n.aycof=-.5*qn*Ge;var tt=1+n.eta*Math.cos(n.mo);if(n.delmo=tt*tt*tt,n.sinmao=Math.sin(n.mo),n.x7thm1=7*U-1,2*At/n.no>=225){n.method="d",n.isimp=1,Le=0,R=n.inclo;var qe={epoch:r,ep:n.ecco,argpp:n.argpo,tc:Le,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},fe=em(qe);n.e3=fe.e3,n.ee2=fe.ee2,n.peo=fe.peo,n.pgho=fe.pgho,n.pho=fe.pho,n.pinco=fe.pinco,n.plo=fe.plo,n.se2=fe.se2,n.se3=fe.se3,n.sgh2=fe.sgh2,n.sgh3=fe.sgh3,n.sgh4=fe.sgh4,n.sh2=fe.sh2,n.sh3=fe.sh3,n.si2=fe.si2,n.si3=fe.si3,n.sl2=fe.sl2,n.sl3=fe.sl3,n.sl4=fe.sl4,g=fe.sinim,f=fe.cosim,E=fe.em,y=fe.emsq,j=fe.s1,se=fe.s2,$=fe.s3,ee=fe.s4,z=fe.s5,ge=fe.ss1,_e=fe.ss2,ne=fe.ss3,he=fe.ss4,G=fe.ss5,Z=fe.sz1,ve=fe.sz3,De=fe.sz11,Ue=fe.sz13,F=fe.sz21,Xe=fe.sz23,pe=fe.sz31,Me=fe.sz33,n.xgh2=fe.xgh2,n.xgh3=fe.xgh3,n.xgh4=fe.xgh4,n.xh2=fe.xh2,n.xh3=fe.xh3,n.xi2=fe.xi2,n.xi3=fe.xi3,n.xl2=fe.xl2,n.xl3=fe.xl3,n.xl4=fe.xl4,n.zmol=fe.zmol,n.zmos=fe.zmos,q=fe.nm,x=fe.z1,H=fe.z3,oe=fe.z11,re=fe.z13,ce=fe.z21,Te=fe.z23,ie=fe.z31,xe=fe.z33;var rt={inclo:R,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},_t=ll(n,rt);n.ecco=_t.ep,n.inclo=_t.inclp,n.nodeo=_t.nodep,n.argpo=_t.argpp,n.mo=_t.mp,V=0,S=0,W=0;var Yt={cosim:f,emsq:y,argpo:n.argpo,s1:j,s2:se,s3:$,s4:ee,s5:z,sinim:g,ss1:ge,ss2:_e,ss3:ne,ss4:he,ss5:G,sz1:Z,sz3:ve,sz11:De,sz13:Ue,sz21:F,sz23:Xe,sz31:pe,sz33:Me,t:n.t,tc:Le,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:We,z1:x,z3:H,z11:oe,z13:re,z21:ce,z23:Te,z31:ie,z33:xe,ecco:n.ecco,eccsq:me,em:E,argpm:V,inclm:R,mm:W,nm:q,nodem:S,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},je=tm(Yt);n.irez=je.irez,n.atime=je.atime,n.d2201=je.d2201,n.d2211=je.d2211,n.d3210=je.d3210,n.d3222=je.d3222,n.d4410=je.d4410,n.d4422=je.d4422,n.d5220=je.d5220,n.d5232=je.d5232,n.d5421=je.d5421,n.d5433=je.d5433,n.dedt=je.dedt,n.didt=je.didt,n.dmdt=je.dmdt,n.dnodt=je.dnodt,n.domdt=je.domdt,n.del1=je.del1,n.del2=je.del2,n.del3=je.del3,n.xfact=je.xfact,n.xlamo=je.xlamo,n.xli=je.xli,n.xni=je.xni}n.isimp!==1&&(_=n.cc1*n.cc1,n.d2=4*be*Oe*_,Fe=n.d2*Oe*n.cc1/3,n.d3=(17*be+B)*Fe,n.d4=.5*Fe*be*Oe*(221*be+31*B)*n.cc1,n.t3cof=n.d2+2*_,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*_)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*_*(2*n.d2+_)))}cl(n,0),n.init="n"}function sm(n,e){var t="i",i=1440/(2*At),r=0,s={};s.error=0,s.satnum=n.substring(2,7),s.epochyr=parseInt(n.substring(18,20),10),s.epochdays=parseFloat(n.substring(20,32)),s.ndot=parseFloat(n.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),s.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=Bi,s.nodeo*=Bi,s.argpo*=Bi,s.mo*=Bi,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var a=Qp(r,s.epochdays),o=a.mon,l=a.day,c=a.hr,h=a.minute,d=a.sec;return s.jdsatepoch=Gs(r,o,l,c,h,d),rm(s,{opsmode:t,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function om(n){return am(n)||lm(n)||cm(n)||hm()}function am(n){if(Array.isArray(n))return Ds(n)}function lm(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function cm(n,e){if(n){if(typeof n=="string")return Ds(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ds(n,e)}}function Ds(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function hm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ta(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),s=Gs.apply(void 0,om(r)),a=(s-i.jdsatepoch)*Yp;return cl(i,a)}function hl(n){return n*jp}function ba(n){if(n<-At/2||n>At/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return hl(n)}function Aa(n){if(n<-At||n>At)throw new RangeError("Longitude radians must be in range [-pi; pi].");return hl(n)}function um(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),s=(t-i)/t,a=2*s-s*s,o=Math.atan2(n.y,n.x)-e;o<-At;)o+=lt;for(;o>At;)o-=lt;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-a*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*a*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:o,latitude:h,height:f}}function dm(n,e){var t=n.x*Math.cos(e)+n.y*Math.sin(e),i=n.x*-Math.sin(e)+n.y*Math.cos(e),r=n.z;return{x:t,y:i,z:r}}var fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ul={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(fm,function(){var t=function(){function i(g){return a.appendChild(g.dom),g}function r(g){for(var _=0;_<a.children.length;_++)a.children[_].style.display=_===g?"block":"none";s=g}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(g){g.preventDefault(),r(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){c++;var g=(performance||Date).now();if(d.update(g-o,200),g>l+1e3&&(h.update(1e3*c/(g-l),100),l=g,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return g},update:function(){o=this.end()},domElement:a,setMode:r}};return t.Panel=function(i,r,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,f=3*c,g=2*c,_=3*c,v=15*c,p=74*c,u=30*c,A=document.createElement("canvas");A.width=h,A.height=d,A.style.cssText="width:80px;height:48px";var M=A.getContext("2d");return M.font="bold "+9*c+"px Helvetica,Arial,sans-serif",M.textBaseline="top",M.fillStyle=s,M.fillRect(0,0,h,d),M.fillStyle=r,M.fillText(i,f,g),M.fillRect(_,v,p,u),M.fillStyle=s,M.globalAlpha=.9,M.fillRect(_,v,p,u),{dom:A,update:function(E,y){a=Math.min(a,E),o=Math.max(o,E),M.fillStyle=s,M.globalAlpha=1,M.fillRect(0,0,h,v),M.fillStyle=r,M.fillText(l(E)+" "+i+" ("+l(a)+"-"+l(o)+")",f,g),M.drawImage(A,_+c,v,p-c,u,_,v,p-c,u),M.fillRect(_+p-c,v,c,u),M.fillStyle=s,M.globalAlpha=.9,M.fillRect(_+p-c,v,c,l((1-E/y)*u))}}},t})})(ul);var mm=ul.exports;const gm=pm(mm),dl=Math.sqrt(3),_m=.5*(dl-1),Oi=(3-dl)/6,wa=n=>Math.floor(n)|0,Ra=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function vm(n=Math.random){const e=xm(n),t=new Float64Array(e).map(r=>Ra[r%12*2]),i=new Float64Array(e).map(r=>Ra[r%12*2+1]);return function(s,a){let o=0,l=0,c=0;const h=(s+a)*_m,d=wa(s+h),f=wa(a+h),g=(d+f)*Oi,_=d-g,v=f-g,p=s-_,u=a-v;let A,M;p>u?(A=1,M=0):(A=0,M=1);const E=p-A+Oi,y=u-M+Oi,C=p-1+2*Oi,w=u-1+2*Oi,V=d&255,S=f&255;let R=.5-p*p-u*u;if(R>=0){const Q=V+e[S],N=t[Q],k=i[Q];R*=R,o=R*R*(N*p+k*u)}let W=.5-E*E-y*y;if(W>=0){const Q=V+A+e[S+M],N=t[Q],k=i[Q];W*=W,l=W*W*(N*E+k*y)}let q=.5-C*C-w*w;if(q>=0){const Q=V+1+e[S+1],N=t[Q],k=i[Q];q*=q,c=q*q*(N*C+k*w)}return 70*(o+l+c)}}function xm(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const gs={type:"change"},_s={type:"start"},vs={type:"end"};class Mm extends Mn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Wt.ROTATE,MIDDLE:Wt.DOLLY,RIGHT:Wt.PAN},this.target=new O;const s=1e-6,a=new O;let o=1,l=r.NONE,c=r.NONE,h=0,d=0,f=0;const g=new O,_=new Ve,v=new Ve,p=new O,u=new Ve,A=new Ve,M=new Ve,E=new Ve,y=[],C={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const G=i.domElement.getBoundingClientRect(),Z=i.domElement.ownerDocument.documentElement;i.screen.left=G.left+window.pageXOffset-Z.clientLeft,i.screen.top=G.top+window.pageYOffset-Z.clientTop,i.screen.width=G.width,i.screen.height=G.height};const w=function(){const G=new Ve;return function(ve,De){return G.set((ve-i.screen.left)/i.screen.width,(De-i.screen.top)/i.screen.height),G}}(),V=function(){const G=new Ve;return function(ve,De){return G.set((ve-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-De))/i.screen.width),G}}();this.rotateCamera=function(){const G=new O,Z=new on,ve=new O,De=new O,Ue=new O,F=new O;return function(){F.set(v.x-_.x,v.y-_.y,0);let pe=F.length();pe?(g.copy(i.object.position).sub(i.target),ve.copy(g).normalize(),De.copy(i.object.up).normalize(),Ue.crossVectors(De,ve).normalize(),De.setLength(v.y-_.y),Ue.setLength(v.x-_.x),F.copy(De.add(Ue)),G.crossVectors(F,g).normalize(),pe*=i.rotateSpeed,Z.setFromAxisAngle(G,pe),g.applyQuaternion(Z),i.object.up.applyQuaternion(Z),p.copy(G),f=pe):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),g.copy(i.object.position).sub(i.target),Z.setFromAxisAngle(p,f),g.applyQuaternion(Z),i.object.up.applyQuaternion(Z)),_.copy(v)}}(),this.zoomCamera=function(){let G;l===r.TOUCH_ZOOM_PAN?(G=h/d,h=d,i.object.isPerspectiveCamera?g.multiplyScalar(G):i.object.isOrthographicCamera?(i.object.zoom=mn.clamp(i.object.zoom/G,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(G=1+(A.y-u.y)*i.zoomSpeed,G!==1&&G>0&&(i.object.isPerspectiveCamera?g.multiplyScalar(G):i.object.isOrthographicCamera?(i.object.zoom=mn.clamp(i.object.zoom/G,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?u.copy(A):u.y+=(A.y-u.y)*this.dynamicDampingFactor)},this.panCamera=function(){const G=new Ve,Z=new O,ve=new O;return function(){if(G.copy(E).sub(M),G.lengthSq()){if(i.object.isOrthographicCamera){const Ue=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,F=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;G.x*=Ue,G.y*=F}G.multiplyScalar(g.length()*i.panSpeed),ve.copy(g).cross(i.object.up).setLength(G.x),ve.add(Z.copy(i.object.up).setLength(G.y)),i.object.position.add(ve),i.target.add(ve),i.staticMoving?M.copy(E):M.add(G.subVectors(E,M).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(g.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,g.setLength(i.maxDistance)),u.copy(A)),g.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,g.setLength(i.minDistance)),u.copy(A)))},this.update=function(){g.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,g),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),a.distanceToSquared(i.object.position)>s&&(i.dispatchEvent(gs),a.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(a.distanceToSquared(i.object.position)>s||o!==i.object.zoom)&&(i.dispatchEvent(gs),a.copy(i.object.position),o=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),g.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(gs),a.copy(i.object.position),o=i.object.zoom};function S(G){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(G.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",W)),ge(G),G.pointerType==="touch"?$(G):k(G))}function R(G){i.enabled!==!1&&(G.pointerType==="touch"?ee(G):X(G))}function W(G){i.enabled!==!1&&(G.pointerType==="touch"?z(G):j(),_e(G),y.length===0&&(i.domElement.releasePointerCapture(G.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",W)))}function q(G){_e(G)}function Q(G){i.enabled!==!1&&(window.removeEventListener("keydown",Q),c===r.NONE&&(G.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:G.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:G.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function N(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",Q))}function k(G){if(l===r.NONE)switch(G.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Z=c!==r.NONE?c:l;Z===r.ROTATE&&!i.noRotate?(v.copy(V(G.pageX,G.pageY)),_.copy(v)):Z===r.ZOOM&&!i.noZoom?(u.copy(w(G.pageX,G.pageY)),A.copy(u)):Z===r.PAN&&!i.noPan&&(M.copy(w(G.pageX,G.pageY)),E.copy(M)),i.dispatchEvent(_s)}function X(G){const Z=c!==r.NONE?c:l;Z===r.ROTATE&&!i.noRotate?(_.copy(v),v.copy(V(G.pageX,G.pageY))):Z===r.ZOOM&&!i.noZoom?A.copy(w(G.pageX,G.pageY)):Z===r.PAN&&!i.noPan&&E.copy(w(G.pageX,G.pageY))}function j(){l=r.NONE,i.dispatchEvent(vs)}function se(G){if(i.enabled!==!1&&i.noZoom!==!0){switch(G.preventDefault(),G.deltaMode){case 2:u.y-=G.deltaY*.025;break;case 1:u.y-=G.deltaY*.01;break;default:u.y-=G.deltaY*25e-5;break}i.dispatchEvent(_s),i.dispatchEvent(vs)}}function $(G){switch(ne(G),y.length){case 1:l=r.TOUCH_ROTATE,v.copy(V(y[0].pageX,y[0].pageY)),_.copy(v);break;default:l=r.TOUCH_ZOOM_PAN;const Z=y[0].pageX-y[1].pageX,ve=y[0].pageY-y[1].pageY;d=h=Math.sqrt(Z*Z+ve*ve);const De=(y[0].pageX+y[1].pageX)/2,Ue=(y[0].pageY+y[1].pageY)/2;M.copy(w(De,Ue)),E.copy(M);break}i.dispatchEvent(_s)}function ee(G){switch(ne(G),y.length){case 1:_.copy(v),v.copy(V(G.pageX,G.pageY));break;default:const Z=he(G),ve=G.pageX-Z.x,De=G.pageY-Z.y;d=Math.sqrt(ve*ve+De*De);const Ue=(G.pageX+Z.x)/2,F=(G.pageY+Z.y)/2;E.copy(w(Ue,F));break}}function z(G){switch(y.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,v.copy(V(G.pageX,G.pageY)),_.copy(v);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId!==G.pointerId){const ve=C[y[Z].pointerId];v.copy(V(ve.x,ve.y)),_.copy(v);break}break}i.dispatchEvent(vs)}function B(G){i.enabled!==!1&&G.preventDefault()}function ge(G){y.push(G)}function _e(G){delete C[G.pointerId];for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId==G.pointerId){y.splice(Z,1);return}}function ne(G){let Z=C[G.pointerId];Z===void 0&&(Z=new Ve,C[G.pointerId]=Z),Z.set(G.pageX,G.pageY)}function he(G){const Z=G.pointerId===y[0].pointerId?y[1]:y[0];return C[Z.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",B),i.domElement.removeEventListener("pointerdown",S),i.domElement.removeEventListener("pointercancel",q),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",W),window.removeEventListener("keydown",Q),window.removeEventListener("keyup",N)},this.domElement.addEventListener("contextmenu",B),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",q),this.domElement.addEventListener("wheel",se,{passive:!1}),window.addEventListener("keydown",Q),window.addEventListener("keyup",N),this.handleResize(),this.update()}}const Ca=new O,xs=new Ls,Ms=new O;class Sm{constructor(e,t){this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this.autoSpeedFactor=0,this.pointerX=0,this.pointerY=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.viewHalfX=0,this.viewHalfY=0;let i=0,r=0;this.handleResize=function(){this.domElement===document?(this.viewHalfX=window.innerWidth/2,this.viewHalfY=window.innerHeight/2):(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)},this.onPointerDown=function(d){if(this.domElement!==document&&this.domElement.focus(),this.activeLook)switch(d.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0},this.onPointerUp=function(d){if(this.activeLook)switch(d.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1},this.onPointerMove=function(d){this.domElement===document?(this.pointerX=d.pageX-this.viewHalfX,this.pointerY=d.pageY-this.viewHalfY):(this.pointerX=d.pageX-this.domElement.offsetLeft-this.viewHalfX,this.pointerY=d.pageY-this.domElement.offsetTop-this.viewHalfY)},this.onKeyDown=function(d){switch(d.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}},this.onKeyUp=function(d){switch(d.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}},this.lookAt=function(d,f,g){return d.isVector3?Ms.copy(d):Ms.set(d,f,g),this.object.lookAt(Ms),h(this),this},this.update=function(){const d=new O;return function(g){if(this.enabled===!1)return;if(this.heightSpeed){const y=mn.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=g*(y*this.heightCoef)}else this.autoSpeedFactor=0;const _=g*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(_+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(_),this.moveLeft&&this.object.translateX(-_),this.moveRight&&this.object.translateX(_),this.moveUp&&this.object.translateY(_),this.moveDown&&this.object.translateY(-_);let v=g*this.lookSpeed;this.activeLook||(v=0);let p=1;this.constrainVertical&&(p=Math.PI/(this.verticalMax-this.verticalMin)),r-=this.pointerX*v,this.lookVertical&&(i-=this.pointerY*v*p),i=Math.max(-85,Math.min(85,i));let u=mn.degToRad(90-i);const A=mn.degToRad(r);this.constrainVertical&&(u=mn.mapLinear(u,0,Math.PI,this.verticalMin,this.verticalMax));const M=this.object.position;d.setFromSphericalCoords(1,u,A).add(M),this.object.lookAt(d)}}(),this.dispose=function(){this.domElement.removeEventListener("contextmenu",La),this.domElement.removeEventListener("pointerdown",a),this.domElement.removeEventListener("pointermove",s),this.domElement.removeEventListener("pointerup",o),window.removeEventListener("keydown",l),window.removeEventListener("keyup",c)};const s=this.onPointerMove.bind(this),a=this.onPointerDown.bind(this),o=this.onPointerUp.bind(this),l=this.onKeyDown.bind(this),c=this.onKeyUp.bind(this);this.domElement.addEventListener("contextmenu",La),this.domElement.addEventListener("pointerdown",a),this.domElement.addEventListener("pointermove",s),this.domElement.addEventListener("pointerup",o),window.addEventListener("keydown",l),window.addEventListener("keyup",c);function h(d){const f=d.object.quaternion;Ca.set(0,0,-1).applyQuaternion(f),xs.setFromVector3(Ca),i=90-mn.radToDeg(xs.phi),r=mn.radToDeg(xs.theta)}this.handleResize(),h(this)}}function La(n){n.preventDefault()}class Em extends al{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Wt.PAN,MIDDLE:Wt.DOLLY,RIGHT:Wt.ROTATE},this.touches={ONE:An.PAN,TWO:An.DOLLY_ROTATE}}}const ym={type:"change"};class Tm extends Mn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,s=new on,a=new O;this.tmpQuaternion=new on,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new O(0,0,0),this.rotationVector=new O(0,0,0),this.keydown=function(_){if(!(_.altKey||this.enabled===!1)){switch(_.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(_){if(this.enabled!==!1){switch(_.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(_){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(_.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(_){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),p=v.size[0]/2,u=v.size[1]/2;this.moveState.yawLeft=-(_.pageX-v.offset[0]-p)/p,this.moveState.pitchDown=(_.pageY-v.offset[1]-u)/u,this.updateRotationVector()}},this.pointerup=function(_){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(_.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(_){this.enabled!==!1&&_.preventDefault()},this.update=function(_){if(this.enabled===!1)return;const v=_*i.movementSpeed,p=_*i.rollSpeed;i.object.translateX(i.moveVector.x*v),i.object.translateY(i.moveVector.y*v),i.object.translateZ(i.moveVector.z*v),i.tmpQuaternion.set(i.rotationVector.x*p,i.rotationVector.y*p,i.rotationVector.z*p,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(a.distanceToSquared(i.object.position)>r||8*(1-s.dot(i.object.quaternion))>r)&&(i.dispatchEvent(ym),s.copy(i.object.quaternion),a.copy(i.object.position))},this.updateMovementVector=function(){const _=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-_+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",o),this.domElement.removeEventListener("pointerdown",c),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",h),this.domElement.removeEventListener("pointercancel",d),window.removeEventListener("keydown",f),window.removeEventListener("keyup",g)};const o=this.contextMenu.bind(this),l=this.pointermove.bind(this),c=this.pointerdown.bind(this),h=this.pointerup.bind(this),d=this.pointercancel.bind(this),f=this.keydown.bind(this),g=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",o),this.domElement.addEventListener("pointerdown",c),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",h),this.domElement.addEventListener("pointercancel",d),window.addEventListener("keydown",f),window.addEventListener("keyup",g),this.updateMovementVector(),this.updateRotationVector()}}function bm(n,e){let t,i,r,s,a,o,l,c=[],h,d,f,g,_,v="smallScale",p,u,A=!0,M=!1;const E=66,y=2;let C,w;const V=6371,S=1,R=S/V,W=2*Math.PI/86400,q=23.44*(Math.PI/180),Q=27.32*24*3600,N=2*Math.PI/Q;let k=1,X;const j=new gm;j.showPanel(0),document.body.appendChild(j.dom),j.dom.id="statistics",window.addEventListener("keydown",m=>{(m.key==="R"||m.key==="r")&&(A=!A)}),window.addEventListener("keydown",m=>{(m.key==="W"||m.key==="w")&&(M=!M,s.traverse(function(b){b.isMesh&&(b.material.wireframe=M,b.material.needsUpdate=!0)}))});function se(){h=new al(i,r.domElement),h.enableDamping=!0,h.enablePan=!1,h.dampingFactor=.25,h.rotateSpeed=.25,h.minDistance=5,h.maxDistance=100,g=new Mm(i,r.domElement),g.rotateSpeed=1.25,g.panSpeed=.2,g.noZoom=!1,g.noPan=!1,g.staticMoving=!1,g.dynamicDampingFactor=.33,d=new Em(i,r.domElement),f=new Sm(i,r.domElement),f.lookSpeed=.1,f.movementSpeed=5,f.noFly=!0,f.lookVertical=!0,_=new Tm(i,r.domElement),$(h)}function $(m){h.enabled=!1,d.enabled=!1,f.enabled=!1,_.enabled=!1,g.enabled=!1,m&&(m.enabled=!0)}async function ee(){t=new Op,i=new qt(5,window.innerWidth/window.innerHeight,.1,3e5),i.position.set(0,0,800),i.position.z=66,r=new ol({alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(12632256,0),r.shadowMap.enabled=!0,r.shadowMap.type=Da,document.getElementById(n).appendChild(r.domElement),se(),Te(),await le(),z(),_e(),ge(ie,R),s=new Wn,s.rotation.z=q,t.add(s),a=new Wn,t.add(a),qe(),De(),Ze(),await Xe(),console.log("Initial tleArray:",c);const m=c.filter(L=>L.objType==="PAYLOAD");console.log("Filtered payload satellites:",m);const b=c.filter(L=>{var D;return((D=L.objType)==null?void 0:D.toUpperCase())==="PAYLOAD"});console.log("Case-insensitive filtered payload satellites:",b),F=x(m,new Cr,v==="smallScale"),s.add(F),ye("orbitClass"),fe(),ht(),window.addEventListener("resize",pt,!1),pt(),ke()}function z(){const m=new Wp(4210752,1);t.add(m),C=new Vp(5987163,100),C.castShadow=!0,t.add(C);const b=new Hp(16777147,526368,.5);t.add(b);const L=S*109*k,D=new Vn(L,24,24),I=new Cr({color:16776960,emissive:16753920,opacity:.25,transparent:!0,wireframe:!0,alphaHash:!0});o=new Ht(D,I),t.add(o);const Y=new Wn;t.add(Y),Y.add(o),Y.add(C)}function B(m){return m.getTime()/864e5+24405875e-1}function ge(m,b){const D=(B(m)-2451545)/36525,I=280.46646+D*(36000.76983+D*3032e-7),Y=357.52911+D*(35999.05029-1537e-7*D),te=(1.914602-D*(.004817+14e-6*D))*Math.sin(Y*(Math.PI/180))+(.019993-101e-6*D)*Math.sin(2*Y*(Math.PI/180))+289e-6*Math.sin(3*Y*(Math.PI/180)),de=I+te,we=23.44*(Math.PI/180),Ne=Math.cos(de*(Math.PI/180)),Be=Math.cos(we)*Math.sin(de*(Math.PI/180)),He=Math.sin(we)*Math.sin(de*(Math.PI/180)),Qe=1,ot=new O(Ne*Qe,He*Qe,-Be*Qe).multiplyScalar(b*1496e5);o.position.copy(ot),C.position.copy(ot),C.target.position.set(0,0,0),C.target.updateMatrixWorld()}function _e(){const m=1496e5*R*k;o.position.set(m,0,0),C.position.copy(o.position)}const ne=new vm;let he=0;const G=1e-5,Z=.002;function ve(){he+=G;const m=ne(he,0)*Z,b=ne(0,he)*Z,L=ne(he,he)*Z;o.rotation.x+=m,o.rotation.y+=b,o.rotation.z+=L}function De(){const m=S*.273,b=new ma({color:9079434,roughness:1,metalness:1.25}),L=new Vn(m,32,32);X=new Ht(L,b),a.add(X)}function Ue(){if(!X)return;const b=384400*R*k,D=ie.getTime()/1e3*N%(2*Math.PI),I=.0549,Y=b*(Math.cos(D)-I),te=b*Math.sin(D)*Math.sqrt(1-I**2);let de=new O(Y,0,te);const we=5.145*(Math.PI/180);de.applyAxisAngle(new O(1,0,0),we),de.applyAxisAngle(new O(0,0,1),q),X.position.copy(de)}let F;async function Xe(){var Y;const m=["PAYLOAD","ROCKET BODY","DEBRIS"],b={PAYLOAD:"cache/payload.json","ROCKET BODY":"cache/rocket_body.json",DEBRIS:"cache/debris.json"},L=m.map(te=>fetch(`https://orbital-bbfd.onrender.com/satellites/${te}`).then(de=>{if(!de.ok)throw new Error(`Failed to load ${te} GP data`);return de.json()}).then(de=>({type:te,satellites:de})).catch(de=>{console.warn(`Error fetching ${te} data from server, attempting local cache:`,de);const we=b[te.toUpperCase()];return fetch(we).then(Ne=>{if(!Ne.ok)throw new Error(`Failed to load local cache for ${te}`);return Ne.json()}).then(Ne=>(console.log(`Loaded ${te} data from local cache.`),{type:te,satellites:Ne})).catch(Ne=>(console.error(`Failed to load ${te} data from both server and local cache:`,Ne),{type:te,satellites:[]}))})),D=await Promise.all(L);console.log("Loaded GP data results:",D);const I=((Y=D.find(te=>te.type==="PAYLOAD"))==null?void 0:Y.satellites)||[];console.log("Payload data:",I),c=I,D.filter(te=>te.type!=="PAYLOAD").forEach(te=>{c.push(...te.satellites)}),console.log("Final tleArray after caching:",c),e()}const pe={orbitClass:{getClass:m=>m.orbitClass,colors:{geostationary:16777215,sunSynchronous:16776960,nonGeostationary:16711680,unknown:16711935}},ownerCountry:{getClass:m=>m.ownerCountry,colors:{US:255,PRC:16711680,Unknown:65280}},satelliteType:{getClass:m=>m.satelliteType,colors:{ROCKETBODY:65280,Weather:35071,DEBRIS:16746496}}};function Me(m,b){const{getClass:L,colors:D}=pe[m],I=L(b);return D[I]||16711680}function Le(m,b,L){if(!m||!m.count){console.error("InstancedMesh is not properly initialized.");return}const D=new ut,I=new Float32Array(m.count*3);L.forEach((Y,te)=>{if(te>=m.count){console.warn(`Instance index ${te} exceeds InstancedMesh count (${m.count}).`);return}if(!Y.metadata){console.warn(`Satellite at index ${te} is missing metadata. Skipping.`);return}const de=Me(b,Y.metadata),we=new Je(de);try{m.getMatrixAt(te,D.matrix)}catch(Ne){console.error(`Error accessing matrix for instance ${te}:`,Ne);return}D.updateMatrix(),m.setMatrixAt(te,D.matrix),I.set(we.toArray(),te*3)}),m.instanceColor=new Lr(I,3),m.instanceMatrix.needsUpdate=!0}let Fe="orbitClass";document.getElementById("orbit-class").addEventListener("click",()=>{ye("orbitClass")}),document.getElementById("owner-country").addEventListener("click",()=>{ye("ownerCountry")}),document.getElementById("payload-button").addEventListener("click",()=>{Pe("PAYLOAD")}),document.getElementById("rocket-body-button").addEventListener("click",()=>{Pe("ROCKET BODY")}),document.getElementById("debris-button").addEventListener("click",()=>{Pe("DEBRIS")});function ye(m){if(!F||!F.count){console.error("Satellite mesh is not initialized or empty. Cannot switch classification.");return}Fe=m;const b=c.filter(L=>L.objType===Ae);Le(F,Fe,b)}let Ae="PAYLOAD";function Pe(m){if(!F){console.error("Satellite mesh is not initialized. Cannot switch satellite type.");return}Ae=m;const b=c.filter(L=>L.objType===Ae);t.remove(F),F=x(b,F.material,v==="smallScale"),t.add(F),Le(F,Fe,b),console.log(`Switched to satellite type: ${Ae}`)}const Oe=new Ir,We=new ct;function T(m){i.updateMatrixWorld();const b=.9,L=i.projectionMatrix.clone();if(L.elements[0]*=b,L.elements[5]*=b,We.multiplyMatrices(L,i.matrixWorldInverse),Oe.setFromProjectionMatrix(We),!Oe.containsPoint(m))return!1;const D=new O(0,0,0),I=m.clone().sub(D).normalize(),Y=i.position.clone().sub(D).normalize();return!(I.dot(Y)<0)}function x(m,b,L=!1){console.log("Creating instanced mesh. Satellite count:",m.length);const D=m.length;if(D===0)return console.error("No satellites to create instanced mesh."),null;const I=L?new Vn(.002,4,4):new Vn(.004,2,3),Y=new Bp(I,b,D),te=new Float32Array(D*3),de=new ut;return Y.userData=[],m.forEach((we,Ne)=>{try{de.position.set(0,0,0),de.updateMatrix(),Y.setMatrixAt(Ne,de.matrix);const Be=new Je(Me(Fe,we.metadata));te.set(Be.toArray(),Ne*3),Y.userData[Ne]={tleLine1:we.tleLine1,tleLine2:we.tleLine2,metadata:we.metadata}}catch(Be){console.error(`Error initializing satellite ${we.name}:`,Be),Y.userData[Ne]=null}}),Y.instanceColor=new Lr(te,3),Y.instanceMatrix.needsUpdate=!0,Y.instanceColor.needsUpdate=!0,Y}function H(m,b,L){const D=Ta(m,ie);if(!D.position)return null;const I=um(D.position,b),Y=I.height*R*k,te=ba(I.latitude),de=Aa(I.longitude);let we=wt(te,de,S+Y);if(L){const Ne=ie.getTime()/1e3%86400*W;we.applyAxisAngle(new O(0,1,0),Ne)}return we}const oe=new Map;function re(m){if(!m||!m.instanceColor){console.error("InstancedMesh or its color buffer is not initialized.");return}const b=Ps(ie),L=new ut,D=m.instanceColor.array,I=new O(0,0,0);for(let Y=0;Y<m.count;Y++){const{tleLine1:te,tleLine2:de,metadata:we}=m.userData[Y];if(!te||!de){console.warn(`Missing TLE data for satellite at index ${Y}`);continue}let Ne;try{Ne=sm(te.trim(),de.trim())}catch(Qe){console.error(`Error creating satrec for satellite at index ${Y}:`,Qe);continue}const Be=H(Ne,b);if(!Be)continue;if(Be.applyAxisAngle(new O(0,0,1),q),m){const ot=ie.getTime()/1e3%86400*W%(2*Math.PI),et=new O(0,1,0).applyAxisAngle(new O(0,0,1),q);Be.applyAxisAngle(et,ot)}L.position.copy(Be),L.updateMatrix(),m.setMatrixAt(Y,L.matrix);const He=new Je(Me(Fe,we));D.set(He.toArray(),Y*3),v!=="smallScale"&&ce(Y,Be,I)}m.instanceMatrix.needsUpdate=!0,m.instanceColor.needsUpdate=!0}function ce(m,b,L){if(!T(b)){if(oe.has(m)){const te=oe.get(m);t.remove(te),te.geometry.dispose(),te.material.dispose(),oe.delete(m)}return}if(!oe.has(m)){const te=F.instanceColor.array,de=new Je(te[m*3],te[m*3+1],te[m*3+2]),we=new nn,Ne=new Float32Array(6);we.setAttribute("position",new kt(Ne,3));const Be=new Sr({color:de,transparent:!1,alphaHash:!0}),He=new Fi(we,Be);t.add(He),oe.set(m,He)}const I=oe.get(m),Y=I.geometry.attributes.position.array;Y[0]=L.x,Y[1]=L.y,Y[2]=L.z,Y[3]=b.x,Y[4]=b.y,Y[5]=b.z,I.geometry.attributes.position.needsUpdate=!0}function Te(){const m=window.innerWidth<=768;h.enabled?(h.minDistance=m?50:5,h.maxDistance=m?500:100):d.enabled?(d.minDistance=m?20:10,d.maxDistance=m?100:50):d.enabled?(g.minDistance=m?20:5,g.maxDistance=m?100:50):f.enabled&&(f.movementSpeed=m?2:5),i.position.z=m?E*y:E}let ie;const xe=1e3/24;let P=1e3;function le(){return fetch("https://orbital-bbfd.onrender.com/timestamp").then(m=>{if(!m.ok)throw new Error("Failed to fetch timestamps from server");return m.json()}).then(m=>{const b=Math.max(...Object.values(m).filter(D=>D>0)),L=m.PAYLOAD||null;if(!b&&!L)throw new Error("No valid timestamps found in server response");ie=new Date(b||L),document.getElementById("simulation-time").textContent=ie.toUTCString().replace("GMT","UTC")}).catch(m=>(console.error("Error loading timestamps from server, attempting local cache:",m),fetch("cache/timestamps.json").then(b=>{if(!b.ok)throw new Error("Failed to fetch timestamps from local cache");return b.json()}).then(b=>{const L=Math.max(...Object.values(b).filter(I=>I>0)),D=b.PAYLOAD||null;if(!L&&!D)throw new Error("No valid timestamps found in local cache");ie=new Date(L||D),document.getElementById("simulation-time").textContent=ie.toUTCString().replace("GMT","UTC")}).catch(b=>{console.error("Error loading timestamps from local cache, using hardcoded fallback:",b),ie=new Date("2024-11-01T00:00:00Z"),document.getElementById("simulation-time").textContent=ie.toUTCString().replace("GMT","UTC")})))}function J(){ie=new Date(ie.getTime()+xe*P);const m=ie.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=m,ge(ie,R)}function ze(){if(A){const b=ie.getTime()/1e3%86400*W%(2*Math.PI);s.rotation.set(0,0,0),s.rotateZ(q),s.rotateY(b)}}let Ce=new Xp,Se=0,Ee=1/24;function ke(){if(Se+=Ce.getDelta(),Se>Ee){if(j.begin(),l=requestAnimationFrame(ke),J(),ze(),Ie(),F&&re(F),Ue(),ve(),_e(),ge(ie,R),v==="fixed"){const{lat:m,lon:b}=chapterConfig.fixed.coordinates[U];(m!==p||b!==u)&&(Ge(m,b),p=m,u=b)}h.enabled&&h.update(),f.enabled&&f.update(Ce.getDelta()),g.enabled&&g.update(),r.render(t,i),j.end(),Se=Se%Ee}requestAnimationFrame(ke)}let U="newYork";const me={smallScale:{activate:()=>{$(h),h.enablePan=!1,i.lookAt(new O(0,0,0)),i.updateProjectionMatrix(),h.target.set(0,0,0),h.update(),tt("smallScale")}},largeScale:{activate:()=>{$(h),h.enablePan=!0,h.target.set(0,1,0);const m=i.position.distanceTo(h.target);h.minDistance=m,h.update(),tt("largeScale")}},fixed:{cities:{newYork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},tokyo:{lat:35.6895,lon:139.6917}},activate:m=>{const{lat:b,lon:L}=me.fixed.cities[m];Ge(b,L),$(f),tt("fixed")}}};let ae={position:new O,zoom:1};function K(){oe.forEach((m,b)=>{t.remove(m),m.geometry.dispose(),m.material.dispose()}),oe.clear()}function ue(m,b){v!==m&&(ae.position.copy(i.position),ae.zoom=i.zoom,m==="fixed"&&me.fixed.activate(b),m==="smallScale"?(K(),me[m].activate()):m==="largeScale"&&(me[m].activate(),i.position.copy(ae.position),i.zoom=ae.zoom,i.updateProjectionMatrix()),v=m)}function Ie(){const m=i.position.length(),b=S*8;m<b&&v!=="largeScale"?ue("largeScale"):m>=b&&v!=="smallScale"&&ue("smallScale")}function Ge(m,b){const D=wt(m,b,S);i.position.copy(D),i.lookAt(new O(0,0,0)),i.updateProjectionMatrix()}function Ze(){document.getElementById("chapter-smallScale").addEventListener("click",()=>ue("smallScale")),document.getElementById("chapter-largeScale").addEventListener("click",()=>ue("largeScale"))}function tt(m){var L;(L=me[m])!=null&&L.controls}function qe(){const m=new Vn(S,64,64),b=new ma({color:0,opacity:1,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:M});w=new Ht(m,b),w.castShadow=!0,w.receiveShadow=!0,s.add(w),s.add(F)}return ee(),{dispose(){window.removeEventListener("resize",pt),cancelAnimationFrame(l);const m=document.getElementById(n);m&&r.domElement&&m.removeChild(r.domElement)}};async function fe(){console.log("Attempting to load data...");const m=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_graticules_5.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson","data/ne_50m_ocean.geojson"];try{const b=m.map(L=>fetch(L).then(D=>{if(!D.ok)throw new Error(`Network response was not ok for ${L}`);return D.json()}).then(D=>(rt(L,D),"loaded")).catch(D=>{throw console.error(`Error loading ${L}:`,D),D}));await Promise.all(b),console.log("All GeoJSON data loaded successfully.")}catch(b){console.error("Failed to load some GeoJSON data:",b)}}function rt(m,b){switch(m){case"data/ne_110m_graticules_5.geojson":console.log("Loaded graticules:",b),Yt(b);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",b),_t(b);break;case"data/ne_110m_land.geojson":break;case"data/ne_50m_ocean.geojson":console.log("loaded ocean:",b);break;default:console.warn("Unrecognized GeoJSON URL:",m);break}}function _t(m){const b=new Sr({color:16777215,opacity:.75,alphaHash:!0}),L=1;m.features.forEach(D=>{const I=D.geometry.coordinates;if(D.geometry.type==="LineString"){const Y=je(I,L),te=new Fi(Y,b);s.add(te)}else D.geometry.type==="MultiLineString"&&I.forEach(Y=>{const te=je(Y,L),de=new Fi(te,b);s.add(de)})})}function Yt(m){const b=new Sr({color:4473924,opacity:.5,alphaHash:!0,visible:!0,transparent:!1}),L=S;m.features.forEach(D=>{const I=D.geometry.coordinates;if(D.geometry.type==="LineString"){const Y=je(I,L),te=new Fi(Y,b);s.add(te)}else D.geometry.type==="MultiLineString"&&I.forEach(Y=>{const te=je(Y,L),de=new Fi(te,b);s.add(de)})})}function je(m,b){const L=new nn,D=[];m.forEach(([Y,te])=>{const de=wt(te,Y,b);D.push(de.x,de.y,de.z)});const I=new Float32Array(D);return L.setAttribute("position",new kt(I,3)),L}function wt(m,b,L){const D=(90-m)*(Math.PI/180),I=(b+180)*(Math.PI/180),Y=-L*Math.sin(D)*Math.cos(I),te=L*Math.sin(D)*Math.sin(I),de=L*Math.cos(D);return new O(Y,de,te)}function Nt(m,b){let L;return function(...D){clearTimeout(L),L=setTimeout(()=>m.apply(this,D),b)}}function rn(m,b=2e4){const I=Math.log(1),te=(Math.log(b)-I)/100;return Math.exp(I+te*(m-0))}function Rt(m,b,L){return(Math.log10(m)-b)/(L-b)*100}function Ct(m,b,L){const D=b+m/100*(L-b);return Math.pow(10,D)}function ht(){const m=document.getElementById("exaggeration-slider"),b=document.getElementById("exaggeration-value"),L=1;function D(){return v==="fixed"?{minExp:Math.log10(.05),maxExp:Math.log10(1)}:{minExp:Math.log10(.1),maxExp:Math.log10(25)}}let{minExp:I,maxExp:Y}=D();m.value=Rt(L,I,Y),k=L,b.textContent=k.toFixed(2)+"x",m.addEventListener("input",He=>{const Qe=parseFloat(He.target.value);({minExp:I,maxExp:Y}=D()),k=Ct(Qe,I,Y),b.textContent=k.toFixed(2)+"x",F&&Nt(re(F),50)});const te=document.getElementById("speed-slider"),de=document.getElementById("speed-value"),we=1;te.value=0,P=we,de.textContent=P.toFixed(0)+"x";function Ne(){return v==="smallScale"?2e4:500}te.addEventListener("input",He=>{const Qe=parseFloat(He.target.value),ot=Ne();P=rn(Qe,ot),de.textContent=P.toFixed(0)+"x";let et=ie.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=et,document.getElementById("simulation-time").textContent=ie.toUTCString().replace("GMT","UTC")}),document.getElementById("reset-button").addEventListener("click",()=>{({minExp:I,maxExp:Y}=D()),m.value=Rt(L,I,Y),k=L,b.textContent=k.toFixed(2)+"x",te.value=0,P=we,de.textContent=P.toFixed(0)+"x",F&&Nt(re(F),50)})}function pt(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight);const m=window.innerWidth<=768;i.position.z=m?E*y:E}}const Am="threeContainer1",ks=document.createElement("div");ks.id="loadingOverlay";ks.innerHTML='<div id="loadingText">Loading</div>';document.body.appendChild(ks);function wm(){const n=document.getElementById("loadingText"),e=setInterval(()=>{n.textContent+="."},50);return console.log("Loading animation started"),()=>{clearInterval(e),console.log("Loading animation stopped")}}const Rm=wm();function Cm(){setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none",Rm()},100)}bm(Am,Cm);
