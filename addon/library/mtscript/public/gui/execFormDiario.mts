[h: oToken = json.get(macro.args,"token")]
[h: sAction = json.get(macro.args,"action-performed")]
[h: sKey = json.get(macro.args,"key-value")]
[h: sText = json.get(macro.args,"testo-journal")]

[h: switchToken(oToken)]
[h, switch(sAction), code:
	case "changeEntry":{
		[Lista_Dati = setStrProp(Lista_Dati,"journalSelectedEntry",sKey)]
	};
	case "saveText":{
		[macro("core/addJournalEntry@this"): json.append(sKey,sText)]
	};
	case "newEntry":{
		[macro("core/addJournalEntry@this"): json.append(Titolo,"")]
	};
	case "deleteEntry":{
		[bcheck = input(strformat("unused|Sei sicuro di voler eliminare la voce %s?||LABEL|SPAN=TRUE",sKey))]
		[if(!bCheck): return(0,0)]
		[macro("core/delJournalEntry@this"): sKey]
		[Lista_Dati = deleteStrProp(Lista_Dati,"journalSelectedEntry")]
	};
	case "chiudiDialog":{
		[macro("gui/openPannelloDiario@this"): oToken]
		[return(0,"")]
	};
	default:{}
]
[macro("gui/showPannelloDiario@this"): oToken]