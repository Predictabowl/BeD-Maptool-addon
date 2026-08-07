[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
};{
	[source = macro.args]
}]

[h, if(source==""): source = getImpersonated()]

[h, if(getState("Nascosto",source) == 0), code:{
	[h: time = calcActionTime(10,source)]
	[h: generaOpp = 0]

	[h: sMsg = getName(source) + " Inizia a Nascondersi"]
	[setMessaggio(source,"iniziaAzioneMsg",sMsg)]

	[h: param = json.set("","source",source,"macro","mobs/AzioneNascondersi@"+getMacroLocation(),"tipo","Generica","opp",generaOpp,"time",time,"action","Nascondersi")]
	[macro("mobs/IniziaAzione@this"):param]
};{
	[macro("mobs/RimuoviNascondersi@this"): source]
}]

[h: macro.return = ""]