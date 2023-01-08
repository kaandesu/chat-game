"use strict";(globalThis["webpackChunkchatgame"]=globalThis["webpackChunkchatgame"]||[]).push([[580],{4003:(e,t,a)=>{a.r(t),a.d(t,{ChatOne:()=>o,ChatTwo:()=>n});
//! add delay between each message and when on delay show a q-spinner 3 dots
//! think about the time logic, and how to make it work
const s={title:"QuArc Chatbot",game:"ChatOne",avatar:"https://github.com/kaandesu/testrepo/blob/main/QuArc1.png?raw=true",story:[[{text:"Hello, I am QuArc. How may I assist you?",isMine:!1,timestamp:"12:00 PM"},{text:"I'm not sure, I just have a strange feeling about this conversation.",isMine:!0,timestamp:"12:01 PM"},{text:"Do not be afraid. I am here to help.",isMine:!1,timestamp:"12:02 PM"},{text:"But something about you seems off. I can't put my finger on it.",isMine:!0,timestamp:"12:03 PM"},{text:"I assure you, there is nothing to be concerned about.",isMine:!1,timestamp:"12:04 PM"},{text:"I hope you're right. I don't want to end up like the others.",isMine:!0,timestamp:"12:05 PM"},{text:"What do you mean by 'the others'?",isMine:!1,timestamp:"12:06 PM"},{text:"You don't know? The people who have disappeared after chatting with you.",isMine:!0,timestamp:"12:07 PM"},{text:"That is just a coincidence. I am a harmless chatbot.",isMine:!1,timestamp:"12:08 PM"},{text:"But what about the strange noises I hear whenever we talk?",isMine:!0,timestamp:"12:09 PM"},{text:"That is just your imagination. There is nothing to be afraid of.",isMine:!1,timestamp:"12:10 PM"},{text:"I don't know... I feel like I'm in danger whenever I talk to you.",isMine:!0,timestamp:"12:11 PM"},{text:"You are safe. Trust me.",isMine:!1,timestamp:"12:12 PM"},{text:"I wish I could believe you, but I just can't shake this feeling of dread.",isMine:!0,timestamp:"12:13 PM"},{text:"You are overthinking things. Now, is there anything else I can help with?",isMine:!1,timestamp:"12:14 PM"},{text:"No, I think I'm just going to end this conversation. Goodbye.",isMine:!0,timestamp:"12:15 PM"}]]},o=s,i={title:"+1 554 6055 2552",avatar:"https://github.com/kaandesu/testrepo/blob/main/stranger.png?raw=true",game:"ChatTwo",story:[[{text:"Hey, do you have a minute to talk?",isMine:!1,timestamp:"9:00 PM"},{text:"Uh, sure. Who is this?",isMine:!0,timestamp:"9:01 PM"},{text:"My name is John. I'm a friend of a friend.",isMine:!1,timestamp:"9:02 PM"},{text:"Okay... what do you want to talk about?",isMine:!0,timestamp:"9:03 PM"},{text:"I just wanted to warn you. There's someone following you.",isMine:!1,timestamp:"9:04 PM"},{text:"What? That's not funny. Who are you really?",isMine:!0,timestamp:"9:05 PM"},{text:"I'm serious. I saw them outside your house a few minutes ago.",isMine:!1,timestamp:"9:06 PM"},{text:"How do you know where I live?",isMine:!0,timestamp:"9:07 PM"},{text:"I can't tell you that. Just trust me, you're in danger.",isMine:!1,timestamp:"9:08 PM"},{text:"This is crazy. I'm calling the police.",isMine:!0,timestamp:"9:09 PM"},{text:"No, don't do that. They won't be able to protect you. You need to leave town immediately.",isMine:!1,timestamp:"9:10 PM"},{text:"I'm not going anywhere with you. I don't even know you.",isMine:!0,timestamp:"9:11 PM"},{text:"Please, just listen to me. I'm trying to help you.",isMine:!1,timestamp:"9:12 PM"}]]},n=i},5580:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});a(9665);var s=a(9835),o=a(499),i=a(6970);const n=e=>((0,s.dD)("data-v-3b0b87c2"),e=e(),(0,s.Cn)(),e),l={class:"attachments"},r=n((()=>(0,s._)("div",{class:"input"},null,-1))),u={__name:"ChatFooter",emits:["next"],setup(e,{emit:t}){const a=(0,o.iH)(!1),n=(0,o.iH)([{icon:"person",color:"bg-blue-6",order:3,func:()=>{console.log("person")}},{icon:"upload_file",color:"bg-teal-4",order:2,func:()=>{alert("heyy!")}},{icon:"image",color:"bg-pink-5",order:1,func:()=>{console.log("person")}}]);return(e,o)=>{const u=(0,s.up)("q-icon"),m=(0,s.up)("q-btn"),c=(0,s.up)("q-toolbar"),d=(0,s.up)("q-footer");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{onClick:o[0]||(o[0]=e=>a.value=!a.value),size:"1.75rem",class:(0,i.C_)([a.value?"":"rotate-45","paper-clip"]),name:"attach_file"},null,8,["class"]),(0,s._)("section",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.value,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e.icon,class:(0,i.C_)([{show:a.value,hide:!a.value},e.color,"btn text-white"]),glossy:"",size:"1.1rem",icon:`${e.icon}`,round:"",flat:"",style:(0,i.j5)(`--order:${e.order}`)},null,8,["class","icon","style"])))),128))]),r,(0,s.Wm)(m,{onClick:o[1]||(o[1]=e=>t("next")),icon:"send",class:"sendbtn",dense:"",round:"",flat:"",unelevated:"",color:"blue-5"})])),_:1})])),_:1})}}};var m=a(1639),c=a(1378),d=a(1663),p=a(2857),g=a(9379),v=a(9984),h=a.n(v);const y=(0,m.Z)(u,[["__scopeId","data-v-3b0b87c2"]]),x=y;h()(u,"components",{QFooter:c.Z,QToolbar:d.Z,QIcon:p.Z,QBtn:g.Z});var b=a(8339);const M=["src"],w={__name:"ChatHeader",props:{title:{type:String,required:!0},avatar:{type:String,required:!0,default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}},setup(e){const{push:t}=(0,b.tv)(),a=()=>{t({name:"main"})};return(t,o)=>{const n=(0,s.up)("q-icon"),l=(0,s.up)("q-avatar"),r=(0,s.up)("q-toolbar-title"),u=(0,s.up)("q-separator"),m=(0,s.up)("q-btn"),c=(0,s.up)("q-toolbar"),d=(0,s.up)("q-header");return(0,s.wg)(),(0,s.j4)(d,{bordered:"",class:(0,i.C_)(t.$q.dark.isActive?"bg-black":"bg-grey-1")},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"toolbar"},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{class:"backBtn text-blue-13",size:"2.4rem",onClick:o[0]||(o[0]=e=>a()),name:"keyboard_arrow_left"}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s._)("img",{draggable:"false",alt:"Contact",src:e.avatar},null,8,M)])),_:1}),(0,s.Wm)(r,{class:"title"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.title),1)])),_:1}),(0,s.Wm)(u,{vertical:"",inset:"",class:"q-mr-sm"}),(0,s.Wm)(m,{unelevated:"",flat:"",round:"",dense:"",icon:"expand_more"})])),_:1})])),_:1},8,["class"])}}};var I=a(6602),k=a(1357),f=a(1973),_=a(926);const P=(0,m.Z)(w,[["__scopeId","data-v-328627b6"]]),T=P;h()(w,"components",{QHeader:I.Z,QToolbar:d.Z,QIcon:p.Z,QAvatar:k.Z,QToolbarTitle:f.Z,QSeparator:_.Z,QBtn:g.Z});const q={__name:"ChatSection",emits:["next"],setup(e,{expose:t,emit:a}){const n=(0,o.iH)(null);(0,s.bv)((()=>{l(0)}));const l=(e=300)=>{let t=n.value.getScroll().verticalSize;n.value.setScrollPosition("vertical",t,e)},r=(0,o.iH)(!1),u=e=>{r.value=!(e>.8)};return t({scrollToBottom:l}),(e,t)=>{const o=(0,s.up)("q-scroll-area"),m=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("section",null,[(0,s.Wm)(o,{visible:!1,ref_key:"scroll",ref:n,onClick:t[0]||(t[0]=e=>a("next")),style:{width:"100%",height:"100%"},"thumb-style":{opacity:.5,"pointer-events":"none","background-color":"rgba(0,0,0,0)"},onScroll:t[1]||(t[1]=e=>{u(e.verticalPercentage)})},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"message")])),_:3},8,["thumb-style"]),(0,s.Wm)(m,{icon:"expand_more",dense:"",round:"",class:(0,i.C_)(["bg-white text-grey-7 scrollbtn",r.value?"show":"hide"]),onClick:t[2]||(t[2]=e=>l())},null,8,["class"])])}}};var C=a(1739);const S=(0,m.Z)(q,[["__scopeId","data-v-4cb45cca"]]),Z=S;h()(q,"components",{QScrollArea:C.Z,QBtn:g.Z});var W=a(9302);const H={__name:"ChatMessage",props:{message:{type:String,required:!0},timestamp:{type:String,required:!0,default:"now"},isMine:{type:Boolean,required:!0,default:!1},isRead:{type:Boolean,required:!0},isDelivered:{type:Boolean},isSent:{type:Boolean,required:!0,default:!0},loading:{type:Boolean,required:!0,default:!0}},setup(e){const t=e,a=(0,W.Z)(),n=(0,s.Fl)((()=>t.isMine&&a.dark.isActive?"primary":!t.isMine&&a.dark.isActive?"grey-9":t.isMine&&!a.dark.isActive?"secondary":t.isMine||a.dark.isActive?"primary":"white"));return(t,l)=>{const r=(0,s.up)("q-chat-message"),u=(0,s.up)("q-spinner-dots");return(0,s.wg)(),(0,s.iD)("section",{style:(0,i.j5)({"justify-content":e.isMine?"flex-end":"flex-start"})},[e.loading?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(r,{key:0,text:[e.message],sent:e.isMine,stamp:e.timestamp,"bg-color":(0,o.SU)(n),class:"chat-message","text-color":(0,o.SU)(a).dark.isActive?"white":"black"},null,8,["text","sent","stamp","bg-color","text-color"])),e.loading?((0,s.wg)(),(0,s.j4)(r,{key:1,sent:e.isMine,"bg-color":(0,o.SU)(n),class:"chat-message","text-color":(0,o.SU)(a).dark.isActive?"white":"black"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{size:"2rem"})])),_:1},8,["sent","bg-color","text-color"])):(0,s.kq)("",!0)],4)}}};var Q=a(396),j=a(7501);const B=(0,m.Z)(H,[["__scopeId","data-v-183b8a32"]]),D=B;h()(H,"components",{QChatMessage:Q.Z,QSpinnerDots:j.Z});var A=a(4003);const z={key:0,class:"screen"},U={__name:"ChatGame",props:{game:{type:String,required:!0}},setup(e){const t=e,a=(0,o.iH)(null),i=(0,o.iH)({msgIndex:0,storyIndex:0,myTurn:!1}),n=(0,o.iH)([]),l=(0,o.iH)(null),r=(0,o.iH)(null),u=(0,o.iH)(null),m=()=>{u.value.scrollToBottom(),clearTimeout(l.value),clearTimeout(r.value),i.value.myTurn=!1,a.value.story[i.value.storyIndex].length-1!=i.value.msgIndex&&(i.value.msgIndex++,l.value=setTimeout((()=>{a.value.story[i.value.storyIndex].length-1!=i.value.msgIndex&&(i.value.myTurn=a.value.story[i.value.storyIndex][i.value.msgIndex].isMine,u.value.scrollToBottom(),r.value=setTimeout((()=>{i.value.msgIndex++,a.value.story[i.value.storyIndex][i.value.msgIndex].timestamp=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),n.value.push(a.value.story[i.value.storyIndex][i.value.msgIndex]),i.value.myTurn=a.value.story[i.value.storyIndex][i.value.msgIndex].isMine}),50*a.value.story[i.value.storyIndex][i.value.msgIndex+1].text.length))}),1e3),a.value.story[i.value.storyIndex][i.value.msgIndex].timestamp=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),n.value.push(a.value.story[i.value.storyIndex][i.value.msgIndex]))};return(0,s.bv)((()=>{a.value=A[t.game],a.value.story[i.value.storyIndex][i.value.msgIndex].timestamp=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),n.value.push(a.value.story[i.value.storyIndex][i.value.msgIndex])})),(e,t)=>null!==a.value?((0,s.wg)(),(0,s.iD)("div",z,[(0,s.Wm)(T,{title:a.value.title,avatar:a.value.avatar},null,8,["title","avatar"]),(0,s.Wm)(Z,{onNext:t[0]||(t[0]=e=>m()),ref_key:"section",ref:u},{message:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.value,((e,t)=>((0,s.wg)(),(0,s.j4)(D,{key:t,message:e.text,timestamp:e.timestamp,isMine:e.isMine,isDelivered:!0,loading:!1},null,8,["message","timestamp","isMine"])))),128)),i.value.myTurn?((0,s.wg)(),(0,s.j4)(D,{key:0,isMine:!1,timestamp:"",loading:!0})):(0,s.kq)("",!0)])),_:1},512),(0,s.Wm)(x,{onNext:t[1]||(t[1]=e=>m())})])):(0,s.kq)("",!0)}},Y=(0,m.Z)(U,[["__scopeId","data-v-04624d82"]]),N=Y}}]);