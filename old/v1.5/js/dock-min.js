/*
 jquery.jqDock.js v1.8
*/
(function(k,w){if(!k.jqDock){var v=["Top","Right","Bottom","Left"],N=["Major","Minor"],z=["mouseenter","mousemove","mouseleave"],x=["docknudge","dockidle","dockfreeze"],s=["Idler","Inactive","Indock","Overdock","Offdock"],E=['<div style="position:relative;padding:0;',"margin:0;border:0 none;background-color:transparent;",'">'],p={v:{wh:"height",xy:1,tl:"top",lead:0,trail:2,inv:"h"},h:{wh:"width",xy:0,tl:"left",lead:3,trail:1,inv:"v"}},l=[],F=[0,0],X=function(){},A=function(a){a=parseInt(a,10);return isNaN(a)?
0:a},u=function(a,d){for(var c=s[d]?d+1:s.length;d<c&&c--;)if(a[s[c]]){w.clearTimeout(a[s[c]]);a[s[c]]=null}},B=function(a){return a?1*((a.id||"").match(/^jqDock(\d+)$/)||[0,-1])[1]:-1},Y=function(){var a=l[B(k(".jqDockFilter",this).add(this).css({filter:""}).removeClass("jqDockFilter").filter(".jqDock")[0])];if(a){a.Asleep=false;a.Menu.trigger("dockshow",["ready"]).trigger(x[0])}},G=function(a,d){for(var c=true,e=l.length,b;a&&c&&e--&&l[e].Elem;)for(b=l[e].Elem.length;c&&b--;)c=l[e].Elem[b].Img[0]!==
a;return c?!c:d?[e,b]:l[e].Elem[b]},H=function(a){var d=(new Date).getTime();a=a?a.Stamp+a.Opts.duration:0;if(a>d)d-=a-d;return d},O=function(a){var d=l[a.data.id],c=d.Elem[a.data.idx];c.height=this.height;c.width=this.width;--d.Load<=0&&w.setTimeout(function(){k.jqDock.initDock(a.data.id)},0)},Z=function(a,d){for(var c;a&&a.ownerDocument&&a!==d;){if(c=a.className.toString().match(/jqDockMouse(\d+)/))return 1*c[1];a=a.parentNode}return-1},P=function(a,d,c){var e={},b=p[c].wh;c=p[p[c].inv].wh;e[b]=
d;e[c]=Math.round(d*a[c]/a[b]);return e},Q=function(){k(this).prev("img").triggerHandler("click")},y=function(a,d){var c=a.Elem[a.Current];if(c&&a.Opts.labels)c.Label.el[d?"show":"hide"]()},R=function(a){var d=p[a.Opts.vh],c=a.Elem.length,e=-1,b=0,f,h,j,i=F[d.xy]-a.Elem[0].Wrap.parent().offset()[d.tl];if(i>=0)for(;e<0&&b<c;b++){f=a.Elem[b];h=f.Pad[d.lead]+f.Pad[d.trail];j=f.Major+h;if(i<j){if(b!==a.Current){y(a);a.Current=b}e=f.Offset+i*(f.Initial+h)/j}else i-=j}return e},S=function(a){for(var d=
a.childNodes.length,c;d;){c=a.childNodes[--d];if(c.childNodes&&c.childNodes.length)S(c);else c.nodeType===3&&a.removeChild(c)}},T=function(a){a.Menu.css({visibility:"visible"}).show()},D=function(a){var d=a.Opts.idle;if(d){u(a,0);a[s[0]]=w.setTimeout(function(){a.Menu.trigger("dockidle")},d)}},$=function(a,d,c){var e=a.Opts,b=e.labels,f=d.Label,h;f.el=k('<div class="jqDockLabel jqDockLabel'+d.Link+'" style="position:absolute;margin:0;"></div>').hide().insertAfter(d.Img).click(Q);if(b){h=b.charAt(0)===
"b";b=b.charAt(1)==="r";f.el.css({top:h?"auto":0,left:b?"auto":0,bottom:h?0:"auto",right:b?0:"auto"})}a=e.setLabel.call(a.Menu[0],d.Title,c,f.el[0]);a!==false&&k('<div class="jqDockLabelText">'+a.toString()+"</div>").appendTo(f.el)},I=function(a,d){var c=l[a],e=c.Opts,b=p[e.vh].wh,f=c.Elem.length,h,j,i;for(d=d||d===0?d:R(c);f--;){h=c.Elem[f];i=h.Initial;if(d>=0){j=Math.abs(d-h.Centre);if(j<e.distance)i=h[b]-Math.round((h[b]-h.Initial)*Math.pow(j,e.coefficient)/e.attenuation);if(f===c.Current){j=[F[p[e.vh].xy],
c.Current,i].join(",");if(j===c.ToFro[0]&&i!==c.ToFro[2])i=c.ToFro[2];else c.ToFro=[c.ToFro[1],j,i]}}h.Final=i}},aa=function(a){return a},U=function(a,d,c,e){a=l[a];var b=a.Elem[d],f=a.Opts,h=a.Yard,j=p[f.vh],i=p[j.inv],n=b.src!==b.altsrc,o,g,m,t;if(e||b.Major!==c){o=k.boxModel||f.vh==="v"?0:a.Border[j.lead]+a.Border[j.trail];if(n&&!e&&b.Major===b.Initial)b.Img[0].src=b.altsrc;a.Spread+=c-b.Major;g=P(b,c,f.vh);m=f.size-g[i.wh];if({top:1,left:1}[f.align])g["margin"+v[i.trail]]=m;else if({middle:1,
center:1}[f.align]){t=Math.round(m*(100-f.bias)/100);g["margin"+v[i.lead]]=m-t;g["margin"+v[i.trail]]=t}else g["margin"+v[i.lead]]=m;if(c!==b.Major||e&&!d){f.flow&&h.parent()[j.wh](a.Spread+a.Border[j.lead]+a.Border[j.trail]);h[j.wh](a.Spread+o)}b.Wrap.css(g);f.flow||h.css(j.tl,Math.floor(Math.max(0,(a[j.wh]-a.Spread)/2)));if(a.OnDock){d=!a.Stamp;f=a.Opts.labels;h=p[a.Opts.vh];j=a.Elem[a.Current];var q,r;if(j&&f){o=j.Label;m=o.el;if(o.mc){o.mc=0;for(q in p){o[q]=m[p[q].wh]();for(r in{lead:1,trail:1})o[q]+=
A(m.css("padding"+v[p[q][r]]))}}f.charAt(0)==="m"&&m.css({top:Math.floor((j[N[p[h.inv].xy]]-o.v)/2)});f.charAt(1)==="c"&&m.css({left:Math.floor((j[N[h.xy]]-o.h)/2)})}d&&y(a,1)}b.Major=c;b.Minor=g[i.wh];if(n&&!e&&c===b.Initial)b.Img[0].src=b.src}},J=function(a){var d=l[a],c=d.Opts,e=p[c.vh],b=c.duration+c.step,f=0,h;if(d.Stamp){b=H()-d.Stamp;if(b>=c.duration)d.Stamp=0}if(b>=c.step){for(h=(c.duration-b)/c.step;f<d.Elem.length;f++){c=d.Elem[f];b=(b=c.Final-c.Major)&&h>1?c.Major+Math[b<0?"floor":"ceil"](b/
h):c.Final;U(a,f,b)}if(d.Spread>d[e.wh]){d.Yard.parent()[e.wh](d.Spread+d.Border[e.lead]+d.Border[e.trail]);d[e.wh]=d.Spread}}},K=function(a,d){var c=l[a],e=c.Elem,b=e.length;u(c,2);if(c.OnDock&&!c.Stamp){for(I(a,d);b&&e[b-1].Major===e[b-1].Final;)--b;if(b){J(a);c[s[2]]=w.setTimeout(function(){K(a,d)},c.Opts.step)}else y(c,1)}},V=function(a,d){var c=l[a],e=c.Elem,b=e.length;if(!c.OnDock){for(;b&&e[b-1].Major<=e[b-1].Initial;)--b;R(c);if(b){J(a);c[s[4]]=w.setTimeout(function(){V(a,d)},c.Opts.step)}else{c.Stamp=
0;for(b=e.length;b--;)e[b].Major=e[b].Final=e[b].Initial;c.Current=-1;d||D(c)}}},W=function(a,d){var c=l[a],e=c.Elem,b=e.length;if(c.OnDock){for(I(a,d);b&&e[b-1].Major===e[b-1].Final;)--b;if(!b||!c.Stamp){c.Stamp=0;K(a,d)}else{J(a);c[s[3]]=w.setTimeout(function(){W(a,d)},c.Opts.step)}}},C=function(a,d,c,e){var b=l[d],f=b.Elem,h=f.length;if(a===0){b.OnDock=1;b.Current>=0&&b.Current!==c&&y(b);b.Current=c;b.Stamp=e&&e>1?0:H(b);W(d,e?f[c].Centre:null)}if(a===1){if(c!==b.Current){y(b);b.Current=c}K(d)}if(a===
2){u(b,1);b.OnDock=0;y(b);for(b.Stamp=H(b);h--;)f[h].Final=f[h].Initial;V(d,!!e)}},L=function(a){var d=B(this),c=l[d],e=c?Z(a.target,this):-1,b=-1,f;if(c)if(c.Asleep){if(!c.Opts.noBuffer)c.Sleeper={target:a.target,type:a.type,pageX:a.pageX,pageY:a.pageY}}else{f=c.OnDock;u(c,0);F=[a.pageX,a.pageY];if(a.type===z[2])if(f)b=2;else D(c);else{if(c.Opts.inactivity){u(c,1);c[s[1]]=w.setTimeout(function(){C(2,d,e,1)},c.Opts.inactivity)}if(a.type===z[1])if(e<0){if(f&&c.Current>=0)b=2}else b=!f||c.Current<0?
0:1;else if(e>=0&&!f)b=0}c.Sleeper=null;b>=0&&C(b,d,e)}},M=function(a){var d=k(".jqDock",this).get(0),c=B(d),e=l[c],b=a.type===x[2],f=b?"freeze":"sleep";if(e)if(a.type===x[0]){f=e.Frozen?"thaw":"wake";if(e.Asleep&&!(e.Asleep=e.Opts.onWake.call(this,f)===false))e.Frozen=!k(this).trigger("dockwake",[f]);if(!e.Asleep){D(e);e.Sleeper&&L.call(d,e.Sleeper)}}else{u(e,0);a=!e.Asleep||b&&!e.Frozen;if(!a||e.Opts.onSleep.call(e.Menu[0],f)!==false){e.Asleep=!u(e,b?-1:1);e.Frozen=e.Frozen||b;a&&e.Menu.trigger("docksleep",
[f]);if(b)e.Stamp=e.OnDock=0;else C(2,c,0,1)}}};k.jqDock=function(){return{version:1.8,defaults:{size:48,distance:72,coefficient:1.5,duration:300,align:"bottom",labels:0,source:0,loader:0,inactivity:0,fadeIn:0,fadeLayer:"",step:50,setLabel:0,flow:0,idle:0,onReady:0,onSleep:0,onWake:0,noBuffer:0,active:-1,bias:50},useJqLoader:k.browser.opera||k.browser.safari,initDock:function(a){var d=l[a],c=d.Opts,e=p[c.vh],b=p[e.inv],f=d.Border,h=d.Elem.length,j=E.join(""),i=0,n=0,o,g,m,t=c.fadeLayer;S(d.Menu[0]);
for(d.Menu.children().each(function(q,r){var ba=d.Elem[q].Wrap=k(r).wrap(j+j+"</div></div>").parent();c.vh==="h"&&ba.parent().css("float","left")}).find("img").andSelf().css({position:"relative",padding:0,margin:0,borderWidth:0,borderStyle:"none",verticalAlign:"top",display:"block",width:"100%",height:"100%"});n<h;){g=d.Elem[n++];m=P(g,c.size,e.inv);g.Major=g.Final=g.Initial=m[e.wh];g.Wrap.css(m);g.Img.attr({alt:""}).parent("a").andSelf().removeAttr("title");d[b.wh]=Math.max(d[b.wh],c.size+g.Pad[b.lead]+
g.Pad[b.trail]);g.Offset=i;g.Centre=i+g.Pad[e.lead]+g.Initial/2;i+=g.Initial+g.Pad[e.lead]+g.Pad[e.trail]}for(n=0;n<h;){g=d.Elem[n++];m=g.Pad[e.lead]+g.Pad[e.trail];d.Spread+=g.Initial+m;for(o in{Centre:1,Offset:1}){I(a,g[o]);i=0;for(b=h;b--;)i+=d.Elem[b].Final+m;if(i>d[e.wh])d[e.wh]=i}}for(;n;){g=d.Elem[--n];g.Final=g.Initial}e=[E[0],E[2],'<div id="jqDock',a,'" class="jqDock" style="position:absolute;top:0;left:0;padding:0;margin:0;overflow:visible;height:',d.height,"px;width:",d.width,'px;"></div></div>'].join("");
d.Yard=k("div.jqDock",d.Menu.wrapInner(e));for(b=4;b--;)f[b]=A(d.Yard.css("border"+v[b]+"Width"));for(d.Yard.parent().addClass("jqDockWrap").width(d.width+f[1]+f[3]).height(d.height+f[0]+f[2]);n<h;n++){g=d.Elem[n];m=g.Wrap.parent();for(b=4;b--;)g.Pad[b]&&m.css("padding"+v[b],g.Pad[b]);U(a,n,g.Final,true);m.add(g.Img).addClass("jqDockMouse"+n);$(d,g,n)}g=d.Menu.bind(x.join(" "),M);d.Yard.bind(z.join(" "),L).find("*").css({filter:"inherit"});d.Elem[c.active]&&C(0,a,c.active,2);if(!(d.Asleep=c.onReady.call(d.Menu[0],
"ready")===false))if(t){if(t!=="menu"){g=d.Yard;if(t==="wrap")g=g.parent()}d.Asleep=!!k(".jqDock,.jqDockWrap",g).addClass("jqDockFilter").css({filter:"inherit"});g.css({opacity:0});T(d);g.animate({opacity:1},c.fadeIn,Y)}else{T(d);d.Menu.trigger("dockshow",["ready"]);D(d)}}}}();k.fn.jqDock=function(a){if(a==="nudge"||a==="idle"||a==="freeze")this.filter(".jqDocked").each(function(){M.call(this,{type:"dock"+a})});else if(a==="destroy")this.filter(".jqDocked").each(function(){var c=B(k(".jqDock",k(this).removeClass("jqDocked")).get(0)),
e=l[c],b=z.length,f,h,j;if(e){for(u(e,-1);b--;)e.Yard.unbind(z[b],L);for(b=x.length;b--;)e.Menu.unbind(x[b],M);for(b=0;b<e.Elem.length;b++){h=e.Elem[b];j=h.Img;h.Label.el.unbind("click",Q).remove();j.attr(h.Orig.i).removeClass("jqDockMouse"+b);h.Orig.i.style||j.removeAttr("style");if(h.Link==="Link"){j.parent().attr(h.Orig.a);h.Orig.a.style||j.parent().removeAttr("style")}e.Menu.append(h.Wrap.children());h.Label.el=h.Orig.i=h.Orig.a=null;for(f in h)h[f]=null}k(".jqDockWrap",e.Menu).remove();for(b in e)e[b]=
null;l[c]=null}for(c=l.length;c&&l[c-1]===null;)--c;c||(l=[])});else if(a==="active"||a==="expand")this.each(function(){var c=G(this,1),e=c?l[c[0]]:0;if(e){u(e,-1);if(!e.Frozen)e.Frozen=e.Asleep=!!e.Menu.trigger("docksleep",["freeze"]);C(0,c[0],c[1],a==="active"?2:1)}});else if(a==="get"){var d=this.filter(".jqDocked");return(d=d.length?l[B(k(".jqDock",d).get(0))]:G(this.get(0)))?k.extend(true,{},d):null}else this.length&&!this.not("img").length?this.each(function(c,e){var b=G(e),f=0,h,j,i;a=a||{};
if(b){h=b.Major===b.Initial;for(i in{src:1,altsrc:1})if(a[i]){j=(k.isFunction(a[i])?a[i].call(e,b[i],i):a[i]).toString();if(b[i]!==j){b[i]=j;f=(i==="src"?h:!h)?i:f}}f&&k(e).attr("src",b[f])}}):this.not(".jqDocked").filter(function(){return!k(this).parents(".jqDocked").length&&!k(this).children().not("img").filter(function(){return k(this).filter("a").children("img").parent().children().length!==1}).length}).addClass("jqDocked").each(function(){var c=k(this),e=l.length,b,f,h,j,i;l[e]={Elem:[],Menu:c,
OnDock:0,Stamp:0,width:0,height:0,Spread:0,Border:[],Opts:k.extend({},k.jqDock.defaults,a||{},k.metadata?c.metadata():{}),Current:-1,Load:0,ToFro:["","",0]};b=l[e];f=b.Opts;h=!f.loader&&k.jqDock.useJqLoader||f.loader==="jquery";for(i in{size:1,distance:1,duration:1,inactivity:1,fadeIn:1,step:1,idle:1,active:1})f[i]=A(f[i]);i=1*f.coefficient;f.coefficient=isNaN(i)?1.5:i;if({middle:1,center:1}[f.align]){i=A(f.bias);if(i<1)f.align=f.align==="middle"?"top":"left";if(i>99)f.align=f.align==="middle"?"bottom":
"right";f.bias=i}f.labels=/^[tmb][lcr]$/.test(f.labels.toString())?f.labels:f.labels?{top:"br",left:"tr"}[f.align]||"tl":"";f.setLabel=f.setLabel?f.setLabel:aa;f.fadeLayer=f.fadeIn?{dock:1,wrap:1}[f.fadeLayer]?f.fadeLayer:"menu":"";for(i in{onSleep:1,onWake:1,onReady:1,onFreeze:1})f[i]||(f[i]=X);j=/^m|c$/.test(f.labels);f.attenuation=Math.pow(f.distance,f.coefficient);f.vh={left:1,center:1,right:1}[f.align]?"v":"h";k("img",c).each(function(n,o){var g=k(o),m=g.parent("a"),t=m.attr("title")||"",q={},
r;for(r in{src:1,alt:1,title:1,style:1})q[r]=g.attr(r)||"";++b.Load;b.Elem[n]={Img:g,src:q.src,altsrc:(f.source?f.source.call(o,n):"")||(/\.(gif|jpg|jpeg|png)$/i.test(q.alt||"")?q.alt:"")||q.src,Title:q.title||t||"",Orig:{i:k.extend({},q),a:{title:t,style:m.attr("style")||""}},Label:{mc:j},Pad:[],Link:m.length?"Link":"Image"};for(r=4;r--;)b.Elem[n].Pad[r]=A(g.css("padding"+v[r]))});k.each(b.Elem,function(n,o){var g,m=o.altsrc;if(h)k("<img>").bind("load",{id:e,idx:n},O).attr({src:m});else{g=new Image;
g.onload=function(){O.call(this,{data:{id:e,idx:n}});g.onload="";g=null};g.src=m}})});return this}}})(jQuery,window);