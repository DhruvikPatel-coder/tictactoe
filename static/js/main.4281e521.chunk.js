(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),s=n.n(o),i=(n(20),n(2));n(4);function l(e){return a.createElement("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.color}}," ",e.value)}function c(e){function t(t){var n="white";return e.lastHighlight===t&&(n="green"),e.winnerHighlight.includes(t)&&(n="red"),r.a.createElement(l,{key:t,value:e.squares[t],onClick:function(){return e.onClick(t)},color:n})}return r.a.createElement("div",null,function(){for(var e=[],n=0;n<9;n+=3){for(var a=[],o=n;o<n+3;o++)a.push(t(o));e.push(r.a.createElement("div",{className:"board-row",key:n+10},a))}return e}())}var u=n(14),m=n.n(u);function h(){var e=Object(a.useState)({current:Array(9).fill(null),status:'Your turn "O"',lastHighlight:"",sendRequest:!1,moves:[]}),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)({history:[{squares:Array(9).fill(null)}],stepNumber:0}),l=Object(i.a)(s,2),u=l[0],h=l[1];Object(a.useEffect)((function(){n.sendRequest&&m.a.post("http://127.0.0.1:5000/getnextmove",{state:n}).then((function(e){var t=e.data;o(t)}))}),[n]),Object(a.useEffect)((function(){var e=u.stepNumber,t=u.history[e].squares,a={};Object.assign(a,n,{current:t}),o(a)}),[u]);var g=u.history.map((function(e,t){var a=t?"Go to move #"+t:"Go to game start";return r.a.createElement("li",{key:Math.random(),style:{margin:"5px"}},r.a.createElement("button",{className:"btn btn-outline-dark btn-sm",onClick:function(){return function(e,t){h({history:t.slice(0,e+1),stepNumber:e});var a={};Object.assign(a,n,{lastHighlight:""}),o(a)}(t,u.history)}},a))}));return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"col-lg-2"},r.a.createElement(c,{squares:n.current,onClick:function(e){return function(e){var t=n.current;if("Game tied!!"!==n.status&&"O Won!!"!==n.status&&"X Won!!"!==n.status){t[e]="O";var a=u.history;o({current:t,status:'Bots Turn "X"',lastHighlight:e,sendRequest:!0,moves:[]}),h({history:a.concat([{squares:t}]),stepNumber:a.length})}}(e)},lastHighlight:n.lastHighlight,winnerHighlight:n.moves})),r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("div",null,r.a.createElement("b",null,'You are player "X" and player "O" is a bot, enjoy playing. Click the button below in order to retive the game back to specific move!!')),r.a.createElement("div",{style:{marginBottom:"10px"}},n.status),r.a.createElement("ol",null,g)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.4281e521.chunk.js.map