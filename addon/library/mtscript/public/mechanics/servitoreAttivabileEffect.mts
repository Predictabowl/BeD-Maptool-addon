[h: target = json.get(macro.args,"target")]
[h: remove= json.get(macro.args,"remove")]
[h: macroParam = json.get(macro.args,"parametri")]

[oCreatura = json.get(macroParam,"creaturaName")]

[h, if(remove == 1), code:{
	[broadcast(strformat("%s svanisce",getName(oCreatura)))]
	[macro("core/delEffettoServitore@this"):target]
	[macro("mechanics/despawnCreatura@this"): oCreatura]
};{
	[setOwner("",oCreatura)]
}]

[h: macro.return = ""]

