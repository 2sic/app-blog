(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ieWF:function(e,t,a){"use strict";a.r(t),a.d(t,"ExamplesModule",function(){return P});var n=a("ofXK"),o=a("fXoL");let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-intro-route"]],decls:7,vars:0,template:function(e,t){1&e&&(o.Ib(0,"h3"),o.ac(1,"Start discovering"),o.Hb(),o.Ib(2,"p"),o.ac(3," Click on any of the items above to learn more about it - or go to the other tabs like "),o.Ib(4,"strong"),o.ac(5,"Team"),o.Hb(),o.ac(6," to see how it works.\n"),o.Hb())},encapsulation:2}),e})();var s=a("tyNb"),i=a("GJBw");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-debug-explained"]],decls:24,vars:0,template:function(e,t){1&e&&(o.Ib(0,"div"),o.Ib(1,"h3"),o.ac(2,"How it works"),o.Hb(),o.Ib(3,"p"),o.ac(4," Dnn APIs require certain headers in http-requests. The most commen ist a "),o.Ib(5,"code"),o.ac(6,"RequestVerificationToken"),o.Hb(),o.ac(7," which is also known as the "),o.Ib(8,"code"),o.ac(9,"Anti Forgery Token"),o.Hb(),o.ac(10,". Additional headers like "),o.Ib(11,"code"),o.ac(12,"ModuleId"),o.Hb(),o.ac(13," or "),o.Ib(14,"code"),o.ac(15,"TabID"),o.Hb(),o.ac(16," provide context so the backend knows what system you are talking to. "),o.Hb(),o.Ib(17,"p"),o.ac(18," These headers are automatically added to your http-requests thanks to dnn-sxc-angular. There are two ways dnn-sxc-angular gets these values: "),o.Hb(),o.Ib(19,"ol"),o.Ib(20,"li"),o.ac(21,"using the attributes in the app-tag (faster, but harder to setup)"),o.Hb(),o.Ib(22,"li"),o.ac(23,"auto-detecting it from the HTML-DOM (slower, but just works)"),o.Hb(),o.Hb(),o.Hb())},encapsulation:2}),e})(),b=(()=>{class e{constructor(e){this.context=e}}return e.\u0275fac=function(t){return new(t||e)(o.Fb(i.b))},e.\u0275cmp=o.zb({type:e,selectors:[["app-debug"]],decls:39,vars:5,template:function(e,t){1&e&&(o.Ib(0,"h2"),o.ac(1,"Debug DNN & 2sxc Parameters"),o.Hb(),o.Ib(2,"p"),o.ac(3,"This just shows the configuration currently in use."),o.Hb(),o.Ib(4,"ol"),o.Ib(5,"li"),o.Ib(6,"strong"),o.ac(7,"Edition"),o.Hb(),o.ac(8),o.Gb(9,"br"),o.ac(10," You would use this information for lazy-loading additional things from the correct build-folder (for example: if you needed to dynamically load some svg files). "),o.Hb(),o.Ib(11,"li"),o.Ib(12,"strong"),o.ac(13,"ApiEdition"),o.Hb(),o.ac(14),o.Gb(15,"br"),o.ac(16," This is automatically used in the 2sxc API calls, so that you can run a staging copy of your code without affecting public users or for A/B testing. "),o.Hb(),o.Ib(17,"li"),o.Ib(18,"strong"),o.ac(19,"Context information for HTTP"),o.Hb(),o.Gb(20,"br"),o.ac(21," These are automatically used in most http calls, because they tell the server what page the user is on. "),o.Ib(22,"ol"),o.Ib(23,"li"),o.Ib(24,"strong"),o.ac(25,"Page ID / Tab ID"),o.Hb(),o.ac(26),o.Hb(),o.Ib(27,"li"),o.Ib(28,"strong"),o.ac(29,"Sxc ID / Module ID"),o.Hb(),o.ac(30),o.Hb(),o.Ib(31,"li"),o.Ib(32,"strong"),o.ac(33,"Anti Forgery Token"),o.Hb(),o.ac(34),o.Gb(35,"br"),o.ac(36," This is automatically added to most http calls, for increased security. It changes with every page you load. "),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Gb(37,"hr"),o.Gb(38,"app-debug-explained")),2&e&&(o.wb(8),o.cc(" : ",t.context.edition,""),o.wb(6),o.cc(" : ",t.context.apiEdition," "),o.wb(12),o.cc(" : ",t.context.$2sxc.env.page()," "),o.wb(4),o.cc(" : ",t.context.sxc.id," "),o.wb(4),o.cc(" : ",t.context.$2sxc.env.rvt()," "))},directives:[r],encapsulation:2}),e})();var l=a("tk/3");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-api-explained"]],decls:11,vars:0,template:function(e,t){1&e&&(o.Ib(0,"div"),o.Ib(1,"h3"),o.ac(2,"How it works"),o.Hb(),o.Ib(3,"p"),o.ac(4," Everything here is standard Angular, and it uses the "),o.Ib(5,"code"),o.ac(6,"Data.api"),o.Hb(),o.ac(7," and "),o.Ib(8,"code"),o.ac(9,"Data.api$"),o.Hb(),o.ac(10," from 2sxc to access API endpoints. "),o.Hb(),o.Hb())},encapsulation:2}),e})(),p=(()=>{class e{constructor(e){this.numbers$=e.api$("simple/Numbers");const t=e.api("simple");this.apiMessage$=t.get("hello"),this.nameMessage$=t.get("hello",(new l.d).set("name","Michael")),this.something$=t.get("Something",(new l.d).set("name","Samuel Jackson"))}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Fb(i.c))},e.\u0275cmp=o.zb({type:e,selectors:[["app-api-demo"]],decls:18,vars:14,template:function(e,t){1&e&&(o.Ib(0,"h3"),o.ac(1,"API Access examples"),o.Hb(),o.Ib(2,"ol"),o.Ib(3,"li"),o.ac(4),o.Rb(5,"async"),o.Hb(),o.Ib(6,"li"),o.ac(7),o.Rb(8,"async"),o.Hb(),o.Ib(9,"li"),o.ac(10),o.Rb(11,"async"),o.Hb(),o.Ib(12,"li"),o.ac(13),o.Rb(14,"json"),o.Rb(15,"async"),o.Hb(),o.Hb(),o.Gb(16,"hr"),o.Gb(17,"app-api-explained")),2&e&&(o.wb(4),o.cc("Hello from API: ",o.Sb(5,4,t.apiMessage$),""),o.wb(3),o.cc("Hello with name: ",o.Sb(8,6,t.nameMessage$),""),o.wb(3),o.cc("It gives us these numbers: ",o.Sb(11,8,t.numbers$),""),o.wb(3),o.cc(" Something: ",o.Sb(14,10,o.Sb(15,12,t.something$))," "))},directives:[u],pipes:[n.b,n.f],encapsulation:2}),e})();var d=a("lJxs"),h=a("quSY");let m=(()=>{class e{constructor(){this.subSink=new h.a}autoUnsubscribe(e){this.subSink.add(e)}ngOnDestroy(){this.subSink.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["dummy-abstract-component"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e})();var I=a("2Vo4"),g=a("eIep");let H=(()=>{class e{constructor(e,t){var a;this.selectedBu$=new I.a("");const n=(null===(a=t.sxc)||void 0===a?void 0:a.isEditMode())?"&includeGuid=true":"";this.team$=this.selectedBu$.pipe(Object(g.a)(t=>e.query$(`BusinessUnitTeam?bu=${t}${n}`)))}setFilter(e){this.selectedBu$.next(e)}refresh(){this.setFilter(this.selectedBu$.value)}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(i.c),o.Lb(i.b))},e.\u0275prov=o.Bb({token:e,factory:e.\u0275fac,providedIn:"any"}),e})();function f(e,t){if(1&e&&(o.Ib(0,"a",2),o.ac(1),o.Hb()),2&e){const e=t.$implicit;o.Tb("routerLink","/examples/team/"+e.Name),o.wb(1),o.cc(" | ",e.Name," ")}}const w=function(){return{exact:!0}};let v=(()=>{class e{constructor(e){this.data=e,this.businessUnits$=this.data.content$("BusinessUnit")}}return e.\u0275fac=function(t){return new(t||e)(o.Fb(i.c))},e.\u0275cmp=o.zb({type:e,selectors:[["app-business-unit-selector"]],decls:6,vars:5,consts:[["routerLink","/examples/team","routerLinkActive","selected",3,"routerLinkActiveOptions"],["routerLinkActive","selected",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","selected",3,"routerLink"]],template:function(e,t){1&e&&(o.Ib(0,"div"),o.ac(1," Select Business Unit: "),o.Ib(2,"a",0),o.ac(3," All "),o.Hb(),o.Zb(4,f,2,2,"a",1),o.Rb(5,"async"),o.Hb()),2&e&&(o.wb(2),o.Tb("routerLinkActiveOptions",o.Ub(4,w)),o.wb(2),o.Tb("ngForOf",o.Sb(5,2,t.businessUnits$)))},directives:[s.c,s.b,n.j],pipes:[n.b],styles:["li[_ngcontent-%COMP%]{display:inline}a.selected[_ngcontent-%COMP%]{font-weight:700}"]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-team-explained"]],decls:32,vars:0,consts:[["href","https://2sxc.org/","target","_blank"]],template:function(e,t){1&e&&(o.Ib(0,"div"),o.Ib(1,"h3"),o.ac(2,"How it works"),o.Hb(),o.Ib(3,"p"),o.ac(4," Everything here is standard Angular, and it talks with DNN and "),o.Ib(5,"a",0),o.ac(6,"2sxc"),o.Hb(),o.ac(7," to get data. "),o.Hb(),o.Ib(8,"ul"),o.Ib(9,"li"),o.ac(10,"the menu showing the business units uses the "),o.Ib(11,"code"),o.ac(12,"Data.content$"),o.Hb(),o.ac(13," from 2sxc to get all items of a specific type (in this case the BusinessUnits)"),o.Hb(),o.Ib(14,"li"),o.ac(15,"if you click on a business unit, the "),o.Ib(16,"code"),o.ac(17,"route"),o.Hb(),o.ac(18," is changed"),o.Hb(),o.Ib(19,"li"),o.ac(20,"the list showing the team uses "),o.Ib(21,"code"),o.ac(22,"Data.query$"),o.Hb(),o.ac(23," to query the "),o.Ib(24,"code"),o.ac(25,"Person"),o.Hb(),o.ac(26,"s based on the selected BusinessUnit"),o.Hb(),o.Ib(27,"li"),o.ac(28,"if you're logged in as admin, the "),o.Ib(29,"code"),o.ac(30,"sxc-toolbar"),o.Hb(),o.ac(31," attribute gives you mouse-over menus to edit/delete things"),o.Hb(),o.Hb(),o.Hb())},encapsulation:2}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-person"]],inputs:{person:"person"},decls:4,vars:2,template:function(e,t){1&e&&(o.Ib(0,"div"),o.Gb(1,"img"),o.Ib(2,"b"),o.ac(3),o.Hb(),o.Hb()),2&e&&(o.wb(1),o.xb("src",t.person.Photo+"?width=100&mode=crop",o.Xb),o.wb(2),o.bc(t.person.Name))},styles:["img[_ngcontent-%COMP%]{border-radius:50%;width:50px}div[_ngcontent-%COMP%]:hover{color:#0088f4;text-decoration:underline}"],changeDetection:0}),e})();function x(e,t){if(1&e){const e=o.Jb();o.Ib(0,"li",0),o.Ob("refresh",function(){return o.Wb(e),o.Qb().teamSvc.refresh()}),o.Gb(1,"app-person",2),o.Hb()}if(2&e){const e=t.$implicit,a=o.Qb();o.Tb("sxc-toolbar",a.toolbarFor(e)),o.wb(1),o.Tb("person",e)}}let T=(()=>{class e extends m{constructor(e,t,a){super(),this.route=e,this.teamSvc=t,this.cdr=a,this.team=[],this.autoUnsubscribe(this.route.params.pipe(Object(d.a)(e=>e.name||"")).subscribe(e=>this.teamSvc.setFilter(e))),this.autoUnsubscribe(this.teamSvc.team$.subscribe(e=>{this.team=e,this.cdr.detectChanges()}))}trackById(e,t){return t.Id}toolbarFor(e){var t;const a="toolbar=empty?contentType=Person&entityId="+(null!==(t=null==e?void 0:e.Id)&&void 0!==t?t:"0");return e?[a,"edit","delete&color=gray?entityGuid="+e.Guid+"&title="+e.Name]:[a,"new"]}}return e.\u0275fac=function(t){return new(t||e)(o.Fb(s.a),o.Fb(H),o.Fb(o.h))},e.\u0275cmp=o.zb({type:e,selectors:[["app-team"]],features:[o.ub],decls:8,vars:3,consts:[[3,"sxc-toolbar","refresh"],[3,"sxc-toolbar","refresh",4,"ngFor","ngForOf","ngForTrackBy"],[3,"person"]],template:function(e,t){1&e&&(o.Ib(0,"div",0),o.Ob("refresh",function(){return t.teamSvc.refresh()}),o.Ib(1,"h2"),o.ac(2,"Team"),o.Hb(),o.Gb(3,"app-business-unit-selector"),o.Ib(4,"ol"),o.Zb(5,x,2,2,"li",1),o.Hb(),o.Gb(6,"hr"),o.Gb(7,"app-team-explained"),o.Hb()),2&e&&(o.Tb("sxc-toolbar",t.toolbarFor()),o.wb(5),o.Tb("ngForOf",t.team)("ngForTrackBy",t.trackById))},directives:[i.f,v,n.j,y,k],encapsulation:2,changeDetection:0}),e})();const A=function(){return["../intro/integrate"]},D=function(){return["../intro/routing"]},N=function(){return["../intro/hot-loading"]},$=function(){return["../intro/conventions"]},S=function(){return["../intro/deploy"]},F=[{path:"intro",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-introduction"]],decls:42,vars:10,consts:[["routerLinkActive","active",3,"routerLink"]],template:function(e,t){1&e&&(o.Ib(0,"h2"),o.ac(1," Welcome to the Angular 11 Template App for DNN/2sxc\n"),o.Hb(),o.Ib(2,"p"),o.ac(3," This app shows you how to leverage Angular 11 inside DNN and 2sxc. This app will show you how to do all these things. "),o.Gb(4,"br"),o.ac(5," Click on the items below to learn more:\n"),o.Hb(),o.Ib(6,"ol"),o.Ib(7,"li"),o.Ib(8,"a",0),o.Ib(9,"strong"),o.ac(10,"Integrate Angular"),o.Hb(),o.ac(11," into DNN (the right way \ud83d\ude09)"),o.Hb(),o.Hb(),o.Ib(12,"li"),o.Ib(13,"a",0),o.ac(14,"Use "),o.Ib(15,"strong"),o.ac(16,"Angular Routing"),o.Hb(),o.ac(17," within DNN pages (the url which switches SPA views)"),o.Hb(),o.Hb(),o.Ib(18,"li"),o.ac(19," access data from content-items and queries "),o.Hb(),o.Ib(20,"li"),o.ac(21," Call backend WebAPIs "),o.Hb(),o.Ib(22,"li"),o.Ib(23,"a",0),o.Ib(24,"strong"),o.ac(25,"Hot-Loading"),o.Hb(),o.ac(26,": develop on your local PC while running the app with live-reloading inside DNN \ud83d\ude0e"),o.Hb(),o.Hb(),o.Ib(27,"li"),o.Ib(28,"a",0),o.Ib(29,"strong"),o.ac(30,"Conventions"),o.Hb(),o.ac(31,": best-practice conventions to learn while you discover"),o.Hb(),o.Hb(),o.Ib(32,"li"),o.Ib(33,"a",0),o.Ib(34,"strong"),o.ac(35,"Quick-Deploy"),o.Hb(),o.ac(36,": delpoy to various editions with an "),o.Ib(37,"code"),o.ac(38,"npm run"),o.Hb(),o.ac(39," call"),o.Hb(),o.Hb(),o.Hb(),o.Gb(40,"hr"),o.Gb(41,"router-outlet")),2&e&&(o.wb(8),o.Tb("routerLink",o.Ub(5,A)),o.wb(5),o.Tb("routerLink",o.Ub(6,D)),o.wb(10),o.Tb("routerLink",o.Ub(7,N)),o.wb(5),o.Tb("routerLink",o.Ub(8,$)),o.wb(5),o.Tb("routerLink",o.Ub(9,S)))},directives:[s.c,s.b,s.e],encapsulation:2}),e})(),children:[{path:"",component:c},{path:"integrate",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-intro-integrate"]],decls:53,vars:0,template:function(e,t){1&e&&(o.Ib(0,"h3"),o.ac(1,"#1 Integrate Angular 11 inside DNN best practices"),o.Hb(),o.Ib(2,"p"),o.ac(3," Adding an Angular-App to DNN is kind of simple, but doing it right requires quite a bit of thought. These are the parts we solved really well - which we recommend you use as inspiration. These aspects are solved by the "),o.Ib(4,"code"),o.ac(5,"_AngularApp.cshtml"),o.Hb(),o.ac(6," and the helper "),o.Ib(7,"code"),o.ac(8,"shared/_AngularIntegration.cshtml"),o.Hb(),o.ac(9,":\n"),o.Hb(),o.Ib(10,"ul"),o.Ib(11,"li"),o.ac(12,"Ensure we have the correct "),o.Ib(13,"code"),o.ac(14,"base"),o.Hb(),o.ac(15," tag in the header to get perfect "),o.Ib(16,"strong"),o.ac(17,"routing"),o.Hb(),o.Hb(),o.Ib(18,"li"),o.ac(19,"Include a helper-JS which provides DNN module information to Angular (for "),o.Ib(20,"strong"),o.ac(21,"WebApi calls"),o.Hb(),o.ac(22," which require more headers like the "),o.Ib(23,"em"),o.ac(24,"RequestVerificationToken"),o.Hb(),o.ac(25,")"),o.Hb(),o.Ib(26,"li"),o.ac(27,"Show "),o.Ib(28,"strong"),o.ac(29,"edition selection"),o.Hb(),o.ac(30," for super-users"),o.Hb(),o.Ib(31,"li"),o.ac(32,"Show the app in "),o.Ib(33,"code"),o.ac(34,"live"),o.Hb(),o.ac(35," or "),o.Ib(36,"code"),o.ac(37,"staging"),o.Hb(),o.ac(38," edition so our customer can see a new version before it's live. It will also remember the chosen edition in the cookie."),o.Hb(),o.Ib(39,"li"),o.Ib(40,"strong"),o.ac(41,"Parse/import"),o.Hb(),o.ac(42," the important parts from the "),o.Ib(43,"code"),o.ac(44,"index.html"),o.Hb(),o.ac(45," which angular created automatically."),o.Hb(),o.Ib(46,"li"),o.Ib(47,"strong"),o.ac(48,"Special integration for developers"),o.Hb(),o.ac(49," - developers can run "),o.Ib(50,"code"),o.ac(51,"ng serve"),o.Hb(),o.ac(52," on their local system and see it in DNN. This makes development 10x faster."),o.Hb(),o.Hb())},encapsulation:2}),e})()},{path:"routing",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-intro-route"]],decls:9,vars:0,template:function(e,t){1&e&&(o.Ib(0,"h3"),o.ac(1,"#2 Awesome Angular Routing"),o.Hb(),o.Ib(2,"p"),o.ac(3," The way we implemented the dnn-integration, angular routing just works!\n"),o.Hb(),o.Ib(4,"ul"),o.Ib(5,"li"),o.ac(6,"Clicking on routes makes it look like a real URL"),o.Hb(),o.Ib(7,"li"),o.ac(8,"Page refresh stays on the route which was visible before, so it feels like a real page."),o.Hb(),o.Hb())},encapsulation:2}),e})()},{path:"hot-loading",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-intro-route"]],decls:23,vars:0,template:function(e,t){1&e&&(o.Ib(0,"h3"),o.ac(1,"Hot-Loading: Develop locally, run live in DNN"),o.Hb(),o.Ib(2,"p"),o.ac(3," You get up to 10x faster development when you can use live-compile and see the results in DNN from your local dev environment. Here's how it works:\n"),o.Hb(),o.Ib(4,"ol"),o.Ib(5,"li"),o.ac(6,"First you copy the app to your local drive (or clone the same repo to a local folder) and initialize everything (see checklist)"),o.Hb(),o.Ib(7,"li"),o.ac(8,"Then you run "),o.Ib(9,"code"),o.ac(10,"npm run local"),o.Hb(),o.ac(11," in your console. This will start "),o.Ib(12,"code"),o.ac(13,"ng serve"),o.Hb(),o.ac(14," on "),o.Ib(15,"em"),o.ac(16,"localhost:4200"),o.Hb(),o.ac(17," and whenever you save a code file, it recompiles in seconds."),o.Hb(),o.Ib(18,"li"),o.ac(19,"Our connector code in the "),o.Ib(20,"code"),o.ac(21,"_AngularIntegration.cshtml"),o.Hb(),o.ac(22," will now auto-load all the default bits so it just works!"),o.Hb(),o.Hb())},encapsulation:2}),e})()},{path:"conventions",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-intro-route"]],decls:30,vars:0,template:function(e,t){1&e&&(o.Ib(0,"h3"),o.ac(1,"Conventions used in the code"),o.Hb(),o.Ib(2,"p"),o.ac(3," We strive to create all our demos / tutorials / templates according to best practices - while keeping a balance to making it simple. Here are some important conventions we use, just to help you better navigate our code:\n"),o.Hb(),o.Ib(4,"ol"),o.Ib(5,"li"),o.ac(6," We use a lot of "),o.Ib(7,"code"),o.ac(8,"observables"),o.Hb(),o.ac(9," as is best practices in Angular. Since it's helpful to know what variables are observable streams, we usually add a "),o.Ib(10,"code"),o.ac(11,"$"),o.Hb(),o.ac(12," to the end of the variable name. For example, a stream giving you a team is called "),o.Ib(13,"code"),o.ac(14,"team$"),o.Hb(),o.ac(15,". "),o.Hb(),o.Ib(16,"li"),o.ac(17," We split the application into the intro/root part, and all the examples are in a separate "),o.Ib(18,"code"),o.ac(19,"module"),o.Hb(),o.ac(20,". This is great for demonstrating "),o.Ib(21,"code"),o.ac(22,"sub-modules"),o.Hb(),o.ac(23,", "),o.Ib(24,"code"),o.ac(25,"sub-routing"),o.Hb(),o.ac(26," and more. It also allows you to just copy this app, remove the "),o.Ib(27,"code"),o.ac(28,"examples"),o.Hb(),o.ac(29," module and build whatever you want. "),o.Hb(),o.Hb())},encapsulation:2}),e})()},{path:"deploy",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.zb({type:e,selectors:[["app-intro-route"]],decls:21,vars:0,template:function(e,t){1&e&&(o.Ib(0,"h3"),o.ac(1,"Develop locally - auto-deploy to Dnn Server"),o.Hb(),o.Ib(2,"p"),o.ac(3," Since you'll do most of the Angular development locally, we made sure that deployment to the target server is super easy. This helps if you have a normal network connection. If you use FTP, you'll have to do the deployment manually.\n"),o.Hb(),o.Ib(4,"ul"),o.Ib(5,"li"),o.ac(6,"In the "),o.Ib(7,"code"),o.ac(8,"package.json"),o.Hb(),o.ac(9," there is a property "),o.Ib(10,"code"),o.ac(11,"publish_path"),o.Hb(),o.ac(12," containing the target where the live server is"),o.Hb(),o.Ib(13,"li"),o.ac(14,"Running "),o.Ib(15,"code"),o.ac(16,"npm run build-to-staging"),o.Hb(),o.ac(17," or "),o.Ib(18,"code"),o.ac(19,"npm run build-to-live"),o.Hb(),o.ac(20," will auto-build and deploy to these editions on the live server"),o.Hb(),o.Hb())},encapsulation:2}),e})()}]},{path:"api",component:p},{path:"debug",component:b},{path:"team",component:T},{path:"team/:name",component:T},{path:"**",redirectTo:"intro"}];let L=(()=>{class e{}return e.\u0275mod=o.Db({type:e}),e.\u0275inj=o.Cb({factory:function(t){return new(t||e)},imports:[[s.d.forChild(F)],s.d]}),e})(),P=(()=>{class e{}return e.\u0275mod=o.Db({type:e}),e.\u0275inj=o.Cb({factory:function(t){return new(t||e)},imports:[[n.c,L,i.a]]}),e})()}}]);