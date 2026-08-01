[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: arma = json.get(macro.args,"arma")]
[h: critRes = json.get(macro.args,"critRes")]
[h: difesa = json.get(macro.args,"difesa")]
[h: bOpp =  json.get(macro.args,"opportunita")]

[h, if (arma ==""), code:{
	[macro("combat/getArmaDaUsare@this"):source]
	[h: arma=macro.return]
}]
[h, if(isNumber(bOpp) == 0): bOpp = 0]


[h: switchToken(source)]

[h: image = getImage(getName(source))]
[h: startMsg = "<img src='"+image+"' width='35' height='35' > </img> "+getName(source)+" infligge un Attacco "]

[h, if(bOpp == 1), code:{
	[h: startMsg = startMsg+"di Opportunit&agrave; "]
	[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Opportunita")]
	[macro("utility/popMessaggio@this"): json.set("","token",source,"key","msgEventOn_Opportunita")]
	[h: startMsg = startMsg + macro.return]
};{
	[macro("core/PosRelativa@this"):json.append("",source,target)]
}]

[h, if(bOpp != 1 && macro.return == "spalle"): startMsg = startMsg+"alle spalle "]

[h: image = getImage(getName(target))]
[h: startMsg = startMsg+ "a <img src='"+ image+"' width='35' height='35' /> "+getName(target)+": "]

[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Attack")]
[macro("events/runEvents@this"): json.set("","source",target,"target",source,"event","On_Attacked")]
[macro("utility/popMessaggio@this"): json.set("","token",source,"key","msgEventOn_Attack")]
[h: startMsg = startMsg + macro.return]
[macro("utility/popMessaggio@this"): json.set("","token",target,"key","msgEventOn_Attacked")]
[h: startMsg = startMsg + macro.return]

[macro("utility/setMessaggio@this"):json.set("","token",source,"key","attacco","msg",startMsg)]

[macro("getPhysDmg@"+getMacroLocation()):json.set("","source",source,"target",target,"arma",arma,"critRes",critRes,"opportunita",bOpp)]

[h: danno = macro.return]
[r, if(difesa == ""), code:{
	[macro("combat/checkDifesa@this"): json.append(source,target,bOpp)]
	[h: difesa = macro.return]
	[macro("utility/popMessaggio@this"):json.set("","token",source,"key","difesaResult")]
	[macro("utility/appendMessaggio@this"): json.set("","token",source,"key","attacco","msg","<br>"+macro.return)]
};{}]

[r, if (danno > 0), code:{
	[h: param = json.set("","source",source,"target",target,"danno",danno,"difesa",difesa)]
	[macro("combat/eventHit@this"):param]
	[macro("combat/DanniDifesaFisica@this"): param]
	[h: danno = macro.return]
	[macro("utility/popMessaggio@this"): json.set("","token",source,"key","msgEventOn_Hit")]
	[macro("utility/appendMessaggio@this"): json.set("","token",source,"key","attacco","msg",macro.return)]
	[macro("utility/popMessaggio@this"): json.set("","token",target,"key","msgEventOn_Hitted")]
	[macro("utility/appendMessaggio@this"): json.set("","token",source,"key","attacco","msg",macro.return)]
};{}]

[macro("utility/popMessaggio@this"):json.set("","token",source,"key","attacco")]
[h: broadcast(macro.return)]

[macro("core/DannoTarget@this"): json.append(target,danno,source)]
[macro("utility/delMessaggio@this"):json.set("","token",target,"key","strDanno")]

[h, if(bOpp == 1), code:{
	[macro("mobs/addOpportunitaUsed@this"): json.append(source,target)]
}]



