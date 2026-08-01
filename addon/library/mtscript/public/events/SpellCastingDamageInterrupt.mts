[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellNameAtt")]
[h: oEventParam = json.get(macro.args,"eventParam")]

[h: iDanno = json.get(oEventParam,"danno")]
[h: sSpellInCast = getSpellInCast(source)]
[h, if(sSpellInCast == 0), code:{
	[macro("events/eventUninstaller@this"): json.append(source,"On_Damaged","SpellCastingDamageInterrupt")]
	[return(0,0)]
}]
[h: bFlag = getOverride(source,"potereNonInterrompibile")]

[h: sMsg = ""]
[h, if(iDanno > 0 && !bFlag), code:{

	[macro("powers/rollConcentrazione@this"): json.append(target,source)]
	[h: bConc = json.get(macro.return,0)]
	[sMsg = popMessaggio(source,"msgRollConcentrazione")]

	[h, if(bConc), code:{
		[sMsg = strformat("Tiro perturbazione potere su %s: <span title='%{sMsg}' style='font-style:italic'>Fallito</span>",getName(source))]
	};{
		[macro("forzaInterrompiAzione@Lib:TokenMacros"): json.append(source,sSpellInCast)]	
		[nomeDec = getLibProperty("nome_decorativo",sSpellInCast)]
		[sMsg = strformat("Il potere %s di %s  viene <span title='%{sMsg}' style='font-style:italic'>Interrotto</span>",nomeDec,getName(source))]
	}]
}]

[macro("events/eventUninstaller@this"): json.append(source,"On_Damaged","SpellCastingDamageInterrupt")]

[h: macro.return = sMsg]
