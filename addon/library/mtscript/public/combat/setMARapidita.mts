[h, if(argCount()>1), code:{
	[source = arg(0)]
	[iMARapidita = arg(1)]	
};{
	[macro.args = arg(0)]
	[source = json.get(macro.args,0)]
	[iMARapidita = json.get(macro.args,1)]	
}]

[h: switchToken (source)]
[h, if(json.type(Maestria_Armi) != "OBJECT"): Maestria_Armi = "{}"]
[h: Maestria_Armi = json.set(Maestria_Armi,"RAPIDITA",iMARapidita)]