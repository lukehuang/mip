require(["mip"],function(){function i(){console.log("This is a mip componnents demo")}var e=require("buildins/customElement");e.prototype.init=function(){this.createdCallback=function(){},this.attachedCallback=function(){},this.build=i,this.detachedCallback=function(){}},MIP.css.mipDemo=".mip-demo-f13 {\n  font-size: 13px;\n}\n",MIP.registerMipElement("mip-demo",e,MIP.css.mipDemo)});