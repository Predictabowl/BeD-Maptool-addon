[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "AspettoAnimaleRettile"]
[h: sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h: bCheck = input("iChoice|+6 Schivare,+5 MCG|Scegli il bonus|RADIO ")]
[h, switch(iChoice), code:
	case 1:{
		[sKey = "Mod_Cura_Out"]
		[iValue = 0.05]
	};
	default:{
		[sKey = "Schivare"]
		[iValue = 6]
	}
]


[h: spellType = fetchSpellProp("AspettoAnimaleRettile","tipo")]
[macro("powers/getStateIcon@lib:it.aldinucci.piero.bed.maptool.ruleset"): spellName]
[h: sState = macro.return]
[h: param = json.set("","target",source,"effetto",sNomeDec,"stato",sState,"subito",1,"tipo","Magia","mutex",spellType)]

[h: temp = json.set("","key",sKey,"value",iValue,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]