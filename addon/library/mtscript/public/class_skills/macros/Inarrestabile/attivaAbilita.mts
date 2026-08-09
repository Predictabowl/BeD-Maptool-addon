[h: oToken = arg(0)]

[h: sNomeAb = "Inarrestabile"]
[h: switchToken(oToken)]
<!-- Qua vanno messi gli effetti in base al livello delle varie abilità -->
[h, macro(buildClassSkillMacroName("Inarrestabile","calcBonus")): oToken]
[h: iMDR = macro.return]
[h: Mod_Danno_In = Mod_Danno_In + (iMDR * 0.01)]

[h: appendMessaggio(oToken,"strAbilitaAttivata",strformat("%+d MDR", iMDR))]
[h: macro.return = 0]
