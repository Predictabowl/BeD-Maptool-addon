[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: spellName = json.get(macro.args,"spellName")]
};{
	[h: source = json.get(macro.args,0)]
	[h: spellName = json.get(macro.args,1)]
}]

[macro("powers/getSpellOrigine@this"):json.append(source,spellName)]
[h: oOrigine = macro.return]

[h: target = getSelected()]

[h: spellTag = getLibProperty("tags",spellName)]
[h: bFlag = 1]
[h: iSpellRange = getSpellRange(source,spellName)]
[h: iSpellAOE = getSpellAoE(source,spellName)]

[h, if(bFlag && listContains(spellTag,"SINGLETARGET")), code:{
	[target = listGet(getSelected(),0)]
	[bFlag = 0]
}]

[h, if(listContains(spellTag,"SERVITORETARGET") || 
listContains(spellTag,"SERVITORESINGLETARGET")), code:{
	[oServitore = getServitore(source)]
	[if(oServitore == ""), code:{
		[broadcast("<span style='color:purple;'>ATTENZIONE:</span> Servitore non presente",getPlayerName())]
		[return(0,"")]
	};{
		[target = oServitore]
	}]
	[bFlag = 0]
}]

[h, if(iSpellRange==0 || listContains(spellTag,"SELFTARGET") || listContains(spellTag,"DRAWTARGET")), code:{
	[target = oOrigine]
	[bFlag = 0]
}]

[h, if(bFlag), code:{
	[macro("powers/needTokenBersaglio@this"): json.append(source, spellName, iSpellAoE, iSpellRange)]
	[bNeedBers = macro.return]
	[h, if(bNeedBers), code:{
		[macro("powers/findTokenBersaglio@this"): source]
		[target = macro.return]
		[bFlag = 0]
	}]
	[h, if(bNeedBers && target == ""), code:{
		[macro("powers/spawnTokenBersaglio@this"): source]
		[broadcast("Token bersaglio mancante, creato coattivamente e lancio interrotto!", getPlayerName())]
		[return(0, "")]
	}]
}]


[h, if(bFlag && iSpellRange != 0 && iSpellAOE ==0),code :{
	[target = listGet(getSelected(),0)]
	[macro("powers/isTargetLegal@this"):target]
	[assert(macro.return == 1, "Bersaglio selezionato non valido")]
	[bFlag = 0]
}]

[h: assert(target != "", "Bersaglio non valido")]

[macro("powers/checkSpellRange@this"): json.append(source,target,spellName,oOrigine)]
[h: iDistCheck = macro.return]
[h, if(iDistCheck != 1), code:{
	[broadcast("Bersaglio fuori portata",getPlayerName())]
	[target = ""]
}]


[h: macro.return = target]