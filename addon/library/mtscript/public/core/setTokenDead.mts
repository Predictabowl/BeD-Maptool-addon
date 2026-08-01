[h: oTarget = arg(0)]
[h, if(argCount()>1): oSource = arg(1); oSource = ""]

[h: switchToken(oTarget)]

[h: sStato = "Atterrato"]
[macro("getParamStatoBase@Lib:Poteri"): json.set("","target",oTarget,"effetto",sStato)]
[h: parameters = macro.return]
[macro("core/ApplyEffect@this"): parameters]
[setState("Morente",0,oTarget)]
[setState("Morte",1,oTarget)]

[h: delMantenimenti(oTarget)]
[h: disattivaAbilitaTutte(oTarget)]
[h: removeFromInitiative()]

[h: oSource = findToken(oSource)]
[macro("events/runEvents@this"): json.set("","source",oTarget,"target",oSource,"event","On_Death")]
[h, if(oSource != ""), code:{
	[macro("events/runEvents@this"): json.set("","source",oSource,"target",oTarget,"event","On_Kill")]	
}]


[h: macro.return = 1]