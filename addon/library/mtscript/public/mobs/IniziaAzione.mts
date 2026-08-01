[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: action = json.get(macro.args,"action")]
[h: time = json.get(macro.args,"time")]
[h: sActionColor = json.get(macro.args,"color")]
[h: sTipo = json.get(macro.args,"tipo")]
[h: sMacro = json.get(macro.args,"macro")]
[h: oMacroParam = json.get(macro.args,"macroParam")]
[h: opport = json.get(macro.args,"opp")]

[h, if(sTipo==""): sTipo = "Generico"]
[h, if(sActionColor == ""): sActionColor = "Red"]
[if(opport==""): opport = 0]

[h: switchToken(source)]

[h: ini = getInitiative()]
[h, if(isNumber(ini)==0), code:{
	[ini = 0]
	[time = 0]
}]
[h: flag = 1]
[h: bTimeFlag = 1]
[h: msgOut = ""]

[h, if(isIncapacitato(source)), code:{
	[broadcast("<span style='color:red'>Un personaggio incapacitato non può agire</span>",getPlayerName())]
	[flag = 0]
}]

[h, if(isAzioneInCorso(source)), code:{
	[broadcast("<span style='color:red'>Non puoi iniziare una nuova azione, prima finisci o interrompi l'azione corrente</span>",getPlayerName())]
	[flag = 0]
}]


<!-- Eventi di inizio azione -->
[h, if(flag), code:{
	[h: azioneParam = json.set("","source",source,"target",target,"tipo",sTipo,"macro",sMacro,"macroParam",oMacroParam,"nome",action)]
	[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Action_Start","eventParam",azioneParam)]
	[macro("utility/popMessaggio@this"): json.set("","token",source,"key","msgEventOn_Action_Start")]
	[h: msgOut = macro.return]

	[macro("core/popOverride@this"):json.append(source,"BloccaAzione")]
	[h, if(macro.return > 0), code:{
		[flag = 0]
	};{
		[macro("utility/hasTime@this"): json.append(source,time)]
		[h: bTimeFlag = macro.return]
	}]
}]

[h, if(!bTimeFlag), code:{
	[delMessaggio(source,"iniziaAzioneMsg")]
	[broadcast("'<span style='color:red;font-weight:bold;'>Non hai abbastanza tempo per questa Azione.</span>",getPlayerName())]
	[return(0,0)]
}]

[h, if(flag), code:{
	[macro("utility/ModificaIniziativa@this"): json.set("","target",source,"valore",-time)]
	[macro("utility/setFrazionePersonale@this"): json.append(source,ini)]
	[macro("utility/setMapFrazione@this"):ini]
	[macro("utility/sortIniziativa@this"):0]
	[macro("mobs/setAzioneCorrente@this"): azioneParam]
	[h, if(target != ""): nome= " : "+getName(listGet(target,0)); nome=""]
	[h: AzioneGM = action+nome]
	[h: setHalo(sActionColor, source)]
	[h, if(opport==1), code:{
		[appendMessaggio(source,"iniziaAzioneMsg","
		<span style='font-style:italic;'>
			Questa azione è punibile con un attacco di <span style='font-weight:bold; color:red;'>Opportunità</span>
		</span>
		")]
		[macro("mobs/setOpportunita@this"):source]
	}]
	[macro("mobs/checkRimuoviNascondersi@this"): json.append(source,azioneParam)]
}]


[sBGColor = getSpeech("chatActionBGColor")]
[if (sBGColor == ""): sBGColor = "#FFE6CC"]
[h: sMsgOut = popMessaggio(source,"iniziaAzioneMsg")]
[h, if(getVisible(source)): sBroadcast = "all"; sBroadcast = "gm"]
[if(sMsgOut !="" && flag): broadcast(strformat("<div style='border-width: 2px; border-style: dotted; background-color:%{sBGColor};'>%{sMsgOut}</div>"), sBroadcast)]

[macro("mobs/delDifendersi@this"): source]
[h: macro.return = flag]