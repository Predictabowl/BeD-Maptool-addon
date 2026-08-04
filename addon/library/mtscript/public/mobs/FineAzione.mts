[h: source = macro.args]

[h: switchToken(source)]
[h, if(json.type(Azione_Corrente) != "OBJECT"): Azione_Corrente="{}"]
[h:sTipo = upper(json.get(Azione_Corrente,"Tipo"))]



[h: ini = getInitiative()]
[r, if(isNumber(ini) == 1), code:{
	[macro("utility/setFrazionePersonale@this"):json.append(source,ini)]
	[macro("utility/updateMapFrazione@this"):0]
};{}]

[macro("events/runEvents@this"):json.set("","source",source,"event","On_Action_End","eventParam",Azione_Corrente)]
[h: sMsg = popMessaggio(source,"msgEventOn_Action_End")]
[h, if(sMsg != ""): appendMessaggio(source,"endOfActionMsg",strformat("<br>%{sMsg}"))]

[macro("mobs/clearAzione@this"):source]
[macro("class_skills/DisattivaAllColpoSingolo@this"): source]
[macro("events/runDelaySafeMacros@this"): 0]
