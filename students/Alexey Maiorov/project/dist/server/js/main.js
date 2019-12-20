!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("express")},function(e,t,n){var r=n(1),o=n(0),i=n(3),s=r();s.use(r.json()),s.use("/",r.static("public")),s.use("/api/cart",i),s.get("/api/catalog",(function(e,t){o.readFile("dist/server/db/catalog.json","utf-8",(function(e,n){e?t.sendStatus(404,JSON.stringify({result:0,text:e})):t.send(n)}))})),s.listen(8080,(function(){console.log("server is listening at port 8080")}))},function(e,t,n){var r=n(1),o=n(0),i=n(4),s=r.Router();s.get("/",(function(e,t){o.readFile("dist/server/db/userCart.json","utf-8",(function(e,n){e?t.sendStatus(404,JSON.stringify({result:0,text:e})):t.send(n)}))})),s.post("/",(function(e,t){i(e,t,"add","dist/server/db/userCart.json")})),s.put("/:id",(function(e,t){i(e,t,"modify","dist/server/db/userCart.json")})),s.delete("/:id",(function(e,t){i(e,t,"remove","dist/server/db/userCart.json")})),e.exports=s},function(e,t,n){var r=n(5),o=n(0),i=n(6),s={add:r.add,modify:r.modify,remove:r.remove};e.exports=function(e,t,n,r){o.readFile(r,"utf-8",(function(u,f){if(u)t.sendStatus(404,JSON.stringify({result:0,text:u}));else{var a=JSON.parse(f),d=s[n](a,e),c=d.newCart,l=d.name;o.writeFile(r,c,(function(e){e?t.sendStatus(500,JSON.stringify({result:0})):(t.send(JSON.stringify({result:1})),i(n,l))}))}}))}},function(e,t){e.exports={add:function(e,t){return e.contents.push(t.body),{newCart:JSON.stringify(e,null,4),name:t.body.title}},modify:function(e,t){var n=e.contents.find((function(e){return e.id===+t.params.id}));return n.quantity+=t.body.op,{newCart:JSON.stringify(e,null,4),name:n.title}},remove:function(e,t){var n=e.contents.find((function(e){return e.id===+t.params.id}));return e.contents.splice(e.contents.indexOf(n),1),{newCart:JSON.stringify(e,null,4),name:n.title}}}},function(e,t,n){var r=n(0),o=n(7);e.exports=function(e,t){r.readFile("./dist/server/db/logs.json","utf-8",(function(n,i){if(n)console.log("Can not read logs...");else{var s=JSON.parse(i),u={name:t,action:e,time:o().format("DD MM YYYY, h:mm:ss")};s.push(u),r.writeFile("./dist/server/db/logs.json",JSON.stringify(s),(function(e){e&&console.log("Can not write logs...")}))}}))}},function(e,t){e.exports=require("moment")}]);