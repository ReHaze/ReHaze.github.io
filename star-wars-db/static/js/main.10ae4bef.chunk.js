(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},19:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(5),i=a(4),l=a(6),c=a(0),o=a.n(c),p=a(15),u=a.n(p),m=a(38),d=(a(25),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={test:!0},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper-menu"},o.a.createElement("h1",{className:"app-title"},o.a.createElement(m.a,{to:"/"},"Star Wars")),o.a.createElement("ul",{className:"menu"},o.a.createElement("li",null,o.a.createElement(m.a,{to:"/people",activeClassName:"active"},"people")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/species"},"species")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/starships"},"starships"))))}}]),t}(o.a.Component)),h=a(7),f=a.n(h),v=a(11),E=function(){function e(){var t=this;Object(n.a)(this,e),this.getPlanets=Object(v.a)(f.a.mark(function e(){var a,n,r=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,t.getData("https://swapi.co/api/planets/".concat(a));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)})),this.getPeople=Object(v.a)(f.a.mark(function e(){var a,n,r=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,t.getData("https://swapi.co/api/people/".concat(a));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)})),this.getSpecies=Object(v.a)(f.a.mark(function e(){var a,n,r=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,t.getData("https://swapi.co/api/species/".concat(a));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)})),this.getStarships=Object(v.a)(f.a.mark(function e(){var a,n,r=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,t.getData("https://swapi.co/api/starships/".concat(a));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))}return Object(r.a)(e,[{key:"getData",value:function(){var e=Object(v.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=(a=e.sent).json(),e.next=6,a;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),b=(a(31),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}}]),t}(o.a.Component)),j=(a(32),new E),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={name:null,id:null,diameter:null,rotation_period:null,population:null,loader:!0},a.updatePlanet=function(){var e=Math.floor(15*Math.random()+3);j.getPlanets(e).then(function(t){a.setState({id:e,name:t.name,diameter:t.diameter,rotation_period:t.rotation_period,population:t.population,loader:!1})})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.updatePlanet(),this.intervalId=setInterval(this.updatePlanet,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.loader?o.a.createElement(b,null):null,t=this.state.loader?null:o.a.createElement(O,{updatePlanet:this.updatePlanet,info:this.state});return o.a.createElement("div",{className:"planet"},e,t)}}]),t}(o.a.Component),O=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.info;return o.a.createElement("div",{className:"planet-info"},o.a.createElement("div",null,o.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/planets/".concat(e.id,".jpg"),alt:e.name})),o.a.createElement("div",null,o.a.createElement("h2",null,o.a.createElement("span",null,"Name: "),e.name),o.a.createElement("p",null,o.a.createElement("span",null,"Population: "),e.population),o.a.createElement("p",null,o.a.createElement("span",null,"Diameter: "),e.diameter),o.a.createElement("p",null,o.a.createElement("span",null,"Period: "),e.rotation_period)))}}]),t}(o.a.Component),S=(a(33),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={AllData:null,loader:!0},a.renderPeople=function(e){return e.map(function(e){var t=a.props.instance(e);return o.a.createElement("li",{key:e.name,onClick:function(t){t.url;return a.props.getId(e.url)}},t)})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.send().then(function(t){e.setState(function(){var e=t.results;return e.map(function(e){return e.url=e.url.match(/[\d]/gm).join("")}),{AllData:e,loader:!1}})})}},{key:"render",value:function(){var e=this.state.loader?o.a.createElement(b,null):this.renderPeople(this.state.AllData);return o.a.createElement("div",null,o.a.createElement("ul",{className:"item-list"},e))}}]),t}(o.a.Component)),y=a(10),w=(a(13),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={detailData:null,loader:null},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){null!==this.props.personId&&(this.setState({loader:!0}),this.getDetailes())}},{key:"componentDidUpdate",value:function(e){e.personId!==this.props.personId&&(this.setState({loader:!0}),this.getDetailes())}},{key:"getDetailes",value:function(){var e=this;this.props.description(this.props.personId).then(function(t){e.setState({detailData:t,loader:!1})})}},{key:"render",value:function(){var e=Object(y.a)({},this.state.detailData);return this.state.loader?o.a.createElement(b,null):o.a.createElement(I,{info:e,id:this.props.personId})}}]),t}(o.a.Component)),I=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return null===this.props.id?o.a.createElement("div",{className:"information"},o.a.createElement("h3",{className:"choice"},"Choose character in left side")):o.a.createElement("div",{className:"information"},o.a.createElement("p",null,o.a.createElement("span",null,"name: "),this.props.info.name),o.a.createElement("p",null,o.a.createElement("span",null,"height: "),this.props.info.height," "),o.a.createElement("p",null,o.a.createElement("span",null,"mass: ")," ",this.props.info.mass),o.a.createElement("p",null,o.a.createElement("span",null,"gender: "),this.props.info.gender),o.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/characters/".concat(this.props.id,".jpg"),alt:this.props.info.name}))}}]),t}(o.a.Component),k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={detailData:null,loader:!1},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){null!==this.props.StarShipId&&(this.setState({loader:!0}),this.getDetailes())}},{key:"componentDidUpdate",value:function(e){e.StarShipId!==this.props.StarShipId&&(this.setState({loader:!0}),this.getDetailes())}},{key:"getDetailes",value:function(){var e=this;this.props.description(this.props.StarShipId).then(function(t){e.setState({detailData:t,loader:!1})})}},{key:"render",value:function(){var e=Object(y.a)({},this.state.detailData);return this.state.loader?o.a.createElement(b,null):o.a.createElement(D,{info:e,id:this.props.StarShipId})}}]),t}(o.a.Component),D=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return null===this.props.id?o.a.createElement("div",{className:"information"},o.a.createElement("h3",{className:"choice"},"Choose starship in left side")):o.a.createElement("div",{className:"information"},o.a.createElement("p",null,o.a.createElement("span",null,"name: "),this.props.info.name),o.a.createElement("p",null,o.a.createElement("span",null,"model: "),this.props.info.model),o.a.createElement("p",null,o.a.createElement("span",null,"manufacturer: "),this.props.info.manufacturer),o.a.createElement("p",null,o.a.createElement("span",null,"max_atmosphering_speed: "),this.props.info.max_atmosphering_speed),o.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/starships/".concat(this.props.id,".jpg"),alt:this.props.info.name}))}}]),t}(o.a.Component),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={detailData:null,loader:!1},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){null!==this.props.SpeciesId&&(this.setState({loader:!0}),this.getDetailes())}},{key:"componentDidUpdate",value:function(e){e.SpeciesId!==this.props.SpeciesId&&(this.setState({loader:!0}),this.getDetailes())}},{key:"getDetailes",value:function(){var e=this;this.props.description(this.props.SpeciesId).then(function(t){e.setState({detailData:t,loader:!1})})}},{key:"render",value:function(){var e=Object(y.a)({},this.state.detailData);return this.state.loader?o.a.createElement(b,null):o.a.createElement(P,{info:e,id:this.props.SpeciesId})}}]),t}(o.a.Component),P=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return null===this.props.id?o.a.createElement("div",{className:"information"},o.a.createElement("h3",{className:"choice"},"Choose species in left side")):o.a.createElement("div",{className:"information"},o.a.createElement("p",null,o.a.createElement("span",null,"Species: "),this.props.info.name),o.a.createElement("p",null,o.a.createElement("span",null,"classification: "),this.props.info.classification),o.a.createElement("p",null,o.a.createElement("span",null,"average_height: "),this.props.info.average_height),o.a.createElement("p",null,o.a.createElement("span",null,"average_lifespan: "),this.props.info.average_lifespan),o.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/species/".concat(this.props.id,".jpg"),alt:this.props.info.name}))}}]),t}(o.a.Component),C=(a(34),a(37)),x=a(17),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={PeopleId:null,StarShipsId:null,SpeciesId:null},a.sendRequest=new E,a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=function(t){e.setState({PeopleId:t})},a=function(t){e.setState({StarShipsId:t})},n=function(t){e.setState({SpeciesId:t})};return o.a.createElement(C.a,{basename:"/star-wars-db"},o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(x.a,{path:"/",component:g}),o.a.createElement(x.a,{path:"/people",exact:!0,render:function(a){var n=a.match;return o.a.createElement("div",null,o.a.createElement("h2",{className:"page-title"},"People"),o.a.createElement("div",{className:"wrapper-description"},o.a.createElement(S,{show:null!==n,send:e.sendRequest.getPeople,instance:function(e){return e.name},getId:t}),o.a.createElement(w,{description:e.sendRequest.getPeople,personId:e.state.PeopleId})))}}),o.a.createElement(x.a,{path:"/people/:id",render:function(t){var a=t.match.params.id;return o.a.createElement(w,{description:e.sendRequest.getPeople,personId:a})}}),o.a.createElement(x.a,{path:"/starships",exact:!0,render:function(t){var n=t.match;return o.a.createElement("div",null,o.a.createElement("h2",{className:"page-title"},"Starships"),o.a.createElement("div",{className:"wrapper-description"},o.a.createElement(S,{show:null!==n,send:e.sendRequest.getStarships,instance:function(e){return e.name},getId:a}),o.a.createElement(k,{description:e.sendRequest.getStarships,StarShipId:e.state.StarShipsId})))}}),o.a.createElement(x.a,{path:"/starships/:id",render:function(t){var a=t.match.params.id;return o.a.createElement(k,{description:e.sendRequest.getStarships,StarShipId:a})}}),o.a.createElement(x.a,{path:"/species",render:function(t){var a=t.match;return o.a.createElement("div",null,o.a.createElement("h2",{className:"page-title"},"Species"),o.a.createElement("div",{className:"wrapper-description"},o.a.createElement(S,{show:null!==a,send:e.sendRequest.getSpecies,instance:function(e){return e.name},getId:n}),o.a.createElement(N,{description:e.sendRequest.getSpecies,SpeciesId:e.state.SpeciesId})))}}),o.a.createElement(x.a,{path:"/species/:id",render:function(t){var a=t.match.params.id;return o.a.createElement(N,{description:e.sendRequest.getSpecies,SpeciesId:a})}})))}}]),t}(o.a.Component),q=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(_,null))}}]),t}(o.a.Component),A=document.getElementById("root");u.a.render(o.a.createElement(q,null),A)}},[[19,1,2]]]);
//# sourceMappingURL=main.10ae4bef.chunk.js.map