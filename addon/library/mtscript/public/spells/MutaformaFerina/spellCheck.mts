[h: oToken = json.get(macro.args,"source")]
[h: oEventParam = json.get(macro.args,"eventParam")]

[h: sSpellCasted = json.get(oEventParam,"spellName")]
[h: sSpellSchool = fetchSpellProp(sSpellCasted,"scuola")]
[h: sSpellAllowed = fetchSpellProp("MutaformaFerina","scuola")]

[h, if(sSpellSchool != sSpellAllowed): addSpellStartData(oToken,"spellBlock",1)]

[h: macro.return = ""]