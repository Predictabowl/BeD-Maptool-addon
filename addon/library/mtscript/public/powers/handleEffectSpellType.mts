[h: source = arg(0)]
[h: target = arg(1)]
[h: spellName = arg(2)]
[h: oEffetto = arg(3)]

[h: sTipo = upper(getLibProperty("tipo",spellName))]

[macro("powers/getStateIcon@this"): spellName]
[h: sState = macro.return]
[h: lMutex = json.get(oEffetto, "mutex")]
[h: sNewTokenImg = ""]
[h: aCategoria = json.get(oEffetto, "categoria")]
[h, if(json.type(aCategoria) != "ARRAY"): aCategoria = json.append("", aCategoria)]

[h, switch(sTipo), code:
	case "MALATTIA":{
		[sMutex = strformat("%{sTipo}_%s",getName(source))]
		[lMutex = listAppend(lMutex, sMutex)]
		[aCategoria = json.append(aCategoria, sTipo)]
		[oEffetto = json.set(oEffetto,"stato",sState,"subito",1,"tipo",sTipo)]
	};
	case "MALEDIZIONE":{
		[sMutex = strformat("%{sTipo}_%s",getName(source))]
		[lMutex = listAppend(lMutex, sMutex)]
		[aCategoria = json.append(aCategoria, sTipo)]
		[oEffetto = json.set(oEffetto,"stato",sState,"subito",1,"tipo",sTipo)]
	};
	case "MUTAFORMA":{
		[sMutex = sTipo]
		[lMutex = listAppend(lMutex, sMutex)]
		[aCategoria = json.append(aCategoria, sTipo)]
		[oEffetto = json.set(oEffetto,"stato",sState,"subito",1)]
		[idToken = findToken(spellName,"Librerie")]
		[bMacro = hasMacro("getImageAsset",idToken,"Librerie")]
		[if(bMacro), code:{
			[macro("getImageAsset@"+spellName): json.append(source,target)]
			[sNewTokenImg = macro.return]
		}]
	};
	case "SERVITORE":{
		[sMutex = strformat("%{sTipo}_%s",getName(source))]
		[lMutex = listAppend(lMutex, sMutex)]
		[aCategoria = json.append(aCategoria, sTipo)]
		[oEffetto = json.set(oEffetto,"tipo",sTipo)]
	};
	default:{
	}
]

[h, if(sNewTokenImg != ""), code:{
	[oChangeImg = json.set("","tipo","macroCall","macroName","powers/swapTokenImg@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",sNewTokenImg)]
	[aEffects = json.get(oEffetto,"params")]
	[aEffects = json.append(aEffects,oChangeImg)]
	[oEffetto = json.set(oEffetto,"params",aEffects)]
}]

[h: lTags = upper(getLibProperty("tags", spellName))]
[h, if(listContains(lTags, "AGGRESSIONE")): lMutex = listappend(lMutex, "AGGRESSIONE")]
[macro("powers/isArmaturaSpell@this"): spellName]
[h, if(macro.return): lMutex = listappend(lMutex, "ARMATURA")]

[h: oEffetto = json.set(oEffetto, "categoria", aCategoria, "mutex", lMutex)]

[h: macro.return = oEffetto]
