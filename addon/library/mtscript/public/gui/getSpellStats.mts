<!-- DEPRECATED -->
[h: oToken = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[h: oCache = getDaCache(oToken,"SpellStats")]
[h, if(!json.isEmpty(oCache)), code:{
	[oSpellStat = json.get(oCache,spellName)]
	[if(!json.isEmpty(oSpellStat)): return(0,oSpellStat)]
}]

[h: oParams = json.set("","source",oToken,"spellName",spellName,"critRes",0)] 
[h, macro("powers/getSpellPrice@this"): oParams]
[h: iPA = json.get(macro.return, "PA")]
[h: iMana = json.get(macro.return, "mana")]
[h: iPF = json.get(macro.return, "PF")]
[h: iPP = json.get(macro.return, "PP")]
[h: iMM = json.get(macro.return, "MM")]
[h: iTempo = getSpellTime(oParams)]

[h: sPP = strformat("<span title='PP' style='cursor:progress'>%s</span>", iPP)]

[h, if(iPA > 0): sPP = strformat("<span class='azioneFont' style='cursor:progress' title='PA'>%d+</span>%s",iPA, sPP)]
[h, if(iMM > 0): sPP = strformat("%s<span class='mmFont' style='cursor:progress' title='MM'>+%d</span>", sPP, iMM)]

[macro("powers/getMantPP@this"): oParams]
[if(macro.return>0): sPP = strformat("%{sPP} <span title='Mantenimento' style='cursor: progress;'>†%{macro.return}</span>")]

[macro("powers/getMantMana@this"): oParams]
[if(macro.return>0): iMana= strformat("%{iMana} <span title='Mantenimento' style='cursor: progress;'>†%{macro.return}</span>")]

[macro("powers/getMantPF@this"): oParams]
[if(macro.return>0): iPF = strformat("%{iPF} <span title='Mantenimento' style='cursor: progress;'>†%{macro.return}</span>")]
		

[h: jReturn = json.append(iMana,iPF,sPP,iTempo)]
[H: oCache = json.set(oCache,spellName,jReturn)]
[h: setInCache(oToken,"SpellStats", oCache)]
[h: macro.return = jReturn]