"use strict";(self.webpackChunkwirepharma=self.webpackChunkwirepharma||[]).push([[461],{3461:(U,n,o)=>{o.r(n),o.d(n,{HomeModule:()=>A});var s=o(5357),a=o(499),l=o(7579),u=o(2722),e=o(5e3),v=o(1135),c=o(2340),g=o(520),Z=o(5094);const m=c.N.API_URL;let h=(()=>{class t{constructor(i,r){this._httpClient=i,this.store=r,this._data=new v.X(null)}get data$(){return this._data.asObservable()}getEntitiesLengthData(){return this._httpClient.get(`${m}/stats/entities-length-stats`)}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(g.eN),e.LFG(Z.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=o(5245),p=o(7238);const x=[{path:"",component:(()=>{class t{constructor(i){this._homeService=i,this.data=null,this._unsubscribeAll=new l.x}ngOnInit(){this._homeService.getEntitiesLengthData().pipe((0,u.R)(this._unsubscribeAll)).subscribe(({data:i})=>this.data=i)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ath-home"]],decls:134,vars:8,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","p-6","mx-auto","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","leading-8","tracking-tight"],[1,"font-medium","tracking-tight","text-secondary"],[1,"grid","w-full","grid-cols-1","gap-8","mt-6","sm:grid-cols-2","lg:grid-cols-4","md:mt-8"],["routerLink","/stock/panels/products",1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"ml-2"],[1,"h-6","px-2","rounded-lg","min-h-6","bg-primary-100"],[1,"font-mono","text-lg","font-medium","text-primary-900"],["routerLink","/selling/panels/orders",1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],["routerLink","/crm/panels/customers",1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],[1,"w-full","mt-12"],[1,"text-2xl","font-semibold","leading-6","tracking-tight"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","items-start","justify-start"],[1,"mr-3",3,"svgIcon"],[1,"flex","flex-col","mt-5"],["routerLink","/selling/panels/orders",1,"flex","items-center","justify-start","p-1.5","cursor-pointer","rounded-lg","hover:bg-hover"],[1,"flex","items-center","justify-center","w-6","h-6","mr-3","rounded-lg","bg-primary-100"],[1,"w-1","h-1","rounded-full","bg-primary-900"],[1,"text-lg","leading-6","tracking-tight"],["matTooltip","En desarrollo",1,"flex","items-center","justify-start","p-1.5","cursor-not-allowed","rounded-lg","hover:bg-hover"],[1,"flex","items-center","justify-center","w-6","h-6","mr-3","rounded-lg","bg-slate-100"],[1,"w-1","h-1","rounded-full","bg-slate-900"],["routerLink","/crm/panels/customers",1,"flex","items-center","justify-start","p-1.5","cursor-pointer","rounded-lg","hover:bg-hover"],["routerLink","/stock/panels/products",1,"flex","items-center","justify-start","p-1.5","cursor-pointer","rounded-lg","hover:bg-hover"],["routerLink","/stock/panels/warehouse",1,"flex","items-center","justify-start","p-1.5","cursor-pointer","rounded-lg","hover:bg-hover"],["routerLink","/stock/panels/uom",1,"flex","items-center","justify-start","p-1.5","cursor-pointer","rounded-lg","hover:bg-hover"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),e._uU(5,"Accesos Directos"),e.qZA(),e.TgZ(6,"div",4),e._uU(7," En esta vista encontrar\xe1s accesos directos a las funciones m\xe1s importantes de la plataforma. "),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8),e._uU(12,"Productos"),e.qZA(),e.TgZ(13,"div",9)(14,"div",10)(15,"span",11),e._uU(16),e.qZA()()()()(),e.TgZ(17,"div",12)(18,"div",7)(19,"div",8),e._uU(20,"\xd3rdenes"),e.qZA(),e.TgZ(21,"div",9)(22,"div",10)(23,"span",11),e._uU(24),e.qZA()()()()(),e.TgZ(25,"div",13)(26,"div",7)(27,"div",8),e._uU(28,"Clientes"),e.qZA(),e.TgZ(29,"div",9)(30,"div",10)(31,"span",11),e._uU(32),e.qZA()()()()(),e.TgZ(33,"div",14)(34,"div",7)(35,"div",8),e._uU(36,"Proveedores"),e.qZA(),e.TgZ(37,"div",9)(38,"div",10)(39,"span",11),e._uU(40),e.qZA()()()()()(),e.TgZ(41,"div",15)(42,"div",16),e._uU(43,"Reportes y Listados"),e.qZA()(),e.TgZ(44,"div",5)(45,"div",17)(46,"div",18),e._UZ(47,"mat-icon",19),e.TgZ(48,"div",8),e._uU(49,"Ventas"),e.qZA()(),e.TgZ(50,"div",20)(51,"div",21)(52,"div",22),e._UZ(53,"div",23),e.qZA(),e.TgZ(54,"div",24),e._uU(55,"\xd3rdenes"),e.qZA()(),e.TgZ(56,"div",25)(57,"div",26),e._UZ(58,"div",27),e.qZA(),e.TgZ(59,"div",24),e._uU(60,"Facturas"),e.qZA()(),e.TgZ(61,"div",25)(62,"div",26),e._UZ(63,"div",27),e.qZA(),e.TgZ(64,"div",24),e._uU(65,"Estad\xedsticas"),e.qZA()()()(),e.TgZ(66,"div",17)(67,"div",18),e._UZ(68,"mat-icon",19),e.TgZ(69,"div",8),e._uU(70,"CRM"),e.qZA()(),e.TgZ(71,"div",20)(72,"div",28)(73,"div",22),e._UZ(74,"div",23),e.qZA(),e.TgZ(75,"div",24),e._uU(76,"Clientes"),e.qZA()(),e.TgZ(77,"div",25)(78,"div",26),e._UZ(79,"div",27),e.qZA(),e.TgZ(80,"div",24),e._uU(81,"Mensajes"),e.qZA()()()(),e.TgZ(82,"div",17)(83,"div",18),e._UZ(84,"mat-icon",19),e.TgZ(85,"div",8),e._uU(86,"Inventario"),e.qZA()(),e.TgZ(87,"div",20)(88,"div",29)(89,"div",22),e._UZ(90,"div",23),e.qZA(),e.TgZ(91,"div",24),e._uU(92,"Productos"),e.qZA()(),e.TgZ(93,"div",30)(94,"div",22),e._UZ(95,"div",23),e.qZA(),e.TgZ(96,"div",24),e._uU(97,"Almac\xe9n"),e.qZA()(),e.TgZ(98,"div",31)(99,"div",22),e._UZ(100,"div",23),e.qZA(),e.TgZ(101,"div",24),e._uU(102,"Unidades de medida"),e.qZA()(),e.TgZ(103,"div",25)(104,"div",26),e._UZ(105,"div",27),e.qZA(),e.TgZ(106,"div",24),e._uU(107,"Entradas"),e.qZA()(),e.TgZ(108,"div",25)(109,"div",26),e._UZ(110,"div",27),e.qZA(),e.TgZ(111,"div",24),e._uU(112,"Despachos"),e.qZA()()()(),e.TgZ(113,"div",17)(114,"div",18),e._UZ(115,"mat-icon",19),e.TgZ(116,"div",8),e._uU(117,"Compras"),e.qZA()(),e.TgZ(118,"div",20)(119,"div",25)(120,"div",26),e._UZ(121,"div",27),e.qZA(),e.TgZ(122,"div",24),e._uU(123,"Proveedores"),e.qZA()(),e.TgZ(124,"div",25)(125,"div",26),e._UZ(126,"div",27),e.qZA(),e.TgZ(127,"div",24),e._uU(128,"\xd3rdenes de compra"),e.qZA()(),e.TgZ(129,"div",25)(130,"div",26),e._UZ(131,"div",27),e.qZA(),e.TgZ(132,"div",24),e._uU(133,"Reclamaciones"),e.qZA()()()()()()()),2&i&&(e.xp6(16),e.Oqu(r.data.productsQty),e.xp6(8),e.Oqu(r.data.ordersQty),e.xp6(8),e.Oqu(r.data.clientsQty),e.xp6(8),e.Oqu(r.data.suppliersQty),e.xp6(7),e.Q6J("svgIcon","heroicons_outline:document-text"),e.xp6(21),e.Q6J("svgIcon","heroicons_outline:document-text"),e.xp6(16),e.Q6J("svgIcon","heroicons_outline:document-text"),e.xp6(31),e.Q6J("svgIcon","heroicons_outline:document-text"))},directives:[s.rH,f.Hw,p.gM],encapsulation:2}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(x),a.m]]}),t})()}}]);