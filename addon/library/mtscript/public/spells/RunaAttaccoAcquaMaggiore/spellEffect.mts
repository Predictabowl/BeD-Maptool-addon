[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: sLibName = "RunaAttaccoAcquaMaggiore"]

[macro("consumables/itemDamageTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"danno","1d7","libName",sLibName)]

[h: sEffetto = "Congelamento"]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",1)]
[macro("consumables/itemEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"libName",sLibName,"effetto",macro.return)]