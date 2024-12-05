(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bs="158",$n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dl=0,Fs=1,fl=2,bo=1,Ao=2,dn=3,Rn=0,Ot=1,fn=2,bn=0,vi=1,Os=2,zs=3,Bs=4,pl=5,Fn=100,ml=101,gl=102,Gs=103,Hs=104,_l=200,vl=201,xl=202,Ml=203,ps=204,ms=205,Sl=206,El=207,yl=208,Tl=209,bl=210,Al=211,wl=212,Rl=213,Cl=214,Ll=0,Pl=1,Dl=2,Er=3,Ul=4,Il=5,Nl=6,Fl=7,wo=0,Ol=1,zl=2,An=0,Bl=1,Gl=2,Hl=3,Vl=4,kl=5,Ro=300,Mi=301,Si=302,gs=303,_s=304,Cr=306,vs=1e3,Qt=1001,xs=1002,Nt=1003,Vs=1004,Nr=1005,qt=1006,Wl=1007,Vi=1008,wn=1009,Xl=1010,ql=1011,As=1012,Co=1013,yn=1014,Tn=1015,ki=1016,Lo=1017,Po=1018,Vn=1020,Yl=1021,en=1023,jl=1024,Kl=1025,kn=1026,Ei=1027,Zl=1028,Do=1029,$l=1030,Uo=1031,Io=1033,Fr=33776,Or=33777,zr=33778,Br=33779,ks=35840,Ws=35841,Xs=35842,qs=35843,Jl=36196,Ys=37492,js=37496,Ks=37808,Zs=37809,$s=37810,Js=37811,Qs=37812,ea=37813,ta=37814,na=37815,ia=37816,ra=37817,sa=37818,aa=37819,oa=37820,la=37821,Gr=36492,ca=36494,ha=36495,Ql=36283,ua=36284,da=36285,fa=36286,No=3e3,Wn=3001,ec=3200,tc=3201,Fo=0,nc=1,jt="",wt="srgb",gn="srgb-linear",ws="display-p3",Lr="display-p3-linear",yr="linear",lt="srgb",Tr="rec709",br="p3",Qn=7680,pa=519,ic=512,rc=513,sc=514,ac=515,oc=516,lc=517,cc=518,hc=519,ma=35044,ga="300 es",Ms=1035,pn=2e3,Ar=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _a=1234567;const Bi=Math.PI/180,Wi=180/Math.PI;function Ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Rs(n,e){return(n%e+e)%e}function uc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function dc(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function fc(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function pc(n,e=1){return e-Math.abs(Rs(n,e*2)-e)}function mc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _c(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vc(n,e){return n+Math.random()*(e-n)}function xc(n){return n*(.5-Math.random())}function Mc(n){n!==void 0&&(_a=n);let e=_a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sc(n){return n*Bi}function Ec(n){return n*Wi}function Ss(n){return(n&n-1)===0&&n!==0}function yc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tc(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bc={DEG2RAD:Bi,RAD2DEG:Wi,generateUUID:Ti,clamp:Pt,euclideanModulo:Rs,mapLinear:uc,inverseLerp:dc,lerp:Gi,damp:fc,pingpong:pc,smoothstep:mc,smootherstep:gc,randInt:_c,randFloat:vc,randFloatSpread:xc,seededRandom:Mc,degToRad:Sc,radToDeg:Ec,isPowerOfTwo:Ss,ceilPowerOfTwo:yc,floorPowerOfTwo:wr,setQuaternionFromProperEuler:Tc,normalize:Ut,denormalize:gi};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],_=i[8],v=r[0],p=r[3],u=r[6],b=r[1],x=r[4],E=r[7],w=r[2],R=r[5],A=r[8];return s[0]=o*v+a*b+l*w,s[3]=o*p+a*x+l*R,s[6]=o*u+a*E+l*A,s[1]=c*v+h*b+d*w,s[4]=c*p+h*x+d*R,s[7]=c*u+h*E+d*A,s[2]=f*v+m*b+_*w,s[5]=f*p+m*x+_*R,s[8]=f*u+m*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,_=t*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new et;function Oo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ac(){const n=Rr("canvas");return n.style.display="block",n}const va={};function Hi(n){n in va||(va[n]=!0,console.warn(n))}const xa=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ma=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[gn]:{transfer:yr,primaries:Tr,toReference:n=>n,fromReference:n=>n},[wt]:{transfer:lt,primaries:Tr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lr]:{transfer:yr,primaries:br,toReference:n=>n.applyMatrix3(Ma),fromReference:n=>n.applyMatrix3(xa)},[ws]:{transfer:lt,primaries:br,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ma),fromReference:n=>n.applyMatrix3(xa).convertLinearToSRGB()}},wc=new Set([gn,Lr]),it={enabled:!0,_workingColorSpace:gn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ji[e].toReference,r=ji[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ji[n].primaries},getTransfer:function(n){return n===jt?yr:ji[n].transfer}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ei;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Rr("canvas")),ei.width=e.width,ei.height=e.height;const i=ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rc=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kr(r[o].image)):s.push(kr(r[o]))}else s=kr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class kt extends jn{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Qt,r=Qt,s=qt,o=Vi,a=en,l=wn,c=kt.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Ti(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wn?wt:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?Wn:No}set encoding(e){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wn?wt:jt}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ro;kt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(m+1)/2,w=(u+1)/2,R=(h+f)/4,A=(d+v)/4,k=(_+p)/4;return x>E&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=A/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=k/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=k/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(d-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lc extends jn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wn?wt:jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Lc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Go extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==m||h!==_){let p=1-a;const u=l*f+c*m+h*_+d*v,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const w=Math.sqrt(x),R=Math.atan2(w,u*b);p=Math.sin(p*R)/w,a=Math.sin(a*R)/w}const E=a*b;if(l=l*p+f*E,c=c*p+m*E,h=h*p+_*E,d=d*p+v*E,p===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+h*d+l*m-c*f,e[t+1]=l*_+h*f+c*d-a*m,e[t+2]=c*_+h*m+a*f-l*d,e[t+3]=h*_-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new O,Sa=new qn;class Kn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ki.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ki.copy(i.boundingBox)),Ki.applyMatrix4(e.matrixWorld),this.union(Ki)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),Zi.subVectors(this.max,Ci),ti.subVectors(e.a,Ci),ni.subVectors(e.b,Ci),ii.subVectors(e.c,Ci),_n.subVectors(ni,ti),vn.subVectors(ii,ni),Pn.subVectors(ti,ii);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Pn.z,Pn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Pn.z,0,-Pn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Pn.y,Pn.x,0];return!Xr(t,ti,ni,ii,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,ti,ni,ii,Zi))?!1:($i.crossVectors(_n,vn),t=[$i.x,$i.y,$i.z],Xr(t,ti,ni,ii,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new O,new O,new O,new O,new O,new O,new O,new O],Kt=new O,Ki=new Kn,ti=new O,ni=new O,ii=new O,_n=new O,vn=new O,Pn=new O,Ci=new O,Zi=new O,$i=new O,Dn=new O;function Xr(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dn.fromArray(n,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Dc=new Kn,Li=new O,qr=new O;class bi{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Li,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(qr)),this.expandByPoint(Li.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new O,Yr=new O,Ji=new O,xn=new O,jr=new O,Qi=new O,Kr=new O;class Cs{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yr.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Yr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ji),a=xn.dot(this.direction),l=-xn.dot(Ji),c=xn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=s*h,d>=0)if(f>=-_)if(f<=_){const v=1/h;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yr).addScaledVector(Ji,f),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,r,s){jr.subVectors(t,e),Qi.subVectors(i,e),Kr.crossVectors(jr,Qi);let o=this.direction.dot(Kr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const l=a*this.direction.dot(Qi.crossVectors(xn,Qi));if(l<0)return null;const c=a*this.direction.dot(jr.cross(xn));if(c<0||l+c>o)return null;const h=-a*xn.dot(Kr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,h,d,f,m,_,v,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,d,f,m,_,v,p)}set(e,t,i,r,s,o,a,l,c,h,d,f,m,_,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),o=1/ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,_=c*h,v=c*d;t[0]=f+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,_=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uc,e,Ic)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Mn.crossVectors(i,Bt),Mn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Mn.crossVectors(i,Bt)),Mn.normalize(),er.crossVectors(Bt,Mn),r[0]=Mn.x,r[4]=er.x,r[8]=Bt.x,r[1]=Mn.y,r[5]=er.y,r[9]=Bt.y,r[2]=Mn.z,r[6]=er.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],u=i[14],b=i[3],x=i[7],E=i[11],w=i[15],R=r[0],A=r[4],k=r[8],M=r[12],T=r[1],W=r[5],q=r[9],ee=r[13],P=r[2],G=r[6],X=r[10],Y=r[14],ie=r[3],J=r[7],Q=r[11],D=r[15];return s[0]=o*R+a*T+l*P+c*ie,s[4]=o*A+a*W+l*G+c*J,s[8]=o*k+a*q+l*X+c*Q,s[12]=o*M+a*ee+l*Y+c*D,s[1]=h*R+d*T+f*P+m*ie,s[5]=h*A+d*W+f*G+m*J,s[9]=h*k+d*q+f*X+m*Q,s[13]=h*M+d*ee+f*Y+m*D,s[2]=_*R+v*T+p*P+u*ie,s[6]=_*A+v*W+p*G+u*J,s[10]=_*k+v*q+p*X+u*Q,s[14]=_*M+v*ee+p*Y+u*D,s[3]=b*R+x*T+E*P+w*ie,s[7]=b*A+x*W+E*G+w*J,s[11]=b*k+x*q+E*X+w*Q,s[15]=b*M+x*ee+E*Y+w*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+v*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],u=e[15],b=d*p*c-v*f*c+v*l*m-a*p*m-d*l*u+a*f*u,x=_*f*c-h*p*c-_*l*m+o*p*m+h*l*u-o*f*u,E=h*v*c-_*d*c+_*a*m-o*v*m-h*a*u+o*d*u,w=_*d*l-h*v*l-_*a*f+o*v*f+h*a*p-o*d*p,R=t*b+i*x+r*E+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(v*f*s-d*p*s-v*r*m+i*p*m+d*r*u-i*f*u)*A,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*u+i*l*u)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*A,e[4]=x*A,e[5]=(h*p*s-_*f*s+_*r*m-t*p*m-h*r*u+t*f*u)*A,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*u-t*l*u)*A,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*A,e[8]=E*A,e[9]=(_*d*s-h*v*s-_*i*m+t*v*m+h*i*u-t*d*u)*A,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*u+t*a*u)*A,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*m-t*a*m)*A,e[12]=w*A,e[13]=(h*v*r-_*d*r+_*i*f-t*v*f-h*i*p+t*d*p)*A,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*p-t*a*p)*A,e[15]=(o*d*r-h*a*r+h*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,_=s*d,v=o*h,p=o*d,u=a*d,b=l*c,x=l*h,E=l*d,w=i.x,R=i.y,A=i.z;return r[0]=(1-(v+u))*w,r[1]=(m+E)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(f+u))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(_+x)*A,r[9]=(p-b)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ri.set(r[0],r[1],r[2]).length();const o=ri.set(r[4],r[5],r[6]).length(),a=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,h=1/o,d=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=pn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(a===pn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ar)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pn){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-s),f=(t+e)*c,m=(i+r)*h;let _,v;if(a===pn)_=(o+s)*d,v=-2*d;else if(a===Ar)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ri=new O,Zt=new ut,Uc=new O(0,0,0),Ic=new O(1,1,1),Mn=new O,er=new O,Bt=new O,Ea=new ut,ya=new qn;class Pr{constructor(e=0,t=0,i=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ea,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nc=0;const Ta=new O,si=new qn,cn=new ut,tr=new O,Pi=new O,Fc=new O,Oc=new qn,ba=new O(1,0,0),Aa=new O(0,1,0),wa=new O(0,0,1),zc={type:"added"},Bc={type:"removed"};class pt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new O,t=new Pr,i=new qn,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new et}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(ba,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(wa,e)}translateOnAxis(e,t){return Ta.copy(e).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ba,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tr.copy(e):tr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Pi,tr,this.up):cn.lookAt(tr,Pi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),si.setFromRotationMatrix(cn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,Fc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pt.DEFAULT_UP=new O(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new O,hn=new O,Zr=new O,un=new O,ai=new O,oi=new O,Ra=new O,$r=new O,Jr=new O,Qr=new O;let nr=!1;class Jt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$t.subVectors(r,t),hn.subVectors(i,t),Zr.subVectors(e,t);const o=$t.dot($t),a=$t.dot(hn),l=$t.dot(Zr),c=hn.dot(hn),h=hn.dot(Zr),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,i,r,s,o,a,l){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,un),l.setScalar(0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l}static isFrontFacing(e,t,i,r){return $t.subVectors(i,t),hn.subVectors(e,t),$t.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$t.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ai.subVectors(r,i),oi.subVectors(s,i),$r.subVectors(e,i);const l=ai.dot($r),c=oi.dot($r);if(l<=0&&c<=0)return t.copy(i);Jr.subVectors(e,r);const h=ai.dot(Jr),d=oi.dot(Jr);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ai,o);Qr.subVectors(e,s);const m=ai.dot(Qr),_=oi.dot(Qr);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(oi,a);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Ra.subVectors(s,r),a=(d-h)/(d-h+(m-_)),t.copy(r).addScaledVector(Ra,a);const u=1/(p+v+f);return o=v*u,a=f*u,t.copy(i).addScaledVector(ai,o).addScaledVector(oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function es(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Rs(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=es(o,s,e+1/3),this.g=es(o,s,e),this.b=es(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const i=Vo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return it.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Pt(Lt.r*255,0,255))*65536+Math.round(Pt(Lt.g*255,0,255))*256+Math.round(Pt(Lt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=wt){it.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(ir);const i=Gi(Sn.h,ir.h,t),r=Gi(Sn.s,ir.s,t),s=Gi(Sn.l,ir.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new tt;tt.NAMES=Vo;let Gc=0;class Ai extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=vi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ps,this.blendDst=ms,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ps&&(i.blendSrc=this.blendSrc),this.blendDst!==ms&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ls extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,rr=new $e;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ma,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ko extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wo extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hc=0;const Xt=new ut,ts=new pt,li=new O,Gt=new Kn,Di=new Kn,Et=new O;class nn extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oo(e)?Wo:ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return ts.lookAt(e),ts.updateMatrix(),this.applyMatrix4(ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Gt.min,Di.min),Gt.expandByPoint(Et),Et.addVectors(Gt.max,Di.max),Gt.expandByPoint(Et)):(Gt.expandByPoint(Di.min),Gt.expandByPoint(Di.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Et.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(e,c),Et.add(li)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new O,h[T]=new O;const d=new O,f=new O,m=new O,_=new $e,v=new $e,p=new $e,u=new O,b=new O;function x(T,W,q){d.fromArray(r,T*3),f.fromArray(r,W*3),m.fromArray(r,q*3),_.fromArray(o,T*2),v.fromArray(o,W*2),p.fromArray(o,q*2),f.sub(d),m.sub(d),v.sub(_),p.sub(_);const ee=1/(v.x*p.y-p.x*v.y);isFinite(ee)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ee),b.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(ee),c[T].add(u),c[W].add(u),c[q].add(u),h[T].add(b),h[W].add(b),h[q].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,W=E.length;T<W;++T){const q=E[T],ee=q.start,P=q.count;for(let G=ee,X=ee+P;G<X;G+=3)x(i[G+0],i[G+1],i[G+2])}const w=new O,R=new O,A=new O,k=new O;function M(T){A.fromArray(s,T*3),k.copy(A);const W=c[T];w.copy(W),w.sub(A.multiplyScalar(A.dot(W))).normalize(),R.crossVectors(k,W);const ee=R.dot(h[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=ee}for(let T=0,W=E.length;T<W;++T){const q=E[T],ee=q.start,P=q.count;for(let G=ee,X=ee+P;G<X;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new Wt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ca=new ut,Un=new Cs,sr=new bi,La=new O,ci=new O,hi=new O,ui=new O,ns=new O,ar=new O,or=new $e,lr=new $e,cr=new $e,Pa=new O,Da=new O,Ua=new O,hr=new O,ur=new O;class Vt extends pt{constructor(e=new nn,t=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ar.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(ns.fromBufferAttribute(d,e),o?ar.addScaledVector(ns,h):ar.addScaledVector(ns.sub(t),h))}t.add(ar)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(sr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(sr,La)===null||Un.origin.distanceToSquared(La)>(e.far-e.near)**2))&&(Ca.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Ca),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,w=x;E<w;E+=3){const R=a.getX(E),A=a.getX(E+1),k=a.getX(E+2);r=dr(this,u,e,i,c,h,d,R,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,u=v;p<u;p+=3){const b=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);r=dr(this,o,e,i,c,h,d,b,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,w=x;E<w;E+=3){const R=E,A=E+1,k=E+2;r=dr(this,u,e,i,c,h,d,R,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,u=v;p<u;p+=3){const b=p,x=p+1,E=p+2;r=dr(this,o,e,i,c,h,d,b,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Vc(n,e,t,i,r,s,o,a){let l;if(e.side===Ot?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rn,a),l===null)return null;ur.copy(a),ur.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ur);return c<t.near||c>t.far?null:{distance:c,point:ur.clone(),object:n}}function dr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ci),n.getVertexPosition(l,hi),n.getVertexPosition(c,ui);const h=Vc(n,e,t,i,ci,hi,ui,hr);if(h){r&&(or.fromBufferAttribute(r,a),lr.fromBufferAttribute(r,l),cr.fromBufferAttribute(r,c),h.uv=Jt.getInterpolation(hr,ci,hi,ui,or,lr,cr,new $e)),s&&(or.fromBufferAttribute(s,a),lr.fromBufferAttribute(s,l),cr.fromBufferAttribute(s,c),h.uv1=Jt.getInterpolation(hr,ci,hi,ui,or,lr,cr,new $e),h.uv2=h.uv1),o&&(Pa.fromBufferAttribute(o,a),Da.fromBufferAttribute(o,l),Ua.fromBufferAttribute(o,c),h.normal=Jt.getInterpolation(hr,ci,hi,ui,Pa,Da,Ua,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Jt.getNormal(ci,hi,ui,d.normal),h.face=d}return h}class qi extends nn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(d,2));function _(v,p,u,b,x,E,w,R,A,k,M){const T=E/A,W=w/k,q=E/2,ee=w/2,P=R/2,G=A+1,X=k+1;let Y=0,ie=0;const J=new O;for(let Q=0;Q<X;Q++){const D=Q*W-ee;for(let U=0;U<G;U++){const ue=U*T-q;J[v]=ue*b,J[p]=D*x,J[u]=P,c.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[u]=R>0?1:-1,h.push(J.x,J.y,J.z),d.push(U/A),d.push(1-Q/k),Y+=1}}for(let Q=0;Q<k;Q++)for(let D=0;D<A;D++){const U=f+D+G*Q,ue=f+D+G*(Q+1),pe=f+(D+1)+G*(Q+1),te=f+(D+1)+G*Q;l.push(U,ue,te),l.push(ue,pe,te),ie+=6}a.addGroup(m,ie,M),m+=ie,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=yi(n[t]);for(const r in i)e[r]=i[r]}return e}function kc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xo(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}const Wc={clone:yi,merge:It};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qo extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends qo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,fi=1;class Yc extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(di,fi,e,t);r.layers=this.layers,this.add(r);const s=new Yt(di,fi,e,t);s.layers=this.layers,this.add(s);const o=new Yt(di,fi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(di,fi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(di,fi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(di,fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Yo extends kt{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jc extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wn?wt:jt),this.texture=new Yo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qi(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:bn});s.uniforms.tEquirect.value=t;const o=new Vt(r,s),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=qt),new Yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const is=new O,Kc=new O,Zc=new et;class En{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=is.subVectors(i,t).cross(Kc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(is),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zc.getNormalMatrix(e),r=this.coplanarPoint(is).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new bi,fr=new O;class Dr{constructor(e=new En,t=new En,i=new En,r=new En,s=new En,o=new En){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],u=r[12],b=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,p-m,E-u).normalize(),i[1].setComponents(l+s,f+c,p+m,E+u).normalize(),i[2].setComponents(l+o,f+h,p+_,E+b).normalize(),i[3].setComponents(l-o,f-h,p-_,E-b).normalize(),i[4].setComponents(l-a,f-d,p-v,E-x).normalize(),t===pn)i[5].setComponents(l+a,f+d,p+v,E+x).normalize();else if(t===Ar)i[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fr.x=r.normal.x>0?e.max.x:e.min.x,fr.y=r.normal.y>0?e.max.y:e.min.y,fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jo(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $c(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const f=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Ps extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,m=[],_=[],v=[],p=[];for(let u=0;u<h;u++){const b=u*f-o;for(let x=0;x<c;x++){const E=x*d-s;_.push(E,-b,0),v.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const x=b+c*u,E=b+c*(u+1),w=b+1+c*(u+1),R=b+1+c*u;m.push(x,E,R),m.push(E,w,R)}this.setIndex(m),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
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
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rh=`#ifdef USE_AOMAP
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
#endif`,sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ch=`#ifdef USE_IRIDESCENCE
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
#endif`,hh=`#ifdef USE_BUMPMAP
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
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
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
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`
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
}`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
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
}`,zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
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
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
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
#endif`,Kh=`struct PhysicalMaterial {
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
}`,Zh=`
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
#endif`,$h=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,au=`#if defined( USE_POINTS_UV )
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
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hu=`#ifdef USE_MORPHNORMALS
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
#endif`,uu=`#ifdef USE_MORPHTARGETS
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
#endif`,du=`#ifdef USE_MORPHTARGETS
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
#endif`,fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vu=`#ifdef USE_NORMALMAP
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
#endif`,xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iu=`float getShadowMask() {
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
}`,Nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Ou=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
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
#endif`,Bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ku=`#ifdef USE_TRANSMISSION
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
#endif`,Wu=`#ifdef USE_TRANSMISSION
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zu=`uniform sampler2D t2D;
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`#include <common>
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
}`,nd=`#if DEPTH_PACKING == 3200
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
}`,id=`#define DISTANCE
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
}`,rd=`#define DISTANCE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`uniform float scale;
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#include <common>
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
}`,hd=`uniform vec3 diffuse;
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
}`,ud=`#define LAMBERT
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
}`,dd=`#define LAMBERT
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
}`,fd=`#define MATCAP
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
}`,pd=`#define MATCAP
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
}`,md=`#define NORMAL
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
}`,gd=`#define NORMAL
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
}`,_d=`#define PHONG
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
}`,vd=`#define PHONG
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
}`,xd=`#define STANDARD
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
}`,Md=`#define STANDARD
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
}`,Sd=`#define TOON
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
}`,Ed=`#define TOON
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
}`,yd=`uniform float size;
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
}`,Td=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,Ad=`uniform vec3 color;
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
}`,wd=`uniform float rotation;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Jc,alphahash_pars_fragment:Qc,alphamap_fragment:eh,alphamap_pars_fragment:th,alphatest_fragment:nh,alphatest_pars_fragment:ih,aomap_fragment:rh,aomap_pars_fragment:sh,begin_vertex:ah,beginnormal_vertex:oh,bsdfs:lh,iridescence_fragment:ch,bumpmap_pars_fragment:hh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:_h,color_vertex:vh,common:xh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:Eh,displacementmap_vertex:yh,emissivemap_fragment:Th,emissivemap_pars_fragment:bh,colorspace_fragment:Ah,colorspace_pars_fragment:wh,envmap_fragment:Rh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Lh,envmap_pars_vertex:Ph,envmap_physical_pars_fragment:kh,envmap_vertex:Dh,fog_vertex:Uh,fog_pars_vertex:Ih,fog_fragment:Nh,fog_pars_fragment:Fh,gradientmap_pars_fragment:Oh,lightmap_fragment:zh,lightmap_pars_fragment:Bh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Vh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:Yh,lights_physical_fragment:jh,lights_physical_pars_fragment:Kh,lights_fragment_begin:Zh,lights_fragment_maps:$h,lights_fragment_end:Jh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:tu,logdepthbuf_vertex:nu,map_fragment:iu,map_pars_fragment:ru,map_particle_fragment:su,map_particle_pars_fragment:au,metalnessmap_fragment:ou,metalnessmap_pars_fragment:lu,morphcolor_vertex:cu,morphnormal_vertex:hu,morphtarget_pars_vertex:uu,morphtarget_vertex:du,normal_fragment_begin:fu,normal_fragment_maps:pu,normal_pars_fragment:mu,normal_pars_vertex:gu,normal_vertex:_u,normalmap_pars_fragment:vu,clearcoat_normal_fragment_begin:xu,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:Su,iridescence_pars_fragment:Eu,opaque_fragment:yu,packing:Tu,premultiplied_alpha_fragment:bu,project_vertex:Au,dithering_fragment:wu,dithering_pars_fragment:Ru,roughnessmap_fragment:Cu,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Pu,shadowmap_pars_vertex:Du,shadowmap_vertex:Uu,shadowmask_pars_fragment:Iu,skinbase_vertex:Nu,skinning_pars_vertex:Fu,skinning_vertex:Ou,skinnormal_vertex:zu,specularmap_fragment:Bu,specularmap_pars_fragment:Gu,tonemapping_fragment:Hu,tonemapping_pars_fragment:Vu,transmission_fragment:ku,transmission_pars_fragment:Wu,uv_pars_fragment:Xu,uv_pars_vertex:qu,uv_vertex:Yu,worldpos_vertex:ju,background_vert:Ku,background_frag:Zu,backgroundCube_vert:$u,backgroundCube_frag:Ju,cube_vert:Qu,cube_frag:ed,depth_vert:td,depth_frag:nd,distanceRGBA_vert:id,distanceRGBA_frag:rd,equirect_vert:sd,equirect_frag:ad,linedashed_vert:od,linedashed_frag:ld,meshbasic_vert:cd,meshbasic_frag:hd,meshlambert_vert:ud,meshlambert_frag:dd,meshmatcap_vert:fd,meshmatcap_frag:pd,meshnormal_vert:md,meshnormal_frag:gd,meshphong_vert:_d,meshphong_frag:vd,meshphysical_vert:xd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:Ed,points_vert:yd,points_frag:Td,shadow_vert:bd,shadow_frag:Ad,sprite_vert:wd,sprite_frag:Rd},Re={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},rn={basic:{uniforms:It([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:It([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:It([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:It([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:It([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:It([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:It([Re.points,Re.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:It([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:It([Re.common,Re.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:It([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:It([Re.sprite,Re.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:It([Re.common,Re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:It([Re.lights,Re.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};rn.physical={uniforms:It([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const pr={r:0,b:0,g:0};function Cd(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function _(p,u){let b=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Cr)?(h===void 0&&(h=new Vt(new qi(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:yi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=it.getTransfer(x.colorSpace)!==lt,(d!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Vt(new Ps(2,2),new Yn({name:"BackgroundMaterial",uniforms:yi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(pr,Xo(n)),i.buffers.color.setClear(pr.r,pr.g,pr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_}}function Ld(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function d(P,G,X,Y,ie){let J=!1;if(o){const Q=v(Y,X,G);c!==Q&&(c=Q,m(c.object)),J=u(P,Y,X,ie),J&&b(P,Y,X,ie)}else{const Q=G.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==Q)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=Q,J=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,k(P,G,X,Y),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,G,X){const Y=X.wireframe===!0;let ie=a[P.id];ie===void 0&&(ie={},a[P.id]=ie);let J=ie[G.id];J===void 0&&(J={},ie[G.id]=J);let Q=J[Y];return Q===void 0&&(Q=p(f()),J[Y]=Q),Q}function p(P){const G=[],X=[],Y=[];for(let ie=0;ie<r;ie++)G[ie]=0,X[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:Y,object:P,attributes:{},index:null}}function u(P,G,X,Y){const ie=c.attributes,J=G.attributes;let Q=0;const D=X.getAttributes();for(const U in D)if(D[U].location>=0){const pe=ie[U];let te=J[U];if(te===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),pe===void 0||pe.attribute!==te||te&&pe.data!==te.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Y}function b(P,G,X,Y){const ie={},J=G.attributes;let Q=0;const D=X.getAttributes();for(const U in D)if(D[U].location>=0){let pe=J[U];pe===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));const te={};te.attribute=pe,pe&&pe.data&&(te.data=pe.data),ie[U]=te,Q++}c.attributes=ie,c.attributesNum=Q,c.index=Y}function x(){const P=c.newAttributes;for(let G=0,X=P.length;G<X;G++)P[G]=0}function E(P){w(P,0)}function w(P,G){const X=c.newAttributes,Y=c.enabledAttributes,ie=c.attributeDivisors;X[P]=1,Y[P]===0&&(n.enableVertexAttribArray(P),Y[P]=1),ie[P]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),ie[P]=G)}function R(){const P=c.newAttributes,G=c.enabledAttributes;for(let X=0,Y=G.length;X<Y;X++)G[X]!==P[X]&&(n.disableVertexAttribArray(X),G[X]=0)}function A(P,G,X,Y,ie,J,Q){Q===!0?n.vertexAttribIPointer(P,G,X,ie,J):n.vertexAttribPointer(P,G,X,Y,ie,J)}function k(P,G,X,Y){if(i.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ie=Y.attributes,J=X.getAttributes(),Q=G.defaultAttributeValues;for(const D in J){const U=J[D];if(U.location>=0){let ue=ie[D];if(ue===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){const pe=ue.normalized,te=ue.itemSize,fe=t.get(ue);if(fe===void 0)continue;const Ue=fe.buffer,ve=fe.type,De=fe.bytesPerElement,He=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||ue.gpuType===Co);if(ue.isInterleavedBufferAttribute){const Fe=ue.data,I=Fe.stride,Ze=ue.offset;if(Fe.isInstancedInterleavedBuffer){for(let ce=0;ce<U.locationSize;ce++)w(U.location+ce,Fe.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let ce=0;ce<U.locationSize;ce++)E(U.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ce=0;ce<U.locationSize;ce++)A(U.location+ce,te/U.locationSize,ve,pe,I*De,(Ze+te/U.locationSize*ce)*De,He)}else{if(ue.isInstancedBufferAttribute){for(let Fe=0;Fe<U.locationSize;Fe++)w(U.location+Fe,ue.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<U.locationSize;Fe++)E(U.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Fe=0;Fe<U.locationSize;Fe++)A(U.location+Fe,te/U.locationSize,ve,pe,te*De,te/U.locationSize*Fe*De,He)}}else if(Q!==void 0){const pe=Q[D];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(U.location,pe);break;case 3:n.vertexAttrib3fv(U.location,pe);break;case 4:n.vertexAttrib4fv(U.location,pe);break;default:n.vertexAttrib1fv(U.location,pe)}}}}R()}function M(){q();for(const P in a){const G=a[P];for(const X in G){const Y=G[X];for(const ie in Y)_(Y[ie].object),delete Y[ie];delete G[X]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const G=a[P.id];for(const X in G){const Y=G[X];for(const ie in Y)_(Y[ie].object),delete Y[ie];delete G[X]}delete a[P.id]}function W(P){for(const G in a){const X=a[G];if(X[P.id]===void 0)continue;const Y=X[P.id];for(const ie in Y)_(Y[ie].object),delete Y[ie];delete X[P.id]}}function q(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:E,disableUnusedAttributes:R}}function Pd(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Dd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||e.has("OES_texture_float"),w=x&&E,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:R}}function Ud(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new En,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?h(null):c();else{const b=s?0:i,x=b*4;let E=u.clippingState||null;l.value=E,E=h(_,f,x,m);for(let w=0;w!==x;++w)E[w]=t[w];u.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const u=m+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,E=m;x!==v;++x,E+=4)o.copy(d[x]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Id(n){let e=new WeakMap;function t(o,a){return a===gs?o.mapping=Mi:a===_s&&(o.mapping=Si),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===gs||a===_s)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ko extends qo{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,Ia=[.125,.215,.35,.446,.526,.582],On=20,rs=new Ko,Na=new tt;let ss=null,as=0,os=0;const Nn=(1+Math.sqrt(5))/2,pi=1/Nn,Fa=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Nn,pi),new O(0,Nn,-pi),new O(pi,0,Nn),new O(-pi,0,Nn),new O(Nn,pi,0),new O(-Nn,pi,0)];class Oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ss,as,os),e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:ki,format:en,colorSpace:gn,depthBuffer:!1},r=za(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(s)),this._blurMaterial=Fd(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,i,r){const a=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Na),h.toneMapping=An,h.autoClear=!1;const m=new Ls({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new Vt(new qi,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Na),v=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;mr(r,b*x,u>2?x:0,x,x),h.setRenderTarget(r),v&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mi||e.mapping===Si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;mr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fa[(r-1)%Fa.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Vt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*On-1),v=s/_,p=isFinite(s)?1+Math.floor(h*v):On;p>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const u=[];let b=0;for(let A=0;A<On;++A){const k=A/v,M=Math.exp(-k*k/2);u.push(M),A===0?b+=M:A<p&&(b+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const E=this._sizeLods[r],w=3*E*(r>x-_i?r-x+_i:0),R=4*(this._cubeSize-E);mr(t,w,R,3*E,2*E),l.setRenderTarget(t),l.render(d,rs)}}function Nd(n){const e=[],t=[],i=[];let r=n;const s=n-_i+1+Ia.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_i?l=Ia[o-n+_i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,v=3,p=2,u=1,b=new Float32Array(v*_*m),x=new Float32Array(p*_*m),E=new Float32Array(u*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,k=R>2?0:-1,M=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];b.set(M,v*_*R),x.set(f,p*_*R);const T=[R,R,R,R,R,R];E.set(T,u*_*R)}const w=new nn;w.setAttribute("position",new Wt(b,v)),w.setAttribute("uv",new Wt(x,p)),w.setAttribute("faceIndex",new Wt(E,u)),e.push(w),r>_i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function za(n,e,t){const i=new Xn(n,e,t);return i.texture.mapping=Cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fd(n,e,t){const i=new Float32Array(On),r=new O(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ds(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ba(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ds(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ga(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ds(){return`

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
	`}function Od(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gs||l===_s,h=l===Mi||l===Si;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Oa(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Oa(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bd(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,u=v.length;p<u;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let x=0,E=b.length;x<E;x+=3){const w=b[x+0],R=b[x+1],A=b[x+2];f.push(w,R,R,A,A,w)}}else if(_!==void 0){const b=_.array;v=_.version;for(let x=0,E=b.length/3-1;x<E;x+=3){const w=x+0,R=x+1,A=x+2;f.push(w,R,R,A,A,w)}}else return;const p=new(Oo(f)?Wo:ko)(f,1);p.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Gd(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,_){if(_===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Hd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Vd(n,e){return n[0]-e[0]}function kd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wd(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let p=s.get(h);if(p===void 0||p.count!==v){let G=function(){ee.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),E===!0&&(M=2),w===!0&&(M=3);let T=h.attributes.position.count*M,W=1;T>e.maxTextureSize&&(W=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*W*4*v),ee=new Go(q,T,W,v);ee.type=Tn,ee.needsUpdate=!0;const P=M*4;for(let X=0;X<v;X++){const Y=R[X],ie=A[X],J=k[X],Q=T*W*4*X;for(let D=0;D<Y.count;D++){const U=D*P;x===!0&&(o.fromBufferAttribute(Y,D),q[Q+U+0]=o.x,q[Q+U+1]=o.y,q[Q+U+2]=o.z,q[Q+U+3]=0),E===!0&&(o.fromBufferAttribute(ie,D),q[Q+U+4]=o.x,q[Q+U+5]=o.y,q[Q+U+6]=o.z,q[Q+U+7]=0),w===!0&&(o.fromBufferAttribute(J,D),q[Q+U+8]=o.x,q[Q+U+9]=o.y,q[Q+U+10]=o.z,q[Q+U+11]=J.itemSize===4?o.w:1)}}p={count:v,texture:ee,size:new $e(T,W)},s.set(h,p),h.addEventListener("dispose",G)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let v=i[h.id];if(v===void 0||v.length!==_){v=[];for(let E=0;E<_;E++)v[E]=[E,0];i[h.id]=v}for(let E=0;E<_;E++){const w=v[E];w[0]=E,w[1]=f[E]}v.sort(kd);for(let E=0;E<8;E++)E<_&&v[E][1]?(a[E][0]=v[E][0],a[E][1]=v[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Vd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const w=a[E],R=w[0],A=w[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+E)!==p[R]&&h.setAttribute("morphTarget"+E,p[R]),u&&h.getAttribute("morphNormal"+E)!==u[R]&&h.setAttribute("morphNormal"+E,u[R]),r[E]=A,b+=A):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),u&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const x=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Xd(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Zo=new kt,$o=new Go,Jo=new Pc,Qo=new Yo,Ha=[],Va=[],ka=new Float32Array(16),Wa=new Float32Array(9),Xa=new Float32Array(4);function wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ha[r];if(s===void 0&&(s=new Float32Array(r),Ha[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ur(n,e){let t=Va[e];t===void 0&&(t=new Int32Array(e),Va[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function jd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Zd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Xa.set(i),n.uniformMatrix2fv(this.addr,!1,Xa),Mt(t,i)}}function $d(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Wa.set(i),n.uniformMatrix3fv(this.addr,!1,Wa),Mt(t,i)}}function Jd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;ka.set(i),n.uniformMatrix4fv(this.addr,!1,ka),Mt(t,i)}}function Qd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function rf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function lf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Zo,r)}function cf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jo,r)}function hf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qo,r)}function uf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$o,r)}function df(n){switch(n){case 5126:return qd;case 35664:return Yd;case 35665:return jd;case 35666:return Kd;case 35674:return Zd;case 35675:return $d;case 35676:return Jd;case 5124:case 35670:return Qd;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return rf;case 36294:return sf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return hf;case 36289:case 36303:case 36311:case 36292:return uf}}function ff(n,e){n.uniform1fv(this.addr,e)}function pf(n,e){const t=wi(e,this.size,2);n.uniform2fv(this.addr,t)}function mf(n,e){const t=wi(e,this.size,3);n.uniform3fv(this.addr,t)}function gf(n,e){const t=wi(e,this.size,4);n.uniform4fv(this.addr,t)}function _f(n,e){const t=wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vf(n,e){const t=wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xf(n,e){const t=wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mf(n,e){n.uniform1iv(this.addr,e)}function Sf(n,e){n.uniform2iv(this.addr,e)}function Ef(n,e){n.uniform3iv(this.addr,e)}function yf(n,e){n.uniform4iv(this.addr,e)}function Tf(n,e){n.uniform1uiv(this.addr,e)}function bf(n,e){n.uniform2uiv(this.addr,e)}function Af(n,e){n.uniform3uiv(this.addr,e)}function wf(n,e){n.uniform4uiv(this.addr,e)}function Rf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zo,s[o])}function Cf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Jo,s[o])}function Lf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Qo,s[o])}function Pf(n,e,t){const i=this.cache,r=e.length,s=Ur(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$o,s[o])}function Df(n){switch(n){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return yf;case 5125:return Tf;case 36294:return bf;case 36295:return Af;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Pf}}class Uf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=df(t.type)}}class If{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Df(t.type)}}class Nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function qa(n,e){n.seq.push(e),n.map[e.id]=e}function Ff(n,e,t){const i=n.name,r=i.length;for(ls.lastIndex=0;;){const s=ls.exec(i),o=ls.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qa(t,c===void 0?new Uf(a,n,e):new If(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Nf(a),qa(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ff(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ya(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Of=37297;let zf=0;function Bf(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Gf(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===br&&t===Tr?i="LinearDisplayP3ToLinearSRGB":e===Tr&&t===br&&(i="LinearSRGBToLinearDisplayP3"),n){case gn:case Lr:return[i,"LinearTransferOETF"];case wt:case ws:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ja(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bf(n.getShaderSource(e),o)}else return r}function Hf(n,e){const t=Gf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vf(n,e){let t;switch(e){case Bl:t="Linear";break;case Gl:t="Reinhard";break;case Hl:t="OptimizedCineon";break;case Vl:t="ACESFilmic";break;case kl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function Wf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oi(n){return n!==""}function Ka(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Za(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Es(n){return n.replace(qf,jf)}const Yf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jf(n,e){let t=Qe[e];if(t===void 0){const i=Yf.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Es(t)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(n){return n.replace(Kf,Zf)}function Zf(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ja(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $f(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jf(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case Si:e="ENVMAP_TYPE_CUBE";break;case Cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qf(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function ep(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ol:e="ENVMAP_BLENDING_MIX";break;case zl:e="ENVMAP_BLENDING_ADD";break}return e}function tp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function np(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$f(t),c=Jf(t),h=Qf(t),d=ep(t),f=tp(t),m=t.isWebGL2?"":kf(t),_=Wf(s),v=r.createProgram();let p,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),u.length>0&&(u+=`
`)):(p=[Ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),u=[m,Ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Qe.tonemapping_pars_fragment:"",t.toneMapping!==An?Vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Hf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Es(o),o=Ka(o,t),o=Za(o,t),a=Es(a),a=Ka(a,t),a=Za(a,t),o=$a(o),a=$a(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=b+p+o,E=b+u+a,w=Ya(r,r.VERTEX_SHADER,x),R=Ya(r,r.FRAGMENT_SHADER,E);r.attachShader(v,w),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(W){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(v).trim(),ee=r.getShaderInfoLog(w).trim(),P=r.getShaderInfoLog(R).trim();let G=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,R);else{const Y=ja(r,w,"vertex"),ie=ja(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+ie)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(ee===""||P==="")&&(X=!1);X&&(W.diagnostics={runnable:G,programLog:q,vertexShader:{log:ee,prefix:p},fragmentShader:{log:P,prefix:u}})}r.deleteShader(w),r.deleteShader(R),k=new Mr(r,v),M=Xf(r,v)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,Of)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=R,this}let ip=0;class rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sp(e),t.set(e,i)),i}}class sp{constructor(e){this.id=ip++,this.code=e,this.usedTimes=0}}function ap(n,e,t,i,r,s,o){const a=new Ho,l=new rp,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,T,W,q,ee){const P=q.fog,G=ee.geometry,X=M.isMeshStandardMaterial?q.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),ie=Y&&Y.mapping===Cr?Y.image.height:null,J=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,D=Q!==void 0?Q.length:0;let U=0;G.morphAttributes.position!==void 0&&(U=1),G.morphAttributes.normal!==void 0&&(U=2),G.morphAttributes.color!==void 0&&(U=3);let ue,pe,te,fe;if(J){const de=rn[J];ue=de.vertexShader,pe=de.fragmentShader}else ue=M.vertexShader,pe=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const Ue=n.getRenderTarget(),ve=ee.isInstancedMesh===!0,De=!!M.map,He=!!M.matcap,Fe=!!Y,I=!!M.aoMap,Ze=!!M.lightMap,ce=!!M.bumpMap,Ee=!!M.normalMap,ye=!!M.displacementMap,Oe=!!M.emissiveMap,be=!!M.metalnessMap,Ce=!!M.roughnessMap,Ae=M.anisotropy>0,Ie=M.clearcoat>0,qe=M.iridescence>0,y=M.sheen>0,g=M.transmission>0,N=Ae&&!!M.anisotropyMap,re=Ie&&!!M.clearcoatMap,ne=Ie&&!!M.clearcoatNormalMap,se=Ie&&!!M.clearcoatRoughnessMap,Te=qe&&!!M.iridescenceMap,oe=qe&&!!M.iridescenceThicknessMap,ge=y&&!!M.sheenColorMap,C=y&&!!M.sheenRoughnessMap,ae=!!M.specularMap,$=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Pe=g&&!!M.transmissionMap,we=g&&!!M.thicknessMap,Se=!!M.gradientMap,xe=!!M.alphaMap,Be=M.alphaTest>0,L=!!M.alphaHash,me=!!M.extensions,le=!!G.attributes.uv1,j=!!G.attributes.uv2,he=!!G.attributes.uv3;let z=An;return M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(z=n.toneMapping),{isWebGL2:h,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:pe,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:ve,instancingColor:ve&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:gn,map:De,matcap:He,envMap:Fe,envMapMode:Fe&&Y.mapping,envMapCubeUVHeight:ie,aoMap:I,lightMap:Ze,bumpMap:ce,normalMap:Ee,displacementMap:f&&ye,emissiveMap:Oe,normalMapObjectSpace:Ee&&M.normalMapType===nc,normalMapTangentSpace:Ee&&M.normalMapType===Fo,metalnessMap:be,roughnessMap:Ce,anisotropy:Ae,anisotropyMap:N,clearcoat:Ie,clearcoatMap:re,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,iridescence:qe,iridescenceMap:Te,iridescenceThicknessMap:oe,sheen:y,sheenColorMap:ge,sheenRoughnessMap:C,specularMap:ae,specularColorMap:$,specularIntensityMap:Ne,transmission:g,transmissionMap:Pe,thicknessMap:we,gradientMap:Se,opaque:M.transparent===!1&&M.blending===vi,alphaMap:xe,alphaTest:Be,alphaHash:L,combine:M.combine,mapUv:De&&v(M.map.channel),aoMapUv:I&&v(M.aoMap.channel),lightMapUv:Ze&&v(M.lightMap.channel),bumpMapUv:ce&&v(M.bumpMap.channel),normalMapUv:Ee&&v(M.normalMap.channel),displacementMapUv:ye&&v(M.displacementMap.channel),emissiveMapUv:Oe&&v(M.emissiveMap.channel),metalnessMapUv:be&&v(M.metalnessMap.channel),roughnessMapUv:Ce&&v(M.roughnessMap.channel),anisotropyMapUv:N&&v(M.anisotropyMap.channel),clearcoatMapUv:re&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:C&&v(M.sheenRoughnessMap.channel),specularMapUv:ae&&v(M.specularMap.channel),specularColorMapUv:$&&v(M.specularColorMap.channel),specularIntensityMapUv:Ne&&v(M.specularIntensityMap.channel),transmissionMapUv:Pe&&v(M.transmissionMap.channel),thicknessMapUv:we&&v(M.thicknessMap.channel),alphaMapUv:xe&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ee||Ae),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:j,vertexUv3s:he,pointsUvs:ee.isPoints===!0&&!!G.attributes.uv&&(De||xe),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:U,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:z,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)T.push(W),T.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(b(T,M),x(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){const T=_[M.type];let W;if(T){const q=rn[T];W=Wc.clone(q.uniforms)}else W=M.uniforms;return W}function w(M,T){let W;for(let q=0,ee=c.length;q<ee;q++){const P=c[q];if(P.cacheKey===T){W=P,++W.usedTimes;break}}return W===void 0&&(W=new np(n,T,M,s),c.push(W)),W}function R(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:k}}function op(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function lp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qa(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,_,v,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=p),e++,u}function a(d,f,m,_,v,p){const u=o(d,f,m,_,v,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,_,v,p){const u=o(d,f,m,_,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||lp),i.length>1&&i.sort(f||Qa),r.length>1&&r.sort(f||Qa)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function cp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new eo,n.set(i,[o])):r>=s.length?(o=new eo,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new tt};break;case"SpotLight":t={position:new O,direction:new O,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function up(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dp=0;function fp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pp(n,e){const t=new hp,i=up(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new O);const s=new O,o=new ut,a=new ut;function l(h,d){let f=0,m=0,_=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,p=0,u=0,b=0,x=0,E=0,w=0,R=0,A=0,k=0,M=0;h.sort(fp);const T=d===!0?Math.PI:1;for(let q=0,ee=h.length;q<ee;q++){const P=h[q],G=P.color,X=P.intensity,Y=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=G.r*X*T,m+=G.g*X*T,_+=G.b*X*T;else if(P.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(P.sh.coefficients[J],X);M++}else if(P.isDirectionalLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const Q=P.shadow,D=i.get(P);D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,r.directionalShadow[v]=D,r.directionalShadowMap[v]=ie,r.directionalShadowMatrix[v]=P.shadow.matrix,E++}r.directional[v]=J,v++}else if(P.isSpotLight){const J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(G).multiplyScalar(X*T),J.distance=Y,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,r.spot[u]=J;const Q=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,Q.updateMatrices(P),P.castShadow&&k++),r.spotLightMatrix[u]=Q.matrix,P.castShadow){const D=i.get(P);D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,r.spotShadow[u]=D,r.spotShadowMap[u]=ie,R++}u++}else if(P.isRectAreaLight){const J=t.get(P);J.color.copy(G).multiplyScalar(X),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),r.rectArea[b]=J,b++}else if(P.isPointLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*T),J.distance=P.distance,J.decay=P.decay,P.castShadow){const Q=P.shadow,D=i.get(P);D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,D.shadowCameraNear=Q.camera.near,D.shadowCameraFar=Q.camera.far,r.pointShadow[p]=D,r.pointShadowMap[p]=ie,r.pointShadowMatrix[p]=P.shadow.matrix,w++}r.point[p]=J,p++}else if(P.isHemisphereLight){const J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(X*T),J.groundColor.copy(P.groundColor).multiplyScalar(X*T),r.hemi[x]=J,x++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==v||W.pointLength!==p||W.spotLength!==u||W.rectAreaLength!==b||W.hemiLength!==x||W.numDirectionalShadows!==E||W.numPointShadows!==w||W.numSpotShadows!==R||W.numSpotMaps!==A||W.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=b,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+A-k,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=M,W.directionalLength=v,W.pointLength=p,W.spotLength=u,W.rectAreaLength=b,W.hemiLength=x,W.numDirectionalShadows=E,W.numPointShadows=w,W.numSpotShadows=R,W.numSpotMaps=A,W.numLightProbes=M,r.version=dp++)}function c(h,d){let f=0,m=0,_=0,v=0,p=0;const u=d.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const E=h[b];if(E.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(E.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function to(n,e){const t=new pp(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mp(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new to(n,e),t.set(s,[l])):o>=a.length?(l=new to(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class gp extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _p extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
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
}`;function Mp(n,e,t){let i=new Dr;const r=new $e,s=new $e,o=new yt,a=new gp({depthPacking:tc}),l=new _p,c={},h=t.maxTextureSize,d={[Rn]:Ot,[Ot]:Rn,[fn]:fn},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:vp,fragmentShader:xp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let u=this.type;this.render=function(w,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const k=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),W=n.state;W.setBlending(bn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=u!==dn&&this.type===dn,ee=u===dn&&this.type!==dn;for(let P=0,G=w.length;P<G;P++){const X=w[P],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ie=Y.getFrameExtents();if(r.multiply(ie),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,Y.mapSize.y=s.y)),Y.map===null||q===!0||ee===!0){const Q=this.type!==dn?{minFilter:Nt,magFilter:Nt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Xn(r.x,r.y,Q),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const J=Y.getViewportCount();for(let Q=0;Q<J;Q++){const D=Y.getViewport(Q);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),W.viewport(o),Y.updateMatrices(X,Q),i=Y.getFrustum(),E(R,A,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===dn&&b(Y,A),Y.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(k,M,T)};function b(w,R){const A=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,A,f,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,A,m,v,null)}function x(w,R,A,k){let M=null;const T=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,q=R.uuid;let ee=c[W];ee===void 0&&(ee={},c[W]=ee);let P=ee[q];P===void 0&&(P=M.clone(),ee[q]=P),M=P}if(M.visible=R.visible,M.wireframe=R.wireframe,k===dn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=A}return M}function E(w,R,A,k,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===dn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const q=e.update(w),ee=w.material;if(Array.isArray(ee)){const P=q.groups;for(let G=0,X=P.length;G<X;G++){const Y=P[G],ie=ee[Y.materialIndex];if(ie&&ie.visible){const J=x(w,ie,k,M);n.renderBufferDirect(A,null,q,J,w,Y)}}}else if(ee.visible){const P=x(w,ee,k,M);n.renderBufferDirect(A,null,q,P,w,null)}}const W=w.children;for(let q=0,ee=W.length;q<ee;q++)E(W[q],R,A,k,M)}}function Sp(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const me=new yt;let le=null;const j=new yt(0,0,0,0);return{setMask:function(he){le!==he&&!L&&(n.colorMask(he,he,he,he),le=he)},setLocked:function(he){L=he},setClear:function(he,z,K,de,_e){_e===!0&&(he*=de,z*=de,K*=de),me.set(he,z,K,de),j.equals(me)===!1&&(n.clearColor(he,z,K,de),j.copy(me))},reset:function(){L=!1,le=null,j.set(-1,0,0,0)}}}function s(){let L=!1,me=null,le=null,j=null;return{setTest:function(he){he?De(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(he){me!==he&&!L&&(n.depthMask(he),me=he)},setFunc:function(he){if(le!==he){switch(he){case Ll:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=he}},setLocked:function(he){L=he},setClear:function(he){j!==he&&(n.clearDepth(he),j=he)},reset:function(){L=!1,me=null,le=null,j=null}}}function o(){let L=!1,me=null,le=null,j=null,he=null,z=null,K=null,de=null,_e=null;return{setTest:function(Me){L||(Me?De(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(Me){me!==Me&&!L&&(n.stencilMask(Me),me=Me)},setFunc:function(Me,Z,Ge){(le!==Me||j!==Z||he!==Ge)&&(n.stencilFunc(Me,Z,Ge),le=Me,j=Z,he=Ge)},setOp:function(Me,Z,Ge){(z!==Me||K!==Z||de!==Ge)&&(n.stencilOp(Me,Z,Ge),z=Me,K=Z,de=Ge)},setLocked:function(Me){L=Me},setClear:function(Me){_e!==Me&&(n.clearStencil(Me),_e=Me)},reset:function(){L=!1,me=null,le=null,j=null,he=null,z=null,K=null,de=null,_e=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,u=!1,b=null,x=null,E=null,w=null,R=null,A=null,k=null,M=new tt(0,0,0),T=0,W=!1,q=null,ee=null,P=null,G=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,J=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ie=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ie=J>=2);let D=null,U={};const ue=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),te=new yt().fromArray(ue),fe=new yt().fromArray(pe);function Ue(L,me,le,j){const he=new Uint8Array(4),z=n.createTexture();n.bindTexture(L,z),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let K=0;K<le;K++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(me+K,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return z}const ve={};ve[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(n.DEPTH_TEST),l.setFunc(Er),be(!1),Ce(Fs),De(n.CULL_FACE),ye(bn);function De(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function He(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Fe(L,me){return m[L]!==me?(n.bindFramebuffer(L,me),m[L]=me,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function I(L,me){let le=v,j=!1;if(L)if(le=_.get(me),le===void 0&&(le=[],_.set(me,le)),L.isWebGLMultipleRenderTargets){const he=L.texture;if(le.length!==he.length||le[0]!==n.COLOR_ATTACHMENT0){for(let z=0,K=he.length;z<K;z++)le[z]=n.COLOR_ATTACHMENT0+z;le.length=he.length,j=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,j=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,j=!0);j&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Ze(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const ce={[Fn]:n.FUNC_ADD,[ml]:n.FUNC_SUBTRACT,[gl]:n.FUNC_REVERSE_SUBTRACT};if(i)ce[Gs]=n.MIN,ce[Hs]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ce[Gs]=L.MIN_EXT,ce[Hs]=L.MAX_EXT)}const Ee={[_l]:n.ZERO,[vl]:n.ONE,[xl]:n.SRC_COLOR,[ps]:n.SRC_ALPHA,[bl]:n.SRC_ALPHA_SATURATE,[yl]:n.DST_COLOR,[Sl]:n.DST_ALPHA,[Ml]:n.ONE_MINUS_SRC_COLOR,[ms]:n.ONE_MINUS_SRC_ALPHA,[Tl]:n.ONE_MINUS_DST_COLOR,[El]:n.ONE_MINUS_DST_ALPHA,[Al]:n.CONSTANT_COLOR,[wl]:n.ONE_MINUS_CONSTANT_COLOR,[Rl]:n.CONSTANT_ALPHA,[Cl]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(L,me,le,j,he,z,K,de,_e,Me){if(L===bn){u===!0&&(He(n.BLEND),u=!1);return}if(u===!1&&(De(n.BLEND),u=!0),L!==pl){if(L!==b||Me!==W){if((x!==Fn||R!==Fn)&&(n.blendEquation(n.FUNC_ADD),x=Fn,R=Fn),Me)switch(L){case vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFunc(n.ONE,n.ONE);break;case zs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bs:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bs:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,w=null,A=null,k=null,M.set(0,0,0),T=0,b=L,W=Me}return}he=he||me,z=z||le,K=K||j,(me!==x||he!==R)&&(n.blendEquationSeparate(ce[me],ce[he]),x=me,R=he),(le!==E||j!==w||z!==A||K!==k)&&(n.blendFuncSeparate(Ee[le],Ee[j],Ee[z],Ee[K]),E=le,w=j,A=z,k=K),(de.equals(M)===!1||_e!==T)&&(n.blendColor(de.r,de.g,de.b,_e),M.copy(de),T=_e),b=L,W=!1}function Oe(L,me){L.side===fn?He(n.CULL_FACE):De(n.CULL_FACE);let le=L.side===Ot;me&&(le=!le),be(le),L.blending===vi&&L.transparent===!1?ye(bn):ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const j=L.stencilWrite;c.setTest(j),j&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(L){q!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),q=L)}function Ce(L){L!==dl?(De(n.CULL_FACE),L!==ee&&(L===Fs?n.cullFace(n.BACK):L===fl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),ee=L}function Ae(L){L!==P&&(ie&&n.lineWidth(L),P=L)}function Ie(L,me,le){L?(De(n.POLYGON_OFFSET_FILL),(G!==me||X!==le)&&(n.polygonOffset(me,le),G=me,X=le)):He(n.POLYGON_OFFSET_FILL)}function qe(L){L?De(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function y(L){L===void 0&&(L=n.TEXTURE0+Y-1),D!==L&&(n.activeTexture(L),D=L)}function g(L,me,le){le===void 0&&(D===null?le=n.TEXTURE0+Y-1:le=D);let j=U[le];j===void 0&&(j={type:void 0,texture:void 0},U[le]=j),(j.type!==L||j.texture!==me)&&(D!==le&&(n.activeTexture(le),D=le),n.bindTexture(L,me||ve[L]),j.type=L,j.texture=me)}function N(){const L=U[D];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(L){te.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function we(L){fe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function Se(L,me){let le=d.get(me);le===void 0&&(le=new WeakMap,d.set(me,le));let j=le.get(L);j===void 0&&(j=n.getUniformBlockIndex(me,L.name),le.set(L,j))}function xe(L,me){const j=d.get(me).get(L);h.get(me)!==j&&(n.uniformBlockBinding(me,j,L.__bindingPointIndex),h.set(me,j))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},D=null,U={},m={},_=new WeakMap,v=[],p=null,u=!1,b=null,x=null,E=null,w=null,R=null,A=null,k=null,M=new tt(0,0,0),T=0,W=!1,q=null,ee=null,P=null,G=null,X=null,te.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:He,bindFramebuffer:Fe,drawBuffers:I,useProgram:Ze,setBlending:ye,setMaterial:Oe,setFlipSided:be,setCullFace:Ce,setLineWidth:Ae,setPolygonOffset:Ie,setScissorTest:qe,activeTexture:y,bindTexture:g,unbindTexture:N,compressedTexImage2D:re,compressedTexImage3D:ne,texImage2D:$,texImage3D:Ne,updateUBOMapping:Se,uniformBlockBinding:xe,texStorage2D:C,texStorage3D:ae,texSubImage2D:se,texSubImage3D:Te,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:Pe,viewport:we,reset:Be}}function Ep(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(y,g){return u?new OffscreenCanvas(y,g):Rr("canvas")}function x(y,g,N,re){let ne=1;if((y.width>re||y.height>re)&&(ne=re/Math.max(y.width,y.height)),ne<1||g===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const se=g?wr:Math.floor,Te=se(ne*y.width),oe=se(ne*y.height);v===void 0&&(v=b(Te,oe));const ge=N?b(Te,oe):v;return ge.width=Te,ge.height=oe,ge.getContext("2d").drawImage(y,0,0,Te,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Te+"x"+oe+")."),ge}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function E(y){return Ss(y.width)&&Ss(y.height)}function w(y){return a?!1:y.wrapS!==Qt||y.wrapT!==Qt||y.minFilter!==Nt&&y.minFilter!==qt}function R(y,g){return y.generateMipmaps&&g&&y.minFilter!==Nt&&y.minFilter!==qt}function A(y){n.generateMipmap(y)}function k(y,g,N,re,ne=!1){if(a===!1)return g;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let se=g;if(g===n.RED&&(N===n.FLOAT&&(se=n.R32F),N===n.HALF_FLOAT&&(se=n.R16F),N===n.UNSIGNED_BYTE&&(se=n.R8)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(se=n.R8UI),N===n.UNSIGNED_SHORT&&(se=n.R16UI),N===n.UNSIGNED_INT&&(se=n.R32UI),N===n.BYTE&&(se=n.R8I),N===n.SHORT&&(se=n.R16I),N===n.INT&&(se=n.R32I)),g===n.RG&&(N===n.FLOAT&&(se=n.RG32F),N===n.HALF_FLOAT&&(se=n.RG16F),N===n.UNSIGNED_BYTE&&(se=n.RG8)),g===n.RGBA){const Te=ne?yr:it.getTransfer(re);N===n.FLOAT&&(se=n.RGBA32F),N===n.HALF_FLOAT&&(se=n.RGBA16F),N===n.UNSIGNED_BYTE&&(se=Te===lt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function M(y,g,N){return R(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==Nt&&y.minFilter!==qt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function T(y){return y===Nt||y===Vs||y===Nr?n.NEAREST:n.LINEAR}function W(y){const g=y.target;g.removeEventListener("dispose",W),ee(g),g.isVideoTexture&&_.delete(g)}function q(y){const g=y.target;g.removeEventListener("dispose",q),G(g)}function ee(y){const g=i.get(y);if(g.__webglInit===void 0)return;const N=y.source,re=p.get(N);if(re){const ne=re[g.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(y),Object.keys(re).length===0&&p.delete(N)}i.remove(y)}function P(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const N=y.source,re=p.get(N);delete re[g.__cacheKey],o.memory.textures--}function G(y){const g=y.texture,N=i.get(y),re=i.get(g);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(N.__webglFramebuffer[ne]))for(let se=0;se<N.__webglFramebuffer[ne].length;se++)n.deleteFramebuffer(N.__webglFramebuffer[ne][se]);else n.deleteFramebuffer(N.__webglFramebuffer[ne]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[ne])}else{if(Array.isArray(N.__webglFramebuffer))for(let ne=0;ne<N.__webglFramebuffer.length;ne++)n.deleteFramebuffer(N.__webglFramebuffer[ne]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ne=0;ne<N.__webglColorRenderbuffer.length;ne++)N.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[ne]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ne=0,se=g.length;ne<se;ne++){const Te=i.get(g[ne]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(g[ne])}i.remove(g),i.remove(y)}let X=0;function Y(){X=0}function ie(){const y=X;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),X+=1,y}function J(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Q(y,g){const N=i.get(y);if(y.isVideoTexture&&Ie(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const re=y.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(N,y,g);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function D(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){De(N,y,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function U(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){De(N,y,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function ue(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){He(N,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const pe={[vs]:n.REPEAT,[Qt]:n.CLAMP_TO_EDGE,[xs]:n.MIRRORED_REPEAT},te={[Nt]:n.NEAREST,[Vs]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Wl]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},fe={[ic]:n.NEVER,[hc]:n.ALWAYS,[rc]:n.LESS,[ac]:n.LEQUAL,[sc]:n.EQUAL,[cc]:n.GEQUAL,[oc]:n.GREATER,[lc]:n.NOTEQUAL};function Ue(y,g,N){if(N?(n.texParameteri(y,n.TEXTURE_WRAP_S,pe[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,pe[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,pe[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,te[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,te[g.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==Qt||g.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,T(g.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,T(g.minFilter)),g.minFilter!==Nt&&g.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Nt||g.minFilter!==Nr&&g.minFilter!==Vi||g.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(y,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function ve(y,g){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",W));const re=g.source;let ne=p.get(re);ne===void 0&&(ne={},p.set(re,ne));const se=J(g);if(se!==y.__cacheKey){ne[se]===void 0&&(ne[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ne[se].usedTimes++;const Te=ne[y.__cacheKey];Te!==void 0&&(ne[y.__cacheKey].usedTimes--,Te.usedTimes===0&&P(g)),y.__cacheKey=se,y.__webglTexture=ne[se].texture}return N}function De(y,g,N){let re=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(re=n.TEXTURE_3D);const ne=ve(y,g),se=g.source;t.bindTexture(re,y.__webglTexture,n.TEXTURE0+N);const Te=i.get(se);if(se.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+N);const oe=it.getPrimaries(it.workingColorSpace),ge=g.colorSpace===jt?null:it.getPrimaries(g.colorSpace),C=g.colorSpace===jt||oe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const ae=w(g)&&E(g.image)===!1;let $=x(g.image,ae,!1,h);$=qe(g,$);const Ne=E($)||a,Pe=s.convert(g.format,g.colorSpace);let we=s.convert(g.type),Se=k(g.internalFormat,Pe,we,g.colorSpace,g.isVideoTexture);Ue(re,g,Ne);let xe;const Be=g.mipmaps,L=a&&g.isVideoTexture!==!0,me=Te.__version===void 0||ne===!0,le=M(g,$,Ne);if(g.isDepthTexture)Se=n.DEPTH_COMPONENT,a?g.type===Tn?Se=n.DEPTH_COMPONENT32F:g.type===yn?Se=n.DEPTH_COMPONENT24:g.type===Vn?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:g.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===kn&&Se===n.DEPTH_COMPONENT&&g.type!==As&&g.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=yn,we=s.convert(g.type)),g.format===Ei&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,g.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Vn,we=s.convert(g.type))),me&&(L?t.texStorage2D(n.TEXTURE_2D,1,Se,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Se,$.width,$.height,0,Pe,we,null));else if(g.isDataTexture)if(Be.length>0&&Ne){L&&me&&t.texStorage2D(n.TEXTURE_2D,le,Se,Be[0].width,Be[0].height);for(let j=0,he=Be.length;j<he;j++)xe=Be[j],L?t.texSubImage2D(n.TEXTURE_2D,j,0,0,xe.width,xe.height,Pe,we,xe.data):t.texImage2D(n.TEXTURE_2D,j,Se,xe.width,xe.height,0,Pe,we,xe.data);g.generateMipmaps=!1}else L?(me&&t.texStorage2D(n.TEXTURE_2D,le,Se,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,Pe,we,$.data)):t.texImage2D(n.TEXTURE_2D,0,Se,$.width,$.height,0,Pe,we,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Se,Be[0].width,Be[0].height,$.depth);for(let j=0,he=Be.length;j<he;j++)xe=Be[j],g.format!==en?Pe!==null?L?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,$.depth,Pe,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Se,xe.width,xe.height,$.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,$.depth,Pe,we,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Se,xe.width,xe.height,$.depth,0,Pe,we,xe.data)}else{L&&me&&t.texStorage2D(n.TEXTURE_2D,le,Se,Be[0].width,Be[0].height);for(let j=0,he=Be.length;j<he;j++)xe=Be[j],g.format!==en?Pe!==null?L?t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,xe.width,xe.height,Pe,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(n.TEXTURE_2D,j,0,0,xe.width,xe.height,Pe,we,xe.data):t.texImage2D(n.TEXTURE_2D,j,Se,xe.width,xe.height,0,Pe,we,xe.data)}else if(g.isDataArrayTexture)L?(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Se,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Pe,we,$.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,$.width,$.height,$.depth,0,Pe,we,$.data);else if(g.isData3DTexture)L?(me&&t.texStorage3D(n.TEXTURE_3D,le,Se,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Pe,we,$.data)):t.texImage3D(n.TEXTURE_3D,0,Se,$.width,$.height,$.depth,0,Pe,we,$.data);else if(g.isFramebufferTexture){if(me)if(L)t.texStorage2D(n.TEXTURE_2D,le,Se,$.width,$.height);else{let j=$.width,he=$.height;for(let z=0;z<le;z++)t.texImage2D(n.TEXTURE_2D,z,Se,j,he,0,Pe,we,null),j>>=1,he>>=1}}else if(Be.length>0&&Ne){L&&me&&t.texStorage2D(n.TEXTURE_2D,le,Se,Be[0].width,Be[0].height);for(let j=0,he=Be.length;j<he;j++)xe=Be[j],L?t.texSubImage2D(n.TEXTURE_2D,j,0,0,Pe,we,xe):t.texImage2D(n.TEXTURE_2D,j,Se,Pe,we,xe);g.generateMipmaps=!1}else L?(me&&t.texStorage2D(n.TEXTURE_2D,le,Se,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,we,$)):t.texImage2D(n.TEXTURE_2D,0,Se,Pe,we,$);R(g,Ne)&&A(re),Te.__version=se.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function He(y,g,N){if(g.image.length!==6)return;const re=ve(y,g),ne=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+N);const se=i.get(ne);if(ne.version!==se.__version||re===!0){t.activeTexture(n.TEXTURE0+N);const Te=it.getPrimaries(it.workingColorSpace),oe=g.colorSpace===jt?null:it.getPrimaries(g.colorSpace),ge=g.colorSpace===jt||Te===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const C=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,$=[];for(let j=0;j<6;j++)!C&&!ae?$[j]=x(g.image[j],!1,!0,c):$[j]=ae?g.image[j].image:g.image[j],$[j]=qe(g,$[j]);const Ne=$[0],Pe=E(Ne)||a,we=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),xe=k(g.internalFormat,we,Se,g.colorSpace),Be=a&&g.isVideoTexture!==!0,L=se.__version===void 0||re===!0;let me=M(g,Ne,Pe);Ue(n.TEXTURE_CUBE_MAP,g,Pe);let le;if(C){Be&&L&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,xe,Ne.width,Ne.height);for(let j=0;j<6;j++){le=$[j].mipmaps;for(let he=0;he<le.length;he++){const z=le[he];g.format!==en?we!==null?Be?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,z.width,z.height,we,z.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,xe,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,z.width,z.height,we,Se,z.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,xe,z.width,z.height,0,we,Se,z.data)}}}else{le=g.mipmaps,Be&&L&&(le.length>0&&me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,me,xe,$[0].width,$[0].height));for(let j=0;j<6;j++)if(ae){Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,$[j].width,$[j].height,we,Se,$[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,xe,$[j].width,$[j].height,0,we,Se,$[j].data);for(let he=0;he<le.length;he++){const K=le[he].image[j].image;Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,K.width,K.height,we,Se,K.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,xe,K.width,K.height,0,we,Se,K.data)}}else{Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,Se,$[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,xe,we,Se,$[j]);for(let he=0;he<le.length;he++){const z=le[he];Be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,we,Se,z.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,xe,we,Se,z.image[j])}}}R(g,Pe)&&A(n.TEXTURE_CUBE_MAP),se.__version=ne.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Fe(y,g,N,re,ne,se){const Te=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),ge=k(N.internalFormat,Te,oe,N.colorSpace);if(!i.get(g).__hasExternalTextures){const ae=Math.max(1,g.width>>se),$=Math.max(1,g.height>>se);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,ge,ae,$,g.depth,0,Te,oe,null):t.texImage2D(ne,se,ge,ae,$,0,Te,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),Ae(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,i.get(N).__webglTexture,0,Ce(g)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,i.get(N).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(y,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer&&!g.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||Ae(g)){const ne=g.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Tn?re=n.DEPTH_COMPONENT32F:ne.type===yn&&(re=n.DEPTH_COMPONENT24));const se=Ce(g);Ae(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,re,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,re,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(g.depthBuffer&&g.stencilBuffer){const re=Ce(g);N&&Ae(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,g.width,g.height):Ae(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const re=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ne=0;ne<re.length;ne++){const se=re[ne],Te=s.convert(se.format,se.colorSpace),oe=s.convert(se.type),ge=k(se.internalFormat,Te,oe,se.colorSpace),C=Ce(g);N&&Ae(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,ge,g.width,g.height):Ae(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,ge,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ge,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const re=i.get(g.depthTexture).__webglTexture,ne=Ce(g);if(g.depthTexture.format===kn)Ae(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(g.depthTexture.format===Ei)Ae(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ce(y){const g=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ze(g.__webglFramebuffer,y)}else if(N){g.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[re]),g.__webglDepthbuffer[re]=n.createRenderbuffer(),I(g.__webglDepthbuffer[re],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),I(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(y,g,N){const re=i.get(y);g!==void 0&&Fe(re.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ce(y)}function ye(y){const g=y.texture,N=i.get(y),re=i.get(g);y.addEventListener("dispose",q),y.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=g.version,o.memory.textures++);const ne=y.isWebGLCubeRenderTarget===!0,se=y.isWebGLMultipleRenderTargets===!0,Te=E(y)||a;if(ne){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let ge=0;ge<g.mipmaps.length;ge++)N.__webglFramebuffer[oe][ge]=n.createFramebuffer()}else N.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)N.__webglFramebuffer[oe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const oe=y.texture;for(let ge=0,C=oe.length;ge<C;ge++){const ae=i.get(oe[ge]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Ae(y)===!1){const oe=se?g:[g];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const C=oe[ge];N.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ge]);const ae=s.convert(C.format,C.colorSpace),$=s.convert(C.type),Ne=k(C.internalFormat,ae,$,C.colorSpace,y.isXRRenderTarget===!0),Pe=Ce(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,N.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),I(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,g,Te);for(let oe=0;oe<6;oe++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Fe(N.__webglFramebuffer[oe][ge],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge);else Fe(N.__webglFramebuffer[oe],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);R(g,Te)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const oe=y.texture;for(let ge=0,C=oe.length;ge<C;ge++){const ae=oe[ge],$=i.get(ae);t.bindTexture(n.TEXTURE_2D,$.__webglTexture),Ue(n.TEXTURE_2D,ae,Te),Fe(N.__webglFramebuffer,y,ae,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),R(ae,Te)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?oe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,re.__webglTexture),Ue(oe,g,Te),a&&g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Fe(N.__webglFramebuffer[ge],y,g,n.COLOR_ATTACHMENT0,oe,ge);else Fe(N.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,oe,0);R(g,Te)&&A(oe),t.unbindTexture()}y.depthBuffer&&ce(y)}function Oe(y){const g=E(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0,ne=N.length;re<ne;re++){const se=N[re];if(R(se,g)){const Te=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(se).__webglTexture;t.bindTexture(Te,oe),A(Te),t.unbindTexture()}}}function be(y){if(a&&y.samples>0&&Ae(y)===!1){const g=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,re=y.height;let ne=n.COLOR_BUFFER_BIT;const se=[],Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(y),ge=y.isWebGLMultipleRenderTargets===!0;if(ge)for(let C=0;C<g.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let C=0;C<g.length;C++){se.push(n.COLOR_ATTACHMENT0+C),y.depthBuffer&&se.push(Te);const ae=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ae===!1&&(y.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]),ae===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),ge){const $=i.get(g[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,N,re,0,0,N,re,ne,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let C=0;C<g.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]);const ae=i.get(g[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ce(y){return Math.min(d,y.samples)}function Ae(y){const g=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ie(y){const g=o.render.frame;_.get(y)!==g&&(_.set(y,g),y.update())}function qe(y,g){const N=y.colorSpace,re=y.format,ne=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Ms||N!==gn&&N!==jt&&(it.getTransfer(N)===lt?a===!1?e.has("EXT_sRGB")===!0&&re===en?(y.format=Ms,y.minFilter=qt,y.generateMipmaps=!1):g=zo.sRGBToLinear(g):(re!==en||ne!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}this.allocateTextureUnit=ie,this.resetTextureUnits=Y,this.setTexture2D=Q,this.setTexture2DArray=D,this.setTexture3D=U,this.setTextureCube=ue,this.rebindTextures=Ee,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ae}function yp(n,e,t){const i=t.isWebGL2;function r(s,o=jt){let a;const l=it.getTransfer(o);if(s===wn)return n.UNSIGNED_BYTE;if(s===Lo)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Po)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Xl)return n.BYTE;if(s===ql)return n.SHORT;if(s===As)return n.UNSIGNED_SHORT;if(s===Co)return n.INT;if(s===yn)return n.UNSIGNED_INT;if(s===Tn)return n.FLOAT;if(s===ki)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yl)return n.ALPHA;if(s===en)return n.RGBA;if(s===jl)return n.LUMINANCE;if(s===Kl)return n.LUMINANCE_ALPHA;if(s===kn)return n.DEPTH_COMPONENT;if(s===Ei)return n.DEPTH_STENCIL;if(s===Ms)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zl)return n.RED;if(s===Do)return n.RED_INTEGER;if(s===$l)return n.RG;if(s===Uo)return n.RG_INTEGER;if(s===Io)return n.RGBA_INTEGER;if(s===Fr||s===Or||s===zr||s===Br)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ks||s===Ws||s===Xs||s===qs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ks)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ws)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ys||s===js)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ys)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===js)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ks||s===Zs||s===$s||s===Js||s===Qs||s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===aa||s===oa||s===la)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ks)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$s)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Js)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ea)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ta)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===na)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ia)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ra)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sa)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===aa)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oa)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===la)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gr||s===ca||s===ha)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Gr)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ca)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ha)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ql||s===ua||s===da||s===fa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Gr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ua)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===da)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Tp extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ap extends kt{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:kn,h!==kn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===kn&&(i=yn),i===void 0&&h===Ei&&(i=Vn),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wp extends jn{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null;const v=t.getContextAttributes();let p=null,u=null;const b=[],x=[],E=new Yt;E.layers.enable(1),E.viewport=new yt;const w=new Yt;w.layers.enable(2),w.viewport=new yt;const R=[E,w],A=new Tp;A.layers.enable(1),A.layers.enable(2);let k=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let U=b[D];return U===void 0&&(U=new cs,b[D]=U),U.getTargetRaySpace()},this.getControllerGrip=function(D){let U=b[D];return U===void 0&&(U=new cs,b[D]=U),U.getGripSpace()},this.getHand=function(D){let U=b[D];return U===void 0&&(U=new cs,b[D]=U),U.getHandSpace()};function T(D){const U=x.indexOf(D.inputSource);if(U===-1)return;const ue=b[U];ue!==void 0&&(ue.update(D.inputSource,D.frame,c||o),ue.dispatchEvent({type:D.type,data:D.inputSource}))}function W(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let D=0;D<b.length;D++){const U=x[D];U!==null&&(x[D]=null,b[D].disconnect(U))}k=null,M=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,Q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:m}),u=new Xn(m.framebufferWidth,m.framebufferHeight,{format:en,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let U=null,ue=null,pe=null;v.depth&&(pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=v.stencil?Ei:kn,ue=v.stencil?Vn:yn);const te={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(te),r.updateRenderState({layers:[f]}),u=new Xn(f.textureWidth,f.textureHeight,{format:en,type:wn,depthTexture:new Ap(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const fe=e.properties.get(u);fe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(D){for(let U=0;U<D.removed.length;U++){const ue=D.removed[U],pe=x.indexOf(ue);pe>=0&&(x[pe]=null,b[pe].disconnect(ue))}for(let U=0;U<D.added.length;U++){const ue=D.added[U];let pe=x.indexOf(ue);if(pe===-1){for(let fe=0;fe<b.length;fe++)if(fe>=x.length){x.push(ue),pe=fe;break}else if(x[fe]===null){x[fe]=ue,pe=fe;break}if(pe===-1)break}const te=b[pe];te&&te.connect(ue)}}const ee=new O,P=new O;function G(D,U,ue){ee.setFromMatrixPosition(U.matrixWorld),P.setFromMatrixPosition(ue.matrixWorld);const pe=ee.distanceTo(P),te=U.projectionMatrix.elements,fe=ue.projectionMatrix.elements,Ue=te[14]/(te[10]-1),ve=te[14]/(te[10]+1),De=(te[9]+1)/te[5],He=(te[9]-1)/te[5],Fe=(te[8]-1)/te[0],I=(fe[8]+1)/fe[0],Ze=Ue*Fe,ce=Ue*I,Ee=pe/(-Fe+I),ye=Ee*-Fe;U.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ye),D.translateZ(Ee),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Oe=Ue+Ee,be=ve+Ee,Ce=Ze-ye,Ae=ce+(pe-ye),Ie=De*ve/be*Oe,qe=He*ve/be*Oe;D.projectionMatrix.makePerspective(Ce,Ae,Ie,qe,Oe,be),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function X(D,U){U===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(U.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;A.near=w.near=E.near=D.near,A.far=w.far=E.far=D.far,(k!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,M=A.far);const U=D.parent,ue=A.cameras;X(A,U);for(let pe=0;pe<ue.length;pe++)X(ue[pe],U);ue.length===2?G(A,E,w):A.projectionMatrix.copy(E.projectionMatrix),Y(D,A,U)};function Y(D,U,ue){ue===null?D.matrix.copy(U.matrixWorld):(D.matrix.copy(ue.matrixWorld),D.matrix.invert(),D.matrix.multiply(U.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(U.projectionMatrix),D.projectionMatrixInverse.copy(U.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Wi*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)};let ie=null;function J(D,U){if(h=U.getViewerPose(c||o),_=U,h!==null){const ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let pe=!1;ue.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let te=0;te<ue.length;te++){const fe=ue[te];let Ue=null;if(m!==null)Ue=m.getViewport(fe);else{const De=d.getViewSubImage(f,fe);Ue=De.viewport,te===0&&(e.setRenderTargetTextures(u,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(u))}let ve=R[te];ve===void 0&&(ve=new Yt,ve.layers.enable(te),ve.viewport=new yt,R[te]=ve),ve.matrix.fromArray(fe.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(fe.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),te===0&&(A.matrix.copy(ve.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(ve)}}for(let ue=0;ue<b.length;ue++){const pe=x[ue],te=b[ue];pe!==null&&te!==void 0&&te.update(pe,U,c||o)}ie&&ie(D,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),_=null}const Q=new jo;Q.setAnimationLoop(J),this.setAnimationLoop=function(D){ie=D},this.dispose=function(){}}}function Rp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Xo(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ot&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ot&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cp(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const E=x.program;i.uniformBlockBinding(b,E)}function c(b,x){let E=r[b.id];E===void 0&&(_(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(b,w);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function h(b){const x=d();b.__bindingPointIndex=x;const E=n.createBuffer(),w=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],E=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,A=E.length;R<A;R++){const k=E[R];if(m(k,R,w)===!0){const M=k.__offset,T=Array.isArray(k.value)?k.value:[k.value];let W=0;for(let q=0;q<T.length;q++){const ee=T[q],P=v(ee);typeof ee=="number"?(k.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,M+W,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=ee.elements[0],k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=ee.elements[0],k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=ee.elements[0]):(ee.toArray(k.__data,W),W+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,k.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,E){const w=b.value;if(E[x]===void 0){if(typeof w=="number")E[x]=w;else{const R=Array.isArray(w)?w:[w],A=[];for(let k=0;k<R.length;k++)A.push(R[k].clone());E[x]=A}return!0}else if(typeof w=="number"){if(E[x]!==w)return E[x]=w,!0}else{const R=Array.isArray(E[x])?E[x]:[E[x]],A=Array.isArray(w)?w:[w];for(let k=0;k<R.length;k++){const M=R[k];if(M.equals(A[k])===!1)return M.copy(A[k]),!0}}return!1}function _(b){const x=b.uniforms;let E=0;const w=16;let R=0;for(let A=0,k=x.length;A<k;A++){const M=x[A],T={boundary:0,storage:0},W=Array.isArray(M.value)?M.value:[M.value];for(let q=0,ee=W.length;q<ee;q++){const P=W[q],G=v(P);T.boundary+=G.boundary,T.storage+=G.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=E,A>0){R=E%w;const q=w-R;R!==0&&q-T.boundary<0&&(E+=w-R,M.__offset=E)}E+=T.storage}return R=E%w,R>0&&(E+=w-R),b.__size=E,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class el{constructor(e={}){const{canvas:t=Ac(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const x=this;let E=!1,w=0,R=0,A=null,k=-1,M=null;const T=new yt,W=new yt;let q=null;const ee=new tt(0);let P=0,G=t.width,X=t.height,Y=1,ie=null,J=null;const Q=new yt(0,0,G,X),D=new yt(0,0,G,X);let U=!1;const ue=new Dr;let pe=!1,te=!1,fe=null;const Ue=new ut,ve=new $e,De=new O,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return A===null?Y:1}let I=i;function Ze(S,F){for(let B=0;B<S.length;B++){const V=S[B],H=t.getContext(V,F);if(H!==null)return H}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bs}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),I=Ze(F,S),I===null)throw Ze(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ce,Ee,ye,Oe,be,Ce,Ae,Ie,qe,y,g,N,re,ne,se,Te,oe,ge,C,ae,$,Ne,Pe,we;function Se(){ce=new zd(I),Ee=new Dd(I,ce,e),ce.init(Ee),Ne=new yp(I,ce,Ee),ye=new Sp(I,ce,Ee),Oe=new Hd(I),be=new op,Ce=new Ep(I,ce,ye,be,Ee,Ne,Oe),Ae=new Id(x),Ie=new Od(x),qe=new $c(I,Ee),Pe=new Ld(I,ce,qe,Ee),y=new Bd(I,qe,Oe,Pe),g=new Xd(I,y,qe,Oe),C=new Wd(I,Ee,Ce),Te=new Ud(be),N=new ap(x,Ae,Ie,ce,Ee,Pe,Te),re=new Rp(x,be),ne=new cp,se=new mp(ce,Ee),ge=new Cd(x,Ae,Ie,ye,g,f,l),oe=new Mp(x,g,Ee),we=new Cp(I,Oe,Ee,ye),ae=new Pd(I,ce,Oe,Ee),$=new Gd(I,ce,Oe,Ee),Oe.programs=N.programs,x.capabilities=Ee,x.extensions=ce,x.properties=be,x.renderLists=ne,x.shadowMap=oe,x.state=ye,x.info=Oe}Se();const xe=new wp(x,I);this.xr=xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(G,X,!1))},this.getSize=function(S){return S.set(G,X)},this.setSize=function(S,F,B=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,X=F,t.width=Math.floor(S*Y),t.height=Math.floor(F*Y),B===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(G*Y,X*Y).floor()},this.setDrawingBufferSize=function(S,F,B){G=S,X=F,Y=B,t.width=Math.floor(S*B),t.height=Math.floor(F*B),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,F,B,V){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,F,B,V),ye.viewport(T.copy(Q).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(D)},this.setScissor=function(S,F,B,V){S.isVector4?D.set(S.x,S.y,S.z,S.w):D.set(S,F,B,V),ye.scissor(W.copy(D).multiplyScalar(Y).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(S){ye.setScissorTest(U=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(S=!0,F=!0,B=!0){let V=0;if(S){let H=!1;if(A!==null){const Le=A.texture.format;H=Le===Io||Le===Uo||Le===Do}if(H){const Le=A.texture.type,ze=Le===wn||Le===yn||Le===As||Le===Vn||Le===Lo||Le===Po,ke=ge.getClearColor(),We=ge.getClearAlpha(),Ke=ke.r,Xe=ke.g,Ye=ke.b;ze?(m[0]=Ke,m[1]=Xe,m[2]=Ye,m[3]=We,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ke,_[1]=Xe,_[2]=Ye,_[3]=We,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}F&&(V|=I.DEPTH_BUFFER_BIT),B&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ne.dispose(),se.dispose(),be.dispose(),Ae.dispose(),Ie.dispose(),g.dispose(),Pe.dispose(),we.dispose(),N.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",_e),xe.removeEventListener("sessionend",Me),fe&&(fe.dispose(),fe=null),Z.stop()};function Be(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Oe.autoReset,F=oe.enabled,B=oe.autoUpdate,V=oe.needsUpdate,H=oe.type;Se(),Oe.autoReset=S,oe.enabled=F,oe.autoUpdate=B,oe.needsUpdate=V,oe.type=H}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){const F=S.target;F.removeEventListener("dispose",le),j(F)}function j(S){he(S),be.remove(S)}function he(S){const F=be.get(S).programs;F!==void 0&&(F.forEach(function(B){N.releaseProgram(B)}),S.isShaderMaterial&&N.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,B,V,H,Le){F===null&&(F=He);const ze=H.isMesh&&H.matrixWorld.determinant()<0,ke=rt(S,F,B,V,H);ye.setMaterial(V,ze);let We=B.index,Ke=1;if(V.wireframe===!0){if(We=y.getWireframeAttribute(B),We===void 0)return;Ke=2}const Xe=B.drawRange,Ye=B.attributes.position;let ot=Xe.start*Ke,Tt=(Xe.start+Xe.count)*Ke;Le!==null&&(ot=Math.max(ot,Le.start*Ke),Tt=Math.min(Tt,(Le.start+Le.count)*Ke)),We!==null?(ot=Math.max(ot,0),Tt=Math.min(Tt,We.count)):Ye!=null&&(ot=Math.max(ot,0),Tt=Math.min(Tt,Ye.count));const st=Tt-ot;if(st<0||st===1/0)return;Pe.setup(H,V,ke,B,We);let bt,at=ae;if(We!==null&&(bt=qe.get(We),at=$,at.setIndex(bt)),H.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*Fe()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(H.isLine){let Je=V.linewidth;Je===void 0&&(Je=1),ye.setLineWidth(Je*Fe()),H.isLineSegments?at.setMode(I.LINES):H.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else H.isPoints?at.setMode(I.POINTS):H.isSprite&&at.setMode(I.TRIANGLES);if(H.isInstancedMesh)at.renderInstances(ot,st,H.count);else if(B.isInstancedBufferGeometry){const Je=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Cn=Math.min(B.instanceCount,Je);at.renderInstances(ot,st,Cn)}else at.render(ot,st)};function z(S,F,B){S.transparent===!0&&S.side===fn&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,_t(S,F,B),S.side=Rn,S.needsUpdate=!0,_t(S,F,B),S.side=fn):_t(S,F,B)}this.compile=function(S,F,B=null){B===null&&(B=S),p=se.get(B),p.init(),b.push(p),B.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==B&&S.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(x._useLegacyLights);const V=new Set;return S.traverse(function(H){const Le=H.material;if(Le)if(Array.isArray(Le))for(let ze=0;ze<Le.length;ze++){const ke=Le[ze];z(ke,B,H),V.add(ke)}else z(Le,B,H),V.add(Le)}),b.pop(),p=null,V},this.compileAsync=function(S,F,B=null){const V=this.compile(S,F,B);return new Promise(H=>{function Le(){if(V.forEach(function(ze){be.get(ze).currentProgram.isReady()&&V.delete(ze)}),V.size===0){H(S);return}setTimeout(Le,10)}ce.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let K=null;function de(S){K&&K(S)}function _e(){Z.stop()}function Me(){Z.start()}const Z=new jo;Z.setAnimationLoop(de),typeof self<"u"&&Z.setContext(self),this.setAnimationLoop=function(S){K=S,xe.setAnimationLoop(S),S===null?Z.stop():Z.start()},xe.addEventListener("sessionstart",_e),xe.addEventListener("sessionend",Me),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(F),F=xe.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,A),p=se.get(S,b.length),p.init(),b.push(p),Ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ue.setFromProjectionMatrix(Ue),te=this.localClippingEnabled,pe=Te.init(this.clippingPlanes,te),v=ne.get(S,u.length),v.init(),u.push(v),Ge(S,F,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(ie,J),this.info.render.frame++,pe===!0&&Te.beginShadows();const B=p.state.shadowsArray;if(oe.render(B,S,F),pe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(v,S),p.setupLights(x._useLegacyLights),F.isArrayCamera){const V=F.cameras;for(let H=0,Le=V.length;H<Le;H++){const ze=V[H];Ve(v,S,ze,ze.viewport)}}else Ve(v,S,F);A!==null&&(Ce.updateMultisampleRenderTarget(A),Ce.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,F),Pe.resetDefaultState(),k=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Ge(S,F,B,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ue.intersectsSprite(S)){V&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ue);const ze=g.update(S),ke=S.material;ke.visible&&v.push(S,ze,ke,B,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ue.intersectsObject(S))){const ze=g.update(S),ke=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),De.copy(ze.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(Ue)),Array.isArray(ke)){const We=ze.groups;for(let Ke=0,Xe=We.length;Ke<Xe;Ke++){const Ye=We[Ke],ot=ke[Ye.materialIndex];ot&&ot.visible&&v.push(S,ze,ot,B,De.z,Ye)}}else ke.visible&&v.push(S,ze,ke,B,De.z,null)}}const Le=S.children;for(let ze=0,ke=Le.length;ze<ke;ze++)Ge(Le[ze],F,B,V)}function Ve(S,F,B,V){const H=S.opaque,Le=S.transmissive,ze=S.transparent;p.setupLightsView(B),pe===!0&&Te.setGlobalState(x.clippingPlanes,B),Le.length>0&&ft(H,Le,F,B),V&&ye.viewport(T.copy(V)),H.length>0&&je(H,F,B),Le.length>0&&je(Le,F,B),ze.length>0&&je(ze,F,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ft(S,F,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const Le=Ee.isWebGL2;fe===null&&(fe=new Xn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?ki:wn,minFilter:Vi,samples:Le?4:0})),x.getDrawingBufferSize(ve),Le?fe.setSize(ve.x,ve.y):fe.setSize(wr(ve.x),wr(ve.y));const ze=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(ee),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const ke=x.toneMapping;x.toneMapping=An,je(S,B,V),Ce.updateMultisampleRenderTarget(fe),Ce.updateRenderTargetMipmap(fe);let We=!1;for(let Ke=0,Xe=F.length;Ke<Xe;Ke++){const Ye=F[Ke],ot=Ye.object,Tt=Ye.geometry,st=Ye.material,bt=Ye.group;if(st.side===fn&&ot.layers.test(V.layers)){const at=st.side;st.side=Ot,st.needsUpdate=!0,Rt(ot,B,V,Tt,st,bt),st.side=at,st.needsUpdate=!0,We=!0}}We===!0&&(Ce.updateMultisampleRenderTarget(fe),Ce.updateRenderTargetMipmap(fe)),x.setRenderTarget(ze),x.setClearColor(ee,P),x.toneMapping=ke}function je(S,F,B){const V=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Le=S.length;H<Le;H++){const ze=S[H],ke=ze.object,We=ze.geometry,Ke=V===null?ze.material:V,Xe=ze.group;ke.layers.test(B.layers)&&Rt(ke,F,B,We,Ke,Xe)}}function Rt(S,F,B,V,H,Le){S.onBeforeRender(x,F,B,V,H,Le),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(x,F,B,V,S,Le),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=Ot,H.needsUpdate=!0,x.renderBufferDirect(B,F,V,H,S,Le),H.side=Rn,H.needsUpdate=!0,x.renderBufferDirect(B,F,V,H,S,Le),H.side=fn):x.renderBufferDirect(B,F,V,H,S,Le),S.onAfterRender(x,F,B,V,H,Le)}function _t(S,F,B){F.isScene!==!0&&(F=He);const V=be.get(S),H=p.state.lights,Le=p.state.shadowsArray,ze=H.state.version,ke=N.getParameters(S,H.state,Le,F,B),We=N.getProgramCacheKey(ke);let Ke=V.programs;V.environment=S.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(S.isMeshStandardMaterial?Ie:Ae).get(S.envMap||V.environment),Ke===void 0&&(S.addEventListener("dispose",le),Ke=new Map,V.programs=Ke);let Xe=Ke.get(We);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===ze)return vt(S,ke),Xe}else ke.uniforms=N.getUniforms(S),S.onBuild(B,ke,x),S.onBeforeCompile(ke,x),Xe=N.acquireProgram(ke,We),Ke.set(We,Xe),V.uniforms=ke.uniforms;const Ye=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ye.clippingPlanes=Te.uniform),vt(S,ke),V.needsLights=dt(S),V.lightsStateVersion=ze,V.needsLights&&(Ye.ambientLightColor.value=H.state.ambient,Ye.lightProbe.value=H.state.probe,Ye.directionalLights.value=H.state.directional,Ye.directionalLightShadows.value=H.state.directionalShadow,Ye.spotLights.value=H.state.spot,Ye.spotLightShadows.value=H.state.spotShadow,Ye.rectAreaLights.value=H.state.rectArea,Ye.ltc_1.value=H.state.rectAreaLTC1,Ye.ltc_2.value=H.state.rectAreaLTC2,Ye.pointLights.value=H.state.point,Ye.pointLightShadows.value=H.state.pointShadow,Ye.hemisphereLights.value=H.state.hemi,Ye.directionalShadowMap.value=H.state.directionalShadowMap,Ye.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ye.spotShadowMap.value=H.state.spotShadowMap,Ye.spotLightMatrix.value=H.state.spotLightMatrix,Ye.spotLightMap.value=H.state.spotLightMap,Ye.pointShadowMap.value=H.state.pointShadowMap,Ye.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Xe,V.uniformsList=null,Xe}function St(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Mr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function vt(S,F){const B=be.get(S);B.outputColorSpace=F.outputColorSpace,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function rt(S,F,B,V,H){F.isScene!==!0&&(F=He),Ce.resetTextureUnits();const Le=F.fog,ze=V.isMeshStandardMaterial?F.environment:null,ke=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gn,We=(V.isMeshStandardMaterial?Ie:Ae).get(V.envMap||ze),Ke=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Xe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ye=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,Tt=!!B.morphAttributes.color;let st=An;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(st=x.toneMapping);const bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=bt!==void 0?bt.length:0,Je=be.get(V),Cn=p.state.lights;if(pe===!0&&(te===!0||S!==M)){const At=S===M&&V.id===k;Te.setState(V,S,At)}let ct=!1;V.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Cn.state.version||Je.outputColorSpace!==ke||H.isInstancedMesh&&Je.instancing===!1||!H.isInstancedMesh&&Je.instancing===!0||H.isSkinnedMesh&&Je.skinning===!1||!H.isSkinnedMesh&&Je.skinning===!0||H.isInstancedMesh&&Je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Je.instancingColor===!1&&H.instanceColor!==null||Je.envMap!==We||V.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Te.numPlanes||Je.numIntersection!==Te.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==Xe||Je.morphTargets!==Ye||Je.morphNormals!==ot||Je.morphColors!==Tt||Je.toneMapping!==st||Ee.isWebGL2===!0&&Je.morphTargetsCount!==at)&&(ct=!0):(ct=!0,Je.__version=V.version);let Ft=Je.currentProgram;ct===!0&&(Ft=_t(V,F,H));let Zn=!1,sn=!1,an=!1;const mt=Ft.getUniforms(),zt=Je.uniforms;if(ye.useProgram(Ft.program)&&(Zn=!0,sn=!0,an=!0),V.id!==k&&(k=V.id,sn=!0),Zn||M!==S){mt.setValue(I,"projectionMatrix",S.projectionMatrix),mt.setValue(I,"viewMatrix",S.matrixWorldInverse);const At=mt.map.cameraPosition;At!==void 0&&At.setValue(I,De.setFromMatrixPosition(S.matrixWorld)),Ee.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,sn=!0,an=!0)}if(H.isSkinnedMesh){mt.setOptional(I,H,"bindMatrix"),mt.setOptional(I,H,"bindMatrixInverse");const At=H.skeleton;At&&(Ee.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),mt.setValue(I,"boneTexture",At.boneTexture,Ce),mt.setValue(I,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ln=B.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0&&Ee.isWebGL2===!0)&&C.update(H,B,Ft),(sn||Je.receiveShadow!==H.receiveShadow)&&(Je.receiveShadow=H.receiveShadow,mt.setValue(I,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zt.envMap.value=We,zt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),sn&&(mt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Je.needsLights&&nt(zt,an),Le&&V.fog===!0&&re.refreshFogUniforms(zt,Le),re.refreshMaterialUniforms(zt,V,Y,X,fe),Mr.upload(I,St(Je),zt,Ce)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Mr.upload(I,St(Je),zt,Ce),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(I,"center",H.center),mt.setValue(I,"modelViewMatrix",H.modelViewMatrix),mt.setValue(I,"normalMatrix",H.normalMatrix),mt.setValue(I,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const At=V.uniformsGroups;for(let Ri=0,Ir=At.length;Ri<Ir;Ri++)if(Ee.isWebGL2){const Yi=At[Ri];we.update(Yi,Ft),we.bind(Yi,Ft)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ft}function nt(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function dt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,F,B){be.get(S.texture).__webglTexture=F,be.get(S.depthTexture).__webglTexture=B;const V=be.get(S);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){const B=be.get(S);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,B=0){A=S,w=F,R=B;let V=!0,H=null,Le=!1,ze=!1;if(S){const We=be.get(S);We.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):We.__webglFramebuffer===void 0?Ce.setupRenderTarget(S):We.__hasExternalTextures&&Ce.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);const Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ze=!0);const Xe=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?H=Xe[F][B]:H=Xe[F],Le=!0):Ee.isWebGL2&&S.samples>0&&Ce.useMultisampledRTT(S)===!1?H=be.get(S).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[B]:H=Xe,T.copy(S.viewport),W.copy(S.scissor),q=S.scissorTest}else T.copy(Q).multiplyScalar(Y).floor(),W.copy(D).multiplyScalar(Y).floor(),q=U;if(ye.bindFramebuffer(I.FRAMEBUFFER,H)&&Ee.drawBuffers&&V&&ye.drawBuffers(S,H),ye.viewport(T),ye.scissor(W),ye.setScissorTest(q),Le){const We=be.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,We.__webglTexture,B)}else if(ze){const We=be.get(S.texture),Ke=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,B||0,Ke)}k=-1},this.readRenderTargetPixels=function(S,F,B,V,H,Le,ze){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){ye.bindFramebuffer(I.FRAMEBUFFER,ke);try{const We=S.texture,Ke=We.format,Xe=We.type;if(Ke!==en&&Ne.convert(Ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Xe===ki&&(ce.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Xe!==wn&&Ne.convert(Xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Tn&&(Ee.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&B>=0&&B<=S.height-H&&I.readPixels(F,B,V,H,Ne.convert(Ke),Ne.convert(Xe),Le)}finally{const We=A!==null?be.get(A).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(S,F,B=0){const V=Math.pow(2,-B),H=Math.floor(F.image.width*V),Le=Math.floor(F.image.height*V);Ce.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,S.x,S.y,H,Le),ye.unbindTexture()},this.copyTextureToTexture=function(S,F,B,V=0){const H=F.image.width,Le=F.image.height,ze=Ne.convert(B.format),ke=Ne.convert(B.type);Ce.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,S.x,S.y,H,Le,ze,ke,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,ze,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,S.x,S.y,ze,ke,F.image),V===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,F,B,V,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=S.max.x-S.min.x+1,ze=S.max.y-S.min.y+1,ke=S.max.z-S.min.z+1,We=Ne.convert(V.format),Ke=Ne.convert(V.type);let Xe;if(V.isData3DTexture)Ce.setTexture3D(V,0),Xe=I.TEXTURE_3D;else if(V.isDataArrayTexture)Ce.setTexture2DArray(V,0),Xe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const Ye=I.getParameter(I.UNPACK_ROW_LENGTH),ot=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Tt=I.getParameter(I.UNPACK_SKIP_PIXELS),st=I.getParameter(I.UNPACK_SKIP_ROWS),bt=I.getParameter(I.UNPACK_SKIP_IMAGES),at=B.isCompressedTexture?B.mipmaps[0]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,at.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Xe,H,F.x,F.y,F.z,Le,ze,ke,We,Ke,at.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Xe,H,F.x,F.y,F.z,Le,ze,ke,We,at.data)):I.texSubImage3D(Xe,H,F.x,F.y,F.z,Le,ze,ke,We,Ke,at),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,st),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bt),H===0&&V.generateMipmaps&&I.generateMipmap(Xe),ye.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ce.setTextureCube(S,0):S.isData3DTexture?Ce.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ce.setTexture2DArray(S,0):Ce.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){w=0,R=0,A=null,ye.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ws?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Lr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?Wn:No}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wn?wt:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Lp extends el{}Lp.prototype.isWebGL1Renderer=!0;class Pp extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class no extends Wt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new ut,io=new ut,gr=[],ro=new Kn,Dp=new ut,Ui=new Vt,Ii=new bi;class Up extends Vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Dp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mi),ro.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(ro)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mi),Ii.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Ii)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ii.copy(this.boundingSphere),Ii.applyMatrix4(i),e.ray.intersectsSphere(Ii)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mi),io.multiplyMatrices(i,mi),Ui.matrixWorld=io,Ui.raycast(e,gr);for(let o=0,a=gr.length;o<a;o++){const l=gr[o];l.instanceId=s,l.object=this,t.push(l)}gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const so=new O,ao=new O,oo=new ut,hs=new Cs,_r=new bi;class Ni extends pt{constructor(e=new nn,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)so.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=so.distanceTo(ao);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(r),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;oo.copy(r).invert(),hs.copy(e.ray).applyMatrix4(oo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,h=new O,d=new O,f=new O,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=u,E=b-1;x<E;x+=m){const w=_.getX(x),R=_.getX(x+1);if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,R),hs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=u,E=b-1;x<E;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),hs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class zn extends nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new O,f=new O,m=[],_=[],v=[],p=[];for(let u=0;u<=i;u++){const b=[],x=u/i;let E=0;u===0&&o===0?E=.5/t:u===i&&l===Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const R=w/t;d.x=-e*Math.cos(r+R*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(R+E,1-x),b.push(c++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<t;b++){const x=h[u][b+1],E=h[u][b],w=h[u+1][b],R=h[u+1][b+1];(u!==0||o>0)&&m.push(x,E,R),(u!==i-1||l<Math.PI)&&m.push(E,w,R)}this.setIndex(m),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vr extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Us extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ip extends Us{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const us=new ut,lo=new O,co=new O;class Np{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(lo),co.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(co),t.updateMatrixWorld(),us.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(us),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fp extends Np{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Op extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Fp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zp extends Us{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ho(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ho();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ho(){return(typeof performance>"u"?Date:performance).now()}class uo{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bs);const fo={type:"change"},ds={type:"start"},po={type:"end"},xr=new Cs,mo=new En,Gp=Math.cos(70*bc.DEG2RAD);class Hp extends jn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",g),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fo),i.update(),s=r.NONE},this.update=function(){const C=new O,ae=new qn().setFromUnitVectors(e.up,new O(0,1,0)),$=ae.clone().invert(),Ne=new O,Pe=new qn,we=new O,Se=2*Math.PI;return function(Be=null){const L=i.object.position;C.copy(L).sub(i.target),C.applyQuaternion(ae),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&W(M(Be)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=i.minAzimuthAngle,le=i.maxAzimuthAngle;isFinite(me)&&isFinite(le)&&(me<-Math.PI?me+=Se:me>Math.PI&&(me-=Se),le<-Math.PI?le+=Se:le>Math.PI&&(le-=Se),me<=le?a.theta=Math.max(me,Math.min(le,a.theta)):a.theta=a.theta>(me+le)/2?Math.max(me,a.theta):Math.min(le,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*c),C.setFromSpherical(a),C.applyQuaternion($),L.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let j=!1;if(i.zoomToCursor&&R){let he=null;if(i.object.isPerspectiveCamera){const z=C.length();he=J(z*c);const K=z-he;i.object.position.addScaledVector(E,K),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const z=new O(w.x,w.y,0);z.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),j=!0;const K=new O(w.x,w.y,0);K.unproject(i.object),i.object.position.sub(K).add(z),i.object.updateMatrixWorld(),he=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(he).add(i.object.position):(xr.origin.copy(i.object.position),xr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xr.direction))<Gp?e.lookAt(i.target):(mo.setFromNormalAndCoplanarPoint(i.object.up,i.target),xr.intersectPlane(mo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),j=!0);return c=1,R=!1,j||Ne.distanceToSquared(i.object.position)>o||8*(1-Pe.dot(i.object.quaternion))>o||we.distanceToSquared(i.target)>0?(i.dispatchEvent(fo),Ne.copy(i.object.position),Pe.copy(i.object.quaternion),we.copy(i.target),j=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ne),i.domElement.removeEventListener("pointerdown",be),i.domElement.removeEventListener("pointercancel",Ae),i.domElement.removeEventListener("wheel",y),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Ae),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new uo,l=new uo;let c=1;const h=new O,d=new $e,f=new $e,m=new $e,_=new $e,v=new $e,p=new $e,u=new $e,b=new $e,x=new $e,E=new O,w=new $e;let R=!1;const A=[],k={};function M(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function W(C){l.theta-=C}function q(C){l.phi-=C}const ee=function(){const C=new O;return function($,Ne){C.setFromMatrixColumn(Ne,0),C.multiplyScalar(-$),h.add(C)}}(),P=function(){const C=new O;return function($,Ne){i.screenSpacePanning===!0?C.setFromMatrixColumn(Ne,1):(C.setFromMatrixColumn(Ne,0),C.crossVectors(i.object.up,C)),C.multiplyScalar($),h.add(C)}}(),G=function(){const C=new O;return function($,Ne){const Pe=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;C.copy(we).sub(i.target);let Se=C.length();Se*=Math.tan(i.object.fov/2*Math.PI/180),ee(2*$*Se/Pe.clientHeight,i.object.matrix),P(2*Ne*Se/Pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ee($*(i.object.right-i.object.left)/i.object.zoom/Pe.clientWidth,i.object.matrix),P(Ne*(i.object.top-i.object.bottom)/i.object.zoom/Pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(C){if(!i.zoomToCursor)return;R=!0;const ae=i.domElement.getBoundingClientRect(),$=C.clientX-ae.left,Ne=C.clientY-ae.top,Pe=ae.width,we=ae.height;w.x=$/Pe*2-1,w.y=-(Ne/we)*2+1,E.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function Q(C){d.set(C.clientX,C.clientY)}function D(C){ie(C),u.set(C.clientX,C.clientY)}function U(C){_.set(C.clientX,C.clientY)}function ue(C){f.set(C.clientX,C.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ae=i.domElement;W(2*Math.PI*m.x/ae.clientHeight),q(2*Math.PI*m.y/ae.clientHeight),d.copy(f),i.update()}function pe(C){b.set(C.clientX,C.clientY),x.subVectors(b,u),x.y>0?X(T()):x.y<0&&Y(T()),u.copy(b),i.update()}function te(C){v.set(C.clientX,C.clientY),p.subVectors(v,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(v),i.update()}function fe(C){ie(C),C.deltaY<0?Y(T()):C.deltaY>0&&X(T()),i.update()}function Ue(C){let ae=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ae=!0;break}ae&&(C.preventDefault(),i.update())}function ve(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const C=.5*(A[0].pageX+A[1].pageX),ae=.5*(A[0].pageY+A[1].pageY);d.set(C,ae)}}function De(){if(A.length===1)_.set(A[0].pageX,A[0].pageY);else{const C=.5*(A[0].pageX+A[1].pageX),ae=.5*(A[0].pageY+A[1].pageY);_.set(C,ae)}}function He(){const C=A[0].pageX-A[1].pageX,ae=A[0].pageY-A[1].pageY,$=Math.sqrt(C*C+ae*ae);u.set(0,$)}function Fe(){i.enableZoom&&He(),i.enablePan&&De()}function I(){i.enableZoom&&He(),i.enableRotate&&ve()}function Ze(C){if(A.length==1)f.set(C.pageX,C.pageY);else{const $=ge(C),Ne=.5*(C.pageX+$.x),Pe=.5*(C.pageY+$.y);f.set(Ne,Pe)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ae=i.domElement;W(2*Math.PI*m.x/ae.clientHeight),q(2*Math.PI*m.y/ae.clientHeight),d.copy(f)}function ce(C){if(A.length===1)v.set(C.pageX,C.pageY);else{const ae=ge(C),$=.5*(C.pageX+ae.x),Ne=.5*(C.pageY+ae.y);v.set($,Ne)}p.subVectors(v,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(v)}function Ee(C){const ae=ge(C),$=C.pageX-ae.x,Ne=C.pageY-ae.y,Pe=Math.sqrt($*$+Ne*Ne);b.set(0,Pe),x.set(0,Math.pow(b.y/u.y,i.zoomSpeed)),X(x.y),u.copy(b)}function ye(C){i.enableZoom&&Ee(C),i.enablePan&&ce(C)}function Oe(C){i.enableZoom&&Ee(C),i.enableRotate&&Ze(C)}function be(C){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Ce),i.domElement.addEventListener("pointerup",Ae)),se(C),C.pointerType==="touch"?N(C):Ie(C))}function Ce(C){i.enabled!==!1&&(C.pointerType==="touch"?re(C):qe(C))}function Ae(C){Te(C),A.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Ae)),i.dispatchEvent(po),s=r.NONE}function Ie(C){let ae;switch(C.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case $n.DOLLY:if(i.enableZoom===!1)return;D(C),s=r.DOLLY;break;case $n.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;U(C),s=r.PAN}else{if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}break;case $n.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}else{if(i.enablePan===!1)return;U(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ds)}function qe(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ue(C);break;case r.DOLLY:if(i.enableZoom===!1)return;pe(C);break;case r.PAN:if(i.enablePan===!1)return;te(C);break}}function y(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(ds),fe(C),i.dispatchEvent(po))}function g(C){i.enabled===!1||i.enablePan===!1||Ue(C)}function N(C){switch(oe(C),A.length){case 1:switch(i.touches.ONE){case Jn.ROTATE:if(i.enableRotate===!1)return;ve(),s=r.TOUCH_ROTATE;break;case Jn.PAN:if(i.enablePan===!1)return;De(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Jn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(),s=r.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ds)}function re(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ze(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Oe(C),i.update();break;default:s=r.NONE}}function ne(C){i.enabled!==!1&&C.preventDefault()}function se(C){A.push(C)}function Te(C){delete k[C.pointerId];for(let ae=0;ae<A.length;ae++)if(A[ae].pointerId==C.pointerId){A.splice(ae,1);return}}function oe(C){let ae=k[C.pointerId];ae===void 0&&(ae=new $e,k[C.pointerId]=ae),ae.set(C.pageX,C.pageY)}function ge(C){const ae=C.pointerId===A[0].pointerId?A[1]:A[0];return k[ae.pointerId]}i.domElement.addEventListener("contextmenu",ne),i.domElement.addEventListener("pointerdown",be),i.domElement.addEventListener("pointercancel",Ae),i.domElement.addEventListener("wheel",y,{passive:!1}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var Dt=Math.PI,ht=Dt*2,zi=Dt/180,Vp=180/Dt,kp=1440,Wp=398600.8,Ht=6378.135,mn=60/Math.sqrt(Ht*Ht*Ht/Wp),fs=Ht*mn/60,Xp=1/mn,Gn=.001082616,qp=-253881e-11,Yp=-165597e-11,Hn=qp/Gn,Xi=2/3;function jp(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+t[r-1]&&r<12;)s+=t[r-1],r+=1;var o=r,a=i-s,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:o,day:a,hr:c,minute:h,sec:d}}function go(n,e,t,i,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+s/60+r)/60+i)/24}function Is(n,e,t,i,r,s,o){if(n instanceof Date){var a=n;return go(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return go(n,e,t,i,r,s,o)}function tl(n,e){var t=n.e3,i=n.ee2,r=n.peo,s=n.pgho,o=n.pho,a=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,_=n.sh2,v=n.sh3,p=n.si2,u=n.si3,b=n.sl2,x=n.sl3,E=n.sl4,w=n.t,R=n.xgh2,A=n.xgh3,k=n.xgh4,M=n.xh2,T=n.xh3,W=n.xi2,q=n.xi3,ee=n.xl2,P=n.xl3,G=n.xl4,X=n.zmol,Y=n.zmos,ie=e.init,J=e.opsmode,Q=e.ep,D=e.inclp,U=e.nodep,ue=e.argpp,pe=e.mp,te,fe,Ue,ve,De,He,Fe,I,Ze,ce,Ee,ye,Oe,be,Ce,Ae,Ie,qe,y,g,N,re=119459e-10,ne=.01675,se=.00015835218,Te=.0549;N=Y+re*w,ie==="y"&&(N=Y),g=N+2*ne*Math.sin(N),Ie=Math.sin(g),ce=.5*Ie*Ie-.25,Ee=-.5*Ie*Math.cos(g);var oe=c*ce+h*Ee,ge=p*ce+u*Ee,C=b*ce+x*Ee+E*Ie,ae=d*ce+f*Ee+m*Ie,$=_*ce+v*Ee;N=X+se*w,ie==="y"&&(N=X),g=N+2*Te*Math.sin(N),Ie=Math.sin(g),ce=.5*Ie*Ie-.25,Ee=-.5*Ie*Math.cos(g);var Ne=i*ce+t*Ee,Pe=W*ce+q*Ee,we=ee*ce+P*Ee+G*Ie,Se=R*ce+A*Ee+k*Ie,xe=M*ce+T*Ee;return ye=oe+Ne,Ce=ge+Pe,Ae=C+we,Oe=ae+Se,be=$+xe,ie==="n"&&(ye-=r,Ce-=a,Ae-=l,Oe-=s,be-=o,D+=Ce,Q+=ye,ve=Math.sin(D),Ue=Math.cos(D),D>=.2?(be/=ve,Oe-=Ue*be,ue+=Oe,U+=be,pe+=Ae):(He=Math.sin(U),De=Math.cos(U),te=ve*He,fe=ve*De,Fe=be*De+Ce*Ue*He,I=-be*He+Ce*Ue*De,te+=Fe,fe+=I,U%=ht,U<0&&J==="a"&&(U+=ht),qe=pe+ue+Ue*U,Ze=Ae+Oe-Ce*U*ve,qe+=Ze,y=U,U=Math.atan2(te,fe),U<0&&J==="a"&&(U+=ht),Math.abs(y-U)>Dt&&(U<y?U+=ht:U-=ht),pe+=Ae,ue=qe-pe-Ue*U)),{ep:Q,inclp:D,nodep:U,argpp:ue,mp:pe}}function Kp(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,s=n.inclp,o=n.nodep,a=n.np,l,c,h,d,f,m,_,v,p,u,b,x,E,w,R,A,k,M,T,W,q,ee,P,G,X,Y,ie,J,Q,D,U,ue,pe,te,fe,Ue,ve,De,He,Fe,I,Ze,ce,Ee,ye,Oe,be,Ce,Ae,Ie,qe,y,g,N,re,ne,se,Te,oe,ge,C,ae,$,Ne=.01675,Pe=.0549,we=29864797e-13,Se=47968065e-14,xe=.39785416,Be=.91744867,L=.1945905,me=-.98088458,le=a,j=t,he=Math.sin(o),z=Math.cos(o),K=Math.sin(i),de=Math.cos(i),_e=Math.sin(s),Me=Math.cos(s),Z=j*j,Ge=1-Z,Ve=Math.sqrt(Ge),ft=0,je=0,Rt=0,_t=0,St=0,vt=e+18261.5+r/1440,rt=(4.523602-.00092422029*vt)%ht,nt=Math.sin(rt),dt=Math.cos(rt),S=.91375164-.03568096*dt,F=Math.sqrt(1-S*S),B=.089683511*nt/F,V=Math.sqrt(1-B*B),H=5.8351514+.001944368*vt,Le=.39785416*nt/F,ze=V*dt+.91744867*B*nt;Le=Math.atan2(Le,ze),Le+=H-rt;var ke=Math.cos(Le),We=Math.sin(Le);W=L,q=me,G=Be,X=xe,ee=z,P=he,b=we;for(var Ke=1/le,Xe=0;Xe<2;)Xe+=1,l=W*ee+q*G*P,h=-q*ee+W*G*P,_=-W*P+q*G*ee,v=q*X,p=q*P+W*G*ee,u=W*X,c=Me*_+_e*v,d=Me*p+_e*u,f=-_e*_+Me*v,m=-_e*p+Me*u,x=l*de+c*K,E=h*de+d*K,w=-l*K+c*de,R=-h*K+d*de,A=f*K,k=m*K,M=f*de,T=m*de,C=12*x*x-3*w*w,ae=24*x*E-6*w*R,$=12*E*E-3*R*R,y=3*(l*l+c*c)+C*Z,g=6*(l*h+c*d)+ae*Z,N=3*(h*h+d*d)+$*Z,re=-6*l*f+Z*(-24*x*M-6*w*A),ne=-6*(l*m+h*f)+Z*(-24*(E*M+x*T)+-6*(w*k+R*A)),se=-6*h*m+Z*(-24*E*T-6*R*k),Te=6*c*f+Z*(24*x*A-6*w*M),oe=6*(d*f+c*m)+Z*(24*(E*A+x*k)-6*(R*M+w*T)),ge=6*d*m+Z*(24*E*k-6*R*T),y=y+y+Ge*C,g=g+g+Ge*ae,N=N+N+Ge*$,be=b*Ke,Oe=-.5*be/Ve,Ce=be*Ve,ye=-15*j*Ce,Ae=x*w+E*R,Ie=E*w+x*R,qe=E*R-x*w,Xe===1&&(Y=ye,ie=Oe,J=be,Q=Ce,D=Ae,U=Ie,ue=qe,pe=y,te=g,fe=N,Ue=re,ve=ne,De=se,He=Te,Fe=oe,I=ge,Ze=C,ce=ae,Ee=$,W=ke,q=We,G=S,X=F,ee=V*z+B*he,P=he*V-z*B,b=Se);var Ye=(4.7199672+(.2299715*vt-H))%ht,ot=(6.2565837+.017201977*vt)%ht,Tt=2*Y*U,st=2*Y*ue,bt=2*ie*ve,at=2*ie*(De-Ue),Je=-2*J*te,Cn=-2*J*(fe-pe),ct=-2*J*(-21-9*Z)*Ne,Ft=2*Q*ce,Zn=2*Q*(Ee-Ze),sn=-18*Q*Ne,an=-2*ie*Fe,mt=-2*ie*(I-He),zt=2*ye*Ie,Ln=2*ye*qe,At=2*Oe*ne,Ri=2*Oe*(se-re),Ir=-2*be*g,Yi=-2*be*(N-y),al=-2*be*(-21-9*Z)*Pe,ol=2*Ce*ae,ll=2*Ce*($-C),cl=-18*Ce*Pe,hl=-2*Oe*oe,ul=-2*Oe*(ge-Te);return{snodm:he,cnodm:z,sinim:_e,cosim:Me,sinomm:K,cosomm:de,day:vt,e3:Ln,ee2:zt,em:j,emsq:Z,gam:H,peo:ft,pgho:_t,pho:St,pinco:je,plo:Rt,rtemsq:Ve,se2:Tt,se3:st,sgh2:Ft,sgh3:Zn,sgh4:sn,sh2:an,sh3:mt,si2:bt,si3:at,sl2:Je,sl3:Cn,sl4:ct,s1:ye,s2:Oe,s3:be,s4:Ce,s5:Ae,s6:Ie,s7:qe,ss1:Y,ss2:ie,ss3:J,ss4:Q,ss5:D,ss6:U,ss7:ue,sz1:pe,sz2:te,sz3:fe,sz11:Ue,sz12:ve,sz13:De,sz21:He,sz22:Fe,sz23:I,sz31:Ze,sz32:ce,sz33:Ee,xgh2:ol,xgh3:ll,xgh4:cl,xh2:hl,xh3:ul,xi2:At,xi3:Ri,xl2:Ir,xl3:Yi,xl4:al,nm:le,z1:y,z2:g,z3:N,z11:re,z12:ne,z13:se,z21:Te,z22:oe,z23:ge,z31:C,z32:ae,z33:$,zmol:Ye,zmos:ot}}function Zp(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,s=n.s3,o=n.s4,a=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,_=n.sz1,v=n.sz3,p=n.sz11,u=n.sz13,b=n.sz21,x=n.sz23,E=n.sz31,w=n.sz33,R=n.t,A=n.tc,k=n.gsto,M=n.mo,T=n.mdot,W=n.no,q=n.nodeo,ee=n.nodedot,P=n.xpidot,G=n.z1,X=n.z3,Y=n.z11,ie=n.z13,J=n.z21,Q=n.z23,D=n.z31,U=n.z33,ue=n.ecco,pe=n.eccsq,te=n.emsq,fe=n.em,Ue=n.argpm,ve=n.inclm,De=n.mm,He=n.nm,Fe=n.nodem,I=n.irez,Ze=n.atime,ce=n.d2201,Ee=n.d2211,ye=n.d3210,Oe=n.d3222,be=n.d4410,Ce=n.d4422,Ae=n.d5220,Ie=n.d5232,qe=n.d5421,y=n.d5433,g=n.dedt,N=n.didt,re=n.dmdt,ne=n.dnodt,se=n.domdt,Te=n.del1,oe=n.del2,ge=n.del3,C=n.xfact,ae=n.xlamo,$=n.xli,Ne=n.xni,Pe,we,Se,xe,Be,L,me,le,j,he,z,K,de,_e,Me,Z,Ge,Ve,ft,je,Rt,_t,St,vt,rt,nt,dt,S,F,B,V,H,Le=17891679e-13,ze=21460748e-13,ke=22123015e-14,We=17891679e-13,Ke=73636953e-16,Xe=21765803e-16,Ye=.0043752690880113,ot=37393792e-14,Tt=11428639e-14,st=.00015835218,bt=119459e-10;I=0,He<.0052359877&&He>.0034906585&&(I=1),He>=.00826&&He<=.00924&&fe>=.5&&(I=2);var at=c*bt*m,Je=h*bt*(p+u),Cn=-bt*d*(_+v-14-6*te),ct=f*bt*(E+w-6),Ft=-bt*h*(b+x);(ve<.052359877||ve>Dt-.052359877)&&(Ft=0),l!==0&&(Ft/=l);var Zn=ct-e*Ft;g=at+i*st*a,N=Je+r*st*(Y+ie),re=Cn-st*s*(G+X-14-6*te);var sn=o*st*(D+U-6),an=-st*r*(J+Q);(ve<.052359877||ve>Dt-.052359877)&&(an=0),se=Zn+sn,ne=Ft,l!==0&&(se-=e/l*an,ne+=an/l);var mt=0,zt=(k+A*Ye)%ht;if(fe+=g*R,ve+=N*R,Ue+=se*R,Fe+=ne*R,De+=re*R,I!==0){if(B=Math.pow(He/mn,Xi),I===2){V=e*e;var Ln=fe;fe=ue;var At=te;te=pe,H=fe*te,_e=-.306-(fe-.64)*.44,fe<=.65?(Me=3.616-13.247*fe+16.29*te,Ge=-19.302+117.39*fe-228.419*te+156.591*H,Ve=-18.9068+109.7927*fe-214.6334*te+146.5816*H,ft=-41.122+242.694*fe-471.094*te+313.953*H,je=-146.407+841.88*fe-1629.014*te+1083.435*H,Rt=-532.114+3017.977*fe-5740.032*te+3708.276*H):(Me=-72.099+331.819*fe-508.738*te+266.724*H,Ge=-346.844+1582.851*fe-2415.925*te+1246.113*H,Ve=-342.585+1554.908*fe-2366.899*te+1215.972*H,ft=-1052.797+4758.686*fe-7193.992*te+3651.957*H,je=-3581.69+16178.11*fe-24462.77*te+12422.52*H,fe>.715?Rt=-5149.66+29936.92*fe-54087.36*te+31324.56*H:Rt=1464.74-4664.75*fe+3763.64*te),fe<.7?(vt=-919.2277+4988.61*fe-9064.77*te+5542.21*H,_t=-822.71072+4568.6173*fe-8491.4146*te+5337.524*H,St=-853.666+4690.25*fe-8624.77*te+5341.4*H):(vt=-37995.78+161616.52*fe-229838.2*te+109377.94*H,_t=-51752.104+218913.95*fe-309468.16*te+146349.42*H,St=-40023.88+170470.89*fe-242699.48*te+115605.82*H),rt=l*l,Pe=.75*(1+2*e+V),we=1.5*rt,xe=1.875*l*(1-2*e-3*V),Be=-1.875*l*(1+2*e-3*V),me=35*rt*Pe,le=39.375*rt*rt,j=9.84375*l*(rt*(1-2*e-5*V)+.33333333*(-2+4*e+6*V)),he=l*(4.92187512*rt*(-2-4*e+10*V)+6.56250012*(1+2*e-3*V)),z=29.53125*l*(2-8*e+V*(-12+8*e+10*V)),K=29.53125*l*(-2-8*e+V*(12+8*e-10*V)),S=He*He,F=B*B,dt=3*S*F,nt=dt*We,ce=nt*Pe*_e,Ee=nt*we*Me,dt*=B,nt=dt*ot,ye=nt*xe*Ge,Oe=nt*Be*Ve,dt*=B,nt=2*dt*Ke,be=nt*me*ft,Ce=nt*le*je,dt*=B,nt=dt*Tt,Ae=nt*j*Rt,Ie=nt*he*St,nt=2*dt*Xe,qe=nt*z*_t,y=nt*K*vt,ae=(M+q+q-(zt+zt))%ht,C=T+re+2*(ee+ne-Ye)-W,fe=Ln,te=At}I===1&&(de=1+te*(-2.5+.8125*te),Ge=1+2*te,Z=1+te*(-6+6.60937*te),Pe=.75*(1+e)*(1+e),Se=.9375*l*l*(1+3*e)-.75*(1+e),L=1+e,L*=1.875*L*L,Te=3*He*He*B*B,oe=2*Te*Pe*de*Le,ge=3*Te*L*Z*ke*B,Te=Te*Se*Ge*ze*B,ae=(M+q+t-zt)%ht,C=T+P+re+se+ne-(W+Ye)),$=ae,Ne=W,Ze=0,He=W+mt}return{em:fe,argpm:Ue,inclm:ve,mm:De,nm:He,nodem:Fe,irez:I,atime:Ze,d2201:ce,d2211:Ee,d3210:ye,d3222:Oe,d4410:be,d4422:Ce,d5220:Ae,d5232:Ie,d5421:qe,d5433:y,dedt:g,didt:N,dmdt:re,dndt:mt,dnodt:ne,domdt:se,del1:Te,del2:oe,del3:ge,xfact:C,xlamo:ae,xli:$,xni:Ne}}function _o(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*zi/240%ht,t<0&&(t+=ht),t}function ys(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?_o(Is.apply(void 0,arguments)):_o.apply(void 0,arguments)}function $p(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,s=n.no,o=e*e,a=1-o,l=Math.sqrt(a),c=Math.cos(i),h=c*c,d=Math.pow(mn/s,Xi),f=.75*Gn*(3*h-1)/(l*a),m=f/(d*d),_=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(_*_),s/=1+m;var v=Math.pow(mn/s,Xi),p=Math.sin(i),u=v*a,b=1-5*h,x=-b-h-h,E=1/v,w=u*u,R=v*(1-e),A="n",k;if(r==="a"){var M=t-7305,T=Math.floor(M+1e-8),W=M-T,q=.017202791694070362,ee=1.7321343856509375,P=5075514194322695e-30,G=q+ht;k=(ee+q*T+G*W+M*M*P)%ht,k<0&&(k+=ht)}else k=ys(t+24332815e-1);return{no:s,method:A,ainv:E,ao:v,con41:x,con42:b,cosio:c,cosio2:h,eccsq:o,omeosq:a,posq:w,rp:R,rteosq:l,sinio:p,gsto:k}}function Jp(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,s=n.d3222,o=n.d4410,a=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,_=n.del2,v=n.del3,p=n.didt,u=n.dmdt,b=n.dnodt,x=n.domdt,E=n.argpo,w=n.argpdot,R=n.t,A=n.tc,k=n.gsto,M=n.xfact,T=n.xlamo,W=n.no,q=n.atime,ee=n.em,P=n.argpm,G=n.inclm,X=n.xli,Y=n.mm,ie=n.xni,J=n.nodem,Q=n.nm,D=.13130908,U=2.8843198,ue=.37448087,pe=5.7686396,te=.95240898,fe=1.8014998,Ue=1.050833,ve=4.4108898,De=.0043752690880113,He=720,Fe=-720,I=259200,Ze,ce,Ee,ye,Oe,be,Ce,Ae,Ie=0,qe=0,y=(k+A*De)%ht;if(ee+=f*R,G+=p*R,P+=x*R,J+=b*R,Y+=u*R,e!==0){(q===0||R*q<=0||Math.abs(R)<Math.abs(q))&&(q=0,ie=W,X=T),R>0?Ze=He:Ze=Fe;for(var g=381;g===381;)e!==2?(Ce=m*Math.sin(X-D)+_*Math.sin(2*(X-U))+v*Math.sin(3*(X-ue)),Oe=ie+M,be=m*Math.cos(X-D)+2*_*Math.cos(2*(X-U))+3*v*Math.cos(3*(X-ue)),be*=Oe):(Ae=E+w*q,Ee=Ae+Ae,ce=X+X,Ce=t*Math.sin(Ee+X-pe)+i*Math.sin(X-pe)+r*Math.sin(Ae+X-te)+s*Math.sin(-Ae+X-te)+o*Math.sin(Ee+ce-fe)+a*Math.sin(ce-fe)+l*Math.sin(Ae+X-Ue)+c*Math.sin(-Ae+X-Ue)+h*Math.sin(Ae+ce-ve)+d*Math.sin(-Ae+ce-ve),Oe=ie+M,be=t*Math.cos(Ee+X-pe)+i*Math.cos(X-pe)+r*Math.cos(Ae+X-te)+s*Math.cos(-Ae+X-te)+l*Math.cos(Ae+X-Ue)+c*Math.cos(-Ae+X-Ue)+2*(o*Math.cos(Ee+ce-fe)+a*Math.cos(ce-fe)+h*Math.cos(Ae+ce-ve)+d*Math.cos(-Ae+ce-ve)),be*=Oe),Math.abs(R-q)>=He?g=381:(qe=R-q,g=0),g===381&&(X+=Oe*Ze+Ce*I,ie+=Ce*Ze+be*I,q+=Ze);Q=ie+Ce*qe+be*qe*qe*.5,ye=X+Oe*qe+Ce*qe*qe*.5,e!==1?(Y=ye-2*J+2*y,Ie=Q-W):(Y=ye-J-P+y,Ie=Q-W),Q=W+Ie}return{atime:q,em:ee,argpm:P,inclm:G,xli:X,mm:Y,xni:ie,nodem:J,dndt:Ie,nm:Q}}function nl(n,e){var t,i,r,s,o,a,l,c,h,d,f,m,_,v,p,u,b,x,E,w,R,A,k,M,T,W,q,ee=15e-13;n.t=e,n.error=0;var P=n.mo+n.mdot*n.t,G=n.argpo+n.argpdot*n.t,X=n.nodeo+n.nodedot*n.t;h=G,R=P;var Y=n.t*n.t;if(k=X+n.nodecf*Y,b=1-n.cc1*n.t,x=n.bstar*n.cc4*n.t,E=n.t2cof*Y,n.isimp!==1){l=n.omgcof*n.t;var ie=1+n.eta*Math.cos(P);a=n.xmcof*(ie*ie*ie-n.delmo),u=l+a,R=P+u,h=G-u,m=Y*n.t,_=m*n.t,b=b-n.d2*Y-n.d3*m-n.d4*_,x+=n.bstar*n.cc5*(Math.sin(R)-n.sinmao),E=E+n.t3cof*m+_*(n.t4cof+n.t*n.t5cof)}A=n.no;var J=n.ecco;if(w=n.inclo,n.method==="d"){v=n.t;var Q={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:v,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:J,argpm:h,inclm:w,xli:n.xli,mm:R,xni:n.xni,nodem:k,nm:A},D=Jp(Q);J=D.em,h=D.argpm,w=D.inclm,R=D.mm,k=D.nodem,A=D.nm}if(A<=0)return n.error=2,[!1,!1];var U=Math.pow(mn/A,Xi)*b*b;if(A=mn/Math.pow(U,1.5),J-=x,J>=1||J<-.001)return n.error=1,[!1,!1];J<1e-6&&(J=1e-6),R+=n.no*E,T=R+h+k,k%=ht,h%=ht,T%=ht,R=(T-h-k)%ht;var ue=Math.sin(w),pe=Math.cos(w),te=J;if(M=w,d=h,q=k,W=R,s=ue,r=pe,n.method==="d"){var fe={inclo:n.inclo,init:"n",ep:te,inclp:M,nodep:q,argpp:d,mp:W,opsmode:n.operationmode},Ue=tl(n,fe);if(te=Ue.ep,q=Ue.nodep,d=Ue.argpp,W=Ue.mp,M=Ue.inclp,M<0&&(M=-M,q+=Dt,d-=Dt),te<0||te>1)return n.error=3,[!1,!1]}n.method==="d"&&(s=Math.sin(M),r=Math.cos(M),n.aycof=-.5*Hn*s,Math.abs(r+1)>15e-13?n.xlcof=-.25*Hn*s*(3+5*r)/(1+r):n.xlcof=-.25*Hn*s*(3+5*r)/ee);var ve=te*Math.cos(d);u=1/(U*(1-te*te));var De=te*Math.sin(d)+u*n.aycof,He=W+d+q+u*n.xlcof*ve,Fe=(He-q)%ht;c=Fe,p=9999.9;for(var I=1;Math.abs(p)>=1e-12&&I<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*ve-i*De,p=(Fe-De*t+ve*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,I+=1;var Ze=ve*t+De*i,ce=ve*i-De*t,Ee=ve*ve+De*De,ye=U*(1-Ee);if(ye<0)return n.error=4,[!1,!1];var Oe=U*(1-Ze),be=Math.sqrt(U)*ce/Oe,Ce=Math.sqrt(ye)/Oe,Ae=Math.sqrt(1-Ee);u=ce/(1+Ae);var Ie=U/Oe*(i-De-ve*u),qe=U/Oe*(t-ve+De*u);f=Math.atan2(Ie,qe);var y=(qe+qe)*Ie,g=1-2*Ie*Ie;u=1/ye;var N=.5*Gn*u,re=N*u;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var ne=Oe*(1-1.5*re*Ae*n.con41)+.5*N*n.x1mth2*g;if(ne<1)return n.error=6,{position:!1,velocity:!1};f-=.25*re*n.x7thm1*y;var se=q+1.5*re*r*y,Te=M+1.5*re*r*s*g,oe=be-A*N*n.x1mth2*y/mn,ge=Ce+A*N*(n.x1mth2*g+1.5*n.con41)/mn,C=Math.sin(f),ae=Math.cos(f),$=Math.sin(se),Ne=Math.cos(se),Pe=Math.sin(Te),we=Math.cos(Te),Se=-$*we,xe=Ne*we,Be=Se*C+Ne*ae,L=xe*C+$*ae,me=Pe*C,le=Se*ae-Ne*C,j=xe*ae-$*C,he=Pe*ae,z={x:ne*Be*Ht,y:ne*L*Ht,z:ne*me*Ht},K={x:(oe*Be+ge*le)*fs,y:(oe*L+ge*j)*fs,z:(oe*me+ge*he)*fs};return{position:z,velocity:K}}function Qp(n,e){var t=e.opsmode,i=e.satn,r=e.epoch,s=e.xbstar,o=e.xecco,a=e.xargpo,l=e.xinclo,c=e.xmo,h=e.xno,d=e.xnodeo,f,m,_,v,p,u,b,x,E,w,R,A,k,M,T,W,q,ee,P,G,X,Y,ie,J,Q,D,U,ue,pe,te,fe,Ue,ve,De,He,Fe,I,Ze,ce,Ee,ye,Oe,be,Ce,Ae,Ie,qe,y,g,N,re,ne,se,Te,oe,ge,C=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=s,n.ecco=o,n.argpo=a,n.inclo=l,n.mo=c,n.no=h,n.nodeo=d,n.operationmode=t;var ae=78/Ht+1,$=42/Ht,Ne=$*$*$*$;n.init="y",n.t=0;var Pe={satn:i,ecco:n.ecco,epoch:r,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},we=$p(Pe),Se=we.ao,xe=we.con42,Be=we.cosio,L=we.cosio2,me=we.eccsq,le=we.omeosq,j=we.posq,he=we.rp,z=we.rteosq,K=we.sinio;if(n.no=we.no,n.con41=we.con41,n.gsto=we.gsto,n.a=Math.pow(n.no*Xp,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,le>=0||n.no>=0){if(n.isimp=0,he<220/Ht+1&&(n.isimp=1),U=ae,X=Ne,ee=(he-1)*Ht,ee<156){U=ee-78,ee<98&&(U=20);var de=(120-U)/Ht;X=de*de*de*de,U=U/Ht+1}P=1/j,Ie=1/(Se-U),n.eta=Se*n.ecco*Ie,A=n.eta*n.eta,R=n.ecco*n.eta,G=Math.abs(1-A),u=X*Math.pow(Ie,4),b=u/Math.pow(G,3.5),v=b*n.no*(Se*(1+1.5*A+R*(4+A))+.375*Gn*Ie/G*n.con41*(8+3*A*(8+A))),n.cc1=n.bstar*v,p=0,n.ecco>1e-4&&(p=-2*u*Ie*Hn*n.no*K/n.ecco),n.x1mth2=1-L,n.cc4=2*n.no*b*Se*le*(n.eta*(2+.5*A)+n.ecco*(.5+2*A)-Gn*Ie/(Se*G)*(-3*n.con41*(1-2*R+A*(1.5-.5*R))+.75*n.x1mth2*(2*A-R*(1+A))*Math.cos(2*n.argpo))),n.cc5=2*b*Se*le*(1+2.75*(A+R)+R*A),x=L*L,be=1.5*Gn*P*n.no,Ce=.5*be*Gn*P,Ae=-.46875*Yp*P*P*n.no,n.mdot=n.no+.5*be*z*n.con41+.0625*Ce*z*(13-78*L+137*x),n.argpdot=-.5*be*xe+.0625*Ce*(7-114*L+395*x)+Ae*(3-36*L+49*x),y=-be*Be,n.nodedot=y+(.5*Ce*(4-19*L)+2*Ae*(3-7*L))*Be,qe=n.argpdot+n.nodedot,n.omgcof=n.bstar*p*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-Xi*u*n.bstar/R),n.nodecf=3.5*le*y*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(Be+1)>15e-13?n.xlcof=-.25*Hn*K*(3+5*Be)/(1+Be):n.xlcof=-.25*Hn*K*(3+5*Be)/C,n.aycof=-.5*Hn*K;var _e=1+n.eta*Math.cos(n.mo);if(n.delmo=_e*_e*_e,n.sinmao=Math.sin(n.mo),n.x7thm1=7*L-1,2*Dt/n.no>=225){n.method="d",n.isimp=1,ye=0,T=n.inclo;var Me={epoch:r,ep:n.ecco,argpp:n.argpo,tc:ye,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},Z=Kp(Me);n.e3=Z.e3,n.ee2=Z.ee2,n.peo=Z.peo,n.pgho=Z.pgho,n.pho=Z.pho,n.pinco=Z.pinco,n.plo=Z.plo,n.se2=Z.se2,n.se3=Z.se3,n.sgh2=Z.sgh2,n.sgh3=Z.sgh3,n.sgh4=Z.sgh4,n.sh2=Z.sh2,n.sh3=Z.sh3,n.si2=Z.si2,n.si3=Z.si3,n.sl2=Z.sl2,n.sl3=Z.sl3,n.sl4=Z.sl4,m=Z.sinim,f=Z.cosim,E=Z.em,w=Z.emsq,Y=Z.s1,ie=Z.s2,J=Z.s3,Q=Z.s4,D=Z.s5,ue=Z.ss1,pe=Z.ss2,te=Z.ss3,fe=Z.ss4,Ue=Z.ss5,ve=Z.sz1,De=Z.sz3,He=Z.sz11,Fe=Z.sz13,I=Z.sz21,Ze=Z.sz23,ce=Z.sz31,Ee=Z.sz33,n.xgh2=Z.xgh2,n.xgh3=Z.xgh3,n.xgh4=Z.xgh4,n.xh2=Z.xh2,n.xh3=Z.xh3,n.xi2=Z.xi2,n.xi3=Z.xi3,n.xl2=Z.xl2,n.xl3=Z.xl3,n.xl4=Z.xl4,n.zmol=Z.zmol,n.zmos=Z.zmos,q=Z.nm,g=Z.z1,N=Z.z3,re=Z.z11,ne=Z.z13,se=Z.z21,Te=Z.z23,oe=Z.z31,ge=Z.z33;var Ge={inclo:T,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},Ve=tl(n,Ge);n.ecco=Ve.ep,n.inclo=Ve.inclp,n.nodeo=Ve.nodep,n.argpo=Ve.argpp,n.mo=Ve.mp,k=0,M=0,W=0;var ft={cosim:f,emsq:w,argpo:n.argpo,s1:Y,s2:ie,s3:J,s4:Q,s5:D,sinim:m,ss1:ue,ss2:pe,ss3:te,ss4:fe,ss5:Ue,sz1:ve,sz3:De,sz11:He,sz13:Fe,sz21:I,sz23:Ze,sz31:ce,sz33:Ee,t:n.t,tc:ye,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:qe,z1:g,z3:N,z11:re,z13:ne,z21:se,z23:Te,z31:oe,z33:ge,ecco:n.ecco,eccsq:me,em:E,argpm:k,inclm:T,mm:W,nm:q,nodem:M,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},je=Zp(ft);n.irez=je.irez,n.atime=je.atime,n.d2201=je.d2201,n.d2211=je.d2211,n.d3210=je.d3210,n.d3222=je.d3222,n.d4410=je.d4410,n.d4422=je.d4422,n.d5220=je.d5220,n.d5232=je.d5232,n.d5421=je.d5421,n.d5433=je.d5433,n.dedt=je.dedt,n.didt=je.didt,n.dmdt=je.dmdt,n.dnodt=je.dnodt,n.domdt=je.domdt,n.del1=je.del1,n.del2=je.del2,n.del3=je.del3,n.xfact=je.xfact,n.xlamo=je.xlamo,n.xli=je.xli,n.xni=je.xni}n.isimp!==1&&(_=n.cc1*n.cc1,n.d2=4*Se*Ie*_,Oe=n.d2*Ie*n.cc1/3,n.d3=(17*Se+U)*Oe,n.d4=.5*Oe*Se*Ie*(221*Se+31*U)*n.cc1,n.t3cof=n.d2+2*_,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*_)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*_*(2*n.d2+_)))}nl(n,0),n.init="n"}function vo(n,e){var t="i",i=1440/(2*Dt),r=0,s={};s.error=0,s.satnum=n.substring(2,7),s.epochyr=parseInt(n.substring(18,20),10),s.epochdays=parseFloat(n.substring(20,32)),s.ndot=parseFloat(n.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),s.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=zi,s.nodeo*=zi,s.argpo*=zi,s.mo*=zi,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=jp(r,s.epochdays),a=o.mon,l=o.day,c=o.hr,h=o.minute,d=o.sec;return s.jdsatepoch=Is(r,a,l,c,h,d),Qp(s,{opsmode:t,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function em(n){return tm(n)||nm(n)||im(n)||rm()}function tm(n){if(Array.isArray(n))return Ts(n)}function nm(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function im(n,e){if(n){if(typeof n=="string")return Ts(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ts(n,e)}}function Ts(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function rm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xo(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),s=Is.apply(void 0,em(r)),o=(s-i.jdsatepoch)*kp;return nl(i,o)}function il(n){return n*Vp}function Mo(n){if(n<-Dt/2||n>Dt/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return il(n)}function So(n){if(n<-Dt||n>Dt)throw new RangeError("Longitude radians must be in range [-pi; pi].");return il(n)}function Eo(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),s=(t-i)/t,o=2*s-s*s,a=Math.atan2(n.y,n.x)-e;a<-Dt;)a+=ht;for(;a>Dt;)a-=ht;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*o*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:a,latitude:h,height:f}}var sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function am(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rl={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(sm,function(){var t=function(){function i(m){return o.appendChild(m.dom),m}function r(m){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===m?"block":"none";s=m}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-a,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,f=3*c,m=2*c,_=3*c,v=15*c,p=74*c,u=30*c,b=document.createElement("canvas");b.width=h,b.height=d,b.style.cssText="width:80px;height:48px";var x=b.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,h,d),x.fillStyle=r,x.fillText(i,f,m),x.fillRect(_,v,p,u),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(_,v,p,u),{dom:b,update:function(E,w){o=Math.min(o,E),a=Math.max(a,E),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,h,v),x.fillStyle=r,x.fillText(l(E)+" "+i+" ("+l(o)+"-"+l(a)+")",f,m),x.drawImage(b,_+c,v,p-c,u,_,v,p-c,u),x.fillRect(_+p-c,v,c,u),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(_+p-c,v,c,l((1-E/w)*u))}}},t})})(rl);var om=rl.exports;const lm=am(om),sl=Math.sqrt(3),cm=.5*(sl-1),Fi=(3-sl)/6,yo=n=>Math.floor(n)|0,To=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function hm(n=Math.random){const e=um(n),t=new Float64Array(e).map(r=>To[r%12*2]),i=new Float64Array(e).map(r=>To[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const h=(s+o)*cm,d=yo(s+h),f=yo(o+h),m=(d+f)*Fi,_=d-m,v=f-m,p=s-_,u=o-v;let b,x;p>u?(b=1,x=0):(b=0,x=1);const E=p-b+Fi,w=u-x+Fi,R=p-1+2*Fi,A=u-1+2*Fi,k=d&255,M=f&255;let T=.5-p*p-u*u;if(T>=0){const ee=k+e[M],P=t[ee],G=i[ee];T*=T,a=T*T*(P*p+G*u)}let W=.5-E*E-w*w;if(W>=0){const ee=k+b+e[M+x],P=t[ee],G=i[ee];W*=W,l=W*W*(P*E+G*w)}let q=.5-R*R-A*A;if(q>=0){const ee=k+1+e[M+1],P=t[ee],G=i[ee];q*=q,c=q*q*(P*R+G*A)}return 70*(a+l+c)}}function um(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}function dm(n,e){let t,i,r,s,o,a,l,c,h,d,f="sandbox",m=!0,_=!1;const v=66,p=2;let u,b;const x=6371,E=1,w=E/x,R=2*Math.PI/86400,A=23.4*(Math.PI/180),k=27.32*24*3600,M=2*Math.PI/k;let T=1,W;const q=new lm;q.showPanel(0),document.body.appendChild(q.dom),q.dom.id="statistics",window.addEventListener("keydown",z=>{(z.key==="R"||z.key==="r")&&(m=!m)}),window.addEventListener("keydown",z=>{(z.key==="W"||z.key==="w")&&(_=!_,o.traverse(function(K){K.isMesh&&(K.material.wireframe=_,K.material.needsUpdate=!0)}))});function ee(){t=new Pp,i=new Yt(5,window.innerWidth/window.innerHeight,.1,3e5),i.position.set(0,0,800),i.position.z=66,r=new el({alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(12632256,0),r.shadowMap.enabled=!0,r.shadowMap.type=Ao,document.getElementById(n).appendChild(r.domElement),s=new Hp(i,r.domElement),s.enableDamping=!0,s.enableZoom=!0,s.enablePan=!1,s.dampingFactor=.25,s.zoomSpeed=.666,s.rotateSpeed=.25,s.minDistance=10,s.maxDistance=100,I(),Oe(),P(),G(),o=new Bn,o.rotation.z=A,t.add(o),a=new Bn,t.add(a),D(),$(),Te(),fe(),Ne(),j(),window.addEventListener("resize",he,!1),he(),ne()}function P(){const z=new zp(4210752,1);t.add(z),u=new Op(9079434,100),u.castShadow=!0,t.add(u);const K=new Ip(16777147,526368,.5);t.add(K);const de=E*109*T,_e=new zn(de,24,24),Me=new Ls({color:16776960,emissive:16753920,opacity:.25,transparent:!0,wireframe:!0,alphaHash:!0});l=new Vt(_e,Me),t.add(l);const Z=new Bn;t.add(Z),Z.add(l),Z.add(u)}function G(){const z=1496e5*w*T;l.position.set(z,0,0),u.position.copy(l.position)}const X=new hm;let Y=0;const ie=1e-5,J=.002;function Q(){Y+=ie;const z=X(Y,0)*J,K=X(0,Y)*J,de=X(Y,Y)*J;l.rotation.x+=z,l.rotation.y+=K,l.rotation.z+=de}function D(){const z=E*.273,K=new vr({color:9079434,roughness:1,metalness:1.25}),de=new zn(z,32,32);W=new Vt(de,K),a.add(W)}function U(){if(!W)return;const K=384400*w*T,_e=ce.getTime()/1e3*M%(2*Math.PI),Me=.0549,Z=K*(Math.cos(_e)-Me),Ge=K*Math.sin(_e)*Math.sqrt(1-Me**2);let Ve=new O(Z,0,Ge);const ft=5.145*(Math.PI/180);Ve.applyAxisAngle(new O(1,0,0),ft),Ve.applyAxisAngle(new O(0,0,1),A),W.position.copy(Ve)}let ue,pe,te;function fe(){fetch("https://orbital-bbfd.onrender.com/satellites").then(z=>{if(!z.ok)throw new Error("Failed to load cached TLE data");return z.json()}).then(z=>{const K=z.satellites;if(console.log("Fetched TLE Data:",K),!Array.isArray(K))throw new Error("Invalid TLE data format: Expected an array");const de=[],_e=[];K.forEach((Me,Z)=>{try{const Ve=vo(Me.tleLine1.trim(),Me.tleLine2.trim()).inclo*(180/Math.PI);Math.abs(Ve)<1?de.push(Me):_e.push(Me)}catch(Ge){console.error(`Error parsing TLE at index ${Z}:`,Me,Ge)}}),console.log("Geostationary TLEs:",de.length),console.log("Non-Geostationary TLEs:",_e.length),Ue(de,_e),e()}).catch(z=>{console.error("Failed to load TLE data:",z),e()})}function Ue(z,K){const de=new vr({color:16777215,metalness:1,roughness:.2,wireframe:!0,transparent:!0,opacity:.8,alphaHash:!0}),_e=new vr({color:16711680,metalness:1,roughness:.2,wireframe:!0,transparent:!0,opacity:.8,alphaHash:!0});d=Fe(z,de,!1,!0),pe=Fe(K,_e,!1,!1),te=Fe(K,_e,!0,!1),t.add(pe),t.add(d),ue=pe,console.log("Satellite meshes created and added to scene.")}const ve=new Dr,De=new ut;function He(z){return i.updateMatrixWorld(),De.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ve.setFromProjectionMatrix(De),ve.containsPoint(z)}function Fe(z,K,de=!1,_e=!1){const Me=z.length,Z=de?new zn(.002,16,16):new zn(.003,2,3),Ge=new Up(Z,K,Me),Ve=new pt,ft=ce.getTime()/1e3%86400,je=_e?ft*R%(2*Math.PI):0,Rt=ys(ce);return z.forEach((_t,St)=>{const vt=vo(_t.tleLine1.trim(),_t.tleLine2.trim());Ge.userData[St]={satrec:vt};const rt=xo(vt,ce);if(!rt.position){console.error(`Failed to propagate satellite at index ${St}`);return}const nt=Eo(rt.position,Rt),dt=nt.height*w*T,S=Mo(nt.latitude),F=So(nt.longitude),B=Be(S,F,E+dt);_e&&B.applyAxisAngle(new O(0,1,0),je),Ve.position.copy(B),Ve.updateMatrix(),Ge.setMatrixAt(St,Ve.matrix)}),Ge}function I(){const z=window.innerWidth<=768;f==="sandbox"?(i.position.z=z?v*p:v,s.minDistance=z?50:10,s.maxDistance=z?500:100):f==="fixed"&&(i.position.z=z?40:30,s.minDistance=z?20:30,s.maxDistance=z?40:50)}function Ze(z,K){ue&&t.remove(ue),K||qe(),ue=K?te:pe,t.add(ue);const de=K?pe:te;if(de){const _e=new pt;for(let Me=0;Me<de.count;Me++)de.getMatrixAt(Me,_e.matrix),ue.setMatrixAt(Me,_e.matrix);ue.instanceMatrix.needsUpdate=!0}}let ce;const Ee=1e3/24;let ye=1e3;function Oe(){fetch("https://orbital-bbfd.onrender.com/satellites").then(z=>{if(!z.ok)throw new Error("Failed to fetch last cache time");return z.json()}).then(z=>{ce=new Date(z.timestamp),document.getElementById("simulation-time").textContent=ce.toUTCString().replace("GMT","UTC")}).catch(z=>{console.error("Error loading cache time:",z),ce=new Date("2024-11-01T00:00:00Z")})}function be(){ce=new Date(ce.getTime()+Ee*ye);let z=ce.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=z}function Ce(){if(m){const K=ce.getTime()/1e3%86400*R%(2*Math.PI);o.rotation.set(0,0,0),o.rotateZ(A),o.rotateY(K)}}const Ae=new Map;function Ie(z,K=!1){const de=ys(ce),_e=new pt,Me=ce.getTime()/1e3%86400,Z=K?Me*R%(2*Math.PI):0,Ge=new O(0,0,0);for(let Ve=0;Ve<z.count;Ve++){const{satrec:ft}=z.userData[Ve],je=xo(ft,ce);if(!je.position)continue;const Rt=Eo(je.position,de),_t=Rt.height*w*T,St=Mo(Rt.latitude),vt=So(Rt.longitude),rt=Be(St,vt,E+_t);if(rt.applyAxisAngle(new O(0,0,1),A),K&&rt.applyAxisAngle(new O(0,1,0),Z),_e.position.copy(rt),_e.updateMatrix(),z.setMatrixAt(Ve,_e.matrix),f==="fixed"){if(!He(rt)){if(Ae.has(Ve)){const S=Ae.get(Ve);t.remove(S),S.geometry.dispose(),S.material.dispose(),Ae.delete(Ve)}continue}if(!Ae.has(Ve)){const S=new nn,F=new Float32Array(6);S.setAttribute("position",new Wt(F,3));const B=new Sr({color:16777215,transparent:!0,alphaHash:!0,opacity:.6}),V=new Ni(S,B);t.add(V),Ae.set(Ve,V)}const nt=Ae.get(Ve),dt=nt.geometry.attributes.position.array;dt[0]=Ge.x,dt[1]=Ge.y,dt[2]=Ge.z,dt[3]=rt.x,dt[4]=rt.y,dt[5]=rt.z,nt.geometry.attributes.position.needsUpdate=!0}}z.instanceMatrix.needsUpdate=!0}function qe(){Ae.forEach((z,K)=>{t.remove(z),z.geometry.dispose(),z.material.dispose()}),Ae.clear()}let y=new Bp,g=0,re=1/24;function ne(){g+=y.getDelta();let z=null,K=null;if(g>re){if(q.begin(),c=requestAnimationFrame(ne),be(),Ce(),ue&&Ie(ue,!1),d&&Ie(d,!0),U(),Q(),G(),f==="fixed"){const{lat:de,lon:_e}=oe.fixed.coordinates[se];(de!==z||_e!==K)&&(C(de,_e),z=de,K=_e)}s.update(),r.render(t,i),q.end(),g=g%re}requestAnimationFrame(ne)}let se="newYork";function Te(){document.getElementById("chapter-sandbox").addEventListener("click",()=>{f="sandbox",ae(),Ze(h,!1)}),document.getElementById("chapter-newYork").addEventListener("click",()=>{f="fixed",se="newYork",C(oe.fixed.coordinates.newYork.lat,oe.fixed.coordinates.newYork.lon),Ze(h,!0)}),document.getElementById("chapter-paris").addEventListener("click",()=>{f="fixed",se="paris",C(oe.fixed.coordinates.paris.lat,oe.fixed.coordinates.paris.lon),Ze(h,!0)}),document.getElementById("chapter-tokyo").addEventListener("click",()=>{f="fixed",se="tokyo",C(oe.fixed.coordinates.tokyo.lat,oe.fixed.coordinates.tokyo.lon),Ze(h,!0)})}const oe={sandbox:{controls:{minDistance:10,maxDistance:100,enablePan:!0,zoomSpeed:.666,rotateSpeed:.25}},fixed:{coordinates:{newYork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},tokyo:{lat:35.6895,lon:139.6917}},controls:{minDistance:3,maxDistance:3,enablePan:!1,zoomSpeed:0,rotateSpeed:0}}};function ge(z){const K=oe[z];if(!K)return;const{controls:de}=K;de&&(s.minDistance=de.minDistance,s.maxDistance=de.maxDistance,s.enablePan=de.enablePan,s.zoomSpeed=de.zoomSpeed,s.rotateSpeed=de.rotateSpeed)}function C(z,K){ge("fixed");const _e=Be(z,K,E);function Me(){const Ve=ce.getTime()/1e3%86400*R%(2*Math.PI);o.rotation.set(0,0,0),o.rotateZ(A),o.rotateY(Ve);const ft=_e.clone().applyMatrix4(o.matrixWorld),je=ft.clone();i.position.copy(je),i.lookAt(ft)}function Z(){f==="fixed"&&Me()}Z()}function ae(){s.enabled=!0,i.position.set(0,0,66),i.lookAt(new O(0,0,0)),ge("sandbox")}function $(){const z=new zn(E,64,64),K=new vr({color:0,opacity:1,roughness:2,metalness:.5,emissive:0,transparent:!0,alphaHash:!0,wireframe:_});b=new Vt(z,K),b.castShadow=!0,b.receiveShadow=!0,o.add(b)}return ee(),{dispose(){window.removeEventListener("resize",he),cancelAnimationFrame(c);const z=document.getElementById(n);z&&r.domElement&&z.removeChild(r.domElement)}};async function Ne(){console.log("Attempting to load data...");const z=["data/ne_110m_coastline.geojson","data/ne_110m_graticules_10.geojson","data/ne_110m_land.geojson","data/ne_110m_ocean.geojson","data/ne_50m_ocean.geojson"];try{const K=z.map(de=>fetch(de).then(_e=>{if(!_e.ok)throw new Error(`Network response was not ok for ${de}`);return _e.json()}).then(_e=>(Pe(de,_e),"loaded")).catch(_e=>{throw console.error(`Error loading ${de}:`,_e),_e}));await Promise.all(K),console.log("All GeoJSON data loaded successfully.")}catch(K){console.error("Failed to load some GeoJSON data:",K)}}function Pe(z,K){switch(z){case"data/ne_110m_graticules_10.geojson":console.log("Loaded graticules:",K),Se(K);break;case"data/ne_110m_coastline.geojson":console.log("loaded coastlines:",K),we(K);break;case"data/ne_110m_land.geojson":break;case"data/ne_50m_ocean.geojson":console.log("loaded ocean:",K);break;default:console.warn("Unrecognized GeoJSON URL:",z);break}}function we(z){const K=new Sr({color:16777215,opacity:.75,alphaHash:!0}),de=1;z.features.forEach(_e=>{const Me=_e.geometry.coordinates;if(_e.geometry.type==="LineString"){const Z=xe(Me,de),Ge=new Ni(Z,K);o.add(Ge)}else _e.geometry.type==="MultiLineString"&&Me.forEach(Z=>{const Ge=xe(Z,de),Ve=new Ni(Ge,K);o.add(Ve)})})}function Se(z){const K=new Sr({color:11184810,opacity:.35,alphaHash:!0,linewidth:1}),de=E;z.features.forEach(_e=>{const Me=_e.geometry.coordinates;if(_e.geometry.type==="LineString"){const Z=xe(Me,de),Ge=new Ni(Z,K);o.add(Ge)}else _e.geometry.type==="MultiLineString"&&Me.forEach(Z=>{const Ge=xe(Z,de),Ve=new Ni(Ge,K);o.add(Ve)})})}function xe(z,K){const de=new nn,_e=[];z.forEach(([Z,Ge])=>{const Ve=Be(Ge,Z,K);_e.push(Ve.x,Ve.y,Ve.z)});const Me=new Float32Array(_e);return de.setAttribute("position",new Wt(Me,3)),de}function Be(z,K,de){const _e=(90-z)*(Math.PI/180),Me=(K+180)*(Math.PI/180),Z=-de*Math.sin(_e)*Math.cos(Me),Ge=de*Math.sin(_e)*Math.sin(Me),Ve=de*Math.cos(_e);return new O(Z,Ve,Ge)}function L(z,K=2e4){const Me=Math.log(1),Ge=(Math.log(K)-Me)/100;return Math.exp(Me+Ge*(z-0))}function me(z,K,de){return(Math.log10(z)-K)/(de-K)*100}function le(z,K,de){const _e=K+z/100*(de-K);return Math.pow(10,_e)}function j(){const z=document.getElementById("exaggeration-slider"),K=document.getElementById("exaggeration-value"),de=1;function _e(){return f==="fixed"?{minExp:Math.log10(.05),maxExp:Math.log10(1)}:{minExp:Math.log10(.1),maxExp:Math.log10(25)}}let{minExp:Me,maxExp:Z}=_e();z.value=me(de,Me,Z),T=de,K.textContent=T.toFixed(2)+"x",z.addEventListener("input",_t=>{const St=parseFloat(_t.target.value);({minExp:Me,maxExp:Z}=_e()),T=le(St,Me,Z),K.textContent=T.toFixed(2)+"x",console.log("Distance Compression Factor:",T),ue&&Ie(ue,!1),d&&Ie(d,!0)});const Ge=document.getElementById("speed-slider"),Ve=document.getElementById("speed-value"),ft=1;Ge.value=0,ye=ft,Ve.textContent=ye.toFixed(0)+"x";function je(){return f==="sandbox"?2e4:500}Ge.addEventListener("input",_t=>{const St=parseFloat(_t.target.value),vt=je();ye=L(St,vt),Ve.textContent=ye.toFixed(0)+"x";let rt=ce.toUTCString().replace("GMT","UTC");document.getElementById("simulation-time").textContent=rt,document.getElementById("simulation-time").textContent=ce.toUTCString().replace("GMT","UTC")}),document.getElementById("reset-button").addEventListener("click",()=>{({minExp:Me,maxExp:Z}=_e()),z.value=me(de,Me,Z),T=de,K.textContent=T.toFixed(2)+"x",Ge.value=0,ye=ft,Ve.textContent=ye.toFixed(0)+"x",ue&&Ie(ue)})}function he(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight);const z=window.innerWidth<=768;i.position.z=z?v*p:v}}const fm="threeContainer1",Ns=document.createElement("div");Ns.id="loadingOverlay";Ns.innerHTML='<div id="loadingText">Loading</div>';document.body.appendChild(Ns);function pm(){const n=document.getElementById("loadingText"),e=setInterval(()=>{n.textContent+="."},50);return console.log("Loading animation started"),()=>{clearInterval(e),console.log("Loading animation stopped")}}const mm=pm();function gm(){setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none",mm()},100)}dm(fm,gm);
