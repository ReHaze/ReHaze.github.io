(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(13)},13:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(9),c=a(3),i=a(4),r=a(10),o=a(5),l=a(11),m=a(0),u=a.n(m),h=a(6),d=a.n(h),p=(a(19),a(20),a(7)),v=a.n(p),g=a(8),f=a.n(g),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={options:null,text:"",rate:-1,voices:null},a.addVoices=function(){var e=speechSynthesis.getVoices(),t=Object(s.a)(e);a.setState({voices:t}),e=e.map(function(e){return u.a.createElement("option",{key:e.name,value:e.name},e.name," ",e.lang)}),a.setState({options:e})},a.toggleVoice=function(e){var t=a.state.voices.find(function(t){return t.name===e.target.value});a.msg.voice=t,a.restart(!1)},a.addText=function(e){a.setState({text:e.target.value}),a.msg.text=a.state.text},a.setSpeed=function(e){var t=e.target.name;a.setState(Object(n.a)({},t,e.target.value)),a.msg.rate=a.state.rate,a.restart(!1)},a.msg=new SpeechSynthesisUtterance,a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){speechSynthesis.addEventListener("voiceschanged",this.addVoices)}},{key:"restart",value:function(e){if(e)return speechSynthesis.cancel();speechSynthesis.cancel(),speechSynthesis.speak(this.msg)}},{key:"render",value:function(){var e=this;return this.msg.text=this.state.text,u.a.createElement("div",{className:"container"},u.a.createElement("h1",{className:"title"},"\u0421\u0438\u043d\u0442\u0435\u0437\u0430\u0442\u043e\u0440 \u0442\u0435\u043a\u0441\u0442\u0430"),u.a.createElement("div",{className:"select"},u.a.createElement("select",{onChange:this.toggleVoice,name:"slct",id:"slct",className:"voices"},u.a.createElement("option",{value:"choose"},"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a"),this.state.options)),u.a.createElement("div",{className:"slidecontainer"},u.a.createElement("h2",{className:"speed"},"C\u043a\u043e\u0440\u043e\u0441\u0442\u044c"),u.a.createElement("input",{type:"range",className:"slider",onChange:this.setSpeed,value:this.state.rate,name:"rate",min:"-1",max:"3",step:"0.5"})),u.a.createElement("div",{className:"text-field"},u.a.createElement("textarea",{onChange:this.addText,name:"text",id:"text-data",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0434\u0435\u0441\u044c"})),u.a.createElement("div",{className:"button-wrapper"},u.a.createElement("button",{key:1,onClick:function(){return e.restart(!0)},className:"button-control"},u.a.createElement("img",{alt:"\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",width:"40",height:"40",src:f.a})),u.a.createElement("button",{key:2,onClick:function(){return e.restart(!1)},className:"button-control"},u.a.createElement("img",{alt:"\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c",width:"40",height:"40",src:v.a}))))}}]),t}(u.a.Component),b=document.getElementById("root");d.a.render(u.a.createElement(E,null),b)},20:function(e,t,a){},7:function(e,t,a){e.exports=a.p+"static/media/play.66563b70.svg"},8:function(e,t,a){e.exports=a.p+"static/media/stop.b9c0abdc.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.b95ce9ce.chunk.js.map