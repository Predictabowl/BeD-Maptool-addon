[h: target= json.get(macro.args,"source")]
[h: sCuraLiv = json.get(macro.args,"curaLiv")]
[h: sCuraBase = json.get(macro.args,"curaBase")]
[h: jCounter = json.get(macro.args, "counter")]

[h: switchToken(target)]

[h, foreach(sCounter, jCounter), code: {	
	[if(getState(sCounter, target)): return(0,sCounter + " previene l'effetto di rigenerazione su" + getName(target) + ".")]
}]

[h: param = json.set("","target",target,"source",target,"LL",Livello,"healLL",sCuraLiv,"baseHeal",sCuraBase,"critRes",0)]
[macro("powers/getSpellHeal@this"):param]
[h: iCura = macro.return]
[h: param = json.set("","source",target,"target",target,"valore",iCura,"origine","Rigenerazione")]
[macro("core/CuraTarget@this"): param]

[h: macro.return = ""]


