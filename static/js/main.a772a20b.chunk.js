(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a,r,i=n(0),o=n.n(i),c=n(7),l=n.n(c),s=n(2),u=n(3),d=n(1),h=n(5),p=n(4),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={colors:a.mainArr()},a.mainArr=a.mainArr.bind(Object(d.a)(a)),a.handelRestart=a.handelRestart.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"mainArr",value:function(){return["red","yellow","blue","pink","purple","violet","black","orange","red","yellow","blue","pink","purple","violet","black","orange"].sort((function(e,t){return.5-Math.random()}))}},{key:"handelRestart",value:function(){window.location.reload()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("ul",null,o.a.createElement(b,{array:this.state.colors})),o.a.createElement("div",{className:"cont-buttons"},o.a.createElement("button",{onClick:this.handelRestart},o.a.createElement("i",{className:"fas fa-redo-alt"}))))}}]),n}(i.Component),b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.array.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(k,{color:e,id:t,key:t}))}))}}]),n}(i.Component),f=0,k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={isToggleOn:!0},a.handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(e){return{isToggleOn:!1}}))}),3e3)}},{key:"handleClick",value:function(){var e=this;f<2&&a!==this&&(this.setState((function(e){return{isToggleOn:!0}})),0===f&&(a=this,r=this.props.color),1===f&&this.props.color!==r?setTimeout((function(){a.setState({isToggleOn:!1}),e.setState({isToggleOn:!1}),f=0,a=""}),500):1===f&&this.props.color===r&&setTimeout((function(){a.setState({isCoincidenceClick:!0}),e.setState({isCoincidenceClick:!0}),f=0}),500),f++)}},{key:"render",value:function(){var e=this.state.isCoincidenceClick?" coinc":"",t=this.state.isToggleOn?"".concat(this.props.color):"gray";return o.a.createElement("div",{className:"tile".concat(e),id:this.props.id,onClick:this.handleClick,style:{backgroundColor:"".concat(t)}})}}]),n}(i.Component),v=m;n(13);l.a.render(o.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a772a20b.chunk.js.map