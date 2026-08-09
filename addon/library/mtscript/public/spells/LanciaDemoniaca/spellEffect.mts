[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: spellName = "LanciaDemoniaca"]

[macro("powers/isEnergiaDistruttiva@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return > 0): sDanno="1d10"; sDanno="1d7"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]


[h, if(isMalato(target)), code:{
	[h: temp = json.set("","key","Mod_Cura_In","value",-0.18,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: oEffetto = json.set("","params",altro,"verbose",0)]
	
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
}]
