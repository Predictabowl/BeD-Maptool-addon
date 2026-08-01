[h: target = macro.args]

[macro("getAbilitaEroiche@Lib:AbilitaClasse"): target]
[h: lAbilita =  macro.return]

[h, if(json.isEmpty(lAbilita)): return(0,"")]

[h: iHeroicBarMax = 250]
[h: fHBPerc = getPuntiEroe(target)/1000]
[h, if(fHBPerc < 1): sGlow=""; sGlow="heroicGlow"]
[h: iHeroicBar = floor(fHBPerc*iHeroicBarMax)]

[h: sHeroicBar = strformat("
	<div style='display: grid; grid-template-columns: auto; justify-content: center; margin-top: 15px; gap: 5px;'>
		<div>
			<div class='heroicBarBG %{sGlow}' style='width:%{iHeroicBarMax}px;'>
				<div class='heroicBar' style='width:%{iHeroicBar}px;'>Abilità&nbsp;Eroica</div>
			</div>
		</div>
	</div>")]
[h: return = strformat("<hr/>%s<table class='centerNoCollapse' ><tr class='genericTable'>", sHeroicBar)]

[h: classType="evenRow"]
[h: tabella = ""]
[h: sRowClass ="oddRow"]
[h, foreach(item, lAbilita), CODE:{
	[h: return = strformat("%{return}<tr class='%{sRowClass} spellFont'>")]
	[macro("gui/rigaTabAbilita@this"): json.append(target,item)]
	[h: return = strformat("%{return}%{macro.return}</tr>")]
	[if(sRowClass=="evenRow"): sRowClass="oddRow"; sRowClass="evenRow"]
}]
[h: return = return + "</table>"]

[h: macro.return = return]