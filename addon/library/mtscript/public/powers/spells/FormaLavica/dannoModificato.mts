[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oEventParam = json.get(macro.args,"eventParam")]

[h: spellName = json.get(oEventParam,"spellName")]

[h: sMsg = ""]
[h: sElemento = upper(getSpellElement(source,spellName))]
[h, if(sElemento != "FUOCO" && sElemento != "FISICO"), code:{
	[addSpellStartData(source,"Mod_Danno_Out",-0.25)]
	[sThisSpell = "FormaLavica"]
	[sMsg = strformat("L'effetto di %s infligge una penalità di -25 MDI.",fetchSpellProp(sThisSpell,"nome_decorativo"))]
}]

[h: macro.return = sMsg]
