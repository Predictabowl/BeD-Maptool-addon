[h: oToken = arg(0)]
[h: sDialog = "PannelloAbilita"]


[h: sGruppoPreferenze = "Dialog_Abilita_Classe"]
[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 350]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 350]

[h: switchToken(oToken)]
[h: lSize = setStrProp("","width",iLarg)]
[h: lSize = setStrProp(lSize,"height",iAltezza)]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode",oToken,sThemePreferenze)]

[frame5(sDialog, strformat("temporary=0; size=%{lSize}; scrollreset=0; value=%{oToken}")):{
<html>
<head>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellsCssLink.html")]
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/ClassSkills.css?cachelib=false">
	<title>[r: getName(oToken)] - Abilità di Classe</title> 
</head>
<body class="[r, if(bLightMode == 1): 'light-mode']" data-tokenid="[r: oToken]">
	<form id="formAttivaAbilita" method="json" action="[r:macroLinkText("gui/executeAttivaAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<input type="hidden" id="var-input" name="comando" value =""/>
		<input type="hidden" id="idAbilitaAttivata" name="libAbilita" value =""/>		
		<input type="hidden" name="token" value ="[r:oToken]"/>
	</form>
	<div class="grimoire-grid-container" id="skillPeculiariGrid">
		[macro("class_skills/getAbilitaClasseNormali@this"): json.append(oToken,"[PECULIARE]")]
		[h: lAbilita =  macro.return]
		[r, foreach(sAbilita, lAbilita, ""), code:{
			[r, macro("gui/CompileClassSkillCard@this"): json.append(oToken, sAbilita)]
		}]
	</div>
	<div class="grimoire-grid-container" id="skillAttiveGrid">
		[macro("class_skills/getAbilitaClasseNormali@this"): json.append(oToken,"[ATTIVA]")]
		[h: lAbilita =  macro.return]
		[r, foreach(sAbilita, lAbilita, ""), code:{
			[r, macro("gui/CompileClassSkillCard@this"): json.append(oToken, sAbilita)]
		}]
	</div>
	[r, macro("gui/buildHeroicSkillsPanel@this"): oToken]

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/ClassSkills.js?cachelib=false" defer></script>
</body>
</html>
}]
