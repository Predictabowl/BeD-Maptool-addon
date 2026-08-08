[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AculeoUrticante"]
[h: sNomeEffAux = fetchSpellProp(spellName,"nome_decorativo")]

[h: oEffetto = json.set("","categoria","VELENO","effetto",sNomeEffAux,"stato","Veleno","subito",1,"moltiplicatore",1,"tipo","Nocivo")]
[h: iMod = -1]
[h: temp = json.set("","key","TS_Rif","value",iMod,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","TS_Tem","value",iMod,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Vol","value",iMod,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","CD_Base","value",iMod,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Mancare","value",4,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(oEffetto,"params",altro)]


[h: oSpellEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oSpellEffectParam]
[h: iLL = json.get(macro.return,"LL")]
[h: bTS = json.get(macro.return,"TSResult")]

[h, if(!bTS), code:{
	[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d4","LL",iLL)]
}]