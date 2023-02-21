"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[845],{845:(T,c,n)=>{n.r(c),n.d(c,{AuthModule:()=>w});var a=n(8583),o=n(665),e=n(3018),d=n(6215),g=n(8002),v=n(1841);let p=(()=>{class r{constructor(t){this.http=t,this.url="http://localhost:3000/",this.userEmailSub$=new d.X(""),this.userEmail$=this.userEmailSub$.asObservable()}register(t){return this.http.post(this.url+"user",t)}login(t){return this.getUserByEmail(t.email).pipe((0,g.U)(i=>null===i?null:t.password===i.password?t:null))}userEmail(t){this.userEmailSub$.next(t)}getUserByEmail(t){return this.http.get(this.url+"user?email="+t).pipe((0,g.U)(i=>i[0]||null))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(v.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var h=n(1182),f=n(7316);function Z(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"div",5),e.TgZ(1,"form",0),e.TgZ(2,"div",6),e._UZ(3,"input",7),e.qZA(),e.TgZ(4,"div",6),e._UZ(5,"input",8),e.qZA(),e.TgZ(6,"div",9),e.TgZ(7,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().login()}),e._uU(8,"Log in"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.loginForm)}}const u=function(r){return{inValid:r}};function A(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"form",0),e.TgZ(2,"div",6),e._UZ(3,"input",12),e.qZA(),e.TgZ(4,"div",6),e._UZ(5,"input",13),e.qZA(),e.TgZ(6,"div",6),e._UZ(7,"input",14),e.qZA(),e.TgZ(8,"div",9),e.TgZ(9,"button",15),e.NdJ("click",function(){return e.CHM(t),e.oxw().register()}),e._uU(10,"Register"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.registerForm),e.xp6(2),e.Q6J("ngClass",e.VKq(5,u,t.email.invalid&&t.email.touched)),e.xp6(2),e.Q6J("ngClass",e.VKq(7,u,t.password.invalid&&t.password.touched)),e.xp6(2),e.Q6J("ngClass",e.VKq(9,u,t.name.invalid&&t.name.touched)),e.xp6(2),e.Q6J("disabled",!t.isvalid)}}let C=(()=>{class r{constructor(t,i,l){this.authService=t,this.router=i,this.regUserservice=l,this.mode="login",this.chooseModeForm=new o.cw({mode:new o.NI("")}),this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",o.kI.required)}),this.registerForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",o.kI.required),name:new o.NI("",o.kI.required)})}changeMode(t){this.mode=t.target.value}get value(){return this.registerForm.get("mode")}ngOnInit(){}get email(){return this.registerForm.get("email")}get emailLog(){return this.loginForm.get("email")}get password(){return this.registerForm.get("password")}get name(){return this.registerForm.get("name")}get isvalid(){return this.registerForm.valid}login(){this.authService.userEmail(this.emailLog.value),this.authService.login(this.loginForm.value).subscribe(i=>{i?(this.regUserservice.setCurrentUser(i),alert("success"),this.router.navigateByUrl("/")):alert("invalid login")})}register(){this.authService.register(this.registerForm.value).subscribe(i=>{this.mode="login",this.registerForm.reset()})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(h.F0),e.Y36(f._))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-auth"]],decls:8,vars:3,consts:[[3,"formGroup"],["type","radio","formControlName","mode","value","login",3,"change"],["type","radio","formControlName","mode","value","register",3,"change"],["class","login",4,"ngIf","ngIfElse"],["registerDiv",""],[1,"login"],[1,"input"],["type","email","formControlName","email","placeholder","email"],["type","password","formControlName","password","placeholder","password"],[1,"actions"],[3,"click"],[1,"register"],["type","email","formControlName","email","placeholder","email",3,"ngClass"],["type","password","formControlName","password","placeholder","password",3,"ngClass"],["type","text","formControlName","name","placeholder","username",3,"ngClass"],[3,"disabled","click"]],template:function(t,i){if(1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"input",1),e.NdJ("change",function(m){return i.changeMode(m)}),e.qZA(),e._uU(2," Login "),e.TgZ(3,"input",2),e.NdJ("change",function(m){return i.changeMode(m)}),e.qZA(),e._uU(4," Register\n"),e.qZA(),e.YNc(5,Z,9,1,"div",3),e.YNc(6,A,11,11,"ng-template",null,4,e.W1O)),2&t){const l=e.MAs(7);e.Q6J("formGroup",i.chooseModeForm),e.xp6(5),e.Q6J("ngIf","login"===i.mode)("ngIfElse",l)}},directives:[o._Y,o.JL,o.sg,o._,o.Fj,o.JJ,o.u,a.O5,a.mk],styles:[".inValid[_ngcontent-%COMP%]{border:1px red solid}"]}),r})(),w=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[p],imports:[[a.ez,o.UX,h.Bz.forChild([{path:"",component:C}])]]}),r})()}}]);