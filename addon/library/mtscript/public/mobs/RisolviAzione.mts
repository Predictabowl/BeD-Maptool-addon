[h: source = arg(0)]


[h, if(isIncapacitato(source)), code:{
	[macro("mobs/forzaInterrompiAzione@this"): source]
	[broadcast("<span style='color:red'>Un personaggio incapacitato non può agire</span>",getPlayerName())]
	[return(0, 0)]
}]


[h: switchToken (source)]
[macro("utility/isInitiativeHolder@this"):source]
[h, if(macro.return == 0), code:{
	[broadcast("<span style='color:red'>Non puoi risolvere azioni se non ha il'iniziativa</span>",getPlayerName())]
	[assert(0,"",0)]
}]


[r, if(json.isEmpty(Azione_Corrente)), code:{
	[broadcast("<span style='color:red'>Non hai dichiarato nessuna Azione</span>",getPlayerName())]
};{
	[macro("utility/clearMessaggi@this"):source]
	[h: sMacroName = json.get(Azione_Corrente,"Macro")]
	[h: oMacroParam = json.get(Azione_Corrente,"MacroParam")]
	[h: oMacroParam = json.set(oMacroParam,"source",source)]
	[h: iIni = getInitiative(source)]
	[h: bInterrupt = 0]
	[h, if(sMacroName != ""), code:{
		[macro(sMacroName): oMacroParam]
		[h: bInterrupt = macro.return]
	}]

	[h, if(!isNumber(bInterrupt)), code:{
		[bInterrupt = 0]
		[broadcast("ERRORE RILEVATO: Una macro di azione non ha riportato correttamente l'esito di tale azione")]
	}]

	[switch(bInterrupt), code:
	case 1:{ <!-- Azione interrotta -->
		[macro("mobs/InterrompiAzione@this"):source]
	};
	case -1:{ <!-- abort -->
		[macro("utility/clearMessaggi@this"):source]
		[return(0,"")]
	};
	default:{
		[macro("mobs/FineAzione@this"):source]
	}]

	[macro("events/runEvents@this"):json.set("","source",source,"event","On_Action_Teardown","eventParam",Azione_Corrente)]
	[h: appendMessaggio(source,"endOfActionMsg",popMessaggio(source,"msgEventOn_Action_TearDown"))]
	
	[h: sBGColor = getSpeech("chatActionBGColor")]
	[h, if (sBGColor == ""): sBGColor = "#FFE6CC"]
	[h: sMsg = getMessaggio(source,"endOfActionMsg")]
	[h, if(sMsg !=""), code:{
		[sEndMessage = strformat("<div style='border: 2px solid; padding:5px; background-color:%{sBGColor};'>%{sMsg}</div>")]
		[broadcast(sEndMessage)]
	}]
	[macro("utility/clearMessaggi@this"):source]
}]
