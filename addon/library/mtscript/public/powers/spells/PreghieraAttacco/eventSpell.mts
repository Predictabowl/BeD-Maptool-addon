[h: source = json.get(macro.args,"source")]

[h: iDado = roll(1,100)]
[h: nomeFluff = fetchSpellProp("PreghieraAttacco","nome_decorativo")]

[h: im = getImage("PreghieraAttacco")]
[h: msg = "<br><img src='"+ im+"' width='25' height='25' /> "]
[h: msg =msg+strformat(" %{nomeFluff} (20%) 1d100 = %{iDado}")]

[h, if(iDado > 80), code:{
	[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,"Mod_Danno_Out",0.5)]
	[h: msg = msg+strformat(" Successo! (+50% Danno)")]
};{
	[h: msg = msg+strformat(" Fallimento.")]
}]

[h: macro.return = msg]