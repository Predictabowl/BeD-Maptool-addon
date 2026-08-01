[h: oToken = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[macro("powers/getMantMana@this"): json.set("","source",oToken,"spellName",spellName)]
[h: iMana = macro.return]
[macro("powers/getMantPP@this"): json.set("","source",oToken,"spellName",spellName)]
[h: iPP = macro.return]
[macro("powers/getMantPF@this"): json.set("","source",oToken,"spellName",spellName)]
[h: iPF = macro.return]
[h: iMM = 0]
[h: iPA = 0]

[h: iCheck = iMana+iPA+iPF+iMM+iPP]
[h, if(iCheck > 0), code:{
	[oResult = json.set("","token",oToken,"PF",iPF,"mana",iMana,"PP",iPP,"MM",iMM,"PA",iPA)]
};{
	[oResult = ""]
}]

[h: macro.return = oResult]