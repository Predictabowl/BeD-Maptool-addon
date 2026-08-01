<!-- Da applicare On_Attacked e On_SpellCasted -->

[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: macroParam = json.get(macro.args,"macroParam")]
[h: oEventParam = json.get(macro.args,"eventParam")]

[h: iMolt = 1]
[h, if(json.typ0e(macroParam) == "OBJECT"), code:{
	[if(json.contains(macroParam,"moltiplicatore") == 1): iMolt = json.get(macroParam,"moltiplicatore")]
}]

[h: sNomeAb = "Mimetizzato"]
[h: iMancareMod = 15*iMolt]
[h: bAOE = 0]

[h, if(json.type(oEventParam) == "OBJECT"), code:{
	[spellName = json.get(oEventParam,"spellName")]
	[h, if(spellName != ""), code:{
		[macro("powers/isAOESpell@this"): spellName]
		[bAOE = macro.return]
	}]
}]

[h: msg = ""]
[h, if(bAOE==0), code:{
	[macro("core/pushStatModifier@this"):json.append(target,"Mancare",iMancareMod)]
	[h: msg= msg+strformat(" %{sNomeAb}x%{iMolt} (%+d Mancare)",iMancareMod)]

}]
[h: macro.return = msg]
