import{a as G,g as z}from"./vendor-CrU-_v2f.js";import{r as Q,a as Z}from"./main-D4BSZ1eu.js";function J(y,o){for(var h=0;h<o.length;h++){const n=o[h];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in y)){const d=Object.getOwnPropertyDescriptor(n,i);d&&Object.defineProperty(y,i,d.get?d:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var E,Y;function $(){if(Y)return E;Y=1;var y=Object.create,o=Object.defineProperty,h=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,L=(a,e,t)=>e in a?o(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,M=(a,e)=>{for(var t in e)o(a,t,{get:e[t],enumerable:!0})},A=(a,e,t,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of n(e))!d.call(a,r)&&r!==t&&o(a,r,{get:()=>e[r],enumerable:!(p=h(e,r))||p.enumerable});return a},k=(a,e,t)=>(t=a!=null?y(i(a)):{},A(!a||!a.__esModule?o(t,"default",{value:a,enumerable:!0}):t,a)),N=a=>A(o({},"__esModule",{value:!0}),a),s=(a,e,t)=>(L(a,typeof e!="symbol"?e+"":e,t),t),C={};M(C,{default:()=>O}),E=N(C);var m=k(G()),c=Q(),R=Z();const j="https://www.youtube.com/iframe_api",U="YT",V="onYouTubeIframeAPIReady",P=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,T=/user\/([a-zA-Z0-9_-]+)\/?/,B=/youtube-nocookie\.com/,x="https://www.youtube-nocookie.com";class O extends m.Component{constructor(){super(...arguments),s(this,"callPlayer",c.callPlayer),s(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(P.test(e)){const[,t]=e.match(P);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(T.test(e)){const[,t]=e.match(T);return{listType:"user_uploads",list:t}}return{}}),s(this,"onStateChange",e=>{const{data:t}=e,{onPlay:p,onPause:r,onBuffer:v,onBufferEnd:w,onEnded:S,onReady:D,loop:_,config:{playerVars:u,onUnstarted:g}}=this.props,{UNSTARTED:b,PLAYING:f,PAUSED:l,BUFFERING:K,ENDED:q,CUED:F}=window[U].PlayerState;if(t===b&&g(),t===f&&(p(),w()),t===l&&r(),t===K&&v(),t===q){const H=!!this.callPlayer("getPlaylist");_&&!H&&(u.start?this.seekTo(u.start):this.play()),S()}t===F&&D()}),s(this,"mute",()=>{this.callPlayer("mute")}),s(this,"unmute",()=>{this.callPlayer("unMute")}),s(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||P.test(e)?null:e.match(R.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:p,muted:r,playsinline:v,controls:w,loop:S,config:D,onError:_}=this.props,{playerVars:u,embedOptions:g}=D,b=this.getID(e);if(t){if(P.test(e)||T.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:b,startSeconds:(0,c.parseStartTime)(e)||u.start,endSeconds:(0,c.parseEndTime)(e)||u.end});return}(0,c.getSDK)(j,U,V,f=>f.loaded).then(f=>{this.container&&(this.player=new f.Player(this.container,{width:"100%",height:"100%",videoId:b,playerVars:{autoplay:p?1:0,mute:r?1:0,controls:w?1:0,start:(0,c.parseStartTime)(e),end:(0,c.parseEndTime)(e),origin:window.location.origin,playsinline:v?1:0,...this.parsePlaylist(e),...u},events:{onReady:()=>{S&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:l=>this.props.onPlaybackRateChange(l.data),onPlaybackQualityChange:l=>this.props.onPlaybackQualityChange(l),onStateChange:this.onStateChange,onError:l=>_(l.data)},host:B.test(e)?x:void 0,...g}))},_),g.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),!t&&!this.props.playing&&this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return m.default.createElement("div",{style:t},m.default.createElement("div",{ref:this.ref}))}}return s(O,"displayName","YouTube"),s(O,"canPlay",R.canPlay.youtube),E}var I=$();const W=z(I),te=J({__proto__:null,default:W},[I]);export{te as Y};
