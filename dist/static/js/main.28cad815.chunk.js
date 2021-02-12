(this["webpackJsonpwebtrc-stats-parser"]=this["webpackJsonpwebtrc-stats-parser"]||[]).push([[0],{262:function(e,t,a){},483:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a(1),r=a(30),s=a.n(r),c=(a(262),a(33)),d=a(139),l=a(494),o=a(490),y=a(489),u=a(493),m=a(492),p=(a(263),a(82)),f=a(192),k=a(193),h=a(226),b=a(223),j=a(491),K=a(495),v=a(34),x=a.n(v),O=a(51);var g,S=function(e){var t=e.title,a=e.data;return Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{style:{fontWeight:"bold"},children:t}),Object(n.jsxs)(O.c,{width:600,height:300,data:a,margin:{top:5,right:30,left:20,bottom:5},children:[Object(n.jsx)(O.a,{}),Object(n.jsx)(O.e,{dataKey:"time"}),Object(n.jsx)(O.f,{dataKey:"value"}),Object(n.jsx)(O.d,{}),Object(n.jsx)(O.b,{type:"monotone",dataKey:"value",stroke:"#8884d8",activeDot:{r:8}})]})]})},C="RTCInboundRTPAudioStream",I="RTCOutboundRTPAudioStream",T="RTCInboundRTPVideoStream",V="RTCOutboundRTPVideoStream",R="RTCIceCandidate",P="RTCIceCandidatePair",L=[{text:"SDK",key:"sdk"},{text:"SDK Version",key:"version"},{text:"Platform",key:"platform"},{text:"Call Id",key:"callId"},{text:"Start Time",key:"startTime",isDate:!0},{text:"End Time",key:"endTime",isDate:!0},{text:"Sampling Period (s)",key:"samplingPeriod"}],_=a(19),A=(g={},Object(_.a)(g,P,(function(){return{schema:{startTime:0,endTime:0,nominated:!1,localCandidateId:"",remoteCandidateId:"",transportId:""},standartKeys:[{key:"nominated",defaultValue:!1,type:"boolean"},{key:"localCandidateId",defaultValue:"",type:"string"},{key:"remoteCandidateId",defaultValue:0,type:"string"},{key:"transportId",defaultValue:"",type:"string"}],exceptionKeys:[{key:"endTime",hasLinkedKey:!1,exceptionKey:"timestampUs",exceptionKey2:"timestamp",type:"number"}]}})),Object(_.a)(g,R,(function(){return{schema:{startTime:0,endTime:0,networkType:"",ip:"",port:"",candidateType:"",relayProtocol:""},standartKeys:[{key:"networkType",defaultValue:"n/a",type:"string"},{key:"ip",defaultValue:"n/a",type:"string"},{key:"port",defaultValue:0,type:"number"},{key:"candidateType",defaultValue:"n/a",type:"string"}],exceptionKeys:[{key:"endTime",hasLinkedKey:!1,exceptionKey:"timestampUs",exceptionKey2:"timestamp",type:"number"},{key:"relayProtocol",hasLinkedKey:!1,exceptionKey:"protocol",type:"string"}]}})),Object(_.a)(g,C,(function(){return{schema:{startTime:0,endTime:0,codec:"",packetsReceived:[],packetsReceived_s:[],bytesReceived:[],bytesReceived_s:[],packetsLost:[],jitter:[],jitterBufferDelay:[],streamIds:[],totalPacketsReceived:0,totalBytesReceived:0},standartKeys:[{key:"packetsLost",defaultValue:0,type:"array"},{key:"jitter",defaultValue:0,type:"array"}],exceptionKeys:[{key:"jitterBufferDelay",hasLinkedKey:!0,linkedKey:"trackId",exceptionKey:"members.jitterBufferDelay",type:"array"},{key:"codec",hasLinkedKey:!0,linkedKey:"codecId",exceptionKey:"members.mimeType",exceptionKey2:"mimeType",type:"string"},{key:"endTime",hasLinkedKey:!1,exceptionKey:"timestampUs",exceptionKey2:"timestamp",type:"number"},{key:"streamIds",hasLinkedKey:!1,exceptionKey:"id",type:"array"}],perSecondCalculationKeys:[{key:"packetsReceived",perSecondKey:"packetsReceived_s",totalValueKey:"totalPacketsReceived"},{key:"bytesReceived",perSecondKey:"bytesReceived_s",totalValueKey:"totalBytesReceived"}],hiddenKeys:["totalPacketsReceived","totalBytesReceived","streamIds"]}})),Object(_.a)(g,I,(function(){return{schema:{startTime:0,endTime:0,codec:"",packetsSent:[],packetsSent_s:[],bytesSent:[],bytesSent_s:[],streamIds:[],totalPacketsSent:0,totalBytesSent:0},standartKeys:[],exceptionKeys:[{key:"endTime",hasLinkedKey:!1,exceptionKey:"timestampUs",exceptionKey2:"timestamp",type:"number"},{key:"streamIds",hasLinkedKey:!1,exceptionKey:"id",type:"array"},{key:"codec",hasLinkedKey:!0,linkedKey:"codecId",exceptionKey:"members.mimeType",exceptionKey2:"mimeType",type:"string"}],perSecondCalculationKeys:[{key:"packetsSent",perSecondKey:"packetsSent_s",totalValueKey:"totalPacketsSent"},{key:"bytesSent",perSecondKey:"bytesSent_s",totalValueKey:"totalBytesSent"}],hiddenKeys:["totalPacketsSent","totalBytesSent","streamIds"]}})),Object(_.a)(g,T,(function(){return{schema:{startTime:0,endTime:0,codec:"",decoderImplementation:"",pliCount:[],nackCount:[],packetsReceived:[],packetsReceived_s:[],bytesReceived:[],bytesReceived_s:[],frameWidth:[],frameHeight:[],framesPerSecond:[],streamIds:[],totalPacketsReceived:0,totalBytesReceived:0},standartKeys:[{key:"pliCount",defaultValue:0,type:"array"},{key:"nackCount",defaultValue:0,type:"array"},{key:"frameWidth",defaultValue:0,type:"array"},{key:"frameHeight",defaultValue:0,type:"array"},{key:"framesPerSecond",defaultValue:0,type:"array"},{key:"decoderImplementation",defaultValue:"",type:"string"}],exceptionKeys:[{key:"endTime",hasLinkedKey:!1,exceptionKey:"timestampUs",exceptionKey2:"timestamp",type:"number"},{key:"streamIds",hasLinkedKey:!1,exceptionKey:"id",type:"array"},{key:"codec",hasLinkedKey:!0,linkedKey:"codecId",exceptionKey:"members.mimeType",exceptionKey2:"mimeType",type:"string"}],perSecondCalculationKeys:[{key:"packetsReceived",perSecondKey:"packetsReceived_s",totalValueKey:"totalPacketsReceived"},{key:"bytesReceived",perSecondKey:"bytesReceived_s",totalValueKey:"totalBytesReceived"}],hiddenKeys:["totalPacketsReceived","totalBytesReceived","streamIds"]}})),Object(_.a)(g,V,(function(){return{schema:{startTime:0,endTime:0,codec:"",encoderImplementation:"",pliCount:[],nackCount:[],packetsSent:[],packetsSent_s:[],bytesSent:[],bytesSent_s:[],frameWidth:[],frameHeight:[],framesPerSecond:[],streamIds:[],totalPacketsSent:0,totalBytesSent:0},standartKeys:[{key:"pliCount",defaultValue:0,type:"array"},{key:"nackCount",defaultValue:0,type:"array"},{key:"frameWidth",defaultValue:0,type:"array"},{key:"frameHeight",defaultValue:0,type:"array"},{key:"framesPerSecond",defaultValue:0,type:"array"},{key:"encoderImplementation",defaultValue:"",type:"string"}],exceptionKeys:[{key:"endTime",hasLinkedKey:!1,exceptionKey:"timestampUs",exceptionKey2:"timestamp",type:"number"},{key:"streamIds",hasLinkedKey:!1,exceptionKey:"id",type:"array"},{key:"codec",hasLinkedKey:!0,linkedKey:"codecId",exceptionKey:"members.mimeType",exceptionKey2:"mimeType",type:"string"}],perSecondCalculationKeys:[{key:"packetsSent",perSecondKey:"packetsSent_s",totalValueKey:"totalPacketsSent"},{key:"bytesSent",perSecondKey:"bytesSent_s",totalValueKey:"totalBytesSent"}],hiddenKeys:["totalPacketsSent","totalBytesSent","streamIds"]}})),g),w=function(e){return e>Math.pow(10,15)?Math.ceil(e/1e3):e},B=function(e){return new Intl.DateTimeFormat(navigator.languages[0],{timeStyle:"medium",hour12:!1}).format(new Date(e))},D=function(e){return!isNaN(e)&&String(e).length>=13},E=j.a.Panel,U=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={localCandidateId:null,remoteCandidateId:null,mainCollapseActiveKeys:[],iceCandidateActiveKeys:[]},e}return Object(k.a)(a,[{key:"componentDidUpdate",value:function(e){x.a.isEqual(this.props.descriptionList,e.descriptionList)||this.setState({localCandidateId:null,remoteCandidateId:null,mainCollapseActiveKeys:[],iceCandidateActiveKeys:[]})}},{key:"render",value:function(){var e=this,t=this.state.mainCollapseActiveKeys;return Object(n.jsxs)(j.a,{activeKey:t,onChange:function(t){return e.setState({mainCollapseActiveKeys:Object(p.a)(t)})},children:[this._getCharts(),this._getIceCandidatePairs(),this._getIceCandidates()]})}},{key:"_getCharts",value:function(){var e=this.props.chartList;return x.a.isEmpty(e)?null:e.map((function(e){var t={},a=A[e[0]]().hiddenKeys,i=Object.entries(e[1]).filter((function(e){return Array.isArray(e[1])&&!a.includes(e[0])})),r=Object.entries(e[1]).filter((function(e){return!Array.isArray(e[1])&&!a.includes(e[0])}));return t.charts=i.map((function(t){var a=t[1],i=w(e[1].startTime),r=w(e[1].endTime),s=[],c=(r-i)/a.length;return a.forEach((function(e,t){var a=new Date(i+c*(t+1));s.push({time:B(a.getTime()),value:e})})),Object(n.jsx)(S,{title:t[0],data:s})})),t.chartDescriptions=r.map((function(e){return Object(n.jsx)(u.a.Item,{label:e[0],labelStyle:{fontWeight:"bold"},children:D(e[1])?B(w(e[1])):e[1]})})),Object(n.jsxs)(E,{header:e[0],children:[Object(n.jsx)(K.a,{style:{justifyContent:"center"},children:Object(n.jsx)(u.a,{style:{padding:10},column:{xs:1,sm:2,lg:4},children:t.chartDescriptions})}),Object(n.jsx)(y.a,{children:"Charts"}),Object(n.jsx)(K.a,{style:{justifyContent:"center"},children:t.charts})]},e[0])}))}},{key:"_getIceCandidatePairs",value:function(){var e=this,t=this.props.descriptionList,a=this.state,i=a.localCandidateId,r=a.remoteCandidateId;if(x.a.isEmpty(t))return null;var s=t.find((function(e){return e[0]===P}))[1],c=Object.entries(s),d=0,l=c.find((function(e,t){return!!e[1].nominated&&(d=t,!0)})),o={localCandidateId:l[1].localCandidateId,remoteCandidateId:l[1].remoteCandidateId};return delete c[d],c.unshift(l),i||r||this.setState(o),Object(n.jsx)(E,{header:P,children:Object(n.jsx)(j.a,{children:c.map((function(t){var a=t[0],i=t[1];return Object(n.jsx)(E,{header:e._getPanelHeaderStyle({isBold:i.nominated,headerText:a}),children:Object(n.jsx)(u.a,{style:{padding:10},column:{xs:1,sm:2,lg:4},children:Object.entries(i).map((function(t){return Object(n.jsx)(u.a.Item,{label:t[0],labelStyle:{fontWeight:"bold"},children:D(t[1])?B(w(t[1])):["localCandidateId","remoteCandidateId"].includes(t[0])?Object(n.jsx)("a",{onClick:function(){return e._onClickIceCandidatePairLink(t[1])},href:"#".concat(t[1]),children:String(t[1])}):String(t[1])})}))})},a)}))})},P)}},{key:"_getIceCandidates",value:function(){var e=this,t=this.props.descriptionList,a=this.state,i=a.localCandidateId,r=a.remoteCandidateId,s=a.iceCandidateActiveKeys;if(x.a.isEmpty(t))return null;var c=t.find((function(e){return e[0]===R}))[1],d=Object.entries(c),l=[],o=[];return d.forEach((function(e){[i,r].includes(e[0])?o.push(e):l.push(e)})),d=[].concat(o,l),Object(n.jsx)(E,{header:R,children:Object(n.jsx)(j.a,{activeKey:s,onChange:function(t){return e.setState({iceCandidateActiveKeys:Object(p.a)(t)})},children:d.map((function(t){var a=t[0],s=t[1];return Object(n.jsx)(E,{header:e._getPanelHeaderStyle({isBold:[i,r].includes(a),headerText:a}),id:a,children:Object(n.jsx)(u.a,{style:{padding:10},column:{xs:1,sm:2,lg:4},children:Object.entries(s).map((function(e){return Object(n.jsx)(u.a.Item,{label:e[0],labelStyle:{fontWeight:"bold"},children:D(e[1])?B(w(e[1])):String(e[1])})}))})},a)}))})},R)}},{key:"_getPanelHeaderStyle",value:function(e){var t=e.isBold,a=e.headerText;return Object(n.jsx)("span",{style:{fontWeight:t?"bold":"normal"},children:a})}},{key:"_onClickIceCandidatePairLink",value:function(e){var t=this.state,a=t.mainCollapseActiveKeys,n=t.iceCandidateActiveKeys,i=a.indexOf(R),r={iceCandidateActiveKeys:[e].concat(Object(p.a)(n))};-1===i&&(r=Object(c.a)(Object(c.a)({},r),{},{mainCollapseActiveKeys:[R].concat(Object(p.a)(a))})),this.setState(r)}}]),a}(i.Component),F=W(),N=0;function W(){var e;return e={},Object(_.a)(e,C,null),Object(_.a)(e,I,null),Object(_.a)(e,T,null),Object(_.a)(e,V,null),Object(_.a)(e,P,null),Object(_.a)(e,R,null),e}function H(e,t,a){var n=A[e](),i={};F[e]||(F[e]=n.schema,F[e].startTime=t.timestampUs||t.timestamp),F[e].streamIds.includes(t.id)||n.perSecondCalculationKeys.forEach((function(t){F[e][t.totalValueKey]=x.a.last(F[e][t.key])||0})),n.perSecondCalculationKeys.forEach((function(a){i[a.key]=t[a.key],0!==F[e][a.totalValueKey]&&(i[a.key]+=F[e][a.totalValueKey]);var n=t.timestampUs||t.timestamp,r=function(e){var t=e.currentValue,a=e.previousValue,n=e.currentTime,i=e.previousTime;if(!t)return 0;var r=t-a,s=w(n)-w(i);return r/(s/1e3)}({currentValue:i[a.key],previousValue:x.a.last(F[e][a.key])||0,currentTime:n,previousTime:F[e].endTime||w(n)-1e3*N});x.a.isFinite(r)&&F[e][a.perSecondKey].push(r),F[e][a.key].push(i[a.key])})),n.standartKeys.forEach((function(a){"array"===a.type?F[e][a.key].push(t[a.key]||a.defaultValue):F[e][a.key]=t[a.key]||a.defaultValue})),n.exceptionKeys.forEach((function(n){var i,r,s=null,c=null;n.hasLinkedKey?(i=a,r=t[n.linkedKey],(s=Array.isArray(i)?i.find((function(e){return e.id===r})):i[r])&&(c=x.a.get(s,n.exceptionKey,n.exceptionKey2?s[n.exceptionKey2]:s[n.key]),"array"===n.type?F[e][n.key].push(c):F[e][n.key]=c)):(c=x.a.get(t,n.exceptionKey,t[n.exceptionKey2]),"array"===n.type?F[e][n.key].push(c):F[e][n.key]=c)}))}function J(e,t){var a=A[e]();F[e]&&F[e][t.id]||(F[e]=Object.assign({},F[e],Object(_.a)({},t.id,a.schema)),F[e][t.id].startTime=t.timestampUs||t.timestamp),a.standartKeys.forEach((function(a){"array"===a.type?F[e][t.id][a.key].push(t[a.key]||a.defaultValue):F[e][t.id][a.key]=t[a.key]||a.defaultValue})),a.exceptionKeys.forEach((function(a){var n=x.a.get(t,a.exceptionKey,t[a.exceptionKey2]||a.defaultValue);"array"===a.type?F[e][t.id][a.key].push(n):F[e][t.id][a.key]=n}))}function M(e,t,a){var n=new FileReader;n.onload=function(e){F=W(),function(e,t,a){try{var n=JSON.parse(e);if(n.length>0){var i=n[n.length-1][1],r=i.filter((function(e){return e.id.includes("kandy-sdk-info")}));t(z(r[0],r[1],r[r.length-1])),function(e,t){e.forEach((function(t){q(t.id,t,e)})),t(F),console.log(F)}(i,a)}}catch(s){!function(e,t,a){var n=e.trim().split("\n"),i=null;(n=n.filter((function(e){return!!e}))).forEach((function(e){try{var a=JSON.parse(e),r=Object.keys(a);if(!i){var d=JSON.parse(n[1]),l=JSON.parse(n[n.length-1]);i=z(a["kandy-sdk-info"],d["kandy-sdk-info"],l["kandy-sdk-info"]),t(i)}r.forEach((function(e){var t=Object(c.a)(Object(c.a)({},a[e]),a[e].members);delete t.members,q(e,t,a)}))}catch(s){console.warn(s)}})),a(F),console.log(F)}(e,t,a)}}(e.target.result,t,a)},n.onerror=function(){console.warn(n.error)},n.readAsText(e)}function q(e,t,a){switch(!0){case e.includes(C):H(C,t,a);break;case e.includes(I):H(I,t,a);break;case e.includes(T):H(T,t,a);break;case e.includes(V):H(V,t,a);break;case e.includes(P):J(P,t);break;case e.includes(R):J(R,t)}}function z(e,t,a){var n=Object.assign({},e);n&&n.members&&delete(n=Object(c.a)(Object(c.a)({},e),n.members)).members;var i=n,r=i.sdk,s=i.version,d=i.callId,l=i.platform,o=i.timestampUs,y=i.timestamp,u=a.timestampUs,m=a.timestamp,p=o||y,f=u||m,k=w(t.timestampUs||t.timestamp)-w(e.timestampUs||e.timestamp);return{sdk:r,version:s,callId:d,platform:l,startTime:p,endTime:f,samplingPeriod:N=isNaN(k)?0:Math.round(k/1e3)}}var G=[C,I,T,V],Q=[P,R],X=l.a.Content,Y=o.a.Dragger;var Z=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(i.useState)(null),o=Object(d.a)(s,2),p=o[0],f=o[1],k={name:"file",showUploadList:!1,customRequest:function(e){console.log("Override default xhr implementation: ",e)},onChange:function(e){M(e.file.originFileObj,f,r)}},h=Object.entries(a||{}).filter((function(e){return e[1]&&G.includes(e[0])})),b=Object.entries(a||{}).filter((function(e){return e[1]&&Q.includes(e[0])}));return Object(n.jsx)(l.a,{children:Object(n.jsxs)(X,{style:{backgroundColor:"white"},children:[Object(n.jsxs)(Y,Object(c.a)(Object(c.a)({},k),{},{children:[Object(n.jsx)("p",{className:"ant-upload-drag-icon",children:Object(n.jsx)(m.a,{})}),Object(n.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"})]})),p?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y.a,{children:"SDK Info"}),Object(n.jsx)(u.a,{style:{padding:10},column:{xs:1,sm:2,lg:4},children:L.map((function(e){return Object(n.jsx)(u.a.Item,{label:e.text,labelStyle:{fontWeight:"bold"},children:e.isDate?(t=w(p[e.key]),new Intl.DateTimeFormat(navigator.languages[0],{dateStyle:"medium",timeStyle:"medium",hour12:!1}).format(new Date(t))):p[e.key]||""});var t}))})]}):null,a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y.a,{children:"Charts and Statistics Info"}),Object(n.jsx)(U,Object(c.a)({},{chartList:h,descriptionList:b}))]}):null]})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,496)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(n.jsx)(Z,{}),document.getElementById("root")),$()}},[[483,1,2]]]);
//# sourceMappingURL=main.28cad815.chunk.js.map