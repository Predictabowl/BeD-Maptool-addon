[h: source = arg(0)]

[h: switchToken (source)]
[h, if(json.type(Maestria_Armi) != "OBJECT"): Maestria_Armi = "{}"]

[h, if(!json.contains(Maestria_Armi,"RAPIDITA")), code:{
	[iMARapidita = Rapidita]
	[setMaeARap(source,iMARapidita)]
};{
	[h: iMARapidita = json.get(Maestria_Armi,"RAPIDITA")]
}]

[h: macro.return = iMARapidita]