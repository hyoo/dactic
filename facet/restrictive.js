var PrivilegeFacet = require("./privilege");
var util=require("util");


var Facet = module.exports = function(){
        PrivilegeFacet.call(this);
}

util.inherits(Facet,PrivilegeFacet);

Facet.prototype.permissive = false;
Facet.prototype.properties={};
Facet.prototype.get=false;
Facet.prototype.post=false;
Facet.prototype.put=false;
Facet.prototype['delete']=false;
