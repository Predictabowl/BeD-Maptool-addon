<!--
Gli eventi On_Damage e On_Damaged non vengono attivati se non si include una source.
Gli eventi vengono attivati DOPO aver inflitto i danni, per eventi da attivare prima si
usano On_Before_Damaged, On_Attack, On_Attacked, On_Hit, On_Hitted
-->
[h, if(argCount()>1), code:{
	[h: id = arg(0)]
	[h: Dmg = arg(1)]
	[if(argCount() > 2): source = arg(2); source = ""]
	[if(argCount() > 3): origine = arg(3); origine = ""]
	[if(argCount() > 4): verbose = arg(4); verbose = 1]	
	[h: bMsg= 1]
	[h: spellName = ""]
	[bIgnoreReductions = 0]
};{
	[macro.args = arg(0)]
	[h: id = json.get(macro.args,"target")]
	[h: Dmg = json.get(macro.args,"valore")]
	[h: origine = json.get(macro.args,"origine")]
	[h: source = json.get(macro.args,"source")]
	[H: spellName = json.get(macro.args,"spellName")]
	[h: verbose = json.get(macro.args,"verbose")]
	[h: bMsg =json.get(macro.args,"messaggi")]
	[h: bIgnoreReductions = json.get(macro.args,"ignoreReductions")]	
}]
[h, if (origine != ""): origine = origine+" "]

[macro("core/getOverride@this"): json.append(id,"redirectDmgToSlave")]
[h, if(macro.return), code:{
	[macro("core/getServitore@this"):id]
	[if(macro.return != ""): id = macro.return]
}]

[h: switchToken(id)]
[h, if(getPropertyType() != "Basic"): abort(0)]

[h: msgOutput = origine]

[h, if(source != ""), code:{
	[eventParam = json.set("","danno",Dmg, "spellName", spellName)]
	[macro("events/runEvents@this"): json.set("","source",id,"target",source,"event","On_Before_Damaged","eventParam",eventParam)]
	[macro("utility/popMessaggio@this"): json.set("","token",id,"key","msgEventOn_Before_Damaged")]
	[if(macro.return != ""): msgOutput = strformat("%{msgOutput}<br>%{macro.return}")]
};{
	[broadcast(getMacroName()+"@"+getMacroLocation()+" : source assente",getPlayerName())]
}]

[h, if(bIgnoreReductions != 1), code:{
	[macro("core/modPVT@this"): json.append(id,-Dmg)]
	[h: Assorbito = Dmg-macro.return]
	[h: Dmg = macro.return]
};{
	[Assorbito = 0]
}]

[h: PV = PV - Dmg]
[h: msgOutput = strformat("%{msgOutput}%s Subisce <span style='color:red;font-weight:bold;'>%{Dmg}</span> danni",getName(id))]
[h, if(Assorbito > 0), code: {
	[msgOutput = msgOutput+ " (Assorbiti " + Assorbito+")"]	
}]

[h: updateDannoPuntiEroe(id, Dmg)]

[h: source = findToken(source)]
[h, if(source != ""), code:{
	[eventParam = json.set("","danno",Dmg, "assorbito", Assorbito, "spellName", spellName)]
	[macro("events/runEvents@this"): json.set("","source",id,"target",source,"event","On_Damaged","eventParam",eventParam)]
	[macro("events/runEvents@this"): json.set("","source",source,"target",id,"event","On_Damage","eventParam",eventParam)]	

	[macro("utility/popMessaggio@this"): json.set("","token",source,"key","msgEventOn_Damage")]
	[if(macro.return != ""): msgOutput = strformat("%{msgOutput}<br>%{macro.return}")]
	[macro("utility/popMessaggio@this"): json.set("","token",id,"key","msgEventOn_Damaged")]
	[if(macro.return != ""): msgOutput = strformat("%{msgOutput}<br>%{macro.return}")]
};{
	[broadcast(getMacroName()+"@"+getMacroLocation()+" : source assente",getPlayerName())]
}]

[h, if(verbose!=0): broadcast(msgOutput)]
[h, if(bMsg != 0): appendMessaggio(id,"strDanno",msgOutput)]

[macro("utility/updateBars@this"):id]

[h: parameters = json.append(0,id,"nil",1)]

[h, if(PV <= PV_Negativi), code:{
	[setTokenMorto(id,source)]
};{
	[h, if(PV < 1), code:{
		[macro("core/setTokenDying@this"):id]
	}]
}]
[h: macro.return = Dmg]