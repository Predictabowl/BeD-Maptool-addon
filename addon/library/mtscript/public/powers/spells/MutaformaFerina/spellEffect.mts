[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "MutaformaFerina"]
[h: sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h, if(isArmaLancioEquipped(source)), code:{
	[macro("mobs/riponiArma@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,2)]
}]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"target",target,"spellName",spellName)]
[h: iLL = macro.return]

[h: spellType = fetchSpellProp("MutaformaFerina","tipo")]
[macro("powers/getStateIcon@lib:it.aldinucci.piero.bed.maptool.ruleset"): spellName]
[h: sState = macro.return]
[h: param = json.set("","target",source,"effetto",sNomeDec,"stato",sState,"subito",1,"tipo","Magia","mutex",spellType)]

[h: temp = json.set("","key","LA","value",3,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set(temp,"key","LD","value",4,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set(temp,"key","PV_Max","value",iLL*2,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set(temp,"key","PV","value",iLL*2,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","macroName","powers/spells/MutaformaFerina/cleanup@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",json.set("","caster",source),"tipo","macroCall")]
[h: altro = json.append(altro,temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"LL",iLL)]

[h: pushOverride(source,"InventarioBloccato")]
[h: pushOverride(source,"StileBloccato")]
[h: eventInstaller(target,"on_Spellstart",spellName,"powers/spells/MutaformaFerina/spellCheck@lib:it.aldinucci.piero.bed.maptool.ruleset")]