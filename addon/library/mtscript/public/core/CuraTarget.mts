<!-- usare getSpellHeal@Lib:Poteri per calcolare le cure e se si vuole attivare gli eventi -->
[h: paramTipo = json.type(macro.args)]
[h, if(paramTipo == "ARRAY"), code:{
	[h: id = arg(0)]
	[h: guar = arg(1)]
	[if(argCount()>2): source = arg(2); source = ""]
	[if(argCount()>3): origine = arg(3); origine = ""]
	[if(argCount()>4): verbose = arg(4); verbose = 1]
	[if(argCount()>5): bMsg = arg(5); bMsg = 1]
};{
	[h: id = json.get(macro.args,"target")]
	[h: source = json.get(macro.args,"source")]
	[h: guar = json.get(macro.args,"valore")]
	[h: origine = json.get(macro.args,"origine")]
	[h: verbose = json.get(macro.args,"verbose")]
	[h: bMsg =json.get(macro.args,"messaggi")]
}]
[h, if (origine != ""): origine = origine+" "]


[h, if(source != ""), code:{
	[target = id]
	[h: eventParam = json.set("","cura",guar)]
	[macro("runEvents@Lib:Eventi"): json.set("","source",source,"target",target,"event","On_Heal","eventParam",eventParam)]
	[macro("runEvents@Lib:Eventi"): json.set("","source",target,"target",source,"event","On_Healed","eventParam",eventParam)]

	[macro("utility/popMessaggio@this"): json.set("","token",source,"key","msgEventOn_Heal")]
	[macro("utility/setMessaggio@this"): json.set("","token",source,"key","heal","msg",macro.return)]
	[macro("utility/popMessaggio@this"): json.set("","token",target,"key","msgEventOn_Healed")]
	[macro("utility/appendMessaggio@this"): json.set("","token",source,"key","heal","msg",macro.return)]
}]



[h: switchToken(id)]
[h, if(getPropertyType() != "Basic"): abort(0)] 
[h: curaEff=guar]
[h, if(PV+guar > PV_Max), CODE:{ 
    [h: curaEff = PV_Max-PV]
    [h: PV=PV_Max]
};{
    [h: PV = PV + guar]
}]
[h, if (PV > 0): setState("Morente",0,id)]

[h, if(curaEff > 0), code:{
	[h: msgOutput = origine+getName(id)+ " Recupera <span style='color:green;font-weight:bold;'>"+curaEff+"</span> Punti Vita!"]
	[h, if(verbose!=0): broadcast(msgOutput)]
	[h, if(bMsg != 0), code:{
		[macro("utility/setMessaggio@this"):json.set("","token",id,"key","strCura","msg",msgOutput)]
	}]
}]
[macro("utility/updateBars@this"):id]

[h: macro.return = curaEff]