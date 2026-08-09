[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: sLibName = "RunaAttaccoPositiva"]

[macro("consumables/itemDamageTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"danno","1d5","libName",sLibName)]

[h: sEffetto = "Cecita"]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",1)]
[macro("consumables/itemEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"libName",sLibName,"effetto",macro.return)]