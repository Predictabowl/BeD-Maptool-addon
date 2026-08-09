[h: source = arg(0)]

[h:sNomeAb = "RitualeOscuro"]

[macro("powers/getAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return < 1), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Attivazione FALLITA per mancanza di Frammenti d'anima")]
	[return(0,1)]
}]

[h: switchToken(source)]
[h: Mod_Cura_Out = Mod_Cura_Out + 0.25]
[h: appendMessaggio(source,"strAbilitaAttivata","+25 MCG")]
[macro("powers/modAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,-1)]

[h: macro.return = 0]