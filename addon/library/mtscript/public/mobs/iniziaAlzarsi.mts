[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
};{
	[source = macro.args]
}]

[h, if(source==""): source = getImpersonated()]

[h: time = calcActionTime(12,source)]

[macro("mobs/getDifendersi@this"): source]
[bDif = macro.return]

[h: sMsg= getName(source) + " Inizia ad alzarsi"]
[h, if(bDif), code:{
	[h: generaOpp = 0]
};{
	[h: generaOpp = 1]
}]

[h: setMessaggio(source, "iniziaAzioneMsg", sMsg)]

[h: param = json.set("","source",source,"macro","mobs/AzioneAlzarsi@"+getMacroLocation(),"tipo","Generica","opp",generaOpp,"time",time,"action","Alzarsi")]
[macro("mobs/IniziaAzione@this"):param]