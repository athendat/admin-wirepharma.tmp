"use strict";(self.webpackChunkwirepharma=self.webpackChunkwirepharma||[]).push([[736],{4736:(Se,A,a)=>{a.r(A),a.d(A,{UsersModule:()=>Ye});var _=a(5357),E=a(499),Y=a(4787),c=a(3075),u=a(2722),T=a(9646),x=a(7579),v=a(5119),I=a(8765),b=a(8288);const F={_id:null,userId:null,active:!0,name:null,lastname:null,email:null,password:null,roles:[]};var e=a(5e3),w=a(1683),f=a(7495),J=a(1349),Q=a(5094),D=a(393),U=a(5245),d=a(9808),Z=a(7423),h=a(288),p=a(7322),N=a(7531),M=a(2368);function S(o,n){1&o&&(e.ynx(0),e.TgZ(1,"a",33),e._uU(2,"Nuevo"),e.qZA(),e.BQk())}function $(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"a",33),e._uU(2),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(2),e.AsE("",t.selectedUser.name," ",t.selectedUser.lastname,"")}}function O(o,n){1&o&&(e.ynx(0),e._uU(1," Nuevo "),e.BQk())}function z(o,n){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.AsE(" ",t.selectedUser.name," ",t.selectedUser.lastname," ")}}const B=function(o){return{"cursor-not-allowed":o}};function L(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw().createUser()}),e._UZ(1,"mat-icon",35),e.TgZ(2,"span",36),e._uU(3,"Guardar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("ngClass",e.VKq(3,B,t.userForm.invalid))("disabled",t.userForm.invalid),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:save")}}function P(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){return e.CHM(t),e.oxw().updateUser()}),e._UZ(1,"mat-icon",35),e.TgZ(2,"span",36),e._uU(3,"Actualizar"),e.qZA()()}2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:refresh"))}function H(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre es obligatorio. "),e.qZA())}function j(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Los apellidos son obligatorios. "),e.qZA())}function V(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El correo electr\xf3nico es obligatorio. "),e.qZA())}function G(o,n){1&o&&e._UZ(0,"mat-icon",46),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function W(o,n){1&o&&e._UZ(0,"mat-icon",46),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function K(o,n){1&o&&(e.TgZ(0,"mat-error",47),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function X(o,n){1&o&&(e.TgZ(0,"mat-error",47),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function ee(o,n){if(1&o&&(e.TgZ(0,"mat-error",47),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userForm.get("password").getError("password")," ")}}function te(o,n){1&o&&e._UZ(0,"mat-icon",46),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function oe(o,n){1&o&&e._UZ(0,"mat-icon",46),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function re(o,n){1&o&&(e.TgZ(0,"mat-error",47),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function se(o,n){1&o&&(e.TgZ(0,"mat-error",47),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function ne(o,n){if(1&o&&(e.TgZ(0,"mat-error",47),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userForm.get("password2").getError("password")," ")}}function ie(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-expansion-panel")(1,"mat-expansion-panel-header",21)(2,"mat-panel-title",22)(3,"div",23),e._uU(4," Contrase\xf1a "),e.qZA()()(),e.TgZ(5,"div",38)(6,"div",25)(7,"mat-form-field",26)(8,"mat-label"),e._uU(9,"Contrase\xf1a"),e.qZA(),e._UZ(10,"input",39,40),e.TgZ(12,"button",41),e.NdJ("click",function(){e.CHM(t);const r=e.MAs(11);return r.type="password"===r.type?"text":"password"}),e.YNc(13,G,1,1,"mat-icon",42),e.YNc(14,W,1,1,"mat-icon",42),e.qZA(),e.YNc(15,K,2,0,"mat-error",43),e.YNc(16,X,2,0,"mat-error",43),e.YNc(17,ee,2,1,"mat-error",43),e.qZA()(),e.TgZ(18,"div",25)(19,"mat-form-field",26)(20,"mat-label"),e._uU(21,"Confirmar contrase\xf1a"),e.qZA(),e._UZ(22,"input",44,45),e.TgZ(24,"button",41),e.NdJ("click",function(){e.CHM(t);const r=e.MAs(23);return r.type="password"===r.type?"text":"password"}),e.YNc(25,te,1,1,"mat-icon",42),e.YNc(26,oe,1,1,"mat-icon",42),e.qZA(),e.YNc(27,re,2,0,"mat-error",43),e.YNc(28,se,2,0,"mat-error",43),e.YNc(29,ne,2,1,"mat-error",43),e.qZA()()()()}if(2&o){const t=e.MAs(11),s=e.MAs(23),r=e.oxw();e.xp6(1),e.Q6J("collapsedHeight","56px"),e.xp6(9),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===t.type),e.xp6(1),e.Q6J("ngIf","text"===t.type),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password").hasError("password")),e.xp6(5),e.Q6J("formControlName","password2"),e.xp6(3),e.Q6J("ngIf","password"===s.type),e.xp6(1),e.Q6J("ngIf","text"===s.type),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password2").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password2").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password2").hasError("password"))}}let ae=(()=>{class o{constructor(t,s,r,i,l,m,g,Me){this._activatedRoute=t,this._fuseConfirmationService=s,this._changeDetectorRef=r,this._formBuilder=i,this._router=l,this._userService=m,this._roleService=g,this.store=Me,this.dialogMode="view",this.editMode=!1,this.formSubmitted=!1,this.isValid=!1,this.selectedUser=F,this.showAlert=!1,this.userId=null,this.userRoles=[],this.roles=[],this.user$=(0,T.of)(null),this._unsubscribeAll=new x.x}ngOnInit(){this.user$=this.store.select(Y.rk),this.user$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.userForm=this._formBuilder.group({_id:[null],userId:[this.user._id,[c.kI.required]],active:[!0],name:[null,[c.kI.required]],lastname:[null,[c.kI.required]],email:[null,[c.kI.email,c.kI.required]],account:[null],password:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],password2:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]},{validators:this.mustMatch("password","password2")}),this._activatedRoute.params.pipe((0,u.R)(this._unsubscribeAll)).subscribe(({userId:t})=>{this.userId=t,"new"!==this.userId&&(this.editMode=!0,this.store.select(I.dy).pipe((0,u.R)(this._unsubscribeAll)).subscribe(s=>{this.selectedUser=s}),this.userForm.patchValue(this.selectedUser)),this._changeDetectorRef.markForCheck()}),this.userPasswordForm=this._formBuilder.group({userId:[null,[c.kI.required]],password:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],password2:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]},{validators:this.mustMatch("password","password2")}),this.editMode||this._roleService.roles$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.roles=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createUser(){let t=this.userForm.getRawValue();t.roles=this.userRoles,t=(0,v.Z)(t,["_id"]),this._fuseConfirmationService.open({title:"Crear usuario",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,u.R)(this._unsubscribeAll)).subscribe(r=>{"confirmed"===r&&this._userService.createUser(t).pipe((0,u.R)(this._unsubscribeAll)).subscribe(i=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Usuario ${i.user.name} ${i.user.lastname} creado correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._router.navigateByUrl("/users"),this._changeDetectorRef.markForCheck()},i=>{console.warn(i),this._fuseConfirmationService.open({title:`${i.statusText}: ${i.status}`,message:i.error.title,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})}),this._changeDetectorRef.markForCheck()}updateUser(){const t=this.userForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar datos del usuario",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._userService.update(t).subscribe(i=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Usuario ${i.user.name} ${i.user.lastname} actualizado correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._router.navigateByUrl("/users"),this._changeDetectorRef.markForCheck()},i=>{console.warn(i),this._fuseConfirmationService.open({title:`${i.statusText}: ${i.status}`,message:i.error.title,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})}),this._changeDetectorRef.markForCheck()}updateUserPassword(){let t=this.userPasswordForm.getRawValue();t=(0,v.Z)(t,"password2"),this._fuseConfirmationService.open({title:"Actualizar contrase\xf1a",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._userService.resetUserPassword(t).subscribe(i=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`${i.message}`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()},i=>{console.warn(i),this._fuseConfirmationService.open({title:`${i.statusText}: ${i.status}`,message:i.error.title,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})}),this._changeDetectorRef.markForCheck()}trackByFn(t,s){return s.id||t}mustMatch(t,s){return r=>{const i=r.get(t),l=r.get(s);if(!i||!l||(l.hasError("mustMatch")&&(delete l.errors.mustMatch,l.updateValueAndValidity()),this._isEmptyInputValue(l.value)||i.value===l.value))return null;const m={mustMatch:"Las contrase\xf1a no coinciden"};return l.setErrors(m),m}}manageRoles(t,s){s.checked?(this.userRoles.push(t),this._changeDetectorRef.markForCheck()):(this.userRoles.splice(this.userRoles.findIndex(r=>r===t),1),this._changeDetectorRef.markForCheck())}_isEmptyInputValue(t){return null==t||0===t.length}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.gz),e.Y36(w.R),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(_.F0),e.Y36(f.K),e.Y36(J.N),e.Y36(Q.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ath-user-detail"]],decls:63,vars:31,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-700",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[4,"ngIf"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-3xl","font-extrabold","leading-tight","tracking-tight","sm:text-3xl"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","","class","ml-4 bg-primary-500 text-white hover:shadow-lg","mat-button","",3,"ngClass","disabled","click",4,"ngIf"],["mat-raised-button","","class","ml-4 bg-primary-500 text-white hover:shadow-lg","mat-button","",3,"click",4,"ngIf"],[1,"flex-auto","p-6","bg-mine-200","shadow","sm:p-10","rounded-t-2xl"],[1,"flex","flex-col","flex-auto","min-w-0"],[3,"formGroup","autocomplete"],[1,"w-full"],[3,"expanded"],[3,"collapsedHeight"],[1,"flex","items-center"],[1,"text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"grid","w-full","gap-6","p-8","mb-6","border-t-2","sm:grid-cols-4"],[1,"sm:col-span-2"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","required","",3,"type","formControlName","placeholder"],["matInput","","required","",3,"type","formControlName"],[1,"flex","sm:col-span-2"],[1,"flex","flex-col","w-1/4"],[1,"items-start","font-medium"],[3,"formControlName","color"],[1,"ml-1","text-primary-700"],["mat-raised-button","","mat-button","",1,"ml-4","bg-primary-500","text-white","hover:shadow-lg",3,"ngClass","disabled","click"],[3,"svgIcon"],[1,"ml-2","mr-1","text-lg","text-white"],["mat-raised-button","","mat-button","",1,"ml-4","bg-primary-500","text-white","hover:shadow-lg",3,"click"],[1,"grid","w-full","gap-6","p-8","mb-6","border-t-2","sm:grid-cols-2","md:grid-cols-4"],["type","password","matInput","","placeholder","Contrase\xf1a","required","",3,"formControlName"],["passwordField1",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["class","pb-5",4,"ngIf"],["type","password","matInput","","placeholder","Repita la contrase\xf1a","required","",3,"formControlName"],["passwordField2",""],[1,"icon-size-5",3,"svgIcon"],[1,"pb-5"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",5),e._uU(11,"Usuarios"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.YNc(14,S,3,0,"ng-container",7),e.YNc(15,$,3,2,"ng-container",7),e.qZA()(),e.TgZ(16,"div",8)(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA()()()(),e.TgZ(21,"div",11)(22,"div",12),e.YNc(23,O,2,0,"ng-container",7),e.YNc(24,z,2,2,"ng-container",7),e.qZA()()(),e.TgZ(25,"div",13),e.YNc(26,L,4,5,"button",14),e.YNc(27,P,4,1,"button",15),e.qZA()(),e.TgZ(28,"div",16)(29,"div",17)(30,"form",18)(31,"mat-accordion",19)(32,"mat-expansion-panel",20)(33,"mat-expansion-panel-header",21)(34,"mat-panel-title",22)(35,"div",23),e._uU(36," Informaci\xf3n General "),e.qZA()()(),e.TgZ(37,"div",24)(38,"div",25)(39,"mat-form-field",26)(40,"mat-label"),e._uU(41,"Nombre"),e.qZA(),e._UZ(42,"input",27),e.YNc(43,H,2,0,"mat-error",7),e.qZA()(),e.TgZ(44,"div",25)(45,"mat-form-field",26)(46,"mat-label"),e._uU(47,"Apellidos"),e.qZA(),e._UZ(48,"input",28),e.YNc(49,j,2,0,"mat-error",7),e.qZA()(),e.TgZ(50,"div",25)(51,"mat-form-field",26)(52,"mat-label"),e._uU(53,"Correo electr\xf3nico"),e.qZA(),e._UZ(54,"input",27),e.YNc(55,V,2,0,"mat-error",7),e.qZA()(),e.TgZ(56,"div",29)(57,"div",30)(58,"span",31),e._uU(59,"Estado"),e.qZA(),e.TgZ(60,"mat-slide-toggle",32),e._uU(61),e.qZA()()()()(),e.YNc(62,ie,30,13,"mat-expansion-panel",7),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("routerLink","/home"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(1),e.Q6J("routerLink","/users"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(1),e.Q6J("ngIf","new"===s.userId),e.xp6(1),e.Q6J("ngIf","new"!==s.userId),e.xp6(2),e.Q6J("routerLink","./.."),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-left"),e.xp6(5),e.Q6J("ngIf","new"===s.userId),e.xp6(1),e.Q6J("ngIf","new"!==s.userId),e.xp6(2),e.Q6J("ngIf","new"===s.userId),e.xp6(1),e.Q6J("ngIf","new"!==s.userId),e.xp6(3),e.Q6J("formGroup",s.userForm)("autocomplete","off"),e.xp6(2),e.Q6J("expanded",!0),e.xp6(1),e.Q6J("collapsedHeight","56px"),e.xp6(9),e.Q6J("type","text")("formControlName","name")("placeholder","Nombre"),e.xp6(1),e.Q6J("ngIf",s.userForm.get("name").hasError("required")),e.xp6(5),e.Q6J("type","text")("formControlName","lastname"),e.xp6(1),e.Q6J("ngIf",s.userForm.get("lastname").hasError("required")),e.xp6(5),e.Q6J("type","email")("formControlName","email")("placeholder","Correo electr\xf3nico"),e.xp6(1),e.Q6J("ngIf",s.userForm.get("email").hasError("required")),e.xp6(5),e.Q6J("formControlName","active")("color","primary"),e.xp6(1),e.hij(" ",!0===s.userForm.get("active").value?"Activo":"Inactivo"," "),e.xp6(1),e.Q6J("ngIf",!s.editMode))},directives:[D.PQ,_.yS,U.Hw,d.O5,Z.lW,d.mk,c._Y,c.JL,c.sg,h.pp,h.ib,h.yz,h.yK,p.KE,p.hX,N.Nt,c.Fj,c.Q7,c.JJ,c.u,p.TO,M.Rr,p.R9],encapsulation:2,data:{animation:b.L},changeDetection:0}),o})();var ce=a(6087),C=a(4847),y=a(8966),le=a(7446),q=a(7238);const me=["imageFileInput"];function ue(o,n){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function pe(o,n){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function de(o,n){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function _e(o,n){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function fe(o,n){if(1&o&&(e.TgZ(0,"mat-error",29),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userPasswordForm.get("password").getError("password")," ")}}function ge(o,n){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function he(o,n){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function xe(o,n){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function ve(o,n){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function be(o,n){if(1&o&&(e.TgZ(0,"mat-error",29),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userPasswordForm.get("password2").getError("password")," ")}}function we(o,n){if(1&o){const t=e.EpF();e.ynx(0)(1),e.TgZ(2,"div",14)(3,"div",15)(4,"div",16)(5,"form",17)(6,"div",18)(7,"div",19)(8,"mat-form-field",20)(9,"mat-label"),e._uU(10,"Contrase\xf1a"),e.qZA(),e._UZ(11,"input",21,22),e.TgZ(13,"button",23),e.NdJ("click",function(){e.CHM(t);const r=e.MAs(12);return r.type="password"===r.type?"text":"password"}),e.YNc(14,ue,1,1,"mat-icon",24),e.YNc(15,pe,1,1,"mat-icon",24),e.qZA(),e.YNc(16,de,2,0,"mat-error",25),e.YNc(17,_e,2,0,"mat-error",25),e.YNc(18,fe,2,1,"mat-error",25),e.qZA()(),e.TgZ(19,"div",19)(20,"mat-form-field",20)(21,"mat-label"),e._uU(22,"Confirmar contrase\xf1a "),e.qZA(),e._UZ(23,"input",26,27),e.TgZ(25,"button",23),e.NdJ("click",function(){e.CHM(t);const r=e.MAs(24);return r.type="password"===r.type?"text":"password"}),e.YNc(26,ge,1,1,"mat-icon",24),e.YNc(27,he,1,1,"mat-icon",24),e.qZA(),e.YNc(28,xe,2,0,"mat-error",25),e.YNc(29,ve,2,0,"mat-error",25),e.YNc(30,be,2,1,"mat-error",25),e.qZA()()()()()()(),e.BQk()()}if(2&o){const t=e.MAs(12),s=e.MAs(24),r=e.oxw();e.xp6(5),e.Q6J("formGroup",r.userPasswordForm)("autocomplete","off"),e.xp6(6),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===t.type),e.xp6(1),e.Q6J("ngIf","text"===t.type),e.xp6(1),e.Q6J("ngIf",r.userPasswordForm.get("password").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",r.userPasswordForm.get("password").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userPasswordForm.get("password").hasError("password")),e.xp6(5),e.Q6J("formControlName","password2"),e.xp6(3),e.Q6J("ngIf","password"===s.type),e.xp6(1),e.Q6J("ngIf","text"===s.type),e.xp6(1),e.Q6J("ngIf",r.userPasswordForm.get("password2").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",r.userPasswordForm.get("password2").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userPasswordForm.get("password2").hasError("password"))}}function Ue(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-checkbox",41),e.NdJ("change",function(r){e.CHM(t);const i=e.oxw().$implicit;return e.oxw(2).manageRoles(i._id,r)}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("color","primary")("checked",t.checked)}}function Ze(o,n){1&o&&e._UZ(0,"mat-icon",42),2&o&&e.Q6J("color","primary")}function Ce(o,n){if(1&o&&(e.TgZ(0,"div",34)(1,"div",35),e.YNc(2,Ue,1,2,"mat-checkbox",36),e.YNc(3,Ze,1,1,"mat-icon",37),e.qZA(),e.TgZ(4,"div",38)(5,"span",39),e._uU(6),e.qZA(),e.TgZ(7,"span",40),e._uU(8),e.qZA()()()),2&o){const t=n.$implicit;e.xp6(2),e.Q6J("ngIf",!t.isCoreRole),e.xp6(1),e.Q6J("ngIf",t.isCoreRole),e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.description," ")}}function ye(o,n){if(1&o&&(e.ynx(0)(1),e.TgZ(2,"div",14)(3,"div",15)(4,"div",30)(5,"div",31)(6,"div",32),e.YNc(7,Ce,9,4,"div",33),e.qZA()()()()(),e.BQk()()),2&o){const t=e.oxw();e.xp6(7),e.Q6J("ngForOf",t.roles)}}function ke(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",43),e.NdJ("click",function(){return e.CHM(t),e.oxw().updateUser()}),e._uU(1," Actualizar "),e.qZA()}2&o&&e.Q6J("matTooltip","Actualizar")}function Ae(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){return e.CHM(t),e.oxw().updateUserPassword()}),e._uU(1," Actualizar contrase\xf1a "),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.userPasswordForm.invalid)("matTooltip","Actualizar")}}let Te=(()=>{class o{constructor(t,s,r,i,l,m,g){this.data=t,this._dialogRef=s,this._changeDetectorRef=r,this._formBuilder=i,this._fuseConfirmationService=l,this._userService=m,this._roleService=g,this.dialogMode="edit",this.formSubmitted=!1,this.isValid=!1,this.roles=[],this.showAlert=!1,this.titles=[],this.userRoles=[],this._unsubscribeAll=new x.x,this.dialogMode=t.dialogMode,this.selectedUser=t.user}ngOnInit(){"editPass"===this.dialogMode?this.userPasswordForm=this._formBuilder.group({userId:[this.selectedUser._id,[c.kI.required]],password:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],password2:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]},{validators:this.mustMatch("password","password2")}):this._roleService.roles$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{t.forEach(s=>{s.checked=this.selectedUser.roles.some(r=>r._id===s._id),s.checked&&this.userRoles.push(s._id)}),this.roles=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}updateUser(){this._fuseConfirmationService.open({title:"Actualizar roles de usuario",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(s=>{"confirmed"===s&&this._userService.updateUserRoles(this.selectedUser._id,this.userRoles).subscribe(r=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Roles del usuario ${r.name} ${r.lastName} actualizados correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.closeDialog(),this._changeDetectorRef.markForCheck()},r=>{console.warn(r),this._fuseConfirmationService.open({title:`${r.statusText}: ${r.status}`,message:r.error.title,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})}),this._changeDetectorRef.markForCheck()}updateUserPassword(){let t=this.userPasswordForm.getRawValue();t=(0,v.Z)(t,"password2"),this._fuseConfirmationService.open({title:"Actualizar contrase\xf1a",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._userService.resetUserPassword(t).subscribe(i=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`${i.message}`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.closeDialog(),this._changeDetectorRef.markForCheck()},i=>{console.warn(i),this._fuseConfirmationService.open({title:`${i.statusText}: ${i.status}`,message:i.error.title,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})}),this._changeDetectorRef.markForCheck()}trackByFn(t,s){return s.id||t}manageRoles(t,s){s.checked?(this.userRoles.push(t),this._changeDetectorRef.markForCheck()):(this.userRoles.splice(this.userRoles.findIndex(r=>r===t),1),this._changeDetectorRef.markForCheck())}mustMatch(t,s){return r=>{const i=r.get(t),l=r.get(s);if(!i||!l||(l.hasError("mustMatch")&&(delete l.errors.mustMatch,l.updateValueAndValidity()),this._isEmptyInputValue(l.value)||i.value===l.value))return null;const m={mustMatch:"Las contrase\xf1a no coinciden"};return l.setErrors(m),m}}_isEmptyInputValue(t){return null==t||0===t.length}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.WI),e.Y36(y.so),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(w.R),e.Y36(f.K),e.Y36(J.N))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-role-dialog"]],viewQuery:function(t,s){if(1&t&&e.Gf(me,5),2&t){let r;e.iGM(r=e.CRH())&&(s._imageFileInput=r.first)}},decls:19,vars:10,consts:[[1,"relative","flex","flex-col","w-full","max-h-screen"],[1,"flex","flex-col","items-center","flex-auto","w-full"],[1,"w-full","py-5","px-12"],[1,"flex","w-full"],[1,"flex","flex-col","justify-end","w-4/5","my-2"],[1,"text-2xl","font-bold","truncate","sm:text-2xl"],[1,"flex","text-xl","font-normal","text-red-900","truncate","cursor-pointer","hover:underline"],[1,"mr-2.5","text-mine-900",3,"svgIcon"],["target","_blank",1,"text-mine-900","hover:text-primary-700",3,"href"],[4,"ngIf"],[1,"flex","items-center","justify-between","w-full","px-8","py-4","sm:px-12","bg-gray-50","dark:bg-transparent"],["mat-button","",1,"rounded-sm",3,"matTooltip","click"],["mat-flat-button","","class","rounded-sm text-mine-900 bg-primary-700",3,"matTooltip","click",4,"ngIf"],["mat-button","","class","rounded-sm text-mine-900 bg-primary-700",3,"disabled","matTooltip","click",4,"ngIf"],[1,"flex","flex-col","border-t","gap-y-5"],[1,"flex","flex-col","w-full","gap-8","md:flex-row"],[1,"flex","flex-col","w-full","space-y-4"],[1,"flex","flex-col",3,"formGroup","autocomplete"],[1,"flex","flex-col","w-full","gap-4","mt-5","mb-2"],[1,"w-full"],[1,"w-full","fuse-mat-no-subscript"],["type","password","matInput","","placeholder","Contrase\xf1a","required","",3,"formControlName"],["passwordUpdateField1",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["class","pb-5",4,"ngIf"],["type","password","matInput","","placeholder","Repita la contrase\xf1a","required","",3,"formControlName"],["passwordUpdateField2",""],[1,"icon-size-5",3,"svgIcon"],[1,"pb-5"],[1,"flex","flex-col","w-full","pt-6","space-y-4","sm:mt-4","sm:space-y-8"],[1,"flex","flex-col","mb-10"],[1,"w-full","gap-4","grid","grid-cols-2"],["class","rounded-sm border border-dashed border-primary-700 p-3 ",4,"ngFor","ngForOf"],[1,"rounded-sm","border","border-dashed","border-primary-700","p-3"],[1,"h-6"],[3,"color","checked","change",4,"ngIf"],["svgIcon","heroicons_solid:lock-closed",3,"color",4,"ngIf"],[1,"flex","flex-col"],[1,"font-medium"],[1,"text-md","text-hint"],[3,"color","checked","change"],["svgIcon","heroicons_solid:lock-closed",3,"color"],["mat-flat-button","",1,"rounded-sm","text-mine-900","bg-primary-700",3,"matTooltip","click"],["mat-button","",1,"rounded-sm","text-mine-900","bg-primary-700",3,"disabled","matTooltip","click"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),e._uU(6),e.qZA(),e.TgZ(7,"span",6),e._UZ(8,"mat-icon",7),e.TgZ(9,"a",8),e._uU(10),e.qZA()()()(),e.YNc(11,we,31,14,"ng-container",9),e.YNc(12,ye,8,1,"ng-container",9),e.qZA(),e.ynx(13),e.TgZ(14,"div",10)(15,"button",11),e.NdJ("click",function(){return s.closeDialog()}),e._uU(16," Cancelar "),e.qZA(),e.YNc(17,ke,2,1,"button",12),e.YNc(18,Ae,2,2,"button",13),e.qZA(),e.BQk(),e.qZA()()),2&t&&(e.xp6(6),e.AsE(" ",s.selectedUser.name," ",s.selectedUser.lastname," "),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:mail"),e.xp6(1),e.Q6J("href","mailto:"+s.selectedUser.email,e.LSH),e.xp6(1),e.Oqu(s.selectedUser.email),e.xp6(1),e.Q6J("ngIf","editPass"===s.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===s.dialogMode),e.xp6(3),e.Q6J("matTooltip","Cancelar"),e.xp6(2),e.Q6J("ngIf","edit"===s.data.dialogMode),e.xp6(1),e.Q6J("ngIf","editPass"===s.data.dialogMode))},directives:[U.Hw,d.O5,c._Y,c.JL,c.sg,p.KE,p.hX,N.Nt,c.Fj,c.Q7,c.JJ,c.u,Z.lW,p.R9,p.TO,d.sg,le.oG,q.gM],encapsulation:2,data:{animation:b.L},changeDetection:0}),o})();var Ie=a(1927),k=a(2181);function Fe(o,n){1&o&&(e.ynx(0),e._UZ(1,"mat-icon",43),e.BQk()),2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function Je(o,n){1&o&&(e.ynx(0),e._UZ(1,"mat-icon",44),e.BQk()),2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:x"))}function Qe(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",36)(2,"div",37),e._uU(3),e.qZA(),e.TgZ(4,"div",31),e._uU(5),e.qZA(),e.TgZ(6,"div",32),e.YNc(7,Fe,2,1,"ng-container",34),e.YNc(8,Je,2,1,"ng-container",34),e.qZA(),e.TgZ(9,"div",38)(10,"button",39),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw(3).createOrEditUser(i._id)}),e._UZ(11,"mat-icon",25),e.qZA(),e.TgZ(12,"button",40),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw(3).openDialog(i,"editPass","720px")}),e._UZ(13,"mat-icon",25),e.qZA(),e.TgZ(14,"button",41),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw(3).openDialog(i,"edit","720px")}),e._UZ(15,"mat-icon",25),e.qZA(),e.TgZ(16,"button",42),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw(3).deleteUser(i)}),e._UZ(17,"mat-icon",25),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit;e.xp6(3),e.AsE(" ",t.name," ",t.lastname," "),e.xp6(2),e.hij(" ",t.email," "),e.xp6(2),e.Q6J("ngIf",t.active),e.xp6(1),e.Q6J("ngIf",!t.active),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:pencil"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:key"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:shield-check"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:trash")}}function De(o,n){if(1&o&&(e.ynx(0),e.YNc(1,Qe,18,9,"ng-container",35),e.BQk()),2&o){const t=n.ngIf,s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",s.trackByFn)}}function Ne(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",21)(2,"div",22),e._uU(3,"Listado de usuarios"),e.qZA(),e.TgZ(4,"div",23)(5,"button",24),e._UZ(6,"mat-icon",25),e.qZA(),e.TgZ(7,"mat-menu",null,26)(9,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportAsExcelFile()}),e._uU(10,"Exportar a excel"),e.qZA(),e.TgZ(11,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportAsCsvFile()}),e._uU(12,"Exportar a csv"),e.qZA()()()(),e.TgZ(13,"div",28)(14,"div",29)(15,"div",30),e._uU(16," Nombre y Apellidos "),e.qZA(),e.TgZ(17,"div",31),e._uU(18," Correo electr\xf3nico "),e.qZA(),e.TgZ(19,"div",32),e._uU(20," Activo "),e.qZA(),e.TgZ(21,"div",33),e._uU(22," Acciones "),e.qZA()(),e.YNc(23,De,2,2,"ng-container",34),e.ALo(24,"async"),e.qZA(),e.BQk()}if(2&o){const t=e.MAs(8),s=e.oxw();e.xp6(5),e.Q6J("matMenuTriggerFor",t),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:dots-vertical"),e.xp6(9),e.Q6J("mat-sort-header","name"),e.xp6(8),e.Q6J("ngIf",e.lcZ(24,4,s.users$))}}function qe(o,n){1&o&&(e.TgZ(0,"div",45),e._uU(1,"A\xfan no hay usuarios para esta aplicaci\xf3n! "),e.qZA())}let Re=(()=>{class o{constructor(t,s,r,i,l,m,g){this._changeDetectorRef=t,this._fuseConfirmationService=s,this._fileSaverService=r,this._router=i,this._userDialog=l,this._userService=m,this.store=g,this.emptyUser=F,this.searchInputControl=new c.NI,this.selectedUser=null,this.users=[],this.users$=(0,T.of)([]),this._unsubscribeAll=new x.x}ngOnInit(){this.users$=this.store.select(I.YN),this.users$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.users=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createOrEditUser(t="new"){this._router.navigateByUrl(`/users/${t}`)}deleteUser(t){this._fuseConfirmationService.open({title:"Eliminar Usuario",message:`\xbfEst\xe1 seguro que desea eliminar el usuario ${t.name} ${t.lastname}?`,icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._userService.deleteUser(t._id).subscribe(i=>{!i||(this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Usuario ${t.name} ${t.lastname} eliminado correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck())},i=>{this._fuseConfirmationService.open({title:`${i.statusText}: ${i.status}`,message:i.error.message,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})}),this._changeDetectorRef.markForCheck()}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.users,"users")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.users,"users")}trackByFn(t,s){return s.id||t}getAccountName(t){}openDialog(t,s,r){this._userDialog.open(Te,{data:{user:t,dialogMode:s},width:r,panelClass:"ath-dialog-panel"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(w.R),e.Y36(Ie.m),e.Y36(_.F0),e.Y36(y.uw),e.Y36(f.K),e.Y36(Q.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ath-users"]],viewQuery:function(t,s){if(1&t&&(e.Gf(ce.NW,5),e.Gf(C.YE,5)),2&t){let r;e.iGM(r=e.CRH())&&(s._paginator=r.first),e.iGM(r=e.CRH())&&(s._sort=r.first)}},decls:31,vars:9,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-700",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","","mat-button","",1,"ml-4","bg-primary-500","text-white",3,"click"],[3,"svgIcon"],[1,"ml-2","mr-1","text-lg","text-white"],[1,"flex-auto","p-6","-mt-16","bg-mine-200","shadow","sm:p-10","rounded-t-2xl"],[1,"w-full","p-16","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[4,"ngIf","ngIfElse"],["noUsers",""],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listUsersMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","users-grid","md:px-8","text-md","text-secondary","bg-mine-50","dark:bg-black","dark:bg-opacity-5"],[3,"mat-sort-header"],[1,"hidden","truncate","md:block"],[1,"hidden","text-center","lg:block"],[1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","users-grid","md:px-8"],[1,"truncate","flex"],[1,"flex","flex-col","justify-center","gap-1","sm:flex-row"],["mat-stroked-button","","matTooltip","Editar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Cambiar contrase\xf1a",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Asignar Roles",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Eliminar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-red-400","icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","sm:p-16"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Usuarios"),e.qZA()(),e.TgZ(12,"div",8)(13,"a",9),e._UZ(14,"mat-icon",6),e.TgZ(15,"span",10),e._uU(16,"Regresar"),e.qZA()()()()(),e.TgZ(17,"div",11)(18,"h2",12),e._uU(19," Listado de usuarios "),e.qZA()()(),e.TgZ(20,"div",13)(21,"button",14),e.NdJ("click",function(){return s.createOrEditUser()}),e._UZ(22,"mat-icon",15),e.TgZ(23,"span",16),e._uU(24,"Nuevo"),e.qZA()()()(),e.TgZ(25,"div",17)(26,"div",18),e.YNc(27,Ne,25,6,"ng-container",19),e.ALo(28,"async"),e.YNc(29,qe,2,0,"ng-template",null,20,e.W1O),e.qZA()()()),2&t){const r=e.MAs(30);e.xp6(6),e.Q6J("routerLink","/home"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-left"),e.xp6(8),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(5),e.Q6J("ngIf",e.lcZ(28,7,s.users$).length>0)("ngIfElse",r)}},directives:[D.PQ,_.yS,U.Hw,Z.lW,d.O5,k.p6,k.VK,k.OP,C.YE,C.nU,d.sg,q.gM],pipes:[d.Ov],styles:[".users-grid{grid-template-columns:45% 45%}@media (min-width: 960px){.users-grid{grid-template-columns:30% 30% 30%}}@media (min-width: 1280px){.users-grid{grid-template-columns:25% 20% 20% 10% 15%}}\n"],encapsulation:2,data:{animation:b.L},changeDetection:0}),o})(),R=(()=>{class o{constructor(t){this._userService=t}resolve(t,s){return this._userService.getUsers()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.K))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const Ee=[{path:"",component:Re,resolve:{users:R}},{path:":userId",component:ae,resolve:{users:R,user:(()=>{class o{constructor(t){this._userService=t}resolve(t,s){const r=t.params.userId;if("new"!==r)return this._userService.getUserById(r)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.K))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let Ye=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[_.Bz.forChild(Ee),E.m]]}),o})()}}]);