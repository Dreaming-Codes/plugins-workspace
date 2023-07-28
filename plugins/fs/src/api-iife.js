if("__TAURI__"in window){var __TAURI_FS__=function(e){"use strict";var t=Object.defineProperty,n=(e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:!0})},r=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},i=(e,t,n)=>(r(e,t,"read from private field"),n?n.call(e):t.get(e)),o=(e,t,n,i)=>(r(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n);function a(e,t=!1){let n=window.crypto.getRandomValues(new Uint32Array(1))[0],r=`_${n}`;return Object.defineProperty(window,r,{value:n=>(t&&Reflect.deleteProperty(window,r),e?.(n)),writable:!1,configurable:!0}),n}n({},{Channel:()=>s,PluginListener:()=>u,addPluginListener:()=>p,convertFileSrc:()=>_,invoke:()=>l,transformCallback:()=>a});var c,s=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,((e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)})(this,c,(()=>{})),this.id=a((e=>{i(this,c).call(this,e)}))}set onmessage(e){o(this,c,e)}get onmessage(){return i(this,c)}toJSON(){return`__CHANNEL__:${this.id}`}};c=new WeakMap;var u=class{constructor(e,t,n){this.plugin=e,this.event=t,this.channelId=n}async unregister(){return l(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}};async function p(e,t,n){let r=new s;return r.onmessage=n,l(`plugin:${e}|register_listener`,{event:t,handler:r}).then((()=>new u(e,t,r.id)))}async function l(e,t={}){return new Promise(((n,r)=>{let i=a((e=>{n(e),Reflect.deleteProperty(window,`_${o}`)}),!0),o=a((e=>{r(e),Reflect.deleteProperty(window,`_${i}`)}),!0);window.__TAURI_IPC__({cmd:e,callback:i,error:o,...t})}))}function _(e,t="asset"){let n=encodeURIComponent(e);return navigator.userAgent.includes("Windows")?`https://${t}.localhost/${n}`:`${t}://localhost/${n}`}n({},{BaseDirectory:()=>y,appCacheDir:()=>g,appConfigDir:()=>f,appDataDir:()=>h,appLocalDataDir:()=>w,appLogDir:()=>x,audioDir:()=>m,basename:()=>W,cacheDir:()=>v,configDir:()=>A,dataDir:()=>D,delimiter:()=>k,desktopDir:()=>I,dirname:()=>S,documentDir:()=>R,downloadDir:()=>T,executableDir:()=>b,extname:()=>H,fontDir:()=>U,homeDir:()=>E,isAbsolute:()=>J,join:()=>M,localDataDir:()=>O,normalize:()=>B,pictureDir:()=>C,publicDir:()=>N,resolve:()=>z,resolveResource:()=>V,resourceDir:()=>P,runtimeDir:()=>j,sep:()=>$,tempDir:()=>L,templateDir:()=>F,videoDir:()=>K});var d,y=((d=y||{})[d.Audio=1]="Audio",d[d.Cache=2]="Cache",d[d.Config=3]="Config",d[d.Data=4]="Data",d[d.LocalData=5]="LocalData",d[d.Document=6]="Document",d[d.Download=7]="Download",d[d.Picture=8]="Picture",d[d.Public=9]="Public",d[d.Video=10]="Video",d[d.Resource=11]="Resource",d[d.Temp=12]="Temp",d[d.AppConfig=13]="AppConfig",d[d.AppData=14]="AppData",d[d.AppLocalData=15]="AppLocalData",d[d.AppCache=16]="AppCache",d[d.AppLog=17]="AppLog",d[d.Desktop=18]="Desktop",d[d.Executable=19]="Executable",d[d.Font=20]="Font",d[d.Home=21]="Home",d[d.Runtime=22]="Runtime",d[d.Template=23]="Template",d);async function f(){return l("plugin:path|resolve_directory",{directory:13})}async function h(){return l("plugin:path|resolve_directory",{directory:14})}async function w(){return l("plugin:path|resolve_directory",{directory:15})}async function g(){return l("plugin:path|resolve_directory",{directory:16})}async function m(){return l("plugin:path|resolve_directory",{directory:1})}async function v(){return l("plugin:path|resolve_directory",{directory:2})}async function A(){return l("plugin:path|resolve_directory",{directory:3})}async function D(){return l("plugin:path|resolve_directory",{directory:4})}async function I(){return l("plugin:path|resolve_directory",{directory:18})}async function R(){return l("plugin:path|resolve_directory",{directory:6})}async function T(){return l("plugin:path|resolve_directory",{directory:7})}async function b(){return l("plugin:path|resolve_directory",{directory:19})}async function U(){return l("plugin:path|resolve_directory",{directory:20})}async function E(){return l("plugin:path|resolve_directory",{directory:21})}async function O(){return l("plugin:path|resolve_directory",{directory:5})}async function C(){return l("plugin:path|resolve_directory",{directory:8})}async function N(){return l("plugin:path|resolve_directory",{directory:9})}async function P(){return l("plugin:path|resolve_directory",{directory:11})}async function V(e){return l("plugin:path|resolve_directory",{directory:11,path:e})}async function j(){return l("plugin:path|resolve_directory",{directory:22})}async function F(){return l("plugin:path|resolve_directory",{directory:23})}async function K(){return l("plugin:path|resolve_directory",{directory:10})}async function x(){return l("plugin:path|resolve_directory",{directory:17})}async function L(e){return l("plugin:path|resolve_directory",{directory:12})}function $(){return window.__TAURI__.path.__sep}function k(){return window.__TAURI__.path.__delimiter}async function z(...e){return l("plugin:path|resolve",{paths:e})}async function B(e){return l("plugin:path|normalize",{path:e})}async function M(...e){return l("plugin:path|join",{paths:e})}async function S(e){return l("plugin:path|dirname",{path:e})}async function H(e){return l("plugin:path|extname",{path:e})}async function W(e,t){return l("plugin:path|basename",{path:e,ext:t})}async function J(e){return l("plugin:path|isAbsolute",{path:e})}async function q(e,t,n){"object"==typeof n&&Object.freeze(n),"object"==typeof e&&Object.freeze(e);const r={path:"",contents:""};let i=n;return"string"==typeof e?r.path=e:(r.path=e.path,r.contents=e.contents),"string"==typeof t?r.contents=null!=t?t:"":i=t,await window.__TAURI_INVOKE__("plugin:fs|write_file",{path:r.path,contents:Array.from((new TextEncoder).encode(r.contents)),options:i})}return e.BaseDirectory=y,e.Dir=y,e.copyFile=async function(e,t,n={}){return await window.__TAURI_INVOKE__("plugin:fs|copy_file",{source:e,destination:t,options:n})},e.createDir=async function(e,t={}){return await window.__TAURI_INVOKE__("plugin:fs|create_dir",{path:e,options:t})},e.exists=async function(e){return await window.__TAURI_INVOKE__("plugin:fs|exists",{path:e})},e.metadata=async function(e){return await window.__TAURI_INVOKE__("plugin:fs|metadata",{path:e}).then((e=>{const{accessedAtMs:t,createdAtMs:n,modifiedAtMs:r,...i}=e;return{accessedAt:new Date(t),createdAt:new Date(n),modifiedAt:new Date(r),...i}}))},e.readBinaryFile=async function(e,t={}){const n=await window.__TAURI_INVOKE__("plugin:fs|read_file",{path:e,options:t});return Uint8Array.from(n)},e.readDir=async function(e,t={}){return await window.__TAURI_INVOKE__("plugin:fs|read_dir",{path:e,options:t})},e.readTextFile=async function(e,t={}){return await window.__TAURI_INVOKE__("plugin:fs|read_text_file",{path:e,options:t})},e.removeDir=async function(e,t={}){return await window.__TAURI_INVOKE__("plugin:fs|remove_dir",{path:e,options:t})},e.removeFile=async function(e,t={}){return await window.__TAURI_INVOKE__("plugin:fs|remove_file",{path:e,options:t})},e.renameFile=async function(e,t,n={}){return await window.__TAURI_INVOKE__("plugin:fs|rename_file",{oldPath:e,newPath:t,options:n})},e.writeBinaryFile=async function(e,t,n){"object"==typeof n&&Object.freeze(n),"object"==typeof e&&Object.freeze(e);const r={path:"",contents:[]};let i=n;return"string"==typeof e?r.path=e:(r.path=e.path,r.contents=e.contents),t&&"dir"in t?i=t:"string"==typeof e&&(r.contents=null!=t?t:[]),await window.__TAURI_INVOKE__("plugin:fs|write_file",{path:r.path,contents:Array.from(r.contents instanceof ArrayBuffer?new Uint8Array(r.contents):r.contents),options:i})},e.writeFile=q,e.writeTextFile=q,e}({});Object.defineProperty(window.__TAURI__,"fs",{value:__TAURI_FS__})}